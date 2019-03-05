import React from 'react';
import './Display.css';

function CalculatorDisplay() {
  return (
    <div className="screen">
      <input className="input" type="text" value="0" readOnly />
    </div>

  )
}

export default CalculatorDisplay;
