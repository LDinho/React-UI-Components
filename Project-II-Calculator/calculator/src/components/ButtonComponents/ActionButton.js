import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { button, buttonStyle } = props;

  return (
    <button className={buttonStyle} >
      {button.value}
    </button>
  )
}

export default ActionButton;
