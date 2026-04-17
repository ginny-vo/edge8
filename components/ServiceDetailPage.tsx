import Image from 'next/image';
import Link from 'next/link';
import type { ServiceData } from '@/data/services';

type Props = {
  service: ServiceData;
};

const accentMap = {
  mint: { accent: 'text-primary', bg: 'bg-primary', border: 'border-primary', ring: 'ring-primary' },
  blue: { accent: 'text-secondary', bg: 'bg-secondary', border: 'border-secondary', ring: 'ring-secondary' },
  orange: { accent: 'text-warning', bg: 'bg-warning', border: 'border-warning', ring: 'ring-warning' },
  gold: { accent: 'text-warning', bg: 'bg-warning', border: 'border-warning', ring: 'ring-warning' },
};

export default function ServiceDetailPage({ service }: Props) {
  const accent = accentMap[service.accent] || accentMap.blue;

  return (
    <main>
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[560px] h-[560px] rounded-full pointer-events-none -top-[180px] -right-[60px]" style={{ background: `radial-gradient(circle, ${service.accent === 'mint' ? 'rgba(111,242,193,0.18)' : service.accent === 'blue' ? 'rgba(40,123,232,0.15)' : 'rgba(249,115,22,0.15)'} 0%, transparent 70%)` }} />
        <div className="absolute w-[380px] h-[380px] rounded-full pointer-events-none bottom-[-80px] left-[-20px]" style={{ background: 'radial-gradient(circle, rgba(40,123,232,0.15) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 animate-fade-in">
              <span className={`inline-block text-xs font-bold tracking-[3px] uppercase ${accent.accent} bg-surface-inverse/8 border border-surface-inverse/18 px-3.5 py-1.5 rounded-full mb-6`}>{service.eyebrow}</span>
              <h1 className="text-4xl md:text-3xl font-bold text-text-inverse leading-tight tracking-tight mb-5">{service.title}</h1>
              <p className="text-lg text-text-secondary font-medium leading-relaxed mb-4">{service.summary}</p>
              <p className="text-base text-text-tertiary leading-relaxed mb-9 max-w-[540px]">{service.intro}</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary">Schedule A Consultation</Link>
                <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-border-strong no-underline transition-all hover:border-text-inverse">View All Services</Link>
              </div>
            </div>
            <div className="relative z-10 animate-fade-in animation-delay-100">
              {service.image ? (
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image src={service.image} alt={service.navTitle} width={960} height={720} className="w-full h-auto aspect-[4/3] object-cover" />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden bg-surface-inverse/5 border border-border-subtle p-10 h-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                  <div className="relative z-10 text-center">
                    <span className="block text-xs font-bold tracking-widest uppercase text-text-tertiary mb-2">Live Session</span>
                    <strong className="block text-xl font-bold text-text-inverse">Strategy + tools + execution</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-border-subtle">
          {service.heroStats.map((item) => (
            <div key={item.label} className="p-6 border-r border-border-subtle last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-tertiary mb-1.5">{item.label}</div>
              <div className="text-base font-bold text-text-inverse">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-13">
            <span className={`block text-xs font-bold tracking-[2.5px] uppercase ${accent.accent} mb-3`}>Why it matters</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">What this service is built to solve.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.proofPoints.map((point, index) => (
              <article key={point} className="bg-base-100 border border-border rounded-xl p-8 transition-all hover:-translate-y-1">
                <div className={`text-[52px] font-extrabold tracking-tight leading-none mb-4 ${accent.accent} opacity-30`}>0{index + 1}</div>
                <p className="text-base font-bold text-text-primary mb-2.5 leading-snug">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-13">
            <span className={`block text-xs font-bold tracking-[2.5px] uppercase ${accent.accent} mb-3`}>Outcomes</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">What you get when the engagement is working.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.outcomes.map((outcome) => (
              <article key={outcome.title} className="bg-white border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold text-text-primary mb-2.5 leading-snug">{outcome.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-13">
            <span className={`block text-xs font-bold tracking-[2.5px] uppercase ${accent.accent} mb-3`}>Process</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">How the engagement moves from intent to implementation.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {service.process.map((step) => (
              <article key={step.title} className="bg-white border border-border border-t-4 rounded-b-xl p-8" style={{ borderTopColor: service.accent === 'mint' ? '#6FF2C1' : service.accent === 'blue' ? '#287BE8' : service.accent === 'orange' ? '#f97316' : '#eab308' }}>
                <div className={`text-xs font-bold tracking-[2px] uppercase ${accent.accent} mb-3`}>{step.phase}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2.5 leading-snug">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-base-100 border border-border rounded-xl p-10">
              <span className={`block text-xs font-bold tracking-[2.5px] uppercase ${accent.accent} mb-6`}>Best fit</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Who this service is for.</h2>
              <div className="flex flex-col">
                {service.fit.map((item) => (
                  <p key={item} className="text-sm text-text-secondary leading-relaxed py-2.5 px-5 border-b border-border relative last:border-none">{item}</p>
                ))}
              </div>
            </div>
            <div className="bg-base-100 border border-border rounded-xl p-10">
              <span className={`block text-xs font-bold tracking-[2.5px] uppercase ${accent.accent} mb-6`}>Deliverables</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">What your team walks away with.</h2>
              <div className="flex flex-col">
                {service.deliverables.map((item) => (
                  <p key={item} className="text-sm text-text-secondary leading-relaxed py-2.5 px-5 border-b border-border relative last:border-none">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-neutral rounded-xl p-14 flex items-center justify-between gap-12 flex-wrap">
            <div>
              <span className={`block text-xs font-bold tracking-[2.5px] uppercase ${accent.accent} mb-3`}>Next step</span>
              <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">{service.ctaTitle}</h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-[460px]">{service.ctaBody}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0 flex-wrap">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary">Start the Conversation</Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-text-inverse/30 no-underline transition-all hover:border-text-inverse hover:bg-text-inverse/6">Back to Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
