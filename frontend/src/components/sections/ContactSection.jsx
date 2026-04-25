import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Por favor, ingresa un email válido.');
      return;
    }
    setIsLoading(true);
    emailjs.init(import.meta.env.EMAILJS_PUBLIC_KEY);
    try {
      await emailjs.send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Ricardo Daniel',
          to_email: 'danielpocasangre2006@gmail.com',
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        }
      );
      toast.success('¡Mensaje enviado! Me pondré en contacto pronto.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Hubo un problema. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>,
      title: 'Email', value: 'danielpocasangre2006@gmail.com',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>,
      title: 'Teléfono', value: '+503 7989-0503',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      title: 'GitHub', value: 'github.com/Xx-pocasangre-xX',
    },
  ];

  const inputStyle = {
    background: '#263348',
    border: '1px solid rgba(148,163,184,0.15)',
    color: '#f1f5f9',
    borderRadius: '0.75rem',
    padding: '0.625rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
  };

  return (
    <section id="contact" className="py-24" style={{ background: '#111827' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-slate-100">
          Contacto
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12 rounded-full" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border hover:border-blue-500/30 transition-all"
                style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-blue-400"
                  style={{ background: 'rgba(59,130,246,0.12)' }}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">{info.title}</h4>
                  <p className="text-slate-400 text-xs break-all">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2 rounded-2xl border p-8"
            style={{ background: '#1e293b', borderColor: 'rgba(148,163,184,0.1)' }}>
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Envíame un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.15)'}
                  required
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.15)'}
                  required
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows="5"
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.15)'}
                  required
                />
              </div>
              <button
                type="submit" disabled={isLoading}
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                style={{ background: isLoading ? '#334155' : '#3b82f6', color: 'white' }}
                onMouseEnter={e => { if (!isLoading) e.target.style.background = '#2563eb'; }}
                onMouseLeave={e => { if (!isLoading) e.target.style.background = '#3b82f6'; }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;