import { defineEventHandler, readBody } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../../_/nitro.mjs';
import nodemailer from 'file://C:/Users/nashi/malias-7-8/node_modules/nodemailer/lib/nodemailer.js';
import 'file://C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/nashi/malias-7-8/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/nashi/malias-7-8/node_modules/pathe/dist/index.mjs';

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
