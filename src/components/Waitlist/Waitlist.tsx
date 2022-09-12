
import { Button, Card, CardContent, Input, Typography } from "@material-ui/core"
import * as React from "react"
import * as styles from "./Waitlist.module.css"

export const Waitlist = () => {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState({})

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const r = await window
      .fetch(`/api/waitlist`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      .then(res => res.json())

    setLoading(false)
    setResponse(r)
  }

  console.log({ response })

  return (
    <Card className={styles.waitlist}>
      <CardContent>
        <Typography>Join the waitlist for early access to Hoco</Typography>
        <div className={styles.waitlistInput}>
          <Input onChange={(e) => setEmail(e.target.value)} value={email} />
          <Button color="primary" variant="contained" onClick={onSubmit} disabled={email.trim().length === 0 || loading}>Join</Button>
        </div>
      </CardContent>
    </Card>
  )
}