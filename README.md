# Heavenly Angels website (rebuild)

Astro site for Heavenly Angels, a supervised living home and adult day program in West Point, Mississippi. This branch (`rebuild`) replaces the first-round static build with a Discord-inspired "twilight sky" design: bold all-caps type, rounded gradient panels, the dove mascot perched on panel edges, and a scroll-driven day-to-night sky.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- `src/pages/index.astro`: homepage sections and day-cycle chapter content.
- `src/data/site.ts`: business facts (addresses, phone), services, FAQs. Edit content here first.
- `src/components/Prop.astro`: clay-style SVG props, one per service.
- `src/components/LifeCard.astro`: app-style "today" cards used in the day cycle.
- `src/scripts/motion.ts`: header state, mobile menu, reveals, hero parallax, day-cycle sky.
- `src/styles/global.css`: design tokens and base styles. `src/styles/home.css`: homepage.
- `public/assets/dove/`: dove poses (welcome, flight, guide).
- `public/assets/brand/` and `public/assets/photos/`: logo, BBB seal, and photos. Sources and license notes are in `docs/photo-sources.md`.
- `docs/content-sources.md`: where each business fact came from and what the owner must confirm.

## Prototype status

Homepage only. The page carries `noindex` until launch (see `src/layouts/Base.astro`). Interior pages (Supervised Living, Adult Day Services, Getting Started, About, Golden Triangle service area, Contact) come next, along with a visit-request form and additional dove poses. Current photos are stock; swap in permission-cleared photos of the real home and team when available.
