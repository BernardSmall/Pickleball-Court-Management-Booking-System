# Vercel deployment

This archive is flattened for Vercel/GitHub deployment.

At the repository root you should see:

- package.json
- next.config.ts
- src/
- public/

Vercel settings:
- Framework Preset: Next.js
- Root Directory: leave blank / repository root
- Install Command: npm install
- Build Command: npm run build
- Output Directory: leave blank (Next.js default)

Do not set the Output Directory to `public` or `out`.
