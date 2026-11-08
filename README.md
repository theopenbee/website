# OpenBee website

The marketing site for [OpenBee](https://github.com/theopenbee/openbee), built with [Astro](https://astro.build) and the [Arc](https://uiarc.dev) design system. English lives at `/` and Chinese at `/zh/`.

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
- `src/lib/release.ts` reads the latest GitHub release at build time to link each desktop installer. If the API call fails, the links fall back to the releases page. Set `GITHUB_TOKEN` to avoid the anonymous rate limit in CI.
- Rebuild after each OpenBee release so the download links and version stay current.

## Credits

Integration marks in `public/logos/` come from [Simple Icons](https://simpleicons.org) (CC0), [IconPark](https://github.com/bytedance/IconPark) (Apache-2.0), [MingCute](https://github.com/Richard9394/MingCute) (Apache-2.0), [TDesign Icons](https://github.com/Tencent/tdesign-icons) (MIT) and [theSVG](https://github.com/glincker/thesvg) (MIT). Each mark belongs to its owner and is shown only to name the integration.
