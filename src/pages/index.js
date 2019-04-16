import React from "react"

import LayoutDefault from "../layouts/default"
import SEO from "../components/seo"
import Usps from '../components/usps';
import Projects from '../components/projects'

const IndexPage = () => (
  <LayoutDefault>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Usps />
    <Projects />
  </LayoutDefault>
)

export default IndexPage
