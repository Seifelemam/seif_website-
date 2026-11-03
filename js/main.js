/* ==========================================================================
   MAIN — renders content from window.SITE and wires up interactions.
   No dependencies. Content lives in js/content.js.
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  var LANG_KEY = 'se-lang';
  var lang = 'en';

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
  function bulletList(arr, cls) {
    if (!arr || !arr.length) return null;
    return h('ul', { class: cls || 'stop-list' }, arr.map(function (b) { return h('li', { text: tr(b) }); }));
  }
  function factsList(facts) {
    if (!facts || !facts.length) return null;
    var dl = h('dl', { class: 'facts' });
    facts.forEach(function (f) {
      dl.appendChild(h('div', null, h('dt', { text: tr(f.k) }), h('dd', { text: tr(f.v) })));
    });
    return dl;
  }

  /* ---------- static text ---------- */
  function applyStatic() {
    $$('[data-i18n]').forEach(function (el) { el.textContent = ui(el.getAttribute('data-i18n')); });
    $$('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', ui(el.getAttribute('data-i18n-alt'))); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', ui(el.getAttribute('data-i18n-aria'))); });
    document.documentElement.lang = lang;
    if ($('#manifest')) document.title = tr(S.meta.title);
    var d = $('meta[name="description"]');
    if (d && $('#manifest')) d.setAttribute('content', tr(S.meta.description));
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

  /* ---------- Education ---------- */
  function renderEducation() {
    var root = $('#edu-grid'); if (!root) return;
    root.textContent = '';
    var labels = { done: ui('edu.s.done'), course: ui('edu.s.course'), now: ui('edu.s.now') };
    S.education.forEach(function (e) {
      var when = null;
      if (e.from) when = h('p', { class: 'edu-when', text: fmtDate(e.from) + ' – ' + fmtDate(e.to) });
      root.appendChild(h('li', { class: 'edu edu-' + e.status },
        h('span', { class: 'status', text: labels[e.status] }),
        when,
        h('h3', { class: 'edu-org', text: tr(e.org) }),
        h('p', { class: 'edu-place', text: e.place ? tr(typeof e.place === 'string' ? { en: e.place, de: e.place === 'Germany' ? 'Deutschland' : e.place === 'Egypt' ? 'Ägypten' : e.place } : e.place) : '' }),
        h('p', { class: 'edu-title', text: tr(e.title) }),
        bulletList(e.bullets, 'stop-list')));
    });
  }

  /* ---------- Experience: the route ---------- */
  function placeName(p) {
    var map = { Germany: 'Deutschland', Egypt: 'Ägypten' };
    return lang === 'de' && map[p] ? map[p] : p;
  }
  function renderExperience() {
    var root = $('#manifest'); if (!root) return;
    root.textContent = '';
    var list = S.experience.slice().sort(function (a, b) { return a.from < b.from ? 1 : -1; });
    list.forEach(function (e) {
      var kind = e.type === 'volunteer' ? ui('exp.volunteer') : ui('exp.work');
      root.appendChild(h('li', { class: 'stop', 'data-type': e.type },
        h('div', { class: 'stop-when' },
          h('span', { text: fmtDate(e.from) }),
          h('span', { class: 'stop-to', text: fmtDate(e.to) })),
        h('span', { class: 'stop-node', 'aria-hidden': 'true' }),
        h('div', { class: 'stop-body' },
          h('p', { class: 'stop-place', text: placeName(e.place) + ' · ' + kind }),
          h('h3', { class: 'stop-org', text: tr(e.org) }),
          h('p', { class: 'stop-role', text: tr(e.role) }),
          bulletList(e.bullets, 'stop-list'))));
    });
  }

  /* ---------- Marketing, creativity & content ---------- */
  function renderCreative() {
    var root = $('#creative-root'); if (!root) return;
    var c = S.creative;
    root.textContent = '';
    root.appendChild(h('article', { class: 'cr-main panel' },
      h('p', { class: 'tag', text: tr(c.kind) }),
      h('h3', { class: 'cr-partner', text: tr(c.partner) }),
      bulletList(c.items, 'cr-list')));
    root.appendChild(h('article', { class: 'cr-side' },
      h('p', { class: 'tag tag-line', text: tr(c.personal.label) }),
      h('h3', { class: 'proj-title', text: tr(c.personal.title) }),
      h('p', { text: tr(c.personal.text) })));
    root.appendChild(h('div', { class: 'cr-how' },
      h('h3', { text: ui('cr.how') }),
      h('p', { text: tr(c.how) })));
    root.appendChild(h('div', { class: 'cr-take' },
      h('h3', { text: ui('cr.take') }),
      h('ul', { class: 'chips' }, c.takeaways.map(function (t) { return h('li', { text: tr(t) }); }))));
  }

  /* ---------- Culture & community ---------- */
  function renderCulture() {
    var root = $('#culture-grid'); if (!root) return;
    root.textContent = '';
    S.culture.forEach(function (c) {
      var img = c.image ? h('img', { class: 'cu-img', src: c.image, alt: tr(c.imageAlt), width: '900', height: '900', loading: 'lazy' }) : null;
      var up = c.upcoming ? h('p', { class: 'upcoming' }, h('b', { text: ui('cu.upcoming') }), ' ' + tr(c.upcoming)) : null;
      var note = c.note ? h('p', { class: 'cu-note', text: tr(c.note) }) : null;
      root.appendChild(h('article', { class: 'cu cu-' + c.size + (c.feature ? ' cu-feature' : '') + (img ? ' has-img' : '') },
        img,
        h('div', { class: 'cu-body' },
          h('p', { class: 'tag' + (c.feature ? '' : ' tag-line'), text: tr(c.label) }),
          up,
          h('h3', { class: 'proj-title', text: tr(c.title) }),
          h('p', { class: 'cu-text', text: tr(c.text) }),
          note,
          factsList(c.facts))));
    });
  }

  /* ---------- Travel ---------- */
  function renderTravel() {
    var root = $('#travel-grid'); if (!root) return;
    root.textContent = '';
    S.travel.forEach(function (t) {
      var img = t.image ? h('img', { class: 'stamp-img', src: t.image, alt: tr(t.imageAlt), loading: 'lazy' }) : null;
      root.appendChild(h('li', { class: 'stamp' },
        img,
        h('p', { class: 'stamp-region', text: tr(t.region) }),
        h('h3', { class: 'stamp-country', text: tr(t.country) }),
        t.places ? h('p', { class: 'stamp-places', text: tr(t.places) }) : null));
    });
    root.appendChild(h('li', { class: 'stamp stamp-more' },
      h('p', { class: 'stamp-region', text: '+' }),
      h('h3', { class: 'stamp-country', text: ui('tr.more') }),
      h('p', { class: 'stamp-places', text: ui('tr.more.v') })));
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
        for (var i = 1; i <= 6; i++) bar.appendChild(h('i', { class: (l.native || i <= l.step) ? 'on' : '' }));
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
    renderTraits(); renderEducation(); renderExperience(); renderCreative(); renderCulture();
    renderTravel(); renderSkills(); renderRoutes(); renderLegal();
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
