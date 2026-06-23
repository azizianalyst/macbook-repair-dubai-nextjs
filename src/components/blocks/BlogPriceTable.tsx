"use client";
// Lightweight inline pricing table for use inside blog post body JSX.
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
type Row = { model: string; ours: string; apple?: string; note?: string };

export function BlogPriceTable({
  caption,
  headers = ["Model", "Our price (AED)", "Apple Store (AED)", "Notes"],
  rows,
}: {
  caption: string;
  headers?: string[];
  rows: Row[];
}) {
  return (
    <figure className="my-lg">
      <figcaption className="text-[13px] text-text-muted mb-sm mono">{caption}</figcaption>
      <ScrollHintTable className="border border-border rounded-md bg-bg-card" fadeClass="from-bg-card">
        <table className="w-full text-[14px] min-w-[560px]">
          <thead className="bg-bg-card">
            <tr className="text-left">
              {headers.map((h) => (
                <th key={h} className="px-md py-sm font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.model} className={i % 2 ? "bg-bg-alt" : ""}>
                <td className="px-md py-sm font-semibold">{r.model}</td>
                <td className="px-md py-sm">{r.ours}</td>
                {headers.length >= 3 && <td className="px-md py-sm text-text-muted">{r.apple ?? "-"}</td>}
                {headers.length >= 4 && <td className="px-md py-sm text-text-muted">{r.note ?? "-"}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollHintTable>
    </figure>
  );
}
