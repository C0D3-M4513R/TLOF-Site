// noinspection ES6PreferShortImport //npm run preview fails, if this is a short import
import fs from 'fs';
import { fileURLToPath, URL } from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

import {faqIds} from './src/data/faq/questions.js'
import {eventDates} from "./src/data/events/events.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Pages({
      extensions: ['vue', 'md'],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output:{
        compact: true,
        manualChunks(id) {
          if (id.includes('@fortawesome/free-solid-svg-icons')) return 'fas';
          if (id.includes('@fortawesome/free-regular-svg-icons')) return 'far';
          if (id.includes('@fortawesome/free-brands-svg-icons')) return 'fab';
          if (id.includes('@fortawesome/fontawesome-common-types')) return 'fa-common-types';
          if (id.includes('@fortawesome/fontawesome-svg-core')) return 'fa-svg-core';
          // if (id.includes('@fortawesome/vue-fontawesome')) return 'fa-vue';
          // if (id.includes('@fortawesome')) return 'fa-vendored';
          // if (id.includes("@unhead/vue")) return 'unhead-vue';
          if (id.includes("unhead")) return 'unhead';
          // if (id.includes("vue")) return 'vue';
        }
      }
    }
  },
  ssgOptions: {
    script: 'async',
    mock: true,
    crittersOptions : {
      path: "./dist",
      pruneSource: true,
      fonts: true,
      allowRules: ['.content'],
    },
    formatting: "minify",
    dirStyle: "nested",
    /*include the dynamic FAQ routes*/
    includedRoutes(paths, routes) {
      return routes.flatMap(route => {
        switch (route.path) {
          case '/:catchAll(.*)': return [];
          case '/faq/:id?/': return faqIds.map(id => `/faq/${id}/`);
          case '/events/:datetime/': return eventDates
              .filter(datetime => fs.existsSync(`src/assets/events/${datetime}`))
              .map(datetime => `/events/${datetime}/`);
          default: return route.path;
        }
      });
    }
  }
})
