/* ===== App shell: load components & tab navigation ===== */

const PAGE_CONFIG = {
  home: ['home-hero.html', 'home-comparison.html', 'home-testimonials.html'],
  corporate: ['corporate.html'],
  'short-term': ['short-term.html'],
  practice: ['practice.html'],
  contact: ['contact.html'],
};

const PAGE_TITLES = {
  home: 'Hoang Car - Dịch Vụ Thuê Xe Chuyên Nghiệp',
  corporate: 'Thuê Xe Doanh Nghiệp - Hoang Car',
  'short-term': 'Thuê Xe Ngắn Hạn - Hoang Car',
  practice: 'Bài Thực Hành - Hoang Car',
  contact: 'Liên Hệ - Hoang Car',
};

const HASH_ALIASES = {
  hero: 'home',
  'form-section': 'contact',
  comparison: 'home',
  testimonials: 'home',
};

const DEFAULT_PAGE = 'home';
let currentPage = DEFAULT_PAGE;
let animationObserver = null;

async function fetchText(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.text();
}

async function loadInto(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = await fetchText(path);
}

async function buildPages() {
  const main = document.getElementById('app-pages');
  if (!main) return;

  for (const [pageId, files] of Object.entries(PAGE_CONFIG)) {
    const parts = await Promise.all(
      files.map((f) => fetchText(`components/pages/${f}`))
    );

    const view = document.createElement('div');
    view.className = 'page-view';
    view.id = `page-${pageId}`;
    view.dataset.page = pageId;
    if (pageId !== 'home') view.classList.add('page-view--inner');
    view.innerHTML = parts.join('\n');
    view.setAttribute('aria-hidden', 'true');
    main.appendChild(view);
  }
}

function getPageFromHash() {
  const hash = (location.hash || '').replace('#', '');
  if (PAGE_CONFIG[hash]) return hash;
  if (HASH_ALIASES[hash]) return HASH_ALIASES[hash];
  return DEFAULT_PAGE;
}

function setActiveNav(pageId) {
  document.querySelectorAll('.nav-link[data-page]').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === pageId);
    link.setAttribute('aria-current', link.dataset.page === pageId ? 'page' : 'false');
  });
}

function updateBodyPageState(pageId) {
  document.body.classList.toggle('page-home-active', pageId === 'home');
  document.body.classList.toggle('page-contact-active', pageId === 'contact');
}

function updatePageTitle(pageId) {
  document.title = PAGE_TITLES[pageId] || PAGE_TITLES.home;
}

function refreshAnimations() {
  if (animationObserver) animationObserver.disconnect();

  animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '-60px' }
  );

  const active = document.querySelector('.page-view.active');
  if (!active) return;
  active.querySelectorAll('.fade-up:not(.visible)').forEach((el) => {
    animationObserver.observe(el);
  });
}

function switchPage(pageId, { updateHash = true } = {}) {
  if (!PAGE_CONFIG[pageId]) pageId = DEFAULT_PAGE;
  currentPage = pageId;

  document.querySelectorAll('.page-view').forEach((view) => {
    const isActive = view.dataset.page === pageId;
    view.classList.toggle('active', isActive);
    view.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });

  setActiveNav(pageId);
  updateBodyPageState(pageId);
  updatePageTitle(pageId);

  if (updateHash) {
    const next = `#${pageId}`;
    if (location.hash !== next) history.pushState({ page: pageId }, '', next);
  }

  window.scrollTo({ top: 0, behavior: 'auto' });

  const header = document.querySelector('.header');
  if (header) header.classList.toggle('scrolled', pageId !== 'home');

  closeMobileMenu();
  closeModal();
  refreshAnimations();
}

window.switchPage = switchPage;
window.refreshAnimations = refreshAnimations;
window.getCurrentPage = () => currentPage;

function closeMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const toggle = document.querySelector('.mobile-toggle');
  menu?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}

function closeModal() {
  document.querySelector('.modal-overlay')?.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function bindNavigation() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-privacy], [data-terms]')) return;

    const emptyHash = e.target.closest('a[href="#"]');
    if (emptyHash && !emptyHash.dataset.page) {
      e.preventDefault();
      return;
    }

    const trigger = e.target.closest('[data-page]');
    if (!trigger?.dataset.page) return;

    if (trigger.tagName === 'A' && trigger.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
    }
    switchPage(trigger.dataset.page);
  });

  document.querySelector('.logo')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      switchPage('home');
    }
  });

  window.addEventListener('popstate', () => {
    switchPage(getPageFromHash(), { updateHash: false });
  });
}

function bindMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const header = document.querySelector('.header');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('open')) return;
    if (header?.contains(e.target)) return;
    closeMobileMenu();
  });
}

function bindGlobalKeys() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeMobileMenu();
    closeModal();
  });
}

async function initApp() {
  document.body.classList.add('is-loading');
  try {
    await Promise.all([
      loadInto('#app-header', 'components/header.html'),
      buildPages(),
      loadInto('#app-footer', 'components/footer.html'),
      loadInto('#app-modals', 'components/modals.html'),
      loadInto('#app-fixed', 'components/fixed-ui.html'),
    ]);

    bindNavigation();
    bindMobileMenu();
    bindGlobalKeys();

    const initial = getPageFromHash();
    switchPage(initial, { updateHash: false });
    if (!location.hash || HASH_ALIASES[location.hash.replace('#', '')]) {
      history.replaceState({ page: initial }, '', `#${initial}`);
    }

    window.appReady = true;
    document.dispatchEvent(new Event('app:ready'));
  } catch (err) {
    console.error('App load failed:', err);
    const main = document.getElementById('app-pages');
    if (main) {
      main.innerHTML =
        '<div class="app-error"><p><strong>Không tải được trang.</strong></p><p>Lỗi: ' + err.message + '</p></div>';
    }
  } finally {
    document.body.classList.remove('is-loading');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
