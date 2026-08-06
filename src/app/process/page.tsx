import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'How It Works, Our Step-by-Step Process',
  description: 'UniHunt guides you step by step: free consultation, eligibility check, personalised roadmap, applications and documents, exams and interviews, offer and visa, and arrival abroad.',
  alternates: { canonical: '/process' },
};

const steps = [
  ['01', 'Free consultation', 'We understand your profile, goals and the right destination for you.'],
  ['02', 'Eligibility check', 'A fast read on where you qualify today and what is needed for your first-choice destination.'],
  ['03', 'Your roadmap', 'A personalised plan covering course or role, timeline, costs and requirements.'],
  ['04', 'Applications and documents', 'We prepare and submit applications, documents and licensing paperwork.'],
  ['05', 'Exams and interviews', 'Preparation and support for licensing exams and employer interviews.'],
  ['06', 'Offer and visa', 'Securing the offer or placement and completing visa formalities.'],
  ['07', 'Arrival abroad', 'Pre-departure guidance and support until you land and settle in.'],
];

const timelines = [
  ['Dubai healthcare track', '3 to 5 months'],
  ['Germany healthcare track', '6 to 9 months (includes B2 language milestone)'],
  ['UK study intake', '4 to 6 months'],
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Process', path: '/process' }])} />
      <PageHero eyebrow="How it works" title="A clear path from enquiry to arrival"
        intro="One advisor, one connected process, from your first call to the day you arrive. No guesswork, every UniHunt journey follows the same accountable, transparent steps." />

      <section className="container-page py-16">
        <ol className="relative space-y-6 border-l border-line pl-8">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">{n}</span>
                <div className="card">
                  <h2 className="text-xl">{t}</h2>
                  <p className="mt-2 text-body">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-14 rounded-2xl border border-line bg-canvas p-6">
            <h2 className="text-xl">Estimated timelines</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {timelines.map(([t, r]) => (
                <div key={t} className="rounded-xl border border-line bg-white p-4">
                  <p className="text-sm font-semibold text-brand-800">{t}</p>
                  <p className="mt-1 text-sm text-body">{r}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              These are ranges, not guarantees. Actual timelines depend on your documentation, exam scheduling, and employer or university response times.
            </p>
          </div>
        </Reveal>

        <div className="mt-10"><Link href="/contact" className="btn-brand">Start step one</Link></div>
      </section>
    </>
  );
}
