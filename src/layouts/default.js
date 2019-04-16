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

  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit/dist/js/uikit.min');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  }

  render() {
    const { children } = this.props;

    if (!this.state.ready ) return null;

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
            <main>{children}</main>
            <Footer />
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
