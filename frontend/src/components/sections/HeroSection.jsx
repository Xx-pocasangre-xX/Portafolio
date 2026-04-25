import React, { useEffect, useRef, useState } from 'react';
import profileImage from '../../assets/Perfil.png';

const AnimatedCounter = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ricardo_Garcia_Pocasangre_Desarrollador_Software_2026.pdf';
    link.download = 'Ricardo_Garcia_Pocasangre_Desarrollador_Software_2026.pdf';
    link.click();
  };

  // Datos honestos y reales
  const stats = [
    { value: 5,  suffix: '',  label: 'Proyectos completados' },
    { value: 10, suffix: '+', label: 'Tecnologías dominadas' },
    { value: 2,  suffix: '',  label: 'Empresas colaboradas' },
    { value: 3,  suffix: '',  label: 'Meses de experiencia laboral' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f1e36 50%, #0f172a 100%)' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-16">

        {/* Texto */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <div
            className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium"
            style={{ border: '1px solid rgba(96,165,250,0.3)', background: 'rgba(96,165,250,0.08)', color: '#93c5fd' }}
          >
            Disponible para proyectos internacionales
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight">
            Ricardo García{' '}
            <span style={{ color: '#60a5fa' }}>Pocasangre</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-400 mb-8">
            Software Developer | Mobile (Kotlin) &amp; Full-Stack
          </h2>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Estudiante de Ingeniería Informática (UCA) con experiencia en desarrollo de aplicaciones
            móviles y sistemas empresariales. Enfocado en construir soluciones eficientes mediante
            consumo de APIs, desarrollo en Kotlin y sistemas ERP.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-bold transform hover:-translate-y-1 transition-all duration-300"
              style={{ background: '#3b82f6', color: 'white', boxShadow: '0 10px 30px -10px rgba(59,130,246,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#2563eb'}
              onMouseLeave={e => e.currentTarget.style.background = '#3b82f6'}
            >
              Hablemos
            </a>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 rounded-xl font-bold transform hover:-translate-y-1 transition-all duration-300"
              style={{ border: '1px solid rgba(148,163,184,0.25)', color: '#cbd5e1', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(148,163,184,0.08)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.25)'; }}
            >
              Descargar CV
            </button>
          </div>

          {/* Contadores */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl px-4 py-5 text-center border transition-all duration-300 group hover:-translate-y-1"
                style={{ background: 'rgba(30,41,59,0.7)', borderColor: 'rgba(148,163,184,0.1)' }}
              >
                <p
                  className="text-2xl lg:text-3xl font-extrabold tabular-nums transition-colors duration-300 group-hover:text-blue-400"
                  style={{ color: '#f1f5f9' }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1500 + i * 100} />
                </p>
                <p className="text-xs mt-1 leading-snug" style={{ color: '#64748b' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
            <div
              className="absolute inset-0 rounded-full filter blur-3xl animate-blob"
              style={{ background: '#3b82f6', opacity: 0.12 }}
            />
            <div
              className="absolute inset-0 rounded-full filter blur-3xl animate-blob animation-delay-2000"
              style={{ background: '#22d3ee', opacity: 0.1 }}
            />
            <img
              src={profileImage}
              alt="Ricardo García"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: '1px solid rgba(148,163,184,0.15)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;