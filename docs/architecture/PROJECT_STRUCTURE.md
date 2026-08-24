# Project Structure

This scaffold maps the Club Court Booking rebuild specification into a production-oriented Next.js architecture.

## Main layers

- `src/app`: routes/pages only.
- `src/components`: shared presentation primitives and layout.
- `src/features`: business features grouped by domain.
- `src/lib`: infrastructure and cross-cutting utilities.
- `src/constants`: authoritative shared defaults/rules.
- `supabase`: database migrations, RLS and seed data.
- `tests`: unit, integration and end-to-end tests.

## Rule

Pages call feature components/services. Business rules do not live inside page components.
