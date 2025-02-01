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

console.log("Loading Sanity configuration...");
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "@/sanity/schemaTypes/index";

export default defineConfig({
  name: "default",
  title: "My Sanity Studio",
  projectId: "your-project-id",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schema,
  },
});
