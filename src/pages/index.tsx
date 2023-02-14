import { Button, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { UnderConstruction } from "../components/UnderConstruction"
import { Waitlist } from "../components/Waitlist"
import * as styles from "./index.module.css"
import HocoLogo from "../images/hoco-name-transparent.png"
import { Headline } from "../components/Headline"

const IndexPage = () => (
  <Layout className={styles.home}>
    <div className={styles.waitlistContainer}>
      <img className={styles.hocoLogo} src={HocoLogo} />
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
