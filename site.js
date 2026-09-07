/* Arkane site — shared behaviour: theme, nav, spawn strips, terminal scripts */
(function () {
  'use strict';

  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s);
  const sleep = ms => REDUCED ? Promise.resolve() : new Promise(r => setTimeout(r, ms));

  /* ---------- theme toggle (button lives in the nav) ---------- */
  const themeBtn = $('#theme-btn');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  function renderThemeBtn() {
    if (!themeBtn) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    themeBtn.textContent = dark ? '\u25D0 dark' : '\u25D1 light';
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    if (themeMeta) themeMeta.content = dark ? '#0d0c0a' : '#f3eee3';
  }
  renderThemeBtn();
  if (themeBtn) themeBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('arkane_theme', next); } catch (e) {}
    renderThemeBtn();
  });

  /* ---------- spawn strips: each chapter announces itself ---------- */
  const SIG = () => Math.random().toString(16).slice(2, 10);
  async function typeStrip(el, html) {
    if (REDUCED) { el.innerHTML = html; return; }
    const plain = html.replace(/<[^>]+>/g, '');
    for (let i = 1; i <= plain.length; i += 3) {
      el.textContent = plain.slice(0, i);
      await sleep(14);
    }
    el.innerHTML = html;
  }
  const stripIO = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      stripIO.unobserve(e.target);
      e.target.closest('.chapter').classList.add('on');
      typeStrip(e.target, `\u25B8 spawn cell ${e.target.dataset.cell} \u00B7 sig <span class="ok">\u2713</span> ed25519 \u00B7 blake3:${SIG()}\u2026`);
    }
  }, { threshold: 0.25, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.spawn-strip').forEach(s => stripIO.observe(s));

  /* ---------- terminal script runner (shared across pages) ---------- */
  async function runTermScript(body, script) {
    for (const step of script) {
      if (step.t === 'pause') { await sleep(step.ms); continue; }
      if (step.t === 'cmd') {
        const line = document.createElement('div');
        line.innerHTML = '<span class="p">$</span> ';
        const span = document.createElement('span');
        const cur = document.createElement('span');
        cur.className = 'tcursor';
        line.append(span, cur);
        body.appendChild(line);
        if (REDUCED) span.textContent = step.s;
        else for (const ch of step.s) { span.textContent += ch; await sleep(ch === '\n' ? 50 : 13 + Math.random() * 20); }
        await sleep(250);
        cur.remove();
      } else if (step.t === 'ans') {
        const div = document.createElement('div');
        div.className = 'ans';
        body.appendChild(div);
        if (REDUCED) div.textContent = step.s;
        else for (const ch of step.s) { div.textContent += ch; await sleep(22); }
      } else {
        const div = document.createElement('div');
        div.innerHTML = step.s;
        body.appendChild(div);
        if (!REDUCED) {
          div.style.opacity = '0';
          div.style.transition = 'opacity .4s';
          requestAnimationFrame(() => div.style.opacity = '1');
          await sleep(380);
        }
      }
    }
  }
  function armTerm(sel, script) {
    let started = false;
    const el = $(sel);
    if (!el) return;
    new IntersectionObserver((es, io) => {
      if (!es.some(e => e.isIntersecting) || started) return;
      started = true; io.disconnect();
      runTermScript(el, script);
    }, { threshold: 0.4 }).observe(el);
  }

  /* pages without a boot overlay reveal immediately */
  if (!document.getElementById('boot')) document.documentElement.classList.add('booted');

  window.ArkaneSite = { armTerm, runTermScript, sleep, REDUCED, $ };
})();
