// https://nuxt.com/docs/api/configuration/nuxt-config
const env = require('dotenv').config();
const api_url = env.parsed.API_URL

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
    }
  },

  // components: true,
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})
