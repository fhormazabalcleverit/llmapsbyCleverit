import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "¿Qué son exactamente las LLM Apps?",
      answer: "Las LLM Apps son aplicaciones inteligentes que utilizan modelos de lenguaje grandes para procesar, analizar y generar contenido de manera natural. Permiten a las empresas automatizar tareas complejas de comunicación y análisis de datos."
    },
    {
      question: "¿Cuáles son las características principales de LLMApps?",
      answer: "Nuestras LLM Apps incluyen procesamiento de lenguaje natural avanzado, integración con bases de datos existentes, personalización según tu industria, escalabilidad automática y interfaces intuitivas para usuarios no técnicos."
    },
    {
      question: "¿Mis datos están seguros al usar LLM Apps?",
      answer: "Absolutamente. Implementamos encriptación de extremo a extremo, cumplimos con estándares internacionales de seguridad como ISO 27001, y tus datos nunca se comparten con terceros. Además, ofrecemos opciones de despliegue on-premise para máxima seguridad."
    },
    {
      question: "¿Qué diferencia a sus LLM Apps de otras soluciones de IA?",
      answer: "Nos especializamos en soluciones personalizadas para cada negocio, ofrecemos integración completa con sistemas existentes, soporte en español, y un enfoque consultivo que garantiza que la IA realmente resuelva tus problemas específicos."
    },
    {
      question: "¿Cuál es el costo de desarrollar una LLM App?",
      answer: "El costo varía según la complejidad y características específicas. Ofrecemos planes desde $2,000 USD mensuales para soluciones básicas, hasta proyectos enterprise personalizados. Contacta con nosotros para una cotización detallada."
    },
    {
      question: "¿Qué tipo de soporte ofrecen después del lanzamiento?",
      answer: "Proporcionamos soporte técnico 24/7, actualizaciones regulares del modelo, monitoreo de rendimiento, capacitación para tu equipo, y mejoras continuas basadas en el uso real de tu aplicación."
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