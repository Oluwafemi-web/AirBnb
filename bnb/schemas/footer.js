import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'footer',
     title: 'Footer',
     type: 'document',
     fields: [
          defineField({
               name: 'logo',
               title: 'Logo',
               type: 'image',
               options: {
                    hotspot: true,
               },
          }),
          defineField({
               name: 'about',
               title: 'About',
               type: 'string',
               // options: {
               //      source: 'title',
               //      maxLength: 96,
               // },
          }),
          defineField({
               name: 'address',
               title: 'Address',
               type: 'string',
               // to: { type: 'author' },
          }),
          defineField({
               name: 'email',
               title: 'Email',
               type: 'string',
               // to: { type: 'author' },
          }),
          defineField({
               name: 'number',
               title: 'Number',
               type: 'string',
               // to: { type: 'author' },
          }),
          defineField({
               name: 'facebook',
               title: 'Facebook link',
               type: 'string',
          }),
          defineField({
               name: 'instagram',
               title: 'Instagram link',
               type: 'string',
          }),
          defineField({
               name: 'twitter',
               title: 'Twitter link',
               type: 'string',
          }),
          defineField({
               name: 'pinterest',
               title: 'Pinterest link',
               type: 'string',
          })
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
