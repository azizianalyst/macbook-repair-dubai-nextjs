import { z } from "zod";

// Import `z` from here, not from "zod", in any schema that reaches the browser.
// Zod 4 builds each z.object() with a JIT fast path, and to decide whether it may,
// it probes `new Function("")` once at construction. Our CSP has no 'unsafe-eval'
// (see next.config.mjs), so the probe is blocked; Zod catches it, but Chrome still
// logs a CSP issue, which costs Lighthouse best-practices ("inspector-issues").
// jitless skips the probe and the JIT; validation results are identical.
// It must run before the first z.object() is built, hence a module of its own.
z.config({ jitless: true });

export { z };
