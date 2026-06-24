import type { Metadata } from "next";
import GbpPlaybook from "@/components/blocks/GbpPlaybook";

export const metadata: Metadata = {
  title: "GBP Playbook",
  robots: { index: false, follow: false },
};

export default function GbpPlaybookPage() {
  return <GbpPlaybook />;
}
