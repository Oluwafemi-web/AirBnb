import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
      // to: { type: 'author' },
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook link',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram link',
      type: 'string',
    }),
    defineField({
      name: 'tiktok',
      title: 'Tiktok link',
      type: 'string',
    }),
    // defineField({
    //      name: 'pinterest',
    //      title: 'Pinterest link',
    //      type: 'string',
    // })
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
