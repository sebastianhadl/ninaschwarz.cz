# ninaschwarz.cz

The website of Nina Schwarz — singer, dancer, actor. English at `/`, Czech at `/cs/`.

A static site built with [Astro](https://astro.build) and hosted for free on GitHub Pages.
Every push to `main` rebuilds and publishes it automatically (about two minutes).

## Changing things

| What | Where |
| --- | --- |
| Any text (English) | `src/i18n/en.ts` |
| Any text (Czech) | `src/i18n/cs.ts` — same keys as the English file |
| Email, phone, social links | `src/data/site.ts` |
| Résumé | replace `public/s/Nina-Schwarz-Resume.pdf` (keep the file name) |
| Gallery photos | add or remove `gallery-NN.jpg` files in `src/assets/images/home/` — they appear in numeric order. Add a matching description to `photos.alts` in both language files. |
| Hero, "about" and the three strip photos | replace the files in `src/assets/images/home/` (keep the names). After changing `hero.jpg`, also replace `hero-portrait.jpg`, the upright crop phones use. |
| Performance tapes | video in `public/video/`, poster frame in `src/assets/images/video/`, then list it in `src/data/home.ts` and give it a title in the language files (`tapes.items`) |
| Music projects | `src/data/projects.ts`, with images in `src/assets/images/projects/<slug>/` (`cover-wide.jpg`, `artwork.jpg`, `video-poster.jpg`, `still-01.jpg` …) |
| Colours, fonts, spacing | the variables at the top of `src/styles/global.css` |

Photos can be dropped in at full size: the build produces the small, modern formats itself.
Videos are served as they are, so export them for the web first — H.264 MP4, 1080p,
and **under 100 MB per file** (GitHub refuses anything larger).

## Working on it locally

Requires [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install     # once
npm run dev     # live preview at http://localhost:4321
npm run build   # production build into dist/
```

## Publishing

The workflow in `.github/workflows/deploy.yml` does everything. In the repository,
**Settings → Pages → Source** must be set to **GitHub Actions**.

### The ninaschwarz.cz domain

The site answers at `https://www.ninaschwarz.cz` (the bare `ninaschwarz.cz` and plain `http`
redirect there). Two things make that work:

- **GitHub:** Settings → Pages → Custom domain is `www.ninaschwarz.cz`, with **Enforce HTTPS** on.
  GitHub issues and renews the certificate by itself.
- **DNS** (Websupport, domain registered through Active24):

  | Type | Name | Value |
  | --- | --- | --- |
  | `A` | `@` | `185.199.108.153` |
  | `A` | `@` | `185.199.109.153` |
  | `A` | `@` | `185.199.110.153` |
  | `A` | `@` | `185.199.111.153` |
  | `CNAME` | `www` | `sebastianhadl.github.io` |

If the domain is ever changed: set the new one in Settings → Pages, run the deployment again
(**Actions → Deploy to GitHub Pages → Run workflow**) so the pages are rebuilt for the new address,
then update DNS. If HTTPS doesn't appear within an hour of the DNS change, remove the custom
domain in Settings → Pages and add it again — that makes GitHub request the certificate.

Addresses from the old Squarespace site keep working: `/projects/…` are unchanged, `/home`
redirects to `/`, and the résumé is still at `/s/Nina-Schwarz-Resume.pdf`.

## How it is put together

```
public/            files served as they are (résumé, videos, favicon, share image)
src/
  assets/images/   original photos — optimised versions are generated at build time
  components/      building blocks; home page sections live in components/home/
  data/            contact details and the list of music projects
  i18n/            all text, one file per language
  layouts/         the page shell (head tags, header, footer)
  pages/           one file per page type; [...lang] makes each exist in both languages
  styles/          design tokens and base styles
```
