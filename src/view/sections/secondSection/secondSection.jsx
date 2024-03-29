import React from 'react';

import Text from './components/text/text';
import Title from './components/title/title';
import AnimatedImage from './components/animatedImage/animatedImage';

import useMobile from '../../../hooks/useMobile';

import BackgrounImage from '../fourthSection/components/backgroundImage/backgrounImage';

import styles from './secondSection.module.css';


const SecondSection = () => {
 const {isMobile} = useMobile();

  return (
    <section className={styles.mainContainer}>
      <div className={styles.titleTextContainer}>
        <Title />
        <Text />
      </div>
      <AnimatedImage isMobile={isMobile} />
      {isMobile &&
        <img
          alt='mobileBackground'
          className={styles.backgroundImageMobile}
          src='../assets/sections/secondSection/backgroundMobile.svg'
        />}
      <img src='../assets/sections/fourthSection/background.svg' alt='background' className={styles.background}/>
    </section>
  )
}


export default SecondSection;