import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { 
  ArrowLeft, ExternalLink, Github, CheckCircle, Award
} from 'lucide-react';

// Import project data
import projectsData from '../data/projectsData.jsx';

const ProjectDetailsPage = ({ projectId: propProjectId }) => {
  const { projectId: paramProjectId } = useParams();
  const projectId = propProjectId || paramProjectId;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

   return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del proyecto */}
      <div className={`${project.isProfessional ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900' : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900'} text-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Volver a Proyectos
          </Link>
          
          {project.headerBadge && (
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-6">
              <project.headerBadge.icon size={20} />
              <span className="font-semibold">{project.headerBadge.text}</span>
            </div>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-blue-100 mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-blue-700/50 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Github size={20} />
                Ver Repositorio
              </a>
            ) : project.confidentialNotice && (
              <div className="bg-yellow-900/30 backdrop-blur-sm border border-yellow-700/50 rounded-lg p-4 inline-flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-yellow-100">
                  {project.confidentialNotice}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Descripción del proyecto */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Descripción del Proyecto
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
            {project.description.intro.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {project.description.context && (
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {project.description.context.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <item.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Galería de imágenes (si existe) */}
        {project.gallery && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Capturas del Proyecto
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  {image.caption && (
                    <div className="p-4">
                      <p className="text-sm text-gray-600">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Arquitectura (si existe) */}
        {project.architecture && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Arquitectura del Sistema
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.architecture.map((arch, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <arch.iconComponent className="text-blue-600" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{arch.title}</h3>
                      <p className="text-sm text-gray-600">{arch.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {arch.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Características principales (si existe) */}
        {project.features && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Características Principales
            </h2>
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 flex gap-4">
                  <feature.icon className="text-green-500 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stack Tecnológico */}
        {project.techStack && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Stack Tecnológico
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
              {typeof project.techStack === 'object' && !Array.isArray(project.techStack) ?  (
                // Stack con categorías
                <div className="space-y-8">
                  {Object.entries(project.techStack).map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize">
                        {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Base de Datos'}
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {techs.map((tech, index) => (
                          <div 
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                          >
                            <div className="text-3xl mb-2">{tech.icon}</div>
                            <h4 className="font-semibold text-gray-800 mb-1">{tech.name}</h4>
                            <p className="text-sm text-gray-600">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Stack simple
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-1">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Responsabilidades (si existe) */}
        {project.responsibilities && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Mis Responsabilidades y Logros
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.responsibilities.map((resp, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-br from-${resp.color}-500 to-${resp.color}-600 p-6 text-white`}>
                    <resp.icon size={40} className="mb-4" />
                    <h3 className="text-xl font-bold">{resp.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{resp.description}</p>
                    <ul className="space-y-2">
                      {resp.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className={`text-${resp.color}-500 mt-1 flex-shrink-0`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mi Rol (si existe) */}
        {project.myRole && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Mi Rol en el Proyecto
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.myRole.map((role, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <role.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{role.title}</h3>
                  <p className="text-gray-700 mb-4">{role.description}</p>
                  <ul className="space-y-2">
                    {role.contributions.map((contribution, cIndex) => (
                      <li key={cIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Desafíos y Soluciones */}
        {project.challenges && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Desafíos y Soluciones
            </h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{challenge.title}</h3>
                  <p className="text-gray-700 mb-4">{challenge.problem}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Solución:</p>
                    <p className="text-gray-700">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impacto del Proyecto */}
        {project.impact && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Impacto del Proyecto
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {project.impact.metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="text-blue-600" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{metric.title}</h4>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
              <p className="text-gray-700 leading-relaxed">{project.impact.description}</p>
            </div>
          </section>
        )}

        {/* Aprendizajes */}
        {project.learnings && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Aprendizajes y Crecimiento
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.learnings.map((learning, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="text-4xl mb-4">{learning.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{learning.title}</h3>
                  <ul className="space-y-3">
                    {learning.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonio (si existe) */}
        {project.testimonial && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Reconocimiento Profesional
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 lg:p-8 border-l-4 border-blue-500">
              <Award className="text-blue-600 mb-4" size={40} />
              <blockquote className="text-gray-700 text-lg italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="border-t border-blue-200 pt-4">
                <p className="font-semibold text-gray-800">{project.testimonial.author}</p>
                <p className="text-sm text-gray-600">{project.testimonial.position}</p>
              </div>
            </div>
          </section>
        )}

        {/* Conclusión */}
        {project.conclusion && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Conclusiones
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
              {project.conclusion.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Proyectos Relacionados */}
        {project.relatedProjects && (
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Otros Proyectos Destacados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.relatedProjects.map((relatedProject, index) => (
                <Link
                  key={index}
                  to={`/proyecto/${relatedProject.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="max-h-32 max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {relatedProject.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Ricardo Daniel García Pocasangre. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Xx-pocasangre-xX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:danielpocasangre2006@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a 
                href="tel:+50379890503"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailsPage;