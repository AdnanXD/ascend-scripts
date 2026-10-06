/* Ascend Scripts - app logic. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var KEY = 'ascendScripts.v1';
  var VERSION = '1.0.0';
  var AUTO = { MyName: 1, Company: 1 };
  var FIELD_RE = /\{([^{}\n]{1,30})\}/g;

  /* =====================================================================
     Helpers
     ===================================================================== */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }
  function uid(p) { return (p || 'x') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function str(v, d) { return typeof v === 'string' ? v : (v == null ? (d || '') : String(v)); }
  function num(v) { v = +v; return isFinite(v) ? v : 0; }
  function ymd() {
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
  }

  /* Icons (inline SVG) */
  function svg(inner, cls) {
    return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + inner + '</svg>';
  }
  var I = {
    copy: svg('<rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15"/>'),
    dup: svg('<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="M14 11.5v5M11.5 14h5"/>'),
    wa: svg('<path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z"/><path d="M9.2 8.3c-.5.6-.6 1.5-.1 2.5.8 1.7 2.1 3 3.8 3.8 1 .4 1.9.3 2.5-.3l.2-.9-1.7-.9-.8.6c-.9-.4-1.8-1.3-2.2-2.2l.6-.8-.9-1.7z" fill="currentColor" stroke="none"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    back: svg('<path d="M15 5l-7 7 7 7"/>'),
    next: svg('<path d="M9 5l7 7-7 7"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    edit: svg('<path d="M4 20l4.2-1L19 8.2 15.8 5 5 15.8z"/><path d="M13.6 7.2l3.2 3.2"/>'),
    trash: svg('<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l.9 12.5h9.2L17.5 7"/>'),
    up: svg('<path d="M6 14.5l6-6 6 6"/>'),
    down: svg('<path d="M6 9.5l6 6 6-6"/>'),
    search: svg('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'),
    note: svg('<path d="M6 3.5h8.5L19 8v12.5H6z"/><path d="M9 12.5h7M9 16.5h5"/>'),
    shield: svg('<path d="M12 3l7 3v5.2c0 4.6-3 7.6-7 9.8-4-2.2-7-5.2-7-9.8V6z"/><path d="M9.2 12l2 2 3.6-4"/>'),
    restart: svg('<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5"/><path d="M4 4v4.5h4.5"/>'),
    star: function (on) {
      return svg('<path d="M12 3.6l2.6 5.3 5.8.9-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.9z"/>', on ? 'fill' : '');
    }
  };

  /* =====================================================================
     State + storage
     ===================================================================== */
  var S = null;
  var storageOk = true, storageWarned = false;
  var ui = { q: '', cat: '__all__' };

  var OLD_FLOW_TITLES = { 's-f-buyer': ['Buyer / Tenant Discovery Call', 'Buyer / Tenant'], 's-f-landlord': ['Landlord / Seller Listing Call', 'Landlord / Seller'] };
  function migrateFlowTitle(f) {
    var t = str(f.title), m = OLD_FLOW_TITLES[f.id];
    return m && t === m[0] ? m[1] : t;
  }

  function normalize(p) {
    if (!p || typeof p !== 'object' || !Array.isArray(p.messages) || !Array.isArray(p.flows) || !Array.isArray(p.objections)) {
      throw new Error('This file is not an Ascend Scripts backup.');
    }
    var seen = {};
    function id(v, pre) {
      var i = str(v);
      if (!i || seen[i]) i = uid(pre);
      seen[i] = 1;
      return i;
    }
    function obj(v) { return v && typeof v === 'object' ? v : {}; }

    var messages = p.messages.filter(obj).map(function (m) {
      return {
        id: id(m.id, 'm'), title: str(m.title), category: str(m.category, 'Other') || 'Other', body: str(m.body),
        fav: !!m.fav, uses: num(m.uses), lastUsed: num(m.lastUsed), updatedAt: num(m.updatedAt)
      };
    });
    var flows = p.flows.filter(obj).map(function (f) {
      return {
        id: id(f.id, 'f'), title: migrateFlowTitle(f),
        steps: (Array.isArray(f.steps) ? f.steps : []).filter(obj).map(function (s) {
          return { id: id(s.id, 's'), title: str(s.title), say: str(s.say), notes: str(s.notes) };
        })
      };
    });
    var objections = p.objections.filter(obj).map(function (o) {
      return { id: id(o.id, 'o'), title: str(o.title), answer: str(o.answer), category: str(o.category) };
    });
    var cats = [];
    (Array.isArray(p.categories) ? p.categories : []).forEach(function (c) {
      if (typeof c === 'string' && c.trim() && cats.indexOf(c) < 0) cats.push(c);
    });
    messages.forEach(function (m) { if (cats.indexOf(m.category) < 0) cats.push(m.category); });
    var fields = {};
    Object.keys(obj(p.fields)).forEach(function (k) { if (typeof p.fields[k] === 'string') fields[k] = p.fields[k]; });
    var st = obj(p.settings), u = obj(p.ui), steps = {};
    Object.keys(obj(u.steps)).forEach(function (k) { steps[k] = Math.max(0, Math.floor(num(u.steps[k]))); });
    return {
      version: 1,
      messages: messages, flows: flows, objections: objections, categories: cats,
      fields: fields,
      settings: { myName: str(st.myName, 'Adnan'), company: str(st.company, 'Ascend Properties') },
      callNotes: str(p.callNotes),
      ui: { mode: u.mode === 'call' ? 'call' : 'messages', flowId: str(u.flowId), steps: steps }
    };
  }

  function starter() { return normalize(clone(window.ASCEND_STARTER)); }

  function load() {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { storageOk = false; }
    if (raw) {
      try { S = normalize(JSON.parse(raw)); } catch (e) {
        try { localStorage.setItem(KEY + '.corrupt', raw); } catch (e2) { /* ignore */ }
        S = null;
        setTimeout(function () { toast('Saved data could not be read. A copy was kept and starter content loaded.', { ms: 6000 }); }, 400);
      }
    }
    if (!S) { S = starter(); }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
      return true;
    } catch (e) {
      storageOk = false;
      if (!storageWarned) {
        storageWarned = true;
        setTimeout(function () {
          toast('Storage is unavailable, so changes will be lost when you close the app. Use Export backup in Settings.', { ms: 7000 });
        }, 300);
      }
      return false;
    }
  }

  function getMsg(id) { return S.messages.filter(function (m) { return m.id === id; })[0]; }
  function getFlow(id) { return S.flows.filter(function (f) { return f.id === id; })[0]; }
  function getObj(id) { return S.objections.filter(function (o) { return o.id === id; })[0]; }

  /* =====================================================================
     Fill-ins + formatting
     ===================================================================== */
  function tokensOf(body) {
    var out = [];
    String(body).replace(FIELD_RE, function (m, n) {
      n = n.trim();
      if (n && out.indexOf(n) < 0) out.push(n);
      return m;
    });
    return out;
  }
  function promptFields(body) { return tokensOf(body).filter(function (n) { return !AUTO[n]; }); }
  function autoValue(n) { return n === 'MyName' ? S.settings.myName : S.settings.company; }

  /* Final text: auto tokens resolved; empty fields keep their {Field} placeholder. */
  function buildText(body, vals) {
    vals = vals || S.fields;
    return String(body).replace(FIELD_RE, function (m, n) {
      var k = n.trim();
      if (!k) return m;
      if (AUTO[k]) return autoValue(k) || m;
      return (vals[k] && String(vals[k]).trim()) ? String(vals[k]).trim() : m;
    });
  }

  var BOLD = /(^|[^A-Za-z0-9*])\*([^\s*](?:[^*\n]*[^\s*])?)\*(?![A-Za-z0-9*])/g;
  var ITAL = /(^|[^A-Za-z0-9_])_([^\s_](?:[^_\n]*[^\s_])?)_(?![A-Za-z0-9_])/g;
  var STRK = /(^|[^A-Za-z0-9~])~([^\s~](?:[^~\n]*[^\s~])?)~(?![A-Za-z0-9~])/g;

  /* opts: mode 'template' | 'fill' | 'call'; vals; format (default true) */
  function fmt(body, opts) {
    opts = opts || {};
    var toks = [];
    var t = String(body).replace(FIELD_RE, function (m, n) {
      n = n.trim();
      if (!n) return m;
      toks.push(n);
      return '\uE000' + (toks.length - 1) + '\uE001';
    });
    t = esc(t);
    if (opts.format === 'strip') {
      t = t.replace(BOLD, '$1$2').replace(ITAL, '$1$2').replace(STRK, '$1$2');
    } else if (opts.format !== false) {
      t = t.replace(BOLD, '$1<b>$2</b>').replace(ITAL, '$1<i>$2</i>').replace(STRK, '$1<s>$2</s>');
    }
    return t.replace(/\uE000(\d+)\uE001/g, function (m, i) { return pill(toks[+i], opts); });
  }
  function pill(n, o) {
    if (AUTO[n]) {
      var a = autoValue(n);
      return a ? esc(a) : '<span class="pill warn">{' + esc(n) + '}</span>';
    }
    var v = String((o.vals || S.fields)[n] || '').trim();
    if (o.mode === 'fill') {
      return v ? '<span class="pill ok">' + esc(v) + '</span>' : '<span class="pill warn">{' + esc(n) + '}</span>';
    }
    if (o.mode === 'call') {
      return v ? '<span class="val">' + esc(v) + '</span>' : '<span class="pill">{' + esc(n) + '}</span>';
    }
    return '<span class="pill">{' + esc(n) + '}</span>';
  }

  /* =====================================================================
     Clipboard, WhatsApp, toast
     ===================================================================== */
  function fallbackCopy(text) {
    var ok = false, ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px';
    document.body.appendChild(ta);
    var prev = document.activeElement;
    try {
      ta.focus({ preventScroll: true });
      ta.select();
      ta.setSelectionRange(0, text.length);
      ok = document.execCommand('copy');
    } catch (e) { ok = false; }
    document.body.removeChild(ta);
    try { if (prev && prev.focus) prev.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
    return ok;
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function waUrl(text, phone) {
    var raw = String(phone || '').trim(), d = raw.replace(/\D/g, '');
    if (d) {
      if (raw.charAt(0) !== '+') {
        if (d.indexOf('00') === 0) d = d.slice(2);
        else if (d.charAt(0) === '0') d = '94' + d.slice(1);
      }
    }
    return 'https://wa.me/' + d + '?text=' + encodeURIComponent(text);
  }
  function sendWA(text, phone) {
    var url = waUrl(text, phone);
    if (isMobile()) {
      return copyText(text).then(function () { window.location.href = url; });
    }
    window.open(url, '_blank', 'noopener');
    return copyText(text);
  }

  var toastTimer = null;
  function toast(msg, o) {
    o = o || {};
    var el = $('#toast');
    el.textContent = '';
    var sp = document.createElement('span');
    sp.textContent = msg;
    el.appendChild(sp);
    el.classList.toggle('has-undo', !!o.undo);
    if (o.undo) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'toast-undo';
      b.textContent = 'Undo';
      b.addEventListener('click', function () {
        clearTimeout(toastTimer);
        el.classList.remove('show');
        o.undo();
      });
      el.appendChild(b);
    }
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, o.undo ? 6000 : (o.ms || 2500));
  }

  /* Remove an item from an array with an Undo toast. */
  function removeWithUndo(arr, idx, label, after) {
    var item = arr.splice(idx, 1)[0];
    save();
    if (after) after();
    toast(label, {
      undo: function () {
        arr.splice(Math.min(idx, arr.length), 0, item);
        save();
        if (after) after();
        toast('Restored \u2713');
      }
    });
  }

  function touch(m) { m.uses = (m.uses || 0) + 1; m.lastUsed = Date.now(); save(); }

  /* =====================================================================
     Sheets
     ===================================================================== */
  var stack = [];
  var suppressPop = 0, inPop = false;
  function histPush() { try { history.pushState({ sheet: 1 }, ''); } catch (e) { /* ignore */ } }
  window.addEventListener('popstate', function () {
    if (suppressPop > 0) {
      suppressPop--;
      if (stack.length) histPush();
      return;
    }
    if (!stack.length) return;
    inPop = true;
    try { stack[stack.length - 1].close(); } finally { inPop = false; }
    if (stack.length) histPush();
  });

  function updateInert() {
    var top = stack[stack.length - 1];
    ['top', 'app', 'fab'].forEach(function (id) {
      var e = document.getElementById(id);
      if (e) e.inert = stack.length > 0;
    });
    stack.forEach(function (s) { s.el.inert = s !== top; });
    document.body.classList.toggle('lock', stack.length > 0);
  }

  function openSheet(o) {
    var wrap = document.createElement('div');
    wrap.className = 'sheet-wrap' + (o.full ? ' full' : '') + (o.tall ? ' tall' : '');
    wrap.innerHTML = '<div class="backdrop" data-act="backdrop"></div>' +
      '<div class="sheet" role="dialog" aria-modal="true" tabindex="-1"><div class="grab" aria-hidden="true"></div><div class="sheet-in"></div></div>';
    var sh = {
      el: wrap, sheet: wrap.querySelector('.sheet'), inner: wrap.querySelector('.sheet-in'),
      acts: {}, opener: document.activeElement, refresh: null, alive: true,
      canClose: o.canClose, onClose: o.onClose,
      set: function (html) { sh.inner.innerHTML = html; },
      q: function (s) { return sh.inner.querySelector(s); },
      qa: function (s) { return $$(s, sh.inner); },
      close: function (force) {
        if (!sh.alive) return;
        if (!force && sh.canClose && sh.canClose() === false) return;
        sh.alive = false;
        var i = stack.indexOf(sh);
        if (i >= 0) stack.splice(i, 1);
        if (!stack.length && !inPop) { suppressPop++; try { history.back(); } catch (e) { suppressPop--; } }
        updateInert();
        wrap.style.pointerEvents = 'none';
        wrap.classList.remove('shown');
        if (reduced) wrap.remove(); else setTimeout(function () { wrap.remove(); }, 220);
        if (sh.onClose) sh.onClose();
        var op = sh.opener;
        if (op && op !== document.body && document.contains(op) && !/^(INPUT|TEXTAREA|SELECT)$/.test(op.tagName) && !op.inert) {
          try { op.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
        } else if (stack.length) {
          stack[stack.length - 1].sheet.focus();
        }
      },
      focus: function (sel) {
        var t = sel && sh.q(sel);
        (t || sh.sheet).focus({ preventScroll: true });
        if (t && t.select && t.tagName === 'INPUT' && o.selectOnFocus) t.select();
      }
    };
    sh.sheet.setAttribute('aria-label', o.label || 'Dialog');
    wrap._sheet = sh;
    $('#sheets').appendChild(wrap);
    if (!stack.length) histPush();
    stack.push(sh);
    updateInert();
    requestAnimationFrame(function () { requestAnimationFrame(function () { wrap.classList.add('shown'); }); });
    return sh;
  }

  function head(title, o) {
    o = o || {};
    var left = o.left === 'back'
      ? '<button type="button" class="icon-btn" data-act="close" aria-label="Back">' + I.back + '</button>'
      : (o.left === 'none' ? '' : '');
    var right = o.right != null ? o.right : '<button type="button" class="icon-btn" data-act="close" aria-label="Close">' + I.close + '</button>';
    return '<div class="sheet-head">' + left + '<h2 class="sheet-title">' + esc(title) + '</h2>' + right + '</div>';
  }

  function confirmSheet(o) {
    var sh = openSheet({ label: o.title });
    sh.set(head(o.title, { right: '<span class="sp"></span>' }) +
      '<div class="sheet-scroll">' + (o.text ? '<p>' + o.text + '</p>' : '') +
      '<div class="row" style="margin-top:18px"><button type="button" class="btn big" data-act="no">' + esc(o.cancel || 'Cancel') + '</button>' +
      '<button type="button" class="btn big ' + (o.danger ? 'destructive' : 'primary') + '" data-act="yes">' + esc(o.ok || 'Confirm') + '</button></div></div>');
    sh.acts.no = function () { sh.close(true); if (o.onCancel) o.onCancel(); };
    sh.acts.yes = function () { sh.close(true); if (o.onOk) o.onOk(); };
    sh.focus('[data-act="no"]');
    return sh;
  }

  /* =====================================================================
     Top-level rendering
     ===================================================================== */
  function setThemeColor() {
    var m = $('meta[name="theme-color"]');
    if (!m) return;
    var dark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
    m.setAttribute('content', S.ui.mode === 'call' ? '#0B111B' : (dark ? '#0F1622' : '#F7F5F0'));
  }

  function applyMode() {
    var call = S.ui.mode === 'call';
    document.body.classList.toggle('call', call);
    $('#tab-messages').setAttribute('aria-selected', String(!call));
    $('#tab-call').setAttribute('aria-selected', String(call));
    setThemeColor();
    render();
    if (call) wakeOn(); else wakeOff();
  }

  function setMode(m) {
    if (S.ui.mode === m) return;
    S.ui.mode = m;
    save();
    applyMode();
    window.scrollTo(0, 0);
  }

  function render() {
    if (S.ui.mode === 'call') renderCallShell(); else renderMessagesShell();
  }

  function refreshAll() {
    if (S.ui.mode === 'call') {
      if ($('#callBody')) { renderFlowChips(); renderStep(); }
    } else if ($('#list')) {
      renderChips(); renderClientBar(); renderList();
    }
    stack.slice().forEach(function (s) { if (s.refresh) s.refresh(); });
  }

  /* ---------------- Messages mode ---------------- */
  function renderMessagesShell() {
    $('#app').innerHTML =
      '<section class="msgs">' +
      '<div class="tools"><div class="search">' + I.search +
      '<input type="search" id="q" placeholder="Search scripts\u2026" aria-label="Search scripts" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search"></div>' +
      '<div class="chips" id="chips" role="group" aria-label="Categories"></div></div>' +
      '<div id="clientbar"></div><div class="list" id="list"></div></section>';
    $('#q').value = ui.q;
    renderChips(); renderClientBar(); renderList();
  }

  function renderChips() {
    var c = $('#chips');
    if (!c) return;
    var items = [{ k: '__all__', t: 'All' }, { k: '__fav__', t: '\u2605 Favourites' }]
      .concat(S.categories.map(function (n) { return { k: n, t: n }; }));
    c.innerHTML = items.map(function (it) {
      return '<button type="button" class="chip" data-act="cat" data-cat="' + esc(it.k) + '" aria-pressed="' + (ui.cat === it.k) + '">' + esc(it.t) + '</button>';
    }).join('');
  }

  function clientSummary() {
    var order = ['Name', 'Property', 'Area'];
    var keys = Object.keys(S.fields).filter(function (k) { return k.charAt(0) !== '_' && S.fields[k]; });
    var picked = order.filter(function (k) { return keys.indexOf(k) >= 0; });
    keys.forEach(function (k) { if (picked.indexOf(k) < 0) picked.push(k); });
    var parts = picked.slice(0, 2).map(function (k) { return S.fields[k]; });
    if (!parts.length && S.fields._phone) parts = [S.fields._phone];
    return parts;
  }

  function renderClientBar() {
    var el = $('#clientbar');
    if (!el) return;
    var parts = clientSummary();
    if (!parts.length) { el.innerHTML = ''; return; }
    el.innerHTML = '<div class="clientbar"><span class="who">Client: <b>' + esc(parts.join(' \u00B7 ')) + '</b></span>' +
      '<button type="button" class="icon-btn" data-act="clear-client" aria-label="Clear current client">' + I.close + '</button></div>';
  }

  function filtered() {
    var terms = ui.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var a = S.messages.filter(function (m) {
      if (ui.cat === '__fav__' && !m.fav) return false;
      if (ui.cat !== '__all__' && ui.cat !== '__fav__' && m.category !== ui.cat) return false;
      if (terms.length) {
        var h = (m.title + ' ' + m.body + ' ' + m.category).toLowerCase();
        return terms.every(function (t) { return h.indexOf(t) >= 0; });
      }
      return true;
    });
    // Stable order: favourites, then category order, then array order (uncategorised last).
    var order = a.map(function (m, i) { return { m: m, i: i }; });
    function ci(m) { var k = S.categories.indexOf(m.category); return k < 0 ? 9999 : k; }
    order.sort(function (x, y) {
      if (!!x.m.fav !== !!y.m.fav) return x.m.fav ? -1 : 1;
      if (ci(x.m) !== ci(y.m)) return ci(x.m) - ci(y.m);
      return x.i - y.i;
    });
    return order.map(function (o) { return o.m; });
  }

  function renderList() {
    var el = $('#list');
    if (!el) return;
    var a = filtered();
    if (!a.length) {
      var q = ui.q.trim(), msg;
      if (!S.messages.length) {
        msg = '<h3>No scripts yet</h3><p>Tap + to write your first one, or restore the starter templates in Settings.</p>';
      } else if (ui.cat === '__fav__' && !q) {
        msg = '<h3>No favourites yet</h3><p>Open a script and tap the star to pin it to the top.</p>';
      } else if (q) {
        msg = '<h3>No scripts match \u201C' + esc(q) + '\u201D</h3>' +
          (ui.cat !== '__all__' ? '<button type="button" class="btn" data-act="cat" data-cat="__all__">Search all categories</button>' : '<button type="button" class="btn" data-act="new-script">Create a new script</button>');
      } else {
        msg = '<h3>Nothing in this category</h3><p>Tap + to add a script here.</p>';
      }
      el.innerHTML = '<div class="empty">' + msg + '</div>';
      return;
    }
    var grouped = ui.cat === '__all__' && !ui.q.trim(), lastKey = null;
    el.innerHTML = a.map(function (m) {
      var key = m.fav ? '__fav__' : m.category, h = '';
      if (grouped && key !== lastKey) {
        h = '<h2 class="group-h">' + (m.fav ? '\u2605 Favourites' : esc(m.category)) + '</h2>';
        lastKey = key;
      }
      var showCat = !grouped || m.fav;
      return h + '<article class="card" data-id="' + esc(m.id) + '">' +
        '<div class="card-main" role="button" tabindex="0" data-act="view" aria-label="Open script: ' + esc(m.title) + '">' +
        '<div class="card-top"><h3 class="card-title">' + esc(m.title || 'Untitled') + '</h3>' +
        (m.fav ? '<span class="fav-mark" aria-label="Favourite">' + I.star(true) + '</span>' : '') + '</div>' +
        (showCat ? '<div class="card-cat">' + esc(m.category) + '</div>' : '') +
        '<p class="card-prev">' + fmt(m.body, { mode: 'template', format: 'strip' }) + '</p></div>' +
        '<div class="card-actions">' +
        '<button type="button" class="btn primary" data-act="copy">' + I.copy + '<span>Copy</span></button>' +
        '<button type="button" class="btn wa" data-act="wa" aria-label="Send on WhatsApp: ' + esc(m.title) + '">' + I.wa + '</button>' +
        '</div></article>';
    }).join('');
  }

  /* Copy / WhatsApp from card or script view */
  function actCopy(m) {
    if (promptFields(m.body).length) { openFill(m); return; }
    touch(m);
    copyText(buildText(m.body, S.fields)).then(function (ok) {
      toast(ok ? 'Copied \u2713' : 'Could not copy. Open the script and select the text.');
      refreshAll();
    });
  }
  function actWA(m) {
    if (promptFields(m.body).length) { openFill(m); return; }
    touch(m);
    var text = buildText(m.body, S.fields);
    toast('Opening WhatsApp\u2026');
    refreshAll();
    sendWA(text, S.fields._phone);
  }

  /* ---------------- Script view ---------------- */
  function openView(id) {
    var cur = id;
    var sh = openSheet({ full: true, label: 'Script' });
    function paint() {
      var m = getMsg(cur);
      if (!m) { sh.close(true); return; }
      sh.set(
        head(m.title || 'Untitled', { left: 'back', right: '<span class="sp"></span>' }) +
        '<div class="sheet-scroll">' +
        '<div class="label-sm">' + esc(m.category) + '</div>' +
        '<div class="bubble">' + fmt(m.body, { mode: 'template' }) + '</div>' +
        (promptFields(m.body).length ? '<p class="hint">Highlighted fill-ins are filled in when you copy or send.</p>' : '') +
        '</div>' +
        '<div class="sheet-foot">' +
        '<div class="row"><button type="button" class="btn primary big" data-act="copy">' + I.copy + 'Copy</button>' +
        '<button type="button" class="btn wa big" data-act="wa">' + I.wa + 'WhatsApp</button></div>' +
        '<div class="tools-row">' +
        '<button type="button" class="tool ' + (m.fav ? 'on' : '') + '" data-act="fav" aria-pressed="' + !!m.fav + '">' + I.star(m.fav) + (m.fav ? 'Favourite' : 'Favourite') + '</button>' +
        '<button type="button" class="tool" data-act="edit">' + I.edit + 'Edit</button>' +
        '<button type="button" class="tool" data-act="dup">' + I.dup + 'Duplicate</button>' +
        '<button type="button" class="tool danger" data-act="del">' + I.trash + 'Delete</button></div></div>');
    }
    sh.refresh = paint;
    sh.acts.copy = function () { actCopy(getMsg(cur)); };
    sh.acts.wa = function () { actWA(getMsg(cur)); };
    sh.acts.fav = function () {
      var m = getMsg(cur); m.fav = !m.fav; save(); paint(); refreshAll();
      toast(m.fav ? 'Added to favourites' : 'Removed from favourites');
    };
    sh.acts.edit = function () { openEditor(cur); };
    sh.acts.dup = function () {
      var m = getMsg(cur);
      var c = { id: uid('m'), title: m.title + ' (copy)', category: m.category, body: m.body, fav: false, uses: 0, lastUsed: 0, updatedAt: Date.now() };
      S.messages.splice(S.messages.indexOf(m) + 1, 0, c);
      save(); cur = c.id; paint(); refreshAll();
      toast('Duplicated. You are now viewing the copy.');
    };
    sh.acts.del = function () {
      var m = getMsg(cur), idx = S.messages.indexOf(m);
      sh.close(true);
      removeWithUndo(S.messages, idx, 'Deleted \u201C' + (m.title || 'script') + '\u201D', refreshAll);
    };
    paint();
    sh.focus();
    return sh;
  }

  /* ---------------- Fill sheet ---------------- */
  function openFill(m) {
    var fields = promptFields(m.body);
    var vals = {};
    fields.forEach(function (f) { vals[f] = S.fields[f] || ''; });
    var phone = S.fields._phone || '';
    var sh = openSheet({ tall: true, label: 'Fill in details' });
    sh.set(
      head(m.title || 'Fill in details') +
      '<div class="sheet-scroll">' +
      fields.map(function (f, i) {
        return '<label class="field"><span class="label-sm">' + esc(f) + '</span>' +
          '<input class="fi" type="text" data-f="' + esc(f) + '" value="' + esc(vals[f]) + '" autocomplete="off" ' +
          'autocapitalize="' + (/name|area|property/i.test(f) ? 'words' : 'sentences') + '" enterkeyhint="' + (i < fields.length - 1 ? 'next' : 'done') + '"></label>';
      }).join('') +
      '<div class="section"><div class="label-sm">Preview</div><div class="bubble sm" id="prev"></div></div>' +
      '<label class="field"><span class="label-sm">Phone (optional, WhatsApp only)</span>' +
      '<input id="ph" type="tel" inputmode="tel" autocomplete="off" placeholder="077 123 4567 or +44 7700 900123" value="' + esc(phone) + '"></label>' +
      '</div>' +
      '<div class="sheet-foot"><div class="row">' +
      '<button type="button" class="btn primary big" data-act="copy">' + I.copy + 'Copy</button>' +
      '<button type="button" class="btn wa big" data-act="send" aria-label="Send on WhatsApp">' + I.wa + 'WhatsApp</button></div></div>');
    var prev = sh.q('#prev');
    function paint() { prev.innerHTML = fmt(m.body, { mode: 'fill', vals: vals }); }
    paint();
    var inputs = sh.qa('.fi');
    sh.el.addEventListener('input', function (e) {
      var t = e.target;
      if (t.classList.contains('fi')) { vals[t.dataset.f] = t.value; paint(); }
      else if (t.id === 'ph') phone = t.value;
    });
    sh.el.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' || !e.target.classList.contains('fi')) return;
      e.preventDefault();
      var i = inputs.indexOf(e.target);
      if (i < inputs.length - 1) inputs[i + 1].focus(); else finish('copy');
    });
    function finish(kind) {
      var v = {};
      fields.forEach(function (f) { v[f] = (vals[f] || '').trim(); S.fields[f] = v[f]; });
      if (phone.trim()) S.fields._phone = phone.trim(); else delete S.fields._phone;
      touch(m);
      var text = buildText(m.body, v);
      sh.close(true);
      refreshAll();
      if (kind === 'copy') {
        copyText(text).then(function (ok) { toast(ok ? 'Copied \u2713' : 'Could not copy. Open the script and select the text.'); });
      } else {
        toast('Opening WhatsApp\u2026 (message also copied)');
        sendWA(text, phone);
      }
    }
    sh.acts.copy = function () { finish('copy'); };
    sh.acts.send = function () { finish('send'); };
    var firstEmpty = fields.filter(function (f) { return !vals[f]; })[0] || fields[0];
    sh.focus('.fi[data-f="' + String(firstEmpty).replace(/(["\\])/g, '\\$1') + '"]');
    return sh;
  }

  /* ---------------- Editor ---------------- */
  function grow(ta) { ta.style.height = 'auto'; ta.style.height = (ta.scrollHeight + 2) + 'px'; }

  function insertAt(ta, text, caret) {
    var s = ta.selectionStart, e = ta.selectionEnd;
    ta.value = ta.value.slice(0, s) + text + ta.value.slice(e);
    var pos = s + (caret == null ? text.length : caret);
    ta.focus();
    ta.setSelectionRange(pos, pos);
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function wrapSel(ta, mark) {
    var s = ta.selectionStart, e = ta.selectionEnd, sel = ta.value.slice(s, e);
    ta.value = ta.value.slice(0, s) + mark + sel + mark + ta.value.slice(e);
    ta.focus();
    if (sel) ta.setSelectionRange(s + mark.length, s + mark.length + sel.length);
    else ta.setSelectionRange(s + mark.length, s + mark.length);
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function usedFields() {
    var cnt = {};
    S.messages.forEach(function (m) { tokensOf(m.body).forEach(function (t) { cnt[t] = (cnt[t] || 0) + 1; }); });
    var base = ['Name', 'Property', 'Area', 'Price', 'Date', 'Time', 'Address', 'Link', 'Fee', 'Offer'];
    var extra = Object.keys(cnt).filter(function (k) { return !AUTO[k] && base.indexOf(k) < 0; })
      .sort(function (a, b) { return cnt[b] - cnt[a]; });
    return base.concat(extra, ['MyName', 'Company']);
  }

  function openEditor(id, preset) {
    var isNew = !id;
    var m = isNew ? { title: '', category: (preset && preset.category) || (S.categories[0] || 'Other'), body: (preset && preset.body) || '' } : getMsg(id);
    if (!m) return;
    var orig = { title: m.title, category: m.category, body: m.body };
    var cats = S.categories.slice();
    if (cats.indexOf(m.category) < 0) cats.push(m.category);
    var sh = openSheet({ full: true, label: isNew ? 'New script' : 'Edit script', canClose: canClose });
    sh.set(
      '<div class="sheet-head"><button type="button" class="btn text" data-act="cancel">Cancel</button>' +
      '<h2 class="sheet-title" style="text-align:center">' + (isNew ? 'New script' : 'Edit script') + '</h2>' +
      '<button type="button" class="btn primary" data-act="save">Save</button></div>' +
      '<div class="sheet-scroll">' +
      '<label class="field" style="margin-top:4px"><span class="label-sm">Title</span><input id="eTitle" type="text" value="' + esc(m.title) + '" autocomplete="off" autocapitalize="sentences" enterkeyhint="next"></label>' +
      '<label class="field"><span class="label-sm">Category</span><select id="eCat">' +
      cats.map(function (c) { return '<option value="' + esc(c) + '"' + (c === m.category ? ' selected' : '') + '>' + esc(c) + '</option>'; }).join('') +
      '<option value="__new__">New category\u2026</option></select></label>' +
      '<label class="field" id="eNewWrap" hidden><span class="label-sm">New category name</span><input id="eNew" type="text" autocomplete="off" autocapitalize="words"></label>' +
      '<div class="field"><span class="label-sm">Message</span>' +
      '<div class="insert-row" role="toolbar" aria-label="Insert helpers">' +
      '<button type="button" class="ins fmt" data-act="bold" aria-label="Bold">B</button>' +
      '<button type="button" class="ins fmt i" data-act="ital" aria-label="Italic">I</button>' +
      '<button type="button" class="ins add" data-act="newfield">+ Field</button>' +
      usedFields().map(function (f) { return '<button type="button" class="ins" data-act="ins" data-f="' + esc(f) + '">{' + esc(f) + '}</button>'; }).join('') +
      '</div>' +
      '<textarea id="eBody" class="body-ta in" placeholder="Write your message\u2026" autocapitalize="sentences">' + esc(m.body) + '</textarea></div>' +
      '<p class="hint">Use {Field} for fill-ins. *bold* _italic_ work in WhatsApp.</p>' +
      '</div>');
    var title = sh.q('#eTitle'), sel = sh.q('#eCat'), nw = sh.q('#eNew'), nwWrap = sh.q('#eNewWrap'), ta = sh.q('#eBody');
    grow(ta);
    function currentCat() { return sel.value === '__new__' ? nw.value.trim() : sel.value; }
    function dirty() {
      return title.value !== orig.title || ta.value !== orig.body || currentCat() !== orig.category;
    }
    function canClose() {
      if (!dirty()) return true;
      confirmSheet({ title: 'Discard changes?', text: 'Your edits to this script have not been saved.', ok: 'Discard', cancel: 'Keep editing', danger: true, onOk: function () { sh.close(true); } });
      return false;
    }
    sel.addEventListener('change', function () {
      var isN = sel.value === '__new__';
      nwWrap.hidden = !isN;
      if (isN) nw.focus();
    });
    ta.addEventListener('input', function () { grow(ta); });
    title.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); ta.focus(); } });
    // keep the textarea focused/selection intact when tapping helper chips
    sh.el.addEventListener('mousedown', function (e) { if (e.target.closest('.ins')) e.preventDefault(); });
    sh.acts.cancel = function () { sh.close(); };
    sh.acts.bold = function () { wrapSel(ta, '*'); };
    sh.acts.ital = function () { wrapSel(ta, '_'); };
    sh.acts.newfield = function () { insertAt(ta, '{}', 1); };
    sh.acts.ins = function (t) { insertAt(ta, '{' + t.dataset.f + '}'); };
    sh.acts.save = function () {
      var t = title.value.trim(), b = ta.value.replace(/\s+$/, '');
      if (!t && !b.trim()) { toast('Add a title or some text first'); return; }
      var cat = currentCat();
      if (sel.value === '__new__' && !cat) { toast('Name the new category, or pick an existing one'); nw.focus(); return; }
      if (!t) t = b.split('\n')[0].slice(0, 40) || 'Untitled script';
      if (S.categories.indexOf(cat) < 0) S.categories.push(cat);
      var saved;
      if (isNew) {
        saved = { id: uid('m'), title: t, category: cat, body: b, fav: false, uses: 0, lastUsed: 0, updatedAt: Date.now() };
        S.messages.unshift(saved);
      } else {
        saved = getMsg(id);
        saved.title = t; saved.category = cat; saved.body = b; saved.updatedAt = Date.now();
      }
      save();
      sh.close(true);
      if (isNew && ui.cat !== '__all__' && ui.cat !== cat) ui.cat = '__all__';
      refreshAll();
      toast('Saved \u2713');
    };
    sh.focus(isNew ? '#eTitle' : null);
    return sh;
  }

  /* =====================================================================
     Call mode
     ===================================================================== */
  var wl = null, wlBusy = false;
  function updWake() {
    var w = $('#wake');
    if (w) w.hidden = !wl;
  }
  function wakeOn() {
    if (!navigator.wakeLock || typeof navigator.wakeLock.request !== 'function' || wl || wlBusy) return;
    wlBusy = true;
    try {
      navigator.wakeLock.request('screen').then(function (lock) {
        wlBusy = false;
        if (S.ui.mode !== 'call') { try { lock.release(); } catch (e) { /* ignore */ } return; }
        wl = lock;
        if (lock.addEventListener) lock.addEventListener('release', function () { if (wl === lock) wl = null; updWake(); });
        updWake();
      }, function () { wlBusy = false; wl = null; updWake(); });
    } catch (e) { wlBusy = false; }
  }
  function wakeOff() {
    if (wl) { try { wl.release(); } catch (e) { /* ignore */ } wl = null; }
    updWake();
  }

  function curFlow() {
    var f = getFlow(S.ui.flowId) || S.flows[0];
    if (f) S.ui.flowId = f.id;
    return f;
  }
  function stepIdx(f) {
    var i = Math.floor(num(S.ui.steps[f.id]));
    return Math.max(0, Math.min(i, Math.max(0, f.steps.length - 1)));
  }

  function renderCallShell() {
    $('#app').innerHTML =
      '<section class="callview">' +
      '<div class="call-top"><div class="chips" id="flowChips" role="group" aria-label="Call flows"></div>' +
      '<button type="button" class="btn text edit" data-act="flow-menu" aria-label="Edit flows">' + I.edit + '<span>Edit</span></button></div>' +
      '<div class="call-body" id="callBody"></div>' +
      '<div class="call-bottom"><div class="call-tools">' +
      '<button type="button" class="pill-btn main" data-act="objections">' + I.shield + 'Objections</button>' +
      '<button type="button" class="pill-btn" data-act="callnotes">' + I.note + 'Call notes</button></div>' +
      '<div class="nav" id="callNav"></div></div></section>';
    renderFlowChips();
    renderStep();
  }

  function renderFlowChips() {
    var c = $('#flowChips');
    if (!c) return;
    var cur = curFlow();
    c.innerHTML = S.flows.map(function (f) {
      return '<button type="button" class="chip" data-act="flow" data-id="' + esc(f.id) + '" aria-pressed="' + (cur && cur.id === f.id) + '">' + esc(f.title || 'Untitled flow') + '</button>';
    }).join('');
  }

  function renderStep(dir) {
    var body = $('#callBody'), nav = $('#callNav');
    if (!body) return;
    var f = curFlow();
    if (!f) {
      body.innerHTML = '<div class="empty"><h3>No call flows yet</h3><p>Create a flow to get a step-by-step guide for your calls.</p><button type="button" class="btn primary" data-act="new-flow">New flow</button></div>';
      nav.innerHTML = '';
      return;
    }
    if (!f.steps.length) {
      body.innerHTML = '<div class="empty"><h3>This flow has no steps</h3><p>Add steps to use it during a call.</p><button type="button" class="btn primary" data-act="edit-flow">Edit flow</button></div>';
      nav.innerHTML = '';
      return;
    }
    var i = stepIdx(f), n = f.steps.length, s = f.steps[i];
    body.innerHTML =
      '<div class="prog-row"><button type="button" class="prog" data-act="overview" aria-label="Step ' + (i + 1) + ' of ' + n + '. Show all steps">Step ' + (i + 1) + ' of ' + n + I.down + '</button>' +
      '<span class="wake" id="wake" hidden>Screen stays on</span></div>' +
      '<div class="segbar" aria-hidden="true">' + f.steps.map(function (_, k) { return '<span class="' + (k < i ? 'done' : (k === i ? 'cur' : '')) + '"></span>'; }).join('') + '</div>' +
      '<div class="step' + (dir ? ' anim-' + dir : '') + '">' +
      '<h2 class="step-title">' + esc(s.title || 'Untitled step') + '</h2>' +
      '<div class="say">' + (s.say.trim() ? fmt(s.say, { mode: 'call' }) : '<span class="small">No script written for this step.</span>') + '</div>' +
      (s.notes.trim() ? '<div class="notes-box"><div class="label-sm">Notes</div><p>' + fmt(s.notes, { mode: 'call', format: false }) + '</p></div>' : '') +
      '</div>';
    var last = i === n - 1;
    nav.innerHTML =
      '<button type="button" class="btn back" data-act="back"' + (i === 0 ? ' disabled' : '') + '>' + I.back + 'Back</button>' +
      (last
        ? '<button type="button" class="btn primary next" data-act="restart">' + I.restart + 'Restart</button>'
        : '<button type="button" class="btn primary next" data-act="next">Next' + I.next + '</button>');
    updWake();
  }

  function goStep(delta, abs) {
    var f = curFlow();
    if (!f || !f.steps.length) return;
    var i = stepIdx(f), j = abs != null ? abs : i + delta;
    j = Math.max(0, Math.min(j, f.steps.length - 1));
    if (j === i && abs == null) return;
    S.ui.steps[f.id] = j;
    save();
    renderStep(j > i ? 'next' : (j < i ? 'prev' : ''));
    window.scrollTo(0, 0);
  }

  function openOverview() {
    var f = curFlow();
    if (!f) return;
    var i = stepIdx(f);
    var sh = openSheet({ tall: true, label: 'All steps' });
    sh.set(head(f.title) + '<div class="sheet-scroll">' +
      f.steps.map(function (s, k) {
        return '<button type="button" class="ov-row' + (k === i ? ' cur' : '') + '" data-act="jump" data-i="' + k + '"><span class="num">' + (k + 1) + '</span><span>' + esc(s.title || 'Untitled step') + '</span></button>';
      }).join('') + '</div>');
    sh.acts.jump = function (t) { sh.close(true); goStep(0, +t.dataset.i); };
  }

  /* Swipe */
  (function () {
    var x0 = 0, y0 = 0, t0 = 0, active = false;
    document.addEventListener('touchstart', function (e) {
      active = S && S.ui.mode === 'call' && !stack.length && !!e.target.closest('.call-body') && e.touches.length === 1;
      if (!active) return;
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now();
    }, { passive: true });
    document.addEventListener('touchend', function (e) {
      if (!active) return;
      active = false;
      var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      if (Date.now() - t0 > 800) return;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) goStep(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();

  /* Objections sheet */
  function openObjections() {
    var q = '', openId = null;
    var sh = openSheet({ tall: true, label: 'Objections' });
    sh.set(
      head('Objections', { right: '<button type="button" class="btn text" data-act="edit-obj">' + I.edit + 'Edit</button><button type="button" class="icon-btn" data-act="close" aria-label="Close">' + I.close + '</button>' }) +
      '<div class="sticky-search"><div class="search">' + I.search +
      '<input type="search" id="oq" placeholder="Search objections\u2026" aria-label="Search objections" autocomplete="off" spellcheck="false"></div></div>' +
      '<div class="sheet-scroll" id="olist"></div>');
    function paint() {
      var terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
      var list = S.objections.filter(function (o) {
        var h = (o.title + ' ' + o.answer + ' ' + o.category).toLowerCase();
        return terms.every(function (t) { return h.indexOf(t) >= 0; });
      });
      sh.q('#olist').innerHTML = list.length ? list.map(function (o) {
        var open = o.id === openId;
        return '<div class="obj-row' + (open ? ' open' : '') + '">' +
          '<button type="button" class="obj-q" data-act="obj" data-id="' + esc(o.id) + '" aria-expanded="' + open + '">' +
          '<span class="t">' + (o.category ? '<span class="tag">' + esc(o.category) + '</span>' : '') + esc(o.title || 'Untitled') + '</span>' + I.down + '</button>' +
          (open ? '<div class="obj-a">' + fmt(o.answer, { mode: 'call' }) + '</div>' : '') + '</div>';
      }).join('') : '<div class="empty"><h3>' + (S.objections.length ? 'No matches' : 'No objections yet') + '</h3>' +
        (S.objections.length ? '' : '<button type="button" class="btn" data-act="edit-obj">Add one</button>') + '</div>';
    }
    sh.refresh = paint;
    paint();
    sh.q('#oq').addEventListener('input', function (e) { q = e.target.value; paint(); });
    sh.acts.obj = function (t) {
      openId = openId === t.dataset.id ? null : t.dataset.id;
      paint();
      var r = sh.q('.obj-row.open');
      if (r) r.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
    };
    sh.acts['edit-obj'] = function () { openObjManager(); };
    return sh;
  }

  function openObjManager() {
    var sh = openSheet({ tall: true, label: 'Edit objections' });
    sh.set(head('Edit objections') + '<div class="sheet-scroll" id="mlist"></div>' +
      '<div class="sheet-foot"><button type="button" class="btn primary big block" data-act="add">' + I.plus + 'Add objection</button></div>');
    function paint() {
      sh.q('#mlist').innerHTML = S.objections.length ? S.objections.map(function (o) {
        return '<button type="button" class="manage-row" data-act="edit" data-id="' + esc(o.id) + '"><span class="t">' + esc(o.title || 'Untitled') +
          (o.category ? '<small>' + esc(o.category) + '</small>' : '') + '</span>' + I.next + '</button>';
      }).join('') : '<div class="empty"><p>No objections yet.</p></div>';
    }
    sh.refresh = paint;
    paint();
    sh.acts.add = function () { openObjEditor(null); };
    sh.acts.edit = function (t) { openObjEditor(t.dataset.id); };
    return sh;
  }

  function openObjEditor(id) {
    var o = id ? getObj(id) : { title: '', answer: '', category: '' };
    if (!o) return;
    var sh = openSheet({ tall: true, label: id ? 'Edit objection' : 'New objection' });
    var tags = [];
    S.objections.forEach(function (x) { if (x.category && tags.indexOf(x.category) < 0) tags.push(x.category); });
    sh.set(
      '<div class="sheet-head"><button type="button" class="btn text" data-act="close">Cancel</button><h2 class="sheet-title" style="text-align:center">' + (id ? 'Edit objection' : 'New objection') + '</h2>' +
      '<button type="button" class="btn primary" data-act="save">Save</button></div>' +
      '<div class="sheet-scroll">' +
      '<label class="field" style="margin-top:4px"><span class="label-sm">What the client says</span><input id="oT" type="text" value="' + esc(o.title) + '" autocomplete="off" placeholder="e.g. Your fee is too high."></label>' +
      '<label class="field"><span class="label-sm">Your answer</span><textarea id="oA" class="in" style="min-height:200px" placeholder="A calm answer that ends with a question\u2026">' + esc(o.answer) + '</textarea></label>' +
      '<label class="field"><span class="label-sm">Tag (optional)</span><input id="oC" type="text" list="oTags" value="' + esc(o.category) + '" autocomplete="off" placeholder="e.g. Fees, Price, Stalling">' +
      '<datalist id="oTags">' + tags.map(function (t) { return '<option value="' + esc(t) + '">'; }).join('') + '</datalist></label>' +
      (id ? '<button type="button" class="btn danger block" style="margin-top:22px" data-act="del">' + I.trash + 'Delete objection</button>' : '') +
      '</div>');
    var ta = sh.q('#oA');
    grow(ta);
    ta.addEventListener('input', function () { grow(ta); });
    sh.acts.save = function () {
      var t = sh.q('#oT').value.trim(), a = ta.value.trim();
      if (!t && !a) { toast('Add what the client says, and your answer'); return; }
      if (id) {
        o.title = t || 'Untitled'; o.answer = a; o.category = sh.q('#oC').value.trim();
      } else {
        S.objections.push({ id: uid('o'), title: t || 'Untitled', answer: a, category: sh.q('#oC').value.trim() });
      }
      save(); sh.close(true); refreshAll(); toast('Saved \u2713');
    };
    sh.acts.del = function () {
      var idx = S.objections.indexOf(o);
      sh.close(true);
      removeWithUndo(S.objections, idx, 'Objection deleted', refreshAll);
    };
    sh.focus(id ? null : '#oT');
  }

  /* Call notes */
  function openCallNotes() {
    var sh = openSheet({ tall: true, label: 'Call notes' });
    sh.set(head('Call notes') +
      '<div class="sheet-scroll"><textarea id="cn" class="in" style="min-height:48vh;min-height:48dvh" placeholder="Budget, area, move-in date, who decides\u2026" autocapitalize="sentences"></textarea>' +
      '<p class="hint">Saved automatically on this device.</p></div>' +
      '<div class="sheet-foot"><div class="row"><button type="button" class="btn big" data-act="clear">' + I.trash + 'Clear</button>' +
      '<button type="button" class="btn primary big" data-act="copy">' + I.copy + 'Copy notes</button></div></div>');
    var ta = sh.q('#cn');
    ta.value = S.callNotes;
    ta.addEventListener('input', function () { S.callNotes = ta.value; save(); });
    sh.acts.copy = function () {
      if (!ta.value.trim()) { toast('Nothing to copy yet'); return; }
      copyText(ta.value).then(function (ok) { toast(ok ? 'Notes copied \u2713' : 'Could not copy'); });
    };
    sh.acts.clear = function () {
      var prev = ta.value;
      if (!prev) { toast('Notes are already empty'); return; }
      ta.value = ''; S.callNotes = ''; save();
      toast('Notes cleared', { undo: function () { S.callNotes = prev; save(); if (sh.alive) ta.value = prev; else toast('Restored. Reopen Call notes to see them.'); } });
    };
    sh.focus('#cn');
  }

  /* Flow menu + editors */
  function openFlowMenu() {
    var f = curFlow();
    var sh = openSheet({ label: 'Flow options' });
    sh.set(head('Call flows') + '<div class="sheet-scroll"><div class="list-btns">' +
      (f ? '<button type="button" class="btn" data-act="edit-flow">' + I.edit + 'Edit \u201C' + esc(f.title || 'flow') + '\u201D</button>' : '') +
      '<button type="button" class="btn" data-act="new-flow">' + I.plus + 'New flow</button>' +
      (f ? '<button type="button" class="btn danger" data-act="del-flow">' + I.trash + 'Delete this flow</button>' : '') +
      '<button type="button" class="btn" data-act="objs">' + I.shield + 'Edit objections</button></div></div>');
    sh.acts['edit-flow'] = function () { sh.close(true); openFlowEditor(f.id); };
    sh.acts['new-flow'] = function () { sh.close(true); newFlow(); };
    sh.acts['del-flow'] = function () { sh.close(true); deleteFlow(f.id); };
    sh.acts.objs = function () { sh.close(true); openObjManager(); };
  }

  function newFlow() {
    var f = { id: uid('f'), title: 'New flow', steps: [{ id: uid('s'), title: 'Opener', say: '', notes: '' }] };
    S.flows.push(f);
    S.ui.flowId = f.id;
    S.ui.steps[f.id] = 0;
    save();
    refreshAll();
    openFlowEditor(f.id, 0, true);
  }

  function deleteFlow(id) {
    var f = getFlow(id), idx = S.flows.indexOf(f);
    if (!f) return;
    removeWithUndo(S.flows, idx, 'Deleted flow \u201C' + (f.title || 'flow') + '\u201D', function () {
      if (!getFlow(S.ui.flowId)) S.ui.flowId = S.flows[0] ? S.flows[0].id : '';
      refreshAll();
    });
  }

  function openFlowEditor(flowId, openStep, focusName) {
    var open = openStep == null ? null : openStep;
    var sh = openSheet({ full: true, label: 'Edit flow' });
    function paint() {
      var f = getFlow(flowId);
      if (!f) { sh.close(true); return; }
      sh.set(
        head('Edit flow', { left: 'back', right: '<button type="button" class="btn primary" data-act="close">Done</button>' }) +
        '<div class="sheet-scroll">' +
        '<label class="field" style="margin-top:2px"><span class="label-sm">Flow name</span><input id="fName" type="text" value="' + esc(f.title) + '" autocomplete="off"></label>' +
        '<div class="section" style="margin-top:20px"><div class="label-sm">Steps (' + f.steps.length + ')</div>' +
        f.steps.map(function (s, i) {
          var isOpen = open === i;
          return '<div class="step-ed" data-i="' + i + '"><div class="step-hd">' +
            '<button type="button" class="step-toggle" data-act="toggle" data-i="' + i + '" aria-expanded="' + isOpen + '"><span class="num">' + (i + 1) + '</span><span class="st">' + esc(s.title || 'Untitled step') + '</span></button>' +
            '<button type="button" class="icon-btn" data-act="up" data-i="' + i + '" aria-label="Move step ' + (i + 1) + ' up"' + (i === 0 ? ' disabled style="opacity:.3"' : '') + '>' + I.up + '</button>' +
            '<button type="button" class="icon-btn" data-act="down" data-i="' + i + '" aria-label="Move step ' + (i + 1) + ' down"' + (i === f.steps.length - 1 ? ' disabled style="opacity:.3"' : '') + '>' + I.down + '</button>' +
            '<button type="button" class="icon-btn" data-act="delstep" data-i="' + i + '" aria-label="Delete step ' + (i + 1) + '">' + I.trash + '</button></div>' +
            (isOpen ? '<div class="step-fields">' +
              '<label class="field"><span class="label-sm">Step title</span><input type="text" data-f="title" value="' + esc(s.title) + '" autocomplete="off"></label>' +
              '<label class="field"><span class="label-sm">Say (what you tell them)</span><textarea class="in" data-f="say">' + esc(s.say) + '</textarea></label>' +
              '<label class="field"><span class="label-sm">Notes (what to listen for)</span><textarea class="in" data-f="notes">' + esc(s.notes) + '</textarea></label></div>' : '') +
            '</div>';
        }).join('') +
        '<button type="button" class="btn block" style="margin-top:12px" data-act="addstep">' + I.plus + 'Add step</button></div>' +
        '<div class="section"><button type="button" class="btn danger block" data-act="delflow">' + I.trash + 'Delete this flow</button>' +
        '<p class="hint">Fill-ins like {Name} show remembered values in Call mode. Use [square brackets] for things you say out loud.</p></div></div>');
      sh.qa('textarea').forEach(grow);
    }
    sh.el.addEventListener('input', function (e) {
      var t = e.target, f = getFlow(flowId);
      if (!f) return;
      if (t.id === 'fName') { f.title = t.value; save(); return; }
      if (t.dataset && t.dataset.f && open != null) {
        var s = f.steps[open];
        s[t.dataset.f] = t.value;
        if (t.dataset.f === 'title') {
          var st = sh.q('.step-ed[data-i="' + open + '"] .st');
          if (st) st.textContent = t.value || 'Untitled step';
        }
        if (t.tagName === 'TEXTAREA') grow(t);
        save();
      }
    });
    sh.onClose = function () { refreshAll(); };
    sh.refresh = null;
    sh.acts.toggle = function (t) {
      var i = +t.dataset.i;
      open = open === i ? null : i;
      paint();
      var el = sh.q('.step-ed[data-i="' + i + '"]');
      if (el && open === i) { el.scrollIntoView({ block: 'nearest' }); var inp = el.querySelector('input'); if (inp && !isMobile()) inp.focus(); }
    };
    sh.acts.up = function (t) { moveStep(+t.dataset.i, -1); };
    sh.acts.down = function (t) { moveStep(+t.dataset.i, 1); };
    function moveStep(i, d) {
      var f = getFlow(flowId), j = i + d;
      if (j < 0 || j >= f.steps.length) return;
      var tmp = f.steps[i]; f.steps[i] = f.steps[j]; f.steps[j] = tmp;
      if (open === i) open = j; else if (open === j) open = i;
      save(); paint();
    }
    sh.acts.addstep = function () {
      var f = getFlow(flowId);
      f.steps.push({ id: uid('s'), title: 'Step ' + (f.steps.length + 1), say: '', notes: '' });
      open = f.steps.length - 1;
      save(); paint();
      var el = sh.q('.step-ed[data-i="' + open + '"]');
      if (el) { el.scrollIntoView({ block: 'nearest' }); var inp = el.querySelector('input'); if (inp) { inp.focus(); inp.select(); } }
    };
    sh.acts.delstep = function (t) {
      var f = getFlow(flowId), i = +t.dataset.i;
      var label = 'Deleted step \u201C' + (f.steps[i].title || 'step') + '\u201D';
      if (open === i) open = null; else if (open != null && open > i) open--;
      removeWithUndo(f.steps, i, label, function () { if (sh.alive) paint(); });
    };
    sh.acts.delflow = function () { sh.close(true); deleteFlow(flowId); };
    paint();
    if (focusName) sh.focus('#fName'); else sh.focus();
    if (focusName) { var n = sh.q('#fName'); if (n) n.select(); }
    return sh;
  }

  /* =====================================================================
     Settings, categories, backup
     ===================================================================== */
  function openSettings() {
    var sh = openSheet({ tall: true, label: 'Settings' });
    sh.set(head('Settings') + '<div class="sheet-scroll">' +
      (!storageOk ? '<div class="warn-note">Storage is unavailable in this browser, so your changes are only kept until you close the app. Use Export backup to save them.</div>' : '') +
      '<div class="section" style="margin-top:6px"><div class="label-sm">You</div>' +
      '<label class="field"><span class="label-sm" style="text-transform:none;letter-spacing:0">My name (fills {MyName})</span><input id="sMy" type="text" value="' + esc(S.settings.myName) + '" autocomplete="off" autocapitalize="words"></label>' +
      '<label class="field"><span class="label-sm" style="text-transform:none;letter-spacing:0">Company (fills {Company})</span><input id="sCo" type="text" value="' + esc(S.settings.company) + '" autocomplete="off" autocapitalize="words"></label></div>' +
      '<div class="section"><div class="label-sm">Library</div><div class="list-btns">' +
      '<button type="button" class="btn" data-act="cats">Manage categories</button>' +
      '<button type="button" class="btn" data-act="objs">Edit objections</button></div></div>' +
      '<div class="section"><div class="label-sm">Backup</div><div class="list-btns">' +
      '<button type="button" class="btn" data-act="export">Export backup</button>' +
      '<button type="button" class="btn" data-act="import">Import backup</button></div>' +
      '<input type="file" id="sFile" accept=".json,application/json" hidden>' +
      '<p class="hint">Everything is stored on this device only. Export a backup now and then, and before changing phones.</p></div>' +
      '<div class="section"><div class="label-sm">Starter content</div><div class="list-btns">' +
      '<button type="button" class="btn" data-act="restore">Restore starter templates</button>' +
      '<button type="button" class="btn danger" data-act="reset">Reset everything</button></div>' +
      '<p class="hint">Restore only adds back starter items that are missing. It never overwrites your edits.</p></div>' +
      '<p class="small version">Install: in Chrome or Safari, choose Add to Home Screen.<br>Ascend Scripts v' + VERSION + '</p></div>');
    sh.el.addEventListener('input', function (e) {
      if (e.target.id === 'sMy') { S.settings.myName = e.target.value; save(); refreshAll(); }
      if (e.target.id === 'sCo') { S.settings.company = e.target.value; save(); refreshAll(); }
    });
    sh.acts.cats = function () { openCats(); };
    sh.acts.objs = function () { openObjManager(); };
    sh.acts.export = function () { exportBackup(); };
    sh.acts.import = function () { sh.q('#sFile').click(); };
    sh.q('#sFile').addEventListener('change', function (e) {
      var file = e.target.files && e.target.files[0];
      e.target.value = '';
      if (file) importFile(file);
    });
    sh.acts.restore = restoreStarter;
    sh.acts.reset = function () {
      confirmSheet({
        title: 'Reset everything?', ok: 'Continue', cancel: 'Cancel', danger: true,
        text: 'This erases all your scripts, flows, objections, notes and remembered client details, and puts the starter content back.',
        onOk: function () {
          confirmSheet({
            title: 'Are you absolutely sure?', ok: 'Yes, erase everything', cancel: 'No, keep my data', danger: true,
            text: 'This cannot be undone. If you are unsure, export a backup first.',
            onOk: function () {
              S = starter(); save();
              stack.slice().forEach(function (s) { s.close(true); });
              ui.q = ''; ui.cat = '__all__';
              applyMode();
              toast('Reset to starter content');
            }
          });
        }
      });
    };
  }

  function restoreStarter() {
    var st = starter(), added = 0;
    function has(arr, id) { return arr.some(function (x) { return x.id === id; }); }
    st.messages.forEach(function (m) { if (!has(S.messages, m.id)) { S.messages.push(m); added++; } });
    st.flows.forEach(function (f) { if (!has(S.flows, f.id)) { S.flows.push(f); added++; } });
    st.objections.forEach(function (o) { if (!has(S.objections, o.id)) { S.objections.push(o); added++; } });
    st.categories.forEach(function (c) { if (S.categories.indexOf(c) < 0) S.categories.push(c); });
    if (!S.ui.flowId && S.flows[0]) S.ui.flowId = S.flows[0].id;
    save();
    refreshAll();
    toast(added ? 'Restored ' + added + ' starter item' + (added === 1 ? '' : 's') + ' \u2713' : 'All starter templates are already here');
  }

  function openCats() {
    var sh = openSheet({ tall: true, label: 'Categories' });
    sh.set(head('Categories', { left: 'back' }) + '<div class="sheet-scroll"><div id="clist"></div>' +
      '<div class="section"><div class="label-sm">Add category</div><div class="cat-row"><input id="cNew" class="in" type="text" placeholder="New category name" autocomplete="off" autocapitalize="words">' +
      '<button type="button" class="btn primary" data-act="add">Add</button></div></div>' +
      '<p class="hint">Deleting a category moves its scripts to \u201COther\u201D.</p></div>');
    function count(c) { return S.messages.filter(function (m) { return m.category === c; }).length; }
    function paint() {
      sh.q('#clist').innerHTML = S.categories.map(function (c, i) {
        var n = count(c), lock = c === 'Other' && n > 0;
        return '<div class="cat-row"><input class="in cat-in" type="text" data-i="' + i + '" value="' + esc(c) + '" aria-label="Rename category ' + esc(c) + '" autocomplete="off">' +
          '<span class="count" title="Scripts">' + n + '</span>' +
          '<button type="button" class="icon-btn" data-act="del" data-i="' + i + '" aria-label="Delete category ' + esc(c) + '"' + (lock ? ' disabled style="opacity:.3"' : '') + '>' + I.trash + '</button></div>';
      }).join('') || '<p class="hint">No categories.</p>';
    }
    paint();
    sh.el.addEventListener('change', function (e) {
      var t = e.target;
      if (!t.classList.contains('cat-in')) return;
      var i = +t.dataset.i, old = S.categories[i], nv = t.value.trim();
      if (!nv || nv === old) { t.value = old; return; }
      if (S.categories.some(function (c, k) { return k !== i && c.toLowerCase() === nv.toLowerCase(); })) {
        toast('That category already exists'); t.value = old; return;
      }
      S.categories[i] = nv;
      S.messages.forEach(function (m) { if (m.category === old) m.category = nv; });
      if (ui.cat === old) ui.cat = nv;
      save(); refreshAll(); paint(); toast('Renamed \u2713');
    });
    sh.el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.tagName === 'INPUT') { e.preventDefault(); if (e.target.id === 'cNew') sh.acts.add(); else e.target.blur(); }
    });
    sh.acts.add = function () {
      var inp = sh.q('#cNew'), nv = inp.value.trim();
      if (!nv) { inp.focus(); return; }
      if (S.categories.some(function (c) { return c.toLowerCase() === nv.toLowerCase(); })) { toast('That category already exists'); return; }
      S.categories.push(nv); save(); inp.value = ''; paint(); refreshAll(); toast('Added \u2713');
    };
    sh.acts.del = function (t) {
      var i = +t.dataset.i, c = S.categories[i], n = count(c);
      confirmSheet({
        title: 'Delete \u201C' + c + '\u201D?', ok: 'Delete category', cancel: 'Cancel', danger: true,
        text: n ? n + ' script' + (n === 1 ? '' : 's') + ' will move to \u201COther\u201D. No scripts are deleted.' : 'This category has no scripts.',
        onOk: function () {
          S.categories.splice(i, 1);
          if (n) {
            if (S.categories.indexOf('Other') < 0) S.categories.push('Other');
            S.messages.forEach(function (m) { if (m.category === c) m.category = 'Other'; });
          }
          if (ui.cat === c) ui.cat = '__all__';
          save(); refreshAll(); paint(); toast('Category deleted');
        }
      });
    };
  }

  function exportBackup() {
    var name = 'ascend-scripts-backup-' + ymd() + '.json';
    var json = JSON.stringify(S, null, 2);
    function download() {
      var blob = new Blob([json], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = name;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
      toast('Backup downloaded \u2713');
    }
    try {
      if (isMobile() && navigator.canShare && typeof File === 'function') {
        var file = new File([json], name, { type: 'application/json' });
        if (navigator.canShare({ files: [file] })) {
          navigator.share({ files: [file], title: 'Ascend Scripts backup' }).then(function () {
            toast('Backup shared \u2713');
          }, function (err) {
            if (err && err.name === 'AbortError') return;
            download();
          });
          return;
        }
      }
    } catch (e) { /* fall through to download */ }
    download();
  }

  function importFile(file) {
    var reader = new FileReader();
    reader.onerror = function () { toast('Could not read that file'); };
    reader.onload = function () {
      var data;
      try { data = normalize(JSON.parse(String(reader.result))); } catch (e) {
        toast(e && /backup/.test(e.message) ? e.message : 'That file is not a valid backup');
        return;
      }
      confirmSheet({
        title: 'Replace your data?', ok: 'Replace with backup', cancel: 'Cancel', danger: true,
        text: 'This backup has ' + data.messages.length + ' scripts, ' + data.flows.length + ' call flows and ' + data.objections.length +
          ' objections. It will replace everything currently in the app.',
        onOk: function () {
          S = data; save();
          stack.slice().forEach(function (s) { s.close(true); });
          ui.q = ''; ui.cat = '__all__';
          applyMode();
          toast('Backup imported \u2713');
        }
      });
    };
    reader.readAsText(file);
  }

  /* =====================================================================
     Events
     ===================================================================== */
  var ACTS = {
    mode: function (t) { setMode(t.dataset.mode); },
    settings: function () { openSettings(); },
    'new-script': function () { openEditor(null, { category: S.categories.indexOf(ui.cat) >= 0 ? ui.cat : null }); },
    cat: function (t) { ui.cat = t.dataset.cat; renderChips(); renderList(); },
    view: function (t) { var c = t.closest('[data-id]'); if (c) openView(c.dataset.id); },
    copy: function (t) { var c = t.closest('[data-id]'); if (c) actCopy(getMsg(c.dataset.id)); },
    wa: function (t) { var c = t.closest('[data-id]'); if (c) actWA(getMsg(c.dataset.id)); },
    'clear-client': function () {
      var prev = S.fields;
      S.fields = {};
      save(); refreshAll();
      toast('Client cleared', { undo: function () { S.fields = prev; save(); refreshAll(); } });
    },
    flow: function (t) { S.ui.flowId = t.dataset.id; save(); renderFlowChips(); renderStep(); window.scrollTo(0, 0); },
    'flow-menu': function () { openFlowMenu(); },
    'new-flow': function () { newFlow(); },
    'edit-flow': function () { var f = curFlow(); if (f) openFlowEditor(f.id); },
    back: function () { goStep(-1); },
    next: function () { goStep(1); },
    restart: function () { goStep(0, 0); },
    overview: function () { openOverview(); },
    objections: function () { openObjections(); },
    callnotes: function () { openCallNotes(); },
    backdrop: function (t) { var w = t.closest('.sheet-wrap'); if (w && w._sheet) w._sheet.close(); },
    close: function (t) { var w = t.closest('.sheet-wrap'); if (w && w._sheet) w._sheet.close(); }
  };

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-act]');
    if (!t || t.disabled) return;
    var act = t.dataset.act, w = t.closest('.sheet-wrap');
    if (w && w._sheet && w._sheet.acts[act]) { w._sheet.acts[act](t, e); return; }
    if (ACTS[act]) ACTS[act](t, e);
  });

  document.addEventListener('input', function (e) {
    if (e.target.id === 'q') { ui.q = e.target.value; renderList(); }
  });

  document.addEventListener('keydown', function (e) {
    var top = stack[stack.length - 1];
    if (e.key === 'Escape' && top) { e.preventDefault(); top.close(); return; }
    if (e.key === 'Tab' && top) {
      var f = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', top.sheet)
        .filter(function (x) { return !x.disabled && !x.hidden && x.offsetParent !== null; });
      if (!f.length) { e.preventDefault(); top.sheet.focus(); return; }
      var first = f[0], last = f[f.length - 1], a = document.activeElement;
      if (e.shiftKey && (a === first || a === top.sheet)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
      else if (!top.sheet.contains(a)) { e.preventDefault(); first.focus(); }
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('card-main')) {
      e.preventDefault();
      ACTS.view(e.target);
      return;
    }
    if (!top && S.ui.mode === 'call' && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) {
      if (e.key === 'ArrowRight') goStep(1);
      else if (e.key === 'ArrowLeft') goStep(-1);
    }
  });

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && S.ui.mode === 'call') wakeOn();
  });
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onScheme = function () { if (S) setThemeColor(); };
    if (mq.addEventListener) mq.addEventListener('change', onScheme); else if (mq.addListener) mq.addListener(onScheme);
  }

  /* =====================================================================
     Boot
     ===================================================================== */
  load();
  try {
    var qm = new URLSearchParams(location.search).get('mode');
    if (qm === 'call' || qm === 'messages') S.ui.mode = qm;
  } catch (e) { /* ignore */ }
  save();
  applyMode();

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline support is optional */ });
    });
  }
})();
