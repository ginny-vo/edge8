import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-surface-inverse text-text-inverse pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <div className="mb-3">
              <Image src="/images/edge8-logo-white.png" alt="Edge8" width={100} height={32} />
            </div>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Empowering organizations to become Tech-Forward through AI Programs, Global Talent, and AI Officer Leadership.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">AI in Business Workshop</Link>
              <Link href="/services/your-first-ai-hire" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">Your First AI Hire</Link>
              <Link href="/services/ai-capabilities-audit" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">AI Capabilities Audit</Link>
              <Link href="/services/caio-leadership" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">CAIO Leadership</Link>
              <Link href="/services/global-staffing" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">Global Staffing</Link>
              <Link href="/services/training-and-certification" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">Training & Certification</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Case Studies</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/case-studies" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">All Case Studies</Link>
              <Link href="/case-studies/personal-brands" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">Personal Brands</Link>
              <Link href="/case-studies/business-website" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">Business Website</Link>
              <Link href="/case-studies/ai-programs" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">AI Programs</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@edge8.ai" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">hello@edge8.ai</a>
              <a href="#" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-text-tertiary hover:text-text-inverse transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border-subtle pt-6">
          <p className="text-xs text-text-tertiary">© 2025 Edge8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
