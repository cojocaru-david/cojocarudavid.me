// @ts-check
import { defineConfig, sharpImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: sharpImageService(),
  },
  site: "https://cojocarudavid.me",
  integrations: [icon(), mdx()],
});
