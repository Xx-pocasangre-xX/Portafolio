import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

const COOLDOWN_MS = 60_000;

const validate = ({ name, email, message }) => {
  if (!name.trim() || !email.trim() || !message.trim())
    return 'Por favor, completa todos los campos.';
  if (name.trim().length < 2)
    return 'El nombre debe tener al menos 2 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return 'Ingresa un email válido.';
  if (message.trim().length < 10)
    return 'El mensaje debe tener al menos 10 caracteres.';
  return null;
};

const ContactSection = () => {
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown]   = useState(false);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef(null);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const startCooldown = () => {
    setCooldown(true);
    setCountdown(60);
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setCooldown(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate(formData);
    if (error) { toast.error(error); return; }
    if (cooldown) { toast.error(`Espera ${countdown}s antes de enviar otro mensaje.`); return; }

    setIsLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          name:    formData.name.trim(),
          email:   formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'No se pudo enviar. Intenta de nuevo.');
        return;
      }

      toast.success('¡Mensaje enviado! Te respondo en menos de 24h.');
      setFormData({ name: '', email: '', message: '' });
      startCooldown();

    } catch {
      toast.error('Error de red. Verifica tu conexión e intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      title: 'Email',
      value: 'danielpocasangre2006@gmail.com',
      href:  'mailto:danielpocasangre2006@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      title: 'Teléfono',
      value: '+503 7989-0503',
      href:  'tel:+50379890503',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/Xx-pocasangre-xX',
      href:  'https://github.com/Xx-pocasangre-xX',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'linkedin.com/in/ricardo-garcía-pocasangre',
      href:  'https://linkedin.com/in/ricardo-garcía-pocasangre',
    },
  ];

  const inputStyle = {
    background:   '#263348',
    border:       '1px solid rgba(148,163,184,0.15)',
    color:        '#f1f5f9',
    borderRadius: '0.75rem',
    padding:      '0.625rem 1rem',
    width:        '100%',
    outline:      'none',
    transition:   'border-color 0.2s',
    fontFamily:   'Poppins, sans-serif',
    fontSize:     '14px',
  };

  const isDisabled = isLoading || cooldown;

  return (
    <section id="contact" className="py-24" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">Contacto</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Disponible para nuevas oportunidades · Respuesta en menos de 24h · GMT-6
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Info de contacto ── */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
                style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors"
                  style={{ background: 'rgba(59,130,246,0.12)' }}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">{info.title}</h4>
                  <p className="text-slate-400 text-xs break-all">{info.value}</p>
                </div>
              </a>
            ))}

            <div
              className="p-4 rounded-xl border"
              style={{ background: 'rgba(59,130,246,0.06)', borderColor: 'rgba(59,130,246,0.2)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-slate-200">Disponible</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Abierto a oportunidades remotas o presenciales. Disponible a partir de mediados de junio 2026.
              </p>
            </div>
          </div>

          {/* ── Formulario ── */}
          <div
            className="lg:col-span-2 rounded-2xl border p-8"
            style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Envíame un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">
                  Nombre <span style={{ color: '#f87171' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  maxLength={80}
                  disabled={isDisabled}
                  style={{ ...inputStyle, opacity: isDisabled ? 0.6 : 1 }}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.15)'}
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">
                  Email <span style={{ color: '#f87171' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  maxLength={120}
                  disabled={isDisabled}
                  style={{ ...inputStyle, opacity: isDisabled ? 0.6 : 1 }}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.15)'}
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-400 text-sm font-medium">
                    Mensaje <span style={{ color: '#f87171' }}>*</span>
                  </label>
                  <span
                    className="text-xs"
                    style={{ color: formData.message.length < 10 ? '#64748b' : '#22c55e' }}
                  >
                    {formData.message.length} / 1000
                  </span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                  maxLength={1000}
                  disabled={isDisabled}
                  style={{ ...inputStyle, resize: 'none', opacity: isDisabled ? 0.6 : 1 }}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.15)'}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: isDisabled ? '#334155' : '#3b82f6',
                  color:      'white',
                  cursor:     isDisabled ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={e => { if (!isDisabled) e.currentTarget.style.background = '#2563eb'; }}
                onMouseLeave={e => { if (!isDisabled) e.currentTarget.style.background = isDisabled ? '#334155' : '#3b82f6'; }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : cooldown ? (
                  `Enviado · espera ${countdown}s`
                ) : (
                  'Enviar Mensaje'
                )}
              </button>

              <p className="text-xs text-center" style={{ color: '#475569' }}>
                Tu información solo se usa para responderte. No se comparte con terceros.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;