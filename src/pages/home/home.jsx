import React, { useState, useEffect } from 'react';

import HeaderSection from '../../view/header/headerSection';
import ThirdSection from '../../view/sections/thirdSection/thirdSection';
import FifthSection from '../../view/sections/fifthSection/fifthSection';
import FirstSection from '../../view/sections/firstSection/firstSection';
import PhoneButton from '../../components/buttons/PhoneButton/PhoneButton';
import SecondSection from '../../view/sections/secondSection/secondSection';
import FourthSection from '../../view/sections/fourthSection/fourthSection';
import Onboarding from '../../onboarding/onboarding';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {
        isLoading ? <Onboarding /> :
          <>
            <HeaderSection />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <PhoneButton />
          </>
      }
    </div>
  )
}

export default Home;
