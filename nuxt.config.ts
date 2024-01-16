// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      MY_VAR: process.env.MY_VAR,
      API_BACKEND: process.env.API_BACKEND,
    }
  },
  devtools: {enabled: true},
  modules: [
    "@pinia/nuxt",
    '@nuxtjs/robots',
  ],
})