# Terralume Hotel & Resort

> *Nature's Beauty, Your Perfect Stay — a place to slow down.*

A luxury boutique resort website built with **Next.js 14 + Tailwind CSS**. One-page experience covering brand hero, room showcase, experiences, gallery, and a mock quick-booking flow — all in the earthy Terralume visual world.

## Features

- **Hero slider (01 / 02 / 03)** — fullscreen crossfade with slow Ken Burns drift, art-directed mobile portrait crops
- **Rooms & Suites ×3** — Deluxe Sea View, Terrace Pool Suite, Garden Pavilion, each with detail modal
- **Experiences ×3** — Sunrise Yoga, Coastal Culinary Journey, Island Sailing, with program modals and a persisted **wishlist** (localStorage)
- **Quick booking (mock)** — dates, guests, room preselect, client validation, confirmation with booking reference (`TRL-XXXXXX`)
- **Gallery mood collage**, sticky navbar with mobile full-screen drawer, footer with booking CTA
- **SEO** — OpenGraph, `Hotel` JSON-LD, sitemap, robots, theme-color, custom favicon set

## Tech Stack

| Layer    | Choice                                              |
| -------- | --------------------------------------------------- |
| Framework| Next.js 14 (App Router, TypeScript)                 |
| Styling  | Tailwind CSS 3 + CSS variables (brand tokens)       |
| Fonts    | Playfair Display + Montserrat via `next/font`       |
| Icons    | Lucide React                                        |
| Images   | `next/image` (AVIF/WebP) + Sharp pre-optimized assets |
| Motion   | CSS keyframes + IntersectionObserver reveals        |

Brand tokens: Sand `#E5C89F` · Terracotta `#C37956` · Olive Gold `#BE9244` · Deep Brown `#654433` · Warm White `#F6F4EE`

## Getting Started

Prerequisites: Node.js 18+.

```bash
npm install
```

### Run

> **Windows note:** this folder name contains spaces and `&`, which breaks
> `npm run` scripts under `cmd.exe`. Invoke Next.js directly:

```bash
# development (http://localhost:3100)
node ./node_modules/next/dist/bin/next dev --port 3100

# production build + serve
node ./node_modules/next/dist/bin/next build
node ./node_modules/next/dist/bin/next start --port 3101
```

> Never run `dev` and `start` at the same time from this folder — both use
> `.next` and will corrupt each other's output.

## Project Structure

```
app/
  layout.tsx        Metadata, OG, JSON-LD, fonts, favicon routes
  page.tsx          Home composition + booking state
  globals.css       Tokens, easings, keyframes, reveals
  robots.ts / sitemap.ts / icon.svg / icon.png / apple-icon.png
components/
  Navbar / Hero / Rooms / Experiences / Gallery /
  Footer / BookingModal / Reveal
data/
  content.ts        Rooms + experiences (mock inventory)
public/images/      Pre-optimized .webp (+ og.jpg)
```

## Images & Performance

Source photography lives at the repo root and in `4k/`; served assets in
`public/images/` are Sharp-generated WebP variants:

- Desktop 16:9 up to 3584px, mobile 1500×2000 portrait crops (no landscape upscale blur)
- Hero slider mounts slide images on first visit only (initial load = slide 1)

Lighthouse (production, simulated throttling):

|          | Mobile | Desktop |
| -------- | ------ | ------- |
| Performance   | 93 | 99 |
| Accessibility | 96 | 95 |
| Best Practices| 100 | 100* |
| SEO           | 100 | 100 |

*Desktop BP was re-verified clean after fixing favicon + prod serving.

## Booking

The booking flow is **frontend-only mock** — no database. Room preselect,
date/guest validation, and reference generation all run client-side.

## Roadmap

- [ ] Real booking backend (Prisma + Supabase/Neon per `05_backend_database_schema.md`)
- [ ] Availability + pricing engine
- [ ] i18n (TH/EN)
- [ ] Vercel deployment

## Docs

Full product blueprint ships with the repo: `01_product_requirements_document.md`
through `06_implementation_plan.md`, plus the brand direction board image.
