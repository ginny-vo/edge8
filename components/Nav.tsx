'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [atTop,  setAtTop]  = useState(true);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname    = usePathname();
  const isHomepage  = pathname === '/';

  /* ── Scroll: transparent at top on homepage, hide on down, show on up ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 60);
      if (y > 120) {
        setHidden(y > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Mobile menu ── */
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

  useEffect(() => { return () => closeMenu(); }, []);

  /* ── Helpers ── */
  const dark = isHomepage && atTop;

  const navClass = [
    'nav',
    dark   ? 'nav-at-top' : '',
    hidden ? 'nav-hidden'  : '',
  ].filter(Boolean).join(' ');

  const linkClass = (href: string) => {
    const active = href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/');
    return `nav-link${active ? ' nav-link-active' : ''}`;
  };

  /* Use white logo on dark hero, dark logo everywhere else */
  const logoSrc = dark
    ? '/images/edge8-logo-white.png'
    : '/images/edge8-logo.png';

  return (
    <>
      <nav className={navClass}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src={logoSrc} alt="Edge8" width={100} height={32} priority />
          </Link>

          <div className="nav-links">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <div className="nav-dropdown">
              <Link href="/services" className={`nav-dropdown-trigger ${linkClass('/services')}`}>
                Services <span className="dropdown-arrow">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank">AI in Business Workshop</Link>
                <Link href="/services/your-first-ai-hire">Your First AI Hire</Link>
                <Link href="/services/ai-capabilities-audit">AI Capabilities Audit</Link>
                <Link href="/services/caio-leadership">CAIO Leadership</Link>
                <Link href="/services/global-staffing">Global Staffing</Link>
                <Link href="/services/training-certification">Training & Certification</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link href="/case-studies" className={`nav-dropdown-trigger ${linkClass('/case-studies')}`}>
                Case Studies <span className="dropdown-arrow">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="/case-studies">All Case Studies</Link>
                <Link href="/case-studies/personal-brands">Personal Brands</Link>
                <Link href="/case-studies/business-website">Business Website</Link>
                <Link href="/case-studies/ai-programs">AI Programs</Link>
              </div>
            </div>

            <Link href="/blog"  className={linkClass('/blog')}>Blog</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
          </div>

          <button ref={hamburgerRef} className="hamburger" onClick={toggleMenu} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div ref={mobileMenuRef} className="mobile-menu">
        <div className="mobile-menu-section">
          <button className="mobile-menu-toggle" onClick={() => setServicesOpen(!servicesOpen)}>
            Services <span>{servicesOpen ? '−' : '+'}</span>
          </button>
          {servicesOpen && (
            <div className="mobile-menu-sub">
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" onClick={closeMenu}>AI in Business Workshop</Link>
              <Link href="/services/your-first-ai-hire" onClick={closeMenu}>Your First AI Hire</Link>
              <Link href="/services/ai-capabilities-audit" onClick={closeMenu}>AI Capabilities Audit</Link>
              <Link href="/services/caio-leadership" onClick={closeMenu}>CAIO Leadership</Link>
              <Link href="/services/global-staffing" onClick={closeMenu}>Global Staffing</Link>
              <Link href="/services/training-certification" onClick={closeMenu}>Training & Certification</Link>
            </div>
          )}
        </div>
        <div className="mobile-menu-section">
          <button className="mobile-menu-toggle" onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}>
            Case Studies <span>{caseStudiesOpen ? '−' : '+'}</span>
          </button>
          {caseStudiesOpen && (
            <div className="mobile-menu-sub">
              <Link href="/case-studies" onClick={closeMenu}>All Case Studies</Link>
              <Link href="/case-studies/personal-brands" onClick={closeMenu}>Personal Brands</Link>
              <Link href="/case-studies/business-website" onClick={closeMenu}>Business Website</Link>
              <Link href="/case-studies/ai-programs" onClick={closeMenu}>AI Programs</Link>
            </div>
          )}
        </div>
        <Link href="/"     onClick={closeMenu} className={linkClass('/')}>Home</Link>
        <Link href="/blog"  onClick={closeMenu} className={linkClass('/blog')}>Blog</Link>
        <Link href="/about" onClick={closeMenu} className={linkClass('/about')}>About</Link>
      </div>
    </>
  );
}
