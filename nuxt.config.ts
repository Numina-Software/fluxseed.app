// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'FluxSeed | Impregnable seed(s) for your digital wallets',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [
        { name: 'description', content: 'Generate UNIQUE 4096bits sequences based on real-word entropy which can never be replicated by any other (quantum or not) device' },
      ],
      script: [
        { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XE2EKNK0XQ' },
        { innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XE2EKNK0XQ');` }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ]
    }
  }
})
