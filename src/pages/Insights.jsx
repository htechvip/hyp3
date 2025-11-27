import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';

const Insights = () => {
    return (
        <>
            <div className="scroll-container">
                <Header />
                <HeroSection heroText="INSIGHTS" image="/assets/ideas-1.jpg" />
                <Section
                    title="AI-POWERED UNDERWRITING: WHAT EXECUTIVES NEED TO KNOW"
                    subtitle="AI IN FINANCIAL RISK"
                    buttonText="LEARN MORE"
                    image="/assets/ideas-2.jpg"
                    to="/insights/ai-underwriting-analysis"
                />
                <Section
                    title="How voice AI is changing customer service"
                    subtitle="AI IN CUSTOMER SERVICE"
                    buttonText="LEARN MORE"
                    image="/assets/ideas-3.jpg"
                />
            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Insights;
