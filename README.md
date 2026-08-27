# Heyo Docs website

The public documentation and landing site for [Heyo Docs](https://github.com/heyo-sh/heyo-docs). It is built with React Router, Bun, and Cloudflare Workers.

## Local development

Requires Bun 1.3.1 or later and a published version of `@heyo-sh/heyo-docs` that matches `package.json`.

```bash
bun install
bun run dev
```

Documentation source lives in `content/`; the site's navigation and metadata live in `heyo-docs.config.ts`.

## Checks

```bash
bun run knip
bun run typecheck
bun run build
```

## Deploy

The site deploys to Cloudflare Workers. After authenticating with Wrangler and creating the Worker:

```bash
bun run deploy
```

Use `bun run preview` to test the production build locally.
