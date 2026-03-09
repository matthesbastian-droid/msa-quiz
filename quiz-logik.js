/**
 * quiz-logik.js – Quiz-Rendering und Interaktionslogik
 * Enthält alle Aufgaben-Typen: mc, match, cross, komma, wortklick, text
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════
   HILFSFUNKTIONEN (themen-übergreifend)
   ═══════════════════════════════════════════════════════════════ */

/** Gibt alle Themen für den aktuellen Bereich zurück */
function getAllThemes(area) {
  area = area || AppState.currentArea;
  if (area === 'msa') {
    return [
      ...(window.MSA_THEMES || []),
      ...(window.MSA_EXTRA_THEMES || window.EXTRA_THEMES || []),
      ...(typeof window.MSA_UEBERARBEITUNG_THEMES !== 'undefined' ? window.MSA_UEBERARBEITUNG_THEMES : []),
    ];
  }
  return [
    ...(window.BBR_THEMES || []),
    ...(typeof window.BBR_EXTRA_THEMES !== 'undefined' ? window.BBR_EXTRA_THEMES : []),
    ...(typeof window.BBR_RECHTSCHREIBUNG_THEMES !== 'undefined' ? window.BBR_RECHTSCHREIBUNG_THEMES : []),
    ...(typeof window.BBR_WIEDER_THEMES !== 'undefined' ? window.BBR_WIEDER_THEMES : []),
  ];
}

function findTheme(id, area) {
  return getAllThemes(area).find(t => t.id === id) || null;
}

/** Generisches Themen-Grid-Rendering (ersetzt renderArea / renderZehnPanel / renderExtraPanel) */
function renderThemeGrid(containerId, themesArray, area) {
  const container = el(containerId);
  if (!container) return;

  if (!Array.isArray(themesArray) || themesArray.length === 0) {
    container.innerHTML =
      '<p style="opacity:.4;padding:20px">Keine Aufgaben geladen. Bitte prüfe, ob die Skript-Dateien korrekt eingebunden sind.</p>';
    return;
  }

  const s        = Storage.load();
  const fragment = document.createDocumentFragment();

  for (const t of themesArray) {
    try {
      const st          = s[t.id];
      const pct         = st ? st.pct : undefined;
      const lastDate    = st ? fmtDate(st.ts) : '';
      const displayTitle = (t.title || '').replace(/\s*\(extra\)/gi, '').trim();

      const card = document.createElement('div');
      card.className = 'card tc';
      card.style.borderLeftColor = t.color || '#3d6b8f';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Thema: ${displayTitle}`);

      const emoji = document.createElement('div');
      emoji.className = 'tc-emoji';
      emoji.textContent = t.emoji || '📝';

      const title = document.createElement('div');
      title.className = 'tc-title';
      title.textContent = displayTitle;

      const meta = document.createElement('div');
      meta.className = 'tc-meta';
      meta.textContent = `${(t.qs && t.qs.length) || 0} Aufgaben`;

      const score = document.createElement('div');
      score.className = 'tc-score';
      score.innerHTML =
        `<span class="dot" style="background:${scCol(pct)}"></span>` +
        `<span>${pct !== undefined ? pct + '%' : '—'}</span>`;

      card.appendChild(emoji);
      card.appendChild(title);
      card.appendChild(meta);
      card.appendChild(score);

      if (lastDate) {
        const dateEl = document.createElement('div');
        dateEl.className = 'tc-lastdate';
        dateEl.textContent = '📅 ' + lastDate;
        card.appendChild(dateEl);
      }

      // Event-Listener statt onclick-Attribut
      card.addEventListener('click', () => openStatPage(t.id, area || AppState.currentArea));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') openStatPage(t.id, area || AppState.currentArea);
      });

      fragment.appendChild(card);
    } catch (e) {
      devWarn('renderThemeGrid Fehler bei Thema', t && t.id, e);
    }
  }

  container.innerHTML = '';
  container.appendChild(fragment);
}

/* ═══════════════════════════════════════════════════════════════
   BEREICH-RENDERING (MSA / BBR)
   ═══════════════════════════════════════════════════════════════ */

function renderArea(area) {
  const themes = area === 'msa' ? (window.MSA_THEMES || []) : (window.BBR_THEMES || []);
  const gridId = area === 'msa' ? 'theme-grid' : 'bbr-grid';
  renderThemeGrid(gridId, themes, area);
}

function renderZehnPanel() {
  const themes = typeof window.MSA_UEBERARBEITUNG_THEMES !== 'undefined'
    ? window.MSA_UEBERARBEITUNG_THEMES : [];
  const grid = el('msa-zehn-grid');
  if (!grid) return;
  if (themes.length === 0) {
    grid.innerHTML =
      '<div class="coming-soon"><div class="coming-soon-icon">📋</div>' +
      '<h3>Keine Tabellen vorhanden</h3>' +
      '<p>Die msa-ueberarbeitung.js Datei wird benötigt.</p></div>';
    return;
  }
  renderThemeGrid('msa-zehn-grid', themes, 'msa');
}

function renderExtraPanel(area) {
  let extraThemes;
  if (area === 'msa') {
    extraThemes = typeof window.MSA_EXTRA_THEMES !== 'undefined'
      ? window.MSA_EXTRA_THEMES
      : (typeof window.EXTRA_THEMES !== 'undefined' ? window.EXTRA_THEMES : []);
  } else {
    extraThemes = typeof window.BBR_EXTRA_THEMES !== 'undefined'
      ? window.BBR_EXTRA_THEMES : [];
  }
  const gridId = area === 'msa' ? 'msa-extra-grid' : 'bbr-extra-grid';

  if (!extraThemes || extraThemes.length === 0) {
    const container = el(gridId);
    if (container) {
      container.innerHTML =
        '<div class="coming-soon"><div class="coming-soon-icon">🚀</div>' +
        '<h3>Keine zusätzlichen Aufgaben</h3>' +
        '<p>Schicke mir Aufgaben – ich baue sie hier ein!</p></div>';
    }
    return;
  }
  renderThemeGrid(gridId, extraThemes, area);
}

/* ═══════════════════════════════════════════════════════════════
   TAB-STEUERUNG
   ═══════════════════════════════════════════════════════════════ */
function switchAreaTab(area, tab) {
  AppState.currentTab = tab;
  const tabs = area === 'msa'
    ? ['aufgaben', 'zehn', 'extra', 'regeln']
    : ['aufgaben', 'extra', 'regeln'];

  tabs.forEach(t => {
    const tabEl   = el(`${area}-tab-${t}`);
    const panelEl = el(`${area}-panel-${t}`);
    if (tabEl)   tabEl.classList.toggle('active-tab', t === tab);
    if (panelEl) panelEl.style.display = t === tab ? '' : 'none';
  });

  if (tab === 'aufgaben') renderArea(area);
  if (tab === 'regeln')   { AppState.gramFromArea = area; renderGramNavInArea(area); }
  if (tab === 'extra')    renderExtraPanel(area);
  if (tab === 'zehn')     renderZehnPanel();
}

/* ═══════════════════════════════════════════════════════════════
   STATISTIK-SEITE
   ═══════════════════════════════════════════════════════════════ */
function openStatPage(themeId, area) {
  AppState.currentArea   = area || AppState.currentArea;
  AppState.pendingThemeId = themeId;

  const theme = findTheme(themeId, AppState.currentArea);
  if (!theme) return;

  const st = Storage.load()[themeId];
  setText('stat-hdr-m',        AppState.currentArea.toUpperCase());
  setText('stat-theme-name',   `${theme.emoji} ${theme.title}`);
  setText('stat-theme-meta',   `${theme.qs.length} Aufgaben`);

  const pctEl      = el('stat-pct');
  const totalEl    = el('stat-total');
  const lastdateEl = el('stat-lastdate');

  if (st) {
    if (pctEl)      { pctEl.textContent = `${st.pct}%`; pctEl.style.color = scCol(st.pct); }
    if (totalEl)    totalEl.textContent = theme.qs.length;
    if (lastdateEl) lastdateEl.textContent = fmtDate(st.ts);
  } else {
    if (pctEl)      { pctEl.textContent = '—'; pctEl.style.color = 'var(--ink)'; }
    if (totalEl)    totalEl.textContent = theme.qs.length;
    if (lastdateEl) lastdateEl.textContent = 'Noch nicht';
  }

  renderStatChart(theme, st);

  const cb = el('compare-box');
  if (cb) {
    if (st && st.prev) { cb.classList.remove('hidden'); renderCompare(st); }
    else                 cb.classList.add('hidden');
  }
  showPage('stat');
}

function renderStatChart(theme, st) {
  const tot     = theme.qs.length;
  const ok      = st ? st.ok : 0;
  let wrong     = st ? Math.max(0, st.tot - st.ok) : 0;
  let notDone   = st ? Math.max(0, tot - st.tot) : tot;
  if (st && st.tot > tot) { wrong = Math.max(0, tot - ok); notDone = 0; }

  const bars = [
    { label: 'Richtig', val: ok,    color: '#2d9e6a', max: tot },
    { label: 'Falsch',  val: wrong, color: '#d94f4f', max: tot },
    { label: 'Gesamt',  val: tot,   color: '#3d6b8f', max: tot },
  ];

  const chart    = el('stat-bar-chart');
  if (!chart) return;
  const fragment = document.createDocumentFragment();

  bars.forEach(b => {
    const h  = b.max > 0 ? Math.round(b.val / b.max * 120) : 0;
    const g  = document.createElement('div'); g.className = 'bar-group';
    const vl = document.createElement('div'); vl.className = 'bar-val';   vl.textContent = b.val;
    const bo = document.createElement('div'); bo.className = 'bar-outer'; bo.style.height = '120px';
    const bf = document.createElement('div'); bf.className = 'bar-fill';  bf.style.height = `${h}px`; bf.style.background = b.color;
    const bl = document.createElement('div'); bl.className = 'bar-label'; bl.textContent = b.label;
    bo.appendChild(bf); g.appendChild(vl); g.appendChild(bo); g.appendChild(bl);
    fragment.appendChild(g);
  });

  chart.innerHTML = '';
  chart.appendChild(fragment);
}

function renderCompare(st) {
  const rows    = el('compare-rows');
  if (!rows) return;
  const cur     = st.pct;
  const prev    = st.prev.pct;
  const diff    = cur - prev;
  const diffStr = diff > 0 ? `+${diff}%` : `${diff}%`;
  const diffColor = diff > 0 ? '#2d9e6a' : diff < 0 ? '#d94f4f' : '#888';

  rows.innerHTML =
    `<div class="compare-row"><span style="min-width:70px;font-size:.78rem;opacity:.6">Letztes Mal</span>` +
    `<div class="compare-bar-outer"><div class="compare-bar-fill" style="width:${prev}%;background:#888"></div></div>` +
    `<span class="compare-label">${prev}%</span></div>` +
    `<div class="compare-row"><span style="min-width:70px;font-size:.78rem;opacity:.6">Diese Runde</span>` +
    `<div class="compare-bar-outer"><div class="compare-bar-fill" style="width:${cur}%;background:${scCol(cur)}"></div></div>` +
    `<span class="compare-label" style="color:${scCol(cur)}">${cur}%</span></div>` +
    `<div style="text-align:center;font-size:.82rem;font-weight:700;margin-top:8px;color:${diffColor}">Veränderung: ${diffStr}</div>`;
}

function startFromStat() {
  if (AppState.pendingThemeId) startTheme(AppState.pendingThemeId);
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ-START & LIFECYCLE
   ═══════════════════════════════════════════════════════════════ */
function startTheme(id) {
  const theme = findTheme(id, AppState.currentArea);
  if (!theme) return;

  const q = AppState.quiz;
  q.themeId  = id;
  q.qs       = theme.qs.slice().sort(() => Math.random() - 0.5);
  q.idx      = 0;
  q.answers  = [];
  q.answered = false;
  q.savedQs  = null;
  q.savedIdx = 0;

  setText('hdr-theme',       theme.title);
  setText('quiz-area-label', AppState.currentArea.toUpperCase());
  renderQ();
  showPage('quiz');
}

function restartQuiz() { startTheme(AppState.quiz.themeId); }

function abortQuiz() {
  const q = AppState.quiz;
  q.savedQs  = q.qs.slice();
  q.savedIdx = q.idx + 1;
  showResult(true);
}

function continueQuiz() {
  const q = AppState.quiz;
  if (!q.savedQs || q.savedIdx >= q.savedQs.length) { startTheme(q.themeId); return; }
  q.qs       = q.savedQs;
  q.idx      = q.savedIdx;
  q.answers  = [];
  q.answered = false;
  q.savedQs  = null;

  const theme = findTheme(q.themeId, AppState.currentArea);
  if (theme) setText('hdr-theme', theme.title);
  renderQ();
  showPage('quiz');
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ-RENDERING
   ═══════════════════════════════════════════════════════════════ */
const NEW_TYPES = ['komma', 'rs', 'ausdruck', 'kasus', 'satzbau'];

function renderQ() {
  const q   = AppState.quiz;
  q.answered = false;

  const cur = q.qs[q.idx];
  const tot = q.qs.length;

  const bar = el('quiz-bar');
  if (bar) bar.style.width = Math.round(q.idx / tot * 100) + '%';
  setText('quiz-ctr', `${q.idx + 1} / ${tot}`);
  setText('q-badge',  cur.sub || 'Aufgabe');

  const qText = el('q-text');
  if (qText) {
    if (NEW_TYPES.includes(cur.type)) {
      qText.style.display = 'none';
    } else {
      qText.style.display = '';
      qText.textContent = cur.q || '';
    }
  }

  const qCard = el('q-card');
  if (qCard) qCard.className = 'card q-card';

  const ruleDesktop = el('rule-desktop');
  if (ruleDesktop) ruleDesktop.innerHTML = '<span class="rule-empty">Beantworte eine Aufgabe, um die Regel zu sehen.</span>';

  const ansWrap = el('ans-wrap');
  if (ansWrap) ansWrap.innerHTML = '';

  const fb     = el('fb');     if (fb)     fb.style.display = 'none';
  const btnNext= el('btn-next'); if (btnNext) btnNext.style.display = 'none';
  const swHint = el('swipe-hint'); if (swHint) swHint.style.display = 'none';
  const actRow = el('act-row'); if (actRow) actRow.style.display = 'flex';
  const abortBtn = el('btn-abort'); if (abortBtn) abortBtn.style.display = 'block';

  if      (cur.type === 'mc')                                    renderMC(cur);
  else if (cur.type === 'match')                                  renderMatch(cur);
  else if (cur.type === 'cross')                                  renderCross(cur);
  else if (cur.type === 'komma')                                  renderKomma(cur);
  else if (NEW_TYPES.includes(cur.type) && cur.type !== 'komma') renderWortklick(cur);
  else                                                            renderText(cur);
}

/* ── MC ──────────────────────────────────────────────────────── */
function renderMC(q) {
  const ml   = document.createElement('div');
  ml.className = 'mc-list';
  const ltrs = ['A','B','C','D'];

  q.o.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'mc-btn';
    btn.setAttribute('aria-label', `Antwort ${ltrs[i]}: ${opt}`);
    btn.innerHTML = `<span class="mc-ltr">${ltrs[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectMC(i));
    ml.appendChild(btn);
  });

  const aw = el('ans-wrap'); if (aw) aw.appendChild(ml);
  const ok = el('btn-ok');   if (ok) ok.style.display = 'none';
  setHint('A–D = Antwort wählen  ·  → = weiter');
}

function selectMC(idx) {
  const q = AppState.quiz;
  if (q.answered) return;
  q.answered = true;

  const cur  = q.qs[q.idx];
  const btns = document.querySelectorAll('.mc-btn');
  btns.forEach(b => { b.disabled = true; });

  const ok2 = idx === cur.c;
  btns[idx].classList.add(ok2 ? 'ok' : 'err');
  btns[idx].querySelector('.mc-ltr').textContent = ok2 ? '✓' : '✗';
  if (!ok2) { btns[cur.c].classList.add('ok'); btns[cur.c].querySelector('.mc-ltr').textContent = '✓'; }

  flash(ok2);
  showFB(ok2, cur);
  q.answers.push({ ok: ok2, q: (cur.q || '').split('\n')[0] });
  hideActRow();
  showNext();
}

/* ── MATCH ───────────────────────────────────────────────────── */
function renderMatch(q) {
  const rights = q.pairs.map(p => p[1]).slice().sort(() => Math.random() - 0.5);
  const tbl = document.createElement('table');
  tbl.className = 'match-table';

  q.pairs.forEach((pair, i) => {
    const tr  = document.createElement('tr');
    tr.setAttribute('data-correct', pair[1]);

    const td1 = document.createElement('td'); td1.textContent = pair[0];
    const td2 = document.createElement('td');
    const sel = document.createElement('select');
    sel.setAttribute('aria-label', `Zuordnung für: ${pair[0]}`);
    sel.innerHTML = '<option value="">– wählen –</option>';
    rights.forEach(r => {
      const opt = document.createElement('option'); opt.value = r; opt.textContent = r;
      sel.appendChild(opt);
    });
    td2.appendChild(sel);
    tr.appendChild(td1); tr.appendChild(td2);
    tbl.appendChild(tr);
  });

  const aw = el('ans-wrap'); if (aw) aw.appendChild(tbl);
  const ok = el('btn-ok');   if (ok) { ok.style.display = ''; ok.disabled = false; }
  setHint('Auswahl treffen, dann Bestätigen  ·  → = weiter');
}

function checkMatch(q) {
  const rows  = document.querySelectorAll('.match-table tr');
  let allOk   = true;
  rows.forEach(row => {
    const cor = row.getAttribute('data-correct');
    const sel = row.querySelector('select');
    if (!sel) return;
    sel.disabled = true;
    const ok2 = sel.value === cor;
    row.classList.add(ok2 ? 'ok' : 'err');
    if (!ok2) {
      allOk = false;
      const hint = document.createElement('span');
      hint.style.cssText = 'font-size:.75rem;color:#d94f4f;display:block;margin-top:3px';
      hint.textContent = '✓ ' + cor;
      sel.insertAdjacentElement('afterend', hint);
    }
  });
  return allOk;
}

/* ── CROSS ───────────────────────────────────────────────────── */
function renderCross(q) {
  const tbl  = document.createElement('table'); tbl.className = 'cross-table';
  const head = document.createElement('tr');
  const th0  = document.createElement('th');  head.appendChild(th0);
  q.cols.forEach(c => { const th = document.createElement('th'); th.textContent = c; head.appendChild(th); });
  tbl.appendChild(head);

  const isSingle    = q.isSingle;
  const rowsToRender = isSingle ? [q.rows[0]] : q.rows;

  rowsToRender.forEach((rowLabel, ri) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-correct', q.correct[ri]);
    const td0 = document.createElement('td'); td0.textContent = rowLabel; tr.appendChild(td0);

    q.cols.forEach((col, ci) => {
      const td  = document.createElement('td');
      const btn = document.createElement('button');
      btn.className = 'cross-btn';
      btn.setAttribute('data-row', ri);
      btn.setAttribute('data-col', ci);
      btn.setAttribute('aria-label', `${rowLabel} – ${col}`);
      btn.addEventListener('click', () => toggleCross(ri, ci, btn, isSingle));
      td.appendChild(btn); tr.appendChild(td);
    });
    tbl.appendChild(tr);
  });

  const aw = el('ans-wrap'); if (aw) aw.appendChild(tbl);
  const ok = el('btn-ok');   if (ok) { ok.style.display = ''; ok.disabled = false; }
  setHint('Ankreuzen, dann Bestätigen  ·  → = weiter');
}

function toggleCross(ri, ci, btn, isSingle) {
  if (AppState.quiz.answered) return;
  const row = btn.closest('tr');
  row.querySelectorAll('.cross-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.toggle('selected');
}

function checkCross(q) {
  const rows = document.querySelectorAll('.cross-table tr:not(:first-child)');
  let allOk  = true;
  rows.forEach((row, ri) => {
    const cor    = parseInt(row.getAttribute('data-correct'));
    const btns   = row.querySelectorAll('.cross-btn');
    let chosen   = -1;
    btns.forEach((b, bi) => { if (b.classList.contains('selected')) chosen = bi; });
    const ok2 = chosen === cor;
    btns.forEach(b => { b.disabled = true; });
    if (!ok2) allOk = false;
    if (chosen >= 0) btns[chosen].classList.add(ok2 ? 'ok' : 'err');
    btns[cor].classList.add('ok');
    row.classList.add(ok2 ? 'row-ok' : 'row-err');
  });
  return allOk;
}

/* ── TEXT ────────────────────────────────────────────────────── */
function renderText(q) {
  const isLong = q.type === 'self' || (q.q.match(/\n/g) || []).length > 2;
  const inp    = document.createElement('textarea');
  inp.className = 'ans-input';
  inp.id        = 'main-inp';
  inp.rows      = isLong ? 4 : 2;
  inp.placeholder = q.type === 'self' ? 'Deine Antwort / Erklärung …' : 'Antwort eingeben …';
  inp.setAttribute('data-qtype', q.type);
  inp.setAttribute('aria-label', 'Antwort eingeben');

  inp.addEventListener('input', () => {
    const okBtn = el('btn-ok'); if (okBtn) okBtn.disabled = inp.value.trim() === '';
  });
  inp.addEventListener('keydown', e => {
    const isAlt = inp.getAttribute('data-qtype') === 'alt';
    if (e.key === 'Enter' && !AppState.quiz.answered) {
      if (isAlt  && !e.shiftKey) { e.preventDefault(); doConfirm(); }
      if (!isAlt &&  e.shiftKey) { e.preventDefault(); doConfirm(); }
    }
  });

  const aw = el('ans-wrap'); if (aw) aw.appendChild(inp);
  const ok = el('btn-ok');   if (ok) { ok.style.display = ''; ok.disabled = true; }
  setHint(q.type === 'self'
    ? 'Shift+Enter = bestätigen  ·  Enter = neue Zeile  ·  → = weiter'
    : 'Enter = bestätigen  ·  → = weiter');
  setTimeout(() => inp.focus(), 50);
}

/* ── WORTKLICK ───────────────────────────────────────────────── */
function renderWortklick(q) {
  const aw = el('ans-wrap'); if (!aw) return;
  aw.innerHTML = '';

  const sentenceEl = document.createElement('div');
  sentenceEl.style.cssText = 'font-size:1rem;line-height:2;margin-bottom:14px;word-break:break-word;';

  const tokens    = (q.sentence || '').split(/(\s+)/);
  let wordIndex   = 0;

  tokens.forEach(tok => {
    if (/^\s+$/.test(tok)) {
      sentenceEl.appendChild(document.createTextNode(tok));
      return;
    }
    const span = document.createElement('span');
    span.textContent = tok;
    span.className   = 'wort-btn';
    span.setAttribute('data-token', tok);
    span.setAttribute('data-idx',   wordIndex++);
    span.setAttribute('role',       'button');
    span.setAttribute('tabindex',   '0');
    span.setAttribute('aria-label', `Wort: ${tok}`);
    span.style.cssText = 'display:inline-block;cursor:pointer;padding:2px 5px;border-radius:6px;border:1.5px solid transparent;transition:all .15s;font-size:1rem';

    span.addEventListener('mouseenter', function() {
      if (!this.classList.contains('wort-ok') && !this.classList.contains('wort-err')) {
        this.style.background   = '#f0f5fb';
        this.style.borderColor  = 'var(--blue)';
      }
    });
    span.addEventListener('mouseleave', function() {
      if (!this.classList.contains('wort-ok') && !this.classList.contains('wort-err')) {
        this.style.background  = '';
        this.style.borderColor = 'transparent';
      }
    });
    span.addEventListener('click',   () => onWortClick(span, q));
    span.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') onWortClick(span, q); });

    sentenceEl.appendChild(span);
  });

  aw.appendChild(sentenceEl);

  const tippWrap = document.createElement('div');
  tippWrap.id            = 'tipp-wrap';
  tippWrap.style.display = 'none';
  tippWrap.innerHTML =
    '<p id="tipp-label" style="font-weight:700;font-size:.88rem;margin-bottom:7px;color:var(--blue)">Richtige Schreibweise:</p>' +
    '<input type="text" id="tipp-inp" autocomplete="off" autocorrect="off" autocapitalize="off" aria-label="Korrektur eingeben" ' +
    'style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid var(--border);font-family:\'DM Sans\',sans-serif;font-size:1rem;outline:none;" />';
  aw.appendChild(tippWrap);

  const okBtn = el('btn-ok');
  if (okBtn) { okBtn.style.display = ''; okBtn.disabled = true; }
  setHint('Fehlerhaftes Wort antippen → korrigieren → Bestätigen');

  setTimeout(() => {
    const inp = el('tipp-inp');
    if (inp) {
      inp.addEventListener('input', () => {
        const ob = el('btn-ok'); if (ob) ob.disabled = inp.value.trim() === '';
      });
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') doConfirm(); });
    }
  }, 50);
}

function stripPunct(s) { return s.replace(/[.,!?;:„"'"'»«()]/g, '').trim(); }

function onWortClick(span, q) {
  if (AppState.quiz.answered) return;
  const clicked    = span.getAttribute('data-token');
  const errorWord  = q.errorWord || '';
  let isCorrect    = false;

  if (stripPunct(clicked).toLowerCase() === stripPunct(errorWord).toLowerCase()) {
    isCorrect = true;
  }

  if (!isCorrect && errorWord.includes(' ')) {
    const parent      = span.parentNode;
    const spans       = Array.from(parent.querySelectorAll('.wort-btn'));
    const idx         = parseInt(span.getAttribute('data-idx'));
    const errorTokens = errorWord.split(/\s+/);
    const match       = errorTokens.every((et, i) =>
      spans[idx + i] && stripPunct(spans[idx + i].getAttribute('data-token')).toLowerCase() === stripPunct(et).toLowerCase()
    );
    if (match) isCorrect = true;
  }

  if (isCorrect) {
    if (errorWord.includes(' ')) {
      const spans2 = Array.from(span.parentNode.querySelectorAll('.wort-btn'));
      const idx2   = parseInt(span.getAttribute('data-idx'));
      errorWord.split(/\s+/).forEach((et, j) => { if (spans2[idx2 + j]) markWort(spans2[idx2 + j], true); });
    } else {
      markWort(span, true);
    }
    showTippfeld(q, true);
  } else {
    markWort(span, false);
    setTimeout(() => {
      if (!AppState.quiz.answered) {
        span.style.background  = '';
        span.style.borderColor = 'transparent';
        span.classList.remove('wort-err');
      }
    }, 700);
  }
}

function markWort(span, ok) {
  span.style.background  = ok ? '#d4f7e8' : '#fde8e8';
  span.style.borderColor = ok ? 'var(--green)' : 'var(--red)';
  span.classList.add(ok ? 'wort-ok' : 'wort-err');
}

function showTippfeld(q, wordFound) {
  const wrap = el('tipp-wrap');
  if (!wrap || wrap.style.display !== 'none') return;

  const labels = {
    rs:      'Richtige Schreibweise:',
    ausdruck:'Standardsprachlicher Ausdruck:',
    kasus:   'Richtige Form:',
    satzbau: 'Korrektur:',
  };
  const label = el('tipp-label');
  if (label) label.textContent = labels[q.type] || 'Richtige Schreibweise:';

  wrap.style.display   = 'block';
  wrap.style.animation = 'fadeUp .25s ease';

  const inp = el('tipp-inp');
  if (inp) { inp.value = ''; inp.placeholder = ''; setTimeout(() => inp.focus(), 80); }
  const ob = el('btn-ok'); if (ob) ob.disabled = true;
}

function checkWortklick(q) {
  const inp = el('tipp-inp');
  if (!inp) return false;
  const val     = inp.value.trim();
  inp.disabled  = true;

  const accepted = q.acceptedAnswers || [q.correctWord];
  const normalize = s => s.trim().toLowerCase()
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss');
  const v = normalize(val);
  const ok = accepted.some(a => { const an = normalize(a); return v === an || an.includes(v) || v.includes(an); });

  inp.style.background  = ok ? '#edfaf4' : '#fdf0f0';
  inp.style.borderColor = ok ? 'var(--green)' : 'var(--red)';
  return ok;
}

/* ── KOMMA ───────────────────────────────────────────────────── */
function renderKomma(q) {
  const aw = el('ans-wrap'); if (!aw) return;
  aw.innerHTML = '';

  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:.83rem;opacity:.55;margin-bottom:10px;';
  hint.textContent   = 'Tippen Sie auf die Stelle im Satz und setzen Sie das fehlende Komma.';
  aw.appendChild(hint);

  const box = document.createElement('div');
  box.id              = 'komma-box';
  box.contentEditable = 'true';
  box.spellcheck      = false;
  box.autocorrect     = 'off';
  box.setAttribute('aria-label', 'Satz – Komma einfügen');
  box.style.cssText = [
    'width:100%','padding:14px 16px','border-radius:11px',
    'border:2px solid var(--border)','font-family:\'DM Sans\',sans-serif',
    'font-size:1rem','line-height:1.85','color:var(--ink)','background:#fff',
    'outline:none','min-height:56px','word-break:break-word','transition:border-color .15s',
  ].join(';');
  box.textContent = q.sentence || '';

  box.addEventListener('focus', function() { this.style.borderColor = 'var(--blue)'; });
  box.addEventListener('blur',  function() { this.style.borderColor = 'var(--border)'; });
  box.addEventListener('input', function() {
    const txt = this.innerText || this.textContent || '';
    const ob  = el('btn-ok'); if (ob) ob.disabled = !txt.includes(',');
  });
  box.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); doConfirm(); } });

  aw.appendChild(box);
  const ok = el('btn-ok'); if (ok) { ok.style.display = ''; ok.disabled = true; }
  setHint('Stelle anklicken → Komma eintippen → Bestätigen');
  setTimeout(() => box.focus(), 80);
}

function checkKomma(q) {
  const box = el('komma-box'); if (!box) return false;
  const userText = (box.innerText || box.textContent || '').trim();
  box.contentEditable = 'false';

  const normComma = s => s.replace(/\s*,\s*/g, ',').replace(/\s+/g, ' ').trim();
  const sentence  = q.sentence || '';
  const positions = q.correctPositions || [];
  let expected    = sentence;
  let offset      = 0;
  positions.forEach(pos => {
    expected = expected.slice(0, pos + offset) + ',' + expected.slice(pos + offset);
    offset++;
  });

  const ok = normComma(userText) === normComma(expected);
  box.style.background  = ok ? '#edfaf4' : '#fdf0f0';
  box.style.borderColor = ok ? 'var(--green)' : 'var(--red)';

  if (!ok) {
    const hint = document.createElement('div');
    hint.style.cssText = 'margin-top:10px;padding:10px 14px;border-radius:10px;background:#e8f4ff;border:1.5px solid var(--blue);font-size:.88rem;color:var(--ink);';
    hint.innerHTML = `<strong style="color:var(--blue)">✓ Lösung:</strong> ${q.model || expected}`;
    box.insertAdjacentElement('afterend', hint);
  }
  return ok;
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ-FLOW
   ═══════════════════════════════════════════════════════════════ */
function doConfirm() {
  const q   = AppState.quiz;
  if (q.answered) return;
  const cur = q.qs[q.idx];

  if (cur.type === 'komma') {
    q.answered = true;
    const ok2 = checkKomma(cur);
    flash(ok2); showFB(ok2, cur);
    q.answers.push({ ok: ok2, q: cur.sentence || cur.sub });
    hideActRow(); showNext(); return;
  }

  if (['rs','ausdruck','kasus','satzbau'].includes(cur.type)) {
    const inp = el('tipp-inp');
    if (!inp || inp.value.trim() === '') return;
    q.answered = true;
    const ok2 = checkWortklick(cur);
    flash(ok2); showFB(ok2, cur);
    q.answers.push({ ok: ok2, q: cur.sentence || cur.sub });
    hideActRow(); showNext(); return;
  }

  if (cur.type === 'match') {
    q.answered = true;
    const ok2 = checkMatch(cur);
    flash(ok2); showFB(ok2, cur);
    q.answers.push({ ok: ok2, q: cur.q });
    hideActRow(); showNext(); return;
  }

  if (cur.type === 'cross') {
    q.answered = true;
    const ok2 = checkCross(cur);
    flash(ok2); showFB(ok2, cur);
    q.answers.push({ ok: ok2, q: (cur.q || '').split('\n')[0] });
    hideActRow(); showNext(); return;
  }

  const inp = el('main-inp');
  if (!inp || inp.value.trim() === '') return;
  q.answered  = true;
  inp.disabled = true;

  if (cur.type === 'self') {
    showModel(cur);
  } else {
    const res = autoCheck(cur, inp.value.trim());
    inp.classList.add(res ? 'ok' : 'err');
    flash(res); showFB(res, cur);
    q.answers.push({ ok: res, q: (cur.q || '').split('\n')[0] });
    hideActRow(); showNext();
  }
}

function showModel(q) {
  const aw = el('ans-wrap'); if (!aw) return;
  const mb = document.createElement('div'); mb.className = 'model-box';
  mb.innerHTML = '<strong>Musterlösung</strong>' + (q.model || '').replace(/\n/g, '<br/>');
  aw.appendChild(mb);

  const sa   = document.createElement('div'); sa.className = 'sa-row';
  const yes  = document.createElement('button'); yes.className = 'sa-btn sa-yes'; yes.textContent = '✓ Richtig';
  const no   = document.createElement('button'); no.className  = 'sa-btn sa-no';  no.textContent  = '✗ Falsch';
  yes.addEventListener('click', () => doSelf(true));
  no.addEventListener('click',  () => doSelf(false));
  sa.appendChild(yes); sa.appendChild(no);
  aw.appendChild(sa);
  hideActRow();
}

function doSelf(ok) {
  document.querySelectorAll('.sa-btn').forEach(b => { b.disabled = true; });
  const q = AppState.quiz;
  const cur = q.qs[q.idx];
  q.answers.push({ ok, q: (cur.q || '').split('\n')[0] });
  flash(ok); showFB(ok, cur); showNext();
}

function flash(ok) {
  const c = el('q-card'); if (!c) return;
  c.classList.remove('flash-g', 'flash-r');
  void c.offsetWidth; // Reflow um Animation neu zu starten
  c.classList.add(ok ? 'flash-g' : 'flash-r');
}

function showFB(ok, q) {
  const fb = el('fb'); if (!fb) return;
  fb.className = `fb ${ok ? 'ok' : 'err'}`;
  let html = `<strong>${ok ? '✓ Richtig!' : '✗ Leider falsch.'}</strong>`;
  if (!ok && q.model) html += `<br><span style="opacity:.8">${(q.model || '').split('\n')[0]}</span>`;
  fb.innerHTML      = html;
  fb.style.display  = 'block';

  const rd = el('rule-desktop');
  if (rd) rd.innerHTML = q.rule
    ? `<div class="rule-text">${q.rule}</div>`
    : '<span class="rule-empty">Keine Regel verfügbar.</span>';
}

function showNext() {
  const nb    = el('btn-next');
  const sh    = el('swipe-hint');
  const q     = AppState.quiz;
  const isLast = q.idx + 1 >= q.qs.length;
  if (nb) { nb.style.display = 'block'; nb.textContent = isLast ? 'Auswertung →' : 'Weiter →'; }
  if (sh && !isLast) sh.style.display = 'block';
  const ab = el('btn-abort'); if (ab) ab.style.display = 'block';
}

function setHint(txt) { const h = el('kbd-hint'); if (h) h.textContent = txt; }

function hideActRow() {
  const ar = el('act-row'); if (ar) ar.style.display = 'none';
  const ab = el('btn-abort'); if (ab) ab.style.display = 'block';
}

function doNext() {
  const q = AppState.quiz;
  q.idx++;
  if (q.idx >= q.qs.length) { showResult(); return; }
  const card = el('q-card'); if (!card) return;
  card.classList.add('sw-out');
  setTimeout(() => {
    card.classList.remove('sw-out');
    renderQ();
    card.classList.add('sw-in');
    setTimeout(() => card.classList.remove('sw-in'), 260);
  }, 260);
}

/* ═══════════════════════════════════════════════════════════════
   ERGEBNIS
   ═══════════════════════════════════════════════════════════════ */
function showResult(aborted) {
  const q       = AppState.quiz;
  const okCount = q.answers.filter(a => a.ok).length;
  const tot     = q.answers.length;
  if (tot === 0) return;
  const pct     = Math.round(okCount / tot * 100);

  const theme    = findTheme(q.themeId, AppState.currentArea);
  const totalQs  = theme ? theme.qs.length : tot;
  const isIncomplete = aborted && tot < totalQs;

  Storage.saveScore(q.themeId, okCount, tot);
  // Kalender-Cache invalidieren damit die neue Übung sofort erscheint
  AppState.calendarCacheKey = null;

  const badgeWrap = el('incomplete-badge-wrap');
  if (badgeWrap) {
    badgeWrap.innerHTML = isIncomplete
      ? `<span class="incomplete-badge">⚠️ ${tot} von ${totalQs} Aufgaben gemacht</span>` : '';
  }

  const contBtn = el('btn-continue');
  if (contBtn) {
    const remaining = q.savedQs ? q.savedQs.length - q.savedIdx : 0;
    contBtn.style.display = isIncomplete && remaining > 0 ? 'inline-flex' : 'none';
    contBtn.textContent   = `▶ Weitermachen (${remaining} übrig)`;
  }

  const col  = scCol(pct);
  const ring = el('res-ring');
  if (ring)  { ring.style.borderColor = col; ring.style.color = col; }
  setText('res-pct',   `${pct}%`);
  setText('res-title', pct >= 90 ? '🎉 Ausgezeichnet!' : pct >= 70 ? '👍 Gut gemacht!' : pct >= 50 ? '📚 Weiter üben' : '💪 Nicht aufgeben!');

  let subText = `${okCount} von ${tot} Aufgaben richtig`;
  if (isIncomplete) subText += ` · ${tot} von ${totalQs} gemacht`;
  setText('res-sub',  subText);
  setText('res-frac', `${okCount}/${tot}`);

  const burst = el('perfect-burst');
  if (burst) {
    if (pct === 100) {
      burst.style.cssText = 'display:block;font-size:2.5rem;text-align:center;line-height:130px;border-radius:50%';
      burst.classList.add('burst-active');
      burst.innerHTML = '🎉';
    } else {
      burst.style.display = 'none';
      burst.classList.remove('burst-active');
    }
  }

  const fragment = document.createDocumentFragment();
  q.answers.forEach(a => {
    const item = document.createElement('div'); item.className = 'res-item';
    const icon = document.createElement('span'); icon.style.color = a.ok ? '#2d9e6a' : '#d94f4f'; icon.textContent = a.ok ? '✓' : '✗';
    const txt  = document.createElement('span'); txt.style.opacity = '.75';
    txt.textContent = a.q.length > 60 ? a.q.slice(0, 60) + '…' : a.q;
    item.appendChild(icon); item.appendChild(txt);
    fragment.appendChild(item);
  });
  const resList = el('res-list');
  if (resList) { resList.innerHTML = ''; resList.appendChild(fragment); }
  showPage('result');
}

/* ═══════════════════════════════════════════════════════════════
   REGEL-SHEET
   ═══════════════════════════════════════════════════════════════ */
function openSheet() {
  const q = AppState.quiz;
  const cur = q.qs && q.qs[q.idx];
  if (!cur) return;
  const content = el('rule-sheet-content');
  if (content) content.innerHTML = cur.rule || '<em>Keine Regel verfügbar.</em>';
  el('overlay')?.classList.add('open');
  el('sheet')?.classList.add('open');
}

function closeSheet() {
  el('overlay')?.classList.remove('open');
  el('sheet')?.classList.remove('open');
}
