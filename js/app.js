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

  function initFilterBars() {
    // Any ".cx-filter-bar[data-filter-target]" wires up the same way:
    // its buttons filter whatever matches the target selector by
    // comparing each item's data-category to the button's data-filter.
    // Used by both the Courses and Gallery pages.
    document.querySelectorAll('.cx-filter-bar[data-filter-target]').forEach((bar) => {
      const targetSelector = bar.dataset.filterTarget;
      const scope = bar.parentElement || document;
      const items = scope.querySelectorAll(targetSelector);
      const emptyMessage = scope.querySelector('.cx-filter-empty');
      const buttons = bar.querySelectorAll('.cx-filter-btn');

      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          buttons.forEach((b) => b.classList.toggle('is-active', b === btn));

          let visibleCount = 0;
          items.forEach((item) => {
            const isMatch = filter === 'all' || item.getAttribute('data-category') === filter;
            item.hidden = !isMatch;
            if (isMatch) visibleCount += 1;
          });

          if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
        });
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

  function initGalleryLightbox() {
    const lightbox = document.getElementById('cxLightbox');
    if (!lightbox) return;

    const visual = document.getElementById('cxLightboxVisual');
    const categoryEl = document.getElementById('cxLightboxCategory');
    const titleEl = document.getElementById('cxLightboxTitle');
    const descEl = document.getElementById('cxLightboxDesc');
    const closeTriggers = lightbox.querySelectorAll('[data-cx-lightbox-close]');

    function openLightbox(item) {
      visual.className = 'cx-lightbox-visual ' + (item.dataset.thumbClass || '');
      categoryEl.textContent = item.dataset.categoryLabel || '';
      titleEl.textContent = item.dataset.title || '';
      descEl.textContent = item.dataset.desc || '';

      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';

      const closeBtn = lightbox.querySelector('.cx-lightbox-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.cx-gallery-item').forEach((item) => {
      item.addEventListener('click', () => openLightbox(item));
    });

    closeTriggers.forEach((el) => el.addEventListener('click', closeLightbox));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }

  document.addEventListener('cx:includes-ready', setActiveNavLink);
  document.addEventListener('cx:includes-ready', initScrollReveal);
  document.addEventListener('DOMContentLoaded', initFilterBars);
  document.addEventListener('DOMContentLoaded', initFormSuccessSwap);
  document.addEventListener('DOMContentLoaded', initGalleryLightbox);
})();