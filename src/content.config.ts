import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80).min(10),
      hero: image().optional(),
      heroAlt: z.string(),
      description: z.string().max(220).min(110),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = { blog };
