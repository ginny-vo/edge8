import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Staffing | Hire AI Officers, Engineers & Marketers',
  description: "Find, train, and scale with AI-empowered professionals who integrate into your workflows and extend your team's operating capacity.",
};

const roles = [
  {
    title: 'AI Officers',
    subtitle: 'Your strategic partner in AI leadership',
    bullets: [
      'Lead company-wide AI initiatives with accountability',
      'Build data and governance frameworks',
      'Develop automation roadmaps tied to business results',
      'Mentor internal teams to increase AI fluency',
    ],
    note: 'Perfect for organizations ready to move from experimentation to systemized AI programs.',
  },
  {
    title: 'AI Engineers',
    subtitle: 'The builders behind your automation success',
    bullets: [
      'Build and optimize intelligent workflows',
      'Create agentic systems that drive daily productivity',
      'Implement integrations across tools and departments',
      'Work alongside your CAIO or leadership team to scale adoption',
    ],
    note: 'Ideal for mid-sized companies needing immediate hands-on technical execution.',
  },
  {
    title: 'Marketing Professionals',
    subtitle: 'AI-trained marketers for the next era of growth',
    bullets: [
      'Execute multi-channel digital campaigns powered by AI',
      'Automate reporting and analytics for clear ROI',
      'Build and manage content engines using AI tools',
      'Enhance personalization and audience engagement',
    ],
    note: 'Designed for companies ready to blend creativity with AI-driven performance.',
  },
];

const benefits = [
  'Save up to 75% on global talent compared to local hires',
  'Access professionals who are AI-trained, certified, and business fluent',
  'Start in weeks, not months, with a proven onboarding process',
  'Flexible models: contract, full-time, or fractional',
];

export default function GlobalStaffingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.18) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/10 border border-secondary/25 px-3.5 py-1.5 rounded-full mb-6">AI-Empowered Teams From Vietnam</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">Let&apos;s Build Your AI-Ready Team.</h1>
            <p className="text-lg text-text-inverse/80 font-medium leading-relaxed mb-4">Hiring AI-skilled talent is tough. Costs are high, skills are scarce, and growth slows. Edge8 makes it easy.</p>
            <p className="text-base text-text-inverse/50 leading-relaxed mb-9 max-w-[540px]">Global staffing is not just about lower-cost labor. The right model gives you capable operators, analysts, and builders who can work with AI-native systems and accelerate delivery without introducing chaos into your process.</p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Book a 30-Minute Call</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">View All Services</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
          {[
            { label: 'Cost Savings', value: 'Up to 75%' },
            { label: 'Talent Market', value: 'Vietnam' },
            { label: 'Engagement Models', value: 'Contract · Full-Time · Fractional' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
              <div className="text-base font-bold text-text-inverse">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Roles</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Three types of AI-empowered talent.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-2">{role.subtitle}</div>
                <h3 className="text-xl font-bold text-text-primary mb-4">{role.title}</h3>
                <ul className="space-y-2.5 mb-5">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-secondary mt-1 shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-tertiary italic border-t border-border pt-4">{role.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EDGE8 */}
      <section className="py-24 bg-base-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">Why Edge8 Global Staffing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item, i) => (
              <div key={item} className="bg-white rounded-2xl p-7 shadow-sm flex items-start gap-4">
                <span className="text-secondary font-bold text-lg shrink-0">✓</span>
                <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Next step</span>
              <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">Build a stronger execution bench.</h2>
              <p className="text-sm text-text-inverse/60 leading-relaxed max-w-[460px]">Use AI-empowered global talent to increase throughput, support implementation work, and create a more durable operating team.</p>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Book a Meeting</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Back to Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
