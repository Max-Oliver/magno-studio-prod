import { d as defineEventHandler, r as readBody, c as createError } from './nitro/node-server.mjs';
import { Resend } from 'resend';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const contact_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body.hp) {
      return { ok: true, skipped: true };
    }
    if (!(body == null ? void 0 : body.name) || !(body == null ? void 0 : body.email) || !(body == null ? void 0 : body.message)) {
      throw createError({ statusCode: 400, statusMessage: "Faltan campos obligatorios." });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toList = (process.env.CONTACT_TO || "").split(",").map((s) => s.trim()).filter(Boolean);
    if (!toList.length) {
      throw createError({ statusCode: 500, statusMessage: "No hay destinatarios configurados." });
    }
    const html = `
      <div style="font-family:Inter,Arial,sans-serif">
        <h2>Nuevo mensaje desde el sitio</h2>
        <p><b>Nombre:</b> ${escapeHtml(body.name)}</p>
        <p><b>Email:</b> ${escapeHtml(body.email)}</p>
        ${body.subject ? `<p><b>Asunto:</b> ${escapeHtml(body.subject)}</p>` : ""}
        <p><b>Mensaje:</b></p>
        <pre style="white-space:pre-wrap">${escapeHtml(body.message)}</pre>
      </div>
    `;
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Magno Studio <hello@magnocreative.es>",
      to: toList,
      replyTo: body.email,
      // útil para responder directo al cliente
      subject: body.subject || "Nuevo mensaje de contacto",
      html
    });
    if (error) {
      throw createError({ statusCode: 502, statusMessage: error.message || "Error enviando email" });
    }
    return { ok: true, id: data == null ? void 0 : data.id };
  } catch (err) {
    throw createError({ statusCode: err.statusCode || 500, statusMessage: err.statusMessage || "Error interno" });
  }
});
function escapeHtml(str = "") {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
