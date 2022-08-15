import React, { useState } from 'react';
import CalculatorHeader from './CalculatorHeader';
import CalculatorScreen from './CalculatorScreen';
import CalculatorKeyboard from './CalculatorKeyboard'

import styles from './Calculator.module.css'

const Calculator = () => {
  const [value, setValue] = useState('')
  const pressKeyHandler = (key) => {
    if (key === 'RESET'){
      setValue('');
      return;
    }
    if (key === 'DEL'){
      setValue(prevState => prevState.slice(0, -1));
      return;
    }
    setValue(prevState => prevState+key);
  }
  return (
    <div className={styles.calculator}>
      <CalculatorHeader></CalculatorHeader>
      <CalculatorScreen value={value}></CalculatorScreen>
      <CalculatorKeyboard onPressKey={pressKeyHandler}></CalculatorKeyboard>
    </div>
  )
}

export default Calculator;