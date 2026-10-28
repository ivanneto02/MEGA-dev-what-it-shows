# S01E03 — what it shows

Review of the course support desk export for ticket #4471.

- [Signed replacement KB decision](src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx)
- [Rendered desk page (download and open in a browser)](rendered/0002-dedupe-by-cause.html)
- [Reproduce the rendering](BUILD.md)
- [Parser issue draft](drafts/parser.md)
- [Hint issue draft](drafts/hint.md)

The supplied classifier yields 379 parser reports and 33 hint reports after
ID deduplication: 412 reports from 427 export rows. The five one-day observations
remain footnoted within the parser count. Original KB files are preserved.

The course's live engineering update, checked 2026-10-28, says the parser was
fixed and the hint was closed as won't fix because booking-v3 was retired.
The new decision replaces subject-based deduplication with cause-based triage.
