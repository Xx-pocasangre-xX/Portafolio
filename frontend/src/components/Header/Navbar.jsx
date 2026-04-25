import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/proyecto/');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  // Fondo: en proyecto → transparente→oscuro; en home → siempre slate semi-opaco
  const navBg = isProjectPage
    ? isScrolled
      ? 'backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'backdrop-blur-md';

  const navBgStyle = isProjectPage
    ? isScrolled ? { background: 'rgba(15,23,42,0.95)' } : {}
    : { background: 'rgba(15,23,42,0.92)' };

  const navLinks = [
    { label: 'Inicio', id: 'home' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Experiencia', id: 'experience' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Contacto', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${navBg} ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        ...navBgStyle,
        borderBottomColor: isScrolled ? 'rgba(148,163,184,0.08)' : 'transparent',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors tracking-tight"
          >
            Ricardo García
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center space-x-7">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                    after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 z-50"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu fullscreen */}
        <div
          className={`fixed top-0 left-0 w-full h-screen md:hidden flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ background: 'rgba(15,23,42,0.98)', backdropFilter: 'blur(16px)' }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;