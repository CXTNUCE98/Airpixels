// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  components: [
    { path: "~/components/common", prefix: "Base" },
    { path: "~/components/layout", prefix: "Layout" },
    { path: "~/components/sections", prefix: "" },
  ],

  imports: {
    dirs: ["constants", "composables"],
  },

  app: {
    head: {
      title: "Airpixels - Art Shop",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Discover and buy beautiful artwork. Browse our curated collection of original paintings and prints." },
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

  css: ["@unocss/reset/tailwind.css"],

  compatibilityDate: "2025-04-15",
});
