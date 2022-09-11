import * as React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { UnderConstruction } from "../components/UnderConstruction"

const IndexPage = () => (
  <Layout>
    <UnderConstruction />
  </Layout>
)

export const Head = () => (
  <SEO title="Home" />
)

export default IndexPage
