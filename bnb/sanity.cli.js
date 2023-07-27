import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {basePath: '/'},
  api: {
    projectId: 'v7ewywok',
    dataset: 'production',
  },
})
