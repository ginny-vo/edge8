import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edge8 — Be Tech-Forward | AI Programs & Consulting',
  description: 'Edge8 helps organizations become Tech-Forward through AI Programs, Global Talent Staffing, and AI Officer Leadership. Stop overthinking AI — Start implementing.',
  openGraph: {
    title: 'Edge8 — Be Tech-Forward',
    description: 'Stop overthinking AI — Start implementing your AI Programs. AI Programs, Global Talent, and AI Officer Leadership.',
    url: 'https://edge8.vercel.app',
    images: [{ url: '/images/og-default.jpg' }],
    type: 'website',
  },
  twitter: {
    title: 'Edge8 — Be Tech-Forward',
    description: 'Stop overthinking AI — Start implementing your AI Programs.',
    images: ['/images/og-default.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero">
        <div className="container">
          <span className="hero-eyebrow">Be Tech-Forward</span>
          <h1>8x IMPACT</h1>
          <p className="hero-sub">Stop overthinking AI&mdash;Start implementing your AI Programs</p>
          <Link href="#contact" className="btn-mint">Schedule A Consultation &rarr;</Link>
          <div className="hero-video">
            <video autoPlay muted loop playsInline>
              <source src="/images/edge8-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="section section-grey" id="about">
        <div className="section-inner">
          <div className="problem-card">
            <h2>Why do I need an AI Program?</h2>
            <div className="subtext">Ad-hoc usage of AI is limiting you to minimal gains</div>
            <p>Lack of focus traps your business in mediocrity&mdash;keeping you stuck in repetitive tasks, wasted resources, and missed opportunities. Without a structured AI Program, competitors will outpace you, innovation stalls, costs balloon, and growth suffers.</p>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS */}
      <section className="section">
        <div className="section-inner">
          <div className="text-center">
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>
          <div className="testimonials-row">
            {[
              { quote: "Love the new look and branding. The website looks so good. I'm deeply grateful. The brand interview really made me think about our positioning and business in ways I never expected.", name: "Dao Nguyen", title: "Founder, DN Legal" },
              { quote: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia and have signed an MOU to broaden the reach of our organization.", name: "Dato George Lim", title: "Founder and CEO, G&A GROUP" },
              { quote: "I am very grateful to Dave Hajdu, who spoke to graduate students in our international business and public policy program during our visit to Vietnam about Negotiations and AI. He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.", name: "Dr. Brooks Holtom", title: "Professor of Management, Georgetown" },
              { quote: "Working with Edge8 has been a pleasure. When I launched Fab Four Academy, I needed support to build a strong brand and digital presence. Dave and the team at Edge8 stepped in and not only helped with the branding and digital presence, but showed us how to leverage AI to streamline our processes.", name: "Dan Absher", title: "CEO, Absher Construction" },
              { quote: "We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks and exploding output across a wide range of applications. He was able to greatly expand our general knowledge of AI and demystify the challenges of implementation.", name: "John VanNewkirk", title: "YPO Gold Seattle" },
            ].map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="quote">{t.quote}</div>
                <div className="testimonial-author">
                  <div className="name">{t.name}</div>
                  <div className="title">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH-FORWARD DEFINITION */}
      <section className="section section-grey definition-section">
        <div className="section-inner">
          <h2 className="section-heading">What does it mean to be Tech-Forward?</h2>
          <p className="definition-phonetic">Tech-Forward /&#x2C8;t&#x25B;k &#x2C8;f&#x254;rw&#x259;rd/</p>
          <p className="definition-type">(adjective)</p>
          <p className="definition-body">Describing an organization or individual with the capability to strategically orchestrate AI resources to drive measurable value within their department or business.</p>
        </div>
      </section>

      {/* 5. 8 STEPS */}
      <section className="section steps-section">
        <div className="section-inner">
          <h2 className="section-heading">8 Steps to Becoming Tech-Forward</h2>
          <p className="steps-body">Orchestrate AI Resources for Maximum Impact, and you will unlock new levels of efficiency, automation, and decision-making in your business. Follow these steps to build a truly Tech-Forward organization and achieve 8x efficiency.</p>
          <p className="steps-cta-text">Book your free consultation today and take the first step toward an AI-driven future</p>
          <Link href="#contact" className="btn-mint">Schedule A Consultation</Link>
        </div>
      </section>

      {/* 6. BLUE CTA */}
      <section className="section section-blue text-center">
        <div className="section-inner">
          <h2 className="section-heading">Book Your Free Consultation</h2>
          <p className="section-sub centered" style={{ color: 'rgba(255,255,255,0.85)' }}>Take the first step toward becoming Tech-Forward. Our experts will help you identify the right AI Programs for your organization and map a clear path to 8x impact.</p>
          <div style={{ marginTop: '40px' }}>
            <Link href="#contact" className="btn-mint">Schedule A Consultation &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 7. RESULTS */}
      <section className="section">
        <div className="section-inner text-center">
          <h2 className="section-heading">Real Results for Real Businesses</h2>
          <p className="section-sub centered">Discover how Edge8 helps companies Be Tech-Forward, delivering results through Global Talent Staffing, AI Programs and AI Officer Leadership.</p>
          <div className="results-grid">
            <div className="result-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>AI Officer Leadership</h3>
              <p>Established the leadership needed to effectively run an AI Program within 10+ organizations</p>
            </div>
            <div className="result-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Global Talent Staffing</h3>
              <p>Helping a leading healthcare provider build a tech-forward team, doubling productivity while cutting costs dramatically.</p>
            </div>
            <div className="result-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>AI Programs</h3>
              <p>Eliminated 100% of data entry tasks, enriched entrepreneur submissions, and enhanced deal flow analysis for a Venture Capital firm.</p>
            </div>
          </div>
          <div className="results-btn">
            <Link href="#case-studies" className="btn-outline">View Our Success Case Studies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 8. SOLUTIONS */}
      <section className="section" id="services">
        <div className="section-inner text-center">
          <h2 className="section-heading">Our Solutions</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="sol-label">AI Programs</div>
              <h3>From Strategy to Implementation&mdash;We Build not Pitch</h3>
              <p>We don&rsquo;t just talk AI&mdash;we build with it. From CRM flows to marketing automation, our AI solutions power content creation, sales engagement, and customer journeys. You bring the ideas. We build the systems.</p>
            </div>
            <div className="solution-card">
              <div className="sol-label">Global Talent Network</div>
              <h3>Scale Smarter with AI-Empowered Teams</h3>
              <p>Access Vietnam&rsquo;s top AI-trained professionals to accelerate your initiatives&mdash;without compromising on quality or speed. We embed engineers, analysts, and operators directly into your team to turn workflows into intelligent systems.</p>
            </div>
            <div className="solution-card">
              <div className="sol-label">AI Officer Certification &amp; Workshops</div>
              <h3>Make Your Team AI-Literate and Leadership-Ready</h3>
              <p>We equip founders and teams to lead with confidence. Through our AI Officer certification and hands-on workshops, your organization will gain the frameworks, tools, and language to scale with AI&mdash;internally and externally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="section section-grey" id="case-studies">
        <div className="section-inner text-center">
          <h2 className="section-heading">The Path to Tech-Forward</h2>
          <p className="section-sub centered">A few examples of successful AI-Driven Programs</p>
          <div className="case-grid">
            {[
              { name: 'Vespa Adventures', tag: 'AI Program' },
              { name: 'InvestMigrate', tag: 'AI Program' },
              { name: 'PHO24', tag: 'AI Agents' },
            ].map((c) => (
              <div key={c.name} className="case-card">
                <div className="case-card-thumb">{c.name}</div>
                <div className="case-card-body">
                  <div className="case-tag">{c.tag}</div>
                  <h3>{c.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="case-btn">
            <Link href="#" className="btn-outline">Full List of Case Studies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 10. BLOG SNIPPET */}
      <section className="section">
        <div className="section-inner text-center">
          <h2 className="section-heading">Discover the Latest Insights</h2>
          <p className="section-sub centered">Stay up to date with the latest in AI Programs, Tech-Forward leadership, and digital transformation.</p>
          <div className="blog-grid">
            {[
              { tag: 'AI Programs', title: 'Why Every Business Needs an AI Program in 2025', desc: 'Learn how structured AI Programs are replacing ad-hoc AI usage and delivering measurable ROI across industries.' },
              { tag: 'Leadership', title: 'The Rise of the AI Officer', desc: 'How forward-thinking organizations are appointing AI Officers to lead their digital transformation initiatives.' },
              { tag: 'Case Study', title: "From Manual to Automated: A VC Firm's AI Journey", desc: 'How we eliminated 100% of data entry tasks and enhanced deal flow analysis for a leading Venture Capital firm.' },
            ].map((b) => (
              <div key={b.title} className="blog-card">
                <div className="blog-tag">{b.tag}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section className="section section-grey contact-section" id="contact">
        <div className="section-inner">
          <h2 className="section-heading">Let&rsquo;s Be Tech-Forward Together</h2>
          <p className="section-sub centered">Connect with Edge8&rsquo;s experts to explore AI Programs for your organization</p>
          <div className="typeform-wrapper">
            <iframe src="https://ai-officer.typeform.com/letstalk" title="Contact Edge8" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
