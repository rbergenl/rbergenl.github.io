import React from "react"

import LayoutDefault from "../layouts/default"
import Seo from "../components/seo"
import Usps from '../components/usps';
// import Demos from '../components/demos';
import Projects from '../components/projects'
import Testimonials from '../components/testimonials'
import Certificates from '../components/certificates'
import Contact from '../components/contact'

const IndexPage = () => (
  <LayoutDefault>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Usps />
    <Projects />
    {/* <Demos /> */}
    <Testimonials />
    <Certificates />
    <Contact />
  </LayoutDefault>
)

export default IndexPage
