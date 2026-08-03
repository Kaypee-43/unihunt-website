import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { IconArrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Destinations, Dubai, UK & Germany',
  description: 'UniHunt guides students and professionals to Dubai (primary), the United Kingdom and Germany, across both study pathways and overseas careers.',
  alternates: { canonical: '/destinations' },
};

const items = [
  { name: 'Dubai, UAE', role: 'Primary destination', copy: 'Study pathways plus high-demand healthcare careers, with strong on-ground support and licensing guidance (DHA/HAAD/MOH).' },
  { name: 'United Kingdom', role: 'Select programmes', copy: 'Undergraduate and postgraduate study routes at leading UK universities, with applications and visa support.' },
  { name: 'Germany', role: 'Select programmes', copy: 'Quality and affordable higher education for chosen fields, guided from application to arrival.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }])} />
      <PageHero eyebrow="Destinations" title="Where UniHunt can take you"
        intro="We stay focused so we stay excellent: Dubai first, with selected programmes in the UK and Germany." />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <div className="card card-hover h-full">
                <h2 className="text-2xl">{d.name}</h2>
                <p className="text-sm font-medium text-accent">{d.role}</p>
                <p className="mt-3 text-body">{d.copy}</p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-700 hover:gap-3 transition-all">
                  Enquire <IconArrow width={18} height={18} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
