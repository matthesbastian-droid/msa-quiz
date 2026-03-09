/**
 * main.js – Initialisierung, Zustand (AppState), Navigation
 * Deutsch Quiz – MSA & BBR
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════
   KONSTANTEN
   ═══════════════════════════════════════════════════════════════ */

/** Farbskala für Score-Prozente – zentrale Konstante */
const SCORE_COLORS = [
  { min: 0,  max: 60,  color: '#ef4444' },
  { min: 60, max: 80,  color: '#f97316' },
  { min: 80, max: 90,  color: '#eab308' },
  { min: 90, max: 95,  color: '#4ade80' },
  { min: 95, max: 101, color: '#16a34a' },
];

const DEV_MODE = false; // auf true setzen für console-Ausgaben

/* ═══════════════════════════════════════════════════════════════
   ZENTRALER ANWENDUNGS-STATE
   ═══════════════════════════════════════════════════════════════ */
const AppState = {
  /** Quiz-State */
  quiz: {
    themeId:   null,
    qs:        [],
    idx:       0,
    answers:   [],
    answered:  false,
    savedQs:   null,
    savedIdx:  0,
  },

  /** Navigations-State */
  currentArea:   'msa',
  currentTab:    'aufgaben',
  gramFromArea:  'msa',
  pendingThemeId: null,

  /** Kalender-Cache (wird bei Änderungen invalidiert) */
  calendarCacheKey: null,
};

/* Rückwärtskompatibilität: S & Co. als Proxy auf AppState.quiz */
Object.defineProperty(window, 'S', {
  get: () => AppState.quiz,
  set: (v) => { Object.assign(AppState.quiz, v); },
});

/* ═══════════════════════════════════════════════════════════════
   HILFSFUNKTIONEN
   ═══════════════════════════════════════════════════════════════ */

/** Gibt die Score-Farbe für einen Prozentwert zurück */
function scCol(p) {
  if (p === undefined || p === null) return '#d1d5db';
  for (const range of SCORE_COLORS) {
    if (p >= range.min && p < range.max) return range.color;
  }
  return '#16a34a';
}

/** Normalisiert einen String für den Vergleich */
function norm(s) {
  return s.toLowerCase().trim()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
}

/** Stem-basierter Vergleich zweier Strings */
function stemMatch(a, b) {
  const na = norm(a), nb = norm(b);
  if (na === nb) return true;
  const ml = Math.min(na.length, nb.length);
  if (ml >= 4) {
    const sh = na.length <= nb.length ? na : nb;
    const lo = na.length >  nb.length ? na : nb;
    if (lo.indexOf(sh) === 0) return true;
  }
  return false;
}

/** Prüft automatisch eine Alternativantwort */
function autoCheck(q, inp) {
  if (q.type === 'alt') {
    return q.a.some(a => stemMatch(a, inp));
  }
  return false;
}

/** Formatiert einen Timestamp als lesbares Datum (de-DE) */
function fmtDate(ts) {
  if (!ts) return '—';
  const d    = new Date(ts);
  const now  = new Date();
  const diff = Math.floor((now - d) / 86400000);
  if (diff === 0) return 'heute';
  if (diff === 1) return 'gestern';
  if (diff < 7)  return `vor ${diff} Tagen`;
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'short' });
}

/** Sicheres console.log – nur im DEV_MODE */
function devLog(...args) {
  if (DEV_MODE) console.log(...args);
}
function devWarn(...args) {
  if (DEV_MODE) console.warn(...args);
}

/** Prüft, ob ein DOM-Element existiert */
function el(id) {
  return document.getElementById(id);
}

/** Setzt Text eines Elements, sofern es existiert */
function setText(id, text) {
  const e = el(id);
  if (e) e.textContent = text;
}

/* ═══════════════════════════════════════════════════════════════
   SEITENNAVIGATION
   ═══════════════════════════════════════════════════════════════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = el('pg-' + id);
  if (target) {
    target.classList.add('active');
  } else {
    devWarn('showPage: Seite nicht gefunden:', id);
  }
  window.scrollTo(0, 0);
}

function goStart() {
  renderStart();
  showPage('start');
}

function openArea(area) {
  AppState.currentArea = area;
  renderArea(area);
  switchAreaTab(area, 'aufgaben');
  showPage(area);
}

function goBackFromStat() {
  renderArea(AppState.currentArea);
  switchAreaTab(AppState.currentArea, AppState.currentTab);
  showPage(AppState.currentArea);
}

function goBackFromQuiz() {
  renderArea(AppState.currentArea);
  switchAreaTab(AppState.currentArea, AppState.currentTab);
  showPage(AppState.currentArea);
}

function goBackFromResult() {
  renderArea(AppState.currentArea);
  switchAreaTab(AppState.currentArea, AppState.currentTab);
  showPage(AppState.currentArea);
}

function goBackFromGram() {
  renderArea(AppState.gramFromArea);
  switchAreaTab(AppState.gramFromArea, AppState.currentTab);
  showPage(AppState.gramFromArea);
}

/* ═══════════════════════════════════════════════════════════════
   STARTSEITE
   ═══════════════════════════════════════════════════════════════ */
function renderStart() {
  const s  = Storage.load();
  const lp = s._lastPracticed;
  const lpEl  = el('last-practiced-home');
  const lpTxt = el('last-practiced-text');

  if (lpEl) lpEl.style.display = lp ? 'flex' : 'none';
  if (lpTxt && lp) lpTxt.textContent = 'Zuletzt geübt: ' + fmtDate(lp);

  setText('msa-home-stats', '');
  setText('bbr-home-stats', '');
  Kalender.render();
}

/* ═══════════════════════════════════════════════════════════════
   SKRIPT-FEHLER-ÜBERWACHUNG
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('error', (evt) => {
  if (evt.filename && evt.filename.endsWith('.js')) {
    devWarn('Skript-Ladefehler:', evt.filename, evt.message);
    // Toast anzeigen, damit Nutzer informiert wird
    showToast(`⚠ Datei konnte nicht geladen werden: ${evt.filename.split('/').pop()}`, 'err', 5000);
  }
}, true);

/* ═══════════════════════════════════════════════════════════════
   INITIALISIERUNG
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  renderStart();
  // Keyboard-Events registrieren
  InputHandler.init();
  // Swipe- & Touch-Events registrieren
  Swipe.init();
});
