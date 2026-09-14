// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },
  vite: {
    plugins: [
      {
        name: 'ios-mp4-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = String((req as { url?: string }).url || '').split('?')[0] ?? ''
            if (!url.endsWith('.mp4')) return next()
            const setHeader = res.setHeader.bind(res)
            res.setHeader = ((name: string, value: unknown) => {
              if (String(name).toLowerCase() === 'etag') return res
              return setHeader(name, value)
            }) as typeof res.setHeader
            next()
          })
        }
      }
    ]
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
