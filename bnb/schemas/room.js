import { defineField, defineType } from 'sanity'

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
               name: 'description',
               title: 'Description',
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
          defineField({
               name: 'publishedAt',
               title: 'Published at',
               type: 'datetime',
          }),
          defineField({
               name: 'body',
               title: 'Body',
               type: 'blockContent',
          }),
     ],

     preview: {
          select: {
               title: 'title',
               author: 'author.name',
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
