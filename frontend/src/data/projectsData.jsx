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
    id: 'isssSalud',
    title: 'ISSS Salud',
    subtitle: 'Sistema Integral de Gestión Hospitalaria Multiplataforma',
    isProfessional: false,
    tags: ['Java Swing', 'Kotlin', 'Oracle DB', 'Android', 'Sistema Integral'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java.git',
    githubLink2: 'https://github.com/xxDianaPadilla/ISSS-Salud.git',
    logo: issLogo,
    gallery: [
      { src: isssInicio, alt: 'Pantalla de inicio aplicación Java', caption: 'Interfaz de inicio del sistema de escritorio' },
      { src: isssInterfaz, alt: 'Interfaz principal aplicación Java', caption: 'Dashboard principal con módulos de gestión' },
      { src: isssUso, alt: 'Funcionalidades aplicación Java', caption: 'Vista de funcionalidades en uso' }
    ],

    description: {
      intro: [
        'ISSS Salud es un sistema integral de gestión hospitalaria multiplataforma desarrollado para optimizar los procesos administrativos y médicos en instituciones de salud. El proyecto consta de dos aplicaciones complementarias que trabajan de manera sincronizada para proporcionar una solución completa tanto para el personal médico como para los pacientes.',
        'El sistema incluye una aplicación de escritorio desarrollada en Java destinada a empleados del ISSS (doctores, jefes de enfermería y administradores) y una aplicación móvil en Kotlin diseñada específicamente para pacientes, creando un ecosistema digital completo para la gestión de salud.'
      ],
      context: [
        { icon: Monitor, title: 'Aplicación de Escritorio', description: 'Java Swing para personal médico y administrativo' },
        { icon: Smartphone, title: 'Aplicación Móvil', description: 'Kotlin Android para pacientes del ISSS' },
        { icon: Database, title: 'Base de Datos', description: 'Oracle Database compartida entre ambas aplicaciones' }
      ]
    },

    architecture: [
      {
        icon: 'Desktop',
        iconComponent: Monitor,
        title: 'Aplicación de Escritorio (Java)',
        subtitle: 'Usuarios: Doctores, Jefes de Enfermería, Administradores',
        features: [
          'Gestión completa de pacientes y expedientes médicos',
          'Sistema de citas médicas y programación',
          'Administración de doctores y personal',
          'Generación de reportes y estadísticas',
          'Sistema de mensajería entre doctores y pacientes',
          'Gestión de noticias médicas y comunicados'
        ]
      },
      {
        icon: 'Mobile',
        iconComponent: Smartphone,
        title: 'Aplicación Móvil (Kotlin)',
        subtitle: 'Usuarios: Pacientes del ISSS',
        features: [
          'Solicitud y gestión de citas médicas',
          'Visualización de citas agendadas',
          'Chat directo con doctores asignados',
          'Acceso a noticias médicas y comunicados',
          'Gestión de perfil personal y expediente',
          'Descarga de expedientes médicos en PDF'
        ]
      }
    ],

    features: [
      {
        icon: CheckCircle,
        title: 'Sistema de Gestión de Pacientes',
        description: 'Registro completo de pacientes con validaciones avanzadas (DUI, teléfono, correo), gestión de expedientes médicos con campos especializados y actualización en tiempo real entre aplicaciones.'
      },
      {
        icon: Calendar,
        title: 'Plataforma de Citas Médicas',
        description: 'Los pacientes pueden solicitar citas desde la app móvil, los jefes de enfermería las procesan en el sistema de escritorio, y los doctores las gestionan con notificaciones automáticas.'
      },
      {
        icon: MessageSquare,
        title: 'Sistema de Mensajería Integrado',
        description: 'Comunicación directa entre doctores y pacientes con mensajes en tiempo real, historial de conversaciones y notificaciones push en la aplicación móvil.'
      },
      {
        icon: FileText,
        title: 'Gestión de Expedientes Médicos',
        description: 'Expedientes completos con antecedentes familiares, alergias, resultados de laboratorio y generación de PDFs para descarga desde la app móvil del paciente.'
      },
      {
        icon: Bell,
        title: 'Portal de Noticias Médicas',
        description: 'Sistema de publicación de noticias por administradores con imágenes, fechas y categorización, visible tanto en escritorio como en móvil para mantener informados a todos los usuarios.'
      },
      {
        icon: Shield,
        title: 'Seguridad y Autenticación',
        description: 'Sistema de autenticación por roles con encriptación SHA-256, recuperación de contraseñas por correo y validaciones de seguridad en ambas aplicaciones.'
      }
    ],

    techStack: {
      desktop: [
        { icon: '☕', name: 'Java SE', description: 'Lenguaje principal para lógica de negocio' },
        { icon: '🖼️', name: 'Java Swing', description: 'Framework para interfaces gráficas' },
        { icon: '🔨', name: 'Apache Ant', description: 'Herramienta de construcción y gestión' },
        { icon: '🏗️', name: 'Patrón MVC', description: 'Arquitectura Modelo-Vista-Controlador' }
      ],
      mobile: [
        { icon: '🤖', name: 'Kotlin', description: 'Lenguaje principal para Android' },
        { icon: '📱', name: 'Android Studio', description: 'IDE y framework de desarrollo' },
        { icon: '📋', name: 'RecyclerView', description: 'Listas dinámicas y adaptadores' },
        { icon: '🎬', name: 'Lottie', description: 'Animaciones y pantallas de carga' },
        { icon: '🖼️', name: 'Glide', description: 'Carga y gestión de imágenes' },
        { icon: '📄', name: 'PDF Generation', description: 'Generación de documentos médicos' }
      ],
      database: [
        { icon: '🗄️', name: 'Oracle Database', description: 'Sistema de gestión de base de datos' },
        { icon: '🔌', name: 'JDBC', description: 'Conectividad con base de datos' },
        { icon: '📧', name: 'JavaMail API', description: 'Sistema de envío de correos' },
        { icon: '🔄', name: 'Corrutinas', description: 'Programación asíncrona en Kotlin' }
      ]
    },

    myRole: [
      {
        icon: Palette,
        title: 'Diseño de Interfaces',
        description: 'Responsable del diseño completo de las interfaces de usuario tanto en la aplicación de escritorio como en la móvil.',
        contributions: [
          'Diseño de todas las pantallas del sistema de escritorio usando Java Swing',
          'Creación de layouts responsivos para la aplicación móvil',
          'Implementación de temas claros y oscuros en ambas aplicaciones',
          'Diseño de iconografía y elementos visuales consistentes'
        ]
      },
      {
        icon: Code,
        title: 'Desarrollo Frontend',
        description: 'Implementación completa de la lógica de presentación y experiencia de usuario en ambas plataformas.',
        contributions: [
          'Desarrollo de componentes interactivos en Java Swing',
          'Implementación de Activities y Fragments en Android',
          'Integración de RecyclerViews y adaptadores personalizados',
          'Sistema de navegación entre pantallas'
        ]
      },
      {
        icon: Database,
        title: 'Integración Backend',
        description: 'Colaboración estrecha en el desarrollo de la lógica de negocio y conexiones con la base de datos.',
        contributions: [
          'Implementación de controladores MVC en Java',
          'Desarrollo de clases de conexión a Oracle Database',
          'Integración de validaciones de formularios',
          'Sistema de encriptación y seguridad'
        ]
      }
    ],

    challenges: [
      {
        title: 'Sincronización entre Aplicaciones',
        problem: 'El mayor desafío fue asegurar que las dos aplicaciones (escritorio y móvil) trabajaran de manera sincronizada, compartiendo la misma base de datos Oracle sin conflictos de concurrencia.',
        solution: 'Implementamos un sistema de transacciones controladas y actualizaciones en tiempo real usando corrutinas en Kotlin y threading apropiado en Java para evitar bloqueos de base de datos.'
      },
      {
        title: 'Gestión de Roles y Permisos',
        problem: 'Necesitábamos un sistema que diferenciara claramente entre doctores, jefes de enfermería, administradores y pacientes, con permisos específicos para cada rol.',
        solution: 'Diseñamos una arquitectura de roles con validaciones tanto en frontend como backend, asegurando que cada usuario solo acceda a las funcionalidades permitidas según su rol.'
      },
      {
        title: 'Mensajería en Tiempo Real',
        problem: 'Implementar un sistema de chat funcional entre doctores (escritorio) y pacientes (móvil) que fuera fluido y confiable.',
        solution: 'Utilizamos consultas periódicas optimizadas a la base de datos con corrutinas para mantener actualizada la mensajería sin sobrecargar el sistema.'
      },
      {
        title: 'Generación de PDFs en Móvil',
        problem: 'Los pacientes necesitaban descargar sus expedientes médicos en formato PDF directamente desde la aplicación móvil.',
        solution: 'Implementamos un sistema de generación de PDFs usando la API nativa de Android con permisos de almacenamiento y notificaciones de descarga completada.'
      }
    ],

    impact: {
      metrics: [
        { icon: Users, title: 'Usuarios Múltiples', description: 'Sistema completo para empleados ISSS y pacientes' },
        { icon: Layers, title: 'Multiplataforma', description: 'Aplicaciones sincronizadas para escritorio y móvil' },
        { icon: Shield, title: 'Seguridad', description: 'Encriptación y validaciones robustas' },
        { icon: MessageSquare, title: 'Comunicación', description: 'Sistema de mensajería integrado' }
      ],
      description: 'El sistema ISSS Salud representa una solución integral que moderniza completamente la gestión hospitalaria, proporcionando herramientas eficientes tanto para el personal médico como para los pacientes. La implementación de dos aplicaciones complementarias permite una cobertura total de las necesidades institucionales.'
    },

    learnings: [
      {
        icon: '💻',
        title: 'Desarrollo Multiplataforma',
        items: [
          'Dominio avanzado de Java Swing para aplicaciones de escritorio',
          'Desarrollo nativo Android con Kotlin y arquitectura moderna',
          'Integración y sincronización entre diferentes plataformas',
          'Gestión de estados compartidos entre aplicaciones'
        ]
      },
      {
        icon: '🗄️',
        title: 'Gestión de Datos Enterprise',
        items: [
          'Diseño y optimización de bases de datos Oracle',
          'Manejo de transacciones complejas y concurrencia',
          'Implementación de sistemas de backup y seguridad',
          'Optimización de consultas para aplicaciones en producción'
        ]
      },
      {
        icon: '👥',
        title: 'Trabajo en Equipo',
        items: [
          'Colaboración efectiva en proyectos de gran escala',
          'Coordinación entre desarrollo frontend y backend',
          'Metodologías ágiles y control de versiones con Git',
          'Documentación técnica y comunicación con stakeholders'
        ]
      }
    ],

    conclusion: [
      'El desarrollo del sistema ISSS Salud ha sido una experiencia transformadora que me permitió trabajar en un proyecto de escala real con impacto directo en la atención médica. La complejidad de gestionar dos aplicaciones sincronizadas me enseñó la importancia de la arquitectura de software bien planificada y la comunicación efectiva entre sistemas.',
      'Este proyecto consolidó mis habilidades tanto en desarrollo de escritorio con Java como en desarrollo móvil con Kotlin, además de profundizar mis conocimientos en bases de datos enterprise y sistemas de seguridad. La experiencia de trabajar con requisitos reales de usuarios médicos y pacientes me dio una perspectiva valiosa sobre el desarrollo de software centrado en el usuario.',
      'El éxito de este proyecto refuerza mi pasión por crear soluciones tecnológicas que generen un impacto positivo en la vida de las personas, especialmente en sectores críticos como la salud.'
    ],

    relatedProjects: [
      { id: 'mopt', title: 'Sistema Interno MOPT', description: 'Proyecto profesional en prácticas con C# y ASP.NET', type: 'Proyecto Profesional', image: moptLogo },
      { id: 'hospital-bloom', title: 'Hospital Bloom', description: 'Sistema de gestión hospitalaria pediátrica', type: 'Proyecto Académico', image: bloomLogo },
      { id: 'workfinder', title: 'WorkFinder', description: 'Plataforma de búsqueda de empleo con diseño moderno', type: 'Proyecto de Frontend', image: workfinderLogo }
    ]
  },

  hospitalBloom: {
    id: 'hospitalBloom',
    title: 'Hospital Bloom',
    subtitle: 'Sistema de Gestión Hospitalaria Pediátrica - Aplicación Android Nativa',
    isProfessional: false,
    tags: ['Kotlin', 'Android', 'Oracle DB', 'Material Design', 'UI/UX Mobile'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom.git',
    logo: bloomLogo,
    gallery: [
      // { src: bloomInicio, alt: 'Pantalla de inicio Hospital Bloom', caption: 'SplashScreen con animación Lottie' },
      // { src: bloomInterfaz, alt: 'Interfaz principal de gestión', caption: 'Dashboard principal con módulos de pacientes' },
      // { src: bloomEstadisticas, alt: 'Dashboard de estadísticas médicas', caption: 'Vista de estadísticas y reportes' }
    ],

    description: {
      intro: [
        'Hospital Bloom es una aplicación móvil nativa Android desarrollada completamente en Kotlin especializada en la gestión hospitalaria pediátrica. El proyecto se enfoca en optimizar procesos internos del hospital, mejorando la eficiencia en la atención médica y seguimiento de pacientes pediátricos mediante una interfaz móvil intuitiva y funcional.',
        'Como desarrollador principal de la aplicación Android, fui responsable del diseño completo de la interfaz de usuario, la implementación de toda la funcionalidad móvil en Kotlin, y la integración con la base de datos Oracle. El proyecto demuestra mi expertise en desarrollo móvil nativo y diseño de aplicaciones especializadas para el sector salud.'
      ],
      context: [
        { icon: Smartphone, title: 'Plataforma', description: 'Aplicación Android nativa en Kotlin' },
        { icon: Heart, title: 'Especialización', description: 'Gestión hospitalaria pediátrica' },
        { icon: Database, title: 'Base de Datos', description: 'Oracle Database con JDBC' }
      ]
    },

    architecture: [
      {
        icon: 'Android',
        iconComponent: Smartphone,
        title: 'Frontend - Android Kotlin',
        subtitle: 'Usuarios: Personal de enfermería y administradores médicos',
        features: [
          'Pantalla de autenticación segura para enfermeros',
          'Gestión completa de pacientes pediátricos con RecyclerView',
          'Sistema de registro y edición de pacientes con validaciones',
          'Módulo de gestión de medicamentos y aplicaciones',
          'Asignación de medicamentos a pacientes específicos',
          'Visualización detallada de información médica',
          'Interfaz optimizada para uso en tablets y smartphones'
        ]
      },
      {
        icon: 'Database',
        iconComponent: Database,
        title: 'Backend - Oracle Database',
        subtitle: 'Gestión de datos: Base de datos empresarial robusta',
        features: [
          'Tabla de usuarios_enfermeros con autenticación segura',
          'Gestión completa de pacientes con datos médicos',
          'Catálogo de medicamentos con descripciones detalladas',
          'Sistema de aplicación_medicamentos con horarios',
          'Relaciones complejas entre pacientes y tratamientos',
          'Triggers automáticos para IDs y validaciones',
          'Consultas optimizadas para reportes médicos'
        ]
      }
    ],

    features: [
      {
        icon: Shield,
        title: 'Autenticación Segura de Enfermeros',
        description: 'Sistema de login robusto con validación de credenciales, patrones de email y mensajes de error específicos para garantizar acceso autorizado al sistema.'
      },
      {
        icon: Users,
        title: 'Gestión Completa de Pacientes Pediátricos',
        description: 'CRUD completo de pacientes con RecyclerView optimizado, incluyendo nombres, apellidos, edad, enfermedad, habitación, cama y fecha de ingreso con DatePicker nativo.'
      },
      {
        icon: Package,
        title: 'Sistema de Medicamentos y Aplicaciones',
        description: 'Módulo completo para registrar medicamentos, asignar horarios de aplicación y vincular tratamientos específicos con pacientes mediante Spinners dinámicos.'
      },
      {
        icon: Palette,
        title: 'Interfaz Nativa Material Design',
        description: 'Diseño moderno siguiendo las guías de Material Design con animaciones Lottie, CardViews, y navegación intuitiva optimizada para dispositivos móviles.'
      },
      {
        icon: Zap,
        title: 'Pantalla de Carga con Animaciones',
        description: 'SplashScreen profesional con animaciones Lottie que mejoran la experiencia de usuario mientras se inicializa la aplicación y se establece conexión con la base de datos.'
      },
      {
        icon: FileText,
        title: 'Detalles Médicos Integrados',
        description: 'Vista detallada de pacientes que combina información personal, médica y de tratamiento mediante consultas JOIN complejas para mostrar un panorama completo.'
      }
    ],

    techStack: {
      android: [
        { icon: '🤖', name: 'Kotlin', description: 'Lenguaje principal para desarrollo Android moderno' },
        { icon: '📱', name: 'Android SDK', description: 'Framework nativo con API level 26-34' },
        { icon: '📋', name: 'RecyclerView', description: 'Listas eficientes con adaptadores personalizados' },
        { icon: '🎨', name: 'Material Design', description: 'Componentes UI siguiendo guías de Google' },
        { icon: '🎬', name: 'Lottie Animations', description: 'Animaciones vectoriales para splash screen' },
        { icon: '📅', name: 'DatePicker', description: 'Selección nativa de fechas de ingreso' }
      ],
      database: [
        { icon: '🗄️', name: 'Oracle Database', description: 'Sistema de gestión de base de datos empresarial' },
        { icon: '🔌', name: 'JDBC Oracle Driver', description: 'Conectividad directa con Oracle desde Android' },
        { icon: '🔄', name: 'Corrutinas Kotlin', description: 'Programación asíncrona para operaciones de BD' },
        { icon: '⚙️', name: 'Triggers y Sequences', description: 'Automatización de IDs y validaciones en Oracle' }
      ],
      tools: [
        { icon: '💻', name: 'Android Studio', description: 'IDE oficial para desarrollo Android' },
        { icon: '🔨', name: 'Gradle Build', description: 'Sistema de construcción y dependencias' },
        { icon: '📱', name: 'Emuladores', description: 'Testing en múltiples dispositivos virtuales' },
        { icon: '🌿', name: 'Git', description: 'Control de versiones del proyecto' }
      ]
    },

    myRole: [
      {
        icon: Smartphone,
        title: 'Desarrollo Completo de la App Android',
        description: 'Responsable del desarrollo completo de la aplicación móvil desde la concepción hasta la implementación final.',
        contributions: [
          'Diseño e implementación de todas las Activities y Fragments',
          'Desarrollo de adaptadores personalizados para RecyclerView',
          'Implementación de navegación entre pantallas con Intents',
          'Gestión completa del ciclo de vida de la aplicación Android'
        ]
      },
      {
        icon: Palette,
        title: 'Diseño UI/UX Móvil Especializado',
        description: 'Creación completa del diseño de interfaz optimizado para el sector salud y uso en dispositivos móviles.',
        contributions: [
          'Diseño de layouts XML responsivos para diferentes pantallas',
          'Implementación de Material Design Components',
          'Optimización de la experiencia para personal médico',
          'Integración de animaciones Lottie para mejor UX'
        ]
      },
      {
        icon: Database,
        title: 'Integración con Base de Datos Oracle',
        description: 'Implementación completa de la conectividad y operaciones CRUD con Oracle Database desde Android.',
        contributions: [
          'Configuración de conexión Oracle JDBC en Android',
          'Desarrollo de clases modelo (Pacientes, Medicamentos)',
          'Implementación de operaciones asíncronas con Corrutinas',
          'Optimización de consultas complejas con JOIN'
        ]
      }
    ],

    challenges: [
      {
        title: 'Conectividad Oracle desde Android',
        problem: 'Uno de los mayores desafíos fue establecer una conexión estable y eficiente entre la aplicación Android y la base de datos Oracle, considerando las limitaciones de red móvil y la seguridad.',
        solution: 'Implementé un sistema robusto usando el driver JDBC de Oracle con manejo de conexiones asíncronas mediante Corrutinas de Kotlin, incluyendo manejo de errores y reintentos automáticos.'
      },
      {
        title: 'Interfaz Optimizada para Personal Médico',
        problem: 'El personal de enfermería necesitaba una interfaz que fuera intuitiva para el registro rápido de información médica crítica, sin errores que pudieran afectar la atención de pacientes.',
        solution: 'Diseñé una interfaz siguiendo principios de Material Design con validaciones en tiempo real, mensajes de error claros y flujos optimizados para las tareas más frecuentes del personal médico.'
      },
      {
        title: 'Gestión Eficiente de Listas de Pacientes',
        problem: 'La aplicación necesitaba manejar listas grandes de pacientes con operaciones CRUD eficientes y actualizaciones en tiempo real sin afectar el rendimiento.',
        solution: 'Implementé RecyclerView con ViewHolder pattern y DiffUtil para actualizaciones eficientes, además de operaciones de base de datos optimizadas con transacciones controladas.'
      },
      {
        title: 'Experiencia de Usuario en Dispositivos Móviles',
        problem: 'Adaptar la funcionalidad compleja de gestión hospitalaria a la experiencia móvil requería un diseño cuidadoso de la navegación y presentación de información.',
        solution: 'Diseñé un sistema de navegación por categorías con pantallas específicas para cada función, usando CardViews para organizar información y Dialogs para operaciones rápidas.'
      }
    ],

    codeHighlights: [
      {
        icon: Database,
        title: 'Conexión Oracle Optimizada',
        description: 'Implementación de una clase de conexión robusta con manejo de errores y configuración de red específica para Oracle en Android.'
      },
      {
        icon: Zap,
        title: 'Operaciones Asíncronas',
        description: 'Uso avanzado de Corrutinas Kotlin para todas las operaciones de base de datos, garantizando que la UI nunca se bloquee.'
      },
      {
        icon: Layers,
        title: 'RecyclerView Avanzado',
        description: 'Implementación de adaptadores personalizados con ViewHolder pattern y operaciones CRUD directas desde los elementos de la lista.'
      },
      {
        icon: Shield,
        title: 'Validaciones Robustas',
        description: 'Sistema completo de validaciones de formularios con patrones específicos para datos médicos y mensajes de error contextuales.'
      }
    ],

    impact: {
      metrics: [
        { icon: Users, title: 'Usuarios', description: 'Personal de enfermería y administradores' },
        { icon: Heart, title: 'Especialización', description: 'Gestión pediátrica especializada' },
        { icon: Smartphone, title: 'Movilidad', description: 'Acceso desde tablets y smartphones' },
        { icon: Database, title: 'Datos Seguros', description: 'Oracle Database empresarial' }
      ],
      description: 'Hospital Bloom demostró la capacidad de crear aplicaciones móviles complejas específicas para el sector salud, mejorando la eficiencia del personal de enfermería en la gestión de pacientes pediátricos mediante una interfaz intuitiva y funcional.'
    },

    learnings: [
      {
        icon: '📱',
        title: 'Desarrollo Android Nativo',
        items: [
          'Dominio profundo de Kotlin y Android SDK moderno',
          'Implementación de patrones de arquitectura Android',
          'Manejo avanzado de RecyclerView y adaptadores',
          'Integración de Material Design Components'
        ]
      },
      {
        icon: '🗄️',
        title: 'Bases de Datos Móviles',
        items: [
          'Conexión Oracle JDBC desde aplicaciones móviles',
          'Optimización de consultas para dispositivos móviles',
          'Manejo de transacciones y concurrencia',
          'Programación asíncrona con Corrutinas'
        ]
      },
      {
        icon: '🎨',
        title: 'UX/UI Móvil',
        items: [
          'Diseño de interfaces para sector salud',
          'Optimización de flujos para tareas médicas',
          'Implementación de animaciones efectivas',
          'Diseño responsive para múltiples dispositivos'
        ]
      }
    ],

    conclusion: [
      'El desarrollo de Hospital Bloom me permitió consolidar mis habilidades en desarrollo Android nativo con Kotlin y profundizar en la integración con bases de datos empresariales. Aprendí a diseñar interfaces específicas para el sector salud, considerando las necesidades únicas del personal médico y la importancia de la precisión en la gestión de datos de pacientes.',
      'Este proyecto demostró mi capacidad para crear aplicaciones móviles complejas que resuelven problemas reales, desde la arquitectura de datos hasta la experiencia de usuario optimizada para dispositivos móviles. La experiencia de trabajar con Oracle Database desde Android me dio una perspectiva valiosa sobre el desarrollo de aplicaciones empresariales móviles.',
      'Hospital Bloom representa mi expertise en desarrollo móvil Android y mi comprensión de las necesidades específicas del sector salud, combinando tecnología moderna con soluciones prácticas para mejorar la eficiencia hospitalaria.'
    ],

    relatedProjects: [
      { id: 'isss-salud', title: 'ISSS Salud', description: 'Sistema integrado para gestión de salud multiplataforma', type: 'Proyecto Académico', image: issLogo },
      { id: 'homeclick', title: 'HomeClick', description: 'Plataforma inmobiliaria con stack MERN', type: 'Proyecto Full-Stack', image: homeclickLogo },
      { id: 'workfinder', title: 'WorkFinder', description: 'Plataforma de búsqueda de empleo', type: 'Proyecto Frontend', image: workfinderLogo }
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