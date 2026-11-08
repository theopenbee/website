import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://theopenbee.com",
  integrations: [
    react(),
    sitemap({
      filter: page => !page.endsWith("/404/"),
      i18n: { defaultLocale: "en", locales: { en: "en", zh: "zh-CN" } },
    }),
  ],
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
});
