import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Problems";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M5 common problems in Dubai? OLED display issues, Thunderbolt 5 faults, thermal throttling, memory pressure on 16GB M5.",
  openGraph: {
    title: "MacBook Pro M5 Common Problems? Fix Guide Dubai 2026",
    description: "OLED display issues, Thunderbolt 5 faults, thermal throttling on MacBook Pro M5. Expert fixes and repair from AED 200 in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Pro M5 common problems, technician diagnosing OLED display and Thunderbolt 5 port at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Common Problems? Fix Guide Dubai 2026",
    description: "OLED display issues, Thunderbolt 5 faults, thermal throttling on MacBook Pro M5. Expert fixes in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-common-problems-dubai" />
      <View />
    </>
  );
}
