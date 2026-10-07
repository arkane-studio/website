#!/usr/bin/env node
'use strict';
// Struktur-Test der Arkane-Website: jede Seite hat die Pflicht-Metadaten,
// genau ein h1, und jede interne Referenz (Link, Anker, Asset) existiert.

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const PAGES = ['index.html', 'proof.html', 'architecture.html', 'getit.html'];
const STUBS = ['storage.html', 'console.html', 'roadmap.html'];
const DELETED = ['index_1.html', 'index_old_v0.17.html', 'index_onepager_backup.html', 'design_concept.html', 'cells.js'];

const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(root, f));

for (const f of DELETED) assert.ok(!exists(f), `Altlast muss gelöscht sein: ${f}`);
for (const f of ['styles.css', 'site.js', 'facts.json', 'llms.txt', 'robots.txt', 'DESIGN.md']) assert.ok(exists(f), `fehlt: ${f}`);

JSON.parse(read('facts.json')); // muss valides JSON sein

const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const pageIds = {};
for (const f of [...PAGES, ...STUBS]) pageIds[f] = idsOf(read(f));

let checked = 0;
for (const f of PAGES) {
  const html = read(f);
  assert.match(html, /^<!DOCTYPE html>/i, `${f}: doctype`);
  assert.match(html, /<html lang="de">/, `${f}: lang=de`);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/, `${f}: viewport`);
  assert.match(html, /<meta name="description" content="[^"]{50,}">/, `${f}: meta description`);
  assert.match(html, /<meta property="og:title"/, `${f}: og:title`);
  assert.match(html, /<meta property="og:description"/, `${f}: og:description`);
  assert.match(html, /<title>[^<]{10,}<\/title>/, `${f}: title`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${f}: genau ein h1`);
  assert.match(html, /<main id="main">/, `${f}: main#main`);
  assert.match(html, /<nav aria-label="Hauptnavigation">/, `${f}: nav`);
  assert.match(html, /aria-current="page"/, `${f}: aktiver Nav-Eintrag`);
  assert.doesNotMatch(html, /fonts\.googleapis|cdn\.|unpkg|jsdelivr/, `${f}: keine externen Assets`);
  assert.doesNotMatch(html, /lenis|gsap|ScrollTrigger/i, `${f}: keine Scroll-Libs mehr`);

  for (const m of html.matchAll(/(?:href|src)="([^"#]*)(?:#([^"]*))?"/g)) {
    const [, target, anchor] = m;
    if (/^(https?:|mailto:|data:)/.test(target)) continue;
    const file = target === '' ? f : target;
    assert.ok(exists(file), `${f}: kaputter Link → ${target}`);
    if (anchor && anchor !== '' && file.endsWith('.html')) {
      assert.ok(pageIds[file] && pageIds[file].has(anchor), `${f}: Anker fehlt → ${file}#${anchor}`);
    }
    checked++;
  }
}

for (const f of STUBS) {
  const html = read(f);
  const m = html.match(/http-equiv="refresh" content="0; url=([^"#]+)(?:#([^"]+))?"/);
  assert.ok(m, `${f}: Weiterleitung`);
  assert.ok(exists(m[1]), `${f}: Weiterleitungsziel fehlt → ${m[1]}`);
  if (m[2]) assert.ok(pageIds[m[1]].has(m[2]), `${f}: Weiterleitungsanker fehlt → ${m[1]}#${m[2]}`);
  assert.match(html, /name="robots" content="noindex"/, `${f}: noindex`);
}

// Zahlen-Konsistenz: die vier Kennzahlen der Startseite stehen auch auf der Beweisseite.
const proof = read('proof.html');
for (const n of ['6 GiB', '~6 ms', '0.79', '13 Tools', '802', '224', '1393', '0.119', '105k', '256 TiB', '8/8']) {
  assert.ok(proof.includes(n), `proof.html: Zahl fehlt → ${n}`);
}

console.log(`PASS ${PAGES.length} Seiten, ${STUBS.length} Weiterleitungen, ${checked} interne Referenzen geprüft`);
