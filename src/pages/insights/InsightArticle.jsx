import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

// Article configuration
const articleConfig = {
    'the-380-billion-opportunity-hiding-in-plain-sight-why-ai-is-finally-unlocking-the-informal-economy': {
        category: 'AI in Financial Risk',
        publishedDate: 'November 27, 2024',
        readTime: '15 min read',
        heroImage: '/assets/ml.jpg',
        sectionImageHeading: 'The Data Sources Revolutionizing Underwriting',
        sectionImage: '/assets/service-1.jpg',
        relatedContent: [
            {
                category: 'Credit Risk & Lending',
                title: 'AI-Powered Credit Models for Emerging Markets',
                description: 'Developed alternative data underwriting models that expanded credit access while maintaining risk standards.',
                link: '/services/credit-risk'
            },
            {
                category: 'Fraud Detection',
                title: 'Real-Time Fraud Prevention System',
                description: 'Implemented ML-based fraud detection reducing false positives by 60% while catching 95% of fraud attempts.',
                link: '/services/fraud-detection'
            },
            {
                category: 'Regulatory Compliance',
                title: 'Explainable AI for Fair Lending Compliance',
                description: 'Built interpretable models meeting regulatory requirements while maintaining predictive performance.',
                link: '/services/regulatory-compliance'
            }
        ]
    },
    'the-47-million-problem-one-bank-solved-with-ai-agents-and-what-it-means-for-financial-services': {
        category: 'AI in Financial Services',
        publishedDate: 'December 15, 2024',
        readTime: '20 min read',
        heroImage: '/assets/voice-ai.jpg',
        sectionImageHeading: 'Where AI Agents Create Real Impact Today',
        sectionImage: '/assets/service-2.jpg',
        relatedContent: [
            {
                category: 'Fraud Detection',
                title: 'AI Agent-Powered Fraud Investigation',
                description: 'Deployed autonomous AI agents that reduced fraud investigation time from 23 minutes to 47 seconds, handling 78% of cases end-to-end.',
                link: '/services/fraud-detection'
            },
            {
                category: 'Customer Service',
                title: 'Intelligent Customer Service Agents',
                description: 'AI agents that understand context and take action, automating 68% of servicing requests with instant responses.',
                link: '/services/customer-service'
            },
            {
                category: 'Loan Processing',
                title: 'Automated Loan Underwriting Agents',
                description: 'End-to-end loan processing agents that reduced time from application to decision from 5-7 days to 4-6 hours.',
                link: '/services/credit-risk'
            }
        ]
    },
    'the-fintech-that-deleted-its-phone-menu-and-why-3-million-customers-actually-call-them-now': {
        category: 'AI in Customer Service',
        publishedDate: 'January 10, 2025',
        readTime: '25 min read',
        heroImage: '/assets/voice-ai.jpg',
        sectionImageHeading: 'Where Voice AI Is Winning Today: Real Deployments, Real Results',
        sectionImage: '/assets/service-3.jpg',
        relatedContent: [
            {
                category: 'Customer Service',
                title: 'Voice AI Customer Service Transformation',
                description: 'Deployed voice AI that eliminated phone menus, reduced wait times by 85%, and increased customer satisfaction scores.',
                link: '/services/customer-service'
            },
            {
                category: 'Customer Experience',
                title: 'Natural Language Customer Support',
                description: 'Implemented conversational AI that understands context and intent, resolving 70% of inquiries without human escalation.',
                link: '/services/customer-service'
            },
            {
                category: 'Digital Transformation',
                title: 'Omnichannel AI Support Platform',
                description: 'Built unified AI platform handling voice, chat, and email with consistent experience across all channels.',
                link: '/services/customer-service'
            }
        ]
    },
    'the-847-wire-transfer-that-cost-0-03-and-why-2025-is-bankings-stablecoin-reckoning': {
        category: 'Payments & Transactions',
        publishedDate: 'February 5, 2025',
        readTime: '22 min read',
        heroImage: '/assets/service-1.jpg',
        sectionImageHeading: 'Where Stablecoins Are Actually Being Used Today',
        sectionImage: '/assets/service-2.jpg',
        relatedContent: [
            {
                category: 'Payments & Transactions',
                title: 'Stablecoin Payment Infrastructure',
                description: 'Built enterprise-grade stablecoin payment systems reducing cross-border transfer costs by 99% and settlement times from days to seconds.',
                link: '/services/payments-transactions'
            },
            {
                category: 'Digital Banking',
                title: 'Blockchain-Based Treasury Management',
                description: 'Implemented stablecoin treasury solutions enabling real-time global payments and 24/7 settlement for corporate clients.',
                link: '/services/payments-transactions'
            },
            {
                category: 'Trade Finance',
                title: 'Smart Contract Trade Finance',
                description: 'Deployed blockchain-based trade finance solutions using stablecoins for instant settlement and automated letter of credit processing.',
                link: '/services/payments-transactions'
            }
        ]
    },
    'the-3-2-million-deepfake-that-fooled-a-banks-ceo-and-why-every-financial-institution-is-now-vulnerable': {
        category: 'Fraud Detection',
        publishedDate: 'March 12, 2025',
        readTime: '28 min read',
        heroImage: '/assets/ml.jpg',
        sectionImageHeading: 'The Seven Categories of AI-Enabled Fraud Devastating Financial Services',
        sectionImage: '/assets/service-3.jpg',
        relatedContent: [
            {
                category: 'Fraud Detection',
                title: 'AI-Powered Fraud Prevention System',
                description: 'Deployed advanced AI fraud detection that identifies deepfakes, synthetic identities, and AI-generated attacks with 95% accuracy.',
                link: '/services/fraud-detection'
            },
            {
                category: 'Security',
                title: 'Real-Time Behavioral Analysis',
                description: 'Implemented continuous authentication and behavioral biometrics that detect account compromise even when credentials are stolen.',
                link: '/services/fraud-detection'
            },
            {
                category: 'Risk Management',
                title: 'Zero Trust Security Architecture',
                description: 'Built zero-trust systems requiring verification for every transaction, preventing deepfake authentication bypass and account takeover.',
                link: '/services/risk-management'
            }
        ]
    }
};

const InsightArticle = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [linkCopied, setLinkCopied] = useState(false);
    const navigate = useNavigate();
    
    const config = articleConfig[slug] || {
        category: 'AI Insights',
        publishedDate: 'Recent',
        readTime: '10 min read',
        heroImage: '/assets/ml.jpg',
        sectionImageHeading: '',
        sectionImage: '',
        relatedContent: []
    };

    useEffect(() => {
        if (slug) {
            fetch(`/insights/${slug}.md`)
                .then(response => response.text())
                .then(text => setContent(text))
                .catch(error => console.error('Error loading article:', error));
        }
    }, [slug]);

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
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`);
        
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

    // Generate SEO description from intro or first paragraph
    const seoDescription = intro 
        ? intro.substring(0, 160).replace(/\*\*/g, '').replace(/\*/g, '') + '...'
        : `${config.category} article by Hyperionsoft. ${title || 'Expert insights on AI in financial services.'}`;

    // Get current article URL
    const articleUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/insights/${slug}`
        : `https://hyperionsoft.com/insights/${slug}`;

    // Share functions
    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareOnX = () => {
        const text = encodeURIComponent(title || 'Check out this article');
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${text}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(articleUrl);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = articleUrl;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setLinkCopied(true);
                setTimeout(() => setLinkCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy link:', err);
            }
            document.body.removeChild(textArea);
        }
    };

    // Generate article structured data
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title || 'AI Insights Article',
        "description": seoDescription,
        "image": config.heroImage,
        "datePublished": config.publishedDate,
        "author": {
            "@type": "Organization",
            "name": "Hyperionsoft"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Hyperionsoft",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hyperionsoft.com/assets/hero.png"
            }
        }
    };

    return (
        <>
            <SEO
                title={`${title || 'AI Insights'} | Hyperionsoft`}
                description={seoDescription}
                keywords={`${config.category}, AI financial services, ${title ? title.split(' ').slice(0, 5).join(', ') : 'AI insights'}`}
                image={config.heroImage}
                type="article"
                structuredData={articleStructuredData}
            />
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
                    <div style={{ marginBottom: '30px' }}>
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
                        {config.category}
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
                        {title || 'Article Title'}
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
                        <span>Published: {config.publishedDate}</span>
                        <span>•</span>
                        <span>{config.readTime}</span>
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
                        gap: '12px',
                        zIndex: 10
                    }}>
                        <button 
                            onClick={shareOnLinkedIn}
                            style={{
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
                                transition: 'all 0.2s',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#0077b5';
                                e.target.style.background = '#0077b5';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#333';
                                e.target.style.background = '#1a1a1a';
                            }}
                            title="Share on LinkedIn"
                            aria-label="Share on LinkedIn">
                            in
                        </button>
                        <button 
                            onClick={shareOnX}
                            style={{
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
                                transition: 'all 0.2s',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#000';
                                e.target.style.background = '#000';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#333';
                                e.target.style.background = '#1a1a1a';
                            }}
                            title="Share on X (Twitter)"
                            aria-label="Share on X">
                            𝕏
                        </button>
                        <button 
                            onClick={copyLink}
                            style={{
                                width: '40px',
                                height: '40px',
                                border: linkCopied ? '1px solid #00d4ff' : '1px solid #333',
                                background: linkCopied ? '#00d4ff' : '#1a1a1a',
                                color: linkCopied ? '#000' : '#fff',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                transition: 'all 0.2s',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                if (!linkCopied) {
                                    e.target.style.borderColor = '#00d4ff';
                                    e.target.style.background = '#0a0a0a';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!linkCopied) {
                                    e.target.style.borderColor = '#333';
                                    e.target.style.background = '#1a1a1a';
                                }
                            }}
                            title={linkCopied ? "Link copied!" : "Copy link"}
                            aria-label="Copy link">
                            {linkCopied ? '✓' : '🔗'}
                        </button>
                    </div>
                    
                    {/* Toast notification for copied link */}
                    {linkCopied && (
                        <div style={{
                            position: 'fixed',
                            bottom: '30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#00d4ff',
                            color: '#000',
                            padding: '12px 24px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            fontWeight: '600',
                            zIndex: 1000,
                            boxShadow: '0 4px 12px rgba(0, 212, 255, 0.3)',
                            animation: 'fadeIn 0.3s ease-in'
                        }}>
                            Link copied to clipboard!
                        </div>
                    )}

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
                                    backgroundImage: `url(${config.heroImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                                }} />
                            </>
                        )}

                        {/* Main Sections */}
                        {sections.map((section, index) => {
                            const shouldShowImage = config.sectionImageHeading && section.heading === config.sectionImageHeading;
                            
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
                            {shouldShowImage && config.sectionImage && (
                                <div style={{
                                    marginTop: '40px',
                                    marginBottom: '60px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '350px',
                                    backgroundImage: `url(${config.sectionImage})`,
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
                {config.relatedContent && config.relatedContent.length > 0 && (
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
                                {config.relatedContent.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => navigate(item.link)}
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
                                            {item.category}
                                        </div>
                                        <h3 style={{
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            color: '#fff',
                                            marginBottom: '12px',
                                            lineHeight: '1.4'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '16px',
                                            color: '#999',
                                            lineHeight: '1.6'
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

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

export default InsightArticle;

