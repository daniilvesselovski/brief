/* OKOLO brief — branching form engine. Plain JS, no build step. */
(function () {
  'use strict';
  const QB = window.QB, X = window.OKOLO_EXTRAS, CFG = window.OKOLO_CONFIG;
  const Q = QB.questions;
  const byId = Object.fromEntries(Q.map(q => [q.id, q]));
  const app = document.getElementById('app');

  // ---------- state ----------
  const blank = () => ({ lang: (navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en', screen: 'intro', idx: 0, a: {}, started: null });
  let S = load() || blank();
  function load() { try { return JSON.parse(localStorage.getItem(CFG.storageKey)); } catch (e) { return null; } }
  function save() { try { localStorage.setItem(CFG.storageKey, JSON.stringify(S)); } catch (e) { /* quota or private mode */ } }

  // ---------- text ----------
  const ui = k => { const v = QB.ui[k] || X.ui[k]; return v ? v[S.lang] : k; };
  const name = () => (S.a.S02 || '').trim();
  const brand = () => (S.a.C01 || '').trim() || (S.lang === 'ru' ? 'твой бренд' : 'your brand');
  function fill(str, extra) {
    return String(str || '')
      .replace(/\{name\}/g, name() || (S.lang === 'ru' ? 'друг' : 'friend'))
      .replace(/\{brand\}/g, brand())
      .replace(/\{(\w+)\}/g, (m, k) => (extra && k in extra ? extra[k] : m));
  }
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const T = (q, k) => q[S.lang][k];
  const isOther = s => /^(Другое|Другая сумма|Something else|Other|Another amount)/i.test(s);

  // ---------- tags & branching ----------
  function tags() {
    const t = new Set();
    for (const q of Q) {
      const v = S.a[q.id];
      if (v == null) continue;
      const idxs = Array.isArray(v) ? v : (typeof v === 'number' ? [v] : []);
      if (q.tags) idxs.forEach(i => q.tags[i] && t.add(q.tags[i]));
      if (q.tagsByIndex) idxs.forEach(i => q.tagsByIndex[i] && t.add(q.tagsByIndex[i]));
    }
    if (!t.has('DEEP')) t.add('QUICK');
    return t;
  }
  const any = (t, ...m) => m.some(x => t.has(x));
  const RULES = {
    all: () => true,
    rb: t => any(t, 'REFRESH', 'REBRAND'),
    id: t => any(t, 'M_ID', 'REBRAND'),
    ch: t => t.has('M_CH'), so: t => t.has('M_SO'), web: t => t.has('M_WEB'), pk: t => t.has('M_PK'), mr: t => t.has('M_MR'), sp: t => t.has('M_SP'),
    brand: t => any(t, 'KEEP', 'REFRESH', 'REBRAND', 'STAGE_RUNNING'),
    guide: t => RULES.brand(t) && t.has('HAS_GUIDE'),
    unsure: t => t.has('UNSURE'),
    au: t => !(t.has('STRICT_GUIDE') && !any(t, 'M_ID', 'M_CH', 'M_SO', 'M_WEB', 'M_PK', 'REBRAND')),
    vdf: t => !t.has('STRICT_GUIDE')
  };
  const visible = (q, t) => (!q.deep || t.has('DEEP')) && RULES[q.show](t);
  // Questions that share a screen with the one before them.
  const JOIN = { C02: 'C01', W08: 'W07', W09: 'W07' };
  function screens() {
    const t = tags(), out = [];
    for (const q of Q) {
      if (q.id === 'S01' || !visible(q, t)) continue;
      if (JOIN[q.id] && out.length && out[out.length - 1][0].id === JOIN[q.id]) out[out.length - 1].push(q);
      else out.push([q]);
    }
    return out;
  }
  // 6 progress eyes = 6 phases
  const PHASE = b => ({ 'Старт': 0, 'Ядро': 0, 'Что уже есть': 2, 'Аудитория': 3, 'Визуальное направление': 4, 'Финал': 5 }[b] ?? 1);
  function blockIntro(b) { const x = QB.blocks.find(x => x.ru === b); return x ? fill(S.lang === 'ru' ? x.intro_ru : x.intro_en) : ''; }
  function blockName(q) { return S.lang === 'ru' ? q.block : (EN_BLOCK[q.block] || q.block); }
  const EN_BLOCK = { 'Старт': 'Start', 'Ядро': 'About you', 'Ребрендинг': 'Rebrand', 'Логотип и айдентика': 'Logo & identity', 'Персонажи и иллюстрация': 'Characters & illustration', 'Соцсети': 'Social media', 'Сайт': 'Website', 'Упаковка и печать': 'Packaging & print', 'Мерч и одежда': 'Merch & apparel', 'Пространство и ивент': 'Space & events', 'Что уже есть': 'What you have', 'Аудитория': 'Audience', 'Визуальное направление': 'Visual direction', 'Финал': 'Final details' };

  // ---------- render ----------
  function render() {
    document.documentElement.lang = S.lang;
    document.title = S.lang === 'ru' ? 'OKOLO · Бриф' : 'OKOLO · Brief';
    const dark = S.screen === 'intro' || S.screen === 'final';
    document.documentElement.classList.toggle('dark-page', dark);
    document.querySelector('meta[name=theme-color]').content = dark ? '#3B332A' : '#F6F1E7';
    if (S.screen === 'intro') return renderIntro();
    if (S.screen === 'final') return renderFinal();
    renderQuestion();
  }

  const SOC = {
    Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    Telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 4 3 11l6 2 2 6 3-4 5 4z"/><path d="m9 13 8-6"/></svg>',
    Behance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h5a3 3 0 0 1 0 6H3zM3 12h6a3 3 0 0 1 0 6H3z"/><path d="M14 14h7a3.5 3.5 0 1 0-1 2.5M15 7h5"/></svg>'
  };
  const socials = () => '<div class="socials">' + Object.entries(SOC).map(([n, s]) => `<span class="social" role="img" aria-label="${n} · ${esc(ui('socials.soon'))}" title="${n} · ${esc(ui('socials.soon'))}">${s}</span>`).join('') + '</div>';

  function renderIntro() {
    const resume = Object.keys(S.a).length > 0;
    app.innerHTML = `<section class="screen dark center fade">
      <div class="lang" role="group" aria-label="${esc(ui('lang'))}">
        <button class="chip" data-lang="ru" aria-pressed="${S.lang === 'ru'}">RU</button>
        <button class="chip" data-lang="en" aria-pressed="${S.lang === 'en'}">EN</button>
      </div>
      <div class="grow"></div>
      <div class="hero">
        ${window.OKOLO_LOGO}
        <h1>${esc(ui('intro.title')).replace(/! (.*)$/, '!<br class="br-mob"> <span class="nw">$1</span>')}</h1>
        <p class="body-text">${esc(ui('intro.body'))}</p>
      </div>
      <div class="grow"></div>
      <div class="hero" style="gap:16px">
        <button class="btn primary wide" id="start">${esc(resume ? ui('intro.resume') : ui('intro.cta'))}</button>
        ${resume ? `<button class="modelink" id="restart" style="color:var(--cream)">${esc(ui('intro.restart'))}</button>` : ''}
        ${socials()}
      </div>
    </section>`;
    app.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { S.lang = b.dataset.lang; save(); render(); });
    app.querySelector('#start').onclick = () => { S.started = S.started || new Date().toISOString(); S.screen = 'q'; save(); render(); };
    const r = app.querySelector('#restart'); if (r) r.onclick = () => { const l = S.lang; S = blank(); S.lang = l; save(); render(); };
  }

  function renderFinal() {
    app.innerHTML = `<section class="screen dark center fade">
      <div class="grow"></div>
      <div class="hero">
        <img class="mark" src="assets/mark.svg" alt="">
        <h1>${esc(fill(ui('final.title')))}</h1>
        <p class="body-text">${esc(fill(ui('final.body'), { email: (S.a.W07 && S.a.W07.email) || '' }))}</p>
        ${S.demo ? `<p class="demo-note">${esc(ui('demo'))}</p>` : ''}
      </div>
      <div class="grow"></div>
      <div class="hero" style="gap:16px"><div class="sign">${esc(ui('final.sign'))}</div>${socials()}</div>
    </section>`;
  }

  function renderQuestion() {
    const list = screens();
    if (S.idx >= list.length) S.idx = list.length - 1;
    const group = list[S.idx], q0 = group[0], t = tags();
    const prev = list[S.idx - 1];
    const firstOfBlock = !prev || prev[0].block !== q0.block;
    const phase = PHASE(q0.block);
    const eyes = [0, 1, 2, 3, 4, 5].map(i => `<span class="eye ${i < phase ? 'done' : i === phase ? 'current' : ''}"></span>`).join('');
    const pos = `${S.idx + 1}/${list.length}`;
    const optional = group.every(q => !q.req);
    app.innerHTML = `<section class="screen fade">
      <header class="header">${window.OKOLO_LOGO}<div class="eyes" role="img" aria-label="${esc(fill(ui('progress'), { n: S.idx + 1, total: list.length }))}">${eyes}</div></header>
      <div class="grow" data-d></div>
      <div class="q">
        <div class="eyebrow"><span>${esc(blockName(q0))} · ${pos}</span>${optional ? `<span class="tag">${esc(ui('optional'))}</span>` : ''}</div>
        ${firstOfBlock && q0.block !== 'Старт' ? `<p class="block-intro">${esc(blockIntro(q0.block))}</p>` : ''}
        <h2 id="qt">${esc(fill(T(q0, 'q')))}</h2>
        ${T(q0, 'hint') ? `<p class="hint">${esc(fill(T(q0, 'hint')))}</p>` : ''}
      </div>
      <div class="answers" id="answers"></div>
      <p class="err" id="err" role="alert"></p>
      <div class="grow"></div>
      ${q0.id !== 'S02' && q0.id !== 'S03' ? `<button class="modelink" id="mode">${esc(t.has('DEEP') ? ui('mode.quick') : ui('mode.switch'))}</button>` : ''}
      <footer class="footer">
        ${S.idx > 0 ? `<button class="btn back" id="back">${esc(ui('btn.back'))}</button>` : `<button class="btn back" id="back">${esc(ui('btn.back'))}</button>`}
        <button class="btn primary next" id="next">${esc(S.idx === list.length - 1 ? ui('btn.submit') : ui('btn.next'))}</button>
      </footer>
    </section>`;
    // desktop: drop the top spacer so the header sits at the top and the question floats in the middle
    const box = app.querySelector('#answers');
    group.forEach((q, i) => box.appendChild(field(q, i > 0)));
    app.querySelector('#back').onclick = () => { if (S.idx === 0) S.screen = 'intro'; else S.idx--; save(); render(); scrollTo(0, 0); };
    app.querySelector('#next').onclick = () => next(group, list);
    const m = app.querySelector('#mode');
    if (m) m.onclick = () => { S.a.S03 = t.has('DEEP') ? 0 : 1; const cur = q0.id; save(); const l2 = screens(); S.idx = Math.max(0, l2.findIndex(g => g.some(q => q.id === cur))); save(); render(); };
    const first = box.querySelector('input:not([type=range]):not([type=checkbox]),textarea');
    if (first && matchMedia('(min-width: 1024px)').matches) first.focus();
  }

  function next(group, list) {
    const err = group.map(validate).find(Boolean);
    const box = app.querySelector('#err');
    if (err) { box.textContent = err; return; }
    box.textContent = '';
    // many modules in deep mode → offer the quick brief
    if (group.some(q => q.id === 'C10')) {
      const mods = (S.a.C10 || []).filter(i => i < 7).length;
      if (tags().has('DEEP') && mods > 3 && !S.askedMany) { S.askedMany = true; save(); return manyModules(); }
    }
    const l2 = screens(); // answers may have changed the path
    const cur = group[0].id;
    const at = l2.findIndex(g => g[0].id === cur);
    if (at >= l2.length - 1) return submit();
    S.idx = at + 1; save(); render(); scrollTo(0, 0);
  }

  function manyModules() {
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><h2>${esc(ui('many_modules').split('!')[0] + '!')}</h2><p class="hint" style="color:var(--text)">${esc(ui('many_modules').split('!').slice(1).join('!').trim())}</p>
      <div class="row"><button class="btn" id="mno">${esc(ui('many_modules.no'))}</button><button class="btn primary" id="myes">${esc(ui('many_modules.yes'))}</button></div></div>`;
    document.body.appendChild(bg);
    const close = quick => { if (quick) S.a.S03 = 0; bg.remove(); save(); const l2 = screens(); S.idx = l2.findIndex(g => g[0].id === 'C10') + 1; save(); render(); };
    bg.querySelector('#myes').onclick = () => close(true);
    bg.querySelector('#mno').onclick = () => close(false);
    bg.querySelector('#myes').focus();
  }

  // ---------- validation ----------
  function validate(q) {
    const v = S.a[q.id];
    const empty = v == null || v === '' || (Array.isArray(v) && v.length === 0) ||
      (q.type === 'files' && !(v && ((v.files || []).length || (v.links || '').trim()))) ||
      (q.type === 'contact' && !(v && v.email));
    if (q.type === 'contact' && v && v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) return ui('err.email');
    if (q.type === 'consent') return v ? '' : ui('err.required');
    if (q.req && empty && q.type !== 'sliders') return ui('err.required');
    if (q.exact && Array.isArray(v) && v.length && v.length !== q.exact) return fill(ui('err.exact'), { n: q.exact });
    return '';
  }

  // ---------- fields ----------
  const el = (h) => { const d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; };
  function setA(q, v) { S.a[q.id] = v; save(); }

  function field(q, sub) {
    const wrap = document.createElement('div'); wrap.className = 'field';
    if (sub) wrap.appendChild(el(`<label class="narrow">${esc(fill(T(q, 'q')))}</label>`));
    const f = FIELDS[q.type] || FIELDS.text;
    f(q, wrap);
    return wrap;
  }

  function textInput(q, wrap, multi, key) {
    const k = key || q.id;
    const node = el(multi ? `<textarea class="textarea narrow" rows="4"></textarea>` : `<input class="input narrow" type="text" autocomplete="${q.id === 'S02' ? 'given-name' : q.id === 'C01' ? 'organization' : 'off'}">`);
    node.value = S.a[k] || '';
    node.placeholder = q.id === 'S02' ? (S.lang === 'ru' ? 'Имя' : 'Name') : (multi ? ui('text.placeholder') : '');
    node.setAttribute('aria-labelledby', 'qt');
    node.oninput = () => { S.a[k] = node.value; save(); };
    if (!multi) node.onkeydown = e => { if (e.key === 'Enter') app.querySelector('#next').click(); };
    wrap.appendChild(node);
    return node;
  }

  function otherInput(q, wrap, show) {
    const k = q.id + '_other';
    let n = wrap.querySelector('.other');
    if (!show) { if (n) n.remove(); delete S.a[k]; return; }
    if (n) return;
    n = el(`<input class="input other narrow" type="text">`); n.placeholder = ui('other.placeholder'); n.value = S.a[k] || '';
    n.oninput = () => { S.a[k] = n.value; save(); };
    wrap.appendChild(n);
  }

  const ILLU = {
    // ID03 logo types, simple pictograms
    0: '<svg class="illu" viewBox="0 0 160 72"><circle cx="40" cy="36" r="20" fill="none" stroke="currentColor" stroke-width="5"/><rect x="72" y="28" width="70" height="16" rx="8" fill="currentColor"/></svg>',
    1: '<svg class="illu" viewBox="0 0 160 72"><text x="80" y="48" text-anchor="middle" font-family="Nunito" font-weight="900" font-size="34" fill="currentColor">brand</text></svg>',
    2: '<svg class="illu" viewBox="0 0 160 72"><text x="80" y="52" text-anchor="middle" font-family="PT Serif, serif" font-size="46" fill="currentColor">AB</text></svg>',
    3: '<svg class="illu" viewBox="0 0 160 72"><circle cx="80" cy="36" r="30" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="80" cy="36" r="20" fill="none" stroke="currentColor" stroke-width="2"/><text x="80" y="42" text-anchor="middle" font-family="Nunito" font-weight="900" font-size="16" fill="currentColor">B</text></svg>',
    4: '<svg class="illu" viewBox="0 0 160 72"><path d="M60 36c0-12 9-20 20-20s20 8 20 18c0 12-12 12-12 22M88 62v0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>'
  };

  function cards(q, wrap, opts, multi, render) {
    const g = el(`<div class="grid ${opts.length <= 4 ? 'few' : ''}" role="${multi ? 'group' : 'radiogroup'}" aria-labelledby="qt"></div>`);
    g.style.setProperty('--n', opts.length);
    const cur = () => S.a[q.id];
    const picked = i => multi ? (cur() || []).includes(i) : cur() === i;
    const counter = multi && (q.max || q.exact) ? el('<div class="counter"></div>') : null;
    const upd = () => {
      g.querySelectorAll('.card').forEach((c, i) => c.setAttribute(multi ? 'aria-pressed' : 'aria-checked', picked(i)));
      if (counter) counter.textContent = fill(ui('picked'), { n: (cur() || []).length, max: q.exact || q.max });
      otherInput(q, wrap, opts.some((o, i) => isOther(o) && picked(i)));
    };
    opts.forEach((o, i) => {
      const c = el(`<button type="button" class="card ${render ? 'tall' : ''}" role="${multi ? 'checkbox' : 'radio'}"></button>`);
      if (multi) c.setAttribute('role', 'checkbox');
      c.innerHTML = render ? render(o, i) : cardBody(q, o, i);
      c.onclick = () => {
        if (multi) {
          let v = (cur() || []).slice();
          if (v.includes(i)) v = v.filter(x => x !== i);
          else {
            const lim = q.exact || q.max;
            if (lim && v.length >= lim) { app.querySelector('#err').textContent = fill(ui('err.max'), { max: lim }); return; }
            // "nothing / don't know" options are exclusive
            if (/^(Пока ничего|Ничего|Не знаю|Nothing|I don’t know|Not sure)/i.test(o)) v = [];
            else v = v.filter(x => !/^(Пока ничего|Ничего из этого|Не знаю|Nothing|None of these|I don’t know|Not sure)/i.test(opts[x]));
            v.push(i);
          }
          setA(q, v);
        } else setA(q, i);
        app.querySelector('#err').textContent = '';
        upd();
      };
      g.appendChild(c);
    });
    wrap.appendChild(g);
    if (counter) wrap.appendChild(counter);
    upd();
  }
  function cardBody(q, o, i) {
    if (q.id === 'S03') { const m = o.match(/(\d+(?:–\d+)?)\s*(мин|min)/); const big = m ? m[1] + (S.lang === 'ru' ? ' минут' : ' min') : o; return `<span class="big">${esc(big)}</span><span class="s">${esc(o.split(/,\s*(около|about)/)[0])}</span>`; }
    if (q.id === 'ID03') return `${ILLU[i] || ''}<span class="t">${esc(o)}</span>`;
    return `<span class="t">${esc(o)}</span>`;
  }

  function chips(q, wrap, opts) {
    // multi-select with many short options → chips
    const c = el(`<div class="chips" role="group" aria-labelledby="qt"></div>`);
    const counter = (q.max || q.exact) ? el('<div class="counter"></div>') : null;
    const cur = () => S.a[q.id] || [];
    const upd = () => {
      c.querySelectorAll('.chip').forEach((b, i) => b.setAttribute('aria-pressed', cur().includes(i)));
      if (counter) counter.textContent = fill(ui('picked'), { n: cur().length, max: q.exact || q.max });
      otherInput(q, wrap, opts.some((o, i) => isOther(o) && cur().includes(i)));
    };
    opts.forEach((o, i) => {
      const b = el(`<button type="button" class="chip">${esc(o)}</button>`);
      b.onclick = () => {
        let v = cur().slice();
        if (v.includes(i)) v = v.filter(x => x !== i);
        else {
          const lim = q.exact || q.max;
          if (lim && v.length >= lim) { app.querySelector('#err').textContent = fill(ui('err.max'), { max: lim }); return; }
          if (/^(Пока ничего|Ничего|Nothing|None)/i.test(o)) v = [];
          else v = v.filter(x => !/^(Пока ничего|Ничего из этого|Nothing|None of these)/i.test(opts[x]));
          v.push(i);
        }
        setA(q, v); app.querySelector('#err').textContent = ''; upd();
      };
      c.appendChild(b);
    });
    wrap.appendChild(c); if (counter) wrap.appendChild(counter); upd();
  }

  function filesField(q, wrap, withLinks) {
    const v = S.a[q.id] && typeof S.a[q.id] === 'object' ? S.a[q.id] : { files: [], links: '' };
    S.a[q.id] = v;
    const d = el(`<label class="drop narrow"><span class="plus">+</span><b>${esc(ui('files.drop'))}</b><span class="note">${esc(ui('files.note'))}</span><input type="file" multiple class="sr" accept="${CFG.fileTypes.join(',')}"></label>`);
    const list = el('<div class="files narrow"></div>');
    const draw = () => {
      list.innerHTML = '';
      v.files.forEach((f, i) => { const r = el(`<div class="file"><span>${esc(f.name)} · ${(f.size / 1048576).toFixed(1)} MB</span><button type="button" aria-label="×">×</button></div>`); r.querySelector('button').onclick = () => { v.files.splice(i, 1); save(); draw(); }; list.appendChild(r); });
    };
    const add = files => {
      [...files].forEach(f => {
        if (!CFG.fileTypes.includes(f.type)) { app.querySelector('#err').textContent = ui('err.file_type'); return; }
        if (f.size > CFG.maxFileMB * 1048576) { app.querySelector('#err').textContent = ui('err.file_size'); return; }
        const r = new FileReader();
        r.onload = () => { v.files.push({ name: f.name, type: f.type, size: f.size, data: String(r.result).split(',')[1] }); save(); draw(); };
        r.readAsDataURL(f);
      });
    };
    d.querySelector('input').onchange = e => add(e.target.files);
    d.ondragover = e => { e.preventDefault(); d.classList.add('over'); };
    d.ondragleave = () => d.classList.remove('over');
    d.ondrop = e => { e.preventDefault(); d.classList.remove('over'); add(e.dataTransfer.files); };
    wrap.appendChild(d); wrap.appendChild(list); draw();
    if (withLinks) {
      const t = el(`<textarea class="textarea narrow" rows="3"></textarea>`); t.placeholder = ui('links.placeholder'); t.value = v.links || '';
      t.oninput = () => { v.links = t.value; save(); };
      wrap.appendChild(t);
    }
  }

  const PAIR_SVG = {
    hand: '<path d="M10 40c20-25 30 15 50-5s30 20 50 0 30 10 40 0" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
    grid: '<g stroke="currentColor" stroke-width="3"><path d="M20 10v44M50 10v44M80 10v44M110 10v44M140 10v44M10 22h140M10 42h140"/></g>',
    dense: '<g fill="currentColor"><rect x="10" y="8" width="44" height="22" rx="4"/><rect x="58" y="8" width="44" height="22" rx="4"/><rect x="106" y="8" width="44" height="22" rx="4"/><rect x="10" y="34" width="68" height="22" rx="4"/><rect x="82" y="34" width="68" height="22" rx="4"/></g>',
    airy: '<g fill="currentColor"><circle cx="40" cy="32" r="6"/><rect x="70" y="29" width="50" height="6" rx="3"/></g>',
    round: '<g fill="none" stroke="currentColor" stroke-width="5"><circle cx="50" cy="32" r="20"/><rect x="88" y="12" width="40" height="40" rx="20"/></g>',
    angular: '<g fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="miter"><path d="M30 52 50 12 70 52z"/><path d="M90 12h40v40H90z"/></g>',
    quiet: '<rect x="70" y="30" width="20" height="4" rx="2" fill="currentColor"/>',
    loud: '<g fill="currentColor"><path d="M20 56 40 8l14 30 14-22 16 40z"/><rect x="96" y="10" width="18" height="46"/><rect x="120" y="22" width="18" height="34"/></g>'
  };

  const FIELDS = {
    short: (q, w) => textInput(q, w, false),
    text: (q, w) => textInput(q, w, true),
    single: (q, w) => cards(q, w, T(q, 'opts'), false),
    multi: (q, w) => {
      const o = T(q, 'opts');
      const long = o.some(x => x.length > 28);
      if (q.id === 'C10' || q.id === 'C06' || long || o.length <= 4) cards(q, w, o, true); else chips(q, w, o);
    },
    sliders: (q, w) => {
      const pairs = T(q, 'opts');
      const v = Array.isArray(S.a[q.id]) ? S.a[q.id] : pairs.map(() => 50);
      S.a[q.id] = v;
      const box = el('<div class="narrow" style="display:flex;flex-direction:column;gap:24px"></div>');
      pairs.forEach((p, i) => {
        const [l, r] = p.split(/\s*↔\s*/);
        const s = el(`<div class="slider"><div class="ends"><span>${esc(l)}</span><span>${esc(r)}</span></div><input type="range" min="0" max="100" step="5" aria-label="${esc(l)} – ${esc(r)}"></div>`);
        const inp = s.querySelector('input'); inp.value = v[i]; inp.style.setProperty('--p', v[i] + '%');
        inp.oninput = () => { v[i] = +inp.value; inp.style.setProperty('--p', inp.value + '%'); save(); };
        box.appendChild(s);
      });
      w.appendChild(box);
    },
    palettes: (q, w) => cards(q, w, X.palettes.map(p => p[S.lang]), true, (o, i) => `<div class="swatches">${X.palettes[i].c.map(c => `<i style="background:${c}"></i>`).join('')}</div><span class="t">${esc(o)}</span>`),
    fonts: (q, w) => { loadFonts(); cards(q, w, X.fonts.map(f => f[S.lang]), true, (o, i) => `<span class="sample" style="font-family:${X.fonts[i].f};font-weight:${X.fonts[i].w || 400}">Аа</span><span class="t">${esc(o)}</span>`); },
    pairs: (q, w) => {
      const v = Array.isArray(S.a[q.id]) ? S.a[q.id] : X.pairs.map(() => null);
      S.a[q.id] = v;
      X.pairs.forEach((p, i) => {
        const row = el('<div class="pair narrow" role="radiogroup"></div>');
        ['a', 'b'].forEach((side, j) => {
          const c = el(`<button type="button" class="card" role="radio"><svg viewBox="0 0 160 64">${PAIR_SVG[p[side].s]}</svg><span class="t">${esc(p[side][S.lang])}</span></button>`);
          c.setAttribute('aria-checked', v[i] === j);
          c.onclick = () => { v[i] = j; save(); row.querySelectorAll('.card').forEach((x, k) => x.setAttribute('aria-checked', v[i] === k)); };
          row.appendChild(c);
        });
        w.appendChild(row);
      });
    },
    files: (q, w) => filesField(q, w, true),
    links: (q, w) => textInput(q, w, true),
    text_files: (q, w) => { textInput(q, w, true, q.id + '_text'); filesField(q, w, false); },
    date: (q, w) => { const box = el('<div class="date-box narrow"><svg class="date-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>'); const d = el('<input class="input" type="date">'); box.prepend(d); d.value = S.a[q.id] || ''; d.oninput = () => setA(q, d.value); w.appendChild(box); },
    date_text: (q, w) => { FIELDS.date(q, w); textInput(q, w, true, q.id + '_text').placeholder = ui('date.placeholder'); },
    contact: (q, w) => {
      const v = S.a[q.id] && typeof S.a[q.id] === 'object' ? S.a[q.id] : { email: '', channel: null, handle: '' };
      S.a[q.id] = v;
      const e = el(`<div class="field narrow"><label for="em">${esc(ui('contact.email'))}</label><input id="em" class="input" type="email" autocomplete="email" inputmode="email"></div>`);
      e.querySelector('input').value = v.email; e.querySelector('input').oninput = ev => { v.email = ev.target.value.trim(); save(); };
      w.appendChild(e);
      const ch = el(`<div class="field narrow"><label>${esc(ui('contact.channel'))}</label><div class="chips" style="justify-content:flex-start"></div></div>`);
      const box = ch.querySelector('.chips');
      T(q, 'opts').forEach((o, i) => {
        const b = el(`<button type="button" class="chip">${esc(o)}</button>`); b.setAttribute('aria-pressed', v.channel === i);
        b.onclick = () => { v.channel = i; save(); box.querySelectorAll('.chip').forEach((x, k) => x.setAttribute('aria-pressed', k === i)); hd.style.display = i === 0 ? 'none' : ''; };
        box.appendChild(b);
      });
      w.appendChild(ch);
      const hd = el(`<div class="field narrow"><label for="hd">${esc(ui('contact.handle'))}</label><input id="hd" class="input" type="text"></div>`);
      hd.querySelector('input').value = v.handle; hd.querySelector('input').oninput = ev => { v.handle = ev.target.value; save(); };
      hd.style.display = v.channel && v.channel !== 0 ? '' : 'none';
      w.appendChild(hd);
    },
    consent: (q, w) => {
      w.querySelector('label') && w.querySelector('label').remove();
      const c = el(`<label class="check narrow"><input type="checkbox"><span>${esc(T(q, 'q'))}</span></label>`);
      c.querySelector('input').checked = !!S.a[q.id];
      c.querySelector('input').onchange = e => setA(q, e.target.checked);
      w.appendChild(c);
    }
  };
  let fontsLoaded = false;
  function loadFonts() { if (fontsLoaded) return; fontsLoaded = true; const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = X.fontsCss; document.head.appendChild(l); }

  // ---------- submit ----------
  function payload() {
    const t = tags(), list = screens().flat();
    const label = (q, v) => {
      const o = q.ru.opts; // answers are stored in RU labels for one consistent table
      if (q.type === 'palettes') return (v || []).map(i => X.palettes[i].ru).join('; ');
      if (q.type === 'fonts') return (v || []).map(i => X.fonts[i].ru).join('; ');
      if (q.type === 'pairs') return (v || []).map((j, i) => j == null ? '' : X.pairs[i][j ? 'b' : 'a'].ru).join('; ');
      if (q.type === 'sliders') return (v || []).join('; ');
      if (q.type === 'single') return typeof v === 'number' ? o[v] : '';
      if (q.type === 'multi') return (v || []).map(i => o[i]).join('; ');
      if (q.type === 'contact') return v ? [v.email, v.channel != null ? o[v.channel] : '', v.handle].filter(Boolean).join(' · ') : '';
      if (q.type === 'files') return v ? (v.links || '') : '';
      if (q.type === 'text_files') return '';
      if (q.type === 'consent') return v ? 'да' : 'нет';
      return v == null ? '' : String(v);
    };
    const answers = {}, files = [];
    for (const q of list) {
      const v = S.a[q.id];
      answers[q.id] = label(q, v);
      if (S.a[q.id + '_other']) answers[q.id] += ' — ' + S.a[q.id + '_other'];
      if (S.a[q.id + '_text']) answers[q.id] = [answers[q.id], S.a[q.id + '_text']].filter(Boolean).join(' — ');
      if (v && v.files) v.files.forEach(f => files.push(Object.assign({ q: q.id }, f)));
    }
    return {
      lang: S.lang, mode: t.has('DEEP') ? 'deep' : 'quick', tags: [...t].sort().join(' '),
      path: list.map(q => q.id).join(' '), started: S.started, submitted: new Date().toISOString(),
      name: name(), brand: (S.a.C01 || '').trim(), email: (S.a.W07 && S.a.W07.email) || '',
      answers, files
    };
  }

  async function submit() {
    const btn = app.querySelector('#next'); btn.disabled = true; btn.textContent = ui('sending');
    const data = payload();
    if (!CFG.endpoint) { console.info('OKOLO demo payload', data); S.demo = true; S.screen = 'final'; save(); render(); return; }
    try {
      // text/plain avoids a CORS preflight, which Apps Script does not answer.
      const r = await fetch(CFG.endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.ok === false) throw new Error(j.error || r.status);
      S.screen = 'final'; S.demo = false; S.sent = true; save(); render();
    } catch (e) {
      btn.disabled = false; btn.textContent = ui('btn.submit');
      app.querySelector('#err').textContent = ui('err.send');
    }
  }

  // test hook for automated path checks
  window.__okolo = { screens, tags, state: () => S, set: (a) => { S.a = a; save(); }, payload };
  render();
})();
