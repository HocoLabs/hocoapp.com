import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { Waitlist } from "../components/Waitlist"
import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout className={styles.home}>
    <div className={styles.waitlistContainer}>
      <StaticImage
        src="../images/hoco-name-transparent.png"
        alt="Hoco Logo"
        placeholder="blurred"
        className={styles.hocoLogo}
      />
      <div className={styles.waitlist}>
        <Waitlist />
      </div>
    </div>
    <div className={styles.background}>
      <div className={styles.backgroundImage} />
    </div>
  </Layout>
)

export const Head = () => (
  <SEO />
)

export default IndexPage
