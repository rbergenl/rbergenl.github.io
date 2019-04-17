import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Demos = ({ data }) => {
  const { headings } = data.edges[0].node; // only expect one edge
  let framework;
  let title;
  const demos = headings.map((heading, index) => {
    // only process heading 4
    if (heading.depth === 2) return framework = heading.value;
    if (heading.depth === 3) return title = heading.value;
    return {
      framework: framework,
      title: title,
      description: heading.value
    }
  }).filter(demo => typeof demo !== 'string') // only keep the ones which are not a string but the object

  return (
    <section id="demos" className="uk-section">
      <div className="uk-container uk-text-center">
        <h2>Demos</h2>
        <p><a href="https://github.com/rbergenl/my-demos"  rel="noopener noreferrer" target="_blank" aria-label="my-demos">View here</a></p>
        <div className="uk-table uk-table-responsive">
          <table className="uk-table uk-table-striped uk-text-left">
              <thead>
                  <tr>
                      <th>Framework</th>
                      <th className="uk-table-expand">Title</th>
                      <th>Description</th>
                  </tr>
              </thead>
              <tbody>
              {demos.map(demo => (
                <tr key={demo.description}>
                  <td>{demo.framework}</td>
                  <td>{demo.title}</td>
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: {title: {eq: "My Demos"}} }
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
    render={data => <Demos data={data.allMarkdownRemark} {...props} />}
  />
);
