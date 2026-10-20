"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig, defineField, defineType } from "sanity";
import { structureTool } from "sanity/structure";

const listing = defineType({
  name: "listing",
  title: "Listing",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "price", type: "string" }),
    defineField({ name: "area", type: "string" }),
    defineField({ name: "beds", type: "number" }),
    defineField({ name: "baths", type: "number" }),
    defineField({ name: "summary", type: "text" }),
  ],
});

const config = defineConfig({
  name: "aso-grove",
  title: "Aso Grove",
  projectId: "2wm8xud6",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: [listing] },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}