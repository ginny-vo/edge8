'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);

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
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Edge8</Link>
          <div className="nav-links">
            <div className="nav-dropdown">
              <Link href="/services" className="nav-dropdown-trigger">
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
              <Link href="/case-studies" className="nav-dropdown-trigger">
                Case Studies <span className="dropdown-arrow">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="/case-studies">All Case Studies</Link>
                <Link href="/case-studies/personal-brands">Personal Brands</Link>
                <Link href="/case-studies/business-website">Business Website</Link>
                <Link href="/case-studies/ai-programs">AI Programs</Link>
              </div>
            </div>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact" className="btn-mint">Schedule A Consultation</Link>
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
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank">AI in Business Workshop</Link>
              <Link href="/services/your-first-ai-hire">Your First AI Hire</Link>
              <Link href="/services/ai-capabilities-audit">AI Capabilities Audit</Link>
              <Link href="/services/caio-leadership">CAIO Leadership</Link>
              <Link href="/services/global-staffing">Global Staffing</Link>
              <Link href="/services/training-certification">Training & Certification</Link>
            </div>
          )}
        </div>
        <div className="mobile-menu-section">
          <button className="mobile-menu-toggle" onClick={() => setServicesOpen(!servicesOpen)}>
            Case Studies <span>{servicesOpen ? '−' : '+'}</span>
          </button>
          {servicesOpen && (
            <div className="mobile-menu-sub">
              <Link href="/case-studies">All Case Studies</Link>
              <Link href="/case-studies/personal-brands">Personal Brands</Link>
              <Link href="/case-studies/business-website">Business Website</Link>
              <Link href="/case-studies/ai-programs">AI Programs</Link>
            </div>
          )}
        </div>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/#contact" className="btn-mint" onClick={closeMenu}>Schedule A Consultation</Link>
      </div>
    </>
  );
}
