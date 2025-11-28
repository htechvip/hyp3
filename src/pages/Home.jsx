import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Hyperionsoft",
        "url": "https://hyperionsoft.com",
        "logo": "https://hyperionsoft.com/assets/hero.png",
        "description": "Strategic AI Leadership for Financial Services. Expert AI advisory and implementation for the financial industry.",
        "sameAs": [],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "rin@hyperionsoft.com",
            "contactType": "Customer Service"
        }
    };

    return (
        <>
            <SEO
                title="Hyperionsoft - Strategic AI Leadership for Financial Services"
                description="Transform your financial services organization with expert AI advisory and implementation. We help banks, lenders, and fintech companies deploy production-ready AI models for credit risk, fraud detection, and customer service."
                keywords="AI consulting, financial services AI, machine learning for banks, credit risk AI, fraud detection AI, fintech AI, AI advisory, financial AI implementation"
                image="/assets/hero.png"
                structuredData={structuredData}
            />
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
