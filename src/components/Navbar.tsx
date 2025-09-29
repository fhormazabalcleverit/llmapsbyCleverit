import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600  rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-white text-xl font-semibold">LLMApp</span>
              <span className="text-gray-400 text-sm font-normal">by CleverIT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
             {/*
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Sobre LLM Apps
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Integraciones
            </a>
            */}
            <a href="/planes" className="text-gray-300 hover:text-white transition-colors duration-200">
              Planes
            </a>
            <a href="/cotizar" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contáctanos
            </a>
          </div>

          {/* Right side - Cart and Sign Up */}
          <div className="hidden md:flex items-center space-x-4">
              {/* 
            <button className="relative text-gray-300 hover:text-white transition-colors duration-200">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
             */}
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
              Iniciar sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isScrolled
              ? 'bg-black/90 backdrop-blur-md border-gray-700/50'
              : 'bg-black/95 backdrop-blur-sm border-gray-800'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
               {/*
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Sobre LLM Apps
              </a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Integraciones
              </a>
*/}
              <Link to="/planes" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Planes
              </Link>
              <Link to="/cotizar" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Contáctanos
              </Link>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-700 mt-4 pt-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;