import { defineField, defineType } from "sanity";

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

export const schemaTypes = [listing];