'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

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
      <div className="sticky top-0 h-screen flex flex-col justify-center py-8 px-12 max-w-7xl mx-auto gap-5">

        <div className="relative pb-11">
          <div className="h-0.75 bg-border rounded relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded transition-all duration-500"
              style={{
                width: `${progressPct}%`,
                background: isFinal
                  ? 'linear-gradient(90deg,#287BE8,#6FF2C1)'
                  : 'linear-gradient(90deg,#287BE8,#22d3ee)',
              }}
            />
          </div>

          <div className="flex justify-between -mt-3.5 relative">
            {stepsData.map((s, i) => {
              const isActive    = i === active;
              const isCompleted = i < active;
              const isFinalDot  = i === STEP_COUNT - 1;
              return (
                <button
                  key={i}
                  className="flex flex-col items-center gap-2 bg-none border-none cursor-pointer p-0"
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${i + 1}: ${s.title}`}
                >
                  <div className={cn(
                    'w-6.5 h-6.5 rounded-full flex items-center justify-center text-[9px] font-bold bg-surface-inverse border-2 transition-all duration-300',
                    isActive && !isFinalDot && 'bg-secondary text-text-inverse border-secondary shadow-lg shadow-secondary/20 scale-110',
                    isActive && isFinalDot && 'bg-primary text-primary-contrast border-primary shadow-lg shadow-primary/25 scale-110',
                    isCompleted && !isActive && 'bg-secondary text-text-inverse border-secondary',
                    !isActive && !isCompleted && 'text-text-tertiary border-border',
                  )}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="text-[10px] text-text-tertiary text-center max-w-[60px] truncate transition-colors duration-300">
                    {s.title.replace(' ✦', '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="perspective-1100">
          <div
            key={active}
            className={cn(
              'flex items-center gap-10 p-9 rounded-xl border bg-surface-inverse transition-all duration-300',
              isFinal ? 'border-primary/45 bg-primary/4' : 'border-border',
            )}
            style={{ animation: 'step-flip 0.42s cubic-bezier(0.25, 1, 0.5, 1) both', transformOrigin: 'left center' }}
          >
            <div className={cn(
              'text-6xl font-extrabold tracking-tight text-border min-w-[110px] text-center flex-shrink-0 tabular-nums transition-colors duration-300',
              isFinal && 'text-primary/55',
            )}>
              {step.pct}
            </div>
            <div>
              <div className="text-xl font-bold text-text-primary mb-2.5 leading-snug">{step.title}</div>
              <div className="text-sm text-text-secondary leading-relaxed max-w-[580px]">{step.desc}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
