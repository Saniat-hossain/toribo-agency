# Toribo Agency — complete standalone source

Plain HTML, CSS and JavaScript. No React/Next.js, bundler, runtime dependencies, account credentials, or hosted-site service is needed. The `dist` folder contains the actual editable source, not compiled output.

## Run locally

Open `dist/index.html` directly in your browser. Keep its adjacent files and assets together.

Optional local server (Node.js 18 or newer):

```sh
npm run dev
```

Open http://localhost:4173. No `npm install` is necessary because there are no dependencies. Stop with Ctrl+C.

## Files

- `dist/index.html` — complete page markup and inline vector/CSS illustration structure
- `dist/styles.css` — editable styles, responsive layouts and animations
- `dist/app.js` — FAQ, scroll reveals, active navigation and local brief form
- `dist/assets/` — all image and icon files, provenance notes and icon license
- `dist/assets/fonts/` — locally bundled Inter, Manrope and italic Playfair Display; CSS and SIL Open Font Licenses included
- `package.json`, `preview.mjs` — optional dependency-free development server
- `vercel.json` — static deployment configuration; publishes `dist` without a build
- `ASSET-MANIFEST.txt` — file inventory with byte sizes and SHA-256 hashes

All six portfolio illustrations are actual WebP files: `hero-analytics.webp`, `hero-agents.webp`, `hero-integration.webp`, `hero-voice.webp`, `hero-workflow.webp`, and `hero-bookings.webp`. The four case-study illustrations, benefit illustration, four portraits and tool SVG logos are also bundled. CSS effects and inline vector artwork remain editable in the HTML/CSS.

## GitHub and Vercel

1. Extract this ZIP. Push the contents of the extracted `toribo-agency` folder to a new GitHub repository (include the `dist` folder).
2. Import that repository into Vercel. Use this folder as the project Root Directory.
3. Select Framework Preset **Other** if prompted. The included `vercel.json` selects output directory `dist` and skips install/build commands.
4. Deploy. No environment variables are required for the current static page.
5. Add your custom domain under the Vercel project's Settings → Domains. Apply the DNS records Vercel displays at your domain provider, then complete domain verification. Use the records for your own project rather than copied example records.

Official guides: https://vercel.com/docs/project-configuration and https://vercel.com/docs/domains/working-with-domains/add-a-domain

For any other static host, upload the **contents** of `dist` to its public website directory.

## Editing and current limitations

Edit HTML copy in `dist/index.html`, brand/design tokens in `dist/styles.css`, and interactions in `dist/app.js`. Replace asset files at the same paths or update the references. No build step is needed.

The consultation form validates inputs and prepares a downloadable text brief locally. It does **not** send an email, create a CRM lead, or book a call. Connect it to your chosen backend/form service before using it to receive enquiries. Never put private API keys in browser JavaScript.

Names, testimonials, client logos and portraits currently include sample content approved during design. Replace them with your real content before representing them as actual clients or team members. Tool logos remain the property of their respective brands; bundled license/provenance files are retained.

This export is based on source commit c9f540a2e6d7271f8e5715e344fb8a65784292f0. Export-only changes bundle remote fonts locally, extract the favicon, add font MIME support to the dev server, and add portability documentation/configuration. No design sections were changed.
