import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ConsentBanner from '@/components/ConsentBanner';
import Analytics from '@/components/Analytics';
import JsonLd from '@/components/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'UniHunt | Study & Build Careers Abroad, Dubai, UK, Germany',
    template: '%s | UniHunt',
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'study abroad consultant', 'Dubai study abroad', 'study in UK', 'study in Germany',
    'DHA registration', 'nursing jobs Dubai', 'overseas education consultant', 'student visa help',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'UniHunt | Study & Build Careers Abroad',
    description: site.description,
    url: site.url,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniHunt | Study & Build Careers Abroad',
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Analytics />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ConsentBanner />
      </body>
    </html>
  );
}
