import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';;

const Projects = ({ data }) => (
  <StyledSection id="projects" className="uk-section background-primary to-right uk-light">
    <div className="uk-container uk-text-center">
      <h2 className="uk-heading-divider">Projects</h2>
      <div className="uk-grid uk-child-width-1-1@s uk-child-width-1-3@m uk-text-center">
        {data.edges.map(edge => (
          <div key={edge.node._id} className="uk-margin-top">
            <div data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
              <div className="uk-animation-toggle">
                  <a data-uk-toggle={'target: #' + edge.node._id} className="uk-visible-toggle" href={'#' + edge.node._id} >
                    <div style={{position: 'relative'}}>
                      <GatsbyImage image={edge.node.img_url.childImageSharp.gatsbyImageData} alt={edge.node._id} />
                      <div className="uk-light uk-overlay uk-overlay-primary uk-position-center uk-hidden-hover uk-animation-fade uk-animation-fast">
                          <p className="uk-animation-slide-bottom-small">{edge.node.title}</p>
                      </div>
                    </div>
                  </a>
              </div>
            </div>
            <ProjectModal project={edge.node} />
          </div>
        ))}
      </div>
    </div>
  </StyledSection>
)

const ProjectModal = ({ project }) => (
  <StyledModal id={project._id} data-uk-modal>
    <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" aria-label="close-modal" type="button" data-uk-close></button>
        <div className="uk-modal-header">
          {project.company &&
            <h2 className="uk-modal-title">{project.company}</h2>
          }
        </div>
        <div className="uk-modal-body" data-uk-overflow-auto>
          <ul className="uk-list">
            {project.checkmarks.map(text =>
              <li key={text}>
                <span data-uk-icon="icon: check; ratio: 1" className="uk-margin-small-right"></span>
                {text}
              </li>
            )}
          </ul>
          {project.paragraphs && project.paragraphs.map(paragraph => (
            <blockquote key={paragraph.footer} cite="#">
                <p className="uk-margin-small-bottom">{paragraph.text}</p>
                <footer>{paragraph.footer}</footer>
            </blockquote>
          ))
          }
          <div className="uk-text-center uk-margin-top">[end]</div>
        </div>
    </div>
  </StyledModal>
)

const StyledModal = styled.div`
p {
  font-style: normal
}
li .uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
  stroke: green;
  stroke-width: 2;
}
`;

const StyledSection = styled.section`
`;

const MyProjects = props => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              _id
              title
              company
              checkmarks
              img_url {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              paragraphs {
                text
                footer
              }
            }
          }
        }
      }
    `}
    render={data => <Projects data={data.allProjectsJson} {...props} />}
  />
);

export default MyProjects;
