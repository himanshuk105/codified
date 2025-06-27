// import { CollectionConfig } from 'payload'
// import { Hero } from './Blocks/Hero'
// import { Sidebyside } from './Blocks/Sidebyside'
// import { Singlecolumnsection } from './Blocks/Singlecolumn'
// import { Testimonials } from './Blocks/Testimonials'
// import { Projects } from './Blocks/Projects'
// import { FormBlock } from './Blocks/Form'
// import { ImageandText } from './Blocks/ImageandText'
// import { Technologies } from './Blocks/Technology'

// export const Pages: CollectionConfig = {
//   slug: 'pages',
//   admin: {
//     useAsTitle: 'title',
//   },

//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//       unique: true,
//     },
//     {
//       name: 'blocks',
//       type: 'blocks',
//       blocks: [
//         Hero,
//         Sidebyside,
//         Singlecolumnsection,
//         Testimonials,
//         Projects,
//         FormBlock,
//         ImageandText,
//         Technologies,
//       ],
//     },
//   ],
// }

import { CollectionConfig } from 'payload'
import { Hero } from './Blocks/Hero'
import { Sidebyside } from './Blocks/Sidebyside'
import { Singlecolumnsection } from './Blocks/Singlecolumn'
import { Testimonials } from './Blocks/Testimonials'
import { Projects } from './Blocks/Projects'
import { FormBlock } from './Blocks/Form'
import { ImageandText } from './Blocks/ImageandText'
import { Technologies } from './Blocks/Technology'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      label: 'Meta Title',
      name: 'metaTitle',
      type: 'text',
      admin: {
        description: 'Used for SEO purposes. Appears in the <title> tag.',
      },
    },
    {
      label: 'Meta Description',
      name: 'metaDescription',
      type: 'textarea',
      admin: {
        description: 'Used for SEO purposes. Appears in the <meta name="description" /> tag.',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        Hero,
        Sidebyside,
        Singlecolumnsection,
        Testimonials,
        Projects,
        FormBlock,
        ImageandText,
        Technologies,
      ],
    },
  ],
}
