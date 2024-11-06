import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';
import { SITE } from './src/config';

export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
    shikiConfig: {
      // https://shiki.style/themes
      themes: { light: 'everforest-light', dark: 'everforest-dark' },
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  scopedStyleStrategy: 'where',
  experimental: {
    contentLayer: true,
  },
});
