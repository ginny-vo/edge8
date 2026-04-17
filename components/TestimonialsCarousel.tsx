'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const testimonials = [
  { quote: "Working with Edge8 has been a pleasure. When I launched Fab Four Academy, I needed support to build a strong brand and digital presence. Dave and the team at Edge8 stepped in and not only helped with the branding, but showed us how to leverage AI to streamline our processes. We have scaled from single posts to a full content engine while keeping true to our vision and voice.", name: "Dan Absher", title: "CEO, Absher Construction Company", photo: "/images/testimonials/dan-absher.jpg" },
  { quote: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia.", name: "Dato George Lim", title: "Founder and CEO, G&A GROUP", photo: "/images/testimonials/dato-george-lim.png" },
  { quote: "We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks and exploding output across a wide range of applications. He was able to greatly expand our general knowledge of AI and demystify the challenges of implementation. I highly recommend Edge8.ai as a YPO resource.", name: "John VanNewkirk", title: "YPO Gold Seattle, Forum 6", photo: "/images/testimonials/john-vannewkirk.png" },
  { quote: "I am very grateful to Dave Hajdu, who spoke to graduate students in our international business and public policy program. He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.", name: "Dr. Brooks Holtom", title: "Professor of Management, Georgetown", photo: "/images/testimonials/brooks-holtom.jpg" },
  { quote: "Love the new look and branding. The website looks so good. I'm deeply grateful. The brand interview really made me think about our positioning and business in ways I never expected.", name: "Dao Nguyen", title: "Founder, DN Legal", photo: "/images/testimonials/dao-nguyen.jpg" },
  { quote: "I can't stop looking at the new website and brand book. With Edge8's help, we're finally presenting ourselves the way we've always wanted. The speed, the quality, and the care were all top-notch. Everything is just amazing. More than happy.", name: "Tuan Anh Le", title: "Managing Partner, DN Legal", photo: "/images/testimonials/tuan-anh-le.jpg" },
];

type Dir = 'left' | 'right';

export default function TestimonialsCarousel() {
  const [active,   setActive]   = useState(0);
  const [exiting,  setExiting] = useState<number | null>(null);
  const [dir,      setDir]     = useState<Dir>('left');
  const [paused,   setPaused]  = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef  = useRef(active);
  const total = testimonials.length;

  useEffect(() => {
    if (exiting === null) return;
    const t = setTimeout(() => setExiting(null), 400);
    return () => clearTimeout(t);
  }, [exiting]);

  const navigate = useCallback((newIdx: number, direction: Dir) => {
    setDir(direction);
    setExiting(activeRef.current);
    setActive(newIdx);
    setPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setPaused(false), 7000);
  }, []);

  const prev = () => navigate((active - 1 + total) % total, 'right');
  const next = () => navigate((active + 1) % total, 'left');

  const goTo = (idx: number) => {
    const direction: Dir = idx > active ? 'left' : 'right';
    navigate(idx, direction);
  };

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const cur = activeRef.current;
      const nxt = (cur + 1) % total;
      setDir('left');
      setExiting(cur);
      setActive(nxt);
    }, 5000);
  }, [total]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (!paused) startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, startInterval]);

  const cardStyle = (i: number): React.CSSProperties => {
    if (i === active) return { animation: `tc-enter-${dir} 0.45s cubic-bezier(0.2, 0, 0, 1) both` };
    if (i === exiting) return { animation: `tc-exit-${dir} 0.25s cubic-bezier(0.4, 0, 1, 1) both` };
    return {};
  };

  return (
    <div className="max-w-[800px] mx-auto relative px-14">
      <button className="absolute top-[calc(50%-20px)] -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center cursor-pointer z-10 text-text-primary transition-all hover:bg-secondary hover:border-secondary hover:text-text-inverse hover:shadow-lg hover:shadow-secondary/35 -left-0" onClick={prev} aria-label="Previous testimonial">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      <div className="grid grid-cols-1 grid-rows-1">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={cn(
              'bg-white border border-border rounded-2xl p-12 pb-10 shadow-md relative flex flex-col',
              i === active && 'row-span-1 col-span-1 opacity-100 pointer-events-auto',
              i !== active && 'row-span-1 col-span-1 opacity-0 pointer-events-none',
            )}
            style={cardStyle(i)}
            aria-hidden={i !== active}
          >
            <div className="absolute top-5 left-10 text-8xl leading-none font-serif text-secondary opacity-20 select-none pointer-events-none">&ldquo;</div>
            <div className="relative z-10 text-base leading-relaxed text-text-secondary italic mb-8">{item.quote}</div>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-13 h-13 rounded-full overflow-hidden flex-shrink-0 bg-secondary/10 border-2 border-border">
                {item.photo ? <Image src={item.photo} alt={item.name} width={52} height={52} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-lg font-bold text-secondary">{item.name.charAt(0)}</div>}
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary">{item.name}</div>
                <div className="text-xs text-text-tertiary mt-0.5">{item.title}</div>
              </div>
              <div className="ml-auto text-xs font-semibold text-text-tertiary">{active + 1} / {total}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute top-[calc(50%-20px)] -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center cursor-pointer z-10 text-text-primary transition-all hover:bg-secondary hover:border-secondary hover:text-text-inverse hover:shadow-lg hover:shadow-secondary/35 -right-0" onClick={next} aria-label="Next testimonial">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      <div className="flex gap-2 justify-center mt-7">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={cn(
              'w-1.75 h-1.75 rounded-full border-none cursor-pointer transition-all',
              i === active ? 'bg-secondary w-5 rounded' : 'bg-border',
            )}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
