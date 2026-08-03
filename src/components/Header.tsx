'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { site } from '@/lib/site';
import { IconMenu, IconClose } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="UniHunt home">
          <Image src="/brand/logo.svg" alt="UniHunt" width={158} height={34} priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-body transition hover:text-brand-700">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary text-sm">Book a free consult</Link>
        </div>

        <button
          type="button"
          className="btn-ghost lg:hidden !px-3"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-body hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Book a free consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
