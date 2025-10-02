import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: { transpile: ['swiper'] },
  vite: { ssr: { noExternal: ['swiper'] } },
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactTo:    process.env.CONTACT_TO,
    contactFrom:  process.env.CONTACT_FROM,
    whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '',
    whatsappText: process.env.NUXT_PUBLIC_WHATSAPP_TEXT || '',

  },
  nitro: {},
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Magno Studio — Branding, Web & Automatizaciones',
      meta: [
        // Siempre primero
        { charset: 'utf-8' },

        // Básicos
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Agencia digital moderna. Branding de alto impacto, diseño web con animaciones y desarrollo de apps/webapps. Estrategia, automatizaciones y resultados.',
        },
        { name: 'author', content: 'Magno Studio' },
        { name: 'robots', content: 'index,follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0ea5e9' }, // ajusta a tu marca

        // Open Graph (para compartir)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Magno Studio' },
        {
          property: 'og:title',
          content: 'Magno Studio — Branding, Web & Automatizaciones',
        },
        {
          property: 'og:description',
          content:
            'Branding de alto impacto y webs con animaciones. Desarrollamos soluciones que convierten.',
        },
        { property: 'og:url', content: 'https://magnostudio.com' }, // ajusta tu dominio
        {
          property: 'og:image',
          content: 'https://magnostudio.com/og-cover.jpg',
        }, // URL absoluta

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Magno Studio — Branding, Web & Automatizaciones',
        },
        {
          name: 'twitter:description',
          content:
            'Agencia digital moderna: branding, web con animaciones y automatizaciones.',
        },
        {
          name: 'twitter:image',
          content: 'https://magnostudio.com/og-cover.jpg',
        },
      ],
      link: [
        // Canonical (muy importante para SEO)
        { rel: 'canonical', href: 'https://magnostudio.com' },

        // Favicons / PWA básicos
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico',
          sizes: '16x16',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
          sizes: '180x180',
        },
        { rel: 'shortcut icon', href: '/dark/assets/imgs/favicon.ico' },
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },
      ],
      script: [
        { src: '/dark/assets/js/plugins.js' },
        { src: '/dark/assets/js/TweenMax.min.js' },
        { src: '/dark/assets/js/charming.min.js' },
        { src: '/dark/assets/js/countdown.js' },
        { src: '/dark/assets/js/ScrollTrigger.min.js' },
        { src: '/dark/assets/js/gsap.min.js' },
        { src: '/dark/assets/js/splitting.min.js' },
        { src: '/dark/assets/js/isotope.pkgd.min.js' },
        { src: '/dark/assets/js/imagesloaded.pkgd.min.js' },
        { src: '/dark/assets/js/ScrollSmoother.min.js' },
        // { src: '/showcase/dark/assets/js/anime.min.js' },
        { src: '/dark/assets/js/scripts.js', defer: true },
      ],
    },
  },
  css: [
    'swiper/css/bundle',
    '@/styles/globals.css',
    'flag-icons/css/flag-icons.min.css',
  ],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
