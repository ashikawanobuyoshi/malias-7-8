import { d as defineEventHandler, g as getQuery, a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

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
