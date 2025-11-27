import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section = ({ title, subtitle, buttonText, image, align = 'left', to, children }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (to) {
            e.preventDefault();
            navigate(to);
        }
    };

    return (
        <section className="section" style={{ backgroundImage: `url('${image}')` }}>
            <div style={{
                padding: '0 50px 150px',
                textAlign: align,
                width: '100%',
                maxWidth: '600px',
                marginLeft: align === 'right' ? 'auto' : '0'
            }}>
                {subtitle && <h2 className="section-subtitle">{subtitle}</h2>}
                {to ? (
                    <h1 
                        className="section-title" 
                        onClick={handleClick}
                        style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                        onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                        {title}
                    </h1>
                ) : (
                    <h1 className="section-title">{title}</h1>
                )}
                {children && <div className="section-description" style={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.6', color: '#fff' }}>{children}</div>}
                {buttonText && <a href={to || "#"} className="btn" onClick={handleClick}>{buttonText}</a>}
            </div>
            <div className="scroll-arrow">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default Section;
