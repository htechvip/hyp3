import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-heading">Company</h3>
                    <Link to="/careers" className="footer-link">Careers</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Resources</h3>
                    <Link to="/research" className="footer-link">Research</Link>
                    <a href="https://aijedi.hyperionsoft.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Education</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Legal</h3>
                    <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                    <Link to="/faq" className="footer-link">FAQ</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <span>HYPERIONSOFT © 2025</span>
            </div>
        </footer>
    );
};

export default Footer;
