import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Careers Abroad, Healthcare Licensing & Placement in Dubai',
  description: 'UniHunt helps healthcare professionals build careers abroad: DHA, DOH and MOH licensing, DataFlow verification, Prometric and OET exam prep, interviews and hospital placement in Dubai, Germany and the UK.',
  alternates: { canonical: '/careers-abroad' },
};

const roles = [
  'Nurses (ICU, NICU, ER, OT, general ward)',
  'Doctors and specialists',
  'Dentists and dental assistants',
  'Pharmacists',
  'Physiotherapists',
  'Lab technicians and radiographers',
];

const pathways = [
  ['Dubai and UAE', 'DHA (Dubai), DOH (Abu Dhabi) and MOH registration, DataFlow primary source verification, and Prometric exams.'],
  ['Germany', 'Recognition of qualifications through state authorities, B2 German language requirement, and the skilled worker visa route to long-term residency.'],
  ['United Kingdom', 'NMC guidance for nursing and HCPC guidance for allied health roles, along with English language testing (OET or IELTS).'],
];

const offer = [
  ['Licensing guidance and registration', 'The right pathway for your profession and destination.'],
  ['DataFlow verification', 'Primary source verification of your credentials.'],
  ['Exam preparation', 'Structured prep for Prometric, OET and IELTS.'],
  ['Document processing', 'Accurate preparation and handling of your paperwork.'],
  ['Interview preparation', 'Get ready to perform with confidence.'],
  ['Placement, visa and arrival', 'Verified opportunities through to visa and pre-departure.'],
];

const faqs = [
  { q: 'How long does DHA licensing typically take?', a: 'Timelines vary by profile, but the process generally includes DataFlow verification, exam registration, and license issuance. Your advisor will give you a specific estimate based on your documents.' },
  { q: 'Can I apply without IELTS or OET?', a: 'It depends on the destination and role. Some Dubai healthcare positions do not require it, while UK roles and some hospitals do. We confirm what your specific pathway needs.' },
  { q: 'What healthcare roles does UniHunt support?', a: 'Nurses, doctors, dentists and pharmacists, plus allied health roles, seeking licensing and employment abroad, including DHA, DOH and MOH registration, exam prep, document processing, and placement.' },
  { q: 'What can I expect to earn as a nurse in Dubai versus Germany?', a: 'As an indicative market guide, Dubai nurse salaries are tax-free and generally range AED 6,000 to 25,000 per month depending on specialty and experience. Germany nurse salaries run roughly EUR 2,800 to 4,200 gross per month, with a clearer path to long-term residency. These are indicative market ranges, not UniHunt placement data.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'Overseas Career & Healthcare Licensing', description: metadata.description as string, path: '/careers-abroad' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Careers Abroad', path: '/careers-abroad' }]),
        faqSchema(faqs),
      ]} />
      <PageHero eyebrow="For healthcare professionals" title="Licensed, placed, and supported to arrival"
        intro="For nurses, doctors, dentists, pharmacists and allied health professionals moving into the Dubai, Germany and UK healthcare systems. We handle licensing, exams, documentation, interviews, and placement." />

      <section className="container-page py-16">
        <Reveal>
          <p className="eyebrow">Who this is for</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Built around your profession</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r} delay={(i % 3) * 0.06}>
              <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <IconCheck className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-body">{r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Licensing pathways</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">One team that speaks every regulator's language</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pathways.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="card h-full">
                  <h3 className="text-xl">{t}</h3>
                  <p className="mt-2 text-body">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl">What we handle</h2>
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

      <section className="bg-canvas py-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Careers abroad questions, answered</h2>
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
        </div>
      </section>
    </>
  );
}
