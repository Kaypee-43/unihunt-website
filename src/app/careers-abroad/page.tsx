import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Careers Abroad, Healthcare Licensing & Placement in Dubai',
  description: 'UniHunt helps healthcare professionals build careers in Dubai: DHA, HAAD and MOH licensing, exam preparation, Dataflow and document processing, interview support and hospital placement.',
  alternates: { canonical: '/careers-abroad' },
};

const offer = [
  ['DHA / HAAD / MOH licensing', 'Guidance through the right licensing pathway for your profile.'],
  ['Eligibility & Dataflow', 'Assessment and support for verification and eligibility.'],
  ['Exam preparation', 'Structured preparation for licensing examinations.'],
  ['Document processing', 'Accurate preparation and handling of your paperwork.'],
  ['Interview support', 'Preparation to help you perform with confidence.'],
  ['Placement & visa', 'Connecting you to opportunities, through to visa and travel.'],
];

const faqs = [
  { q: 'Who is the Careers Abroad track for?', a: 'It is primarily for healthcare professionals, including nurses, doctors, dentists and pharmacists, seeking to work in Dubai.' },
  { q: 'What is DHA registration?', a: 'DHA registration is the licensing process required for healthcare professionals to practise legally in Dubai. UniHunt guides you through eligibility, documentation and the exam.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'Overseas Career & Healthcare Licensing', description: metadata.description as string, path: '/careers-abroad' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Careers Abroad', path: '/careers-abroad' }]),
        faqSchema(faqs),
      ]} />
      <PageHero eyebrow="For professionals" title="Build your career in Dubai"
        intro="Licensing, preparation and placement for healthcare professionals. UniHunt handles the process so you can focus on your career." />
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
            <p className="mt-8 text-sm text-muted">Role-specific pages (nursing, doctors, dentists, pharmacists) are being added next. Meanwhile, share your profile and we will advise directly.</p>
          </div>
          <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="text-xl">Check your eligibility</h2>
            <p className="mt-1 text-sm text-muted">Free first consultation.</p>
            <div className="mt-5"><LeadForm compact /></div>
          </aside>
        </div>
      </section>
    </>
  );
}
