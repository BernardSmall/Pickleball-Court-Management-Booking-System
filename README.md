# Club Court Booking

A Next.js + React + TypeScript UI prototype for a pickleball club booking and membership-management system.

## Current UI state

This version has been restyled against the supplied Club Court reference screenshots, using the navy / teal / warm off-white design system. The main visual-match routes are:

- `/book` — calendar-first booking with six courts
- `/bookings` — upcoming, past and cancelled bookings
- `/membership` — Pickle Pro membership overview and allowance periods
- `/wallet` — Club Credits balance and transaction history
- `/admin` — administrator workspace using the same design system
- `/login` and `/register` — prototype authentication screens

The reference screenshots and visual-match specification are kept under `docs/reference-ui/` and `docs/UI_VISUAL_MATCH_SPEC.md`.

## Run locally

Install Node.js 20+ and then run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

The root route redirects to `/book`.

## Important

This remains a UI/prototype implementation. Real authentication, Supabase/PostgreSQL persistence, live multi-user booking concurrency, and real payment processing are not connected yet.

The project deliberately uses normal CSS in `src/app/globals.css`; Tailwind is not required for this version.

## Design tokens

The authoritative visual palette includes:

- Navy navigation: `#0B1B2F`
- Selected/dark panel navy: `#0C2946`
- Primary teal: `#087D72`
- Warm page background: `#F7F6F1`
- White surfaces: `#FFFFFF`
- Border: `#D7DEE5`

## Product constraints represented in the UI

- Exactly six courts
- No Perks page
- Monday–Saturday operating hours 09:00–19:00
- Sunday operating hours 15:00–19:00
- Club Credits at R1.00 = 1 Club Credit
- Play & Go, Member and Pickle Pro memberships
- Anniversary-based free-hour allowances
- Admin booking/court/member/wallet sections
- Stable modal-based Help & Tour
