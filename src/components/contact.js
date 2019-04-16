import React from "react"
import styled from "styled-components";

const Contact = () => {
  const myHandler = (e) => {
    const button = e.target;
    const span = e.target.nextSibling;
    button.style.display = 'none';
    span.style.display = 'block';
  }
  return (
    <StyledSection id="contact" className="uk-section background-primary uk-light">
      <div className="uk-container uk-text-center">
        <button onClick={myHandler}>Contact</button>
        <span>
            <a href="mailto:robin@rtbprojects.com">robin@rtbprojects.com</a>
        </span>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  span {
    display: none;
    margin-top: 2rem;
    position: relative;
    color: rgba(255, 255, 255, 0.5);
  }

  button {
     padding: 1rem;
     background-color: #2d3a4b;
     border-radius: 5px;
     color: white;
     font-size: 1.5rem;
  }

  button:hover {
    cursor: pointer;
    background-color: #576980;
  }

  a {
    text-decoration: underline;
  }
`;

export default Contact
