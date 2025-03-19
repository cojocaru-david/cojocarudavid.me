import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { author, description } from "@data/socials";

export async function GET(context) {
  const posts = await getCollection("blog");
  console.log(posts);
  return rss({
    title: author,
    description: description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
