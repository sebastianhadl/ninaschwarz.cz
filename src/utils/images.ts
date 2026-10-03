import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

/**
 * Pick the widths worth generating for an image: every candidate that is not
 * wider than the file itself, plus the file's own width when it falls short of
 * the largest candidate (so small photos are still offered at full size).
 */
export function widthsFor(image: ImageMetadata, candidates: number[]): number[] {
  const usable = candidates.filter((w) => w <= image.width);
  const largest = Math.max(...candidates);
  if (image.width < largest && !usable.includes(image.width)) usable.push(image.width);
  return usable.sort((a, b) => a - b);
}

/** The large version of a photo shown in the full-screen viewer. */
export async function lightboxImage(image: ImageMetadata, maxWidth = 2000) {
  const width = Math.min(image.width, maxWidth);
  const large = await getImage({ src: image, format: 'webp', width, quality: 82 });
  return {
    src: large.src,
    width,
    height: Math.round((image.height / image.width) * width),
  };
}
