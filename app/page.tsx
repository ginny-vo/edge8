import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import Steps8 from '@/components/Steps8';
import StickyCTA from '@/components/StickyCTA';
import ContactForm from '@/components/ContactForm';

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

const clientLogos = [
  { src: '/images/clients/vespa.png', alt: 'Vespa Adventures' },
  { src: '/images/clients/investmigrate.png', alt: 'InvestMigrate' },
  { src: '/images/clients/eo.png', alt: 'Entrepreneurs Organization' },
  { src: '/images/clients/veracity.png', alt: 'Veracity' },
  { src: '/images/clients/abound-health.png', alt: 'Abound Health Group' },
  { src: '/images/clients/unlock-venture.png', alt: 'Unlock Venture Partners' },
  { src: '/images/clients/pho24.png', alt: 'PHO24' },
];


const caseStudies = [
  {
    name: 'PHO24',
    tag: 'AI Agents',
    image: '/images/case-studies/pho24-new.jpg',
    website: 'https://www.pho-24.com/',
  },
  {
    name: 'InvestMigrate',
    tag: 'AI Program',
    image: '/images/case-studies/investmigrate-new.jpg',
    website: 'https://www.investmigrate.com/',
  },
  {
    name: 'Vespa Adventures',
    tag: 'AI Program',
    image: '/images/case-studies/vespa-new.jpg',
    website: 'https://www.vespaadventures.com/',
  },
];

export default function HomePage() {
  return (
    <>
      <StickyCTA />
      {/* 1. HERO */}
      <section className="hero">
        {/* Full-bleed video background */}
        <div className="hero-video-bg" aria-hidden="true">
          <video autoPlay muted loop playsInline>
            <source src="/images/edge8-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="hero-bg-orb orb-1" aria-hidden="true" />
        <div className="hero-bg-orb orb-2" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <ScrollReveal direction="up">
              <span className="hero-eyebrow">Be Tech-Forward</span>
              <h1>8x <span className="hero-impact">IMPACT</span></h1>
              <p className="hero-sub">Stop overthinking AI&mdash;Start implementing your AI Programs</p>
              <div className="hero-ctas">
                <Link href="#contact" className="btn-mint">Schedule A Consultation &rarr;</Link>
                <Link href="#services" className="btn-outline-white">Our Solutions</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </section>
      {/* Divider: hero dark → logo strip light */}
      <div style={{ background: 'rgb(4,16,45)', lineHeight: 0, fontSize: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '52px' }}>
          <polygon points="1440,0 0,52 1440,52" fill="rgb(248,250,252)" />
        </svg>
      </div>

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
      <section className="section section-navy" id="about">
        <div className="section-inner">
          <div className="problem-2col">
            <ScrollReveal direction="left">
              <div>
                <div className="problem-label">Why AI Program?</div>
                <h2>Why do I need an AI Program?</h2>
                <p className="problem-subtext">Ad-hoc AI is keeping you stuck at minimal gains</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="problem-body-text">Lack of focus traps your business in mediocrity&mdash;keeping you stuck in repetitive tasks, wasted resources, and missed opportunities.</p>
                <ul className="problem-bullets">
                  <li>
                    <span className="problem-bullet-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    Competitors outpace you while you overthink AI
                  </li>
                  <li>
                    <span className="problem-bullet-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    Innovation stalls without a structured program
                  </li>
                  <li>
                    <span className="problem-bullet-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    Costs balloon and growth suffers from missed AI opportunities
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider: problem dark → testimonials white */}
      <div style={{ background: 'rgb(4,16,45)', lineHeight: 0, fontSize: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '52px' }}>
          <polygon points="0,0 1440,52 0,52" fill="rgb(255,255,255)" />
        </svg>
      </div>

      {/* 4. TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <div className="text-center" style={{ marginBottom: '56px' }}>
              <div className="section-label">Client Stories</div>
              <h2 className="section-heading">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 5. TECH-FORWARD DEFINITION */}
      <section className="section section-grey definition-section">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <h2 className="section-heading">What does it mean to be Tech-Forward?</h2>
            <p className="definition-phonetic">Tech-Forward /&#x2C8;t&#x25B;k &#x2C8;f&#x254;rw&#x259;rd/</p>
            <p className="definition-type">(adjective)</p>
            <p className="definition-body">Describing an organization or individual with the capability to strategically orchestrate AI resources to drive measurable value within their department or business.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. 8 STEPS */}
      <section className="steps-section-wrapper" id="steps">
        {/* Sticky header stays pinned at top while container scrolls */}
        <div className="steps-section-header">
          <div className="section-label">The Roadmap</div>
          <h2 className="section-heading">8 Steps to Becoming Tech-Forward</h2>
          <p className="steps-body">Orchestrate AI Resources for Maximum Impact, and you will unlock new levels of efficiency, automation, and decision-making in your business.</p>
        </div>
        <Steps8 />
      </section>

      {/* MID CTA - After Steps */}
      <section className="mid-cta-banner">
        <ScrollReveal direction="up">
          <h3>Ready to start your AI journey?</h3>
          <p>Book a free strategy call and get your personalized AI roadmap in 30 minutes.</p>
          <Link href="#contact" className="btn-white">Book Free Strategy Call &rarr;</Link>
        </ScrollReveal>
      </section>

      {/* 7. RESULTS */}
      <section className="section section-navy">
        <div className="section-inner">
          <div className="results-2col">
            {/* Left: info */}
            <ScrollReveal direction="left">
              <div className="results-left">
                <div className="section-label">Proven Results</div>
                <h2 className="section-heading">Real Results for Real Businesses</h2>
                <p className="section-sub" style={{ marginBottom: '36px' }}>
                  Discover how Edge8 helps companies Be Tech-Forward, delivering results through Global Talent Staffing, AI Programs and AI Officer Leadership.
                </p>
                <Link href="#case-studies" className="btn-mint">View Case Studies &rarr;</Link>
              </div>
            </ScrollReveal>
            {/* Right: vertical stat cards */}
            <div className="results-right">
              {[
                { stat: 'x2', color: 'result-blue', microcopy: 'for 10+ organizations',       title: 'AI Officer Leadership',  desc: '10+ organizations running structured AI Programs with dedicated in-house leadership.' },
                { stat: 'x5', color: 'result-rose', microcopy: 'productivity gain in 90 days', title: 'Global Talent Staffing', desc: 'Doubled output for a healthcare provider — while cutting talent costs in half.' },
                { stat: 'x8', color: 'result-mint', microcopy: 'efficiency for SME clients',   title: 'AI Programs',           desc: '100% of manual data entry eliminated for a Venture Capital firm, accelerating deal flow.' },
              ].map((r, i) => (
                <ScrollReveal key={r.title} direction="right" delay={i * 100}>
                  <div className={`result-card-row ${r.color}`}>
                    <div className="result-stat-col">
                      <div className="result-stat">{r.stat}</div>
                      <span className="result-microcopy">{r.microcopy}</span>
                    </div>
                    <div className="result-card-row-body">
                      <h3>{r.title}</h3>
                      <p>{r.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. AI-POWERED SOLUTIONS (6-card) */}
      <section className="section ai-solutions-section" id="services">
        <div className="ai-solutions-img-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ai-workplace.jpg" alt="" />
        </div>
        <div className="section-inner text-center">
          <ScrollReveal direction="up">
            <div className="section-label">What We Do</div>
            <h2 className="section-heading">AI-Powered Solutions for a Tech-Forward Future</h2>
            <p className="section-sub centered">AI Automation Designed to Elevate Your Business</p>
            <p className="section-sub centered" style={{ marginTop: '8px' }}>Edge8 enables organizations to leverage AI automation and AI integration for enhanced productivity and efficiency.</p>
          </ScrollReveal>
          <div className="ai-solutions-grid">
            {[
              { title: 'Build Your AI-Powered Brand',       desc: 'Go from unknown to industry leader — using AI content, positioning, and authority building.', href: '#contact' },
              { title: 'Train Your Team to Lead with AI',  desc: 'Hands-on workshops that turn AI confusion into confident, rapid execution.', href: 'https://www.ai-officer.com/ai-in-business-events' },
              { title: 'Automate Hiring & HR',             desc: 'Find, screen, and onboard talent faster with intelligent AI recruitment agents.', href: '#contact' },
              { title: 'Accelerate Sales with AI',         desc: 'Deploy AI chatbots and CRM automations that nurture leads and close deals faster.', href: '#contact' },
              { title: 'Dominate Social Media with AI',    desc: 'Create and publish high-performing content at scale — without burning out your team.', href: 'https://www.ai-officer.com/ai-in-business-events' },
              { title: 'Scale with Global AI Talent',      desc: 'Hire top-tier AI-trained professionals from Vietnam in weeks, not months.', href: '#contact' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 60}>
                <div className="ai-solution-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className="ai-sol-cta">Learn more &rarr;</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SOLUTIONS */}
      <section className="section solutions-original" id="solutions">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <div className="sol-orig-header">
              <h2 className="section-heading">Solutions</h2>
              <p className="section-sub">Empowering Organizations to use AI effectively through clear leadership, thoughtful implementation and strong global talent.</p>
            </div>
          </ScrollReveal>

          <div className="sol-orig-list">
            {[
              {
                label: 'AI Programs',
                subtitle: 'From Strategy to Implementation—We Build not Pitch',
                desc: "We don't just talk AI—we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys. You bring the ideas. We build the systems.",
                image: '/images/solutions/sol-ai-programs.jpg',
              },
              {
                label: 'Global Talent Network',
                subtitle: 'Scale Smarter with AI-Empowered Teams',
                desc: "Access Vietnam's top AI-trained professionals to accelerate your initiatives—without compromising on quality or speed. We embed engineers, analysts, and operators directly into your team to turn workflows into intelligent systems.",
                image: '/images/solutions/sol-global-talent.jpg',
              },
              {
                label: 'AI Officer Certification & Workshops',
                subtitle: 'Make Your Team AI-Literate and Leadership-Ready',
                desc: "We equip founders and teams to lead with confidence. Through our AI Officer certification and hands-on workshops, your organization will gain the frameworks, tools, and language to scale with AI—internally and externally.",
                image: '/images/solutions/sol-workshop.jpg',
              },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="sol-orig-item">
                  <div className="sol-orig-img">
                    <Image src={s.image} alt={s.label} width={560} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="sol-orig-content">
                    <div className="sol-orig-label">{s.label}</div>
                    <div className="sol-orig-divider" />
                    <h3 className="sol-orig-subtitle">{s.subtitle}</h3>
                    <p className="sol-orig-desc">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={160}>
            <div className="sol-orig-cta">
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" className="btn-blue">
                Join a Workshop &rarr;
              </Link>
              <Link href="/services/ai-capabilities-audit" className="btn-rose">
                Get Your Audit &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. CASE STUDIES */}
      <section className="section section-grey" id="case-studies">
        <div className="section-inner text-center">
          <ScrollReveal direction="up">
            <div className="section-label">Success Stories</div>
            <h2 className="section-heading">The Path to Tech-Forward</h2>
            <p className="section-sub centered">A few examples of successful AI-Driven Programs</p>
          </ScrollReveal>
          <div className="case-grid">
            {caseStudies.map((c, i) => (
              <ScrollReveal key={c.name} direction="up" delay={i * 80}>
                <div className="case-card">
                  <div className="case-card-image-wrap">
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={600}
                      height={450}
                      className="case-card-img"
                    />
                    <div className="case-card-overlay" />
                    <a href={c.website} target="_blank" rel="noreferrer" className="case-view-link">
                      <span className="case-view-btn">View Website &rarr;</span>
                    </a>
                    <div className="case-card-body">
                      <div className="case-tag">{c.tag}</div>
                      <h3>{c.name}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div className="case-btn">
              <Link href="/case-studies" className="btn-mint">Full List of Case Studies &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11. BLOG SNIPPET */}
      <section className="section section-grey">
        <div className="section-inner text-center">
          <ScrollReveal direction="up">
            <div className="section-label">Insights</div>
            <h2 className="section-heading">AI Is Driving Rapid Change Across The World</h2>
            <p className="section-sub centered">Discover the latest insights on Global Talent, Artificial Intelligence Trends, and AI Agents</p>
          </ScrollReveal>
          <div className="blog-grid-hero">
            {/* Featured post */}
            <ScrollReveal direction="left">
              <Link href="/blog/your-next-ai-hire" className="blog-featured">
                <div className="blog-featured-img-wrap">
                  <Image src="/images/blog-ai-hire.jpg" alt="Your Next AI Hire Isn't a Person" width={600} height={450} className="blog-featured-img" />
                </div>
                <div className="blog-featured-body">
                  <div className="blog-tag">AI in Business</div>
                  <h3>Your Next AI Hire Isn&apos;t a Person</h3>
                  <p>Most companies don&apos;t fail at AI because of the tech. They fail because no one owns it. AI agents need managers, engineers, and real teams, just like people.</p>
                </div>
              </Link>
            </ScrollReveal>
            {/* Stacked posts */}
            <div className="blog-stack">
              <ScrollReveal direction="right" delay={80}>
                <Link href="/blog/2026-ai-trends" className="blog-stack-card">
                  <div className="blog-stack-img-wrap">
                    <Image src="/images/blog-ai-trends.jpg" alt="2026 AI Trends" width={130} height={130} className="blog-stack-img" />
                  </div>
                  <div className="blog-stack-body">
                    <div className="blog-tag">AI in Business</div>
                    <h3>2026 AI Trends: 5 Game-Changing Shifts That Will Define Business Success</h3>
                    <p>Explore the five 2026 AI trends transforming business—from AI leadership to data discipline.</p>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={160}>
                <div className="blog-stack-card">
                  <div className="blog-stack-img-wrap">
                    <Image src="/images/blog-posts/meta-ray-ban.png" alt="Meta Ray-Ban Glasses" width={130} height={130} className="blog-stack-img" />
                  </div>
                  <div className="blog-stack-body">
                    <div className="blog-tag">Technology</div>
                    <h3>Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses</h3>
                    <p>Technology always catches up—the question is whether you&apos;re ready when it does.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={240}>
                <div className="blog-stack-card">
                  <div className="blog-stack-img-wrap">
                    <Image src="/images/blog-posts/ai-data-migration.png" alt="AI Data Migration" width={130} height={130} className="blog-stack-img" />
                  </div>
                  <div className="blog-stack-body">
                    <div className="blog-tag">AI Strategy</div>
                    <h3>How to Organise Your Data Before You Build an AI Program</h3>
                    <p>Clean data is the foundation of every successful AI rollout. Here&apos;s where to start.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div style={{ marginTop: '48px' }}>
              <Link href="/blog" className="btn-outline">Read All Articles &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. AI AUTOMATION REVIEW CTA */}
      <section className="ai-review-section">
        <div className="ai-review-2col">
          <div className="ai-review-content">
            <h2>Ready to transform your business with AI automation?</h2>
            <p className="ai-review-sub">Schedule a Free AI Automation Review</p>
            <p>Schedule a free, no-obligation process review with our AI experts. We&rsquo;ll analyze your current AI-powered workflows, showcase AI agents&rsquo; capabilities, and show you how our solutions can enhance efficiency, optimize operations, and drive business growth.</p>
            <Link href="/services/ai-capabilities-audit" className="btn-mint" style={{ alignSelf: 'flex-start' }}>Book Your AI Capabilities Audit &rarr;</Link>
          </div>
          <div className="ai-review-image">
            <Image src="/images/ai-workplace.jpg" alt="AI in the workplace" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section className="section contact-section section-navy" id="contact">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <ScrollReveal direction="up">
            <h2 className="section-heading">Let&rsquo;s Be Tech-Forward Together</h2>
            <p className="section-sub centered">Connect with Edge8&rsquo;s experts to explore AI Programs for your organization</p>
          </ScrollReveal>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
