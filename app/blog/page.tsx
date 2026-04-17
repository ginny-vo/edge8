import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog — Insights at the Speed of AI',
  description: 'Discover how leaders, innovators, and businesses are using AI to transform strategy, branding, and growth. Practical insights and real-world case studies from Edge8.',
  openGraph: {
    title: 'Edge8 Blog — Insights at the Speed of AI',
    description: 'Discover how leaders, innovators, and businesses are using AI to transform strategy, branding, and growth.',
    url: 'https://edge8.vercel.app/blog',
    images: [{ url: '/images/og-default.jpg' }],
    type: 'website',
  },
  twitter: {
    title: 'Edge8 Blog — Insights at the Speed of AI',
    description: 'Practical insights and real-world case studies from Edge8.',
    images: ['/images/og-default.jpg'],
  },
};

const categories = [
  'All Posts',
  'Founders\' Secrets',
  'Doing Business in Vietnam',
  'High Performing Cultures',
  'AI in Business',
  'Must-read',
];

const featuredPost = {
  slug: '2026-ai-trends',
  image: '/images/blog-ai-trends.jpg',
  alt: '5 Game-Changing Shifts Define Business Success',
  tag: 'Must-read',
  date: 'Nov 10, 2025',
  title: '2026 AI Trends: 5 Game-Changing Shifts That Will Define Business Success',
  excerpt: 'Explore the five 2026 AI trends transforming business—from AI leadership to data discipline—and see why the winners will be defined by their data, not tools.',
};

const mainPosts = [
  {
    slug: 'ai-data-migration',
    image: '/images/blog-posts/ai-data-migration.png',
    alt: 'AI in Data Migration: Why Your AI Program Is Really a Data Problem',
    tag: 'AI in Business',
    date: 'Sep 19, 2025',
    title: 'AI in Data Migration: Why Your AI Program Is Really a Data Problem',
    excerpt: 'AI in Data Migration isn\'t a technology problem—it\'s a data strategy challenge. Discover the progressive approach that delivers measurable ROI.',
  },
  {
    slug: 'your-next-ai-hire',
    image: '/images/blog-ai-hire.jpg',
    alt: "Your Next AI Hire Isn't a Person",
    tag: 'AI in Business',
    date: 'Feb 11, 2026',
    title: "Your Next AI Hire Isn't a Person",
    excerpt: "Most companies don't fail at AI because of the tech. They fail because no one owns it.",
  },
  {
    slug: 'meta-ray-ban-glasses',
    image: '/images/blog-posts/meta-ray-ban.png',
    alt: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses',
    tag: 'Founders\' Secrets',
    date: 'Sep 24, 2025',
    title: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses (Even When Demos Fail)',
    excerpt: "Technology always catches up—the question is whether you're truly ready when it does.",
  },
  {
    slug: '5-keys-to-reduce-ai-hallucinations',
    image: '/images/blog-posts/ai-hallucinations.png',
    alt: '5 Keys to Reduce AI Hallucinations and Build Reliable Business Systems',
    tag: 'AI in Business',
    date: 'Sep 10, 2025',
    title: '5 Keys to Reduce AI Hallucinations and Build Reliable Business Systems',
    excerpt: 'Build reliable AI systems by understanding the root causes of hallucinations and implementing proven safeguards.',
  },
  {
    slug: 'why-ai-issues-are-really-data-problems',
    image: '/images/blog-posts/ai-data-migration.png',
    alt: 'Why AI Issues Are Really Data Problems: A Guide for Future AI Officers',
    tag: 'AI Strategy',
    date: 'Sep 9, 2025',
    title: 'Why AI Issues Are Really Data Problems: A Guide for Future AI Officers',
    excerpt: 'Most AI failures trace back to data quality, not model capability. Learn how to build a data-first AI strategy.',
  },
  {
    slug: 'the-hospitality-data-gap',
    image: '/images/blog-posts/hospitality.png',
    alt: 'The Hospitality Data Gap: Creating Truly Hotel Personalized Experiences',
    tag: 'AI in Business',
    date: 'Sep 4, 2025',
    title: 'The Hospitality Data Gap: Creating Truly Hotel Personalized Experiences',
    excerpt: 'Hotels have the data to personalize every guest experience. So why aren\'t they using it?',
  },
];

const foundersSecretsPosts = [
  {
    slug: 'why-every-leader-needs-ai-leadership-case-for-ai-co-ceo',
    image: '/images/blog-posts/ai-co-ceo.png',
    alt: 'The Case for AI Co-CEOs & AI Leadership',
    tag: 'Founders\' Secrets',
    date: 'Aug 22, 2025',
    title: 'The Case for AI Co-CEOs & AI Leadership: Why Every Leader Needs a Digital Decision Partner',
  },
  {
    slug: 'meta-ray-ban-glasses',
    image: '/images/blog-posts/meta-ray-ban.png',
    alt: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses',
    tag: 'Founders\' Secrets',
    date: 'Sep 24, 2025',
    title: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses (Even When Demos Fail)',
  },
  {
    slug: 'from-idea-to-interactive-blog',
    image: '/images/blog-posts/blog-automation.png',
    alt: 'From Idea to Interactive Blog in 30 Minutes',
    tag: 'Founders\' Secrets',
    date: 'Sep 18, 2025',
    title: 'From Idea to Interactive Blog in 30 Minutes: The Founder\'s Automation Playbook',
  },
  {
    slug: 'the-business-research-assignment',
    image: '/images/blog-posts/business-research.png',
    alt: 'The Business Research Assignment That Could Transform Your Company',
    tag: 'Founders\' Secrets',
    date: 'Sep 17, 2025',
    title: 'The Business Research Assignment That Could Transform Your Company (And Your Career)',
  },
  {
    slug: 'why-ai-training-is-essential',
    image: '/images/blog-posts/ai-training.png',
    alt: 'Why AI Training Is Essential for Your Career Success',
    tag: 'Founders\' Secrets',
    date: 'Aug 22, 2025',
    title: 'Why AI Training Is Essential for Your Career Success in the Digital Age',
  },
  {
    slug: 'why-human-ai-collaboration',
    image: '/images/blog-posts/human-ai.png',
    alt: 'Why Human-AI Collaboration Is the Future of Business Success',
    tag: 'Founders\' Secrets',
    date: 'Aug 22, 2025',
    title: 'Why Human-AI Collaboration Is the Future of Business Success',
  },
];

const vietnamPosts = [
  {
    slug: 'how-ai-in-business-success-starts-with-strategic-symbolism',
    image: '/images/blog-posts/strategic-symbolism.png',
    alt: 'How AI in Business Success Starts with Strategic Symbolism',
    tag: 'Doing Business in Vietnam',
    date: 'Jul 11, 2025',
    title: 'How AI in Business Success Starts with Strategic Symbolism',
  },
  {
    slug: 'vietnam-ai-business-law',
    image: '/images/blog-posts/vietnam-law.png',
    alt: 'Vietnam\'s AI Rules — What Leaders Should Know',
    tag: 'Doing Business in Vietnam',
    date: 'May 8, 2025',
    title: 'Vietnam\'s AI Rules — What Leaders Should Know',
  },
  {
    slug: 'strategies-to-harness-top-performers',
    image: '/images/blog-posts/top-performers.png',
    alt: 'Strategies to Harness Top Performers for Business Success',
    tag: 'Doing Business in Vietnam',
    date: 'Apr 19, 2025',
    title: 'Strategies to Harness Top Performers for Business Success',
  },
  {
    slug: 'vietnam-ai-silicon-valley',
    image: '/images/blog-posts/vietnam-silicon.png',
    alt: 'Vietnam and the Rise of AI — The New Silicon Valley of Southeast Asia',
    tag: 'Doing Business in Vietnam',
    date: 'Feb 18, 2025',
    title: 'Vietnam and the Rise of AI — The New Silicon Valley of Southeast Asia',
  },
  {
    slug: 'tech-in-entrepreneurship',
    image: '/images/blog-posts/entrepreneurship.png',
    alt: 'Tech In Entrepreneurship: How AI is disrupting the role of the Founder',
    tag: 'Doing Business in Vietnam',
    date: 'Feb 18, 2025',
    title: 'Tech In Entrepreneurship: How AI is disrupting the role of the Founder',
  },
];

const highPerformingPosts = [
  {
    slug: 'how-one-decision-at-a-time-creates-high-performers',
    image: '/images/blog-posts/high-performers.png',
    alt: 'How One Decision at a Time Creates High Performers in Business and Life',
    tag: 'High Performing Cultures',
    date: 'Aug 12, 2025',
    title: 'How One Decision at a Time Creates High Performers in Business and Life',
  },
  {
    slug: 'ai-process-culture-performance',
    image: '/images/blog-posts/process-culture.png',
    alt: 'AI for Performance Culture: Process Automation that Works',
    tag: 'High Performing Cultures',
    date: 'Apr 24, 2025',
    title: 'AI for Performance Culture: Process Automation that Works',
  },
  {
    slug: 'strategies-to-harness-top-performers',
    image: '/images/blog-posts/top-performers.png',
    alt: 'Strategies to Harness Top Performers for Business Success',
    tag: 'High Performing Cultures',
    date: 'Apr 19, 2025',
    title: 'Strategies to Harness Top Performers for Business Success',
  },
  {
    slug: 'remote-team-offshore-integration',
    image: '/images/blog-posts/remote-team.png',
    alt: 'Offshore Teams Made Easy | Remote Integration with AI',
    tag: 'High Performing Cultures',
    date: 'Feb 18, 2025',
    title: 'Offshore Teams Made Easy | Remote Integration with AI',
  },
  {
    slug: 'ai-strategies-high-performing-culture',
    image: '/images/blog-posts/ai-strategies.png',
    alt: '5 AI Strategies for a High-Performing Culture',
    tag: 'High Performing Cultures',
    date: 'Feb 18, 2025',
    title: '5 AI Strategies for a High-Performing Culture',
  },
];

function BlogCard({ post }: { post: { slug: string; image: string; alt: string; tag: string; date: string; title: string; excerpt?: string } }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group no-underline flex flex-col">
      <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-neutral-50 shadow-sm">
        <Image src={post.image} alt={post.alt} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold uppercase tracking-wide text-secondary">{post.tag}</span>
        <span className="text-sm text-text-tertiary">{post.date}</span>
      </div>
      <h3 className="text-lg font-semibold text-text-primary leading-snug mb-2 line-clamp-2 group-hover:text-secondary transition-colors">{post.title}</h3>
      {post.excerpt && <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">{post.excerpt}</p>}
    </Link>
  );
}

function CategorySection({ title, posts, href }: { title: string; posts: { slug: string; image: string; alt: string; tag: string; date: string; title: string; excerpt?: string }[]; href: string }) {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-1">{title}</h2>
          </div>
          <Link href={href} className="text-sm font-semibold text-secondary hover:underline">Read More &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <>
      <section className="py-20 pb-16 text-center bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">Insights at the Speed of AI</h1>
          <p className="text-base text-text-secondary max-w-[720px] mx-auto leading-relaxed">
            Discover how leaders, innovators, and businesses are using AI to transform strategy, branding, and growth. From data-driven decision-making to personalization, agentic leadership, and AI-powered branding, Edge8&apos;s blog brings you practical insights, authority frameworks, and real-world case studies, designed to help you Be Tech-Forward.
          </p>
        </div>
      </section>

      <section className="py-0 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <span key={cat} className={`text-sm font-medium px-4 py-2 rounded-full border cursor-pointer transition-colors ${cat === 'All Posts' ? 'bg-secondary text-white border-secondary' : 'text-text-secondary border-border hover:border-secondary hover:text-secondary'}`}>{cat}</span>
            ))}
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="group no-underline flex flex-col md:flex-row gap-8 mb-16 bg-base-100 border border-border rounded-2xl overflow-hidden transition-all hover:border-secondary hover:-translate-y-0.5 hover:shadow-lg">
            <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image src={featuredPost.image} alt={featuredPost.alt} width={600} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wide text-secondary">{featuredPost.tag}</span>
                <span className="text-sm text-text-tertiary">{featuredPost.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4 leading-tight">{featuredPost.title}</h2>
              <p className="text-base text-text-secondary leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <span className="text-sm font-semibold text-secondary inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">Read More &rarr;</span>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CategorySection title="Founders' Secrets" posts={foundersSecretsPosts} href="/blog/categories/founders-secrets" />
      <CategorySection title="Doing Business in Vietnam" posts={vietnamPosts} href="/blog/categories/doing-business-in-vietnam" />
      <CategorySection title="High Performing Cultures" posts={highPerformingPosts} href="/blog/categories/high-performing-cultures" />
    </>
  );
}
