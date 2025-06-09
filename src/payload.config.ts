// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Page'
import { seoPlugin } from '@payloadcms/plugin-seo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      collections: ['pages'],
      generateTitle: ({ doc }) => doc.Title,
      generateDescription: ({ doc }) => doc.plainText,
      generateURL: ({ doc, collectionSlug }) => `https://example.com/${doc?.slug}`,
      tabbedUI: true,
    }),
    formBuilderPlugin({}),
    // storage-adapter-placeholder
  ],
})
