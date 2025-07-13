import { defineEventHandler, readBody, sendError, createError } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, PutObjectCommand } from 'file://C:/Users/nashi/malias-7-8/node_modules/@aws-sdk/client-s3/dist-cjs/index.js';
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

const upload_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const s3 = new S3Client({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey
    }
  });
  const body = await readBody(event);
  const { fileName, fileDataBase64 } = body;
  if (!fileName || !fileDataBase64) {
    return sendError(event, createError({ statusCode: 400, statusMessage: "fileName and fileDataBase64 are required" }));
  }
  const buffer = Buffer.from(fileDataBase64, "base64");
  try {
    await s3.send(new PutObjectCommand({
      Bucket: config.awsS3Bucket,
      Key: fileName,
      Body: buffer,
      ContentType: "image/jpeg",
      // 適宜変えてください
      ACL: "public-read"
    }));
    return {
      message: "Upload successful",
      url: `https://${config.awsS3Bucket}.s3.${config.awsRegion}.amazonaws.com/${fileName}`
    };
  } catch (error) {
    return sendError(event, createError({ statusCode: 500, statusMessage: "Upload failed", data: error }));
  }
});

export { upload_post as default };
//# sourceMappingURL=upload.post.mjs.map
