import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      // options: {
      //      source: 'title',
      //      maxLength: 96,
      // },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'roomname',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      // to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'innerdescription',
      title: 'Inner Page Description',
      type: 'text',
    }),
    defineField({
      name: 'bannerimage',
      title: 'Inner page Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rm1',
      title: 'Room facilities 1',
      type: 'string',
    }),
    defineField({
      name: 'rm2',
      title: 'Room facilities 2',
      type: 'string',
    }),
    defineField({
      name: 'rm3',
      title: 'Room facilities 3',
      type: 'string',
    }),
    defineField({
      name: 'rm4',
      title: 'Room facilities 4',
      type: 'string',
    }),
    defineField({
      name: 'rm5',
      title: 'Room facilities 5',
      type: 'string',
    }),
    defineField({
      name: 'rm6',
      title: 'Room facilities 6',
      type: 'string',
    }),
    defineField({
      name: 'rm7',
      title: 'Room facilities 7',
      type: 'string',
    }),
    defineField({
      name: 'rm8',
      title: 'Room facilities 8',
      type: 'string',
    }),
    defineField({
      name: 'rm9',
      title: 'Room facilities 9',
      type: 'string',
    }),
    defineField({
      name: 'rm10',
      title: 'Room facilities 10',
      type: 'string',
    }),
    defineField({
      name: 'rm11',
      title: 'Room facilities 11',
      type: 'string',
    }),
    defineField({
      name: 'rm12',
      title: 'Room facilities 12',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
