import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'attrazione',
  title: 'Attrazione',
  type: 'document',
  fields: [
    defineField({
      name: 'roomname',
      title: 'Room Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imagedescription',
      title: 'Short Description(for image effect)',
      type: 'text',
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
      title: 'roomname',
      media: 'image',
    },
  },
})
