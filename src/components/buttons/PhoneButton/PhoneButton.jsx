import React from 'react';

import styles from './phoneButton.module.css';

const PhoneButton = () => {
  const _phoneClick = () => {
    const phoneNumber = '+37493234061';
    window.open(`tel:${phoneNumber}`, '_self');
  };
  return (
    <div className={styles.phoneContainer}>
    <button className={styles.phoneButton} onClick={_phoneClick}>
        <img src='../assets/headers/menu/phoneIcon.svg' alt='phoneButton'/>
    </button>
    </div>
  )
}

export default PhoneButton;
