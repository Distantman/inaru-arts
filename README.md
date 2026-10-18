# Inaru — Multidisciplinary Artist Portfolio (`Inaru Arts`)

An art-directed, static-export Next.js portfolio website designed for **Inaru**, a multidisciplinary female artist working across:
- **Live Wedding & Event Illustration**
- **Murals & Painted Spaces** (Cafés, restaurants, studios, and interiors)
- **Fashion & Figure Drawing**
- **Drawing Classes & Workshops**
- **Personal Studies & Commissions**

---

## Technology Stack

- **Framework:** Next.js (App Router) configured with `output: "export"`
- **UI Library:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion (with `prefers-reduced-motion` support)
- **Icons:** Lucide React
- **Deployment Target:** Cloudflare Pages / Workers (`./out` static export directory)

---

## Local Development & Production Build

```bash
# Start local development server
npm run dev

# Build static production export into ./out
npm run build
```

The static build outputs pure HTML/CSS/JS and optimized local assets into the **`out/`** folder, ready for direct deployment to **Cloudflare Pages** or **Cloudflare Workers Static Assets** (`wrangler.jsonc` included).

---

## Customizing Content & Replacing Sample Artwork

1. **Centralized Portfolio Content:**
   Edit [`lib/portfolio-data.ts`](./lib/portfolio-data.ts) to update the artist's wordmark (`"Inaru"`), biography, email address, social links, services, workshop formats, or artwork metadata.
2. **Replacing Sample Images:**
   All 26 sample images live in [`public/images/`](./public/images/). See [`IMAGE-GUIDE.md`](./IMAGE-GUIDE.md) for the complete table of filenames, dimensions, and aspect ratios.
