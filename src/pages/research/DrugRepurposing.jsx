import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DrugRepurposing = () => {
    return (
        <>
            <Header />
            <div className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>AI-Driven Drug Repurposing</h1>
                    <div style={{ width: '100%', height: '400px', backgroundImage: "url('/assets/researchdrug-1.jpg?v=2')", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '40px', borderRadius: '8px' }}></div>

                    <div className="content-block">
                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>The Opportunity</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            The FDA has approved approximately 20,000 drugs and compounds. Each was designed for a specific indication, but their full therapeutic potential remains largely unexplored. What if a cancer drug could treat Alzheimer's? What if an antifungal could combat viral infections? The possibilities are vast—and AI can systematically explore them.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Our Approach</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            We leverage machine learning to analyze massive datasets connecting drugs, diseases, genes, proteins, and biological pathways. By identifying hidden patterns invisible to human researchers, we can predict which existing drugs might effectively treat conditions they were never designed for.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Key Methodologies</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Network-based approaches:</strong> Mapping disease mechanisms and drug effects in high-dimensional biological networks to identify unexpected connections
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Knowledge graph integration:</strong> Combining biomedical literature, clinical trial data, genetic databases, and molecular structures into unified computational frameworks
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Deep learning for multi-omics:</strong> Neural networks trained on genomics, proteomics, and metabolomics data to predict drug-disease interactions
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Transfer learning:</strong> Applying models trained on well-studied diseases to rare conditions with limited data
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DrugRepurposing;
