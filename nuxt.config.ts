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
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  }
})