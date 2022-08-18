import React, { useState, useEffect } from 'react';

import styles from './Toggle.module.css';

const Toggle = (props) => {
  const [toggleValue, setToggleValue] = useState(1);

  const toggleHandler = () => {
    if (+toggleValue === 3) {
      setToggleValue(1);
      return;
    }
    setToggleValue((prevState) => prevState + 1);
  };

  useEffect(()=>{
    props.onChangeToggle(toggleValue);
  },[props, toggleValue])

  return (
    <div>
      <div className={styles.values}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div
        className={`${styles['toggle-background']} ${styles[props.className]}`}
        onClick={toggleHandler}
      >
        <div className={`${styles['toggle']} ${styles[props.className]}`} style={{
          left:
            toggleValue === 1
              ? '8%'
              : toggleValue === 2
              ? '37%'
              : '65%',
        }}></div>
      </div>
    </div>
  );
};

export default Toggle;
