import { defineEventHandler, getQuery } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, PutObjectCommand } from 'file://C:/Users/nashi/malias-7-8/node_modules/@aws-sdk/client-s3/dist-cjs/index.js';
import { getSignedUrl } from 'file://C:/Users/nashi/malias-7-8/node_modules/@aws-sdk/s3-request-presigner/dist-cjs/index.js';
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

const presign = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { fileName } = getQuery(event);
  if (!fileName) {
    return { statusCode: 400, message: "fileName is required" };
  }
  const s3 = new S3Client({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey
    }
  });
  const command = new PutObjectCommand({
    Bucket: config.s3BucketName,
    Key: fileName,
    ContentType: "image/jpeg"
  });
  const url = await getSignedUrl(s3, command, { expiresIn: 60 });
  return { url };
});

export { presign as default };
//# sourceMappingURL=presign.mjs.map
