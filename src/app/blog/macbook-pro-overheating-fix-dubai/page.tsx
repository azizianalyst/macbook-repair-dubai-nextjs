import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProOverheating";

export const metadata: Metadata = {
  title: "MacBook Pro Overheating Fix Dubai: M1 to M5 Guide 2026",
  description: "MacBook Pro overheating fix in Dubai? 6 causes, CPU throttling, fan clog, thermal paste, Dubai heat damage, with step-by-step solutions. Repair from AED 250.",
  openGraph: {
    title: "MacBook Pro Overheating Fix Dubai: M1 to M5 Guide 2026",
    description: "MacBook Pro running hot in Dubai? 6 causes diagnosed step-by-step. Thermal paste from AED 250, same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-overheating-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/real/lab/macbook-fan-heatsink-dubai.jpg",
        width: 1200,
        height: 800,
        alt: "MacBook Pro fan and heatsink during thermal paste replacement at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro Overheating Fix Dubai: M1 to M5 Guide 2026",
    description: "6 causes diagnosed step-by-step. Thermal paste from AED 250 in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/real/lab/macbook-fan-heatsink-dubai.jpg"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-overheating-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-overheating-fix-dubai" />
      <View />
    </>
  );
}
