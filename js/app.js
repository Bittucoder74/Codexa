/**
 * ==================================================
 * CODEXA TECH ACADEMY — APP SCRIPT
 * --------------------------------------------------
 * Behavior added incrementally as components are built:
 *   - Active nav link state
 *   - Scroll-reveal for elements marked .cx-reveal
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

  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.cx-reveal');

    if (!revealEls.length) return;

    // Respect prefers-reduced-motion: skip the observer entirely and
    // just show everything, since animations.css already neutralizes
    // the hidden state in that case — this just avoids needless work.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  document.addEventListener('cx:includes-ready', setActiveNavLink);
  document.addEventListener('cx:includes-ready', initScrollReveal);
})();