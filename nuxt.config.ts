// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['radix-vue/nuxt', '@nuxtjs/tailwindcss', "@nuxt/image", "@nuxt/content"],
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
})