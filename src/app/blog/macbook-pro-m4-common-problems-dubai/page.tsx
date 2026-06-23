import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4Problems";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M4 common problems in Dubai? First OLED display issues, Thunderbolt 5 faults, memory pressure on 16GB M4. Expert fixes and repair from AED 200.",
  openGraph: {
    title: "MacBook Pro M4 Common Problems? Fix Guide Dubai 2026",
    description: "First OLED display issues, Thunderbolt 5 faults, memory pressure on MacBook Pro M4. Expert fixes in Dubai from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Pro M4 common problems, technician testing first OLED display and Thunderbolt 5 ports at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M4 Common Problems? Fix Guide Dubai 2026",
    description: "First OLED display issues, Thunderbolt 5 faults on MacBook Pro M4. Expert fixes in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-common-problems-dubai" />
      <View />
    </>
  );
}
