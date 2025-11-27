import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';
import { modelsData } from '../data/modelsData';

const Models = () => {
    return (
        <>
            <div className="scroll-container">
                <Header />
                {/* Intro Hero Section */}
                <section className="section" style={{ backgroundImage: "url('/assets/models-1.jpg')" }}>
                    <div style={{ padding: '0 50px 150px' }}>
                        <h2 className="section-subtitle">AI Models for Financial Services</h2>
                        <h1 className="section-title">Purpose-Built Intelligence for Lending & Risk Management</h1>
                        <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: '1.6', marginBottom: '30px' }}>
                            Transform your lending and risk operations with our suite of production-ready AI models. Each model is designed for the unique challenges of financial services—regulatory compliant, explainable, and proven in production environments processing billions in loans.
                        </p>
                        <div className="scroll-arrow">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Model Listing Section */}
                <div style={{ backgroundColor: 'var(--color-black)', padding: '100px 50px', minHeight: '100vh' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '36px', marginBottom: '60px', textAlign: 'center', textTransform: 'uppercase' }}>Our Models</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                            {modelsData.map((model) => (
                                <div key={model.id} className="insight-card" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="insight-image" style={{ backgroundImage: `url('${model.image}')`, height: '240px' }}></div>
                                    <div className="insight-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <span className="insight-category">AI MODEL</span>
                                        <h3 className="insight-title" style={{ fontSize: '22px' }}>{model.title}</h3>
                                        <p className="insight-description" style={{ flex: 1 }}>{model.shortDescription}</p>
                                        <div style={{ marginTop: '20px' }}>
                                            <Link to={`/models/${model.id}`} className="btn-insights">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Models;
