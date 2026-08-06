import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck, IconArrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Study in Australia, Universities and Work Rights',
  description:
    'Study in Australia with UniHunt: the Subclass 500 student visa, the Temporary Graduate visa pathway and strong post-study work rights, from course selection through to your first job search.',
  alternates: { canonical: '/destinations/australia' },
};

const facts = [
  'Work while studying: up to 48 hours a fortnight during the course, and unlimited during official breaks. Master\u2019s by Research and PhD students can work unlimited hours',
  'Post-study work, Subclass 485: 2 to 4 years of work rights, depending on the level of study completed',
  'English: IELTS 6.0 overall is currently the standard minimum for the student visa',
  'Earnings while working: a national minimum wage that is reviewed each year, with casual workers typically earning more through casual loading',
];

const programs = [
  'Business, Engineering, IT and Health Sciences, Australia\u2019s most in-demand fields for international students',
  'Postgraduate research pathways, Master\u2019s by Research and PhD, with unrestricted work rights while studying',
  'Vocational and diploma pathway programmes for students building toward a degree',
];

const steps = [
  ['Free consultation', 'Your profile, budget and target universities.'],
  ['University and course shortlisting', 'Matched to your goals and eligibility.'],
  ['Application and Genuine Student statement', 'Prepared with your supporting documentation.'],
  ['Offer and confirmation of enrolment', 'Securing your place and CoE.'],
  ['Visa filing', 'Financial evidence, OSHC health cover and submission.'],
  ['Arrival and settling in', 'Pre-departure briefing and on-ground support.'],
];

const faqs = [
  { q: 'How many hours can I work while studying in Australia?', a: 'Up to 48 hours a fortnight during your course, and unlimited during official breaks. Work-hour rules are subject to change under Australian immigration policy, so your advisor confirms the current cap.' },
  { q: 'What happens after I graduate in Australia?', a: 'You may be eligible for the Temporary Graduate visa, Subclass 485, giving 2 to 4 years of work rights depending on your qualification level.' },
  { q: 'What is the English requirement for an Australian student visa?', a: 'IELTS 6.0 overall is the current baseline for most student visa applicants. Requirements can vary by course and are confirmed during your consultation.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Study in Australia', path: '/destinations/australia' }]),
        faqSchema(faqs),
      ]} />

      <PageHero eyebrow="Study in Australia" title="Study in Australia: world-class universities, strong post-study work rights"
        intro="UniHunt helps you navigate Australia's Subclass 500 student visa and the Temporary Graduate visa pathway, from course selection through to your first job search." />

      <section className="container-page py-16">
        <Reveal>
          <div className="card">
            <h2 className="text-xl">Australia at a glance</h2>
            <ul className="mt-5 grid gap-2">
              {facts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-body">
                  <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Visa and work-hour regulations are subject to change under Australian immigration policy. Please confirm current rules with your advisor.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16">
        <Reveal>
          <p className="eyebrow">What we support</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Programmes we support</h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {programs.map((p) => (
            <li key={p} className="card flex items-start gap-2 text-sm text-body">
              <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-canvas">
        <div className="container-page py-16">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Your Australia study track</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 0.06}>
                <div className="card h-full">
                  <p className="text-sm font-semibold text-accent">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg">{t}</h3>
                  <p className="mt-2 text-sm text-body">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Study in Australia, answered</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.06}>
              <div className="card h-full">
                <h3 className="text-lg">{f.q}</h3>
                <p className="mt-2 text-sm text-body">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10">
            <Link href="/contact" className="btn-brand">Find out if you qualify <IconArrow width={18} height={18} /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
