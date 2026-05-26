import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

import moptLogo      from '../../assets/mopt-logo.png';
import homeclickLogo from '../../assets/homeclick-logo.png';
import issLogo       from '../../assets/LOGO AZUL.png';
import bloomLogo     from '../../assets/bloom salud.png';
import marquesaLogo  from '../../assets/logo_marquesa.png';
import lidoLogo      from '../../assets/lido.png';

// ─── Datos agrupados por organización ─────────────────────────────────────────
const GROUPS = [
  {
    id: 'famolcas',
    orgName: 'Famolcas S.A. de C.V. (Lido)',
    orgPeriod: 'Marzo 2026 – Presente',
    orgType: 'Empleo actual',
    orgLogo: lidoLogo,
    accentColor: '#3b82f6',
    accentBg: 'rgba(59,130,246,0.08)',
    accentBorder: 'rgba(59,130,246,0.2)',
    badgeColor: '#93c5fd',
    badgeBg: 'rgba(59,130,246,0.1)',
    dotColor: '#22c55e',
    isActive: true,
    projects: [
      {
        id: 'erp',
        title: 'Sistema ERP Empresarial',
        description: 'Sistema de gestión integral con módulos de Facturación, Cuentas por Cobrar, POS y control de caja. Desarrollado con DevExpress XAF y XPO sobre .NET.',
        technologies: ['C#', '.NET', 'DevExpress XAF', 'XPO', 'PostgreSQL', 'WPF', 'Blazor'],
        detailsLink: '/proyecto/erp',
        isConfidential: true,
      },
      {
        id: 'appPunteo',
        title: 'App Punteo',
        description: 'Aplicación Android nativa para recopilación geolocalizada de información de clientes en campo, con sincronización en tiempo real al ERP corporativo.',
        technologies: ['Kotlin', 'Android SDK', 'MVVM', 'Coroutines', 'GPS', 'OkHttp'],
        detailsLink: '/proyecto/appPunteo',
        isConfidential: true,
      },
      {
        id: 'appVentas',
        title: 'App Ventas',
        description: 'Aplicación Android nativa para gestión de pedidos y catálogo de productos en campo, con soporte offline y sincronización con el ERP central.',
        technologies: ['Kotlin', 'Android SDK', 'MVVM', 'Coroutines', 'ViewPager2', 'SQLite'],
        detailsLink: '/proyecto/appVentas',
        isConfidential: true,
      },
      {
        id: 'erpapi',
        title: 'ERPAPI',
        description: 'API REST empresarial con .NET Minimal APIs y Dapper sobre PostgreSQL. Capa de integración entre las apps móviles y el sistema ERP central.',
        technologies: ['.NET Minimal APIs', 'C#', 'Dapper', 'PostgreSQL', 'REST'],
        detailsLink: '/proyecto/erpapi',
        isConfidential: true,
      },
    ],
  },
  {
    id: 'mopt',
    orgName: 'Ministerio de Obras Públicas y Transporte',
    orgPeriod: 'Nov 2024 – Ene 2025',
    orgType: 'Prácticas profesionales',
    orgLogo: moptLogo,
    accentColor: '#facc15',
    accentBg: 'rgba(250,204,21,0.06)',
    accentBorder: 'rgba(250,204,21,0.18)',
    badgeColor: '#fde68a',
    badgeBg: 'rgba(250,204,21,0.1)',
    dotColor: '#64748b',
    isActive: false,
    projects: [
      {
        id: 'mopt',
        title: 'Sistema Interno MOPT',
        description: 'Sistema administrativo crítico desarrollado para el ministerio. Backend en C#/ASP.NET, diseño UI/UX en Figma y QA Testing bajo estándares gubernamentales.',
        technologies: ['C#', 'ASP.NET', 'SQL Server 2022', 'Figma', 'QA Testing'],
        detailsLink: '/proyecto/mopt',
        isConfidential: true,
      },
    ],
  },
  {
    id: 'academico',
    orgName: 'Proyectos Académicos',
    orgPeriod: '2024 – 2025',
    orgType: 'Instituto Técnico Ricaldone · UCA',
    orgLogo: null,
    accentColor: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.06)',
    accentBorder: 'rgba(167,139,250,0.18)',
    badgeColor: '#c4b5fd',
    badgeBg: 'rgba(167,139,250,0.1)',
    dotColor: '#64748b',
    isActive: false,
    projects: [
      {
        id: 'marquesa',
        title: 'Marquesa – Tienda de Regalos',
        description: 'Plataforma e-commerce completa para tienda de regalos personalizados. Web (React/Node.js) + App móvil (React Native/Expo) sobre arquitectura MERN.',
        technologies: ['React', 'Node.js', 'MongoDB', 'React Native', 'Expo'],
        detailsLink: '/proyecto/marquesa',
        githubLink: 'https://github.com/xxDianaPadilla/Marquesa',
        isConfidential: false,
      },
      {
        id: 'homeclick',
        title: 'HomeClick – Plataforma Inmobiliaria',
        description: 'Plataforma full-stack de comercio electrónico inmobiliario. Catálogo de propiedades, mapas interactivos, autenticación JWT y panel administrativo.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        detailsLink: '/proyecto/homeclick',
        githubLink: 'https://github.com/xxDianaPadilla/homeClick',
        isConfidential: false,
      },
      {
        id: 'isssSalud',
        title: 'ISSS Salud – Sistema Dual',
        description: 'Ecosistema hospitalario multiplataforma: app de escritorio en Java/Swing para personal médico y app móvil Android en Kotlin para pacientes, sobre Oracle DB.',
        technologies: ['Java Desktop', 'Kotlin Mobile', 'Oracle DB', 'Android', 'Swing'],
        detailsLink: '/proyecto/isssSalud',
        githubLinkJ: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java.git',
        githubLinkA: 'https://github.com/xxDianaPadilla/ISSS-Salud.git',
        isConfidential: false,
      },
      {
        id: 'hospitalBloom',
        title: 'Hospital Bloom – App Móvil',
        description: 'Sistema de gestión hospitalaria pediátrica para el Hospital Nacional Benjamín Bloom. Enfocado en diseño UX/UI para entornos médicos críticos.',
        technologies: ['Kotlin', 'Android', 'Oracle DB', 'Material Design', 'Lottie'],
        detailsLink: '/proyecto/hospitalBloom',
        githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom.git',
        isConfidential: false,
      },
    ],
  },
];

// ─── Card de proyecto individual ──────────────────────────────────────────────
const ProjectCard = ({ project, accentColor, badgeColor }) => (
  <div
    className="rounded-xl border flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    style={{ background: '#1a2744', borderColor: 'rgba(148,163,184,0.1)' }}
  >
    <div className="p-5 flex-1 flex flex-col">
      {/* Título + badge confidencial */}
      <div className="flex items-start gap-2 mb-3">
        <h4 className="text-sm font-bold text-slate-100 leading-snug flex-1">
          {project.title}
        </h4>
        {project.isConfidential && (
          <span
            className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
            style={{ background: 'rgba(250,204,21,0.08)', color: '#fde68a', border: '1px solid rgba(250,204,21,0.2)' }}
          >
            <Lock size={10} /> Privado
          </span>
        )}
      </div>

      <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 3).map(tech => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded font-medium"
            style={{ background: `${accentColor}18`, color: badgeColor }}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-0.5 text-xs rounded" style={{ background: 'rgba(148,163,184,0.08)', color: '#64748b' }}>
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
            className="flex-1 min-w-[60px] px-2 py-1.5 rounded-lg flex items-center justify-center gap-1 text-xs font-medium transition-all border"
            style={{ borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; e.currentTarget.style.color = '#f1f5f9'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.color = '#94a3b8'; }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Repo
          </a>
        )}
        {project.githubLinkA && (
          <a
            href={project.githubLinkA}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 min-w-[60px] px-2 py-1.5 rounded-lg flex items-center justify-center gap-1 text-xs font-medium transition-all border"
            style={{ borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; e.currentTarget.style.color = '#f1f5f9'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.color = '#94a3b8'; }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Android
          </a>
        )}
        {project.githubLinkJ && (
          <a
            href={project.githubLinkJ}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 min-w-[60px] px-2 py-1.5 rounded-lg flex items-center justify-center gap-1 text-xs font-medium transition-all border"
            style={{ borderColor: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; e.currentTarget.style.color = '#f1f5f9'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.color = '#94a3b8'; }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Java
          </a>
        )}
        <Link
          to={project.detailsLink}
          className="flex-1 min-w-[70px] px-2 py-1.5 rounded-lg text-center text-xs font-semibold transition-all flex items-center justify-center gap-1"
          style={{ background: '#3b82f6', color: 'white' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#3b82f6'; }}
        >
          <ExternalLink size={11} /> Detalles
        </Link>
      </div>
    </div>
  </div>
);

// ─── Componente principal ─────────────────────────────────────────────────────
const ProjectsCarousel = () => {
  // Famolcas abierto por defecto al ser el empleo actual
  const [openGroups, setOpenGroups] = useState({ famolcas: true });

  const toggle = (id) =>
    setOpenGroups(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="projects" className="py-24" style={{ background: '#111827' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-slate-100">
          Proyectos Destacados
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          Organizado por empresa e institución de origen
        </p>

        <div className="max-w-5xl mx-auto space-y-4">
          {GROUPS.map((group) => {
            const isOpen = !!openGroups[group.id];

            // Recopila todas las tecnologías únicas del grupo
            const allTechs = [
              ...new Set(group.projects.flatMap(p => p.technologies)),
            ];

            return (
              <div
                key={group.id}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? group.accentBorder : 'rgba(148,163,184,0.1)',
                  background: '#0f172a',
                  boxShadow: isOpen ? `0 8px 32px -8px ${group.accentColor}25` : 'none',
                }}
              >
                {/* ── Header colapsable ── */}
                <button
                  onClick={() => toggle(group.id)}
                  className="w-full flex items-center gap-4 p-5 text-left transition-all duration-200"
                  style={{ background: isOpen ? group.accentBg : 'transparent' }}
                >
                  {/* Logo */}
                  {group.orgLogo ? (
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: '#e8e8e8' }}
                    >
                      <img
                        src={group.orgLogo}
                        alt={group.orgName}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: group.accentBg, border: `1px solid ${group.accentBorder}` }}
                    >
                      🎓
                    </div>
                  )}

                  {/* Info organización */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="text-sm font-bold text-slate-100 truncate">
                        {group.orgName}
                      </span>
                      {group.isActive && (
                        <span
                          className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0"
                          style={{ background: 'rgba(34,197,94,0.12)', color: '#86efac', border: '1px solid rgba(34,197,94,0.3)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Activo
                        </span>
                      )}
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
                        style={{ background: group.accentBg, color: group.badgeColor, border: `1px solid ${group.accentBorder}` }}
                      >
                        {group.orgType}
                      </span>
                    </div>

                    {/* Tecnologías del grupo */}
                    <div className="flex flex-wrap gap-1.5">
                      {allTechs.slice(0, 7).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{ background: `${group.accentColor}12`, color: group.badgeColor }}
                        >
                          {tech}
                        </span>
                      ))}
                      {allTechs.length > 7 && (
                        <span className="px-2 py-0.5 rounded text-xs" style={{ color: '#64748b' }}>
                          +{allTechs.length - 7} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contador de proyectos + chevron */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-slate-500 hidden sm:block">
                      {group.projects.length} {group.projects.length === 1 ? 'proyecto' : 'proyectos'}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ background: isOpen ? group.accentColor : 'rgba(148,163,184,0.1)', color: isOpen ? 'white' : '#64748b' }}
                    >
                      {isOpen
                        ? <ChevronUp size={16} />
                        : <ChevronDown size={16} />
                      }
                    </div>
                  </div>
                </button>

                {/* ── Panel de proyectos colapsable ── */}
                <div
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{ maxHeight: isOpen ? '2000px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div
                    className="p-5 pt-0"
                    style={{ borderTop: `1px solid ${group.accentBorder}` }}
                  >
                    <div className={`grid gap-4 mt-5 ${
                      group.projects.length === 1
                        ? 'grid-cols-1 max-w-md'
                        : group.projects.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : group.projects.length === 3
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'
                    }`}>
                      {group.projects.map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          accentColor={group.accentColor}
                          badgeColor={group.badgeColor}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;