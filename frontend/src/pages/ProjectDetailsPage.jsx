import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import {
  ArrowLeft, Github, CheckCircle, ChevronDown, ChevronUp, X, ZoomIn
} from 'lucide-react';

import projectsData from '../data/projectsData.jsx';

// ─── Tema visual por proyecto ─────────────────────────────────────────────────
const PROJECT_THEMES = {
  mopt: {
    // Amarillo institucional — vibrante
    gradient: 'from-[#1a1400] via-[#2e2200] to-[#1a1400]',
    accentHex: '#facc15',
    glowColor: 'rgba(250,204,21,0.25)',
    badgeBg: 'bg-yellow-900/60',
    badgeText: 'text-yellow-200',
    badgeBorder: 'border-yellow-600/50',
    tagBg: 'bg-yellow-800/50',
    repoBtnClass: 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold',
    underlineClass: 'bg-yellow-400',
    subtitleClass: 'text-yellow-200',
    // Caja del logo: gris suave cálido que armoniza con el amarillo
    logoBgColor: '#e8e8e8',
    logoBorderColor: 'rgba(250,204,21,0.25)',
  },
  marquesa: {
    gradient: 'from-[#200a16] via-[#3d1530] to-[#200a16]',
    accentHex: '#f472b6',
    glowColor: 'rgba(244,114,182,0.2)',
    badgeBg: 'bg-pink-900/60',
    badgeText: 'text-pink-200',
    badgeBorder: 'border-pink-700/50',
    tagBg: 'bg-pink-800/40',
    repoBtnClass: 'bg-rose-500 hover:bg-rose-400 text-white',
    underlineClass: 'bg-pink-400',
    subtitleClass: 'text-pink-200',
    logoBgColor: '#e8e8e8',
    logoBorderColor: 'rgba(244,114,182,0.2)',
  },
  homeclick: {
    gradient: 'from-[#140a00] via-[#2a1500] to-[#140a00]',
    accentHex: '#fb923c',
    glowColor: 'rgba(251,146,60,0.2)',
    badgeBg: 'bg-orange-900/60',
    badgeText: 'text-orange-200',
    badgeBorder: 'border-orange-700/50',
    tagBg: 'bg-orange-800/40',
    repoBtnClass: 'bg-orange-500 hover:bg-orange-400 text-white',
    underlineClass: 'bg-orange-400',
    subtitleClass: 'text-orange-200',
    logoBgColor: '#e8e8e8',
    logoBorderColor: 'rgba(251,146,60,0.2)',
  },
  isssSalud: {
    gradient: 'from-[#03091a] via-[#071733] to-[#03091a]',
    accentHex: '#60a5fa',
    glowColor: 'rgba(96,165,250,0.2)',
    badgeBg: 'bg-blue-900/60',
    badgeText: 'text-blue-200',
    badgeBorder: 'border-blue-700/50',
    tagBg: 'bg-blue-800/40',
    repoBtnClass: 'bg-blue-600 hover:bg-blue-500 text-white',
    underlineClass: 'bg-blue-400',
    subtitleClass: 'text-blue-200',
    logoBgColor: '#e8e8e8',
    logoBorderColor: 'rgba(96,165,250,0.2)',
  },
  hospitalBloom: {
    gradient: 'from-[#031209] via-[#072014] to-[#031209]',
    accentHex: '#34d399',
    glowColor: 'rgba(52,211,153,0.2)',
    badgeBg: 'bg-emerald-900/60',
    badgeText: 'text-emerald-200',
    badgeBorder: 'border-emerald-700/50',
    tagBg: 'bg-emerald-800/40',
    repoBtnClass: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    underlineClass: 'bg-emerald-400',
    subtitleClass: 'text-emerald-200',
    logoBgColor: '#e8e8e8',
    logoBorderColor: 'rgba(52,211,153,0.2)',
  },
};

// ─── Imagen inteligente con detección de orientación ─────────────────────────
const SmartImage = ({ src, alt, caption, onClick }) => {
  const [orientation, setOrientation] = useState('unknown');

  const handleLoad = (e) => {
    const ratio = e.target.naturalWidth / e.target.naturalHeight;
    if (ratio < 0.75) setOrientation('portrait');
    else if (ratio > 1.4) setOrientation('landscape');
    else setOrientation('square');
  };

  const containerClass = {
    portrait:  'h-[420px]',
    landscape: 'h-56',
    square:    'h-72',
    unknown:   'h-72',
  }[orientation];

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => onClick && onClick({ src, alt, caption })}
    >
      <div className={`relative ${containerClass} bg-gray-100 flex items-center justify-center overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
        </div>
      </div>
      {caption && (
        <div className="p-4">
          <p className="text-sm text-gray-600">{caption}</p>
        </div>
      )}
    </div>
  );
};

// ─── Modal de imagen ──────────────────────────────────────────────────────────
const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
        <X size={24} />
      </button>
      <div className="max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
        {image.caption && <p className="text-white/80 text-sm mt-4 text-center">{image.caption}</p>}
      </div>
    </div>
  );
};

// ─── Sección colapsable ───────────────────────────────────────────────────────
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="mb-8">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left group">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h2>
        <div className="flex-shrink-0 ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors">
          {open ? <ChevronUp size={20} className="text-gray-600" /> : <ChevronDown size={20} className="text-gray-600" />}
        </div>
      </button>
      <div className="w-full h-px bg-gray-200 mt-3 mb-5" />
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </section>
  );
};

// ─── Página principal ─────────────────────────────────────────────────────────
const ProjectDetailsPage = ({ projectId: propProjectId }) => {
  const { projectId: paramProjectId } = useParams();
  const projectId = propProjectId || paramProjectId;
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const project = projectsData[projectId];
  const theme = PROJECT_THEMES[projectId] || PROJECT_THEMES.isssSalud;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          BANNER — El navbar tiene h≈80px. Usamos pt-32
          para dar aire real entre navbar y contenido.
          La franja de "fade" cubre los primeros 80px del
          banner haciendo que el corte se disuelva.
      ═══════════════════════════════════════════════════ */}
      <div
        className={`bg-gradient-to-br ${theme.gradient} text-white relative overflow-hidden`}
        style={{ paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        {/* Fade que difumina el borde superior del banner
            para que el navbar no se sienta "cortado" */}
        <div
          className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-20"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 100%)`,
          }}
        />

        {/* Glow de acento */}
        <div
          className="absolute right-0 top-0 w-2/3 h-full opacity-100 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 85% 40%, ${theme.glowColor}, transparent 65%)` }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Fila: Volver | Badge centrado | Espaciador ── */}
          <div className="relative flex items-center justify-between mb-10">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium z-10"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Volver a Proyectos</span>
              <span className="sm:hidden">Volver</span>
            </Link>

            {/* Badge centrado */}
            {project.headerBadge && (
              <div
                className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-sm ${theme.badgeBg} border ${theme.badgeBorder}`}
              >
                <project.headerBadge.icon size={15} className={theme.badgeText} />
                <span className={`${theme.badgeText} text-sm font-semibold whitespace-nowrap`}>
                  {project.headerBadge.text}
                </span>
              </div>
            )}

            {/* Espaciador para equilibrar el flex */}
            <div className="w-32 sm:w-40 invisible" aria-hidden="true" />
          </div>

          {/* ── Cuerpo: Título/info + Logo ── */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Texto izquierda */}
            <div className="flex-1 min-w-0">
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
                {project.title}
              </h1>

              <div className={`w-20 h-1.5 rounded-full mb-5 ${theme.underlineClass}`} />

              <p className={`text-lg mb-6 ${theme.subtitleClass}`}>{project.subtitle}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 ${theme.tagBg} backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/10`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex flex-wrap gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-colors shadow-lg ${theme.repoBtnClass}`}
                  >
                    <Github size={18} /> Ver Repositorio
                  </a>
                )}
                {project.confidentialNotice && !project.githubLink && (
                  <div className="bg-yellow-900/40 border border-yellow-600/40 rounded-xl p-4 inline-flex items-center gap-3 max-w-md">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-yellow-100 text-sm">{project.confidentialNotice}</span>
                  </div>
                )}
                {project.githubLinkJ && (
                  <a
                    href={project.githubLinkJ}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-colors shadow-lg ${theme.repoBtnClass}`}
                  >
                    <Github size={18} /> Repositorio Java
                  </a>
                )}
                {project.githubLinkA && (
                  <a
                    href={project.githubLinkA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold transition-colors"
                  >
                    <Github size={18} /> Repositorio Android
                  </a>
                )}
              </div>
            </div>

            {/* Logo — caja gris suave (tono oscuro del color del proyecto, no blanco) */}
            {project.logo && (
              <div className="flex-shrink-0 flex justify-center lg:justify-end">
                <div
                  className="w-48 h-48 lg:w-60 lg:h-60 rounded-3xl flex items-center justify-center p-7"
                  style={{
                    background: theme.logoBgColor,
                    border: `1px solid ${theme.logoBorderColor}`,
                    boxShadow: `0 30px 60px -10px rgba(0,0,0,0.5), 0 0 40px -5px ${theme.glowColor}`,
                  }}
                >
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          CONTENIDO
      ═══════════════════════════════════ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <CollapsibleSection title="Descripción del Proyecto" defaultOpen={true}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
            {project.description.intro.map((p, i) => (
              <p key={i} className="text-gray-700 mb-4 leading-relaxed last:mb-0">{p}</p>
            ))}
            {project.description.context && (
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {project.description.context.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <item.icon className="text-blue-600" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CollapsibleSection>

        {project.gallery && (
          <CollapsibleSection title="Capturas del Proyecto" defaultOpen={true}>
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {project.gallery.map((image, i) => (
                <SmartImage key={i} src={image.src} alt={image.alt} caption={image.caption} onClick={setModalImage} />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">Haz clic en una imagen para ampliarla</p>
          </CollapsibleSection>
        )}

        {project.techStack && (
          <CollapsibleSection title="Stack Tecnológico" defaultOpen={true}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="p-4 border border-gray-100 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-200 bg-gray-50 hover:bg-white">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{tech.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        )}

        {project.challenges && (
          <CollapsibleSection title="Desafíos y Soluciones">
            <div className="space-y-5">
              {project.challenges.map((challenge, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">{challenge.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 pl-10">{challenge.problem}</p>
                  <div className="ml-10 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Solución implementada</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {project.impact && (
          <CollapsibleSection title="Impacto del Proyecto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
              {project.impact.metrics.map((metric, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="text-blue-600" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">{metric.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="text-gray-700 leading-relaxed">{project.impact.description}</p>
            </div>
          </CollapsibleSection>
        )}

        {project.learnings && (
          <CollapsibleSection title="Aprendizajes y Crecimiento">
            <div className="grid md:grid-cols-3 gap-6">
              {project.learnings.map((learning, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{learning.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{learning.title}</h3>
                  <ul className="space-y-2">
                    {learning.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {project.conclusion && (
          <CollapsibleSection title="Conclusiones" defaultOpen={true}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
              {project.conclusion.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed last:mb-0">{p}</p>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {project.relatedProjects && (
          <CollapsibleSection title="Otros Proyectos Destacados" defaultOpen={true}>
            <div className="grid md:grid-cols-3 gap-6">
              {project.relatedProjects.map((related, i) => (
                <Link key={i} to={`/proyecto/${related.id}`} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                    <img src={related.image} alt={related.title} className="max-h-32 max-w-full object-contain" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{related.type}</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">{related.title}</h3>
                    <p className="text-gray-500 text-sm">{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CollapsibleSection>
        )}
      </div>

      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;