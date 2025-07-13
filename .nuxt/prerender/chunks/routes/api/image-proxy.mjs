import { a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, GetObjectCommand } from 'file://C:/Users/nashi/malias-7-8/node_modules/@aws-sdk/client-s3/dist-cjs/index.js';
import { defineEventHandler, getQuery, sendStream } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
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

const imageProxy = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const key = query.key;
  if (!key) {
    return { error: "Missing image key" };
  }
  const s3 = new S3Client({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey
    }
  });
  const command = new GetObjectCommand({
    Bucket: config.s3BucketName,
    Key: key
  });
  const response = await s3.send(command);
  event.node.res.setHeader("Content-Type", response.ContentType || "image/jpeg");
  return sendStream(event, response.Body);
});

export { imageProxy as default };
//# sourceMappingURL=image-proxy.mjs.map
