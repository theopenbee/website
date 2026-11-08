import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://theopenbee.com",
  integrations: [
    starlight({
      title: "OpenBee",
      description: "Docs for OpenBee, the team of always-on workers built on your agent CLI.",
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        zh: { label: "简体中文", lang: "zh-CN" },
      },
      favicon: "/favicon.svg",
      disable404Route: true,
      editLink: { baseUrl: "https://github.com/theopenbee/website/edit/main/" },
      customCss: [
        "@fontsource-variable/geist",
        "@fontsource-variable/inter",
        "@fontsource-variable/jetbrains-mono",
        "@fontsource/noto-sans-sc/400.css",
        "@fontsource/noto-sans-sc/500.css",
        "./src/components/arc/foundation.css",
        "./src/styles/tokens.css",
        "./src/styles/docs.css",
      ],
      components: {
        Header: "./src/components/docs/Header.astro",
        ThemeProvider: "./src/components/docs/ThemeProvider.astro",
        ThemeSelect: "./src/components/docs/Empty.astro",
        LanguageSelect: "./src/components/docs/LanguageLink.astro",
        MobileMenuFooter: "./src/components/docs/MobileMenuFooter.astro",
        FallbackContentNotice: "./src/components/docs/FallbackNotice.astro",
      },
      expressiveCode: {
        themes: ["github-dark", "github-light"],
        themeCssSelector: theme => `[data-theme="${theme.type}"]`,
      },
      sidebar: [
        {
          label: "Get started",
          translations: { "zh-CN": "开始使用" },
          items: ["docs", "docs/desktop", "docs/server", "docs/plugins"],
        },
        {
          label: "Write a plugin",
          translations: { "zh-CN": "编写插件" },
          items: [
            { slug: "docs/channel-plugin-protocol", label: "Channel plugin protocol", translations: { "zh-CN": "渠道插件协议" } },
            { slug: "docs/engine-plugin-protocol", label: "Engine plugin protocol", translations: { "zh-CN": "引擎插件协议" } },
          ],
        },
      ],
    }),
    react(),
    sitemap({
      filter: page => !page.endsWith("/404/"),
      i18n: { defaultLocale: "en", locales: { en: "en", zh: "zh-CN" } },
    }),
  ],
});
