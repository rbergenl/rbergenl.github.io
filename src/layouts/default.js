/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Performance from "../components/performance"

import Header from "../components/header"
import Footer from "../components/footer"

import 'uikit/dist/css/uikit.css';
import "./default.css"

class LayoutDefault extends React.Component {

  componentDidMount() {
    try {
      this.UIkit = require('uikit/dist/js/uikit')
      this.Icons = require('uikit/dist/js/uikit-icons')
      this.UIkit.use(this.Icons)
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { children } = this.props;
    return (
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
  }
}

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDefault
