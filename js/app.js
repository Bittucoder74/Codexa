/**
 * ==================================================
 * CODEXA TECH ACADEMY — APP SCRIPT
 * --------------------------------------------------
 * Behavior is added incrementally as each component
 * is built. Currently handles: active nav link state.
 * ================================================== */

(function () {
  'use strict';

  function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.cx-navbar-link');

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute('href').split('/').pop();
      link.classList.toggle('is-active', linkPath === currentPath);
    });
  }

  document.addEventListener('cx:includes-ready', setActiveNavLink);
})();