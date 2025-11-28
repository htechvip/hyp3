import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const ClinicalTrials = () => {
    return (
        <>
            <SEO
                title="Clinical Trial Optimization with AI | Hyperionsoft Research"
                description="Optimizing patient recruitment and trial protocols to reduce failure rates. AI-powered clinical trial optimization for faster, more successful drug development."
                keywords="clinical trial AI, trial optimization, patient recruitment AI, clinical trial design, pharmaceutical trial AI"
                image="/assets/clinical_trials.png"
            />
            <Header />
            <div className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Clinical Trial Optimization</h1>
                    <div style={{ width: '100%', height: '400px', backgroundImage: "url('/assets/clinical_trials.png')", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '40px', borderRadius: '8px' }}></div>

                    <div className="content-block">
                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>The Bottleneck</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            Clinical trials are the slowest, most expensive, and riskiest phase of drug development. Patient recruitment takes years. Many trials fail because they enrolled the wrong patients or used suboptimal protocols.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Our Approach</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            We leverage machine learning to optimize every aspect of clinical trials—from patient selection to endpoint definition to adaptive trial design.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Key Applications</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Patient recruitment:</strong> AI identifies eligible patients from electronic health records, accelerating enrollment
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Inclusion/exclusion criteria optimization:</strong> ML determines which patient characteristics predict trial success
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Response prediction:</strong> Models predict which patients will respond to treatment, enabling enrichment strategies
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Adaptive trial design:</strong> Real-time analysis allows mid-trial protocol adjustments, improving success rates
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ClinicalTrials;
