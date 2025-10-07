import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-backblack py-16 relative overflow-hidden pt-40">
      {/* Background SVG */}
      <div className="absolute inset-0 max-w-7xl mx-auto bg-no-repeat bg-bottom bg-[length:100%_auto] md:bg-cover" style={{ backgroundImage: 'url(/footer.svg)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/logotipo.svg" alt="LLMApp by CleverIT" className="h-8" />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Transformamos negocios con soluciones de IA personalizadas que impulsan la innovación y el crecimiento.
            </p>
            <a href="mailto:info@llmaps.com" target="_blank">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg w-fit mt-8">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@llmaps.com</span>
              </div>
            </a>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">MAPA DE SITIO</h3>
            <div className="space-y-4">
              <Link to="/team" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Conoce al equipo
              </Link>
              <Link to="/plans" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Planes
              </Link>
              <Link to="/quote" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">SOCIAL</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-1 text-gray-400 text-sm order-2 md:order-1">
              <span>Creado por</span>
              <div className="flex items-center space-x-1">
               
                <a href="https://www.cleveritgroup.com/es" target="_blank" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 underline">
                 
                   <img src="https://cdn.prod.website-files.com/5ff9f08ad0f45f13b2c0e743/641caf0bae4bded796d89833_logo-cleverit-blanco.png" className="w-20" alt="Cleverit"/>
                  
                </a>
                <span>2025 LLMApps.</span>
              </div>
              <span className="block sm:inline">Todos los derechos reservados.</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 order-1 md:order-2">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm underline">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm underline">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;