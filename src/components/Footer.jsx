import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-heading">Company</h3>
                    <a href="#" className="footer-link">Careers</a>
                    <a href="#" className="footer-link">Contact</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Resources</h3>
                    <a href="#" className="footer-link">Research</a>
                    <a href="#" className="footer-link">Education</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Legal</h3>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">FAQ</a>
                </div>
            </div>
            <div className="footer-bottom">
                <span>HYPERIONSOFT © 2025</span>
            </div>
        </footer>
    );
};

export default Footer;
