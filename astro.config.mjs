import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";
import expressiveCode from "astro-expressive-code";
import compress from "vite-plugin-compress";
import netlify from '@astrojs/netlify/functions';

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  styleOverrides: {
    codeFontSize: '1rem',
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), expressiveCode(astroExpressiveCodeOptions), compress()],
  image: {
    service: sharpImageService()
  },
  site: "http://localhost:4321",
  vite: {
    plugins: [rawFonts([".ttf", ".woff"])],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  adapter: netlify()
});

// vite plugin to import fonts
function rawFonts(ext) {
  return {
    name: "vite-plugin-raw-fonts",
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}