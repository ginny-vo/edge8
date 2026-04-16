import Image from 'next/image';
import Link from 'next/link';
import type { ServiceData } from '@/data/services';

type Props = {
  service: ServiceData;
};

export default function ServiceDetailPage({ service }: Props) {
  return (
    <main className={`service-page accent-${service.accent}`}>
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy fade-rise">
            <span className="service-eyebrow">{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p className="service-summary">{service.summary}</p>
            <p className="service-intro">{service.intro}</p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn-mint">
                Schedule A Consultation
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <div className="service-hero-visual fade-rise delay-1">
            {service.image ? (
              <div className="service-image-frame">
                <Image src={service.image} alt={service.navTitle} width={960} height={720} />
              </div>
            ) : (
              <div className="service-graphic-card">
                <div className="service-graphic-grid" />
                <div className="service-graphic-ring" />
                <div className="service-graphic-copy">
                  <span>Live Session</span>
                  <strong>Strategy + tools + execution</strong>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="service-shell service-stats-row fade-rise delay-2">
          {service.heroStats.map((item) => (
            <div key={item.label} className="service-stat-card">
              <div className="service-stat-label">{item.label}</div>
              <div className="service-stat-value">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Why it matters</span>
            <h2>What this service is built to solve.</h2>
          </div>
          <div className="service-proof-grid">
            {service.proofPoints.map((point, index) => (
              <article key={point} className="service-proof-card">
                <div className="service-proof-index">0{index + 1}</div>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section-alt">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Outcomes</span>
            <h2>What you get when the engagement is working.</h2>
          </div>
          <div className="service-outcome-grid">
            {service.outcomes.map((outcome) => (
              <article key={outcome.title} className="service-outcome-card">
                <h3>{outcome.title}</h3>
                <p>{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell service-process-layout">
          <div className="service-section-heading">
            <span>Process</span>
            <h2>How the engagement moves from intent to implementation.</h2>
          </div>
          <div className="service-process-list">
            {service.process.map((step) => (
              <article key={step.title} className="service-process-card">
                <div className="service-process-phase">{step.phase}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section-alt">
        <div className="service-shell service-fit-layout">
          <div className="service-fit-card">
            <span className="service-mini-label">Best fit</span>
            <h2>Who this service is for.</h2>
            <div className="service-bullet-list">
              {service.fit.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="service-fit-card">
            <span className="service-mini-label">Deliverables</span>
            <h2>What your team walks away with.</h2>
            <div className="service-bullet-list">
              {service.deliverables.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell">
          <div className="service-cta-panel">
            <div>
              <span className="service-mini-label">Next step</span>
              <h2>{service.ctaTitle}</h2>
              <p>{service.ctaBody}</p>
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
