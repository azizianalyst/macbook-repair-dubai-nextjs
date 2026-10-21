// Invoice-based price ranges for the page's path (owner decision D17). Renders nothing on a page
// with no approved rows. The figures come only from src/content/repair-prices.ts; the matching
// Offer schema is added server-side by page-schema.ts from the same rows.
import { Receipt } from "lucide-react";
import { WhatsAppCTA } from "@/components/blocks/WhatsAppCTA";
import { PRICE_WINDOW, typicalPrice, repairPricesForPath } from "@/content/repair-prices";
import { cn } from "@/lib/utils";

type Props = {
  path: string;
  title?: string;
  /** Hide the Repair column when every row is the same repair (model pages). */
  showRepair?: boolean;
  className?: string;
};

export function RepairPriceTable({
  path,
  title = "What did customers actually pay?",
  showRepair,
  className,
}: Props) {
  const rows = repairPricesForPath(path);
  if (!rows.length) return null;
  const withRepair = showRepair ?? new Set(rows.map((r) => r.repair)).size > 1;
  const label = (r: (typeof rows)[number]) => (withRepair ? `${r.repair}, ${r.model}` : r.model);
  // Pages whose only rows cover any MacBook (board, liquid, trackpad) have no model number to show.
  const withNumbers = rows.some((r) => r.modelNumbers.length > 0);

  return (
    <section
      id="invoice-prices"
      aria-labelledby="invoice-prices-h"
      className={cn("mx-auto max-w-content px-5 md:px-6 mt-[80px] scroll-mt-24", className)}
    >
      <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3 flex items-center gap-2">
        <Receipt size={14} aria-hidden /> From our invoices
      </p>
      <h2 id="invoice-prices-h" className="text-[28px] md:text-[34px] font-bold tracking-tight text-text leading-[1.15]">
        {title}
      </h2>
      <p className="mt-3 text-[16px] text-text-muted max-w-[70ch] leading-relaxed">
        Typical price per model, including 5% VAT, taken from what customers paid on our VAT invoices from{" "}
        {PRICE_WINDOW}. Your final price is confirmed after the free diagnosis.
      </p>

      {/* Mobile: stacked cards so the price is never clipped off-screen. */}
      <ul className="md:hidden mt-lg flex flex-col gap-sm">
        {rows.map((r) => (
          <li key={r.id} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
            <p className="font-semibold text-text">{label(r)}</p>
            {r.modelNumbers.length > 0 && (
              <p className="text-[13px] text-text-muted">Model number: <span className="mono">{r.modelNumbers.join(", ")}</span></p>
            )}
            <p className="mt-xs text-[18px] font-bold text-accent whitespace-nowrap">{typicalPrice(r)}</p>
            <p className="mt-xs text-[13px] text-text-muted">Based on {r.invoices} invoices</p>
          </li>
        ))}
      </ul>
      <div className="hidden md:block mt-lg overflow-x-auto rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
        <table className="w-full border-collapse text-left text-[15px]">
          <caption className="sr-only">
            Typical repair prices in AED including VAT, from MacBook Repair Dubai invoices, {PRICE_WINDOW}
          </caption>
          <thead>
            <tr className="border-b border-border text-accent">
              {withRepair && <th scope="col" className="px-lg py-md font-semibold">Repair</th>}
              <th scope="col" className="px-lg py-md font-semibold">Model</th>
              {withNumbers && <th scope="col" className="px-lg py-md font-semibold">Model number</th>}
              <th scope="col" className="px-lg py-md font-semibold">Typical price (incl. VAT)</th>
              <th scope="col" className="px-lg py-md font-semibold">Invoices</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-border last:border-0">
                {withRepair && <td className="px-lg py-sm text-text">{r.repair}</td>}
                <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                {withNumbers && <td className="px-lg py-sm mono text-[13px] text-text-muted">{r.modelNumbers.length ? r.modelNumbers.join(", ") : "Any"}</td>}
                <td className="px-lg py-sm font-bold text-accent whitespace-nowrap">{typicalPrice(r)}</td>
                <td className="px-lg py-sm text-text-muted">{r.invoices}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {withNumbers && <p className="mt-md text-[13px] text-text-faint max-w-[72ch]">
        The model number (A plus four digits) is printed in small text on the bottom case of your MacBook.
        Not listed? We had fewer than five invoices for that model, too few for an honest range, so it is
        quoted on WhatsApp.
      </p>}
      <div className="mt-lg">
        <WhatsAppCTA message="Hi, I'd like the exact price for my repair. Model and fault: " label="Get my exact price on WhatsApp" />
      </div>
    </section>
  );
}

export default RepairPriceTable;
