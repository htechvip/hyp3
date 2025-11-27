import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DeNovoDesign = () => {
    return (
        <>
            <Header />
            <div className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>De Novo Drug Design</h1>
                    <div style={{ width: '100%', height: '400px', backgroundImage: "url('/assets/researchdrug-2.jpg?v=2')", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '40px', borderRadius: '8px' }}></div>

                    <div className="content-block">
                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>The Challenge</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            The chemical space of possible drug-like molecules contains approximately 10^60 compounds—more than there are atoms in the universe. Traditional medicinal chemistry explores this space one molecule at a time. We need to explore it intelligently and exhaustively.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Our Approach</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--color-gray)' }}>
                            We employ generative AI models that learn the principles of molecular design from existing drugs and biological data, then create entirely novel molecules optimized for specific therapeutic targets.
                        </p>

                        <h2 style={{ color: '#ff4444', fontSize: '24px', marginBottom: '15px' }}>Key Methodologies</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Generative adversarial networks (GANs):</strong> Neural networks that generate novel molecular structures with desired properties
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Variational autoencoders (VAEs):</strong> Models that learn compressed representations of molecular space, enabling intelligent exploration
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Reinforcement learning:</strong> AI agents that iteratively design molecules, receiving rewards for desired properties like binding affinity, selectivity, and synthesizability
                            </li>
                            <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative', color: 'var(--color-gray)', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'white' }}>•</span>
                                <strong style={{ color: 'white' }}>Transformer models:</strong> Treating molecules as sequences (SMILES notation) and applying natural language processing techniques to molecular generation
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DeNovoDesign;
