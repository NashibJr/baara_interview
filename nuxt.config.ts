// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/styles/index.css"],
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});
