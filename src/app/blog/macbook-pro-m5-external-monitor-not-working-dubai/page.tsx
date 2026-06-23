import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5ExternalMonitor";

export const metadata: Metadata = {
  title: "MacBook Pro M5 External Monitor Not Working Dubai? Fix Guide 2026",
  description: "MacBook Pro M5 external monitor not working in Dubai? Third display not detected, dock drops, fullscreen goes black.",
  openGraph: {
    title: "MacBook Pro M5 External Monitor Not Working Dubai? Fix Guide 2026",
    description:
      "M5 external monitor not working? Third display limit, dock firmware, fullscreen black bug explained. Free diagnosis in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-external-monitor-not-working-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 external monitor not working, technician testing Thunderbolt 5 display connections at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 External Monitor Not Working Dubai? Fix Guide 2026",
    description:
      "M5 external monitor not working? Third display, dock drops, fullscreen black: fix guide Dubai 2026.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical:
      "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-external-monitor-not-working-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-external-monitor-not-working-dubai" />
      <View />
    </>
  );
}
