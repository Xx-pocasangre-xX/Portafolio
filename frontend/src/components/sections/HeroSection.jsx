import React from 'react';
import profileImage from '../../assets/Perfil.png';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ricardo_Garcia_Pocasangre_Desarrollador_Software_2026.pdf';
    link.download = 'Ricardo_Garcia_Pocasangre_Desarrollador_Software_2026.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
            Ricardo Daniel García Pocasangre
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
            Software Developer • Frontend •  UI/UX
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            Desarrollador de software y estudiante de Ingeniería Informática con experiencia en desarrollo
            full-stack, aplicaciones móviles y diseño UI/UX. Impulsor del proyecto ISSS Salud, una solución
            hospitalaria multiplataforma enfocada en optimizar la gestión médica y la experiencia del usuario.
            Apasionado por construir productos escalables, eficientes y centrados en las personas.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Proyectos
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
            >
              Contactar
            </a>

            <button
              onClick={handleDownloadCV}
              className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar CV
            </button>
          </div>
        </div>

        {/* Image - MEJORADO CON ZOOM */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 bg-gray-300">
            <img
              src={profileImage}
              alt="Ricardo Daniel García Pocasangre"
              className="w-full h-full object-cover object-center scale-125"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;