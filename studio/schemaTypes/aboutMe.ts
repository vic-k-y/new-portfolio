import {defineField, defineType} from 'sanity'

export const aboutMe = defineType({
  name: 'aboutMe',
  title: 'about me',
  type: 'document',

  fields: [
    defineField({
      name: 'firstpara',
      title: 'First para',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'secondpara',
      title: 'Second para',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
