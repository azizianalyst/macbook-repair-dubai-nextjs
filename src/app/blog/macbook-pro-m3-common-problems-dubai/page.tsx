import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3Problems";

export const metadata: Metadata = {
  title: "MacBook Pro M3 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M3 common problems in Dubai? Wi-Fi 6E drops, display flickering, MagSafe charging issues, thermal throttling on M3 Pro.",
  openGraph: {
    title: "MacBook Pro M3 Common Problems? Fix Guide Dubai 2026",
    description: "Wi-Fi 6E drops, display flickering, MagSafe charging issues on MacBook Pro M3. Expert fixes in Dubai from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Pro M3 common problems, technician checking Wi-Fi antenna and MagSafe port at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M3 Common Problems? Fix Guide Dubai 2026",
    description: "Wi-Fi 6E drops, display flickering, MagSafe issues on MacBook Pro M3. Expert fixes in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-common-problems-dubai" />
      <View />
    </>
  );
}
