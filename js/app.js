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

  function initCourseFilters() {
    const filterBtns = document.querySelectorAll('.cx-course-filter-btn');
    const courseCards = document.querySelectorAll('.cx-course-card[data-category]');
    const emptyMessage = document.querySelector('.cx-course-empty');

    if (!filterBtns.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));

        let visibleCount = 0;
        courseCards.forEach((card) => {
          const isMatch = filter === 'all' || card.getAttribute('data-category') === filter;
          card.hidden = !isMatch;
          if (isMatch) visibleCount += 1;
        });

        if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
      });
    });
  }

  function initFormSuccessSwap() {
    // Any <form data-success-target="someId"> gets wired up the same
    // way: validate, then swap the form out for the matching success
    // panel. Used by both the Admission and Contact forms.
    //
    // NOTE: there is no backend wired up yet — this only validates
    // and shows a confirmation message. Before going live, replace
    // the preventDefault() flow with a real fetch() POST to whatever
    // endpoint collects submissions (form service, CRM, etc.).
    document.querySelectorAll('form[data-success-target]').forEach((form) => {
      const successPanel = document.getElementById(form.dataset.successTarget);

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        form.hidden = true;
        if (successPanel) successPanel.hidden = false;
      });
    });
  }

  document.addEventListener('cx:includes-ready', setActiveNavLink);
  document.addEventListener('cx:includes-ready', initScrollReveal);
  document.addEventListener('DOMContentLoaded', initCourseFilters);
  document.addEventListener('DOMContentLoaded', initFormSuccessSwap);
})();