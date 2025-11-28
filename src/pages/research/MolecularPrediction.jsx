import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const MolecularPrediction = () => {
    return (
        <>
            <SEO
                title="Molecular Property Prediction with AI | Hyperionsoft Research"
                description="Predicting toxicity and efficacy before a single experiment is run. AI-powered molecular property prediction for faster, safer drug development."
                keywords="molecular prediction AI, toxicity prediction, drug efficacy prediction, molecular property AI, pharmaceutical AI prediction"
                image="/assets/researchdrug-3.jpg"
            />
            <Header />
            <div className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Molecular Property Prediction</h1>
                    <div style={{ width: '100%', height: '400px', backgroundImage: "url('/assets/researchdrug-3.jpg?v=2')", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '40px', borderRadius: '8px' }}></div>

                    <div className="content-block">
                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>The Imperative</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            A molecule might bind perfectly to its target but fail as a drug because it's toxic, metabolized too quickly, or can't reach the right tissue. Predicting these properties computationally eliminates countless failed experiments.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Our Approach</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            We develop machine learning models that predict critical molecular properties from structure alone—before synthesis, before testing, before investment.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Key Methodologies</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Graph neural networks:</strong> Treating molecules as graphs of atoms and bonds, learning structure-property relationships
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Quantum machine learning:</strong> Incorporating quantum mechanical calculations for accurate property prediction
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Attention mechanisms:</strong> Identifying which molecular substructures drive specific properties
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Ensemble models:</strong> Combining multiple algorithms for robust, reliable predictions
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MolecularPrediction;
