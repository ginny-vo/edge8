import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Officer Training & Certification | Edge8',
  description:
    'Turn your managers into certified AI Officers who can lead automation, drive ROI, and future-proof your business.',
};

const benefits = [
  'Accelerate ROI from your AI initiatives',
  'Develop in-house capability instead of outsourcing',
  'Build a common language of AI across teams',
  'Future-proof your organization\'s talent',
];

const series = [
  {
    num: '01',
    title: 'Generative',
    bullets: [
      'Grasp Generative AI, prompts, images, and video',
      'Identify high-value use cases',
      'Apply data-readiness principles',
    ],
  },
  {
    num: '02',
    title: 'Agentic',
    bullets: [
      'Understand intelligent agent architecture',
      'Design fully automated workflows end-to-end',
      'Vibe Code & Build AI Agents hands-on',
    ],
  },
  {
    num: '03',
    title: 'Business',
    bullets: [
      'Turn AI potential into measurable results',
      'Create responsible, AI-driven roadmaps',
      'Lead AI programs that drive ROI',
    ],
  },
];

export default function TrainingAndCertificationPage() {
  return (
    <main className="service-page accent-gold">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy fade-rise">
            <span className="service-eyebrow">AI Literacy For Teams And Operators</span>
            <h1>Build AI Leadership Across Your Organization</h1>
            <p className="service-summary">
              Turn your managers into certified AI Officers who can lead automation, drive ROI, and future-proof your
              business.
            </p>
            <div className="service-hero-actions">
              <a
                href="https://www.ai-officer.com/ai-training-business"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-mint"
              >
                Explore AI Officer Certification Program
              </a>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <div className="service-hero-visual fade-rise delay-1">
            <div className="service-image-frame">
              <Image
                src="/images/services/training-hero.jpg"
                alt="AI Officer Training & Certification"
                width={960}
                height={720}
              />
            </div>
          </div>
        </div>
        <div className="service-shell service-stats-row fade-rise delay-2">
          <div className="service-stat-card">
            <div className="service-stat-label">Duration</div>
            <div className="service-stat-value">12 Months</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Format</div>
            <div className="service-stat-value">100% Online</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Time Commitment</div>
            <div className="service-stat-value">&lt;3 Hours/Week</div>
          </div>
        </div>
      </section>

      {/* Problem + Benefits */}
      <section className="service-section">
        <div className="service-shell service-fit-layout">
          <div className="service-fit-card">
            <h2>
              Most leaders say,{' '}
              <em style={{ color: 'var(--accent, rgb(198, 142, 38))' }}>
                &ldquo;I know I need AI&hellip; but I don&apos;t know where to start.&rdquo;
              </em>
            </h2>
            <p style={{ marginTop: '16px', fontSize: '15px', lineHeight: 1.75, color: 'var(--service-copy)' }}>
              The AI Officer Certification Program turns that uncertainty into capability. In{' '}
              <strong>less than 3 hours per week</strong>, your team will learn how to structure, lead, and scale AI
              programs that create <strong>measurable business results</strong>.
            </p>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Key benefits</span>
            <h2>What your team gains.</h2>
            <div className="service-bullet-list">
              {benefits.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* One-Year Roadmap */}
      <section className="service-section service-section-alt">
        <div className="service-shell service-fit-layout">
          <div className="service-fit-card">
            <span className="service-mini-label">Structure</span>
            <h2>The One-Year Roadmap to AI Leadership</h2>
            <div className="service-bullet-list" style={{ marginTop: '20px' }}>
              <p>
                <strong>Duration:</strong> 12 months (self-paced or guided)
              </p>
              <p>
                <strong>Format:</strong> 100% online | Weekly instructor-led sessions | 24/7 asynchronous access
              </p>
              <p>
                <strong>Time Commitment:</strong> Less than 3 hours per week
              </p>
              <p>
                <strong>Ideal Participants:</strong> Professionals across business functions who need to drive
                measurable AI ROI
              </p>
            </div>
          </div>
          <div className="service-hero-visual">
            <div className="service-image-frame" style={{ minHeight: '320px' }}>
              <Image
                src="/images/services/training-hero.jpg"
                alt="Team collaborating on AI strategy"
                width={960}
                height={720}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Series */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Program Series</span>
            <h2>Three series. One complete AI leadership foundation.</h2>
          </div>
          <p className="service-intro" style={{ marginBottom: '28px' }}>
            Your team can join a class or move at their own pace to complete three Four-Week Programs and establish a
            common foundation of AI fluency.
          </p>
          <div className="service-proof-grid">
            {series.map((s) => (
              <article key={s.title} className="service-proof-card">
                <div className="service-proof-index">{s.num}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'rgb(4, 16, 45)' }}>
                  Series {s.num}: {s.title}
                </h3>
                <div className="service-bullet-list">
                  {s.bullets.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="service-section service-section-alt">
        <div className="service-shell service-fit-layout">
          <div className="service-fit-card">
            <span className="service-mini-label">Demonstrate Capabilities</span>
            <h2>Structured learning at scale.</h2>
            <div className="service-bullet-list">
              <p>Framework library for real-world application</p>
              <p>12 immersive workshops with applied challenges</p>
              <p>Weekly instructor-led sessions</p>
              <p>24/7 on-demand access to all materials</p>
            </div>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Continuous Learning</span>
            <h2>Support beyond the curriculum.</h2>
            <div className="service-bullet-list">
              <p>Weekly micro-sessions to reinforce key skills</p>
              <p>Peer learning community for applied problem-solving</p>
              <p>Office hours coaching from practitioners</p>
              <p>Monthly coding sessions for hands-on AI building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Track Record</span>
            <h2>Built by practitioners, not theorists.</h2>
          </div>
          <div className="service-proof-grid">
            <article className="service-proof-card">
              <div className="service-proof-index">8+</div>
              <p>Years of deep AI production experience across real business environments.</p>
            </article>
            <article className="service-proof-card">
              <div className="service-proof-index">1K+</div>
              <p>Professionals trained through the certification program across industries and regions.</p>
            </article>
            <article className="service-proof-card">
              <div className="service-proof-index">2025</div>
              <p>Active launches with F&amp;B, distribution, and logistics companies across Southeast Asia.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-process-card" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="service-process-phase">About the Instructor</div>
            <h3>Dave Hajdu</h3>
            <p>
              Founder of Edge8 AI &amp; AI Officer Institute. Co-founder of TINYpulse (acquired by WebMD). Microsoft
              alum and EO Leader for 500+ SEA businesses. Dave leads the AI Officer Certification and helps
              organizations worldwide move from AI awareness to implementation success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-cta-panel">
            <div>
              <span className="service-mini-label">Next step</span>
              <h2>Start your AI training journey.</h2>
              <p>
                Train the team that has to operate the system. Better literacy produces better judgment, better
                adoption, and stronger results across every other AI investment you make.
              </p>
            </div>
            <div className="service-cta-actions">
              <a
                href="https://www.ai-officer.com/ai-training-business"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-mint"
              >
                Start Your AI Training Journey
              </a>
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
