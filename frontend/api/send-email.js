import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const safe = (str) => String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default async function handler(req, res) {

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const { name, email, message } = req.body ?? {};

  // Validaciones
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  if (name.trim().length < 2)
    return res.status(400).json({ error: 'El nombre debe tener al menos 2 caracteres.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    return res.status(400).json({ error: 'Ingresa un email válido.' });
  if (message.trim().length < 10)
    return res.status(400).json({ error: 'El mensaje debe tener al menos 10 caracteres.' });

  try {
    const { error } = await resend.emails.send({
      from:    'Portafolio <onboarding@resend.dev>',
      to:      ['danielpocasangre2006@gmail.com'],
      replyTo: email.trim(),
      subject: `Nuevo contacto desde portafolio — ${safe(name.trim())}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <div style="background:#0f172a;padding:20px 24px;border-radius:12px 12px 0 0;">
            <h1 style="color:#60a5fa;margin:0;font-size:18px;">Nuevo mensaje desde tu portafolio</h1>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:90px;">Nombre</td>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#1e293b;font-weight:600;">${safe(name.trim())}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;">Email</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${safe(email.trim())}" style="color:#3b82f6;">${safe(email.trim())}</a>
                </td>
              </tr>
            </table>
            <p style="color:#64748b;font-size:13px;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Mensaje</p>
            <div style="background:#f8fafc;border-left:4px solid #3b82f6;padding:16px;border-radius:0 8px 8px 0;color:#1e293b;font-size:14px;line-height:1.7;white-space:pre-wrap;">${safe(message.trim())}</div>
            <div style="margin-top:24px;text-align:center;">
              <a href="mailto:${safe(email.trim())}?subject=Re: Contacto desde portafolio"
                style="display:inline-block;background:#3b82f6;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
                Responder a ${safe(name.trim())}
              </a>
            </div>
          </div>
          <p style="color:#94a3b8;font-size:11px;text-align:center;margin-top:16px;">
            Enviado desde el formulario de contacto de tu portafolio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Error al enviar el correo.' });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}