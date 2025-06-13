import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  //   access: {
  //     read: () => true,
  //     create: ({ req }) => req.user?.role === 'admin',
  //     update: ({ req }) => req.user?.role === 'admin',
  //     delete: ({ req }) => req.user?.role === 'admin',
  //   },
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
              // fields: [
              //   {
              //     name: 'projectName',
              //     type: 'relationship',
              //     relationTo: 'projects',
              //   },
              // ],
            },
          ],
        },
      ],
    },
  ],
}
