import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TargetIdentification = () => {
    return (
        <>
            <Header />
            <div className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Target Identification & Validation</h1>
                    <div style={{ width: '100%', height: '400px', backgroundImage: "url('/assets/target_identification.png')", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '40px', borderRadius: '8px' }}></div>

                    <div className="content-block">
                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>The Foundation</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            Every drug needs a target—a protein, gene, or biological pathway whose modulation treats disease. But identifying which of 20,000+ human proteins to target, and validating that targeting them is safe and effective, remains one of drug discovery's greatest challenges.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Our Approach</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            We apply AI to genetic data, disease biology, and systems-level models to identify and validate therapeutic targets with unprecedented precision.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Key Methodologies</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Genomic analysis:</strong> Mining genetic databases to identify causal disease genes and predict which are druggable
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Protein-protein interaction networks:</strong> Understanding disease mechanisms at the systems level
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Single-cell analysis:</strong> Using AI to analyze single-cell sequencing data, revealing cell-type-specific disease mechanisms
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Causal inference:</strong> Moving beyond correlation to identify causative disease mechanisms
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TargetIdentification;
