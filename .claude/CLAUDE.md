# Edge8 — Claude Code Project Guide

## Project Overview
Marketing website for **Edge8**, an AI programs consulting and staffing company.
Next.js migration from static HTML is complete. All core pages are built and live.

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS + custom CSS in `app/globals.css`
- **Deployment:** Vercel (`https://edge8.vercel.app`)
- **Language:** TypeScript

## Folder Structure
```
edge8/
├── .claude/              # Claude Code environment
│   ├── CLAUDE.md         # This file
│   └── settings.json     # Claude Code settings
├── public/               # Static assets (served by Next.js & Vercel)
│   └── images/           # Media: hero, services, case studies
├── docs/                 # Content documentation (source of truth)
│   ├── edge8-website-content.md
│   └── pages/           # Individual page content docs
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── about/
│   ├── services/         # Service pages
│   ├── case-studies/
│   └── blog/
├── components/          # Reusable components
└── app/globals.css      # Global styles + component classes
```

## Content Management
All page content is documented in `docs/pages/*.md` as the **source of truth**.

## Brand & Design System (Tailwind v4)

**Exact hex codes from Brand Guidelines:**

| Role | Token | Hex | Usage |
|---|---|---|---|
| Primary Canvas | Navy | `#04102D` | Backgrounds |
| Primary Text | White | `#FFFFFF` | Text on navy |
| Interactive | Blue | `#287BE8` | Links, buttons, accents |
| Success | Mint | `#6FF2C1` | CTAs, highlights |
| Alert | Pink | `#D1458B` | Tags, badges only |
| Premium | Gold | `#C68E26` | Special accents |
| Border | Border | `#E6EBF0` | Dividers |
| Background | BG Grey | `#EAEEF2` | Section backgrounds |

Use in templates:
```tsx
<button className="bg-mint text-navy">CTA</button>
<button className="bg-blue text-white">Secondary</button>
<span className="text-rose">Alert</span>
```

---

# Page Building Guide

## Required Sections for Every Page

Every Edge8 page MUST have these elements in order:

### 1. Metadata
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Edge8',
  description: 'Meta description for SEO',
};
```

### 2. Nav + Footer
Use components `<Nav />` and `<Footer />` from `components/`.

### 3. Hero Section
```tsx
<section className="section" style={{ padding: '120px 48px 80px' }}>
  <div className="container">
    <span style={{ color: 'rgb(40, 123, 232)', fontWeight: 700, letterSpacing: '2px' }}>
      EYEBROW TEXT
    </span>
    <h1 style={{ fontSize: '72px', fontWeight: 700, marginBottom: '20px' }}>
      Headline
    </h1>
    <p style={{ fontSize: '20px', color: 'rgba(4, 16, 45, 0.7)', maxWidth: '640px' }}>
      Subtitle description
    </p>
    <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
      <Link href="/..." className="btn-mint">CTA</Link>
      <Link href="/..." className="btn-outline">Secondary</Link>
    </div>
  </div>
</section>
```

### 4. Problem/Benefit Sections
Use `.problem-card` class or custom styling:
```tsx
<div className="problem-card">
  <h2>Section Heading</h2>
  <p className="subtext" style={{ color: 'rgb(40, 123, 232)', fontWeight: 600 }}>
    Eyebrow
  </p>
  <p>Body description...</p>
</div>
```

### 5. Feature/Content Sections
Use grid layouts:
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
  {/* 3-column grid */}
</div>
```

### 6. Testimonial Cards
```tsx
<article className="testimonial-card">
  <div className="testimonial-quote">"{quote}"</div>
  <div className="testimonial-card-bottom">
    <div className="testimonial-avatar">
      <span>{initials}</span>
    </div>
    <div className="testimonial-info">
      <div className="testimonial-name">{name}</div>
      <div className="testimonial-title">{title}</div>
    </div>
  </div>
</article>
```

### 7. Pricing/Process Cards
```tsx
<div className="service-pricing-card">
  <div className="service-pricing-tier">Tier Name</div>
  <div className="service-pricing-amount">$X,XXX</div>
  <div className="service-pricing-desc">Description</div>
</div>
```

### 8. CTA Section (Before Footer)
```tsx
<div className="service-cta-panel">
  <div>
    <h2>Heading</h2>
    <p>Description</p>
  </div>
  <div>
    <Link href="/#contact" className="btn-mint">CTA Button</Link>
  </div>
</div>
```

---

# Key Reusable CSS Classes

| Class | Usage |
|-------|-------|
| `.section` | Main section wrapper, padding 100px 48px |
| `.container` | Max-width 1280px, centered |
| `.btn-mint` | Primary CTA button (mint background, navy text) |
| `.btn-outline` | Secondary CTA button (transparent, navy border) |
| `.problem-card` | White card with border, 20px radius |
| `.testimonial-card` | Testimonial grid card |
| `.service-pricing-card` | Pricing tier card |
| `.service-cta-panel` | CTA banner with split layout |
| `.service-bullet-list` | Bullet list with mint dots |
| `.service-proof-card` | Feature card with number index |
| `.fade-rise` | Entry animation |

---

# Service Page Template

When building a service page, follow this structure:

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Service Name | Edge8',
  description: 'Description',
};

// 1. Hero Section
// 2. Problem Section  
// 3. Solution/Process Section
// 4. Pricing Section
// 5. Who It's For Section
// 6. Why Edge8 / Track Record Section
// 7. Testimonials Section
// 8. CTA Section

export default function ServicePage() {
  return (
    <main className="service-page">
      {/* Hero */}
      <section className="service-hero">...</section>
      
      {/* Problem */}
      <section className="service-section">...</section>
      
      {/* Solution */}
      <section className="service-section service-section-alt">...</section>
      
      {/* Pricing */}
      <section className="service-section">...</section>
      
      {/* CTA */}
      <section className="service-section">
        <div className="service-cta-panel">...</div>
      </section>
    </main>
  );
}
```

---

# Development Commands
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

## Conventions
- **Git workflow:** Run `git pull origin main` before starting any new task
- **Components:** PascalCase filenames (`HeroSection.tsx`)
- **CSS classes:** Use existing `.class-name` patterns from `globals.css`
- **Images:** Use `next/image` for all images
- **Links:** Use `next/link` for internal navigation
- **Routing:** App Router (`app/` directory)

---

# Content Source
Always reference `docs/pages/*.md` for page content. These markdown files contain the complete content structure including:
- Headlines and subheadlines
- Section content
- Testimonials with quotes and names
- Pricing information
- Process steps
- CTA buttons