import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'attrazione',
  type: 'document',
  title: 'Attrazione',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'roomname',
      title: 'Room Name',
      type: 'string',
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
