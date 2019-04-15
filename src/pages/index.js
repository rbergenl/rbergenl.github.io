import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link rel="prefetch stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Dosis" crossorigin="true"/>
      <link rel="preconnect" href="https://firebasestorage.googleapis.com" crossorigin="true"/>
      <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" as="style" onload="this.onload=null;this.rel=&quot;stylesheet&quot;"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js" defer="true"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js" defer="true"></script>
    </Helmet>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
