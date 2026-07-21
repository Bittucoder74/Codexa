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

  function normalizePagePath(path) {
    // Handles two cases that both need to resolve to the same thing:
    //   "/pages/gallery.html" -> "gallery.html"
    //   "/pages/gallery"      -> "gallery.html"  (clean URLs, e.g. `npx serve`)
    //   "/" or ""             -> "index.html"
    let page = path.split('/').pop() || 'index.html';
    if (!page.includes('.')) page += '.html';
    return page;
  }

  function setActiveNavLink() {
    const currentPath = normalizePagePath(window.location.pathname);
    const navLinks = document.querySelectorAll('.cx-navbar-link');

    navLinks.forEach((link) => {
      const linkPath = normalizePagePath(link.getAttribute('href'));
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

  function initMobileMenu() {
    // Custom toggle instead of Bootstrap's collapse plugin — its
    // height-based animation judders on this absolutely-positioned
    // dropdown, so we drive open/close with a simple class instead
    // (animated via opacity/transform in responsive.css).
    const toggle = document.querySelector('[data-cx-menu-toggle]');
    if (!toggle) return;

    const menu = document.getElementById(toggle.dataset.cxMenuToggle);
    if (!menu) return;

    function closeMenu() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.contains('is-open');
      if (isOpen) closeMenu();
      else openMenu();
    });

    // Close after picking a link, and when clicking anywhere outside.
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      const clickedInsideMenu = menu.contains(event.target);
      const clickedToggle = toggle.contains(event.target);
      if (!clickedInsideMenu && !clickedToggle && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  function initScrollToTop() {
    const btn = document.getElementById('cxScrollTop');
    if (!btn) return;

    const SHOW_AFTER_PX = 400;

    function toggleVisibility() {
      btn.classList.toggle('is-visible', window.scrollY > SHOW_AFTER_PX);
    }

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initCourseCarousel() {
    const track = document.getElementById('cxCourseTrack');
    if (!track || track.dataset.carouselInit) return;
    track.dataset.carouselInit = 'true';

    const cards = Array.from(track.children);
    const dotsContainer = document.getElementById('cxCarouselDots');
    const filterButtons = document.querySelectorAll('.cx-filter-bar .cx-filter-btn');
    const ADVANCE_MS = 2500;

    let currentIndex = 0;
    let timer = null;
    let isFiltered = false;

    function getCardsPerView() {
      const raw = getComputedStyle(track).getPropertyValue('--cx-cards-per-view');
      return parseInt(raw, 10) || 1;
    }

    function getStepPx() {
      if (!cards.length) return 0;
      const gapPx = parseFloat(getComputedStyle(track).gap) || 0;
      return cards[0].getBoundingClientRect().width + gapPx;
    }

    function maxIndex() {
      return Math.max(0, cards.length - getCardsPerView());
    }

    function updateDots() {
      if (!dotsContainer) return;
      Array.from(dotsContainer.children).forEach((dot, i) => {
        dot.classList.toggle('is-active', i === currentIndex);
      });
    }

    function goTo(index) {
      currentIndex = Math.max(0, Math.min(index, maxIndex()));
      track.style.transform = `translateX(-${currentIndex * getStepPx()}px)`;
      updateDots();
    }

    function next() {
      goTo(currentIndex >= maxIndex() ? 0 : currentIndex + 1);
    }

    function buildDots() {
      if (!dotsContainer) return;
      const dotCount = maxIndex() + 1;
      dotsContainer.innerHTML = '';
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'cx-carousel-dot';
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goTo(i);
          startTimer();
        });
        dotsContainer.appendChild(dot);
      }
      updateDots();
    }

    function stopTimer() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    function startTimer() {
      stopTimer();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion || isFiltered) return;
      timer = setInterval(next, ADVANCE_MS);
    }

    function setFilteredMode(filtered) {
      isFiltered = filtered;
      track.classList.toggle('is-filtered', filtered);
      if (filtered) {
        stopTimer();
        track.style.transform = 'none';
      } else {
        buildDots();
        goTo(0);
        startTimer();
      }
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        setFilteredMode(btn.getAttribute('data-filter') !== 'all');
      });
    });

    track.addEventListener('mouseenter', stopTimer);
    track.addEventListener('mouseleave', () => {
      if (!isFiltered) startTimer();
    });

    // ---------- Drag / swipe (mouse + touch, via Pointer Events) ----------
    // Nothing carousel-related happens until real movement is detected —
    // that way a plain click/tap on a card's link is completely
    // unaffected and always works normally.
    let isPointerDown = false;
    let isDragging = false;
    let pointerDownX = 0;
    let pointerDownTranslate = 0;

    function currentTranslatePx() {
      return -currentIndex * getStepPx();
    }

    function onPointerDown(event) {
      if (isFiltered) return;
      isPointerDown = true;
      isDragging = false;
      pointerDownX = event.clientX;
      pointerDownTranslate = currentTranslatePx();
      stopTimer();
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerCancel);
    }

    function onPointerMove(event) {
      if (!isPointerDown) return;
      const deltaX = event.clientX - pointerDownX;

      if (!isDragging && Math.abs(deltaX) > 6) {
        isDragging = true;
        track.style.transition = 'none';
        track.classList.add('is-dragging');
      }

      if (isDragging) {
        track.style.transform = `translateX(${pointerDownTranslate + deltaX}px)`;
      }
    }

    function onPointerUp(event) {
      if (!isPointerDown) return;
      isPointerDown = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);

      if (!isDragging) {
        // Plain click/tap — nothing was changed, so nothing to undo.
        if (!isFiltered) startTimer();
        return;
      }

      track.classList.remove('is-dragging');
      track.style.transition = '';

      const deltaX = event.clientX - pointerDownX;
      const stepPx = getStepPx();

      if (Math.abs(deltaX) > stepPx * 0.15) {
        goTo(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
      } else {
        goTo(currentIndex);
      }

      isDragging = false;
      if (!isFiltered) startTimer();

      // A real drag ended over a link/card — swallow the click so it
      // doesn't also navigate.
      const suppressClick = (clickEvent) => {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
      };
      track.addEventListener('click', suppressClick, { capture: true, once: true });
    }

    function onPointerCancel() {
      if (!isPointerDown) return;
      isPointerDown = false;
      isDragging = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      track.classList.remove('is-dragging');
      track.style.transition = '';
      goTo(currentIndex);
      if (!isFiltered) startTimer();
    }

    track.style.touchAction = 'pan-y';
    track.addEventListener('pointerdown', onPointerDown);

    window.addEventListener('resize', () => {
      if (isFiltered) return;
      buildDots();
      goTo(currentIndex);
    });

    buildDots();
    goTo(0);
    startTimer();
  }

  document.addEventListener('cx:includes-ready', setActiveNavLink);
  document.addEventListener('cx:includes-ready', initScrollReveal);
  document.addEventListener('cx:includes-ready', initMobileMenu);
  document.addEventListener('cx:includes-ready', initScrollToTop);
  document.addEventListener('cx:includes-ready', initCourseCarousel);
  document.addEventListener('DOMContentLoaded', initFilterBars);
  document.addEventListener('DOMContentLoaded', initFormSuccessSwap);
  document.addEventListener('DOMContentLoaded', initGalleryLightbox);
  document.addEventListener('DOMContentLoaded', initCourseCarousel);
})();