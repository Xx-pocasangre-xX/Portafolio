// Carousel de Proyectos Destacados - Versión Corregida
class ProjectsCarousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error('Carousel container not found:', containerSelector);
            return;
        }
        
        this.track = this.container.querySelector('.carousel-track');
        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.prevBtn = this.container.querySelector('.carousel-prev');
        this.nextBtn = this.container.querySelector('.carousel-next');
        this.indicatorsContainer = this.container.querySelector('.carousel-indicators');
        
        if (!this.track || !this.slides.length) {
            console.error('Carousel elements not found');
            return;
        }
        
        // Configuración del carousel
        this.currentIndex = 0;
        this.slidesPerView = 3;
        this.slideWidth = 100 / this.slidesPerView;
        this.totalSlides = this.slides.length;
        this.maxIndex = Math.max(0, this.totalSlides - this.slidesPerView);
        this.autoPlayInterval = 2000; // 3 segundos
        this.autoPlayTimer = null;
        this.isTransitioning = false;
        this.isHovered = false;
        this.isInitialized = false;
        
        console.log('Carousel initialized with', this.totalSlides, 'slides');
        this.init();
    }
    
    init() {
        this.setupResponsive();
        this.createIndicators();
        this.setupEventListeners();
        this.updateCarousel();
        
        // Inicializar autoplay después de un pequeño delay
        setTimeout(() => {
            this.startAutoPlay();
            this.isInitialized = true;
            console.log('Autoplay started');
        }, 1000);
        
        // Actualizar en resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }
    
    setupResponsive() {
        const width = window.innerWidth;
        
        if (width <= 576) {
            this.slidesPerView = 1;
        } else if (width <= 1024) {
            this.slidesPerView = 2;
        } else {
            this.slidesPerView = 3;
        }
        
        this.slideWidth = 100 / this.slidesPerView;
        this.maxIndex = Math.max(0, this.totalSlides - this.slidesPerView);
        
        // Ajustar el currentIndex si es necesario
        if (this.currentIndex > this.maxIndex) {
            this.currentIndex = this.maxIndex;
        }
        
        console.log('Responsive setup:', this.slidesPerView, 'slides per view, max index:', this.maxIndex);
    }
    
    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        this.indicatorsContainer.innerHTML = '';
        const totalPages = this.maxIndex + 1;
        
        for (let i = 0; i <= this.maxIndex; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('carousel-indicator');
            indicator.setAttribute('aria-label', `Ir a la página ${i + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicatorsContainer.appendChild(indicator);
        }
        
        console.log('Created', totalPages, 'indicators');
    }
    
    setupEventListeners() {
        // Botones de navegación
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                console.log('Previous button clicked');
                this.previousSlide();
                this.resetAutoPlay();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                console.log('Next button clicked');
                this.nextSlide();
                this.resetAutoPlay();
            });
        }
        
        // Touch/Swipe para móvil
        this.setupTouchEvents();
        
        // Pausar auto-play solo al hacer hover sobre las CARDS, no toda la sección
        this.slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                this.isHovered = true;
                this.pauseAutoPlay();
                console.log('Card hovered - autoplay paused');
            });
            
            slide.addEventListener('mouseleave', () => {
                this.isHovered = false;
                // Reiniciar autoplay inmediatamente al salir del hover de la card
                setTimeout(() => {
                    if (!this.isHovered && this.isInitialized) {
                        this.startAutoPlay();
                        console.log('Card hover ended - autoplay resumed');
                    }
                }, 100);
            });
        });
        
        // También pausar en hover de los controles
        if (this.prevBtn) {
            this.prevBtn.addEventListener('mouseenter', () => {
                this.isHovered = true;
                this.pauseAutoPlay();
            });
            
            this.prevBtn.addEventListener('mouseleave', () => {
                this.isHovered = false;
                setTimeout(() => {
                    if (!this.isHovered && this.isInitialized) {
                        this.startAutoPlay();
                    }
                }, 100);
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('mouseenter', () => {
                this.isHovered = true;
                this.pauseAutoPlay();
            });
            
            this.nextBtn.addEventListener('mouseleave', () => {
                this.isHovered = false;
                setTimeout(() => {
                    if (!this.isHovered && this.isInitialized) {
                        this.startAutoPlay();
                    }
                }, 100);
            });
        }
        
        // Pausar en hover de indicadores
        if (this.indicatorsContainer) {
            this.indicatorsContainer.addEventListener('mouseenter', () => {
                this.isHovered = true;
                this.pauseAutoPlay();
            });
            
            this.indicatorsContainer.addEventListener('mouseleave', () => {
                this.isHovered = false;
                setTimeout(() => {
                    if (!this.isHovered && this.isInitialized) {
                        this.startAutoPlay();
                    }
                }, 100);
            });
        }
        
        // Navegación por teclado
        this.container.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousSlide();
                    this.resetAutoPlay();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSlide();
                    this.resetAutoPlay();
                    break;
            }
        });
        
        // Pausar cuando la pestaña no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoPlay();
                console.log('Tab hidden - autoplay paused');
            } else if (!this.isHovered && this.isInitialized) {
                // Reiniciar autoplay cuando la pestaña vuelve a estar visible
                setTimeout(() => {
                    this.startAutoPlay();
                    console.log('Tab visible - autoplay resumed');
                }, 500);
            }
        });
    }
    
    setupTouchEvents() {
        let startX = 0;
        let endX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.pauseAutoPlay();
        }, { passive: true });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            endX = e.touches[0].clientX;
        }, { passive: true });
        
        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const difference = startX - endX;
            const threshold = 50;
            
            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
                this.resetAutoPlay();
            } else if (this.isInitialized) {
                this.startAutoPlay();
            }
        }, { passive: true });
    }
    
    updateCarousel() {
        if (this.isTransitioning || !this.track) return;
        
        this.isTransitioning = true;
        
        // Calcular el desplazamiento
        const translateX = -this.currentIndex * this.slideWidth;
        
        // Aplicar la transformación con transición más rápida
        this.track.style.transition = 'transform 0.6s ease-in-out';
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar clases de slides
        this.updateSlideStates();
        
        // Actualizar indicadores
        this.updateIndicators();
        
        // Actualizar botones (siempre habilitados en loop infinito)
        this.updateButtons();
        
        console.log('Carousel updated to index:', this.currentIndex);
        
        // Resetear flag de transición más rápido
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }
    
    updateSlideStates() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            
            const slidePosition = index - this.currentIndex;
            
            if (slidePosition >= 0 && slidePosition < this.slidesPerView) {
                slide.classList.add('active');
            }
        });
    }
    
    updateIndicators() {
        if (!this.indicatorsContainer) return;
        
        const indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    updateButtons() {
        // En modo loop infinito, los botones nunca se desactivan
        if (this.prevBtn) {
            this.prevBtn.disabled = false;
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = false;
        }
    }
    
    nextSlide() {
        if (this.isTransitioning) return;
        
        console.log('Moving to next slide from index:', this.currentIndex);
        
        // Siempre avanzar al siguiente slide
        this.currentIndex++;
        
        // Si llegamos al final, hacer loop al inicio
        if (this.currentIndex > this.maxIndex) {
            this.currentIndex = 0;
            console.log('Looped to beginning');
        }
        
        this.updateCarousel();
        this.addSlideAnimation();
    }
    
    previousSlide() {
        if (this.isTransitioning) return;
        
        console.log('Moving to previous slide from index:', this.currentIndex);
        
        // Siempre retroceder al slide anterior
        this.currentIndex--;
        
        // Si estamos en el inicio, hacer loop al final
        if (this.currentIndex < 0) {
            this.currentIndex = this.maxIndex;
            console.log('Looped to end');
        }
        
        this.updateCarousel();
        this.addSlideAnimation();
    }
    
    goToSlide(index) {
        if (index !== this.currentIndex && !this.isTransitioning) {
            console.log('Going to slide:', index);
            this.currentIndex = index;
            this.updateCarousel();
            this.addSlideAnimation();
            this.resetAutoPlay();
        }
    }
    
    addSlideAnimation() {
        const visibleSlides = Array.from(this.slides).slice(
            this.currentIndex, 
            this.currentIndex + this.slidesPerView
        );
        
        visibleSlides.forEach((slide, index) => {
            slide.classList.add('entering');
            setTimeout(() => {
                slide.classList.remove('entering');
            }, 500);
        });
    }
    
    startAutoPlay() {
        if (this.isHovered || document.hidden || !this.isInitialized) return;
        
        this.pauseAutoPlay(); // Limpiar cualquier timer existente
        
        this.autoPlayTimer = setInterval(() => {
            if (!this.isHovered && !document.hidden && !this.isTransitioning) {
                console.log('Auto advancing to next slide');
                this.nextSlide();
            }
        }, this.autoPlayInterval);
        
        // Añadir clase para animación más suave en autoplay
        this.track.classList.add('auto-playing');
        console.log('Autoplay timer started');
    }
    
    pauseAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
            console.log('Autoplay timer cleared');
        }
        
        this.track.classList.remove('auto-playing');
    }
    
    resetAutoPlay() {
        this.pauseAutoPlay();
        
        // Reiniciar autoplay más rápido después de interacción manual
        setTimeout(() => {
            if (!this.isHovered && !document.hidden && this.isInitialized) {
                this.startAutoPlay();
                console.log('Autoplay reset and restarted');
            }
        }, 500);
    }
    
    handleResize() {
        const oldSlidesPerView = this.slidesPerView;
        this.setupResponsive();
        
        if (oldSlidesPerView !== this.slidesPerView) {
            this.createIndicators();
            this.updateCarousel();
            console.log('Carousel resized');
        }
    }
    
    // Método para destruir el carousel
    destroy() {
        this.pauseAutoPlay();
        
        // Remover event listeners
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        
        // Limpiar referencias
        this.container = null;
        this.track = null;
        this.slides = null;
        console.log('Carousel destroyed');
    }
}

// Inicializar el carousel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, looking for carousel...');
    
    const carouselContainer = document.querySelector('.projects-carousel-section');
    
    if (carouselContainer) {
        console.log('Carousel container found, initializing...');
        // Crear instancia del carousel inmediatamente
        window.projectsCarousel = new ProjectsCarousel('.projects-carousel-section');
        
        // Debug: Verificar que el carousel se inició correctamente
        if (window.projectsCarousel && window.projectsCarousel.isInitialized !== undefined) {
            console.log('Carousel instance created successfully');
        } else {
            console.error('Failed to create carousel instance');
        }
    } else {
        console.error('Carousel container not found in DOM');
    }
});

// Funciones utilitarias simplificadas
const CarouselUtils = {
    // Animar entrada de elementos
    animateEntry: function(element, delay = 0) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    },
    
    // Obtener configuración responsive
    getBreakpoint: function() {
        const width = window.innerWidth;
        
        if (width <= 576) return 'mobile';
        if (width <= 1024) return 'tablet';
        return 'desktop';
    }
};

// Performance: Intersection Observer para inicialización
const carouselObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar entrada de elementos cuando sea visible
            const slides = entry.target.querySelectorAll('.carousel-slide');
            slides.forEach((slide, index) => {
                CarouselUtils.animateEntry(slide, index * 100);
            });
            
            carouselObserver.disconnect();
        }
    });
}, { threshold: 0.1 });

// Observar el carousel si existe
const carouselSection = document.querySelector('.projects-carousel-section');
if (carouselSection) {
    carouselObserver.observe(carouselSection);
}

// Exportar para uso global
window.CarouselUtils = CarouselUtils;