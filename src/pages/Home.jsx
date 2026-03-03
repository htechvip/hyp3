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
        "description": "Strategic AI consulting for Financial Services and Drug Discovery. Expert AI advisory and implementation for finance and life sciences.",
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
                title="Hyperionsoft - AI Consulting for Financial Services & Drug Discovery"
                description="Strategic AI consulting for financial services and drug discovery. We help banks, fintech companies, and pharma organizations deploy AI for credit risk, fraud detection, molecular prediction, and clinical development."
                keywords="AI consulting, financial services AI, drug discovery AI, machine learning for banks, credit risk AI, fraud detection AI, fintech AI, molecular prediction, clinical trials AI, life sciences AI"
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
                <Section
                    title="Accelerating Drug Discovery with AI"
                    subtitle="AI IN DRUG DISCOVERY"
                    buttonText="EXPLORE RESEARCH"
                    image="/assets/protein-dark.jpg"
                    to="/research"
                />
            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Home;
