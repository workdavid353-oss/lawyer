# ארז ושות׳ — Law Firm Website

Next.js 14 · TypeScript · Tailwind CSS · next-intl · Supabase (Phase 2+)

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # fill in keys
npm run dev                         # http://localhost:3000
```

Redirects automatically to `/he` (default locale). Switch to `/en` via the language toggle in the nav.

## Project Structure

```
app/[locale]/          # he / en routing
components/sections/   # Hero, Navbar, Practices, About, Team,
                       # Precedents, Testimonials, Contact, Footer
messages/              # he.json + en.json  ← all copy lives here
lib/
  data.ts              # static firm meta & stats
  supabase.ts          # Supabase client + types (Phase 2+)
  useReveal.ts         # IntersectionObserver scroll animation hook
```

## Updating Content

All visible text lives in `messages/he.json` and `messages/en.json`.
Edit those files — no code changes needed for copy updates.

Static firm details (address, phone, founding year) are also in `lib/data.ts`.

## Phases Roadmap

| Phase | What | Status |
|-------|------|--------|
| 1 | Landing page (this scaffold) | ✅ Ready |
| 2 | Client portal – case status, auth | Supabase tables TBD |
| 3 | Admin dashboard + n8n → Legal integration | Planned |

## Deployment

Connect the repo to [Vercel](https://vercel.com) — zero config.
Add env vars in the Vercel dashboard (same keys as `.env.local.example`).
