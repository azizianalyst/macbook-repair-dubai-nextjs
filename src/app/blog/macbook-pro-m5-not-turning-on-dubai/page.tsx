import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5NotTurningOn";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Not Turning On Dubai 2026",
  description:
    "MacBook Pro M5 not turning on in Dubai? Black screen, no response to power button, or fans spin but no display. Step-by-step fix guide. Repair from AED 350.",
  openGraph: {
    title: "MacBook Pro M5 Not Turning On Dubai 2026: Dead or Black Screen Fix Guide",
    description:
      "M5 not turning on in Dubai? Force restart, charging check, black screen vs dead: full fix guide. Repair from AED 350.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-not-turning-on-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 not turning on, technician diagnosing dead black screen and power circuit at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Not Turning On Dubai 2026",
    description:
      "M5 dead or black screen in Dubai? Force restart and charging fix guide.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-not-turning-on-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-not-turning-on-dubai" />
      <View />
    </>
  );
}
