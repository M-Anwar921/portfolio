# Muhammad Anwar — Portfolio

A modern, animated portfolio built with Next.js 15, TypeScript, Tailwind CSS,
and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

This has already been verified to build cleanly (`npm run build` compiles,
lints, type-checks, and statically generates all pages with zero errors).

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team):

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new.
3. Deploy — no configuration needed.

Netlify and any Node host also work fine (`npm run build && npm run start`).

## Things to fill in before you publish

- **Resume**: add your PDF at `public/resume.pdf` — the "Download Resume"
  button in the hero already links there.
- **OG image**: add a 1200×630 image at `public/og-image.png` for social
  link previews (currently referenced but not included).
- **Per-project links**: in `src/lib/data.ts`, each project can take a
  `github` and `demo` URL. Right now project "Code" buttons fall back to
  your main GitHub profile since exact repo URLs weren't specified — add
  the real repo/demo URLs per project when you have them.
- **Testimonials**: `src/lib/data.ts` → `testimonials` currently holds
  placeholders. Swap in real quotes once you have them.
- **Domain**: update `siteConfig.url` in `src/lib/data.ts` once you have a
  real domain — it feeds the sitemap, robots.txt, and Open Graph tags.

## Structure

```
src/
  app/            Next.js App Router pages, layout, SEO (metadata, sitemap, robots)
  components/     One file per section (hero, about, skills, projects, ...)
  components/ui/  Reusable primitives (button, card, badge, input, textarea)
  lib/data.ts     All site content lives here — edit this file to change copy
  types/          Shared TypeScript types
```

## Notes on features

- **Dark/light mode** via `next-themes`, defaults to dark, respects system
  preference, toggle in the navbar.
- **GitHub section** fetches your real public repos and a live contribution
  graph at build/request time — no manual updates needed as you ship more.
- **Project search & filtering** is client-side, instant, no backend.
- **Contact form** opens the visitor's email client with a pre-filled
  message (there's no backend/email service wired up — swap in your own
  handler, e.g. via `Resend` or `Formspree`, if you want it delivered
  without opening a mail client).
- Respects `prefers-reduced-motion` and keeps visible focus states for
  accessibility.
