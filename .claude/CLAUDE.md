# Edge8 — Claude Code Project Guide

## Project Overview
Marketing website for **Edge8**, an AI programs consulting and staffing company.
Being migrated from a static HTML site to a **Next.js** application.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** TypeScript

## Folder Structure
```
test1/
├── .claude/              # Claude Code environment
│   ├── CLAUDE.md         # This file
│   └── settings.json     # Claude Code settings
├── public/               # Static assets (served by Next.js & Vercel)
│   ├── images/           # Media: hero video, OG image, blog images
│   └── post/             # Legacy static HTML posts (to be migrated)
├── data/                 # Internal data assets (not served)
│   ├── contacts.csv      # 107 contacts (name, email, phone, company, source)
│   └── case-studies.csv  # 631 case study entries (title, tags, SEO, challenge)
├── resources/            # Brand docs & planning
│   └── README.md
├── app/                  # Next.js App Router pages & layouts (to be created)
├── components/           # Reusable React components (to be created)
└── ...                   # Next.js config files
```

## Brand & Design System
| Token | Value | Usage |
|---|---|---|
| Mint / Primary | `rgb(111, 242, 193)` | CTA buttons, highlights |
| Navy / Text | `rgb(4, 16, 45)` | Body text, headings |
| Blue / Secondary | `rgb(40, 123, 232)` | Links, accents |
| Rose / Accent | `rgb(209, 69, 139)` | Badges, tags |
| Font | Inter (Google Fonts) | All text, weights 400–800 |

## Key Reusable Patterns (from legacy HTML)
- **Hero section** — video/image background, eyebrow + headline + subtitle + CTA buttons
- **Card grids** — case studies, blog posts, testimonials (`.case-card`, `.blog-card`)
- **Problem / Solution / Result** — 3-column B2B consulting pattern
- **Frosted glass nav** — sticky header with `backdrop-filter: blur`
- **Section variants** — white / blue / grey alternating backgrounds
- **Mobile menu** — hamburger toggle with animated drawer

## Pages to Build
| Route | Source File | Notes |
|---|---|---|
| `/` | `public/index.html` | Homepage with hero video |
| `/blog` | `public/blog.html` | Blog listing grid |
| `/blog/2026-ai-trends` | `public/post/2026-ai-trends.html` | Blog post |
| `/blog/your-next-ai-hire` | `public/post/your-next-ai-hire.html` | Blog post |

## Data Sources
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
