import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CAIO Leadership | Edge8',
  description:
    'Get stage-appropriate AI leadership now without committing to a full-time executive hire before the business is ready for it.',
};

const patterns = [
  {
    num: '01',
    role: 'VP of Sales',
    body: "Great at managing reps — but can't close deals themselves when the team is small and you need someone who can both lead and execute.",
  },
  {
    num: '02',
    role: 'CMO',
    body: "Builds strategy — but can't run a Facebook ad when you need hands-on execution and a small-team mentality.",
  },
  {
    num: '03',
    role: 'CFO',
    body: 'Needs a full team to be effective — when you actually need someone who can build the model in Excel themselves.',
  },
];

export default function CAIOLeadershipPage() {
  return (
    <main className="service-page accent-mint">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy fade-rise">
            <span className="service-eyebrow">C-Level AI Strategy That Scales</span>
            <h1>Get C-Level AI Leadership Without the $300K Mistake</h1>
            <p className="service-summary">
              Get stage-appropriate AI leadership now without committing to a full-time executive hire before the
              business is ready for it.
            </p>
            <p className="service-intro">
              For many organizations, hiring a full-time AI executive too early is expensive and risky. Fractional CAIO
              leadership provides strategy, implementation oversight, executive alignment, and momentum while the
              company validates what the role should eventually become.
            </p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn-mint">
                Book Your Call
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <div className="service-hero-visual fade-rise delay-1">
            <div className="service-image-frame">
              <Image
                src="/images/services/caio-leadership-hero.jpg"
                alt="CAIO Leadership"
                width={960}
                height={720}
              />
            </div>
          </div>
        </div>
        <div className="service-shell service-stats-row fade-rise delay-2">
          <div className="service-stat-card">
            <div className="service-stat-label">Time To Start</div>
            <div className="service-stat-value">As Fast As 2 Weeks</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Leadership Scope</div>
            <div className="service-stat-value">Executive + Delivery</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Goal</div>
            <div className="service-stat-value">Stage-Appropriate Scale</div>
          </div>
        </div>
      </section>

      {/* The Pattern */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>The Pattern You&apos;ve Seen Before</span>
            <h2>How many times have you made a senior hire that wasn&apos;t stage-appropriate?</h2>
          </div>
          <div className="service-proof-grid">
            {patterns.map((p) => (
              <article key={p.num} className="service-proof-card">
                <div className="service-proof-index">{p.num}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'rgb(4, 16, 45)' }}>
                  {p.role}
                </h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <p className="service-intro" style={{ marginTop: '28px' }}>
            Now you&apos;re facing the same decision with AI. Hiring too early, or hiring the wrong leader, is the most
            expensive HR mistake companies make in the AI era.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>The $300K Gamble vs. The Smart Play</span>
            <h2>Two paths to AI leadership. One is a lot cheaper to get wrong.</h2>
          </div>
          <div className="service-vs-grid">
            <div className="service-vs-col">
              <div className="service-vs-label">Full-Time CAIO</div>
              <h3>The Gamble</h3>
              <div className="service-bullet-list">
                <p>$250K – $400K + benefits</p>
                <p>6–12 months to hire</p>
                <p>Wrong hire = $300K wasted</p>
                <p>Must scale up to be effective</p>
              </div>
            </div>
            <div className="service-vs-col featured">
              <div className="service-vs-label">Fractional CAIO</div>
              <h3>The Smart Play</h3>
              <div className="service-bullet-list">
                <p>$5,000/month</p>
                <p>Start in 2 weeks</p>
                <p>$15K to validate the model</p>
                <p>Scales with you as you grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Roadmap */}
      <section className="service-section">
        <div className="service-shell service-process-layout">
          <div className="service-section-heading">
            <span>90-Day Roadmap</span>
            <h2>From intent to operational momentum.</h2>
          </div>
          <div className="service-process-list">
            <article className="service-process-card">
              <div className="service-process-phase">Month 1</div>
              <h3>Foundation and Quick Wins</h3>
              <p>
                Complete the audit, shape the roadmap, deploy an early automation, and prepare leadership-ready
                communication around the initiative.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Months 2–3</div>
              <h3>Build Momentum</h3>
              <p>
                Expand into high-impact workflows, train the team, and stand up governance and measurement practices
                that create real accountability.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Months 4–6</div>
              <h3>Scale and Optimize</h3>
              <p>
                Define a more permanent AI operating model, prepare for future leadership hires, and broaden
                implementation coverage across the organization.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Who It's For + Deliverables */}
      <section className="service-section service-section-alt">
        <div className="service-shell service-fit-layout">
          <div className="service-fit-card">
            <span className="service-mini-label">Best fit</span>
            <h2>Who this is for.</h2>
            <div className="service-bullet-list">
              <p>Companies with 50–1,000 employees that need AI leadership now</p>
              <p>Series B/C startups where every senior hire has to be timed carefully</p>
              <p>Organizations burned by earlier AI experiments or weak ownership</p>
              <p>Teams that want both executive strategy and operational pressure</p>
            </div>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Deliverables</span>
            <h2>What your team walks away with.</h2>
            <div className="service-bullet-list">
              <p>Executive AI roadmap aligned to business goals</p>
              <p>Quick-win automation deployed within 30 days</p>
              <p>Governance and measurement structure</p>
              <p>Future-state hiring and scaling plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-cta-panel">
            <div>
              <span className="service-mini-label">Next step</span>
              <h2>Add the leadership layer before you over-hire.</h2>
              <p>
                Fractional CAIO leadership gives you real ownership and execution pressure while preserving flexibility
                about what the permanent org should look like later.
              </p>
            </div>
            <div className="service-cta-actions">
              <Link href="/#contact" className="btn-mint">
                Book Your Call
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
