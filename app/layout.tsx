import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://edge8.vercel.app'),
  title: { default: 'Edge8 — Be Tech-Forward | AI Programs & Consulting', template: '%s — Edge8' },
  description: 'Edge8 helps organizations become Tech-Forward through AI Programs, Global Talent Staffing, and AI Officer Leadership. Stop overthinking AI — Start implementing.',
  openGraph: {
    siteName: 'Edge8',
    images: [{ url: '/images/og-default.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        <div className="body-lines">
          <div className="body-line left"></div>
          <div className="body-line left-middle"></div>
          <div className="body-line center"></div>
          <div className="body-line right-middle"></div>
          <div className="body-line right"></div>
        </div>
        <Nav />
        <div id="layout-content" style={{ paddingTop: '72px' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
