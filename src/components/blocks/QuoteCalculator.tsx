"use client";
// Instant-quote calculator (gap-audit strategic wedge — no UAE competitor has a working
// AED estimator). Reads our REAL per-model pricing from the model JSON data files, so every
// figure shown is a genuine published starting price — zero fabrication. WhatsApp is the
// finish step (prefilled with the exact model + service + estimate).
import { useState } from "react";
import { MessageCircle, Wallet, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAP } from "@/content/site";
import airModels from "@/content/macbook-air-models.json";
import proModels from "@/content/macbook-pro-models.json";
import imacModels from "@/content/imac-models.json";
import macDesktopModels from "@/content/mac-desktop-models.json";
import ipadModels from "@/content/ipad-models.json";
import ipodModels from "@/content/ipod-models.json";

type Model = { slug: string; name: string; shortName?: string; releaseYear?: number; pricing: Record<string, number> };

const GROUPS: { type: string; models: Model[] }[] = [
  { type: "MacBook Pro",            models: proModels as unknown as Model[] },
  { type: "MacBook Air",            models: airModels as unknown as Model[] },
  { type: "iMac",                   models: imacModels as unknown as Model[] },
  { type: "Mac mini · Studio · Pro", models: macDesktopModels as unknown as Model[] },
  { type: "iPad",                   models: ipadModels as unknown as Model[] },
  { type: "iPod touch",             models: ipodModels as unknown as Model[] },
].map((g) => ({ ...g, models: [...g.models].sort((a, b) => (b.releaseYear ?? 0) - (a.releaseYear ?? 0)) }));

const SERVICE_LABELS: Record<string, string> = {
  screen: "Screen replacement",
  battery: "Battery replacement",
  keyboard: "Keyboard repair",
  topCase: "Top case (keyboard + battery)",
  trackpad: "Trackpad repair",
  logicBoard: "Logic board repair",
  port: "Charging / port repair",
  speaker: "Speaker repair",
  fanCleaning: "Fan cleaning & thermal",
  cameraRepair: "Camera repair",
  faceId: "Face ID repair",
  homeButton: "Home button repair",
  waterDamage: "Water-damage treatment",
  thermalPaste: "Thermal paste service",
  ramUpgrade: "RAM upgrade",
  ssdUpgrade: "SSD upgrade",
  ssdRecovery: "SSD data recovery",
  fusionToSsd: "Fusion Drive → SSD",
  gpuModule: "GPU module repair",
  mpxModule: "MPX GPU module",
  powerSupply: "Power supply repair",
  psu: "Power supply (PSU)",
  diagnostic: "Diagnostic",
};

// Stable display order (so the service dropdown reads sensibly across families).
const SERVICE_ORDER = [
  "screen", "battery", "keyboard", "topCase", "trackpad", "logicBoard", "port", "speaker",
  "fanCleaning", "cameraRepair", "faceId", "homeButton", "waterDamage", "thermalPaste",
  "ramUpgrade", "ssdUpgrade", "ssdRecovery", "fusionToSsd", "gpuModule", "mpxModule",
  "powerSupply", "psu", "diagnostic",
];

const servicesFor = (m: Model) => {
  const keys = Object.keys(m.pricing || {});
  return SERVICE_ORDER.filter((k) => keys.includes(k));
};

// Deterministic thousands separator (avoids SSR/CSR hydration mismatch from toLocaleString).
const aed = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const SELECT =
  "w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3.5 h-11 text-[15px] text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function QuoteCalculator() {
  const [typeIdx, setTypeIdx] = useState(0);
  const [slug, setSlug] = useState(GROUPS[0].models[0]?.slug ?? "");
  const [service, setService] = useState(servicesFor(GROUPS[0].models[0])[0] ?? "screen");

  const models = GROUPS[typeIdx].models;
  const model = models.find((m) => m.slug === slug) ?? models[0];
  const services = servicesFor(model);
  const activeService = services.includes(service) ? service : services[0];
  const price = model?.pricing[activeService];

  const onType = (i: number) => {
    const m0 = GROUPS[i].models[0];
    setTypeIdx(i);
    setSlug(m0.slug);
    setService(servicesFor(m0)[0]);
  };
  const onModel = (s: string) => {
    const m = models.find((x) => x.slug === s) ?? models[0];
    setSlug(s);
    setService(servicesFor(m)[0]);
  };

  const priceLabel = price === 0 ? "Free" : price != null ? `From AED ${aed(price)}` : "—";
  const msg = `Hi, I'd like a quote for ${SERVICE_LABELS[activeService] ?? activeService} on my ${model?.name}. Your site estimates ${priceLabel.toLowerCase()}. Can you confirm?`;
  const waHref = `${NAP.whatsappUrl}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg md:p-xl">
      <div className="grid gap-md sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-text-muted">Device</span>
          <select className={SELECT} value={typeIdx} onChange={(e) => onType(Number(e.target.value))} aria-label="Device type">
            {GROUPS.map((g, i) => <option key={g.type} value={i}>{g.type}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-text-muted">Model</span>
          <select className={SELECT} value={model?.slug} onChange={(e) => onModel(e.target.value)} aria-label="Model">
            {models.map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-text-muted">Repair</span>
          <select className={SELECT} value={activeService} onChange={(e) => setService(e.target.value)} aria-label="Repair type">
            {services.map((k) => <option key={k} value={k}>{SERVICE_LABELS[k] ?? k}</option>)}
          </select>
        </label>
      </div>

      <div className="mt-lg flex flex-col gap-md rounded-md border border-accent/30 bg-accent/[0.07] p-lg sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Wallet size={22} className="mt-0.5 shrink-0 text-accent" aria-hidden />
          <div>
            <p className="m-0 text-[13px] text-text-muted">{SERVICE_LABELS[activeService] ?? activeService} · {model?.name}</p>
            <p className="m-0 text-[28px] font-bold leading-tight text-text">{priceLabel}</p>
            <p className="m-0 text-[12.5px] text-text-faint">Indicative starting price · same-day on most repairs</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-sm shrink-0">
          <Button asChild variant="whatsapp" size="lg">
            <a href={waHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Confirm on WhatsApp</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
            <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call</a>
          </Button>
        </div>
      </div>

      <p className="mt-md mb-0 text-[13px] leading-relaxed text-text-muted">
        Prices are our published starting rates from real per-model data. The exact price is fixed in
        writing after a free 20-minute diagnosis — and we&apos;ll tell you honestly if an Apple Store or
        AppleCare+ claim is the better route. iPhone repairs: WhatsApp us your model for a quote.
      </p>
    </div>
  );
}

export default QuoteCalculator;
