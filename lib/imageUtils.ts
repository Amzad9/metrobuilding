/**
 * Image optimization utilities for Next.js
 * Provides optimized image URLs with proper sizing and quality settings
 */

export const IMAGE_QUALITY = {
  HIGH: 90,
  MEDIUM: 85,
  LOW: 75,
} as const;

export const IMAGE_SIZES = {
  HERO: { width: 1920, quality: IMAGE_QUALITY.HIGH },
  LARGE: { width: 1200, quality: IMAGE_QUALITY.HIGH },
  MEDIUM: { width: 800, quality: IMAGE_QUALITY.MEDIUM },
  SMALL: { width: 600, quality: IMAGE_QUALITY.MEDIUM },
  THUMBNAIL: { width: 400, quality: IMAGE_QUALITY.LOW },
} as const;

/**
 * Generates an optimized Unsplash image URL
 * @param imageId - Unsplash photo ID
 * @param size - Image size configuration
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  imageId: string,
  size: { width: number; quality: number } = IMAGE_SIZES.MEDIUM
): string {
  return `https://images.unsplash.com/${imageId}?w=${size.width}&q=${size.quality}&auto=format&fit=crop`;
}

/**
 * Pre-defined optimized image URLs for common sections
 */
export const OPTIMIZED_IMAGES = {
  hero: {
    construction1: getOptimizedImageUrl('photo-1486406146926-c627a92ad1ab', IMAGE_SIZES.HERO),
    construction2: getOptimizedImageUrl('photo-1504307651254-35680f356dfd', IMAGE_SIZES.HERO),
    construction3: getOptimizedImageUrl('photo-1541888946425-d81bb19240f5', IMAGE_SIZES.HERO),
  },
  services: {
    residential: getOptimizedImageUrl('photo-1600585154340-be6161a56a0c', IMAGE_SIZES.MEDIUM),
    commercial: getOptimizedImageUrl('photo-1486406146926-c627a92ad1ab', IMAGE_SIZES.MEDIUM),
    industrial: getOptimizedImageUrl('photo-1504307651254-35680f356dfd', IMAGE_SIZES.MEDIUM),
    renovation: getOptimizedImageUrl('photo-1581578731548-c64695cc6952', IMAGE_SIZES.MEDIUM),
  },
  projects: {
    kitchen: getOptimizedImageUrl('photo-1556912172-45b7ddc0ef47', IMAGE_SIZES.LARGE),
    bathroom: getOptimizedImageUrl('photo-1620626011761-996317b8d101', IMAGE_SIZES.LARGE),
    deck: getOptimizedImageUrl('photo-1600210492486-724fe5c67fb0', IMAGE_SIZES.LARGE),
    home: getOptimizedImageUrl('photo-1600585154340-be6161a56a0c', IMAGE_SIZES.LARGE),
    renovation: getOptimizedImageUrl('photo-1600607687939-ce8a6c25118c', IMAGE_SIZES.LARGE),
    roofing: getOptimizedImageUrl('photo-1541888946425-d81bb19240f5', IMAGE_SIZES.LARGE),
  },
} as const;
