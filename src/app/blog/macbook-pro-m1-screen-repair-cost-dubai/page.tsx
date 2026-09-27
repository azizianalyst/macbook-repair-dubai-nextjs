import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1ScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-screen-repair-cost-dubai", {
  title: "MacBook Pro M1 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M1 screen repair in Dubai: M1 13-inch IPS LCD, M1 Pro/Max 14/16-inch mini-LED and display cable faults. Quoted before any work, WhatsApp us.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
