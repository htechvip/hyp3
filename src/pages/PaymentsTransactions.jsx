import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const PaymentsTransactions = () => (
    <>
        <Header />
        <HeroSection
            heroText="Payments & Transactions"
            subtitle="Overview"
            buttonText={null}
            image="/assets/voice-ai.jpg"
        />
        <section className="service-detail" id="payments-transactions">
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
        </section>
        <Footer />
    </>
);

export default PaymentsTransactions;
