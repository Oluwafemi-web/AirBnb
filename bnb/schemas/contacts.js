import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
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
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
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
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
