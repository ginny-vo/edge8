import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI in Business Workshop | Edge8',
  description: 'Align leadership, create common language around AI, and leave with practical next steps your team can execute immediately.',
};

const workshopFeatures = [
  {
    num: '01',
    title: 'Executive-friendly framing',
    body: 'Makes AI adoption less abstract and more actionable for leadership teams.',
  },
  {
    num: '02',
    title: 'Live real-world examples',
    body: 'Pulled from sales, recruiting, operations, and content workflows your team can relate to.',
  },
  {
    num: '03',
    title: 'Built for action',
    body: 'Converts curiosity into a concrete internal roadmap, not just another presentation.',
  },
];

const outcomes = [
  {
    title: 'Leadership alignment',
    body: 'Create a shared vocabulary for AI, clarify what success looks like, and reduce the usual noise around disconnected tools.',
  },
  {
    title: 'Use-case prioritization',
    body: 'Identify where AI can create measurable leverage first, instead of spreading effort across too many experiments.',
  },
  {
    title: 'Actionable next steps',
    body: 'Leave with a short-list of workflows, owners, and implementation priorities the team can act on immediately.',
  },
];

const processSteps = [
  {
    phase: 'Step 1',
    title: 'Context intake',
    body: 'We review team goals, maturity, and pressure points so the workshop content fits the organization instead of staying generic.',
  },
  {
    phase: 'Step 2',
    title: 'Live workshop',
    body: 'We facilitate an interactive session covering AI fundamentals, implementation examples, and high-value use cases tailored to the room.',
  },
  {
    phase: 'Step 3',
    title: 'Post-session roadmap',
    body: 'You receive a practical recommendation set for the next 30 to 90 days, including where to start and how to sequence the work.',
  },
];

export default function AIInBusinessWorkshopPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.18) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-warning bg-warning/10 border border-warning/25 px-3.5 py-1.5 rounded-full mb-6">Interactive Executive Enablement</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">AI in Business Workshop</h1>
            <p className="text-lg text-text-inverse/80 font-medium leading-relaxed mb-4">Align leadership, create common language around AI, and leave with practical next steps your team can execute immediately.</p>
            <p className="text-base text-text-inverse/50 leading-relaxed mb-9 max-w-[540px]">This workshop is designed for leadership teams that need substance, not hype. We combine live strategy framing, real case studies, and hands-on working sessions so teams understand where AI fits, where it does not, and what to do next.</p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-warning text-neutral text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-warning">Schedule A Consultation</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">View All Services</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
          {[
            { label: 'Session Format', value: 'Private or public' },
            { label: 'Typical Audience', value: 'Leaders + operators' },
            { label: 'Outcome', value: '90-day action plan' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
              <div className="text-base font-bold text-text-inverse">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Why it matters</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">What this workshop is built to solve.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshopFeatures.map((feature) => (
              <div key={feature.num} className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-warning" />
                <div className="text-5xl font-extrabold text-warning/15 mb-4 leading-none">{feature.num}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Outcomes</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">What you get when the workshop is working.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{outcome.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{outcome.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Process</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">How the engagement moves from intent to implementation.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.phase} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-warning" />
                <div className="text-xs font-bold tracking-[2px] uppercase text-warning mb-3">{step.phase}</div>
                <div className="text-5xl font-extrabold text-warning/10 mb-3 leading-none">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST FIT + DELIVERABLES */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Best fit</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Who this service is for.</h2>
              <div className="space-y-0">
                {[
                  'Leadership teams exploring AI adoption for the first time',
                  'Organizations that need alignment before building systems',
                  'Executives who want practical education rather than technical theater',
                  'Teams preparing for a broader AI program or training rollout',
                ].map((item) => (
                  <p key={item} className="text-sm text-text-secondary leading-relaxed py-3 border-b border-border last:border-none">{item}</p>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Deliverables</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">What your team walks away with.</h2>
              <div className="space-y-0">
                {[
                  'Tailored workshop agenda',
                  'Use-case prioritization framework',
                  'Implementation recommendations',
                  'Follow-up summary for internal stakeholders',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-border last:border-none">
                    <span className="text-warning font-bold shrink-0">✓</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Next step</span>
              <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">Get your team aligned before you invest deeper.</h2>
              <p className="text-sm text-text-inverse/60 leading-relaxed max-w-[460px]">Use the workshop to establish common ground, identify fast wins, and create a stronger starting point for the rest of your AI program.</p>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-warning text-neutral text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-warning">Start the Conversation</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Back to Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
