import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'slider',
     title: 'Slider',
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
