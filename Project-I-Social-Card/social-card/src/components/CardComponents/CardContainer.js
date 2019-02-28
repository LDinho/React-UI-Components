import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  return (
    <a className="decoration" href="https://www.reactjs.org" target="#">
      <div className="card-container">
        <div className="card-wrapper">
          <div className="banner-wrapper">
            <CardBanner />
          </div>

          <div className="card-content-wrapper">
            <CardContent />
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardContainer;
