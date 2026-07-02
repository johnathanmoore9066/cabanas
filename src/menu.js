import { menuData, ui, hoursData } from './content.js';

export function renderMenu(lang) {
  const rail = document.getElementById('menu-rail');
  const body = document.getElementById('menu-body');
  if (!rail || !body) return;

  rail.innerHTML = menuData
    .map(
      (cat) =>
        `<li><a href="#cat-${cat.id}" data-cat="${cat.id}"${cat.honduran ? ' class="rail-hn"' : ''}>${cat.name[lang]}</a></li>`
    )
    .join('');

  body.innerHTML = menuData
    .map((cat) => {
      const badge = cat.honduran ? ` <span class="badge">${ui['menu.badge'][lang]}</span>` : '';
      const intro = cat.intro ? `<p class="menu-cat__intro">${cat.intro[lang]}</p>` : '';
      const items = cat.items
        .map((item) => {
          const price = item.price ? `<span class="menu-item__price">${item.price}</span>` : '';
          const desc = item.desc ? `<p class="menu-item__desc">${item.desc[lang]}</p>` : '';
          return `<li class="menu-item">
            <div class="menu-item__row"><span class="menu-item__name">${item.name[lang]}</span>${price}</div>
            ${desc}
          </li>`;
        })
        .join('');
      return `<section class="menu-cat" id="cat-${cat.id}" data-cat-id="${cat.id}">
        <div class="menu-cat__head"><h3 class="menu-cat__title">${cat.name[lang]}</h3>${badge}</div>
        ${intro}
        <ul class="menu-cat__items">${items}</ul>
      </section>`;
    })
    .join('');
}

/* Highlights the rail link for the category currently in the reading band. */
let railObserver = null;

export function initRailTracking() {
  if (railObserver) railObserver.disconnect();

  const links = new Map(
    [...document.querySelectorAll('#menu-rail a')].map((a) => [a.dataset.cat, a])
  );

  railObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (!visible.length) return;
      const id = visible[visible.length - 1].target.dataset.catId;
      links.forEach((link, cat) => link.classList.toggle('is-active', cat === id));
      // keep the active chip in view on the mobile bar — scroll only the rail,
      // never the page (scrollIntoView would drag ancestors horizontally)
      const active = links.get(id);
      const rail = active?.closest('ul');
      if (active && rail && window.matchMedia('(max-width: 900px)').matches) {
        rail.scrollTo({
          left: active.offsetLeft - rail.clientWidth / 2 + active.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    },
    { rootMargin: '-30% 0px -62% 0px' }
  );

  document.querySelectorAll('.menu-cat').forEach((s) => railObserver.observe(s));
}

export function renderHours(lang) {
  const list = document.getElementById('hours-list');
  if (!list) return;

  list.innerHTML = hoursData
    .map((row) => {
      const time = row.closed
        ? `<dd class="is-closed">${ui['visit.closedDay'][lang]}</dd>`
        : `<dd>${row.display}</dd>`;
      return `<div class="visit__hours-row"><dt>${row.label[lang]}</dt>${time}</div>`;
    })
    .join('');

  renderOpenStatus(lang);
}

/* "Open now" pill, computed in the restaurant's timezone (ET). */
function renderOpenStatus(lang) {
  const el = document.getElementById('open-status');
  if (!el) return;

  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }).formatToParts(new Date());

    const get = (type) => parts.find((p) => p.type === type)?.value;
    const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    const minutes = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);

    const today = hoursData.find((row) => row.days.includes(dayIndex));
    const open = today && !today.closed && minutes >= today.open && minutes < today.close;

    el.textContent = open ? ui['visit.open'][lang] : ui['visit.closed'][lang];
    el.classList.toggle('visit__status--open', open);
    el.classList.toggle('visit__status--closed', !open);
    el.hidden = false;
  } catch (e) {
    el.hidden = true;
  }
}
