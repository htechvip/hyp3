import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import LatestInsights from '../components/LatestInsights';
import Footer from '../components/Footer';

const Research = () => {
    return (
        <>
            <div className="scroll-container">
                <Header />
                <HeroSection heroText="RESEARCH" image="/assets/researchdrug-1.jpg?v=2" buttonText="" />



                {/* Strategic Context Section */}
                <section className="vision-section" style={{ backgroundColor: '#111', padding: '80px 50px' }}>
                    <div className="vision-container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="vision-title" style={{ fontSize: '36px', marginBottom: '30px' }}>Strategic Expansion into Life Sciences</h2>
                        <p style={{ fontSize: '20px', lineHeight: '1.6', color: 'var(--color-gray)', maxWidth: '800px', margin: '0 auto' }}>
                            Building on our proven track record in heavily regulated financial markets, we are now applying our rigorous AI methodologies to drug discovery and manufacturing discovery. This strategic expansion is driven by the critical need for domestic resilience and accelerated innovation in response to tightening US tariff situations and evolving global supply chain dynamics.
                        </p>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="vision-section">
                    <div className="vision-container">
                        <h2 className="vision-title">Our Vision: Accelerating the Path from Molecule to Medicine</h2>
                        <ul className="vision-list">
                            <li className="vision-item">
                                <h3>Discovery happens in days, not decades</h3>
                                <p>AI systems explore billions of molecular combinations in silico, identifying promising drug candidates before a single experiment is run.</p>
                            </li>
                            <li className="vision-item">
                                <h3>Failure is predicted before it's expensive</h3>
                                <p>Machine learning models trained on decades of clinical data anticipate toxicity, off-target effects, and efficacy issues at the computational stage.</p>
                            </li>
                            <li className="vision-item">
                                <h3>Existing drugs find new purposes</h3>
                                <p>Sophisticated algorithms uncover hidden therapeutic potential in approved medications, bypassing years of safety testing.</p>
                            </li>
                            <li className="vision-item">
                                <h3>Rare diseases become economically viable</h3>
                                <p>AI reduces discovery costs by orders of magnitude, making it feasible to develop treatments for conditions affecting thousands rather than millions.</p>
                            </li>
                            <li className="vision-item">
                                <h3>Personalized medicine becomes reality</h3>
                                <p>Computational models predict which patients will respond to which treatments, ending the era of one-size-fits-all therapeutics.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Research Overview Grid */}
                <section className="focus-section" style={{ height: 'auto', padding: '100px 50px', display: 'block' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="focus-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Research Focus Areas</h2>
                        <div className="research-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', justifyItems: 'center' }}>

                            {/* Card 1 */}
                            <Link to="/research/drug-repurposing" className="research-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="research-card-inner" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease' }}>
                                    <div style={{ height: '200px', backgroundImage: "url('/assets/researchdrug-1.jpg?v=2')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div style={{ padding: '30px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>AI-Driven Drug Repurposing</h3>
                                        <p style={{ color: 'var(--color-gray)', marginBottom: '20px', lineHeight: '1.5' }}>Uncovering hidden therapeutic potential in existing approved medications.</p>
                                        <span style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>EXPLORE &rarr;</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 2 */}
                            <Link to="/research/de-novo-design" className="research-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="research-card-inner" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease' }}>
                                    <div style={{ height: '200px', backgroundImage: "url('/assets/researchdrug-2.jpg?v=2')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div style={{ padding: '30px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>De Novo Drug Design</h3>
                                        <p style={{ color: 'var(--color-gray)', marginBottom: '20px', lineHeight: '1.5' }}>Generative AI creating entirely novel molecules optimized for specific targets.</p>
                                        <span style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>EXPLORE &rarr;</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 3 */}
                            <Link to="/research/molecular-prediction" className="research-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="research-card-inner" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease' }}>
                                    <div style={{ height: '200px', backgroundImage: "url('/assets/researchdrug-3.jpg?v=2')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div style={{ padding: '30px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>Molecular Property Prediction</h3>
                                        <p style={{ color: 'var(--color-gray)', marginBottom: '20px', lineHeight: '1.5' }}>Predicting toxicity and efficacy before a single experiment is run.</p>
                                        <span style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>EXPLORE &rarr;</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 4 */}
                            <Link to="/research/target-identification" className="research-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="research-card-inner" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease' }}>
                                    <div style={{ height: '200px', backgroundImage: "url('/assets/target_identification.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div style={{ padding: '30px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>Target Identification</h3>
                                        <p style={{ color: 'var(--color-gray)', marginBottom: '20px', lineHeight: '1.5' }}>Validating therapeutic targets with unprecedented precision using genomic data.</p>
                                        <span style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>EXPLORE &rarr;</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 5 */}
                            <Link to="/research/clinical-trials" className="research-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="research-card-inner" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease' }}>
                                    <div style={{ height: '200px', backgroundImage: "url('/assets/clinical_trials.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div style={{ padding: '30px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>Clinical Trial Optimization</h3>
                                        <p style={{ color: 'var(--color-gray)', marginBottom: '20px', lineHeight: '1.5' }}>Optimizing patient recruitment and trial protocols to reduce failure rates.</p>
                                        <span style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>EXPLORE &rarr;</span>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>

            </div>
            <LatestInsights />
            <Footer />
        </>
    );
};

export default Research;
