import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';
import { IconShield, IconChat, IconGlobe } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About UniHunt',
  description: 'UniHunt helps students study abroad and professionals build careers abroad, with one accountable advisor guiding every step. Dubai-first, with select UK and Germany programmes.',
  alternates: { canonical: '/about' },
};

const values = [
  { icon: IconShield, t: 'Honest guidance', d: 'Practical, realistic advice. We tell you what will actually help.' },
  { icon: IconChat, t: 'One accountable advisor', d: 'A single point of contact who owns your journey end to end.' },
  { icon: IconGlobe, t: 'Focused expertise', d: 'Dubai-first, plus select UK and Germany routes we know well.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]} />
      <PageHero eyebrow="About us" title="Your partner from first enquiry to arrival abroad"
        intro="UniHunt exists to make studying and working abroad simpler, clearer and more accountable for students and professionals." />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><v.icon /></div>
                <h2 className="mt-4 text-lg">{v.t}</h2>
                <p className="mt-2 text-sm text-body">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6">
            <p className="text-sm font-semibold text-brand-800">Placeholder, replace before launch</p>
            <p className="mt-2 text-sm text-body">
              Add the founding team, real credentials, years of experience and any partner/affiliation details here.
              Named people with visible expertise strengthen trust with families and professionals, and improve how
              search and AI answer engines assess the brand.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
