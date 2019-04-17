import { Link } from "gatsby";
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import profilePicture from "../images/profile-picture.jpeg";

const Header = ({ siteTitle }) => (
  <StyledHeader className="background-primary uk-light">

    <div id="sticky" data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 150">

      <nav className="uk-navbar-container background-primary" data-uk-navbar>
          <div className="uk-navbar-left">
            <img src={profilePicture} alt="profile" />
            <Link to="/" className="uk-navbar-item uk-logo" href="#">RTB Projects</Link>
          </div>
          <div className="uk-navbar-right uk-visible@m">
              <ul className="uk-navbar-nav">
                  <li><a href="#projects" data-uk-scroll>Projects</a></li>
                  <li><a href="#demos" data-uk-scroll>Demos</a></li>
                  <li><a href="#testimonials" data-uk-scroll>Testimonials</a></li>
                  <li><a href="#certificates" data-uk-scroll>Certificates</a></li>
                  <li><a href="#contact" data-uk-scroll>Contact</a></li>
              </ul>
          </div>
          <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true; flip: true">
              <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                  <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><a href="#projects" data-uk-scroll>Projects</a></li>
                    <li><a href="#demos" data-uk-scroll>Demos</a></li>
                    <li><a href="#testimonials" data-uk-scroll>Testimonials</a></li>
                    <li><a href="#certificates" data-uk-scroll>Certificates</a></li>
                    <li><a href="#contact" data-uk-scroll>Contact</a></li>
                  </ul>
              </div>
          </div>

          <div className="uk-navbar-right uk-hidden@m">
              <a className="uk-navbar-toggle" href="#offcanvas-nav-primary" data-uk-toggle="target: #offcanvas-nav-primary" aria-label="menu">
                  <span data-uk-icon="icon: menu; ratio: 2"></span>
              </a>
          </div>

      </nav>

    </div>

    <div className="uk-container uk-margin-top">
      <h2 className="uk-heading-divider">Hire an experienced Full Stack Web Developer</h2>
      <h5 className="uk-margin-bottom">10+ years working with Frontend, Backend and Cloud technology</h5>
    </div>

  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  text-align: center;

  h5 {
    margin-top: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }
  a:hover {
    cursor: pointer;
  }
  /* override for non transparent background of the navbar */
  .uk-navbar-container:not(.uk-navbar-transparent) {
    background-color: #192130;
  }
  /* hide the image when navbar is sticky */
  .uk-navbar-sticky img {
      display: none;
  }

  .uk-navbar-right {
    margin-right: 25px;
  }

  .uk-navbar-left {
    margin-left: 25px;
  }

  img {
    display: inline-block;
    border-radius: 50%;
    height: 50px;
    margin-block-end: -0.67em;
  }
`;

export default Header
