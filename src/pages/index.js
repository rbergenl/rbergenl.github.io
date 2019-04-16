import React from "react"

import LayoutDefault from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"
import Usps from '../components/usps';

const IndexPage = () => (
  <LayoutDefault>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Usps />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </LayoutDefault>
)

export default IndexPage
