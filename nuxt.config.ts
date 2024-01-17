// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      MY_VAR: process.env.MY_VAR,
      BACKEND_URL: process.env.BACKEND_URL,
    }
  },
  devtools: {enabled: true},
  modules: [
    "@pinia/nuxt",
    '@nuxtjs/robots',
  ],
})