import React from 'react';

const ServiceDetails = () => (
    <section className="service-details-section">
        {/* Credit Risk & Lending */}
        <div className="service-detail" id="credit-risk">
            <h2>Credit Risk &amp; Lending</h2>
            <h3>Overview</h3>
            <p>Transform lending operations with AI systems that improve approval accuracy, reduce default rates, and accelerate decisioning—while meeting regulatory requirements for explainability and fair lending.</p>
            <h3>Key Challenges We Address</h3>
            <ul>
                <li>Manual underwriting creates bottlenecks and inconsistent decisions</li>
                <li>Traditional credit scoring misses creditworthy thin‑file applicants</li>
                <li>Portfolio risk assessment lacks real‑time insights</li>
                <li>Regulatory requirements for model explainability and fair lending compliance</li>
                <li>High default rates from inadequate risk prediction</li>
            </ul>
            <h3>Our Approach</h3>
            <h4>Strategic Advisory</h4>
            <ul>
                <li>Credit risk strategy development and use case prioritization</li>
                <li>Build vs. buy analysis for lending platforms</li>
                <li>Regulatory compliance roadmap for AI credit models</li>
                <li>Vendor evaluation and selection support</li>
            </ul>
            <h4>Selective Implementation</h4>
            <ul>
                <li>Credit scoring model development and validation</li>
                <li>Automated underwriting systems</li>
                <li>Portfolio risk assessment platforms</li>
                <li>Default prediction and early warning systems</li>
                <li>Alternative credit scoring for underserved segments</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Advanced ML models (gradient boosting, neural networks, ensemble methods)</li>
                <li>Alternative data integration (payment history, cash flow, behavioral data)</li>
                <li>Explainable AI with SHAP values and reason codes</li>
                <li>Fair lending analysis and bias testing</li>
                <li>A/B testing and champion‑challenger frameworks</li>
                <li>Real‑time decisioning infrastructure</li>
            </ul>
            <h3>Regulatory Considerations</h3>
            <ul>
                <li>Model Risk Management (SR 11‑7) compliance</li>
                <li>Fair lending requirements (ECOA, FCRA)</li>
                <li>Adverse action notice generation</li>
                <li>Model documentation and governance</li>
                <li>Regulatory audit preparation</li>
            </ul>
            <h3>Typical Outcomes</h3>
            <ul>
                <li>15‑30% improvement in approval accuracy</li>
                <li>20‑40% reduction in default rates</li>
                <li>50‑80% faster loan processing time</li>
                <li>10‑25% increase in approval rates while maintaining risk standards</li>
                <li>Regulatory approval for AI‑driven credit models</li>
            </ul>
            <h3>Case Example</h3>
            <p>Major regional bank: Implemented AI credit risk model for small business lending, improving approval accuracy by 23% while reducing defaults by 18%. System processes 50,000+ applications monthly with full explainability meeting regulatory requirements.</p>
        </div>
        {/* Fraud Detection & AML */}
        <div className="service-detail" id="fraud-aml">
            <h2>Fraud Detection &amp; AML</h2>
            <h3>Overview</h3>
            <p>Deploy real‑time fraud prevention and anti‑money laundering systems that catch more fraud while dramatically reducing false positives and investigation costs.</p>
            <h3>Key Challenges We Address</h3>
            <ul>
                <li>High false positive rates overwhelming investigation teams</li>
                <li>Reactive fraud detection missing sophisticated schemes</li>
                <li>Manual AML reviews consuming excessive resources</li>
                <li>Evolving fraud patterns requiring constant rule updates</li>
                <li>Regulatory pressure for enhanced monitoring capabilities</li>
                <li>Legacy systems unable to process real‑time decisions</li>
            </ul>
            <h3>Our Approach</h3>
            <h4>Strategic Advisory</h4>
            <ul>
                <li>Fraud and financial crime AI strategy</li>
                <li>Current system assessment and gap analysis</li>
                <li>Vendor evaluation for fraud detection platforms</li>
                <li>ROI modeling and business case development</li>
                <li>Regulatory compliance planning</li>
            </ul>
            <h4>Selective Implementation</h4>
            <ul>
                <li>Real‑time transaction fraud detection</li>
                <li>AML transaction monitoring systems</li>
                <li>Identity verification and authentication</li>
                <li>Network analysis for money laundering detection</li>
                <li>Anomaly detection for unusual patterns</li>
                <li>Case management and investigation prioritization</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Real‑time scoring (sub‑100ms response times)</li>
                <li>Behavioral biometrics and device fingerprinting</li>
                <li>Network graph analysis for money laundering rings</li>
                <li>Unsupervised learning for emerging fraud patterns</li>
                <li>Adaptive models that learn from new fraud types</li>
                <li>Multi‑channel fraud detection (card, digital, wire transfer)</li>
            </ul>
            <h3>Regulatory Considerations</h3>
            <ul>
                <li>Bank Secrecy Act (BSA) compliance</li>
                <li>FinCEN requirements and SAR filing</li>
                <li>OFAC sanctions screening</li>
                <li>Model validation and documentation</li>
                <li>Audit trail and explainability for investigations</li>
            </ul>
            <h3>Typical Outcomes</h3>
            <ul>
                <li>60‑75% reduction in false positive rates</li>
                <li>15‑30% increase in fraud detection accuracy</li>
                <li>40‑60% reduction in investigation time</li>
                <li>$2‑10M+ annual fraud loss prevention</li>
                <li>50‑70% faster suspicious activity identification</li>
            </ul>
            <h3>Case Example</h3>
            <p>Payment processor: Deployed real‑time fraud detection reducing false positives by 67% while improving fraud catch rate by 22%. System prevented $12M in fraud losses annually while cutting investigation costs by $800K.</p>
        </div>
        {/* Customer Service */}
        <div className="service-detail" id="customer-service">
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
        </div>
        {/* Regulatory Compliance */}
        <div className="service-detail" id="regulatory-compliance">
            <h2>Regulatory Compliance</h2>
            <h3>Overview</h3>
            <p>Automate compliance monitoring and reporting while ensuring AI models themselves meet regulatory standards—reducing risk and operational costs.</p>
            <h3>Key Challenges We Address</h3>
            <ul>
                <li>Manual compliance reviews consuming significant resources</li>
                <li>Difficulty keeping pace with regulatory changes</li>
                <li>Lack of explainability in AI decision‑making</li>
                <li>Model risk management requirements</li>
                <li>Fair lending and bias concerns in AI models</li>
                <li>Audit trail and documentation gaps</li>
            </ul>
            <h3>Our Approach</h3>
            <h4>Strategic Advisory</h4>
            <ul>
                <li>AI governance framework design</li>
                <li>Model risk management program development</li>
                <li>Regulatory readiness assessment for AI initiatives</li>
                <li>Compliance automation roadmap</li>
                <li>Regulatory engagement strategy and documentation</li>
            </ul>
            <h4>Selective Implementation</h4>
            <ul>
                <li>Automated compliance monitoring systems</li>
                <li>Model explainability and documentation platforms</li>
                <li>Fair lending analysis and bias testing</li>
                <li>Regulatory reporting automation</li>
                <li>Audit trail and lineage tracking</li>
                <li>Ongoing model performance monitoring</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Explainable AI (SHAP, LIME, counterfactual explanations)</li>
                <li>Bias detection and fairness metrics</li>
                <li>Model documentation generation</li>
                <li>Automated regulatory report creation</li>
                <li>Compliance rule engines</li>
                <li>Change detection and alert systems</li>
            </ul>
            <h3>Regulatory Frameworks</h3>
            <ul>
                <li>Model Risk Management (SR 11‑7, OCC 2011‑12)</li>
                <li>Fair lending (ECOA, FCRA, disparate impact analysis)</li>
                <li>Consumer protection (CFPB guidance)</li>
                <li>Banking regulations (OCC, Fed, FDIC)</li>
                <li>International standards (EU AI Act, GDPR considerations)</li>
                <li>Industry best practices (Model Risk Management)</li>
            </ul>
            <h3>Typical Outcomes</h3>
            <ul>
                <li>45‑65% reduction in compliance review time</li>
                <li>80‑90% faster regulatory reporting</li>
                <li>Zero findings in regulatory AI model audits</li>
                <li>30‑50% reduction in compliance‑related operational costs</li>
                <li>Enhanced regulatory relationships through proactive transparency</li>
            </ul>
            <h3>Case Example</h3>
            <p>Tier 1 bank: Built comprehensive model governance platform managing 40+ AI models across enterprise. Automated compliance documentation reduced audit preparation time by 60%. First AI credit model to receive full regulatory approval without remediation requirements.</p>
        </div>
        {/* Risk Management */}
        <div className="service-detail" id="risk-management">
            <h2>Risk Management</h2>
            <h3>Overview</h3>
            <p>Strengthen enterprise risk management with AI systems that provide better risk visibility, faster stress testing, and more accurate forecasting across market, credit, and operational risk domains.</p>
            <h3>Key Challenges We Address</h3>
            <ul>
                <li>Legacy risk models unable to capture complex relationships</li>
                <li>Slow stress testing and scenario analysis processes</li>
                <li>Limited real‑time risk monitoring capabilities</li>
                <li>Difficulty integrating multiple risk types</li>
                <li>Inadequate early warning systems</li>
                <li>Manual processes for risk reporting</li>
            </ul>
            <h3>Our Approach</h3>
            <h4>Strategic Advisory</h4>
            <ul>
                <li>Enterprise risk AI strategy</li>
                <li>Risk model modernization roadmap</li>
                <li>Model risk management framework</li>
                <li>Stress testing and scenario analysis enhancement</li>
                <li>Risk data infrastructure assessment</li>
            </ul>
            <h4>Selective Implementation</h4>
            <ul>
                <li>Advanced credit risk models</li>
                <li>Market risk and VaR calculation systems</li>
                <li>Operational risk prediction models</li>
                <li>Stress testing and scenario engines</li>
                <li>Risk aggregation and reporting platforms</li>
                <li>Early warning systems and dashboards</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Portfolio‑level risk modeling</li>
                <li>Monte Carlo simulation and scenario analysis</li>
                <li>Real‑time risk metric calculation</li>
                <li>Cross‑risk integration (credit, market, operational)</li>
                <li>Concentration risk identification</li>
                <li>Tail risk and extreme event modeling</li>
            </ul>
            <h3>Regulatory Considerations</h3>
            <ul>
                <li>Basel III/IV capital requirements</li>
                <li>CCAR/DFAST stress testing</li>
                <li>Model validation requirements</li>
                <li>Risk appetite framework alignment</li>
                <li>Board and committee reporting</li>
            </ul>
            <h3>Typical Outcomes</h3>
            <ul>
                <li>30‑50% faster stress testing cycles</li>
                <li>20‑35% improvement in risk prediction accuracy</li>
                <li>60‑80% reduction in risk reporting preparation time</li>
                <li>Earlier identification of portfolio deterioration (3‑6 months advance warning)</li>
                <li>Enhanced capital planning and optimization</li>
            </ul>
            <h3>Case Example</h3>
            <p>Asset manager: Deployed AI‑powered portfolio risk system providing real‑time risk metrics across $50B AUM. Improved risk prediction accuracy by 31% and reduced stress testing cycle from 2 weeks to 2 days. Early warning system identified emerging risks 4 months earlier than traditional models.</p>
        </div>
        {/* Payments & Transactions */}
        <div className="service-detail" id="payments-transactions">
            <h2>Payments &amp; Transactions</h2>
            <h3>Overview</h3>
            <p>Optimize payment processing, routing, and authorization decisions with AI that improves success rates, reduces costs, and enhances customer experience.</p>
            <h3>Key Challenges We Address</h3>
            <ul>
                <li>High payment failure rates due to suboptimal routing</li>
                <li>False declines frustrating customers and losing revenue</li>
                <li>Manual exception handling and reconciliation</li>
                <li>Fraud vs. friction balance in authorization</li>
                <li>Cross‑border payment complexity</li>
                <li>Settlement and clearing inefficiencies</li>
            </ul>
            <h3>Our Approach</h3>
            <h4>Strategic Advisory</h4>
            <ul>
                <li>Payments AI strategy and use case prioritization</li>
                <li>Authorization optimization analysis</li>
                <li>Payment routing strategy</li>
                <li>Vendor and processor evaluation</li>
                <li>Infrastructure modernization roadmap</li>
            </ul>
            <h4>Selective Implementation</h4>
            <ul>
                <li>Intelligent payment routing systems</li>
                <li>Authorization optimization engines</li>
                <li>Payment failure prediction and retry logic</li>
                <li>Transaction categorization and enrichment</li>
                <li>Reconciliation automation</li>
                <li>Cross‑border payment optimization</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Real‑time routing decisions across multiple processors</li>
                <li>Dynamic authorization strategies based on risk and context</li>
                <li>Network analysis for optimal payment paths</li>
                <li>Predictive models for payment success probability</li>
                <li>Automated exception handling</li>
                <li>Transaction‑level profitability optimization</li>
            </ul>
            <h3>Typical Outcomes</h3>
            <ul>
                <li>20‑35% reduction in payment failures</li>
                <li>15‑25% decrease in false authorization declines</li>
                <li>10‑20% savings on payment processing costs</li>
                <li>50‑70% reduction in manual reconciliation effort</li>
                <li>30‑45% improvement in cross‑border payment success</li>
            </ul>
            <h3>Case Example</h3>
            <p>E‑commerce platform: Implemented intelligent payment routing reducing failure rates by 28% and processing costs by 18%. Authorization optimization decreased false declines by 21%, recovering $4M in annual revenue. System processes 2M+ daily transactions across 15 payment processors.</p>
        </div>
    </section>
);

export default ServiceDetails;
