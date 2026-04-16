'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Love the new look and branding. The website looks so good. I'm deeply grateful. The brand interview really made me think about our positioning and business in ways I never expected.",
    name: "Dao Nguyen",
    title: "Founder, DN Legal",
    photo: "/images/testimonials/dao-nguyen.jpg",
  },
  {
    quote: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved. We are looking forward to collaborating with the AI Officer Institute and Edge8 to bring their AI Certification Program to Malaysia.",
    name: "Dato George Lim",
    title: "Founder and CEO, G&A GROUP",
    photo: "/images/testimonials/dato-george-lim.png",
  },
  {
    quote: "I am very grateful to Dave Hajdu, who spoke to graduate students in our international business and public policy program. He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.",
    name: "Dr. Brooks Holtom",
    title: "Professor of Management, Georgetown",
    photo: "/images/testimonials/brooks-holtom.jpg",
  },
  {
    quote: "Working with Edge8 has been a pleasure. When I launched Fab Four Academy, I needed support to build a strong brand and digital presence. Dave and the team at Edge8 stepped in and showed us how to leverage AI to streamline our processes.",
    name: "Dan Absher",
    title: "CEO, Absher Construction",
    photo: "/images/testimonials/dan-absher.jpg",
  },
  {
    quote: "We were lucky enough to have Dave Hajdu work with our forum to help understand how AI is automating tasks and exploding output across a wide range of applications. He was able to greatly expand our general knowledge of AI and demystify the challenges of implementation.",
    name: "John VanNewkirk",
    title: "YPO Gold Seattle, Forum 6",
    photo: "/images/testimonials/john-vannewkirk.png",
  },
  {
    quote: "I can't stop looking at the new website and brand book. With Edge8's help, we're finally presenting ourselves the way we've always wanted. The speed, the quality, and the care were all top-notch. Everything is just amazing. More than happy.",
    name: "Tuan Anh Le",
    title: "Managing Partner, DN Legal",
    photo: "/images/testimonials/tuan-anh-le.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
  };

  useEffect(() => {
    if (!paused) startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const goTo = (idx: number) => {
    setActive(idx);
    setPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setPaused(false), 6000);
  };

  const t = testimonials[active];

  return (
    <div className="testimonials-carousel">
      <div className="tc-card" key={active}>
        <div className="tc-quote">&ldquo;{t.quote}&rdquo;</div>
        <div className="tc-author">
          <div className="tc-avatar">
            {t.photo ? (
              <Image src={t.photo} alt={t.name} width={56} height={56} className="tc-avatar-img" />
            ) : (
              <div className="tc-avatar-fallback">{t.name.charAt(0)}</div>
            )}
          </div>
          <div>
            <div className="tc-name">{t.name}</div>
            <div className="tc-title">{t.title}</div>
          </div>
        </div>
      </div>
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
      <div className="tc-thumbs">
        {testimonials.map((t2, i) => (
          <button
            key={i}
            className={`tc-thumb${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
          >
            {t2.photo ? (
              <Image src={t2.photo} alt={t2.name} width={48} height={48} className="tc-thumb-img" />
            ) : (
              <div className="tc-thumb-fallback">{t2.name.charAt(0)}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
