import React from 'react'
import styled from 'styled-components';

//

const Usps = ({ usps }) => (
  <Wrapper>
    <section id="usps" className="uk-section uk-section-muted">
      <div className="uk-container uk-text-center">
        <div className="uk-grid uk-child-width-1-3@m uk-text-center">
          {usps.map(usp => (
            <div key={usp.title} className="uk-animation-toggle">
              <div className="usp-icon uk-box-shadow-small uk-border-circle uk-animation-scale-up">
                <span data-uk-icon={"icon: " + usp.icon + "; ratio: 4"}></span>
              </div>
              <h4>{usp.title}</h4>
              <ul className="uk-list">
                {usp.list.map(text =>
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
    </section>
  </Wrapper>
)

const Wrapper = styled.div`
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

export default Usps;
