import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found | Hyperionsoft"
                description="The page you're looking for doesn't exist."
            />
            <Header />
            <div className="not-found-page">
                <div className="not-found-container">
                    <div className="not-found-content">
                        <div className="not-found-number">404</div>
                        <h1 className="not-found-title">Page Not Found</h1>
                        <p className="not-found-description">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        <div className="not-found-actions">
                            <Link to="/" className="btn-not-found primary">
                                Go Home
                            </Link>
                            <Link to="/contact" className="btn-not-found secondary">
                                Contact Us
                            </Link>
                        </div>
                        <div className="not-found-links">
                            <p className="not-found-links-title">You might be interested in:</p>
                            <div className="not-found-quick-links">
                                <Link to="/services" className="quick-link">Services</Link>
                                <Link to="/models" className="quick-link">Models</Link>
                                <Link to="/insights" className="quick-link">Insights</Link>
                                <Link to="/research" className="quick-link">Research</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;



