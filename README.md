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
| Performance tapes | video in `public/video/`, poster frame in `src/assets/images/video/`, then list it in `src/components/home/Tapes.astro` and give it a title in the language files (`tapes.items`) |
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

### Using the ninaschwarz.cz domain

The domain's DNS is managed at Websupport (registered through Active24). To move it from
Squarespace to GitHub Pages:

1. In the repository: **Settings → Pages → Custom domain** → enter `www.ninaschwarz.cz` and save.
2. In the Websupport DNS editor, remove the existing `A` records for `ninaschwarz.cz` and `www`
   (the Squarespace addresses `198.185.159.x` / `198.49.23.x`, and `37.9.175.163`), then add:

   | Type | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | `185.199.108.153` |
   | `A` | `@` | `185.199.109.153` |
   | `A` | `@` | `185.199.110.153` |
   | `A` | `@` | `185.199.111.153` |
   | `CNAME` | `www` | `shadlproducer.github.io` |

3. Wait for GitHub to show the domain as verified (minutes to a few hours), then tick
   **Enforce HTTPS**.

Nothing in the code needs to change: the build reads the address from the Pages settings.
While the site still lives on the `github.io` address it marks itself as "do not index",
so search engines only ever see the real domain.

Old addresses keep working: `/projects/…` are unchanged, `/home` redirects to `/`, and the
résumé is still at `/s/Nina-Schwarz-Resume.pdf`.

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
