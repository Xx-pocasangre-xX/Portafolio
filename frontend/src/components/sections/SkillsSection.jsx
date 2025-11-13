import React, { useEffect, useState, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillLevelWidths = {
    'Básico': 25,
    'Intermedio': 50,
    'Avanzado': 75,
    'Profesional': 100
  };

  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: [
        { name: 'Kotlin', level: 'Avanzado' },
        { name: 'Java', level: 'Profesional' },
        { name: 'JavaScript', level: 'Avanzado' },
        { name: 'C#', level: 'Intermedio' }
      ]
    },
    {
      title: 'Frameworks y Librerías',
      skills: [
        { name: 'Android SDK', level: 'Avanzado' },
        { name: 'React', level: 'Profesional' },
        { name: 'Node.js', level: 'Avanzado' },
        { name: 'Express.js', level: 'Avanzado' },
        { name: 'ASP.NET', level: 'Intermedio' },
        { name: 'Java Swing', level: 'Avanzado' }
      ]
    },
    {
      title: 'Bases de Datos',
      skills: [
        { name: 'Oracle Database', level: 'Avanzado' },
        { name: 'MongoDB', level: 'Avanzado' },
        { name: 'SQL Server', level: 'Intermedio' }
      ]
    },
    {
      title: 'Herramientas y Metodologías',
      skills: [
        { name: 'Figma', level: 'Avanzado' },
        { name: 'Git/GitHub', level: 'Profesional' },
        { name: 'Android Studio', level: 'Avanzado' },
        { name: 'Visual Studio', level: 'Avanzado' },
        { name: 'Diseño UI/UX', level: 'Profesional' },
        { name: 'QA Testing', level: 'Avanzado' }
      ]
    }
  ];

  const softSkills = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Comunicación Efectiva',
      description: 'Capacidad para expresar ideas claramente y trabajar en equipos multidisciplinarios'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: 'Trabajo en Equipo',
      description: 'Experiencia colaborando en proyectos complejos y coordinando esfuerzos'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Pensamiento Crítico',
      description: 'Análisis y resolución de problemas técnicos de manera eficiente'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Orientación a Resultados',
      description: 'Enfoque en cumplir objetivos y entregar soluciones de calidad'
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Habilidades Técnicas
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-blue-600">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skillLevelWidths[skill.level]}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">
            Habilidades Blandas
            <span className="block w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;