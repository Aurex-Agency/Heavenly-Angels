# First-round verification

- `npm run build`: nine HTML pages plus a custom 404, sitemap and robots.txt generated successfully.
- `npm test`: four passing test groups covering every generated page's unique title, description, single H1, structured-data JSON; local links/assets; phone-based contact flow; and presence of reduced-motion/navigation accessibility provisions.
- `node --check src/site.js` and `node --check scripts/serve.mjs`: passed.
- Desktop browser review: homepage, FAQ expansion, and navigation to the contact page checked.
- Responsive browser review: homepage rendered in 390px and 768px iframe viewports. Mobile menu opened correctly. Tablet navigation initially wrapped; breakpoint was corrected and visually rechecked.
- Mascot: transparent WebP, approximately 107 KB, correct intrinsic dimensions in HTML.
- Preview-only responsive test harness removed by a clean production rebuild; build now clears its own generated output to avoid stale files.

Screenshots are in docs/screenshots. These checks are not a full WCAG audit, a physical-device test, a field Core Web Vitals measurement, or verification of current business licensing. Actual phone calls and map directions were not initiated. Contact form delivery is not configured; contact actions use phone links.
