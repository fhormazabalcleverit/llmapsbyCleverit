import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const PricingFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const faqs = [
    {
      question: t.pricingFaq.question1.q,
      answer: t.pricingFaq.question1.a
    },
    {
      question: t.pricingFaq.question2.q,
      answer: t.pricingFaq.question2.a
    },
    {
      question: t.pricingFaq.question3.q,
      answer: t.pricingFaq.question3.a
    },
    {
      question: t.pricingFaq.question4.q,
      answer: t.pricingFaq.question4.a
    },
    {
      question: t.pricingFaq.question5.q,
      answer: t.pricingFaq.question5.a
    },
    {
      question: t.pricingFaq.question6.q,
      answer: t.pricingFaq.question6.a
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.pricingFaq.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.pricingFaq.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.pricingFaq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className={`space-y-4 fade-in-up-delay ${faqVisible ? 'animate' : ''}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-pink-500/50"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-pink-400 transition-transform duration-200" />
                  ) : (
                    <Plus className="w-6 h-6 text-pink-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;