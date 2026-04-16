import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Capabilities Audit | Edge8',
  description:
    'Assess how prepared your organization is for AI adoption, then turn the findings into a practical roadmap for the next 12 months.',
};

const pricingTiers = [
  {
    tier: 'Foundation',
    amount: '$4,999',
    desc: 'Ideal for teams beginning their AI journey. Discovery interviews, maturity assessment, and a prioritized opportunity list.',
    highlighted: false,
  },
  {
    tier: 'Standard',
    amount: '$9,999',
    desc: 'Full assessment plus a 12-month AI roadmap, workflow documentation, and a structured rollout plan for your leadership team.',
    highlighted: true,
  },
  {
    tier: 'Peak',
    amount: '$24,999',
    desc: 'Comprehensive audit followed by initial build and deploy support — from strategy to first live automations.',
    highlighted: false,
  },
];

const testimonials = [
  {
    quote: 'I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage.',
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
    quote: 'The brand interview really made me think about our positioning in ways I never expected.',
    name: 'Dao Nguyen',
    title: 'Founder, DN Legal',
  },
  {
    quote: 'The speed, the quality, and the care were all top-notch. Everything is just amazing.',
    name: 'Tuan Anh Le',
    title: 'Managing Partner, DN Legal',
  },
  {
    quote: 'Dave and the team showed us how to leverage AI to streamline our processes.',
    name: 'Dan Absher',
    title: 'CEO, Absher Construction Company',
  },
];

export default function AICapabilitiesAuditPage() {
  return (
    <main className="service-page accent-blue">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy fade-rise">
            <span className="service-eyebrow">Readiness + Roadmap</span>
            <h1>Turn Your AI Experiments Into ROI-Driving Systems</h1>
            <p className="service-summary">
              According to MIT, 95% of companies see zero return on their AI investments. We help you become the
              exception.
            </p>
            <p className="service-intro">
              The audit is for teams that want clarity before they invest deeper. We evaluate current maturity, capture
              workflow opportunities, and turn the findings into a prioritised rollout plan instead of a vague
              innovation deck.
            </p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn-mint">
                Get Your Audit
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <div className="service-hero-visual fade-rise delay-1">
            <div className="service-image-frame">
              <Image
                src="/images/services/audit-growth-stage.jpg"
                alt="AI Capabilities Audit"
                width={960}
                height={720}
              />
            </div>
          </div>
        </div>
        <div className="service-shell service-stats-row fade-rise delay-2">
          <div className="service-stat-card">
            <div className="service-stat-label">Focus</div>
            <div className="service-stat-value">Readiness + Opportunities</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Output</div>
            <div className="service-stat-value">12-Month Roadmap</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Use Case</div>
            <div className="service-stat-value">Leadership Planning</div>
          </div>
        </div>
      </section>

      {/* Stat Banner */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-highlight-banner">
            <div className="stat-num">95%</div>
            <p className="stat-label">
              of companies see zero return on their AI investments, according to MIT. Most are spending without a clear
              picture of readiness, priorities, or sequence. The audit changes that.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-section service-section-alt">
        <div className="service-shell service-process-layout">
          <div className="service-section-heading">
            <span>Process</span>
            <h2>Three levels from diagnosis to delivery.</h2>
          </div>
          <div className="service-process-list">
            <article className="service-process-card">
              <div className="service-process-phase">Level 1</div>
              <h3>Discovery &amp; Assessment</h3>
              <p>
                Stakeholder interviews, surveys, and process mapping to understand your readiness, alignment, and
                current usage patterns across the organization.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Level 2</div>
              <h3>Design &amp; Documentation</h3>
              <p>
                AI Maturity Scorecard, 12-month opportunity plan, and workflow documentation — your findings translated
                into a structured, actionable format.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Level 3</div>
              <h3>Build &amp; Deploy</h3>
              <p>
                System development, workflow automation, and team training — where needed, the audit feeds directly
                into implementation and enablement.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Investment</span>
            <h2>Three tiers based on depth and scope.</h2>
          </div>
          <div className="service-pricing-grid">
            {pricingTiers.map((tier) => (
              <div key={tier.tier} className={`service-pricing-card${tier.highlighted ? ' highlighted' : ''}`}>
                <div className="service-pricing-tier">{tier.tier}</div>
                <div className="service-pricing-amount">{tier.amount}</div>
                <p className="service-pricing-desc">{tier.desc}</p>
                <Link
                  href="/#contact"
                  className={tier.highlighted ? 'btn-mint' : 'btn-outline'}
                  style={{ textAlign: 'center', marginTop: 'auto' }}
                >
                  Get Started
                </Link>
              </div>
            ))}
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
              <p>Teams that need a baseline before making bigger AI investments</p>
              <p>Organizations struggling with scattered AI experiments</p>
              <p>Leaders who want a board-friendly roadmap and prioritization logic</p>
              <p>Companies preparing for broader AI implementation or staffing decisions</p>
            </div>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Deliverables</span>
            <h2>What your team walks away with.</h2>
            <div className="service-bullet-list">
              <p>AI maturity assessment and scoring</p>
              <p>Opportunity prioritization framework</p>
              <p>12-month implementation roadmap</p>
              <p>Documentation ready for board and leadership review</p>
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
              <h2>Start with a sharper diagnosis.</h2>
              <p>
                The audit helps you understand where you stand, where value is likely to emerge first, and what
                sequence will make the rest of the program easier.
              </p>
            </div>
            <div className="service-cta-actions">
              <Link href="/#contact" className="btn-mint">
                Get Your Audit
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
