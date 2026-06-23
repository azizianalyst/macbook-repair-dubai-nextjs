"use client";
import { preload } from "react-dom";
// Reusable responsive <picture>: serves AVIF -> WebP -> JPG/PNG fallback from the
// base path, using the 360/800/1600 variants produced by scripts/optimize-images.cjs.
// Base path like "/images/brand/workshop-wide.jpg" -> auto -mobile/-tablet/-desktop.
type Props = {
  src: string;          // base jpg/png path
  alt: string;          // REQUIRED, descriptive (SEO + a11y)
  title?: string;       // tooltip + extra SEO signal; defaults to alt
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  sizes?: string;
  /** eager for above-the-fold/LCP; defaults to lazy */
  priority?: boolean;
};

const DEFAULT_SIZES = "(max-width: 414px) 360px, (max-width: 1068px) 800px, 1200px";

export function ResponsiveImage({
  src, alt, title, className, imgClassName, width = 800, height, sizes, priority = false,
}: Props) {
  const m = src.match(/^(.*)\.(jpe?g|png)$/i);
  const base = m ? m[1] : null;
  const avif = base && `${base}-mobile.avif 360w, ${base}-tablet.avif 800w, ${base}-desktop.avif 1600w`;
  const webp = base && `${base}-mobile.webp 360w, ${base}-tablet.webp 800w, ${base}-desktop.webp 1600w`;

  // LCP image: emit <link rel="preload"> in <head> so the fetch starts with the
  // document instead of after layout. type=image/avif makes non-AVIF browsers
  // ignore the hint and fall back to the <picture> sources as usual.
  if (priority && avif) {
    preload(src, {
      as: "image",
      type: "image/avif",
      imageSrcSet: avif,
      imageSizes: sizes ?? DEFAULT_SIZES,
      fetchPriority: "high",
    });
  }

  return (
    <picture className={className}>
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes ?? DEFAULT_SIZES} />}
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes ?? DEFAULT_SIZES} />}
      <img
        src={src}
        alt={alt}
        title={title ?? alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={imgClassName}
        // Neutral backdrop while the photo streams in — kills the white pop-in.
        // Only for real workshop photos: topic/home infographic variants are
        // white→alpha transparent, so a backdrop would tint them.
        style={src.startsWith("/images/real/") ? { backgroundColor: "#e9ecef" } : undefined}
      />
    </picture>
  );
}

export default ResponsiveImage;
