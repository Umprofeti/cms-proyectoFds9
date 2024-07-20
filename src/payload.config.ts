import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import {s3Adapter} from '@payloadcms/plugin-cloud-storage/s3'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'

import Users from './collections/Users'
import Media from './collections/Media'
import { UsersApp } from './collections/UsersApp'
import { Pedidos } from './collections/Pedidos'
import { CategoryMusic } from './collections/Category'
import { LandingPage } from './globals/LandingPage'

const minioAdapter = s3Adapter({
  acl: 'private',
  config:{
    endpoint: process.env.MINIO_ENDPOINT,
    credentials:{
      accessKeyId: process.env.MINIO_ACCESS_KEY,
      secretAccessKey: process.env.MINIO_SECRET_KEY
    },
    forcePathStyle: true,
    region: process.env.MINIO_REGION,
  },
  bucket: process.env.MINIO_BUCKET
})


export default buildConfig({
  serverURL: `http://localhost:3000`,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Media, UsersApp, Pedidos, CategoryMusic],
  globals: [LandingPage],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  csrf: ['*'],
  cors: '*',
  plugins: [
    cloudStorage({
      collections: {
        'media':{
          adapter: minioAdapter,
        }
      },
      enabled: true
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
