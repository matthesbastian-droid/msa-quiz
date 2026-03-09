/**
 * kalender.js – Übungskalender-Modul
 * Verantwortlich für Rendering, Streak-Berechnung und
 * das Markieren von Übungstagen.
 */

'use strict';

const Kalender = (() => {
  const MONTH_NAMES = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
  ];

  /** YYYY-MM-DD für einen Timestamp */
  function dayKey(ts) {
    const d   = new Date(ts);
    const y   = d.getFullYear();
    const m   = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  /** Trägt den heutigen Tag in storageObj._practicedDays ein */
  function markToday(storageObj) {
    const key = dayKey(Date.now());
    const days = storageObj._practicedDays || {};
    days[key] = true;
    storageObj._practicedDays = days;
  }

  /** Gibt die Menge der geübten Tage zurück */
  function getPracticedDays() {
    return Storage.load()._practicedDays || {};
  }

  /** Berechnet die aktuelle Streak */
  function calcStreak(practicedDays) {
    let streak = 0;
    const d = new Date();
    while (true) {
      const key = dayKey(d.getTime());
      if (practicedDays[key]) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  /** Rendert den Kalender – mit einfachem Cache */
  function render() {
    const practicedDays = getPracticedDays();
    const cacheKey = JSON.stringify(practicedDays) + new Date().toDateString();

    // Nur neu rendern, wenn sich etwas geändert hat
    if (AppState.calendarCacheKey === cacheKey) return;
    AppState.calendarCacheKey = cacheKey;

    const now   = new Date();
    const year  = now.getFullYear();
    const month = now.getMonth();

    const monthLabel = el('cal-month-label');
    if (monthLabel) monthLabel.textContent = `${MONTH_NAMES[month]} ${year}`;

    const streak   = calcStreak(practicedDays);
    const streakEl = el('cal-streak');
    if (streakEl) {
      streakEl.style.display = streak >= 2 ? 'flex' : 'none';
      setText('cal-streak-text', `${streak} Tage in Folge`);
    }

    const grid = el('cal-grid');
    if (!grid) return;

    // Wochentag-Header aufbauen (ohne innerHTML-Schleife)
    const fragment = document.createDocumentFragment();
    ['Mo','Di','Mi','Do','Fr','Sa','So'].forEach(dow => {
      const div = document.createElement('div');
      div.className = 'cal-dow';
      div.textContent = dow;
      fragment.appendChild(div);
    });

    const firstDay  = new Date(year, month, 1);
    const startDow  = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayStr  = dayKey(now.getTime());

    // Leerzellen vor dem 1.
    for (let i = 0; i < startDow; i++) {
      const div = document.createElement('div');
      div.className = 'cal-day';
      fragment.appendChild(div);
    }

    // Tage
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj  = new Date(year, month, d);
      const key      = dayKey(dateObj.getTime());
      const isToday  = key === todayStr;
      const isFuture = dateObj > now && key !== todayStr;
      const practiced = !!practicedDays[key];

      const div = document.createElement('div');
      const classes = ['cal-day', 'in-month'];
      if (isToday)  classes.push('today');
      if (isFuture) classes.push('future');
      if (practiced) classes.push('practiced');
      div.className = classes.join(' ');
      div.textContent = String(d);

      if (practiced) {
        const dot = document.createElement('span');
        dot.className = 'cal-dot' + (isToday ? ' pop' : '');
        div.appendChild(dot);
      }
      fragment.appendChild(div);
    }

    grid.innerHTML = '';
    grid.appendChild(fragment);
  }

  return { render, markToday, dayKey, calcStreak };
})();

/* Rückwärtskompatibilität */
function markPracticedToday(s) { Kalender.markToday(s); }
function getPracticedDays()     { return Storage.load()._practicedDays || {}; }
function calcStreak(d)          { return Kalender.calcStreak(d); }
function renderCalendar()       { Kalender.render(); }
