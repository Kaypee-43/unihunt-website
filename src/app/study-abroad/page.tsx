import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Study Abroad, UK, Germany & UAE Admissions Support',
  description: 'UniHunt guides students through studying abroad: course and university selection, applications, SOP and LOR support, scholarships, visa and pre-departure, for the UK, Germany and UAE.',
  alternates: { canonical: '/study-abroad' },
};

const offer = [
  ['Course & university shortlisting', 'Matched to your goals, budget and eligibility.'],
  ['Applications, SOP & LOR', 'Well-structured applications that present you at your best.'],
  ['Scholarships & funding guidance', 'Identify options you may qualify for.'],
  ['Visa & documentation', 'Accurate filing and preparation, start to finish.'],
  ['Pre-departure support', 'Briefings so you arrive prepared and confident.'],
  ['Ongoing advisor access', 'One point of contact through the whole journey.'],
];

const faqs = [
  { q: 'Which study destinations does UniHunt cover?', a: 'UniHunt supports studying in the UAE, and selected programmes in the United Kingdom and Germany.' },
  { q: 'Do you help with scholarships?', a: 'Yes. We help identify scholarship and funding options you may be eligible for as part of your application plan.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'Study Abroad Consulting', description: metadata.description as string, path: '/study-abroad' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Study Abroad', path: '/study-abroad' }]),
        faqSchema(faqs),
      ]} />
      <PageHero eyebrow="For students" title="Study abroad, guided end to end"
        intro="From choosing the right course to landing on campus, UniHunt is your single accountable partner for studying in the UAE, UK and Germany." />
      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl">What is included</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {offer.map(([t, d], i) => (
                <Reveal key={t} delay={(i % 2) * 0.06}>
                  <div className="card h-full">
                    <IconCheck className="text-accent" />
                    <h3 className="mt-3 text-lg">{t}</h3>
                    <p className="mt-1 text-sm text-body">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">Detailed programme and destination pages are being added next. For now, tell us your goal and we will guide you directly.</p>
          </div>
          <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="text-xl">Talk to an advisor</h2>
            <p className="mt-1 text-sm text-muted">Free first consultation.</p>
            <div className="mt-5"><LeadForm compact /></div>
          </aside>
        </div>
      </section>
    </>
  );
}
