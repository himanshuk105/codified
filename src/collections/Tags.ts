import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',

  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
    },
  ],
}
