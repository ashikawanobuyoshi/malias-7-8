import { d as defineEventHandler, g as getQuery, a as useRuntimeConfig } from '../../_/nitro.mjs';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

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
