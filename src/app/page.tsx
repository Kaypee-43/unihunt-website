import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { demoContent } from '@/lib/site';
import { serviceSchema, faqSchema } from '@/lib/schema';
import {
  IconCap, IconStethoscope, IconGlobe, IconDoc, IconArrow, IconPin,
  IconSpark, IconShield, IconCheck, IconChat,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'UniHunt | Study & Build Careers Abroad, Dubai, UK, Germany',
  description:
    'UniHunt helps students study abroad and professionals build careers abroad. Dubai-first, with select UK and Germany programmes, admissions, licensing, placement and visa support, guided end to end.',
  alternates: { canonical: '/' },
};

const tracks = [
  {
    icon: IconCap,
    tag: 'For students',
    title: 'Study Abroad',
    copy: 'From choosing the right course and university to applications, scholarships, visa and pre-departure, one advisor with you the whole way.',
    points: ['University & course shortlisting', 'Applications, SOP & LOR support', 'Visa & pre-departure guidance'],
    href: '/study-abroad',
  },
  {
    icon: IconStethoscope,
    tag: 'For professionals',
    title: 'Careers Abroad',
    copy: 'Licensing and placement for healthcare professionals in Dubai, DHA, HAAD and MOH, exam prep, document processing, interviews and job placement.',
    points: ['DHA / HAAD / MOH licensing', 'Exam prep & Dataflow support', 'Interview & hospital placement'],
    href: '/careers-abroad',
  },
];

const destinations = [
  { name: 'Dubai, UAE', role: 'Select programmes', copy: 'Study pathways and high-demand healthcare careers, with strong on-ground support.' },
  { name: 'United Kingdom', role: 'Select programmes', copy: 'Undergraduate and postgraduate routes at leading UK universities.' },
  { name: 'Germany', role: 'Select programmes', copy: 'Quality, affordable higher education for chosen fields of study.' },
];

const services = [
  { icon: IconChat, title: 'Career counselling', copy: 'A clear roadmap based on your qualification, goals and target country.' },
  { icon: IconDoc, title: 'Applications & documents', copy: 'University applications, SOP, LOR and accurate document processing.' },
  { icon: IconShield, title: 'Licensing support', copy: 'DHA, HAAD and MOH registration guidance for medical professionals.' },
  { icon: IconSpark, title: 'Exam preparation', copy: 'Structured preparation for licensing and eligibility examinations.' },
  { icon: IconGlobe, title: 'Visa & travel', copy: 'Visa filing, pre-departure briefing and travel assistance to arrival.' },
  { icon: IconPin, title: 'Placement', copy: 'Connecting professionals with verified opportunities in Dubai.' },
];

const steps = [
  { n: '01', title: 'Free consultation', copy: 'We understand your profile, goals and the right destination for you.' },
  { n: '02', title: 'Eligibility check', copy: 'A fast read on where you qualify today and what your first-choice destination needs.' },
  { n: '03', title: 'Your roadmap', copy: 'A personalised plan: course or role, timeline, costs and requirements.' },
  { n: '04', title: 'Applications & documents', copy: 'We prepare and submit applications, documents and licensing paperwork.' },
  { n: '05', title: 'Exams & interviews', copy: 'Preparation and support for eligibility exams and interviews.' },
  { n: '06', title: 'Offer & visa', copy: 'Securing the offer or placement and completing visa formalities.' },
  { n: '07', title: 'Arrival abroad', copy: 'Pre-departure guidance and support until you land and settle.' },
];

const faqs = [
  { q: 'Which countries does UniHunt help with?', a: 'UniHunt focuses primarily on Dubai in the UAE, and also supports selected programmes in the United Kingdom and Germany. Dubai covers both study pathways and healthcare careers, while the UK and Germany are offered for chosen fields of study.' },
  { q: 'Does UniHunt help students or working professionals?', a: 'Both. The Study Abroad track guides students through admissions and visas, while the Careers Abroad track helps working professionals, mainly in healthcare, with licensing and job placement in Dubai.' },
  { q: 'What healthcare roles does UniHunt support for Dubai?', a: 'UniHunt supports nurses, doctors, dentists and pharmacists seeking careers in Dubai, including DHA, HAAD and MOH licensing, examination preparation, document processing, interviews and placement.' },
  { q: 'Is the first consultation free?', a: 'Yes. Your first consultation and enquiry are free. An advisor reviews your profile and outlines the right path before you commit to anything.' },
  { q: 'Does UniHunt help with the visa process?', a: 'Yes. Visa guidance and pre-departure support are part of both tracks, so your documentation and travel are handled through to arrival.' },
];

function DemoTag() {
  return (
    <span className="inline-flex items-center rounded-full bg-spark-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
      Demo content
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: 'Study Abroad Consulting', description: 'University selection, applications, scholarships, visa and pre-departure support for the UK, Germany and UAE.', path: '/study-abroad' }),
          serviceSchema({ name: 'Overseas Career & Licensing', description: 'Healthcare licensing (DHA/HAAD/MOH), exam preparation, interviews and job placement in Dubai.', path: '/careers-abroad' }),
          faqSchema(faqs),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-night">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/unihunt-hero-poster.jpg)' }} aria-hidden="true" />
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/unihunt-hero-poster.jpg"
        >
          <source src="/unihunt-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-night/45 sm:bg-gradient-to-r sm:from-night/70 sm:via-night/25 sm:to-transparent" aria-hidden="true" />
        <div className="container-page relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl [text-shadow:0_2px_18px_rgba(10,8,20,0.6)]">
            <Reveal>
              <p className="eyebrow text-brand-300"><IconPin width={16} height={16} /> Dubai · UK · Germany</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Find your future <span className="text-gradient-night">abroad</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Whether you want to study overseas or build a career abroad, UniHunt guides you
                end to end, admissions, licensing, placement and visa. One team, all the way to arrival.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/study-abroad" className="btn-brand">Study abroad <IconArrow width={18} height={18} /></Link>
                <Link href="/careers-abroad" className="btn-ghost !bg-transparent !border-white/25 !text-white hover:!bg-white/10 hover:!border-white/40">Careers abroad</Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                {['Free first consultation', 'One dedicated advisor', 'End-to-end support'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent"><IconCheck width={14} height={14} /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Two tracks, one team</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Where do you want to go?</h2>
            <p className="mt-4 text-body">Pick the path that fits you. Not sure yet? Start a conversation and we will help you decide.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="card card-hover h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><t.icon /></div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">{t.tag}</p>
                <h3 className="mt-1 text-2xl">{t.title}</h3>
                <p className="mt-3 text-body">{t.copy}</p>
                <ul className="mt-5 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-body">
                      <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-accent" />{p}
                    </li>
                  ))}
                </ul>
                <Link href={t.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 hover:gap-3 transition-all">
                  Explore {t.title} <IconArrow width={18} height={18} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-canvas py-20">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Destinations</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Dubai-first, with the UK and Germany</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <div className={`card card-hover h-full ${d.primary ? 'ring-2 ring-brand-200' : ''}`}>
                  <div className="flex items-center justify-between">
                    <IconPin className="text-brand-700" />
                    {d.primary && <span className="rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">Primary</span>}
                  </div>
                  <h3 className="mt-4 text-xl">{d.name}</h3>
                  <p className="text-sm font-medium text-accent">{d.role}</p>
                  <p className="mt-3 text-sm text-body">{d.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we handle</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Everything, under one roof</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="card card-hover h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><s.icon /></div>
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-body">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-20 text-slate-200">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-brand-300">How it works</p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">Your journey in seven steps</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                  <span className="font-display text-3xl font-bold text-brand-300">{s.n}</span>
                  <h3 className="mt-3 text-lg text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10"><Link href="/process" className="btn-primary">See the full process</Link></div>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL PROOF (demo, clearly flagged) */}
      {demoContent && (
        <section className="container-page py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="eyebrow">What people say</p>
              <DemoTag />
            </div>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Sample testimonials and figures shown for layout only. Replace with real, verified content before launch.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { q: 'They mapped out my Dubai pathway clearly and stayed with me through every step.', n: 'Sample Student', r: 'B.Sc Nursing' },
              { q: 'From documents to licensing, the process was organised and stress-free.', n: 'Sample Professional', r: 'Pharmacist' },
              { q: 'Clear guidance on my UK application and a smooth visa experience.', n: 'Sample Student', r: 'Postgraduate, UK' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="card h-full">
                  <div className="text-brand-300"><IconSpark /></div>
                  <blockquote className="mt-3 text-body">&ldquo;{t.q}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm"><span className="font-semibold text-ink">{t.n}</span><span className="text-muted"> · {t.r}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 grid gap-4 rounded-2xl border border-line bg-canvas p-6 sm:grid-cols-3">
              {[['500+', 'Enquiries guided'], ['3', 'Destinations'], ['End-to-end', 'Support model']].map(([a, b]) => (
                <div key={b} className="text-center">
                  <div className="font-display text-3xl font-bold text-brand-700">{a}</div>
                  <div className="text-sm text-muted">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* FAQ (AEO: direct answers + FAQPage schema) */}
      <section className="bg-canvas py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Answers, up front</h2>
              <p className="mt-4 text-body">Still unsure? A free consultation is the fastest way to a clear answer.</p>
              <Link href="/contact" className="btn-brand mt-6">Ask us directly</Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                    {f.q}
                    <span className="text-brand-700 transition group-open:rotate-45"><IconSpark width={18} height={18} /></span>
                  </summary>
                  <p className="mt-3 text-body">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container-page py-20">
        <div className="mesh overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-glow sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl sm:text-4xl">Ready to start your journey?</h2>
              <p className="mt-4 max-w-lg text-body">
                Book a free consultation. We will help you choose the right destination and map out your next steps.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-body">
                {['No cost to get started', 'Honest, practical advice', 'Support until you arrive abroad'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><IconCheck width={18} height={18} className="text-accent" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft"><LeadForm compact /></div>
          </div>
        </div>
      </section>
    </>
  );
}
