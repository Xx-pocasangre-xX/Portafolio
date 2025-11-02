import React from 'react';

// Importar imágenes
import moptLogo from '../assets/mopt-logo.png';
import homeclickLogo from '../assets/homeclick-logo.png';
import issLogo from '../assets/LOGO AZUL.png';
import bloomLogo from '../assets/bloom salud.png';
import workfinderLogo from '../assets/Work Finder-1 02 Artboard 4.png';

const projectsData = {
  mopt: {
    title: 'Sistema Interno MOPT',
    subtitle: 'Ministerio de Obras Públicas y Transporte | Noviembre 2024 - Enero 2025',
    isProfessional: true,
    tags: ['C#', 'ASP.NET', 'SQL Server 2022', 'UI/UX Design', 'QA Testing'],
    githubLink: null,
    sections: [
      {
        title: 'Descripción del Proyecto',
        content: (
          <div>
            <p className="text-gray-700 mb-4">
              Durante mis prácticas profesionales en el Ministerio de Obras Públicas y Transporte (MOPT), 
              contribuí al desarrollo de un sistema interno crítico para la gestión administrativa y operativa del ministerio.
            </p>
            <p className="text-gray-700 mb-4">
              Como practicante en desarrollo de software, fui responsable de múltiples aspectos del proyecto, 
              desde el desarrollo de funcionalidades backend hasta el diseño de interfaces de usuario.
            </p>
          </div>
        )
      },
      {
        title: 'Mis Responsabilidades y Logros',
        content: (
          <div className="grid gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-800 mb-2">Desarrollo Exitoso</h3>
              <p className="text-gray-700">
                Contribuí al desarrollo de funcionalidades clave del sistema usando C#, ASP.NET y SQL Server 2022.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-800 mb-2">Diseño e Innovación</h3>
              <p className="text-gray-700">
                Creé los primeros bocetos UI/UX con Figma que establecieron las bases del diseño visual del proyecto.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-gray-800 mb-2">Calidad Asegurada</h3>
              <p className="text-gray-700">
                Ejecuté pruebas funcionales como QA Tester, identificando errores críticos y proponiendo mejoras.
              </p>
            </div>
          </div>
        )
      }
    ],
    relatedProjects: [
      {
        title: 'HomeClick',
        description: 'Plataforma inmobiliaria con stack MERN',
        type: 'Proyecto Full-Stack',
        link: '/proyecto/homeclick',
        image: homeclickLogo
      },
      {
        title: 'ISSS Salud',
        description: 'Sistema integrado de gestión de salud',
        type: 'Proyecto Multiplataforma',
        link: '/proyecto/isss-salud',
        image: issLogo
      },
      {
        title: 'Hospital Bloom',
        description: 'App móvil de gestión hospitalaria',
        type: 'Proyecto Android',
        link: '/proyecto/hospital-bloom',
        image: bloomLogo
      }
    ]
  },
  homeclick: {
    title: 'HomeClick',
    subtitle: 'Plataforma Inmobiliaria Completa - La casa de tus sueños a un solo click',
    isProfessional: false,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
    githubLink: 'https://github.com/xxDianaPadilla/homeClick',
    sections: [
      {
        title: 'Descripción del Proyecto',
        content: (
          <div>
            <p className="text-gray-700 mb-4">
              HomeClick es una plataforma innovadora de comercio electrónico inmobiliario que revoluciona 
              el mercado inmobiliario conectando a compradores con las casas de sus sueños mediante una 
              experiencia intuitiva y personalizada.
            </p>
            <p className="text-gray-700 mb-4">
              Como parte del equipo de desarrollo, contribuí significativamente en el desarrollo frontend 
              con React y colaboré en la implementación del backend con Node.js y Express.
            </p>
          </div>
        )
      }
    ],
    relatedProjects: [
      {
        title: 'Sistema MOPT',
        description: 'Proyecto profesional en prácticas',
        type: 'Proyecto Profesional',
        link: '/proyecto/mopt',
        image: moptLogo
      },
      {
        title: 'ISSS Salud',
        description: 'Sistema de gestión de salud',
        type: 'Proyecto Multiplataforma',
        link: '/proyecto/isss-salud',
        image: issLogo
      },
      {
        title: 'WorkFinder',
        description: 'Plataforma de búsqueda de empleo',
        type: 'Proyecto Frontend',
        link: '/proyecto/workfinder',
        image: workfinderLogo
      }
    ]
  },
  'isss-salud': {
    title: 'ISSS Salud',
    subtitle: 'Sistema Integral de Gestión Hospitalaria Multiplataforma',
    isProfessional: false,
    tags: ['Java Swing', 'Kotlin', 'Oracle DB', 'Android', 'Sistema Integral'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java.git',
    sections: [
      {
        title: 'Descripción del Proyecto',
        content: (
          <div>
            <p className="text-gray-700 mb-4">
              ISSS Salud es un sistema integral de gestión hospitalaria multiplataforma desarrollado para 
              optimizar los procesos administrativos y médicos en instituciones de salud.
            </p>
            <p className="text-gray-700 mb-4">
              El proyecto consta de dos aplicaciones complementarias: una aplicación de escritorio 
              desarrollada en Java para empleados del ISSS y una aplicación móvil en Kotlin para pacientes.
            </p>
          </div>
        )
      }
    ],
    relatedProjects: [
      {
        title: 'Hospital Bloom',
        description: 'Sistema de gestión hospitalaria pediátrica',
        type: 'Proyecto Android',
        link: '/proyecto/hospital-bloom',
        image: bloomLogo
      },
      {
        title: 'HomeClick',
        description: 'Plataforma inmobiliaria MERN',
        type: 'Proyecto Full-Stack',
        link: '/proyecto/homeclick',
        image: homeclickLogo
      },
      {
        title: 'Sistema MOPT',
        description: 'Proyecto profesional',
        type: 'Proyecto Profesional',
        link: '/proyecto/mopt',
        image: moptLogo
      }
    ]
  },
  'hospital-bloom': {
    title: 'Hospital Bloom',
    subtitle: 'Sistema de Gestión Hospitalaria Pediátrica - Aplicación Android Nativa',
    isProfessional: false,
    tags: ['Kotlin', 'Android', 'Oracle DB', 'Material Design', 'UI/UX Mobile'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom.git',
    sections: [
      {
        title: 'Descripción del Proyecto',
        content: (
          <div>
            <p className="text-gray-700 mb-4">
              Hospital Bloom es una aplicación móvil nativa Android desarrollada completamente en Kotlin, 
              especializada en la gestión hospitalaria pediátrica.
            </p>
            <p className="text-gray-700 mb-4">
              Como desarrollador principal de la aplicación Android, fui responsable del diseño completo 
              de la interfaz de usuario, la implementación de toda la funcionalidad móvil en Kotlin, 
              y la integración con la base de datos Oracle.
            </p>
          </div>
        )
      }
    ],
    relatedProjects: [
      {
        title: 'ISSS Salud',
        description: 'Sistema integral de gestión de salud',
        type: 'Proyecto Multiplataforma',
        link: '/proyecto/isss-salud',
        image: issLogo
      },
      {
        title: 'HomeClick',
        description: 'Plataforma inmobiliaria',
        type: 'Proyecto Full-Stack',
        link: '/proyecto/homeclick',
        image: homeclickLogo
      },
      {
        title: 'WorkFinder',
        description: 'Plataforma de empleo',
        type: 'Proyecto Frontend',
        link: '/proyecto/workfinder',
        image: workfinderLogo
      }
    ]
  },
  workfinder: {
    title: 'WorkFinder',
    subtitle: 'Plataforma Web de Búsqueda y Publicación de Ofertas Laborales',
    isProfessional: false,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Web'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/WorkFinder.git',
    sections: [
      {
        title: 'Descripción del Proyecto',
        content: (
          <div>
            <p className="text-gray-700 mb-4">
              WorkFinder es una plataforma web completa diseñada para facilitar la búsqueda y publicación 
              de ofertas laborales, desarrollada con tecnologías web fundamentales.
            </p>
            <p className="text-gray-700 mb-4">
              Como responsable principal del diseño e implementación frontend, me enfoqué en crear una 
              experiencia visual atractiva, funcional y completamente responsiva.
            </p>
          </div>
        )
      }
    ],
    relatedProjects: [
      {
        title: 'HomeClick',
        description: 'Plataforma inmobiliaria completa',
        type: 'Proyecto Full-Stack',
        link: '/proyecto/homeclick',
        image: homeclickLogo
      },
      {
        title: 'ISSS Salud',
        description: 'Sistema de gestión de salud',
        type: 'Proyecto Multiplataforma',
        link: '/proyecto/isss-salud',
        image: issLogo
      },
      {
        title: 'Hospital Bloom',
        description: 'App móvil hospitalaria',
        type: 'Proyecto Android',
        link: '/proyecto/hospital-bloom',
        image: bloomLogo
      }
    ]
  }
};

export default projectsData;