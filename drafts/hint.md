# Booking-v3 shows a month-first hint to day-first tenants — 33 reports

33 unique reports in #4471 belong to the hint cause, across 3 tenants, received 2026-04-17 through 2026-09-22.

booking-v3 prints MM/DD/YYYY, but its form interprets input in the tenant's day-first order. People following the hint get swapped dates. Example R-41230 (copper.studio, form): a client came on 1 June instead of 6 January. Expected: the displayed hint agrees with the interpretation of the entered date.

Count method: deduplicate by report ID, filter mergedInto === 4471, resolve the tenant, and run causes.ts/causeOf. These are form reports for day-first tenants using booking-v3. Of the 33, intake tagged 15 as parser and 18 as hint. They are separate from the 379 parser reports; fixing the shared parser does not itself correct the misleading hint.

Status: won't fix. The live course engineering update says booking-v3 was retired and #4471 closed 2026-10-05. Record the separate cause despite the retirement; do not present it as an outstanding fix.
