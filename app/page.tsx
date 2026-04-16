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
    industry: 'F&B / Franchise',
    image: '/images/case-studies/pho24.jpg',
    result: 'Deployed AI agents across 20+ franchise locations for operations management',
    metric: '20+ locations automated',
  },
  {
    name: 'InvestMigrate',
    tag: 'AI Program',
    industry: 'Investment / FinTech',
    image: '/images/case-studies/investmigrate.avif',
    result: 'Eliminated manual data entry and accelerated investor onboarding by 3×',
    metric: '3× faster onboarding',
  },
  {
    name: 'Vespa Adventures',
    tag: 'AI Program',
    industry: 'Travel & Hospitality',
    image: '/images/case-studies/vespa.jpg',
    result: 'Automated 80% of customer communications and itinerary workflows',
    metric: '80% comms automated',
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
        <div className="hero-video-badge">
          <span className="badge-num">8x</span>
          <span className="badge-text">Efficiency Gain</span>
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
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <div className="section-label">Client Stories</div>
              <h2 className="section-heading">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <div className="tc-featured">
              <div className="tc-quote">&ldquo;Working with Edge8 has been a pleasure. When I launched Fab Four Academy, I needed support to build a strong brand and digital presence. Dave and the team at Edge8 stepped in and not only helped with the branding and digital presence, but showed us how to leverage AI to streamline our processes. With the help of Edge8 we have scaled from single posts to a full content engine while keeping true to our vision and voice. I am thrilled with the help they have provided.&rdquo;</div>
              <div className="tc-author">
                <div className="tc-avatar">
                  <Image src="/images/testimonials/dan-absher.jpg" alt="Dan Absher" width={56} height={56} className="tc-avatar-img" />
                </div>
                <div>
                  <div className="tc-name">Dan Absher</div>
                  <div className="tc-title">CEO, Absher Construction Company</div>
                </div>
              </div>
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
                { stat: 'x2', color: 'result-blue', microcopy: 'for 10+ organizations',       title: 'AI Officer Leadership',  desc: 'Established the leadership needed to effectively run an AI Program within 10+ organizations' },
                { stat: 'x5', color: 'result-rose', microcopy: 'productivity gain in 90 days', title: 'Global Talent Staffing', desc: 'Helping a leading healthcare provider build a tech-forward team, doubling productivity while cutting costs dramatically.' },
                { stat: 'x8', color: 'result-mint', microcopy: 'efficiency for SME clients',   title: 'AI Programs',           desc: 'Eliminated 100% of data entry tasks, enriched entrepreneur submissions, and enhanced deal flow analysis for a Venture Capital firm.' },
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
              { title: 'Personal Branding with AI', desc: 'Build your brand similar to leaders like Rich Pham, Angi Hurt, and Steve Mueller.', cta: 'Schedule a Consultation', href: '#contact' },
              { title: 'Private and Public Workshops', desc: 'Get your team aligned with an interactive session where we break down AI fundamentals, dive into real case studies, and leave you with practical tools you can put to work right away.', cta: 'Join a Workshop', href: 'https://www.ai-officer.com/ai-in-business-events' },
              { title: 'AI in HR Workflows & Recruitment', desc: 'Optimize talent acquisition, onboarding, and coaching with intelligent AI Agents.', cta: 'Schedule a Consultation', href: '#contact' },
              { title: 'Revolutionizing Sales with AI', desc: 'Transform your sales process with your own chat bot, CRM and nurture campaigns.', cta: 'Schedule a Consultation', href: '#contact' },
              { title: 'AI for Social Media & Content Publishing', desc: 'Stay ahead with AI-driven content for improved engagement and visibility.', cta: 'Join a Workshop', href: 'https://www.ai-officer.com/ai-in-business-events' },
              { title: 'Global Talent Solutions', desc: 'Find, train, and scale with AI-empowered professionals located in Vietnam.', cta: 'Schedule a Consultation', href: '#contact' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 60}>
                <div className="ai-solution-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className="btn-outline">{s.cta}</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SOLUTIONS (3-column) */}
      <section className="section solutions-section-dark">
        <div className="section-inner text-center">
          <ScrollReveal direction="up">
            <h2 className="section-heading">Solutions</h2>
            <p className="section-sub centered">Empowering Organizations to use AI effectively through clear leadership, thoughtful implementation and strong global talent.</p>
          </ScrollReveal>
          <div className="solutions-grid">
            {[
              {
                label: 'AI Programs',
                title: 'From Strategy to Implementation—We Build not Pitch',
                desc: "We don't just talk AI—we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys. You bring the ideas. We build the systems.",
                forWho: 'Business owners, operations leaders, and growth teams',
                outcome: 'End-to-end AI program running in 90 days',
                image: '/images/solutions/ai-programs.jpg',
                href: '/services/your-first-ai-hire',
              },
              {
                label: 'Global Talent Network',
                title: 'Scale Smarter with AI-Empowered Teams',
                desc: "Access Vietnam's top AI-trained professionals to accelerate your initiatives—without compromising on quality or speed. We embed engineers, analysts, and operators directly into your team to turn workflows into intelligent systems.",
                forWho: 'Companies ready to scale without inflating local headcount',
                outcome: 'Qualified AI-empowered talent placed within 30 days',
                image: '/images/solutions/global-talent.jpg',
                href: '/services/global-staffing',
              },
              {
                label: 'AI Officer Certification & Workshops',
                title: 'Make Your Team AI-Literate and Leadership-Ready',
                desc: 'We equip founders and teams to lead with confidence. Through our AI Officer certification and hands-on workshops, your organization will gain the frameworks, tools, and language to scale with AI—internally and externally.',
                forWho: 'Founders, department heads, and leadership teams',
                outcome: 'Certified AI Officer leading your program internally',
                image: '/images/solutions/ai-certification.jpg',
                href: '/services/training-certification',
              },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="solution-card">
                  <div className="sol-img-wrap">
                    <Image src={s.image} alt={s.label} width={520} height={293} className="sol-img" />
                  </div>
                  <div className="sol-label">{s.label}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="sol-meta">
                    <div className="sol-meta-row">
                      <span className="sol-meta-label">Who it&rsquo;s for</span>
                      <span className="sol-meta-value">{s.forWho}</span>
                    </div>
                    <div className="sol-outcome-row">{s.outcome}</div>
                  </div>
                  <div className="sol-actions">
                    <Link href="#contact" className="btn-mint" style={{ fontSize: '13px', padding: '10px 18px' }}>Schedule a Consultation</Link>
                    <Link href={s.href} className="btn-outline" style={{ fontSize: '13px', padding: '10px 18px' }}>Learn More</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={220}>
            <div style={{ textAlign: 'center', marginTop: '56px' }}>
              <div className="solutions-bottom-cta" style={{ marginBottom: 0 }}>
                <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" className="btn-mint">Join a Workshop &rarr;</Link>
                <Link href="/services/ai-capabilities-audit" className="btn-outline-white">Get Your Audit &rarr;</Link>
              </div>
              <Link href="/services" className="solutions-explore-link">
                Explore All Services &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. CASE STUDIES */}
      <section className="section" id="case-studies">
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
                      width={520}
                      height={300}
                      className="case-card-img"
                      unoptimized={c.image.endsWith('.avif')}
                    />
                    <div className="case-card-overlay" />
                  </div>
                  <div className="case-card-body">
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                      <div className="case-tag">{c.tag}</div>
                      <div className="case-industry">{c.industry}</div>
                    </div>
                    <h3>{c.name}</h3>
                    <p className="case-result">{c.result}</p>
                    <div className="case-metric">{c.metric}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div className="case-btn">
              <Link href="#" className="btn-outline">Full List of Case Studies &rarr;</Link>
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
            <ScrollReveal direction="left">
              <h2>Ready to transform your business with AI automation?</h2>
              <p className="ai-review-sub">Schedule a Free AI Automation Review</p>
              <p>Schedule a free, no-obligation process review with our AI experts. We&rsquo;ll analyze your current AI-powered workflows, showcase AI agents&rsquo; capabilities, and show you how our solutions can enhance efficiency, optimize operations, and drive business growth.</p>
              <Link href="/services/ai-capabilities-audit" className="btn-mint">Book Your AI Capabilities Audit &rarr;</Link>
            </ScrollReveal>
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
