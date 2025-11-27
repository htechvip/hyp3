import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div className="scroll-container">
                <Header />
                <HeroSection />
                <Section
                    title="AI-POWERED UNDERWRITING: WHAT EXECUTIVES NEED TO KNOW"
                    subtitle="AI IN FINANCIAL RISK"
                    buttonText="LEARN MORE"
                    image="/assets/open.jpg"
                />
                <Section
                    title="How voice AI is changing customer service"
                    subtitle="AI IN CUSTOMER SERVICE"
                    buttonText="LEARN MORE"
                    image="/assets/voice-ai.jpg"
                />
            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Home;
