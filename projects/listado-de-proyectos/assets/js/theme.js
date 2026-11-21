/** Persistent, accessible light/dark theme selector. */
(() => {
  'use strict';
  const storageKey = 'p7d-projects-theme';
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const label = document.querySelector('[data-theme-label]');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) { /* Storage may be unavailable. */ }

  function setTheme(theme, persist = false) {
    const isLight = theme === 'light';
    root.dataset.theme = isLight ? 'light' : 'dark';
    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.setAttribute('aria-label', isLight ? 'Cambiar al tema oscuro' : 'Cambiar al tema claro');
    label.textContent = isLight ? 'Modo oscuro' : 'Modo claro';
    if (themeMeta) themeMeta.content = isLight ? '#f7f8fc' : '#090a13';
    if (persist) {
      try { localStorage.setItem(storageKey, root.dataset.theme); } catch (_) { /* Nonfatal. */ }
    }
  }

  setTheme(saved === 'light' ? 'light' : 'dark');
  toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
