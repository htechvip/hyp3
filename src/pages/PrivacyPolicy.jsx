import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="scroll-container">
                <Header />
                <HeroSection 
                    heroText="Privacy Policy" 
                    subtitle="LEGAL"
                    buttonText=""
                    image="/assets/hero.png"
                />
                
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#000',
                    color: '#fff',
                    minHeight: '60vh'
                }}>
                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            marginBottom: '60px'
                        }}>
                            <p style={{
                                fontSize: '16px',
                                color: '#999',
                                marginBottom: '40px'
                            }}>
                                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px'
                        }}>
                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    1. Introduction
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    Hyperionsoft ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    2. Information We Collect
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    We may collect information about you in a variety of ways. The information we may collect includes:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    paddingLeft: '30px',
                                    marginTop: '16px'
                                }}>
                                    <li style={{ marginBottom: '12px' }}>Personal data such as name, email address, phone number, and company information that you voluntarily provide when contacting us or using our services</li>
                                    <li style={{ marginBottom: '12px' }}>Usage data including your IP address, browser type, device information, and how you interact with our website</li>
                                    <li style={{ marginBottom: '12px' }}>Cookies and tracking technologies to enhance your experience and analyze website traffic</li>
                                    <li style={{ marginBottom: '12px' }}>Information you provide when subscribing to our newsletter, requesting information, or engaging with our services</li>
                                </ul>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    3. How We Use Your Information
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    We use the information we collect for various purposes, including:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    paddingLeft: '30px',
                                    marginTop: '16px'
                                }}>
                                    <li style={{ marginBottom: '12px' }}>To provide, maintain, and improve our services</li>
                                    <li style={{ marginBottom: '12px' }}>To respond to your inquiries, comments, and requests</li>
                                    <li style={{ marginBottom: '12px' }}>To send you newsletters, marketing communications, and other information (with your consent)</li>
                                    <li style={{ marginBottom: '12px' }}>To analyze website usage and trends to improve user experience</li>
                                    <li style={{ marginBottom: '12px' }}>To comply with legal obligations and protect our rights</li>
                                </ul>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    4. Information Sharing and Disclosure
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    paddingLeft: '30px',
                                    marginTop: '16px'
                                }}>
                                    <li style={{ marginBottom: '12px' }}>With service providers who assist us in operating our website and conducting our business</li>
                                    <li style={{ marginBottom: '12px' }}>When required by law or to protect our rights and safety</li>
                                    <li style={{ marginBottom: '12px' }}>In connection with a business transfer, merger, or acquisition</li>
                                    <li style={{ marginBottom: '12px' }}>With your explicit consent</li>
                                </ul>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    5. Data Security
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    6. Your Rights
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    Depending on your location, you may have certain rights regarding your personal information, including:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    paddingLeft: '30px',
                                    marginTop: '16px'
                                }}>
                                    <li style={{ marginBottom: '12px' }}>The right to access and receive a copy of your personal data</li>
                                    <li style={{ marginBottom: '12px' }}>The right to rectify inaccurate or incomplete information</li>
                                    <li style={{ marginBottom: '12px' }}>The right to request deletion of your personal data</li>
                                    <li style={{ marginBottom: '12px' }}>The right to object to or restrict processing of your data</li>
                                    <li style={{ marginBottom: '12px' }}>The right to data portability</li>
                                    <li style={{ marginBottom: '12px' }}>The right to withdraw consent at any time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    7. Cookies and Tracking Technologies
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    8. Third-Party Links
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    9. Children's Privacy
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    10. Changes to This Privacy Policy
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    color: '#fff'
                                }}>
                                    11. Contact Us
                                </h2>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#e0e0e0',
                                    marginBottom: '16px'
                                }}>
                                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#00d4ff',
                                    marginTop: '16px'
                                }}>
                                    Email: <a href="mailto:rin@hyperionsoft.com" style={{ color: '#00d4ff', textDecoration: 'underline' }}>rin@hyperionsoft.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;

