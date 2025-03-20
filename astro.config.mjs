// @ts-check
import { defineConfig, sharpImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  image: {
    service: sharpImageService(),
  },

  site: "https://cojocarudavid.me",
  integrations: [icon(), mdx(), sitemap()],
  adapter: cloudflare(),
});
