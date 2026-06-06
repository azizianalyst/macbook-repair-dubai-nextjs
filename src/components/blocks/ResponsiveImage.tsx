"use client";
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
      />
    </picture>
  );
}

export default ResponsiveImage;
