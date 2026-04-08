import type { UserConfig } from "unocss";
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export const unoConfig: UserConfig = {
  theme: {
    colors: {
      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
        950: "#020617",
      },
    },
  },
  presets: [
    presetTypography(),
    presetAttributify(),
    presetUno(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
};

export default defineConfig(unoConfig);
