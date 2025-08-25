import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PricingPage from './components/PricingPage';
import QRMenuPage from './components/QRMenuPage';
import ConsultationWidget from './components/ConsultationWidget';
import Footer from './components/Footer';
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