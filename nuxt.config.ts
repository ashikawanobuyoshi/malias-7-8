import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  ssr: true,

nitro: {
  middleware: ['~/server/middleware/cors.ts'],
  preset: 'vercel-edge',
  experimental: {
    inlineServerFunctions: false
  },
  prerender: {
    crawlLinks: true,
    routes: [
      '/',
      '/favorites',
      '/product-details/1',
      '/product-details/2',
      '/product-details/3',
      '/product-details/4',
      '/product-details/5',
      '/product-details/6',
      '/product-details/7',
      '/product-details/8',
      '/product-details/9',
      '/product-details/10'
    ],
    exclude: ['/api/**']
  },
},

nitro: {
  middleware: ['~/server/middleware/cors.ts'],
  preset: 'vercel',
  experimental: {
    inlineServerFunctions: false
  },
  prerender: {
    crawlLinks: true,
    routes: [
      '/',
      '/favorites',
      '/product-details/1',
      '/product-details/2',
      '/product-details/3',
      '/product-details/4',
      '/product-details/5',
      '/product-details/6',
      '/product-details/7',
      '/product-details/8',
      '/product-details/9',
      '/product-details/10'
    ],
    exclude: ['/api/**']
  },
},

  app: {
    baseURL: '/',
    trailingSlash: true
  },

  runtimeConfig: {
    onamaeSmtpHost: process.env.ONAMAE_SMTP_HOST,
    onamaeSmtpPort: process.env.ONAMAE_SMTP_PORT,
    onamaeSmtpUser: process.env.ONAMAE_SMTP_USER,
    onamaeSmtpPass: process.env.ONAMAE_SMTP_PASS,
    awsRegion: process.env.AWS_REGION,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3BucketName: process.env.S3_BUCKET_NAME
  },

  modules: [
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'storeToRefs']
    }],
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  compatibilityDate: '2024-11-01',

  devtools: { enabled: false },

  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, '.'),
        '~~': resolve(__dirname, '.'),
        '@assets': resolve(__dirname, 'src/assets')
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '@assets/css/main.css',
    '@assets/css/variables.css',
    '@assets/css/tailwind.css',
    '@assets/css/print.css'
  ],

  routeRules: {
    '/favorites/**': { prerender: false }
  }
})