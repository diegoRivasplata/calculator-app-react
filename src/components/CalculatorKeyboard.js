import React from 'react';
import keys from '../data/Keys';
import styles from './CalculatorKeyboard.module.css';

const CalculatorKeyboard = (props) => {

  const pressKeyHandler = (event) => {
    props.onPressKey(event.target.innerText);
  };

  return (
    <section style={{height: '65%'}}>
      <ul className={`${styles.keyboard} ${styles[props.className]}`}>
        {keys.map((key) => {
          return (
            <li
              key={key}
              className={ 
                key === 'RESET'
                  ? `${styles['special-key']} ${styles['reset-key']}`
                  : key === '='
                  ? `${styles['equal-key']}`
                  : key === 'DEL'
                  ? styles['special-key']
                  : styles.regular
              }
              onClick={pressKeyHandler}
            >
              <p>{key}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CalculatorKeyboard;
