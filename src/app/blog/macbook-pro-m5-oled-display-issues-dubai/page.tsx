import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5OledIssues";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-oled-display-issues-dubai", {
  title: "MacBook Pro M5 OLED Display Problems Dubai 2026",
  description: "MacBook Pro M5 OLED display issues in Dubai? Lines, flickering at low brightness, colour shift, burn-in. What is normal for OLED and what needs repair.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-oled-display-issues-dubai" />
      <View />
    </>
  );
}
