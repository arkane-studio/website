/* Arkane cells — membrane simulation engine (shared) */
(function () {
  'use strict';

  const TAU = Math.PI * 2;
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* theme palettes for everything canvas-drawn */
  const PALETTES = {
    dark: {
      cells: { sage: '#9db89a', coral: '#e8927c', ice: '#a8c5d6', sand: '#d6c08f' },
      kernel: '236,231,221',
      label: 'rgba(236,231,221,0.55)',
      deadLabel: 'rgba(232,146,124,0.5)',
      dead: 'rgba(232,146,124,0.16)',
      filament: '214,192,143',
      plankton: '148,210,140',
    },
    light: {
      cells: { sage: '#66835f', coral: '#c2613f', ice: '#5d7f96', sand: '#a98f54' },
      kernel: '36,31,23',
      label: 'rgba(36,31,23,0.6)',
      deadLabel: 'rgba(194,97,63,0.6)',
      dead: 'rgba(194,97,63,0.22)',
      filament: '169,143,84',
      plankton: '74,128,64',
    },
  };
  const pal = () => PALETTES[document.documentElement.dataset.theme] || PALETTES.dark;

  class Cell {
    constructor(opts) {
      this.label = opts.label || null;
      this.role = opts.role || 'cell';          // cell | healer | kernel
      this.colorKey = opts.color;               // semantic key into palette
      this.baseR = opts.r;
      this.home = { x: opts.x, y: opts.y };
      this.pos = { x: opts.x, y: opts.y };
      this.phase = Math.random() * TAU;
      this.driftSeed = Math.random() * 1000;
      this.points = opts.points || 16;
      this.alive = true;
      this.scale = 1;
    }
    color() { return pal().cells[this.colorKey] || this.colorKey; }
    center(w, h) { return { x: this.pos.x * w, y: this.pos.y * h }; }

    update(t, dt, w, h, mouse, others, drift) {
      const s = this.driftSeed;
      const dx = Math.sin(t * 0.00013 + s) * drift + Math.sin(t * 0.00007 + s * 2) * drift * 0.6;
      const dy = Math.cos(t * 0.00011 + s * 3) * drift + Math.cos(t * 0.00005 + s) * drift * 0.5;
      let tx = this.home.x + dx, ty = this.home.y + dy;

      if (mouse.active) {
        const cx = tx * w, cy = ty * h;
        const mdx = cx - mouse.x, mdy = cy - mouse.y;
        const d = Math.hypot(mdx, mdy);
        const reach = this.baseR + 130;
        if (d < reach && d > 1) {
          const f = (1 - d / reach) * 0.04;
          tx += (mdx / d) * f;
          ty += (mdy / d) * f;
        }
      }
      for (const o of others) {
        if (o === this || !o.alive) continue;
        const ax = (tx - o.pos.x) * w, ay = (ty - o.pos.y) * h;
        const d = Math.hypot(ax, ay);
        const min = (this.baseR + o.baseR) * 1.05;
        if (d < min && d > 1) {
          const f = (1 - d / min) * 0.02;
          tx += (ax / d) * f;
          ty += (ay / d) * f;
        }
      }
      this.pos.x += (tx - this.pos.x) * Math.min(1, dt * 0.0018);
      this.pos.y += (ty - this.pos.y) * Math.min(1, dt * 0.0018);
      if (this.alive && this.scale < 1) this.scale = Math.min(1, this.scale + dt * 0.0016);
    }

    membrane(t, w, h, wobble) {
      const c = this.center(w, h);
      const pts = [];
      const grow = this.scale < 1 ? 1 - Math.pow(1 - this.scale, 3) : 1;
      const R = this.baseR * grow;
      for (let i = 0; i < this.points; i++) {
        const a = (i / this.points) * TAU;
        const r = R * (1
          + wobble * Math.sin(t * 0.0011 + i * 1.7 + this.phase)
          + wobble * 0.7 * Math.sin(t * 0.0007 - i * 2.3 + this.phase * 2));
        pts.push({ x: c.x + Math.cos(a) * r, y: c.y + Math.sin(a) * r });
      }
      return pts;
    }
    hit(x, y, w, h) {
      const c = this.center(w, h);
      return Math.hypot(x - c.x, y - c.y) < this.baseR * 1.12;
    }
  }

  function tracePath(ctx, pts) {
    const n = pts.length;
    const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
    let m = mid(pts[n - 1], pts[0]);
    ctx.moveTo(m.x, m.y);
    for (let i = 0; i < n; i++) {
      const next = mid(pts[i], pts[(i + 1) % n]);
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, next.x, next.y);
    }
    ctx.closePath();
  }

  class CellField {
    constructor(canvas, opts) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.mode = opts.mode || 'ambient';
      this.wobble = opts.wobble ?? 0.055;
      this.drift = opts.drift ?? 0.03;
      this.onEvent = opts.onEvent || (() => {});
      this.cells = opts.cells.map(c => new Cell(c));
      this.particles = [];
      this.filaments = [];
      this.nextFilament = 2200;
      this.mouse = { x: 0, y: 0, active: false };
      this.visible = false;
      this.last = performance.now();
      this.dpr = Math.min(devicePixelRatio || 1, 1.75);

      this.resize();
      addEventListener('resize', () => this.resize());

      canvas.addEventListener('pointermove', e => {
        const r = canvas.getBoundingClientRect();
        this.mouse.x = (e.clientX - r.left) * this.dpr;
        this.mouse.y = (e.clientY - r.top) * this.dpr;
        this.mouse.active = true;
        if (this.mode === 'interactive') this.updateCursor();
      });
      canvas.addEventListener('pointerleave', () => { this.mouse.active = false; });

      if (this.mode === 'interactive') {
        canvas.addEventListener('click', e => {
          const r = canvas.getBoundingClientRect();
          this.clickAt((e.clientX - r.left) * this.dpr, (e.clientY - r.top) * this.dpr);
        });
        // pointer-only was the whole story here — arrows select, Enter crashes
        this.focused = null;
        canvas.addEventListener('keydown', e => {
          const pool = this.cells.filter(c => c.role !== 'kernel');
          if (!pool.length) return;
          const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
          if (step) {
            e.preventDefault();
            const i = pool.indexOf(this.focused);
            this.focused = pool[i < 0
              ? (step > 0 ? 0 : pool.length - 1)
              : (i + step + pool.length) % pool.length];
            this.onEvent('select', this.focused);
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!this.focused) { this.focused = pool[0]; this.onEvent('select', this.focused); }
            else if (this.focused.alive) this.crash(this.focused);
            else this.onEvent('select', this.focused);
          } else return;
          if (REDUCED) this.draw(performance.now());
        });
        canvas.addEventListener('blur', () => {
          this.focused = null;
          if (REDUCED) this.draw(performance.now());
        });
      }

      new IntersectionObserver(es => {
        this.visible = es.some(x => x.isIntersecting);
        if (this.visible && !REDUCED) this.loop();
        if (REDUCED) this.draw(performance.now());
      }, { threshold: 0.05 }).observe(canvas);
    }

    resize() {
      const r = this.canvas.getBoundingClientRect();
      this.canvas.width = Math.round(r.width * this.dpr);
      this.canvas.height = Math.round(r.height * this.dpr);
      if (REDUCED) this.draw(performance.now());
    }
    get w() { return this.canvas.width; }
    get h() { return this.canvas.height; }

    updateCursor() {
      const over = this.cells.some(c => c.alive && c.role !== 'kernel'
        && c.hit(this.mouse.x, this.mouse.y, this.w, this.h));
      this.canvas.style.cursor = over ? 'pointer' : 'default';
    }

    clickAt(x, y) {
      for (const c of this.cells) {
        if (!c.hit(x, y, this.w, this.h)) continue;
        if (c.role === 'kernel') { this.onEvent('kernel-denied'); return; }
        if (!c.alive) return;
        this.crash(c);
        return;
      }
    }

    crash(cell) {
      cell.alive = false;
      const c = cell.center(this.w, this.h);
      for (let i = 0; i < 16; i++) {
        const a = Math.random() * TAU, v = 0.5 + Math.random() * 1.6;
        this.particles.push({ x: c.x, y: c.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, color: cell.color() });
      }
      this.onEvent('crash', cell);
    }

    revive(cell) {
      if (cell.alive) return;
      cell.alive = true;
      cell.scale = 0.05;
      this.onEvent('respawn', cell);
    }

    // directed filament from one cell to another; onArrive fires when it lands.
    // kind: 'heal' (gw-admin respawns a cell) | 'kernel' (supervisor replays the signed boot recipe)
    pulse(from, to, opts = {}) {
      const duration = opts.duration || 1100;
      if (REDUCED) {
        if (opts.onArrive) setTimeout(opts.onArrive, duration);
        return;
      }
      this.filaments.push({
        a: from, b: to, p: 0,
        speed: 1 / duration,
        kind: opts.kind || 'heal',
        onArrive: opts.onArrive,
      });
    }

    loop() {
      if (!this.visible || this._running || REDUCED) return;
      this._running = true;
      const step = (t) => {
        if (!this.visible) { this._running = false; return; }
        const dt = Math.min(50, t - this.last);
        this.last = t;
        this.update(t, dt);
        this.draw(t);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    update(t, dt) {
      const alive = this.cells.filter(c => c.alive);
      for (const c of this.cells) {
        if (c.role === 'kernel') continue;
        c.update(t, dt, this.w, this.h, this.mouse, this.cells, this.drift);
      }
      this.particles = this.particles.filter(p => (p.life -= dt * 0.0016) > 0);
      for (const p of this.particles) { p.x += p.vx * dt * 0.12; p.y += p.vy * dt * 0.12; }

      for (const f of this.filaments) {
        f.p += dt * f.speed;
        if (!f.arrived && f.p >= 1) {
          f.arrived = true;
          if (f.onArrive) f.onArrive();
        }
      }
      this.filaments = this.filaments.filter(f => f.p < 1.15);

      // ambient mode wanders; interactive filaments are causal (pulse only)
      if (this.mode !== 'interactive') {
        this.nextFilament -= dt;
        if (!this.filaments.length && this.nextFilament <= 0 && alive.length >= 2) {
          const pool = alive.filter(c => c.role !== 'kernel');
          if (pool.length >= 2) {
            let a = pool[Math.floor(Math.random() * pool.length)], b = a;
            while (b === a) b = pool[Math.floor(Math.random() * pool.length)];
            this.filaments.push({ a, b, p: 0, speed: 0.0009, kind: 'ambient' });
          }
          this.nextFilament = 2600 + Math.random() * 2600;
        }
      }
    }

    draw(t) {
      const { ctx, w, h } = this;
      const P = pal();
      ctx.clearRect(0, 0, w, h);
      const fontPx = Math.round(11 * this.dpr);

      for (const f of this.filaments) {
        const A = f.a.center(w, h), B = f.b.center(w, h);
        const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2 - 40 * this.dpr;
        const rgb = f.kind === 'heal' ? P.plankton : f.kind === 'kernel' ? P.kernel : P.filament;
        const strong = f.kind !== 'ambient';
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.quadraticCurveTo(mx, my, B.x, B.y);
        ctx.strokeStyle = `rgba(${rgb},${strong ? 0.32 : 0.18})`;
        ctx.lineWidth = this.dpr;
        ctx.stroke();
        const p = Math.min(1, f.p);
        const ix = (1 - p) * (1 - p) * A.x + 2 * (1 - p) * p * mx + p * p * B.x;
        const iy = (1 - p) * (1 - p) * A.y + 2 * (1 - p) * p * my + p * p * B.y;
        ctx.beginPath();
        ctx.arc(ix, iy, (strong ? 3 : 2.4) * this.dpr, 0, TAU);
        ctx.fillStyle = `rgba(${rgb},0.9)`;
        ctx.fill();
      }

      for (const cell of this.cells) {
        if (cell.role === 'kernel') { this.drawKernel(cell, t); continue; }
        const c = cell.center(w, h);
        if (cell === this.focused) {
          ctx.beginPath();
          ctx.arc(c.x, c.y, cell.baseR + 9 * this.dpr, 0, TAU);
          ctx.strokeStyle = P.label;
          ctx.setLineDash([3 * this.dpr, 4 * this.dpr]);
          ctx.lineWidth = 1.5 * this.dpr;
          ctx.stroke();
          ctx.setLineDash([]);
        }
        if (!cell.alive) {
          ctx.beginPath();
          ctx.arc(c.x, c.y, cell.baseR * 0.6, 0, TAU);
          ctx.strokeStyle = P.dead;
          ctx.setLineDash([4 * this.dpr, 6 * this.dpr]);
          ctx.lineWidth = this.dpr;
          ctx.stroke();
          ctx.setLineDash([]);
          if (cell.label && this.mode === 'interactive') {
            ctx.font = `${fontPx}px "IBM Plex Mono", monospace`;
            ctx.textAlign = 'center';
            ctx.fillStyle = P.deadLabel;
            ctx.fillText(cell.label + (cell.role === 'healer' ? ' · DOWN' : ' · dead'), c.x, c.y + cell.baseR + 22 * this.dpr);
          }
          continue;
        }

        const pts = cell.membrane(t, w, h, this.wobble);
        const grow = cell.scale < 1 ? cell.scale : 1;
        const R = cell.baseR * grow;
        const col = cell.color();

        const g = ctx.createRadialGradient(c.x, c.y, R * 0.15, c.x, c.y, R * 1.15);
        g.addColorStop(0, col + '2b');
        g.addColorStop(0.75, col + '16');
        g.addColorStop(1, col + '00');
        ctx.beginPath();
        tracePath(ctx, pts);
        ctx.fillStyle = g;
        ctx.fill();

        ctx.strokeStyle = col + (this.mode === 'interactive' ? '90' : '5e');
        ctx.lineWidth = 1.2 * this.dpr;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          c.x + Math.sin(t * 0.0005 + cell.phase) * R * 0.12,
          c.y + Math.cos(t * 0.0004 + cell.phase) * R * 0.12,
          Math.max(2, R * 0.1), 0, TAU);
        ctx.fillStyle = col + 'b3';
        ctx.fill();

        if (cell.label && this.mode === 'interactive') {
          ctx.font = `${fontPx}px "IBM Plex Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.fillStyle = P.label;
          ctx.fillText(cell.label + (cell.role === 'healer' ? ' ♥' : ''), c.x, c.y + cell.baseR + 22 * this.dpr);
        }
      }

      for (const p of this.particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * this.dpr * p.life, 0, TAU);
        ctx.fillStyle = p.color + Math.floor(p.life * 200).toString(16).padStart(2, '0');
        ctx.fill();
      }
    }

    drawKernel(cell, t) {
      const { ctx, w, h } = this;
      const P = pal();
      const c = cell.center(w, h);
      const R = cell.baseR;
      ctx.beginPath();
      ctx.arc(c.x, c.y, R, 0, TAU);
      ctx.strokeStyle = `rgba(${P.kernel},0.55)`;
      ctx.lineWidth = 1.4 * this.dpr;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(c.x, c.y, R * 0.55, 0, TAU);
      ctx.fillStyle = `rgba(${P.kernel},0.12)`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(c.x, c.y, R + 7 * this.dpr + Math.sin(t * 0.001) * 1.5 * this.dpr, 0, TAU);
      ctx.strokeStyle = `rgba(${P.kernel},0.14)`;
      ctx.lineWidth = this.dpr;
      ctx.stroke();
      if (this.mode === 'interactive') {
        ctx.font = `${Math.round(11 * this.dpr)}px "IBM Plex Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillStyle = P.label;
        ctx.fillText('kernel · ring 0', c.x, c.y + R + 24 * this.dpr);
      }
    }
  }

  window.ArkaneCells = { CellField, pal };
})();
