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

const posts = [
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
    slug: '2026-ai-trends',
    image: '/images/blog-ai-trends.jpg',
    alt: '5 Game-Changing Shifts Define Business Success',
    tag: 'AI in Business',
    date: 'Nov 10, 2025',
    title: '5 Game-Changing Shifts Define Business Success',
    excerpt: 'Discover the top 2026 AI trends that will shape business success.',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-25 pb-20 text-center bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">Insights at the Speed of AI</h1>
          <p className="text-base text-text-secondary max-w-[720px] mx-auto leading-relaxed">
            Discover how leaders, innovators, and businesses are using AI to transform strategy, branding, and growth. From data-driven decision-making to personalization, agentic leadership, and AI-powered branding, Edge8&apos;s blog brings you practical insights, authority frameworks, and real-world case studies, designed to help you Be Tech-Forward.
          </p>
        </div>
      </section>

      <section className="py-0 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-base-100 border border-border rounded-xl overflow-hidden transition-all hover:border-secondary hover:-translate-y-1 no-underline color-inherit flex flex-col">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={800}
                  height={520}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-7 pb-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-secondary">{post.tag}</span>
                    <span className="text-sm text-text-tertiary">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 leading-snug flex-1">{post.title}</h3>
                  <p className="text-base text-text-secondary leading-relaxed mb-5">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-secondary inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
