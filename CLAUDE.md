# OpenBee website: project instructions

## Design system

The site is built on [Arc](https://uiarc.dev) (agent index: `https://uiarc.dev/llms.txt`). Arc items install with `pnpm arc:add <id>` into `src/components/arc/`, and the design tokens live in `src/components/arc/foundation.css`. Use an existing Arc component or block before writing UI, and style with Arc semantic tokens (`--background`, `--surface`, `--foreground`, `--text-secondary`, `--border`, `--accent`, `--success`, `--warning`, `--danger`) instead of raw colors.

### Border radius (strict)

Use `var(--radius-control)`, `var(--radius-panel)`, `var(--radius-surface)`, `var(--radius-inset)` or `var(--radius-pill)`. Never hard-code a radius. Nested corners are concentric: inner radius = outer radius minus the padding between them.

## Copy

Follow Arc copy rules: sentence case, no eyebrow labels, no em dashes, buttons are verbs with an object, honest claims only. Every visible string lives in `src/i18n/content.ts`, in English and Chinese. Docs pages are Markdown in `src/content/docs/`, English under `docs/` and Chinese under `zh/docs/`.

## Code style

Do not write code comments, except ones the code needs to run. Prefer English for everything in code; the Chinese copy in `src/i18n/content.ts` is the exception.
