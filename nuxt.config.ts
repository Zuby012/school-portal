// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    externals: {
      inline: ['mongodb']
    },
    alias: {
      // Mock MongoDB's optional dependencies
      '@mongodb-js/zstd': 'unenv/runtime/mock/empty',
    },
  },
  app: {
    head: {
      titleTemplate: 'Berows University - %s',
      link: [
        {rel: 'icon', type: 'image/png', href: '/logo1.1.png'}
      ],
    }
  },
})
