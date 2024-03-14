import { useState, useEffect } from 'react';

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const _checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const _orientationChange = () => {
                window.location.reload(); 
        };

        _checkMobile();

        window.addEventListener('resize', _checkMobile);
        window.addEventListener('orientationchange', _orientationChange);

        return () => {
            window.removeEventListener('resize', _checkMobile);
            window.removeEventListener('orientationchange', _orientationChange);
        };
    }, []);
    
    return { isMobile };
};

export default useMobile;
