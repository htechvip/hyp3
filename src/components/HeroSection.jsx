import React from 'react';

const HeroSection = ({
    heroText = 'Strategic AI Leadership for Financial Services',
    subtitle = 'ARTIFICIAL INTELLIGENCE',
    buttonText = 'EXPLORE',
    image = '/assets/hero.png'
}) => {
    return (
        <section className="section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image}')` }}>
            <div style={{ padding: '0 50px 150px' }}>
                <h2 className="section-subtitle">{subtitle}</h2>
                <h1 className="section-title">{heroText}</h1>
                {buttonText && <a href="#" className="btn">{buttonText}</a>}
            </div>
            <div className="scroll-arrow">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
