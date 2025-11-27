import React from 'react';

const ModelDetailSection = ({ model, image, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`focus-section ${isEven ? '' : 'reverse'}`}>
            <div className="focus-container">
                <div className="focus-content">
                    <span className="focus-number">{index + 1}</span>
                    <h2 className="focus-title">{model.title}</h2>

                    <div className="model-section">
                        <h3>The Challenge</h3>
                        <p>{model.challenge}</p>
                    </div>

                    <div className="model-section">
                        <h3>What It Does</h3>
                        <p>{model.whatItDoes}</p>
                    </div>

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

                    {model.trainingApproach && (
                        <div className="model-section">
                            <h3>Training Approach</h3>
                            {model.trainingApproach.map((item, i) => (
                                <div key={i} className="model-subsection">
                                    <strong>{item.title}:</strong> {item.description}
                                </div>
                            ))}
                        </div>
                    )}

                    {model.dataSources && (
                        <div className="model-section">
                            <h3>Data Sources</h3>
                            {Object.entries(model.dataSources).map(([category, items]) => (
                                <div key={category} className="model-subsection">
                                    <strong>{category}:</strong>
                                    <ul className="model-sublist">
                                        {items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
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

                    {model.extraSection && (
                        <div className="model-section">
                            <h3>{model.extraSection.title}</h3>
                            {Array.isArray(model.extraSection.content) ? (
                                <ul className="model-list">
                                    {model.extraSection.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{model.extraSection.content}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className="focus-image" style={{ backgroundImage: `url('${image}')` }}></div>
            </div>
        </div>
    );
};

export default ModelDetailSection;
