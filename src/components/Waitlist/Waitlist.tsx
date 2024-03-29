
import { Button, Card, CardContent, Input, Typography } from "@material-ui/core"
import * as React from "react"
import * as styles from "./Waitlist.module.css"

export const Waitlist = () => {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState<{ [key: string]: any } | null>(null)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setResponse(null)

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

  const responseDisplay = !!response
    ? <Typography variant="caption" color={response.error ? "error" : "textPrimary"}>{response.error || response.message}</Typography>
    : null

  return (
    <Card className={styles.waitlist}>
      <CardContent>
        <Typography>Join the waitlist for early access!</Typography>
        <div className={styles.waitlistInput}>
          <Input onChange={(e) => setEmail(e.target.value)} value={email} disabled={loading} placeholder="Email" />
          <Button color="primary" variant="contained" onClick={onSubmit} disabled={email.trim().length === 0 || loading}>Join</Button>
        </div>
        {responseDisplay}
      </CardContent>
    </Card>
  )
}