import { CollectionConfig } from 'payload'

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
        {
          slug: 'hero',
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'textarea' },
            { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
            {
              name: 'sidesection',
              type: 'array',
              fields: [
                { name: 'heading', type: 'text' },
                { name: 'paragraph', type: 'richText' },
                { name: 'logoimage', type: 'upload', relationTo: 'media' },
              ],
            },

            {
              name: 'text',
              type: 'richText',
            },
            { name: 'button', type: 'array', fields: [{ name: 'text', type: 'text' }] },
          ],
        },
        {
          slug: 'sections',

          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'textarea' },
            { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
            {
              name: 'sidesection',
              type: 'array',
              fields: [
                { name: 'heading', type: 'text' },
                { name: 'paragraph', type: 'richText' },
                { name: 'logoimage', type: 'upload', relationTo: 'media' },
              ],
            },
            {
              name: 'additional',
              type: 'array',
              fields: [
                { name: 'label', type: 'text' },
                { name: 'value', type: 'text' },
              ],
            },
            {
              name: 'text',
              type: 'richText',
            },
            { name: 'button', type: 'array', fields: [{ name: 'text', type: 'text' }] },
            {
              name: 'Testimonials',
              type: 'array',
              fields: [
                {
                  name: 'testimonial data',
                  type: 'relationship',
                  relationTo: 'testimonials',
                  hasMany: true,
                },
              ],
            },
            {
              name: 'Projects',
              type: 'array',
              fields: [
                {
                  name: 'project data',
                  type: 'relationship',
                  relationTo: 'projects',
                  hasMany: true,
                },
              ],
            },
            {
              name: 'form',
              type: 'relationship',
              relationTo: 'forms',
            },
          ],
        },
        {
          slug: 'imageAndText',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'text', type: 'richText' },
          ],
        },
        {
          slug: 'Projects',
          fields: [
            {
              name: 'project data',
              type: 'relationship',
              relationTo: 'projects',
              hasMany: true,
            },
          ],
        },
        {
          slug: 'Testimonials',
          fields: [
            {
              name: 'testimonials',
              type: 'relationship',
              relationTo: 'testimonials',
              hasMany: true,
            },
          ],
        },
      ],
    },
  ],
}
