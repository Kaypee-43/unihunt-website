import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck, IconArrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Study in Germany, Low-Cost Degrees and Residency',
  description:
    'Study in Germany with UniHunt: low or no-tuition public universities, the post-study job-seeker visa and a real route to residency, with support through the language milestone most agencies gloss over.',
  alternates: { canonical: '/destinations/germany' },
};

const facts = [
  'Tuition: many public universities charge little to no tuition, aside from a modest per-semester administrative fee',
  'Work while studying: up to 140 full days or 280 half days a year without a separate work permit, roughly 20 hours a week on average, full time during semester breaks',
  'Post-study: an 18-month job-seeker visa after graduation, with unrestricted work rights during that window',
  'Path to residency: many graduates move from student status to an EU Blue Card once they secure a qualifying job offer',
  'Language: B2 German is typically required for the job-seeker and employment stage, even when the degree itself is taught in English',
];

const programs = [
  'Engineering, IT and Applied Sciences, Germany\u2019s strongest-demand fields',
  'Business and Management programmes at public and private universities',
  'English-taught Master\u2019s programmes designed for international students',
];

const steps = [
  ['Free consultation', 'Your profile, budget and target programmes.'],
  ['University and course shortlisting', 'Matched to your goals and eligibility.'],
  ['Application and documents', 'Including the APS certificate where required.'],
  ['German language milestone', 'B2 preparation guidance, where relevant.'],
  ['Visa filing', 'Blocked account, financial proof and submission.'],
  ['Arrival and settling in', 'Pre-departure briefing and on-ground support.'],
];

const faqs = [
  { q: 'Do I need German to study in Germany?', a: 'Not necessarily for an English-taught programme, but B2 German is generally needed to work and stay long term. We support you through that language milestone.' },
  { q: 'How long can I job-hunt after graduating in Germany?', a: 'Up to 18 months on the post-study job-seeker visa, with unrestricted work rights during that window. Timelines are subject to current German immigration policy.' },
  { q: 'How many hours can I work while studying in Germany?', a: 'Roughly 20 hours a week on average, based on 140 full days or 280 half days a year, and full time during semester breaks.' },
  { q: 'Is studying in Germany really low cost?', a: 'Many public universities charge little to no tuition, only a modest per-semester administrative fee. You still need to show living costs through a blocked account for your visa.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Study in Germany', path: '/destinations/germany' }]),
        faqSchema(faqs),
      ]} />

      <PageHero eyebrow="Study in Germany" title="Study in Germany: low-cost degrees and a real path to residency"
        intro="From university shortlisting to the job-seeker visa after graduation, UniHunt supports your entire Germany journey, including the language milestone many agencies gloss over." />

      <section className="container-page py-16">
        <Reveal>
          <div className="card">
            <h2 className="text-xl">Germany at a glance</h2>
            <ul className="mt-5 grid gap-2">
              {facts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-body">
                  <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Work rights and visa rules are subject to change under German immigration policy. Please confirm current regulations with your advisor.</p>
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
            <h2 className="mt-3 text-2xl sm:text-3xl">Your Germany study track</h2>
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
          <h2 className="mt-3 text-2xl sm:text-3xl">Study in Germany, answered</h2>
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
