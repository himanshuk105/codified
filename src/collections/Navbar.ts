import { CollectionConfig } from 'payload'

export const Navbar: CollectionConfig = {
  slug: 'navbar',
  admin: {
    useAsTitle: 'navTitle',
  },
  fields: [
    {
      name: 'navTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Menu Label',
          required: true,
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
              ],
            },
          ],
        },
      ],
    },
  ],
}
