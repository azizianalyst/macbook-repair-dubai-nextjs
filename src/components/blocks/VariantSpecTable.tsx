// Side-by-side specs for the variants of one chip generation (e.g. MacBook Pro 14"/16" M5,
// M5 Pro, M5 Max). Used on the family page after the per-variant pages were merged into it
// (2026-10-21), so each variant's facts still have a home. Apple spec facts only: no prices,
// no turnaround times.
export type VariantRow = {
  name: string;
  aNum?: string;
  chip?: string;
  display?: string;
  memory?: string;
  storage?: string;
  ports?: string;
};

export function VariantSpecTable({ rows, caption }: { rows: VariantRow[]; caption: string }) {
  const cols: { key: keyof VariantRow; label: string }[] = [
    { key: "aNum", label: "Model number" },
    { key: "chip", label: "Chip" },
    { key: "display", label: "Display" },
    { key: "memory", label: "Memory (max)" },
    { key: "storage", label: "Storage" },
    { key: "ports", label: "Ports" },
  ];
  const shown = cols.filter((c) => rows.some((r) => r[c.key]));
  return (
    <div className="mt-md overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] text-left text-[13px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-bg-alt text-text">
          <tr>
            <th scope="col" className="px-3 py-2 font-semibold">Model</th>
            {shown.map((c) => (
              <th key={c.key} scope="col" className="px-3 py-2 font-semibold">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border align-top">
              <th scope="row" className="px-3 py-2 font-medium text-text whitespace-nowrap">{r.name}</th>
              {shown.map((c) => (
                <td key={c.key} className="px-3 py-2 text-text-muted">{r[c.key] || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
