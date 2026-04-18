# Edge8 — Visual Polish & Content Task Board

> Work through these tasks with Claude. Each task is self-contained — just say
> "do task X" and Claude will execute it. Tasks are grouped by page/area and
> ordered by impact. ✅ = done, 🔥 = high priority, 🟡 = medium, 🔵 = low.

---

## 🏠 HOMEPAGE (`app/page.tsx`)

### HP-1 🔥 Rebuild homepage in Tailwind design system
The current homepage still uses the OLD CSS class system (`hero`, `section-grey`,
`btn-mint`, `solution-card`, etc.). Every other page has been migrated. This is
the most urgent visual fix — the page is frozen/unscrollable in some states and
looks like a completely different site from the service pages.
- Replace ALL old CSS classes with Tailwind utilities matching CLAUDE.md
- Follow the section rhythm: `bg-neutral` hero → alternating `bg-surface-overlay` / `bg-base-100`
- Keep all existing content (problem, steps, testimonials, solutions, case studies, blog, contact)

### HP-2 🔥 Add hero video or replace with image
The hero video (`/images/edge8-hero.mp4`) should play behind the 8x IMPACT headline,
or swap in a high-quality full-width hero image if video isn't working.
- Confirm video loads and autoplays correctly
- If not: source a hero image (AI boardroom / tech-forward team scene) and put it at
  `/public/images/hero-bg.jpg`

### HP-3 🟡 Add founder photo to homepage (Dave Hajdu)
The "Who We Are" or about blurb on the homepage has no face. Add a professional
headshot of Dave at `/public/images/dave-hajdu.jpg`.
- Request photo from client or download from LinkedIn/edge8.ai
- Add to the "Meet Our Founder" card on homepage

### HP-4 🟡 Add client logo: PHO24
`/public/images/clients/pho24.png` exists but is NOT in the homepage logo strip array.
Add `{ src: '/images/clients/pho24.png', alt: 'PHO24' }` to `clientLogos`.

### HP-5 🔵 Animate stats / numbers on scroll
The "10+", "2×", "100%" results cards could count up when they scroll into view
using a simple counter animation component.

---

## 📄 SERVICES INDEX (`app/services/page.tsx`)

### SI-1 🟡 Add hero image / background texture
The services hero is purely dark navy with no visual interest. Add a subtle
background graphic — either a blurred image overlay or the SVG grid pattern
from the live site.

### SI-2 🟡 Add service card icons/illustrations
Each of the 6 service cards currently has only text. Add a small icon or
illustration per card to make scanning easier.
- AI in Business Workshop → 🎯 or presentation icon
- Your First AI Hire → 👤 or handshake icon
- AI Capabilities Audit → 🔍 or chart icon
- CAIO Leadership → 👑 or org chart icon
- Global Staffing → 🌏 icon
- Training & Certification → 🎓 icon

---

## 🛠 SERVICE PAGES

### SP-1 🔥 Add hero image to AI in Business Workshop page
`/app/services/ai-in-business-workshop/page.tsx` has a two-column hero layout
but NO image. Need a workshop/presentation image.
- Source: Unsplash search "executive workshop AI presentation"
- Save to: `/public/images/services/workshop-hero.jpg`
- Add `<Image>` to the right column of the hero section (same pattern as your-first-ai-hire)

### SP-2 🔥 Add hero image to AI Capabilities Audit page
`/app/services/ai-capabilities-audit/page.tsx` hero is text-only on the left,
empty on the right.
- Existing image: `/public/images/services/audit-growth-stage.jpg` ← use this
- Add the image in a right-column beside the hero text (same hero layout pattern)

### SP-3 🟡 Add hero image to CAIO Leadership page
`/app/services/caio-leadership/page.tsx` — hero is full-width text, no image.
- Existing image: `/public/images/services/caio-leadership-hero.jpg` ← use this
- Add as right-column image in hero

### SP-4 🟡 Add hero image to Training & Certification page
`/app/services/training-and-certification/page.tsx` — hero is text-only.
- Existing image: `/public/images/services/training-hero.jpg` ← use this
- Add as right-column image in hero

### SP-5 🟡 Add hero image to Global Staffing page
`/app/services/global-staffing/page.tsx` — hero is text-only.
- Existing image: `/public/images/services/global-staffing-hero.jpg` ← use this
- Add as right-column image in hero

### SP-6 🔵 Add Dave Hajdu founder card to CAIO Leadership and Your First AI Hire
Both pages reference the founder but have no photo/bio card.
- Needs: `/public/images/dave-hajdu.jpg` (get from client)
- Add a 2-col card: photo left, bio + credentials right

---

## 📝 BLOG

### BL-1 🔥 Add hero images to the 2 missing blog posts
Only 2 of 4 blog posts have cover images. Missing:
- `your-next-ai-hire` → needs `/public/images/blog-posts/your-next-ai-hire.jpg`
  (suggested: AI robot / hiring scene)
- `meta-ray-ban` → needs `/public/images/blog-posts/meta-ray-ban.jpg`
  (suggested: AR glasses / wearable tech scene)
- Source from Unsplash (free) or generate with AI image tool

### BL-2 🟡 Rebuild blog index page in Tailwind design system
`app/blog/page.tsx` uses a plain light background with no dark hero. Should follow
the same pattern as other pages:
- Add dark `bg-neutral` hero section at top with eyebrow + heading
- Move the category filter pills into the hero or a sticky bar below it
- Blog post cards should use shadow + rounded-2xl (no border) pattern

### BL-3 🟡 Add author avatar to blog post pages
Each blog post slug page (`app/blog/[slug]/page.tsx`) shows "Dave Hajdu" as author
but no photo. Add `/public/images/dave-hajdu.jpg` as a small circular avatar.

### BL-4 🔵 Add 2 more blog posts
The live site (edge8.ai) has 4 posts. We have 4 too, but content could be richer.
Consider adding:
- "How to Run Your First AI Sprint" (AI Programs category)
- "Vietnam Tech Talent: What Western Companies Get Wrong" (Global Staffing angle)

---

## 📸 IMAGES NEEDED FROM CLIENT
These require actual photos — request from Dave/the team:

| File | Description | Where used |
|---|---|---|
| `/public/images/dave-hajdu.jpg` | Professional headshot, Dave Hajdu | Homepage founder card, Blog author, CAIO page, Training page |
| `/public/images/services/workshop-hero.jpg` | Workshop / executive presentation scene | AI in Business Workshop hero |
| `/public/images/blog-posts/your-next-ai-hire.jpg` | AI hiring / tech team scene | Blog card + post header |
| `/public/images/blog-posts/meta-ray-ban.jpg` | AR glasses / wearable tech scene | Blog card + post header |
| `/public/images/team/` | Team photos (optional) | About page |

---

## 🏢 ABOUT PAGE (`app/about/`)

### AB-1 🔥 Create the About page
The About page route (`/about`) doesn't exist yet in the Next.js app — it 404s.
Need to create `app/about/page.tsx` with:
- Dark hero: "Who We Are" / Edge8 mission
- Founder section: Dave bio + headshot
- Team section (if photos available)
- Values / what makes Edge8 different
- CTA → contact

---

## 📂 CASE STUDIES (`app/case-studies/`)

### CS-1 🔥 Create Case Studies pages
The nav links to `/case-studies`, `/case-studies/personal-brands`,
`/case-studies/business-website`, `/case-studies/ai-programs` — all 404.
Need to create:
- `app/case-studies/page.tsx` — index with all case studies
- `app/case-studies/ai-programs/page.tsx` — Vespa, InvestMigrate, PHO24 stories
- `app/case-studies/personal-brands/page.tsx`
- `app/case-studies/business-website/page.tsx`
Existing images in `/public/images/case-studies/` are ready to use.

---

## 🎨 DESIGN / GLOBAL

### DG-1 🟡 Fix the dark logo in nav (scrolled state)
When the nav scrolls, it uses `invert brightness-70` on the white logo PNG which
makes it look grey/washed. Should use the proper dark logo file or a dedicated
dark-mode logo PNG.
- If `/public/images/edge8-logo-dark.png` doesn't exist: request from client
- Or: add a dark version of the logo and swap src instead of using CSS filter

### DG-2 🟡 Add favicon / app icon
Currently using Next.js default favicon. Should use the Edge8 "8" logomark.
- Create `/public/favicon.ico` and `/public/icon.png` from the Edge8 logo

### DG-3 🔵 Add Open Graph images per page
Currently all pages share the same OG image (`/images/og-default.jpg`).
Consider per-service OG images for better social sharing previews.

### DG-4 🔵 Remove the ThemeToggle (Light/Dark switch) from nav
The live site (edge8.ai) has no dark mode toggle. The ThemeToggle in our Nav
adds visual noise and the dark mode styles are not fully designed.
Consider removing it or hiding it until dark mode is polished.

---

## 🚀 DEPLOYMENT

### DP-1 🔥 Merge feat/TECH-FORWARD-DEFINITION → main
Current branch has all service pages synced + your-first-ai-hire rebuilt.
Once previewed and approved:
```bash
git add -A
git commit -m "Sync service pages with edge8.ai, rebuild your-first-ai-hire in Tailwind"
git push origin feat/TECH-FORWARD-DEFINITION
# Then open PR → merge to main → Vercel auto-deploys
```

### DP-2 🟡 Update Vercel domain from edge8.vercel.app → edge8.ai
The metadata in `app/layout.tsx` still points to `https://edge8.vercel.app`.
Once the custom domain is configured on Vercel, update:
- `metadataBase` in `app/layout.tsx`
- All OG `url` fields in page metadata

---

## ✅ COMPLETED
- [x] Sync all 6 service pages from edge8.ai nav
- [x] Rebuild `your-first-ai-hire` in Tailwind design system
- [x] Fix Nav.tsx `training-certification` → `training-and-certification` URL
- [x] Add testimonials section to Global Staffing page
- [x] Set up `.claude/launch.json` dev server config
