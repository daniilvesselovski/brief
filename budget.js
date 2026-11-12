/* OKOLO brief: scope-based budget (question W03).
 * The form adds up the minimum price of everything the client picked (F, the floor),
 * then offers budget ranges that start at F. Nothing below €100 is ever accepted.
 * Prices are in euros. Change them here only; app.js reads this file.
 * Keys are answer indexes in questions.js (the RU label is in the comment). */
window.OKOLO_BUDGET = (function () {
  'use strict';
  const MIN = 100;                // hard floor: no project below this
  const STEPS = [1.5, 2.5, 4];    // ranges: F–1.5F / 1.5F–2.5F / 2.5F–4F / 4F+

  const P = {
    // ID01 Логотип и айдентика: что входит в работу
    ID01: [150 /* Логотип */, 50 /* Цвета и шрифты */, 200 /* Гайдлайн */, 50 /* Визитки и бланки */,
           100 /* Шаблоны для соцсетей (не считается, если выбран модуль Соцсети) */, 50 /* Иконка */,
           200 /* Посоветуй: не меньше этой суммы */],
    ID_DEFAULT: 150,
    REBRAND: 100,                  // C06 «Нужен полный ребрендинг»: аудит старого и перенос
    // CH02 Сколько персонажей: один / 2–5 / серия / не знаю
    CH02: [150, 300, 400, 150],
    // SO02 Что нужно для соцсетей (только в подробном режиме)
    SO02: [120 /* Шаблоны постов */, 50 /* Сторис */, 50 /* Обложки reels */, 50 /* Хайлайты */, 50 /* Профиль */, 100 /* Контент-план */],
    SO_DEFAULT: 150,
    // WEB01 Какой сайт: одна страница / 3–5 страниц / магазин / портфолио / не знаю
    WEB01: [300, 600, 900, 400, 300],
    // WEB03 Тексты и фото есть: да / частично / нет, нужна помощь
    WEB03: [0, 50, 100],
    // PK02 Сколько товаров: 1 / 2–5 / 6–15 / больше 15
    PK_PACK: [200, 350, 600, 900],   // PK01 упаковка, коробки или пакеты
    PK_LABEL: [120, 200, 350, 500],  // PK01 только этикетки и наклейки
    PK_EXTRA: { 4: 120 /* Меню */, 5: 100 /* Листовки и постеры */, 6: 50 /* Визитки */ },
    MR_ITEM: 60,                     // MR01 за каждый вид мерча
    // SP01 вывеска / интерьер и стены / навигация / стенд / событие
    SP01: [150, 400, 200, 250, 200],
    SP_DEFAULT: 150
  };

  const arr = v => Array.isArray(v) ? v : (typeof v === 'number' ? [v] : []);
  const sum = xs => xs.reduce((s, x) => s + (x || 0), 0);
  const stepOf = x => x < 1000 ? 50 : x < 3000 ? 100 : 500;
  const down = x => Math.floor(x / stepOf(x)) * stepOf(x);
  const near = x => Math.round(x / stepOf(x)) * stepOf(x);

  // a = answers, t = Set of tags from app.js. Returns the floor and what it is made of.
  function floor(a, t) {
    const parts = {};
    const hasId = t.has('M_ID') || t.has('REBRAND');
    if (hasId) {
      let picks = arr(a.ID01);
      if (t.has('M_SO')) picks = picks.filter(i => i !== 4);
      let s = picks.length ? sum(picks.filter(i => i !== 6).map(i => P.ID01[i])) : P.ID_DEFAULT;
      if (picks.includes(6)) s = Math.max(s, P.ID01[6]);
      if (!picks.length && arr(a.ID01).length) s = 0; // only "social templates", counted under Social
      if (t.has('REBRAND')) s += P.REBRAND;
      parts.id = s;
    }
    if (t.has('M_CH')) parts.ch = typeof a.CH02 === 'number' ? P.CH02[a.CH02] : P.CH02[0];
    if (t.has('M_SO')) {
      const s = sum(arr(a.SO02).map(i => P.SO02[i]));
      parts.so = Math.max(MIN, s || P.SO_DEFAULT);
    }
    if (t.has('M_WEB')) {
      parts.web = (typeof a.WEB01 === 'number' ? P.WEB01[a.WEB01] : P.WEB01[0]) + (typeof a.WEB03 === 'number' ? P.WEB03[a.WEB03] : 0);
    }
    if (t.has('M_PK')) {
      const it = arr(a.PK01), n = typeof a.PK02 === 'number' ? a.PK02 : 0;
      let s = it.some(i => i === 0 || i === 2 || i === 3) ? P.PK_PACK[n] : it.includes(1) ? P.PK_LABEL[n] : 0;
      const idCards = hasId && arr(a.ID01).includes(3);
      s += sum(it.filter(i => P.PK_EXTRA[i] && !(i === 6 && idCards)).map(i => P.PK_EXTRA[i]));
      parts.pk = Math.max(MIN, s);
    }
    if (t.has('M_MR')) parts.mr = Math.max(MIN, P.MR_ITEM * arr(a.MR01).length);
    if (t.has('M_SP')) {
      const s = sum(arr(a.SP01).map(i => P.SP01[i]));
      parts.sp = Math.max(MIN, s || P.SP_DEFAULT);
    }
    const total = sum(Object.values(parts));
    return { F: Math.max(MIN, down(total)), estimated: total > 0, parts };
  }

  // Four ranges from the floor: [min, max]; max null = open-ended.
  function ranges(F) {
    const b = [F].concat(STEPS.map(k => near(F * k)));
    for (let i = 1; i < b.length; i++) if (b[i] <= b[i - 1]) b[i] = b[i - 1] + stepOf(b[i - 1]);
    return [[b[0], b[1]], [b[1], b[2]], [b[2], b[3]], [b[3], null]];
  }

  const money = (n, lang) => '€' + n.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-GB').replace(/\s/g, ' ');
  const label = (r, lang) => r[1] == null ? money(r[0], lang) + '+' : money(r[0], lang) + '–' + money(r[1], lang).slice(1);

  return { MIN, P, STEPS, floor, ranges, money, label };
})();
