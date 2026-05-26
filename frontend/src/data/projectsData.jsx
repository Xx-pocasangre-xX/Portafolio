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
import marquesaLogo from '../assets/logo_marquesa.png';

// Imágenes adicionales - galerías
import isssInicio from '../assets/ISSS Salud inicio.png';
import isssInterfaz from '../assets/ISSS Salud Interfaz.png';
import isssUso from '../assets/ISSS Salud uso.png';
import bloomInicio from '../assets/bloomInicio.png';
import bloomInterfaz from '../assets/bloom salud interfaz.png';
import bloomMedicamentos from '../assets/bloom salud medicamentos.png';

// Imágenes Marquesa
import marquesaLogin from '../assets/login marquesa.png';
import marquesaChat from '../assets/chat admin marquesa.png';
import marquesaHome from '../assets/Home telefono marquesa.png';

// Imágenes HomeClick
import homeclickInicio from '../assets/Inicio HomeClick.png';
import homeclickLogin from '../assets/login HomeClick.png';
import homeclickcatalogo from "../assets/catalogo de las casas.png"

const projectsData = {
  mopt: {
    id: 'mopt',
    title: 'Sistema Interno MOPT',
    subtitle: 'Ministerio de Obras Públicas y Transporte · Noviembre 2024 – Enero 2025',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional – Prácticas' },
    tags: ['C#', 'ASP.NET', 'SQL Server', 'UI/UX Design', 'QA Testing'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial — repositorio no disponible públicamente',
    logo: moptLogo,
    
    description: {
      intro: [
        'Sistema administrativo crítico desarrollado para el Ministerio de Obras Públicas y Transporte durante un período de prácticas profesionales. El proyecto exigió altos estándares de seguridad, escalabilidad y cumplimiento de normativas gubernamentales.',
        'Participación en todas las fases del ciclo de desarrollo: desde la arquitectura backend hasta el diseño UI/UX, incluyendo QA exhaustivo. El proceso evidenció capacidad de adaptación a entornos corporativos complejos y familiarización rápida con estándares de calidad institucionales.'
      ],
      context: [
        { icon: Building, title: 'Cliente', description: 'Ministerio de Obras Públicas y Transporte' },
        { icon: Calendar, title: 'Duración', description: '3 meses (Nov 2024 – Ene 2025)' },
        { icon: Users, title: 'Equipo', description: 'Prácticas en equipo multidisciplinario' }
      ]
    },

    techStack: [
      { icon: '💻', name: 'C#', description: 'Lógica backend y de negocio' },
      { icon: '🌐', name: 'ASP.NET', description: 'Framework web empresarial' },
      { icon: '🗄️', name: 'SQL Server 2022', description: 'Base de datos relacional' },
      { icon: '🎨', name: 'Figma', description: 'Diseño UI/UX' },
      { icon: '⚙️', name: 'Visual Studio', description: 'IDE principal' },
      { icon: '🖥️', name: 'IIS', description: 'Despliegue en servidor' }
    ],

    challenges: [
      {
        title: 'Integración con Sistemas Legacy',
        problem: 'El sistema requería conectar con múltiples bases de datos heredadas con arquitecturas incompatibles y sin documentación técnica disponible.',
        solution: 'Se implementaron capas de abstracción en C#/ASP.NET que permitieron una integración segura y mantenible con los sistemas legacy, aplicando patrones de diseño como Adapter y Facade.'
      },
      {
        title: 'Cumplimiento Normativo Gubernamental',
        problem: 'El entorno gubernamental imponía procesos burocráticos complejos, estrictos protocolos de seguridad y requisitos exhaustivos de documentación.',
        solution: 'Se adoptaron rápidamente los estándares institucionales, implementando logging auditable, gestión segura de sesiones y documentación de módulos conforme a las normativas vigentes.'
      },
      {
        title: 'Optimización de Rendimiento',
        problem: 'Consultas SQL complejas generaban latencia en reportes críticos ejecutados de forma frecuente por múltiples usuarios simultáneos.',
        solution: 'Se realizó análisis de planes de ejecución, se crearon índices optimizados, se refactorizaron queries de alto costo y se implementó caching estratégico, logrando una mejora de rendimiento del 40%.'
      }
    ],

    impact: {
      metrics: [
        { icon: TrendingUp, title: 'Modernización', description: 'Procesos administrativos actualizados y digitalizados' },
        { icon: Zap, title: 'Eficiencia', description: 'Mejora mensurable en operaciones internas del ministerio' },
        { icon: Shield, title: 'Seguridad', description: 'Cumplimiento de estándares de seguridad gubernamentales' },
        { icon: Target, title: 'Escalabilidad', description: 'Arquitectura preparada para el crecimiento futuro' }
      ],
      description: 'El sistema MOPT modernizó procesos administrativos críticos del ministerio, mejorando significativamente la eficiencia operativa. La arquitectura implementada proporciona una base sólida para futuras expansiones. La contribución fue determinante en la validación de calidad y en el diseño inicial de la experiencia de usuario.'
    },

    learnings: [
      {
        icon: '🏢',
        title: 'Desarrollo Empresarial',
        items: [
          'Trabajo en entornos corporativos de alta exigencia',
          'Integración entre sistemas legacy y modernos',
          'Estándares de código a nivel empresarial',
          'Documentación técnica institucional'
        ]
      },
      {
        icon: '🔒',
        title: 'Seguridad y Cumplimiento',
        items: [
          'Seguridad en sistemas críticos de información',
          'Normativas y regulaciones gubernamentales',
          'Auditorías y logging de transacciones',
          'Manejo seguro de datos sensibles'
        ]
      },
      {
        icon: '👥',
        title: 'Colaboración Profesional',
        items: [
          'Comunicación efectiva con stakeholders',
          'Trabajo en equipos multidisciplinarios',
          'Adaptación a nuevos entornos y metodologías',
          'Prácticas profesionales de desarrollo'
        ]
      }
    ], 
    
    conclusion: [
      'La participación en el Sistema MOPT representó una experiencia de alto valor en desarrollo profesional a escala empresarial, demostrando capacidad de operar bajo estándares rigurosos de calidad, seguridad y documentación.',
      'El proyecto fortaleció competencias en desarrollo backend robusto, diseño centrado en el usuario para contextos críticos y aseguramiento de calidad integral, evidenciando cómo los principios de clean code y arquitectura escalable se aplican en sistemas reales de producción.'
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  MARQUESA - Tienda de Regalos
  // ─────────────────────────────────────────────────────────────
  marquesa: {
    id: 'marquesa',
    title: 'Marquesa',
    subtitle: 'Tienda de Regalos Personalizados · MERN Stack + React Native / Expo',
    isProfessional: false,
    headerBadge: { icon: Package, text: 'Proyecto Académico – Emprendimiento Real' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Expo'],
    githubLink: 'https://github.com/xxDianaPadilla/Marquesa',
    logo: marquesaLogo,

    description: {
      intro: [
        'Marquesa es una plataforma e-commerce completa para una tienda de regalos personalizados, desarrollada sobre arquitectura MERN con una aplicación móvil en React Native/Expo. El proyecto digitaliza un emprendimiento real dedicado a arreglos florales, gift boxes, cuadros decorativos y tarjetas personalizadas.',
        'El desarrollo abarcó el stack completo: desde la API REST en Node.js/Express hasta la interfaz web en React y la aplicación móvil en Expo. El sistema integra personalización de productos, agendamiento de entregas, rastreo de pedidos, galería, reseñas, blog y un panel administrativo con estadísticas del negocio.'
      ],
      context: [
        { icon: Package, title: 'Tipo', description: 'E-commerce para emprendimiento real' },
        { icon: Layers, title: 'Plataformas', description: 'Web (React) + Móvil (React Native / Expo)' },
        { icon: Users, title: 'Equipo', description: '5 estudiantes · Instituto Técnico Ricaldone' }
      ]
    },

    techStack: [
      { icon: '⚛️', name: 'React.js', description: 'Interfaz web dinámica con componentes reutilizables' },
      { icon: '📱', name: 'React Native + Expo', description: 'App móvil multiplataforma iOS/Android' },
      { icon: '🟢', name: 'Node.js', description: 'Runtime del servidor backend' },
      { icon: '🚂', name: 'Express.js', description: 'API RESTful y gestión de rutas HTTP' },
      { icon: '🍃', name: 'MongoDB', description: 'Base de datos NoSQL para productos y pedidos' },
      { icon: '🔐', name: 'JWT + bcryptjs', description: 'Autenticación segura y cifrado de contraseñas' },
      { icon: '☁️', name: 'Cloudinary', description: 'Almacenamiento y gestión de imágenes en la nube' },
      { icon: '📧', name: 'Nodemailer', description: 'Notificaciones y correos electrónicos automatizados' }
    ],

    challenges: [
      {
        title: 'Personalización Dinámica de Productos',
        problem: 'Los clientes requieren configurar múltiples atributos por producto (estilo, papel, colores, dedicatorias, presentación) con precios que varían según selección, manteniendo la lógica consistente entre web y móvil.',
        solution: 'Se diseñó un esquema flexible en MongoDB para opciones de personalización y un componente configurador reutilizable en React/React Native que refleja cambios en tiempo real con cálculo dinámico de precio.'
      },
      {
        title: 'Sincronización Web y Móvil',
        problem: 'Mantener paridad funcional entre la app web y la móvil compartiendo la misma API, con flujos adaptados a cada plataforma sin duplicar lógica de negocio.',
        solution: 'Toda la lógica se centralizó en la API REST de Express. Tanto React como React Native consumen los mismos endpoints, con adaptaciones de UI específicas por plataforma usando componentes nativos de Expo.'
      },
      {
        title: 'Agendamiento con Validación de Anticipación',
        problem: 'El flujo de compra exige agendar fecha de entrega con mínimo tres días de anticipación, validando disponibilidad en tiempo real y enviando confirmaciones automáticas al cliente.',
        solution: 'Se implementaron validaciones de fecha en el backend con Express, se integró un DateTimePicker nativo en ambas plataformas y se automatizó el envío de correos de confirmación con Nodemailer al registrar cada pedido.'
      }
    ],

    impact: {
      metrics: [
        { icon: Globe, title: 'Digitalización', description: 'Emprendimiento físico trasladado íntegramente al entorno digital' },
        { icon: Smartphone, title: 'Multiplataforma', description: 'Web + app móvil con experiencia de usuario unificada' },
        { icon: Zap, title: 'Automatización', description: 'Pedidos, notificaciones y seguimiento completamente automatizados' },
        { icon: TrendingUp, title: 'Escalabilidad', description: 'Arquitectura preparada para el crecimiento del negocio' }
      ],
      description: 'Marquesa representa la digitalización completa de un emprendimiento real, demostrando capacidad de llevar una solución desde cero hasta producción. El proyecto integra e-commerce moderno con personalización avanzada, gestión de inventario y experiencia de usuario consistente en dos plataformas, siendo evidencia concreta de trabajo en equipo bajo metodologías reales de desarrollo de software.'
    },

    learnings: [
      {
        icon: '📱',
        title: 'Desarrollo Móvil con Expo',
        items: [
          'React Native con arquitectura de navegación compleja',
          'Componentes nativos: DateTimePicker, AsyncStorage, Slider',
          'Tipografías y splash screens personalizados con Expo',
          'Efectos visuales nativos con Expo Blur',
          'Navegación por tabs y stacks con React Navigation'
        ]
      },
      {
        icon: '🛒',
        title: 'E-Commerce Completo',
        items: [
          'Flujos de compra y personalización de productos',
          'Métodos de pago: efectivo, transferencia, crédito y débito',
          'Sistema de rastreo y estados de pedidos',
          'Panel administrativo con estadísticas del negocio',
          'Galería, reseñas de clientes y blog integrados'
        ]
      },
      {
        icon: '☁️',
        title: 'Infraestructura Cloud',
        items: [
          'Gestión de imágenes con Cloudinary y Multer',
          'Variables de entorno y configuración segura con dotenv',
          'Tokens seguros con crypto y JWT',
          'Correos automatizados con Nodemailer',
          'Estructura de proyecto MERN escalable y modular'
        ]
      }
    ],

    gallery: [
      {
        src: marquesaLogin,
        alt: 'Marquesa – Pantalla de Login',
        caption: 'Pantalla de inicio de sesión de la app móvil Marquesa'
      },
      {
        src: marquesaHome,
        alt: 'Marquesa – Vista Principal Móvil',
        caption: 'Vista principal de la aplicación móvil'
      },
      {
        src: marquesaChat,
        alt: 'Marquesa – Panel Administrativo',
        caption: 'Panel administrativo con gestión de mensajes y atención al cliente'
      }
    ],

    conclusion: [
      'Marquesa trasciende el ámbito académico al resolver necesidades reales de un emprendimiento en crecimiento. La combinación de plataforma web y app móvil sobre la misma API demuestra dominio integral del stack MERN y capacidad de desarrollo multiplataforma.',
      'El proyecto fortaleció competencias de trabajo en equipo, gestión de sistemas con múltiples capas de complejidad y entrega de valor concreto a un cliente real. La experiencia de colaborar entre cinco desarrolladores con roles de frontend y backend complementarios fue determinante para el crecimiento profesional del equipo.'
    ]
  },

  homeclick: {
    id: 'homeclick',
    title: 'HomeClick',
    subtitle: 'Plataforma Inmobiliaria Full-Stack · MERN Stack',
    isProfessional: false,
    headerBadge: { icon: Home, text: 'Proyecto Académico' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'E-Commerce'],
    githubLink: 'https://github.com/xxDianaPadilla/homeClick',
    logo: homeclickLogo,

    description: {
      intro: [
        'HomeClick es una plataforma inmobiliaria full-stack que conecta compradores con propiedades de manera intuitiva y moderna. El proyecto demuestra dominio completo de la arquitectura MERN, con énfasis en escalabilidad y experiencia de usuario.',
        'Se lideró el desarrollo frontend y se diseñó la estrategia de integración con el backend, implementando patrones modernos de React y garantizando una experiencia fluida entre cliente y servidor.'
      ],
      context: [
        { icon: Code, title: 'Stack', description: 'React · Node.js · Express · MongoDB' },
        { icon: Globe, title: 'Tipo', description: 'E-commerce inmobiliario full-stack' },
        { icon: Users, title: 'Enfoque', description: 'Experiencia de usuario e integración de sistemas' }
      ]
    },

    techStack: [
      { icon: '⚛️', name: 'React', description: 'UI dinámica y componentes reutilizables' },
      { icon: '🔀', name: 'React Router', description: 'Navegación SPA' },
      { icon: '🗺️', name: 'Leaflet', description: 'Mapas interactivos' },
      { icon: '🟢', name: 'Node.js', description: 'Runtime backend' },
      { icon: '🚂', name: 'Express', description: 'Framework para API REST' },
      { icon: '🍃', name: 'MongoDB', description: 'Base de datos NoSQL' },
      { icon: '🔐', name: 'JWT', description: 'Autenticación segura' },
      { icon: '📧', name: 'Nodemailer', description: 'Sistema de correos electrónicos' }
    ],

    challenges: [
      {
        title: 'Validación Robusta Cliente-Servidor',
        problem: 'Garantizar la integridad de datos en formularios complejos con múltiples campos interdependientes entre cliente y servidor.',
        solution: 'Se implementó React Hook Form en el frontend con validaciones en tiempo real y validaciones server-side duplicadas en Express, junto con middleware de validación reutilizable.'
      },
      {
        title: 'Escalabilidad del Catálogo',
        problem: 'La aplicación debía manejar miles de propiedades sin degradar el rendimiento en búsquedas y filtros.',
        solution: 'Se implementó paginación en MongoDB, índices en campos de búsqueda frecuente, lazy loading en el frontend y caché inteligente mediante React hooks.'
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
        { icon: Zap, title: 'Rendimiento', description: 'Carga optimizada con paginación inteligente' },
        { icon: Heart, title: 'UX', description: 'Interfaz intuitiva y completamente responsiva' },
        { icon: Shield, title: 'Seguridad', description: 'Autenticación y validaciones robustas en múltiples capas' }
      ],
      description: 'HomeClick demuestra arquitectura MERN profesional aplicada a un caso de uso real de e-commerce. La plataforma es completamente funcional, escalable y lista para producción. El proyecto evidencia capacidad de liderar el desarrollo full-stack, tomar decisiones arquitectónicas y entregar aplicaciones de calidad en entornos colaborativos.'
    },

    learnings: [
      {
        icon: '⚛️',
        title: 'React Avanzado',
        items: [
          'SPAs complejas con múltiples rutas',
          'State management con hooks y Context API',
          'Optimización de rendimiento (lazy loading, memoization)',
          'Integración con APIs REST',
          'Gestión de formularios con validaciones robustas'
        ]
      },
      {
        icon: '🚀',
        title: 'Backend con Node.js',
        items: [
          'APIs RESTful escalables',
          'Autenticación segura con JWT',
          'Validaciones en múltiples capas',
          'Manejo estructurado de errores',
          'Arquitectura modular y escalable'
        ]
      },
      {
        icon: '🗄️',
        title: 'Bases de Datos NoSQL',
        items: [
          'Diseño de esquemas con Mongoose',
          'Queries optimizadas para alto rendimiento',
          'Índices para búsquedas eficientes',
          'Relaciones entre colecciones',
          'Transacciones y atomicidad'
        ]
      }
    ],

    gallery: [
      {
        src: homeclickInicio,
        alt: 'HomeClick – Pantalla de Inicio',
        caption: 'Vista principal con catálogo de propiedades y búsqueda avanzada'
      },
      {
        src: homeclickLogin,
        alt: 'HomeClick – Inicio de Sesión',
        caption: 'Pantalla de autenticación con JWT'
      },
      {
        src: homeclickcatalogo,
        alt: 'HomeClick – Catálogo de Propiedades',
        caption: 'Catálogo de propiedades disponibles en HomeClick'
      }
    ],

    conclusion: [
      'HomeClick es evidencia de la capacidad para arquitectar y ejecutar aplicaciones full-stack modernas de extremo a extremo. El proyecto integra todas las competencias necesarias para el desarrollo web profesional: frontend responsivo, backend robusto, base de datos escalable y prácticas de seguridad sólidas.',
      'El proceso brindó experiencia valiosa en ciclos completos de desarrollo, desde la definición de requisitos hasta el despliegue, incluyendo decisiones de arquitectura con impacto directo en la escalabilidad y mantenibilidad a largo plazo.'
    ]
  },

  isssSalud: {
    id: 'isssSalud',
    title: 'ISSS Salud',
    subtitle: 'Sistema Hospitalario Multiplataforma · Java + Kotlin + Oracle',
    isProfessional: false,
    headerBadge: { icon: Stethoscope, text: 'Proyecto Académico Avanzado' },
    tags: ['Java', 'Kotlin', 'Android', 'Oracle Database', 'Desktop App'],
    githubLinkJ: 'https://github.com/Xx-pocasangre-xX/ISSS_Salud-Java',
    githubLinkA: 'https://github.com/xxDianaPadilla/ISSS-Salud',
    logo: issLogo,

    description: {
      intro: [
        'ISSS Salud es un ecosistema integral de gestión hospitalaria multiplataforma concebido para el Instituto Salvadoreño del Seguro Social. El sistema integra una aplicación de escritorio para personal médico y administrativo con una aplicación móvil para pacientes, compartiendo una base de datos Oracle centralizada.',
        'Se lideró la concepción del proyecto, el diseño de la arquitectura multiplataforma y el desarrollo de interfaces en ambas plataformas. El sistema gestiona procesos críticos de salud con énfasis en seguridad de datos, sincronización en tiempo real y experiencia de usuario optimizada para contextos médicos.'
      ],
      context: [
        { icon: Stethoscope, title: 'Dominio', description: 'Gestión hospitalaria integral' },
        { icon: Layers, title: 'Arquitectura', description: 'Desktop + Mobile + Base de datos centralizada' },
        { icon: Users, title: 'Usuarios', description: 'Personal médico, administrativo y pacientes' }
      ]
    },

    techStack: [
      { icon: '☕', name: 'Java SE', description: 'Lógica desktop y backend' },
      { icon: '🎨', name: 'Java Swing', description: 'Interfaz de usuario de escritorio' },
      { icon: '🔧', name: 'Apache Ant', description: 'Herramienta de build' },
      { icon: '🟣', name: 'Kotlin', description: 'Aplicación móvil Android' },
      { icon: '📱', name: 'Android Studio', description: 'IDE para desarrollo móvil' },
      { icon: '🗄️', name: 'Oracle Database', description: 'Base de datos empresarial' },
      { icon: '🔗', name: 'JDBC', description: 'Conectividad con base de datos' },
      { icon: '📧', name: 'JavaMail API', description: 'Sistema de notificaciones por correo' }
    ],

    challenges: [
      {
        title: 'Sincronización Multiplataforma',
        problem: 'Mantener consistencia de datos entre la aplicación desktop, la móvil y la base de datos con usuarios que pueden operar offline o bajo conexiones inestables.',
        solution: 'Se implementaron transacciones ACID en Oracle, sincronización inteligente en Kotlin con corrutinas para detección de cambios, y pooling de conexiones en Java para optimización de recursos.'
      },
      {
        title: 'Control de Concurrencia',
        problem: 'El acceso simultáneo de múltiples usuarios a expedientes médicos críticos requería control transaccional estricto sin generar bloqueos que afectaran el rendimiento.',
        solution: 'Se implementaron transacciones en Oracle con niveles de aislamiento apropiados, versioning optimista en operaciones seleccionadas y locks explícitos en datos críticos, complementados con logging exhaustivo para auditoría.'
      },
      {
        title: 'Seguridad de Datos Médicos',
        problem: 'Proteger información personal de salud (PII) sensible contra accesos no autorizados, en cumplimiento con regulaciones de privacidad médica.',
        solution: 'Encriptación SHA-256 de contraseñas, control granular de permisos por rol, validación de acceso en cada operación, sanitización de inputs y registro de accesos a datos sensibles.'
      }
    ],

    impact: {
      metrics: [
        { icon: Zap, title: 'Eficiencia', description: 'Procesos hospitalarios optimizados y completamente digitalizados' },
        { icon: Heart, title: 'Comunicación', description: 'Mejora sustancial en la relación médico-paciente' },
        { icon: FileText, title: 'Digitalización', description: 'Expedientes médicos íntegramente en formato digital' },
        { icon: Shield, title: 'Seguridad', description: 'Datos médicos protegidos y auditables en todo momento' }
      ],
      description: 'ISSS Salud demuestra capacidad de diseñar sistemas complejos multiplataforma que abordan desafíos reales del sector salud. La arquitectura escala para cientos de usuarios simultáneos, mantiene la integridad de datos críticos y proporciona experiencias optimizadas para distintos tipos de usuarios. El proyecto valida el dominio de tecnologías enterprise (Java, Kotlin, Oracle) aplicadas en contextos regulados.'
    },

    learnings: [
      {
        icon: '☕',
        title: 'Desarrollo Multiplataforma',
        items: [
          'Arquitectura coherente entre aplicaciones desktop y móvil',
          'Java Swing para interfaces de escritorio robustas',
          'Android/Kotlin nativo con patrones modernos',
          'Sincronización eficiente entre plataformas',
          'Gestión del ciclo de vida en múltiples contextos'
        ]
      },
      {
        icon: '🗄️',
        title: 'Sistemas Enterprise',
        items: [
          'Oracle Database a escala profesional',
          'Transacciones ACID y control de concurrencia',
          'Arquitectura de datos orientada a la consistencia',
          'Optimización de queries complejas',
          'Auditoría y logging de operaciones críticas'
        ]
      },
      {
        icon: '🔒',
        title: 'Seguridad en Entornos Regulados',
        items: [
          'Protección de datos médicos sensibles',
          'Control granular de accesos (RBAC)',
          'Encriptación y hashing de contraseñas',
          'Auditoría de operaciones',
          'Cumplimiento de normativas de privacidad'
        ]
      }
    ],

    gallery: [
      {
        src: isssInicio,
        alt: 'ISSS Salud – Pantalla de Inicio',
        caption: 'Pantalla de inicio de la aplicación de escritorio'
      },
      {
        src: isssInterfaz,
        alt: 'ISSS Salud – Gestión de Pacientes',
        caption: 'Interfaz de gestión y búsqueda de pacientes'
      },
      {
        src: isssUso,
        alt: 'ISSS Salud – Expediente Médico',
        caption: 'Vista detallada del expediente médico del paciente'
      }
    ],

    conclusion: [
      'ISSS Salud es el proyecto de mayor complejidad del portafolio, evidenciando capacidad de liderar el diseño y desarrollo de sistemas en dominios regulados. Integra tecnologías enterprise (Java, Kotlin, Oracle), patrones arquitectónicos avanzados y prácticas de seguridad críticas para aplicaciones del sector salud.',
      'El proceso proporcionó una comprensión profunda de sistemas multiplataforma, control de concurrencia en bases de datos y diseño de aplicaciones que operan con datos altamente sensibles, fortaleciendo la preparación para entornos empresariales donde la confiabilidad y la seguridad son requisitos no negociables.'
    ]
  },

  hospitalBloom: {
    id: 'hospitalBloom',
    title: 'Hospital Bloom',
    subtitle: 'Sistema Hospitalario Pediátrico · Hospital Nacional de Niños',
    isProfessional: false,
    headerBadge: { icon: Heart, text: 'Proyecto Académico' },
    tags: ['UI/UX Design', 'Frontend', 'Interfaz Médica', 'Pediatría'],
    githubLink: 'https://github.com/Xx-pocasangre-xX/Hospital-Bloom',
    confidentialNotice: 'Proyecto académico – Código orientado a demostración de UX/UI',
    logo: bloomLogo,

    description: {
      intro: [
        'Hospital Bloom es un sistema especializado en gestión hospitalaria pediátrica, desarrollado con énfasis en diseño de interfaz optimizado para entornos críticos de salud infantil. El proyecto demuestra la capacidad de diseñar UX/UI para contextos sensibles donde claridad, accesibilidad y rapidez son factores determinantes.',
        'La contribución principal se centró en el diseño y desarrollo frontend con enfoque en experiencia del usuario dentro de un entorno hospitalario pediátrico. El sistema facilita la gestión de pacientes infantiles, medicamentos y procesos clínicos de forma intuitiva y eficiente.'
      ],
      context: [
        { icon: Heart, title: 'Especialidad', description: 'Gestión hospitalaria pediátrica' },
        { icon: Building, title: 'Institución', description: 'Hospital Nacional de Niños Benjamín Bloom' },
        { icon: Palette, title: 'Enfoque', description: 'UX/UI para contexto médico especializado' }
      ]
    },

    techStack: [
      { icon: '⚛️', name: 'React', description: 'Frontend dinámico y modular' },
      { icon: '🎨', name: 'Tailwind CSS', description: 'Estilos responsive y utilitarios' },
      { icon: '🔀', name: 'React Router', description: 'Navegación entre vistas' },
      { icon: '🎭', name: 'Custom UI', description: 'Componentes diseñados para contexto médico' },
      { icon: '🔗', name: 'API Integration', description: 'Integración con backend' }
    ],

    challenges: [
      {
        title: 'Diseño para Contexto Crítico',
        problem: 'Diseñar una interfaz clara, rápida y con margen mínimo de error en situaciones donde los segundos son críticos y el nivel de estrés del operador es elevado.',
        solution: 'Se aplicaron principios de human-centered design, flujos de trabajo altamente optimizados, elementos visuales de alta legibilidad, validaciones preventivas y confirmaciones explícitas en acciones críticas.'
      },
      {
        title: 'UX para Múltiples Perfiles de Usuario',
        problem: 'El sistema debía ser igualmente usable por médicos expertos (que priorizan velocidad) y por personal administrativo (que requiere claridad y guía).',
        solution: 'Se diseñaron roles diferenciados con interfaces adaptadas a cada perfil, atajos para usuarios avanzados y tooltips contextuales para nuevos operadores.'
      },
      {
        title: 'Especialización Pediátrica',
        problem: 'Los procesos de atención pediátrica difieren significativamente de la atención general: dosificaciones, medicamentos y protocolos específicos.',
        solution: 'Se trabajó en colaboración con personal médico para comprender los flujos específicos de pediatría, implementando validaciones especializadas y workflows adaptados a esta área clínica.'
      }
    ],

    impact: {
      metrics: [
        { icon: Zap, title: 'Usabilidad', description: 'Interfaz intuitiva y eficiente para el personal clínico' },
        { icon: Heart, title: 'Accesibilidad', description: 'Diseño inclusivo para múltiples perfiles de usuario' },
        { icon: Target, title: 'Eficiencia', description: 'Flujos optimizados para el entorno médico' },
        { icon: Award, title: 'Especialización', description: 'Adaptación específica a los requerimientos de pediatría' }
      ],
      description: 'Hospital Bloom valida la capacidad de diseñar UX/UI para contextos altamente sensibles y regulados. El proyecto demuestra comprensión profunda de cómo el diseño impacta directamente en la eficiencia y seguridad dentro de entornos críticos. La especialización en pediatría evidencia adaptabilidad a dominios específicos y requerimientos únicos.'
    },

    learnings: [
      {
        icon: '🎨',
        title: 'UX/UI para Contextos Médicos',
        items: [
          'Diseño orientado a entornos de alta criticidad',
          'Principios de human-centered design',
          'Accesibilidad en contextos médicos regulados',
          'Flujos optimizados para eficiencia operativa',
          'Validaciones preventivas para reducción de errores'
        ]
      },
      {
        icon: '👶',
        title: 'Dominio Pediátrico',
        items: [
          'Procesos específicos de atención infantil',
          'Requerimientos particulares de pediatría',
          'Comunicación técnica con profesionales médicos',
          'Consideraciones de seguridad en atención infantil',
          'Adaptación a protocolos clínicos especializados'
        ]
      },
      {
        icon: '🎯',
        title: 'Diseño Contextual',
        items: [
          'Investigación con usuarios reales',
          'Iteración basada en retroalimentación médica',
          'Prototipado y pruebas de usabilidad',
          'Diseño de interacciones en flujos críticos',
          'Validación de procesos clínicos en la interfaz'
        ]
      }
    ],

    gallery: [
      {
        src: bloomInicio,
        alt: 'Hospital Bloom – Inicio',
        caption: 'Pantalla de inicio del sistema hospitalario pediátrico'
      },
      {
        src: bloomInterfaz,
        alt: 'Hospital Bloom – Gestión de Pacientes',
        caption: 'Interfaz de gestión de pacientes pediátricos'
      },
      {
        src: bloomMedicamentos,
        alt: 'Hospital Bloom – Control de Medicamentos',
        caption: 'Sistema de control y dispensación de medicamentos pediátricos'
      }
    ],

    conclusion: [
      'Hospital Bloom demuestra la capacidad de diseñar interfaces para contextos médicos especializados, priorizando claridad, seguridad y eficiencia en un entorno donde la experiencia del usuario impacta directamente en la calidad de atención.',
      'La colaboración estrecha con profesionales médicos, la comprensión de dominios especializados y la traducción de requerimientos complejos en interfaces limpias e intuitivas fueron los aprendizajes centrales de este proyecto, reforzando la capacidad de diseñar soluciones adaptadas a distintos contextos y perfiles de usuario.'
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  SISTEMA ERP - Famolcas S.A. de C.V.
  // ─────────────────────────────────────────────────────────────
  erp: {
    id: 'erp',
    title: 'Sistema ERP Empresarial',
    subtitle: 'Famolcas S.A. de C.V. (Lido) · Marzo 2026 – Presente',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional – Empleo Actual' },
    tags: ['C#', '.NET', 'DevExpress XAF', 'XPO', 'PostgreSQL', 'WPF', 'Blazor'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial — repositorio no disponible públicamente',
    logo: null,

    description: {
      intro: [
        'Sistema ERP empresarial de gestión integral desarrollado con DevExpress XAF y XPO sobre .NET. El sistema centraliza los procesos comerciales, contables y operativos de la empresa, cubriendo módulos de Facturación, Cuentas por Cobrar, Punto de Venta (POS) y control de caja.',
        'Participación activa en el diseño, implementación y mantenimiento de múltiples módulos del sistema. El desarrollo abarca tanto interfaces de escritorio en WPF como módulos web en Blazor, integrando lógica de negocio compleja con acceso a datos mediante XPO sobre PostgreSQL.'
      ],
      context: [
        { icon: Building, title: 'Empresa', description: 'Famolcas S.A. de C.V. (Lido)' },
        { icon: Calendar, title: 'Período', description: 'Marzo 2025 – Presente' },
        { icon: Layers, title: 'Arquitectura', description: 'Desktop (WPF) + Web (Blazor) + ORM (XPO)' }
      ]
    },

    techStack: [
      { icon: '💜', name: 'C# / .NET', description: 'Lenguaje y plataforma principal' },
      { icon: '🧩', name: 'DevExpress XAF', description: 'Framework ERP empresarial' },
      { icon: '🔗', name: 'XPO ORM', description: 'Mapeo objeto-relacional y acceso a datos' },
      { icon: '🖥️', name: 'WPF', description: 'Módulos de escritorio (Caja, POS)' },
      { icon: '🌐', name: 'Blazor', description: 'Módulos web empresariales' },
      { icon: '🐘', name: 'PostgreSQL', description: 'Base de datos principal' },
      { icon: '⚙️', name: 'Visual Studio', description: 'IDE principal de desarrollo' },
      { icon: '🏗️', name: 'Dapper', description: 'Consultas SQL de alto rendimiento' }
    ],

    challenges: [
      {
        title: 'Lógica de Facturación y Tributación',
        problem: 'La implementación de facturación electrónica requería gestionar correctamente múltiples tipos de montos (gravado, exento, no sujeto) y el cálculo de IVA conforme a normativas fiscales locales.',
        solution: 'Se desarrolló una capa de cálculo tributario dentro del modelo de dominio XPO, garantizando consistencia en los totales de cada documento fiscal independientemente de los descuentos aplicados.'
      },
      {
        title: 'Módulos de Apertura y Corte de Caja',
        problem: 'El control de caja exigía registrar y cuadrar múltiples formas de pago, gestionar diferencias y generar reportes de cierre con trazabilidad completa de las transacciones del turno.',
        solution: 'Se implementaron los flujos de apertura y corte en WPF con validaciones en tiempo real, integración directa con el módulo POS y generación de reportes de cierre auditables.'
      },
      {
        title: 'Extensión del Modelo de Datos',
        problem: 'El sistema requería incorporar nuevas entidades de negocio (rutas, impulsadoras, canales de venta, sucursales) sin romper la integridad del modelo existente ni afectar módulos en producción.',
        solution: 'Se diseñaron y registraron nuevas clases de negocio en XPO siguiendo las convenciones del proyecto, con relaciones correctamente tipadas y migración transparente del esquema en base de datos.'
      }
    ],

    impact: {
      metrics: [
        { icon: TrendingUp, title: 'Cobertura Modular', description: 'Facturación, CxC, POS y Caja integrados en un solo sistema' },
        { icon: Shield, title: 'Cumplimiento Fiscal', description: 'Cálculos tributarios alineados a normativa local' },
        { icon: Zap, title: 'Eficiencia Operativa', description: 'Automatización de procesos comerciales y contables' },
        { icon: Database, title: 'Integridad de Datos', description: 'Modelo de dominio robusto con XPO sobre PostgreSQL' }
      ],
      description: 'El sistema ERP centraliza y automatiza los procesos comerciales críticos de la empresa, reduciendo la carga operativa manual y mejorando la trazabilidad financiera. La participación abarca desde la arquitectura del modelo de datos hasta la implementación de interfaces de usuario complejas, tanto en escritorio como en web.'
    },

    learnings: [
      {
        icon: '🧩',
        title: 'DevExpress XAF / XPO',
        items: [
          'Arquitectura de aplicaciones empresariales con XAF',
          'Modelado de dominio y relaciones con XPO ORM',
          'Controladores y vistas personalizadas en Blazor',
          'Validaciones y lógica de negocio a nivel de entidad',
          'Convenciones de proyecto y extensión del modelo existente'
        ]
      },
      {
        icon: '💼',
        title: 'Módulos ERP',
        items: [
          'Facturación electrónica y cálculo de IVA',
          'Cuentas por Cobrar y flujos de cobro',
          'Punto de Venta (POS) integrado',
          'Apertura y Corte de Caja en WPF',
          'Reportes y trazabilidad de transacciones'
        ]
      },
      {
        icon: '🏗️',
        title: 'Arquitectura Empresarial',
        items: [
          'Extensión de modelos de datos en producción',
          'Patrones de diseño aplicados en .NET',
          'Integración desktop (WPF) y web (Blazor)',
          'Consultas optimizadas con Dapper y PostgreSQL',
          'Trabajo bajo estándares de código corporativos'
        ]
      }
    ],

    conclusion: [
      'El Sistema ERP representa el proyecto de mayor complejidad técnica en el ámbito profesional actual, involucrando el desarrollo sostenido de módulos críticos para la operación comercial de la empresa.',
      'La experiencia acumulada en DevExpress XAF, modelado de dominio con XPO y desarrollo de interfaces tanto en WPF como en Blazor constituye una base sólida para el trabajo en sistemas empresariales de alto volumen y exigencia.'
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  APP PUNTEO - Famolcas S.A. de C.V.
  // ─────────────────────────────────────────────────────────────
  appPunteo: {
    id: 'appPunteo',
    title: 'App Punteo',
    subtitle: 'Famolcas S.A. de C.V. (Lido) · 2026 – Presente',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional – Empleo Actual' },
    tags: ['Kotlin', 'Android SDK', 'MVVM', 'Coroutines', 'OkHttp', 'GPS'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial — repositorio no disponible públicamente',
    logo: null,

    description: {
      intro: [
        'Aplicación Android nativa desarrollada en Kotlin para la recopilación geolocalizada de información de clientes en campo. La app conecta en tiempo real con la ERPAPI corporativa, permitiendo al equipo comercial registrar datos de clientes junto con su ubicación GPS durante visitas presenciales.',
        'El desarrollo abarcó la arquitectura completa de la aplicación bajo el patrón MVVM, implementando formularios multipasos, captura automática de coordenadas, sincronización con la API REST y manejo de datos en modo offline para garantizar operación en zonas de baja conectividad.'
      ],
      context: [
        { icon: Building, title: 'Empresa', description: 'Famolcas S.A. de C.V. (Lido)' },
        { icon: Smartphone, title: 'Plataforma', description: 'Android nativo (Kotlin)' },
        { icon: MapPin, title: 'Funcionalidad clave', description: 'Geolocalización y registro de clientes en campo' }
      ]
    },

    techStack: [
      { icon: '🟣', name: 'Kotlin', description: 'Lenguaje principal de desarrollo' },
      { icon: '🤖', name: 'Android SDK', description: 'Plataforma móvil nativa' },
      { icon: '🏗️', name: 'MVVM', description: 'Arquitectura de la aplicación' },
      { icon: '⚡', name: 'Coroutines', description: 'Programación asíncrona' },
      { icon: '🌐', name: 'OkHttp', description: 'Cliente HTTP para consumo de API' },
      { icon: '📍', name: 'Google Location Services', description: 'Captura de coordenadas GPS' },
      { icon: '📋', name: 'Fragments', description: 'Formularios multipasos' },
      { icon: '💾', name: 'SQLite', description: 'Almacenamiento local offline' }
    ],

    challenges: [
      {
        title: 'Formularios Multipasos con Estado Compartido',
        problem: 'El flujo de registro de clientes requería múltiples pasos en fragments independientes, manteniendo el estado del formulario consistente entre pantallas sin pérdida de datos.',
        solution: 'Se implementó un ViewModel compartido a nivel de Activity que actúa como fuente única de verdad para todos los fragments del flujo, garantizando persistencia del estado durante la navegación.'
      },
      {
        title: 'Captura GPS en Condiciones Variables',
        problem: 'La captura de ubicación debía funcionar con precisión aceptable en distintos entornos (interiores, zonas urbanas densas) sin bloquear la interfaz de usuario.',
        solution: 'Se integró Google Location Services con solicitud de ubicación de alta precisión de forma asíncrona mediante Coroutines, mostrando feedback visual al usuario durante la adquisición de señal.'
      },
      {
        title: 'Sincronización Offline con la API',
        problem: 'El equipo comercial opera en zonas con conectividad limitada, por lo que la app debía permitir el registro de datos sin conexión y sincronizar al recuperar señal.',
        solution: 'Se implementó almacenamiento local con SQLite como caché de registros pendientes, con un mecanismo de sincronización automática al detectar conectividad disponible mediante OkHttp.'
      }
    ],

    impact: {
      metrics: [
        { icon: MapPin, title: 'Geolocalización', description: 'Registro preciso de ubicación de clientes en campo' },
        { icon: Zap, title: 'Productividad', description: 'Digitalización del proceso de levantamiento de clientes' },
        { icon: Database, title: 'Integración', description: 'Sincronización directa con el sistema ERP corporativo' },
        { icon: Smartphone, title: 'Movilidad', description: 'Operación completa desde dispositivos Android en campo' }
      ],
      description: 'App Punteo digitaliza y agiliza el proceso de levantamiento de información de clientes, eliminando el registro manual en papel y garantizando trazabilidad geográfica de cada visita comercial. La integración con la ERPAPI permite que los datos capturados en campo estén disponibles en el sistema central en tiempo real.'
    },

    learnings: [
      {
        icon: '🟣',
        title: 'Android Nativo Avanzado',
        items: [
          'Arquitectura MVVM con ViewModel y LiveData',
          'Navegación entre fragments con estado compartido',
          'Programación asíncrona con Coroutines',
          'Consumo de APIs REST con OkHttp',
          'Manejo del ciclo de vida en Android'
        ]
      },
      {
        icon: '📍',
        title: 'Geolocalización y Servicios',
        items: [
          'Google Location Services en Android',
          'Permisos en tiempo de ejecución',
          'Captura asíncrona de coordenadas GPS',
          'Feedback visual durante adquisición de señal',
          'Manejo de escenarios sin señal GPS'
        ]
      },
      {
        icon: '🔄',
        title: 'Sincronización y Offline',
        items: [
          'Almacenamiento local con SQLite',
          'Caché de registros pendientes de sincronización',
          'Detección de conectividad en Android',
          'Sincronización automática al recuperar red',
          'Consistencia de datos entre local y servidor'
        ]
      }
    ],

    conclusion: [
      'App Punteo es un proyecto de impacto directo en la operación comercial de la empresa, resolviendo una necesidad real del equipo de campo mediante tecnología móvil nativa. El desarrollo consolidó competencias en Android/Kotlin, geolocalización e integración con APIs REST corporativas.',
      'La experiencia de construir una aplicación de uso diario en entornos de producción, con requerimientos de operación offline y sincronización en tiempo real, representa un avance significativo en el desarrollo de soluciones móviles empresariales.'
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  APP VENTAS - Famolcas S.A. de C.V.
  // ─────────────────────────────────────────────────────────────
  appVentas: {
    id: 'appVentas',
    title: 'App Ventas',
    subtitle: 'Famolcas S.A. de C.V. (Lido) · 2026 – Presente',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional – Empleo Actual' },
    tags: ['Kotlin', 'Android SDK', 'MVVM', 'Coroutines', 'OkHttp', 'ViewPager2'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial — repositorio no disponible públicamente',
    logo: null,

    description: {
      intro: [
        'Aplicación Android nativa desarrollada en Kotlin para la gestión de ventas en campo. La app permite al equipo comercial consultar catálogos de productos, registrar pedidos, gestionar clientes y sincronizar operaciones con el sistema ERP corporativo a través de la ERPAPI.',
        'El proyecto fue desarrollado bajo arquitectura MVVM con integración directa a la API REST corporativa, priorizando una experiencia de usuario fluida y la operación confiable en condiciones de conectividad variable propias del trabajo en campo.'
      ],
      context: [
        { icon: Building, title: 'Empresa', description: 'Famolcas S.A. de C.V. (Lido)' },
        { icon: Smartphone, title: 'Plataforma', description: 'Android nativo (Kotlin)' },
        { icon: ShoppingCart, title: 'Funcionalidad clave', description: 'Gestión de pedidos y catálogo de productos en campo' }
      ]
    },

    techStack: [
      { icon: '🟣', name: 'Kotlin', description: 'Lenguaje principal de desarrollo' },
      { icon: '🤖', name: 'Android SDK', description: 'Plataforma móvil nativa' },
      { icon: '🏗️', name: 'MVVM', description: 'Arquitectura de la aplicación' },
      { icon: '⚡', name: 'Coroutines', description: 'Operaciones asíncronas y llamadas a red' },
      { icon: '🌐', name: 'OkHttp', description: 'Cliente HTTP para consumo de API' },
      { icon: '📱', name: 'ViewPager2', description: 'Navegación por pestañas y flujos de pantallas' },
      { icon: '🧩', name: 'Fragments', description: 'Componentes de UI modulares y reutilizables' },
      { icon: '💾', name: 'SQLite', description: 'Persistencia local de datos' }
    ],

    challenges: [
      {
        title: 'Catálogo de Productos Dinámico',
        problem: 'El catálogo de productos varía según el cliente, la ruta y las condiciones comerciales, requiriendo carga dinámica desde la API con filtros en tiempo real.',
        solution: 'Se implementó un sistema de consulta parametrizada a la ERPAPI con caché local en SQLite, permitiendo navegación fluida del catálogo incluso con conectividad limitada.'
      },
      {
        title: 'Gestión de Pedidos Multiproducto',
        problem: 'El flujo de creación de pedidos requería agregar, editar y eliminar líneas de producto con recálculo automático de totales, descuentos y condiciones comerciales por cliente.',
        solution: 'Se diseñó un ViewModel de pedido con lista reactiva de ítems observada por la UI, garantizando recálculo automático ante cualquier cambio y validación previa al envío a la API.'
      },
      {
        title: 'Sincronización de Pedidos Pendientes',
        problem: 'Los vendedores operan en zonas sin cobertura estable, por lo que los pedidos registrados offline debían encolarse y sincronizarse automáticamente al recuperar conexión.',
        solution: 'Se implementó una cola de pedidos pendientes persistida en SQLite con un servicio de sincronización que monitorea el estado de red y envía los registros pendientes a la ERPAPI de forma ordenada.'
      }
    ],

    impact: {
      metrics: [
        { icon: ShoppingCart, title: 'Ventas en Campo', description: 'Digitalización completa del proceso de toma de pedidos' },
        { icon: Zap, title: 'Agilidad Comercial', description: 'Reducción del tiempo de registro y procesamiento de pedidos' },
        { icon: Database, title: 'Integración ERP', description: 'Pedidos disponibles en el sistema central en tiempo real' },
        { icon: Smartphone, title: 'Movilidad', description: 'Operación autónoma desde cualquier dispositivo Android' }
      ],
      description: 'App Ventas transforma el proceso comercial de campo, reemplazando registros manuales por una solución digital integrada directamente con el ERP corporativo. La aplicación mejora la velocidad de procesamiento de pedidos y reduce errores de captura, impactando positivamente en la eficiencia del equipo de ventas.'
    },

    learnings: [
      {
        icon: '🟣',
        title: 'Android Empresarial',
        items: [
          'Arquitectura MVVM con estado reactivo',
          'ViewPager2 para flujos de navegación complejos',
          'Fragments reutilizables y modulares',
          'Gestión de listas dinámicas con RecyclerView',
          'Validaciones de formulario en tiempo real'
        ]
      },
      {
        icon: '🔄',
        title: 'Integración y Sincronización',
        items: [
          'Consumo de APIs REST corporativas con OkHttp',
          'Cola de operaciones pendientes en SQLite',
          'Sincronización automática por estado de red',
          'Manejo de errores y reintentos en llamadas HTTP',
          'Consistencia de datos entre app y servidor'
        ]
      },
      {
        icon: '💼',
        title: 'Lógica de Negocio Comercial',
        items: [
          'Catálogos dinámicos por cliente y ruta',
          'Cálculo de totales, descuentos y condiciones',
          'Flujos de aprobación y estados de pedido',
          'Integración con rutas e impulsadoras',
          'Trazabilidad de operaciones comerciales'
        ]
      }
    ],

    conclusion: [
      'App Ventas es una solución de impacto directo en la fuerza comercial de la empresa, digitalizando un proceso crítico y conectándolo en tiempo real con el sistema ERP. El proyecto consolidó competencias en desarrollo Android empresarial, integración de APIs REST y gestión de estado complejo en aplicaciones de producción.',
      'La construcción de una app utilizada diariamente por el equipo de ventas en condiciones reales de campo refuerza la capacidad de entregar software robusto, confiable y orientado a resultados de negocio.'
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  ERPAPI - Famolcas S.A. de C.V.
  // ─────────────────────────────────────────────────────────────
  erpapi: {
    id: 'erpapi',
    title: 'ERPAPI',
    subtitle: 'Famolcas S.A. de C.V. (Lido) · 2026 – Presente',
    isProfessional: true,
    headerBadge: { icon: Briefcase, text: 'Proyecto Profesional – Empleo Actual' },
    tags: ['.NET Minimal APIs', 'C#', 'PostgreSQL', 'Dapper', 'REST API'],
    githubLink: null,
    confidentialNotice: 'Proyecto confidencial — repositorio no disponible públicamente',
    logo: null,

    description: {
      intro: [
        'API empresarial desarrollada con .NET Minimal APIs sobre PostgreSQL, diseñada para servir como capa de integración entre las aplicaciones móviles corporativas (App Punteo y App Ventas) y el sistema ERP central. La API centraliza la lógica de acceso a datos y expone endpoints REST optimizados para consumo desde dispositivos móviles.',
        'El desarrollo abarcó el diseño de la arquitectura de endpoints, implementación de la capa de acceso a datos con Dapper, gestión de contribuyentes y clientes, flujos de aprobación, geolocalización empresarial y autenticación de acceso para los clientes móviles.'
      ],
      context: [
        { icon: Building, title: 'Empresa', description: 'Famolcas S.A. de C.V. (Lido)' },
        { icon: Server, title: 'Tipo', description: 'API REST empresarial · Backend de apps móviles' },
        { icon: Database, title: 'Base de datos', description: 'PostgreSQL con acceso mediante Dapper' }
      ]
    },

    techStack: [
      { icon: '💜', name: '.NET Minimal APIs', description: 'Framework ligero para APIs REST en C#' },
      { icon: '🏗️', name: 'Dapper', description: 'Micro-ORM para consultas SQL de alto rendimiento' },
      { icon: '🐘', name: 'PostgreSQL', description: 'Base de datos relacional principal' },
      { icon: '🔐', name: 'Autenticación', description: 'Control de acceso para clientes móviles' },
      { icon: '📍', name: 'Geolocalización', description: 'Endpoints para registro y consulta de coordenadas' },
      { icon: '⚙️', name: 'Visual Studio', description: 'IDE principal de desarrollo' },
      { icon: '🚀', name: 'Postman', description: 'Testing y documentación de endpoints' },
      { icon: '🔄', name: 'REST', description: 'Arquitectura de comunicación cliente-servidor' }
    ],

    challenges: [
      {
        title: 'Diseño de Endpoints para Consumo Móvil',
        problem: 'Los clientes móviles operan en condiciones de red variable, por lo que los endpoints debían devolver respuestas compactas, rápidas y estructuradas para minimizar el consumo de datos y latencia.',
        solution: 'Se diseñaron endpoints con proyecciones específicas usando Dapper, devolviendo únicamente los campos necesarios para cada caso de uso móvil, reduciendo el payload y mejorando los tiempos de respuesta.'
      },
      {
        title: 'Gestión de Contribuyentes y Clientes',
        problem: 'El registro de clientes y contribuyentes requería validaciones de negocio complejas, incluyendo unicidad de identificadores fiscales y sincronización con el modelo de datos del ERP central.',
        solution: 'Se implementaron validaciones a nivel de API antes de la escritura en base de datos, con consultas Dapper parametrizadas que garantizan integridad referencial y consistencia con el esquema del ERP.'
      },
      {
        title: 'Endpoints de Geolocalización Empresarial',
        problem: 'Las apps móviles requieren registrar y consultar coordenadas geográficas de clientes de forma eficiente, asociando ubicaciones a entidades del modelo de negocio.',
        solution: 'Se diseñaron endpoints específicos para escritura y lectura de datos geográficos, almacenando coordenadas como campos estructurados en PostgreSQL con consultas optimizadas para recuperación por zona o entidad.'
      }
    ],

    impact: {
      metrics: [
        { icon: Server, title: 'Centralización', description: 'Capa única de acceso a datos para todas las apps móviles' },
        { icon: Zap, title: 'Rendimiento', description: 'Endpoints optimizados con Dapper para baja latencia' },
        { icon: Shield, title: 'Seguridad', description: 'Autenticación y control de acceso por cliente' },
        { icon: Globe, title: 'Integración', description: 'Puente entre apps móviles y sistema ERP central' }
      ],
      description: 'La ERPAPI actúa como columna vertebral de la movilidad empresarial de Famolcas, conectando las aplicaciones de campo con el sistema de gestión central. Su diseño orientado al consumo móvil garantiza respuestas rápidas y confiables, habilitando operaciones comerciales y de levantamiento de datos en tiempo real.'
    },

    learnings: [
      {
        icon: '💜',
        title: '.NET Minimal APIs',
        items: [
          'Diseño de APIs REST ligeras en C#',
          'Configuración de middleware y routing',
          'Manejo de respuestas y códigos HTTP',
          'Inyección de dependencias en Minimal APIs',
          'Estructura de proyecto escalable y mantenible'
        ]
      },
      {
        icon: '🏗️',
        title: 'Dapper y PostgreSQL',
        items: [
          'Consultas SQL parametrizadas de alto rendimiento',
          'Proyecciones específicas por caso de uso',
          'Transacciones y control de integridad',
          'Mapeo de resultados a modelos C#',
          'Optimización de queries para consumo móvil'
        ]
      },
      {
        icon: '🔄',
        title: 'Arquitectura de API Empresarial',
        items: [
          'Diseño de contratos REST para clientes móviles',
          'Validaciones de negocio en capa de API',
          'Endpoints de geolocalización estructurados',
          'Autenticación y control de acceso',
          'Testing de endpoints con Postman'
        ]
      }
    ],

    conclusion: [
      'La ERPAPI consolidó competencias en el diseño y desarrollo de APIs REST empresariales con .NET, Dapper y PostgreSQL, estableciendo una base técnica sólida para la integración entre sistemas móviles y plataformas de gestión corporativa.',
      'El proyecto evidencia la capacidad de diseñar soluciones backend orientadas a casos de uso específicos, priorizando rendimiento, seguridad y mantenibilidad en un contexto de producción real con múltiples clientes consumidores.'
    ]
  }
};

export default projectsData;