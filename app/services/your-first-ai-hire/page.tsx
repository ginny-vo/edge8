import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your First AI Hire | Edge8',
  description:
    'We recruit, train, and support your first AI engineer so they ship results from month one instead of failing alone in a vacuum.',
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

const solution = [
  'Accountability through Agile sprints with bi-weekly deliverables',
  '60-day replacement guarantee',
  '40-hour AI training + AI Officer Certification ($999 value, included)',
  'Continuous support via our senior engineers throughout the engagement',
  'Recruiting focused on culture fit, not just technical keywords',
];

const testimonials = [
  {
    quote: 'We are looking forward to collaborating with the AI Officer Institute.',
    name: 'Dato George Lim',
    title: 'Founder and CEO, G&A GROUP & GA SPACE',
  },
  {
    quote: 'He was able to greatly expand our general knowledge of AI and demystify challenges.',
    name: 'John VanNewkirk',
    title: 'YPO Gold Seattle, Forum 6',
  },
  {
    quote: 'Real-world experiences complemented our class discussions perfectly.',
    name: 'Dr. Brooks Holtom',
    title: 'Professor of Management, Georgetown',
  },
  {
    quote: 'With Edge8\'s help we have scaled from single posts to a full content engine.',
    name: 'Dan Absher',
    title: 'CEO, Absher Construction Company',
  },
];

export default function YourFirstAIHirePage() {
  return (
    <main className="service-page accent-orange">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy fade-rise">
            <span className="service-eyebrow">Placement + Training + Support</span>
            <h1>Your First AI Hire Will Either Prove AI Works Or Waste a Year Proving It Doesn&apos;t.</h1>
            <p className="service-summary">
              We recruit, train, and support your first AI engineer so they ship results from month one instead of
              failing alone in a vacuum.
            </p>
            <p className="service-intro">
              Most first AI hires fail for predictable reasons: companies cannot evaluate talent well, the hire lacks
              business context, and there is no support system once they start. This offer is built to de-risk the first
              hire with training, accountability, and continuous guidance.
            </p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn-mint">
                Start Your Free AI Consultation
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <div className="service-hero-visual fade-rise delay-1">
            <div className="service-image-frame">
              <Image
                src="/images/services/first-ai-hire-hero.jpg"
                alt="Your First AI Hire"
                width={960}
                height={720}
              />
            </div>
          </div>
        </div>
        <div className="service-shell service-stats-row fade-rise delay-2">
          <div className="service-stat-card">
            <div className="service-stat-label">Talent Match</div>
            <div className="service-stat-value">2–4 Weeks</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Program Length</div>
            <div className="service-stat-value">90 Days</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Guarantee</div>
            <div className="service-stat-value">60-Day Replacement</div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>The Problem</span>
            <h2>Why most first AI hires fail.</h2>
          </div>
          <div className="service-proof-grid">
            {problems.map((p) => (
              <article key={p.num} className="service-proof-card">
                <div className="service-proof-index">{p.num}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'rgb(4, 16, 45)' }}>
                  {p.headline}
                </h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>The Solution</span>
            <h2>What&apos;s included in Your First AI Hire.</h2>
          </div>
          <div className="service-fit-card" style={{ maxWidth: '720px' }}>
            <div className="service-bullet-list">
              {solution.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Process */}
      <section className="service-section">
        <div className="service-shell service-process-layout">
          <div className="service-section-heading">
            <span>90-Day Process</span>
            <h2>From free talent match to proof of ROI.</h2>
          </div>
          <div className="service-process-list">
            <article className="service-process-card">
              <div className="service-process-phase">Month 0 — $0</div>
              <h3>Free Talent Match</h3>
              <p>
                We source and vet candidates, present recommended hires, and only start the paid engagement after you
                approve the match. Timeline: 2–4 weeks.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Month 1 — $1,800</div>
              <h3>Train and Ship</h3>
              <p>
                Your new hire completes intensive AI training while onboarding into your environment and delivering a
                first practical automation.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Months 2–3 — $1,800/mo</div>
              <h3>Build Real ROI</h3>
              <p>
                We maintain planning cadence, accountability, and certification support so the hire starts generating
                repeatable business value.
              </p>
            </article>
          </div>
          <div className="service-highlight-banner">
            <div className="stat-num">$5,400</div>
            <p className="stat-label">
              Total investment for the full 90-day program — versus $150K+ in annual salary for an unproven hire who
              may fail quietly for months before anyone notices.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>What people say</span>
            <h2>Trusted by leaders across industries.</h2>
          </div>
          <div className="testimonials-row">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p className="quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="name">{t.name}</div>
                  <div className="title">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For + Deliverables */}
      <section className="service-section">
        <div className="service-shell service-fit-layout">
          <div className="service-fit-card">
            <span className="service-mini-label">Best fit</span>
            <h2>Who this is for.</h2>
            <div className="service-bullet-list">
              <p>Mid-sized companies (300–500 employees) making their first serious AI hire</p>
              <p>Leadership teams that know AI matters but cannot benchmark talent yet</p>
              <p>Non-tech-native businesses in F&amp;B, distribution, logistics, and professional services</p>
              <p>Organizations that want execution, not AI theater</p>
            </div>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Deliverables</span>
            <h2>What your team walks away with.</h2>
            <div className="service-bullet-list">
              <p>Vetted first AI hire matched to your culture and goals</p>
              <p>Structured onboarding and 40-hour AI training plan</p>
              <p>AI Officer Certification (valued at $999)</p>
              <p>Quick-win automation shipped in month one</p>
              <p>60-day replacement guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-cta-panel">
            <div>
              <span className="service-mini-label">Next step</span>
              <h2>Your first AI hire should become a case study, not a warning story.</h2>
              <p>
                Use this model to validate AI at your company quickly and build a foundation for future hiring with far
                less risk.
              </p>
            </div>
            <div className="service-cta-actions">
              <Link href="/#contact" className="btn-mint">
                Start the Conversation
              </Link>
              <Link href="/services" className="btn-outline">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
