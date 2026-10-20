import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2wm8xud6",
  dataset: "production",
  apiVersion: "2026-10-20",
  useCdn: true,
});