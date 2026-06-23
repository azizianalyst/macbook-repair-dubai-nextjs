import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirWifiBluetooth";

export const metadata: Metadata = {
  title: "MacBook Air WiFi & Bluetooth Fix Dubai 2026 — Dropping",
  description: "MacBook Air WiFi dropping or Bluetooth not connecting in Dubai? 6 software fixes plus when it needs board repair. Free diagnosis, wireless repair from AED 400.",
  openGraph: {
    title: "MacBook Air WiFi Bluetooth Fix Dubai 2026: Dropping, Slow, Won't Connect",
    description: "MacBook Air WiFi dropping or Bluetooth failing? Dubai building congestion explained. 6 fixes, wireless repair from AED 400.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-wifi-bluetooth-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-macbook-wifi-fix-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air WiFi Bluetooth fix, technician checking wireless antenna and logic board at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air WiFi Bluetooth Fix Dubai 2026",
    description: "WiFi dropping or Bluetooth failing? 6 fixes. Repair from AED 400 in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-macbook-wifi-fix-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-wifi-bluetooth-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-wifi-bluetooth-fix-dubai" />
      <View />
    </>
  );
}
