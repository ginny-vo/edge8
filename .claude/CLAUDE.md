# Edge8 — Claude Code Project Guide

## Project Overview
Marketing website for **Edge8**, an AI programs consulting and staffing company.
Built with Next.js App Router + Tailwind CSS v4. All core pages are live on Vercel.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + design tokens in `app/globals.css`
- **Deployment:** Vercel (`https://edge8.vercel.app`)
- **Animation:** `ScrollReveal` component for entrance animations

## Folder Structure
```
edge8/
├── .claude/              # Claude Code environment
├── public/images/        # Static assets (logos, hero, services, blog, clients)
├── docs/pages/           # Content source of truth (*.md per page)
├── app/                  # Next.js App Router
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Design tokens + keyframes
│   ├── about/
│   ├── blog/
│   ├── case-studies/
│   └── services/         # One folder per service page
└── components/           # Shared components
    ├── Nav.tsx            # Fixed nav, heroMode-aware
    ├── Footer.tsx
    ├── ThemeToggle.tsx    # Accepts heroMode prop
    ├── ContactForm.tsx
    ├── Steps8.tsx         # Scroll-driven 8-step stepper
    ├── TestimonialsCarousel.tsx
    ├── ScrollReveal.tsx
    └── ui/
        └── unique-testimonial.tsx
```

---

## Design System

### Color Tokens (Tailwind v4 CSS variables)
All colors are defined as CSS variables in `app/globals.css` and registered as Tailwind utilities.

| Token | Value | Usage |
|---|---|---|
| `bg-neutral` / `text-neutral` | Navy `#04102D` | Always-dark sections (Hero, Contact) |
| `bg-secondary` / `text-secondary` | Blue `#287BE8` | Primary CTAs, links, accents |
| `bg-primary` / `text-primary` | Mint `#6FF2C1` | **Light color — only use on dark backgrounds** |
| `text-warning` / `bg-warning` | Gold | Workshop/Training accent |
| `text-accent` / `bg-accent` | Rose/Pink | Tags, badges |
| `bg-base-100` | White | Main page background |
| `bg-surface-raised` | Near-white | Card fills |
| `bg-surface-overlay` | Neutral gray | Alternating section tint (no blue cast) |
| `text-text-primary` | Navy | Body headings |
| `text-text-secondary` | Mid gray | Body copy |
| `text-text-tertiary` | Light gray | Labels, captions |
| `text-text-inverse` | White | Text on dark sections |
| `border-border` | Light gray | Dividers |

### ⚠️ Critical Color Rules
- **Never use `text-primary` or `bg-primary` (mint) on light backgrounds** — it's near-white and invisible.
- On dark sections (`bg-neutral`): use `text-text-inverse`, `text-primary`, `text-secondary` freely.
- On light sections: use `text-secondary` (blue) for accents, never mint.
- **Primary CTA buttons on light bg**: `bg-secondary text-text-inverse` (blue).
- **Primary CTA buttons on dark bg**: `bg-secondary text-text-inverse` or `bg-primary text-primary-contrast`.
- **Warning-accent pages** (workshop, training): use `bg-warning text-neutral` for CTAs.

---

## Section Background Rhythm

Alternate between these two for visual separation. Never use `bg-neutral-50` (blue-tinted).

| Token | Color | Use for |
|---|---|---|
| `bg-base-100` | Pure white | Primary sections |
| `bg-surface-overlay` | Neutral gray (no blue) | Alternate sections |
| `bg-neutral` | Navy | Hero, Contact, dark CTAs — always dark |

---

## Card Patterns (No Border Boxes)

Cards should use **shadow + background**, not `border border-border`.

```tsx
{/* Standard card on tinted section */}
<div className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 transition-all">

{/* Card with accent top bar */}
<div className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
  ...
</div>

{/* Highlighted pricing card */}
<div className="bg-secondary rounded-2xl p-10 text-white shadow-lg shadow-secondary/25">
```

---

## Page Structure

### Every page needs:
1. `export const metadata` with title + description
2. `<Nav />` and `<Footer />` (from `app/layout.tsx` — already included globally)
3. `<main>` wrapper with sections

### Hero Section (dark, always `bg-neutral`)
```tsx
<section className="relative bg-neutral overflow-hidden">
  <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]"
    style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.18) 0%, transparent 70%)' }} />
  <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
    <div className="max-w-3xl">
      <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/10 border border-secondary/25 px-3.5 py-1.5 rounded-full mb-6">Eyebrow</span>
      <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">Headline</h1>
      <p className="text-lg text-text-inverse/80 font-medium leading-relaxed mb-4">Subtitle</p>
      <p className="text-base text-text-inverse/50 leading-relaxed mb-9 max-w-[540px]">Body</p>
      <div className="flex gap-3.5 flex-wrap">
        <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Primary CTA</Link>
        <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Secondary</Link>
      </div>
    </div>
  </div>
  {/* Optional hero stat bar */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
    {stats.map(stat => (
      <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
        <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
        <div className="text-base font-bold text-text-inverse">{stat.value}</div>
      </div>
    ))}
  </div>
</section>
```

### Service Page Section Pattern
```tsx
{/* Alternating sections */}
<section className="py-24 bg-surface-overlay">   {/* tinted */}
<section className="py-24 bg-base-100">           {/* white */}

{/* Section header */}
<div className="mb-14">
  <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Eyebrow</span>
  <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Heading</h2>
</div>
```

### CTA Section (dark)
```tsx
<section className="py-24 bg-neutral">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div>
        <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Next step</span>
        <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">Heading</h2>
        <p className="text-sm text-text-inverse/60 leading-relaxed max-w-[460px]">Body</p>
      </div>
      <div className="flex gap-3 shrink-0 flex-wrap">
        <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Book a Call</Link>
        <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Back to Services</Link>
      </div>
    </div>
  </div>
</section>
```

---

## Service Pages — Accent Colors

Each service has a color accent. Apply to eyebrow, bullet markers, card top bar, and CTA button.

| Service | Accent Token | CTA Button |
|---|---|---|
| AI Capabilities Audit | `text-secondary` / `bg-secondary` | `bg-secondary text-text-inverse` |
| Fractional CAIO | `text-secondary` / `bg-secondary` | `bg-secondary text-text-inverse` |
| Global Staffing | `text-secondary` / `bg-secondary` | `bg-secondary text-text-inverse` |
| AI Workshop | `text-warning` / `bg-warning` | `bg-warning text-neutral` |
| Training & Certification | `text-warning` / `bg-warning` | `bg-warning text-neutral` |
| Your First AI Hire | `text-warning` / `bg-warning` | `bg-warning text-neutral` |

---

## Nav Component

`Nav.tsx` has two states:
- **heroMode** (`isHomepage && atTop`): `bg-neutral/40 backdrop-blur`, white text/links, white logo, ThemeToggle in white
- **Scrolled**: `bg-surface-raised border-b border-border`, dark text, dark logo (white logo with `invert brightness-70`)

`ThemeToggle` accepts `heroMode?: boolean` — pass it when rendering inside Nav.

---

## Key Components

### ScrollReveal
Wrap content for entrance animation:
```tsx
<ScrollReveal direction="up" delay={100}>
  <div>...</div>
</ScrollReveal>
```
Directions: `up` | `left` | `right`. `delay` in ms.

### Steps8
Scroll-driven interactive stepper. Used on homepage. Self-contained — just drop in:
```tsx
<section className="bg-surface-overlay" id="steps">
  <Steps8 />
</section>
```

### TestimonialsCarousel
Re-exports `UniqueTestimonials` from `components/ui/unique-testimonial.tsx`.
```tsx
<TestimonialsCarousel />
```

---

## Development Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — always verify before pushing
npm run lint     # ESLint check
```

## Git Workflow
- Branch: feature branches off `main`
- Always run `npm run build` before committing
- Use `git pull origin main` before starting new work

## Conventions
- **No inline styles** — use Tailwind utilities only
- **No `border border-border` cards** — use `shadow-sm` + `bg-white` instead
- **No `text-primary` on light backgrounds** — use `text-secondary`
- **No `bg-neutral-50`** — use `bg-surface-overlay`
- **Images:** `next/image` always
- **Links:** `next/link` for internal, `<a target="_blank">` for external
- **Rounded cards:** `rounded-2xl` preferred over `rounded-xl` for main cards

---

## Content Source
Reference `docs/pages/*.md` for page content — headlines, body copy, testimonials, pricing, CTAs.
