/**
 * storage.js – Sicherer localStorage-Wrapper
 * Alle Zugriffe sind mit try/catch abgesichert.
 */

'use strict';

const Storage = (() => {
  const KEY = 'msa_s';

  /** Lädt den gesamten Score-Datensatz */
  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '{}');
    } catch (e) {
      devWarn('Storage.load Fehler:', e);
      return {};
    }
  }

  /** Speichert den gesamten Score-Datensatz */
  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      devWarn('Storage.save Fehler (localStorage voll?):', e);
      showToast('⚠ Speicher voll – Daten konnten nicht gespeichert werden.', 'err', 4000);
    }
  }

  /** Speichert das Ergebnis eines Quiz-Durchlaufs */
  function saveScore(id, ok, tot) {
    const s    = load();
    const pct  = Math.round(ok / tot * 100);
    const prev = s[id] || {};

    s[id] = {
      pct,
      ok,
      tot,
      prev: prev.pct !== undefined
        ? { pct: prev.pct, ok: prev.ok, tot: prev.tot, ts: prev.ts }
        : null,
      ts: Date.now(),
    };

    s._lastPracticed = Date.now();
    Kalender.markToday(s);
    save(s);
  }

  return { load, save, saveScore };
})();

/* Rückwärtskompatibilität – bisherige Funktionsnamen beibehalten */
function sc()          { return Storage.load(); }
function saveAll(data) { Storage.save(data); }
function saveSc(id, ok, tot) { Storage.saveScore(id, ok, tot); }
