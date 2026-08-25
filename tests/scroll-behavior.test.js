#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const page = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

assert.doesNotMatch(
  page,
  /lenis(?:\.min)?\.js|new\s+Lenis\s*\(/i,
  'wheel scrolling must remain native; do not load or initialize Lenis'
);
assert.doesNotMatch(
  page,
  /html\s*\{[^}]*scroll-behavior\s*:\s*smooth/i,
  'programmatic restoration must not create delayed smooth-scroll animations'
);
assert.match(page, /ScrollTrigger\.min\.js/, 'scroll-triggered visual effects remain available');

console.log('PASS native scroll behavior is preserved');
