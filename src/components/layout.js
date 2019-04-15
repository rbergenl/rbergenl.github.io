/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import Performance from "./performance"

import Header from "./header"
import Footer from "./footer"

import 'uikit/dist/css/uikit.css';
import "./layout.css"

// <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" as="style" onload="this.onload=null;this.rel=&quot;stylesheet&quot;"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js"></script>
if (typeof UIkit.use === 'function') UIkit.use(Icons);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Performance />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
