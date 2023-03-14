import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'pricing',
     title: 'Pricing',
     type: 'document',
     fields: [
          defineField({
               name: 'package',
               title: 'Package',
               type: 'string',
          }),
          defineField({
               name: 'price',
               title: 'Price',
               type: 'string',
          }),
          defineField({
               name: 'packageDetails',
               title: 'Package Deatils',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'packageDetails2',
               title: 'Package Deatils',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'packageDetails3',
               title: 'Package Deatils',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'packageDetails4',
               title: 'Package Deatils',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'packageDetails5',
               title: 'Package Deatils',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),

     ],

     preview: {
          select: {
               title: 'package',
               author: 'author.name',
               media: 'mainImage',
          },
          prepare(selection) {
               const { author } = selection
               return { ...selection, subtitle: author && `by ${author}` }
          },
     },
})
