import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { button } = props;

  let buttonStyleWidth = button.value === 'clear' || button.value === '0'
    ? 'number-button btn-width' : 'number-button';

  let buttonStyleColor = button.type === 'operator'
    ? 'number-button btn-color' : buttonStyleWidth;

  return (
    <button className={buttonStyleWidth && buttonStyleColor} >
      {button.value }
    </button>
  )
}

export default NumberButton;
