'use client';
import { useState } from 'react';
import { trackLead } from './Analytics';
import { IconArrow, IconCheck } from './Icons';

type Status = 'idle' | 'sending' | 'done' | 'error';

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand-400 focus:outline-none focus-visible:outline-none';

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if ((data.company as string)?.length) return; // honeypot
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('failed');
      trackLead();
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-soft/60 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <IconCheck />
        </div>
        <h3 className="mt-4 text-xl">Thank you. Your enquiry is in.</h3>
        <p className="mt-2 text-body">A UniHunt advisor will reach out shortly to plan your next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">Full name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">Phone / WhatsApp</label>
          <input id="phone" name="phone" required inputMode="tel" autoComplete="tel" placeholder="+91 …" className={field} />
        </div>
      </div>

      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={field} />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1 block text-sm font-medium text-ink">I am interested in</label>
          <select id="interest" name="interest" required defaultValue="" className={field}>
            <option value="" disabled>Select a track</option>
            <option>Study Abroad</option>
            <option>Careers Abroad (Dubai)</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          What are you looking for? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={compact ? 2 : 3} placeholder="Course, destination, timeline…" className={field} />
      </div>

      {/* Honeypot: hidden from users, catches bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get free guidance'}
        {status !== 'sending' && <IconArrow width={18} height={18} />}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again, or message us on WhatsApp.
        </p>
      )}
      <p className="text-xs text-muted">
        By submitting, you agree to be contacted about your enquiry. We never share your details.
      </p>
    </form>
  );
}
