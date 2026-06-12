"use client";
import { useEffect } from "react";

// Content protection: disables the right-click menu AND copy/cut site-wide to deter
// casual copying of page content. Paired with a CSS `user-select: none` rule in
// globals.css. Editable fields (input/textarea/select/contentEditable) are exempt
// so the booking & quote forms still work (paste, select, autofill).
//
// NOTE: a deterrent only. Content is still reachable via DevTools, "view-source:",
// the raw HTML, or with JavaScript disabled — no client-side trick can truly prevent
// a determined visitor from copying.
export function NoContextMenu() {
  useEffect(() => {
    const isEditable = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      return !!el && (el.closest("input, textarea, select") != null || el.isContentEditable);
    };
    const onContextMenu = (e: MouseEvent) => { if (!isEditable(e.target)) e.preventDefault(); };
    const onCopyCut = (e: ClipboardEvent) => { if (!isEditable(e.target)) e.preventDefault(); };
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopyCut);
    document.addEventListener("cut", onCopyCut);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopyCut);
      document.removeEventListener("cut", onCopyCut);
    };
  }, []);
  return null;
}
