import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck, IconArrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Study in the UK, Degrees and Post-Study Work',
  description:
    'Study in the UK with UniHunt: undergraduate and postgraduate applications, visa filing and the post-study Graduate Route, guided end to end so you know exactly what you are signing up for.',
  alternates: { canonical: '/destinations/uk' },
};

const facts = [
  'Work while studying: up to 20 hours a week during term, full time during holidays',
  'Post-study Graduate Route: currently 2 years of work rights for Bachelor\u2019s and Master\u2019s graduates, and 3 years for PhD graduates, with no job offer or sponsorship required',
  'No restriction on which sectors you can work in part time, unlike some destinations',
  'Recognised qualifications: globally respected degrees from established universities',
];

const programs = [
  'Undergraduate and postgraduate degrees across Business, Engineering, Computing, Health Sciences and Social Sciences',
  'Postgraduate research pathways: MPhil and PhD',
  'Foundation and pre-master\u2019s programmes for students who need an academic bridge',
];

const steps = [
  ['Free consultation', 'Your profile, budget and target universities.'],
  ['University and course shortlisting', 'Matched to your goals and eligibility.'],
  ['Application, SOP and LOR support', 'Well-structured applications that present you at your best.'],
  ['Offer and CAS letter', 'Securing your offer and confirmation of studies.'],
  ['Visa filing', 'Financial evidence, documentation and submission.'],
  ['Pre-departure and arrival support', 'Briefings so you arrive prepared and confident.'],
];

const faqs = [
  { q: 'What is the Graduate Route visa?', a: 'A post-study work visa that lets you stay and work in the UK after your degree, with no job offer needed. Durations depend on your level of study.' },
  { q: 'How long can I work in the UK after graduating?', a: 'The Graduate Route currently offers 2 years for Bachelor\u2019s and Master\u2019s graduates and 3 years for PhD graduates. Post-study work durations are under active UK policy review, so your advisor will confirm the current entitlement and any application deadlines before you decide.' },
  { q: 'Can I work full time on a UK student visa?', a: 'No. Up to 20 hours a week during term time, and full time during official breaks.' },
  { q: 'What can I study in the UK through UniHunt?', a: 'Undergraduate and postgraduate degrees across Business, Engineering, Computing, Health Sciences and Social Sciences, plus research pathways and foundation programmes where you need an academic bridge.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Study in the UK', path: '/destinations/uk' }]),
        faqSchema(faqs),
      ]} />

      <PageHero eyebrow="Study in the UK" title="Study in the UK: respected degrees, real post-study work options"
        intro="UniHunt guides you through UK university applications, visa filing and the post-study Graduate Route, so you know exactly what you are signing up for, including the changes currently under review." />

      <section className="container-page py-16">
        <Reveal>
          <div className="card">
            <h2 className="text-xl">The UK at a glance</h2>
            <ul className="mt-5 grid gap-2">
              {facts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-body">
                  <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Visa and post-study work rules are subject to change under UK government policy and have been under active review. Please confirm the latest guidance with your advisor before making decisions based on timing.</p>
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
            <h2 className="mt-3 text-2xl sm:text-3xl">Your UK study track</h2>
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
          <h2 className="mt-3 text-2xl sm:text-3xl">Study in the UK, answered</h2>
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
