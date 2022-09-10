import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>As you can see, we're a work in progress!</p>
    <p>Now go do something awesome.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>

    </p>
  </Layout>
)

export const Head = () => (
  <SEO title="Home" />
)

export default IndexPage
