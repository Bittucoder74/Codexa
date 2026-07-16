# Codexa Tech Academy — Website

Marketing website for Codexa Tech Academy, an AI-powered IT training institute. Static HTML/CSS/JS — no build step, no framework.

## Tech Stack

- HTML5, CSS3, Bootstrap 5 (vendored locally, no CDN)
- Vanilla JavaScript (no jQuery, no framework)
- Google Fonts: Plus Jakarta Sans (headings) + Inter (body)

## Running Locally

The site loads shared components (navbar, footer, CTA, etc.) via `fetch()`, which browsers block on `file://` URLs. You need a static server:

```bash
cd Codexa          # the project root, next to index.html
npx serve
```

Then open the URL it prints (e.g. `http://localhost:3000/index.html`) — **not** `file:///...` or a subfolder path like `localhost/Codexa/...`. The site must be served from its own root, since every internal path is root-relative (`/css/...`, `/pages/...`), matching how it will work once deployed to a real domain.

Any other static server works too (VS Code's "Live Server" extension, `python -m http.server`, etc.) — just make sure the project folder itself is the server root.

## Folder Structure

```
├── index.html              Homepage
├── pages/                  Inner pages (about, courses, admission, contact, gallery, placement, faq)
├── components/             Shared HTML partials, loaded via [data-cx-include]
├── css/
│   ├── variables.css       Design tokens (colors, spacing, radius, shadows, etc.) — start here
│   ├── style.css           Resets, typography, shared utility classes (.cx-btn, .cx-eyebrow, etc.)
│   ├── forms.css           Shared form control styles (Admission + Contact)
│   ├── filters.css         Shared category-filter pill bar (Courses + Gallery + FAQ)
│   ├── page-banner.css     Shared banner used at the top of every inner page
│   ├── animations.css      Scroll-reveal + hero load-in animation
│   ├── responsive.css      All breakpoint overrides, loaded last
│   └── *.css                One file per component/page (navbar.css, hero.css, about.css, ...)
├── js/
│   ├── include.js          Fetches and injects [data-cx-include] partials
│   └── app.js               Everything else: nav active-state, scroll reveal, filter bars,
│                             form success-swap, gallery lightbox
├── assets/
│   ├── icons/               Favicon, etc.
│   ├── images/               Empty — no raster photos yet (see below)
│   └── videos/, documents/
├── robots.txt, sitemap.xml  Update sitemap.xml if you add or remove pages
```

## How Shared Components Work

Any element like this:

```html
<div data-cx-include="/components/navbar.html"></div>
```

gets replaced (not just filled) with the fetched partial's markup once the page loads — see `js/include.js`. The wrapper `<div>` itself is removed, which matters: a sticky/fixed element inside a wrapper only as tall as itself has no room to actually stick, so replacement avoids that entirely.

All paths (`css/`, `js/`, `components/`, `assets/`) are **root-relative** (start with `/`), so the same partial works whether it's included from `index.html` at the root or from a page under `/pages/`.

## Adding a New Page

1. Copy the `<head>` block from an existing page under `/pages/` (keeps meta tags, font links, CSS order consistent).
2. Use `/components/navbar.html`, `/components/footer.html`, and optionally `/components/cta.html` via `data-cx-include`.
3. Start the `<main>` content with the shared page-banner markup (see any inner page for the pattern) — styled by `css/page-banner.css`.
4. Add a `<link>` for the page's own CSS file if it needs one, following the `css/<page-name>.css` naming pattern.
5. Add the new URL to `sitemap.xml`.
6. Add a nav link in `components/navbar.html` if it should appear in the main menu.

## Design System

All design tokens live in `css/variables.css` as CSS custom properties (`--cx-primary`, `--cx-space-md`, `--cx-radius`, etc.) — change a value there and it updates everywhere. Every custom class is prefixed `cx-` to avoid collisions with Bootstrap's own classes.

## Known Limitations / TODO Before Going Live

- **Forms have no backend.** The Admission and Contact forms (`js/app.js` → `initFormSuccessSwap()`) only validate client-side and show a confirmation message — no email or database is involved yet. Wire up a real endpoint before launch.
- **No raster photos yet.** The Gallery page and course/project previews use CSS gradient placeholders in the same illustration style as the hero. Swap in real images once available (`assets/images/`).
- **Placeholder content throughout** — student names, stats, company logos, testimonials, and contact details are all placeholders. Replace with real data before launch.
- **`og:image` / `twitter:image`** are intentionally omitted until a real 1200×630 share image exists — add one and reference it in each page's `<head>`.
- Content and copy involving placement should stay in "support," not "guarantee," language — see the FAQ page's placement answer for the intended tone.