<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Pareeksha Landing Page

Read this file fully before writing or editing any code in this repository. Every rule is mandatory. If a request conflicts with this file, follow this file and mention the conflict in your reply. (For Claude Code, this file can be renamed or copied to `CLAUDE.md`.)

## 1. Project

- Product: **Pareeksha**, an end-to-end hiring platform plus lightweight CRM for small companies: online assessments, coding rounds, AI-assessed rounds, AI interviews, question bank, candidate pipeline, automated notifications.
- Tagline: "The hiring stack for small teams."
- Scope: one static marketing landing page. Light paper theme first, dark theme supported.
- Voice: confident, minimal, premium. Short sentences, sentence case, no hype words, no emojis in UI copy, no lorem ipsum, no leftover TODOs.

## 2. Stack (strict)

| Area | Rule |
| --- | --- |
| Framework | **Next.js 16** (latest 16.x), App Router only. No Pages Router. |
| Bundler | **Turbopack** (default in 16). Never pass `--webpack`. Never add webpack config. |
| React | React 19.2 (installed by Next 16). TypeScript strict, TS 5.1+. |
| Runtime | Node.js 20.9+ (22 LTS recommended). |
| Package manager | **npm only**. Never pnpm or yarn. Commit `package-lock.json`. |
| Styling | **Vanilla CSS**: CSS Modules (`*.module.css`) plus 3 global files. No Tailwind, no shadcn, no CSS-in-JS, no UI kit, no Sass. |
| Animation | CSS only (keyframes, transitions, scroll-driven animations). No Motion, framer-motion, GSAP. |
| Icons | Inline SVG components in `components/icons.tsx`. No icon library. |
| Images | None. Every visual is a code-built mock UI (section 9). No raster files, no hotlinked images, no `next/image`. |
| Fonts | Instrument Serif (display), Geist (UI), Geist Mono (numbers and labels), and Noto Serif Devanagari (one decorative use) through `next/font/google`, 2 weights max each, `display: "swap"`. |
| Dependencies | Zero runtime dependencies beyond `next`, `react`, `react-dom`. Justify any addition in your reply. |

### Browser targets (Next 16 baseline)
Chrome 111+, Edge 111+, Firefox 111+, Safari 16.4+. Newer CSS (scroll-driven animations, `::details-content`, `interpolate-size`, `@starting-style`) must always sit behind `@supports` with a working fallback.

## 3. Next.js 16 rules (do not use outdated Next 15 patterns)

- **Async request APIs**: `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` must be awaited. This landing page should not need any of them (see below).
- **Keep the page fully static.** Do NOT call `cookies()`, `headers()`, `searchParams` or any dynamic API in `app/layout.tsx` or `app/page.tsx`. Theme is handled with an inline script plus `localStorage`, NOT a cookie (a server-read cookie would force dynamic rendering).
- **Cache Components stay OFF.** Do not set `cacheComponents` and do not use `"use cache"`. The page is static by default. Do not use the removed `experimental.ppr`, `experimental.dynamicIO` or `export const experimental_ppr`.
- Route segment config `export const dynamic = "force-static"` is allowed on `app/page.tsx` (only valid because Cache Components is off).
- **React Compiler stays OFF** (`reactCompiler` not set). Almost everything is a Server Component and the client islands are tiny; the compiler adds build time and Babel for no gain.
- **No `middleware.ts`.** If request interception is ever needed, use `proxy.ts` with an exported `proxy` function. This project needs neither.
- **No `next lint`** (removed in 16) and `next build` no longer lints. Use ESLint directly with flat config (`eslint.config.mjs`) via `npm run lint`.
- `next.config.ts` uses the top-level `turbopack` key if ever needed (never `experimental.turbopack`). `serverRuntimeConfig`/`publicRuntimeConfig` are removed; use env vars.
- Smooth scrolling: Next 16 no longer forces `scroll-behavior: smooth`. Because the page uses CSS smooth scrolling for anchor links, set `data-scroll-behavior="smooth"` on `<html>` and define `scroll-behavior: smooth` in `base.css` (disabled under reduced motion).
- Parallel routes need explicit `default.js`; this project uses none.
- Navigation: use `next/link`. Next 16 handles layout deduplication and incremental prefetching automatically; do not hand-roll prefetching.
- `package.json` scripts (exact):
  - `"dev": "next dev"`, `"build": "next build"`, `"start": "next start"`
  - `"lint": "eslint ."`, `"typecheck": "tsc --noEmit"`
  - `"check": "npm run lint && npm run typecheck && npm run build"`
- Optional dev speed: `experimental.turbopackFileSystemCacheForDev: true` in `next.config.ts`.
- Optional AI tooling: the Next.js DevTools MCP can be added to `.mcp.json` (`npx -y next-devtools-mcp@latest`) so agents can read build and runtime errors.

### `next.config.ts` (exact baseline)
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
```

### Scaffolding command
```bash
npx create-next-app@latest pareeksha --ts --eslint --app --no-tailwind --no-src-dir --import-alias "@/*" --use-npm
```
Decline Tailwind and the React Compiler if prompted.

## 4. File structure

```
app/
  layout.tsx              fonts, metadata, viewport, theme inline script, <html data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
  page.tsx                composes sections (Server Component)
  opengraph-image.tsx     ImageResponse OG image
  icon.svg                favicon
  not-found.tsx
styles/
  tokens.css              ALL design tokens (single source of truth)
  base.css                @layer order, reset, typography, focus ring, reduced motion, scroll-behavior
  utilities.css           .container .eyebrow .gradient-text .btn .btn-primary .btn-secondary .chip .card .spotlight .marquee .reveal .visually-hidden
components/
  landing/                Navbar, Hero, ShowcaseWall, LogoCloud, FlowCollage, Catalogue, Integrations, Testimonials, Videos, Faq, FinalCta, Footer
  mocks/                  shared primitives plus every mock component
  islands/                the ONLY "use client" files
  icons.tsx
lib/
  content.ts              ALL copy, captions, FAQs, testimonials, nav links
  seo.ts                  JSON-LD builders
eslint.config.mjs
next.config.ts
tsconfig.json
package.json
```

Rules:
- One component per file; file name equals the PascalCase component name.
- Each component has a sibling `Component.module.css`.
- Copy lives in `lib/content.ts`, never inline in JSX.
- Import `styles/*.css` only in `app/layout.tsx`, in this order: tokens, base, utilities.

## 5. Styling rules (consistency)

### Tokens
- Every color, radius, spacing value, font size, duration, easing, shadow and z-index comes from a variable in `styles/tokens.css`. Never hard-code a hex value, off-scale spacing or a duration in a component. If a token is missing, add it to `tokens.css` first.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (`--space-1` ... `--space-10`).
- Radii: `--r-lg` 24px, `--r-md` 16px, `--r-sm` 12px, `--r-input` 10px, `--r-pill` 999px. Borders always 1px.
- Light colors: `--bg #F5F1E8`, `--surface #FBF8F1`, `--card #FFFFFF`, `--ink #14110F`, `--body #2A2622`, `--muted #6B645A`, `--rule #D9D2C3`, `--rule-strong #14110F`, `--accent #E4572E`, `--accent-ink #FFFFFF`, `--highlight #F3D36B`.
- Dark colors (`[data-theme="dark"]`): `--bg #12100E`, `--surface #1A1714`, `--card #1F1B17`, `--ink #F2EEE4`, `--body #D8D2C6`, `--muted #968F82`, `--rule #2E2923`, `--rule-strong #F2EEE4`, `--accent #FF6B3D`, `--highlight #E0B93D`.
- Domain colors: `--d-tech #2B4C7E`, `--d-mba #7A3558`, `--d-ca #1F5B4A`, `--d-marketing #C26A12`, `--d-ops #5B5F66`.
- Status: `--ok #1F7A4F`, `--warn #C9861A`, `--bad #B3261E`. No gradients on text, no gradient borders, and no glow shadows.
- Easings/durations: `--ease-out cubic-bezier(0.22, 1, 0.36, 1)`, `--dur-micro 150ms`, `--dur-hover 200ms`, `--dur-reveal 600ms`, `--dur-shine 600ms`.

### Typography (only these sizes)
- H1 uses Instrument Serif: `clamp(52px, 7vw, 96px)` / 0.98, tracking -0.02em. H2 uses Instrument Serif: `clamp(36px, 4.5vw, 60px)` / 1.02. H3 22/28 Geist 600.
- Body Geist 17/28. Small 14/22. Labels Geist Mono 12px uppercase tracking 0.08em. Mock text 11 to 14px.

### Layout
- `.container`: max-width 1240px, centered, padding-inline 16px mobile / 32px desktop.
- Section padding-block: 80px mobile / 128px desktop. Gaps: 16px between cards, 24px between large cards.
- Breakpoints: 640, 768, 1024, 1280, 1536; mobile-first with `min-width`. Use `@container` for card internals.

### CSS conventions
- Modern CSS: native nesting, logical properties, `clamp()`, `aspect-ratio`, `color-mix()`, `mask-image`, container queries.
- Class names inside modules: lowercase BEM-lite (`.card`, `.card__title`, `.card--active`).
- No `!important`, no ID selectors, no inline `style` except CSS-variable hand-offs (`style={{ "--i": index } as React.CSSProperties}`).
- Layer order declared once in `base.css`: `@layer reset, tokens, base, components, utilities;`.
- If a style appears in 2+ components, promote it to `utilities.css`.

### Shared components
- Buttons: 44px high, 24px horizontal padding. Primary uses ink or accent with a tactile hard shadow; hover shifts it. Secondary uses a rule and underline interaction.
- Cards: `--card` bg with a structural rule; selected cards may use `--shadow-hard`. No spotlight effects.
- Focus: 2px accent ring, 2px offset, on every interactive element. Never remove outlines without a replacement.
- Touch targets 44px minimum.

## 6. Motion rules

- Animate only `transform` and `opacity` (plus `filter`/`mask` where specified). Never animate width, height, top, left, margin or box-shadow in keyframes.
- Use `translate3d`; set `will-change` only on elements actively animating.
- Durations: 150ms micro, 200ms hover, 600ms reveal. Easing `--ease-out`.
- Reveal: y 24px to 0, opacity 0 to 1, once, stagger 60ms (`--i`).
- Marquee: duplicated track, linear infinite, paused when `data-inview="false"` and on hover.
- Prefer native CSS: scroll-driven animations (`animation-timeline: view()` / `scroll()`), `<details name>`, `<dialog>`, `@starting-style`, scroll-snap, `@property` counters.
- Everything stops under `prefers-reduced-motion: reduce`.
- No floating card clouds and no parallax tilt on every card.

## Anti-template rules

- No purple, indigo, or violet gradients; no glow blobs, glow shadows, light beams, gradient text, gradient borders, glass cards, floating-card clouds, sparkle badges, letter-avatar rows, star-rating rows, or fake company logos.
- Avoid symmetric, center-aligned compositions and repeated identical icon-card grids. Use asymmetric editorial layouts, visible hairline rules, serif display type, mono labels, specific Indian business data, annotations, stickers, and tactile hard shadows.

## 7. Client islands (only these may use "use client")

| Island | Job |
| --- | --- |
| `ThemeToggle` | toggles `data-theme`, writes `localStorage` |
| `SpotlightRoot` | one `pointermove` listener, rAF-throttled, sets `--x`/`--y` on the hovered `.spotlight` |
| `InViewObserver` | one shared IntersectionObserver: toggles `data-inview` for marquee play-state, reveal fallback, lazy mounts |
| `VideoDialogController` | calls `dialog.showModal()` / closes, restores focus |
| `MobileMenuController` | opens and closes the native `<dialog>` drawer |
| `CarouselDrag` | pointer drag on the scroll-snap track |

Each island stays under 1.5 KB gzip and contains no data fetching.

## 8. Performance and SEO

- `app/page.tsx` is a Server Component. All sections, mocks, cards and the footer are Server Components with zero client JS.
- Hero and Navbar are eager. Below-the-fold sections use `content-visibility: auto` with `contain-intrinsic-size` and a fixed height, so no layout shift.
- Theme: `<html data-theme="light" suppressHydrationWarning>` plus an inline `<script>` in `<head>` that reads `localStorage.theme` (default "light") and sets `data-theme` before paint. Set `color-scheme` per theme.
- Metadata API: `metadataBase`, title template, description, canonical, openGraph, twitter; `viewport` export with `themeColor`. `opengraph-image.tsx` via `next/og`. JSON-LD: SoftwareApplication and FAQPage.
- Budgets: initial JS under 60 KB gzip, LCP under 1.2 s on 4G, INP under 100 ms, CLS under 0.02, Lighthouse 98+ on all four.
- No layout-triggering animations, no large blur filters on animating layers, no more than 3 simultaneously animating marquee rows.

## 9. Mock UI rules (replacing all images)

- Mocks are Server Components in `components/mocks/` built from shared primitives: MockWindow, Chip, Avatar (initials), Bar, Sparkline, Donut, KanbanColumn, TableRow, CodeBlock, ScoreRing.
- Frame: 16:10 (480x300 base), scales with container query units, bg `#0A0A0A`, 1px `#262626` border, 12px padding.
- Only short legible labels. No real company logos, no real people's names or faces (initials avatars, generic sample names).
- Pure presentational: no state, no fetching, fixed height.
- Any customer logo, testimonial or metric ("500+ teams") is **sample data**; mark it `// SAMPLE: replace with real data` in `lib/content.ts`.

## 10. Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section` with headings, `footer`), exactly one `h1`.
- Icon-only buttons have `aria-label`; decorative SVGs have `aria-hidden="true"`.
- AA contrast in both themes.
- Dialogs and drawers use native `<dialog>`; Esc closes; focus returns to the trigger.
- Everything keyboard reachable in logical order; visible focus ring.

## 11. Content rules

- All strings live in `lib/content.ts`, typed and exported as constants.
- Sentence case for headings and buttons; "Pareeksha" keeps its capital P.
- Never invent real customers, certifications, security claims or compliance badges.

## 12. Quality gates (run before finishing any task)

1. `npm run check` passes (lint, typecheck, build) with no warnings.
2. No hard-coded colors or off-scale spacing: search the CSS for `#` outside `tokens.css`.
3. No horizontal scroll at 375px; verify at 375, 768, 1280, 1536.
4. Check both themes; check with `prefers-reduced-motion` on.
5. No console errors, no hydration warnings.
6. Confirm the build output marks `/` as static (○), not dynamic.

## 13. How to work

- Make the smallest change that satisfies the request. Do not refactor unrelated files.
- Reuse existing components and tokens before creating new ones.
- When adding a section: follow the folder pattern, add its copy to `lib/content.ts`, add its tokens to `tokens.css` if needed.
- When unsure, match existing code. Do not silently introduce a new pattern.
- After finishing, summarize the change in 2 to 3 sentences and list any rule you could not follow and why.
