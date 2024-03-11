import React from 'react';

import Text from './components/text/text';
import Title from './components/title/title';

import useMobile from '../../../hooks/useMobile';
import AnimatedImage from '../../../components/images/AnimatedImage';

import styles from './thirdSection.module.css';

const ThirdSection = () => {

    const { isMobile } = useMobile();

    return (
        <section className={styles.mainContainer}>
            <div className={styles.titleTextContainer}>
                <Title />
                <Text />
            </div>
            <AnimatedImage
                isMobile={isMobile}
                section='thirdSection'
                imageStyle={styles.image}
                imageMobileStyle={styles.imageMobile}
            />
        </section>
    )
}


export default ThirdSection;