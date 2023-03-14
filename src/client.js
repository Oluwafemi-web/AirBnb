import { createClient } from "@sanity/client";

const sanityClient = createClient({
     projectId: 'v7ewywok',
     dataset: "production",
     useCdn: false,
     apiVersion: '2023-03-07'
})

export default sanityClient