import React from 'react';

// ─── Datos de habilidades — sin porcentajes, por chips agrupados ──────────────
const TECH_SKILLS = [
  {
    category: 'Mobile & Android',
    accentColor: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.2)',
    bgColor: 'rgba(167,139,250,0.05)',
    icon: '📱',
    skills: [
      { name: 'Kotlin', level: 'Avanzado' },
      { name: 'Android SDK', level: 'Avanzado' },
      { name: 'MVVM', level: 'Avanzado' },
      { name: 'Coroutines', level: 'Avanzado' },
      { name: 'ViewPager2', level: 'Intermedio' },
      { name: 'Google Location', level: 'Intermedio' },
      { name: 'React Native', level: 'Intermedio' },
      { name: 'Java (Android)', level: 'Intermedio' },
      { name: 'Expo', level: 'Intermedio' },
    ],
  },
  {
    category: 'ERP & Empresarial',
    accentColor: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.2)',
    bgColor: 'rgba(96,165,250,0.05)',
    icon: '🏢',
    skills: [
      { name: 'DevExpress XAF', level: 'Intermedio' },
      { name: 'XPO ORM', level: 'Intermedio' },
      { name: 'C# / .NET', level: 'Intermedio' },
      { name: 'WPF', level: 'Intermedio' },
      { name: 'Blazor', level: 'Básico' },
      { name: 'Dapper', level: 'Intermedio' },
      { name: '.NET Minimal APIs', level: 'Intermedio' },
    ],
  },
  {
    category: 'Frontend & Web',
    accentColor: '#38bdf8',
    borderColor: 'rgba(56,189,248,0.2)',
    bgColor: 'rgba(56,189,248,0.05)',
    icon: '🌐',
    skills: [
      { name: 'React', level: 'Avanzado' },
      { name: 'JavaScript', level: 'Avanzado' },
      { name: 'Tailwind CSS', level: 'Avanzado' },
      { name: 'HTML5 / CSS3', level: 'Avanzado' },
      { name: 'React Router', level: 'Intermedio' },
      { name: 'Figma', level: 'Intermedio' },
    ],
  },
  {
    category: 'Backend & Bases de Datos',
    accentColor: '#34d399',
    borderColor: 'rgba(52,211,153,0.2)',
    bgColor: 'rgba(52,211,153,0.05)',
    icon: '🗄️',
    skills: [
      { name: 'Node.js', level: 'Intermedio' },
      { name: 'Express', level: 'Intermedio' },
      { name: 'PostgreSQL', level: 'Intermedio' },
      { name: 'SQL Server', level: 'Intermedio' },
      { name: 'Oracle Database', level: 'Intermedio' },
      { name: 'MongoDB', level: 'Intermedio' },
      { name: 'SQLite', level: 'Intermedio' },
    ],
  },
];

const SOFT_SKILLS = [
  { icon: '🗣️', title: 'Comunicación Técnica', desc: 'Documentación clara y colaboración con equipos multidisciplinarios.' },
  { icon: '🤝', title: 'Trabajo en Equipo', desc: 'Participación en proyectos colaborativos en entornos reales.' },
  { icon: '🧩', title: 'Pensamiento Analítico', desc: 'Resolución estructurada de problemas en sistemas complejos.' },
  { icon: '⚡', title: 'Adaptabilidad', desc: 'Curva de aprendizaje acelerada en nuevas tecnologías y entornos.' },
];

// Colores por nivel de dominio
const LEVEL_STYLES = {
  'Avanzado':   { bg: 'rgba(34,197,94,0.12)',  text: '#86efac', border: 'rgba(34,197,94,0.25)' },
  'Intermedio': { bg: 'rgba(148,163,184,0.08)', text: '#94a3b8', border: 'rgba(148,163,184,0.15)' },
  'Básico':     { bg: 'rgba(251,191,36,0.08)',  text: '#fcd34d', border: 'rgba(251,191,36,0.2)' },
};

const SkillsSection = () => (
  <section id="skills" className="py-24" style={{ background: '#111827' }}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Título uniforme ── */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">Stack Tecnológico</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
        <p className="text-slate-400 max-w-xl mx-auto">
          Tecnologías aplicadas en proyectos reales de producción
        </p>
      </div>

      {/* ── Leyenda de niveles ── */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.entries(LEVEL_STYLES).map(([level, style]) => (
          <span
            key={level}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{ background: style.bg, color: style.text, borderColor: style.border }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: style.text }} />
            {level}
          </span>
        ))}
      </div>

      {/* ── Grid de categorías ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
        {TECH_SKILLS.map((cat, ci) => (
          <div
            key={ci}
            className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg"
            style={{ background: cat.bgColor, borderColor: cat.borderColor }}
          >
            {/* Header categoría */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">{cat.icon}</span>
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: cat.accentColor }}
              >
                {cat.category}
              </h3>
            </div>

            {/* Chips de tecnologías */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => {
                const levelStyle = LEVEL_STYLES[skill.level];
                return (
                  <span
                    key={si}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: levelStyle.bg,
                      color: levelStyle.text,
                      borderColor: levelStyle.border,
                    }}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Competencias profesionales ── */}
      <div>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-100 mb-3">Competencias Profesionales</h3>
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOFT_SKILLS.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border text-center hover:-translate-y-1 transition-all duration-300 group"
              style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h4 className="font-bold text-slate-200 mb-2 text-sm">{s.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;