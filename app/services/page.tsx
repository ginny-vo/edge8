import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Edge8',
  description: 'Explore Edge8 services spanning AI workshops, staffing, audits, leadership, and training.',
};

const services = [
  {
    slug: 'ai-in-business-workshop',
    eyebrow: 'Interactive Executive Enablement',
    title: 'AI in Business Workshop',
    summary: 'Align leadership, create common language around AI, and leave with practical next steps your team can execute immediately.',
    accent: 'warning',
    stats: ['Private or public', 'Leaders + operators', '90-day action plan'],
  },
  {
    slug: 'your-first-ai-hire',
    eyebrow: 'Placement + Training + Support',
    title: 'Your First AI Hire',
    summary: 'We recruit, train, and support your first AI engineer so they deliver results from Month 1. No guessing. No isolation. No wasted investment.',
    accent: 'warning',
    stats: ['2-4 weeks match', '90-day program', '60-day guarantee'],
  },
  {
    slug: 'ai-capabilities-audit',
    eyebrow: 'Readiness + Roadmap',
    title: 'AI Capabilities Audit',
    summary: 'Assess how prepared your organization is for AI adoption, then turn the findings into a practical roadmap for the next 12 months.',
    accent: 'secondary',
    stats: ['Readiness + opportunities', '12-month roadmap', 'Leadership planning'],
  },
  {
    slug: 'caio-leadership',
    eyebrow: 'C-Level AI Strategy That Scales',
    title: 'Fractional CAIO Leadership',
    summary: 'Get stage-appropriate AI leadership now without committing to a full-time executive hire before the business is ready for it.',
    accent: 'secondary',
    stats: ['Start in 2 weeks', 'Executive + delivery', 'Stage-appropriate scale'],
  },
  {
    slug: 'global-staffing',
    eyebrow: 'AI-Empowered Teams From Vietnam',
    title: 'Global Staffing',
    summary: "Find, train, and scale with AI-empowered professionals who integrate into your workflows and extend your team's operating capacity.",
    accent: 'secondary',
    stats: ['Up to 75% savings', 'Vietnam talent', 'Contract · Full-time · Fractional'],
  },
  {
    slug: 'training-and-certification',
    eyebrow: 'AI Literacy For Teams And Operators',
    title: 'Training & Certification',
    summary: 'Equip your team with the frameworks, operating language, and practical confidence needed to implement AI responsibly and effectively.',
    accent: 'warning',
    stats: ['12 months', '100% online', '<3 hours/week'],
  },
];

const accentMap: Record<string, string> = {
  secondary: 'text-secondary',
  warning: 'text-warning',
};

const accentBarMap: Record<string, string> = {
  secondary: 'bg-secondary',
  warning: 'bg-warning',
};

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(111,242,193,0.18) 0%, transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none bottom-[-120px] -left-[50px]" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.14) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/10 border border-secondary/25 px-3.5 py-1.5 rounded-full mb-6">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-5">AI programs, leadership, and delivery capacity built to move work.</h1>
            <p className="text-base text-text-inverse/60 leading-relaxed mb-9 max-w-[480px]">Six entry points into the same outcome: a more capable, AI-powered business. Choose where to start.</p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Schedule A Consultation</Link>
              <Link href="/" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Return Home</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Service lines</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Six entry points into the same outcome: a more capable AI-powered business.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md no-underline overflow-hidden relative">
                <div className={`absolute top-0 left-0 right-0 h-1 ${accentBarMap[service.accent]}`} />
                <div>
                  <span className={`block text-xs font-bold tracking-[2px] uppercase ${accentMap[service.accent]} mb-2`}>{service.eyebrow}</span>
                  <h3 className="text-lg font-bold text-text-primary leading-snug">{service.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">{service.summary}</p>
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  {service.stats.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${accentBarMap[service.accent]}`} />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accentMap[service.accent]} group-hover:gap-2.5 transition-all`}>
                  Explore service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-inverse tracking-tight leading-snug mb-4">Not sure where to start?</h2>
          <p className="text-base text-text-inverse/60 leading-relaxed mb-8 max-w-[480px] mx-auto">Book a free 30-minute consultation and we&apos;ll help you find the right entry point for your organization.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Start the Conversation</Link>
        </div>
      </section>
    </main>
  );
}
