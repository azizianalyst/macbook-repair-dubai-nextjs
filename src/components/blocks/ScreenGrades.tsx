// The four MacBook screen grades with their warranty, from src/content/part-grades.ts.
import { SCREEN_GRADES } from "@/content/part-grades";
import { cn } from "@/lib/utils";

export function ScreenGrades({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-lg sm:grid-cols-2 lg:grid-cols-4", className)}>
      {SCREEN_GRADES.map((g) => (
        <div
          key={g.id}
          className={cn(
            "rounded-2xl border bg-bg-card p-lg ring-1 ring-black/[0.03]",
            g.standard ? "border-accent/40 bg-accent/[0.06]" : "border-border/70",
          )}
        >
          <h3 className="m-0 mb-2 text-text text-[17px] font-bold">{g.name}</h3>
          <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">{g.what}</p>
          <p className="m-0 mono text-[13px] text-accent">
            {g.warranty} warranty{g.standard ? " · our standard screen" : ""}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ScreenGrades;
