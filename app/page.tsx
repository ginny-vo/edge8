import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ScrollReveal from '@/components/ScrollReveal';

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
];

const steps = [
  {
    n: '01',
    title: 'AI Readiness Audit',
    desc: 'Map your current workflows, tools, and pain points. No assumptions — just data. We find where AI delivers the highest leverage.',
  },
  {
    n: '02',
    title: 'Build Your AI Strategy',
    desc: 'Define a custom AI roadmap tied to your business goals, not a generic playbook. Strategy before tools, always.',
  },
  {
    n: '03',
    title: 'Appoint an AI Officer',
    desc: 'Install dedicated leadership to own the transformation — full-time or fractional. Someone accountable for AI strategy, governance, and results.',
  },
  {
    n: '04',
    title: 'Create Your Data Foundation',
    desc: 'Build your company database starting with just the right amount of clean, centralized data for your first program.',
  },
  {
    n: '05',
    title: 'Launch Your First AI Program',
    desc: 'Deploy AI agents and automation in your highest-impact workflow. Real implementation, not another pilot that never scales.',
  },
  {
    n: '06',
    title: 'Train Your Team',
    desc: 'Upskill managers and every team member to work with AI, not around it. AI management is the new core competency.',
  },
  {
    n: '07',
    title: 'Govern & Measure',
    desc: 'Establish governance frameworks to track ROI, manage ethics, and ensure compliance. Accountability at every level.',
  },
  {
    n: '08',
    title: 'Scale & Optimize',
    desc: 'Expand successful programs across the organization. Compound your AI advantage every quarter — not in years.',
  },
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

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero">
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
                <Link href="#services" className="btn-outline">Our Solutions</Link>
              </div>
            </ScrollReveal>
            <div className="hero-video-wrap">
              <video autoPlay muted loop playsInline className="hero-video">
                <source src="/images/edge8-hero.mp4" type="video/mp4" />
              </video>
              <div className="hero-video-badge">
                <span className="badge-num">8x</span>
                <span className="badge-text">Efficiency Gain</span>
              </div>
            </div>
          </div>
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
          <ScrollReveal direction="up">
            <div className="problem-card">
              <h2>Why do I need an AI Program?</h2>
              <div className="subtext">Ad-hoc usage of AI is limiting you to minimal gains</div>
              <p>Lack of focus traps your business in mediocrity&mdash;keeping you stuck in repetitive tasks, wasted resources, and missed opportunities. Without a structured AI Program, competitors will outpace you, innovation stalls, costs balloon, and growth suffers.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <div className="text-center" style={{ marginBottom: '48px' }}>
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
      <section className="section steps-section" id="steps">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <div className="text-center">
              <div className="section-label">The Roadmap</div>
              <h2 className="section-heading">8 Steps to Becoming Tech-Forward</h2>
              <p className="steps-body">Orchestrate AI Resources for Maximum Impact, and you will unlock new levels of efficiency, automation, and decision-making in your business. Follow these steps to build a truly Tech-Forward organization and achieve 8x efficiency.</p>
            </div>
          </ScrollReveal>

          <div className="steps-grid">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} direction="up" delay={i * 60}>
                <div className="step-card">
                  <div className="step-number">{step.n}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className="steps-cta">
              <p className="steps-cta-text">Book your free consultation today and take the first step toward an AI-driven future</p>
              <Link href="#contact" className="btn-mint">Schedule A Consultation &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. BLUE CTA */}
      <section className="section section-blue text-center">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <h2 className="section-heading">Book Your Free Consultation</h2>
            <p className="section-sub centered" style={{ color: 'rgba(255,255,255,0.85)' }}>Take the first step toward becoming Tech-Forward. Our experts will help you identify the right AI Programs for your organization and map a clear path to 8x impact.</p>
            <div style={{ marginTop: '40px' }}>
              <Link href="#contact" className="btn-mint">Schedule A Consultation &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. RESULTS */}
      <section className="section">
        <div className="section-inner text-center">
          <ScrollReveal direction="up">
            <div className="section-label">Proven Results</div>
            <h2 className="section-heading">Real Results for Real Businesses</h2>
            <p className="section-sub centered">Discover how Edge8 helps companies Be Tech-Forward, delivering results through Global Talent Staffing, AI Programs and AI Officer Leadership.</p>
          </ScrollReveal>
          <div className="results-grid">
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                stat: '10+',
                title: 'AI Officer Leadership',
                desc: 'Established the leadership needed to effectively run an AI Program within 10+ organizations',
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                stat: '2×',
                title: 'Global Talent Staffing',
                desc: 'Helping a leading healthcare provider build a tech-forward team, doubling productivity while cutting costs dramatically.',
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                stat: '100%',
                title: 'AI Programs',
                desc: 'Eliminated 100% of data entry tasks, enriched entrepreneur submissions, and enhanced deal flow analysis for a Venture Capital firm.',
              },
            ].map((r, i) => (
              <ScrollReveal key={r.title} direction="up" delay={i * 80}>
                <div className="result-card">
                  <div className="result-stat">{r.stat}</div>
                  <div className="card-icon">{r.icon}</div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div className="results-btn">
              <Link href="#case-studies" className="btn-outline">View Our Success Case Studies &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. SOLUTIONS */}
      <section className="section section-grey" id="services">
        <div className="section-inner text-center">
          <ScrollReveal direction="up">
            <div className="section-label">What We Do</div>
            <h2 className="section-heading">Our Solutions</h2>
          </ScrollReveal>
          <div className="solutions-grid">
            {[
              {
                label: 'AI Programs',
                title: 'From Strategy to Implementation — We Build, Not Pitch',
                desc: "We don't just talk AI — we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys. You bring the ideas. We build the systems.",
                icon: '⚡',
              },
              {
                label: 'Global Talent Network',
                title: 'Scale Smarter with AI-Empowered Teams',
                desc: "Access Vietnam's top AI-trained professionals to accelerate your initiatives — without compromising on quality or speed. We embed engineers, analysts, and operators directly into your team.",
                icon: '🌏',
              },
              {
                label: 'AI Officer Certification & Workshops',
                title: 'Make Your Team AI-Literate and Leadership-Ready',
                desc: 'We equip founders and teams to lead with confidence. Through our AI Officer certification and hands-on workshops, your organization gains the frameworks, tools, and language to scale with AI.',
                icon: '🎓',
              },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="solution-card">
                  <div className="sol-icon">{s.icon}</div>
                  <div className="sol-label">{s.label}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                    <div className="case-tag">{c.tag}</div>
                    <h3>{c.name}</h3>
                    <p className="case-result">{c.result}</p>
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
            <h2 className="section-heading">Discover the Latest Insights</h2>
            <p className="section-sub centered">Stay up to date with the latest in AI Programs, Tech-Forward leadership, and digital transformation.</p>
          </ScrollReveal>
          <div className="blog-grid">
            {[
              { tag: 'AI Programs', title: 'Why Every Business Needs an AI Program in 2025', desc: 'Learn how structured AI Programs are replacing ad-hoc AI usage and delivering measurable ROI across industries.' },
              { tag: 'Leadership', title: 'The Rise of the AI Officer', desc: 'How forward-thinking organizations are appointing AI Officers to lead their digital transformation initiatives.' },
              { tag: 'Case Study', title: "From Manual to Automated: A VC Firm's AI Journey", desc: 'How we eliminated 100% of data entry tasks and enhanced deal flow analysis for a leading Venture Capital firm.' },
            ].map((b, i) => (
              <ScrollReveal key={b.title} direction="up" delay={i * 80}>
                <div className="blog-card">
                  <div className="blog-tag">{b.tag}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div style={{ marginTop: '48px' }}>
              <Link href="/blog" className="btn-outline">Read All Articles &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <ScrollReveal direction="up">
            <h2 className="section-heading">Let&rsquo;s Be Tech-Forward Together</h2>
            <p className="section-sub centered">Connect with Edge8&rsquo;s experts to explore AI Programs for your organization</p>
            <div className="typeform-wrapper">
              <iframe src="https://ai-officer.typeform.com/letstalk" title="Contact Edge8" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
