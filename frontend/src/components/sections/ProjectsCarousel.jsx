import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import moptLogo      from '../../assets/mopt-logo.png';
import homeclickLogo from '../../assets/homeclick-logo.png';
import issLogo       from '../../assets/LOGO AZUL.png';
import bloomLogo     from '../../assets/bloom salud.png';
import marquesaLogo  from '../../assets/logo_marquesa.png';

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectImage = ({ project }) => {
  const [imgClass, setImgClass] = useState('max-h-40 max-w-full');

  const handleLoad = (e) => {
    const ratio = e.target.naturalWidth / e.target.naturalHeight;
    if (ratio < 0.75)      setImgClass('max-h-44 max-w-[55%]');
    else if (ratio > 1.4)  setImgClass('max-h-36 max-w-full');
    else                   setImgClass('max-h-40 max-w-[75%]');
  };

  return (
    <img
      src={project.image}
      alt={project.title}
      onLoad={handleLoad}
      className={`${imgClass} object-contain transition-all duration-300`}
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  );
};

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
      detailsLink: '/proyecto/mopt',
      githubLink: null,
    },
    {
      id: 'marquesa',
      title: 'Marquesa - Tienda de Regalos',
      description: 'Plataforma e-commerce completa para tienda de regalos personalizados. Web + App móvil sobre stack MERN.',
      image: marquesaLogo,
      technologies: ['React', 'Node.js', 'MongoDB', 'React Native', 'Expo'],
      detailsLink: '/proyecto/marquesa',
      githubLink: 'https://github.com/xxDianaPadilla/Marquesa',
    },
    {
      id: 'homeclick',
      title: 'HomeClick - Plataforma Inmobiliaria',
      description: 'Plataforma completa de comercio electrónico inmobiliario con stack MERN.',
      image: homeclickLogo,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      detailsLink: '/proyecto/homeclick',
      githubLink: 'https://github.com/xxDianaPadilla/homeClick',
    },
    {
      id: 'isss',
      title: 'ISSS Salud - Sistema Dual',
      description: 'Ecosistema completo de gestión de salud con aplicaciones de escritorio y móvil.',
      image: issLogo,
      technologies: ['Java Desktop', 'Kotlin Mobile', 'Oracle DB', 'Android', 'Swing UI'],
      detailsLink: '/proyecto/isssSalud',
      githubLinkJ: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java.git',
      githubLinkA: 'https://github.com/xxDianaPadilla/ISSS-Salud.git',
    },
    {
      id: 'hospital',
      title: 'Hospital Bloom - App Móvil',
      description: 'Sistema de gestión hospitalaria pediátrica desarrollado en Android/Kotlin.',
      image: bloomLogo,
      technologies: ['Kotlin', 'Android', 'Oracle DB', 'Material Design', 'Lottie'],
      detailsLink: '/proyecto/hospitalBloom',
      githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom.git',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setSlidesPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - slidesPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => setCurrentIndex(p => p >= maxIndex ? 0 : p + 1), 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, maxIndex]);

  const pause = () => { setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); };
  const prev  = () => { pause(); setCurrentIndex(p => p === 0 ? maxIndex : p - 1); };
  const next  = () => { pause(); setCurrentIndex(p => p >= maxIndex ? 0 : p + 1); };
  const go    = (i) => { pause(); setCurrentIndex(i); };

  return (
    <section id="projects" className="py-24" style={{ background: '#111827' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-slate-100">
          Proyectos Destacados
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-14 rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {/* Card */}
                  <div
                    className="rounded-2xl border h-full flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
                  >
                    {/* Imagen */}
                    <div
                      className="h-52 flex items-center justify-center p-5 flex-shrink-0"
                      style={{ background: '#d1d5db' }}
                    >
                      <ProjectImage project={project} />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 p-5 flex flex-col">
                      <h3 className="text-base font-bold text-slate-100 mb-2 line-clamp-2 min-h-[2.8rem]">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4rem]">
                        {project.description}
                      </p>

                      {/* Tags de tecnología */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md font-medium transition-colors"
                            style={{ background: 'rgba(59,130,246,0.1)', color: '#93c5fd' }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span
                            className="px-2 py-1 text-xs rounded-md"
                            style={{ background: 'rgba(148,163,184,0.08)', color: '#64748b' }}
                          >
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Botones */}
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank" rel="noopener noreferrer"
                            className="flex-1 min-w-[80px] px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium transition-all border"
                            style={{ borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; e.currentTarget.style.color = '#f1f5f9'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.color = '#94a3b8'; }}
                          >
                            <GithubIcon /> Repo
                          </a>
                        )}
                        {project.githubLinkA && (
                          <a
                            href={project.githubLinkA}
                            target="_blank" rel="noopener noreferrer"
                            className="flex-1 min-w-[70px] px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium transition-all border"
                            style={{ borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; e.currentTarget.style.color = '#f1f5f9'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.color = '#94a3b8'; }}
                          >
                            <GithubIcon /> Android
                          </a>
                        )}
                        {project.githubLinkJ && (
                          <a
                            href={project.githubLinkJ}
                            target="_blank" rel="noopener noreferrer"
                            className="flex-1 min-w-[70px] px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium transition-all border"
                            style={{ borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; e.currentTarget.style.color = '#f1f5f9'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.color = '#94a3b8'; }}
                          >
                            <GithubIcon /> Java
                          </a>
                        )}
                        <Link
                          to={project.detailsLink}
                          className="flex-1 min-w-[80px] px-3 py-2 rounded-lg text-center text-xs font-semibold transition-all"
                          style={{ background: '#3b82f6', color: 'white' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#3b82f6'; }}
                        >
                          Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all border"
              style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#263348'; e.currentTarget.style.color = '#f1f5f9'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#94a3b8'; }}
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? '2rem' : '0.75rem',
                    height: '0.75rem',
                    background: i === currentIndex ? '#3b82f6' : 'rgba(148,163,184,0.3)',
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all border"
              style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#263348'; e.currentTarget.style.color = '#f1f5f9'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#94a3b8'; }}
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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