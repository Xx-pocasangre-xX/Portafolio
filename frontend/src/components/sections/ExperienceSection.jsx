import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Experiencia Laboral
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                Nov 2024 - Ene 2025
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Practicante en Desarrollo de Software
            </h3>
            <h4 className="text-xl text-gray-600 mb-6">
              Ministerio de Obras Públicas y Transporte
            </h4>

            <div className="space-y-6">
              {/* Achievement 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">Desarrollo exitoso</h5>
                  <p className="text-gray-600">
                    Contribuí al desarrollo de funcionalidades clave de un sistema interno usando C#,
                    ASP.NET y SQL Server 2022.
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">Diseño e innovación</h5>
                  <p className="text-gray-600">
                    Creé los primeros bocetos UI/UX con Figma que establecieron las bases del diseño
                    visual del proyecto.
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">Calidad asegurada</h5>
                  <p className="text-gray-600">
                    Ejecuté pruebas funcionales como QA Tester, identificando errores críticos y
                    proponiendo mejoras implementadas.
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['C#', 'ASP.NET', 'SQL Server 2022', 'Figma', 'QA Testing'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;