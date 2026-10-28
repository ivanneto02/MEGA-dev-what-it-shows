# Reproduce the desk page

Run `npm ci` and `npm run render` in this directory with Node 22 or later.
The lockfile pins the build dependencies. The generated standalone HTML is
`rendered/4471-review.html`; open it in a browser.

This is a static server-rendered snapshot of the supplied Svelte components and
mdsvex page, including the computed table, timeline, comparisons, and signature.
The example selectors are displayed in their initial state; the snapshot does not
hydrate them. The `.svx` source retains the interactive components for the desk's app.

The source export is dated 2026-10-04. Engineering status was checked on the course
challenge page on 2026-10-28. Original source files remain unchanged; decision 0002
supersedes decision 0001 without rewriting the accepted historical record.
