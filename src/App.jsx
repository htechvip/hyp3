import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import Research from './pages/Research';
import DrugRepurposing from './pages/research/DrugRepurposing';
import DeNovoDesign from './pages/research/DeNovoDesign';
import MolecularPrediction from './pages/research/MolecularPrediction';
import TargetIdentification from './pages/research/TargetIdentification';
import ClinicalTrials from './pages/research/ClinicalTrials';
import Insights from './pages/Insights';
import InsightArticle from './pages/insights/InsightArticle';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

import CreditRisk from './pages/CreditRisk';
import FraudDetection from './pages/FraudDetection';
import CustomerService from './pages/CustomerService';
import RegulatoryCompliance from './pages/RegulatoryCompliance';
import RiskManagement from './pages/RiskManagement';
import PaymentsTransactions from './pages/PaymentsTransactions';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/credit-risk" element={<CreditRisk />} />
        <Route path="/services/fraud-detection" element={<FraudDetection />} />
        <Route path="/services/customer-service" element={<CustomerService />} />
        <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
        <Route path="/services/risk-management" element={<RiskManagement />} />
        <Route path="/services/payments-transactions" element={<PaymentsTransactions />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/:id" element={<ModelDetail />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/drug-repurposing" element={<DrugRepurposing />} />
        <Route path="/research/de-novo-design" element={<DeNovoDesign />} />
        <Route path="/research/molecular-prediction" element={<MolecularPrediction />} />
        <Route path="/research/target-identification" element={<TargetIdentification />} />
        <Route path="/research/clinical-trials" element={<ClinicalTrials />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
