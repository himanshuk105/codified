import { Block } from 'payload'

export const Singlecolumnsection: Block = {
  slug: 'Single-Column-Section',
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'textarea' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    {
      name: 'text',
      type: 'richText',
    },
    { name: 'button', type: 'array', fields: [{ name: 'text', type: 'text' }] },
  ],
}
