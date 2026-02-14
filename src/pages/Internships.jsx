import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Internships = () => {
    const positions = [
        {
            title: 'Product Manager Intern',
            emoji: '\u{1F680}',
            description: 'Shape the future of AI products. Work directly with cross-functional teams to define roadmaps, gather user insights, and ship features that matter.',
            skills: ['Product strategy', 'User research', 'Agile methodology']
        },
        {
            title: 'Data Scientist Intern',
            emoji: '\u{1F52C}',
            description: 'Dive deep into data and build models that power real decisions. From exploratory analysis to deploying ML pipelines, you\'ll own meaningful projects end-to-end.',
            skills: ['Python', 'Machine learning', 'Statistical analysis']
        },
        {
            title: 'Software Engineer Intern',
            emoji: '\u{1F4BB}',
            description: 'Write production code from day one. Build scalable systems, APIs, and interfaces that bring our AI solutions to life for real users.',
            skills: ['Full-stack development', 'System design', 'API development']
        },
        {
            title: 'Data Engineer Intern',
            emoji: '\u{26A1}',
            description: 'Architect the data infrastructure that fuels everything we do. Design pipelines, optimize data flows, and ensure our AI models have the fuel they need.',
            skills: ['Data pipelines', 'SQL & NoSQL', 'Cloud infrastructure']
        },
        {
            title: 'Content Marketing Intern',
            emoji: '\u{270D}\u{FE0F}',
            description: 'Tell the story of AI innovation. Create compelling content that makes complex technology accessible and positions Hyperionsoft as a thought leader.',
            skills: ['Content creation', 'SEO & analytics', 'Brand storytelling']
        }
    ];

    const perks = [
        { icon: '\u{1F9D1}\u200D\u{1F3EB}', title: 'Mentorship', text: 'Paired with a senior team member who\'s invested in your growth from day one.' },
        { icon: '\u{1F3D7}\u{FE0F}', title: 'Real Projects', text: 'No busy work. You\'ll contribute to projects that ship to production.' },
        { icon: '\u{1F310}', title: 'Cutting-Edge AI', text: 'Work with the latest in AI applied to drug discovery, finance, and international trade.' },
        { icon: '\u{1F91D}', title: 'Team Culture', text: 'Join a collaborative, fast-paced team that celebrates wins together.' },
        { icon: '\u{1F4C8}', title: 'Career Launchpad', text: 'Top performers receive full-time return offers. This could be the start of something big.' }
    ];

    const domains = [
        {
            title: 'Drug Discovery',
            description: 'Use AI to accelerate how new therapies are identified, tested, and brought to patients faster than ever before.',
            color: '#00d4ff'
        },
        {
            title: 'Finance',
            description: 'Build intelligent systems that reshape credit risk, fraud detection, and financial decision-making at scale.',
            color: '#7b61ff'
        },
        {
            title: 'International Trade',
            description: 'Apply AI to optimize global supply chains, trade compliance, and cross-border commerce.',
            color: '#ff6b6b'
        }
    ];

    return (
        <>
            <SEO
                title="Summer Internships 2026 | Hyperionsoft"
                description="Join Hyperionsoft's Summer 2026 internship program. Paid positions in product management, data science, software engineering, data engineering, and content marketing. Apply AI to drug discovery, finance, and international trade."
                keywords="summer internship 2026, AI internship, tech internship, data science intern, software engineer intern, product manager intern"
                image="/assets/hero.png"
            />
            <div className="scroll-container">
                <Header />
                <HeroSection
                    heroText="Summer 2026 Internships"
                    subtitle="CAREERS"
                    buttonText=""
                    image="/assets/internships-hero.jpg"
                />

                {/* Intro Section */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 52px)',
                            fontWeight: '700',
                            marginBottom: '30px',
                            color: '#fff',
                            lineHeight: '1.2'
                        }}>
                            Your Summer. Your Launchpad.
                        </h2>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '1.8',
                            color: '#e0e0e0',
                            marginBottom: '20px'
                        }}>
                            This isn't your average internship. At Hyperionsoft, interns work on real problems at the intersection of AI and industries that matter. You'll build, ship, and learn alongside a team that's pushing boundaries in drug discovery, finance, and international trade.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#999'
                        }}>
                            We're looking for curious, driven students ready to make an impact. If that's you, keep reading.
                        </p>
                        <a
                            href="https://forms.gle/hYCcS1wamR8swzAw9"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                marginTop: '40px',
                                display: 'inline-block',
                                padding: '12px 28px',
                                backgroundColor: 'rgba(255, 107, 107, 0.15)',
                                border: '1px solid rgba(255, 107, 107, 0.4)',
                                borderRadius: '8px',
                                color: '#ff6b6b',
                                fontSize: '16px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 107, 107, 0.25)';
                                e.target.style.borderColor = '#ff6b6b';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 107, 107, 0.15)';
                                e.target.style.borderColor = 'rgba(255, 107, 107, 0.4)';
                            }}
                        >
                            Spots are limited &mdash; apply early
                        </a>
                    </div>
                </section>

                {/* Application Domains */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 48px)',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                Where You'll Make an Impact
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}>
                                Our interns work across three high-impact domains, using AI technology to solve problems that matter.
                            </p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            {domains.map((domain, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: '40px',
                                        backgroundColor: '#1a1a1a',
                                        border: `1px solid ${domain.color}33`,
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = domain.color;
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = `0 8px 24px ${domain.color}22`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = `${domain.color}33`;
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: '600',
                                        marginBottom: '16px',
                                        color: domain.color
                                    }}>
                                        {domain.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        color: '#999'
                                    }}>
                                        {domain.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#000',
                    color: '#fff'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 48px)',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                Open Internship Positions
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Five roles. Five ways to shape the future of AI. Find your fit.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '30px'
                        }}>
                            {positions.map((pos, index) => (
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
                                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>
                                        {pos.emoji}
                                    </div>
                                    <h3 style={{
                                        fontSize: '22px',
                                        fontWeight: '600',
                                        marginBottom: '14px',
                                        color: '#fff'
                                    }}>
                                        {pos.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        color: '#999',
                                        marginBottom: '20px'
                                    }}>
                                        {pos.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {pos.skills.map((skill, i) => (
                                            <span key={i} style={{
                                                padding: '6px 14px',
                                                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                                border: '1px solid rgba(0, 212, 255, 0.25)',
                                                borderRadius: '20px',
                                                fontSize: '13px',
                                                color: '#00d4ff'
                                            }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Should Apply */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff'
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: '700',
                            marginBottom: '20px',
                            color: '#fff'
                        }}>
                            Who Should Apply
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#999',
                            marginBottom: '50px',
                            maxWidth: '700px',
                            margin: '0 auto 50px'
                        }}>
                            We're looking for students who are ready to go beyond the classroom and tackle real-world challenges.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                            textAlign: 'left'
                        }}>
                            {[
                                { label: 'Currently enrolled in a 4-year university', icon: '\u{1F393}' },
                                { label: 'Sophomore, Junior, or Senior standing (2nd, 3rd, or 4th year)', icon: '\u{1F4DA}' },
                                { label: 'Passionate about AI, data, or technology', icon: '\u{2764}\u{FE0F}' },
                                { label: 'Eager to work on real problems with real impact', icon: '\u{1F3AF}' },
                                { label: 'Strong communicator and team player', icon: '\u{1F4AC}' },
                                { label: 'Available for the full summer program', icon: '\u{2600}\u{FE0F}' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '20px 24px',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px'
                                }}>
                                    <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
                                    <span style={{ fontSize: '16px', color: '#e0e0e0', lineHeight: '1.4' }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Perks Section */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#000',
                    color: '#fff'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 48px)',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>
                                Why You'll Love It Here
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#999',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                We invest in our interns because we believe in building the next generation of AI leaders.
                            </p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '24px'
                        }}>
                            {perks.map((perk, index) => (
                                <div key={index} style={{
                                    padding: '32px',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#00d4ff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#333';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ fontSize: '32px', marginBottom: '14px' }}>{perk.icon}</div>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '10px',
                                        color: '#fff'
                                    }}>
                                        {perk.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#999'
                                    }}>
                                        {perk.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{
                    padding: '100px 40px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff'
                }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                        padding: '60px 40px',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderRadius: '8px'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 3.5vw, 40px)',
                            fontWeight: '700',
                            marginBottom: '20px',
                            color: '#fff'
                        }}>
                            Ready to Build the Future?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#999',
                            marginBottom: '16px'
                        }}>
                            Tell us which role excites you and why you want to spend your summer with Hyperionsoft.
                        </p>
                        <p style={{
                            fontSize: '15px',
                            color: '#ff6b6b',
                            marginBottom: '32px',
                            fontWeight: '500'
                        }}>
                            Spots are limited. Don't wait.
                        </p>
                        <a
                            href="https://forms.gle/hYCcS1wamR8swzAw9"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            Apply Now
                        </a>
                        <div style={{ marginTop: '24px' }}>
                            <Link
                                to="/careers"
                                style={{
                                    color: '#00d4ff',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                View full-time positions &rarr;
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Internships;
