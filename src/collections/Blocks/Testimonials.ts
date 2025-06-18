import { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'Testimonials',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'richText' },
    { name: 'subheading', type: 'text' },
    {
      name: 'testimonialtype',
      type: 'select',
      options: [
        { label: 'Slider', value: 'slider' },
        { label: 'Grid', value: 'grid' },
      ],
    },
    {
      name: 'testimonial data',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
    },
  ],
}
