import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'roomdescription',
     title: 'Rooms(Banner text & Description)',
     type: 'document',
     fields: [
          defineField({
               name: 'heading',
               title: 'Heading',
               type: 'string',
          }),
          defineField({
               name: 'subheading',
               title: 'Sub-Heading',
               type: 'string',
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
               name: 'mainImage',
               title: 'Main image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
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
               title: 'heading',
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
