
import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'gallery',
     title: 'Gallery',
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
          defineField({
               name: 'category',
               title: 'Category',
               type: 'string'
          })
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
