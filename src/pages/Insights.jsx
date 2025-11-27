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
                <HeroSection heroText="INSIGHTS" image="/assets/ideas-1.jpg" buttonText="" />
                <Section
                    title="The $47 Million Problem One Bank Solved With AI Agents—And What It Means For Financial Services"
                    subtitle="AI IN FINANCIAL SERVICES"
                    buttonText="LEARN MORE"
                    image="/assets/ideas-2.jpg"
                    to="/insights/the-47-million-problem-one-bank-solved-with-ai-agents-and-what-it-means-for-financial-services"
                />
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
            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Insights;
