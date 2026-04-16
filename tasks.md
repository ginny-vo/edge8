# Edge8 Website — Task List

## Status legend

- [ ] To do
- [~] In progress
- [x] Done

---

## Home Page `/`

- [x] Hero section (video, eyebrow, headline, CTA)
- [x] Problem section
- [x] Testimonials (5 quotes)
- [x] Tech-Forward definition block
- [x] 8 Steps section
- [x] Mid-page CTA
- [x] Results (3 outcomes)
- [x] Solutions (3 cards)
- [x] Case studies preview
- [x] Blog preview (3 cards)
- [x] Contact section (Typeform embed)
- [ ] Wire homepage content from `content/home.md` instead of hardcoded JSX
- [ ] Review mobile layout — stack testimonials vertically, CTA tap targets
- [ ] Confirm hero video loads correctly on mobile (autoPlay + muted + playsInline)

---

## Services `/services`

- [x] Services index page with grid of 6 service cards
- [x] Individual service pages (6 routes)
  - [x] `/services/ai-capabilities-audit`
  - [x] `/services/ai-in-business-workshop`
  - [x] `/services/caio-leadership`
  - [x] `/services/global-staffing`
  - [x] `/services/training-certification`
  - [x] `/services/your-first-ai-hire`
- [ ] Remove internal routing map and image debug sections from `/services` index (dev artifacts)
- [ ] Add `/services` to main nav
- [ ] Review each service page for copy accuracy against live edge8.ai
- [ ] Confirm all service hero images load (`/images/services/*.jpg`)

---

## About Us `/about`

- [ ] Create `app/about/page.tsx`
- [ ] Write content for: team intro, mission, Edge8 story, Dave Hajdu bio
- [ ] Add About section to nav
- [ ] Design: headshot + bio layout, brand statement, possibly a timeline
- [ ] Add `content/about.md` as content source

---

## Case Studies `/case-studies`

- [ ] Create `app/case-studies/page.tsx` — listing grid
- [ ] Wire to `data/case-studies.csv` (631 entries) or curate a featured subset
- [ ] Design: card grid with company name, tag, outcome snippet
- [ ] Create `app/case-studies/[slug]/page.tsx` — individual case study page
- [ ] Add Case Studies to nav
- [ ] Feature 3 case studies on homepage (Vespa Adventures, InvestMigrate, PHO24)

---

## Blog `/blog`

- [x] Blog listing page
- [x] Dynamic `[slug]` page renderer
- [x] Post: `2026-ai-trends`
- [x] Post: `your-next-ai-hire`
- [ ] Blogs: add blogs data
- [ ] Add a third blog post (e.g. "From Manual to Automated: A VC Firm's AI Journey")
- [ ] Wire blog listing from `content/blog/` files instead of hardcoded `lib/posts.ts`
- [ ] Add Open Graph image per post
- [ ] Blog card images — add `/images/blog/` assets for each post

---

## UI Refinement

- [ ] **Nav** — add Services and About links; confirm active state on current route
- [ ] **Footer** — add links to Services, About, Case Studies; verify copyright year
- [ ] **Typography** — audit heading sizes and weights for consistency across pages
- [ ] **Buttons** — ensure `btn-mint` and `btn-outline` render consistently on all pages
- [ ] **Cards** — align card padding, shadow, and border style across blog, case study, and testimonial cards
- [ ] **Section spacing** — standardize `section` top/bottom padding site-wide
- [ ] **Mobile** — full mobile pass: nav drawer, hero, cards, footer
- [ ] **Animations** — `fade-rise` and `delay-*` classes: confirm they work and don't block content on slow connections
- [ ] **SEO** — add `metadata` export to every page (`/about`, `/case-studies`, service pages)
- [ ] **OG images** — verify `/images/og-default.jpg` renders correctly in social previews

---

## Infrastructure / Misc

- [ ] Confirm Vercel deployment picks up new routes (`/services/*`, `/about`, `/case-studies`)
- [ ] Set canonical URLs in metadata for all pages
- [ ] 404 page — create `app/not-found.tsx` with on-brand design and home link
- [ ] Redirect legacy URLs if any existed on old static HTML site
