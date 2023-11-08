import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80).min(10),
      hero: image(),
      heroAlt: z.string(),
      description: z.string().max(220).min(110),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
};
