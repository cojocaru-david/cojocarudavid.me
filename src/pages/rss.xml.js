import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { author, defaultMeta } from "@data/socials";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: author,
    description: defaultMeta.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
