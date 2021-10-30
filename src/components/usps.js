import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"

const Usps = ({ data }) => (
  <StyledSection id="usps" className="uk-section uk-section-muted">
    <div className="uk-container uk-text-center">
      <div className="uk-grid uk-child-width-1-3@m uk-text-center">
        {data.edges.map(edge => (
          <div key={edge.node.title} className="uk-animation-toggle">
            <div className="usp-icon uk-box-shadow-small uk-border-circle uk-animation-scale-up">
              <span data-uk-icon={"icon: " + edge.node.icon + "; ratio: 4"}></span>
            </div>
            <h4>{edge.node.title}</h4>
            <ul className="uk-list">
              {edge.node.list.map(text =>
                <li key={text}>
                  <span data-uk-icon="icon: check; ratio: 1" className="uk-margin-small-right"></span>
                  {text}
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </StyledSection>
)

const StyledSection = styled.section`
  .usp-icon {
    height: 120px;
    width: 120px;
    display: inline-block;
  }
  .usp-icon [data-uk-icon] {
    margin-top: 20px;
  }
  li .uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
    stroke: green;
    stroke-width: 2;
  }
`;

const MyUsps = props => (
  <StaticQuery
    query={graphql`
      query {
        allUspsJson {
          edges {
            node {
              list
              title
              icon
            }
          }
        }
      }
    `}
    render={data => <Usps data={data.allUspsJson} {...props} />}
  />
);

export default MyUsps;
