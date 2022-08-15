import React from 'react';

import styles from './CalculatorScreen.module.css'

const CalculatorScreen = (props) => {
  let value = props.value.replace(/(.{3})/g,"$1,");
  if (value.endsWith(',')){
    value = value.slice(0,-1);
  }
  return (
    <div className={styles.screen}>
      <h3>{props.value.length > 0 ? value : '0'}</h3>
    </div>
  )
}

export default CalculatorScreen;