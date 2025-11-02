import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Ricardo García
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a 
                href="#experience"
                onClick={(e) => handleNavClick(e, 'experience')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a 
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer z-50"
          >
            <div className="space-y-1.5">
              <span className={`block w-7 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-7 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-7 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <ul className="flex flex-col items-center py-8 space-y-6">
            <li>
              <a 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a 
                href="#experience"
                onClick={(e) => handleNavClick(e, 'experience')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a 
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;