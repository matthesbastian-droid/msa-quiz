/**
 * update.js – Vollständiger Update-Mechanismus
 *
 * Was dieser Button jetzt tut:
 *  1. Alle Daten-JS-Dateien neu laden (Fragen, Regeln, Themen)
 *  2. Alle fehlenden MSA- und BBR-Moduldateien ergänzt
 *  3. style.css neu laden (ohne Seiten-Reload, via <link> tauschen)
 *  4. index.html auf Änderungen prüfen → bei Änderung automatisch
 *     einen sauberen Seiten-Reload auslösen (nur dann!)
 *  5. Logik-Skripte (main.js, quiz-logik.js, …) werden NICHT
 *     neu geladen – das würde den laufenden App-Zustand zerstören.
 *     Änderungen daran erfordern einen manuellen Reload.
 */

'use strict';

/* ─── Alle Datendateien (vollständig) ───────────────────────── */
const UPDATE_SCRIPTS = [
  // Regeln
  'regeln.js',
  'regeln-bbr.js',

  // MSA Hauptaufgaben
  'msa-aufgaben.js',
  'msa-ueberarbeitung.js',

  // MSA Extra-Module
  'msa-extra-grossschreibung.js',
  'msa-extra-komma.js',
  'msa-extra-indirekte-rede.js',
  'msa-extra-passiv.js',
  'msa-extra-satzglieder.js',
  'msa-extra-slaut.js',
  'msa-extra-wortarten.js',
  'msa-extra-getrennt.js',
  'msa-extra-satzbau.js',
  'msa-extra-stilmittel.js',
  'msa-extra-zeitformen.js',

  // BBR Hauptaufgaben
  'bbr-aufgaben.js',

  // BBR Extra-Module
  'bbr-rechtschreibung.js',
  'bbr-extra-wieder.js',
  'bbr-extra-getrennt.js',
  'bbr-extra-wortarten.js',
  'bbr-extra-großschreibung.js',
  'bbr-extra-komma.js',
  'bbr-extra-satzbau.js',
  'bbr-extra-zeitformen.js',
  'bbr-extra-faelle.js',
  'bbr-extra-passiv.js',
  'bbr-extra-worttrennung.js',
];

/* MSA-Module, die window.MSA_EXTRA_THEMES befüllen */
const MSA_MODULE_SCRIPTS = [
  'msa-extra-grossschreibung.js',
  'msa-extra-komma.js',
  'msa-extra-indirekte-rede.js',
  'msa-extra-passiv.js',
  'msa-extra-satzglieder.js',
  'msa-extra-slaut.js',
  'msa-extra-wortarten.js',
  'msa-extra-getrennt.js',
  'msa-extra-satzbau.js',
  'msa-extra-stilmittel.js',
  'msa-extra-zeitformen.js',
];

/* BBR-Module, die window.BBR_EXTRA_THEMES befüllen */
const BBR_MODULE_SCRIPTS = [
  'bbr-rechtschreibung.js',
  'bbr-extra-wieder.js',
  'bbr-extra-getrennt.js',
  'bbr-extra-wortarten.js',
  'bbr-extra-großschreibung.js',
  'bbr-extra-komma.js',
  'bbr-extra-satzbau.js',
  'bbr-extra-zeitformen.js',
  'bbr-extra-faelle.js',
  'bbr-extra-passiv.js',
  'bbr-extra-worttrennung.js',
];

/* ─── Toast ─────────────────────────────────────────────────── */
function showToast(msg, type, duration) {
  const t = el('update-toast');
  if (!t) return;
  t.textContent = msg;
  t.className   = 'update-toast ' + (type || '');
  if (type === 'ok')  t.innerHTML = '✓ ' + msg;
  if (type === 'err') t.innerHTML = '⚠ ' + msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duration || 3000);
}

/* ─── Update-Button-State ───────────────────────────────────── */
function setUpdateBtn(state) {
  const btn   = el('update-btn');
  const icon  = el('update-btn-icon');
  const label = el('update-btn-label');
  if (!btn || !icon || !label) return;

  btn.className = 'update-btn';
  switch (state) {
    case 'loading':
      btn.classList.add('loading');
      icon.innerHTML    = '<span class="update-spin">↻</span>';
      label.textContent = 'Lädt …';
      break;
    case 'success':
      btn.classList.add('success');
      icon.textContent  = '✓';
      label.textContent = 'Aktuell!';
      setTimeout(() => setUpdateBtn('idle'), 3000);
      break;
    case 'error':
      btn.classList.add('error');
      icon.textContent  = '⚠';
      label.textContent = 'Fehler';
      setTimeout(() => setUpdateBtn('idle'), 5000);
      break;
    default:
      icon.textContent  = '↻';
      label.textContent = 'Update';
  }
}

/* ─── CSS neu laden (ohne Seiten-Reload) ────────────────────── */
function reloadCSS(ts) {
  const existing = document.querySelector('link[rel="stylesheet"][href^="style.css"]');
  if (!existing) return;
  const fresh = document.createElement('link');
  fresh.rel  = 'stylesheet';
  fresh.href = `style.css?v=${ts}`;
  fresh.onload = () => existing.remove();
  document.head.appendChild(fresh);
}

/* ─── HTML auf Änderungen prüfen → ggf. Seiten-Reload ──────── */
async function checkHTMLAndReloadIfChanged(ts) {
  try {
    const res = await fetch(`index.html?v=${ts}`, { cache: 'no-store' });
    if (!res.ok) return false;
    const freshHTML = await res.text();

    // Einfacher Größen-/Hash-Vergleich: normalisierter Text ohne Whitespace
    const normalize = str => str.replace(/\s+/g, ' ').trim();
    const current   = normalize(document.documentElement.outerHTML);
    const incoming  = normalize(freshHTML);

    if (current !== incoming) {
      showToast('Neue Seitenstruktur gefunden – Seite wird neu geladen …', '', 2500);
      setTimeout(() => location.reload(true), 2600);
      return true; // Reload eingeleitet
    }
  } catch (e) {
    devWarn('HTML-Prüfung fehlgeschlagen:', e);
  }
  return false;
}

/* ─── Hauptfunktion ─────────────────────────────────────────── */
async function doUpdate() {
  setUpdateBtn('loading');
  showToast('Neue Inhalte werden geladen …', '', 30000);

  const ts            = Date.now();
  const scripts       = UPDATE_SCRIPTS.slice();
  const failed        = [];
  const msaSnapshots  = [];
  const bbrSnapshots  = [];

  /* CSS sofort im Hintergrund aktualisieren */
  reloadCSS(ts);

  /* HTML prüfen – falls Reload nötig, bricht das hier ab */
  const reloadPending = await checkHTMLAndReloadIfChanged(ts);
  if (reloadPending) return;

  /* Themes zusammenführen und Duplikate entfernen */
  function mergeThemes(snapshots, globalKey) {
    if (snapshots.length === 0) return;
    const all  = snapshots.flat();
    const seen = {};
    window[globalKey] = all.filter(t => {
      if (!t || !t.id || seen[t.id]) return false;
      seen[t.id] = true;
      return true;
    });
  }

  function loadNext() {
    if (scripts.length === 0) {
      mergeThemes(msaSnapshots, 'MSA_EXTRA_THEMES');
      mergeThemes(bbrSnapshots, 'BBR_EXTRA_THEMES');

      if (failed.length > 0) {
        setUpdateBtn('error');
        showToast(
          `${failed.length} Datei(en) konnten nicht geladen werden. ` +
          'Prüfe die Verbindung und versuche es erneut.',
          'err', 6000
        );
        devWarn('Update fehlgeschlagen für:', failed);
        return;
      }

      setUpdateBtn('success');
      showToast('Alle Inhalte aktualisiert!', 'ok', 2500);

      // Kalender-Cache invalidieren und Startseite neu rendern
      if (typeof AppState !== 'undefined') AppState.calendarCacheKey = null;
      if (typeof renderStart === 'function') renderStart();
      if (typeof showPage   === 'function') showPage('start');
      return;
    }

    const src = scripts.shift();
    const url = `${src}?v=${ts}`;

    // Altes Skript-Element entfernen, um Browser-Caching zu umgehen
    document.querySelectorAll(`script[src^="${src}"]`).forEach(s => s.remove());

    const s      = document.createElement('script');
    s.onload = () => {
      if (MSA_MODULE_SCRIPTS.includes(src) && typeof window.MSA_EXTRA_THEMES !== 'undefined') {
        msaSnapshots.push(window.MSA_EXTRA_THEMES.slice());
      }
      if (BBR_MODULE_SCRIPTS.includes(src) && typeof window.BBR_EXTRA_THEMES !== 'undefined') {
        bbrSnapshots.push(window.BBR_EXTRA_THEMES.slice());
      }
      loadNext();
    };
    s.onerror = () => {
      devWarn('Update fehlgeschlagen für', src);
      failed.push(src);
      loadNext();
    };
    s.src = url;
    document.head.appendChild(s);
  }

  loadNext();
}
