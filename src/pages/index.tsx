import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { HocoSpin } from "../components/UnderConstruction/HocoSpin"
import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.hocoSpin}>
      <HocoSpin />
    </div>
  </Layout>
)

export const Head = () => (
  <SEO title="Home" />
)

export default IndexPage
