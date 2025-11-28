import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Insights = () => {
    return (
        <>
            <SEO
                title="AI Insights & Articles for Financial Services | Hyperionsoft"
                description="Expert insights on AI in financial services. Articles covering AI fraud detection, credit risk, customer service, payments, and emerging AI technologies in banking."
                keywords="AI insights financial services, AI articles banking, fintech AI, AI fraud detection, credit risk AI, AI customer service, financial AI trends"
                image="/assets/ideas-1.jpg"
            />
            <div className="scroll-container">
                <Header />
                <HeroSection heroText="INSIGHTS" image="/assets/ideas-1.jpg" buttonText="" />
                <Section
                    title="The $380 Billion Opportunity Hiding In Plain Sight: Why AI Is Finally Unlocking The Informal Economy"
                    subtitle="AI IN FINANCIAL RISK"
                    buttonText="LEARN MORE"
                    image="/assets/ideas-3.jpg"
                    to="/insights/the-380-billion-opportunity-hiding-in-plain-sight-why-ai-is-finally-unlocking-the-informal-economy"
                />
                <Section
                    title="The Fintech That Deleted Its Phone Menu—And Why 3 Million Customers Actually Call Them Now"
                    subtitle="AI IN CUSTOMER SERVICE"
                    buttonText="LEARN MORE"
                    image="/assets/voice-ai.jpg"
                    to="/insights/the-fintech-that-deleted-its-phone-menu-and-why-3-million-customers-actually-call-them-now"
                />
                <Section
                    title="The $847 Wire Transfer That Cost $0.03—And Why 2025 Is Banking's Stablecoin Reckoning"
                    subtitle="PAYMENTS & TRANSACTIONS"
                    buttonText="LEARN MORE"
                    image="/assets/service-1.jpg"
                    to="/insights/the-847-wire-transfer-that-cost-0-03-and-why-2025-is-bankings-stablecoin-reckoning"
                />
                <Section
                    title="The $3.2 Million Deepfake That Fooled A Bank's CEO—And Why Every Financial Institution Is Now Vulnerable"
                    subtitle="FRAUD DETECTION"
                    buttonText="LEARN MORE"
                    image="/assets/service-2.jpg"
                    to="/insights/the-3-2-million-deepfake-that-fooled-a-banks-ceo-and-why-every-financial-institution-is-now-vulnerable"
                />
            </div>
            <LatestInsights />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Insights;
