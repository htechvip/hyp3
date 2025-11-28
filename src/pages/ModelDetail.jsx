import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { modelsData } from '../data/modelsData';

const ModelDetail = () => {
    const { id } = useParams();
    const model = modelsData.find(m => m.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!model) {
        return (
            <>
                <Header />
                <div style={{ padding: '150px 50px', textAlign: 'center', minHeight: '60vh', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
                    <h1>Model Not Found</h1>
                    <Link to="/models" className="btn" style={{ marginTop: '20px', opacity: 1 }}>Back to Models</Link>
                </div>
                <Footer />
            </>
        );
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": model.title,
        "description": model.shortDescription,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <SEO
                title={`${model.title} | Hyperionsoft`}
                description={model.shortDescription}
                keywords={`${model.title}, AI model, financial services AI, machine learning, ${model.id}`}
                image={model.image}
                structuredData={structuredData}
            />
            <Header />
            <div className="model-detail-page" style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh' }}>
                {/* Hero for the specific model */}
                <div className="model-hero-container">
                    {/* Image Section - Full width on mobile, fits screen */}
                    <div 
                        className={`model-hero-image ${model.id === 'sentinel-ai' ? 'sentinel-ai-image' : ''}`}
                        style={{
                            backgroundImage: `url('${model.image}')`
                        }}
                    />
                    
                    {/* Content Section - Below image on mobile */}
                    <div className="model-hero-content">
                        <Link to="/models" style={{ 
                            color: 'var(--color-white)', 
                            textDecoration: 'none', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            marginBottom: '20px', 
                            fontSize: '14px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '1px' 
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Models
                        </Link>
                        <h1 className="section-title model-hero-title">{model.title}</h1>
                        <p className="model-hero-description">
                            {model.shortDescription}
                        </p>
                    </div>
                </div>

                {/* Detailed Content */}
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 50px', color: 'var(--color-white)' }}>

                    <div className="model-section">
                        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--color-white)' }}>The Challenge</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-gray)' }}>{model.challenge}</p>
                    </div>

                    <div className="model-section" style={{ marginTop: '60px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--color-white)' }}>What It Does</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-gray)' }}>{model.whatItDoes}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginTop: '80px' }}>
                        {model.metadata && (
                            <div className="model-section">
                                <h3>Model Metadata</h3>
                                <ul className="model-list">
                                    {Object.entries(model.metadata).map(([key, value]) => (
                                        <li key={key}><strong>{key}:</strong> {value}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {model.businessOutcomes && (
                            <div className="model-section">
                                <h3>Business Outcomes</h3>
                                <ul className="model-list">
                                    {model.businessOutcomes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {model.trainingApproach && (
                        <div className="model-section" style={{ marginTop: '80px' }}>
                            <h3>Training Approach</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '20px' }}>
                                {model.trainingApproach.map((item, i) => (
                                    <div key={i} className="model-subsection" style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '4px' }}>
                                        <strong style={{ display: 'block', marginBottom: '10px', fontSize: '18px', color: 'var(--color-white)' }}>{item.title}</strong>
                                        <span style={{ lineHeight: '1.6' }}>{item.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {model.dataSources && (
                        <div className="model-section" style={{ marginTop: '80px' }}>
                            <h3>Data Sources</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '20px' }}>
                                {Object.entries(model.dataSources).map(([category, items]) => (
                                    <div key={category} className="model-subsection">
                                        <strong style={{ display: 'block', marginBottom: '15px', fontSize: '16px', color: 'var(--color-white)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{category}</strong>
                                        <ul className="model-sublist">
                                            {items.map((item, i) => (
                                                <li key={i} style={{ marginBottom: '8px', color: 'var(--color-gray)' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {model.extraSection && (
                        <div className="model-section" style={{ marginTop: '80px', background: 'rgba(255,255,255,0.03)', padding: '40px', borderLeft: '4px solid var(--color-white)' }}>
                            <h3 style={{ marginTop: 0 }}>{model.extraSection.title}</h3>
                            {Array.isArray(model.extraSection.content) ? (
                                <ul className="model-list">
                                    {model.extraSection.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ color: 'var(--color-gray)', lineHeight: '1.6' }}>{model.extraSection.content}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ModelDetail;
