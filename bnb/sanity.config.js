import {defineConfig} from 'sanity'
import {defineField} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'bnb',

  projectId: 'v7ewywok',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      // Required
      // Either: an array of supported languages...
      supportedLanguages: [
        {id: 'it', title: 'Italian'},
        {id: 'en', title: 'English'},
      ],
      // ...or a function that takes the client and returns a promise of an array of supported languages
      // MUST return an "id" and "title" as strings
      // supportedLanguages: (client) => client.fetch(`*[_type == "language"]{id, title}`),

      // Required
      // Translations UI will only appear on these schema types
      schemaTypes: [
        'attrazione',
        'attrazionedescription',
        'contacts',
        'eventdescription',
        'events',
        'indexabout',
        'indexroom',
        'indexroomtext',
        'room',
        'roomdescription',
        'service',
      ],

      // Optional
      // Customizes the name of the language field
      languageField: 'language', // defaults to "language"

      // Optional
      // Keep translation.metadata references weak
      weakReferences: true, // defaults to false

      // Optional
      // Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      bulkPublish: true, // defaults to false

      // Optional
      // Adds additional fields to the metadata document
      metadataFields: [defineField({name: 'slug', type: 'slug'})],

      // Optional
      // Define API Version for all queries
      // https://www.sanity.io/docs/api-versioning
      apiVersion: '2023-05-22',
    }),
  ],
})
