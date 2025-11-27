import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FintechVoiceAI = () => {
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Load the markdown content
        fetch('/insights/the-fintech-that-deleted-its-phone-menu-and-why-3-million-customers-actually-call-them-now.md')
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error('Error loading article:', error));
    }, []);

    // Parse markdown content into sections
    const parseContent = (markdown) => {
        if (!markdown) return { title: '', intro: '', sections: [] };

        const lines = markdown.split('\n');
        let title = '';
        let intro = '';
        let currentSection = { heading: '', content: '' };
        const sections = [];
        let foundFirstH2 = false;

        lines.forEach(line => {
            if (line.startsWith('# ')) {
                title = line.replace('# ', '');
            } else if (line.startsWith('## ')) {
                foundFirstH2 = true;
                if (currentSection.heading) {
                    sections.push(currentSection);
                }
                currentSection = { heading: line.replace('## ', ''), content: '' };
            } else {
                // If we haven't found the first H2 yet, add to intro
                if (!foundFirstH2 && title) {
                    intro += line + '\n';
                } else {
                    currentSection.content += line + '\n';
                }
            }
        });

        if (currentSection.heading) {
            sections.push(currentSection);
        }

        return { title, intro, sections };
    };

    // Format content with basic markdown
    const formatText = (text) => {
        let html = text;

        // Convert bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Convert italic
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Convert h3
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');

        // Convert lists
        html = html.replace(/^- (.*$)/gim, '<li>$1</li>');

        // Wrap consecutive list items in ul
        html = html.replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`);

        // Convert paragraphs
        const paragraphs = html.split('\n\n').map(para => {
            para = para.trim();
            if (!para) return '';
            if (para.startsWith('<h3') || para.startsWith('<ul') || para.startsWith('<li')) {
                return para;
            }
            return `<p>${para}</p>`;
        }).filter(p => p);

        return paragraphs.join('\n');
    };

    const { title, intro, sections } = parseContent(content);

    return (
        <>
            <Header />
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#000',
                paddingTop: '80px'
            }}>
                {/* Article Header */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '60px 40px 40px'
                }}>
                    {/* Breadcrumb */}
                    <div style={{
                        marginBottom: '30px'
                    }}>
                        <button
                            onClick={() => navigate('/insights')}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#999',
                                fontSize: '14px',
                                cursor: 'pointer',
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#fff'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            <span>←</span> Back to Insights
                        </button>
                    </div>

                    {/* Category Tag */}
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        backgroundColor: '#1a1a1a',
                        color: '#00d4ff',
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '24px',
                        borderRadius: '2px',
                        border: '1px solid #333'
                    }}>
                        AI in Customer Service
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        color: '#fff',
                        marginBottom: '24px',
                        maxWidth: '900px'
                    }}>
                        {title || 'The Fintech That Deleted Its Phone Menu—And Why 3 Million Customers Actually Call Them Now'}
                    </h1>

                    {/* Meta Info */}
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        fontSize: '14px',
                        color: '#999',
                        marginBottom: '40px',
                        paddingBottom: '30px',
                        borderBottom: '1px solid #333'
                    }}>
                        <span>Published: January 10, 2025</span>
                        <span>•</span>
                        <span>25 min read</span>
                    </div>
                </div>

                {/* Article Content */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '0 40px 80px',
                    position: 'relative'
                }}>
                    {/* Social Share Sidebar */}
                    <div style={{
                        position: 'sticky',
                        top: '120px',
                        left: '-80px',
                        float: 'left',
                        marginLeft: '-80px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <button style={{
                            width: '40px',
                            height: '40px',
                            border: '1px solid #333',
                            background: '#1a1a1a',
                            color: '#fff',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#00d4ff';
                                e.target.style.background = '#0a0a0a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#333';
                                e.target.style.background = '#1a1a1a';
                            }}
                            title="Share on LinkedIn">
                            in
                        </button>
                        <button style={{
                            width: '40px',
                            height: '40px',
                            border: '1px solid #333',
                            background: '#1a1a1a',
                            color: '#fff',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#00d4ff';
                                e.target.style.background = '#0a0a0a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#333';
                                e.target.style.background = '#1a1a1a';
                            }}
                            title="Share on Twitter">
                            𝕏
                        </button>
                        <button style={{
                            width: '40px',
                            height: '40px',
                            border: '1px solid #333',
                            background: '#1a1a1a',
                            color: '#fff',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#00d4ff';
                                e.target.style.background = '#0a0a0a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#333';
                                e.target.style.background = '#1a1a1a';
                            }}
                            title="Copy link">
                            🔗
                        </button>
                    </div>

                    {/* Article Body */}
                    <article style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#e0e0e0',
                        fontFamily: 'Georgia, serif'
                    }}>
                        {/* Intro Section */}
                        {intro && (
                            <>
                                <div
                                    className="article-intro"
                                    dangerouslySetInnerHTML={{ __html: formatText(intro) }}
                                />
                                {/* Hero Image */}
                                <div style={{
                                    marginTop: '40px',
                                    marginBottom: '60px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '400px',
                                    backgroundImage: 'url(/assets/voice-ai.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                                }} />
                            </>
                        )}

                        {/* Main Sections */}
                        {sections.map((section, index) => {
                            // Add image after "Where Voice AI Is Winning Today" section
                            const shouldShowImage = section.heading === 'Where Voice AI Is Winning Today: Real Deployments, Real Results';
                            
                            return (
                            <React.Fragment key={index}>
                            <section style={{ marginBottom: '50px' }}>
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    color: '#fff',
                                    marginBottom: '24px',
                                    marginTop: index === 0 ? '0' : '60px',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    lineHeight: '1.3'
                                }}>
                                    {section.heading}
                                </h2>
                                <div
                                    className="article-section"
                                    dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
                                />
                            </section>
                            {shouldShowImage && (
                                <div style={{
                                    marginTop: '40px',
                                    marginBottom: '60px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '350px',
                                    backgroundImage: 'url(/assets/service-3.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                                }} />
                            )}
                            </React.Fragment>
                        )})}
                    </article>
                </div>

                {/* Related Content Section */}
                <div style={{
                    backgroundColor: '#0a0a0a',
                    padding: '80px 40px',
                    marginTop: '60px',
                    borderTop: '1px solid #333'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            marginBottom: '40px',
                            color: '#fff'
                        }}>
                            How We've Helped Clients
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '30px'
                        }}>
                            {/* Case Study Card 1 */}
                            <div
                                onClick={() => navigate('/services/customer-service')}
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    padding: '30px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                                    border: '1px solid #333'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,212,255,0.15)';
                                    e.currentTarget.style.borderColor = '#00d4ff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#333';
                                }}
                            >
                                <div style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#00d4ff',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    marginBottom: '16px'
                                }}>
                                    Customer Service
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    color: '#fff',
                                    marginBottom: '12px',
                                    lineHeight: '1.4'
                                }}>
                                    Voice AI Customer Service Transformation
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#999',
                                    lineHeight: '1.6'
                                }}>
                                    Deployed voice AI that eliminated phone menus, reduced wait times by 85%, and increased customer satisfaction scores.
                                </p>
                            </div>

                            {/* Case Study Card 2 */}
                            <div
                                onClick={() => navigate('/services/customer-service')}
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    padding: '30px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                                    border: '1px solid #333'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,212,255,0.15)';
                                    e.currentTarget.style.borderColor = '#00d4ff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#333';
                                }}
                            >
                                <div style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#00d4ff',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    marginBottom: '16px'
                                }}>
                                    Customer Experience
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    color: '#fff',
                                    marginBottom: '12px',
                                    lineHeight: '1.4'
                                }}>
                                    Natural Language Customer Support
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#999',
                                    lineHeight: '1.6'
                                }}>
                                    Implemented conversational AI that understands context and intent, resolving 70% of inquiries without human escalation.
                                </p>
                            </div>

                            {/* Case Study Card 3 */}
                            <div
                                onClick={() => navigate('/services/customer-service')}
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    padding: '30px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                                    border: '1px solid #333'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,212,255,0.15)';
                                    e.currentTarget.style.borderColor = '#00d4ff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#333';
                                }}
                            >
                                <div style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#00d4ff',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    marginBottom: '16px'
                                }}>
                                    Digital Transformation
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    color: '#fff',
                                    marginBottom: '12px',
                                    lineHeight: '1.4'
                                }}>
                                    Omnichannel AI Support Platform
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#999',
                                    lineHeight: '1.6'
                                }}>
                                    Built unified AI platform handling voice, chat, and email with consistent experience across all channels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '80px 40px'
                }}>
                    <div style={{
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            marginBottom: '20px',
                            color: '#fff'
                        }}>
                            Ready to talk?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#999',
                            marginBottom: '40px',
                            lineHeight: '1.6'
                        }}>
                            We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.
                        </p>
                        <button
                            onClick={() => navigate('/services')}
                            style={{
                                background: '#00d4ff',
                                border: 'none',
                                color: '#000',
                                padding: '16px 40px',
                                fontSize: '14px',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#00b8e6';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#00d4ff';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Explore Our Services
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FintechVoiceAI;

