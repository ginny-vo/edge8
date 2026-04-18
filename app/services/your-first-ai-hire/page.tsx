import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your First AI Hire | Edge8',
  description:
    'We recruit, train, and support your first AI engineer so they deliver results from Month 1. No guessing. No isolation. No wasted investment.',
};

const problems = [
  {
    num: '01',
    headline: 'They sound brilliant in interviews',
    body: 'They drop buzzwords about LLMs, agents, and automation but can\'t deliver in your environment.',
  },
  {
    num: '02',
    headline: 'They don\'t understand your business',
    body: 'They build cool AI demos and prototypes that don\'t solve your actual problems or generate revenue.',
  },
  {
    num: '03',
    headline: 'They\'re alone on an island',
    body: 'No peers. No mentorship. No one to reality-check their ideas or keep them accountable.',
  },
  {
    num: '04',
    headline: 'They fail quietly for 6–12 months',
    body: 'Then they leave. You\'re back to square one with $150K+ gone and a cautionary tale about "why AI doesn\'t work here".',
  },
];

const whyAlone = [
  {
    num: '01',
    headline: 'You don\'t know what "good" looks like',
    body: 'Hiring for AI requires different signals. Without deep benchmarks, even sharp hiring managers misread what "qualified" means.',
  },
  {
    num: '02',
    headline: 'Your team can\'t mentor in a space they haven\'t mastered',
    body: 'Even top engineers struggle to guide an AI hire when they\'ve never shipped an AI project themselves.',
  },
  {
    num: '03',
    headline: 'Your engineering culture isn\'t built for AI yet',
    body: 'AI projects need different workflows, different tooling, and different thinking. Learning through trial and error burns time and budget.',
  },
  {
    num: '04',
    headline: 'You\'ll learn these lessons the expensive way',
    body: 'We\'ve been recruiting and supporting engineers for decades. We know what works and what fails — and that knowledge is worth more than $5,400.',
  },
];

const solution = [
  { title: 'We Keep Them Accountable', body: 'Standard Agile sprint cycles. Clear deliverables every two weeks. Real projects that move your business forward.' },
  { title: 'We Guarantee Results', body: '60-day replacement guarantee. If it\'s not working, we replace the engineer at no cost. Your success is our success.' },
  { title: 'We Train Them Properly', body: '40-hour intensive AI training plus ongoing AI Officer Certification ($999 value included). They learn to ship results, not just build prototypes.' },
  { title: 'We Support Them Continuously', body: 'Dotted-line management from senior Edge8 engineers. Weekly planning meetings. Access to our engineering community. They\'re never alone.' },
  { title: 'We Find the Right Person', body: 'We recruit and vet candidates who fit your culture and business needs — not just AI buzzwords. You approve our recommendation.' },
];

const process = [
  {
    phase: 'Month 0',
    price: '$0',
    title: 'Free Talent Match',
    body: 'We handle all sourcing and vetting. You approve candidates or request final interviews. Once you say yes, your 3-month program starts.',
    deliverable: 'Duration: 2–4 weeks. Your cost: $0.',
  },
  {
    phase: 'Month 1',
    price: '$1,800',
    title: 'Train + Ship Quick Win',
    body: 'Week 1: Intensive 40-hour AI training + company onboarding. Weeks 2–4: 35 hrs/week on your work, 5 hrs continued training.',
    deliverable: 'Deliverable: Small AI automation shipped by end of Month 1.',
  },
  {
    phase: 'Months 2–3',
    price: '$1,800/mo',
    title: 'Build Real ROI',
    body: 'Your engineer completes full AI Officer Certification while delivering measurable results every two-week sprint.',
    deliverable: 'Deliverable: Real ROI by Month 2. 60-day replacement guarantee.',
  },
];

const fitFor = [
  'Mid-sized companies (300–500 employees) making their first serious AI hire',
  'Non-tech-native businesses: F&B, distribution, logistics, professional services',
  'Leadership teams that know AI matters but can\'t benchmark talent yet',
  'Organizations that want execution, not AI theater',
];

const deliverables = [
  'Vetted first AI hire matched to your culture and goals',
  'Structured onboarding and 40-hour AI training plan',
  'AI Officer Certification (valued at $999)',
  'Quick-win automation shipped in month one',
  '60-day replacement guarantee',
];

const whyEdge8 = [
  { title: 'Recruiting Excellence', body: 'Decades of successful engineering placements across startups to Fortune 500 companies. We know how to spot trainability and potential.' },
  { title: 'AI Expertise', body: '8 years deep in AI implementation. We know what works in production environments, not just theory and hype.' },
  { title: 'Engineering Culture', body: 'We don\'t just place people and disappear. We build support systems that guarantee success through community, mentorship, and accountability.' },
  { title: 'Proven Training Systems', body: 'We\'ve trained thousands of professionals to become AI Officers through our certification program. Now we\'re putting that playbook to work for your company.' },
];

const testimonials = [
  {
    quote: 'I invited Dave to speak at the AI Summit in Sabah and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia.',
    name: 'Dato George Lim',
    title: 'Founder and CEO, G&A GROUP & GA SPACE',
  },
  {
    quote: 'He was able to greatly expand our general knowledge of AI and demystify the challenges of implementation. I highly recommend Edge8.ai as a YPO resource.',
    name: 'John VanNewkirk',
    title: 'YPO Gold Seattle, Forum 6',
  },
  {
    quote: 'Real-world experiences complemented our class discussions perfectly. Extremely knowledgeable and engaging.',
    name: 'Dr. Brooks Holtom',
    title: 'Professor of Management, Georgetown',
  },
  {
    quote: 'With Edge8\'s help we have scaled from single posts to a full content engine while keeping true to our vision and voice.',
    name: 'Dan Absher',
    title: 'CEO, Absher Construction Company',
  },
];

export default function YourFirstAIHirePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.18) 0%, transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none bottom-[-100px] -left-[80px]" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.12) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-warning bg-warning/10 border border-warning/25 px-3.5 py-1.5 rounded-full mb-6">Placement + Training + Support</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">
                Your First AI Hire Will Either Prove AI Works Or Waste a Year Proving It Doesn&apos;t.
              </h1>
              <p className="text-base text-text-inverse/70 leading-relaxed mb-4">
                We recruit, train, and support your first AI engineer so they deliver results from Month 1. No guessing. No isolation. No wasted investment.
              </p>
              <p className="text-sm text-warning font-semibold mb-9">
                We&apos;re placing 100 companies this year. 77 spots remaining.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/#contact" className="inline-flex items-center gap-2 bg-warning text-neutral text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-warning">
                  Start Your Free Consultation
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/images/services/first-ai-hire-hero.jpg"
                  alt="Your First AI Hire"
                  width={600}
                  height={420}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
          {[
            { label: 'Talent Match', value: '2–4 Weeks' },
            { label: 'Program Length', value: '90 Days' },
            { label: 'Guarantee', value: '60-Day Replacement' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
              <div className="text-base font-bold text-text-inverse">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">The Problem</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Here&apos;s what happens when you hire your first AI engineer alone.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.num} className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-warning" />
                <div className="text-5xl font-extrabold text-warning/15 mb-4 leading-none">{p.num}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{p.headline}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-warning/8 border-l-4 border-warning rounded-r-2xl p-8 max-w-3xl">
            <p className="text-base text-text-primary leading-relaxed">
              It&apos;s not just the money. It&apos;s the lost time, the board&apos;s lost confidence, your team&apos;s skepticism, and your competitors pulling further ahead while you&apos;re stuck at zero.{' '}
              <strong>Your first AI hire is a referendum on whether AI can succeed at your company.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* WHY YOU CAN'T DO IT ALONE */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Why It Fails</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Can&apos;t you just hire someone and support them internally?</h2>
            <p className="text-base text-text-secondary leading-relaxed mt-4 max-w-[560px]">Here&apos;s why that doesn&apos;t work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyAlone.map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-xs font-bold tracking-[2px] uppercase text-warning mb-3">{item.num}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{item.headline}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">The Solution</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">We don&apos;t just place an AI engineer. We de-risk your first AI hire.</h2>
            <p className="text-base text-text-secondary leading-relaxed mt-4 max-w-[560px]">Training, support, and accountability built in from day one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-warning" />
                <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-DAY PROCESS */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">90-Day Process</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">From free talent match to proof of ROI.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {process.map((step, i) => (
              <div key={step.phase} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-warning" />
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold tracking-[2px] uppercase text-warning">{step.phase}</div>
                  <div className="text-sm font-bold text-text-primary bg-surface-overlay px-3 py-1 rounded-full">{step.price}</div>
                </div>
                <div className="text-5xl font-extrabold text-warning/12 mb-3 leading-none">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{step.body}</p>
                <p className="text-xs text-text-tertiary italic border-t border-border pt-4">{step.deliverable}</p>
              </div>
            ))}
          </div>

          {/* Real Math */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-overlay rounded-2xl p-10">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-tertiary mb-6">Going alone</div>
              <ul className="space-y-3">
                {[
                  '$150K+ annual salary for someone unproven',
                  'You don\'t know what "good" looks like in AI talent',
                  'They\'re isolated with no support system',
                  '6–12 months of slow failure before you realize it\'s not working',
                  'Board loses confidence. Team becomes skeptical. Competitors pull ahead.',
                ].map((item) => (
                  <li key={item} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                    <span className="text-text-tertiary mt-1 shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-warning rounded-2xl p-10 shadow-lg shadow-warning/20">
              <div className="text-xs font-bold tracking-[2px] uppercase text-neutral/50 mb-3">Your First AI Hire program</div>
              <div className="text-5xl font-extrabold text-neutral mb-2">$5,400</div>
              <p className="text-sm text-neutral/70 leading-relaxed mb-6">Total for the full 90-day program</p>
              <ul className="space-y-3">
                {[
                  'Zero risk of hiring the wrong person',
                  'Zero risk of isolation and failure',
                  'Proof that AI works at your company in 90 days',
                  'A hire who actually delivers, not just talks "AI strategy"',
                  'Foundation to scale your AI program with confidence',
                ].map((item) => (
                  <li key={item} className="text-sm text-neutral font-medium leading-relaxed flex items-start gap-2">
                    <span className="shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + DELIVERABLES */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Best fit</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Who this is for.</h2>
              <div className="space-y-0">
                {fitFor.map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-border last:border-none">
                    <span className="text-warning font-bold shrink-0">✓</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Deliverables</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">What your team walks away with.</h2>
              <div className="space-y-0">
                {deliverables.map((item) => (
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

      {/* WHY EDGE8 */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Why Edge8</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Edge8 isn&apos;t a staffing company. We&apos;re your AI transformation partner.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyEdge8.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">What people say</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">Trusted by leaders across industries.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                <p className="text-sm text-text-secondary leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-sm font-bold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-tertiary">{t.title}</div>
                </div>
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
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Next step</span>
              <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">Your first AI hire should become a case study, not a warning story.</h2>
              <p className="text-sm text-text-inverse/60 leading-relaxed max-w-[460px]">Takes 15 minutes. No pressure, no pitch. Just an honest conversation about whether this is right for your company.</p>
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
