import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/src/assets/styles/global.scss'],
  app: {
    head: {
      title: 'Mediakit',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Mediakit Squid' }
      ],
      bodyAttrs: {
        class: 'scrollbar light'
      }
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
      langs: ['en', 'pt', 'es']
    }
  }
})
