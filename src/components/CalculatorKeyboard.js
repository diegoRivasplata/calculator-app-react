import React from 'react';

import styles from './CalculatorKeyboard.module.css';

const CalculatorKeyboard = (props) => {
  const pressKeyHandler = (event) => {
    props.onPressKey(event.target.innerText);
  }

  return (
    <div className={styles.keyboard}>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>7</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>8</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>9</p>
      </div>
      <div className={styles.blue} onClick={pressKeyHandler}>
        <p>DEL</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>4</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>5</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>6</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>+</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>1</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>2</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>3</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>-</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>.</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>0</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>/</p>
      </div>
      <div className={styles.regular} onClick={pressKeyHandler}>
        <p>*</p>
      </div>
      <div className={`${styles['reset-key']} ${styles.blue}`} onClick={pressKeyHandler}>
        <p>RESET</p>
      </div>
      <div className={`${styles['equal-key']} ${styles.red}`} onClick={pressKeyHandler}>
        <p>=</p>
      </div>
    </div>
  );
};

export default CalculatorKeyboard;
