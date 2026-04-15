'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleMenu() {
    const h = hamburgerRef.current;
    const m = mobileMenuRef.current;
    const b = document.body;
    if (!h || !m) return;

    if (b.classList.contains('menu-open')) {
      const scrollY = parseInt(b.style.top || '0', 10);
      b.classList.remove('menu-open');
      b.style.top = '';
      window.scrollTo(0, -scrollY);
    } else {
      b.style.top = `-${window.scrollY}px`;
      b.classList.add('menu-open');
    }
    h.classList.toggle('active');
    m.classList.toggle('open');
  }

  function closeMenu() {
    const h = hamburgerRef.current;
    const m = mobileMenuRef.current;
    const b = document.body;
    if (!h || !m) return;
    const scrollY = parseInt(b.style.top || '0', 10);
    b.classList.remove('menu-open');
    b.style.top = '';
    window.scrollTo(0, -scrollY);
    h.classList.remove('active');
    m.classList.remove('open');
  }

  useEffect(() => {
    return () => closeMenu();
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <Image
              src="/images/edge8-logo.png"
              alt="Edge8"
              width={88}
              height={36}
              className="nav-logo-img"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link href="/#about">About</Link>

            {/* Services dropdown */}
            <div className="nav-dropdown">
              <button className="nav-dropdown-toggle">
                Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/#services">AI Programs</Link>
                <Link href="/#services">Global Talent Network</Link>
                <Link href="/#services">AI Officer Certification</Link>
                <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" rel="noopener noreferrer">AI in Business Workshop ↗</Link>
              </div>
            </div>

            {/* Case Studies dropdown */}
            <div className="nav-dropdown">
              <button className="nav-dropdown-toggle">
                Case Studies
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/#case-studies">Vespa Adventures</Link>
                <Link href="/#case-studies">InvestMigrate</Link>
                <Link href="/#case-studies">PHO24</Link>
              </div>
            </div>

            <Link href="/blog">Blog</Link>
            <Link href="/#contact" className="btn-mint" style={{ fontSize: '14px', padding: '10px 20px' }}>
              Get Started &rarr;
            </Link>
          </div>

          {/* Hamburger */}
          <button ref={hamburgerRef} className="hamburger" onClick={toggleMenu} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div ref={mobileMenuRef} className="mobile-menu">
        <Link href="/#about" onClick={closeMenu}>About</Link>
        <Link href="/#services" onClick={closeMenu}>AI Programs</Link>
        <Link href="/#services" onClick={closeMenu}>Global Talent</Link>
        <Link href="/#services" onClick={closeMenu}>AI Officer Cert.</Link>
        <Link href="/#case-studies" onClick={closeMenu}>Case Studies</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/#contact" className="btn-mint" onClick={closeMenu}>Get Started &rarr;</Link>
      </div>
    </>
  );
}
