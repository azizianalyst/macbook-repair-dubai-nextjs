"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAP } from "@/content/site";

export function QuoteForm() {
  const [v, setV] = useState({ first: "", last: "", email: "", phone: "", device: "", message: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV({ ...v, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'd like a free quote.\nName: ${v.first} ${v.last}\nEmail: ${v.email}\nPhone: ${v.phone}\nDevice: ${v.device}\nIssue: ${v.message}`;
    window.open(`${NAP.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const inputCls = "w-full rounded-md border border-border bg-bg-card px-3.5 h-11 text-[15px] text-text placeholder:text-text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const labelCls = "block text-[13px] font-medium text-text-muted mb-1";

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-bg-card p-lg grid gap-md">
      <div className="grid gap-md sm:grid-cols-2">
        <label>
          <span className={labelCls}>First name</span>
          <input className={inputCls} name="first-name" autoComplete="given-name" placeholder="e.g. Ahmed" value={v.first} onChange={set("first")} />
        </label>
        <label>
          <span className={labelCls}>Last name</span>
          <input className={inputCls} name="last-name" autoComplete="family-name" placeholder="e.g. Al Mansoori" value={v.last} onChange={set("last")} />
        </label>
      </div>
      <label>
        <span className={labelCls}>Email <span className="text-text-faint font-normal">(optional)</span></span>
        <input className={inputCls} type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@example.com" value={v.email} onChange={set("email")} />
      </label>
      <label>
        <span className={labelCls}>Phone number <span className="text-accent" aria-hidden="true">*</span></span>
        <input className={inputCls} type="tel" name="phone" autoComplete="tel" inputMode="tel" required placeholder="05x xxx xxxx" value={v.phone} onChange={set("phone")} />
      </label>
      <label>
        <span className={labelCls}>Device model <span className="text-accent" aria-hidden="true">*</span></span>
        <input className={inputCls} name="device-model" required placeholder={'e.g. MacBook Pro 14" M3 2023'} value={v.device} onChange={set("device")} />
      </label>
      <label>
        <span className={labelCls}>Describe the issue</span>
        <textarea className={`${inputCls} h-auto py-2.5`} name="message" rows={3} placeholder="e.g. screen cracked, battery draining fast…" value={v.message} onChange={set("message")} />
      </label>
      <Button type="submit" variant="whatsapp" size="lg" className="w-full">
        <MessageCircle aria-hidden /> Submit &amp; chat on WhatsApp
      </Button>
    </form>
  );
}

export default QuoteForm;
