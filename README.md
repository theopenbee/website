# OpenBee website

The marketing site and docs for [OpenBee](https://github.com/theopenbee/openbee), built with [Astro](https://astro.build), [Starlight](https://starlight.astro.build) and the [Arc](https://uiarc.dev) design system. English lives at `/` and `/docs/`, Chinese at `/zh/` and `/zh/docs/`.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type check, then write the static site to dist/
pnpm preview    # serve dist/
```

Node.js 22.23 or later is required.

## How it is put together

- `src/i18n/content.ts` holds every visible string for both languages. Edit copy there.
- `src/components/site/` composes the page. Arc blocks are React islands; `Features` and `HowItWorks` are static Astro.
- `src/components/arc/` is installed Arc source. Add more with `pnpm arc:add <id>`, which wraps the shadcn CLI and strips comments.
- `src/content/docs/docs/` holds the English docs and `src/content/docs/zh/docs/` the Chinese ones, as Markdown. A page missing in Chinese falls back to English. The sidebar is set in `astro.config.mjs`.
- `src/components/docs/` overrides Starlight's header, theme and language switch, and `src/styles/docs.css` maps Starlight onto the Arc tokens.
- `src/lib/release.ts` reads the latest GitHub release at build time to link each desktop installer. If the API call fails, the links fall back to the releases page. Set `GITHUB_TOKEN` to avoid the anonymous rate limit in CI.
- Rebuild after each OpenBee release so the download links and version stay current.

## Deploy

`.github/workflows/deploy.yml` builds the site and uploads `dist/` to the Cloudflare Pages project `theopenbee`, served at [theopenbee.com](https://theopenbee.com). It runs on every push to `main`, once a day at 03:17 UTC so new OpenBee releases reach the download links, and on demand from the Actions tab.

It needs two repository secrets:

- `CLOUDFLARE_API_TOKEN`: an API token with the Account, Cloudflare Pages, Edit permission
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account that owns the `theopenbee.com` zone

Without them the workflow builds and skips the upload with a warning. The first upload creates the Pages project; then add `theopenbee.com` under the project's Custom domains.

## Credits

Integration marks in `public/logos/` come from [Simple Icons](https://simpleicons.org) (CC0), [IconPark](https://github.com/bytedance/IconPark) (Apache-2.0), [MingCute](https://github.com/Richard9394/MingCute) (Apache-2.0), [TDesign Icons](https://github.com/Tencent/tdesign-icons) (MIT) and [theSVG](https://github.com/glincker/thesvg) (MIT). Each mark belongs to its owner and is shown only to name the integration.
