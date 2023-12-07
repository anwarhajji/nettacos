import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';


import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site:"https://nettacos.github.io/",
  compressHTML: true,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), compress()],
  output: "server",
  adapter: netlify()
});