import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fractional CAIO Leadership | C-Level AI Strategy That Scales',
  description: 'Get stage-appropriate AI leadership now without committing to a full-time executive hire before the business is ready for it.',
};

const patterns = [
  { title: 'A VP of Sales great at managing reps…', body: "…but can't close deals." },
  { title: 'A CMO who builds strategy…', body: "…but can't run a Facebook ad." },
  { title: 'A CFO who needs a full team…', body: "…when you need someone who can build the model in Excel." },
];

const comparisonItems = [
  { label: 'Cost', fullTime: '$250K – $400K + benefits', fractional: '$5,000/month' },
  { label: 'Time to Start', fullTime: '6–12 months to hire', fractional: 'Start in 2 weeks' },
  { label: 'Risk', fullTime: 'Wrong hire = $300K wasted', fractional: '$15K to validate' },
  { label: 'Scale', fullTime: 'Must scale up to be effective', fractional: 'Scales with you' },
];

const roadmapPhases = [
  {
    phase: 'Month 1',
    title: 'Foundation & Quick Wins',
    items: ['Complete AI Capabilities Audit', 'Develop a 90-Day AI Roadmap aligned to business goals', 'Deploy first automation (proof AI works)', 'Prepare executive board presentation'],
  },
  {
    phase: 'Month 2-3',
    title: 'Build Momentum',
    items: ['Deploy 3–5 high-impact AI workflows', 'Conduct team training (up to 20 people)', 'Establish AI governance & data strategy', 'Build ROI measurement dashboard'],
  },
  {
    phase: 'Month 4-6',
    title: 'Scale & Optimize',
    items: ['Establish AI Center of Excellence structure', 'Create full-time AI hiring plan (when ready)', 'Launch 10+ automated workflows', 'Present quarterly board updates'],
  },
];

const fitItems = [
  'Companies with 50–1,000 employees needing AI leadership NOW',
  'Growth-stage startups (Series B/C) where every hire matters',
  "Companies burned by previous AI hires that didn't work out",
  "Organizations where a $300K salary isn't stage-appropriate yet",
];

export default function CAILeadershipPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(111,242,193,0.18) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-secondary bg-secondary/10 border border-secondary/25 px-3.5 py-1.5 rounded-full mb-6">C-Level AI Strategy That Scales</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">Get C-Level AI Leadership Without the $300K Mistake</h1>
            <p className="text-lg text-text-inverse/80 font-medium leading-relaxed mb-4">Get stage-appropriate AI leadership now without committing to a full-time executive hire before the business is ready for it.</p>
            <p className="text-base text-text-inverse/50 leading-relaxed mb-9 max-w-[540px]">For many organizations, hiring a full-time AI executive too early is expensive and risky. Fractional CAIO leadership provides strategy, implementation oversight, executive alignment, and momentum while the company validates what the role should eventually become.</p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Book Your Call</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">View All Services</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
          {[
            { label: 'Time To Start', value: 'As Fast As 2 Weeks' },
            { label: 'Leadership Scope', value: 'Executive + Delivery' },
            { label: 'Goal', value: 'Stage-Appropriate Scale' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
              <div className="text-base font-bold text-text-inverse">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PATTERN */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px] mb-4">The Pattern You&apos;ve Seen Before</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-[560px]">How many times have you made a senior hire that wasn&apos;t stage-appropriate for your business?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {patterns.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-base font-bold text-text-primary mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-warning/8 border-l-4 border-warning rounded-r-2xl p-8 max-w-3xl">
            <p className="text-base text-text-primary leading-relaxed">Now you&apos;re facing the same decision with AI. <strong>Hiring too early, or hiring the wrong leader, is the most expensive HR mistake companies make in the AI era.</strong></p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-base-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug mb-4">The $300K Gamble vs. The Smart Play</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl overflow-hidden">
            <div className="bg-surface-overlay rounded-2xl p-10">
              <h3 className="text-xl font-bold text-text-primary mb-6">Full-Time CAIO</h3>
              <div className="space-y-6">
                {comparisonItems.map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-bold tracking-wider uppercase text-text-tertiary mb-1">{item.label}</div>
                    <div className="text-base text-text-secondary">{item.fullTime}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-10">
              <h3 className="text-xl font-bold text-white mb-6">Fractional CAIO</h3>
              <div className="space-y-6">
                {comparisonItems.map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-bold tracking-wider uppercase text-white/50 mb-1">{item.label}</div>
                    <div className="text-base font-semibold text-white">{item.fractional}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHOICE */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">The Choice Is Simple</h2>
          </div>
          <div className="space-y-4">
            {[
              { letter: 'A', body: "Hire full-time too early → Risk $300K+ and 12 months lost", highlight: false },
              { letter: 'B', body: "Wait until you're \"ready\" → Watch competitors pull ahead", highlight: false },
              { letter: 'C', body: 'Get stage-appropriate leadership NOW → Risk $15K to validate, start in 2 weeks, scale as you grow', highlight: true },
            ].map((opt) => (
              <div key={opt.letter} className={`rounded-2xl p-8 flex items-start gap-6 ${opt.highlight ? 'bg-secondary shadow-lg shadow-secondary/20' : 'bg-white shadow-sm'}`}>
                <span className={`text-4xl font-extrabold shrink-0 ${opt.highlight ? 'text-white' : 'text-text-tertiary'}`}>Option {opt.letter}</span>
                <p className={`text-base leading-relaxed pt-2 ${opt.highlight ? 'text-white font-semibold' : 'text-text-secondary'}`}>{opt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-DAY ROADMAP */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">What You Get</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Your 90-Day Roadmap</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapPhases.map((phase, i) => (
              <div key={phase.phase} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">{phase.phase}</div>
                <div className="text-5xl font-extrabold text-secondary/8 mb-3 leading-none">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-text-primary mb-4">{phase.title}</h3>
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-secondary mt-1 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">Who this is for</h2>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="space-y-4">
              {fitItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-0.5 shrink-0">✓</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Next Steps</span>
              <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">Assess if Fractional CAIO is right for your stage.</h2>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-secondary text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-secondary">Book Your Call</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Back to Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
