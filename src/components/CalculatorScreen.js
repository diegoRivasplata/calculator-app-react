import React from 'react';

import styles from './CalculatorScreen.module.css'

const CalculatorScreen = (props) => {
  let integerPart = '';
  let decimalPart = '';
  //let record = props.record;

  if(props.value !== '0' && props.value.length !== 0){
    if (!Number.isFinite(parseFloat(props.value))){
      console.log(props.value);
      console.log(parseFloat(props.value));
      integerPart = 'No se puede dividir';
      //record = ' ';
    }
    else{
      const cads = props.value.split('.');
      integerPart = cads[0];
      integerPart = integerPart.split('').reverse().join('').replace(/(.{3})/g,"$1,").split('').reverse().join('');
      if (integerPart.startsWith(',')){
        integerPart = integerPart.slice(1);
      }
      if (props.value.includes('.')){
        decimalPart =`.${cads[1]}` ;
      }
    }
  }
  else{
    integerPart = '0';
  }

  const stringToShow = integerPart + (decimalPart.length === 0 ? '' : decimalPart);

  return (
    <section className={`${styles.screen} ${styles[props.className]}`}>
      {/* <h4 className={styles.record}>{record.length === 1 ? '' : props.record}</h4> */}
      <input type='text' value={stringToShow} disabled />
    </section>
  )
}

export default CalculatorScreen;