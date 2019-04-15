import React from "react"
import styled from "styled-components";

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <footer>
          <div className="uk-container uk-container-small uk-text-center">
            <ul>
              <li>
                <a href="https://linkedin.com/in/robintenberge" rel="noopener noreferrer" target="_blank" className="uk-icon-button uk-margin-small-right" data-uk-icon="linkedin" aria-label="linkedin"></a>
              </li>
              <li>
                <a href="https://github.com/rbergenl" rel="noopener noreferrer" target="_blank" className="uk-icon-button uk-margin-small-right" data-uk-icon="github" aria-label="github"></a>
              </li>
            </ul>
            <div className="footer_message">© 2019 RTB Projects. All Rights Reserved</div>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  footer {
    padding: 100px 0;
  }
  ul {
    padding-left: 0;
  }
  li {
    display: inline-block;
  }
`;

export default Footer
