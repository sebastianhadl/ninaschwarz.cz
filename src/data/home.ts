// What the home page shows, in one place: the performance tapes and the gallery photos.

import type { ImageMetadata } from 'astro';
import posterOne from '../assets/images/video/performance-1.jpg';
import posterTwo from '../assets/images/video/performance-2.jpg';

/**
 * Performance tapes. The video files live in public/video/, their poster frames in
 * src/assets/images/video/. Titles are in the language files under `tapes.items`,
 * in the same order as here.
 */
export const tapes: { src: string; poster: ImageMetadata; duration: string }[] = [
  { src: '/video/performance-1.mp4', poster: posterOne, duration: '2:42' },
  { src: '/video/performance-2.mp4', poster: posterTwo, duration: '5:00' },
];

/**
 * Gallery photos: every file named gallery-NN.jpg in src/assets/images/home/,
 * in numeric order. Drop a new file in to add a photo; descriptions are in the
 * language files under `photos.alts`.
 */
const galleryFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/images/home/gallery-*.{jpg,jpeg,png}', {
  eager: true,
});

export const gallery: ImageMetadata[] = Object.entries(galleryFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);
