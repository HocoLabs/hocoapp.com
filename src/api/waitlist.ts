import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from "google-spreadsheet"

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const sendSlackMessage = async (message: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`SLACK: ${message}`)
  } else {
    const url = `https://hooks.slack.com/services/${process.env.WAITLIST_SLACK_WEBHOOK}`

    await fetch(url, {
      method: `POST`,
      headers: {
        'Content-type': `application/json`,
      },
      body: JSON.stringify({ text: message })
    })
  }
}

interface WaitlistBody {
  email: string
}

export default async function handler(
  req: GatsbyFunctionRequest<WaitlistBody>,
  res: GatsbyFunctionResponse
) {
  if (!req.body.email || !validateEmail(req.body.email)) {
    return res.status(422).json({ success: false, error: "Email is not valid" })
  }

  const email = req.body.email.toLowerCase().trim()

  try {
    const doc = new GoogleSpreadsheet(process.env.WAITLIST_ID)
    await doc.useServiceAccountAuth({
      "type": "service_account",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "project_id": process.env.WAITLIST_AUTH_PROJECT_ID,
      "private_key_id": process.env.WAITLIST_AUTH_KEY_ID,
      "private_key": process.env.WAITLIST_AUTH_KEY,
      "client_email": process.env.WAITLIST_AUTH_CLIENT_EMAIL,
      "client_id": process.env.WAITLIST_AUTH_CLIENT_ID,
      "client_x509_cert_url": process.env.WAITLIST_AUTH_CLIENT_CERT_URL,
    })
    await doc.loadInfo()

    const sheets: { [key: string]: GoogleSpreadsheetWorksheet } = doc.sheetsById
    let waitlist = Object.values(sheets).find(s => /^\'?input\'?$/.test(s.a1SheetName.toLowerCase()))

    if (!waitlist) {
      const error = "Could not find waitlist resource"
      await sendSlackMessage(`ERROR: ${error}`)
      res.status(500).json({ success: false, error })
      return
    }

    for (const row of await waitlist.getRows()) {
      // @ts-ignore
      const rowEmail = row.email

      if (email && rowEmail.trim().toLowerCase() === email) {
        return res.status(422).json({ success: false, error: "Email is already on the waitlist" })
      }
    }

    const gsheetsStart = new Date("12/30/1899");
    const today = new Date();

    // @ts-ignore
    const daysSince1900 = (today - gsheetsStart) / (1000 * 60 * 60 * 24)

    const data = {
      timestamp: daysSince1900,
      email: req.body.email.trim(),
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`SHEET: ${JSON.stringify(data)}`)
    } else {
      await waitlist.addRow(data)
    }

    await sendSlackMessage(`\`${req.body.email}\` joined the waitlist!`)
    res.status(200).json({ success: true })
  } catch (e) {
    const error = e.toString()
    await sendSlackMessage(`ERROR: ${error}`)
    res.status(500).json({ success: false, error })
  }
}