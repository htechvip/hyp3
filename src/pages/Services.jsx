import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ContentIntro from '../components/ContentIntro';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';
import ServiceOverview from '../components/ServiceOverview';


const Services = () => {
    return (
        <>
            <div className="scroll-container">
                <Header />
                <HeroSection
                    heroText="Artificial Intelligence at Your Fingertips"
                    subtitle="OUR OFFERINGS"
                    buttonText={null}
                    image="/assets/service-1.jpg"
                />
                <ContentIntro
                    headline="AI Transformation Services for Financial Institutions"
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
