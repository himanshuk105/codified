import { CollectionConfig } from 'payload'

export const Navbar: CollectionConfig = {
  slug: 'Menu',
  access: {
    read: () => true,
  },
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
      name: 'Items',
      type: 'array',
      label: 'Menu Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Menu Label',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link (if no dropdown)',
        },
        {
          name: 'hasDropdown',
          type: 'checkbox',
          label: 'Has Dropdown?',
        },
        {
          name: 'dropdownItems',
          type: 'array',
          label: 'Dropdown Categories',
          fields: [
            {
              name: 'categoryTitle',
              type: 'text',
              label: 'Category Title',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
            },
            {
              name: 'link',
              type: 'text',
            },
            {
              name: 'subServices',
              type: 'array',
              label: 'Sub Services',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Sub Service Name',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Sub Service Link',
                },
                {
                  name: 'slug',
                  type: 'text',
                },
              ],
            },
            {
              name: 'logoorimage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },
  ],
}
