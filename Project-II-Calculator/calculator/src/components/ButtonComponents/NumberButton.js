import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { button } = props;
  const buttonStyle = button.value === 'clear' || button.value === '0'
    ? 'number-button btn-width' : 'number-button';

  return (
    <button className={buttonStyle} >
      {button.value }
    </button>
  )
}

export default NumberButton;
