import React from "react"

import LayoutDefault from "../layouts/default"
import SEO from "../components/seo"
import Usps from '../components/usps';
import Projects from '../components/projects'
import Certificates from '../components/certificates'
import Contact from '../components/contact'

const IndexPage = () => (
  <LayoutDefault>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Usps />
    <Projects />
    <Certificates />
    <Contact />
  </LayoutDefault>
)

export default IndexPage
