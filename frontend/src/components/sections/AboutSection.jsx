import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Smartphone,
  Sparkles,
  Server,
  Zap
} from "lucide-react";

const AboutSection = () => {
  const details = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Formación Académica",
      description: "Ingeniería Informática en la UCA | Técnico en Desarrollo de Software (Ricaldone)"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Experiencia Actual",
      description: "Desarrollador Mobile y ERP en Famolcas S.A. de C.V (Lido)"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Especialidad Móvil",
      description: "Desarrollo nativo Android con Kotlin y arquitecturas modernas (MVVM)"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Enfoque UI/UX",
      description: "Diseño de interfaces intuitivas y prototipado avanzado en Figma"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Stack Tecnológico",
      description: "C# (.NET/XAF), Java, Node.js y gestión de SQL Server / Oracle"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Perfil Profesional",
      description: "Enfocado en la optimización de procesos y soluciones escalables"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 relative">
          Sobre Mí
          <span className="block w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 mb-6 text-lg text-justify leading-relaxed">
            Soy un desarrollador de software apasionado por la creación de soluciones que resuelven problemas reales. 
            Actualmente, formo parte del equipo de desarrollo en **Famolcas S.A. de C.V (Lido)**, donde me especializo 
            en el ecosistema móvil y la integración de sistemas ERP, transformando requerimientos de negocio en 
            herramientas tecnológicas eficientes.
          </p>

          <p className="text-gray-700 mb-6 text-lg text-justify leading-relaxed">
            Mi trayectoria incluye la conceptualización de proyectos de impacto social como **ISSS Salud**, 
            y experiencia técnica en el sector público con el **Ministerio de Obras Públicas (MOPT)**. Estas experiencias 
            me han permitido dominar tanto el desarrollo frontend como backend, siempre bajo un estándar de 
            código limpio y una experiencia de usuario excepcional.
          </p>

          <p className="text-gray-700 text-lg text-justify leading-relaxed">
            Como estudiante de **Ingeniería Informática en la UCA**, mantengo un aprendizaje continuo en tecnologías 
            emergentes. Me caracterizo por mi capacidad de adaptación, proactividad y un enfoque riguroso en la 
            calidad del software, desde la base de datos hasta la interfaz final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 mb-5 flex justify-center items-center w-16 h-16 mx-auto bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {detail.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">
                {detail.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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