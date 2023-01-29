import { defineNuxtConfig } from 'nuxt/config'

const langs = ['en', 'pt', 'es']
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/src/assets/styles/global.scss'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: langs.map((l) => {
      return {
        code: l,
        iso: l,
        name: l,
        files: [`${l}.json`]
      }
    }),
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  app: {
    head: {
      title: 'Mediakit',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Mediakit Squid' },
        { name: 'application-name', content: 'Mediakit Squid' },
        { name: 'apple-mobile-web-app-title', content: 'Mediakit Squid' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-TileColor', content: '#9dd6e8' },
        { name: 'theme-color', content: '#9dd6e8' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@squidinfluencers' },
        { name: 'twitter:creator', content: '@squidinfluencers' },
        { name: 'twitter:title', content: 'Mediakit Squid' },
        { name: 'twitter:description', content: 'Mediakit Squid' },
        { name: 'twitter:image', content: '/img/favicon.png' },
        { name: 'twitter:image:alt', content: 'Mediakit Squid' },
        { name: 'og:title', content: 'Mediakit Squid' },
        { name: 'og:description', content: 'Mediakit Squid' },
        { name: 'og:image', content: '/img/favicon.png' },
        { name: 'og:image:alt', content: 'Mediakit Squid' },
        { name: 'og:image:width', content: '512' },
        { name: 'og:image:height', content: '512' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:site_name', content: 'Mediakit Squid' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://mediakit.squidit.com.br' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/img/favicon.ico'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/img/favicon.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/img/favicon.png'
        },
        {
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png',
          href: '/img/favicon.png'
        },
        {
          rel: 'icon',
          sizes: '194x194',
          type: 'image/png',
          href: '/img/favicon.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          type: 'image/png',
          href: '/img/favicon.png'
        },
        {
          rel: 'mask-icon',
          href: '/img/favicon.png',
          color: '#9dd6e8'
        }
      ],
      bodyAttrs: {
        class: 'scrollbar light'
      },
      htmlAttrs: {}
    }
  },
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
      name: `${process.env.npm_package_name}-${process.env.NODE_ENV}`,
      firebaseConfig: {
        apiKey: 'AIzaSyDJYD4QMUsNR1BTgsK3Bhlaz84O8CvvqY8',
        authDomain: 'squid-apis.firebaseapp.com',
        databaseURL: 'https://squid-apis-default-rtdb.firebaseio.com',
        projectId: 'squid-apis',
        storageBucket: 'squid-apis.appspot.com',
        messagingSenderId: '80623619588',
        appId: '1:80623619588:web:4aaad918295c003c9baf51',
        measurementId: 'G-HS3Y5YW9KL'
      },
      fullPageKey: 'E3A4256B-7384491D-9C19176A-969361AB',
      squidApis: {
        heimdall: process.env.HEIMDALL_API_URL,
        x23: process.env.X23_API_URL
      },
      langs
    }
  }
})
