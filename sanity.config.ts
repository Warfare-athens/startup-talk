// "use client";
// import { visionTool } from "@sanity/vision";
// import { defineConfig } from "sanity";
// import { structureTool } from "sanity/structure";
// import { apiVersion, dataset, projectId } from "./sanity/env";
// import { schema } from "./sanity/schemaTypes";
// import { structure } from "./sanity/structure";
// import { markdownSchema } from "sanity-plugin-markdown";

// export default defineConfig({
//   basePath: "/studio",
//   projectId,
//   dataset,
//   schema,
//   plugins: [
//     structureTool({ structure }),
//     visionTool({ defaultApiVersion: apiVersion }),
//     markdownSchema(),
//   ],
// });

'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Correct imports
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { getDefaultDocumentNode } from './sanity/structure' // ✅ Fixed structure import
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [...schema.types, markdownSchema] // ✅ Moved markdownSchema to schema.types
  },
  plugins: [
    structureTool({
      defaultDocumentNode: getDefaultDocumentNode // ✅ Fixed structureTool
    }),
    visionTool({ apiVersion }) // ✅ Corrected visionTool API version
  ],
})
