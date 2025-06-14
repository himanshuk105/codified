import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'testimonial',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'testimonialname',
      type: 'text',
    },
    {
      name: 'testimonialposition',
      type: 'text',
    },
    {
      name: 'Rating',
      type: 'number',
    },
  ],
}
