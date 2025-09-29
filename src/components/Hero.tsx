import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChatInterface from './ChatInterface';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-950 via-black to-gray-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Rating Section */}
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-purple-500 fill-current" />
              <span className="text-white font-medium ml-2">SOLUCIONES DE IA AVANZADAS</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-slide-up max-w-5xl mx-auto">
            Carga, memoriza y{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              conversa
            </span>
            {' '}con tus datos
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
            Transformamos tu negocio con LLM Apps y potencian la productividad y automatización de tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cotizar" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
              Cotiza con nosotros
            </Link>
            <a href="https://interfaz-de-agente-i-7lya.bolt.host" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400 font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-pink-500/10">
              Ver caso de uso
            </a>
          </div>

          {/* Chat Interface */}
          <div className="animate-slide-up-delay-3">
            <ChatInterface />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;