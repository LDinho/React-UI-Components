import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { button } = props;

  return (
    <button className="number-button btn-width" >
      {button.value}
    </button>
  )
}

export default ActionButton;
