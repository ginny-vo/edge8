# Edge8 — Be Tech-Forward

Marketing website for **[Edge8](https://www.edge8.ai)**, an AI programs consulting and staffing company helping businesses achieve 8x efficiency through structured AI Programs, Global Talent Staffing, and AI Officer Leadership.

## Live Site
🌐 [edge8.vercel.app](https://edge8.vercel.app)

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + custom CSS
- **Animations:** Motion (Framer Motion), Intersection Observer scroll reveals
- **Deployment:** Vercel (auto-deploy from `main`)

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
```

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── services/         # Service pages
│   ├── case-studies/     # Case study pages
│   └── blog/             # Blog pages
├── components/           # Reusable React components
│   └── ui/               # shadcn-style UI primitives
├── docs/                 # Content documentation (source of truth)
├── public/images/        # Static assets
└── lib/                  # Utilities (cn helper, etc.)
```

## Team
- **Ginny Vo** — Project Lead
- **Louis Nguyen** — Developer
