import { ui } from './content.js';

const STORAGE_KEY = 'cabanas-lang';
let current = 'en';

export function getLang() {
  return current;
}

/* Stored choice wins; otherwise Spanish-language browsers get Spanish. */
export function initialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch (e) {
    /* private mode */
  }
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function applyLang(lang) {
  current = lang;
  document.documentElement.lang = lang;
  document.title = ui['meta.title'][lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = ui[el.dataset.i18n];
    if (entry) el.textContent = entry[lang];
  });

  const familyImg = document.getElementById('family-img');
  if (familyImg) familyImg.alt = ui['family.alt'][lang];

  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.setAttribute('aria-checked', String(lang === 'es'));

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* private mode */
  }
}
