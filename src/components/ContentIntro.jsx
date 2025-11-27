import React from 'react';

const ContentIntro = ({ headline, subheadline, description }) => {
    return (
        <section className="content-intro-section">
            <div className="content-intro-container">
                <h1 className="content-intro-headline">{headline}</h1>
                <h2 className="content-intro-subheadline">{subheadline}</h2>
                <p className="content-intro-description">{description}</p>
            </div>
        </section>
    );
};

export default ContentIntro;
