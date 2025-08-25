import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PricingPage from './components/PricingPage';
import QRMenuPage from './components/QRMenuPage';
import ConsultationWidget from './components/ConsultationWidget';
import Footer from './components/Footer';
import FeatureMenuPage from './components/features/FeatureMenuPage';
import FeatureOrderPage from './components/features/FeatureOrderPage';
import FeatureBillPage from './components/features/FeatureBillPage';
import FeatureTipsPage from './components/features/FeatureTipsPage';
import FeatureModifiersPage from './components/features/FeatureModifiersPage';
import FeatureCallPage from './components/features/FeatureCallPage';
import FeatureWaiterPage from './components/features/FeatureWaiterPage';
import FeaturePromotionsPage from './components/features/FeaturePromotionsPage';
import FeatureIntegrationsPage from './components/features/FeatureIntegrationsPage';
import FeatureDeliveryPage from './components/features/FeatureDeliveryPage';
import FeatureReportsPage from './components/features/FeatureReportsPage';
import FloatingContactButtons from './components/FloatingContactButtons';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<PricingPage />} />
            <Route path="/qr-menu" element={<QRMenuPage />} />
            <Route path="/features/menu" element={<FeatureMenuPage />} />
            <Route path="/features/order" element={<FeatureOrderPage />} />
            <Route path="/features/bill" element={<FeatureBillPage />} />
            <Route path="/features/tips" element={<FeatureTipsPage />} />
            <Route path="/features/modifiers" element={<FeatureModifiersPage />} />
            <Route path="/features/call" element={<FeatureCallPage />} />
            <Route path="/features/waiter" element={<FeatureWaiterPage />} />
            <Route path="/features/promotions" element={<FeaturePromotionsPage />} />
            <Route path="/features/integrations" element={<FeatureIntegrationsPage />} />
            <Route path="/features/delivery" element={<FeatureDeliveryPage />} />
            <Route path="/features/reports" element={<FeatureReportsPage />} />
          </Routes>
        </main>

        <Footer />
        <ConsultationWidget />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}

export default App;