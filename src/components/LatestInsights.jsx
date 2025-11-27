import React from 'react';

const LatestInsights = () => {
    const insights = [
        {
            category: 'AI, Insights, and Solutions',
            title: 'Defining the Intelligent Enterprise',
            description: 'A recap from DeepLearning.AI\'s AI Dev 25 • NYC.',
            type: 'Article',
            image: '/assets/insight-1.jpg'
        },
        {
            category: 'Digital',
            title: 'The New Growth Equation for Tech Services',
            description: 'As AI and geopolitical change upend the status quo, service providers face a stark choice—transform or fall behind.',
            type: 'Brief',
            image: '/assets/insight-2.jpg'
        }
    ];

    return (
        <section className="insights-section">
            <div className="insights-container">
                <h2 className="insights-heading">Our Latest Insights</h2>
                <div className="insights-grid">
                    {insights.map((insight, index) => (
                        <div key={index} className="insight-card">
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
                <div className="insights-cta">
                    <a href="#" className="btn-insights">SEE ALL INSIGHTS</a>
                </div>
            </div>
        </section>
    );
};

export default LatestInsights;
