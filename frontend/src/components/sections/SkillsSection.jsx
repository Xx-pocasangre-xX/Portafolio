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
    'Intermedio': 50,
    'Avanzado': 75,
    'Profesional': 100
  };

  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: [
        { name: 'JavaScript', level: 'Profesional' },
        { name: 'Kotlin', level: 'Avanzado' },
        { name: 'Java', level: 'Avanzado' },
        { name: 'C#', level: 'Avanzado' }
      ]
    },
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React', level: 'Profesional' },
        { name: 'React Native', level: 'Avanzado' },
        { name: 'Android (Kotlin)', level: 'Avanzado' },
        { name: 'Java Swing', level: 'Avanzado' },
        { name: 'UI/UX Design', level: 'Profesional' }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 'Avanzado' },
        { name: 'Express.js', level: 'Avanzado' },
        { name: 'ASP.NET', level: 'Avanzado' },
        { name: 'APIs REST', level: 'Profesional' },
        { name: 'JWT & Autenticación por roles', level: 'Avanzado' },
        { name: 'Arquitectura MVC', level: 'Profesional' }
      ]
    },
    {
      title: 'Bases de Datos',
      skills: [
        { name: 'SQL Server 2022', level: 'Avanzado' },
        { name: 'Oracle Database', level: 'Avanzado' },
        { name: 'MongoDB + Mongoose', level: 'Avanzado' }
      ]
    },
    {
      title: 'Herramientas & DevOps',
      skills: [
        { name: 'Git / GitHub', level: 'Profesional' },
        { name: 'Figma', level: 'Avanzado' },
        { name: 'Postman', level: 'Avanzado' },
        { name: 'IIS', level: 'Intermedio' },
        { name: 'QA Testing', level: 'Avanzado' }
      ]
    }
  ];

  const softSkills = [
    {
      title: 'Comunicación Técnica',
      description: 'Capacidad para documentar, explicar soluciones y colaborar con equipos multidisciplinarios.'
    },
    {
      title: 'Trabajo en Equipo',
      description: 'Experiencia en proyectos académicos, institucionales y full-stack colaborativos.'
    },
    {
      title: 'Pensamiento Analítico',
      description: 'Resolución estructurada de problemas, optimización de consultas y diseño de arquitectura.'
    },
    {
      title: 'Adaptabilidad',
      description: 'Experiencia trabajando en entornos gubernamentales con estándares de seguridad y documentación.'
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Stack Técnico
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

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
            Habilidades Profesionales
            <span className="block w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
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