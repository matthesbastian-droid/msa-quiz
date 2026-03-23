// ================================================================
// MSA-EXTRA-GROSSSCHREIBUNG.JS
// Thema: Groß- und Kleinschreibung
// Aufgabentypen: cross, mc, mc3, match
// Antwortvarianz: ~50% groß / ~50% klein; mc: c:0/1/2 gemischt
// ================================================================

var MSA_EXTRA_GROSSSCHREIBUNG = [
{
  id: "extra_gross_klein",
  title: "Groß- und Kleinschreibung",
  emoji: "🔠",
  color: "#dc2626",
  qs: [

  // ── TYP 1: CROSS (groß / klein) – ausgewogen ──

  {
    sub: "Substantivierte Adjektive & Adjektive vor Nomen",
    type: "cross",
    q: "<b>Entscheide</b>: Wird das Wort groß- oder kleingeschrieben? <b>Ordne</b> durch Klick in die richtige Spalte ein.",
    rows: [
      "alles (gute / Gute) zum Geburtstag",
      "etwas (neues / Neues) lernen",
      "ein (guter / Guter) Freund wartet",
      "viel (wichtiges / Wichtiges) vergessen",
      "das ist ein (besonderer / Besonderer) Tag",
      "nichts (schlimmeres / Schlimmeres) vorstellbar"
    ],
    cols: ["klein", "groß"],
    correct: [1, 1, 0, 1, 0, 1],
    model: "alles Gute ✓ groß | etwas Neues ✓ groß | ein guter Freund ✓ klein | viel Wichtiges ✓ groß | ein besonderer Tag ✓ klein | nichts Schlimmeres ✓ groß",
    rule: "<div class=rbox>Nach 'alles', 'etwas', 'nichts', 'viel' → Adjektiv wird Nomen → groß. Vor einem Nomen bleibt es Adjektiv → klein.</div>"
  },

  {
    sub: "Nominalisierte Infinitive",
    type: "cross",
    q: "<b>Entscheide</b>: Handelt es sich um ein Verb (→ klein) oder ein nominalisiertes Nomen (→ groß)? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Wir gehen heute (schwimmen / Schwimmen).",
      "Beim (laufen / Laufen) höre ich Musik.",
      "Das ständige (klagen / Klagen) nervt.",
      "Sie liebt das (reisen / Reisen).",
      "Er geht heute (einkaufen / Einkaufen).",
      "Das (lachen / Lachen) ist ansteckend."
    ],
    cols: ["klein (Verb)", "groß (Nomen)"],
    correct: [0, 1, 1, 1, 0, 1],
    model: "schwimmen gehen ✓ Verb klein | beim Laufen ✓ groß | das Klagen ✓ groß | das Reisen ✓ groß | einkaufen gehen ✓ Verb klein | das Lachen ✓ groß",
    rule: "<div class=rbox>In 'gehen + Verb' (schwimmen gehen, einkaufen gehen) bleibt das Verb Verb → klein. Nach 'beim', 'das', vor Possessivpronomen → Nomen → groß.</div>"
  },

  {
    sub: "Tageszeiten, Wochentage & Begleiter",
    type: "cross",
    q: "<b>Entscheide</b>: Wird das jeweilige Wort groß- oder kleingeschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Wir treffen uns morgen (abend / Abend).",
      "Er kommt (nächsten / Nächsten) Montag.",
      "Sie arbeitet (jeden / Jeden) Freitag.",
      "Ich war (gestern / Gestern) Mittag beschäftigt.",
      "Das Treffen war (letzten / Letzten) Donnerstag.",
      "Wir sehen uns (heute / Heute) (abend / Abend)."
    ],
    cols: ["klein", "groß"],
    correct: [1, 0, 0, 0, 0, 0, 1],
    model: "morgen Abend ✓ Abend groß | nächsten ✓ klein | jeden ✓ klein | gestern ✓ klein | letzten ✓ klein | heute ✓ klein | Abend ✓ groß",
    rule: "<div class=rbox>Tageszeiten (Abend, Mittag) und Wochentage (Montag, Freitag) → Nomen → groß. Begleitende Adjektive/Adverbien (nächsten, jeden, gestern, heute) → klein.</div>"
  },

  {
    sub: "Adjektiv: attributiv vs. substantiviert",
    type: "cross",
    q: "<b>Entscheide</b>: Handelt es sich um ein Adjektiv (→ klein) oder ein substantiviertes Adjektiv (→ groß)? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Das (böse / Böse) in der Welt existiert.",
      "Ein (böser / Böser) Mensch lebt hier.",
      "Sie hat eine (neue / Neue) bekommen. (Idee weggelassen)",
      "Das ist eine (neue / Neue) Idee.",
      "Er kennt das (gute / Gute) im Menschen.",
      "Er hat einen (guten / Guten) Einfall."
    ],
    cols: ["klein", "groß"],
    correct: [1, 0, 1, 0, 1, 0],
    model: "das Böse ✓ groß | ein böser Mensch ✓ klein | eine Neue ✓ groß | eine neue Idee ✓ klein | das Gute ✓ groß | einen guten Einfall ✓ klein",
    rule: "<div class=rbox>Steht das Adjektiv allein ohne Nomen → substantiviert → groß. Vor einem Nomen bleibt es Adjektiv → klein.</div>"
  },

  {
    sub: "Feste Wendungen & am + Superlativ",
    type: "cross",
    q: "<b>Entscheide</b>: Wird das Wort in der festen Wendung groß- oder kleingeschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "am (besten / Besten) schläft er im Dunkeln",
      "im (allgemeinen / Allgemeinen) stimme ich zu",
      "im (großen / Großen) und Ganzen war es gut",
      "aufs (schönste / Schönste) hat er die Blumen arrangiert",
      "sie besteht auf ihrem (recht / Recht)",
      "er hat (recht / Recht)"
    ],
    cols: ["klein", "groß"],
    correct: [0, 1, 1, 0, 1, 0],
    model: "am besten ✓ klein | im Allgemeinen ✓ groß | im Großen und Ganzen ✓ groß | aufs schönste ✓ klein | auf ihrem Recht ✓ groß | recht haben ✓ klein",
    rule: "<div class=rbox>'am + Superlativ' → immer klein. 'Im Allgemeinen', 'Im Wesentlichen', 'Im Großen und Ganzen' → feste Wendungen → groß. 'recht haben' → klein.</div>"
  },

  {
    sub: "Schulfächer, Sprachen & Nationalitäten",
    type: "cross",
    q: "<b>Entscheide</b>: Wird das Wort groß- oder kleingeschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Sie lernt (mathematik / Mathematik).",
      "Das (biologische / Biologische) Experiment klappte.",
      "Er ist ein (deutscher / Deutscher).",
      "Das Produkt ist (deutsch / Deutsch) hergestellt.",
      "Sie spricht (deutsch / Deutsch) mit Akzent.",
      "Er hat gute Noten in (deutsch / Deutsch)."
    ],
    cols: ["klein", "groß"],
    correct: [1, 0, 1, 0, 0, 1],
    model: "Mathematik ✓ groß | biologische ✓ klein | ein Deutscher ✓ groß | deutsch hergestellt ✓ klein (Adv.) | spricht deutsch ✓ klein (Adv.) | in Deutsch ✓ groß (Schulfach)",
    rule: "<div class=rbox>Schulfächer/Sprachen als Nomen → groß (Mathematik, Deutsch). Als Adverb oder Adjektiv → klein. Nationalitäten für Personen → groß (ein Deutscher).</div>"
  },

  {
    sub: "recht / Recht – schuld / Schuld – schade",
    type: "cross",
    q: "<b>Entscheide</b>: Wird das Wort groß- oder kleingeschrieben? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Du hast (recht / Recht).",
      "Das (recht / Recht) auf Bildung.",
      "Er ist (schuld / Schuld) daran.",
      "Die (schuld / Schuld) liegt bei ihm.",
      "Das ist (schade / Schade).",
      "Er hat die (schuld / Schuld) allein."
    ],
    cols: ["klein", "groß"],
    correct: [0, 1, 0, 1, 0, 1],
    model: "recht haben ✓ klein | das Recht ✓ groß | schuld sein ✓ klein | die Schuld ✓ groß | schade sein ✓ klein | die Schuld ✓ groß",
    rule: "<div class=rbox>'recht haben', 'schuld sein', 'schade sein' → feste Wendungen → klein. Als eigenständige Nomen (das Recht, die Schuld) → groß.</div>"
  },

  // ── TYP 2: MC – Regeln & schwierige Fälle ──

  {
    sub: "Ordinalzahl: mit oder ohne Nomen?",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibung: 'Sie kam als ___ an.'",
    o: ["als erste", "als Erste", "Als Erste"],
    c: 1,
    model: "B – als Erste: kein Nomen dahinter → substantivierte Ordinalzahl → groß",
    rule: "<div class=rbox>Ordinalzahlen ohne nachfolgendes Nomen → substantiviert → groß: als Erste, als Zweiter, als Letztes. Mit Nomen → klein: das erste Mal.</div>"
  },

  {
    sub: "Eigenname: geografisch",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Groß-/Kleinschreibung des geografischen Eigennamens.",
    o: ["das schwarze Meer", "Das Schwarze Meer", "das Schwarze meer"],
    c: 1,
    model: "B – Das Schwarze Meer: Adjektiv in geografischem Eigennamen → groß",
    rule: "<div class=rbox>Adjektive in geografischen Eigennamen werden großgeschrieben: das Schwarze Meer, die Chinesische Mauer, das Rote Kreuz.</div>"
  },

  {
    sub: "Farbe: Nomen oder Adjektiv?",
    type: "mc",
    q: "<b>Wähle</b> den Satz, in dem die Farbe richtig großgeschrieben ist.",
    o: ["Das Kleid ist Blau.", "Sie mag Blau sehr gerne.", "Ein Blaues Auto fährt vorbei."],
    c: 1,
    model: "B – Sie mag Blau: Farbe als Nomen (Objekt) → groß",
    rule: "<div class=rbox>Farben als Nomen → groß (sie mag Blau). Als Adjektiv prädikativ (das Kleid ist blau) oder attributiv (ein blaues Auto) → klein.</div>"
  },

  {
    sub: "Welche Schreibung ist FALSCH?",
    type: "mc",
    q: "<b>Erkenne</b> den Fehler: Welche der folgenden Schreibungen ist FALSCH?",
    o: ["beim Kochen", "zum lachen", "vom Tanzen"],
    c: 1,
    model: "B – 'zum lachen' ist falsch → muss 'zum Lachen' heißen",
    rule: "<div class=rbox>Nach 'beim', 'zum', 'vom', 'im', 'durch' werden nominalisierte Infinitive großgeschrieben: beim Kochen, zum Lachen, vom Tanzen.</div>"
  },

  {
    sub: "Satzanfang nach Doppelpunkt",
    type: "mc",
    q: "<b>Entscheide</b>: Groß- oder Kleinschreibung nach dem Doppelpunkt?\n(a) Er rief: ___ komme morgen.\n(b) Ergebnis: ___ zu drei.",
    o: ["(a) Ich – (b) sechs", "(a) ich – (b) Sechs", "(a) Ich – (b) Sechs"],
    c: 0,
    model: "A – (a) Ich: vollständiger Satz nach Doppelpunkt → groß. (b) sechs: nur Zahlenangabe → klein.",
    rule: "<div class=rbox>Nach Doppelpunkt großschreiben, wenn ein vollständiger Satz (bes. direkte Rede) folgt. Klein bei bloßer Ergänzung oder Aufzählung.</div>"
  },

  {
    sub: "Knifflig: 'des Öfteren'",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Schreibung: 'Sie kommt ___ vorbei.'",
    o: ["des öfteren", "des Öfteren", "Des Öfteren"],
    c: 1,
    model: "B – des Öfteren: Genitivkonstruktion mit substantiviertem Adjektiv → groß",
    rule: "<div class=rbox>'des Öfteren', 'des Weiteren', 'des Häufigeren' → Genitivkonstruktionen mit substantivierten Adjektiven → groß.</div>"
  },

  {
    sub: "Welcher Satz ist komplett korrekt?",
    type: "mc",
    q: "<b>Wähle</b> den Satz, der in der Groß-/Kleinschreibung vollständig korrekt ist.",
    o: [
      "Er hat sie aufs Beste begrüßt.",
      "Sie kam als erste an.",
      "Im Allgemeinen stimme ich zu."
    ],
    c: 2,
    model: "C – Im Allgemeinen: feste Wendung → groß",
    rule: "<div class=rbox>'aufs beste' → klein (idiomatische Wendung). 'als Erste' → groß (ohne Nomen). 'Im Allgemeinen' → groß.</div>"
  },

  // ── TYP 3: MC3 (Wortform-Auswahl) ──

  {
    sub: "Richtige Schreibform wählen (I)",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die korrekte Groß- oder Kleinschreibung.",
    rows: [
      ["nichts Gutes", "nichts gutes"],
      ["beim laufen", "beim Laufen"],
      ["am Besten", "am besten"],
      ["Schwarzes Meer", "schwarzes Meer"],
      ["etwas Neues", "etwas neues"],
      ["ein guter Freund", "ein Guter Freund"]
    ],
    correct: [0, 1, 1, 0, 0, 0],
    model: "nichts Gutes ✓ | beim Laufen ✓ | am besten ✓ | Schwarzes Meer ✓ | etwas Neues ✓ | ein guter Freund ✓",
    rule: "<div class=rbox>Substantivierte Adj. nach nichts/etwas → groß. Infinitiv nach beim → groß. am + Superlativ → klein. Adj. in Eigenname → groß. Adj. vor Nomen → klein.</div>"
  },

  {
    sub: "Richtige Schreibform wählen (II)",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die korrekte Schreibung.",
    rows: [
      ["das Reisen macht Spaß", "das reisen macht Spaß"],
      ["ich gehe heute schwimmen", "ich gehe heute Schwimmen"],
      ["viel Wichtiges", "viel wichtiges"],
      ["trotz Allem", "trotz allem"],
      ["sie hat recht", "sie hat Recht"],
      ["im Großen und Ganzen", "im großen und ganzen"]
    ],
    correct: [0, 0, 0, 1, 0, 0],
    model: "das Reisen ✓ | schwimmen (Verb) ✓ | viel Wichtiges ✓ | trotz allem ✓ | recht haben ✓ | im Großen und Ganzen ✓",
    rule: "<div class=rbox>Nominalisierter Infinitiv → groß. Verb im Verbgefüge → klein. Nach viel → groß. trotz allem → klein. recht haben → klein. Im Großen und Ganzen → groß.</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Regel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jedes Beispiel mit der passenden Regel zur Groß-/Kleinschreibung.",
    pairs: [
      ["beim Schreiben", "nominalisierter Infinitiv → groß"],
      ["am schnellsten", "am + Superlativ → klein"],
      ["alles Schöne", "Adjektiv nach 'alles' → groß"],
      ["ein schöner Tag", "Adjektiv vor Nomen → klein"],
      ["Deutsch (Schulfach)", "Sprache/Schulfach = Nomen → groß"],
      ["spricht deutsch", "Adjektiv als Adverb → klein"]
    ],
    model: "beim Schreiben → nominalisierter Infinitiv | am schnellsten → Superlativ | alles Schöne → nach 'alles' | ein schöner Tag → vor Nomen | Deutsch → Schulfach | spricht deutsch → adverbiell",
    rule: "<div class=rbox>Nominalisierte Infinitive und substantivierte Adjektive → groß. Am + Superlativ und attributive Adjektive vor Nomen → klein.</div>"
  },

  {
    sub: "Beispiele zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jedes Beispiel mit der passenden Kategorie der Groß-/Kleinschreibung.",
    pairs: [
      ["das Schwarze Meer", "Eigenname → groß"],
      ["das blaue Kleid", "Adjektiv vor Nomen → klein"],
      ["morgen Abend", "Tageszeit = Nomen → groß"],
      ["nächsten Montag: 'nächsten'", "Adjektiv vor Nomen → klein"],
      ["nichts Interessantes", "nach 'nichts' → groß"],
      ["am meisten", "am + Superlativ → klein"]
    ],
    model: "Schwarzes Meer → Eigenname groß | blaues Kleid → vor Nomen klein | Abend → Tageszeit groß | nächsten → Adjektiv klein | Interessantes → nach 'nichts' groß | am meisten → Superlativ klein",
    rule: "<div class=rbox>Eigennamen, Tageszeiten, substantivierte Adjektive/Verben → groß. Attributive Adjektive vor Nomen, am + Superlativ → klein.</div>"
  }

  ]
}
];
