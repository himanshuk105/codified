import { Block } from 'payload'

export const Section: Block = {
  slug: 'section',
  fields: [
    {
      name: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'Section Type',
      type: 'blocks',
      blocks: [
        {
          slug: 'Side-by-Side',
          fields: [
            {
              name: 'Side-1',
              type: 'array',
              fields: [
                {
                  name: 'Left Heading',
                  type: 'text',
                },
                {
                  name: 'Description',
                  type: 'text',
                },
                {
                  name: 'Image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'Button',
                  type: 'array',
                  fields: [
                    {
                      name: 'Button Text',
                      type: 'text',
                    },
                    {
                      name: 'Button Link',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Side-2',
              type: 'array',
              fields: [
                {
                  name: 'Right Heading',
                  type: 'text',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'Description',
                  type: 'richText',
                },
                {
                  name: 'blobcard',
                  type: 'array',
                  fields: [
                    { name: 'label', type: 'text' },
                    { name: 'value', type: 'text' },
                  ],
                },
                {
                  name: 'Cards',
                  type: 'array',
                  fields: [
                    { name: 'heading', type: 'text' },
                    { name: 'description', type: 'text' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                    {
                      name: 'button',
                      type: 'array',
                      fields: [
                        {
                          name: 'Button Text',
                          type: 'text',
                        },
                        {
                          name: 'Button Link',
                          type: 'text',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'Button',
                  type: 'array',
                  fields: [
                    {
                      name: 'Button Text',
                      type: 'text',
                    },
                    {
                      name: 'Button Link',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: 'Testimonials',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'text' },
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
        },
        {
          slug: 'Projects',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'text' },
            {
              name: 'projects data',
              type: 'relationship',
              relationTo: 'projects',
              hasMany: true,
            },
          ],
        },
        {
          slug: 'Forms',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'text' },
            {
              name: 'form fields',
              type: 'relationship',
              relationTo: 'forms',
              hasMany: false,
            },
          ],
        },
      ],
    },
  ],
}
