import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Track page view in Google Analytics
        if (typeof window.gtag !== 'undefined') {
            window.gtag('config', 'G-27K8TBMM5H', {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
