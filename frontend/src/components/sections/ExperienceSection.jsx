import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  // ── Orden CRONOLÓGICO: más antigua primero, más reciente al final ──────────
  // Para agregar una nueva experiencia en el futuro, simplemente añádela
  // al final del array — la lógica de timeline es automática.
  const experiences = [
    {
      company: 'Ministerio de Obras Públicas (MOPT)',
      role: 'Software Development Intern',
      period: 'Nov 2024 - Ene 2025',
      duration: '3 meses',
      current: false,
      description: 'Diseño y desarrollo de sistemas internos gubernamentales de alta criticidad.',
      tasks: [
        'Desarrollo backend con C# y ASP.NET para procesos administrativos.',
        'Prototipado UI/UX en Figma enfocado en la eficiencia del usuario.',
        'Ejecución de QA Testing y documentación técnica institucional.',
      ],
      tags: ['ASP.NET', 'SQL Server 2022', 'Figma', 'QA Testing'],
      accent: {
        dot: '#facc15',
        ring: 'rgba(250,204,21,0.25)',
        tagBg: 'rgba(250,204,21,0.1)',
        tagText: '#fde68a',
        badgeBg: 'rgba(250,204,21,0.08)',
        badgeText: '#fde68a',
        badgeBorder: 'rgba(250,204,21,0.3)',
      },
    },
    {
      company: 'Famolcas S.A. de C.V (Lido)',
      role: 'Mobile Developer & ERP Specialist',
      period: 'Marzo 2025 - Presente',
      duration: '~2 meses',
      current: true,
      description: 'Lidero el desarrollo de soluciones móviles nativas e integración de sistema de gestión empresarial.',
      tasks: [
        'Desarrollo de apps móviles en Kotlin bajo arquitectura MVVM.',
        'Arquitectura e integración de módulos ERP utilizando C# y XAF Framework.',
        'Consumo y optimización de servicios Web API REST.',
      ],
      tags: ['Kotlin', 'C#', 'XAF', 'SQL Server', 'Android SDK'],
      accent: {
        dot: '#3b82f6',
        ring: 'rgba(59,130,246,0.25)',
        tagBg: 'rgba(59,130,246,0.12)',
        tagText: '#93c5fd',
        badgeBg: 'rgba(59,130,246,0.1)',
        badgeText: '#93c5fd',
        badgeBorder: 'rgba(59,130,246,0.3)',
      },
    },
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
            setTimeout(() => setVisibleItems(prev => [...new Set([...prev, i])]), i * 150);
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section id="experience" className="py-24 overflow-hidden" style={{ background: '#111827' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-extrabold text-center mb-3 text-slate-100 tracking-tight">
          Trayectoria Profesional
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Experiencia construyendo software real en entornos empresariales y gubernamentales
        </p>

        {/* ── Timeline — columna única ancha, orden cronológico ── */}
        <div className="relative max-w-4xl mx-auto">

          {/* Línea vertical — conecta todos los puntos */}
          <div
            className="absolute top-6 bottom-6"
            style={{
              left: '1.75rem',
              width: '1px',
              background: 'linear-gradient(to bottom, #facc15 0%, #3b82f6 100%)',
              opacity: 0.5,
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const a = exp.accent;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`relative flex gap-8 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                >
                  {/* Punto en la línea */}
                  <div className="relative flex-shrink-0" style={{ width: '3.5rem' }}>
                    <div
                      className="absolute mt-7 z-10"
                      style={{
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '50%',
                        background: a.dot,
                        boxShadow: `0 0 0 4px ${a.ring}, 0 0 14px ${a.dot}66`,
                        left: '0.875rem',
                        transform: 'translateX(-50%)',
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-7 border mb-2 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                    style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-100 leading-snug">
                          {exp.role}
                        </h3>
                        <p
                          className="flex items-center gap-1.5 mt-1.5 text-sm font-semibold"
                          style={{ color: a.dot }}
                        >
                          <Briefcase size={13} className="flex-shrink-0" />
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span
                          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                          style={{ background: a.badgeBg, color: a.badgeText, borderColor: a.badgeBorder }}
                        >
                          <Calendar size={11} /> {exp.period}
                        </span>
                        {/* Duración */}
                        <span className="text-xs px-2 py-0.5 rounded-md" style={{ color: '#64748b' }}>
                          {exp.duration}
                        </span>
                        {/* Badge activo */}
                        {exp.current && (
                          <span
                            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                            style={{ background: 'rgba(34,197,94,0.12)', color: '#86efac', border: '1px solid rgba(34,197,94,0.3)' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Activo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Descripción */}
                    <p
                      className="text-slate-400 text-sm italic leading-relaxed border-l-2 pl-4 mb-5"
                      style={{ borderColor: 'rgba(148,163,184,0.2)' }}
                    >
                      {exp.description}
                    </p>

                    {/* Tareas en grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5 mb-6">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: a.dot }} />
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold rounded-lg"
                          style={{ background: a.tagBg, color: a.tagText }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Punto final de la línea */}
          <div
            className="absolute"
            style={{
              left: '1.75rem',
              bottom: '0',
              width: '0.625rem',
              height: '0.625rem',
              borderRadius: '50%',
              background: 'rgba(148,163,184,0.2)',
              border: '1px solid rgba(148,163,184,0.3)',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;