import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'How It Works, Our 6-Step Process',
  description: 'UniHunt guides you in six steps: free consultation, personalised roadmap, applications and documents, exams and interviews, offer and visa, and arrival abroad.',
  alternates: { canonical: '/process' },
};

const steps = [
  ['01', 'Free consultation', 'We understand your profile, goals and the right destination for you.'],
  ['02', 'Your roadmap', 'A personalised plan covering course or role, timeline, costs and requirements.'],
  ['03', 'Applications & documents', 'We prepare and submit applications, documents and licensing paperwork.'],
  ['04', 'Exams & interviews', 'Preparation and support for eligibility exams and interviews.'],
  ['05', 'Offer & visa', 'Securing the offer or placement and completing visa formalities.'],
  ['06', 'Arrival abroad', 'Pre-departure guidance and support until you land and settle.'],
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Process', path: '/process' }])} />
      <PageHero eyebrow="How it works" title="A clear path from enquiry to arrival"
        intro="No guesswork. Every UniHunt journey follows the same accountable, transparent process." />
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
        <div className="mt-10"><Link href="/contact" className="btn-brand">Start step one</Link></div>
      </section>
    </>
  );
}
