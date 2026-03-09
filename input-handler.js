/**
 * input-handler.js – Tastatur- und Swipe-Steuerung
 * Zentrales Modul für alle Eingabe-Events.
 * Kein inline-onclick – alles per addEventListener.
 */

'use strict';

/* ─── Keyboard-Handler ──────────────────────────────────────── */
const InputHandler = (() => {
  let initialized = false;

  function onKeyDown(e) {
    const pg = el('pg-quiz');
    if (!pg || !pg.classList.contains('active')) return;

    const q   = AppState.quiz;
    const cur = q.qs && q.qs[q.idx];

    if (!q.answered) {
      // MC: A–D Buchstaben
      if (cur && cur.type === 'mc') {
        const map = { a: 0, b: 1, c: 2, d: 3 };
        const k   = e.key.toLowerCase();
        if (map[k] !== undefined && map[k] < cur.o.length) {
          selectMC(map[k]); return;
        }
      }
      // Enter = Bestätigen
      if (e.key === 'Enter') {
        const ok = el('btn-ok');
        if (ok && !ok.disabled && ok.style.display !== 'none') doConfirm();
      }
    } else {
      // Pfeil-rechts / Leertaste = Weiter
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        const nb = el('btn-next');
        if (nb && nb.style.display !== 'none') doNext();
      }
    }
  }

  function init() {
    if (initialized) return;
    initialized = true;
    document.addEventListener('keydown', onKeyDown);
  }

  return { init };
})();

/* ─── Swipe-Handler ─────────────────────────────────────────── */
const Swipe = (() => {
  let txS = 0, tyS = 0;
  let swipeThrottled = false; // Entprellungs-Flag

  function init() {
    const quizPage = el('pg-quiz');
    if (!quizPage) return;

    quizPage.addEventListener('touchstart', e => {
      txS = e.touches[0].clientX;
      tyS = e.touches[0].clientY;
    }, { passive: true });

    quizPage.addEventListener('touchend', e => {
      if (!AppState.quiz.answered) return;
      if (swipeThrottled) return;

      const dx = txS - e.changedTouches[0].clientX;
      const dy = Math.abs(tyS - e.changedTouches[0].clientY);
      if (dx > 55 && dy < 50) {
        swipeThrottled = true;
        doNext();
        setTimeout(() => { swipeThrottled = false; }, 400);
      }
    }, { passive: true });

    // Sheet-Swipe (nach unten schließen)
    const sheet = el('sheet');
    if (sheet) {
      let shY = 0;
      sheet.addEventListener('touchstart', e => { shY = e.touches[0].clientY; }, { passive: true });
      sheet.addEventListener('touchend',   e => { if (e.changedTouches[0].clientY - shY > 60) closeSheet(); }, { passive: true });
    }
  }

  return { init };
})();

/* ─── Grammatik ─────────────────────────────────────────────── */
function getGramSections() {
  return AppState.currentArea === 'msa'
    ? (typeof GRAM_SECTIONS     !== 'undefined' ? GRAM_SECTIONS     : [])
    : (typeof GRAM_SECTIONS_BBR !== 'undefined' ? GRAM_SECTIONS_BBR : []);
}

function renderGramNavInArea(area) {
  const navId = area === 'msa' ? 'gram-nav-msa' : 'gram-nav-bbr';
  const navEl = el(navId);
  if (!navEl) return;

  const sections = area === 'msa'
    ? (typeof GRAM_SECTIONS     !== 'undefined' ? GRAM_SECTIONS     : [])
    : (typeof GRAM_SECTIONS_BBR !== 'undefined' ? GRAM_SECTIONS_BBR : []);

  const fragment = document.createDocumentFragment();
  sections.forEach(s => {
    const btn = document.createElement('button');
    btn.className   = 'gram-nav-btn';
    btn.textContent = s.label;
    btn.addEventListener('click', () => openGramPage(s.id, area));
    fragment.appendChild(btn);
  });

  navEl.innerHTML = '';
  navEl.appendChild(fragment);
}

function openGramPage(sectionId, fromArea) {
  AppState.gramFromArea = fromArea || AppState.currentArea;
  setText('gram-hdr-m', AppState.gramFromArea.toUpperCase());
  renderGramPage(sectionId);
  showPage('gram');
}

function renderGramPage(activeSectionId) {
  const sections = getGramSections();
  const navEl    = el('gram-nav-page');
  if (!navEl) return;

  const navFragment = document.createDocumentFragment();
  sections.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'gram-nav-btn' + (s.id === activeSectionId ? ' active' : '');
    btn.textContent = s.label;
    btn.addEventListener('click', () => { renderGramPage(s.id); updateGramNav(s.id); });
    navFragment.appendChild(btn);
  });
  navEl.innerHTML = '';
  navEl.appendChild(navFragment);

  const section = sections.find(s => s.id === activeSectionId);
  const content = el('gram-content');
  if (!content) return;
  if (!section) { content.innerHTML = ''; return; }

  let html = `<div class="gram-section"><div class="gram-section-title" style="color:${section.color}">${section.label}</div>`;
  section.cards.forEach(card => {
    html +=
      `<div class="gram-card">` +
      `<div class="gram-card-title">${card.title}` +
      `<span class="gram-badge" style="background:${card.badgeColor};color:#fff">${card.badge}</span></div>` +
      card.content + `</div>`;
  });
  html += '</div>';
  content.innerHTML = html;

  content.querySelectorAll('.gram-card').forEach((c, i) => {
    c.style.opacity   = 0;
    c.style.transform = 'translateY(10px)';
    setTimeout(() => {
      c.style.transition = 'opacity .3s, transform .3s';
      c.style.opacity    = 1;
      c.style.transform  = 'none';
    }, i * 60);
  });
}

function updateGramNav(activeId) {
  const sections = getGramSections();
  document.querySelectorAll('#gram-nav-page .gram-nav-btn').forEach((btn, i) => {
    btn.classList.toggle('active', sections[i] && sections[i].id === activeId);
  });
}

function gramSearch(val) {
  const sections = getGramSections();
  if (!val.trim()) {
    if (sections.length > 0) renderGramPage(sections[0].id);
    return;
  }
  const q       = val.toLowerCase();
  const content = el('gram-content');
  if (!content) return;

  let html = '';
  sections.forEach(section => {
    section.cards.forEach(card => {
      const match =
        card.title.toLowerCase().includes(q) ||
        card.content.toLowerCase().includes(q) ||
        section.label.toLowerCase().includes(q);
      if (match) {
        html +=
          `<div class="gram-card">` +
          `<div class="gram-card-title">${card.title}` +
          ` <span style="font-size:.72rem;opacity:.4">${section.label}</span>` +
          `<span class="gram-badge" style="background:${card.badgeColor};color:#fff">${card.badge}</span></div>` +
          card.content + `</div>`;
      }
    });
  });
  content.innerHTML = html ||
    `<p style="opacity:.4;text-align:center;padding:30px">Keine Ergebnisse für "${val}"</p>`;
}
