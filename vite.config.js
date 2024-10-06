import { fileURLToPath, URL } from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
// noinspection ES6PreferShortImport //npm run preview fails, if this is a short import
import {faqIds} from './src/data/faq/questions.js'

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
        if (route.path === '/:catchAll(.*)') return []
        return route.path === '/faq/:id?/' ? faqIds.map(id => `/faq/${id}/`) : route.path
      });
    }
  }
})
