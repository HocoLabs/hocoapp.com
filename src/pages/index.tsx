import { Button, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { UnderConstruction } from "../components/UnderConstruction"
import { Waitlist } from "../components/Waitlist"
import * as styles from "./index.module.css"

import LetterH from "../images/letter-h.png"
import LetterO from "../images/letter-o.png"
import LetterC from "../images/letter-c.png"

const IndexPage = () => (
  <Layout className={styles.home}>
    <div className={styles.waitlistContainer}>
      <div className={styles.headline}>
        <div className={styles.headlineImage}>
          <div className={styles.headlineImageLetters}>
            <img className={styles.headlineImageLetter} src={LetterH} />
            <img className={styles.headlineImageLetter} src={LetterO} />
            <img className={styles.headlineImageLetter} src={LetterC} />
            <img className={styles.headlineImageLetter} src={LetterO} />
          </div>
          <div className={styles.headlineImageBackground} />
        </div>
        <div className={styles.headlineText}>
          <Typography variant="h3">Your home companion</Typography>
        </div>
      </div>
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
  <SEO title="Home" />
)

export default IndexPage
