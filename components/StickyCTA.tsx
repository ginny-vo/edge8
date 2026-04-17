'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <Link href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-contrast text-sm font-bold px-6 py-4 rounded-full border-none no-underline shadow-lg shadow-primary/50 animate-pulse hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/65 transition-all">
        Book Free Strategy Call &rarr;
      </Link>
    </div>
  );
}
