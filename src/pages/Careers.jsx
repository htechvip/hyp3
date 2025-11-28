import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Careers = () => {
    const openRoles = [
        {
            title: 'Data Scientist',
            description: 'Build and deploy machine learning models that drive real business impact. Work with cutting-edge AI technologies to solve complex problems in financial services.'
        },
        {
            title: 'AI Engineer',
            description: 'Design and implement AI systems at scale. Develop production-ready AI solutions that transform how financial institutions operate.'
        },
        {
            title: 'DevOps Engineer',
            description: 'Build and maintain robust infrastructure for AI systems. Ensure scalability, reliability, and security of our AI platforms.'
        },
        {
            title: 'Data Analyst',
            description: 'Transform data into actionable insights. Analyze patterns, build dashboards, and help drive data-driven decision making across the organization.'
        },
        {
            title: 'Product Manager',
            description: 'Bridge the gap between technology and business. Define product strategy, work with cross-functional teams, and deliver AI products that create value.'
        }
    ];

    const jobPostingStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Hyperionsoft",
        "url": "https://hyperionsoft.com",
        "logo": "https://hyperionsoft.com/assets/hero.png",
        "sameAs": [],
        "jobPosting": openRoles.map(role => ({
            "@type": "JobPosting",
            "title": role.title,
            "description": role.description,
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Hyperionsoft"
            }
        }))
    };

    return (
        <>
            <SEO
                title="Careers - Join Our AI Team | Hyperionsoft"
                description="Join Hyperionsoft's team of AI experts. We're hiring data scientists, AI engineers, DevOps engineers, data analysts, and product managers. Build the future of AI in financial services."
                keywords="AI careers, data scientist jobs, AI engineer jobs, fintech careers, machine learning jobs, AI consulting careers"
                image="/assets/hero.png"
                structuredData={jobPostingStructuredData}
            />
            <div className="scroll-container">
                <Header />
                <HeroSection 
                    heroText="Join Our Team" 
                    subtitle="CAREERS"
                    buttonText=""
                    image="/assets/hero.png"
                />
                
                {/* Company Culture & Vision Section */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#000',
                    color: '#fff'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            marginBottom: '80px',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 48px)',
                                fontWeight: '700',
                                marginBottom: '30px',
                                color: '#fff'
                            }}>
                                Our Culture & Vision
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#e0e0e0',
                                maxWidth: '800px',
                                margin: '0 auto 40px'
                            }}>
                                At HyperionSoft, we're building the future of AI in financial services. We believe in creating an environment where innovation thrives, where every team member has the opportunity to work on cutting-edge problems, and where our collective expertise drives real transformation for our clients.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#e0e0e0',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                Our vision is to be the leading force in making AI accessible, ethical, and impactful for financial institutions worldwide. We're not just building technology—we're shaping the future of finance, one intelligent solution at a time.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '40px',
                            marginTop: '60px'
                        }}>
                            <div style={{
                                padding: '30px',
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333',
                                borderRadius: '8px'
                            }}>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    marginBottom: '16px',
                                    color: '#00d4ff'
                                }}>
                                    Innovation First
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#999'
                                }}>
                                    We encourage experimentation and embrace new ideas. Our team is constantly exploring the latest AI technologies and methodologies.
                                </p>
                            </div>
                            <div style={{
                                padding: '30px',
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333',
                                borderRadius: '8px'
                            }}>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    marginBottom: '16px',
                                    color: '#00d4ff'
                                }}>
                                    Collaborative Environment
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#999'
                                }}>
                                    We believe the best solutions come from diverse perspectives. Cross-functional collaboration is at the heart of everything we do.
                                </p>
                            </div>
                            <div style={{
                                padding: '30px',
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333',
                                borderRadius: '8px'
                            }}>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    marginBottom: '16px',
                                    color: '#00d4ff'
                                }}>
                                    Impact-Driven
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#999'
                                }}>
                                    Every project we work on has real-world impact. You'll see your work transform how financial institutions operate and serve their customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Roles Section */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '60px'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 48px)',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                Open Positions
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                We're constantly looking for talented individuals to join our team. If you're passionate about AI and financial services, we'd love to hear from you.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '30px',
                            marginBottom: '60px'
                        }}>
                            {openRoles.map((role, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: '40px',
                                        backgroundColor: '#1a1a1a',
                                        border: '1px solid #333',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#00d4ff';
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,212,255,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#333';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: '600',
                                        marginBottom: '16px',
                                        color: '#fff'
                                    }}>
                                        {role.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        color: '#999'
                                    }}>
                                        {role.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Contact Information */}
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 40px',
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            <h3 style={{
                                fontSize: '28px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                Interested in Joining Us?
                            </h3>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                marginBottom: '30px'
                            }}>
                                If you're interested in any of these positions or think you'd be a great fit for our team, please reach out to us.
                            </p>
                            <a
                                href="mailto:rin@hyperionsoft.com"
                                style={{
                                    display: 'inline-block',
                                    padding: '16px 40px',
                                    backgroundColor: '#00d4ff',
                                    color: '#000',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease'
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
                                Email: rin@hyperionsoft.com
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Careers;

