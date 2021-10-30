import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Demos = ({ data }) => {
  const { headings } = data.edges[0].node // only expect one edge
  let framework
  let project_url
  const demos = headings
    .map((heading, index) => {
      // only process heading 4
      if (heading.depth === 2) return (framework = heading.value)
      if (heading.depth === 3) return (project_url = heading.value)
      return {
        framework: framework,
        project_url: project_url,
        description: heading.value,
      }
    })
    .filter((demo) => typeof demo !== "string") // only keep the ones which are not a string but the object

  return (
    <section id="demos" className="uk-section">
      <div className="uk-container uk-text-center">
        <h2>Demos</h2>
        <div className="uk-table uk-table-responsive">
          <table className="uk-table uk-table-striped uk-text-left">
            <thead>
              <tr>
                <th>Framework</th>
                <th className="uk-table-expand">Project</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {demos.map((demo) => (
                <tr key={demo.description}>
                  <td>{demo.framework}</td>
                  <td>
                    <a
                      href={demo.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {demo.project_url}
                    </a>
                  </td>
                  <td>{demo.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "My Demos" } } }
        ) {
          edges {
            node {
              headings {
                depth
                value
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => <Demos data={data.allMarkdownRemark} {...props} />}
  />
)
