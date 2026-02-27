import React from 'react';

const AboutSection = () => {
  const details = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
        </svg>
      ),
      title: "Formación Académica",
      description: "Ingeniería Informática (en curso) | Bachillerato Técnico en Desarrollo de Software"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2z" />
        </svg>
      ),
      title: "Experiencia Profesional",
      description: "Practicante en desarrollo de software (MOPT) con backend, UI/UX y QA testing"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4z" />
        </svg>
      ),
      title: "Desarrollo Móvil",
      description: "Android con Kotlin y React Native"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12z" />
        </svg>
      ),
      title: "Especialización",
      description: "Frontend, UI/UX y aplicaciones multiplataforma"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7z" />
        </svg>
      ),
      title: "Backend",
      description: "C#, Java, Node.js, APIs REST y bases de datos SQL/NoSQL"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0z" />
        </svg>
      ),
      title: "Disponibilidad",
      description: "Medio tiempo (vespertino) | Licencia y motocicleta propia"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Sobre Mí
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
            Soy desarrollador de software enfocado en frontend, desarrollo móvil y diseño UI/UX, actualmente
            estudiante de Ingeniería Informática. Me apasiona construir soluciones digitales eficientes,
            escalables y centradas en el usuario, combinando diseño y funcionalidad para generar impacto real.
          </p>

          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
            Fui el impulsor del proyecto ISSS Salud, liderando la conceptualización y definición de una
            solución hospitalaria multiplataforma orientada a optimizar la gestión médica, citas y comunicación
            entre pacientes y personal de salud.
          </p>

          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
            Durante mis prácticas profesionales en el Ministerio de Obras Públicas y Transporte participé en
            el desarrollo de sistemas internos utilizando C#, ASP.NET y SQL Server, además de diseñar
            prototipos UI/UX, ejecutar pruebas funcionales y colaborar en la optimización de módulos
            administrativos y reportes.
          </p>

          <p className="text-gray-700 text-justify leading-relaxed">
            Poseo experiencia en desarrollo full-stack con React, Node.js, Kotlin, Java y C#, así como en bases
            de datos relacionales y NoSQL, arquitecturas MVC y consumo de APIs REST. Me caracterizo por ser
            proactivo, orientado a resultados y con alta capacidad de adaptación en entornos colaborativos y
            proyectos complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {detail.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                {detail.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;