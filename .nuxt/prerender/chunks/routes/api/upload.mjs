import { defineEventHandler, readBody } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, PutObjectCommand } from 'file://C:/Users/nashi/malias-7-8/node_modules/@aws-sdk/client-s3/dist-cjs/index.js';
import { Buffer } from 'node:buffer';
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

const upload = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { fileName, fileBase64, customerId } = body || {};
  if (!fileName || !fileBase64 || !customerId) {
    console.error("Missing required fields:", { fileName, fileBase64, customerId });
    return {
      statusCode: 400,
      statusMessage: "fileName, fileBase64, and customerId are required"
    };
  }
  try {
    const s3 = new S3Client({
      region: config.awsRegion,
      credentials: {
        accessKeyId: config.awsAccessKeyId,
        secretAccessKey: config.awsSecretAccessKey
      }
    });
    const buffer = Buffer.from(fileBase64, "base64");
    const key = `${customerId}/${fileName}`;
    const command = new PutObjectCommand({
      Bucket: config.s3BucketName,
      Key: key,
      Body: buffer,
      ContentType: "image/jpeg",
      ACL: "public-read"
    });
    await s3.send(command);
    return {
      statusCode: 200,
      statusMessage: "Upload successful",
      url: `https://${config.s3BucketName}.s3.${config.awsRegion}.amazonaws.com/${key}`
    };
  } catch (err) {
    console.error("Upload error:", err);
    return {
      statusCode: 500,
      statusMessage: "Upload failed"
    };
  }
});

export { upload as default };
//# sourceMappingURL=upload.mjs.map
