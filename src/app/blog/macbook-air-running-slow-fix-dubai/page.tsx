import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirRunningSlow";

export const metadata: Metadata = {
  title: "MacBook Air Running Slow Fix Dubai 2026 — M1 to M5",
  description: "MacBook Air running slow in Dubai? Thermal throttling, RAM pressure, startup items, and storage full explained. Free software fixes and repair from AED 300.",
  openGraph: {
    title: "MacBook Air Running Slow Fix Dubai 2026: M1 to M5 Speed Restore Guide",
    description: "MacBook Air slow in Dubai? Thermal throttling, RAM pressure, full SSD explained. Free fixes, performance service from AED 300.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-running-slow-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-macbook-performance-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air running slow, technician checking CPU throttling and memory pressure on MacBook Air at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Running Slow Fix Dubai 2026",
    description: "Thermal throttling, RAM pressure, full SSD. Free fixes, repair from AED 300.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-macbook-performance-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-running-slow-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-running-slow-fix-dubai" />
      <View />
    </>
  );
}
