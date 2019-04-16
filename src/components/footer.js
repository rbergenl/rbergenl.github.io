import React from "react"
import styled from "styled-components";

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <div className="uk-container uk-container-small uk-text-center">
          <ul>
            <li>
              <a href="https://linkedin.com/in/robintenberge" rel="noopener noreferrer" target="_blank" className="uk-icon-button uk-margin-small-right" data-uk-icon="linkedin" aria-label="linkedin"><span>linkedin</span></a>
            </li>
            <li>
              <a href="https://github.com/rbergenl" rel="noopener noreferrer" target="_blank" className="uk-icon-button uk-margin-small-right" data-uk-icon="github" aria-label="github"><span>github</span></a>
            </li>
          </ul>
          <div className="footer_message">© 2019 RTB Projects. All Rights Reserved</div>
        </div>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.footer`
  padding: 100px 0;
  
  ul {
    padding-left: 0;
  }
  li {
    display: inline-block;
  }
  a span {
   height: 1px;
   width: 1px;
   position: absolute;
   overflow: hidden;
   top: -10px;
  }
`;

export default Footer
