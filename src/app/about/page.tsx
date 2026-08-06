import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';
import { IconShield, IconChat, IconCheck, IconGlobe } from '@/components/Icons';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About UniHunt',
  description: 'UniHunt helps students study abroad and healthcare professionals build careers abroad, with one accountable advisor guiding every step. Dubai-first, with select UK and Germany programmes.',
  alternates: { canonical: '/about' },
};

const values = [
  { icon: IconShield, t: 'Transparency', d: 'Clear steps, honest timelines, and no inflated claims.' },
  { icon: IconChat, t: 'One dedicated advisor', d: 'A single point of contact who knows your file personally, from first call to arrival.' },
  { icon: IconCheck, t: 'Assessed individually', d: 'Every profile is reviewed on its own merits, not run through a generic checklist.' },
  { icon: IconGlobe, t: 'Support to arrival', d: 'Documentation, licensing, visa, and settling in, all under one roof.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]} />
      <PageHero eyebrow="About us" title="One team for both journeys abroad"
        intro="UniHunt helps students study abroad and healthcare professionals build careers abroad, Dubai-first, with select programmes in the UK and Germany, with the same honesty and a single point of accountability." />

      <section className="container-page py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Why one team for both</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Admissions and licensing, guided by the same standard</h2>
            <p className="mt-4 text-body">
              Most consultancies specialise in either student admissions or professional licensing, which leaves people with mixed goals
              stitching together two or three agencies. UniHunt runs both tracks under one roof, so a family weighing a degree abroad and a
              healthcare career abroad gets one consistent standard of advice, not two disconnected ones.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal><h2 className="text-2xl sm:text-3xl">What we stand for</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 4) * 0.06}>
                <div className="card h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><v.icon /></div>
                  <h3 className="mt-4 text-lg">{v.t}</h3>
                  <p className="mt-2 text-sm text-body">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl border border-line bg-canvas p-6">
            <h2 className="text-xl">Backed by {site.parent}</h2>
            <p className="mt-2 text-body">
              UniHunt is a venture supported by {site.parent}, a higher education consultancy that works with universities and institutions across India.
              That institutional grounding informs how we guide individual students and professionals abroad.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6">
            <p className="text-sm font-semibold text-brand-800">Placeholder, replace before launch</p>
            <p className="mt-2 text-sm text-body">
              Add the founding team, real credentials, years of experience and any partner or affiliation details here.
              Named people with visible expertise strengthen trust with families and professionals, and improve how
              search and AI answer engines assess the brand.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
