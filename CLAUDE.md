# satz — Portfolio Site

Personal portfolio site for **Satheesh M** (satzartz), a graphic/visual designer with 6+ years of experience specialising in branding, logo design, and UI/UX. The site showcases client work and side projects.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 19 (standalone components) |
| Language | TypeScript 5.6.2 |
| Styling | SCSS — custom CSS-variable design system (no utility framework) |
| Carousel | Swiper 11.2.1 |
| Reactive | RxJS 7.8.0 |
| Testing | Karma 6.4 + Jasmine 5.4 |
| Build | Angular CLI 19 / `ng serve` / `ng build` |

---

## Commands

```bash
npm start        # dev server at http://localhost:4200
npm run build    # production build
npm test         # karma unit tests
```

---

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | — | Redirects to `/home` |
| `/home` | `HomeComponent` | Landing page — hero banner + work card grid |
| `/work/:id` | `WorkComponent` | Work detail page, driven by route param `id` |
| `/shop` | `ShopComponent` | Design resources shop |
| `/about` | `AboutComponent` | Personal bio page |

---

## Pages

### Home (`/home`)
Hero section with a headline ("Visual designer who solves Branding Solutions for Your Business"), a profile banner image, and an auto-scrolling Swiper badge carousel (UI/UX, Branding, Logo, Illustration, Typography, Design system, Branding kit). Below the hero is a grid of `WorkCard` components sourced from `home.component.data.ts`.

### Work Detail (`/work/:id`)
Dynamic page that reads the project `id` from the route and looks it up in `work.component.data.ts`. Renders:
1. `BrandCard` — hero with title, description, project logo, brand background colour, and breadcrumbs
2. Full-width banner image
3. `BrandContent` — labels, industry, goals, results prose
4. `BrandDesign` — design hero image, colour swatches, typography section
5. Optional second banner
6. Masonry-style image tile grid (pairs of images laid out in rows of 2)

### About (`/about`)
Personal bio for Satheesh: childhood passion for drawing, design philosophy (design as a game), personal life (father to a 3-year-old), and a CTA to collaborate. Contact: satzartz@gmail.com.

### Shop (`/shop`)
Design resources storefront. Header: "Resources Designed for Designers". Currently renders three placeholder `ShopItem` components.

---

## Work Projects

All projects are defined in `src/app/pages/work/work.component.data.ts` and referenced by the home page data in `src/app/pages/home/home.component.data.ts`.

| ID | Title | Industry | Brand Colours | Typography |
|---|---|---|---|---|
| `ezhumin` | Ezhumin (எழுமின்) | Energy / Sustainability | `#FEEC24` `#08D308` `#47CAFF` | Custom Tamil logotype |
| `boosync` | Boo-sync | Pet Tech / Consumer Electronics | `#FFD251` `#2DBA88` `#EFE6D4` `#FF90CB` | MODERNIZ-REGULAR |
| `gym` | Power House GYM | Fitness & Wellness | `#EC1C24` `#FFE800` `#000000` | RUSHFORD CLEAN – REGULAR |
| `majesty` | Your Majesty | Fashion | `#D4AF37` (gold accent) | — (placeholder) |

**Ezhumin** won 1st Runner-Up in the Tamil Nadu Government EV Branding Competition.

Adding a new project requires:
1. A new entry in `workDetailInfo` in `work.component.data.ts`
2. A new entry in `homeWorkInfo` in `home.component.data.ts`
3. Asset folder under `public/` (e.g. `public/projectname/`)

---

## Components

### Layout
| Selector | File | Purpose |
|---|---|---|
| `app-header` | `components/header/` | Site header: logo, dark/light toggle, nav, email CTA, hamburger menu (mobile) |
| `app-footer` | `components/footer/` | Footer: bio copy, nav links, social icons (Instagram, Twitter, email), "Globally Available for Work" badge |

### Shared UI
| Selector | File | Purpose |
|---|---|---|
| `app-button` | `components/button/` | Reusable button; supports `filled`, `inverse`, `iconRight` inputs |
| `app-badge` | `components/badge/` | Pill tag/label badge |
| `app-toggle` | `components/toggle/` | Dark/light theme switch |
| `app-breadcrumbs` | `components/breadcrumbs/` | Breadcrumb trail used on work detail pages |
| `app-work-card` | `components/work-card/` | Project card on the home grid; inputs: `title`, `description`, `labels`, `image`, `id`, `badge` |
| `app-shop-item` | `components/shop-item/` | Individual item card in the shop |

### Work Detail
| Selector | File | Purpose |
|---|---|---|
| `app-brand-card` | `components/brand-card/` | Hero card: title (raw HTML via `DomSanitizer`), description, logo, background colour, breadcrumbs |
| `app-brand-content` | `components/brand-content/` | Prose section: labels, industry, goals, results |
| `app-brand-design` | `components/brand-design/` | Visual identity section: colour swatches, typography, design hero image |

---

## Services

### `AppService` (`src/app/services/app.service.ts`)
Singleton service holding global UI state.

| Property | Type | Description |
|---|---|---|
| `isDarkTheme` | `boolean` | Controls dark/light mode across all components |

Theme is applied by toggling the `dark` CSS class on `document.body` inside `HeaderComponent.onTheme()`.

---

## Design System

Defined entirely through CSS custom properties in `src/styles.scss`. No utility CSS framework.

| Token | Light | Dark |
|---|---|---|
| `--page-color` | `#F2F2F2` | `#1A1A1A` |
| `--card-background` | `#fff` | `#000` |
| `--text-color` | `#000` | `#fff` |
| `--primary-color` | `#FF0000` | `#FF0000` |
| `--card-border-radius` | `30px` | `30px` |
| `--page-max-width` | `1440px` | `1440px` |
| `--page-inline-padding` | `40px` (15px mobile) | — |

**Font:** Outfit (variable weight), self-hosted at `public/fonts/Outfit/`.

---

## Assets

All static assets live under `public/` (served from root `/`). Structure follows project IDs:

```
public/
  banner.png            # Home hero portrait
  app-logo.svg          # Light theme logo
  app-logo-dark.svg     # Dark theme logo
  icons/                # globe, insta, twitter, email SVGs
  fonts/Outfit/         # Self-hosted variable font
  ezhumin/              # logo.svg, badge.svg, banner-1.png, design-hero.png, typo.png, tile-1..4.png
  boosync/              # logo.svg, banner-1.png, banner-2.png, design-hero.png, tile-1..4.png
  gym/                  # logo.svg, banner-1.png, design-hero.png, tile-1..4.png
```

---

## Contact

Email: satzartz@gmail.com  
Instagram / Twitter linked via footer icon buttons in `FooterComponent`.
