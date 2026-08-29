import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProBatteryDrain";

export const metadata: Metadata = {
  title: "MacBook Pro Battery Draining Fast? Fixes & Costs Dubai 2026",
  description: "MacBook Pro battery draining fast in Dubai? 5 causes, rogue processes, screen brightness, degraded cell, macOS bugs, heat, with step-by-step fixes.",
  openGraph: {
    title: "MacBook Pro Battery Draining Fast? Fixes & Costs Dubai 2026",
    description: "MacBook Pro battery draining fast in Dubai? 5 causes with step-by-step fixes. Same-day battery replacement — message us on WhatsApp for a quote.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-battery-draining-fast",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-battery-health-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro battery draining fast, technician checking battery health at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro Battery Draining Fast? Fixes & Costs Dubai 2026",
    description: "5 causes diagnosed step-by-step. Same-day battery replacement in Dubai — message us for a quote.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-battery-health-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-battery-draining-fast",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-battery-draining-fast" />
      <View />
    </>
  );
}
