import React from 'react';
import { Zap, BarChart3, Shield, Settings, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Zap,
      title: "Decisiones más rápidas",
      description: "Pregunta y obtén respuestas inmediatas."
    },
    {
      icon: BarChart3,
      title: "Visión clara",
      description: "Reportes y dashboards automáticos."
    },
    {
      icon: Shield,
      title: "Acceso seguro",
      description: "Control de roles y permisos."
    },
    {
      icon: Settings,
      title: "Flexible",
      description: "Se adapta a cualquier industria o modelo de negocio."
    },
    {
      icon: TrendingUp,
      title: "Escalable",
      description: "Desde pequeñas empresas hasta grandes corporaciones."
    }
  ];

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Beneficios
          </div>
           {/*
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Todas tus soluciones de IA en una plataforma
          </h2>
          */}
        </div>

        {/* Benefits Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const delayClasses = [
              'fade-in-up',
              'fade-in-up-delay',
              'fade-in-up-delay-2',
              'fade-in-up-delay-3',
              'fade-in-up-delay-4'
            ];
            return (
              <div
                key={index}
                className={`group text-center duration-300  ${delayClasses[index]} ${gridVisible ? 'animate' : ''}`}
              >
                {/* Icon */}
                <div className="w-16 h-16 transition-all bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600  duration-300">
                  <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-white duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-pink-500">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;