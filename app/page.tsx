import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import Steps8 from '@/components/Steps8';
import ContactForm from '@/components/ContactForm';
import { Quote } from '@/components/ui/quote';

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

const stats = [
  { value: '10+', label: 'Organizations Served' },
  { value: '8x', label: 'Average Impact' },
  { value: '90d', label: 'To First Results' },
  { value: '100%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
    title: 'Build Your AI-Powered Brand',
    desc: 'Go from unknown to industry leader — using AI content, positioning, and authority building.',
    href: '#contact',
    accent: 'text-secondary',
    bar: 'bg-secondary',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    title: 'Train Your Team to Lead with AI',
    desc: 'Hands-on workshops that turn AI confusion into confident, rapid execution.',
    href: 'https://www.ai-officer.com/ai-in-business-events',
    accent: 'text-accent',
    bar: 'bg-accent',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Automate Hiring & HR',
    desc: 'Find, screen, and onboard talent faster with intelligent AI recruitment agents.',
    href: '#contact',
    accent: 'text-secondary',
    bar: 'bg-secondary',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    title: 'Accelerate Sales with AI',
    desc: 'Deploy AI chatbots and CRM automations that nurture leads and close deals faster.',
    href: '#contact',
    accent: 'text-accent',
    bar: 'bg-accent',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
    ),
    title: 'Dominate Social Media with AI',
    desc: 'Create and publish high-performing content at scale — without burning out your team.',
    href: 'https://www.ai-officer.com/ai-in-business-events',
    accent: 'text-secondary',
    bar: 'bg-secondary',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Scale with Global AI Talent',
    desc: 'Hire top-tier AI-trained professionals from Vietnam in weeks, not months.',
    href: '#contact',
    accent: 'text-accent',
    bar: 'bg-accent',
  },
];

const blogPosts = [
  { href: '/blog/your-next-ai-hire', img: '/images/blog-ai-hire.jpg', tag: 'AI in Business', tagClass: 'text-accent', title: 'Your Next AI Hire Isn\'t a Person', desc: 'Most companies don\'t fail at AI because of the tech. They fail because no one owns it.' },
  { href: '/blog/2026-ai-trends', img: '/images/blog-ai-trends.jpg', tag: 'AI in Business', tagClass: 'text-accent', title: '2026 AI Trends: 5 Game-Changing Shifts That Will Define Business Success', desc: 'Explore the five 2026 AI trends transforming business—from AI leadership to data discipline.' },
  { href: '/blog/meta-ray-ban-glasses', img: '/images/blog-posts/meta-ray-ban.png', tag: 'Technology', tagClass: 'text-secondary', title: 'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses', desc: 'Technology always catches up — the question is whether you\'re ready when it does.' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — dark, Logisco-style two-column */}
      <section className="relative bg-neutral overflow-hidden min-h-screen flex items-center -mt-[72px]">
        {/* Video background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-15">
            <source src="/images/edge8-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-neutral/95 via-neutral/80 to-neutral/60" />
        </div>
        {/* Glow blobs */}
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none -top-[150px] -right-[100px] z-0"
          style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.22) 0%, transparent 70%)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bottom-[80px] -left-[80px] z-0"
          style={{ background: 'radial-gradient(circle, rgba(111,242,193,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[140px] pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: headline + CTAs */}
            <ScrollReveal direction="left">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-primary bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full mb-7">Be Tech-Forward</span>
              <h1 className="font-bold leading-none tracking-tight mb-6 animate-gradient-shift"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', background: 'linear-gradient(90deg, #ffffff, #6FF2C1, #287BE8, #ffffff)', backgroundSize: '300% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                8x IMPACT
              </h1>
              <p className="text-lg text-text-inverse/70 max-w-[480px] mb-10 leading-relaxed">
                Stop overthinking AI&mdash;Start implementing your AI Programs and unlock compounding results.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-bold px-7 py-4 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/40">
                  Schedule A Consultation &rarr;
                </Link>
                <Link href="#services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-7 py-4 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70 hover:bg-white/5">
                  Our Solutions
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: stats card */}
            <ScrollReveal direction="right" delay={120}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 grid grid-cols-2 gap-px bg-white/10 overflow-hidden shadow-xl">
                {stats.map((s) => (
                  <div key={s.label} className="bg-neutral/80 p-6 text-center first:rounded-tl-2xl [&:nth-child(2)]:rounded-tr-2xl [&:nth-child(3)]:rounded-bl-2xl last:rounded-br-2xl">
                    <div className="text-4xl font-extrabold text-primary mb-1.5 tracking-tight">{s.value}</div>
                    <div className="text-[11px] font-bold uppercase tracking-[2px] text-text-inverse/45 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-[60px]" style={{ color: 'var(--base-100)' }}>
            <polygon points="0,60 1440,0 1440,60" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* 2. LOGO STRIP */}
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

      {/* 3. PROBLEM — two-column: text left, image right */}
      <section className="py-24 bg-base-100" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-6">Why AI Program?</span>
                <h2 className="text-4xl font-bold leading-tight text-text-primary mb-4">Why do I need an<br />AI Program?</h2>
                <p className="text-lg text-text-secondary font-medium italic mb-8">Ad-hoc AI is keeping you stuck at minimal gains</p>
                <p className="text-base text-text-secondary leading-relaxed mb-8">Lack of focus traps your business in mediocrity&mdash;keeping you stuck in repetitive tasks, wasted resources, and missed opportunities.</p>
                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    'Competitors outpace you while you overthink AI',
                    'Innovation stalls without a structured program',
                    'Costs balloon and growth suffers from missed AI opportunities',
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3.5 text-sm text-text-secondary">
                      <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-secondary/10 border border-secondary/30 rounded-full flex items-center justify-center text-secondary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30">
                  Get Your AI Assessment &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/ai-workplace.jpg" alt="AI in the workplace" width={700} height={520} className="w-full h-[400px] lg:h-[480px] object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#287BE8" strokeWidth="2" className="w-6 h-6"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-text-primary leading-none">8x</div>
                    <div className="text-xs font-bold uppercase tracking-wide text-text-tertiary">Average ROI</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. TECH-FORWARD DEFINITION */}
      <section className="py-20 bg-surface-overlay text-center">
        <Quote variant="secondary" className="w-full items-center text-center justify-center my-0">
          <div className="flex flex-col w-fit items-center max-w-7xl p-12 py-16 text-center">
            <h2 className="w-fit text-4xl font-bold text-text-primary mb-4">What does it mean to be <span className="text-secondary">Tech-Forward</span>?</h2>
            <p className="w-fit text-lg text-text-secondary italic mb-2">Tech-Forward /&#x2C8;t&#x25B;k &#x2C8;f&#x254;rw&#x259;rd/</p>
            <p className="text-sm text-text-tertiary italic mb-6">(adjective)</p>
            <p className="w-fit text-lg text-text-secondary max-w-[700px] mx-auto leading-relaxed">
              Describing an organization or individual with the capability to strategically orchestrate AI resources to drive measurable value within their department or business.
            </p>
          </div>
        </Quote>
      </section>

      {/* 5. 8 STEPS */}
      <section className="bg-base-100" id="steps">
        <Steps8 />
      </section>

      {/* 6. AI-POWERED SOLUTIONS — 6-card grid with icons */}
      <section className="py-24 bg-surface-overlay" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">What We Do</span>
              <h2 className="text-4xl font-bold text-text-primary mb-4">AI-Powered Solutions for a Tech-Forward Future</h2>
              <p className="text-base text-text-secondary max-w-[560px] mx-auto leading-relaxed">AI Automation designed to elevate your business — from branding to global talent.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 60}>
                <div className="group bg-white rounded-2xl p-7 flex flex-col h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${s.bar}`} />
                  <div className={`w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center mb-5 ${s.accent}`}>
                    {s.icon}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">{s.desc}</p>
                  <Link href={s.href} className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-3 mt-auto ${s.accent}`}>
                    Learn more &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOLUTIONS — 3 image cards */}
      <section className="py-24 bg-base-100" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">What We Offer</span>
              <h2 className="text-4xl font-bold text-text-primary mb-4">Our Solutions</h2>
              <p className="text-base text-text-secondary max-w-[560px] mx-auto leading-relaxed">
                Empowering Organizations to use AI effectively through clear leadership, thoughtful implementation and strong global talent.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'AI Programs', subtitle: 'From Strategy to Implementation—We Build, Not Pitch', desc: "We don't just talk AI—we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys.", image: '/images/solutions/sol-ai-programs.jpg' },
              { label: 'Global Talent Network', subtitle: 'Scale Smarter with AI-Empowered Teams', desc: "Access Vietnam's top AI-trained professionals to accelerate your initiatives—without compromising on quality or speed. We embed engineers, analysts, and operators directly into your team.", image: '/images/solutions/sol-global-talent.jpg' },
              { label: 'AI Officer Certification', subtitle: 'Make Your Team AI-Literate and Leadership-Ready', desc: "We equip founders and teams to lead with confidence. Through our AI Officer certification and hands-on workshops, your organization will gain the frameworks, tools, and language to scale with AI.", image: '/images/solutions/sol-workshop.jpg' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="overflow-hidden">
                    <Image src={s.image} alt={s.label} width={480} height={260} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <span className="text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">{s.label}</span>
                    <div className="h-px bg-border mb-4" />
                    <h3 className="text-base font-bold text-text-primary mb-3 leading-snug">{s.subtitle}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className="flex gap-4 justify-center flex-wrap mt-12">
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30 min-w-[200px] justify-center">Join a Workshop &rarr;</Link>
              <Link href="/services/ai-capabilities-audit" className="inline-flex items-center gap-2 bg-accent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 min-w-[200px] justify-center">Get Your Audit &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. RESULTS — dark CTA band style inspired by Logisco */}
      <section className="py-24 bg-neutral relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(40,123,232,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(111,242,193,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-primary bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full mb-6">Proven Results</span>
              <h2 className="text-4xl font-bold text-text-inverse mb-6 leading-tight">Real Results for<br />Real Businesses</h2>
              <p className="text-base text-text-inverse/60 leading-relaxed mb-10 max-w-[420px]">
                Discover how Edge8 helps companies Be Tech-Forward, delivering results through Global Talent Staffing, AI Programs and AI Officer Leadership.
              </p>
              <Link href="#case-studies" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/40">
                View Case Studies &rarr;
              </Link>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {[
                { stat: 'x2', color: 'text-primary', border: 'border-primary/25', bg: 'bg-primary/5', microcopy: 'for 10+ organizations', title: 'AI Officer Leadership', desc: '10+ organizations running structured AI Programs with dedicated in-house leadership.' },
                { stat: 'x5', color: 'text-secondary', border: 'border-secondary/25', bg: 'bg-secondary/5', microcopy: 'productivity gain in 90 days', title: 'Global Talent Staffing', desc: 'Doubled output for a healthcare provider — while cutting talent costs in half.' },
                { stat: 'x8', color: 'text-primary', border: 'border-primary/25', bg: 'bg-primary/5', microcopy: 'efficiency for SME clients', title: 'AI Programs', desc: '100% of manual data entry eliminated for a Venture Capital firm, accelerating deal flow.' },
              ].map((r, i) => (
                <ScrollReveal key={r.title} direction="right" delay={i * 100}>
                  <div className={`flex gap-5 ${r.bg} border ${r.border} rounded-2xl p-5 transition-all hover:translate-x-1`}>
                    <div className="flex flex-col items-center w-[80px] flex-shrink-0 pt-1">
                      <div className={`text-5xl leading-none font-extrabold tracking-tight mb-1 ${r.color}`}>{r.stat}</div>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-center text-text-inverse/40 leading-tight">{r.microcopy}</span>
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <h3 className="text-sm font-bold text-text-inverse leading-tight">{r.title}</h3>
                      <p className="text-xs text-text-inverse/55 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">Client Stories</span>
              <h2 className="text-4xl font-bold text-text-primary">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 10. CASE STUDIES */}
      <section className="py-24 bg-base-100" id="case-studies">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">Success Stories</span>
                <h2 className="text-4xl font-bold text-text-primary mb-3">The Path to Tech-Forward</h2>
                <p className="text-base text-text-secondary max-w-[480px] leading-relaxed">A few examples of successful AI-driven programs.</p>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30 shrink-0">
                All Case Studies &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <ScrollReveal key={c.name} direction="up" delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image src={c.image} alt={c.name} width={600} height={450} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 via-neutral/20 to-transparent" />
                    <a href={c.website} target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-inverse bg-secondary px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">View Website &rarr;</span>
                    </a>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-1.5">{c.tag}</div>
                      <h3 className="text-lg font-bold text-text-inverse leading-tight">{c.name}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MID CTA BAND — dark, Logisco-style full-width */}
      <section className="bg-secondary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(111,242,193,0.15) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-3xl font-bold text-text-inverse mb-3">Ready to start your AI journey?</h3>
            <p className="text-base text-text-inverse/75 max-w-[480px] leading-relaxed">Book a free strategy call and get your personalized AI roadmap in 30 minutes.</p>
          </div>
          <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-secondary text-sm font-bold px-8 py-4 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl shrink-0">
            Book Free Strategy Call &rarr;
          </Link>
        </div>
      </section>

      {/* 12. BLOG — 3-column equal cards */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">Insights</span>
                <h2 className="text-4xl font-bold text-text-primary mb-3">AI Is Driving Rapid Change</h2>
                <p className="text-base text-text-secondary max-w-[480px] leading-relaxed">Latest insights on Global Talent, AI Trends, and AI Agents</p>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary px-6 py-3.5 rounded-xl border border-secondary/30 no-underline transition-all hover:bg-secondary hover:text-text-inverse shrink-0">
                Read All Articles &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} direction="up" delay={i * 80}>
                <Link href={post.href} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col no-underline h-full">
                  <div className="overflow-hidden">
                    <Image src={post.img} alt={post.title} width={480} height={240} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${post.tagClass}`}>{post.tag}</div>
                    <h3 className="text-base font-bold text-text-primary mb-3 leading-snug flex-1 line-clamp-3">{post.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">{post.desc}</p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#287BE8" strokeWidth="2" className="w-3.5 h-3.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>
                      </div>
                      <span className="text-xs font-semibold text-text-tertiary">Dave Hajdu · Edge8</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CONTACT — always dark */}
      <section className="bg-neutral py-24 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(40,123,232,0.18) 0%, transparent 65%), radial-gradient(ellipse at 75% 50%, rgba(111,242,193,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-primary bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full mb-6">Get In Touch</span>
            <h2 className="text-4xl font-bold text-text-inverse mb-4">Let&apos;s Be Tech-Forward Together</h2>
            <p className="text-base text-text-inverse/60 max-w-[560px] mx-auto leading-relaxed mb-16">Connect with Edge8&apos;s experts to explore AI Programs for your organization</p>
          </ScrollReveal>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
