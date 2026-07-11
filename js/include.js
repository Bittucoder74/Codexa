/**
 * ==================================================
 * CODEXA TECH ACADEMY — COMPONENT INCLUDER
 * --------------------------------------------------
 * Loads reusable HTML partials (navbar, footer, etc.)
 * into any element tagged with [data-cx-include].
 *
 * Usage:
 *   <div data-cx-include="components/navbar.html"></div>
 *
 * Note: requires the site to be served over http(s),
 * not opened directly as a file:// URL, since fetch()
 * cannot read local files without a server. Any static
 * server works, e.g. `npx serve` or the VS Code
 * "Live Server" extension.
 *
 * Dispatches a "cx:include-loaded" event on each host
 * element once its partial is injected, so app.js can
 * safely wire up behavior (nav toggles, active links)
 * after the markup exists in the DOM.
 * ================================================== */

(function () {
  'use strict';

  async function loadInclude(el) {
    const path = el.getAttribute('data-cx-include');

    try {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status}`);
      }

      const html = await response.text();
      el.innerHTML = html;

      el.dispatchEvent(new CustomEvent('cx:include-loaded', { bubbles: true }));
    } catch (error) {
      console.error('[cx-include]', error);
      el.innerHTML = '';
    }
  }

  function initIncludes() {
    const hosts = document.querySelectorAll('[data-cx-include]');
    const loaders = Array.from(hosts).map(loadInclude);

    Promise.all(loaders).then(() => {
      document.dispatchEvent(new CustomEvent('cx:includes-ready'));
    });
  }

  document.addEventListener('DOMContentLoaded', initIncludes);
})();