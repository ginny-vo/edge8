export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  ogImage: string;
  description: string;
  author: string;
  content: React.ReactNode;
};

// Content is rendered in app/blog/[slug]/page.tsx as JSX
export const postSlugs = ['2026-ai-trends', 'your-next-ai-hire'] as const;

export type PostSlug = (typeof postSlugs)[number];

export const postMeta: Record<PostSlug, Omit<Post, 'content'>> = {
  '2026-ai-trends': {
    slug: '2026-ai-trends',
    title: '5 Game-Changing Shifts Define Business Success',
    category: 'AI in Business',
    date: 'November 10, 2025',
    image: '/images/blog-ai-trends.jpg',
    imageAlt: '5 Game-Changing Shifts Define Business Success',
    ogImage: '/images/blog-ai-trends.jpg',
    description: 'Discover the top 2026 AI trends that will shape business success. From AI leadership roles to agentic teams and data discipline.',
    author: 'Dave Hajdu is the founder of Edge8 and the AI Officer Institute. Co-founder and board member of TINYpulse. Based in Ho Chi Minh City and Seattle.',
  },
  'your-next-ai-hire': {
    slug: 'your-next-ai-hire',
    title: "Your Next AI Hire Isn't a Person",
    category: 'AI in Business',
    date: 'February 11, 2026',
    image: '/images/blog-ai-hire.jpg',
    imageAlt: "Your Next AI Hire Isn't a Person",
    ogImage: '/images/blog-ai-hire.jpg',
    description: "Most companies don't fail at AI because of the tech. They fail because no one owns it. Learn why your next AI hire might not be a person.",
    author: 'Dave Hajdu is the founder of Edge8 and the AI Officer Institute. Co-founder and board member of TINYpulse. Based in Ho Chi Minh City and Seattle.',
  },
};
