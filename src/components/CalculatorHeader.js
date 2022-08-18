import React from 'react';
import Toggle from './UI/Toggle';

import styles from './CalculatorHeader.module.css'

const CalculatorHeader = (props) => {
  const changeToggleHandler = (toggleValue) => {
    props.onToggleChange(toggleValue);
  }
  return (
    <section className={`${styles.header} ${styles[props.className]}`}>
      <h2>calc</h2>
      <div className={styles['theme-toggle']}>
        <h3>THEME</h3>
        <Toggle className={props.className} onChangeToggle={changeToggleHandler}/>
      </div>
    </section>
  )
}

export default CalculatorHeader;