import React from 'react';
import './CalculatorContainer.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton'

const buttons = [
  {
    id: 1,
    type: 'action',
    buttonType: 'action',
    value: 'clear',
  },
  {
    id: 2,
    type: 'operator',
    value: '\u00F7',
  },
  {
    id: 3,
    type: 'number',
    value: '7',
  },
  {
    id: 4,
    type: 'number',
    value: '8',
  },
  {
    id: 5,
    type: 'number',
    value: '9',
  },
  {
    id: 6,
    type: 'operator',
    value: '\u00D7',
  },
  {
    id: 7,
    type: 'number',
    value: '4',
  },
  {
    id: 8,
    type: 'number',
    value: '5',
  },
  {
    id: 9,
    type: 'number',
    value: '6',
  },
  {
    id: 10,
    type: 'operator',
    value: '\u2212',
  },
  {
    id: 11,
    type: 'number',
    value: '1',
  },
  {
    id: 12,
    type: 'number',
    value: '2',
  },
  {
    id: 13,
    type: 'number',
    value: '3',
  },
  {
    id: 14,
    type: 'operator',
    value: '+',
  },
  {
    id: 15,
    type: 'number',
    buttonType: 'action',
    value: '0',
  },
  {
    id: 16,
    type: 'operator',
    value: '=',
  },
]

function CalculatorContainer() {
  return (
      <div className="calc-wrapper">
        <CalculatorDisplay />

        {buttons.map((button) => {
          return button.buttonType === 'action' ?
            <ActionButton button={button} key={button.id} />
            :
            <NumberButton button={button} key={button.id} />
        })}

      </div>
  )
}

export default CalculatorContainer;
