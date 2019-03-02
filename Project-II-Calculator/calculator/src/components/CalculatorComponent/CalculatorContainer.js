import React from 'react';
import './CalculatorContainer.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';

const data = [
  {
    id: 1,
    type: 'action',
    value: 'clear',
  },
  {
    id: 2,
    type: 'action',
    value: 'divide',
  },
  {
    id: 3,
    type: 'number',
    value: '7',
  },
  {
    id: 4,
    type: 'action',
    value: '8',
  },
  {
    id: 5,
    type: 'action',
    value: '9',
  },
  {
    id: 6,
    type: 'action',
    value: 'multiply',
  },
  {
    id: 7,
    type: 'action',
    value: '4',
  },
  {
    id: 8,
    type: 'action',
    value: '5',
  },
  {
    id: 9,
    type: 'action',
    value: '6',
  },
  {
    id: 10,
    type: 'action',
    value: 'subtract',
  },
  {
    id: 11,
    type: 'action',
    value: '1',
  },
  {
    id: 12,
    type: 'action',
    value: '2',
  },
  {
    id: 13,
    type: 'action',
    value: '3',
  },
  {
    id: 14,
    type: 'action',
    value: 'add',
  },
  {
    id: 15,
    type: 'number',
    value: '0',
  },
  {
    id: 16,
    type: 'action',
    value: 'equal',
  },
]

function CalculatorContainer() {
  return (
      <div className="calc-wrapper">
        <CalculatorDisplay />

        {data.map((button) => (
          <NumberButton button={button} key={button.id} />
        ))}

      </div>
  )
}

export default CalculatorContainer;
