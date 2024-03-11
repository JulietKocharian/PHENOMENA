import React from 'react';

import styles from './onboarding.module.css'

const Onboarding = () => {
  
  document.body.style.overflow = 'hidden';

  return (
   <div className={styles.container}>
    <h1>PHENOMENA</h1>
    <img src='../assets/headers/animation/headerLeftAnimation1.svg' alt='onboardingImg' className={styles.image}/>
   </div>
  )
}

export default Onboarding;