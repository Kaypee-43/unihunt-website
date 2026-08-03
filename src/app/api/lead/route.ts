import { NextResponse } from 'next/server';

// CRM-agnostic. Set LEAD_ENDPOINT to a Formspree URL or a CRM webhook (Zoho/HubSpot).
// With no endpoint configured the route accepts the lead and logs it, so the form
// works end to end in development without wiring a provider yet.
export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }

  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const phone = String(payload.phone || '').trim();
  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 422 });
  }

  const lead = {
    ...payload,
    source: 'unihunt.in',
    submittedAt: new Date().toISOString(),
  };

  const endpoint = process.env.LEAD_ENDPOINT;
  if (!endpoint) {
    console.info('[UniHunt lead] no LEAD_ENDPOINT set, captured:', lead);
    return NextResponse.json({ ok: true, mode: 'demo' });
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Endpoint responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[UniHunt lead] forward failed:', err);
    return NextResponse.json({ ok: false, error: 'Delivery failed' }, { status: 502 });
  }
}
