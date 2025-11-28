import React from 'react';
import { useNavigate } from 'react-router-dom';

const LatestInsights = () => {
    const navigate = useNavigate();
    
    const insights = [
        {
            category: 'AI IN FINANCIAL SERVICES',
            title: 'The $47 Million Problem One Bank Solved With AI Agents—And What It Means For Financial Services',
            description: 'How autonomous AI agents are transforming financial services operations, reducing costs by 40-60% and delivering 10x faster customer experiences.',
            type: 'Article',
            image: '/assets/ideas-2.jpg',
            link: '/insights/the-47-million-problem-one-bank-solved-with-ai-agents-and-what-it-means-for-financial-services'
        },
        {
            category: 'FRAUD DETECTION',
            title: 'The $3.2 Million Deepfake That Fooled A Bank\'s CEO—And Why Every Financial Institution Is Now Vulnerable',
            description: 'AI-enabled fraud is transforming financial crime. Deepfakes, synthetic identities, and AI-generated attacks are bypassing traditional defenses. Here\'s what every financial institution needs to know.',
            type: 'Article',
            image: '/assets/service-2.jpg',
            link: '/insights/the-3-2-million-deepfake-that-fooled-a-banks-ceo-and-why-every-financial-institution-is-now-vulnerable'
        }
    ];

    return (
        <section className="insights-section">
            <div className="insights-container">
                <h2 className="insights-heading">Our Latest Insights</h2>
                <div className="insights-grid">
                    {insights.map((insight, index) => (
                        <div 
                            key={index} 
                            className="insight-card"
                            onClick={() => insight.link && navigate(insight.link)}
                            style={insight.link ? { cursor: 'pointer' } : {}}
                        >
                            <div className="insight-image" style={{ backgroundImage: `url(${insight.image})` }}></div>
                            <div className="insight-content">
                                <span className="insight-category">{insight.category}</span>
                                <h3 className="insight-title">{insight.title}</h3>
                                <p className="insight-description">{insight.description}</p>
                                <div className="insight-footer">
                                    <span className="insight-type">{insight.type}</span>
                                    <button className="insight-bookmark" aria-label="Bookmark">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 2h10v12l-5-3-5 3V2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestInsights;
