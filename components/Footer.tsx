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
            <Link href="/#services">AI Programs</Link>
            <Link href="/#services">Global Talent</Link>
            <Link href="/#services">Workshops</Link>
            <Link href="/#services">AI Branding</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/#about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
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
