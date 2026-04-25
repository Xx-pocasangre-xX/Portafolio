import React, { useEffect, useState, useRef } from 'react';

const TECH_SKILLS = [
  {
    category: 'Mobile & Android',
    accentColor: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.2)',
    bgFrom: 'rgba(167,139,250,0.06)',
    skills: [
      { name: 'Kotlin', level: 95, icon: '🟣', desc: 'Android SDK, MVVM, Coroutines' },
      { name: 'Android Studio', level: 90, icon: '🤖', desc: 'Jetpack, Material Design' },
      { name: 'React Native', level: 75, icon: '📱', desc: 'Expo, Navigation, AsyncStorage' },
      { name: 'Java', level: 85, icon: '☕', desc: 'Desktop (Swing), Android' },
    ],
  },
  {
    category: 'Frontend & Web',
    accentColor: '#38bdf8',
    borderColor: 'rgba(56,189,248,0.2)',
    bgFrom: 'rgba(56,189,248,0.06)',
    skills: [
      { name: 'React', level: 90, icon: '⚛️', desc: 'Hooks, Router, Context API' },
      { name: 'JavaScript', level: 85, icon: '🟡', desc: 'ES2022+, async/await' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨', desc: 'Utility-first, responsive' },
      { name: 'Figma', level: 70, icon: '🖼️', desc: 'UI/UX, prototyping' },
    ],
  },
  {
    category: 'Backend & Bases de Datos',
    accentColor: '#34d399',
    borderColor: 'rgba(52,211,153,0.2)',
    bgFrom: 'rgba(52,211,153,0.06)',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢', desc: 'Express, REST APIs' },
      { name: 'C# / .NET', level: 80, icon: '💜', desc: 'ASP.NET, XAF Framework' },
      { name: 'SQL Server', level: 88, icon: '🗄️', desc: 'T-SQL, índices, reportes' },
      { name: 'Oracle DB', level: 80, icon: '🔴', desc: 'JDBC, ACID, PL/SQL' },
      { name: 'MongoDB', level: 78, icon: '🍃', desc: 'Mongoose, aggregations' },
    ],
  },
  {
    category: 'Herramientas & DevOps',
    accentColor: '#fb923c',
    borderColor: 'rgba(251,146,60,0.2)',
    bgFrom: 'rgba(251,146,60,0.06)',
    skills: [
      { name: 'Git / GitHub', level: 88, icon: '🐙', desc: 'Branches, PRs, Actions' },
      { name: 'Visual Studio', level: 85, icon: '🔵', desc: 'IDE principal .NET' },
      { name: 'Postman', level: 82, icon: '🚀', desc: 'API testing, collections' },
      { name: 'Vercel', level: 75, icon: '▲', desc: 'Deploy, serverless' },
    ],
  },
];

const SOFT_SKILLS = [
  { icon: '🗣️', title: 'Comunicación Técnica', desc: 'Documentación clara y colaboración con equipos multidisciplinarios.' },
  { icon: '🤝', title: 'Trabajo en Equipo', desc: 'Proyectos académicos, institucionales y full-stack colaborativos.' },
  { icon: '🧩', title: 'Pensamiento Analítico', desc: 'Resolución estructurada de problemas y optimización de sistemas.' },
  { icon: '⚡', title: 'Adaptabilidad', desc: 'Rápida curva de aprendizaje en nuevas tecnologías y entornos.' },
];

const SkillBar = ({ name, level, icon, desc, accentColor, isVisible, delay }) => (
  <div className="group flex flex-col gap-0.5" style={{ transitionDelay: `${delay}ms` }}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-base leading-none">{icon}</span>
        <span className="text-sm font-semibold text-slate-200">{name}</span>
      </div>
      <span className="text-xs font-mono" style={{ color: accentColor }}>{level}%</span>
    </div>
    <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mb-2 leading-snug pl-6">
      {desc}
    </p>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(148,163,184,0.08)' }}>
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: isVisible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${accentColor}99, ${accentColor})`,
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-extrabold text-center mb-3 text-slate-100 tracking-tight">
          Stack Técnico
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Tecnologías con las que construyo soluciones reales a diario
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          {TECH_SKILLS.map((cat, ci) => (
            <div
              key={ci}
              className="rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-60"
              style={{ background: cat.bgFrom, borderColor: cat.borderColor }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: cat.accentColor }}>
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={si}
                    {...skill}
                    accentColor={cat.accentColor}
                    isVisible={isVisible}
                    delay={ci * 80 + si * 60}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center text-slate-100 mb-10">
            Habilidades Profesionales
            <span className="block w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </h3>
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
};

export default SkillsSection;