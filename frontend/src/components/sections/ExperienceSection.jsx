import React from 'react';
import { Code, Palette, ShieldCheck, Database } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Experiencia Profesional
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
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">Desarrollo backend y módulos administrativos</h5>
                  <p className="text-gray-600">
                    Participé en el desarrollo y mejora de módulos administrativos y funcionalidades internas
                    utilizando C#, ASP.NET y SQL Server 2022, optimizando consultas y procesos de gestión de datos.
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">Diseño UI/UX y arquitectura de información</h5>
                  <p className="text-gray-600">
                    Diseñé wireframes y prototipos en Figma que definieron la arquitectura de información
                    y la base visual del sistema, mejorando la experiencia del usuario en procesos internos.
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">QA testing y aseguramiento de calidad</h5>
                  <p className="text-gray-600">
                    Ejecuté pruebas funcionales, documentación de bugs y validación de funcionalidades críticas,
                    contribuyendo a la estabilidad y confiabilidad del sistema.
                  </p>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 mb-2">Integración y reporting</h5>
                  <p className="text-gray-600">
                    Colaboré en la integración con sistemas legacy, generación de reportes y despliegue en IIS,
                    trabajando bajo estándares de seguridad y documentación institucional.
                  </p>
                </div>
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'C#',
                'ASP.NET',
                'SQL Server 2022',
                'IIS',
                'Figma',
                'QA Testing',
                'Reporting',
                'Integración legacy'
              ].map((tech) => (
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