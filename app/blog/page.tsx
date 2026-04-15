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
      <section className="blog-hero">
        <div className="container">
          <h1>Insights at the Speed of AI</h1>
          <p className="blog-hero-sub">Discover how leaders, innovators, and businesses are using AI to transform strategy, branding, and growth. From data-driven decision-making to personalization, agentic leadership, and AI-powered branding, Edge8&apos;s blog brings you practical insights, authority frameworks, and real-world case studies, designed to help you Be Tech-Forward.</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section-inner">
          <div className="blog-grid-2col">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card-full">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={800}
                  height={520}
                  className="blog-card-image"
                />
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-tag">{post.tag}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-card-link">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
