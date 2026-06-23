import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelProblems";

export const metadata: Metadata = {
  title: "MacBook Pro Intel Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro Intel common problems in Dubai? Butterfly keyboard failure, AMD GPU solder crack, Flexgate display cable, T2 chip issues. Expert fixes from AED 150.",
  openGraph: {
    title: "MacBook Pro Intel Common Problems? Fix Guide Dubai 2026",
    description: "Butterfly keyboard, AMD GPU failure, Flexgate, T2 chip issues on MacBook Pro Intel. Expert fixes in Dubai from AED 150.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/guide-macbook-basics-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Pro Intel common problems, technician repairing butterfly keyboard and AMD GPU at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro Intel Common Problems? Fix Guide Dubai 2026",
    description: "Butterfly keyboard, AMD GPU, Flexgate, T2 chip fixes for MacBook Pro Intel in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/guide-macbook-basics-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-common-problems-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-common-problems-dubai" />
      <View />
    </>
  );
}
