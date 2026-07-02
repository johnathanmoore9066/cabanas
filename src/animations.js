import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { marqueeWords } from './content.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

let lenis = null;

export function getLenis() {
  return lenis;
}

/* ---------- smooth scroll ---------- */
export function initSmoothScroll() {
  if (!motionOK) return;

  lenis = new Lenis({ lerp: 0.105, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function scrollToTarget(target) {
  const offset = -(document.getElementById('nav')?.offsetHeight || 72) - 8;
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.4 });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
  }
}

/* ---------- nav show/hide ---------- */
export function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let lastY = 0;
  const onScroll = (y) => {
    nav.classList.toggle('nav--scrolled', y > 40);
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (y > 340 && goingDown) nav.classList.add('nav--hidden');
    else if (goingUp || y <= 340) nav.classList.remove('nav--hidden');
    lastY = y;
  };

  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
}

/* ---------- hero ---------- */
export function initHero() {
  if (!motionOK) return;

  const chars = document.querySelectorAll('.hero__char');
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.to(chars, { y: 0, duration: 1.25, stagger: 0.065 }, 0.15)
    .to('.hero__eyebrow', { opacity: 1, duration: 0.8 }, 0.55)
    .to('.hero__foot', { opacity: 1, duration: 0.9 }, 0.8);

  gsap.to('.hero__word', {
    yPercent: -16,
    opacity: 0.25,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  /* yPercent only — the intro timeline owns this element's opacity, and a
   * scrubbed opacity tween would capture a mid-intro value as its baseline
   * when the page loads already scrolled down */
  gsap.to('.hero__foot', {
    yPercent: -60,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: true },
  });
}

/* ---------- marquee ---------- */
export function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;

  const set = marqueeWords
    .map((w) => `<span class="marquee__word">${w}</span><span class="marquee__dot">·</span>`)
    .join('');
  track.innerHTML = set + set + set + set;

  if (!motionOK) return;

  const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 34, repeat: -1 });

  ScrollTrigger.create({
    onUpdate: (self) => {
      const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 900, 3.2);
      gsap.to(loop, { timeScale: boost, duration: 0.45, overwrite: true, ease: 'power2.out' });
    },
  });
}

/* ---------- parallax layers ---------- */
export function initParallax() {
  if (!motionOK) return;

  gsap.to('.story__ghost--a', {
    yPercent: -36,
    ease: 'none',
    scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'bottom top', scrub: 1.1 },
  });

  gsap.to('.story__ghost--b', {
    yPercent: 28,
    ease: 'none',
    scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'bottom top', scrub: 1.1 },
  });

  document.querySelectorAll('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      y: parseFloat(el.dataset.parallax),
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  });

  const familyImg = document.getElementById('family-img');
  if (familyImg) {
    gsap.fromTo(
      familyImg,
      { yPercent: -14 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.family__frame', start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  }
}

/* ---------- generic fade-up reveals (static elements) ---------- */
export function initReveals() {
  if (!motionOK) return;

  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 0.95, stagger: 0.09, ease: 'power3.out' }),
  });
}

/* ---------- masked line reveals for big headings ---------- */
let headingCleanups = [];

/* Must run BEFORE the text content changes: split.revert() restores the DOM
 * captured at split time, so reverting after a language swap would resurrect
 * the old language's headings. */
export function cleanupHeadingReveals() {
  headingCleanups.forEach((fn) => fn());
  headingCleanups = [];
}

export function initHeadingReveals() {
  cleanupHeadingReveals();

  if (!motionOK) return;

  document.querySelectorAll('.heading-lines').forEach((el) => {
    const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    gsap.set(el, { visibility: 'visible' });
    const tween = gsap.from(split.lines, {
      yPercent: 115,
      duration: 1.15,
      stagger: 0.1,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 84%', once: true },
    });
    headingCleanups.push(() => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
      gsap.set(el, { clearProps: 'visibility' });
    });
  });
}

/* ---------- menu item reveals (re-run after every re-render) ---------- */
let menuTriggers = [];

export function initMenuReveals() {
  menuTriggers.forEach((t) => t.kill());
  menuTriggers = [];

  if (!motionOK) return;

  const items = gsap.utils.toArray('.menu-item, .menu-cat__head, .menu-cat__intro');
  gsap.set(items, { opacity: 0, y: 22 });

  menuTriggers = ScrollTrigger.batch(items, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: 'power2.out' }),
  });
}

export function refreshTriggers() {
  ScrollTrigger.refresh();
}
