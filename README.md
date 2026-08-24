# Dr. Teel CBT — React draft

A Vite + React conversion of the Dr. Teel CBT visual mockup. It is intentionally lightweight and ready to deploy as a static site on Cloudflare Pages.

## Stack

- React 18
- React Router
- Vite
- Plain CSS
- Static images in `public/assets`

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Cloudflare Pages

Connect the GitHub repo to Cloudflare Pages and use:

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`

`wrangler.jsonc` sets `not_found_handling` to `single-page-application` so React Router routes such as `/about` and `/faq` resolve correctly on Cloudflare. Do not use `public/_redirects` with `/* /index.html 200`; Cloudflare rejects that rule as an infinite loop.

## Where to edit things

- `src/pages/Home.jsx` — homepage sections and copy
- `src/pages/About.jsx` — About page
- `src/pages/Services.jsx` — Services page
- `src/pages/Approach.jsx` — CBT / Approach page
- `src/pages/FAQ.jsx` — FAQ content
- `src/pages/Contact.jsx` — Contact page and demo form
- `src/components/Header.jsx` / `Footer.jsx` — shared navigation/footer
- `src/styles.css` — colors, typography, layout, responsive styles
- `public/assets/` — logo and site imagery

## Before launch

The current site intentionally contains placeholder professional/practice information. Confirm and replace:

- credentials and licensure
- specialties and service descriptions
- office location / telehealth states
- fees and insurance wording
- phone and email
- scheduling / EHR link
- privacy policy and Notice of Privacy Practices

The contact form is a visual demo only. It does not submit or store data. Do not connect it to a generic form endpoint for sensitive clinical information; use the practice's approved secure workflow.
