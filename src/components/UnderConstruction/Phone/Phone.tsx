import * as React from "react"
import * as styles from "./Phone.module.css"
import { StaticImage } from "gatsby-plugin-image"

type PhoneProps = {
  children?: React.ReactNode
}

export const Phone = ({ children }: PhoneProps) => {
  return <div className={styles.phoneContainer}>
    <StaticImage className={styles.phone} src="../../../images/phone-outline.png" alt="Phone" transformOptions={{ fit: "contain" }} />
    <div className={styles.phoneContent}>{children}</div>
  </div>
}