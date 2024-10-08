// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['radix-vue/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  compatibilityDate: '2024-10-05',
  nitro: {
    prerender: {
      routes: ['/culture'],
    },
  },
})
