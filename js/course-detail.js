/**
 * ==================================================
 * CODEXA TECH ACADEMY — COURSE DETAIL PAGE
 * --------------------------------------------------
 * Renders one course's full details based on the
 * ?course=<id> URL parameter, using the data in
 * js/courses-data.js. This runs on DOMContentLoaded,
 * independent of the navbar/footer includes.
 * ================================================== */

(function () {
  'use strict';

  function getCourseIdFromUrl() {
    // Uses the URL hash (#full-stack) rather than a query string
    // (?course=full-stack). A hash never gets sent to the server, so
    // no server-side URL rewriting (some local dev servers strip
    // query strings during "clean URL" redirects) can ever interfere
    // with it. Old ?course= links are still supported as a fallback.
    const hashId = window.location.hash.replace(/^#/, '').trim();
    if (hashId) return hashId;

    const params = new URLSearchParams(window.location.search);
    return params.get('course');
  }

  function findCourse(id) {
    if (typeof CX_COURSES === 'undefined') return null;
    return CX_COURSES.find((c) => c.id === id) || null;
  }

  function checkIconSvg() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>';
  }

  function plusIconSvg() {
    return '<svg class="cx-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>';
  }

  function renderHighlights(course) {
    const list = document.getElementById('cxCourseHighlights');
    list.innerHTML = course.highlights
      .map((item) => `<li>${checkIconSvg()}<span>${item}</span></li>`)
      .join('');
  }

  function renderAccordion(containerId, items, idPrefix, getAnswerHtml, firstOpen) {
    const container = document.getElementById(containerId);
    container.innerHTML = items
      .map((item, index) => {
        const panelId = `${idPrefix}${index}`;
        const isOpen = firstOpen && index === 0;
        return `
          <div class="cx-faq-item">
            <button class="cx-faq-question" type="button" data-bs-toggle="collapse" data-bs-target="#${panelId}" aria-expanded="${isOpen}" aria-controls="${panelId}">
              <span>${item.title || item.q}</span>
              ${plusIconSvg()}
            </button>
            <div class="collapse cx-faq-answer${isOpen ? ' show' : ''}" id="${panelId}">
              ${getAnswerHtml(item)}
            </div>
          </div>
        `;
      })
      .join('');
  }

  function renderModules(course) {
    renderAccordion(
      'cxCourseModules',
      course.modules,
      'cxModule',
      (module) => `<ul class="cx-course-module-list">${module.topics.map((t) => `<li>${t}</li>`).join('')}</ul>`,
      true
    );
  }

  function renderFaqs(course) {
    renderAccordion(
      'cxCourseFaqList',
      course.faqs,
      'cxCourseFaq',
      (faq) => `<p class="cx-faq-answer-text">${faq.a}</p>`,
      false
    );
  }

  function renderCourse(course) {
    document.title = `${course.title} — Codexa Tech Academy`;

    document.getElementById('cxCourseBreadcrumb').textContent = course.title;
    document.getElementById('cxCourseThumb').className = `cx-course-hero-thumb ${course.thumbClass}`;
    document.getElementById('cxCourseTagline').textContent = course.tagline;
    document.getElementById('cxCourseDuration').textContent = course.duration;
    document.getElementById('cxCoursePrice').textContent = course.price;
    document.getElementById('cxCourseDescription').textContent = course.description;

    renderHighlights(course);
    renderModules(course);
    renderFaqs(course);

    document.getElementById('cxCourseNotFound').hidden = true;
    document.getElementById('cxCourseContent').hidden = false;
  }

  function showNotFound() {
    document.getElementById('cxCourseContent').hidden = true;
    document.getElementById('cxCourseNotFound').hidden = false;
  }

  function init() {
    const id = getCourseIdFromUrl();
    const course = id ? findCourse(id) : null;

    if (course) {
      renderCourse(course);
    } else {
      showNotFound();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('hashchange', init);
})();