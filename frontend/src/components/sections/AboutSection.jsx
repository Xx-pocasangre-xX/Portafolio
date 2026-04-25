import React from 'react';
import { GraduationCap, Briefcase, Smartphone, Sparkles, Server, Zap } from 'lucide-react';

const AboutSection = () => {
  const details = [
    { icon: <GraduationCap className="w-9 h-9" />, title: 'Formación Académica', description: 'Ingeniería Informática (UCA) | Técnico en Desarrollo de Software (Ricaldone)' },
    { icon: <Briefcase className="w-9 h-9" />, title: 'Experiencia Actual', description: 'Desarrollador Mobile y ERP en Famolcas S.A. de C.V' },
    { icon: <Smartphone className="w-9 h-9" />, title: 'Especialidad Móvil', description: 'Desarrollo nativo Android con Kotlin y arquitecturas modernas (MVVM)' },
    { icon: <Sparkles className="w-9 h-9" />, title: 'Enfoque UI/UX', description: 'Diseño de interfaces intuitivas y prototipado en Figma' },
    { icon: <Server className="w-9 h-9" />, title: 'Stack Tecnológico', description: 'C# (.NET/XAF), Java, Node.js y gestión de SQL Server / Oracle' },
    { icon: <Zap className="w-9 h-9" />, title: 'Perfil Profesional', description: 'Enfocado en optimización de procesos y desarrollo de soluciones escalables' },
  ];

  return (
    <section id="about" className="py-24" style={{ background: '#111827' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-slate-100 relative">
          Sobre Mí
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto mb-16 space-y-5">
          {[
            'Soy un desarrollador de software enfocado en la creación de soluciones que resuelven problemas reales. Actualmente formo parte de un equipo de desarrollo donde trabajo en aplicaciones móviles y sistemas empresariales, transformando requerimientos de negocio en herramientas tecnológicas eficientes.',
            'He participado en el desarrollo de aplicaciones móviles orientadas a mejorar procesos y experiencia de usuario, así como en proyectos dentro del sector público, lo que me ha permitido fortalecer mis habilidades tanto en frontend como backend bajo estándares de código limpio y buenas prácticas.',
            'Como estudiante de Ingeniería Informática, mantengo un aprendizaje continuo en tecnologías emergentes. Me caracterizo por mi capacidad de adaptación, proactividad y enfoque en la calidad del software, desde la lógica de negocio hasta la experiencia final del usuario.',
          ].map((p, i) => (
            <p key={i} className="text-slate-400 text-lg leading-relaxed text-justify">{p}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.map((detail, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl border hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
            >
              <div
                className="text-blue-400 mb-5 flex justify-center items-center w-14 h-14 mx-auto rounded-2xl transition-all duration-300 group-hover:text-white"
                style={{ background: 'rgba(59,130,246,0.1)' }}
              >
                {detail.icon}
              </div>
              <h3 className="font-bold text-slate-200 mb-2 text-lg text-center">{detail.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm text-center">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;