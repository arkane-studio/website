#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const page = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

assert.match(page, /lenis(?:\.min)?\.js/i, 'Lenis must remain loaded for smooth wheel scrolling');
assert.match(
  page,
  /html\s*\{[^}]*scroll-behavior\s*:\s*smooth/i,
  'smooth programmatic scrolling must remain enabled'
);

const lenisInit = page.match(/new\s+Lenis\s*\(\s*\{([\s\S]*?)\}\s*\)/i);
assert.ok(lenisInit, 'Lenis must be initialized');
assert.match(lenisInit[1], /smoothWheel\s*:\s*false\b/, 'wheel and trackpad input must use native device scrolling');
assert.doesNotMatch(lenisInit[1], /\b(?:duration|lerp)\s*:/, 'do not add synthetic wheel interpolation');
assert.match(page, /gsap\.registerPlugin\(ScrollTrigger\)/, 'scroll-triggered visual effects remain initialized');

console.log('PASS responsive smooth scroll behavior is preserved');
