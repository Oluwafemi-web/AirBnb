
import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'footerimage',
     title: 'Footer Image',
     type: 'document',
     fields: [
          defineField({
               name: 'mainImage',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
     ],

     preview: {
          select: {
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
