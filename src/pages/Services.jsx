import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ContentIntro from '../components/ContentIntro';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';
import ServiceOverview from '../components/ServiceOverview';
import SEO from '../components/SEO';


const Services = () => {
    return (
        <>
            <SEO
                title="AI Transformation Services for Financial Service Companies | Hyperionsoft"
                description="Strategic AI advisory and selective implementation for financial services. Credit risk, fraud detection, customer service, regulatory compliance, and risk management solutions."
                keywords="AI services financial services, AI consulting banks, credit risk AI, fraud detection services, AI customer service, regulatory compliance AI, financial AI advisory"
                image="/assets/service-1.jpg"
            />
            <div className="scroll-container">
                <Header />
                <HeroSection
                    heroText="Artificial Intelligence at Your Fingertips"
                    subtitle="FOR FINANCIAL SERVICES"
                    buttonText={null}
                    image="/assets/service-1.jpg"
                />
                <ContentIntro
                    headline="AI Transformation Services for Financial Service Companies"
                    subheadline="Strategic advisory and selective implementation across the critical areas where AI delivers measurable business impact"
                    description="Financial services organizations face unique challenges in deploying AI—regulatory scrutiny, legacy infrastructure, data quality issues, and risk management requirements. Our services combine deep domain expertise with proven AI implementation experience to help organizations navigate these challenges and realize tangible value from AI investments."
                />
                <ServiceOverview />

                <Section
                    title="We help you navigate the complexities of AI in financial services"
                    subtitle="OUR EXPERTISE"
                    buttonText=""
                    image="/assets/service-2.jpg"
                />
                <Section
                    title="Our team is at your disposal"
                    subtitle="AI TALENTS"
                    buttonText=""
                    image="/assets/service-3.jpg"
                />

            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Services;
