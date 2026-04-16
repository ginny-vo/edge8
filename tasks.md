# Edge8 Website — Setup Tasks

## Status legend

- [ ] To do
- [~] In progress
- [x] Done

---

## Pages to Setup

### Homepage `/`

- [x] Setup Homepage (/) with hero, services, 8 steps, testimonials
- [x] Wire homepage content from docs/edge8-website-content.md
- [x] Review mobile layout — stack testimonials vertically
- [x] Confirm hero video loads correctly on mobile

### Services `/services`

- [x] Services index page with grid of 6 service cards
- [x] Individual service pages (6 routes)
- [~] **Rebuild all service pages to match live edge8.ai content and design**
- [ ] Add `/services` to main nav

### Service Pages to Rebuild (Match Live edge8.ai)

- [ ] `/services/your-first-ai-hire` - Full content (problem, solution, 90-day process, pricing, testimonials)
- [ ] `/services/ai-capabilities-audit` - Full content (tiers, process, form)
- [ ] `/services/caio-leadership` - Full content (patterns, comparison, roadmap)
- [ ] `/services/global-staffing` - Full content (roles, why Edge8)
- [ ] `/services/training-and-certification` - Full content (program series, outcomes)
- [ ] `/services/ai-in-business-workshop` - Full content

### Rebuild Requirements for All Service Pages

- [ ] Add rich section headings (##, ###) with proper hierarchy
- [ ] Add problem/solution narrative sections
- [ ] Add testimonial cards with quotes, names, titles
- [ ] Add image sections with descriptions
- [ ] Add pricing tiers with amounts
- [ ] Add process/timeline visualizations
- [ ] Add CTA buttons
- [ ] Add company profile "Who this is for" sections
- [ ] Add "Why Edge8" sections with track record
- [ ] Match live site's visual hierarchy and spacing
- [ ] Use proper image placeholders from Image Inventory

### About Us `/about`

- [ ] Create About page
- [ ] Write content: team intro, mission, Edge8 story, Dave Hajdu bio
- [ ] Add About section to nav
- [ ] Design: headshot + bio layout, brand statement

### Case Studies `/case-studies`

- [ ] Create Case Studies main page (/case-study)
- [ ] Add 3 category sections: Personal Brands, Business Websites, AI Programs
- [ ] Add Case Studies to nav
- [ ] Add case study images and thumbnails

### Individual Case Study Pages

- [ ] Personal Brand Case Studies page (4 examples)
  - Rich Pham
  - Angi Hurt
  - David Jackson
  - Steve Muller

- [ ] Business Website Case Studies page (7 examples)
  - Vespa Adventures
  - PHO24
  - InvestMigrate
  - Grady Golf
  - Nhau Vodka
  - AI Officer Institute
  - Fab Four Academy

- [ ] AI Program Case Studies page (5 examples)
  - Kyungbang
  - Veracity
  - Wink Hotels (Travel Buddy)
  - OnTarget (Abound Health)
  - EO APAC Region

### Blog `/blog`

- [x] Blog listing page
- [x] Dynamic post page renderer
- [ ] Add more blog posts content
- [ ] Add Open Graph image per post
- [ ] Add blog images

---

## Asset Tasks

- [ ] Download all images from Image Inventory (100+ images)
- [ ] Setup navigation — add Services and About links
- [ ] Setup footer — add links, contact info, newsletter signup
- [ ] Wire contact forms from docs content

---

## UI Refinement

- [ ] Typography — audit heading sizes and weights
- [ ] Buttons — ensure consistent rendering
- [ ] Cards — align padding, shadow, border style
- [ ] Section spacing — standardize padding
- [ ] Mobile — full mobile pass
- [ ] Animations — confirm they work

---

## Design System Tasks

- [x] Add Tailwind v4 theme in globals.css (@theme with brand colors)
- [ ] Create reusable components (Button, Card, Section, etc.)
- [ ] Replace inline styles with tailwind classes
- [ ] Audit all pages for hardcoded rgb() values

### Brand Colors to Use
| Token | RGB | Usage |
|---|---|---|
| mint | rgb(111, 242, 193) | CTAs, highlights |
| navy | rgb(4, 16, 45) | Text, headings |
| blue | rgb(40, 123, 232) | Links, accents |
| rose | rgb(209, 69, 139) | Tags, badges |
| gold | rgb(198, 142, 38) | Premium accents |

---

## SEO & Meta

- [ ] Add metadata export to every page
- [ ] Set canonical URLs
- [ ] Verify OG images in social previews
- [ ] 404 page with brand design

---

## Verification

- [ ] Verify pages match edge8-website-content.md docs
- [ ] Verify internal navigation links work
- [ ] Confirm Vercel deployment picks up new routes