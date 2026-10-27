# First-round verification

- `npm run build`: nine HTML pages plus a custom 404, sitemap and robots.txt generated successfully.
- `npm test`: four passing test groups covering every generated page's unique title, description, single H1, structured-data JSON; local links/assets; phone-based contact flow; and presence of reduced-motion/navigation accessibility provisions.
- `node --check src/site.js` and `node --check scripts/serve.mjs`: passed.
- Desktop browser review: homepage, FAQ expansion, and navigation to the contact page checked.
- Responsive browser review: homepage rendered in 390px and 768px iframe viewports. Mobile menu opened correctly. Tablet navigation initially wrapped; breakpoint was corrected and visually rechecked.
- Mascot: transparent WebP, approximately 107 KB, correct intrinsic dimensions in HTML.
- Preview-only responsive test harness removed by a clean production rebuild; build now clears its own generated output to avoid stale files.

Screenshots are in docs/screenshots. These checks are not a full WCAG audit, a physical-device test, a field Core Web Vitals measurement, or verification of current business licensing. Actual phone calls and map directions were not initiated. Contact form delivery is not configured; contact actions use phone links.

## Photography and scroll animation update

- Added four locally hosted photographs found in the current site's HTML and inspected each image before placement. Sources and identification limits are recorded in photo-sources.md.
- Browser observed scene progression from 0 to 1, standing-to-flying pose change, and changing position/rotation/scale during scroll.
- Pause/resume button checked in the browser: accessible pressed state and label change correctly.
- Mobile story checked in a 390px iframe viewport. Sticky stage remains in view while photo/text chapters scroll underneath.
- Replaced progress-based long crossfades with short timed pose transitions to avoid a double-face appearance when the user stops midway.
- Build, four automated test groups, JavaScript syntax, and diff whitespace checks passed after the changes. Reduced-motion behavior is implemented in CSS/JS; an OS-level preference toggle was not exercised.
