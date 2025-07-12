// server/api/image-proxy.ts
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { defineEventHandler, getQuery, sendStream } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const key = query.key as string
  if (!key) {
    return { error: 'Missing image key' }
  }

  const s3 = new S3Client({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey
    }
  })

  const command = new GetObjectCommand({
    Bucket: config.s3BucketName,
    Key: key
  })

  const response = await s3.send(command)

  event.node.res.setHeader('Content-Type', response.ContentType || 'image/jpeg')
  return sendStream(event, response.Body as any)
})
