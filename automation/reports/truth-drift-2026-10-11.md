# Truth drift scan (j07) — 2026-10-11 (run from chat)

`npm run check:seo`: 638 pages, known debt 33 (banned-claim 30, ai-phrase 1, meta-too-short 2), **0 new**.

## Time-based claims that had gone false
Apple's own pages were checked on 11 Oct 2026 (sources logged in `docs/apple-lineup-2026-09-26.md` §8):
- **Keyboard Service Program (butterfly keyboards):** Apple's page reads "The Apple Service Program you are looking for has ended." The site still said the program "covers" 2015–2019 models (MacBook model template FAQ and callout on every 2018–2019 butterfly model page), "eligible" / "may still apply" (model data), "still active for some models" (keyboard cost post H2), and gave unsourced end dates ("2018 to 2022", "2018-2021", "2024-2025 rolling").
- **13-inch Display Backlight Service Program ("Flexgate"):** Apple's page returns 404. The site gave unsourced dates ("May 2019 to May 2022", "ended in 2021", "expired in 2026"), called it a program that "only ran 4 years" (4 years was per-machine cover), and told a 2017 owner their Mac "may qualify" (the program covered 2016 13-inch only).

## Invented numbers removed
- "Our success rate for customers asking Apple is about 1 in 4" and "Apple Stores in UAE occasionally honour … as a goodwill gesture" (keyboard cost post, paragraph + FAQ).
- "Success rate from our referrals: about 1 in 5" + the same goodwill claim (Flexgate explainer, paragraph + FAQ).
- "About 1 in 4 iPhones … actually has a software issue" and "identifies which one in 10 minutes" (/iphone-software-fix…).
- "butterfly keyboards failed faster than anywhere" (butterfly guide hook); "Apple Store … DIFC" (no Apple Store there); "same as Apple's approach but at lower cost" (unpublished price comparison).

All rewritten to say the programmes have ended/closed with no date, and that the fault is now an out-of-warranty repair unless AppleCare still covers the Mac. Truth Auditor reviewed (two REVISE rounds, all items applied); Chief Editor checked the batch. dateModified bumped to 2026-10-11 on the four posts whose facts changed.

## Follow-ups (not fixed today)
- Static HTML still carries duplicate entity schema on blog posts, /reviews and /blog (PageSchema + view nodes) — new task t-schema-dup-static.
