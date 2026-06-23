"use client";
import { useState } from "react";
import { ArrowLeft, DollarSign, MonitorSmartphone } from "lucide-react";
import PricesAdmin from "@/components/blocks/PricesAdmin";
import ScreenPricesAdmin from "@/components/blocks/ScreenPricesAdmin";

// One "Prices" hub — both price systems in a single place (de-fragmented):
//  • Service prices  → the headline service prices that drive /pricing + Offer/Service schema.
//  • Screen ladders  → per-model screen prices (with Apple comparison) for the cost-guides + screen pages.
const TABS = [
  { id: "service", label: "Service prices", Icon: DollarSign, desc: "Headline service prices — drives the /pricing tables and the Offer/Service schema Google sees." },
  { id: "screen", label: "Screen ladders", Icon: MonitorSmartphone, desc: "Per-model screen replacement prices with Apple comparison — feeds the cost-guides and screen-repair pages." },
] as const;
type TabId = (typeof TABS)[number]["id"];

export default function PricesHub() {
  const [tab, setTab] = useState<TabId>("service");
  const active = TABS.find((t) => t.id === tab) ?? TABS[0];

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Prices</h1>
      </div>

      {/* Tab bar */}
      <div className="mb-3 flex flex-wrap gap-1 border-b border-border">
        {TABS.map(({ id, label, Icon }) => (
          <button key={id} onClick={() => setTab(id)}
            className={`inline-flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-[13px] ${tab === id ? "border-accent font-semibold text-text" : "border-transparent text-text-muted hover:text-text"}`}>
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>
      <p className="mb-md text-[13px] text-text-faint">{active.desc}</p>

      {tab === "service" && <PricesAdmin embedded pricesFocus />}
      {tab === "screen" && <ScreenPricesAdmin embedded />}
    </div>
  );
}
