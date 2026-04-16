'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

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

const STEP_COUNT = stepsData.length;

export default function Steps8() {
  const [active, setActive] = useState(0);
  const [manualUntil, setManualUntil] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isFinal = active === STEP_COUNT - 1;
  const progressPct = (active / (STEP_COUNT - 1)) * 100;

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setManualUntil(Date.now() + 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      if (Date.now() < manualUntil) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      if (scrolled < 0 || scrolled > totalScrollable) return;

      const progress = scrolled / totalScrollable;
      const newStep = Math.min(STEP_COUNT - 1, Math.floor(progress * STEP_COUNT));
      setActive(newStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualUntil]);

  const step = stepsData[active];

  return (
    <div ref={containerRef} style={{ height: `calc(${STEP_COUNT * 70}vh + 100vh)` }}>
      <div className="steps8-sticky">

        {/* ── Progress track ── */}
        <div className="steps8-track-wrap">
          <div className="steps8-bar-bg">
            <div
              className="steps8-bar-fill"
              style={{
                width: `${progressPct}%`,
                background: isFinal
                  ? 'linear-gradient(90deg,#287BE8,#6FF2C1)'
                  : 'linear-gradient(90deg,#287BE8,#22d3ee)',
              }}
            />
          </div>

          <div className="steps8-dots">
            {stepsData.map((s, i) => {
              const isActive    = i === active;
              const isCompleted = i < active;
              const isFinalDot  = i === STEP_COUNT - 1;
              return (
                <button
                  key={i}
                  className="steps8-dot-btn"
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${i + 1}: ${s.title}`}
                >
                  <div className={`steps8-dot${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}${isFinalDot ? ' final' : ''}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="steps8-dot-label">
                    {s.title.replace(' ✦', '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Detail panel — perspective wrapper drives the flip ── */}
        <div className="steps8-panel-wrap">
          <div key={active} className={`steps8-panel${isFinal ? ' final' : ''}`}>
            {/* Percent replaces the old step number */}
            <div className="steps8-panel-num">{step.pct}</div>
            <div className="steps8-panel-body">
              <div className="steps8-panel-title">{step.title}</div>
              <div className="steps8-panel-desc">{step.desc}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
