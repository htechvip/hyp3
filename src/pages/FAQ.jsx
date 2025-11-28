import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();

    const faqs = [
        {
            question: "What should I expect when working with Hyperionsoft?",
            answer: "When you work with Hyperionsoft, you can expect a collaborative advisory partnership focused on delivering measurable business impact. Our advisory approach begins with a thorough strategic assessment of your current state, data infrastructure, and business objectives. As your AI advisors, we work closely with your stakeholders to understand your unique challenges and opportunities. Throughout the engagement, you'll have regular strategic check-ins, transparent communication, and direct access to our senior AI advisors and experts. We prioritize strategic guidance, education, and knowledge transfer, ensuring your team understands not just the solutions, but the strategic thinking behind them."
        },
        {
            question: "What is your typical engagement process?",
            answer: "Our advisory-led engagement process follows a structured approach: 1) Strategic Discovery & Assessment - As your advisors, we conduct a comprehensive analysis of your needs, data, infrastructure, and organizational readiness. 2) AI Strategy & Roadmap Development - We provide strategic advisory to develop a customized AI roadmap aligned with your business goals, including prioritization and risk assessment. 3) Advisory-Guided Implementation - We provide strategic oversight and technical advisory as solutions are built and deployed, with iterative testing and refinement. 4) Knowledge Transfer & Training - We train your team and provide comprehensive documentation, ensuring strategic understanding. 5) Ongoing Advisory Support - We offer strategic guidance, maintenance advisory, and optimization services. The exact timeline varies based on project complexity, typically ranging from 3-12 months for full implementations."
        },
        {
            question: "How long does a typical AI project take?",
            answer: "Project timelines vary significantly based on scope and complexity. A proof-of-concept or pilot project typically takes 4-8 weeks. A full production implementation can range from 3-6 months for standard solutions to 6-12 months for complex, enterprise-wide transformations. We work in agile sprints, delivering incremental value throughout the project. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
        },
        {
            question: "What kind of communication can I expect?",
            answer: "As your strategic advisors, we believe in transparent, frequent communication. You'll have a dedicated advisory lead who serves as your primary strategic point of contact. We provide weekly status updates, monthly strategic business reviews with stakeholders, and ad-hoc advisory sessions as needed. All strategic documentation, progress reports, and advisory recommendations are shared through a secure project portal. We're also available for urgent strategic questions and can schedule additional advisory meetings when critical decisions need to be made. Our advisory approach ensures you always have access to senior expertise when you need it."
        },
        {
            question: "What deliverables will I receive?",
            answer: "Our advisory-driven deliverables include: 1) Strategic AI roadmap and recommendations tailored to your business. 2) Deployed AI models and systems ready for production use, with advisory oversight. 3) Comprehensive technical documentation covering architecture, data pipelines, and model specifications. 4) Strategic business documentation including ROI analysis, performance metrics, usage guidelines, and strategic recommendations. 5) Training materials and advisory sessions for your team. 6) Source code and deployment scripts (as per agreement). 7) Ongoing strategic advisory documentation and runbooks. All deliverables are tailored to your organization's needs and compliance requirements, with strategic advisory guidance throughout."
        },
        {
            question: "Do I need to have technical expertise in-house?",
            answer: "While having some technical expertise is helpful, it's not required. Our advisory approach works with organizations at all levels of technical maturity. As your strategic advisors, we handle the complex technical implementation while providing comprehensive advisory guidance and training to your team. We can work closely with your existing IT and data teams, providing advisory support, or we can operate more independently if you prefer. The key is having business stakeholders who understand your objectives and can provide domain expertise. Our advisory model ensures you have the strategic guidance you need regardless of your technical capabilities."
        },
        {
            question: "What data and infrastructure requirements do you have?",
            answer: "Requirements vary by project, but generally: 1) Access to relevant historical data (typically 12-24 months minimum). 2) Data quality standards - as your advisors, we'll help assess and improve data quality as needed, providing strategic recommendations. 3) Infrastructure - we provide advisory guidance on cloud platforms (AWS, Azure, GCP) or on-premise systems, helping you make the right architectural decisions. 4) Security and compliance - we ensure all solutions meet your regulatory requirements through our advisory oversight. During our strategic discovery phase, we'll conduct a thorough assessment and provide specific advisory recommendations for your project."
        },
        {
            question: "How do you ensure AI solutions are explainable and compliant?",
            answer: "Explainability and compliance are core to our advisory approach. As your strategic advisors, we build interpretable models and provide detailed explanations of AI decisions. For regulated industries like financial services, we provide advisory guidance to ensure all solutions meet regulatory requirements (fair lending, model risk management, etc.). We document model performance, bias testing, and provide audit trails with strategic recommendations. Our advisory team includes experts in AI ethics and regulatory compliance who work alongside our technical teams throughout the project, providing ongoing strategic oversight."
        },
        {
            question: "What happens after the project is complete?",
            answer: "Post-implementation, we offer several advisory support options: 1) Strategic maintenance and monitoring advisory to ensure models continue performing well. 2) Advisory-guided model retraining and updates as your data evolves. 3) Strategic optimization and enhancement advisory to improve performance over time. 4) Ongoing strategic consultation and advisory for new use cases. We provide a transition period where we work closely with your team as strategic advisors, gradually reducing our involvement as you become self-sufficient. Many clients choose to maintain an ongoing advisory relationship for continuous strategic improvement and guidance."
        },
        {
            question: "What results can I expect?",
            answer: "Results vary by use case, but typical outcomes from our advisory-led approach include: 1) Improved accuracy in predictions (often 20-40% better than traditional methods) through strategic model selection and optimization. 2) Cost reductions through automation and efficiency gains guided by our strategic advisory. 3) Enhanced customer experiences through personalization and faster response times. 4) Better risk management and fraud detection with strategic oversight. 5) Data-driven insights that inform strategic decisions, with ongoing advisory support. We establish baseline metrics at project start and track improvements throughout with strategic advisory guidance. Most clients see ROI within 6-12 months of implementation."
        },
        {
            question: "How do you handle data security and privacy?",
            answer: "Data security is paramount in our advisory approach. We follow industry best practices including: 1) Encryption of data in transit and at rest, with strategic advisory on security architecture. 2) Access controls and audit logging, with advisory recommendations. 3) Compliance with GDPR, CCPA, and industry-specific regulations, with strategic advisory guidance. 4) Secure development practices and regular security audits, with advisory oversight. 5) Data minimization - we only use data necessary for the project, with strategic advisory on data governance. We can work with your security team to meet specific requirements and can sign NDAs and data processing agreements as needed."
        },
        {
            question: "What makes Hyperionsoft different from other AI consultancies?",
            answer: "Our advisory-led differentiators include: 1) Deep financial services expertise - as strategic advisors, we understand the unique challenges and regulations in your industry. 2) Advisory-driven, end-to-end capability - from strategic advisory to deployment to ongoing advisory support. 3) Strategic focus on business impact, not just technology - we measure success by your business outcomes through our advisory lens. 4) Transparent, collaborative advisory approach - you're a strategic partner, not just a client. 5) Proven advisory track record with measurable results. 6) Commitment to explainability and ethical AI through strategic advisory oversight. We're not just building models - we're providing strategic advisory that transforms how you operate."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="scroll-container">
                <Header />
                <HeroSection 
                    heroText="Frequently Asked Questions" 
                    subtitle="FAQ"
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
                            textAlign: 'center',
                            marginBottom: '60px'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 42px)',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                What It's Like to Work With Us
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}>
                                Get answers to common questions about working with Hyperionsoft, our advisory-led process, and what you can expect from our strategic partnership.
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: '#1a1a1a',
                                        border: '1px solid #333',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        style={{
                                            width: '100%',
                                            padding: '24px 30px',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            color: '#fff',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            transition: 'background-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#252525';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <span style={{
                                            fontSize: '24px',
                                            color: '#00d4ff',
                                            transition: 'transform 0.3s ease',
                                            transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                        }}>
                                            ▼
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <div style={{
                                            padding: '0 30px 24px 30px',
                                            color: '#e0e0e0',
                                            fontSize: '16px',
                                            lineHeight: '1.8',
                                            animation: 'fadeIn 0.3s ease'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div style={{
                            marginTop: '60px',
                            padding: '60px 40px',
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h3 style={{
                                fontSize: '28px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                Still Have Questions?
                            </h3>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                marginBottom: '30px'
                            }}>
                                We'd love to discuss how we can help transform your organization with AI.
                            </p>
                            <a
                                href="/contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/contact');
                                }}
                                style={{
                                    display: 'inline-block',
                                    padding: '16px 40px',
                                    backgroundColor: '#00d4ff',
                                    color: '#000',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#00b8e6';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#00d4ff';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default FAQ;

