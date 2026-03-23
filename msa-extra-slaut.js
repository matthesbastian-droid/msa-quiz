// ================================================================
// MSA-EXTRA-SLAUT.JS
// Thema: s / ss / ß
// Aufgabentypen: mc3, cross, mc, match
// Antwortvarianz: ~50% ss / ~50% ß; mc c:0/1/2 gemischt
// ================================================================

var MSA_EXTRA_SLAUT = [
{
  id: "extra_slaut",
  title: "s / ss / ß",
  emoji: "🔉",
  color: "#0891b2",
  qs: [

  // ── TYP 1: MC3 (Wortform-Auswahl per Zeile) – Haupttyp ──

  {
    sub: "Die Grundregel: kurzer Vokal = ss, langer Vokal/Diphthong = ß",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die richtige Schreibweise: Klicke auf die korrekte Form (ss oder ß).",
    rows: [
      ["Fluss", "Fluß"],
      ["groß", "gross"],
      ["Spaß", "Spass"],
      ["Schloss", "Schloß"],
      ["heiß", "heiss"],
      ["Kuss", "Kuß"],
      ["süß", "süss"],
      ["Riss", "Riß"]
    ],
    correct: [0, 0, 0, 0, 0, 0, 0, 0],
    model: "Fluss (kurz u) ss ✓ | groß (lang o) ß ✓ | Spaß (lang a) ß ✓ | Schloss (kurz o) ss ✓ | heiß (Diphth. ei) ß ✓ | Kuss (kurz u) ss ✓ | süß (lang ü) ß ✓ | Riss (kurz i) ss ✓",
    rule: "<div class=rbox>Grundregel: Nach kurzem Vokal → ss (Fluss, Schloss, Kuss, Riss). Nach langem Vokal oder Diphthong → ß (groß, Spaß, heiß, süß).</div>"
  },

  {
    sub: "Wörter mit Diphthong",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die richtige Schreibweise (ss oder ß). Beachte dabei die Diphthonge: ei, au, eu, ie.",
    rows: [
      ["Er rei__t die Zeitung. → reißt", "Er rei__t die Zeitung. → reisst"],
      ["drau__en → draußen", "drau__en → draussen"],
      ["genie__en → genießen", "genie__en → geniessen"],
      ["schie__en → schießen", "schie__en → schiessen"],
      ["flie__t → fließt", "flie__t → fliesst"],
      ["bei__t → beißt", "bei__t → beisst"]
    ],
    correct: [0, 0, 0, 0, 0, 0],
    model: "reißt ✓ (ei) | draußen ✓ (au) | genießen ✓ (ie) | schießen ✓ (ie) | fließt ✓ (ie) | beißt ✓ (ei)",
    rule: "<div class=rbox>Nach Diphthongen (ei, au, eu, ie) → immer ß: reißen, draußen, genießen, schießen, fließen, beißen.</div>"
  },

  {
    sub: "Präsens vs. Präteritum (Vokalwechsel)",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die richtige Schreibweise (ss oder ß). <b>Beachte</b> dabei den Unterschied zwischen Präsens und Präteritum.",
    rows: [
      ["er i__t (Präsens: essen) → isst", "er i__t → iß"],
      ["er a__ (Präteritum: essen) → aß", "er a__ → ass"],
      ["er bei__t (Präsens: beißen) → beißt", "er bei__t → beisst"],
      ["er bi__ (Präteritum: beißen) → biss", "er bi__ → biß"],
      ["sie genie__t (Präsens) → genießt", "sie genie__t → geniesst"],
      ["sie go__ (Präteritum: gießen) → goss", "sie go__ → goß"]
    ],
    correct: [0, 0, 0, 0, 0, 0],
    model: "isst ✓ (kurz i) | aß ✓ (lang a) | beißt ✓ (Diphth.) | biss ✓ (kurz i) | genießt ✓ (Diphth.) | goss ✓ (kurz o)",
    rule: "<div class=rbox>Starke Verben wechseln im Präteritum den Vokal → andere Vokalquantität → andere Schreibung: isst (kurz i, ss) → aß (lang a, ß); beißt (ei, ß) → biss (kurz i, ss).</div>"
  },

  // ── TYP 2: CROSS (ss oder ß) – ausgewogen ──

  {
    sub: "Gemischte Wörter: Grundregel anwenden",
    type: "cross",
    q: "<b>Ordne zu</b>: Schreibe das Wort mit ss oder ß? Klicke in der richtigen Spalte an.",
    rows: [
      "Stra__e (Straße?)",
      "Ga__e (Gasse?)",
      "Nuss",
      "Klo__",
      "Schlu__",
      "Ma__ (Bierkrug)",
      "Ma__e (Menge)",
      "grö__er"
    ],
    cols: ["ss", "ß"],
    correct: [1, 0, 0, 1, 0, 1, 0, 1],
    model: "Straße ✓ ß (lang a) | Gasse ✓ ss (kurz a) | Nuss ✓ ss (kurz u) | Kloß ✓ ß (lang o) | Schluss ✓ ss (kurz u) | Maß ✓ ß (lang a) | Masse ✓ ss (kurz a) | größer ✓ ß (lang ö)",
    rule: "<div class=rbox>Kurzer Vokal → ss: Gasse, Nuss, Schluss, Masse. Langer Vokal → ß: Straße, Kloß, Maß, größer.</div>"
  },

  {
    sub: "Komposita behalten die Schreibung",
    type: "cross",
    q: "<b>Ordne zu</b>: ss oder ß im Kompositum? Klicke die richtige Spalte an. <b>Beachte</b> das Grundwort.",
    rows: [
      "Stra__enbahn",
      "Flu__ufer",
      "E__zimmer",
      "Schlo__garten",
      "Fu__ball",
      "Ma__nahme"
    ],
    cols: ["ss", "ß"],
    correct: [1, 0, 0, 0, 1, 1],
    model: "Straßenbahn ✓ ß (Straße) | Flussufer ✓ ss (Fluss) | Esszimmer ✓ ss (essen) | Schlossgarten ✓ ss (Schloss) | Fußball ✓ ß (Fuß) | Maßnahme ✓ ß (Maß)",
    rule: "<div class=rbox>In Komposita behält der erste Teil seine Schreibung: Straße → Straßenbahn, Fluss → Flussufer, Fuß → Fußball.</div>"
  },

  {
    sub: "Pluralformen – Vokal beachten",
    type: "cross",
    q: "<b>Ordne zu</b>: ss oder ß im Plural? Klicke die richtige Spalte an.",
    rows: [
      "Fü__e (Plural von Fuß)",
      "Bu__e (Plural von Bus)",
      "Nü__e (Plural von Nuss)",
      "Klö__e (Plural von Kloß)",
      "Grü__e (Plural von Gruß)",
      "Kü__e (Plural von Kuss)"
    ],
    cols: ["ss", "ß"],
    correct: [1, 0, 0, 1, 1, 0],
    model: "Füße ✓ ß (Fuß: lang u) | Busse ✓ ss (Bus: kurz u) | Nüsse ✓ ss (Nuss: kurz u) | Klöße ✓ ß (Kloß: lang o) | Grüße ✓ ß (Gruß: lang u) | Küsse ✓ ss (Kuss: kurz u)",
    rule: "<div class=rbox>Fuß/Füße und Kloß/Klöße behalten ß (langer Vokal). Kuss/Küsse und Nuss/Nüsse behalten ss (kurzer Vokal).</div>"
  },

  // ── TYP 3: MC – Sonderfälle & Regeln ──

  {
    sub: "Rechtschreibreform: Gebiss",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibweise nach der Rechtschreibreform aus.",
    o: ["Gebiß", "Gebiss", "Gebis"],
    c: 1,
    model: "B – Gebiss (kurzes i → ss; ß am Wortende nach kurzem Vokal nicht mehr erlaubt)",
    rule: "<div class=rbox>Seit der Reform 1996: nach kurzem Vokal am Wortende und vor Konsonant immer ss: Gebiss, Fluss, Kuss (nicht mehr: Gebiß, Fluß, Kuß).</div>"
  },

  {
    sub: "Großschreibung: ß wird zu SS",
    type: "mc",
    q: "<b>Entscheide</b>: Was schreibt man in der GROSSSCHREIBUNG statt ß?",
    o: ["SS", "SZ", "ß (bleibt gleich)"],
    c: 0,
    model: "A – SS (z.B. STRASSE, GENIESSEN, MASS)",
    rule: "<div class=rbox>ß existiert nur in Kleinbuchstaben. Bei Großschreibung immer SS: STRASSE, GENIESSEN, MASS, FUSS.</div>"
  },

  {
    sub: "Russland – ss oder ß?",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibweise: 'Ru__land' und 'ru__isch'.",
    o: ["Rußland / rußisch", "Russland / russisch", "Russland / rußisch"],
    c: 1,
    model: "B – Russland / russisch (ss – kurzes u)",
    rule: "<div class=rbox>Russland und russisch schreiben sich mit ss (kurzes u). 'Rußland' war eine ältere Schreibweise, heute nicht mehr korrekt.</div>"
  },

  {
    sub: "bloß – lang oder kurz?",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke mit der richtigen Schreibweise: 'Das war doch blo__ ein Missverständnis.'",
    o: ["bloss", "bloß", "blos"],
    c: 1,
    model: "B – bloß (langer o-Vokal → ß)",
    rule: "<div class=rbox>bloß: langes o → ß. 'bloss' war die alte Schweizer Schreibweise.</div>"
  },

  {
    sub: "Reißverschluss: Zusammensetzung",
    type: "mc",
    q: "<b>Ergänze</b> die beiden Lücken: 'Der Rei__verschlu__ ist kaputt.' <b>Wähle</b> die richtige Kombination.",
    o: ["ß + ß", "ß + ss", "ss + ß"],
    c: 1,
    model: "B – Reißverschluss: reißen (Diphthong ei → ß) + Verschluss (kurzes u → ss)",
    rule: "<div class=rbox>Reißverschluss: Komposition aus 'reißen' (ß nach ei) + 'Verschluss' (ss nach kurzem u).</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Wort → Regel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jedes Wort mit der zutreffenden Rechtschreibregel.",
    pairs: [
      ["Fluss", "kurzer Vokal u → ss"],
      ["groß", "langer Vokal o → ß"],
      ["heiß", "Diphthong ei → ß"],
      ["isst (Präsens)", "kurzer Vokal i → ss"],
      ["aß (Präteritum)", "langer Vokal a → ß"],
      ["Straßenbahn", "Kompositum: Straße behält ß"]
    ],
    model: "Fluss → kurz u ss | groß → lang o ß | heiß → Diphthong ß | isst → kurz i ss | aß → lang a ß | Straßenbahn → Kompositum",
    rule: "<div class=rbox>Kurzer Vokal → ss. Langer Vokal oder Diphthong → ß. Komposita behalten die Stammschreibung.</div>"
  }

  ]
}
];
