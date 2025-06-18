import { CollectionConfig } from 'payload'
import { Hero } from './Blocks/Hero'
import { Sidebyside } from './Blocks/Sidebyside'
import { Singlecolumnsection } from './Blocks/Singlecolumn'
import { Testimonials } from './Blocks/Testimonials'
import { Projects } from './Blocks/Projects'
import { FormBlock } from './Blocks/Form'
import { ImageandText } from './Blocks/ImageandText'

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
      ],
    },
  ],
}
