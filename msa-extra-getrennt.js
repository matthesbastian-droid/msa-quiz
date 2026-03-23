// ================================================================
// MSA-EXTRA-GETRENNT.JS
// Thema: Getrennt- und Zusammenschreibung
// Aufgabentypen: cross, mc, mc3, match
// Antwortvarianz: ~50% getrennt / ~50% zusammen; mc c:0/1/2 gemischt
// ================================================================

var MSA_EXTRA_GETRENNT = [
{
  id: "extra_getrennt",
  title: "Getrennt- und Zusammenschreibung",
  emoji: "🧩",
  color: "#ca8a04",
  qs: [

  // ── TYP 1: CROSS (getrennt / zusammen) – ausgewogen ──

  {
    sub: "Wörtliche vs. übertragene Bedeutung",
    type: "cross",
    q: "Getrennt (wörtlich) oder zusammen (übertragen)?",
    rows: [
      "Er ist in der 9. Klasse (sitzen geblieben / sitzengeblieben). (nicht versetzt)",
      "Er saß auf dem Stuhl und blieb (sitzen / sitzenbleiben). (nicht aufstehen – wörtlich)",
      "Sie lässt das Glas (fallen / fallenlassen). (wörtlich: loslassen)",
      "Er hat sie (fallen lassen / fallenlassen). (übertragen: aufgegeben)",
      "Er holt das Buch (wieder / wieder holen). (zurückbringen – wörtlich)",
      "Er hat den Fehler (wiederholt / wieder holt). (nochmals gemacht – übertragen)"
    ],
    cols: ["getrennt (wörtlich)", "zusammen (übertragen/fest)"],
    correct: [1, 0, 0, 1, 0, 1],
    model: "sitzengeblieben ✓ zusammen (nicht versetzt) | sitzen bleiben ✓ getrennt (wörtlich) | fallen lassen ✓ getrennt (wörtlich) | fallenlassen ✓ zusammen (aufgeben) | wieder holen ✓ getrennt (zurück) | wiederholt ✓ zusammen (erneut)",
    rule: "<div class=rbox>Übertragene/feste Bedeutung → zusammen: sitzenbleiben (= nicht versetzt), fallenlassen (= aufgeben), wiederholen (= nochmals). Wörtliche Bedeutung → getrennt.</div>"
  },

  {
    sub: "Partikelverben: Infinitiv vs. Konjugation",
    type: "cross",
    q: "<b>Entscheide</b>: Wird das Partikelverb im Infinitiv zusammen oder in der konjugierten Form getrennt geschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Er will (losfahren / los fahren). (Infinitiv)",
      "Er fährt (los / losfahren). (Präsens 3. Sg.)",
      "Wir möchten (zusammenarbeiten / zusammen arbeiten). (Infinitiv)",
      "Wir arbeiten (zusammen / zusammenarbeiten). (Präsens, Adverb)",
      "Sie will ihn (anrufen / an rufen). (Infinitiv)",
      "Sie ruft ihn (an / anrufen). (Präsens)"
    ],
    cols: ["getrennt", "zusammen"],
    correct: [1, 0, 1, 0, 1, 0],
    model: "losfahren ✓ zusammen (Inf.) | fährt los ✓ getrennt (konj.) | zusammenarbeiten ✓ zusammen (Inf.) | arbeiten zusammen ✓ getrennt (Adv.) | anrufen ✓ zusammen (Inf.) | ruft an ✓ getrennt (konj.)",
    rule: "<div class=rbox>Trennbare Partikelverben: im Infinitiv zusammen (losfahren, anrufen). Konjugiert getrennt (fährt los, ruft an).</div>"
  },

  {
    sub: "Nomen + Verb: getrennt oder zusammen?",
    type: "cross",
    q: "<b>Entscheide</b>: Bleibt das Nomen eigenständig (→ getrennt) oder hat es seine Eigenständigkeit verloren (→ zusammen)? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Lass uns heute (eislaufen / Eis laufen). (Sportart)",
      "Er kann gut (Klavier spielen / Klavierspielen). (Nomen als Objekt)",
      "Sie will (Schach spielen / Schachspielen). (Nomen als Objekt)",
      "Wir wollen (Schlittschuh laufen / Schlittschuhlaufen). (Sportgerät erkennbar)",
      "Er liebt es, (kopfzustehen / Kopf zu stehen). (Sportübung)",
      "Sie gehen (schwimmen / Schwimmen). (kein Nomen, Verb)"
    ],
    cols: ["getrennt", "zusammen"],
    correct: [1, 0, 0, 0, 1, 0],
    model: "eislaufen ✓ zusammen (Sportart) | Klavier spielen ✓ getrennt (Nomen als Obj.) | Schach spielen ✓ getrennt | Schlittschuh laufen ✓ getrennt | Kopfstehen ✓ zusammen | schwimmen ✓ getrennt (Verb im Verbgefüge)",
    rule: "<div class=rbox>Wenn das Nomen seine Eigenständigkeit verloren hat (eislaufen) → zusammen. Bei erkennbarem Nomen als Objekt (Klavier spielen, Schach spielen) → getrennt.</div>"
  },

  {
    sub: "Adjektiv/Adverb + Verb: übertragen vs. wörtlich",
    type: "cross",
    q: "<b>Entscheide</b>: Wird die Verbindung getrennt oder zusammengeschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Das kann ich (gutheißen / gut heißen). (= zustimmen)",
      "Er hat mich (gut heißen / gutheißen). (= freundlich begrüßt – wörtlich)",
      "Er will ihn (fernhalten / fern halten). (= auf Distanz halten)",
      "Er hält ihn (fern / fernsein). (Konjugation: hält fern)",
      "Das Problem ist (schwerwiegend / schwer wiegend). (ernsthaft)",
      "Das Paket ist (schwer wiegend / schwerwiegend). (wiegt schwer – wörtlich)"
    ],
    cols: ["getrennt", "zusammen"],
    correct: [1, 0, 1, 0, 1, 0],
    model: "gutheißen ✓ zusammen (zustimmen) | gut heißen ✓ getrennt (freundlich) | fernhalten ✓ zusammen (Inf., Distanz) | hält fern ✓ getrennt (konj.) | schwerwiegend ✓ zusammen (ernst) | schwer wiegend ✓ getrennt (wörtl.)",
    rule: "<div class=rbox>Übertragene Bedeutung → zusammen: gutheißen (= zustimmen), schwerwiegend (= ernsthaft). Wörtliche oder konjugierte Form → getrennt.</div>"
  },

  {
    sub: "Zusammensetzungen mit 'irgend-', 'wohl-', 'hoch-'",
    type: "cross",
    q: "<b>Entscheide</b>: Wird die Verbindung getrennt oder zusammengeschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "(Irgendwer / Irgend wer) hat das getan.",
      "(Irgendwie / Irgend wie) klappt das schon.",
      "Das ist (wohlbekannt / wohl bekannt).",
      "Das ist (hoch interessant / hochinteressant). (übertragen)",
      "Das Gebäude ist (hoch / hochgelegen). (liegt hoch – wörtlich: hoch gelegen)",
      "Das ist (vollkommen / voll kommen) richtig."
    ],
    cols: ["getrennt", "zusammen"],
    correct: [1, 1, 1, 1, 0, 1],
    model: "irgendwer ✓ zusammen | irgendwie ✓ zusammen | wohlbekannt ✓ zusammen | hochinteressant ✓ zusammen (übertragen) | hoch gelegen ✓ getrennt (wörtlich) | vollkommen ✓ zusammen",
    rule: "<div class=rbox>irgend- → immer zusammen. wohl- in festen Verbindungen → zusammen. hoch + Adj. bei übertragener Bedeutung → zusammen (hochinteressant). Wörtlich → getrennt.</div>"
  },

  // ── TYP 2: MC – c:0/1/2 gemischt ──

  {
    sub: "'kennenlernen' – beide korrekt?",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibweise: 'Ich möchte dich gerne ___.'",
    o: ["kennen lernen", "kennenlernen", "Beides ist korrekt laut Duden"],
    c: 2,
    model: "C – Beides korrekt (Empfehlung: kennenlernen)",
    rule: "<div class=rbox>Beide Schreibweisen sind laut Duden korrekt. Zusammenschreibung wird empfohlen.</div>"
  },

  {
    sub: "beisammen + sein",
    type: "mc",
    q: "<b>Entscheide</b>: Getrennt- oder Zusammenschreibung? 'Wir wollen ___ sein.'",
    o: ["beisammensein", "beisammen sein", "Beides korrekt"],
    c: 1,
    model: "B – beisammen sein → Adverb + sein → getrennt",
    rule: "<div class=rbox>Adverb + sein wird getrennt geschrieben: da sein, beisammen sein, zusammen sein.</div>"
  },

  {
    sub: "'zu' bei Partikelverben",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibweise des Infinitivs mit 'zu': 'Es ist wichtig, ___.'",
    o: ["zusammen zu arbeiten", "zusammenzuarbeiten", "zu zusammenarbeiten"],
    c: 1,
    model: "B – zusammenzuarbeiten: 'zu' tritt zwischen Partikel und Verbstamm",
    rule: "<div class=rbox>Bei Partikelverben tritt 'zu' zwischen Partikel und Verbstamm: aufzustehen, zusammenzuarbeiten, anzurufen.</div>"
  },

  {
    sub: "so + genannt",
    type: "mc",
    q: "<b>Entscheide</b>: Getrennt- oder Zusammenschreibung? 'Das war das ___ Glück.'",
    o: ["so genannte", "sogenannte", "so-genannte"],
    c: 1,
    model: "B – sogenannte → feste Verbindung → zusammen",
    rule: "<div class=rbox>sogenannt(e) → feste Zusammensetzung → immer zusammen.</div>"
  },

  {
    sub: "Nominalisierter Infinitiv",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibweise des nominalisierten Infinitivs: 'Das ___ war schön.'",
    o: ["Zusammen kommen", "zusammenkommen", "Zusammenkommen"],
    c: 2,
    model: "C – Zusammenkommen → nominalisierter Infinitiv → zusammen und groß",
    rule: "<div class=rbox>Nominalisierte Infinitive werden zusammengeschrieben und großgeschrieben: das Zusammenkommen, das Spazierengehen.</div>"
  },

  {
    sub: "völlig + wertlos",
    type: "mc",
    q: "<b>Entscheide</b>: Getrennt- oder Zusammenschreibung? 'Er ist ___ sinnlos.' (Adverb + Adjektiv)",
    o: ["völligsinnlos", "völlig sinnlos", "Beides korrekt"],
    c: 1,
    model: "B – völlig sinnlos → Adverb + Adjektiv → getrennt",
    rule: "<div class=rbox>Adverbien + Adjektive bleiben in der Regel getrennt: sehr schön, völlig sinnlos, absolut klar.</div>"
  },

  // ── TYP 3: MC3 ──

  {
    sub: "Getrennt oder zusammen? (Gemischte Fälle)",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile: Wird getrennt oder zusammengeschrieben?",
    rows: [
      ["eislaufen (Sportart)", "Eis laufen"],
      ["Klavier spielen (Nomen+Verb)", "Klavierspielen"],
      ["sitzengeblieben (nicht versetzt)", "sitzen geblieben"],
      ["fallen lassen (wörtlich)", "fallenlassen"],
      ["irgendwer", "irgend wer"],
      ["zusammenzuarbeiten (Inf. mit zu)", "zusammen zu arbeiten"]
    ],
    correct: [0, 0, 0, 0, 0, 0],
    model: "eislaufen ✓ | Klavier spielen ✓ | sitzengeblieben ✓ | fallen lassen ✓ | irgendwer ✓ | zusammenzuarbeiten ✓",
    rule: "<div class=rbox>Sportart → zusammen. Nomen als Obj. → getrennt. Übertragen → zusammen. Wörtlich → getrennt. irgend- → zusammen. Partikelverb + zu → zusammen.</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Regel → Beispiel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jede Regel zur Getrennt-/Zusammenschreibung mit einem passenden Beispiel.",
    pairs: [
      ["übertragene Bedeutung → zusammen", "sitzenbleiben (nicht versetzt)"],
      ["wörtliche Bedeutung → getrennt", "liegen lassen (wörtlich auf Boden)"],
      ["irgend- → immer zusammen", "irgendwo, irgendwer, irgendwie"],
      ["Partikelverb Infinitiv → zusammen", "anrufen, losfahren, aufstehen"],
      ["Partikelverb konjugiert → getrennt", "er ruft an, er fährt los"],
      ["Adverb + Adjektiv → getrennt", "sehr schön, völlig klar"]
    ],
    model: "übertragen → sitzenbleiben | wörtlich → liegen lassen | irgend- → irgendwo | Inf. → anrufen | konj. → ruft an | Adv+Adj → sehr schön",
    rule: "<div class=rbox>Getrennt-Zusammenschreibung folgt oft dem Prinzip: übertragene Bedeutung = zusammen, wörtliche = getrennt. Partikelverben im Infinitiv immer zusammen.</div>"
  }

  ]
}
];
