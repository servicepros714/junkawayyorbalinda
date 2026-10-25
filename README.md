# JunkAway Yorba Linda

React 18 + Vite marketing site for JunkAway Yorba Linda — (714) 386-1437.

## Run locally

```bash
npm install
npm run dev
```

## Edit business details

Everything (phone, service areas, hours, services, pricing checklist, FAQs, reviews, colors, webhook) lives in `src/data/business.js`.

- **Reviews:** the Reviews section is hidden until you add real customer reviews to `business.reviews`.
- **Estimate form:** set `estimateWebhook` to a GHL or form webhook URL to receive submissions as JSON.
- **Domain:** `siteUrl` in `business.js`, plus `index.html` (canonical), `public/robots.txt` and `public/sitemap.xml` use `junkawayyorbalinda.com` — update all four if the domain differs.

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- `public/_redirects` handles SPA routing for `/get-estimate`.

```bash
git init
git add .
git commit -m "Initial build: JunkAway Yorba Linda"
git branch -M main
git remote add origin https://github.com/servicepros714/junkawayyorbalinda.git
git push -u origin main
```
