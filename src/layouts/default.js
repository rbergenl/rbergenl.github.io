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

import Performance from "../components/performance"

import Header from "../components/header"
import Footer from "../components/footer"

import 'uikit/dist/css/uikit.css';
import "./default.css"

if (typeof UIkit.use === 'function') UIkit.use(Icons);

const LayoutDefault = ({ children }) => (
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

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDefault
