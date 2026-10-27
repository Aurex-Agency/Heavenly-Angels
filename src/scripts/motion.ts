// Homepage motion: header state, mobile menu, reveals, hero parallax, and the day-cycle sky.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Header + mobile menu */
const header = document.querySelector<HTMLElement>('[data-header]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const siteNav = document.getElementById('site-nav');

menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') !== 'true';
  menuBtn.setAttribute('aria-expanded', String(open));
  siteNav?.classList.toggle('open', open);
});
siteNav?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) {
    menuBtn?.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && siteNav?.classList.contains('open')) {
    menuBtn?.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
    menuBtn?.focus();
  }
});

/* Reveals */
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* Hero pointer parallax */
const scene = document.querySelector<HTMLElement>('[data-scene]');
if (scene && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const layers = [...scene.querySelectorAll<HTMLElement>('[data-depth]')];
  window.addEventListener('pointermove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    for (const layer of layers) {
      const d = Number(layer.dataset.depth);
      layer.style.transform = `translate3d(${(-x * 28 * d).toFixed(1)}px, ${(-y * 20 * d).toFixed(1)}px, 0)`;
    }
  });
}

/* Day cycle */
type RGB = [number, number, number];
const hex = (h: string): RGB => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
// One stop per beat: intro (dawn), then each chapter.
const skyStops: [RGB, RGB][] = [
  [hex('#2b2f7a'), hex('#f4a27a')], // dawn
  [hex('#78aef0'), hex('#fde4c6')], // morning
  [hex('#5b9bf0'), hex('#cfe6ff')], // midday
  [hex('#6c83de'), hex('#f9cda4')], // afternoon
  [hex('#3b2e78'), hex('#e5837a')], // evening
  [hex('#0d0f2e'), hex('#262a6e')], // night
];
const mix = (a: RGB, b: RGB, t: number) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`;
const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const smooth = (e0: number, e1: number, v: number) => {
  const t = clamp((v - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

const day = document.querySelector<HTMLElement>('[data-day]');
if (day) {
  let lastX = 0;
  let ticking = false;

  const update = () => {
    ticking = false;
    const rect = day.getBoundingClientRect();
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const p = clamp(-rect.top / Math.max(1, rect.height - vh));

    // Sky color
    const seg = p * (skyStops.length - 1);
    const i = Math.min(skyStops.length - 2, Math.floor(seg));
    const t = smooth(0, 1, seg - i);
    day.style.setProperty('--sky-top', mix(skyStops[i][0], skyStops[i + 1][0], t));
    day.style.setProperty('--sky-bottom', mix(skyStops[i][1], skyStops[i + 1][1], t));

    // Stars: fading out at dawn, back at night
    const night = p < 0.2 ? 0.7 * (1 - smooth(0, 0.18, p)) : smooth(0.72, 0.95, p);
    day.style.setProperty('--night', night.toFixed(3));

    // Sun arcs across the sky; the moon rises at the end
    const sunT = clamp((p - 0.04) / 0.76);
    const sunW = vw < 640 ? 100 : 150;
    day.style.setProperty('--sun-x', `${(0.06 * vw + sunT * (0.82 * vw - sunW / 2)).toFixed(1)}px`);
    day.style.setProperty('--sun-y', `${(0.62 * vh - Math.sin(Math.PI * sunT) * 0.5 * vh).toFixed(1)}px`);
    day.style.setProperty('--sun-o', (1 - smooth(0.7, 0.82, p)).toFixed(3));
    const moonT = smooth(0.7, 0.92, p);
    day.style.setProperty('--moon-x', `${(0.78 * vw - moonT * 0.06 * vw).toFixed(1)}px`);
    day.style.setProperty('--moon-y', `${(0.75 * vh - moonT * 0.6 * vh).toFixed(1)}px`);
    day.style.setProperty('--moon-o', moonT.toFixed(3));

    if (reduceMotion) return;

    // Clouds drift at different speeds
    day.style.setProperty('--c1', `${(p * 0.5 * vw).toFixed(1)}px`);
    day.style.setProperty('--c2', `${(-p * 0.35 * vw).toFixed(1)}px`);
    day.style.setProperty('--c3', `${(p * 0.2 * vw).toFixed(1)}px`);

    // Dove loops through the sky behind the panels
    const doveW = vw < 640 ? 100 : 150;
    const x = (0.5 + 0.42 * Math.sin(p * Math.PI * 3.2 - Math.PI / 2)) * (vw - doveW);
    const y = (0.14 + 0.1 * Math.cos(p * Math.PI * 6)) * vh;
    const dx = x - lastX;
    lastX = x;
    day.style.setProperty('--dove-x', `${x.toFixed(1)}px`);
    day.style.setProperty('--dove-y', `${y.toFixed(1)}px`);
    day.style.setProperty('--dove-r', `${clamp(dx * 0.4, -14, 14).toFixed(1)}deg`);
    if (Math.abs(dx) > 0.5) day.style.setProperty('--dove-flip', dx < 0 ? '-1' : '1');
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
    header?.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  update();
}
