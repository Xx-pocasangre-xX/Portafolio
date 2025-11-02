import React from 'react';
import { 
  Briefcase, Calendar, Users, Code, Palette, Bug, Building, CheckCircle,
  Shield, Clock, Award, Home, Smartphone, Database, Globe, Server,
  Monitor, FileText, MessageSquare, Heart, UserCheck, Zap, Lock,
  TrendingUp, Target, Layers, GitBranch, Package, Settings, Mail,
  Camera, MapPin, Search, ShoppingCart, Star, Bell, Edit, Trash2
} from 'lucide-react';

// Importar imágenes
import moptLogo from '../assets/mopt-logo.png';
import homeclickLogo from '../assets/homeclick-logo.png';
import issLogo from '../assets/LOGO AZUL.png';
import bloomLogo from '../assets/bloom salud.png';
import workfinderLogo from '../assets/Work Finder-1 02 Artboard 4.png';

// Imágenes adicionales - galerías
import isssInicio from '../assets/ISSS Salud inicio.png';
import isssInterfaz from '../assets/ISSS Salud Interfaz.png';
import isssUso from '../assets/ISSS Salud uso.png';
// import bloomInicio from '../assets/bloom salud inicio.png';
// import bloomInterfaz from '../assets/bloom salud interfaz.png';
// import bloomEstadisticas from '../assets/bloom salud estadisticas.png';
import workfinderInicio from '../assets/WorkFinder Inicio.png';
import workfinderHome from '../assets/Work Finder Home.png';
import workfinderOferta from '../assets/Work Finder Oferta.png';

const projectsData = {
  mopt: {
    id: 'mopt',
    title: 'Sistema Interno MOPT',
    subtitle: 'Ministerio de Obras Públicas y Transporte | Noviembre 2024 - Enero 2025',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional - Prácticas MOPT' },
    tags: ['C#', 'ASP.NET', 'SQL Server 2022', 'UI/UX Design', 'QA Testing'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial - Repositorio no disponible públicamente',
    logo: moptLogo,
    
    description: {
      intro: [
        'Durante mis prácticas profesionales en el Ministerio de Obras Públicas y Transporte (MOPT), contribuí al desarrollo de un sistema interno crítico para la gestión administrativa y operativa del ministerio. Este proyecto gubernamental requería altos estándares de calidad, seguridad y funcionalidad.',
        'Como practicante en desarrollo de software, fui responsable de múltiples aspectos del proyecto, desde el desarrollo de funcionalidades backend hasta el diseño de interfaces de usuario, además de garantizar la calidad mediante pruebas exhaustivas.'
      ],
      context: [
        { icon: Building, title: 'Institución', description: 'Ministerio de Obras Públicas y Transporte' },
        { icon: Calendar, title: 'Duración', description: '3 meses (Noviembre 2024 - Enero 2025)' },
        { icon: Users, title: 'Modalidad', description: 'Prácticas profesionales en equipo multidisciplinario' }
      ]
    },

    responsibilities: [
      {
        icon: Code,
        title: 'Desarrollo Exitoso',
        color: 'green',
        description: 'Contribuí al desarrollo de funcionalidades clave de un sistema interno usando C#, ASP.NET y SQL Server 2022. Implementé módulos críticos que mejoraron la eficiencia operativa del ministerio.',
        achievements: [
          'Desarrollo de módulos de gestión administrativa',
          'Implementación de funcionalidades de reporting',
          'Integración con bases de datos existentes',
          'Optimización de consultas SQL para mejor rendimiento'
        ]
      },
      {
        icon: Palette,
        title: 'Diseño e Innovación',
        color: 'purple',
        description: 'Creé los primeros bocetos UI/UX con Figma que establecieron las bases del diseño visual del proyecto. Mi trabajo en diseño fue fundamental para definir la experiencia de usuario del sistema.',
        achievements: [
          'Diseño de wireframes y prototipos en Figma',
          'Definición de la arquitectura de información',
          'Creación del sistema de colores y tipografías',
          'Diseño de componentes reutilizables'
        ]
      },
      {
        icon: Bug,
        title: 'Calidad Asegurada',
        color: 'orange',
        description: 'Ejecuté pruebas funcionales como QA Tester, identificando errores críticos y proponiendo mejoras que fueron implementadas exitosamente en el sistema final.',
        achievements: [
          'Diseño y ejecución de casos de prueba',
          'Identificación y documentación de bugs',
          'Validación de funcionalidades críticas',
          'Colaboración con el equipo para resolver issues'
        ]
      }
    ],

    techStack: [
      { icon: '💻', name: 'C#', description: 'Desarrollo backend y lógica de negocio' },
      { icon: '🌐', name: 'ASP.NET', description: 'Framework web para aplicaciones robustas' },
      { icon: '🗄️', name: 'SQL Server 2022', description: 'Base de datos empresarial' },
      { icon: '🎨', name: 'Figma', description: 'Diseño UI/UX y prototipado' },
      { icon: '⚙️', name: 'Visual Studio', description: 'IDE principal de desarrollo' },
      { icon: '🖥️', name: 'IIS', description: 'Servidor web para deployment' }
    ],

    challenges: [
      {
        title: 'Adaptación a Entorno Gubernamental',
        problem: 'Trabajar en un entorno gubernamental requería cumplir con estrictos protocolos de seguridad, documentación exhaustiva y procesos burocráticos complejos que diferían significativamente del desarrollo académico.',
        solution: 'Me adapté rápidamente a los procedimientos institucionales, aprendí a documentar mi trabajo según los estándares gubernamentales y colaboré estrechamente con supervisores para asegurar el cumplimiento de todas las normativas.'
      },
      {
        title: 'Integración con Sistemas Legacy',
        problem: 'El sistema debía integrarse con infraestructura tecnológica existente del ministerio, incluyendo bases de datos heredadas y sistemas con diferentes arquitecturas y estándares de desarrollo.',
        solution: 'Desarrollé capas de abstracción y adaptadores que permitieron la comunicación fluida entre el nuevo sistema y los sistemas existentes, manteniendo la integridad de los datos y la funcionalidad.'
      },
      {
        title: 'Requisitos de Seguridad Gubernamental',
        problem: 'Los sistemas gubernamentales requieren niveles de seguridad más altos que los proyectos comerciales típicos, incluyendo encriptación, auditoría de accesos y protección de datos sensibles.',
        solution: 'Implementé mejores prácticas de seguridad, incluyendo validación exhaustiva de inputs, manejo seguro de sesiones y logging detallado para auditorías, cumpliendo con los estándares de seguridad institucionales.'
      }
    ],

    impact: {
      metrics: [
        { icon: Users, title: 'Usuarios Beneficiados', description: 'Personal administrativo del MOPT' },
        { icon: Clock, title: 'Eficiencia Mejorada', description: 'Optimización de procesos internos' },
        { icon: Shield, title: 'Seguridad', description: 'Cumplimiento de estándares gubernamentales' }
      ],
      description: 'El sistema desarrollado contribuyó significativamente a la modernización de los procesos administrativos del MOPT, mejorando la eficiencia operativa y proporcionando herramientas más robustas para la gestión diaria del ministerio.'
    },

    learnings: [
      {
        icon: '🛠️',
        title: 'Habilidades Técnicas',
        items: [
          'Dominio avanzado de C# y ASP.NET en proyectos reales',
          'Gestión de bases de datos SQL Server en entornos de producción',
          'Implementación de pruebas funcionales sistemáticas',
          'Diseño UI/UX orientado a usuarios gubernamentales'
        ]
      },
      {
        icon: '🤝',
        title: 'Habilidades Profesionales',
        items: [
          'Trabajo en equipos multidisciplinarios con supervisión directa',
          'Comunicación efectiva con stakeholders gubernamentales',
          'Adaptación a procesos y protocolos institucionales',
          'Gestión de tiempo en proyectos con deadlines estrictos'
        ]
      },
      {
        icon: '💡',
        title: 'Competencias de Negocio',
        items: [
          'Comprensión de procesos administrativos gubernamentales',
          'Análisis de requisitos en entornos complejos',
          'Documentación técnica según estándares institucionales',
          'Consideraciones de seguridad en sistemas críticos'
        ]
      }
    ],

    testimonial: {
      quote: 'Durante sus prácticas profesionales, Ricardo demostró capacidad de adaptación excepcional y sólidas habilidades técnicas. Su contribución al proyecto fue significativa, especialmente en el diseño de interfaces y la implementación de funcionalidades críticas.',
      author: 'Equipo de Supervisión MOPT',
      position: 'Ministerio de Obras Públicas y Transporte'
    },

    conclusion: [
      'Esta experiencia de prácticas profesionales en el MOPT representó un hito fundamental en mi desarrollo como desarrollador de software. Trabajar en un proyecto real con impacto directo en la administración pública me permitió aplicar mis conocimientos académicos en un contexto profesional exigente.',
      'La experiencia me enseñó la importancia de la adaptabilidad, la comunicación efectiva y la atención al detalle en proyectos críticos. Además, consolidé mis habilidades técnicas en tecnologías enterprise como ASP.NET y SQL Server, y desarrollé una comprensión más profunda del ciclo completo de desarrollo de software.',
      'Esta experiencia confirma mi vocación por el desarrollo de software y mi interés en proyectos que generen impacto positivo en la sociedad. Me siento preparado para enfrentar nuevos desafíos profesionales y contribuir de manera significativa en equipos de desarrollo.'
    ],

    relatedProjects: [
      { id: 'isss-salud', title: 'ISSS Salud', description: 'Sistema integrado para gestión de salud', type: 'Proyecto Académico', image: issLogo },
      { id: 'hospital-bloom', title: 'Hospital Bloom', description: 'Sistema de gestión hospitalaria pediátrica', type: 'Proyecto Académico', image: bloomLogo },
      { id: 'workfinder', title: 'WorkFinder', description: 'Plataforma de búsqueda de empleo', type: 'Proyecto de Frontend', image: workfinderLogo }
    ]
  },

  homeclick: {
    id: 'homeclick',
    title: 'HomeClick',
    subtitle: '"La casa de tus sueños a un solo click" - Plataforma Inmobiliaria Completa',
    isProfessional: false,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
    githubLink: 'https://github.com/xxDianaPadilla/homeClick',
    logo: homeclickLogo,

    description: {
      intro: [
        'HomeClick es una plataforma innovadora de comercio electrónico inmobiliario que revoluciona el mercado inmobiliario conectando a compradores con las casas de sus sueños mediante una experiencia intuitiva y personalizada. El proyecto utiliza el stack MERN completo para crear una solución robusta y escalable.',
        'Como parte del equipo de desarrollo, contribuí significativamente en el desarrollo frontend con React y colaboré en la implementación del backend con Node.js y Express. El proyecto representa un esfuerzo conjunto de estudiantes del Instituto Técnico Ricaldone para crear una solución real de comercio electrónico.'
      ],
      context: [
        { icon: Users, title: 'Equipo de Desarrollo', description: '5 estudiantes de Desarrollo de Software' },
        { icon: Home, title: 'Sector', description: 'Inmobiliario y Comercio Electrónico' },
        { icon: Code, title: 'Stack Tecnológico', description: 'MERN (MongoDB, Express, React, Node.js)' }
      ]
    },

    architecture: [
      {
        icon: 'React',
        iconComponent: Code,
        title: 'Frontend - React.js',
        subtitle: 'Interfaz de Usuario Moderna y Responsive',
        features: [
          'Componentes reutilizables y dinámicos para mejor UX',
          'Sistema de búsqueda y filtros avanzados de propiedades',
          'Carrito de compras y gestión de favoritos',
          'Interfaz responsive adaptada a todos los dispositivos',
          'Integración con React Router para navegación SPA',
          'Manejo de estado global para datos de usuario y propiedades'
        ]
      },
      {
        icon: 'Node',
        iconComponent: Server,
        title: 'Backend - Node.js + Express',
        subtitle: 'API RESTful Robusta y Escalable',
        features: [
          'API RESTful para gestión completa de propiedades',
          'Sistema de autenticación con JWT y encriptación',
          'Gestión de usuarios, órdenes y transacciones',
          'Validación de datos con middlewares personalizados',
          'Sistema de envío de correos con Nodemailer',
          'Manejo seguro de cookies y sesiones'
        ]
      }
    ],

    features: [
      {
        icon: CheckCircle,
        title: 'Catálogo Extenso de Propiedades',
        description: 'Amplia variedad de propiedades inmobiliarias en diversas ubicaciones con descripciones detalladas, imágenes de alta calidad y especificaciones completas de cada propiedad.'
      },
      {
        icon: CheckCircle,
        title: 'Búsqueda Inteligente y Filtros Avanzados',
        description: 'Sistema de búsqueda sofisticado con filtros por ubicación, precio, categoría, tamaño y características específicas para encontrar exactamente lo que los usuarios buscan.'
      },
      {
        icon: CheckCircle,
        title: 'Transacciones Seguras y Protegidas',
        description: 'Sistema de compras seguro con validación de transacciones, encriptación de datos sensibles y protección completa de la información del usuario.'
      },
      {
        icon: CheckCircle,
        title: 'Sistema de Reseñas y Calificaciones',
        description: 'Plataforma de opiniones reales de otros compradores con sistema de calificación por estrellas para ayudar en la toma de decisiones informadas.'
      },
      {
        icon: CheckCircle,
        title: 'Panel Administrativo Completo',
        description: 'Área privada y exclusiva para administradores con gestión de inventario, monitoreo de transacciones, administración de usuarios y análisis de datos en tiempo real.'
      },
      {
        icon: CheckCircle,
        title: 'Experiencia Multiplataforma',
        description: 'Plataforma completamente responsive disponible en web y optimizada para dispositivos móviles, garantizando una experiencia consistente en todos los dispositivos.'
      }
    ],

    techStack: {
      frontend: [
        { icon: '⚛️', name: 'React ^19.0.0', description: 'Librería principal para UI con componentes modernos' },
        { icon: '🛣️', name: 'React Router ^7.5.1', description: 'Navegación SPA y manejo de rutas dinámicas' },
        { icon: '🗺️', name: 'Leaflet ^1.9.4', description: 'Mapas interactivos para ubicación de propiedades' },
        { icon: '🎨', name: 'FontAwesome ^6.7.2', description: 'Iconografía moderna y consistente' }
      ],
      backend: [
        { icon: '🟢', name: 'Express ^4.21.2', description: 'Framework web minimalista y robusto' },
        { icon: '🗄️', name: 'Mongoose ^8.11.0', description: 'ODM para MongoDB con validaciones' },
        { icon: '🔐', name: 'JWT ^9.0.2', description: 'Autenticación segura basada en tokens' },
        { icon: '🔒', name: 'bcryptjs ^3.0.2', description: 'Encriptación de contraseñas y datos sensibles' },
        { icon: '📧', name: 'Nodemailer ^6.10.0', description: 'Sistema de envío de correos electrónicos' },
        { icon: '🍪', name: 'Cookie Parser ^1.4.7', description: 'Manejo seguro de cookies y sesiones' }
      ],
      database: [
        { icon: '🍃', name: 'MongoDB', description: 'Base de datos NoSQL escalable y flexible' },
        { icon: '🔑', name: 'Crypto ^1.0.1', description: 'Algoritmos criptográficos para seguridad' },
        { icon: '🌐', name: 'CORS ^2.8.5', description: 'Configuración de políticas de origen cruzado' },
        { icon: '⚙️', name: 'dotenv ^16.4.7', description: 'Gestión de variables de entorno' }
      ]
    },

    myRole: [
      {
        icon: Code,
        title: 'Desarrollo Frontend con React',
        description: 'Responsable principal del desarrollo de componentes React y la experiencia de usuario del lado cliente.',
        contributions: [
          'Desarrollo de componentes reutilizables y dinámicos',
          'Implementación del sistema de navegación con React Router',
          'Integración de mapas interactivos con Leaflet',
          'Optimización de la interfaz para diferentes dispositivos'
        ]
      },
      {
        icon: Palette,
        title: 'Diseño UI/UX y Experiencia de Usuario',
        description: 'Diseño completo de la interfaz de usuario enfocado en una experiencia intuitiva y atractiva para el sector inmobiliario.',
        contributions: [
          'Diseño de wireframes y prototipos de la plataforma',
          'Creación del sistema de colores y tipografía',
          'Optimización de flujos de usuario para compras inmobiliarias',
          'Implementación de diseño responsive y accesible'
        ]
      },
      {
        icon: Server,
        title: 'Colaboración en Backend y API',
        description: 'Contribución activa en el desarrollo del backend y la integración frontend-backend de la aplicación.',
        contributions: [
          'Colaboración en el diseño de endpoints de la API REST',
          'Implementación de validaciones en el lado cliente',
          'Integración de autenticación JWT en el frontend',
          'Testing e integración de funcionalidades completas'
        ]
      }
    ],

    challenges: [
      {
        title: 'Validación Robusta del Lado Cliente y Servidor',
        problem: 'Los formularios implementan validaciones efectivas tanto a nivel de cliente como servidor. Los mensajes de error son claros y guían al usuario, mientras que los errores comunes están contemplados y gestionados apropiadamente.',
        solution: 'Utilizamos React-hook-form para validación en tiempo real en el cliente, complementado con validaciones adicionales en el servidor para garantizar la integridad de los datos y la seguridad de las transacciones inmobiliarias.'
      },
      {
        title: 'Arquitectura Escalable para Comercio Electrónico',
        problem: 'Diseñar una arquitectura que pudiera manejar múltiples usuarios simultáneos, transacciones seguras y un gran volumen de datos de propiedades inmobiliarias.',
        solution: 'Implementamos el stack MERN con MongoDB para escalabilidad horizontal, Express con middlewares de seguridad, y React optimizado para rendimiento en dispositivos móviles y desktop.'
      },
      {
        title: 'Integración de Mapas y Geolocalización',
        problem: 'Las propiedades inmobiliarias requieren visualización precisa de ubicaciones y mapas interactivos para mejorar la experiencia de búsqueda.',
        solution: 'Integramos Leaflet para mapas interactivos con marcadores personalizados, permitiendo a los usuarios explorar propiedades por ubicación geográfica de manera intuitiva.'
      }
    ],

    impact: {
      metrics: [
        { icon: Home, title: 'Sector Inmobiliario', description: 'Digitalización completa del proceso de compra' },
        { icon: Users, title: 'Experiencia de Usuario', description: 'Interfaz intuitiva para compradores y administradores' },
        { icon: Shield, title: 'Transacciones Seguras', description: 'Sistema completo de autenticación y encriptación' },
        { icon: Smartphone, title: 'Accesibilidad Total', description: 'Plataforma responsive para todos los dispositivos' }
      ],
      description: 'HomeClick representa una solución completa de comercio electrónico para el sector inmobiliario, demostrando la capacidad del equipo para crear aplicaciones full-stack complejas que resuelven problemas reales del mercado. El proyecto implementa las mejores prácticas del desarrollo web moderno con el stack MERN.'
    },

    learnings: [
      {
        icon: '⚛️',
        title: 'Desarrollo Frontend Avanzado',
        items: [
          'Dominio profundo de React y su ecosistema moderno',
          'Manejo avanzado de estado global y context API',
          'Implementación de Single Page Applications (SPA) complejas',
          'Optimización de rendimiento y experiencia de usuario'
        ]
      },
      {
        icon: '🖥️',
        title: 'Arquitectura Full-Stack',
        items: [
          'Diseño e implementación de APIs RESTful escalables',
          'Integración completa frontend-backend con stack MERN',
          'Manejo de autenticación y autorización con JWT',
          'Implementación de validaciones robustas cliente-servidor'
        ]
      },
      {
        icon: '🗄️',
        title: 'Gestión de Datos NoSQL',
        items: [
          'Diseño de esquemas eficientes con MongoDB y Mongoose',
          'Optimización de consultas para aplicaciones en producción',
          'Implementación de relaciones complejas en bases NoSQL',
          'Estrategias de backup y seguridad de datos'
        ]
      }
    ],

    conclusion: [
      'El desarrollo de HomeClick ha sido una experiencia fundamental que consolidó mis habilidades en desarrollo full-stack con tecnologías modernas. Trabajar en un proyecto de comercio electrónico real me permitió entender la complejidad de crear aplicaciones escalables que manejen transacciones, usuarios concurrentes y grandes volúmenes de datos.',
      'Este proyecto me enseñó la importancia de la colaboración efectiva en equipos de desarrollo, la planificación de arquitecturas robustas, y la implementación de mejores prácticas en seguridad web. La experiencia de trabajar con el stack MERN completo me dio una perspectiva integral del desarrollo web moderno.',
      'HomeClick representa mi capacidad para contribuir significativamente en proyectos complejos, desde el diseño de la experiencia de usuario hasta la implementación técnica, demostrando mi versatilidad como desarrollador full-stack y mi comprensión profunda de las tecnologías web actuales.'
    ],

    relatedProjects: [
      { id: 'mopt', title: 'Sistema Interno MOPT', description: 'Proyecto profesional en prácticas con C# y ASP.NET', type: 'Proyecto Profesional', image: moptLogo },
      { id: 'isss-salud', title: 'ISSS Salud', description: 'Sistema integral de gestión de salud multiplataforma', type: 'Proyecto Académico', image: issLogo },
      { id: 'hospital-bloom', title: 'Hospital Bloom', description: 'Aplicación Android para gestión hospitalaria pediátrica', type: 'Proyecto Móvil', image: bloomLogo }
    ]
  },
  isssSalud: {
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
        link: '/proyecto/hospitalBloom',
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
  hospitalBloom: {
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
        link: '/proyecto/isssSalud',
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
        link: '/proyecto/isssSalud',
        image: issLogo
      },
      {
        title: 'Hospital Bloom',
        description: 'App móvil hospitalaria',
        type: 'Proyecto Android',
        link: '/proyecto/hospitalBloom',
        image: bloomLogo
      }
    ]
  }
};

export default projectsData;