#!/usr/bin/env node
/**
 * ==================================================
 * CODEXA TECH ACADEMY — PRODUCTION BUILD
 * --------------------------------------------------
 * During development, pages load navbar/hero/footer/etc.
 * via fetch() at runtime (see js/include.js) — great for
 * editing one component and seeing it everywhere.
 *
 * The problem: that means the raw HTML of every page is
 * mostly empty <div data-cx-include="..."> placeholders.
 * Modern Googlebot can usually render the JS and see the
 * real content, but it's a slower, less reliable two-pass
 * process — and things like social-media link previews
 * (Facebook, WhatsApp, LinkedIn) almost never execute
 * JavaScript at all, so shared links would show a blank
 * preview.
 *
 * This script fixes that for the deployed site: it
 * "flattens" every [data-cx-include] into real, static
 * HTML — so search engines and link-preview bots see the
 * full page (navbar, headings, footer, everything) on the
 * very first request, no JavaScript required. The dev
 * workflow (editing components/*.html) is unaffected;
 * just re-run this before deploying.
 *
 * Usage:
 *   node build.js
 *
 * Output goes to /dist — upload that folder's contents to
 * your host (or point your host's root at it).
 * ================================================== */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

const COPY_DIRS = ['css', 'js', 'assets'];
const COPY_FILES = ['robots.txt', 'sitemap.xml'];
const HTML_ENTRY_FILES = ['index.html', '404.html', ...listHtmlFiles(path.join(ROOT, 'pages')).map((f) => path.join('pages', f))];

function listHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.html'));
}

function readComponent(includePath) {
  // includePath looks like "/components/navbar.html" (root-relative)
  const relPath = includePath.replace(/^\//, '');
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ! Missing component: ${includePath}`);
    return `<!-- MISSING COMPONENT: ${includePath} -->`;
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

function inlineIncludes(html) {
  const includeRegex = /<div\s+data-cx-include="([^"]+)"\s*><\/div>/g;
  return html.replace(includeRegex, (_match, includePath) => {
    const componentHtml = readComponent(includePath);
    return `<!-- inlined: ${includePath} -->\n${componentHtml}`;
  });
}

function stripIncludeScript(html) {
  // No longer needed once everything is inlined — one less request.
  return html.replace(/\s*<script src="\/js\/include\.js"><\/script>\n?/, '\n');
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('Building production site into /dist ...\n');

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  for (const dir of COPY_DIRS) {
    copyDir(path.join(ROOT, dir), path.join(DIST, dir));
  }
  for (const file of COPY_FILES) {
    const src = path.join(ROOT, file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(DIST, file));
  }

  for (const entry of HTML_ENTRY_FILES) {
    const srcPath = path.join(ROOT, entry);
    if (!fs.existsSync(srcPath)) continue;

    let html = fs.readFileSync(srcPath, 'utf-8');
    html = inlineIncludes(html);
    html = stripIncludeScript(html);

    const destPath = path.join(DIST, entry);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.writeFileSync(destPath, html, 'utf-8');
    console.log(`  ✓ ${entry}`);
  }

  console.log('\nDone. Deploy the contents of /dist.');
}

build();