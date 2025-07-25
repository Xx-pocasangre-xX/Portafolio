// Funcionalidad principal del portafolio
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS con tu clave pública
    emailjs.init("_-6CtTYyfKhOOpGcQ");
    
    // Configuración del menú móvil
    initMobileMenu();
    
    // Configuración del navbar con scroll
    initNavbarScroll();
    
    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Configurar formulario de contacto
    initContactForm();
    
    // Configurar navegación suave
    initSmoothScrolling();
    
    // Configurar botón de CV
    initCVButton();
    
    // Inicializar scroll reveal
    initScrollReveal();
});

// Configuración del menú móvil
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animación del botón hamburguesa
            const bars = document.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
                
                // Prevenir scroll del body cuando el menú está abierto
                document.body.style.overflow = 'hidden';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                
                // Restaurar scroll del body
                document.body.style.overflow = 'auto';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-links');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    mobileMenu.click();
                }
            });
        });
        
        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    mobileMenu.click();
                }
            }
        });
    }
}

// Configuración del navbar con efecto de scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efecto de transparencia
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Efecto de ocultación en scroll hacia abajo (opcional)
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Animaciones de las barras de habilidades
function initScrollAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillSection = document.querySelector('.skills-section');
    
    if (!skillSection) return;
    
    function animateSkillBars() {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        
        if (sectionPos < screenPos) {
            skillBars.forEach((bar, index) => {
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 200 + (index * 100)); // Retraso progresivo
            });
            
            window.removeEventListener('scroll', animateSkillBars);
        }
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Verificación inicial
}

// Configuración del formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación del lado del cliente
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showFormMessage('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Cambiar estado del botón
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        // Preparar datos para EmailJS
        const templateParams = {
            to_name: 'Ricardo Daniel',
            to_email: 'danielpocasangre2006@gmail.com',
            from_name: name,
            reply_to: email,
            message: message,
            subject: `Nuevo mensaje desde el portafolio de ${name}`
        };
        
        // Enviar email usando EmailJS
        emailjs.send('service_vk3jt2o', 'template_olte59d', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showFormMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                showFormMessage('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde o contáctame directamente.', 'error');
            })
            .finally(function() {
                // Restaurar botón
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
    
    // Función para mostrar mensajes del formulario
    function showFormMessage(message, type) {
        const className = type === 'success' ? 'form-message-success' : 'form-message-error';
        const bgColor = type === 'success' ? 'var(--success-color)' : 'var(--error-color)';
        
        formStatus.innerHTML = `
            <div class="${className}" style="background-color: ${bgColor}; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
                <p>${message}</p>
            </div>
        `;
        
        // Eliminar mensaje después de 5 segundos
        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 5000);
        
        // Scroll suave al mensaje
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Validación de email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Navegación suave para anclas
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configuración del botón de CV
function initCVButton() {
    const cvButtons = document.querySelectorAll('.cv-button');
    
    cvButtons.forEach(button => {
        // Si el botón ya tiene un href, no hacer nada
        if (button.getAttribute('href') && button.getAttribute('href') !== '#') {
            return;
        }
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ruta al archivo CV - ajustar según la estructura del proyecto
            const cvPath = window.location.pathname.includes('/html/') 
                ? '../assets/Currículum.pdf' 
                : 'assets/Currículum.pdf';
            
            // Crear enlace temporal para descarga
            const downloadLink = document.createElement('a');
            downloadLink.href = cvPath;
            downloadLink.download = 'CV-Ricardo-Garcia-Pocasangre.pdf';
            downloadLink.target = '_blank';
            
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            // Feedback visual
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Descargando...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });
}

// Sistema de scroll reveal para animaciones
function initScrollReveal() {
    const animatedElements = document.querySelectorAll(
        '.project-card, .detail, .contact-item, .achievement-card, .metric-card, .soft-skill'
    );
    
    // Configurar observer para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Añadir estilos iniciales y observar elementos
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(element);
    });
    
    // Añadir estilos CSS para la animación
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Funciones utilitarias
const Utils = {
    // Throttle para optimizar eventos de scroll
    throttle: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Debounce para optimizar eventos de resize
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Verificar si un elemento está en el viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Optimizar scroll con throttle
window.addEventListener('scroll', Utils.throttle(() => {
    // Aquí pueden ir funciones adicionales de scroll si se necesitan
}, 100));

// Optimizar resize con debounce
window.addEventListener('resize', Utils.debounce(() => {
    // Reajustar elementos si es necesario
}, 250));

// Manejo de errores para EmailJS
window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('emailjs')) {
        console.warn('Error con EmailJS:', e.message);
        const formStatus = document.getElementById('form-status');
        if (formStatus) {
            formStatus.innerHTML = `
                <div style="background-color: var(--warning-color); color: var(--gray-800); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p>Servicio de email temporalmente no disponible. Por favor, contáctame directamente a danielpocasangre2006@gmail.com</p>
                </div>
            `;
        }
    }
});

// Performance: Lazy loading para imágenes (si se implementa)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading si hay imágenes con data-src
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}

// Exportar funciones para uso en otros archivos si es necesario
window.PortfolioUtils = Utils;