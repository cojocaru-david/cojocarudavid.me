// @ts-check
import { defineConfig, fontProviders, sharpImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://old.cojocarudavid.me",
  prefetch: true,
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [icon(), sitemap(), react()],
});
