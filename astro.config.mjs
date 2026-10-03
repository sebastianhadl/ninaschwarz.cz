import { readdir, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// On GitHub Pages the deploy workflow passes SITE_URL / BASE_PATH (read from the
// repository's Pages settings), so the same code works on the temporary
// *.github.io address and on the custom domain. Locally it falls back to production.
const site = process.env.SITE_URL || 'https://www.ninaschwarz.cz';
const base = process.env.BASE_PATH || '/';

/**
 * The build copies every source photo into dist/_astro next to the optimised
 * versions, but the pages only ever link to the optimised ones. This removes the
 * full-size originals that nothing references, which keeps the upload ~20 MB lighter.
 */
function pruneUnusedImages() {
  return {
    name: 'prune-unused-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const all = await readdir(root, { recursive: true });
        const texts = all.filter((file) => /\.(html|css|js|xml|json)$/.test(file));
        const haystack = (await Promise.all(texts.map((file) => readFile(join(root, file), 'utf8')))).join('\n');
        const images = all.filter((file) => /^_astro[\\/].+\.(jpe?g|png|webp|avif)$/i.test(file));
        const unused = images.filter((file) => !haystack.includes(file.split(/[\\/]/).pop()));
        await Promise.all(unused.map((file) => rm(join(root, file))));
        logger.info(`removed ${unused.length} unreferenced image file(s)`);
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Keep normal HTML whitespace rules, so spaces between inline words survive.
  compressHTML: true,
  devToolbar: { enabled: false },

  // The old Squarespace site also answered at /home.
  redirects: {
    '/home': `${base.replace(/\/$/, '')}/`,
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.endsWith('/home/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', cs: 'cs' },
      },
    }),
    pruneUnusedImages(),
  ],
});
