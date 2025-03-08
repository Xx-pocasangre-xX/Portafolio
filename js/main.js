// Menu toggle para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Formulario de contacto (simulado)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío de formulario
            const submitButton = contactForm.querySelector('button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simulamos un retraso de envío
            setTimeout(() => {
                // Mostramos mensaje de éxito
                const formSuccess = document.createElement('div');
                formSuccess.className = 'form-success';
                formSuccess.innerHTML = `
                    <div style="background-color: var(--success-color); color: white; padding: 1rem; border-radius: 4px; margin-top: 1rem;">
                        <p>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</p>
                    </div>
                `;
                
                contactForm.reset();
                contactForm.appendChild(formSuccess);
                
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Removemos el mensaje después de 5 segundos
                setTimeout(() => {
                    formSuccess.remove();
                }, 5000);
            }, 1500);
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
    
    // CV Botón - Simulación de descarga
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('El CV se descargará. (Esta es una simulación - La funcionalidad real requiere implementación del backend)');
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