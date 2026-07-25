# Light Sass Landing Page — Vite + React + TS

Converted from the original Next.js 14 App Router project
(https://github.com/devwithzain/light-sass-landing-page) to a Vite + React + TypeScript SPA.

## What changed from the original Next.js repo
- `app/layout.tsx` + `app/page.tsx` → merged into `src/App.tsx`, mounted via `src/main.tsx`
- `next/image` → plain `<img>` tags
- `next/link` → plain `<a>` tags
- `next/navigation`'s `usePathname` → removed (site is a single page, no real routing)
- All `"use client"` directives removed (meaningless outside Next)
- Image assets moved from `public/` into `src/assets/images/` so they can be imported as
  ES modules (Vite doesn't support importing from `public/`); barrel export preserved as
  `src/assets/images/index.ts`
- `@/public` import alias → `@/assets/images`
- Removed a stray, unused `import { features } from "process"` that was dead code in the
  original repo's `constants/index.ts` and would break in the browser
- `framer-motion` pinned to `^11.3.19` (same version the original repo used — a newer
  major version has stricter TypeScript types that don't match this code)
- Tailwind config content paths updated for the `src/` layout; otherwise unchanged
- `tailwind.config.ts`, `postcss.config.js`, `globals.css` (with the DMSans `@font-face`)
  all carried over close to verbatim

## Getting started
```bash
npm install
npm run dev      # start dev server
npm run build    # production build (runs tsc -b && vite build) — verified working
npm run preview  # preview the production build
```

This project was built and preview-served successfully during conversion — `npm run build`
produces a working `dist/` with all images, the DMSans font, and CSS correctly bundled.
