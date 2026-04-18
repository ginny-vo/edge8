import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Capabilities Audit | Edge8',
  description: 'Turn Your AI Experiments Into ROI-Driving Systems',
};

const processSteps = [
  {
    level: 'Level 1',
    title: 'Discovery & Assessment',
    body: 'We conduct stakeholder interviews, team surveys, and process mapping to measure readiness and current AI adoption levels.',
  },
  {
    level: 'Level 2',
    title: 'Design & Documentation',
    body: 'We turn insights into a practical roadmap that includes your AI Maturity Scorecard, 12-month opportunity plan, and prioritized workflow documentation.',
  },
  {
    level: 'Level 3',
    title: 'Build & Deploy',
    body: 'We develop and implement your AI systems, automate high-impact workflows, and train your team to sustain results.',
  },
];

const pricingTiers = [
  {
    tier: 'Foundation',
    amount: '$4,999',
    desc: 'Build Your AI Foundation — For teams just getting started',
    highlighted: false,
  },
  {
    tier: 'Standard',
    amount: '$9,999',
    desc: 'Assess and Align Capabilities — For scaling organizations',
    highlighted: true,
  },
  {
    tier: 'Peak',
    amount: '$24,999',
    desc: 'Enterprise Scale — For leaders ready to operationalize AI',
    highlighted: false,
  },
];

const testimonials = [
  {
    quote: 'I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia.',
    name: 'Dato George Lim',
    title: 'Founder and CEO, G&A GROUP & GA SPACE',
    image: '/images/testimonials/dato-george-lim.png',
  },
  {
    quote: 'We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks and exploding output across a wide range of applications. I highly recommend Edge8.ai as a YPO resource.',
    name: 'John VanNewkirk',
    title: 'YPO Gold Seattle, Forum 6',
    image: '/images/testimonials/john-vannewkirk.jpg',
  },
  {
    quote: 'I am very grateful to Dave Hajdu, who spoke to graduate students in our international business and public policy program during our visit to Vietnam about Negotiations and AI. He was extremely knowledgeable and engaging.',
    name: 'Dr. Brooks Holtom',
    title: 'Professor of Management, Georgetown',
    image: '/images/testimonials/brooks-holtom.jpg',
  },
  {
    quote: 'Love the new look and branding. The website looks so good. I\'m deeply grateful. The brand interview really made me think about our positioning and business in ways I never expected.',
    name: 'Dao Nguyen',
    title: 'Founder, DN Legal',
    image: '/images/testimonials/dao-nguyen.jpg',
  },
  {
    quote: 'I can\'t stop looking at the new website and brand book. With Edge8\'s help, we\'re finally presenting ourselves the way we\'ve always wanted. The speed, the quality, and the care were all top-notch.',
    name: 'Tuan Anh Le',
    title: 'Managing Partner, DN Legal',
    image: '/images/testimonials/tuan-anh-le.jpg',
  },
  {
    quote: 'Working with Edge8 has been a pleasure. Dave and the team showed us how to leverage AI to streamline our processes. With the help of Edge8 we have scaled from single posts to a full content engine.',
    name: 'Dan Absher',
    title: 'CEO, Absher Construction Company',
    image: '/images/testimonials/dan-absher.jpg',
  },
];

export default function AICapabilitiesAuditPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.18) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/10 border border-secondary/25 px-3.5 py-1.5 rounded-full mb-6">Readiness + Roadmap</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">AI Capabilities Audit</h1>
            <p className="text-lg text-text-inverse/80 font-medium leading-relaxed mb-4">Turn Your AI Experiments Into ROI-Driving Systems</p>
            <p className="text-base text-text-inverse/50 leading-relaxed mb-9 max-w-[540px]">According to MIT, 95% of companies see zero return on their AI investments. That&apos;s not because AI doesn&apos;t work. It&apos;s because their strategy, people, and tools aren&apos;t aligned. Your business doesn&apos;t have to be one of them.</p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Get Your AI Audit</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">View All Services</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
          {[
            { label: 'Focus', value: 'Readiness + opportunities' },
            { label: 'Output', value: '12-month roadmap' },
            { label: 'Use Case', value: 'Leadership planning' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
              <div className="text-base font-bold text-text-inverse">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STAT BANNER */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="text-7xl font-extrabold text-secondary mb-4">95%</div>
            <p className="text-lg text-text-primary font-semibold leading-relaxed mb-3">of companies see zero return on their AI investments, according to MIT.</p>
            <p className="text-base text-text-secondary leading-relaxed max-w-[480px] mx-auto">Most are spending without a clear picture of readiness, priorities, or sequence. The audit changes that.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">How It Works</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Three levels from diagnosis to delivery.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.level} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">{step.level}</div>
                <div className="text-5xl font-extrabold text-secondary/8 mb-3 leading-none">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Choose Your Growth Stage</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Three tiers based on depth and scope.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div key={tier.tier} className={`rounded-2xl p-10 flex flex-col relative overflow-hidden ${tier.highlighted ? 'bg-secondary text-white shadow-lg shadow-secondary/25' : 'bg-white shadow-sm'}`}>
                {tier.highlighted && <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />}
                <div className={`text-xs font-bold tracking-[2px] uppercase mb-2 ${tier.highlighted ? 'text-white/60' : 'text-text-tertiary'}`}>{tier.tier}</div>
                <div className={`text-4xl font-extrabold mb-4 ${tier.highlighted ? 'text-white' : 'text-text-primary'}`}>{tier.amount}</div>
                <p className={`text-sm leading-relaxed mb-8 flex-1 ${tier.highlighted ? 'text-white/75' : 'text-text-secondary'}`}>{tier.desc}</p>
                <Link href="/#contact" className={`inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-xl no-underline transition-all ${tier.highlighted ? 'bg-white text-secondary hover:shadow-lg' : 'bg-secondary text-white hover:shadow-md hover:shadow-secondary/30'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM LINE */}
      <section className="py-24 bg-neutral">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-inverse tracking-tight leading-snug mb-6">The Bottom Line</h2>
          <p className="text-lg text-text-inverse/60 leading-relaxed mb-8">AI success depends on readiness, strategy, and execution. The AI Capabilities Audit gives you the clarity, structure, and momentum to scale AI that works. Align your team. Fix your data gaps. Capture your next 12 months of AI opportunity.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Get Your Audit</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">What people say</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">Trusted by leaders across industries.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-sm text-text-secondary leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-50 flex-shrink-0">
                    <Image src={t.image} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-tertiary">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
