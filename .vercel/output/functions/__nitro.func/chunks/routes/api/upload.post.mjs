import { d as defineEventHandler, a as useRuntimeConfig, r as readBody, c as sendError, e as createError } from '../../_/nitro.mjs';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

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
