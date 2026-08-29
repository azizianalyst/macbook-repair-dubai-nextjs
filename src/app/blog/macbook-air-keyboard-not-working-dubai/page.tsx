import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirKeyboard";

export const metadata: Metadata = {
  title: "MacBook Air Keyboard Not Working Dubai 2026 — Fix Guide",
  description: "MacBook Air keyboard not working in Dubai? Butterfly (2018-2019) vs scissor fix. Desert-dust damage, top-case repair. Free diagnosis, message us for a quote.",
  openGraph: {
    title: "MacBook Air Keyboard Not Working Dubai 2026: Butterfly vs Scissor Fix Guide",
    description: "MacBook Air keyboard not working? Butterfly vs scissor mechanism explained. Desert dust damage, software fix, top-case repair in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-keyboard-not-working-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-macbook-keyboard-repair-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air keyboard not working, technician inspecting butterfly keyboard mechanism and key switches at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Keyboard Not Working Dubai 2026",
    description: "Butterfly vs scissor fix guide. Top-case keyboard repair in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-macbook-keyboard-repair-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-keyboard-not-working-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-keyboard-not-working-dubai" />
      <View />
    </>
  );
}
