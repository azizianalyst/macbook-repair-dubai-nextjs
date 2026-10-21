"use client";
import { useState } from "react";
import { ImageIcon, X } from "lucide-react";
import MediaLibrary from "@/components/blocks/MediaLibrary";

// A text input for an image path + a "Choose" button that opens the Media Library to pick one.
// Used for hero / OG / Twitter image fields so the owner never types a path by hand.
export default function ImagePicker({
  value, onChange, placeholder,
}: {
  value: string;
  onChange: (path: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex gap-2">
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder || "/images/…"}
          className="w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        <button type="button" onClick={() => setOpen(true)} className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-2 text-[13px] text-text-muted hover:text-text">
          <ImageIcon size={14} /> Choose
        </button>
      </div>
      {value && (
        <div className="mt-1.5 overflow-hidden rounded-md border border-border" style={{ maxWidth: 160 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" className="h-auto w-full object-cover" />
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-bg shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 className="m-0 text-[15px] font-semibold text-text">Media Library</h3>
              <button onClick={() => setOpen(false)} className="rounded-md p-1 text-text-muted hover:bg-bg-alt"><X size={18} /></button>
            </div>
            <div className="overflow-y-auto p-4">
              <MediaLibrary onPick={(p) => { onChange(p); setOpen(false); }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
