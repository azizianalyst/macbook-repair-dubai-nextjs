import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogAppleRepairAppointment";

export const metadata: Metadata = metaFromFields("/blog/apple-repair-appointment-dubai", {
  title: "Apple Repair Appointment in Dubai: How to Book and Prepare",
  description: "How to book an Apple Store or Genius Bar repair appointment in Dubai, what to bring, how to prepare your device, and when independent repair fits better.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/apple-repair-appointment-dubai" />
      <View />
    </>
  );
}
