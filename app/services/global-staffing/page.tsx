import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Staffing | Edge8',
  description:
    "Find, train, and scale with AI-empowered professionals who integrate into your workflows and extend your team's operating capacity.",
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
  },
  {
    title: 'Marketing Professionals',
    subtitle: 'AI-trained marketers for the next era',
    bullets: [
      'Execute multi-channel digital campaigns powered by AI',
      'Automate reporting and analytics for clear ROI',
      'Build and manage content engines using AI tools',
      'Enhance personalization and audience engagement',
    ],
  },
];

const testimonials = [
  {
    quote:
      "Working with Edge8 has been a pleasure. Dave and the team not only helped with the branding and digital presence but also showed us how to leverage AI to streamline our processes. With the help of Edge8, we have scaled from single posts to a full content engine while keeping true to our vision and voice. I am thrilled with the help they have provided.",
    name: 'Henry Albrecht',
    title: 'Founder & Former CEO, Limeade',
  },
  {
    quote:
      "Working with Edge8 has been a pleasure. When I launched Fab Four Academy, I needed support to build a strong brand and digital presence. Dave and the team stepped in and showed us how to leverage AI to streamline our processes. We scaled from single posts to a full content engine while keeping true to our vision and voice.",
    name: 'David Niu',
    title: 'Co-Founder & CEO, TINYpulse',
  },
];

export default function GlobalStaffingPage() {
  return (
    <main className="service-page accent-blue">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy fade-rise">
            <span className="service-eyebrow">AI-Empowered Teams From Vietnam</span>
            <h1>Let&apos;s Build Your AI-Ready Team.</h1>
            <p className="service-summary">
              Hiring AI-skilled talent is tough. Costs are high, skills are scarce, and growth slows. Edge8 makes it
              easy.
            </p>
            <p className="service-intro">
              Global staffing is not just about lower-cost labor. The right model gives you capable operators, analysts,
              and builders who can work with AI-native systems and accelerate delivery without introducing chaos into
              your process.
            </p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn-mint">
                Book a 30-Minute Call
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <div className="service-hero-visual fade-rise delay-1">
            <div className="service-image-frame">
              <Image
                src="/images/services/global-staffing-hero.jpg"
                alt="Global Staffing"
                width={960}
                height={720}
              />
            </div>
          </div>
        </div>
        <div className="service-shell service-stats-row fade-rise delay-2">
          <div className="service-stat-card">
            <div className="service-stat-label">Cost Savings</div>
            <div className="service-stat-value">Up to 75%</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Talent Market</div>
            <div className="service-stat-value">Vietnam</div>
          </div>
          <div className="service-stat-card">
            <div className="service-stat-label">Engagement Models</div>
            <div className="service-stat-value">Contract · Full-Time · Fractional</div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Roles</span>
            <h2>Three types of AI-empowered talent.</h2>
          </div>
          <div className="service-roles-grid">
            {roles.map((role) => (
              <article key={role.title} className="service-role-card">
                <div>
                  <div className="role-subtitle">{role.subtitle}</div>
                  <h3>{role.title}</h3>
                </div>
                <div className="service-bullet-list">
                  {role.bullets.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>What people say</span>
            <h2>Trusted by founders and executives.</h2>
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

      {/* Process */}
      <section className="service-section">
        <div className="service-shell service-process-layout">
          <div className="service-section-heading">
            <span>Process</span>
            <h2>How the engagement moves from need to embedded team.</h2>
          </div>
          <div className="service-process-list">
            <article className="service-process-card">
              <div className="service-process-phase">Step 1</div>
              <h3>Role Definition</h3>
              <p>
                We define the right blend of skills, ownership, and communication cadence for the work you actually
                need to move.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Step 2</div>
              <h3>Matching and Vetting</h3>
              <p>
                Candidates are filtered for capability, fit, and AI fluency so they can work inside modern,
                tool-assisted workflows from day one.
              </p>
            </article>
            <article className="service-process-card">
              <div className="service-process-phase">Step 3</div>
              <h3>Embed and Scale</h3>
              <p>
                We help your new team members integrate into your operating rhythm and expand the model as you gain
                confidence and capacity.
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
              <p>Companies that need more delivery capacity without bloating local headcount</p>
              <p>Teams building AI-powered workflows and operations</p>
              <p>Organizations that want a tighter model than traditional outsourcing</p>
              <p>Leaders looking for execution support across build and operations roles</p>
            </div>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Deliverables</span>
            <h2>What your team walks away with.</h2>
            <div className="service-bullet-list">
              <p>Role design and staffing plan</p>
              <p>Vetted candidate shortlist matched to your needs</p>
              <p>Embedded onboarding support</p>
              <p>Scale-up path for future roles</p>
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
              <h2>Build a stronger execution bench.</h2>
              <p>
                Use AI-empowered global talent to increase throughput, support implementation work, and create a more
                durable operating team.
              </p>
            </div>
            <div className="service-cta-actions">
              <Link href="/#contact" className="btn-mint">
                Book a Meeting
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
