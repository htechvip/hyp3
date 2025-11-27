export const modelsData = [
    {
        id: "credit-sight",
        title: "CreditSight™ - Next-Generation Credit Decisioning",
        shortDescription: "Advanced ML model that predicts default probability with 25-35% better accuracy than traditional FICO-based approaches.",
        image: "/assets/modellogo-1.png",
        challenge: "Traditional credit scoring misses 20-30% of creditworthy applicants while still approving borrowers who default. Linear models can't capture complex risk patterns in modern consumer behavior.",
        whatItDoes: "Advanced ML model that predicts default probability with 25-35% better accuracy than traditional FICO-based approaches while expanding access to underserved populations.",
        metadata: {
            "Model Architecture": "Gradient Boosting Ensemble (XGBoost) with Neural Network augmentation",
            "Training Data Size": "10M+ loan applications, 5+ years of performance data",
            "Features": "300+ engineered features across 8 categories",
            "Update Frequency": "Quarterly retraining, monthly monitoring",
            "Inference Speed": "<50ms per application",
            "Explainability": "SHAP values, reason codes for every decision"
        },
        trainingApproach: [
            { title: "Primary Training", description: "Supervised learning on historical loan performance data with class balancing for rare default events. Multi-objective optimization balancing accuracy, fairness, and business objectives." },
            { title: "Validation Strategy", description: "Out-of-time validation on most recent 12 months. Separate validation sets for different loan products and customer segments." },
            { title: "Fairness Training", description: "Adversarial debiasing and equalized odds post-processing to ensure fair lending compliance across protected classes." }
        ],
        dataSources: {
            "Traditional Credit Data": ["TransUnion, Equifax, Experian (full credit reports)", "VantageScore and FICO score histories", "Trade line details and payment patterns"],
            "Alternative Data": ["Plaid/Finicity (bank transaction data, cash flow analysis)", "Argyle (employment and income verification)", "LexisNexis Risk Solutions (identity verification, fraud signals)", "Utility and telecom payment history (PRBC, eCredable)"],
            "Proprietary Behavioral Data": ["Application behavior (time spent, field changes, device characteristics)", "Customer engagement patterns (login frequency, feature usage)", "Historical internal performance data", "Collection and recovery outcomes"],
            "Macroeconomic Data": ["Federal Reserve economic indicators", "Regional unemployment and housing data", "Industry-specific trends"]
        },
        businessOutcomes: [
            "28% improvement in default prediction accuracy vs. traditional scorecards",
            "18% increase in approval rates while maintaining risk standards",
            "$15M+ annual reduction in credit losses (typical $1B portfolio)",
            "45% reduction in manual underwriting reviews"
        ],
        extraSection: {
            title: "Regulatory Compliance",
            content: [
                "Full model documentation meeting SR 11-7 requirements",
                "Adverse action reason codes (Reg B compliant)",
                "Fair lending analysis (ECOA, FCRA compliance)",
                "Disparate impact testing across protected classes",
                "Quarterly model validation and annual independent review"
            ]
        }
    },
    {
        id: "sentinel-ai",
        title: "SentinelAI™ - Portfolio Early Warning System",
        shortDescription: "Continuously monitors every loan in your portfolio, detecting subtle deterioration patterns that predict default months in advance.",
        image: "/assets/modellogo-2.png",
        challenge: "By the time borrowers miss a payment, it's often too late. Banks need 3-6 months advance warning to prevent defaults through early intervention.",
        whatItDoes: "Continuously monitors every loan in your portfolio, detecting subtle deterioration patterns that predict default months before traditional delinquency metrics.",
        metadata: {
            "Model Architecture": "LSTM (Long Short-Term Memory) neural networks with attention mechanisms",
            "Training Data Size": "50M+ monthly account observations, 8+ years",
            "Features": "Time-series of 150+ account, credit bureau, and behavioral metrics",
            "Update Frequency": "Real-time scoring, weekly model refresh",
            "Lookback Period": "24 months of historical patterns",
            "Prediction Horizon": "3, 6, and 12-month default probabilities"
        },
        trainingApproach: [
            { title: "Sequence Modeling", description: "LSTM networks trained on monthly time-series data to learn temporal patterns in account deterioration. Attention mechanisms identify which historical periods most strongly predict future default." },
            { title: "Multi-Horizon Training", description: "Simultaneous prediction of 3, 6, and 12-month default probabilities using shared representation learning." },
            { title: "Imbalanced Learning", description: "SMOTE (Synthetic Minority Oversampling) and focal loss to handle severe class imbalance in default events." }
        ],
        dataSources: {
            "Account-Level Data": ["Payment history (amounts, timing, partial payments)", "Balance trends and utilization patterns", "Customer service interactions and disputes", "Automated payment enrollment/cancellation"],
            "External Credit Data": ["Monthly credit bureau updates (soft pulls)", "Credit utilization trends across all accounts", "New credit inquiries and account openings", "Public records (liens, judgments, bankruptcies)"],
            "Behavioral Signals": ["Digital banking engagement (login frequency, feature usage)", "Mobile app activity patterns", "Statement viewing and paperless enrollment", "Communication preferences and response rates"],
            "Economic Indicators": ["Local unemployment trends", "Housing price indices (zip code level)", "Industry-specific economic indicators", "Seasonal patterns"],
            "Third-Party Data": ["Experian Clarity (real-time credit attribute updates)", "CoreLogic (property value trends for secured loans)", "Equifax Early Detection (financial stress indicators)"]
        },
        businessOutcomes: [
            "5-month average advance warning of defaults",
            "35% reduction in charge-offs through early intervention",
            "$8M+ annual savings in loss mitigation (typical $500M portfolio)",
            "4x improvement in collection efficiency",
            "Prioritized outreach to highest-risk accounts"
        ],
        extraSection: {
            title: "Implementation",
            content: "Real-time dashboard with risk stratification, automated alerts for accounts crossing risk thresholds, integration with collection and servicing systems."
        }
    },
    {
        id: "recovery-iq",
        title: "RecoveryIQ™ - Loss Severity Prediction Engine",
        shortDescription: "Predicts expected recovery rates and loss severity at time of default, enabling optimized collection strategies.",
        image: "/assets/models-3.jpg",
        challenge: "Not all defaults are equal. Predicting recovery rates determines optimal collection strategies, accurate loss reserves, and capital requirements.",
        whatItDoes: "Predicts expected recovery rates and loss severity at time of default, enabling optimized collection strategies and accurate financial provisioning.",
        metadata: {
            "Model Architecture": "Two-stage Random Forest (recovery/no-recovery, then severity)",
            "Training Data Size": "2M+ defaulted loans, 10+ years of recovery data",
            "Features": "200+ loan, collateral, borrower, and economic features",
            "Update Frequency": "Semi-annual retraining",
            "Inference Speed": "<100ms per account",
            "Output Range": "0-100% recovery rate, $ loss amount"
        },
        trainingApproach: [
            { title: "Two-Stage Modeling", description: "First model predicts probability of any recovery. Second model predicts recovery amount conditional on recovery occurring. This handles bimodal distribution of recoveries (many zeros, continuous positive values)." },
            { title: "Survival Analysis", description: "Cox proportional hazards models for time-to-recovery predictions, integrated with amount predictions." },
            { title: "Segment-Specific Models", description: "Separate models for secured vs. unsecured, different collateral types, various loan products to capture unique recovery dynamics." }
        ],
        dataSources: {
            "Loan Characteristics": ["Original loan terms (amount, rate, maturity)", "Current balance and accrued interest", "Lien position and security agreements", "Loan-to-value ratios"],
            "Collateral Data": ["Property valuations (AVM and appraisals)", "Vehicle values (KBB, NADA for auto loans)", "Collateral condition and depreciation", "Insurance and title status"],
            "Borrower Information": ["Assets and income at origination and default", "Employment status and stability", "Other obligations and liens", "State of residence (legal environment)"],
            "Default Context": ["Reason for default (job loss, medical, other)", "Time in default before charge-off", "Borrower cooperation level", "Bankruptcy filing status"],
            "Economic Factors": ["Local economic conditions at recovery time", "Real estate market trends (for secured loans)", "Legal environment (foreclosure timelines, deficiency judgments)"],
            "Recovery History": ["Internal collection outcomes", "Third-party collection agency performance", "Legal action results and costs", "Settlement negotiation patterns"],
            "Third-Party Services": ["Black Knight (property valuations and foreclosure timelines)", "S&P Global Market Intelligence (economic forecasts)", "LexisNexis Asset Locator (skip tracing, asset discovery)"]
        },
        businessOutcomes: [
            "92% accuracy in recovery rate predictions",
            "$5M+ improvement in reserve accuracy (reduced over-provisioning)",
            "25% improvement in collection ROI through strategy optimization",
            "Accurate CECL provisioning",
            "Optimized legal action decisions (sue vs. settle)"
        ],
        extraSection: {
            title: "Regulatory Application",
            content: "Critical for CECL (Current Expected Credit Loss) compliance, Basel III capital calculations, and financial statement accuracy. Auditor-approved methodology."
        }
    },
    {
        id: "shield-ai",
        title: "ShieldAI™ - Intelligent Fraud Prevention",
        shortDescription: "Real-time fraud detection combining anomaly detection, network analysis, and behavioral biometrics.",
        image: "/assets/service-1.jpg",
        challenge: "First-party fraud, synthetic identities, and organized fraud rings cost lenders billions annually. Traditional rule-based systems generate 90%+ false positive rates.",
        whatItDoes: "Real-time fraud detection combining anomaly detection, network analysis, and behavioral biometrics to catch fraud while minimizing customer friction.",
        metadata: {
            "Model Architecture": "Ensemble of Isolation Forest (anomaly detection), Graph Neural Networks (ring detection), and XGBoost (classification)",
            "Training Data Size": "50M+ applications, 500K+ confirmed fraud cases",
            "Features": "400+ identity, behavioral, and network features",
            "Update Frequency": "Daily model updates (online learning)",
            "Inference Speed": "<80ms per transaction",
            "False Positive Rate": "<5% (vs. 90%+ for rule-based systems)"
        },
        trainingApproach: [
            { title: "Anomaly Detection", description: "Unsupervised Isolation Forest identifies unusual patterns in applications without requiring labeled fraud examples. Particularly effective for novel fraud schemes." },
            { title: "Semi-Supervised Learning", description: "Combines labeled fraud cases with much larger unlabeled dataset using techniques like positive-unlabeled learning." },
            { title: "Graph Neural Networks", description: "Learns representations of applicants based on their connections (shared devices, addresses, phone numbers, IP addresses) to identify fraud rings." },
            { title: "Online Learning", description: "Model continuously updates as new fraud patterns emerge, adapting within hours rather than waiting for quarterly retraining." },
            { title: "Active Learning", description: "Strategically selects uncertain cases for manual review to improve model most efficiently." }
        ],
        dataSources: {
            "Identity Verification": ["Socure (synthetic identity detection, document verification)", "Jumio (biometric verification, liveness detection)", "Persona (identity verification API)", "GIACT (phone, email, address intelligence)"],
            "Device & Behavioral Data": ["iovation (device fingerprinting, velocity checks)", "Threatmetrix (digital identity risk scoring)", "BioCatch (behavioral biometrics during application)", "Application session data (time spent, field changes, navigation patterns)"],
            "Network Analysis": ["Proprietary fraud ring database (shared attributes across applications)", "IP geolocation and proxy/VPN detection", "Email and phone number reputation scores", "Social network analysis from connected applications"],
            "Credit & Identity Data": ["Early Warning Services (account validation, ChexSystems)", "Experian Precise ID (identity verification)", "Credit bureau fraud alerts and security freezes", "SSN validation and deceased file checks"],
            "Consortium Data": ["Shared fraud databases across financial institutions", "CFPB fraud reports", "FTC identity theft database", "Law enforcement fraud intelligence (when available)"]
        },
        businessOutcomes: [
            "68% reduction in fraud losses",
            "94% reduction in false positives vs. rules-based systems",
            "$10M+ annual fraud prevention (typical $1B lending volume)",
            "<0.5% good customer decline rate",
            "Detection of organized fraud rings (10+ linked applications)"
        ],
        extraSection: {
            title: "Fraud Types Detected",
            content: [
                "Synthetic identity fraud",
                "First-party fraud (bust-out schemes, misrepresentation)",
                "Third-party fraud (stolen identities)",
                "Account takeover",
                "Organized fraud rings",
                "Straw borrower schemes"
            ]
        }
    },
    {
        id: "decision-engine",
        title: "DecisionEngine™ - Automated Underwriting Intelligence",
        shortDescription: "End-to-end automated underwriting with intelligent routing of complex cases to human underwriters.",
        image: "/assets/service-2.jpg",
        challenge: "Manual underwriting is slow, expensive, inconsistent, and doesn't scale. Yet it's hard to automate because of complexity and compliance requirements.",
        whatItDoes: "End-to-end automated underwriting for straightforward applications, with intelligent routing of complex cases to human underwriters with AI-generated recommendations.",
        metadata: {
            "Model Architecture": "Hybrid rules engine + XGBoost classifier with explainable decision trees",
            "Training Data Size": "5M+ underwritten applications with outcomes",
            "Features": "250+ application, credit, income, and policy features",
            "Update Frequency": "Monthly model refresh, weekly policy updates",
            "Inference Speed": "<200ms for full underwriting decision",
            "Auto-Decision Rate": "70-85% of applications",
            "Override Rate": "<2% of automated decisions"
        },
        trainingApproach: [
            { title: "Hybrid Rules + ML", description: "Hard regulatory and policy requirements enforced via rule engine (debt-to-income limits, loan-to-value caps). ML model handles nuanced risk assessment within policy guardrails." },
            { title: "Learning from Underwriters", description: "Model trained on historical underwriter decisions, learning their judgment patterns for edge cases." },
            { title: "Counterfactual Learning", description: "Analyzes outcomes of borderline approved vs. denied applications to improve decision boundary." },
            { title: "Confidence-Based Routing", description: "Applications where model is uncertain (confidence <80%) automatically referred to human underwriters." }
        ],
        dataSources: {
            "Application Data": ["Loan amount, purpose, term requested", "Self-reported income and employment", "Assets, liabilities, housing costs", "Down payment source and reserves"],
            "Credit Data": ["Full tri-merge credit reports", "Credit scores from all three bureaus", "Recent inquiries and new accounts", "Payment history and derogatory items"],
            "Income Verification": ["Argyle, Truework (automated employment verification)", "Plaid, Finicity (bank statement analysis)", "IRS Form 4506-C (tax transcript verification)", "Pay stub and W-2 OCR and analysis"],
            "Asset Verification": ["Bank account verification (Plaid, MX)", "Investment account verification", "Gift letter and sourcing documentation", "Large deposit explanations"],
            "Property Data (for mortgages/HELOCs)": ["AVM (automated valuation models) - CoreLogic, HouseCanary", "Appraisal reports (OCR and extraction)", "Title search and lien verification", "Property tax and insurance verification"],
            "Compliance Data": ["OFAC sanctions screening", "HMDA data collection and validation", "Fair lending statistical analysis", "Required disclosure tracking"]
        },
        businessOutcomes: [
            "78% of applications auto-decisioned without human touch",
            "Processing time reduced from 3 days to 15 minutes",
            "92% underwriter productivity improvement (focus on complex cases)",
            "$4M+ annual operational savings",
            "Consistent, unbiased decisioning",
            "Faster time-to-close improving customer satisfaction"
        ],
        extraSection: {
            title: "Human-in-the-Loop",
            content: "Complex cases referred with AI-generated recommendations, risk factors highlighted, supporting documentation pre-analyzed. Underwriters make final decisions on edge cases while AI handles routine approvals."
        }
    },
    {
        id: "portfolio-vision",
        title: "PortfolioVision™ - Enterprise Risk Analytics Platform",
        shortDescription: "Calculates portfolio-level risk metrics including VaR, Expected Loss, and stress test results.",
        image: "/assets/service-3.jpg",
        challenge: "CFOs and CROs need real-time visibility into portfolio risk across products, segments, and economic scenarios for capital planning and regulatory reporting.",
        whatItDoes: "Calculates portfolio-level risk metrics including VaR, Expected Loss, stress test results, and concentration risks. Powers regulatory reporting and strategic capital allocation.",
        metadata: {
            "Model Architecture": "Monte Carlo simulation engine with Gaussian copula for default correlation",
            "Training Data Size": "Full loan portfolio + 20+ years of economic data",
            "Simulation Runs": "10,000+ scenarios per analysis",
            "Update Frequency": "Daily risk metrics, quarterly model recalibration",
            "Processing Time": "2-4 hours for full portfolio analysis",
            "Output Metrics": "VaR (95%, 99%), Expected Loss, tail risk, concentration metrics"
        },
        trainingApproach: [
            { title: "Default Correlation Modeling", description: "Gaussian copula fitted to historical default correlations across loan segments, geographies, and economic conditions. Captures how defaults cluster during downturns." },
            { title: "Scenario Generation", description: "Historical simulation using 20+ years of economic data plus synthetic worst-case scenarios for stress testing." },
            { title: "Loss Distribution", description: "Combines individual loan default probabilities (from CreditSight™), LGDs (from RecoveryIQ™), and correlation structure to generate full portfolio loss distribution." },
            { title: "Stress Testing", description: "Implements CCAR/DFAST scenarios (severely adverse, adverse, baseline) with macroeconomic variable mappings to loan performance." }
        ],
        dataSources: {
            "Loan Portfolio Data": ["Complete loan-level data (balances, terms, rates, origination details)", "Default probabilities from CreditSight™", "LGD estimates from RecoveryIQ™", "Segment classifications and concentrations"],
            "Economic Data": ["Federal Reserve FRED database (unemployment, GDP, rates)", "S&P Case-Shiller housing indices", "Regional economic indicators (MSA-level)", "Industry-specific trends", "Commodity prices (oil, metals) for certain industries"],
            "Market Data": ["Interest rate curves (Treasury, swap rates)", "Credit spreads (corporate bonds, mortgages)", "Equity market indices", "Volatility measures (VIX)"],
            "Historical Performance": ["Internal historical loss data (20+ years ideal)", "Peer bank charge-off rates", "Recession performance data (2008, 2020)", "Recovery value distributions"],
            "Regulatory Scenarios": ["Federal Reserve CCAR scenarios", "Internal stress scenarios", "Reverse stress tests (what breaks the bank)"],
            "Third-Party Data": ["Moody's Analytics (economic scenarios, PD/LGD benchmarks)", "S&P Global (credit risk analytics)", "Fitch Solutions (macroeconomic forecasts)"]
        },
        businessOutcomes: [
            "Real-time portfolio risk dashboard for C-suite",
            "Accurate capital allocation across business lines",
            "CCAR/DFAST submission ready in 48 hours (vs. 2 weeks manual)",
            "Optimized concentration risk management",
            "Strategic planning informed by risk-adjusted returns",
            "Board-ready risk reporting"
        ],
        extraSection: {
            title: "Regulatory Compliance",
            content: [
                "Basel III capital calculations (RWA, expected loss)",
                "CECL reserve calculations",
                "CCAR/DFAST stress testing",
                "Concentration risk limits (Reg O compliance)",
                "SR 11-7 model risk management"
            ]
        }
    },
    {
        id: "pricing-optimizer",
        title: "PricingOptimizer™ - Dynamic Rate Intelligence",
        shortDescription: "Real-time rate optimization balancing credit risk, market competition, and profitability targets.",
        image: "/assets/ideas-1.jpg",
        challenge: "Set rates too high and lose volume to competitors. Set them too low and leave profit on the table or attract adverse selection. Static rate sheets can't optimize this tradeoff.",
        whatItDoes: "Real-time rate optimization balancing credit risk, market competition, customer lifetime value, and profitability targets to maximize portfolio returns.",
        metadata: {
            "Model Architecture": "Multi-armed bandit reinforcement learning with contextual features",
            "Training Data Size": "10M+ rate quotes and outcomes (accept/decline decisions)",
            "Features": "180+ borrower, market, and competitive features",
            "Update Frequency": "Real-time learning from every quote",
            "Inference Speed": "<100ms for optimal rate calculation",
            "A/B Testing": "Continuous experimentation (5-10% exploration rate)"
        },
        trainingApproach: [
            { title: "Contextual Bandits", description: "Reinforcement learning approach that learns which rates to offer based on borrower context (risk profile, loan characteristics, channel). Balances exploration (testing new prices) vs. exploitation (using known good prices)." },
            { title: "Causal Inference", description: "Estimates true price elasticity by analyzing past rate experiments and natural experiments (rate changes over time)." },
            { title: "Counterfactual Modeling", description: "For every loan originated, models what would have happened at different rate levels to improve price-response curves." },
            { title: "Multi-Objective Optimization", description: "Balances competing objectives: acceptance rate (volume), profit margin, portfolio quality (avoiding adverse selection), customer lifetime value." },
            { title: "Competitive Positioning", description: "Incorporates competitor rate intelligence to optimize win rates vs. profitability tradeoff." }
        ],
        dataSources: {
            "Borrower Risk Data": ["Credit scores and risk tiers (from CreditSight™)", "Default probabilities and expected loss", "Income stability and debt ratios", "Collateral and loan-to-value"],
            "Customer Value Data": ["Lifetime value predictions (cross-sell potential)", "Existing relationship depth", "Acquisition cost by channel", "Retention and refinance probabilities"],
            "Market & Competitive Data": ["LendingTree, Bankrate (published rates)", "Optimal Blue (rate lock data for mortgages)", "Peer rate intelligence from loan applications", "Won/lost deal analysis with competitive rates"],
            "Economic Factors": ["Treasury yield curves", "Mortgage-backed security prices", "Fed funds rate and policy expectations", "Secondary market pricing"],
            "Channel Data": ["Acquisition channel (direct, broker, affiliate)", "Marketing campaign and creative", "Traffic source and attribution", "Time of day, day of week seasonality"],
            "Operational Data": ["Funding costs and spreads", "Servicing costs by loan type", "Target profit margins by product", "Pipeline volume and capacity"],
            "Third-Party Intelligence": ["Black Knight Optimal Blue (mortgage rate data)", "Curinos (deposit and loan pricing intelligence)", "J.D. Power (consumer shopping behavior)"]
        },
        businessOutcomes: [
            "15% improvement in risk-adjusted portfolio yield",
            "22% increase in approval-to-funding conversion",
            "Better volume/margin tradeoff optimization",
            "$12M+ additional annual revenue (typical $500M originations)",
            "Reduced adverse selection (3% lower early default rates)",
            "Competitive win rate increased 18%"
        ],
        extraSection: {
            title: "Advanced Capabilities",
            content: [
                "Real-time rate adjustments based on pipeline volume",
                "Personalized pricing reflecting true risk + customer value",
                "Dynamic rate locks (shorter locks for lower-risk borrowers)",
                "Channel-specific optimization (direct vs. broker)",
                "Seasonal and day-of-week pricing variations"
            ]
        }
    }
];
