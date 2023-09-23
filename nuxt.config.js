// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  imports: {
    dirs: ["store"],
  },
  buildModules: ["@nuxtjs/svg"],
  modules: ["@nuxt/devtools", "@pinia/nuxt","@nuxtjs/tailwindcss"],
  extends: ["nuxt-seo-kit"],
  routeRules: {
    "/**": { robots: "index, follow" },
  },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  css: ["~/assets/styles/main.scss"],
  render: {
    csp: {
      hashAlgorithm: "sha256",
      addMeta: true,
    },
  },
});
