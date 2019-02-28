import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <>
      <h2>Get started with React</h2>
      <p className="card-content">
        React makes it painless to
        create interactive UIs.
        Design simple views for
        each state in your application.
      </p>

        <a className="decoration text-color-light" href="https://www.reactjs.org"
            target="#">
          <p className="card-content">reactjs.org</p>
        </a>

    </>
  )
}

export default CardContent;

