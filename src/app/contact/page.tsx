import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import { IconChat, IconGlobe, IconPin, IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contact UniHunt, Free Consultation',
  description: 'Get in touch with UniHunt for a free consultation on studying abroad or building a healthcare career in Dubai. Share your goal and an advisor will map out your next steps.',
  alternates: { canonical: '/contact' },
};

const next = [
  'We review your details',
  'An advisor contacts you',
  'You get a clear, free read on your options',
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <PageHero eyebrow="Contact" title="Let us map out your next step"
        intro="Book a free consultation or send us a message. An advisor will get back to you and walk you through where you stand and what comes next." />
      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl">Send an enquiry</h2>
            <div className="mt-6"><LeadForm /></div>
          </div>
          <div className="space-y-4">
            <div className="card flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><IconGlobe /></span>
              <div><h3 className="text-lg">Email</h3><a className="text-body hover:text-brand-700" href={`mailto:${site.email}`}>{site.email}</a><p className="mt-1 text-xs text-muted">Placeholder, confirm before launch.</p></div>
            </div>
            <div className="card flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"><IconChat /></span>
              <div><h3 className="text-lg">WhatsApp</h3><p className="text-body">Use the WhatsApp button on any page.</p><p className="mt-1 text-xs text-muted">Placeholder number, swap in site config.</p></div>
            </div>
            <div className="card flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><IconPin /></span>
              <div>
                <h3 className="text-lg">Office</h3>
                <p className="text-body">{site.address.line1}, {site.address.area}</p>
                <p className="text-body">{site.address.city}, {site.address.region} {site.address.postalCode}</p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg">What happens next</h3>
              <ul className="mt-3 space-y-2">
                {next.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-body">
                    <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
