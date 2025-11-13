import React from 'react';

const AboutSection = () => {
  const details = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      title: "Formación Académica",
      description: "Instituto Técnico Ricaldone - 3° año Desarrollo de Software"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      title: "Experiencia Práctica",
      description: "Prácticas en Ministerio de Obras Públicas y Transporte"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
      ),
      title: "Desarrollo Móvil",
      description: "Android con Kotlin y React Native"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Especialización",
      description: "Desarrollo Frontend y Diseño UI/UX"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      title: "Backend",
      description: "Java, C#, Node.js y bases de datos"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      title: "Disponibilidad",
      description: "Medio tiempo | Licencia de conducir y vehículo propio"
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
            Me gradue de bachillerato técnico en Desarrollo de Software en el
            Instituto Técnico Ricaldone. Mi pasión es crear soluciones tecnológicas eficientes y atractivas
            que mejoren la experiencia del usuario, especializándome en desarrollo multiplataforma y diseño
            de interfaces.
          </p>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
            Durante mis prácticas profesionales en el Ministerio de Obras Públicas y Transporte, contribuí al
            desarrollo de sistemas internos usando tecnologías modernas como C#, ASP.NET y SQL Server,
            además de crear los primeros bocetos UI/UX que establecieron las bases del diseño visual del
            proyecto.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            Mi enfoque principal está en el desarrollo frontend y móvil, con experiencia en Android/Kotlin,
            React, y diseño UI/UX. También tengo sólidos conocimientos en backend con Java, bases de datos
            relacionales y NoSQL, y arquitecturas MVC. Soy proactivo, orientado a resultados y con
            excelentes habilidades para el trabajo colaborativo en proyectos complejos.
          </p>
        </div>

        {/* Details Grid */}
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