import React from 'react';
import { GraduationCap, Briefcase, Smartphone, Sparkles, Server, Zap } from 'lucide-react';

// Componente de título de sección — uniforme en todo el sitio
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">{title}</h2>
    <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
    {subtitle && <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>}
  </div>
);

const AboutSection = () => {
  const details = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Formación Académica',
      description: 'Ingeniería Informática en la UCA · Técnico en Desarrollo de Software (Ricaldone)',
      highlight: true,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Empleo Actual',
      description: 'Mobile Developer en Famolcas S.A. de C.V. (Lido) · Colaboración en desarrollo ERP y POS · Desde marzo 2026',
      highlight: true,
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Especialidad Móvil',
      description: 'Desarrollo nativo Android con Kotlin · MVVM · Coroutines · APIs REST',
      highlight: false,
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Diseño UI/UX',
      description: 'Interfaces centradas en el usuario y prototipado en Figma para productos reales',
      highlight: false,
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Stack Empresarial',
      description: 'C# · .NET · DevExpress XAF/XPO · WPF · Blazor · PostgreSQL · SQL Server',
      highlight: false,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Enfoque',
      description: 'Optimización de procesos de negocio mediante soluciones móviles y ERP escalables',
      highlight: false,
    },
  ];

  return (
    <section id="about" className="py-24" style={{ background: '#111827' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          title="Sobre Mí"
          subtitle="Desarrollador enfocado en crear soluciones que generan impacto real en operaciones empresariales"
        />

        {/* ── Bio en primera persona ── */}
        <div className="max-w-3xl mx-auto mb-16 space-y-5">
          {[
            'Soy desarrollador de software con experiencia en aplicaciones móviles nativas y sistemas ERP empresariales. Actualmente trabajo en Famolcas S.A. de C.V., donde desarrollo módulos de facturación, POS, control de caja y apps Android que conectan al equipo comercial con el sistema central en tiempo real.',
            'Antes de eso, realicé prácticas en el Ministerio de Obras Públicas y Transporte, donde tuve mi primer contacto con el desarrollo en entornos de alta criticidad y estándares institucionales. Esa experiencia temprana me enseñó a adaptarme rápido y a escribir código que importa.',
            'Estoy cursando Ingeniería Informática en la UCA y sigo aprendiendo constantemente. Me interesa especialmente la intersección entre sistemas empresariales y movilidad: hacer que procesos complejos sean simples y accesibles desde cualquier dispositivo.',
          ].map((p, i) => (
            <p key={i} className="text-slate-400 text-lg leading-relaxed">{p}</p>
          ))}
        </div>

        {/* ── Cards con jerarquía visual ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((detail, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex gap-4 items-start"
              style={{
                background: detail.highlight ? 'rgba(59,130,246,0.06)' : '#1e293b',
                borderColor: detail.highlight ? 'rgba(59,130,246,0.25)' : 'rgba(148,163,184,0.1)',
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
                style={{
                  background: detail.highlight ? 'rgba(59,130,246,0.15)' : 'rgba(59,130,246,0.08)',
                  color: detail.highlight ? '#60a5fa' : '#3b82f6',
                }}
              >
                {detail.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-slate-200 mb-1 text-sm">{detail.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SectionTitle };
export default AboutSection;