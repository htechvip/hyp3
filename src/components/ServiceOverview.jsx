import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { title: 'Credit Risk & Lending', image: '/assets/service-1.jpg', path: '/services/credit-risk' },
    { title: 'Fraud Detection & AML', image: '/assets/service-2.jpg', path: '/services/fraud-detection' },
    { title: 'Customer Service', image: '/assets/service-3.jpg', path: '/services/customer-service' },
    { title: 'Regulatory Compliance', image: '/assets/hero.png', path: '/services/regulatory-compliance' },
    { title: 'Risk Management', image: '/assets/open.jpg', path: '/services/risk-management' },
    { title: 'Payments & Transactions', image: '/assets/voice-ai.jpg', path: '/services/payments-transactions' },
];

const ServiceOverview = () => (
    <section className="service-overview-section">
        <div className="service-overview-grid">
            {services.map((svc) => (
                <Link key={svc.title} to={svc.path} className="service-card">
                    <img src={svc.image} alt={svc.title} className="service-card-image" />
                    <h3 className="service-card-title">{svc.title}</h3>
                </Link>
            ))}
        </div>
    </section>
);

export default ServiceOverview;
