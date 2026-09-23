#!/usr/bin/env node
// Lead-delivery canary for macbook-repair-dubai.ae.
//
// Answers one question the rest of the audit stack cannot: when a visitor submits
// the repair form, does a human actually get told? A 200 and a "Message sent!"
// toast prove nothing on their own - the classic failure is a lead written to a
// table nobody reads while every dashboard stays green.
//
// The generic /lead-delivery-canary script speaks a Supabase-shaped payload and
// fails this site's schema before it ever reaches the delivery logic, so this is
// the project-local version: same contract, our field names.
//
// Usage:
//   node scripts/lead-canary.mjs                         # against production
//   node scripts/lead-canary.mjs --endpoint http://localhost:3000/api/lead/
//   node scripts/lead-canary.mjs --json                  # for cron/CI
//   node scripts/lead-canary.mjs --require email,crm     # fail unless these say "sent"
//
// Exit code 0 = leads are reaching a human. Non-zero = they are not. Alert on non-zero.

const args = process.argv.slice(2);
const flag = (n, d = null) => {
  const i = args.indexOf(`--${n}`);
  return i === -1 ? d : args[i + 1] ?? true;
};
const has = (n) => args.includes(`--${n}`);

const ENDPOINT = flag("endpoint", "https://macbook-repair-dubai.ae/api/lead/");
const ORIGIN = flag("origin", "https://macbook-repair-dubai.ae");
const REQUIRE = String(flag("require", "")).split(",").map((s) => s.trim()).filter(Boolean);
const TIMEOUT = Number(flag("timeout", 20000));
const JSON_OUT = has("json");

const C = JSON_OUT
  ? { g: (s) => s, r: (s) => s, y: (s) => s, dim: (s) => s }
  : { g: (s) => `\x1b[32m${s}\x1b[0m`, r: (s) => `\x1b[31m${s}\x1b[0m`, y: (s) => `\x1b[33m${s}\x1b[0m`, dim: (s) => `\x1b[2m${s}\x1b[0m` };

const results = [];
const check = (name, pass, detail) => {
  results.push({ name, pass, detail });
  if (!JSON_OUT) {
    const tag = pass === true ? C.g("  PASS") : pass === null ? C.y("  ??  ") : C.r("  FAIL");
    console.log(`${tag}  ${name}`);
    if (detail) console.log(C.dim(`        ${detail}`));
  }
};

async function post(body, { origin = ORIGIN } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT);
  try {
    const headers = { "Content-Type": "application/json" };
    if (origin) headers.Origin = origin;
    const res = await fetch(ENDPOINT, { method: "POST", headers, body: JSON.stringify(body), signal: ctrl.signal });
    const text = await res.text();
    let json = null;
    try { json = JSON.parse(text); } catch { /* keep raw */ }
    return { status: res.status, json, text };
  } catch (err) {
    return { status: 0, json: null, text: String(err?.message || err) };
  } finally { clearTimeout(t); }
}

// Tagged so canary rows never pollute real reporting: name starts "CANARY ",
// phone is in a reserved +9715000000xx block. Clean up with the query in the
// audit doc, or filter device_type/model = "CANARY" in the dashboard.
const stamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(8, 14);
const validLead = () => ({
  name: `CANARY delivery test ${stamp} - please ignore`,
  phone: `+9715000${String(Math.floor(Math.random() * 90000) + 10000)}`,
  deviceType: "MacBook",
  model: "CANARY",
  issue: `Automated lead-delivery canary. Not a real customer. Safe to delete. (${stamp})`,
  preferredContact: "WhatsApp",
});

async function main() {
  if (!JSON_OUT) console.log(`\nLead canary -> ${ENDPOINT}\n`);

  // ---- Delivery: the point of the whole exercise ----
  const happy = await post(validLead());
  check("endpoint accepts a valid lead (HTTP 200)", happy.status === 200,
    happy.status === 200 ? null : `got HTTP ${happy.status} ${happy.text.slice(0, 200)}`);

  const body = happy.json || {};
  check("response says ok:true", body.ok === true,
    body.ok === true ? null : `ok=${body.ok} - a 200 with ok:false is the classic silent failure`);

  check("lead was STORED (an id came back)", Number.isInteger(body.id),
    Number.isInteger(body.id) ? `id=${body.id}` : "no id - the row was not written, or the endpoint predates the id contract");

  const n = body.notified;
  const hasNotified = n && typeof n === "object";
  check("response reports per-channel delivery", Boolean(hasNotified),
    hasNotified ? Object.entries(n).map(([k, v]) => `${k}=${v}`).join(" ")
                : "no `notified` object - the endpoint cannot tell you whether anyone was told");

  if (hasNotified) {
    const entries = Object.entries(n);
    const sent = entries.filter(([, v]) => v === "sent").map(([k]) => k);
    const failed = entries.filter(([, v]) => v === "failed").map(([k]) => k);
    const pending = entries.filter(([, v]) => v === "pending").map(([k]) => k);

    check("AT LEAST ONE channel delivered", sent.length > 0,
      sent.length ? `sent=[${sent.join(", ")}]`
                  : `NOTHING delivered - a lead was saved but NO HUMAN WAS TOLD`);

    check("no configured channel failed", failed.length === 0,
      failed.length ? `failed=[${failed.join(", ")}] - configured but erroring` : "none failing");

    if (pending.length) {
      check(`slow channels finished inside the budget`, null,
        `pending=[${pending.join(", ")}] - dispatched but unconfirmed; check server logs`);
    }

    for (const r of REQUIRE) {
      check(`required channel "${r}" delivered`, n[r] === "sent", `${r}=${n[r] ?? "not reported"}`);
    }
  }

  // ---- Hardening: regression guards ----
  const empty = await post({});
  check("empty body is REJECTED (not silently stored)", empty.status >= 400 && empty.status < 500,
    `got HTTP ${empty.status}`);

  const foreign = await post(validLead(), { origin: "https://evil.example.com" });
  check("foreign Origin is rejected", foreign.status === 403, `got HTTP ${foreign.status}`);

  const pot = await post({ ...validLead(), company: "bot-filled" });
  const potOk = pot.status === 200 && pot.json?.ok === true && pot.json?.id == null;
  check("honeypot submissions are dropped", potOk,
    potOk ? "200 with no id - accepted-looking but not stored"
          : `HTTP ${pot.status} id=${pot.json?.id ?? "none"} - a filled honeypot should look accepted but store nothing`);

  const failures = results.filter((r) => r.pass === false);
  const unknown = results.filter((r) => r.pass === null);

  if (JSON_OUT) {
    console.log(JSON.stringify({ endpoint: ENDPOINT, ok: failures.length === 0, failures: failures.length, results }, null, 2));
  } else {
    console.log("");
    if (failures.length === 0) console.log(C.g(`All ${results.length} checks passed - leads are reaching a human.`));
    else {
      console.log(C.r(`${failures.length} of ${results.length} checks FAILED.`));
      for (const f of failures) console.log(`  · ${f.name} - ${f.detail ?? ""}`);
    }
    if (unknown.length) console.log(C.y(`${unknown.length} inconclusive`));
  }
  process.exit(failures.length === 0 ? 0 : 1);
}

main().catch((e) => { console.error("canary crashed:", e); process.exit(2); });
