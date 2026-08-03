import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import { IconChat, IconGlobe, IconPin } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contact UniHunt, Free Consultation',
  description: 'Get in touch with UniHunt for a free consultation on studying abroad or building a career in Dubai. Share your goal and an advisor will reach out.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <PageHero eyebrow="Contact" title="Let's plan your journey"
        intro="Tell us where you want to go. Your first consultation is free, with no obligation." />
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
              <div><h3 className="text-lg">Location</h3><p className="text-body">{site.address.city}, {site.address.region}</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
