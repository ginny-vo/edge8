import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Training & Certification',
  description: 'Build AI Leadership Across Your Organization. Turn your managers into certified AI Officers who can lead automation, drive ROI, and future-proof your business.',
};

export default function TrainingCertificationPage() {
  return (
    <main className="service-page accent-gold">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-orb service-hero-orb-a" />
        <div className="service-hero-orb service-hero-orb-b" />
        <div className="service-shell">
          <div className="service-hero-copy">
            <span className="service-eyebrow">AI Literacy For Teams And Operators</span>
            <h1>Build AI Leadership Across Your Organization</h1>
            <p className="service-summary">Turn your managers into certified AI Officers who can lead automation, drive ROI, and future-proof your business.</p>
            <div className="service-hero-actions">
              <a href="https://www.ai-officer.com/ai-training-business" target="_blank" rel="noopener noreferrer" className="btn-mint">
                Explore AI Officer Certification Program
              </a>
            </div>
          </div>
          <div className="service-hero-visual">
            <div className="service-graphic-card">
              <div className="service-graphic-ring" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section section-grey">
        <div className="section-inner">
          <h2 className="section-heading text-center">Most leaders say, <em style={{ color: 'rgb(245, 135, 74)' }}>"I know I need AI... but I don't know where to start."</em></h2>
          <p className="section-sub centered">The AI Officer Certification Program turns that uncertainty into capability.</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-proof-grid">
            {[
              { title: 'Accelerate ROI', desc: 'Identify quick-win automations and scale fast.' },
              { title: 'Develop Capability', desc: 'Equip every team with hands-on, repeatable AI frameworks.' },
              { title: 'Future-Proof Talent', desc: 'Build internal AI champions who keep your organization competitive.' },
            ].map((item, i) => (
              <div key={i} className="service-proof-card">
                <div className="service-proof-index">{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Roadmap */}
      <section className="section section-blue">
        <div className="section-inner">
          <h2 className="section-heading text-center">The One-Year Roadmap to AI Leadership</h2>
          <p className="section-sub centered" style={{ color: 'rgba(255,255,255,0.85)' }}>
            <strong>Structure Summary:</strong> Total Duration: 12 months (self-paced or guided)<br />
            <strong>Format:</strong> 100% online | Weekly instructor-led sessions | 24/7 asynchronous access<br />
            <strong>Time Commitment:</strong> Less than 3 hours per week<br />
            <strong>Ideal Participants:</strong> Professionals across business functions who need to drive measurable AI ROI
          </p>
        </div>
      </section>

      {/* Program Series */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Program Series</span>
            <h2>Three Four-Week Programs to establish a common foundation of AI fluency.</h2>
          </div>
          <div className="service-process-list">
            {[
              { title: 'Series 1: Generative', items: ['Grasp Generative AI, prompts, images, and video', 'Identify high-value use cases', 'Apply data-readiness principles'] },
              { title: 'Series 2: Agentic', items: ['Understand intelligent agent architecture', 'Design fully automated workflows', 'Vibe Code & Build AI Agents'] },
              { title: 'Series 3: Business', items: ['Turn AI potential into measurable results', 'Create responsible, AI-driven roadmaps', 'Lead AI programs that drive ROI'] },
            ].map((series, i) => (
              <div key={i} className="service-process-card">
                <div className="service-process-phase">Phase {i + 1}</div>
                <h3>{series.title}</h3>
                <div className="service-bullet-list">
                  {series.items.map((item, j) => <p key={j}>{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demonstrate Capabilities */}
      <section className="service-section">
        <div className="service-shell">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            <div>
              <h3>Demonstrate Capabilities</h3>
              <p>Apply learnings to real business challenges.</p>
              <div className="service-bullet-list">
                <p>Framework library for repeatable solutions</p>
                <p>12 Immersive AI Workshops on specific AI topics</p>
                <p>12 Applied challenges to demonstrate proficiency</p>
              </div>
            </div>
            <div>
              <h3>Continuous Learning</h3>
              <p>AI is ever-changing — keep your team fluent.</p>
              <div className="service-bullet-list">
                <p>Weekly live micro-sessions</p>
                <p>Peer-to-peer learning</p>
                <p>Weekly office hours for CAIO-level coaching</p>
                <p>24/7 access to on-demand resources</p>
                <p>Monthly Vibe Coding Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section section-grey">
        <div className="section-inner">
          <h2 className="section-heading text-center">Our Track Record</h2>
          <div className="service-proof-grid">
            {[
              { title: 'Decades of successful engineering placements', desc: 'Across startups to Fortune 500 companies' },
              { title: '8 years deep in AI', desc: 'We know what works in production, not just in demos' },
              { title: 'Thousands trained', desc: 'Through AI Officer Institute certification program' },
              { title: 'First placements launching', desc: 'With F&B and distribution companies in 2025' },
            ].map((item, i) => (
              <div key={i} className="service-proof-card">
                <p style={{ fontSize: '18px' }}>✓ <strong>{item.title}</strong> — {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="service-section">
        <div className="service-shell">
          <div className="service-section-heading">
            <span>Meet the Chief AI Officer</span>
            <h2>Dave Hajdu</h2>
          </div>
          <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            Dave Hajdu, Founder of <strong>Edge8 AI</strong> & <strong>AI Officer Institute</strong>, Co-founder of <strong>TINYpulse</strong> (acquired by WebMD), Microsoft alum, and EO Leader for 500+ SEA businesses. Dave leads the AI Officer Certification and helps organizations worldwide move from AI awareness to implementation success.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-blue text-center">
        <div className="section-inner">
          <h2 className="section-heading">Ready to Train Your Team for the AI Era?</h2>
          <p className="section-sub centered" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Enroll your leaders, managers, and teams in the AI Officer Certification Program and start transforming how your organization works with AI.
          </p>
          <div style={{ marginTop: '40px' }}>
            <a href="https://www.ai-officer.com/ai-training-business" target="_blank" rel="noopener noreferrer" className="btn-mint">
              Start Your AI Training Journey
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
