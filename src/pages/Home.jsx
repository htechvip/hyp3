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
                <HeroSection buttonLink="/services" />
                <Section
                    title="The $380 Billion Opportunity Hiding In Plain Sight: Why AI Is Finally Unlocking The Informal Economy"
                    subtitle="AI IN FINANCIAL RISK"
                    buttonText="LEARN MORE"
                    image="/assets/open.jpg"
                    to="/insights/the-380-billion-opportunity-hiding-in-plain-sight-why-ai-is-finally-unlocking-the-informal-economy"
                />
                <Section
                    title="How voice AI is changing customer service"
                    subtitle="AI IN CUSTOMER SERVICE"
                    buttonText="LEARN MORE"
                    image="/assets/voice-ai.jpg"
                    to="/insights/the-fintech-that-deleted-its-phone-menu-and-why-3-million-customers-actually-call-them-now"
                />
            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Home;
