# Heavenly Angels — first website build

A responsive, statically generated marketing website for Heavenly Angels in West Point, Mississippi. No runtime framework or build dependencies; Node 20+ is required.

```sh
npm run build
npm test
npm run dev
```

Preview: http://127.0.0.1:4173. Deploy the generated `dist/` folder to any static host with directory index support. Use `404.html` for missing routes. No SPA fallback is needed.

## Editing

- `scripts/build.mjs`: page content, shared layouts, metadata, structured data, sitemap.
- `src/styles.css`: responsive visual system and reduced-motion behavior.
- `src/site.js`: accessible mobile menu and progressive section reveals.
- `public/assets/`: original mascot asset and SVG brand mark.
- `docs/content-sources.md`: source ledger, discrepancies, and launch confirmations.

The contact flow uses telephone and directions links. It does not pretend to submit a form. No email delivery, CRM, analytics, payment, or booking service is configured.

## Deployment review

This is a first-round design, not a replacement already deployed to the live domain. Confirm the business details in the source ledger before launch. Replace the concept identity if the owner prefers the existing logo. Four care photos have been carried over from the current website; see docs/photo-sources.md for provenance and license-continuity review. Add verified facility and staff photographs when available. The dove is an illustration, not a representation of the physical facility. Review privacy text against the eventual hosting/analytics stack. Add host-level redirects if existing URLs are discovered in Search Console. The canonical domain is https://heavenlyangelsms.com; protect staging from indexing at the host until launch.
