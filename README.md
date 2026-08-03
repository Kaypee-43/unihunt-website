# UniHunt website

Study-abroad and overseas-careers lead-generation site for the UniHunt brand.
Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion, for Vercel.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values as they become available
npm run dev                  # http://localhost:3000
```

## Deploy to Vercel (one-time)

1. Create a new empty GitHub repo (for example `unihunt-website`).
2. Upload this project to it. Easiest path: unzip locally, then either
   push with git, or use GitHub Desktop, or drag the whole unzipped folder
   into the repo via the web UI "upload files" (as a folder, not one by one).
3. In Vercel, click **Add New > Project**, import the repo, keep the defaults
   (Next.js is auto-detected), and add the environment variables below.
4. Deploy. Every later push to `main` auto-deploys.
5. Point `unihunt.in` to the Vercel project in **Settings > Domains**.

## Environment variables (Vercel > Settings > Environment Variables)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, e.g. `https://unihunt.in` |
| `LEAD_ENDPOINT` | Where leads are sent (Formspree URL or CRM webhook). If empty, the form still works and logs server-side. |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 (e.g. `G-XXXX`). Empty = disabled. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (e.g. `GTM-XXXX`). Empty = disabled. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID. Empty = disabled. |
| `NEXT_PUBLIC_DEMO_CONTENT` | `true` shows demo testimonials/stats; set `false` to hide them all. |

## Go-live checklist

- [ ] Set real `LEAD_ENDPOINT` (Formspree or CRM) and test a submission.
- [ ] Add real contact email, phone and WhatsApp number in `src/lib/site.ts`.
- [ ] Add real social profile URLs in `src/lib/site.ts` (improves brand/`sameAs` signals).
- [ ] Replace the About page placeholder with the real team and credentials.
- [ ] Replace demo testimonials/stats with verified content, then set `NEXT_PUBLIC_DEMO_CONTENT=false` (or delete them).
- [ ] Add GA4 / GTM / Meta Pixel IDs.
- [ ] Set the final tagline (see `/brand`) once chosen.

## Key files

- `src/lib/site.ts` — brand, contacts, nav (single source of truth).
- `src/lib/schema.ts` — JSON-LD builders (Organization, WebSite, Service, FAQ, Breadcrumb).
- `src/app/globals.css` + `tailwind.config.ts` — design tokens.
- `src/components/` — Header, Footer, LeadForm, Analytics, WhatsAppFloat, Reveal, Icons.
- `design-system/unihunt/MASTER.md` — generated design-system reference.
- `BRAND_GUIDE.md` — brand foundation. Live version at `/brand`.
