/**
 * update.js – Update-Mechanismus für externe JS-Dateien
 * Lädt Skripte nacheinander, sammelt Fehler und zeigt Fallback-UI.
 */

'use strict';

const UPDATE_SCRIPTS = [
  'regeln.js',
  'regeln-bbr.js',
  'msa-aufgaben.js',
  'bbr-aufgaben.js',
  'msa-extra-aufgaben.js',
  'msa-ueberarbeitung.js',
  'bbr-extra-aufgaben.js',
  'bbr-rechtschreibung.js',
  'bbr-extra-wieder.js',
  'bbr-extra-getrennt.js',
  'bbr-extra-wortarten.js',
  'bbr-extra-großschreibung.js',
  'bbr-extra-komma.js',
];

const BBR_MODULE_SCRIPTS = [
  'bbr-extra-aufgaben.js', 'bbr-rechtschreibung.js', 'bbr-extra-wieder.js',
  'bbr-extra-getrennt.js', 'bbr-extra-wortarten.js', 'bbr-extra-großschreibung.js',
  'bbr-extra-komma.js',
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
      icon.innerHTML = '<span class="update-spin">↻</span>';
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
      // "Wiederholen"-Schaltfläche im Toast
      setTimeout(() => setUpdateBtn('idle'), 5000);
      break;
    default:
      icon.textContent  = '↻';
      label.textContent = 'Update';
  }
}

/* ─── Hauptfunktion ─────────────────────────────────────────── */
function doUpdate() {
  setUpdateBtn('loading');
  showToast('Neue Inhalte werden geladen …', '', 30000);

  const ts           = Date.now();
  const scripts      = UPDATE_SCRIPTS.slice();
  const failed       = [];
  const bbrSnapshots = [];

  function mergeBBR() {
    if (bbrSnapshots.length === 0) return;
    const all  = bbrSnapshots.flat();
    const seen = {};
    window.BBR_EXTRA_THEMES = all.filter(t => {
      if (seen[t.id]) return false;
      seen[t.id] = true;
      return true;
    });
  }

  function loadNext() {
    if (scripts.length === 0) {
      mergeBBR();
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
      showToast('Inhalte aktualisiert!', 'ok', 2500);
      // Kalender-Cache invalidieren
      AppState.calendarCacheKey = null;
      renderStart();
      showPage('start');
      return;
    }

    const src = scripts.shift();
    const url = `${src}?v=${ts}`;

    // Altes Skript-Element entfernen, um Caching zu umgehen
    const existing = document.querySelector(`script[src^="${src}"]`);
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.onload = () => {
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
