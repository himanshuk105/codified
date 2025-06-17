import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
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
