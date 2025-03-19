// @ts-check
import { defineConfig, sharpImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: sharpImageService(),
  },
  site: "https://cojocarudavid.me",
  integrations: [partytown(), icon()],
});