import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-heading">Get in Touch</h2>
                <p className="contact-description">
                    For information about our AI consulting services, please reach out to us.
                </p>
                <a
                    href="https://calendly.com/chonantsai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                >
                    Schedule a Consultation
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
