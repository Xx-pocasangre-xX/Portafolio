import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importar imágenes
import moptLogo from '../../assets/mopt-logo.png';
import homeclickLogo from '../../assets/homeclick-logo.png';
import issLogo from '../../assets/LOGO AZUL.png';
import bloomLogo from '../../assets/bloom salud.png';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 'mopt',
      title: 'Sistema Interno MOPT',
      description: 'Sistema interno desarrollado durante mis prácticas profesionales en el Ministerio de Obras Públicas y Transporte.',
      image: moptLogo,
      technologies: ['C#', 'ASP.NET', 'SQL Server 2022', 'Figma', 'QA Testing'],
      type: 'Proyecto Profesional',
      detailsLink: '/proyecto/mopt',
      githubLink: null // Proyecto confidencial
    },
    {
      id: 'homeclick',
      title: 'HomeClick - Plataforma Inmobiliaria',
      description: 'Plataforma completa de comercio electrónico inmobiliario con stack MERN.',
      image: homeclickLogo,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      type: 'Proyecto Full-Stack',
      detailsLink: '/proyecto/homeclick',
      githubLink: 'https://github.com/xxDianaPadilla/homeClick'
    },
    {
      id: 'isss',
      title: 'ISSS Salud - Sistema Dual',
      description: 'Ecosistema completo de gestión de salud con aplicaciones de escritorio y móvil.',
      image: issLogo,
      technologies: ['Java Desktop', 'Kotlin Mobile', 'Oracle DB', 'Android', 'Swing UI'],
      type: 'Proyecto Multiplataforma',
      detailsLink: '/proyecto/isssSalud',
      githubLink: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java.git'
    },
    {
      id: 'hospital',
      title: 'Hospital Bloom - App Móvil',
      description: 'Sistema de gestión hospitalaria pediátrica desarrollado en Android/Kotlin.',
      image: bloomLogo,
      technologies: ['Kotlin', 'Android', 'Oracle DB', 'Material Design', 'Lottie'],
      type: 'Proyecto Android',
      detailsLink: '/proyecto/hospitalBloom',
      githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom.git'
    }
  ];

  const maxIndex = Math.max(0, projects.length - slidesPerView);

  // Responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Proyectos Destacados
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-3`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[550px] flex flex-col">
                    

                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl flex items-center justify-center p-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-h-32 max-w-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="text-center text-gray-500">
                              <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                              </svg>
                              ${project.title}
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 mt-auto">
                        {project.githubLink && (
                            <a
                          
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Repositorio
                          </a>
                        )}
                        <Link
                          to={project.detailsLink}
                          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
                        >
                          Ver Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;