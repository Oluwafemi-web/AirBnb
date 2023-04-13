import { defineField, defineType } from 'sanity'

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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
  preview: {
    select: {
      title: 'roomname',
      media: 'image',
    },
  },
})
