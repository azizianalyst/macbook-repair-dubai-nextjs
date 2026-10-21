import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirWifiBluetooth";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-wifi-bluetooth-fix-dubai", {
  title: "MacBook Air WiFi & Bluetooth Fix Dubai 2026 — Dropping",
  description: "MacBook Air WiFi dropping or Bluetooth not working in Dubai? 6 software fixes to try at home, and signs it needs a board repair. WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-wifi-bluetooth-fix-dubai" />
      <View />
    </>
  );
}
