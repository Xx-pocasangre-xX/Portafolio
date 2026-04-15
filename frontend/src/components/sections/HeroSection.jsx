import React from 'react';
import profileImage from '../../assets/Perfil.png';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ricardo_Garcia_Pocasangre_CV_2026.pdf';
    link.download = 'Ricardo_Garcia_Pocasangre_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-[#0B1120] pt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium animate-fade-in">
            Disponible para proyectos internacionales
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ricardo García <span className="text-blue-500">Pocasangre</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-8">
            Software Developer | Mobile Specialist (Kotlin) & Full-Stack Engineer
          </h2>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Ingeniero Informático (UCA) con trayectoria en el sector público y privado. 
            Especializado en transformar requerimientos complejos en aplicaciones móviles y sistemas ERP de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-blue-600/20"
            >
              Hablemos
            </a>

            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 border-2 border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Descargar CV
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute inset-0 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <img 
              src={profileImage} 
              alt="Ricardo García" 
              className="relative z-10 w-full h-full object-cover rounded-[2rem] border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;