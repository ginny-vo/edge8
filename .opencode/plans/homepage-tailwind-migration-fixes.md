# Edge8 Homepage — Tailwind Migration Fix Plan

## Issues Found

### Layout Issues (5)

1. **Hero video missing `<source>` element** — `app/page.tsx:51`
   - The `<source src="/images/edge8-hero.mp4" type="video/mp4" />` was removed during migration
   - The video element is self-closing with no source, so hero video never plays

2. **Invalid `py-18` Tailwind class** — `app/page.tsx:179`
   - `py-18` is not a valid Tailwind spacing value (scale: 16 → 20)
   - Produces zero padding, making mid CTA section too cramped

3. **Blog section layout destroyed** — `app/page.tsx:348-381`
   - **Before**: Featured post (large, left) + 3 stacked smaller posts (right) using `blog-grid-hero`
   - **After**: Flat `grid-cols-1 md:grid-cols-2` grid losing the visual hierarchy
   - Featured post lost its distinctive large image treatment
   - Stacked posts lost their horizontal card layout with small thumbnails

4. **Steps section lost sticky header** — `app/page.tsx:165`
   - **Before**: `steps-section-wrapper` with sticky `steps-section-header` that pinned while scrolling through Steps8
   - **After**: Simple section with header text inline — no sticky behavior at all

5. **Stat cards significantly smaller** — `app/page.tsx:209-212`
   - **Before**: Stat number `72px`, stat column `108px` wide
   - **After**: `text-5xl` (48px), `w-20` (80px) — ~33% reduction in visual impact

### Color Issues (4)

1. **CRITICAL: Steps section invisible text** — `app/page.tsx:165-173`
   - `bg-surface-inverse` = dark navy background (oklch 15%)
   - `text-text-primary` = dark navy text (oklch 15%)
   - **Dark text on dark background = completely invisible**
   - Should use `text-text-inverse` (white) for all text in this section

2. **Hardcoded white values on dark backgrounds** — `app/page.tsx:209`
   - Results cards use `bg-white/5`, `border-white/8` instead of semantic tokens
   - Works visually but breaks the design system; won't adapt if tokens change

3. **Mid CTA gradient direction changed** — `app/page.tsx:179`
   - **Before**: `linear-gradient(135deg, rgb(25,92,200), rgb(10,55,140))` — diagonal
   - **After**: `bg-gradient-to-r from-secondary to-secondary-800` — horizontal only

4. **SVG divider fragile color binding** — `app/page.tsx:77,131`
   - Uses `fill="currentColor"` with `text-base-100` instead of explicit color
   - Works in light theme but fragile compared to original explicit `rgb()` values

---

## Fixes Required

### Fix 1: Hero video source (line ~51)
```tsx
// BEFORE (broken):
<video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30" />

// AFTER (fixed):
<video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
  <source src="/images/edge8-hero.mp4" type="video/mp4" />
</video>
```

### Fix 2: Mid CTA padding (line ~179)
```tsx
// BEFORE (broken):
<section className="bg-gradient-to-r from-secondary to-secondary-800 py-18 px-6 ...">

// AFTER (fixed):
<section className="bg-gradient-to-br from-secondary to-secondary-800 py-20 px-6 ...">
```
Also fixes gradient direction from horizontal to diagonal (`to-br`).

### Fix 3: Steps section text colors (lines ~165-173)
```tsx
// BEFORE (broken — dark text on dark bg):
<section className="bg-surface-inverse pt-24" id="steps">
  <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">The Roadmap</div>
  <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-4">8 Steps...</h2>
  <p className="text-base text-text-secondary ...">Orchestrate AI Resources...</p>

// AFTER (fixed — light text on dark bg):
<section className="bg-surface-inverse pt-24" id="steps">
  <div className="text-xs font-bold tracking-[3px] uppercase text-primary mb-3">The Roadmap</div>
  <h2 className="text-4xl md:text-3xl font-bold text-text-inverse mb-4">8 Steps...</h2>
  <p className="text-base text-text-secondary ...">Orchestrate AI Resources...</p>
```
Change `text-text-primary` → `text-text-inverse`. The `text-secondary` eyebrow (blue) is fine on dark bg.

### Fix 4: Stat card sizing (lines ~209-212)
```tsx
// BEFORE (too small):
<div className={`flex gap-6 bg-white/5 border border-white/8 border-l-3 rounded-r-2xl p-6 ...`}>
  <div className="flex flex-col items-center w-20 flex-shrink-0 pt-1">
    <div className={`text-5xl font-extrabold tracking-tight mb-1 ${r.colorClass}`}>{r.stat}</div>

// AFTER (restore original proportions):
<div className={`flex gap-6 bg-white/5 border border-white/8 border-l-3 rounded-r-2xl p-6 ...`}>
  <div className="flex flex-col items-center w-[108px] flex-shrink-0 pt-1">
    <div className={`text-[72px] leading-none tracking-tight mb-1 ${r.colorClass}`}>{r.stat}</div>
```

### Fix 5: Semantic tokens for results cards (line ~209)
```tsx
// BEFORE (hardcoded):
<div className={`flex gap-6 bg-white/5 border border-white/8 border-l-3 rounded-r-2xl p-6 ...`}>

// AFTER (semantic):
<div className={`flex gap-6 bg-white/[0.05] border border-white/[0.08] border-l-3 rounded-r-2xl p-6 ...`}>
```
Note: Since these cards are on a `bg-neutral` (dark navy) section, `white/5` is actually the correct approach here (glass effect on dark bg). The original CSS also used `rgba(255,255,255,0.05)`. This is acceptable.

### Fix 6: Restore blog section layout (lines ~348-381)
```tsx
// BEFORE (flat grid):
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
  <ScrollReveal direction="left">
    <Link href="/blog/your-next-ai-hire" className="group bg-surface-inverse border border-border rounded-2xl ...">
      <div className="w-full aspect-[16/10] overflow-hidden flex-shrink-0">
        <Image ... />
      </div>
      <div className="p-7 flex flex-col flex-1">
        ...
      </div>
    </Link>
  </ScrollReveal>
  <div className="flex flex-col gap-3">
    {[...3 posts...].map((post, i) => (
      <div className="group bg-surface-inverse border border-border rounded-xl overflow-hidden flex flex-1 ...">
        <div className="w-35 h-auto overflow-hidden flex-shrink-0">
          <Image ... />
        </div>
        ...
      </div>
    ))}
  </div>
</div>

// AFTER (restore featured + stacked):
<div className="blog-grid-hero">
  <ScrollReveal direction="left">
    <Link href="/blog/your-next-ai-hire" className="blog-featured group bg-surface-inverse border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-secondary hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full aspect-[16/10] overflow-hidden flex-shrink-0">
        <Image src="/images/blog-ai-hire.jpg" alt="Your Next AI Hire Isn't a Person" width={600} height={450} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="text-xs font-bold uppercase tracking-wide text-accent mb-3">AI in Business</div>
        <h3 className="text-xl font-bold text-text-primary mb-2.5 leading-snug">Your Next AI Hire Isn&apos;t a Person</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Most companies don&apos;t fail at AI because of the tech. They fail because no one owns it. AI agents need managers, engineers, and real teams, just like people.</p>
      </div>
    </Link>
  </ScrollReveal>
  <div className="blog-stack flex flex-col gap-3">
    {[...3 posts...].map((post, i) => (
      <ScrollReveal key={post.title} direction="right" delay={80 + i * 80}>
        <div className="group bg-surface-inverse border border-border rounded-xl overflow-hidden flex flex-1 transition-all hover:border-secondary hover:-translate-y-0.5 hover:shadow-md">
          <div className="w-[130px] h-auto overflow-hidden flex-shrink-0">
            <Image src={post.img} alt={post.title} width={130} height={130} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${post.tagClass}`}>{post.tag}</div>
            <h3 className="text-sm font-semibold text-text-primary leading-snug mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{post.desc}</p>
          </div>
        </div>
      </ScrollReveal>
    ))}
  </div>
</div>
```

And add corresponding CSS to `globals.css`:
```css
.blog-grid-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  text-align: left;
}

.blog-featured {
  display: flex;
  flex-direction: column;
}

.blog-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 900px) {
  .blog-grid-hero { grid-template-columns: 1fr; }
}
```

### Fix 7: Restore steps sticky header (lines ~165-176)
```tsx
// BEFORE (no sticky):
<section className="bg-surface-inverse pt-24" id="steps">
  <div className="max-w-7xl mx-auto px-6 pb-16 text-center">
    <div className="max-w-[860px] mx-auto mb-4">
      <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">The Roadmap</div>
      <h2 className="text-4xl md:text-3xl font-bold text-text-inverse mb-4">8 Steps...</h2>
      <p className="text-base text-text-secondary ...">Orchestrate AI Resources...</p>
    </div>
  </div>
  <Steps8 />
</section>

// AFTER (with sticky header):
<section className="bg-surface-inverse" id="steps">
  <div className="steps-section-header max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
    <div className="max-w-[860px] mx-auto mb-4">
      <div className="text-xs font-bold tracking-[3px] uppercase text-primary mb-3">The Roadmap</div>
      <h2 className="text-4xl md:text-3xl font-bold text-text-inverse mb-4">8 Steps...</h2>
      <p className="text-base text-text-secondary ...">Orchestrate AI Resources...</p>
    </div>
  </div>
  <Steps8 />
</section>
```

And add CSS to `globals.css`:
```css
.steps-section-wrapper {
  padding-top: 64px;
}

.steps-section-header {
  position: sticky;
  top: 72px;
  z-index: 10;
  background: var(--surface-inverse);
  padding-top: 96px;
  padding-bottom: 48px;
}

@media (max-width: 600px) {
  .steps-section-header {
    position: relative;
    top: 0;
    padding-top: 64px;
  }
  .steps8-dots { display: none; }
  .steps8-bar-bg { display: none; }
  .steps8-sticky { height: auto; position: relative; }
}
```

---

## Summary of Changes

| # | File | Line(s) | Issue | Fix |
|---|------|---------|-------|-----|
| 1 | `app/page.tsx` | ~51 | Video missing source | Add `<source>` element |
| 2 | `app/page.tsx` | ~179 | `py-18` invalid class | Change to `py-20` |
| 3 | `app/page.tsx` | ~169 | `text-text-primary` on dark bg | Change to `text-text-inverse` |
| 4 | `app/page.tsx` | ~209-212 | Stat cards too small | `text-[72px]`, `w-[108px]` |
| 5 | `app/page.tsx` | ~348-381 | Blog layout flat | Restore featured + stacked grid |
| 6 | `app/page.tsx` | ~165-176 | Steps lost sticky header | Add sticky header wrapper |
| 7 | `app/page.tsx` | ~179 | Gradient horizontal only | Change to `bg-gradient-to-br` |
| 8 | `app/globals.css` | end | Missing CSS for blog grid + steps sticky | Add required CSS rules |
