// ================================================================
// MSA-EXTRA-STILMITTEL.JS
// Thema: Stilmittel & Rhetorik
// Aufgabentypen: mc, cross, match, mc3
// Antwortvarianz: mc c:0/1/2 gleichmäßig verteilt; cross ausgewogen
// ================================================================

var MSA_EXTRA_STILMITTEL = [
{
  id: "extra_stilmittel",
  title: "Stilmittel & Rhetorik",
  emoji: "🎭",
  color: "#be185d",
  qs: [

  // ── TYP 1: CROSS (Stilmittel zuordnen) ──

  {
    sub: "Grundstilmittel zuordnen",
    type: "cross",
    q: "<b>Ordne zu</b>: Verbinde jedes Beispiel mit dem passenden Stilmittel, indem du die richtige Spalte anklickst.",
    rows: [
      "(a) Das Internet verschluckt Zeit.",
      "(b) Er ist so dünn wie ein Zahnstocher.",
      "(c) Die Bäume flüsterten im Wind.",
      "(d) Kommen. Sehen. Siegen."
    ],
    cols: ["Metapher", "Vergleich", "Personifikation", "Ellipse"],
    correct: [0, 1, 2, 3],
    model: "(a) Metapher (Übertragung ohne 'wie') | (b) Vergleich (mit 'wie') | (c) Personifikation (Bäume flüstern wie Menschen) | (d) Ellipse (fehlende Verben)",
    rule: "<div class=rbox>Metapher: bildlicher Ausdruck ohne 'wie'. Vergleich: mit 'wie'. Personifikation: Vermenschlichung. Ellipse: unvollständiger Satz.</div>"
  },

  {
    sub: "Ironie oder keine Ironie?",
    type: "cross",
    q: "<b>Entscheide</b>: Ist der jeweilige Satz ironisch gemeint oder nicht? Klicke die passende Spalte an.",
    rows: [
      "(a) 'Na toll, schon wieder alles perfekt hingekriegt.' (nach einem Fehler)",
      "(b) 'Du hast das wirklich super gemacht!' (nach echtem Erfolg)",
      "(c) 'Wie schön, dass du wieder zu spät bist.' (nach Verspätung)",
      "(d) 'Das Essen war köstlich!' (nach wirklich gutem Essen)"
    ],
    cols: ["Ironie", "keine Ironie"],
    correct: [0, 1, 0, 1],
    model: "(a) Ironie (Fehler ≠ perfekt) | (b) keine Ironie (echter Erfolg) | (c) Ironie (Verspätung ≠ schön) | (d) keine Ironie (echtes Lob)",
    rule: "<div class=rbox>Ironie: das Gemeinte ist das Gegenteil des Gesagten. Erkennbar am Kontext (Fehler, Verspätung, Misserfolg).</div>"
  },

  {
    sub: "Rhetorische Mittel in Gedichtzeilen",
    type: "cross",
    q: "<b>Ordne zu</b>: Verbinde jede Zeile mit dem passenden rhetorischen Mittel.",
    rows: [
      "(a) 'Komm, komm, komm zu mir!'",
      "(b) 'Die Nacht birgt tausend Augen.'",
      "(c) 'Wer, wenn nicht du, soll es tun?'",
      "(d) 'Ich will Frieden. Ich will Gerechtigkeit. Ich will Freiheit.'"
    ],
    cols: ["Repetitio", "Metapher", "Rhetorische Frage", "Anapher"],
    correct: [0, 1, 2, 3],
    model: "(a) Repetitio (Komm, komm, komm) | (b) Metapher (tausend Augen = Sterne) | (c) Rhetorische Frage (keine Antwort erwartet) | (d) Anapher (Ich will… am Anfang)",
    rule: "<div class=rbox>Repetitio: gleiches Wort. Metapher: bildliche Übertragung. Rhetorische Frage: ohne echte Antwort. Anapher: gleiches Wort/Wortgruppe am Satzanfang.</div>"
  },

  {
    sub: "Stilmittel in der Werbung",
    type: "cross",
    q: "<b>Ordne zu</b>: Verbinde jeden Werbeslogan mit dem passenden Stilmittel.",
    rows: [
      "(a) 'Geiz ist geil.'",
      "(b) 'Think different.'",
      "(c) 'Vorsprung durch Technik.'",
      "(d) 'Milch macht müde Männer munter.'"
    ],
    cols: ["Alliteration", "Ellipse", "Ellipse", "Alliteration"],
    correct: [0, 1, 1, 0],
    model: "(a) Alliteration (g/g) | (b) Ellipse (kein Vollsatz) | (c) Ellipse (kein Verb) | (d) Alliteration (m/m/m/m)",
    rule: "<div class=rbox>Alliteration: gleicher Anlaut. Ellipse: fehlende Satzteile – typisch in Werbung für Prägnanz.</div>"
  },

  // ── TYP 2: MC – c:0/1/2 gleichmäßig verteilt ──

  {
    sub: "Metapher oder Vergleich?",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Er ist so stark wie ein Bär.'",
    o: ["Metapher", "Vergleich", "Personifikation"],
    c: 1,
    model: "B – Vergleich (mit 'wie')",
    rule: "<div class=rbox>Vergleich: Verwendung von 'wie'. Metapher: ohne 'wie' (z.B. er ist ein Bär).</div>"
  },

  {
    sub: "Ellipse erkennen",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Ende gut, alles gut.'",
    o: ["Ellipse", "Metapher", "Vergleich"],
    c: 0,
    model: "A – Ellipse (Verb fehlt: '[Ist das] Ende gut, [ist] alles gut')",
    rule: "<div class=rbox>Ellipse: Auslassung von Satzteilen. Typisch in Sprichwörtern und Schlagzeilen.</div>"
  },

  {
    sub: "Klimax oder Antiklimax?",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Er seufzte, jammerte, schrie.'",
    o: ["Klimax (Steigerung)", "Antiklimax (Abstieg)", "Repetitio"],
    c: 0,
    model: "A – Klimax (seufzen → jammern → schreien = Steigerung)",
    rule: "<div class=rbox>Klimax: Aufzählung mit Steigerung von schwächer zu stärker. Antiklimax: umgekehrt (stark → schwach).</div>"
  },

  {
    sub: "Parallelismus erkennen",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Er lacht, sie lacht, alle lachen.'",
    o: ["Anapher", "Parallelismus", "Klimax"],
    c: 1,
    model: "B – Parallelismus (gleiche Satzstruktur wiederholt: S-V-Schema)",
    rule: "<div class=rbox>Parallelismus: Wiederholung der gleichen grammatischen Struktur. Anapher: dasselbe Wort am Satzanfang.</div>"
  },

  {
    sub: "Lautmalerei erkennen",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Das Feuer knisterte und prasselte.'",
    o: ["Metapher", "Lautmalerei (Onomatopoesie)", "Alliteration"],
    c: 1,
    model: "B – Lautmalerei (knistern, prasseln klingen wie das Geräusch)",
    rule: "<div class=rbox>Lautmalerei (Onomatopoesie): Wörter imitieren den Laut, den sie beschreiben (knistern, zischen, plätschern).</div>"
  },

  {
    sub: "Symbol erkennen",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Eine weiße Taube flog auf.' (im Friedenskontext)",
    o: ["Metapher", "Symbol", "Vergleich"],
    c: 1,
    model: "B – Symbol (weiße Taube = Frieden)",
    rule: "<div class=rbox>Symbol: ein konkretes Bild steht für eine abstrakte Idee (weiße Taube → Frieden, Rose → Liebe).</div>"
  },

  {
    sub: "Euphemismus erkennen",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Die Firma musste einige Mitarbeiter freisetzen.' (für: entlassen)",
    o: ["Euphemismus", "Ironie", "Metapher"],
    c: 0,
    model: "A – Euphemismus (Beschönigung von 'entlassen')",
    rule: "<div class=rbox>Euphemismus: Ersatz eines unangenehmen Begriffs durch eine freundlichere Formulierung.</div>"
  },

  {
    sub: "Litotes erkennen",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Das ist nicht das Schlechteste.' (gemeint: gut)",
    o: ["Hyperbel", "Litotes", "Ironie"],
    c: 1,
    model: "B – Litotes (doppelte Verneinung verstärkt positiv: 'nicht schlecht' = gut)",
    rule: "<div class=rbox>Litotes: 'nicht + Negatives' = Untertreibung mit verstärkender Wirkung ('nicht schlecht' = gut).</div>"
  },

  {
    sub: "Oxymoron oder Antithese?",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Beredtes Schweigen.'",
    o: ["Antithese", "Oxymoron", "Metapher"],
    c: 1,
    model: "B – Oxymoron (zwei gegensätzliche Begriffe direkt verbunden)",
    rule: "<div class=rbox>Oxymoron: zwei sich widersprechende Begriffe direkt verbunden ('beredtes Schweigen', 'bittere Süße'). Antithese: Gegenüberstellung in getrennten Satzteilen.</div>"
  },

  {
    sub: "Chiasmus",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Der Mensch denkt, Gott lenkt.'",
    o: ["Parallelismus", "Chiasmus", "Antithese"],
    c: 1,
    model: "B – Chiasmus (überkreuzte Struktur: Mensch-denkt / Gott-lenkt → S-V / S-V gespiegelt)",
    rule: "<div class=rbox>Chiasmus: überkreuzte Anordnung von Satzteilen (AB – BA). Erkennbar wenn die zweite Hälfte die erste spiegelt.</div>"
  },

  {
    sub: "Neologismus",
    type: "mc",
    q: "<b>Bestimme</b> die Wortbildungsart: Was ist 'Handy-Versagen' in 'Das war ein totales Handy-Versagen.'?",
    o: ["Metapher", "Neologismus", "Ellipse"],
    c: 1,
    model: "B – Neologismus (Wortneuschöpfung / neue Zusammensetzung)",
    rule: "<div class=rbox>Neologismus: ein neu gebildetes Wort oder eine neue Wortbedeutung (Handy-Versagen, Selfie-Kultur).</div>"
  },

  {
    sub: "Personifikation oder Metapher?",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Der Winter zieht seinen Mantel aus.'",
    o: ["Vergleich", "Personifikation", "Metapher"],
    c: 1,
    model: "B – Personifikation (Winter handelt wie ein Mensch: zieht Mantel aus)",
    rule: "<div class=rbox>Personifikation: einer nicht-menschlichen Sache werden menschliche Handlungen oder Eigenschaften zugeschrieben.</div>"
  },

  {
    sub: "Alliteration vs. Anapher",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Viele Versuche verursachten Verwirrung.'",
    o: ["Anapher", "Alliteration", "Parallelismus"],
    c: 1,
    model: "B – Alliteration (gleicher Anlaut V an aufeinanderfolgenden Wörtern)",
    rule: "<div class=rbox>Alliteration: gleicher Anlautlaut mehrerer aufeinanderfolgender Wörter. Anapher: gleiches Wort/Wortgruppe am Satzanfang.</div>"
  },

  {
    sub: "Hyperbel oder Ironie?",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Ich habe es dir tausendmal gesagt!'",
    o: ["Hyperbel", "Ironie", "Symbol"],
    c: 0,
    model: "A – Hyperbel (bewusste Übertreibung: nicht wirklich 1000 Mal)",
    rule: "<div class=rbox>Hyperbel: bewusste Übertreibung zur Verstärkung oder Betonung.</div>"
  },

  {
    sub: "Antithese in Sprichwort",
    type: "mc",
    q: "<b>Bestimme</b> das Stilmittel: 'Himmel und Hölle.'",
    o: ["Oxymoron", "Symbol", "Antithese"],
    c: 2,
    model: "C – Antithese (Gegensatzpaar: Himmel ↔ Hölle)",
    rule: "<div class=rbox>Antithese: Gegenüberstellung zweier gegensätzlicher Begriffe oder Aussagen.</div>"
  },

  // ── TYP 3: MC3 (Stilmittel per Beispiel wählen) ──

  {
    sub: "Stilmittel erkennen (Gemischt)",
    type: "mc3",
    q: "<b>Bestimme</b> für jede Zeile das passende Stilmittel: <b>Wähle</b> aus den drei Optionen.",
    rows: [
      ["Metapher", "Vergleich", "Personifikation"],
      ["Ellipse", "Klimax", "Anapher"],
      ["Alliteration", "Metapher", "Ironie"],
      ["Hyperbel", "Litotes", "Symbol"],
      ["Oxymoron", "Antithese", "Parallelismus"],
      ["Euphemismus", "Personifikation", "Vergleich"]
    ],
    rowTexts: [
      "'Die Sonne lacht.' – Stilmittel?",
      "'Kommen. Sehen. Siegen.' – Stilmittel?",
      "'Milch macht müde Männer munter.' – Stilmittel?",
      "'Nicht gerade ein Genie.' (= sehr dumm) – Stilmittel?",
      "'Klein, aber oho!' – Stilmittel?",
      "'Er ist von uns gegangen.' (= gestorben) – Stilmittel?"
    ],
    correct: [2, 0, 0, 1, 1, 0],
    model: "Personifikation ✓ | Ellipse ✓ | Alliteration ✓ | Litotes ✓ | Antithese ✓ | Euphemismus ✓",
    rule: "<div class=rbox>Personifikation: Vermenschlichung. Ellipse: unvollständig. Alliteration: gleicher Anlaut. Litotes: Verneinungsuntertreibung. Antithese: Gegensatz. Euphemismus: Beschönigung.</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Definition → Stilmittel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jede Definition mit dem passenden Stilmittel.",
    pairs: [
      ["Übertragung ohne 'wie'", "Metapher"],
      ["Expliziter Vergleich mit 'wie'", "Vergleich"],
      ["Auslassung von Satzteilen", "Ellipse"],
      ["Gleicher Anlaut aufeinanderfolgender Wörter", "Alliteration"],
      ["Das Gemeinte ist das Gegenteil des Gesagten", "Ironie"],
      ["Bewusste Übertreibung", "Hyperbel"]
    ],
    model: "ohne wie → Metapher | mit wie → Vergleich | Auslassung → Ellipse | Anlaut → Alliteration | Gegenteil → Ironie | Übertreibung → Hyperbel",
    rule: "<div class=rbox>Grundstilmittel: Metapher (bildlich, ohne wie), Vergleich (mit wie), Ellipse (unvollständig), Alliteration (Anlaut), Ironie (Gegenteil), Hyperbel (Übertreibung).</div>"
  },

  {
    sub: "Beispiel → Stilmittel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jedes Beispiel mit dem passenden Stilmittel.",
    pairs: [
      ["'Väterchen Frost'", "Personifikation"],
      ["'Beredtes Schweigen'", "Oxymoron"],
      ["'Er ist von uns gegangen.'", "Euphemismus"],
      ["'Nicht unklug.' (= schlau)", "Litotes"],
      ["'Ich will Frieden. Ich will Gerechtigkeit.'", "Anapher"],
      ["'Der Tod erntet uns alle.'", "Metapher"]
    ],
    model: "Väterchen Frost → Personifikation | beredtes Schweigen → Oxymoron | von uns gegangen → Euphemismus | nicht unklug → Litotes | Ich will... → Anapher | erntet → Metapher",
    rule: "<div class=rbox>Personifikation: Vermenschlichung. Oxymoron: Widerspruch direkt verbunden. Euphemismus: Beschönigung. Litotes: doppelte Verneinung. Anapher: Wort-Wiederholung am Anfang. Metapher: Übertragung.</div>"
  }

  ]
}
];
