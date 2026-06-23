import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1Problems";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M1 common problems in Dubai? Touch Bar failure, battery swelling on 4-5 year old units, charging IC faults, kernel panics.",
  openGraph: {
    title: "MacBook Pro M1 Common Problems? Fix Guide Dubai 2026",
    description: "Touch Bar failure, battery swelling, charging IC faults on MacBook Pro M1. Expert fixes in Dubai from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Pro M1 common problems, technician inspecting Touch Bar and battery health at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M1 Common Problems? Fix Guide Dubai 2026",
    description: "Touch Bar failure, battery swelling, charging faults on MacBook Pro M1. Expert fixes in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-common-problems-dubai" />
      <View />
    </>
  );
}
