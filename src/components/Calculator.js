import React, { useState } from 'react';
import CalculatorHeader from './CalculatorHeader';
import CalculatorScreen from './CalculatorScreen';
import CalculatorKeyboard from './CalculatorKeyboard';

import styles from './Calculator.module.css';

let isReplacing = true;

const Calculator = () => {
  const [theme, setTheme] = useState('theme-1');
  const [storedValue, setStoredValue] = useState(0);
  const [value, setValue] = useState('0');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const reset = () => {
    setValue('0');
    setStoredValue(0);
    setOperation('');
    setResult(null);
    isReplacing = true;
  };

  const operate = (numberA, numberB, operation) => {
    let result = 0;
    switch (operation) {
      case '+':
        result = numberA + numberB;
        break;
      case '-':
        result = numberA - numberB;
        break;
      case '/':
        result = numberA / numberB;
        break;
      case '*':
        result = numberA * numberB;
        break;
      default:
    }
    return parseFloat(result);
  };

  const pressKeyHandler = (key) => {
    switch (key) {
      case 'RESET':
        reset();
        break;
      case 'DEL':
        if (
          value.slice(0, -1).endsWith('.') ||
          value.slice(0, -1).endsWith('-')
        ) {
          setValue((prevState) => prevState.slice(0, -2));
          break;
        }
        if (result !== null) {
          reset();
        }
        setValue((prevState) => prevState.slice(0, -1));
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        setStoredValue(parseFloat(value));
        setOperation(key);
        setResult(null);
        isReplacing = true;
        break;
      case '=':
        const operationResult = operate(
          storedValue,
          parseFloat(value),
          operation
        );
        setStoredValue(parseFloat(value));
        setResult(operationResult);
        setValue(operationResult.toString());
        isReplacing = true;
        break;
      case '.':
        if (value.includes('.') || result !== null) {
          break;
        }
        setValue((prevState) => prevState + key);
        break;
      default:
        if (result === null) {
          if (isReplacing) {
            setValue(key);
            isReplacing = false;
          } else {
            setValue((prevState) => prevState + key);
          }
        }
    }
  };

  const changeToggleHandler = (toggleValue) => {
    const themeClass =
      toggleValue === 1 ? 'theme-1' : toggleValue === 2 ? 'theme-2' : 'theme-3';
    setTheme(themeClass);
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.calculator}>
        <CalculatorHeader
          onToggleChange={changeToggleHandler}
          className={theme}
        ></CalculatorHeader>
        <CalculatorScreen value={value} className={theme}></CalculatorScreen>
        <CalculatorKeyboard
          onPressKey={pressKeyHandler}
          className={theme}
        ></CalculatorKeyboard>
      </div>
    </div>
  );
};

export default Calculator;
