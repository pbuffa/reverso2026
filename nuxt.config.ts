// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },
  app: {
    head: {
      title: 'reversocollettivo',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'title', content: 'reversocollettivo' },
        { name: 'description', content: 'publishing and production' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.reversocollettivo.com' },
        { property: 'og:title', content: 'reversocollettivo' },
        {
          property: 'og:description',
          content:
            'reversocollettivo is a production studio specializing in audiovisual and editorial content that blends cinematic storytelling with documentary authenticity.'
        },
        { property: 'og:image', content: '/images/dsrt-sh.jpg' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:url', content: 'https://www.reversocollettivo.com' },
        { property: 'twitter:title', content: 'reversocollettivo' },
        {
          property: 'twitter:description',
          content:
            'reversocollettivo is a production studio specializing in audiovisual and editorial content that blends cinematic storytelling with documentary authenticity.'
        },
        { property: 'twitter:image', content: '/images/dsrt-sh.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'preload',
          href: '/fonts/SuisseIntl.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: ''
        },
        {
          rel: 'preload',
          href: '/fonts/SuisseWorks.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: ''
        }
      ]
    }
  }
})
