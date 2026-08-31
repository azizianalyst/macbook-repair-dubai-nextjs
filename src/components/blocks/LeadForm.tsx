"use client";
import { useState } from "react";
import { Check, Loader2, MessageCircle, ChevronLeft, ChevronRight, Wrench, User } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAP } from "@/content/site";
import { LeadSchema, DEVICE_TYPES, CONTACT_METHODS, type Lead } from "@/lib/lead-schema";
import type { FormPreset } from "@/data/form-presets";

/**
 * Fallback chips for pages with no preset. Kept deliberately generic — a page
 * that resolves to a preset never sees this list. See src/data/form-presets.ts
 * for which slugs are unmatched on purpose.
 */
const ISSUES = [
  "Screen / display",
  "Battery",
  "Won't turn on / no power",
  "Keyboard / trackpad",
  "Liquid damage",
  "Charging / port",
  "Slow / software",
  "Data recovery",
  "Other",
];

type Errors = Partial<Record<keyof Lead, string>>;

const FIELD =
  "mt-1 bg-bg-card border border-border text-text placeholder:text-text-faint focus:border-accent";

const STEP_FIELDS: (keyof Lead)[][] = [
  ["deviceType", "model", "issue", "details"],
  ["name", "phone", "email", "preferredContact", "area"],
];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        // min-h-[44px]: chips were px-4 py-2 (~38px tall) and failed the 44px
        // tap-target rule the template standard requires. Measured, not eyeballed.
        "inline-flex items-center min-h-[44px] rounded-full border px-4 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        active
          ? "border-accent bg-accent/10 text-text font-semibold"
          : "border-border bg-bg-card text-text-muted hover:border-accent/40 hover:text-text",
      )}
    >
      {children}
    </button>
  );
}

export type LeadFormProps = {
  defaultDeviceType?: (typeof DEVICE_TYPES)[number];
  defaultModel?: string;
  defaultIssue?: string;
  sourcePath?: string;
  variant?: "full" | "compact";
  /**
   * Topic preset from src/data/form-presets.ts. When set, it supplies the
   * heading, the device subset, the issue chips and an optional third
   * qualifier, and declares which team the lead routes to. When omitted the
   * form behaves exactly as before — that fallback is the contract that makes
   * rolling this out page by page safe.
   */
  preset?: FormPreset | null;
  className?: string;
};

export function LeadForm({
  defaultDeviceType,
  defaultModel = "",
  defaultIssue = "",
  sourcePath = "",
  variant = "full",
  preset = null,
  className,
}: LeadFormProps) {
  /** Answer to the preset's optional third question, folded into `details`. */
  const [qualifier, setQualifier] = useState("");
  const [step, setStep] = useState(0); // 0 device · 1 contact · 2 review
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<Lead>({
    deviceType: defaultDeviceType ?? ("MacBook" as Lead["deviceType"]),
    model: defaultModel,
    issue: defaultIssue,
    details: "",
    name: "",
    phone: "",
    email: "",
    preferredContact: "WhatsApp",
    area: "",
    sourcePath,
    company: "",
  });

  const set = <K extends keyof Lead>(k: K, v: Lead[K]) => setForm((f) => ({ ...f, [k]: v }));

  function validateStep(s: number): boolean {
    const pick = Object.fromEntries(STEP_FIELDS[s].map((f) => [f, true]));
    // @ts-expect-error - dynamic pick mask is valid at runtime
    const res = LeadSchema.pick(pick).safeParse(form);
    if (res.success) {
      setErrors((e) => {
        const next = { ...e };
        STEP_FIELDS[s].forEach((f) => delete next[f]);
        return next;
      });
      return true;
    }
    const next: Errors = {};
    for (const i of res.error.issues) next[i.path[0] as keyof Lead] = i.message;
    setErrors((e) => ({ ...e, ...next }));
    return false;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 2));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function whatsappFallback() {
    const msg =
      `Hi, I'm ${form.name || "(name)"}. ${form.deviceType}${form.model ? " " + form.model : ""} — ${form.issue || "repair"}.` +
      (form.details ? ` ${form.details}` : "") +
      (form.area ? ` Area: ${form.area}.` : "") +
      (form.phone ? ` Contact: ${form.phone}.` : "");
    window.open(`${NAP.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }

  async function submit() {
    if (!validateStep(0) || !validateStep(1)) {
      setStep(!validateStep(0) ? 0 : 1);
      return;
    }
    setStatus("submitting");
    try {
      /**
       * Routing is taken from the preset's declared `route`, never inferred by
       * matching words in the free text. A chip answer like "Repairs for
       * several devices" contains no token that identifies the motion, so
       * regex inference would silently misroute it.
       */
      const payload: Lead = {
        ...form,
        details: qualifier
          ? `${form.details ? form.details + "\n" : ""}- [${preset?.qualifier?.name ?? "qualifier"}] ${qualifier}`
          : form.details,
        route: preset?.route,
        presetId: preset?.id,
      };
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 400 && data.errors) {
        setErrors(data.errors);
        setStep(STEP_FIELDS[0].some((f) => data.errors[f]) ? 0 : 1);
        setStatus("idle");
        return;
      }
      if (res.status === 429) {
        setStatus("idle");
        toast.error("You've sent a few already — let's continue on WhatsApp.");
        whatsappFallback();
        return;
      }
      throw new Error("request failed");
    } catch {
      setStatus("idle");
      toast.error("Couldn't send just now — opening WhatsApp instead.");
      whatsappFallback();
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-xl text-center", className)}>
        <div className="mx-auto mb-md flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Check size={24} aria-hidden />
        </div>
        <h3 className="text-[22px] font-bold text-text">Request received</h3>
        <p className="mt-sm text-[15px] text-text-muted max-w-[42ch] mx-auto">
          Thanks {form.name.split(" ")[0]} — we&apos;ll reply on {form.preferredContact.toLowerCase()} shortly with a
          quote and next steps. For an instant response you can also message us now.
        </p>
        <div className="mt-lg flex flex-wrap justify-center gap-sm">
          <Button asChild variant="whatsapp" size="lg">
            <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden /> Message on WhatsApp
            </a>
          </Button>
          <Button variant="secondary" size="lg" onClick={() => { setStatus("idle"); setStep(0); }}>
            Send another
          </Button>
        </div>
      </div>
    );
  }

  const stepMeta = [
    { n: 1, label: "Device", icon: Wrench },
    { n: 2, label: "Contact", icon: User },
    { n: 3, label: "Review", icon: Check },
  ];

  return (
    <div className={cn("rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg md:p-xl", className)}>
      {/* Preset heading. A page that sets no preset keeps the form exactly as
          it was — no heading, straight into the steps. */}
      {preset && (
        <div className="mb-lg">
          <h3 className="text-[22px] font-bold leading-tight text-text">{preset.heading}</h3>
          <p className="mt-sm max-w-[58ch] text-[15px] leading-relaxed text-text-muted">{preset.description}</p>
        </div>
      )}

      {/* progress / step indicator */}
      <div className="mb-lg">
        <div className="flex items-center justify-between gap-2">
          {stepMeta.map((m, i) => (
            <div key={m.n} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold",
                  i <= step ? "bg-accent text-white" : "bg-bg-card text-text-faint",
                )}
              >
                {i < step ? <Check size={14} aria-hidden /> : m.n}
              </span>
              <span className={cn("text-[13px] hidden sm:inline", i <= step ? "text-text" : "text-text-faint")}>
                {m.label}
              </span>
              {i < stepMeta.length - 1 && (
                <span className={cn("mx-1 h-px flex-1", i < step ? "bg-accent" : "bg-bg-card")} aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* honeypot (hidden from humans) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(e) => set("company", e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {/* STEP 1 — DEVICE */}
      {step === 0 && (
        <div className="grid gap-md">
          <div>
            <Label className="text-text-muted">
              {preset?.route === "buyback" ? "What are you selling?" : "What device needs repair?"}
            </Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {/* A preset may narrow the device list but never widen it — every
                  option must stay a real DEVICE_TYPES member or LeadSchema
                  rejects the submission server-side. */}
              {(preset?.devices ?? DEVICE_TYPES).map((d) => (
                <Chip key={d} active={form.deviceType === d} onClick={() => set("deviceType", d)}>{d}</Chip>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="model" className="text-text-muted">Model <span className="text-text-faint">(optional)</span></Label>
            <Input id="model" value={form.model} maxLength={80} onChange={(e) => set("model", e.target.value)}
              className={FIELD} placeholder='e.g. MacBook Pro 14" M2, iPhone 15 Pro' />
          </div>
          <div>
            <Label className="text-text-muted">
              {preset?.route === "buyback" ? "What condition is it in?" : "What's wrong?"}
            </Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {(preset?.issues ?? ISSUES).map((it) => (
                <Chip
                  key={it}
                  active={form.issue === it}
                  onClick={() => {
                    set("issue", it);
                    // Changing this answer invalidates the qualifier revealed
                    // below it — a stale answer must not ride along into the
                    // message.
                    setQualifier("");
                  }}
                >
                  {it}
                </Chip>
              ))}
            </div>
            {errors.issue && <p className="mt-1 text-[13px] text-danger">{errors.issue}</p>}
          </div>

          {/* Third question, revealed only once the one above it is answered,
              so the visitor never meets a wall of chips. */}
          {preset?.qualifier && form.issue && (
            <div>
              <Label className="text-text-muted">
                {preset.qualifier.label} <span className="text-text-faint">(optional)</span>
              </Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {preset.qualifier.options.map((o) => (
                  <Chip key={o} active={qualifier === o} onClick={() => setQualifier(qualifier === o ? "" : o)}>
                    {o}
                  </Chip>
                ))}
              </div>
            </div>
          )}
          <div>
            <Label htmlFor="details" className="text-text-muted">Describe the problem <span className="text-text-faint">(optional)</span></Label>
            <Textarea id="details" value={form.details} maxLength={1000} onChange={(e) => set("details", e.target.value)}
              className={cn(FIELD, "min-h-[90px]")} placeholder="When it started, any drops/spills, error messages…" />
          </div>
        </div>
      )}

      {/* STEP 2 — CONTACT */}
      {step === 1 && (
        <div className="grid gap-md">
          <div>
            <Label htmlFor="name" className="text-text-muted">Your name</Label>
            <Input id="name" value={form.name} maxLength={80} autoComplete="name" onChange={(e) => set("name", e.target.value)}
              className={FIELD} aria-invalid={!!errors.name} />
            {errors.name && <p className="mt-1 text-[13px] text-danger">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="phone" className="text-text-muted">Phone / WhatsApp number</Label>
            <Input id="phone" value={form.phone} maxLength={20} type="tel" inputMode="tel" autoComplete="tel"
              onChange={(e) => set("phone", e.target.value)} className={FIELD} placeholder="+971 5x xxx xxxx" aria-invalid={!!errors.phone} />
            {errors.phone && <p className="mt-1 text-[13px] text-danger">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-text-muted">Email <span className="text-text-faint">(optional)</span></Label>
            <Input id="email" value={form.email} maxLength={120} type="email" autoComplete="email"
              onChange={(e) => set("email", e.target.value)} className={FIELD} aria-invalid={!!errors.email} />
            {errors.email && <p className="mt-1 text-[13px] text-danger">{errors.email}</p>}
          </div>
          <div>
            <Label className="text-text-muted">Best way to reach you</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {CONTACT_METHODS.map((m) => (
                <Chip key={m} active={form.preferredContact === m} onClick={() => set("preferredContact", m)}>{m}</Chip>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="area" className="text-text-muted">Your area in Dubai <span className="text-text-faint">(optional — for free pickup)</span></Label>
            <Input id="area" value={form.area} maxLength={80} onChange={(e) => set("area", e.target.value)}
              className={FIELD} placeholder="e.g. Dubai Marina, Business Bay" />
          </div>
        </div>
      )}

      {/* STEP 3 — REVIEW */}
      {step === 2 && (
        <div className="grid gap-md">
          <h3 className="text-[18px] font-bold text-text">Review &amp; send</h3>
          <dl className="rounded-md border border-border bg-bg-alt p-md text-[14px]">
            {[
              ["Device", `${form.deviceType}${form.model ? " · " + form.model : ""}`],
              ["Issue", form.issue],
              ["Details", form.details || "—"],
              ["Name", form.name],
              ["Phone", form.phone],
              ["Email", form.email || "—"],
              ["Prefers", form.preferredContact],
              ["Area", form.area || "—"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-border py-1.5 last:border-0">
                <dt className="w-24 shrink-0 text-text-faint">{k}</dt>
                <dd className="text-text">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[12px] text-text-faint">
            By sending you agree we may contact you about your repair. We never share your details.
          </p>
        </div>
      )}

      {/* nav */}
      <div className="mt-lg flex items-center justify-between gap-sm">
        {step > 0 ? (
          <Button variant="secondary" onClick={back} disabled={status === "submitting"}>
            <ChevronLeft aria-hidden /> Back
          </Button>
        ) : <span />}
        {step < 2 ? (
          <Button variant="whatsapp" onClick={next}>
            Next <ChevronRight aria-hidden />
          </Button>
        ) : (
          <Button variant="whatsapp" onClick={submit} disabled={status === "submitting"}>
            {status === "submitting" ? <><Loader2 className="animate-spin" aria-hidden /> Sending…</> : <>Send request <Check aria-hidden /></>}
          </Button>
        )}
      </div>

      {/* Urgent presets lead with WhatsApp — somebody whose only copy of their
          data is on a failing drive should not be waiting on email. The form
          stays, demoted to the secondary action. */}
      {preset?.primaryCta === "whatsapp" ? (
        <div className="mt-lg rounded-md border border-accent/30 bg-accent/5 p-md text-center">
          <p className="text-[14px] text-text-muted">
            Faster for urgent cases — we usually reply within minutes during workshop hours.
          </p>
          <Button variant="whatsapp" size="lg" className="mt-sm" onClick={whatsappFallback}>
            <MessageCircle aria-hidden /> Message us on WhatsApp
          </Button>
        </div>
      ) : (
        variant === "full" && (
          <p className="mt-md text-center text-[13px] text-text-muted">
            Prefer to chat now?{" "}
            <button
              type="button"
              onClick={whatsappFallback}
              className="inline-flex min-h-[44px] items-center font-semibold text-accent hover:underline"
            >
              Message us on WhatsApp
            </button>
          </p>
        )
      )}
    </div>
  );
}

export default LeadForm;
