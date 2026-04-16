import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsMarquee from '@/components/ui/testimonials-marquee';

const clientLogos = [
  { src: '/images/clients/vespa.png', alt: 'Vespa Adventures' },
  { src: '/images/clients/investmigrate.png', alt: 'InvestMigrate' },
  { src: '/images/clients/eo.png', alt: 'Entrepreneurs Organization' },
  { src: '/images/clients/veracity.png', alt: 'Veracity' },
  { src: '/images/clients/abound-health.png', alt: 'Abound Health Group' },
  { src: '/images/clients/unlock-venture.png', alt: 'Unlock Venture Partners' },
];

const caseStudies = [
  {
    name: 'Vespa Adventures',
    tag: 'AI Program',
    image: '/images/case-studies/vespa.jpg',
    result: 'Automated 80% of customer communications and itinerary workflows',
  },
  {
    name: 'InvestMigrate',
    tag: 'AI Program',
    image: '/images/case-studies/investmigrate.avif',
    result: 'Eliminated manual data entry and accelerated investor onboarding by 3×',
  },
  {
    name: 'PHO24',
    tag: 'AI Agents',
    image: '/images/case-studies/pho24.jpg',
    result: 'Deployed AI agents across 20+ franchise locations for operations management',
  },
];

export const metadata: Metadata = {
  title: 'Edge8 — Be Tech-Forward | AI Programs & Consulting',
  description: 'Edge8 helps organizations become Tech-Forward through AI Programs, Global Talent Staffing, and AI Officer Leadership. Stop overthinking AI — Start implementing.',
  openGraph: {
    title: 'Edge8 — Be Tech-Forward',
    description: 'Stop overthinking AI — Start implementing your AI Programs. AI Programs, Global Talent, and AI Officer Leadership.',
    url: 'https://edge8.vercel.app',
    images: [{ url: '/images/og-default.jpg' }],
    type: 'website',
  },
  twitter: {
    title: 'Edge8 — Be Tech-Forward',
    description: 'Stop overthinking AI — Start implementing your AI Programs.',
    images: ['/images/og-default.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
{/* 1. HERO - ChainGPT Labs Style */}
      <section className="hero">
        <div className="hero-overlap">
          <div className="hero-top">
            <div className="hero-backing">
              <span className="hero-backing-item">BE TECH-FORWARD</span>
              <span className="hero-backing-item">BE TECH-FORWARD</span>
            </div>
            <div className="hero-marquee-wrapper">
              <div className="hero-marquee">
                <h1>BE TECH-FORWARD</h1>
                <h1>BE TECH-FORWARD</h1>
              </div>
              <div className="hero-marquee" aria-hidden="true">
                <h1>BE TECH-FORWARD</h1>
                <h1>BE TECH-FORWARD</h1>
              </div>
            </div>
            <div className="hero-top-content">
              <div className="graphic-block hero-graphic-small">
                <div className="graphic-block-decor graphic-block-decor-top-left"></div>
                <div className="graphic-block-decor graphic-block-decor-top-right"></div>
                <div className="graphic-block-decor graphic-block-decor-bottom-right"></div>
                <div className="graphic-block-decor graphic-block-decor-bottom-left"></div>
              </div>
            </div>
            <div className="graphic-block hero-graphic-block">
              <div className="graphic-block-decor graphic-block-decor-top-left"></div>
              <div className="graphic-block-decor graphic-block-decor-top-right"></div>
              <div className="graphic-block-decor graphic-block-decor-bottom-right"></div>
              <div className="graphic-block-decor graphic-block-decor-bottom-left"></div>
            </div>
            <img src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/6654a5c3113a6f95af59c707_star.webp" loading="lazy" alt="" className="hero-decor hero-decor-1" />
            <img src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/6653486a5dbcbf9da5b393b4_graphic.svg" loading="lazy" alt="" className="hero-decor hero-decor-2" />
          </div>

          <div className="hero-main">
            <div className="hero-info">
              <h1 className="hero-heading">
                8x <span className="hero-gradient-text">IMPACT</span>
              </h1>
              <p className="hero-description">Stop overthinking AI — Start implementing your AI Programs</p>
              <div className="hero-ctas">
                <a href="#contact" className="button-primary">
                  <div className="button-primary-border">
                    <span className="button-primary-text">Schedule A Consultation</span>
                  </div>
                </a>
                <a href="#services" className="btn-outline">Our Solutions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-video">
          <video autoPlay muted loop playsInline>
            <source src="/images/edge8-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 2. LOGO STRIP */}
      <section className="logo-strip-section">
        <div className="container">
          <p className="logo-strip-label">Trusted by leaders across industries</p>
          <div className="logo-strip">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="logo-strip-item">
                <Image src={logo.src} alt={logo.alt} width={120} height={48} className="logo-strip-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM */}
      <section className="section section-grey" id="about">
        <div className="section-inner">
          <div className="problem-card">
            <h2>Why do I need an AI Program?</h2>
            <div className="subtext">Ad-hoc usage of AI is limiting you to minimal gains</div>
            <p>Lack of focus traps your business in mediocrity&mdash;keeping you stuck in repetitive tasks, wasted resources, and missed opportunities. Without a structured AI Program, competitors will outpace you, innovation stalls, costs balloon, and growth suffers.</p>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS - Marquee */}
      <section className="section">
        <div className="section-inner text-center">
          <h2 className="section-heading">What Our Clients Say</h2>
          <TestimonialsMarquee />
        </div>
      </section>

      {/* 4. TECH-FORWARD DEFINITION */}
      <section className="section section-grey definition-section">
        <div className="section-inner">
          <h2 className="section-heading">What does it mean to be Tech-Forward?</h2>
          <p className="definition-phonetic">Tech-Forward /&#x2C8;t&#x25B;k &#x2C8;f&#x254;rw&#x259;rd/</p>
          <p className="definition-type">(adjective)</p>
          <p className="definition-body">Describing an organization or individual with the capability to strategically orchestrate AI resources to drive measurable value within their department or business.</p>
        </div>
      </section>

      {/* 5. 8 STEPS */}
      <section className="section steps-section">
        <div className="section-inner">
          <h2 className="section-heading">8 Steps to Becoming Tech-Forward</h2>
          <p className="steps-body">Follow these steps to build a truly Tech-Forward organization and achieve 8x efficiency.</p>
          
          {/* Steps Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '48px' }}>
            {[
              { num: '01', title: '10% - Get Started', desc: 'Join a community to learn how peers and experts use AI' },
              { num: '02', title: '20% - Company Alignment', desc: 'Ensure leadership aligned on AI strategic potential' },
              { num: '03', title: '30% - Organize Your Data', desc: 'Create company database for first program' },
              { num: '04', title: '40% - Build AI Agents', desc: 'Develop intelligent AI agents for tasks' },
              { num: '05', title: '50% - Hire AI-Driven Talent', desc: 'Leverage local and global AI-empowered talent' },
              { num: '06', title: '60% - Scale AI-Orchestration', desc: 'Implement AI Programs across organization' },
              { num: '07', title: '80% - Full System Integration', desc: 'Replace antiquated systems with AI-Driven approach' },
              { num: '08', title: '100% - Tech-Forward', desc: 'Reclaim time, focus on growth with 8x efficiency' },
            ].map((step) => (
              <div key={step.num} style={{ 
                padding: '24px', 
                borderRadius: '16px', 
                border: '1px solid #E6EBF0',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#287BE8', marginBottom: '8px' }}>
                  {step.num}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#04102D', marginBottom: '8px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(4, 16, 45, 0.7)' }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
          
          <p className="steps-cta-text" style={{ marginTop: '48px' }}>Book your free consultation today and take the first step toward an AI-driven future</p>
          <Link href="#contact" className="btn-mint">Schedule A Consultation</Link>
        </div>
      </section>

      {/* 6. BLUE CTA */}
      <section className="section section-blue text-center">
        <div className="section-inner">
          <h2 className="section-heading">Book Your Free Consultation</h2>
          <p className="section-sub centered" style={{ color: 'rgba(255,255,255,0.85)' }}>Take the first step toward becoming Tech-Forward. Our experts will help you identify the right AI Programs for your organization and map a clear path to 8x impact.</p>
          <div style={{ marginTop: '40px' }}>
            <Link href="#contact" className="btn-mint">Schedule A Consultation &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 7. RESULTS */}
      <section className="section">
        <div className="section-inner text-center">
          <h2 className="section-heading">Real Results for Real Businesses</h2>
          <p className="section-sub centered">Discover how Edge8 helps companies Be Tech-Forward, delivering results through Global Talent Staffing, AI Programs and AI Officer Leadership.</p>
          <div className="results-grid">
            <div className="result-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>AI Officer Leadership</h3>
              <p>Established the leadership needed to effectively run an AI Program within 10+ organizations</p>
            </div>
            <div className="result-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Global Talent Staffing</h3>
              <p>Helping a leading healthcare provider build a tech-forward team, doubling productivity while cutting costs dramatically.</p>
            </div>
            <div className="result-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>AI Programs</h3>
              <p>Eliminated 100% of data entry tasks, enriched entrepreneur submissions, and enhanced deal flow analysis for a Venture Capital firm.</p>
            </div>
          </div>
          <div className="results-btn">
            <Link href="#case-studies" className="btn-outline">View Our Success Case Studies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 8. SOLUTIONS */}
      <section className="section" id="solutions">
        <div className="section-inner">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-label">Core Solutions</span>
            <h2 className="section-heading">AI-Powered Solutions for a Tech-Forward Future</h2>
            <p className="section-sub centered">Empowering organizations to use AI effectively through clear leadership, thoughtful implementation and strong global talent.</p>
          </div>
          <div className="solutions-grid">
            {[
              { href: '/services/ai-capabilities-audit', img: '/images/solutions/ai-programs.jpg', label: 'AI Programs', title: 'From Strategy to Implementation—We Build not Pitch', desc: "We don't just talk AI—we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys." },
              { href: '/services/global-staffing', img: '/images/solutions/global-talent.jpg', label: 'Global Talent Network', title: 'Scale Smarter with AI-Empowered Teams', desc: "Access Vietnam's top AI-trained professionals to accelerate your initiatives—without compromising on quality or speed." },
              { href: '/services/training-and-certification', img: '/images/solutions/ai-certification.jpg', label: 'AI Officer Certification & Workshops', title: 'Make Your Team AI-Literate and Leadership-Ready', desc: 'We equip founders and teams to lead with confidence through our AI Officer certification and hands-on workshops.' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="solution-card-img">
                <div className="solution-img-wrap">
                  <Image src={s.img} alt={s.label} width={600} height={380} className="solution-img" />
                </div>
                <div className="solution-body">
                  <div className="sol-label">{s.label}</div>
                  <h3 className="solution-title">{s.title}</h3>
                  <p className="solution-desc">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="results-btn">
            <Link href="/services" className="btn-outline">Explore All Services &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="section section-grey" id="case-studies">
        <div className="section-inner text-center">
          <h2 className="section-heading">The Path to Tech-Forward</h2>
          <p className="section-sub centered">A few examples of successful AI-Driven Programs</p>
          <div className="case-grid">
            {caseStudies.map((c) => (
              <div key={c.name} className="case-card">
                <div className="case-card-image-wrap">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={520}
                    height={300}
                    className="case-card-img"
                    unoptimized={c.image.endsWith('.avif')}
                  />
                  <div className="case-card-overlay" />
                </div>
                <div className="case-card-body">
                  <div className="case-tag">{c.tag}</div>
                  <h3>{c.name}</h3>
                  <p className="case-result">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="case-btn">
            <Link href="#" className="btn-outline">Full List of Case Studies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 10. BLOG */}
      <section className="section" id="blog">
        <div className="section-inner">
          <div className="blog-home-header">
            <div>
              <span className="section-label">Insights</span>
              <h2 className="section-heading">AI Is Driving Rapid Change</h2>
            </div>
            <Link href="/blog" className="btn-outline">View All Posts &rarr;</Link>
          </div>
          <div className="blog-layout">
            {/* Featured post */}
            <Link href="/blog/your-next-ai-hire" className="blog-featured">
              <div className="blog-featured-visual">
                <Image src="/images/blog-ai-hire.jpg" alt="Your Next AI Hire Isn't a Person" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="blog-featured-body">
                <h3 className="blog-featured-title">Your Next AI Hire Isn&apos;t a Person</h3>
                <p className="blog-excerpt">Most companies don&apos;t fail at AI because of the tech. They fail because no one owns it. AI agents need managers, engineers, and real teams, just like people.</p>
                <span className="blog-more">Read Article &rarr;</span>
              </div>
            </Link>
            {/* 3 stacked posts */}
            <div className="blog-stack">
              {[
                { href: '/blog/2026-ai-trends', img: '/images/blog-ai-trends.jpg', title: '2026 AI Trends: 5 Game-Changing Shifts', excerpt: 'Explore the five 2026 AI trends transforming business—from AI leadership to data discipline.' },
                { href: 'https://www.edge8.ai/post/why-smart-founders-are-already-planning-for-meta-ray-ban-glasses-even-when-demos-fail', img: '/images/blog-posts/meta-ray-ban.png', title: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses', excerpt: "Technology always catches up—the question is whether you're truly ready when it does." },
                { href: 'https://www.edge8.ai/post/ai-in-data-migration-why-your-ai-program-is-really-a-data-problem', img: '/images/blog-posts/ai-data-migration.png', title: 'AI in Data Migration: Why Your AI Program Is Really a Data Problem', excerpt: "AI in Data Migration isn't a technology problem—it's a data strategy challenge." },
              ].map((b) => (
                <Link key={b.title} href={b.href} className="blog-item">
                  <Image src={b.img} alt={b.title} width={96} height={72} className="blog-item-thumb" />
                  <div className="blog-item-body">
                    <h4 className="blog-item-title">{b.title}</h4>
                    <p className="blog-item-excerpt">{b.excerpt}</p>
                  </div>
                  <span className="blog-item-arrow">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section className="section section-grey contact-section" id="contact">
        <div className="section-inner">
          <h2 className="section-heading">Let&rsquo;s Be Tech-Forward Together</h2>
          <p className="section-sub centered">Connect with Edge8&rsquo;s experts to explore AI Programs for your organization</p>
          <div className="typeform-wrapper">
            <iframe src="https://ai-officer.typeform.com/letstalk" title="Contact Edge8" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
