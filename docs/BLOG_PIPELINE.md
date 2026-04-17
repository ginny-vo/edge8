# Blog Page Implementation Pipeline

## Goal: Make ONE blog post live on our Next.js site

---

### Step 1: Fetch Live Page Content
**Tool:** `webfetch` or browser
**Input:** URL from sitemap (e.g., `https://www.edge8.ai/post/your-post-slug`)
**Output:** Rendered page content (HTML or markdown)

```
webfetch(url, format="markdown")
```

This gives us: title, date, category, read time, image URLs, body content, FAQ, tags

---

### Step 2: Download and Save Images
**Tool:** `curl.exe`
**Input:** Image URLs from the fetched content
**Output:** Local image files in `public/images/blog-posts/`

```
curl.exe -o "public/images/blog-posts/{filename}.png" "{image_url}"
```

---

### Step 3: Add Post Metadata
**File:** `lib/posts.ts`
**Action:** Add entry to `postSlugs` array and `postMeta` object

```typescript
// 1. Add slug to array
export const postSlugs = ['...', 'new-post-slug'] as const;

// 2. Add metadata
'mew-post-slug': {
  slug: 'new-post-slug',
  title: 'Full Title From Live Page',
  category: 'Category Name',
  date: 'Month DD, YYYY',
  image: '/images/blog-posts/filename.png',
  imageAlt: 'Alt text',
  ogImage: '/images/blog-posts/filename.png',
  description: 'Short description for SEO',
  author: 'Dave Hajdu is the founder...',
},
```

---

### Step 4: Add Post Content Component
**File:** `app/blog/[slug]/page.tsx`
**Action:** Create a `PostNewPostSlug()` function component with the full article body

```typescript
function PostNewPostSlug() {
  return (
    <article className="post-content">
      <p>First paragraph...</p>
      <h2>Section heading</h2>
      <p>More content...</p>
      {/* Use &mdash; for —, &ldquo;/&rdquo; for quotes, &apos; for apostrophes */}
    </article>
  );
}

// Add to postContent map
const postContent: Record<PostSlug, React.FC> = {
  // ...existing
  'new-post-slug': PostNewPostSlug,
};
```

---

### Step 5: Add to Blog Listing
**File:** `app/blog/page.tsx`
**Action:** Add post to the appropriate array (mainPosts, foundersSecretsPosts, vietnamPosts, or highPerformingPosts)

```typescript
{
  slug: 'new-post-slug',
  image: '/images/blog-posts/filename.png',
  alt: 'Alt text',
  tag: 'Category Name',
  date: 'Mon DD, YYYY',
  title: 'Full Title',
  excerpt: 'Short excerpt for card',
},
```

---

### Step 6: Build and Verify
**Command:** `npm run build`
**Check:** 
- No TypeScript errors
- Page appears in build output under `/blog/[slug]`
- Navigate to `/blog/new-post-slug` to verify

---

## Checklist Per Post

- [ ] Step 1: Fetch content from live URL
- [ ] Step 2: Download images to `public/images/blog-posts/`
- [ ] Step 3: Add metadata to `lib/posts.ts`
- [ ] Step 4: Add content component to `app/blog/[slug]/page.tsx`
- [ ] Step 5: Add to listing in `app/blog/page.tsx`
- [ ] Step 6: Build passes, page renders correctly

---

## Content Formatting Rules

1. **Quotes:** Use `&ldquo;` and `&rdquo;` instead of `"`
2. **Apostrophes:** Use `&apos;` instead of `'` in JSX text
3. **Em dashes:** Use `&mdash;` instead of `—`
4. **Links:** Use `<a href="...">` for external links
5. **Bold:** Use `<strong>` tags
6. **HTML entities:** Escape all special characters
