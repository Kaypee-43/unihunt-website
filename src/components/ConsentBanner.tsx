'use client';
import { useEffect, useState } from 'react';

const KEY = 'uh_consent';
type Choice = 'granted' | 'denied';

function apply(choice: Choice) {
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.('consent', 'update', {
    ad_storage: choice, ad_user_data: choice,
    ad_personalization: choice, analytics_storage: choice,
  });
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(KEY) as Choice | null;
    if (saved) apply(saved);
    else setShow(true);
  }, []);
  function choose(choice: Choice) {
    localStorage.setItem(KEY, choice);
    apply(choice);
    setShow(false);
  }
  if (!show) return null;
  return (
    <div role="dialog" aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-700">
          We use cookies to measure site traffic and improve UniHunt. Accept or decline analytics cookies.
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => choose('denied')}
            className="min-h-[44px] rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700">
            Decline
          </button>
          <button onClick={() => choose('granted')}
            className="min-h-[44px] rounded-lg bg-brand-700 px-5 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
