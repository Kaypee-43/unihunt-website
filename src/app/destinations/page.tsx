import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { IconCheck, IconArrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Destinations, Dubai, UK & Germany',
  description: 'UniHunt guides students and professionals to Dubai (primary), the United Kingdom and Germany, across both study pathways and overseas healthcare careers, with licensing, visa and placement support.',
  alternates: { canonical: '/destinations' },
};

const items = [
  {
    name: 'Dubai, UAE',
    tag: 'Primary destination',
    students: 'International branch campuses and local universities with strong industry links and proximity to home.',
    pros: 'Active hospital recruitment, tax-free income, and high demand for critical care specialties.',
    facts: [
      'Licensing: DHA, DOH, MOH',
      'Income: Tax-free',
      'Demand: High, especially ICU, NICU, ER and OT',
      'Indicative nurse salary (market data): AED 6,000 to 25,000 per month, varying by specialty and experience',
    ],
  },
  {
    name: 'Germany',
    tag: 'Growing pathway',
    students: 'Public universities with strength in engineering and the sciences, and low or no tuition on many programmes.',
    pros: 'A structural nursing shortage means active government support for international recruitment and a clear path to long-term residency.',
    facts: [
      'Licensing: Recognition process via state authorities',
      'Pathway: Skilled worker visa, route to permanent residency',
      'Requirement: German language, B2 minimum (employer-sponsored training often available)',
      'Indicative nurse salary (market data): EUR 2,800 to 4,200 gross per month, rising with specialization and experience',
    ],
  },
  {
    name: 'United Kingdom',
    tag: 'Select programmes',
    students: 'Established universities and globally recognised undergraduate and postgraduate degrees.',
    pros: 'NHS-linked roles with structured post-study work options.',
    facts: [
      'Licensing: NMC and HCPC guidance for healthcare roles',
      'Study: UG and PG programmes at established universities',
      'Route: Post-study work visa options',
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }])} />
      <PageHero eyebrow="Destinations" title="Choose your destination"
        intro="Where you go depends on your goal, your profession, and your timeline. Here is an honest read on each, for both students and healthcare professionals." />

      <section className="container-page py-16 space-y-8">
        {items.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.05}>
            <div className="card">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-2xl sm:text-3xl">{d.name}</h2>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{d.tag}</span>
              </div>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-accent">For students</p>
                  <p className="mt-1 text-body">{d.students}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent">For healthcare professionals</p>
                  <p className="mt-1 text-body">{d.pros}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {d.facts.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-body">
                    <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 transition-all hover:gap-3">
                Check your eligibility <IconArrow width={18} height={18} />
              </Link>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="rounded-xl border border-line bg-canvas p-4 text-xs text-muted">
            The salary figures shown are indicative market ranges drawn from public data as of [MONTH YEAR], not UniHunt placement data.
            Actual pay depends on employer, specialty, and experience, and market rates change. Verify current figures before relying on them.
          </p>
        </Reveal>
      </section>
    </>
  );
}
