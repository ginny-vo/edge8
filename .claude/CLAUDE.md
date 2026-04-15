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
│   ├── images/           # Media: hero video, OG image, blog images
│   └── post/             # Legacy static HTML posts (kept for reference)
├── data/                 # Internal data assets (not served, not yet wired up)
│   ├── contacts.csv      # 107 contacts (name, email, phone, company, source)
│   └── case-studies.csv  # 631 case study entries (title, tags, SEO, challenge)
├── content/              # Page & post content as Markdown files (source of truth)
│   ├── home/             # Homepage sections: 01-hero.md … 11-contact.md
│   └── blog/             # Blog content: index.md, 2026-ai-trends.md, your-next-ai-hire.md
├── resources/            # Brand docs & planning
│   └── README.md
├── app/                  # Next.js App Router pages & layouts
│   ├── layout.tsx        # Root layout (nav, footer, fonts)
│   ├── globals.css       # Global styles + custom component classes
│   ├── page.tsx          # Homepage (11 sections, hardcoded)
│   └── blog/
│       ├── page.tsx      # Blog listing grid
│       └── [slug]/
│           └── page.tsx  # Dynamic blog post renderer
├── lib/
│   └── posts.ts          # Blog post metadata (slugs, OG data, dates)
└── ...                   # Next.js config files
```

## Content Management
Page and post content lives in `content/` as plain Markdown files — **not** wired to pages yet, but the source of truth for all copy, structure, and assets.

**Format:** YAML frontmatter for structured data (type, variant, images, CTAs, card items) + Markdown body for prose.

```
content/home/       # One .md file per section, numbered for order
content/blog/       # index.md for listing; one .md per post (full article)
```

- To edit copy or add a section, edit the relevant `.md` file
- Blog post files contain the full article as readable Markdown
- Image paths in frontmatter use `/images/...` (relative to `public/`)
- Commented-out `# image:` lines mark sections where assets are pending

## Built Pages
| Route | File | Status |
|---|---|---|
| `/` | `app/page.tsx` | Live — 11 sections, hero video |
| `/blog` | `app/blog/page.tsx` | Live — 2-column card grid |
| `/blog/2026-ai-trends` | `app/blog/[slug]/page.tsx` | Live |
| `/blog/your-next-ai-hire` | `app/blog/[slug]/page.tsx` | Live |

## Brand & Design System
| Token | Value | Usage |
|---|---|---|
| Mint / Primary | `rgb(111, 242, 193)` | CTA buttons, highlights |
| Navy / Text | `rgb(4, 16, 45)` | Body text, headings |
| Blue / Secondary | `rgb(40, 123, 232)` | Links, accents |
| Rose / Accent | `rgb(209, 69, 139)` | Badges, tags |
| Font | Inter (Google Fonts) | All text, weights 400–800 |

## Key Reusable Patterns
- **Hero section** — video/image background, eyebrow + headline + subtitle + CTA buttons
- **Card grids** — case studies, blog posts, testimonials (`.case-card`, `.blog-card`)
- **Problem / Solution / Result** — 3-column B2B consulting pattern
- **Frosted glass nav** — sticky header with `backdrop-filter: blur`
- **Section variants** — white / blue / grey alternating backgrounds
- **Mobile menu** — hamburger toggle with animated drawer

## Data Sources (not yet wired to pages)
- `data/contacts.csv` — CRM contacts (107 rows)
- `data/case-studies.csv` — Case study content (631 rows, includes SEO fields)

## Development Commands
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint check
```

## Conventions
- **Components:** PascalCase filenames (`HeroSection.tsx`, `BlogCard.tsx`)
- **CSS classes:** Tailwind utilities; avoid custom CSS unless necessary
- **Images:** Use `next/image` for all images (auto-optimization)
- **Links:** Use `next/link` for all internal navigation
- **Routing:** App Router (`app/` directory), not Pages Router
- **Data fetching:** Server components by default; use `"use client"` only when needed
- **Content edits:** Update `content/` files first, then sync to page code if needed
