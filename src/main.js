import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/fraunces/full-italic.css';
import './styles/main.css';

import gsap from 'gsap';
import { initialLang, applyLang, getLang } from './i18n.js';
import { renderMenu, renderHours, initRailTracking } from './menu.js';
import {
  motionOK,
  initSmoothScroll,
  initNav,
  initHero,
  initMarquee,
  initParallax,
  initReveals,
  initHeadingReveals,
  cleanupHeadingReveals,
  initMenuReveals,
  refreshTriggers,
  scrollToTarget,
  getLenis,
} from './animations.js';

/* ---------- initial content ---------- */
const lang = initialLang();
applyLang(lang);
renderMenu(lang);
renderHours(lang);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ---------- language toggle ---------- */
let swapping = false;

function setLang(next) {
  if (next === getLang() || swapping) return;

  const apply = () => {
    cleanupHeadingReveals();
    applyLang(next);
    renderMenu(next);
    renderHours(next);
    initRailTracking();
    initHeadingReveals();
    initMenuReveals();
    refreshTriggers();
  };

  if (!motionOK) {
    apply();
    return;
  }

  swapping = true;
  gsap.to('#main', {
    opacity: 0,
    duration: 0.2,
    ease: 'power1.in',
    onComplete: () => {
      apply();
      gsap.to('#main', {
        opacity: 1,
        duration: 0.35,
        ease: 'power1.out',
        onComplete: () => (swapping = false),
      });
    },
  });
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  setLang(getLang() === 'en' ? 'es' : 'en');
});

/* ---------- mobile menu ---------- */
const burger = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  if (!mobileMenu?.classList.contains('is-open')) return;
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burger?.setAttribute('aria-expanded', 'false');
  getLenis()?.start();
}

burger?.addEventListener('click', () => {
  const opening = !mobileMenu.classList.contains('is-open');
  mobileMenu.classList.toggle('is-open', opening);
  mobileMenu.setAttribute('aria-hidden', String(!opening));
  burger.setAttribute('aria-expanded', String(opening));

  if (opening) {
    getLenis()?.stop();
    if (motionOK) {
      gsap.fromTo(
        '#mobile-menu nav a',
        { y: 42, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out', delay: 0.1 }
      );
    }
  } else {
    getLenis()?.start();
  }
});

/* ---------- anchor scrolling (works with Lenis) ---------- */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  closeMobileMenu();
  scrollToTarget(target);
});

/* ---------- animations (after fonts, so SplitText measures real lines) ---------- */
function startAnimations() {
  initSmoothScroll();
  initNav();
  initMarquee();
  initRailTracking();

  if (!motionOK) return;

  initHero();
  initParallax();
  initReveals();
  initHeadingReveals();
  initMenuReveals();
}

if (document.fonts?.ready) {
  document.fonts.ready.then(startAnimations);
} else {
  startAnimations();
}
