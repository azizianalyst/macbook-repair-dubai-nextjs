import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import MediaLibrary from "@/components/blocks/MediaLibrary";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Media",
  robots: { index: false, follow: false },
};

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Media</h1>
      </div>
      <p className="mb-md text-[13px] text-text-muted">Upload and manage images. Use <strong className="text-text">Choose</strong> on a post or page&apos;s image field to pick one — or copy a path / markdown here. New uploads go live on the next deploy.</p>
      <MediaLibrary />
    </div>
  );
}
