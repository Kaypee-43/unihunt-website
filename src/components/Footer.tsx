import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

// Set to true to show the "by UniMarg" endorsement (kept in one place per brief).
const SHOW_PARENT_ENDORSEMENT = false;

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-slate-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/brand/logo-white.svg" alt="UniHunt" width={158} height={34} />
          <p className="mt-4 max-w-xs text-sm text-slate-400">{site.description}</p>
          {SHOW_PARENT_ENDORSEMENT && (
            <p className="mt-4 text-xs text-slate-500">A venture supported by {site.parent}.</p>
          )}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-400 transition hover:text-white">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/contact" className="text-slate-400 transition hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Tracks</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/study-abroad" className="text-slate-400 transition hover:text-white">Study Abroad</Link></li>
            <li><Link href="/careers-abroad" className="text-slate-400 transition hover:text-white">Careers Abroad</Link></li>
            <li><Link href="/destinations" className="text-slate-400 transition hover:text-white">Destinations</Link></li>
            <li><Link href="/process" className="text-slate-400 transition hover:text-white">How it works</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Email: <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.address.city}, {site.address.region}</li>
          </ul>
          <Link href="/contact" className="btn-primary mt-5 text-sm">Start your enquiry</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Study abroad and overseas careers, guided end to end.</p>
        </div>
      </div>
    </footer>
  );
}
