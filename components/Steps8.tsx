'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const stepsData = [
  { pct: '10%',  title: 'Get Started',            desc: 'Join a community to learn how your peers and experts are using AI' },
  { pct: '20%',  title: 'Company Alignment',       desc: 'Ensure leadership and employees are aligned on the strategic potential of AI. Assign a dedicated AI Officer to lead implementation.' },
  { pct: '30%',  title: 'Organize Your Data',      desc: 'Create your company database, starting with just the right amount of data for your first program' },
  { pct: '40%',  title: 'Build AI Agents',         desc: 'Develop intelligent AI agents that assist with tasks, improving decision-making and efficiency' },
  { pct: '50%',  title: 'Hire AI-Driven Talent',   desc: 'Leverage local and global talent and onboard AI-empowered people to enhance your workforce' },
  { pct: '60%',  title: 'Scale AI-Orchestration',  desc: 'Implement AI Programs across your organization and start generating revenue, increasing operational efficiency, and developing your talent' },
  { pct: '80%',  title: 'Full System Integration', desc: 'Replace antiquated systems and processes with a new AI-Driven approach, led by AI Officers who understand your business and your technology' },
  { pct: '100%', title: 'Tech-Forward ✦',          desc: 'Reclaim Your Time. With AI automating repetitive work, focus on what truly matters—growing your business while achieving 8x efficiency.' },
];

const milestones = [
  { dot: '01', label: ['Get', 'Started'] },
  { dot: '02', label: ['Company', 'Alignment'] },
  { dot: '03', label: ['Organize', 'Data'] },
  { dot: '04', label: ['Build AI', 'Agents'] },
  { dot: '05', label: ['Hire', 'Talent'] },
  { dot: '06', label: ['Scale AI', 'Orch.'] },
  { dot: '07', label: ['Full', 'Integration'] },
  { dot: '08', label: ['Tech-', 'Forward'] },
];

export default function Steps8() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setActive(0), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const progressPositions = [0, 100/7, 200/7, 300/7, 400/7, 500/7, 600/7, 100];
  const step = stepsData[active];
  const isFinal = active === 7;

  return (
    <div ref={sectionRef}>
      {/* Progress track */}
      <div style={{ position: 'relative', paddingBottom: '48px' }}>
        {/* Progress bar */}
        <div style={{ position: 'relative', height: '2px', background: '#E6EBF0', marginBottom: '0', borderRadius: '2px' }}>
          <div
            style={{
              position: 'absolute', left: 0, top: 0, height: '100%',
              background: isFinal ? '#6FF2C1' : '#287BE8',
              width: `${progressPositions[active]}%`,
              transition: 'width 0.4s ease, background 0.3s ease',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Milestone dots */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-14px' }}>
          {milestones.map((m, i) => {
            const isActive = i === active;
            const isCompleted = i < active;
            const isFinalDot = i === 7;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                  background: 'none', border: 'none', cursor: 'pointer', padding: '0',
                }}
              >
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: 700,
                  background: isActive ? (isFinalDot ? '#6FF2C1' : '#287BE8') : isCompleted ? '#287BE8' : '#fff',
                  color: isActive || isCompleted ? '#fff' : '#04102D',
                  border: `2px solid ${isActive ? (isFinalDot ? '#6FF2C1' : '#287BE8') : isCompleted ? '#287BE8' : '#E6EBF0'}`,
                  transition: 'all 0.3s ease',
                }}>
                  {m.dot}
                </div>
                <div style={{ fontSize: '11px', color: isActive ? '#04102D' : 'rgba(4,16,45,0.5)', textAlign: 'center', lineHeight: '1.3', fontWeight: isActive ? 600 : 400, transition: 'color 0.3s' }}>
                  {m.label[0]}<br />{m.label[1]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div style={{
        marginTop: '32px',
        padding: '32px 40px',
        borderRadius: '20px',
        border: `1px solid ${isFinal ? '#6FF2C1' : '#E6EBF0'}`,
        background: isFinal ? 'rgba(111,242,193,0.06)' : '#fff',
        display: 'flex', alignItems: 'center', gap: '40px',
        transition: 'border-color 0.3s, background 0.3s',
      }}>
        <div style={{
          fontSize: '72px', fontWeight: 800, lineHeight: 1,
          color: isFinal ? '#6FF2C1' : '#E6EBF0',
          minWidth: '80px', transition: 'color 0.3s',
        }}>
          {String(active + 1).padStart(2, '0')}
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: isFinal ? '#6FF2C1' : '#287BE8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Step {String(active + 1).padStart(2, '0')} &nbsp;·&nbsp; {step.pct}
          </div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#04102D', marginBottom: '10px' }}>
            {step.title}
          </div>
          <div style={{ fontSize: '15px', color: 'rgba(4,16,45,0.7)', lineHeight: '1.6', maxWidth: '560px' }}>
            {step.desc}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <p style={{ color: 'rgba(4,16,45,0.6)', marginBottom: '20px', fontSize: '15px' }}>
          Book your free consultation today and take the first step toward an AI-driven future.
        </p>
        <Link href="/#contact" className="btn-mint">Schedule A Consultation</Link>
      </div>
    </div>
  );
}
