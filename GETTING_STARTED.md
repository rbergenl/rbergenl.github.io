
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

# Adding Google Fonts
- Run `npm install --save gatsby-plugin-prefetch-google-fonts` and add to gatsby-config.js as per the documentation.
- Set html { font-family: 'Dosis' } in the main css file.

# Read data from Json using Graphql
- add data to gatsby-config.js and `import { graphql } from "gatsby"`
- or run `npm install --save gatsby-source-filesystem`
- add the plugin with options to gatsby-config.js
- and to read json files run `npm install --save gatsby-transformer-json`
- add the plugin to gatsby-config.js

# Read data from Markdown using Graphql
- make sure gatsby-config.js has gatsby-source-filesystem configured to point to a folder with markdown files
- to read markdown files run `npm install --save gatsby-transformer-remark`
- add `gatsby-transformer-remark` to gatsby-config.js
- make sure the markdown file has frontmatter at the top of the file --- title: MyTitle ---


# Add PWA capabilities
- enable `gatsby-plugin-offline` in the gatsby-config.js file.

# Work with Images
- either import directly and use with <img/>
- or add a relative path to json file, and get the data with graphql childImageFluid/Fixed/Resolutions and using gatsby Img.

# Publish to Github Pages
- Run `npm install --save-dev gh-pages`
- Create a User repository with the convention `<username>.github.io`
- Add a file `static/CNAME` which contains the apex domain (rtbprojects.com)
- Add to package.json `"deploy": "gatsby build && gh-pages -d public -b master",`


# Troubleshooting
- manifest.webmanifest has error or 404 and icons not generated. Solution: upgrade gatsby-plugin-manifest to the latest version.
- github pages resets the custom domain. Solution: add a CNAME file.
- the www. subdomain gives privacy error. Solution: in your DNS point www.rtbprojects.com as CNAME to rbergenl.github.io
