import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5OledIssues";

export const metadata: Metadata = {
  title: "MacBook Pro M5 OLED Display Problems Dubai 2026",
  description: "MacBook Pro M5 OLED display issues in Dubai? Lines, flickering at low brightness, colour shift, burn-in. What is normal for OLED and what needs repair.",
  openGraph: {
    title: "MacBook Pro M5 OLED Display Problems Dubai 2026: Lines, Flicker, Burn-In Fix",
    description:
      "M5 OLED flickering, lines, or burn-in in Dubai? What is normal OLED behaviour and what needs repair. From AED 700.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-oled-display-issues-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 OLED display issue, technician examining flickering screen and display lines at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 OLED Display Problems Dubai 2026",
    description:
      "M5 OLED lines, flicker, burn-in: what is normal and what needs repair in Dubai.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical:
      "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-oled-display-issues-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-oled-display-issues-dubai" />
      <View />
    </>
  );
}
