import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Brand Kit',
  description: 'The UniHunt brand foundation: logo, colour palette, typography and tagline options.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/brand' },
};

const palette = [
  ['Brand / Violet 700', '#6D28D9'],
  ['Interactive / Violet 600', '#7C3AED'],
  ['Accent / Emerald', '#059669'],
  ['Spark / Amber', '#F59E0B'],
  ['Ink', '#0F172A'],
  ['Body', '#334155'],
  ['Canvas', '#FBF9FF'],
  ['Line', '#EAE4F7'],
];

const taglines = [
  'Find your future abroad.',
  'Your path abroad, guided.',
  'Study. Work. Belong. Abroad.',
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Brand kit" title="UniHunt brand foundation"
        intro="A living reference for the logo, palette, typography and voice. Use it for campaigns, social posts and print." />
      <section className="container-page space-y-14 py-16">
        <div>
          <h2 className="text-2xl">Logo</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="card flex items-center justify-center py-12"><Image src="/brand/logo.svg" alt="UniHunt logo" width={220} height={48} /></div>
            <div className="card flex items-center justify-center bg-ink py-12"><Image src="/brand/logo-white.svg" alt="UniHunt logo, white" width={220} height={48} /></div>
          </div>
          <p className="mt-3 text-sm text-muted">Mark = a destination pin with a north-star: &ldquo;find your way, aim high.&rdquo;</p>
        </div>

        <div>
          <h2 className="text-2xl">Colour</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {palette.map(([name, hex]) => (
              <div key={hex} className="overflow-hidden rounded-xl border border-line">
                <div className="h-20" style={{ background: hex }} />
                <div className="p-3"><div className="text-sm font-medium text-ink">{name}</div><div className="text-xs text-muted">{hex}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl">Typography</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="card"><p className="text-xs uppercase tracking-wider text-muted">Display, Outfit</p><p className="mt-2 font-display text-4xl font-bold text-ink">Aa Bb Cc</p><p className="font-display text-lg">Headlines and section titles</p></div>
            <div className="card"><p className="text-xs uppercase tracking-wider text-muted">Body, Inter</p><p className="mt-2 text-4xl text-ink">Aa Bb Cc</p><p className="text-lg">Readable body text and UI</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl">Tagline options</h2>
          <ul className="mt-6 space-y-3">
            {taglines.map((t, i) => (
              <li key={t} className="card flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">{i + 1}</span>
                <span className="text-lg text-ink">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">Option 1 is currently used across the site. Tell me which you prefer and I will standardise it.</p>
        </div>
      </section>
    </>
  );
}
