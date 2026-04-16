import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Edge8 services spanning AI workshops, staffing, audits, leadership, and training.',
};

export default function ServicesPage() {
  return (
    <main className="services-index-page">
      <section className="services-index-hero">
        <div className="services-index-orb services-index-orb-a" />
        <div className="services-index-orb services-index-orb-b" />
        <div className="service-shell">
          <div className="services-index-copy fade-rise">
            <span className="service-eyebrow">Services</span>
            <h1>AI programs, leadership, and delivery capacity built to move work.</h1>
            <p>
              This local service hub mirrors the live Edge8 offering set, but packages it as a
              cleaner internal experience with stronger visuals, clearer routing, and faster paths
              into each service line.
            </p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn-mint">
                Schedule A Consultation
              </Link>
              <Link href="/" className="btn-outline">
                Return Home
              </Link>
            </div>
          </div>
          <div className="services-index-panel fade-rise delay-1">
            <div className="services-index-panel-grid" />
            <div className="services-index-panel-copy">
              <span>Edge8 Operating Stack</span>
              <strong>Assess. Align. Staff. Train. Scale.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Service lines</span>
            <h2>Six entry points into the same outcome: a more capable AI-powered business.</h2>
          </div>
          <div className="services-index-grid">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`services-index-card accent-${service.accent} fade-rise delay-${(index % 3) + 1}`}
              >
                <div className="services-index-card-top">
                  <span>{service.eyebrow}</span>
                  <h3>{service.navTitle}</h3>
                </div>
                <p>{service.summary}</p>
                <div className="services-index-card-meta">
                  {service.heroStats.map((item) => (
                    <div key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/services/${service.slug}`} className="services-index-link">
                  Explore service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section-alt">
        <div className="service-shell services-mapping-layout">
          <div className="service-section-heading">
            <span>Routing map</span>
            <h2>Internal URLs are mapped to local pages instead of external service destinations.</h2>
          </div>
          <div className="services-mapping-card">
            {services.map((service) => (
              <div key={service.slug} className="services-mapping-row">
                <div>
                  <strong>/services/{service.slug}</strong>
                  <p>{service.navTitle}</p>
                </div>
                <Link href={`/services/${service.slug}`}>Open page</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell services-image-layout">
          <div className="service-section-heading">
            <span>Local assets</span>
            <h2>Downloaded imagery is organized under a dedicated public folder for the service area.</h2>
          </div>
          <div className="services-image-grid">
            {[
              '/images/services/global-staffing-hero.jpg',
              '/images/services/caio-leadership-hero.jpg',
              '/images/services/first-ai-hire-hero.jpg',
              '/images/services/training-hero.jpg',
            ].map((src) => (
              <div key={src} className="services-image-card">
                <Image src={src} alt={src} width={640} height={420} />
                <span>{src.replace('/images/services/', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
