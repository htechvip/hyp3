import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us - AI Consulting for Financial Services | Hyperionsoft"
                description="Get in touch with Hyperionsoft for AI consulting services. Schedule a consultation to discuss how AI can transform your financial services organization."
                keywords="contact AI consulting, financial services AI advisory, AI consultation, schedule meeting"
                image="/assets/hero.png"
            />
            <div className="scroll-container">
                <Header />
                <HeroSection 
                    heroText="Get in Touch" 
                    subtitle="CONTACT US"
                    buttonText=""
                    image="/assets/hero.png"
                />
            </div>
            <ContactSection />
            <Footer />
        </>
    );
};

export default Contact;

