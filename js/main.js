/* ==========================================================================
   MAIN — renders content from window.SITE and wires up interactions.
   No dependencies. Content lives in js/content.js.
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  var LANG_KEY = 'se-lang';
  var lang = 'en';
  var filter = 'all';

  /* ---------- helpers ---------- */
  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
    return null;
  }
  function tr(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return o[lang] || o.en || '';
  }
  function ui(key) {
    var d = S.ui[lang] || S.ui.en;
    return d[key] !== undefined ? d[key] : (S.ui.en[key] || key);
  }
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    function add(c) {
      if (c == null) return;
      if (Array.isArray(c)) { c.forEach(add); return; }
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    for (var i = 2; i < arguments.length; i++) add(arguments[i]);
    return el;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fmtDate(ym) {
    if (!ym) return ui('exp.present');
    var p = ym.split('-');
    return p[1] + '/' + p[0];
  }

  /* ---------- static text ---------- */
  function applyStatic() {
    $$('[data-i18n]').forEach(function (el) { el.textContent = ui(el.getAttribute('data-i18n')); });
    $$('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', ui(el.getAttribute('data-i18n-alt'))); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', ui(el.getAttribute('data-i18n-aria'))); });
    document.documentElement.lang = lang;
    if ($('#manifest')) document.title = tr(S.meta.title);
    var d = $('meta[name="description"]');
    if (d) d.setAttribute('content', tr(S.meta.description));
    var ogd = $('meta[property="og:description"]');
    if (ogd) ogd.setAttribute('content', tr(S.meta.description));
    var ogl = $('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', lang === 'de' ? 'de_DE' : 'en_GB');
    $$('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    var yr = $('#year'); if (yr) yr.textContent = String(new Date().getFullYear());
  }

  /* ---------- About: three verbs ---------- */
  function renderTraits() {
    var root = $('#traits'); if (!root) return;
    root.textContent = '';
    S.traits.forEach(function (t) {
      root.appendChild(h('li', { class: 'trait' },
        h('span', { class: 'trait-word', text: tr(t.word) }),
        h('span', { class: 'trait-text', text: tr(t.text) })));
    });
  }

  /* ---------- Experience: the route ---------- */
  function renderExperience() {
    var root = $('#manifest'); if (!root) return;
    root.textContent = '';
    var list = S.experience.slice().sort(function (a, b) { return a.from < b.from ? 1 : -1; });
    list.forEach(function (e) {
      var kind = e.type === 'work' ? ui('exp.work') : ui('exp.edu');
      var bullets = e.bullets && e.bullets.length
        ? h('ul', { class: 'stop-list' }, e.bullets.map(function (b) { return h('li', { text: tr(b) }); }))
        : null;
      var li = h('li', { class: 'stop', 'data-type': e.type },
        h('div', { class: 'stop-when' },
          h('span', { text: fmtDate(e.from) }),
          h('span', { class: 'stop-to', text: fmtDate(e.to) })),
        h('span', { class: 'stop-node', 'aria-hidden': 'true' }),
        h('div', { class: 'stop-body' },
          h('p', { class: 'stop-place', text: e.place + ' · ' + kind }),
          h('h3', { class: 'stop-org', text: tr(e.org) }),
          h('p', { class: 'stop-role', text: tr(e.role) }),
          bullets));
      if (filter !== 'all' && e.type !== filter) li.hidden = true;
      root.appendChild(li);
    });
  }
  function setFilter(f) {
    filter = f;
    $$('[data-filter]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === f ? 'true' : 'false'); });
    $$('#manifest .stop').forEach(function (li) {
      li.hidden = !(f === 'all' || li.getAttribute('data-type') === f);
    });
  }

  /* ---------- Projects ---------- */
  function factsList(facts) {
    var dl = h('dl', { class: 'facts' });
    facts.forEach(function (f) {
      dl.appendChild(h('div', null, h('dt', { text: tr(f.k) }), h('dd', { text: tr(f.v) })));
    });
    return dl;
  }
  function renderProjects() {
    var root = $('#projects-grid'); if (!root) return;
    root.textContent = '';
    S.projects.forEach(function (p) {
      var card;
      if (p.kind === 'paper') {
        var val = (lang === 'de' && p.stat.de_value) ? p.stat.de_value : p.stat.value;
        card = h('article', { class: 'proj proj-paper panel' },
          h('div', { class: 'proj-body' },
            h('p', { class: 'tag', text: tr(p.label) }),
            h('div', { class: 'stat' },
              h('span', { class: 'stat-num', text: val }),
              h('span', { class: 'stat-label', text: tr(p.stat.label) })),
            h('h3', { class: 'proj-title', text: tr(p.title) }),
            h('p', { class: 'proj-sum', text: tr(p.summary) }),
            factsList(p.facts)));
      } else {
        card = h('article', { class: 'proj proj-brand' },
          h('img', { class: 'proj-img', src: p.image, alt: tr(p.imageAlt), width: '900', height: '900', loading: 'lazy' }),
          h('div', { class: 'proj-body' },
            h('p', { class: 'tag', text: tr(p.label) }),
            h('h3', { class: 'proj-title', text: tr(p.title) }),
            h('p', { class: 'proj-sum', text: tr(p.summary) }),
            factsList(p.facts)));
      }
      root.appendChild(card);
    });
  }

  /* ---------- Skills & languages ---------- */
  function renderSkills() {
    var root = $('#skills-grid');
    if (root) {
      root.textContent = '';
      S.skills.forEach(function (g) {
        root.appendChild(h('section', { class: 'skill-group' + (g.dashed ? ' is-exploring' : ''), 'aria-labelledby': 'sg-' + g.id },
          h('h3', { id: 'sg-' + g.id, class: 'skill-title', text: tr(g.title) }),
          h('p', { class: 'skill-note', text: tr(g.note) }),
          h('ul', { class: 'chips' }, g.items.map(function (i) { return h('li', { text: tr(i) }); }))));
      });
    }
    var lroot = $('#languages');
    if (lroot) {
      lroot.textContent = '';
      S.languages.forEach(function (l) {
        var bar = h('span', { class: 'cefr', 'aria-hidden': 'true' });
        for (var i = 1; i <= 6; i++) {
          bar.appendChild(h('i', { class: (l.native || i <= l.step) ? 'on' : '' }));
        }
        lroot.appendChild(h('li', { class: 'lang-row' + (l.native ? ' is-native' : '') },
          h('span', { class: 'lang-name', text: tr(l.name) }),
          bar,
          h('span', { class: 'lang-level', text: tr(l.level) })));
      });
    }
  }

  /* ---------- Direction ---------- */
  function renderRoutes() {
    var root = $('#routes'); if (!root) return;
    root.textContent = '';
    S.routes.forEach(function (r) {
      root.appendChild(h('li', { class: 'route' },
        h('h3', { class: 'route-name', text: tr(r.name) }),
        h('p', { class: 'route-text', text: tr(r.text) }),
        h('p', { class: 'route-basis', text: tr(r.basis) })));
    });
  }

  /* ---------- Legal page ---------- */
  function renderLegal() {
    var root = $('#legal-root'); if (!root) return;
    root.textContent = '';
    S.legal.forEach(function (sec) {
      var s = h('section', { id: sec.id, class: 'legal-sec' }, h('h2', { text: tr(sec.title) }));
      sec.body.forEach(function (p) { s.appendChild(h('p', { text: tr(p) })); });
      root.appendChild(s);
    });
  }

  /* ---------- language ---------- */
  function setLang(next) {
    lang = next === 'de' ? 'de' : 'en';
    store(LANG_KEY, lang);
    applyStatic();
    renderTraits(); renderExperience(); renderProjects();
    renderSkills(); renderRoutes(); renderLegal();
    var cb = $('#copy-email');
    if (cb) cb.textContent = ui('contact.copy');
  }
  function detectLang() {
    var s = store(LANG_KEY);
    if (s === 'en' || s === 'de') return s;
    return ((navigator.language || 'en').toLowerCase().indexOf('de') === 0) ? 'de' : 'en';
  }

  /* ---------- interactions ---------- */
  function wire() {
    $$('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    $$('[data-filter]').forEach(function (b) {
      b.addEventListener('click', function () { setFilter(b.getAttribute('data-filter')); });
    });

    var burger = $('#burger'), nav = $('#nav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      $$('a', nav).forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          burger.focus();
        }
      });
    }

    var copy = $('#copy-email'), mail = $('#email-text');
    if (copy && mail) {
      copy.addEventListener('click', function () {
        function done(msg) {
          copy.textContent = msg;
          window.setTimeout(function () { copy.textContent = ui('contact.copy'); }, 1800);
        }
        function fallback() {
          try {
            var r = document.createRange(); r.selectNodeContents(mail);
            var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
          } catch (e) { /* ignore */ }
          done(ui('contact.copyfail'));
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(mail.textContent.trim()).then(function () { done(ui('contact.copied')); }, fallback);
        } else { fallback(); }
      });
    }

    /* highlight the nav link of the section in view */
    var links = $$('.nav a[href^="#"]');
    if (links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            links.forEach(function (a) { a.removeAttribute('aria-current'); });
            map[en.target.id].setAttribute('aria-current', 'true');
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  setLang(detectLang());
  wire();
})();
