import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { metaForPath } from "@/lib/page-meta";
import { ADMIN_POST_RENDER, ADMIN_POST_SLUGS } from "@/content/posts.generated";

// Dynamic route for ADMIN-AUTHORED markdown posts only. The 85 hand-built posts each have their own
// static /blog/<slug>/page.tsx, which takes routing precedence over this [slug] segment, so they are
// never served from here. dynamicParams:false → only the admin slugs are prerendered; anything else
// 404s. Content is baked at build by scripts/gen-blog.cjs (markdown → HTML) into posts.generated.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return ADMIN_POST_SLUGS.map((slug) => ({ slug }));
}

const SITE_URL = "https://macbook-repair-dubai.ae";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = ADMIN_POST_RENDER[slug];
  if (!post) return {};
  // Reuse the site's canonical/OG/twitter/robots machinery (imageForRoute handles the blog hero),
  // then apply the post's own SEO fields + the meta-box overrides (Social + Advanced tabs).
  const base = metaForPath(post.path);

  // Social tab: OG/Twitter overrides; blank falls back to the SEO title/description (and base hero image).
  const ogTitle = post.og.title || post.seoTitle;
  const ogDescription = post.og.description || post.seoDescription;
  const ogImages = post.og.image ? [{ url: absUrl(post.og.image) }] : base.openGraph?.images;
  const twTitle = post.twitter.title || ogTitle;
  const twDescription = post.twitter.description || ogDescription;
  const twImage = post.twitter.image || post.og.image;
  const twCard = (post.twitter.card || "summary_large_image") as "summary_large_image" | "summary";

  // Advanced tab: per-post robots + canonical.
  const robots: Metadata["robots"] = {
    index: !post.robots.noindex,
    follow: !post.robots.nofollow,
    noarchive: post.robots.noarchive || undefined,
    noimageindex: post.robots.noimageindex || undefined,
    nosnippet: post.robots.nosnippet || undefined,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  };
  const canonical = post.canonical ? absUrl(post.canonical) : base.alternates?.canonical;

  return {
    ...base,
    title: post.seoTitle,
    description: post.seoDescription,
    robots,
    alternates: { ...base.alternates, canonical },
    openGraph: { ...base.openGraph, title: ogTitle, description: ogDescription, images: ogImages },
    twitter: { ...base.twitter, card: twCard, title: twTitle, description: twDescription, images: twImage ? [absUrl(twImage)] : base.twitter?.images },
  };
}

function absUrl(u: string): string {
  return /^https?:\/\//i.test(u) ? u : SITE_URL + (u.startsWith("/") ? u : "/" + u);
}

export default async function AdminBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = ADMIN_POST_RENDER[slug];
  if (!post) notFound();

  return (
    <BlogPostTemplate
      seoTitle={post.seoTitle}
      seoDescription={post.seoDescription}
      path={post.path}
      category={post.category}
      h1={post.h1}
      hook={post.hook}
      quickAnswer={post.quickAnswer}
      author={post.author}
      datePublished={post.datePublished}
      dateModified={post.dateModified}
      readingMinutes={post.readingMinutes}
      featuredImageAlt={post.featuredImageAlt}
      featuredImage={post.featuredImage}
      body={<div dangerouslySetInnerHTML={{ __html: post.html }} />}
      faqs={post.faqs}
      relatedLinks={post.relatedLinks}
      schemaType={post.schemaType}
      breadcrumbTitle={post.breadcrumbTitle || undefined}
    />
  );
}
