import { en, type Dictionary } from './en';
import { cs } from './cs';

export const languages = ['en', 'cs'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

const dictionaries: Record<Lang, Dictionary> = { en, cs };

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** `getStaticPaths` entries for pages living under `src/pages/[...lang]/`. */
export function langPaths() {
  return languages.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the deploy base (e.g. `/ninaschwarz.cz` on *.github.io). */
export function withBase(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Root-relative path of a page in the given language, without the deploy base. */
export function routePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** Link to a page in the given language. `path` is the English path, e.g. `/projects/`. */
export function localizedPath(lang: Lang, path: string): string {
  return withBase(routePath(lang, path));
}

/**
 * "2 videos", "5 fotek" … picks the right word form for a number.
 * English has two forms (one, other); Czech three (1, 2–4, 5 and more).
 */
export function plural(lang: Lang, count: number, forms: string[]): string {
  const index = lang === 'cs' ? (count === 1 ? 0 : count >= 2 && count <= 4 ? 1 : 2) : count === 1 ? 0 : 1;
  return `${count} ${forms[Math.min(index, forms.length - 1)]}`;
}

/**
 * Czech typography: keep one-letter prepositions and conjunctions (k, s, v, z, o, u, a, i)
 * on the same line as the word that follows them.
 */
export function typo(lang: Lang, html: string): string {
  if (lang !== 'cs') return html;
  return html.replace(/(^|[\s(>„])([ksvzouaiKSVZOUAI])\s+/g, '$1$2&nbsp;');
}
