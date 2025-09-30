import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación. Si actualizas, tendrás acceso inmediato a las nuevas funcionalidades."
    },
    {
      question: "¿Qué incluye el soporte técnico?",
      answer: "El plan Starter incluye soporte por email con respuesta en 24-48 horas. Professional incluye soporte prioritario con respuesta en 4-8 horas. Enterprise incluye soporte 24/7 con consultor dedicado y SLA garantizado."
    },
    {
      question: "¿Hay límites en el almacenamiento de datos?",
      answer: "Starter incluye hasta 10GB de almacenamiento, Professional hasta 100GB, y Enterprise tiene almacenamiento ilimitado. Todos los planes incluyen backups automáticos y encriptación de datos."
    },
    {
      question: "¿Ofrecen período de prueba gratuito?",
      answer: "Sí, ofrecemos una prueba gratuita de 14 días para todos los planes. No se requiere tarjeta de crédito y tendrás acceso completo a todas las funcionalidades del plan seleccionado."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), transferencias bancarias y PayPal. Para planes Enterprise, también ofrecemos facturación anual con descuentos especiales."
    },
    {
      question: "¿Puedo integrar mis sistemas existentes?",
      answer: "Absolutamente. Ofrecemos integraciones con más de 100 plataformas populares como Salesforce, HubSpot, Slack, y bases de datos como MySQL, PostgreSQL. También proporcionamos APIs REST para integraciones personalizadas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Preguntas Frecuentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Tienes dudas sobre los planes?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros planes y servicios.
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