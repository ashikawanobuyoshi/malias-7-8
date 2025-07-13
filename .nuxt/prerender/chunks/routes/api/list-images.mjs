import { a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, ListObjectsV2Command } from 'file://C:/Users/nashi/malias-7-8/node_modules/@aws-sdk/client-s3/dist-cjs/index.js';
import { defineEventHandler, getQuery } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
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

const listImages = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const folder = query.folder;
  if (!folder) {
    return { images: [] };
  }
  const s3 = new S3Client({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey
    }
  });
  const command = new ListObjectsV2Command({
    Bucket: config.s3BucketName,
    Prefix: `${folder}/`
  });
  const result = await s3.send(command);
  const images = (result.Contents || []).filter((item) => item.Key && item.Key.match(/\.(jpg|jpeg|png|gif)$/i)).map((item) => ({
    key: item.Key,
    url: `/api/image-proxy?key=${encodeURIComponent(item.Key)}`
  }));
  return { images };
});

export { listImages as default };
//# sourceMappingURL=list-images.mjs.map
