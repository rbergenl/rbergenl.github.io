import React from "react"
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby"

const Testimonials = ({ data }) => (
  <StyledSection id="testimonials" className="uk-section uk-section-muted">
    <div className="uk-container uk-text-center uk-container-xsmall">
      <h2>Testimonials</h2>
      {data.edges.map(edge => (
        <div key={edge.node.name} className="uk-text-center uk-margin-large-bottom">
          <div className="uk-position-relative message">
              {edge.node.text}
          </div>
          <p>{edge.node.name}</p>
        </div>
      ))}
    </div>
  </StyledSection>
)

const StyledSection = styled.section`
  .message {
      padding: 20px;
      color: #666;
      font-size: 16px;
      background: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 6px;
  }

  .message:after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -15px;
      margin: auto;
      border-left: 18px solid transparent;
      border-right: 18px solid transparent;
      border-top: 21px solid #fff;
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allTestimonialsJson {
          edges {
            node {
              text
              name
              order
            }
          }
        }
      }
    `}
    render={data => <Testimonials data={data.allTestimonialsJson} {...props} />}
  />
);
