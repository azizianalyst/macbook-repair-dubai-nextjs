import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4M5Problems";

export const metadata: Metadata = {
  title: "MacBook Pro M4 M5 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M4 M5 common problems in Dubai? Display flicker, Wi-Fi drops, memory pressure, thermal throttle, USB-C faults, with step-by-step fixes.",
  openGraph: {
    title: "MacBook Pro M4 M5 Common Problems? Fix Guide Dubai 2026",
    description: "M4 M5 MacBook Pro problems in Dubai? Display flicker, Wi-Fi drops, USB-C faults diagnosed step-by-step. Repair from AED 350.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-m5-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/macbook-pro-common-repairs-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M4 M5 common problems, technician inspecting logic board and ports at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M4 M5 Common Problems? Fix Guide Dubai 2026",
    description: "Display flicker, Wi-Fi drops, memory pressure, thermal throttle, USB-C faults. Repair from AED 350 in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/macbook-pro-common-repairs-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-m5-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-m5-common-problems-dubai" />
      <View />
    </>
  );
}
