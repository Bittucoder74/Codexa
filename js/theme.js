/**
 * ==================================================
 * CODEXA TECH ACADEMY — THEME TOGGLE
 * --------------------------------------------------
 * Loaded via a blocking <script> in <head> (not
 * deferred/async, and not inline) so the correct theme
 * is applied to <html> before the page paints — this
 * avoids a flash of the wrong theme on load.
 *
 * Preference order: saved choice in localStorage, then
 * the OS-level prefers-color-scheme, then light.
 * ================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'cx-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Runs immediately — this script is placed in <head>, before any
  // CSS has been painted, so there is nothing to flash.
  applyTheme(getPreferredTheme());

  function initThemeToggle() {
    var toggles = document.querySelectorAll('.cx-theme-toggle');
    if (!toggles.length) return;

    function updateLabels(theme) {
      var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      toggles.forEach(function (btn) {
        btn.setAttribute('aria-label', label);
      });
    }

    updateLabels(document.documentElement.getAttribute('data-theme'));

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';

        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
        updateLabels(next);
      });
    });
  }

  // The toggle button lives inside the navbar partial, which loads
  // asynchronously via include.js — wait for it to be in the DOM.
  document.addEventListener('cx:includes-ready', initThemeToggle);
})();