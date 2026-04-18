'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

type OpenMenu = 'services' | 'cases' | null;

export default function Nav() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 60);
      if (y > 120) setHidden(y > lastScrollY.current);
      else setHidden(false);
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuOpen = useCallback((id: OpenMenu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(id);
  }, []);

  const menuClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }, []);

  function toggleMenu() {
    const m = mobileMenuRef.current, b = document.body;
    if (!m) return;
    if (b.classList.contains('menu-open')) {
      const sy = parseInt(b.style.top || '0', 10);
      b.classList.remove('menu-open'); b.style.top = '';
      window.scrollTo(0, -sy);
    } else {
      b.style.top = `-${window.scrollY}px`; b.classList.add('menu-open');
    }
    setMobileOpen(prev => !prev);
  }

  function closeMenu() {
    const m = mobileMenuRef.current, b = document.body;
    if (!m) return;
    const sy = parseInt(b.style.top || '0', 10);
    b.classList.remove('menu-open'); b.style.top = '';
    window.scrollTo(0, -sy);
    setMobileOpen(false);
  }

  useEffect(() => { return () => closeMenu(); }, []);

  const heroMode = isHomepage && atTop;

  const linkClass = (href: string) => {
    const active = href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/');
    return cn(
      'relative text-sm font-medium transition-colors duration-200',
      active
        ? 'font-semibold text-text-primary dark:font-semibold'
        : 'text-text-secondary hover:text-text-primary',
      heroMode && !active && 'text-text-inverse/80 hover:text-text-inverse',
      heroMode && active && 'text-text-inverse font-semibold',
    );
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          heroMode
            ? 'bg-neutral/40 backdrop-blur-md border-b border-white/10'
            : 'bg-surface-raised border-b border-border',
          hidden && '-translate-y-full',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 text-[22px] font-extrabold tracking-tight">
            <Image src="/images/edge8-logo-white.png" alt="Edge8" width={100} height={32} priority className={heroMode ? 'block' : 'hidden'} />
            <Image src="/images/edge8-logo-white.png" alt="Edge8" width={100} height={32} priority className={heroMode ? 'hidden' : 'block invert brightness-70'} />
          </Link>

          <div className="hidden md:flex items-center gap-9">
            <Link href="/" className={linkClass('/')}>Home</Link>

            <div
              className="relative"
              onMouseEnter={() => menuOpen('services')}
              onMouseLeave={menuClose}
            >
              <Link href="/services" className={cn('flex items-center gap-1 text-sm font-medium transition-colors', heroMode ? 'text-text-inverse/80 hover:text-text-inverse' : 'text-text-secondary hover:text-text-primary')}>
                Services <span className="text-xs">▾</span>
              </Link>
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-xl p-2 min-w-[220px] shadow-xl transition-all duration-200 z-10',
                  'bg-surface-raised border border-border',
                  openMenu === 'services' ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1',
                )}
                onMouseEnter={() => menuOpen('services')}
                onMouseLeave={menuClose}
              >
                <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">AI in Business Workshop</Link>
                <Link href="/services/your-first-ai-hire" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">Your First AI Hire</Link>
                <Link href="/services/ai-capabilities-audit" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">AI Capabilities Audit</Link>
                <Link href="/services/caio-leadership" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">CAIO Leadership</Link>
                <Link href="/services/global-staffing" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">Global Staffing</Link>
                <Link href="/services/training-and-certification" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">Training &amp; Certification</Link>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => menuOpen('cases')}
              onMouseLeave={menuClose}
            >
              <Link href="/case-studies" className={cn('flex items-center gap-1 text-sm font-medium transition-colors', heroMode ? 'text-text-inverse/80 hover:text-text-inverse' : 'text-text-secondary hover:text-text-primary')}>
                Case Studies <span className="text-xs">▾</span>
              </Link>
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-xl p-2 min-w-[220px] shadow-xl transition-all duration-200 z-10',
                  'bg-surface-raised border border-border',
                  openMenu === 'cases' ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1',
                )}
                onMouseEnter={() => menuOpen('cases')}
                onMouseLeave={menuClose}
              >
                <Link href="/case-studies" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">All Case Studies</Link>
                <Link href="/case-studies/personal-brands" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">Personal Brands</Link>
                <Link href="/case-studies/business-website" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">Business Website</Link>
                <Link href="/case-studies/ai-programs" className="block px-3.5 py-2.5 text-sm rounded-lg text-text-secondary hover:text-secondary hover:bg-secondary-50 transition-colors">AI Programs</Link>
              </div>
            </div>

            <Link href="/blog" className={linkClass('/blog')}>Blog</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>

            <ThemeToggle heroMode={heroMode} />
          </div>

          <button className="md:hidden flex flex-col justify-center items-center gap-1.5 w-7 h-5 bg-transparent border-none cursor-pointer z-[1001] relative" onClick={toggleMenu} aria-label="Menu">
            <span className={cn('block w-full h-0.5 rounded transition-all duration-300 origin-center', heroMode ? 'bg-text-inverse' : 'bg-text-primary', mobileOpen && 'rotate-45 translate-y-[9px]')} />
            <span className={cn('block w-full h-0.5 rounded transition-all duration-300', heroMode ? 'bg-text-inverse' : 'bg-text-primary', mobileOpen && 'opacity-0')} />
            <span className={cn('block w-full h-0.5 rounded transition-all duration-300 origin-center', heroMode ? 'bg-text-inverse' : 'bg-text-primary', mobileOpen && '-rotate-45 -translate-y-[9px]')} />
          </button>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300',
          mobileOpen && 'opacity-100 pointer-events-auto',
        )}
      >
        <div className="flex flex-col items-center gap-6">
          <button className="text-lg font-semibold text-text-primary" onClick={() => setServicesOpen(!servicesOpen)}>
            Services <span>{servicesOpen ? '−' : '+'}</span>
          </button>
          {servicesOpen && (
            <div className="flex flex-col items-center gap-4">
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" onClick={closeMenu} className="text-text-secondary">AI in Business Workshop</Link>
              <Link href="/services/your-first-ai-hire" onClick={closeMenu} className="text-text-secondary">Your First AI Hire</Link>
              <Link href="/services/ai-capabilities-audit" onClick={closeMenu} className="text-text-secondary">AI Capabilities Audit</Link>
              <Link href="/services/caio-leadership" onClick={closeMenu} className="text-text-secondary">CAIO Leadership</Link>
              <Link href="/services/global-staffing" onClick={closeMenu} className="text-text-secondary">Global Staffing</Link>
              <Link href="/services/training-and-certification" onClick={closeMenu} className="text-text-secondary">Training &amp; Certification</Link>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-6">
          <button className="text-lg font-semibold text-text-primary" onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}>
            Case Studies <span>{caseStudiesOpen ? '−' : '+'}</span>
          </button>
          {caseStudiesOpen && (
            <div className="flex flex-col items-center gap-4">
              <Link href="/case-studies" onClick={closeMenu} className="text-text-secondary">All Case Studies</Link>
              <Link href="/case-studies/personal-brands" onClick={closeMenu} className="text-text-secondary">Personal Brands</Link>
              <Link href="/case-studies/business-website" onClick={closeMenu} className="text-text-secondary">Business Website</Link>
              <Link href="/case-studies/ai-programs" onClick={closeMenu} className="text-text-secondary">AI Programs</Link>
            </div>
          )}
        </div>
        <Link href="/" onClick={closeMenu} className="text-lg font-semibold text-text-primary">Home</Link>
        <Link href="/blog" onClick={closeMenu} className="text-lg font-semibold text-text-primary">Blog</Link>
        <Link href="/about" onClick={closeMenu} className="text-lg font-semibold text-text-primary">About</Link>
      </div>
    </>
  );
}
