import React from 'react';
import './CalculatorContainer.css';

import buttons from '../../data/buttons_data';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import OperatorButton from '../ButtonComponents/OperatorButton';

function CalculatorContainer() {
  return (
      <div className="calc-wrapper">
        <CalculatorDisplay />

        {buttons.map((button) => {
          const buttonMap = {
            action: <ActionButton button={button} key={button.id} buttonStyle="number-button btn-width"/>,
            operator: <OperatorButton button={button} key={button.id} buttonStyle="number-button btn-color" />,
            number: <NumberButton button={button} key={button.id} buttonStyle="number-button" />
          }

          return buttonMap[button.type] || <NumberButton button={button} key={button.id} />;

          /*
          Alternate ways of using the switch statement:

          A)

          let buttonComponent;

          switch (button.type) {
            case 'action':
              buttonComponent = <ActionButton button={button} key={button.id} />
              break;
            case 'operator':
              buttonComponent = <OperatorButton button={button} key={button.id} />
              break;
            default:
              buttonComponent = <NumberButton button={button} key={button.id} />
          }
          return buttonComponent;

          B)

          switch (button.type) {
            case 'action':
              return <ActionButton button={button} key={button.id} />
            case 'operator':
              return <OperatorButton button={button} key={button.id} />
            default:
              return <NumberButton button={button} key={button.id} />
          }
           */
        })}
      </div>
  )
}

export default CalculatorContainer;
