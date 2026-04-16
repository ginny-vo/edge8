import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Edge8</div>
            <p className="footer-tagline">Empowering organizations to become Tech-Forward through AI Programs, Global Talent, and AI Officer Leadership.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="https://www.ai-officer.com/ai-in-business-events" target="_blank">AI in Business Workshop</Link>
            <Link href="/services/your-first-ai-hire">Your First AI Hire</Link>
            <Link href="/services/ai-capabilities-audit">AI Capabilities Audit</Link>
            <Link href="/services/caio-leadership">CAIO Leadership</Link>
            <Link href="/services/global-staffing">Global Staffing</Link>
            <Link href="/services/training-certification">Training & Certification</Link>
          </div>
          <div className="footer-col">
            <h4>Case Studies</h4>
            <Link href="/case-studies">All Case Studies</Link>
            <Link href="/case-studies/personal-brands">Personal Brands</Link>
            <Link href="/case-studies/business-website">Business Website</Link>
            <Link href="/case-studies/ai-programs">AI Programs</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="mailto:hello@edge8.ai">hello@edge8.ai</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Edge8. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
