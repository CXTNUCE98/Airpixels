// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  components: [
    { path: "~/components", prefix: "" },
    { path: "~/components/layout", prefix: "Layout" },
    { path: "~/components/sections", prefix: "" },
  ],

  imports: {
    dirs: ["composables", "composables/*.ts"],
  },

  app: {
    head: {
      title: "Airpixels Media - Photography & Film",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Stockholm-based commercial photographer crafting timeless photography and film for brands that value authenticity." },
      ],
    },
    baseURL: "/",
  },

  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  
  i18n: {
    defaultLocale: "vi",
    langDir: "../src/locales",
    locales: [
      { code: "vi", name: "Tiếng Việt", file: "vi.json" },
      { code: "en", name: "English", file: "en.json" }
    ],
  },

  css: ["@unocss/reset/tailwind.css", "boxicons/css/boxicons.min.css"],

  compatibilityDate: "2025-04-15",
});
