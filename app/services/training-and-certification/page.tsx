import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Officer Training & Certification | Develop AI Leaders',
  description: 'Turn your managers into certified AI Officers who can lead automation, drive ROI, and future-proof your business.',
};

const benefits = [
  'Accelerate ROI from your AI initiatives',
  'Develop in-house capability instead of outsourcing',
  'Build a common language of AI across teams',
  "Future-proof your organization's talent",
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
      'Design fully automated workflows',
      'Vibe Code & Build AI Agents',
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

const trackRecord = [
  { num: '8+', label: 'Years of deep AI production experience across real business environments.' },
  { num: '1K+', label: 'Professionals trained through the certification program across industries and regions.' },
  { num: '2025', label: 'Active launches with F&B, distribution, and logistics companies across Southeast Asia.' },
];

const testimonials = [
  {
    quote: 'I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved.',
    name: 'Dato George Lim',
    title: 'Founder and CEO, G&A GROUP & GA SPACE',
    image: '/images/testimonials/dato-george-lim.png',
  },
  {
    quote: 'We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks and exploding output across a wide range of applications.',
    name: 'John VanNewkirk',
    title: 'YPO Gold Seattle, Forum 6',
    image: '/images/testimonials/john-vannewkirk.jpg',
  },
  {
    quote: 'Dave was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.',
    name: 'Dr. Brooks Holtom',
    title: 'Professor of Management, Georgetown',
    image: '/images/testimonials/brooks-holtom.jpg',
  },
  {
    quote: 'Working with Edge8 has been a pleasure. Dave and the team showed us how to leverage AI to streamline our processes.',
    name: 'Dan Absher',
    title: 'CEO, Absher Construction Company',
    image: '/images/testimonials/dan-absher.jpg',
  },
];

export default function TrainingAndCertificationPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-neutral overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[100px]" style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.18) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-warning bg-warning/10 border border-warning/25 px-3.5 py-1.5 rounded-full mb-6">AI Literacy For Teams And Operators</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse leading-tight tracking-tight mb-6">Build AI Leadership Across Your Organization</h1>
            <p className="text-lg text-text-inverse/80 font-medium leading-relaxed mb-4">Turn your managers into certified AI Officers who can lead automation, drive ROI, and future-proof your business.</p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="https://www.ai-officer.com/ai-training-business" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 bg-warning text-neutral text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-warning">Explore AI Officer Certification Program</a>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">View All Services</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 border-t border-white/10">
          {[
            { label: 'Duration', value: '12 Months' },
            { label: 'Format', value: '100% Online' },
            { label: 'Time Commitment', value: '<3 Hours/Week' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border-r border-white/10 last:border-none">
              <div className="text-xs font-bold tracking-[2px] uppercase text-text-inverse/40 mb-1.5">{stat.label}</div>
              <div className="text-base font-bold text-text-inverse">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM + BENEFITS */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Most leaders say, <em className="text-warning">&ldquo;I know I need AI&hellip; but I don&apos;t know where to start.&rdquo;</em></h2>
              <p className="text-sm text-text-secondary leading-relaxed">The AI Officer Certification Program turns that uncertainty into capability. In <strong>less than 3 hours per week</strong>, your team will learn how to structure, lead, and scale AI programs that create <strong>measurable business results</strong>.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Key benefits</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">What your team gains.</h2>
              <div className="space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-warning font-bold shrink-0">✓</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE-YEAR ROADMAP */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Structure</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">The One-Year Roadmap to AI Leadership</h2>
              <div className="space-y-3">
                <p className="text-sm text-text-secondary"><strong>Duration:</strong> 12 months (self-paced or guided)</p>
                <p className="text-sm text-text-secondary"><strong>Format:</strong> 100% online | Weekly instructor-led sessions | 24/7 asynchronous access</p>
                <p className="text-sm text-text-secondary"><strong>Time Commitment:</strong> Less than 3 hours per week</p>
                <p className="text-sm text-text-secondary"><strong>Ideal Participants:</strong> Professionals across business functions who need to drive measurable AI ROI</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Demonstrate Capabilities</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Structured learning at scale.</h2>
              <div className="space-y-3">
                <p className="text-sm text-text-secondary">Framework library for real-world application</p>
                <p className="text-sm text-text-secondary">12 immersive workshops with applied challenges</p>
                <p className="text-sm text-text-secondary">Weekly instructor-led sessions</p>
                <p className="text-sm text-text-secondary">24/7 on-demand access to all materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM SERIES */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Program Series</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug max-w-[640px]">Three series. One complete AI leadership foundation.</h2>
            <p className="text-base text-text-secondary leading-relaxed mt-4 max-w-[560px]">Your team can join a class or move at their own pace to complete three Four-Week Programs and establish a common foundation of AI fluency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {series.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-warning" />
                <div className="text-5xl font-extrabold text-warning/15 mb-4 leading-none">{s.num}</div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Series {s.num}: {s.title}</h3>
                <ul className="space-y-2.5">
                  {s.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-warning mt-1 shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS LEARNING */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Continuous Learning</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Support beyond the curriculum.</h2>
              <div className="space-y-3">
                {['Weekly micro-sessions to reinforce key skills', 'Peer learning community for applied problem-solving', 'Office hours coaching from practitioners', 'Monthly coding sessions for hands-on AI building'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-warning mt-1 shrink-0">›</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-6">Turn Learning into ROI</span>
              <h2 className="text-2xl font-bold text-text-primary mb-6">This program doesn&apos;t just teach AI.</h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">It builds the leaders who will drive it.</p>
              <div className="space-y-4">
                {[
                  { title: 'Accelerate ROI', body: 'Identify quick-win automations and scale fast.' },
                  { title: 'Develop Capability', body: 'Equip every team with hands-on, repeatable AI frameworks.' },
                  { title: 'Future-Proof Talent', body: 'Build internal AI champions who keep your organization competitive.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-base font-bold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">Track Record</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">Built by practitioners, not theorists.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trackRecord.map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-5xl font-extrabold text-warning mb-3">{item.num}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 bg-surface-overlay">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-40 rounded-xl overflow-hidden bg-neutral-50 flex-shrink-0">
              <Image src="/images/dave-hajdu.jpg" alt="Dave Hajdu" width={128} height={160} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-[2px] uppercase text-warning mb-3">About the Instructor</div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Dave Hajdu</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Founder of Edge8 AI & AI Officer Institute. Co-founder of TINYpulse (acquired by WebMD). Microsoft alum and EO Leader for 500+ SEA businesses. Dave leads the AI Officer Certification and helps organizations worldwide move from AI awareness to implementation success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="block text-xs font-bold tracking-[2.5px] uppercase text-warning mb-3">What people say</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight leading-snug">Trusted by leaders across industries.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-sm text-text-secondary leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-50 flex-shrink-0">
                    <Image src={t.image} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-tertiary">{t.title}</p>
                  </div>
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
              <h2 className="text-2xl font-bold text-text-inverse mb-3 leading-snug max-w-[500px]">Start your AI training journey.</h2>
              <p className="text-sm text-text-inverse/60 leading-relaxed max-w-[460px]">Train the team that has to operate the system. Better literacy produces better judgment, better adoption, and stronger results across every other AI investment you make.</p>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <a href="https://www.ai-officer.com/ai-training-business" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 bg-warning text-neutral text-sm font-semibold px-6 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-warning">Start Your AI Training Journey</a>
              <Link href="/services" className="inline-flex items-center gap-2 bg-transparent text-text-inverse text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/25 no-underline transition-all hover:border-white/70">Back to Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
