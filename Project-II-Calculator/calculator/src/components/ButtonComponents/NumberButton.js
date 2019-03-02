import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { button } = props;

  const buttonStyleWidth = 'number-button';

  const buttonStyleColor = button.type === 'operator'
    ? 'number-button btn-color' : buttonStyleWidth;

  return (
    <button className={buttonStyleWidth && buttonStyleColor} >
      {button.value}
    </button>
  )
}

export default NumberButton;
