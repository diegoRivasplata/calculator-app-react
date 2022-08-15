import React from 'react';
import Toggle from './UI/Toggle';

import styles from './CalculatorHeader.module.css'

const CalculatorHeader = () => {
  return (
    <div className={styles.header}>
      <h2>calc</h2>
      <div className={styles['theme-toggle']}>
        <h3>THEME</h3>
        <Toggle/>
      </div>
    </div>
  )
}

export default CalculatorHeader;