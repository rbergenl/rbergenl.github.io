import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Certificates = ({ data }) => (
  <StyledSection id="certificates" className="uk-section">
    <div className="uk-container">
      <h2 className="uk-heading-divider uk-text-center">Certificates</h2>
      <div data-uk-slider="autoplay: true; autoplay-interval: 3000">
        <div className="uk-position-relative" tabIndex="-1">
            <div className="uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                {data.edges.map(edge => (
                  <li key={edge.node.title}>
                    <div className="uk-card uk-card-default uk-text-center">
                        <div className="uk-card-media-top">
                            <Img fixed={edge.node.img_url.childImageSharp.fixed} alt={edge.node.title} className="height150" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">{edge.node.title}</h3>
                        </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a className="uk-position-center-left uk-position-small" href="#" rel="noopener nofollow" data-uk-slidenav-previous data-uk-slider-item="previous" aria-label="previous"></a>
            <a className="uk-position-center-right uk-position-small" href="#" rel="noopener nofollow" data-uk-slidenav-next data-uk-slider-item="next" aria-label="next"></a>
        </div>
      </div>
    </div>
  </StyledSection>
)

const StyledSection = styled.section`
  .height150 {
    height: 150px;
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allCertificatesJson {
          edges {
            node {
              title
              img_url {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Certificates data={data.allCertificatesJson} {...props} />}
  />
);
