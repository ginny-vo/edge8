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
    <div className={`sticky-cta${visible ? ' visible' : ''}`}>
      <Link href="#contact" className="sticky-cta-btn">
        Book Free Strategy Call &rarr;
      </Link>
    </div>
  );
}
