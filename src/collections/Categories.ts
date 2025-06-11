import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
}
