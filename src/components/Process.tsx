import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Process = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      emogi: "🔒",
      title: "Seguridad y trazabilidad total",
      description: "Cada decisión, herramienta y resultado del agente es trazado, auditado y puede ser revisado o controlado manualmente (human-in-the-loop)."
    },
    {
      number: "02", 
      emogi: "📊",
      title: "Monitoreo en tiempo real y evaluaciones automáticas",
      description: "El comportamiento de los agentes se observa en vivo, con métricas y *evals* que garantizan calidad, relevancia y seguridad de las respuestas."
    },
    {
      number: "03",
      emogi: "🔄",
      title: "Flexibilidad tecnológica", 
      description: "Integración con múltiples modelos (OpenAI, Anthropic, Gemini, etc.) a través de una API unificada, sin necesidad de reescribir lógica."
    },
    {
      number: "04",
      emogi: "⚡",
      title: " Eficiencia en desarrollo",
      description: "Entorno amigable para equipos JavaScript/TypeScript, con CLI y playground que aceleran el ciclo de desarrollo y pruebas."
    },
    {
      number: "05",
      emogi: "🧠",
      title: "Workflows y memoria persistente",
      description: "Flujos durables, telemetría integrada y soporte nativo para RAG (Retrieval-Augmented Generation) que aseguran consistencia y escalabilidad."
    }
  ];

  return (
    <section className="bg-backblack py-20 relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: 'url(/mastra.svg)' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
           {/*
          <div className="text-gray-400 text-sm font-medium tracking-wider mb-8">
            NUESTRO PROCESO
          </div>
          */}
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Valor con IA
          </div>
          <div className="max-w-7xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              ¿Por qué <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Mastra</span> suma valor?
            </h2>
          </div>
        </div>

        {/* Process Steps */}
        <div ref={cardsRef} className={`flex flex-col lg:flex-row gap-3 items-stretch fade-in-up-delay  ${cardsVisible ? 'animate' : ''}`}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-black/70 backdrop-blur-xl border border-gray-700 hover:border-pink-500/50 rounded-2xl p-6 lg:p-6 transition-all duration-500 ease-in-out cursor-pointer flex-1 lg:hover:flex-[3] min-h-[200px] lg:min-h-[200px] flex flex-col hover:bg-black/50 bg-gradient-to-r from-blue-500/10 via-sky-600/3 to-purple-500/10">
              <div className="mb-1">
                 {/*
                <span className="text-gray-500 text-sm font-medium">
                  {step.number}
                </span>
                */}
              </div>
              <h3 className="text-2lg lg:text-3xl font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                {step.emogi}
              </h3>  
              <h3 className="text-lg lg:text-lg font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                {step.title}
              </h3>
              <div className="flex-1 flex items-end">
                <p className="text-gray-300 leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;