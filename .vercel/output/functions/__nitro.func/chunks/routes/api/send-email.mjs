import { d as defineEventHandler, r as readBody, a as useRuntimeConfig } from '../../_/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const sendEmail = defineEventHandler(async (event) => {
  var _a, _b;
  const config = useRuntimeConfig();
  const body = await readBody(event);
  console.log("\u{1F4E8} \u30E1\u30FC\u30EB\u9001\u4FE1\u30EA\u30AF\u30A8\u30B9\u30C8\u53D7\u4FE1:", {
    to: body.to,
    subject: body.subject,
    htmlLength: (_a = body.html) == null ? void 0 : _a.length,
    imagesCount: (_b = body.images) == null ? void 0 : _b.length
  });
  const transporter = nodemailer.createTransport({
    host: config.onamaeSmtpHost,
    port: Number(config.onamaeSmtpPort),
    secure: true,
    auth: {
      user: config.onamaeSmtpUser,
      pass: config.onamaeSmtpPass
    }
  });
  const attachments = Array.isArray(body.images) ? body.images.map((img) => ({
    filename: img.filename || "image.jpg",
    path: img.url
  })) : [];
  try {
    await transporter.sendMail({
      from: `"Web\u30BB\u30EC\u30AF\u30C8\u53D7\u4ED8" <${config.onamaeSmtpUser}>`,
      to: body.to,
      subject: body.subject,
      html: body.html,
      attachments
    });
    return { message: "\u30E1\u30FC\u30EB\u9001\u4FE1\u5B8C\u4E86" };
  } catch (err) {
    console.error("\u{1F4DB} \u30E1\u30FC\u30EB\u9001\u4FE1\u30A8\u30E9\u30FC:", err);
    return {
      statusCode: 500,
      statusMessage: "\u30E1\u30FC\u30EB\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
      body: String(err.message || err)
    };
  }
});

export { sendEmail as default };
//# sourceMappingURL=send-email.mjs.map
