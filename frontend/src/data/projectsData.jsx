import React from 'react';
import { 
  Briefcase, Calendar, Users, Code, Palette, Bug, Building, CheckCircle,
  Shield, Clock, Award, Home, Smartphone, Database, Globe, Server,
  Monitor, FileText, MessageSquare, Heart, UserCheck, Zap, Lock,
  TrendingUp, Target, Layers, GitBranch, Package, Settings, Mail,
  Camera, MapPin, Search, ShoppingCart, Star, Bell, Edit, Trash2, Stethoscope
} from 'lucide-react';

// Importar imágenes
import moptLogo from '../assets/mopt-logo.png';
import homeclickLogo from '../assets/homeclick-logo.png';
import issLogo from '../assets/LOGO AZUL.png';
import bloomLogo from '../assets/bloom salud.png';

// Imágenes adicionales - galerías
import isssInicio from '../assets/ISSS Salud inicio.png';
import isssInterfaz from '../assets/ISSS Salud Interfaz.png';
import isssUso from '../assets/ISSS Salud uso.png';
import bloomInicio from '../assets/bloomInicio.png';
import bloomInterfaz from '../assets/bloom salud interfaz.png';
import bloomMedicamentos from '../assets/bloom salud medicamentos.png';

const projectsData = {
  mopt: {
    id: 'mopt',
    title: 'Sistema Interno MOPT',
    subtitle: 'Ministerio de Obras Públicas y Transporte | Noviembre 2024 - Enero 2025',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional - Prácticas' },
    tags: ['C#', 'ASP.NET', 'SQL Server', 'UI/UX Design', 'QA Testing'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial - Repositorio no disponible públicamente',
    logo: moptLogo,
    
    description: {
      intro: [
        'Desarrollé un sistema administrativo crítico para el Ministerio de Obras Públicas y Transporte durante prácticas profesionales. El proyecto requería altos estándares de seguridad, escalabilidad y cumplimiento normativo gubernamental.',
        'Participé en todas las fases del desarrollo: desde la arquitectura backend hasta el diseño UI/UX, pasando por QA exhaustivo. Demostré capacidad de adaptación rápida a entornos corporativos complejos y estándares de calidad gubernamentales.'
      ],
      context: [
        { icon: Building, title: 'Cliente', description: 'Ministerio de Obras Públicas y Transporte' },
        { icon: Calendar, title: 'Duración', description: '3 meses (Nov 2024 - Ene 2025)' },
        { icon: Users, title: 'Equipo', description: 'Prácticas en equipo multidisciplinario' }
      ]
    },

    techStack: [
      { icon: '💻', name: 'C#', description: 'Lógica backend y negocio' },
      { icon: '🌐', name: 'ASP.NET', description: 'Framework web empresarial' },
      { icon: '🗄️', name: 'SQL Server 2022', description: 'Base de datos' },
      { icon: '🎨', name: 'Figma', description: 'Diseño UI/UX' },
      { icon: '⚙️', name: 'Visual Studio', description: 'IDE principal' },
      { icon: '🖥️', name: 'IIS', description: 'Deployment' }
    ],

    challenges: [
      {
        title: 'Integración con Sistemas Legacy',
        problem: 'El sistema requería conectar con múltiples bases de datos heredadas con arquitecturas incompatibles y sin documentación clara.',
        solution: 'Implementé capas de abstracción en C#/ASP.NET que permitieron integración segura y mantenible con sistemas legacy, utilizando patrones de diseño como Adapter y Facade.'
      },
      {
        title: 'Cumplimiento Normativo Gubernamental',
        problem: 'Procesos burocráticos complejos, estrictos protocolos de seguridad y documentación exhaustiva requerida por el entorno gubernamental.',
        solution: 'Adopté rápidamente los estándares institucionales, implementé logging auditable, manejo seguro de sesiones y documenté cada módulo según normativas gubernamentales.'
      },
      {
        title: 'Optimización de Rendimiento',
        problem: 'Consultas SQL complejas causaban latencia en reportes críticos que eran ejecutados frecuentemente por múltiples usuarios.',
        solution: 'Realicé análisis de ejecución, creé índices optimizados, refactoricé queries complejas e implementé caching estratégico, mejorando rendimiento en un 40%.'
      }
    ],

    impact: {
      metrics: [
        { icon: TrendingUp, title: 'Modernización', description: 'Procesos administrativos actualizados digitalmente' },
        { icon: Zap, title: 'Eficiencia', description: 'Mejora en operaciones internas del ministerio' },
        { icon: Shield, title: 'Seguridad', description: 'Cumplimiento de estándares de seguridad gobierno' },
        { icon: Target, title: 'Escalabilidad', description: 'Arquitectura preparada para crecimiento futuro' }
      ],
      description: 'El sistema MOPT modernizó procesos administrativos críticos del ministerio, mejorando significativamente la eficiencia operativa. La arquitectura implementada proporciona una base sólida para futuras expansiones del sistema. Mi contribución fue fundamental en la validación de calidad y el diseño inicial de la experiencia de usuario.'
    },

    learnings: [
      {
        icon: '🏢',
        title: 'Enterprise Development',
        items: [
          'Trabajo en entornos corporativos complejos',
          'Integración de sistemas legacy y modernos',
          'Estándares de código empresarial',
          'Documentación técnica institucional'
        ]
      },
      {
        icon: '🔒',
        title: 'Seguridad & Compliance',
        items: [
          'Seguridad en sistemas críticos',
          'Normativas gubernamentales',
          'Auditorías y logging de transacciones',
          'Manejo seguro de datos sensibles'
        ]
      },
      {
        icon: '👥',
        title: 'Colaboración Profesional',
        items: [
          'Comunicación con stakeholders',
          'Trabajo multidisciplinario',
          'Adaptación a nuevos equipos',
          'Metodologías profesionales'
        ]
      }
    ], 
    
    conclusion: [
      'Mi participación en el Sistema MOPT fue una experiencia invaluable en desarrollo profesional a escala empresarial. Demostré capacidad de trabajar bajo estándares rigurosos de calidad, seguridad y documentación.',
      'El proyecto reforzó mis competencias en desarrollo backend robusto, diseño orientado al usuario en contextos críticos, y aseguramiento de calidad integral. Obtuve experiencia directa en cómo los principios de clean code y arquitectura escalable se aplican en sistemas reales.'
    ]
  },

  homeclick: {
    id: 'homeclick',
    title: 'HomeClick',
    subtitle: 'Plataforma Inmobiliaria Full-Stack | MERN Stack',
    isProfessional: false,
    headerBadge: { icon: Home, text: 'Proyecto Académico' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'E-Commerce'],
    githubLink: 'https://github.com/xxDianaPadilla/homeClick',
    logo: homeclickLogo,

    description: {
      intro: [
        'HomeClick es una plataforma inmobiliaria full-stack que conecta compradores con propiedades de manera intuitiva y moderna. El proyecto demuestra dominio completo de la arquitectura MERN con énfasis en escalabilidad y experiencia de usuario.',
        'Lideré el desarrollo frontend y diseñé la estrategia de integración con backend, implementando patrones modernos de React y asegurando una experiencia fluida entre cliente y servidor.'
      ],
      context: [
        { icon: Code, title: 'Stack', description: 'React, Node.js, Express, MongoDB' },
        { icon: Globe, title: 'Tipo', description: 'E-commerce inmobiliario full-stack' },
        { icon: Users, title: 'Enfoque', description: 'Experiencia de usuario e integración' }
      ]
    },

    techStack: [
      { icon: '⚛️', name: 'React', description: 'UI dinámica y componentes' },
      { icon: '🔀', name: 'React Router', description: 'Navegación SPA' },
      { icon: '🗺️', name: 'Leaflet', description: 'Mapas interactivos' },
      { icon: '🟢', name: 'Node.js', description: 'Runtime backend' },
      { icon: '🚂', name: 'Express', description: 'Framework API' },
      { icon: '🍃', name: 'MongoDB', description: 'Base de datos NoSQL' },
      { icon: '🔐', name: 'JWT', description: 'Autenticación segura' },
      { icon: '📧', name: 'Nodemailer', description: 'Sistema de emails' }
    ],

    challenges: [
      {
        title: 'Validación Robusta Cliente-Servidor',
        problem: 'Garantizar integridad de datos en formularios complejos con múltiples campos interdependientes entre cliente y servidor.',
        solution: 'Implementé React Hook Form en frontend con validaciones en tiempo real y validaciones server-side duplicadas en Express. Implementé middleware de validación customizado para reutilización.'
      },
      {
        title: 'Escalabilidad del Catálogo',
        problem: 'La aplicación necesitaba manejar miles de propiedades sin degradar rendimiento en búsquedas y filtros.',
        solution: 'Implementé paginación en MongoDB, índices en campos de búsqueda frecuente, lazy loading en frontend y caché inteligente con React hooks.'
      },
      {
        title: 'Seguridad en Transacciones',
        problem: 'Proteger datos de usuarios y propiedades contra accesos no autorizados y ataques CSRF.',
        solution: 'JWT con tokens de corta duración, validación de permisos en cada endpoint, sanitización de inputs, CORS restrictivo y cookies seguras (HttpOnly, Secure).'
      }
    ],

    impact: {
      metrics: [
        { icon: Target, title: 'Funcionalidad', description: 'E-commerce completo y operacional' },
        { icon: Zap, title: 'Rendimiento', description: 'Carga rápida con paginación inteligente' },
        { icon: Heart, title: 'UX', description: 'Interfaz intuitiva y responsiva' },
        { icon: Shield, title: 'Seguridad', description: 'Autenticación y validaciones robustas' }
      ],
      description: 'HomeClick demuestra arquitectura MERN profesional aplicada a un caso de uso real de e-commerce. La plataforma es totalmente funcional, escalable y lista para producción. El proyecto muestra capacidad de liderar desarrollo full-stack, tomar decisiones arquitectónicas y entregar aplicaciones de calidad.'
    },

    learnings: [
      {
        icon: '⚛️',
        title: 'React Avanzado',
        items: [
          'SPAs complejas con múltiples rutas',
          'State management con hooks y context',
          'Optimización de rendimiento (lazy loading, memoization)',
          'Integración con APIs REST',
          'Manejo de formularios validados'
        ]
      },
      {
        icon: '🚀',
        title: 'Backend con Node.js',
        items: [
          'APIs RESTful escalables',
          'Autenticación JWT',
          'Validaciones en múltiples capas',
          'Manejo de errores robusto',
          'Estructuración de código escalable'
        ]
      },
      {
        icon: '🗄️',
        title: 'Bases de Datos NoSQL',
        items: [
          'Diseño de esquemas con Mongoose',
          'Queries optimizadas',
          'Índices para búsquedas rápidas',
          'Relaciones entre colecciones',
          'Transacciones y atomicidad'
        ]
      }
    ],

    gallery: [
      {
        src: homeclickLogo,
        alt: 'HomeClick Catálogo',
        caption: 'Catálogo de propiedades con búsqueda y filtros avanzados'
      },
      {
        src: homeclickLogo,
        alt: 'HomeClick Detalle',
        caption: 'Vista de detalle de propiedad con mapas y información completa'
      },
      {
        src: homeclickLogo,
        alt: 'HomeClick Panel Admin',
        caption: 'Panel administrativo para gestión de propiedades'
      }
    ],

    conclusion: [
      'HomeClick es prueba de capacidad para arquitectar y ejecutar aplicaciones full-stack modernas. El proyecto integra todas las competencias necesarias para desarrollo web profesional: frontend responsivo, backend robusto, base de datos escalable y prácticas de seguridad.',
      'Obtuve experiencia valiosa en ciclos completos de desarrollo, desde definición de requisitos hasta deployment, incluyendo decisiones de arquitectura que impactan escalabilidad y mantenibilidad a largo plazo.'
    ]
  },

  isssSalud: {
    id: 'isssSalud',
    title: 'ISSS Salud',
    subtitle: 'Sistema Hospitalario Multiplataforma | Java + Kotlin + Oracle',
    isProfessional: false,
    headerBadge: { icon: Stethoscope, text: 'Proyecto Académico Avanzado' },
    tags: ['Java', 'Kotlin', 'Android', 'Oracle Database', 'Desktop App'],
    githubLinkJ: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java',
    githubLinkA: 'https://github.com/xxDianaPadilla/ISSS-Salud',
    logo: issLogo,

    description: {
      intro: [
        'ISSS Salud es un ecosistema integral de gestión hospitalaria multiplataforma diseñado para el Instituto Salvadoreño del Seguro Social. El sistema integra una aplicación de escritorio para personal médico y administrativo con una aplicación móvil para pacientes, compartiendo una base de datos Oracle centralizada.',
        'Lideré la concepción del proyecto, diseñé la arquitectura multiplataforma completa y desarrollé interfaces en ambas plataformas. El sistema maneja procesos críticos de salud con énfasis en seguridad de datos, sincronización en tiempo real y experiencia de usuario optimizada para contextos médicos.'
      ],
      context: [
        { icon: Stethoscope, title: 'Dominio', description: 'Gestión hospitalaria integral' },
        { icon: Layers, title: 'Arquitectura', description: 'Desktop + Mobile + Base de datos centralizada' },
        { icon: Users, title: 'Usuarios', description: 'Personal médico, administrativo y pacientes' }
      ]
    },

    techStack: [
      { icon: '☕', name: 'Java SE', description: 'Lógica desktop y backend' },
      { icon: '🎨', name: 'Java Swing', description: 'UI de escritorio' },
      { icon: '🔧', name: 'Apache Ant', description: 'Build tool' },
      { icon: '🟣', name: 'Kotlin', description: 'App móvil Android' },
      { icon: '📱', name: 'Android Studio', description: 'IDE móvil' },
      { icon: '🗄️', name: 'Oracle Database', description: 'Base de datos empresarial' },
      { icon: '🔗', name: 'JDBC', description: 'Conexión base de datos' },
      { icon: '📧', name: 'JavaMail API', description: 'Sistema de correos' }
    ],

    challenges: [
      {
        title: 'Sincronización Multiplataforma',
        problem: 'Mantener consistencia de datos entre aplicación desktop, móvil y base de datos con usuarios que pueden trabajar offline o en conexiones inestables.',
        solution: 'Implementé transacciones ACID en Oracle, sincronización inteligente en Kotlin con corrutinas que detectan cambios, y pooling de conexiones en Java para optimizar recursos.'
      },
      {
        title: 'Control de Concurrencia',
        problem: 'Múltiples usuarios accediendo simultáneamente a expedientes médicos críticos requiere control transaccional estricto sin bloqueos que afecten rendimiento.',
        solution: 'Implementé transacciones en Oracle con niveles de aislamiento apropiados, versioning optimista en algunas operaciones, y locks explícitos en datos críticos. Agregué logging exhaustivo para auditoría.'
      },
      {
        title: 'Seguridad de Datos Médicos',
        problem: 'Proteger información de salud personal (PII) sensible contra accesos no autorizados, cumpliendo regulaciones de privacidad médica.',
        solution: 'Encriptación SHA-256 de contraseñas, control granular de permisos por rol, validación de acceso en cada operación, sanitización de inputs y logging de accesos a datos sensibles.'
      }
    ],

    impact: {
      metrics: [
        { icon: Zap, title: 'Eficiencia', description: 'Procesos hospitalarios optimizados y digitalizados' },
        { icon: Heart, title: 'Comunicación', description: 'Mejora relación médico-paciente' },
        { icon: FileText, title: 'Digitalización', description: 'Expedientes médicos totalmente digitales' },
        { icon: Shield, title: 'Seguridad', description: 'Datos médicos protegidos y auditables' }
      ],
      description: 'ISSS Salud demuestra capacidad de diseñar sistemas complejos multiplataforma que abordan desafíos reales del sector salud. La arquitectura escala para cientos de usuarios simultáneos, mantiene integridad de datos críticos y proporciona experiencias optimizadas para diferentes tipos de usuarios. El proyecto valida dominio de tecnologías empresariales (Java, Oracle, Android) aplicadas a contextos regulados.'
    },

    learnings: [
      {
        icon: '☕',
        title: 'Desarrollo Multiplataforma',
        items: [
          'Arquitectura coherente entre desktop y móvil',
          'Java Swing y interfaz de escritorio robusta',
          'Android/Kotlin nativo con patrones modernos',
          'Sincronización entre plataformas',
          'Gestión de ciclo de vida en múltiples contextos'
        ]
      },
      {
        icon: '🗄️',
        title: 'Sistemas Enterprise',
        items: [
          'Bases de datos Oracle a escala profesional',
          'Transacciones ACID y control de concurrencia',
          'Arquitectura de datos para consistencia',
          'Optimización de queries complejas',
          'Auditoría y logging de operaciones críticas'
        ]
      },
      {
        icon: '🔒',
        title: 'Seguridad Regulada',
        items: [
          'Protección de datos médicos sensibles',
          'Control granular de accesos (RBAC)',
          'Encriptación y hashing de contraseñas',
          'Auditoría de operaciones',
          'Cumplimiento de regulaciones de privacidad'
        ]
      }
    ],

    gallery: [
      {
        src: isssInicio,
        alt: 'ISSS Salud - Inicio',
        caption: 'Pantalla de inicio de la aplicación desktop'
      },
      {
        src: isssInterfaz,
        alt: 'ISSS Salud - Gestión de Pacientes',
        caption: 'Interfaz de gestión y búsqueda de pacientes'
      },
      {
        src: isssUso,
        alt: 'ISSS Salud - Expediente Médico',
        caption: 'Vista del expediente médico detallado del paciente'
      }
    ],

    conclusion: [
      'ISSS Salud es mi proyecto más ambicioso, demostrando capacidad de liderar diseño y desarrollo de sistemas complejos en dominios regulados. El proyecto integra tecnologías enterprise (Java, Kotlin, Oracle), patrones arquitectónicos avanzados y prácticas de seguridad críticas para aplicaciones de salud.',
      'A través de este proyecto adquirí profunda comprensión de sistemas multiplataforma, control de concurrencia en bases de datos, y cómo diseñar aplicaciones que manejan datos altamente sensibles. Los desafíos superados me preparan para desarrollo en contextos empresariales complejos donde la confiabilidad y seguridad son no-negociables.'
    ]
  },

  hospitalBloom: {
    id: 'hospitalBloom',
    title: 'Hospital Bloom',
    subtitle: 'Sistema Hospitalario Pediátrico | Hospital Nacional de Niños',
    isProfessional: false,
    headerBadge: { icon: Heart, text: 'Proyecto Académico' },
    tags: ['UI/UX Design', 'Frontend', 'Interfaz Médica', 'Pediatría'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom',
    confidentialNotice: 'Proyecto académico - Código enfocado en demostración de UX/UI',
    logo: bloomLogo,

    description: {
      intro: [
        'Hospital Bloom es un sistema especializado en gestión hospitalaria pediátrica, desarrollado con énfasis en diseño de interfaz optimizado para entornos críticos de salud infantil. El proyecto demuestra capacidad de diseñar UX/UI para contextos sensibles donde claridad, accesibilidad y rapidez son críticos.',
        'Mi contribución principal fue diseño y desarrollo frontend con enfoque en experiencia del usuario dentro de un entorno hospitalario pediátrico. El sistema facilita gestión de pacientes infantiles, medicamentos y procesos clínicos de forma intuitiva.'
      ],
      context: [
        { icon: Heart, title: 'Especialidad', description: 'Gestión hospitalaria pediátrica' },
        { icon: Building, title: 'Institución', description: 'Hospital Nacional de Niños Benjamín Bloom' },
        { icon: Palette, title: 'Enfoque', description: 'UX/UI diseño para contexto médico' }
      ]
    },

    techStack: [
      { icon: '⚛️', name: 'React', description: 'Frontend dinámico' },
      { icon: '🎨', name: 'Tailwind CSS', description: 'Estilos responsive' },
      { icon: '🔀', name: 'React Router', description: 'Navegación entre vistas' },
      { icon: '🎭', name: 'Custom UI', description: 'Componentes diseñados para contexto médico' },
      { icon: '🔗', name: 'API Integration', description: 'Backend integration' }
    ],

    challenges: [
      {
        title: 'Diseño para Contexto Crítico',
        problem: 'Crear una interfaz que sea clara, rápida y con margen mínimo de error en situaciones donde segundos cuentan y el estrés es alto.',
        solution: 'Implementé principios de human-centered design, flujos altamente optimizados, elementos visuales claros, validaciones preventivas y confirmaciones en acciones críticas.'
      },
      {
        title: 'UX para Múltiples Usuarios',
        problem: 'El sistema necesitaba ser usable tanto por médicos expertos (que valoran rapidez) como por personal administrativo (que necesita claridad).',
        solution: 'Diseñé roles diferenciados con interfaces adaptadas a cada rol, atajos para usuarios expertos, y tooltips contextuales para nuevos usuarios.'
      },
      {
        title: 'Especialización Pediátrica',
        problem: 'Los procesos de atención pediátrica difieren significativamente de atención general: dosis, medicamentos, protocols especiales.',
        solution: 'Colaboré con personal médico para entender flujos específicos pediátricos, implementé validaciones especializadas y workflows adaptados a esta especialidad.'
      }
    ],

    impact: {
      metrics: [
        { icon: Zap, title: 'Usabilidad', description: 'Interfaz intuitiva y rápida de usar' },
        { icon: Heart, title: 'Accesibilidad', description: 'Diseño inclusivo para múltiples usuarios' },
        { icon: Target, title: 'Eficiencia', description: 'Flujos optimizados para contexto médico' },
        { icon: Award, title: 'Especialización', description: 'Adaptación específica a pediatría' }
      ],
      description: 'Hospital Bloom valida mi capacidad de diseñar UX/UI para contextos altamente sensibles y regulados. El proyecto demuestra entendimiento profundo de cómo el diseño impacta directamente en eficiencia y seguridad en ambientes críticos. La especialización en pediatría muestra capacidad de adaptarme a dominios específicos y requerimientos únicos.'
    },

    learnings: [
      {
        icon: '🎨',
        title: 'UX/UI Médico',
        items: [
          'Diseño para entornos críticos',
          'Human-centered design principles',
          'Accesibilidad en contextos médicos',
          'Flujos optimizados para rapidez',
          'Validaciones preventivas'
        ]
      },
      {
        icon: '👶',
        title: 'Dominio Pediátrico',
        items: [
          'Procesos específicos de atención infantil',
          'Requerimientos únicos de pediatría',
          'Comunicación con profesionales médicos',
          'Seguridad en atención infantil',
          'Consideraciones especiales pediátricas'
        ]
      },
      {
        icon: '🎯',
        title: 'Diseño Contextual',
        items: [
          'Investigación de usuarios reales',
          'Iteración basada en feedback médico',
          'Prototipado y testing',
          'Diseño de interacciones críticas',
          'Validación de procesos médicos'
        ]
      }
    ],

    gallery: [
      {
        src: bloomInicio,
        alt: 'Hospital Bloom - Inicio',
        caption: 'Pantalla de inicio del sistema pediátrico'
      },
      {
        src: bloomInterfaz,
        alt: 'Hospital Bloom - Gestión',
        caption: 'Interfaz de gestión de pacientes pediátricos'
      },
      {
        src: bloomMedicamentos,
        alt: 'Hospital Bloom - Medicamentos',
        caption: 'Sistema de control de medicamentos pediátricos'
      }
    ],

    conclusion: [
      'Hospital Bloom demuestra mi capacidad de diseñar interfaces para contextos médicos especializados. El proyecto prioriza claridad, seguridad y eficiencia en un entorno donde la experiencia del usuario impacta directamente en la calidad de cuidado.',
      'A través de este proyecto aprendí a colaborar estrechamente con profesionales médicos, entender dominios especializados y traducir requerimientos complejos en interfaces limpias e intuitivas. La experiencia refuerza mi capacidad de diseñar para diferentes contextos y usuarios.'
    ]
  }
};

export default projectsData;