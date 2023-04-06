import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'indexroomtext',
     title: 'Index(Room Description)',
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
               type: 'text',
               // to: { type: 'author' },
          }),

     ],

     preview: {
          select: {
               title: 'title',
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
