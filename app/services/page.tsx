import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Edge8 services spanning AI workshops, staffing, audits, leadership, and training.',
};

const accentMap = {
  mint: 'text-primary',
  blue: 'text-secondary',
  orange: 'text-warning',
  gold: 'text-warning',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(111,242,193,0.18) 0%, transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none bottom-[-120px] -left-[50px]" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.14) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 animate-fade-in">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-primary bg-surface-inverse/8 border border-surface-inverse/18 px-3.5 py-1.5 rounded-full mb-6">Services</span>
              <h1 className="text-4xl md:text-3xl font-bold text-text-inverse leading-tight tracking-tight mb-5">AI programs, leadership, and delivery capacity built to move work.</h1>
              <p className="text-base text-text-secondary leading-relaxed mb-9 max-w-[480px]">
                This local service hub mirrors the live Edge8 offering set, but packages it as a cleaner internal experience with stronger visuals, clearer routing, and faster paths into each service line.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary">Schedule A Consultation</Link>
                <Link href="/" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-border-strong no-underline transition-all hover:border-text-inverse">Return Home</Link>
              </div>
            </div>
            <div className="relative z-10 animate-fade-in animation-delay-100">
              <div className="relative rounded-xl overflow-hidden bg-surface-inverse/5 border border-border-subtle p-10 min-h-[280px] flex flex-col justify-end">
                <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="relative z-10">
                  <span className="block text-xs font-bold tracking-widest uppercase text-text-tertiary mb-2">Edge8 Operating Stack</span>
                  <strong className="block text-xl font-bold text-text-inverse">Assess. Align. Staff. Train. Scale.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-13">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Service lines</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Six entry points into the same outcome: a more capable AI-powered business.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`bg-white border border-border rounded-xl p-9 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-in animation-delay-${(index % 3) + 1}`}
              >
                <div>
                  <span className={`block text-xs font-bold tracking-[2px] uppercase ${accentMap[service.accent]} mb-2`}>{service.eyebrow}</span>
                  <h3 className="text-lg font-bold text-text-primary leading-snug mb-1">{service.navTitle}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">{service.summary}</p>
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  {service.heroStats.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <strong className="text-sm font-bold text-text-primary">{item.value}</strong>
                      <span className="text-xs text-text-tertiary">{item.label}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/services/${service.slug}`} className={`inline-flex items-center gap-1.5 text-xs font-semibold mt-2 ${accentMap[service.accent]} hover:gap-2.5 transition-all`}>
                  Explore service →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-13">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Routing map</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Internal URLs are mapped to local pages instead of external service destinations.</h2>
          </div>
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            {services.map((service) => (
              <div key={service.slug} className="flex items-center justify-between p-4.5 border-b border-border last:border-none gap-4">
                <div>
                  <strong className="text-sm font-semibold text-text-primary">/services/{service.slug}</strong>
                  <p className="text-xs text-text-tertiary mt-0.5">{service.navTitle}</p>
                </div>
                <Link href={`/services/${service.slug}`} className="text-xs font-semibold text-secondary whitespace-nowrap hover:text-secondary-400 transition-colors">Open page</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-13">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-secondary mb-3">Local assets</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Downloaded imagery is organized under a dedicated public folder for the service area.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              '/images/services/global-staffing-hero.jpg',
              '/images/services/caio-leadership-hero.jpg',
              '/images/services/first-ai-hire-hero.jpg',
              '/images/services/training-hero.jpg',
            ].map((src) => (
              <div key={src} className="rounded-xl overflow-hidden border border-border">
                <Image src={src} alt={src} width={640} height={420} className="w-full aspect-[16/10] object-cover" />
                <span className="block px-3.5 py-2.5 text-xs text-text-tertiary bg-base-100">{src.replace('/images/services/', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
