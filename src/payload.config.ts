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

import { Authors } from './collections/Authors'
import { Posts } from './collections/Posts'
import { Tags } from './collections/Tags'
import { Categories } from './collections/Categories'
import { Navbar } from './collections/Navbar'
import { Technologies } from './collections/Technologies'
import { Projects } from './collections/Projects'
import { Testimonials } from './collections/Testimonials'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data }) => {
        return data.slug != 'home' ? `http://localhost:3000/${data.slug}` : 'http://localhost:3000'
      },
      collections: ['pages'],
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
    Testimonials,
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
    formBuilderPlugin({}),
    // nestedDocsPlugin({
    //   collections: ['pages'],
    //   generateLabel: (_, doc) => (typeof doc.title === 'string' ? doc.title : 'Untitled'),
    //   generateURL: (docs) =>
    //     docs.reduce((url, doc) => (doc.slug !== 'home' ? `${url}/${doc.slug}` : url), ''),
    // }),
  ],
})
