# Date parser reads day-first tenant dates as month-first — 379 reports

379 unique reports in #4471 belong to the parser cause, across 11 tenants, received 2026-04-01 through 2026-10-04.

The shared parser reads dates month first even when the tenant locale writes the day first. Example R-41200: a 7 April reminder became 4 July. Expected: interpret day/month according to the tenant locale. Actual: month/day interpretation swaps ambiguous dates.

Count method: deduplicate the 427 export rows by report ID, filter mergedInto === 4471, resolve tenant locale and booking form, then run causes.ts/causeOf. There are 412 unique reports total: 379 parser and 33 hint. Browser locale, subject and intake tag are not reliable cause identifiers. These 379 include 356 tagged parser and 23 tagged hint. All five reports the desk read as a one-day move remain counted here by tenant; this observation alone does not establish a third cause.

Status: fixed. The course's live engineering update says #4471 closed 2026-10-05 with “fix(dates): parse dd/mm for eu locales”. This records the desk's status, not an independently verified deployment. The export predates that update.
