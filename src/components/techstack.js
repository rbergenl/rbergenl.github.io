import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Techstack = ({ data }) => (
  <StyledSection id="techstack" className="uk-section uk-section-muted">
    <div className="uk-container uk-text-center">
      {data.edges.map((edge) => (
        <GatsbyImage
          key={edge.node.name}
          image={
            edge.node.img_url.childImageSharp.gatsbyImageData
          }
          alt={edge.node.name}
          height="75px"
        />
      ))}
    </div>
  </StyledSection>
)

const StyledSection = styled.section`
  img {
    height: 75px;
    width: auto;
    padding: 10px;
  }
`

const MyTechstack = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allTechstackJson {
          edges {
            node {
              name
              img_url {
                childImageSharp {
                  gatsbyImageData(height: 75)
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Techstack data={data.allTechstackJson} {...props} />
    )}
  />
)

export default MyTechstack
