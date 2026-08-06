import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { IconCheck, IconArrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Study in Dubai, Recognised International Degrees',
  description:
    'Study in Dubai with UniHunt: UK, US, Indian and Australian degrees taught on Dubai campuses, at lower cost. Partner universities, scholarships, visa and placement support, end to end.',
  alternates: { canonical: '/destinations/dubai' },
};

const facts = [
  'Visa processing: typically 10 to 20 days',
  'English: IELTS often waived where a Medium of Instruction certificate applies',
  'Work while studying: up to 20 hours a week',
  'Internships: paid internships from the first semester at several partner universities',
  'Study cost: broadly 10 to 30 lakh rupees a year, depending on programme and university',
];

const partners = [
  {
    name: 'Manipal Academy of Higher Education Dubai',
    copy: 'In Dubai since 2000, licensed by MoHESR and accredited by CAA. Scholarships of up to 50%, students from 40-plus nationalities, and strong internship and placement support across Business, Engineering, IT, Design, Media and Life Sciences at UG, PG and doctoral levels.',
  },
  {
    name: 'Middlesex University Dubai',
    copy: 'The same UK-recognised degree awarded at Middlesex University London. The largest UK university in Dubai by enrolment, with more than 7,000 students from over 120 nationalities. Licensed by KHDA and MoHESR, with multiple intakes through the year, including MBA.',
  },
  {
    name: 'Hult International Business School Dubai',
    copy: 'A global business school with campuses in Dubai, London and Boston, known for its intensive one-year Global MBA. Based in Dubai Internet City, with employer networking built into the programme. CAA-accredited.',
  },
  {
    name: 'Symbiosis International University Dubai',
    copy: 'Symbiosis\u2019s first overseas campus, carrying over 50 years of academic legacy from India. Licensed by MoHESR and accredited by CAA and KHDA. Offers Business, MBA, Computer Science, AI, Data Analytics and Engineering, popular with students seeking international exposure at an accessible cost.',
  },
  {
    name: 'SP Jain School of Global Management Dubai',
    copy: 'Study across Dubai, Singapore, Sydney and London depending on your programme, with genuine multi-city exposure. A specialist business school where many programmes lead to an Australian-accredited qualification. Based in Dubai International Academic City.',
  },
  {
    name: 'De Montfort University Dubai',
    copy: 'A UK-recognised degree from a 150-year-old British institution, with a strong employability focus and real industry projects across Business, Computing, Cyber Security, Psychology, Architecture, Design, Engineering and Law. Transfer to the Leicester campus is possible.',
  },
  {
    name: 'University of Bolton Dubai (Ras Al Khaimah)',
    copy: 'A UK degree at notably lower cost than studying in the UK. One of the earliest British universities in the Northern Emirates, established in 2008, with 125-plus regional employer connections across Engineering, Business, Computing, Psychology, Law and Accountancy, linked to bodies such as ACCA and IEEE.',
  },
];

const steps = [
  ['Free consultation', 'Your goals, budget and academic profile.'],
  ['University shortlisting', 'Matched from our partner network above.'],
  ['Application and documentation', 'We handle submission and follow-ups.'],
  ['Offer and scholarship', 'Your offer letter and any scholarship confirmation.'],
  ['Visa filing', 'Fast Dubai visa processing, typically 10 to 20 days.'],
  ['Arrival and settling in', 'Pre-departure briefing and on-ground support.'],
];

const faqs = [
  { q: 'Do I need IELTS to study in Dubai?', a: 'Not always. Many Dubai universities accept a Medium of Instruction certificate instead. Your advisor confirms what your chosen programme requires.' },
  { q: 'Can I work while studying in Dubai?', a: 'Yes, students can typically work up to 20 hours a week, subject to current UAE regulations.' },
  { q: 'Are scholarships available at Dubai universities?', a: 'Yes. Manipal Academy of Higher Education Dubai, for example, offers up to 50%, and other partner universities offer scholarships depending on your profile.' },
  { q: 'How is a Dubai degree different from studying in the UK, US or Australia directly?', a: 'Several partner universities, including Middlesex, Hult, SP Jain, De Montfort and Bolton, award the same UK or Australian-recognised degree taught on a Dubai campus. The same qualification, generally at lower cost.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Study in Dubai', path: '/destinations/dubai' }]),
        faqSchema(faqs),
      ]} />

      <PageHero eyebrow="Study in Dubai" title="Study in Dubai: recognised degrees, faster and more affordable"
        intro="UniHunt gives you direct access to top international university campuses in Dubai, offering UK, US, Indian and Australian degrees in one of the world's fastest-growing education and career hubs." />

      <section className="container-page py-16">
        <Reveal>
          <div className="card">
            <h2 className="text-xl">Dubai at a glance</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {facts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-body">
                  <IconCheck className="mt-0.5 shrink-0 text-accent" width={18} height={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Visa timelines and study costs are indicative, subject to change under current UAE guidelines, and confirmed by your advisor during consultation.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Partner universities</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Our partner universities in Dubai</h2>
            <p className="mt-4 text-body">International campuses awarding globally recognised degrees, matched to your profile and budget.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06}>
              <div className="card card-hover h-full">
                <h3 className="text-xl">{p.name}</h3>
                <p className="mt-3 text-sm text-body">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-brand">Find out which university fits you <IconArrow width={18} height={18} /></Link>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-canvas">
        <div className="container-page py-16">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Your Dubai study track</h2>
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
          <h2 className="mt-3 text-2xl sm:text-3xl">Study in Dubai, answered</h2>
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
