'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with Edge8 has been a pleasure. When I launched Fab Four Academy, I needed support to build a strong brand and digital presence. Dave and the team at Edge8 stepped in and not only helped with the branding, but showed us how to leverage AI to streamline our processes. We have scaled from single posts to a full content engine while keeping true to our vision and voice.",
    name: "Dan Absher",
    title: "CEO, Absher Construction Company",
    photo: "/images/testimonials/dan-absher.jpg",
  },
  {
    quote: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia.",
    name: "Dato George Lim",
    title: "Founder and CEO, G&A GROUP",
    photo: "/images/testimonials/dato-george-lim.png",
  },
  {
    quote: "We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks and exploding output across a wide range of applications. He was able to greatly expand our general knowledge of AI and demystify the challenges of implementation. I highly recommend Edge8.ai as a YPO resource.",
    name: "John VanNewkirk",
    title: "YPO Gold Seattle, Forum 6",
    photo: "/images/testimonials/john-vannewkirk.png",
  },
  {
    quote: "I am very grateful to Dave Hajdu, who spoke to graduate students in our international business and public policy program. He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.",
    name: "Dr. Brooks Holtom",
    title: "Professor of Management, Georgetown",
    photo: "/images/testimonials/brooks-holtom.jpg",
  },
  {
    quote: "Love the new look and branding. The website looks so good. I'm deeply grateful. The brand interview really made me think about our positioning and business in ways I never expected.",
    name: "Dao Nguyen",
    title: "Founder, DN Legal",
    photo: "/images/testimonials/dao-nguyen.jpg",
  },
  {
    quote: "I can't stop looking at the new website and brand book. With Edge8's help, we're finally presenting ourselves the way we've always wanted. The speed, the quality, and the care were all top-notch. Everything is just amazing. More than happy.",
    name: "Tuan Anh Le",
    title: "Managing Partner, DN Legal",
    photo: "/images/testimonials/tuan-anh-le.jpg",
  },
];

type Dir = 'left' | 'right';

export default function TestimonialsCarousel() {
  const [active,   setActive]   = useState(0);
  const [exiting,  setExiting]  = useState<number | null>(null);
  const [dir,      setDir]      = useState<Dir>('left');
  const [paused,   setPaused]   = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef   = useRef(active);
  activeRef.current = active;
  const total = testimonials.length;

  // Clear the exiting card after the animation finishes
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
    if (!paused) startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, startInterval]);

  const cardClass = (i: number): string => {
    if (i === active)  return `tc-card tc-card-enter-${dir}`;
    if (i === exiting) return `tc-card tc-card-exit-${dir}`;
    return 'tc-card tc-card-hidden';
  };

  return (
    <div className="tc-wrapper">
      <button className="tc-arrow tc-prev" onClick={prev} aria-label="Previous testimonial">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="tc-card-track">
        {testimonials.map((item, i) => (
          <div key={i} className={cardClass(i)} aria-hidden={i !== active}>
            <div className="tc-quote-mark">&ldquo;</div>
            <div className="tc-quote">{item.quote}</div>
            <div className="tc-author">
              <div className="tc-avatar">
                {item.photo
                  ? <Image src={item.photo} alt={item.name} width={52} height={52} className="tc-avatar-img" />
                  : <div className="tc-avatar-fallback">{item.name.charAt(0)}</div>
                }
              </div>
              <div>
                <div className="tc-name">{item.name}</div>
                <div className="tc-title">{item.title}</div>
              </div>
              <div className="tc-counter">{active + 1} / {total}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="tc-arrow tc-next" onClick={next} aria-label="Next testimonial">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="tc-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`tc-dot${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
