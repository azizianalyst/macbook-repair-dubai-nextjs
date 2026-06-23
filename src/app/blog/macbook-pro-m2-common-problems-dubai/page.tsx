import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2Problems";

export const metadata: Metadata = {
  title: "MacBook Pro M2 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M2 common problems in Dubai? 13-inch SSD write amplification, charging faults, HDMI output glitches, battery swelling in older units.",
  openGraph: {
    title: "MacBook Pro M2 Common Problems? Fix Guide Dubai 2026",
    description: "SSD write amplification, charging faults, HDMI glitches on MacBook Pro M2. Expert fixes in Dubai from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Pro M2 common problems, technician checking SSD health and charging port at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M2 Common Problems? Fix Guide Dubai 2026",
    description: "SSD write amplification, charging faults, HDMI glitches on MacBook Pro M2. Expert fixes in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-common-problems-dubai" />
      <View />
    </>
  );
}
