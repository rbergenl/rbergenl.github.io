
# Initial Setup
- correct the manifest configuration in gatsby-config.js.
- correct the siteMetadata in gatsby-config.js

# Loading UIKit
- Run `npm install --save uikit`
- Add to ComponentDidMount the lines `this.UIkit = require('uikit/dist/js/uikit'); this.Icons = require('uikit/dist/js/uikit-icons'); this.UIkit.use(this.Icons)` (with regular import Webpack cannot build)

# Styling Components
Use `import styled from 'styled-components';`

# Comply with A11Y
- Using `<a>` with `data-uk-icon` should have no text. Will not comply with `jsx-a11y/anchor-has-content`. To solve it use solution: http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/C7

# Add site data using Graphql
- add data to gatsby-config.js and `import { graphql } from "gatsby"`
- or run `npm install --save gatsby-source-filesystem`
- add the plugin with options to gatsby-config.js
- and to read json files run `npm install --save gatsby-transformer-json`
- add the plugin to gatsby-config.js

# Publish to Github Pages
- Run `npm install --save-dev gh-pages`
- Add to package.json `"deploy": "gatsby build --prefix-paths && gh-pages -d public",`
- Add to gatsby-config the line `pathPrefix: "/rtbprojects-website-gatsby",` (based on path of github pages url)
- In Github, repository settings, set the Github Pages branch to `gh-pages branch`
