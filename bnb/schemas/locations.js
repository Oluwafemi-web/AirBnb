import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'location',
     title: 'Locations',
     type: 'document',
     fields: [
          defineField({
               name: 'name',
               title: 'Name',
               type: 'string',
          }),
          defineField({
               name: 'address',
               title: 'Address',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'distance',
               title: 'Distance',
               type: 'string',
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
     ],

     preview: {
          select: {
               title: 'name',
               author: 'author.name',
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
