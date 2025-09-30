import React from 'react';
import Pricing from '../components/Pricing';
import PricingFAQ from '../components/PricingFAQ';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-backblack">
      <Pricing />
      <PricingFAQ />
    </div>
  );
};

export default PricingPage;