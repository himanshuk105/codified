import { Block } from 'payload'

export const Projects: Block = {
  slug: 'Projects',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'subheading', type: 'text' },
    { name: 'description', type: 'richText' },
    {
      name: 'projects data',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
    },
  ],
}
