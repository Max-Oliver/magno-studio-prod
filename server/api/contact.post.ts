// server/api/contact.post.ts
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{
      name?: string
      email?: string
      subject?: string
      message?: string
      hp?: string // honeypot
    }>(event)

    // Honeypot (bots suelen completar este campo oculto)
    if (body.hp) {
      return { ok: true, skipped: true }
    }

    // Validación básica
    if (!body?.name || !body?.email || !body?.message) {
      throw createError({ statusCode: 400, statusMessage: 'Faltan campos obligatorios.' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const toList = (process.env.CONTACT_TO || '').split(',').map(s => s.trim()).filter(Boolean)
    if (!toList.length) {
      throw createError({ statusCode: 500, statusMessage: 'No hay destinatarios configurados.' })
    }

    const html = `
      <div style="font-family:Inter,Arial,sans-serif">
        <h2>Nuevo mensaje desde el sitio</h2>
        <p><b>Nombre:</b> ${escapeHtml(body.name)}</p>
        <p><b>Email:</b> ${escapeHtml(body.email)}</p>
        ${body.subject ? `<p><b>Asunto:</b> ${escapeHtml(body.subject)}</p>` : ''}
        <p><b>Mensaje:</b></p>
        <pre style="white-space:pre-wrap">${escapeHtml(body.message)}</pre>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || 'Magno Studio <hello@magnocreative.es>',
      to: toList,
      replyTo: body.email, // útil para responder directo al cliente
      subject: body.subject || 'Nuevo mensaje de contacto',
      html
    })

    if (error) {
      throw createError({ statusCode: 502, statusMessage: error.message || 'Error enviando email' })
    }

    return { ok: true, id: data?.id }
  } catch (err: any) {
    throw createError({ statusCode: err.statusCode || 500, statusMessage: err.statusMessage || 'Error interno' })
  }
})

// Utilidad mínima para evitar inyección
function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
