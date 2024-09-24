import { fileURLToPath, URL } from 'node:url'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Faq from '@/views/Faq.vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Pages({
      extensions: ['vue', 'md'],
    }),
    vue(),
    splitVendorChunkPlugin(),
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
        manualChunks(id) {
          if (id.includes('@fortawesome/free-solid-svg-icons')) return 'fas';
          if (id.includes('@fortawesome/free-regular-svg-icons')) return 'far';
          if (id.includes('@fortawesome/free-brands-svg-icons')) return 'fab';
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
        return route.path === '/faq/:id?' ? Faq.data().map(item => item.id).map(id => `/faq/${id}`) : route.path
      });
    }
  }
})
