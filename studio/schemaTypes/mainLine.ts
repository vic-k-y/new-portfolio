import {defineField, defineType} from 'sanity'

export const mainLineType = defineType({
  name: 'mainLine',
  title: 'Main Line',
  type: 'document',

  fields: [
    defineField({
      name: 'text',
      title: 'Main Line Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
