import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Study Abroad, UAE, UK, Germany & Australia',
  description: 'UniHunt guides students through studying abroad: course and university selection, applications, SOP and LOR support, scholarships, visa and pre-departure, for the UAE, UK, Germany and Australia.',
  alternates: { canonical: '/study-abroad' },
};

const places = [
  ['United Kingdom', 'Established universities, globally recognised UG and PG degrees, and post-study work visa options.'],
  ['Dubai, UAE', 'International branch campuses and local universities, strong industry links, and proximity to home.'],
  ['Germany', 'Public universities with low or no tuition on many programmes, strength in engineering and the sciences, and English-taught or German-taught options depending on the course.'],
  ['Australia', 'World-class universities, up to 48 hours a fortnight of work while studying, and 2 to 4 years of post-study work rights on the Temporary Graduate visa.'],
];

const offer = [
  ['Course and university shortlisting', 'Matched to your profile, budget and eligibility.'],
  ['Applications, SOP and LOR', 'Well-structured applications that present you at your best.'],
  ['Scholarships and funding', 'We identify options you may qualify for and support the applications.'],
  ['Visa and documentation', 'Accurate filing and preparation, start to finish.'],
  ['Pre-departure support', 'Briefings so you arrive prepared and confident.'],
  ['One dedicated advisor', 'A single point of contact through the whole journey.'],
];

const faqs = [
  { q: 'Which countries can I study in through UniHunt?', a: 'Dubai, the UK, Germany, and Australia, across undergraduate and postgraduate programmes. Your advisor matches destinations to your course, budget and profile.' },
  { q: 'Do I need IELTS or OET to study abroad?', a: 'It depends on the country and university. UK programmes usually require IELTS. Some Dubai and Germany routes have different requirements, and Australia typically requires IELTS 6.0. We confirm exactly what your chosen pathway needs.' },
  { q: 'Can you help with scholarships?', a: 'Yes. We identify scholarships you are eligible for and support the applications alongside your admission.' },
  { q: 'How long does a study intake usually take?', a: 'A UK study intake typically runs 4 to 6 months from first consultation to visa, depending on the intake calendar and your documentation. This is a range, not a fixed promise.' },
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
        intro="From choosing the right course to landing on campus, one advisor stays with you through shortlisting, applications, scholarships, visa, and pre-departure, for the UAE, UK, Germany and Australia." />

      <section className="container-page py-16">
        <Reveal>
          <p className="eyebrow">Where you can study</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Destinations matched to your goal</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {places.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="card h-full">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-body">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
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
          </div>
          <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="text-xl">Check your eligibility</h2>
            <p className="mt-1 text-sm text-muted">Free first consultation, no obligation.</p>
            <div className="mt-5"><LeadForm compact /></div>
          </aside>
        </div>
      </section>

      <section className="container-page py-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Study abroad questions, answered</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.06}>
              <div className="card h-full">
                <h3 className="text-lg">{f.q}</h3>
                <p className="mt-2 text-sm text-body">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
