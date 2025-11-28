import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    image, 
    type = 'website',
    structuredData 
}) => {
    const location = useLocation();
    const baseUrl = 'https://hyperionsoft.com';
    const currentUrl = `${baseUrl}${location.pathname}`;
    const defaultImage = `${baseUrl}/assets/hero.png`;

    useEffect(() => {
        // Update document title
        if (title) {
            document.title = title;
        }

        // Update or create meta tags
        const updateMetaTag = (name, content, attribute = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Basic meta tags
        if (description) {
            updateMetaTag('description', description);
        }
        if (keywords) {
            updateMetaTag('keywords', keywords);
        }

        // Open Graph tags
        updateMetaTag('og:title', title || 'Hyperionsoft - AI Advisory for Financial Services', 'property');
        updateMetaTag('og:description', description || 'Strategic AI Leadership for Financial Services', 'property');
        updateMetaTag('og:image', image || defaultImage, 'property');
        updateMetaTag('og:url', currentUrl, 'property');
        updateMetaTag('og:type', type, 'property');
        updateMetaTag('og:site_name', 'Hyperionsoft', 'property');

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image', 'name');
        updateMetaTag('twitter:title', title || 'Hyperionsoft - AI Advisory for Financial Services', 'name');
        updateMetaTag('twitter:description', description || 'Strategic AI Leadership for Financial Services', 'name');
        updateMetaTag('twitter:image', image || defaultImage, 'name');

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', currentUrl);

        // Add structured data
        if (structuredData) {
            let script = document.querySelector('script[type="application/ld+json"]');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(structuredData);
        }
    }, [title, description, keywords, image, type, currentUrl, structuredData, defaultImage]);

    return null;
};

export default SEO;

