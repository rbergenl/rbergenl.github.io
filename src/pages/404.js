import React from "react"

import LayoutDefault from "../layouts/default"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutDefault>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutDefault>
)

export default NotFoundPage
