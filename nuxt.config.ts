// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SHOPIFY_API_ENDPOINT: process.env.SHOPIFY_API_ENDPOINT,
      SHOPIFY_API_ACCESS_TOKEN: process.env.SHOPIFY_API_ACCESS_TOKEN,
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  devtools: { enabled: true },
});
