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
    /*alias: {
      // Mock MongoDB's optional dependencies
      '@mongodb-js/zstd': 'unenv/runtime/mock/empty',
      'snappy': 'unenv/runtime/mock/empty',
      'kerberos': 'unenv/runtime/mock/empty',
      'aws4': 'unenv/runtime/mock/empty',
      'mongodb-client-encryption': 'unenv/runtime/mock/empty',
      'mongodb-js/client-encryption': 'unenv/runtime/mock/empty',
      'gcp-metadata': 'unenv/runtime/mock/empty',
      'snappy/package.json': 'unenv/runtime/mock/empty',
    },*/
    rollupConfig: {
      external: [
        '@mongodb-js/zstd',
        'snappy',
        'kerberos',
        'aws4',
        'mongodb-client-encryption',
        'mongodb-js/client-encryption',
        'gcp-metadata'
      ]
    }
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
