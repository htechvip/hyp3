import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
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

