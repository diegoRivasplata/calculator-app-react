import React, { useState } from 'react';

import styles from './Toggle.module.css';

const Toggle = () => {
  const [toggleValue, setToggleValue] = useState(1);

  const toggleHandler = () => {
    if (+toggleValue === 3) {
      setToggleValue(1);
      return;
    }
    setToggleValue((prevState) => prevState + 1);
  };

  return (
    <div>
      <div className={styles.values}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div
        className={styles['toggle-background']}
        onClick={toggleHandler}
      >
        <div className={styles['toggle']} style={{
          transform:
            toggleValue === 1
              ? 'translateX(0px)'
              : toggleValue === 2
              ? 'translateX(14px)'
              : 'translateX(30px)',
        }}></div>
      </div>
    </div>
  );
};

export default Toggle;
