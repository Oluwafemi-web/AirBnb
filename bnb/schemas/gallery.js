
import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'gallery',
     title: 'Gallery',
     type: 'document',
     fields: [
          defineField({
               name: 'Image1',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
          defineField({
               name: 'Image2',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
          defineField({
               name: 'Image3',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
          defineField({
               name: 'Image4',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
          defineField({
               name: 'Image5',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
          defineField({
               name: 'Image6',
               title: 'Image',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),

     ],

     preview: {
          select: {
               media: 'Image 1',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
