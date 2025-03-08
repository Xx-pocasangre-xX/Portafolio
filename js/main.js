// Menu toggle para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    emailjs.init("_-6CtTYyfKhOOpGcQ");
    
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Cambia el aspecto del botón de hamburguesa
            const bars = document.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                mobileMenu.click();
            }
        });
    });
    
    // Efecto de navbar al scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animación de las barras de habilidades
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillSection = document.querySelector('.skills-section');
    
    // Función para animar las barras cuando son visibles
    function animateSkillBars() {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        
        if (sectionPos < screenPos) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                // Primero ponemos todas las barras en 0%
                bar.style.width = '0%';
                
                // Luego animamos al valor correcto
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 200);
            });
            
            // Remover el evento después de activar la animación
            window.removeEventListener('scroll', animateSkillBars);
        }
    }
    
    window.addEventListener('scroll', animateSkillBars);
    // Llamada inicial en caso de que la sección ya esté visible
    animateSkillBars();
    
    // Formulario de contacto con EmailJS
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Cambiar estado del botón
            const submitButton = contactForm.querySelector('button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Obtener los datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Preparar datos para la plantilla
            const templateParams = {
                to_name: 'Daniel', // Tu nombre
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
                    
                    // Mostrar mensaje de éxito
                    formStatus.innerHTML = `
                        <div style="background-color: var(--success-color); color: white; padding: 1rem; border-radius: 4px; margin-top: 1rem; margin-bottom: 1rem;">
                            <p>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</p>
                        </div>
                    `;
                    
                    // Resetear el formulario
                    contactForm.reset();
                    
                    // Restaurar el botón
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    
                    // Eliminar el mensaje después de 5 segundos
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                    }, 5000);
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    
                    // Mostrar mensaje de error
                    formStatus.innerHTML = `
                        <div style="background-color: #d9534f; color: white; padding: 1rem; border-radius: 4px; margin-top: 1rem; margin-bottom: 1rem;">
                            <p>Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde o contáctame directamente a mi correo.</p>
                        </div>
                    `;
                    
                    // Restaurar el botón
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    
                    // Eliminar el mensaje después de 5 segundos
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                    }, 5000);
                });
        });
    }
    
    // Efecto suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CV Botón - Descarga real del CV
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ruta al archivo CV
            const cvPath = '../assets/cv-ricardo-garcia.pdf';
            
            // Crear un elemento <a> temporal para la descarga
            const downloadLink = document.createElement('a');
            downloadLink.href = cvPath;
            downloadLink.download = 'CV-Ricardo-Garcia-Pocasangre.pdf'; // Nombre del archivo a descargar
            
            // Añadir el enlace al DOM, hacer clic y luego removerlo
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }
    
    // Animación para entrada de elementos al hacer scroll
    const animatedElements = document.querySelectorAll('.project-card, .about-details .detail, .contact-item');
    
    function checkElements() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Añadir estilos iniciales
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkElements);
    // Comprobar al cargar
    checkElements();
});