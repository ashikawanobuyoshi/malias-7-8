import { d as defineEventHandler, g as getQuery, a as useRuntimeConfig, s as sendStream } from '../../_/nitro.mjs';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

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
