# KD Designs — Portfolio Scaffold

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first `@theme` config — see `app/globals.css`)
- next-themes for light/dark mode (class strategy, system-preference aware)
- React Three Fiber + drei (added, not yet wired into a scene)
- Framer Motion + GSAP (added, not yet wired into animations)

## Theming architecture
`lib/theme-tokens.ts` is the single source of truth for brand and theme
colors. `app/globals.css` mirrors those exact values as CSS custom
properties (`--color-bg`, `--color-fg`, etc.) mapped to Tailwind utilities.

Any React Three Fiber material must import colors from
`lib/theme-tokens.ts` — never hardcode a hex value in a `.tsx` component.
This keeps the DOM and the WebGL canvas visually in sync across theme
switches.

## Getting started
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Folder structure
```
app/
  layout.tsx      Root HTML skeleton, header/footer, theme provider
  page.tsx         Home page (placeholder hero — 3D scene added in Step 3)
  globals.css      Tailwind v4 theme + light/dark CSS variables
components/
  theme-provider.tsx
  theme-toggle.tsx
lib/
  theme-tokens.ts  Single source of truth for brand colors
```

## Deploying to Cloudflare Pages (no local build needed)

This project is set to Static Export (`output: "export"` in
`next.config.mjs`), which means Cloudflare's own build servers run
`npm install && npm run build` for you — you never need Node.js installed
on your own device.

1. Push this project to a GitHub repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, and select the repo.
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy. Cloudflare gives you a live preview URL immediately, and a new
   one on every push.

## Contact form setup

The contact form posts to an external form backend (static export has no
server of its own to handle submissions). Sign up at
[formspree.io](https://formspree.io) (or a similar service), then set
`NEXT_PUBLIC_FORM_ENDPOINT` in your `.env.local` (locally) and in
Cloudflare Pages → Settings → Environment Variables (for production).

## Phase status
1. ✅ Planning & architecture
2. ✅ Project scaffolding
3. ✅ Navigation + all 7 page routes (placeholder content)
4. ⬜ Page transition system
5. ⬜ 3D hero scene + ambient 3D accents (React Three Fiber)
6. ⬜ Work gallery + real project case studies
7. ⬜ Real content for Services / About / Testimonials
8. ⬜ Performance + accessibility audit
9. ⬜ Deployment
