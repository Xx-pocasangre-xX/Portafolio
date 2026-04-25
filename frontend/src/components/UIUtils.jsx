import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

// ─── Fade-in transition entre páginas ────────────────────────────────────────
export const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      style={{
        animation: transitionStage === 'fadeIn'
          ? 'pageEnter 0.35s ease forwards'
          : 'pageExit 0.25s ease forwards',
      }}
    >
      {/* Inyectar keyframes una sola vez */}
      <style>{`
        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pageExit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-8px); }
        }
      `}</style>
      {children}
    </div>
  );
};

// ─── Botón flotante "Volver arriba" ───────────────────────────────────────────
export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPct(Math.min(pct, 100));
      setVisible(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circular de progreso
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPct / 100) * circumference;

  return (
    <button
      onClick={handleClick}
      aria-label="Volver arriba"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      className="fixed bottom-8 right-6 z-50 w-12 h-12 flex items-center justify-center"
    >
      {/* Anillo de progreso */}
      <svg
        className="absolute inset-0 -rotate-90"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        {/* Track */}
        <circle cx="24" cy="24" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
        {/* Progreso */}
        <circle
          cx="24" cy="24" r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.2s ease' }}
        />
      </svg>

      {/* Fondo del botón */}
      <div className="absolute inset-1 rounded-full bg-gray-900/90 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gray-800/90 transition-colors">
        <ArrowUp size={16} className="text-white" />
      </div>
    </button>
  );
};