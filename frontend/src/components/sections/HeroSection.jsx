import React from 'react';
import profileImage from '../../assets/Perfil.png';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Currículum.pdf';
    link.download = 'CV-Ricardo-Garcia-Pocasangre.pdf';
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
            Estudiante en Desarrollo de Software
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            Estudiante de 3° año de bachillerato en Desarrollo de Software con experiencia práctica en desarrollo
            web, móvil, diseño UI/UX y pruebas de calidad. Especializado en interfaces frontend con sólidos
            conocimientos en backend y desarrollo multiplataforma.
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

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 bg-gray-300">
            <img 
              src={profileImage} 
              alt="Ricardo Daniel García Pocasangre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;