import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'indexabout',
  title: 'Index(About)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      // to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      // type: 'image',
      // options: {
      //   hotspot: true,
      // },
      type: 'file',
      accept: 'image/*, video/*', // Specify accepted file types
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
