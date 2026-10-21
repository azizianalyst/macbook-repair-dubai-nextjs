// Generates all manifest images via the Higgsfield CLI (nano_banana_2, 4:3, 2k),
// downloads the PNGs to scripts/topic-images/raw/, and journals progress to
// results.json so the run is resumable. Usage: node scripts/topic-images/generate.mjs
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdirSync, existsSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { get } from "node:https";
import { IMAGES, composePrompt, genericize } from "./manifest.mjs";

const exec = promisify(execFile);
const DIR = new URL(".", import.meta.url).pathname;
const RAW = `${DIR}raw`;
const JOURNAL = `${DIR}results.json`;
const CONCURRENCY = 4;

mkdirSync(RAW, { recursive: true });
const results = existsSync(JOURNAL) ? JSON.parse(readFileSync(JOURNAL, "utf8")) : {};
const save = () => writeFileSync(JOURNAL, JSON.stringify(results, null, 2));

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

async function generateOne(spec) {
  const dest = `${RAW}/${spec.file}.png`;
  if (results[spec.file]?.url && existsSync(dest)) return "cached";
  const prompts = [composePrompt(spec), genericize(composePrompt(spec))];
  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    const prompt = prompts[Math.min(attempt, 1)]; // attempt 0 branded, 1+ genericized
    try {
      const { stdout } = await exec(
        "higgsfield",
        ["generate", "create", "nano_banana_2", "--prompt", prompt,
         "--aspect_ratio", "4:3", "--resolution", "2k",
         "--wait", "--wait-timeout", "8m"],
        { timeout: 9 * 60 * 1000 },
      );
      const url = stdout.trim().split("\n").filter((l) => l.startsWith("https://")).pop();
      if (!url) throw new Error(`no URL in output: ${stdout.slice(-200)}`);
      await download(url, dest);
      results[spec.file] = { url, attempt, generic: attempt > 0 };
      save();
      return "ok";
    } catch (e) {
      lastErr = e;
      console.error(`[retry ${attempt + 1}] ${spec.file}: ${e.message?.slice(0, 160)}`);
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
  results[spec.file] = { error: String(lastErr?.message).slice(0, 300) };
  save();
  return "failed";
}

const queue = [...IMAGES];
let done = 0, failed = 0;
async function worker(id) {
  while (queue.length) {
    const spec = queue.shift();
    const status = await generateOne(spec);
    done++;
    if (status === "failed") failed++;
    console.log(`[${done}/${IMAGES.length}] ${spec.file} -> ${status}`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));
console.log(`DONE. ${IMAGES.length - failed}/${IMAGES.length} succeeded, ${failed} failed.`);
if (failed) process.exit(1);
