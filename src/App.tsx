import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import NewProcess from './components/NewProcess';
import Benefits from './components/Benefits';
import MastraHighlight from './components/MastraHighlight';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';
import QuotePage from './pages/QuotePage';

const HomePage = () => (
  <>
    <Hero />
    <NewProcess />
    <Benefits />
    <MastraHighlight />
    <Process />
    <Testimonials />
    <FAQ />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-backblack">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planes" element={<><Pricing /><PricingFAQ /></>} />
            <Route path="/cotizar" element={<QuotePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

// Import components for the pricing route
import Pricing from './components/Pricing';
import PricingFAQ from './components/PricingFAQ';

export default App;