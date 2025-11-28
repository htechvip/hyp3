import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionStatement from '../components/MissionStatement';
import Section from '../components/Section';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Mission = () => {
    return (
        <>
            <SEO
                title="Our Mission - Building an Agentic AI Future | Hyperionsoft"
                description="Hyperionsoft's mission to transform the future of finance through agentic AI. We're building AI systems that create measurable business impact for financial institutions."
                keywords="AI mission, agentic AI, financial AI transformation, AI future, Hyperionsoft mission"
                image="/assets/mission-1.jpg"
            />
            <div className="scroll-container">
                <Header />
                <HeroSection heroText="Building an agentic AI future for humanity" image="/assets/mission-1.jpg" buttonText={null} />
                <MissionStatement />
                <Section
                    title="We are using AI to transform the future of finance"
                    subtitle="FUTURE of AI"
                    image="/assets/mission-3.jpg"
                />
                <Section
                    title="We have clients in US, South America and East Asia. We are constantly expanding our service area to meet our clients' needs."
                    subtitle="Global Presence"
                    image="/assets/mission-2.jpg"
                />
            </div>
            <ContactSection />
            <Footer />
        </>
    );
};

export default Mission;
