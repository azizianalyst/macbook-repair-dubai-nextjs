"use client";
// Brand mark - MacBook Repair Dubai logo (public/logo-mrd.png, 512×512 with a
// transparent background). Rendered bare — no tile/chip — paired with a
// currentColor wordmark (so the text recolours: light on the dark hero/footer,
// ink on light pages).
type Props = {
  className?: string;
  /** show the "MacBook Repair Dubai" text next to the mark */
  withWordmark?: boolean;
  /** screen-reader label */
  title?: string;
};

export function Logo({ className, withWordmark = true, title = "MacBook Repair Dubai" }: Props) {
  return (
    <span
      role="img"
      aria-label={title}
      className={`inline-flex items-center gap-2 align-middle ${className ?? ""}`}
    >
      <img
        src="/logo-mrd.png"
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        className="h-9 w-9 flex-shrink-0 object-contain"
      />
      {withWordmark && (
        <span className="font-bold text-[17px] leading-none tracking-tight whitespace-nowrap text-current">
          MacBook Repair Dubai
        </span>
      )}
    </span>
  );
}

export default Logo;
