import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import Steps8 from '@/components/Steps8';
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
  { name: 'PHO24', tag: 'AI Agents', image: '/images/case-studies/pho24-new.jpg', website: 'https://www.pho-24.com/' },
  { name: 'InvestMigrate', tag: 'AI Program', image: '/images/case-studies/investmigrate-new.jpg', website: 'https://www.investmigrate.com/' },
  { name: 'Vespa Adventures', tag: 'AI Program', image: '/images/case-studies/vespa-new.jpg', website: 'https://www.vespaadventures.com/' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — always dark in both themes */}
      <section className="relative bg-neutral overflow-hidden min-h-[88vh] flex items-center -mt-[72px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20">
            <source src="/images/edge8-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral/90 via-neutral/60 to-neutral/85" />
        </div>
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none -top-[200px] -right-[150px] z-0" style={{ background: 'radial-gradient(circle, rgba(111,242,193,0.28) 0%, transparent 70%)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bottom-[100px] -left-[100px] z-0" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.22) 0%, transparent 70%)' }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[152px] pb-24">
          <div className="text-center max-w-[820px] mx-auto">
            <ScrollReveal direction="up">
              <span className="inline-block text-sm font-bold tracking-[3px] uppercase text-primary bg-primary/10 border border-primary/25 px-5 py-2 rounded-full mb-7">Be Tech-Forward</span>
              <h1 className="text-7xl md:text-6xl font-bold leading-none tracking-tight text-text-inverse mb-6">
                8x <span className="bg-gradient-to-r from-secondary via-primary to-primary bg-[length:200%_100%] animate-pulse bg-clip-text text-transparent">IMPACT</span>
              </h1>
              <p className="text-xl text-text-inverse/70 max-w-[520px] mx-auto mb-10 leading-relaxed">
                Stop overthinking AI&mdash;Start implementing your AI Programs
              </p>
              <div className="flex gap-4 justify-center flex-wrap mb-[72px]">
                <Link href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-semibold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary">Schedule A Consultation &rarr;</Link>
                <Link href="#services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-text-inverse/35 no-underline transition-all hover:border-text-inverse/80 hover:bg-text-inverse/7">Our Solutions</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider: hero dark → logo strip light */}
      <div className="bg-neutral leading-0" aria-hidden="true">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="block w-full h-[52px]" style={{ color: 'var(--base-100)' }}>
          <polygon points="1440,0 0,52 1440,52" fill="currentColor" />
        </svg>
      </div>

      {/* 2. LOGO STRIP — light */}
      <section className="py-10 border-b border-border bg-base-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-[2px] uppercase text-text-tertiary mb-7">Trusted by leaders across industries</p>
          <div className="flex gap-12 items-center" style={{ animation: 'logo-scroll 28s linear infinite', width: 'max-content' }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <Image src={logo.src} alt={logo.alt} width={120} height={48} className="h-10 w-auto max-w-[120px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM — white */}
      <section className="py-24 bg-base-100" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-5">Why AI Program?</div>
                <h2 className="text-4xl md:text-3xl font-bold leading-tight text-text-primary mb-3">Why do I need an AI Program?</h2>
                <p className="text-lg text-text-secondary font-medium italic">Ad-hoc AI is keeping you stuck at minimal gains</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-base text-text-secondary leading-relaxed mb-8">Lack of focus traps your business in mediocrity&mdash;keeping you stuck in repetitive tasks, wasted resources, and missed opportunities.</p>
                <ul className="flex flex-col gap-4">
                  {[
                    'Competitors outpace you while you overthink AI',
                    'Innovation stalls without a structured program',
                    'Costs balloon and growth suffers from missed AI opportunities',
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3.5 text-sm text-text-secondary">
                      <span className="flex-shrink-0 w-5.5 h-5.5 mt-0.5 bg-secondary/12 border border-secondary/35 rounded-full flex items-center justify-center text-secondary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS — tinted */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-6">
              <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-2">Client Stories</div>
              <h2 className="text-4xl md:text-3xl font-bold text-text-primary">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 5. TECH-FORWARD DEFINITION — white */}
      <section className="py-24 bg-base-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-4">What does it mean to be Tech-Forward?</h2>
            <p className="text-lg text-text-secondary italic mb-2">Tech-Forward /&#x2C8;t&#x25B;k &#x2C8;f&#x254;rw&#x259;rd/</p>
            <p className="text-sm text-text-tertiary italic mb-6">(adjective)</p>
            <p className="text-lg text-text-secondary max-w-[700px] mx-auto leading-relaxed">
              Describing an organization or individual with the capability to strategically orchestrate AI resources to drive measurable value within their department or business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. 8 STEPS — tinted */}
      <section className="bg-neutral-50" id="steps">
        <Steps8 />
      </section>

      {/* MID CTA — gradient blue */}
      <section className="bg-gradient-to-br from-secondary to-secondary-800 py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(111,242,193,0.12) 0%, transparent 70%)' }} />
        <ScrollReveal direction="up">
          <h3 className="text-3xl md:text-2xl font-bold text-text-inverse mb-3 relative">Ready to start your AI journey?</h3>
          <p className="text-base text-text-inverse/75 max-w-[520px] mx-auto mb-9 leading-relaxed relative">Book a free strategy call and get your personalized AI roadmap in 30 minutes.</p>
          <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-neutral text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30 relative">Book Free Strategy Call &rarr;</Link>
        </ScrollReveal>
      </section>

      {/* 7. RESULTS — white */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="flex flex-col items-start">
                <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">Proven Results</div>
                <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-6">Real Results for Real Businesses</h2>
                <p className="text-base text-text-secondary leading-relaxed mb-9">
                  Discover how Edge8 helps companies Be Tech-Forward, delivering results through Global Talent Staffing, AI Programs and AI Officer Leadership.
                </p>
                <Link href="#case-studies" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary">View Case Studies &rarr;</Link>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-5">
              {[
                { stat: 'x2', colorClass: 'text-secondary', borderClass: 'border-l-secondary', microcopy: 'for 10+ organizations',       title: 'AI Officer Leadership',  desc: '10+ organizations running structured AI Programs with dedicated in-house leadership.' },
                { stat: 'x5', colorClass: 'text-accent',   borderClass: 'border-l-accent',    microcopy: 'productivity gain in 90 days', title: 'Global Talent Staffing', desc: 'Doubled output for a healthcare provider — while cutting talent costs in half.' },
                { stat: 'x8', colorClass: 'text-primary',  borderClass: 'border-l-primary',    microcopy: 'efficiency for SME clients',   title: 'AI Programs',           desc: '100% of manual data entry eliminated for a Venture Capital firm, accelerating deal flow.' },
              ].map((r, i) => (
                <ScrollReveal key={r.title} direction="right" delay={i * 100}>
                  <div className={`flex gap-6 bg-surface-raised border border-border border-l-3 rounded-r-2xl p-6 transition-all hover:shadow-md hover:translate-x-1 ${r.borderClass}`}>
                    <div className="flex flex-col items-center w-[108px] flex-shrink-0 pt-1">
                      <div className={`text-[72px] leading-none tracking-tight mb-1 ${r.colorClass}`}>{r.stat}</div>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-center leading-tight text-text-tertiary">{r.microcopy}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-text-primary leading-tight">{r.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. AI-POWERED SOLUTIONS (6-card) — tinted */}
      <section className="py-24 bg-neutral-50" id="services">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">What We Do</div>
            <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-4">AI-Powered Solutions for a Tech-Forward Future</h2>
            <p className="text-base text-text-secondary max-w-[640px] mx-auto mb-4 leading-relaxed">AI Automation Designed to Elevate Your Business</p>
            <p className="text-base text-text-secondary max-w-[640px] mx-auto leading-relaxed">Edge8 enables organizations to leverage AI automation and AI integration for enhanced productivity and efficiency.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Build Your AI-Powered Brand',       desc: 'Go from unknown to industry leader — using AI content, positioning, and authority building.', href: '#contact', colorClass: 'text-secondary hover:text-secondary-600', borderColor: 'var(--secondary)' },
              { title: 'Train Your Team to Lead with AI',  desc: 'Hands-on workshops that turn AI confusion into confident, rapid execution.', href: 'https://www.ai-officer.com/ai-in-business-events', colorClass: 'text-accent hover:text-accent-600', borderColor: 'var(--accent)' },
              { title: 'Automate Hiring & HR',             desc: 'Find, screen, and onboard talent faster with intelligent AI recruitment agents.', href: '#contact', colorClass: 'text-secondary hover:text-secondary-600', borderColor: 'var(--secondary)' },
              { title: 'Accelerate Sales with AI',         desc: 'Deploy AI chatbots and CRM automations that nurture leads and close deals faster.', href: '#contact', colorClass: 'text-accent hover:text-accent-600', borderColor: 'var(--accent)' },
              { title: 'Dominate Social Media with AI',    desc: 'Create and publish high-performing content at scale — without burning out your team.', href: 'https://www.ai-officer.com/ai-in-business-events', colorClass: 'text-secondary hover:text-secondary-600', borderColor: 'var(--secondary)' },
              { title: 'Scale with Global AI Talent',      desc: 'Hire top-tier AI-trained professionals from Vietnam in weeks, not months.', href: '#contact', colorClass: 'text-accent hover:text-accent-600', borderColor: 'var(--accent)' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 60}>
                <div className="bg-surface-raised border border-border border-t-2 rounded-xl p-6 flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderTopColor: s.borderColor }}>
                  <h3 className="text-base font-bold text-text-primary mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4 line-clamp-2">{s.desc}</p>
                  <Link href={s.href} className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-2.5 mt-auto ${s.colorClass}`}>Learn more &rarr;</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SOLUTIONS — white */}
      <section className="py-24 bg-base-100 border-t border-border" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="max-w-[680px] mb-16">
              <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">What We Offer</div>
              <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-4">Solutions</h2>
              <p className="text-base text-text-secondary leading-relaxed">Empowering Organizations to use AI effectively through clear leadership, thoughtful implementation and strong global talent.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'AI Programs', subtitle: 'From Strategy to Implementation—We Build, Not Pitch', desc: "We don't just talk AI—we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys.", image: '/images/solutions/sol-ai-programs.jpg' },
              { label: 'Global Talent Network', subtitle: 'Scale Smarter with AI-Empowered Teams', desc: "Access Vietnam's top AI-trained professionals to accelerate your initiatives—without compromising on quality or speed. We embed engineers, analysts, and operators directly into your team.", image: '/images/solutions/sol-global-talent.jpg' },
              { label: 'AI Officer Certification', subtitle: 'Make Your Team AI-Literate and Leadership-Ready', desc: "We equip founders and teams to lead with confidence. Through our AI Officer certification and hands-on workshops, your organization will gain the frameworks, tools, and language to scale with AI.", image: '/images/solutions/sol-workshop.jpg' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="group bg-surface-raised border border-border rounded-xl overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
                  <div className="overflow-hidden">
                    <Image src={s.image} alt={s.label} width={400} height={240} className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col p-5 flex-1">
                    <div className="text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-2">{s.label}</div>
                    <div className="h-px bg-border mb-3" />
                    <h3 className="text-sm font-bold text-text-primary mb-2 leading-snug">{s.subtitle}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={160}>
            <div className="flex gap-4 justify-center flex-wrap mt-14">
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" className="inline-flex items-center justify-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary min-w-[220px]">Join a Workshop &rarr;</Link>
              <Link href="/services/ai-capabilities-audit" className="inline-flex items-center justify-center gap-2 bg-accent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent min-w-[220px]">Get Your Audit &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. CASE STUDIES — tinted */}
      <section className="py-24 bg-neutral-50" id="case-studies">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">Success Stories</div>
              <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-4">The Path to Tech-Forward</h2>
              <p className="text-base text-text-secondary max-w-[640px] mx-auto leading-relaxed">A few examples of successful AI-Driven Programs</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <ScrollReveal key={c.name} direction="up" delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden bg-surface-raised border border-border transition-all hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative w-full aspect-[4/3] overflow-hidden block">
                    <Image src={c.image} alt={c.name} width={600} height={450} className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral/72 via-neutral/20 to-transparent transition-all group-hover:from-neutral/82 group-hover:via-neutral/55" />
                    <a href={c.website} target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-inverse bg-neutral px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">View Website &rarr;</span>
                    </a>
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-1.5">{c.tag}</div>
                      <h3 className="text-lg font-bold text-text-inverse leading-tight">{c.name}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-12">
              <Link href="/case-studies" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary">Full List of Case Studies &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11. BLOG SNIPPET — white */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3">Insights</div>
              <h2 className="text-4xl md:text-3xl font-bold text-text-primary mb-4">AI Is Driving Rapid Change Across The World</h2>
              <p className="text-base text-text-secondary max-w-[640px] mx-auto leading-relaxed">Discover the latest insights on Global Talent, Artificial Intelligence Trends, and AI Agents</p>
            </div>
          </ScrollReveal>
          <div className="blog-grid-hero max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <Link href="/blog/your-next-ai-hire" className="blog-featured group bg-surface-raised border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-secondary hover:-translate-y-1 hover:shadow-lg">
                <div className="w-full aspect-[16/10] overflow-hidden flex-shrink-0">
                  <Image src="/images/blog-ai-hire.jpg" alt="Your Next AI Hire Isn't a Person" width={600} height={450} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-xs font-bold uppercase tracking-wide text-accent mb-3">AI in Business</div>
                  <h3 className="text-xl font-bold text-text-primary mb-2.5 leading-snug">Your Next AI Hire Isn&apos;t a Person</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Most companies don&apos;t fail at AI because of the tech. They fail because no one owns it. AI agents need managers, engineers, and real teams, just like people.</p>
                </div>
              </Link>
            </ScrollReveal>
            <div className="blog-stack">
              {[
                { href: '/blog/2026-ai-trends', img: '/images/blog-ai-trends.jpg', tag: 'AI in Business', tagClass: 'text-accent', title: '2026 AI Trends: 5 Game-Changing Shifts That Will Define Business Success', desc: 'Explore the five 2026 AI trends transforming business—from AI leadership to data discipline.' },
                { href: '#', img: '/images/blog-posts/meta-ray-ban.png', tag: 'Technology', tagClass: 'text-secondary', title: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses', desc: "Technology always catches up—the question is whether you're ready when it does." },
                { href: '#', img: '/images/blog-posts/ai-data-migration.png', tag: 'AI Strategy', tagClass: 'text-primary', title: 'How to Organise Your Data Before You Build an AI Program', desc: "Clean data is the foundation of every successful AI rollout. Here's where to start." },
              ].map((post, i) => (
                <ScrollReveal key={post.title} direction="right" delay={80 + i * 80}>
                  <Link href={post.href} className="group blog-stack-card bg-surface-raised border border-border rounded-xl overflow-hidden flex flex-1 transition-all hover:border-secondary hover:-translate-y-0.5 hover:shadow-md">
                    <div className="w-[130px] h-auto overflow-hidden flex-shrink-0">
                      <Image src={post.img} alt={post.title} width={130} height={130} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                      <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${post.tagClass}`}>{post.tag}</div>
                      <h3 className="text-sm font-semibold text-text-primary leading-snug mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{post.desc}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-12">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary px-6 py-3.5 rounded-xl border border-border no-underline transition-all hover:border-text-primary hover:bg-text-primary hover:text-text-inverse">Read All Articles &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. AI AUTOMATION REVIEW CTA — tinted */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(40,123,232,0.08) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-text-primary mb-3 leading-snug">Ready to transform your business with AI automation?</h2>
                <p className="text-base font-semibold text-secondary mb-4">Schedule a Free AI Automation Review</p>
                <p className="text-base text-text-secondary max-w-[480px] mb-9 leading-relaxed">Schedule a free, no-obligation process review with our AI experts. We&apos;ll analyze your current AI-powered workflows, showcase AI agents&apos; capabilities, and show you how our solutions can enhance efficiency, optimize operations, and drive business growth.</p>
                <Link href="/services/ai-capabilities-audit" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-bold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary">Book Your AI Capabilities Audit &rarr;</Link>
              </div>
            </div>
              <div className="relative overflow-hidden rounded-2xl">
              <Image src="/images/ai-workplace.jpg" alt="AI in the workplace" width={800} height={500} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-50/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. CONTACT — always dark */}
      <section className="bg-neutral py-24 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(40,123,232,0.18) 0%, transparent 65%), radial-gradient(ellipse at 75% 50%, rgba(111,242,193,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-3xl font-bold text-text-inverse mb-4">Let&apos;s Be Tech-Forward Together</h2>
            <p className="text-base text-text-inverse/70 max-w-[640px] mx-auto leading-relaxed mb-16">Connect with Edge8&apos;s experts to explore AI Programs for your organization</p>
          </ScrollReveal>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
