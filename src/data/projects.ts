// Music projects, in the order they appear on the site.
//
// To add a project:
//   1. create src/assets/images/projects/<slug>/ with cover-wide.jpg, artwork.jpg
//      and still-01.jpg, still-02.jpg … (plus video-poster.jpg for a YouTube video)
//   2. add an entry below.

import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

type Localized = Record<Lang, string>;

export interface Project {
  slug: string;
  /** Short title used in lists and navigation. */
  title: string;
  /** Full line shown on the project page. */
  headline: Localized;
  kind: 'album' | 'single';
  released: string;
  label: string;
  distributor: string;
  spotify: string;
  video:
    | { type: 'youtube'; id: string; title: string; aspect: string }
    | { type: 'file'; src: string; title: string; aspect: string; duration: string };
  /** Short description of the stills, used for image alt text. */
  stillsAlt: Localized;
  /** Accent colour used on the project page. */
  accent: string;
}

export const projects: Project[] = [
  {
    slug: 'yellow',
    title: 'Yellow',
    headline: {
      en: 'Nina Schwarz – “Yellow” (debut album)',
      cs: 'Nina Schwarz – „Yellow“ (debutové album)',
    },
    kind: 'album',
    released: '2021',
    label: 'TEMPLE 98',
    distributor: 'Ruka Hore',
    spotify: 'https://open.spotify.com/album/11sK14dPa5DuJixnoZ2GGW',
    video: { type: 'youtube', id: 'O93Ihcyt4pw', title: 'Nina Schwarz - Yellow (Official Video)', aspect: '16 / 9' },
    stillsAlt: { en: 'Still from the “Yellow” music video', cs: 'Záběr z videoklipu „Yellow“' },
    accent: '#f2d21b',
  },
  {
    slug: 'taste',
    title: 'Taste',
    headline: {
      en: 'Nina Schwarz – “Taste (feat. Marcus)”',
      cs: 'Nina Schwarz – „Taste (feat. Marcus)“',
    },
    kind: 'single',
    released: '2021',
    label: 'TEMPLE 98',
    distributor: 'TEMPLE 98',
    spotify: 'https://open.spotify.com/track/25DwgQjgNTYcGMbtiAzj3G',
    video: {
      type: 'youtube',
      id: 'YWCSMWNzRQ0',
      title: 'Nina Schwarz - Taste ft. Marcus (Official Video)',
      aspect: '16 / 9',
    },
    stillsAlt: { en: 'Photo from the “Taste” shoot', cs: 'Fotografie z natáčení „Taste“' },
    accent: '#d83bf0',
  },
  {
    slug: 'high',
    title: 'High',
    headline: {
      en: 'Nina Schwarz – “High”',
      cs: 'Nina Schwarz – „High“',
    },
    kind: 'single',
    released: '2021',
    label: 'TEMPLE 98',
    distributor: 'Dhs-music',
    spotify: 'https://open.spotify.com/track/58geX67s4vms2RLasWsvf2',
    video: { type: 'youtube', id: 'cg9jATMNgBo', title: 'Nina Schwarz - High (Official Video)', aspect: '4 / 3' },
    stillsAlt: { en: 'Still from the “High” music video', cs: 'Záběr z videoklipu „High“' },
    accent: '#f4d35e',
  },
  {
    slug: 'avon',
    title: 'Avon®',
    headline: {
      en: 'Nina Schwarz – “Síla v nás” (Avon® CZ/SK Anthem)',
      cs: 'Nina Schwarz – „Síla v nás“ (hymna Avon® CZ/SK)',
    },
    kind: 'single',
    released: '2021',
    label: 'TEMPLE 98',
    distributor: 'Ruka Hore',
    spotify: 'https://open.spotify.com/track/0XJKdltXCBWwedagg3vEO1',
    video: {
      type: 'file',
      src: '/video/avon-sila-v-nas.mp4',
      title: 'Nina Schwarz - Síla v nás',
      aspect: '1920 / 798',
      duration: '3:50',
    },
    stillsAlt: { en: 'Still from the “Síla v nás” music video', cs: 'Záběr z videoklipu „Síla v nás“' },
    accent: '#f4a6c0',
  },
];

// ---- Images -------------------------------------------------------------

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/images/projects/*/*.{jpg,jpeg,png}', {
  eager: true,
});

function image(slug: string, name: string): ImageMetadata | undefined {
  const hit = Object.entries(images).find(([path]) => path.includes(`/projects/${slug}/${name}.`));
  return hit?.[1].default;
}

export interface ProjectImages {
  cover: ImageMetadata;
  artwork: ImageMetadata;
  poster: ImageMetadata;
  stills: ImageMetadata[];
}

export function projectImages(slug: string): ProjectImages {
  const cover = image(slug, 'cover-wide');
  const artwork = image(slug, 'artwork');
  if (!cover || !artwork) {
    throw new Error(`Project "${slug}" needs cover-wide.jpg and artwork.jpg in src/assets/images/projects/${slug}/`);
  }
  const stills = Object.entries(images)
    .filter(([path]) => path.includes(`/projects/${slug}/still-`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
  return { cover, artwork, poster: image(slug, 'video-poster') ?? cover, stills };
}

/** Title as HTML for large display type: the ® is set small and raised. */
export function displayTitle(title: string): string {
  return title.replace('®', '<sup class="reg">®</sup>');
}

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
