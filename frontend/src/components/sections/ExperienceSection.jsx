import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Famolcas S.A. de C.V (Lido)",
      role: "Mobile Developer & ERP Specialist",
      period: "Enero 2025 - Presente",
      description: "Lidero el desarrollo de soluciones móviles nativas e integración de sistemas de gestión empresarial.",
      tasks: [
        "Desarrollo de apps móviles en Kotlin bajo arquitectura MVVM.",
        "Arquitectura e integración de módulos ERP utilizando C# y XAF Framework.",
        "Consumo y optimización de servicios Web API REST."
      ],
      tags: ["Kotlin", "C#", "XAF", "SQL Server", "Android SDK"]
    },
    {
      company: "Ministerio de Obras Públicas (MOPT)",
      role: "Software Development Intern",
      period: "Nov 2024 - Ene 2025",
      description: "Diseño y desarrollo de sistemas internos gubernamentales de alta criticidad.",
      tasks: [
        "Desarrollo backend con C# y ASP.NET para procesos administrativos.",
        "Prototipado UI/UX en Figma enfocado en la eficiencia del usuario.",
        "Ejecución de QA Testing y documentación técnica institucional."
      ],
      tags: ["ASP.NET", "SQL Server 2022", "Figma", "QA Testing"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
          Trayectoria Profesional
          <span className="block w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-semibold flex items-center gap-2 mt-1">
                    <Briefcase size={18} /> {exp.company}
                  </p>
                </div>
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 h-fit">
                  <Calendar size={16} /> {exp.period}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic border-l-4 border-gray-200 pl-4">
                "{exp.description}"
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                    {task}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;