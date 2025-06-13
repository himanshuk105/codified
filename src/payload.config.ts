// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Page'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Authors } from './collections/Authors'
import { Posts } from './collections/Posts'
import { Tags } from './collections/Tags'
import { Categories } from './collections/Categories'
import { Navbar } from './collections/Navbar'
import { Technologies } from './collections/Technologies'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Authors,
    Posts,
    Tags,
    Categories,
    Navbar,
    Technologies,
    Projects,
  ],
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
    nestedDocsPlugin({
      collections: ['pages'],
      generateLabel: (_, doc) => (typeof doc.title === 'string' ? doc.title : 'Untitled'),
      generateURL: (docs) =>
        docs.reduce((url, doc) => (doc.slug !== 'home' ? `${url}/${doc.slug}` : url), ''),
    }),
    // storage-adapter-placeholder
  ],
})
