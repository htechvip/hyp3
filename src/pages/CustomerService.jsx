import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CustomerService = () => (
    <>
        <SEO
            title="AI Customer Service Solutions | Hyperionsoft"
            description="AI-powered customer service solutions including voice AI, chatbots, and intelligent customer support systems for financial institutions."
            keywords="AI customer service, voice AI, chatbots, customer support AI, conversational AI, intelligent customer service"
            image="/assets/voice-ai.jpg"
        />
        <Header />
        <HeroSection
            heroText="Customer Service"
            subtitle="Overview"
            buttonText={null}
            image="/assets/service-3.jpg"
        />
        <section className="service-detail" id="customer-service">
            <h2>Customer Service</h2>
            <h3>Overview</h3>
            <p>Enhance customer experience and operational efficiency with AI‑powered service capabilities that provide instant, accurate responses while reducing service costs.</p>
            <h3>Key Challenges We Address</h3>
            <ul>
                <li>High call center costs and long wait times</li>
                <li>Inconsistent service quality across channels</li>
                <li>Inability to scale during peak volumes</li>
                <li>Limited personalization in customer interactions</li>
                <li>Repetitive inquiries consuming agent time</li>
                <li>Lack of 24/7 service availability</li>
            </ul>
            <h3>Our Approach</h3>
            <h4>Strategic Advisory</h4>
            <ul>
                <li>Customer service AI strategy and roadmap</li>
                <li>Channel optimization analysis</li>
                <li>Chatbot vs. virtual assistant vs. agent augmentation decisions</li>
                <li>Vendor evaluation and build vs. buy analysis</li>
                <li>Customer experience impact assessment</li>
            </ul>
            <h4>Selective Implementation</h4>
            <ul>
                <li>Conversational AI chatbots and virtual assistants</li>
                <li>Intent classification and query routing</li>
                <li>Sentiment analysis and escalation detection</li>
                <li>Agent assist and next‑best‑response systems</li>
                <li>Voice‑based interactive systems</li>
                <li>Personalized product recommendations</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Natural language understanding (NLU) and generation</li>
                <li>Multi‑channel support (web chat, mobile, voice, messaging)</li>
                <li>Integration with core banking and CRM systems</li>
                <li>Conversation flow design and optimization</li>
                <li>Handoff protocols for complex issues</li>
                <li>Continuous learning from customer interactions</li>
            </ul>
            <h3>Key Considerations</h3>
            <ul>
                <li>Balance automation with human touch</li>
                <li>Brand voice and tone consistency</li>
                <li>Privacy and data security in conversations</li>
                <li>Escalation paths for frustrated customers</li>
                <li>Accessibility requirements (ADA compliance)</li>
                <li>Multilingual support capabilities</li>
            </ul>
            <h3>Typical Outcomes</h3>
            <ul>
                <li>40‑60% reduction in routine inquiry handling costs</li>
                <li>70‑85% of common questions resolved without agents</li>
                <li>24/7 availability with instant response times</li>
                <li>20‑35% improvement in customer satisfaction scores</li>
                <li>30‑50% increase in agent productivity through augmentation</li>
            </ul>
            <h3>Case Example</h3>
            <p>Digital bank: Implemented AI chatbot handling 78% of customer inquiries without agent involvement. Reduced average handling time by 45% while improving customer satisfaction scores by 28%. System handles 500K+ monthly conversations.</p>
        </section>
        <Footer />
    </>
);

export default CustomerService;
