import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'indexroom',
  title: 'Index(Room Image)',
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
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'ptext',
      title: 'Previous page navigation',
      type: 'string',
    }),
    defineField({
      name: 'ctext',
      title: 'Current page navigation',
      type: 'string',
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
