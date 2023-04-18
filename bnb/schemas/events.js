import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'events',
     title: 'Servizi',
     type: 'document',
     fields: [
          defineField({
               name: 'eventName',
               title: 'Event Name',
               type: 'string',
          }),
          defineField({
               name: 'category',
               title: 'Category',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'author',
               title: 'Author',
               type: 'string',
               // to: { type: 'author' },
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
     ],

     preview: {
          select: {
               title: 'eventName',
               author: 'author.name',
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
