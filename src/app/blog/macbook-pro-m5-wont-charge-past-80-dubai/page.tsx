import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Battery80Percent";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Won't Charge Past 80%? Dubai 2026",
  description: "MacBook Pro M5 stuck at 80% charge in Dubai? Optimised Battery Charging stops at 80% by design. Here is how it works, how to override it, and when it means a…",
  openGraph: {
    title: "MacBook Pro M5 Won't Charge Past 80%? Dubai 2026: Optimised Charging Explained",
    description:
      "M5 stuck at 80% charge? Optimised Battery Charging explained. How to charge to 100% now and when 80% is a real fault.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-wont-charge-past-80-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 stuck at 80 percent charge, technician checking MagSafe and battery settings at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Won't Charge Past 80%? Dubai 2026",
    description:
      "M5 stopping at 80% charge: Optimised Battery Charging explained for Dubai users.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical:
      "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-wont-charge-past-80-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-wont-charge-past-80-dubai" />
      <View />
    </>
  );
}
