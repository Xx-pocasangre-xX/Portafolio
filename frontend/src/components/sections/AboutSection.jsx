import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Smartphone,
  Sparkles,
  Server,
  Clock
} from "lucide-react";

const AboutSection = () => {
  const details = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Formación Académica",
      description: "Ingeniería Informática (en curso) | Bachillerato Técnico en Desarrollo de Software"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Experiencia Profesional",
      description: "Practicante en desarrollo de software (MOPT) con backend, UI/UX y QA testing"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Desarrollo Móvil",
      description: "Android con Kotlin y React Native"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Especialización",
      description: "Frontend, UI/UX y aplicaciones multiplataforma"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend",
      description: "C#, Java, Node.js, APIs REST y bases de datos SQL/NoSQL"
    },
    {
      icon: <Clock className="w-10 h-10" />,
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
              <div className="text-blue-600 mb-4 flex justify-center items-center w-16 h-16 mx-auto bg-blue-50 rounded-xl">
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