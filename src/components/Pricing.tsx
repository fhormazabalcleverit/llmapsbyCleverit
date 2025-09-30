import React from 'react';
import { Check, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation();

  const plans = [
    {
      name: "Starter",
      price: "$2,000",
      period: "USD/mes",
      description: "Perfecto para pequeñas empresas que inician con IA",
      features: [
        "Hasta 10,000 consultas mensuales",
        "1 fuente de datos",
        "Chat básico con IA",
        "Reportes estándar",
        "Soporte por email",
        "Integración básica"
      ],
      notIncluded: [
        "APIs personalizadas",
        "Análisis avanzado",
        "Soporte 24/7"
      ],
      popular: false,
      buttonText: "Comenzar ahora",
      buttonStyle: "border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400"
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "USD/mes",
      description: "Ideal para empresas en crecimiento con necesidades avanzadas",
      features: [
        "Hasta 50,000 consultas mensuales",
        "5 fuentes de datos",
        "Chat avanzado con IA",
        "Dashboards personalizados",
        "APIs personalizadas",
        "Análisis predictivo",
        "Soporte prioritario",
        "Integraciones múltiples"
      ],
      notIncluded: [
        "Despliegue on-premise",
        "Consultor dedicado"
      ],
      popular: true,
      buttonText: "Más popular",
      buttonStyle: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solución completa para grandes corporaciones",
      features: [
        "Consultas ilimitadas",
        "Fuentes de datos ilimitadas",
        "IA completamente personalizada",
        "Dashboards enterprise",
        "APIs ilimitadas",
        "Análisis avanzado y ML",
        "Despliegue on-premise",
        "Consultor dedicado",
        "Soporte 24/7",
        "SLA garantizado",
        "Capacitación del equipo"
      ],
      notIncluded: [],
      popular: false,
      buttonText: "Contactar ventas",
      buttonStyle: "border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400"
    }
  ];

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Planes
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6">
            Elige el plan perfecto para tu negocio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desde startups hasta grandes corporaciones, tenemos la solución de IA que se adapta a tus necesidades y presupuesto.
          </p>
        </div>

        {/* Pricing Plans */}
        <div ref={plansRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 fade-in-up-delay ${plansVisible ? 'animate' : ''}`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 border rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/50 ${
                plan.popular 
                  ? 'border-pink-500 ring-2 ring-pink-500/20' 
                  : 'border-gray-700 hover:border-pink-500/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full font-semibold px-6 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;