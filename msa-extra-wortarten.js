// ================================================================
// MSA-EXTRA-WORTARTEN.JS
// Thema: Wortarten bestimmen
// Aufgabentypen: mc, cross, match, mc3, wortart
// Wortarten: Nomen, Verb, Adjektiv, Artikel, Pronomen,
//            Numerale, Adverb, Präposition, Konjunktion, Interjektion
// ================================================================

// ── WORTART-KLICK-TYP ─────────────────────────────────────────
// Typ "wortart": Alle Wörter im Satz sind anklickbar.
// Der Nutzer klickt ein Wort an → wählt eine Wortart aus einem
// Dropdown → bekommt sofort grün (✓) oder rot (✗) Feedback.
// Nach dem Bestätigen werden alle noch nicht bewerteten Tokens
// automatisch aufgelöst.
//
// Datenformat:
//   sentence : "Der alte Mann liest heute ein Buch."
//   options  : ["Nomen","Verb","Adjektiv","Artikel","Pronomen",
//               "Numerale","Adverb","Präposition","Konjunktion","Interjektion"]
//   correct  : { "Der":"Artikel", "alte":"Adjektiv", "Mann":"Nomen",
//                "liest":"Verb", "heute":"Adverb", "ein":"Artikel",
//                "Buch":"Nomen", ".":"-" }
//   (Satzzeichen mit "-" werden nicht bewertet)
// ================================================================

var MSA_EXTRA_WORTARTEN = [
{
  id: "extra_wortarten",
  title: "Wortarten bestimmen",
  emoji: "🧩",
  color: "#0e7490",
  qs: [

  // ══════════════════════════════════════════════════════════════
  // BLOCK 1: WORTART-KLICK (10 Aufgaben)
  // ══════════════════════════════════════════════════════════════

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Der alte Mann liest heute ein Buch.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Der":   "Artikel",
      "alte":  "Adjektiv",
      "Mann":  "Nomen",
      "liest": "Verb",
      "heute": "Adverb",
      "ein":   "Artikel",
      "Buch":  "Nomen",
      ".":     "-"
    },
    model: "Der → Artikel | alte → Adjektiv | Mann → Nomen | liest → Verb | heute → Adverb | ein → Artikel | Buch → Nomen",
    rule: "<div class=rbox>Nomen: großgeschrieben, mit Artikel (Mann, Buch). Verb: konjugierte Tätigkeit (liest). Adjektiv: dekliniert, beschreibt Nomen (alte). Artikel: begleitet Nomen direkt (der, ein). Adverb: modifiziert Verb, nicht dekliniert (heute).</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Zwei kleine Kinder spielen draußen und lachen laut.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Zwei":    "Numerale",
      "kleine":  "Adjektiv",
      "Kinder":  "Nomen",
      "spielen": "Verb",
      "draußen": "Adverb",
      "und":     "Konjunktion",
      "lachen":  "Verb",
      "laut":    "Adverb",
      ".":       "-"
    },
    model: "Zwei → Numerale | kleine → Adjektiv | Kinder → Nomen | spielen → Verb | draußen → Adverb | und → Konjunktion | lachen → Verb | laut → Adverb",
    rule: "<div class=rbox>Numerale: Zahlwort (zwei, drei). Konjunktion: verbindet Satzteile (und, aber, oder). Adverb: modifiziert Verb, unveränderlich (draußen, laut). Mehrere Verben in einem Satz sind möglich.</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Oh, sie freut sich sehr über das Geschenk!",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Oh":        "Interjektion",
      ",":         "-",
      "sie":       "Pronomen",
      "freut":     "Verb",
      "sich":      "Pronomen",
      "sehr":      "Adverb",
      "über":      "Präposition",
      "das":       "Artikel",
      "Geschenk":  "Nomen",
      "!":         "-"
    },
    model: "Oh → Interjektion | sie → Pronomen | freut → Verb | sich → Pronomen | sehr → Adverb | über → Präposition | das → Artikel | Geschenk → Nomen",
    rule: "<div class=rbox>Interjektion: Ausrufwort, drückt Emotion aus (Oh, Ach, Huch). Pronomen: ersetzt oder begleitet Nomen (sie, sich, er). Präposition: steht vor Nomen und regiert Kasus (über, mit, für).</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Weil er müde war, blieb er zu Hause.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Weil":   "Konjunktion",
      "er":     "Pronomen",
      "müde":   "Adjektiv",
      "war,":   "Verb",
      "blieb":  "Verb",
      "zu":     "Präposition",
      "Hause":  "Nomen",
      ".":      "-"
    },
    model: "Weil → Konjunktion (NS-Einleiter) | er → Pronomen | müde → Adjektiv | war → Verb | blieb → Verb | zu → Präposition | Hause → Nomen",
    rule: "<div class=rbox>Konjunktion (weil, obwohl, dass): leitet Nebensatz ein, Verb ans Ende. Adjektiv als Prädikativum (er ist müde) wird nicht dekliniert. Pronomen (er, sie, wir) ersetzen Nomen.</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Mit dem Fahrrad fährt er täglich zur Schule.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Mit":      "Präposition",
      "dem":      "Artikel",
      "Fahrrad":  "Nomen",
      "fährt":    "Verb",
      "er":       "Pronomen",
      "täglich":  "Adverb",
      "zur":      "Präposition",
      "Schule":   "Nomen",
      ".":        "-"
    },
    model: "Mit → Präposition | dem → Artikel | Fahrrad → Nomen | fährt → Verb | er → Pronomen | täglich → Adverb | zur → Präposition | Schule → Nomen",
    rule: "<div class=rbox>Präpositionen (mit, zu, an, auf) stehen vor Nomen und regieren einen bestimmten Kasus. 'zur' = zusammengezogen aus 'zu' + 'der'. Adverb (täglich) beantwortet die Frage 'Wann?'.</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Die dritte Stunde war langweilig, aber wir haben trotzdem aufgepasst.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Die":         "Artikel",
      "dritte":      "Numerale",
      "Stunde":      "Nomen",
      "war":         "Verb",
      "langweilig,": "Adjektiv",
      "aber":        "Konjunktion",
      "wir":         "Pronomen",
      "haben":       "Verb",
      "trotzdem":    "Adverb",
      "aufgepasst":  "Verb",
      ".":           "-"
    },
    model: "Die → Artikel | dritte → Numerale (Ordinalzahl) | Stunde → Nomen | war → Verb | langweilig → Adjektiv | aber → Konjunktion | wir → Pronomen | haben … aufgepasst → Verb | trotzdem → Adverb",
    rule: "<div class=rbox>Ordinalzahlen (erste, zweite, dritte) sind Numeralien. 'aber' als koordinierende Konjunktion verbindet zwei Hauptsätze. Zweiteiliges Verb (haben … aufgepasst) = Perfekt.</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Huch, das ist ja ein riesiges Tier!",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Huch,":    "Interjektion",
      "das":      "Pronomen",
      "ist":      "Verb",
      "ja":       "Adverb",
      "ein":      "Artikel",
      "riesiges": "Adjektiv",
      "Tier":     "Nomen",
      "!":        "-"
    },
    model: "Huch → Interjektion | das → Pronomen (Demonstrativ) | ist → Verb | ja → Adverb (Modalpartikel) | ein → Artikel | riesiges → Adjektiv | Tier → Nomen",
    rule: "<div class=rbox>'das' ohne nachfolgendes Nomen = Demonstrativpronomen. Interjektionen (Huch, Oh, Ach) drücken spontane Gefühle aus und sind nicht in den Satz integriert. 'ja' als Modalpartikel verstärkt die Aussage.</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Ohne dich gehe ich nicht auf die Party.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Ohne":   "Präposition",
      "dich":   "Pronomen",
      "gehe":   "Verb",
      "ich":    "Pronomen",
      "nicht":  "Adverb",
      "auf":    "Präposition",
      "die":    "Artikel",
      "Party":  "Nomen",
      ".":      "-"
    },
    model: "Ohne → Präposition | dich → Pronomen | gehe → Verb | ich → Pronomen | nicht → Adverb | auf → Präposition | die → Artikel | Party → Nomen",
    rule: "<div class=rbox>'nicht' ist ein Adverb (Negationsadverb). 'ohne' + Akkusativ: ohne dich, ohne ihn. 'auf' + Akkusativ bei Bewegung (auf die Party gehen). Personalpronomen: ich, du, er, sie, wir …</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Alle fünf Schüler haben ihre Hausaufgaben gemacht.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Alle":          "Pronomen",
      "fünf":          "Numerale",
      "Schüler":       "Nomen",
      "haben":         "Verb",
      "ihre":          "Pronomen",
      "Hausaufgaben":  "Nomen",
      "gemacht":       "Verb",
      ".":             "-"
    },
    model: "Alle → Pronomen (Indefinitpronomen) | fünf → Numerale | Schüler → Nomen | haben … gemacht → Verb (Perfekt) | ihre → Pronomen (Possessiv) | Hausaufgaben → Nomen",
    rule: "<div class=rbox>Indefinitpronomen (alle, jeder, manche) stehen oft vor Nomen. Possessivpronomen (ihr, sein, mein) zeigen Zugehörigkeit. Kardinalzahlen (fünf, zwölf) = Numerale.</div>"
  },

  {
    sub: "Wortarten anklicken",
    type: "wortart",
    q: "<b>Bestimme</b> die Wortart: <b>Klicke</b> jedes Wort an und <b>wähle</b> die richtige Wortart aus dem Dropdown-Menü.",
    sentence: "Nach dem langen Weg setzten wir uns erschöpft hin.",
    options: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Numerale","Adverb","Präposition","Konjunktion","Interjektion"],
    correct: {
      "Nach":       "Präposition",
      "dem":        "Artikel",
      "langen":     "Adjektiv",
      "Weg":        "Nomen",
      "setzten":    "Verb",
      "wir":        "Pronomen",
      "uns":        "Pronomen",
      "erschöpft":  "Adjektiv",
      "hin":        "Verb",
      ".":          "-"
    },
    model: "Nach → Präposition | dem → Artikel | langen → Adjektiv | Weg → Nomen | setzten … hin → Verb (trennbares Verb: hinsetzen) | wir → Pronomen | uns → Pronomen | erschöpft → Adjektiv (prädikativ)",
    rule: "<div class=rbox>'nach' + Dativ: nach dem Weg. Trennbare Verben (hinsetzen, aufstehen): Präfix 'hin' ans Ende. 'uns' = Reflexiv-/Personalpronomen (Dativ). 'erschöpft' als Prädikativum = Adjektiv.</div>"
  },

  // ══════════════════════════════════════════════════════════════
  // BLOCK 2: MC – c:0/1/2 gemischt (reine Wortart-Aufgaben)
  // ══════════════════════════════════════════════════════════════

  {
    sub: "'Das' – Artikel oder Demonstrativpronomen?",
    type: "mc",
    q: "'**Das** Haus ist rot.' – Wortart von 'Das'?",
    o: ["Artikel", "Demonstrativpronomen", "Relativpronomen"],
    c: 0,
    model: "A – Artikel (begleitet direkt das Nomen 'Haus')",
    rule: "<div class=rbox>'Das' als Artikel begleitet ein Nomen direkt. Als Demonstrativpronomen steht es allein: 'Das ist mein Haus.'</div>"
  },

  {
    sub: "'Das' – Demonstrativpronomen",
    type: "mc",
    q: "'**Das** ist mein Haus.' – Wortart von 'Das'?",
    o: ["Artikel", "Demonstrativpronomen", "Adjektiv"],
    c: 1,
    model: "B – Demonstrativpronomen (zeigt auf etwas, kein Nomen direkt dahinter)",
    rule: "<div class=rbox>'Das' ohne nachfolgendes Nomen, mit Verweis auf etwas → Demonstrativpronomen.</div>"
  },

  {
    sub: "Interjektion erkennen",
    type: "mc",
    q: "'**Ach**, das ist aber schade!' – Wortart von 'Ach'?",
    o: ["Adverb", "Konjunktion", "Interjektion"],
    c: 2,
    model: "C – Interjektion (Ausrufwort, drückt Bedauern aus)",
    rule: "<div class=rbox>Interjektionen (Ach, Oh, Huch, Pfui, Hurra) drücken spontane Empfindungen aus. Sie sind grammatisch nicht in den Satz eingebunden und stehen meist am Satzanfang.</div>"
  },

  {
    sub: "Adverb oder Adjektiv?",
    type: "mc",
    q: "<b>Bestimme</b> die Wortart von 'sehr' in: 'Ein **sehr** schöner Tag.'",
    o: ["Adjektiv", "Adverb", "Numerale"],
    c: 1,
    model: "B – Adverb / Gradpartikel (steigert das Adjektiv 'schön')",
    rule: "<div class=rbox>Adverbien modifizieren Verben, Adjektive oder andere Adverbien. 'sehr, ziemlich, außerordentlich' steigern/abschwächen ein Adjektiv → Gradadverb.</div>"
  },

  {
    sub: "Reflexivpronomen",
    type: "mc",
    q: "<b>Bestimme</b> die Wortart von 'sich' in: 'Er wäscht **sich**.'",
    o: ["Personalpronomen", "Reflexivpronomen", "Possessivpronomen"],
    c: 1,
    model: "B – Reflexivpronomen (bezieht sich auf das Subjekt zurück)",
    rule: "<div class=rbox>Reflexivpronomen (sich, mich, dich, uns, euch) beziehen sich auf das Subjekt des Satzes zurück.</div>"
  },

  {
    sub: "Numerale – Ordinalzahl",
    type: "mc",
    q: "<b>Bestimme</b> die Wortart von 'ersten' in: 'Sie gewann den **ersten** Platz.'",
    o: ["Adjektiv", "Numerale", "Nomen"],
    c: 1,
    model: "B – Numerale (Ordinalzahl: erste, zweite, dritte …)",
    rule: "<div class=rbox>Ordinalzahlen (erste, zweite, dritte) sind Numeralien. Sie können dekliniert werden, bleiben aber semantisch Zahlangaben.</div>"
  },

  {
    sub: "Konjunktion oder Adverb?",
    type: "mc",
    q: "<b>Bestimme</b> die Wortart von 'trotzdem' in: 'Er war krank, **trotzdem** kam er.'",
    o: ["Konjunktion (NS-Einleiter)", "Adverb / Konjunktionaladverb", "Präposition"],
    c: 1,
    model: "B – Konjunktionaladverb / Adverb (verbindet zwei HS; Verb auf Pos. 2 nach trotzdem)",
    rule: "<div class=rbox>Konjunktionaladverbien (deshalb, trotzdem, dennoch, daher) verbinden Hauptsätze. Das Verb folgt direkt danach (Position 2). Sie leiten KEINEN Nebensatz ein!</div>"
  },

  {
    sub: "Präposition oder Konjunktion?",
    type: "mc",
    q: "<b>Bestimme</b> die Wortart von 'weil' in: 'Ich gehe, **weil** ich müde bin.'",
    o: ["Präposition", "Adverb", "Konjunktion"],
    c: 2,
    model: "C – Konjunktion (leitet Nebensatz ein, Verb ans Ende)",
    rule: "<div class=rbox>Konjunktionen (weil, obwohl, dass, wenn) leiten Nebensätze ein: das Verb steht am Ende des NS.</div>"
  },

  // ══════════════════════════════════════════════════════════════
  // BLOCK 3: CROSS (Wortart zuordnen)
  // ══════════════════════════════════════════════════════════════

  {
    sub: "Nomen / Verb / Adjektiv / Adverb",
    type: "cross",
    q: "<b>Bestimme</b> die Wortart der markierten Wörter: <b>Ordne</b> sie durch Klick in die richtige Spalte ein.",
    rows: [
      "'Das **Lachen** ist ansteckend.' – Lachen",
      "'Er **läuft** schnell.' – läuft",
      "'Ein **kluger** Hund.' – kluger",
      "'Sie singt **wunderschön**.' – wunderschön",
      "'Das **Haus** ist alt.' – Haus",
      "'Wir fahren **heute**.' – heute"
    ],
    cols: ["Nomen / Verb / Adj.", "Adverb"],
    correct: [0, 0, 0, 1, 0, 1],
    model: "Lachen ✓ Nomen | läuft ✓ Verb | kluger ✓ Adjektiv | wunderschön ✓ Adverb | Haus ✓ Nomen | heute ✓ Adverb",
    rule: "<div class=rbox>Adverb: modifiziert Verb/Adjektiv, nicht dekliniert (wunderschön, heute). Adjektiv: dekliniert, beschreibt Nomen. Nomen: großgeschrieben. Nominalisierter Infinitiv (das Lachen) = Nomen.</div>"
  },

  {
    sub: "Pronomenarten",
    type: "cross",
    q: "<b>Entscheide</b>: Handelt es sich um ein Personalpronomen oder ein anderes Pronomen? <b>Ordne</b> durch Klick zu.",
    rows: [
      "'Er hilft **ihr**.' – ihr",
      "'**Das** ist mein Haus.' – Das (zeigt auf etwas)",
      "'Das ist **mein** Auto.' – mein",
      "'**Man** sagt das so.' – Man",
      "'Das Kind, **das** dort spielt.' – das (nach Komma)",
      "'**Jemand** hat gerufen.' – Jemand"
    ],
    cols: ["Personalpronomen", "anderes Pronomen (Demonstrativ, Possessiv, Indefinit, Relativ)"],
    correct: [0, 1, 1, 1, 1, 1],
    model: "ihr ✓ Personal | das ✓ Demonstrativ | mein ✓ Possessiv | man ✓ Indefinit | das ✓ Relativpronomen | Jemand ✓ Indefinit",
    rule: "<div class=rbox>Personalpronomen: ich, du, er, sie, es, wir, ihr, sie. Demonstrativ: dieser, das. Possessiv: mein, dein, sein. Relativ: der/die/das nach Nomen. Indefinit: man, jemand, etwas.</div>"
  },

  {
    sub: "Konjunktion oder Präposition oder Adverb?",
    type: "cross",
    q: "<b>Bestimme</b>: Ist das markierte Wort Konjunktion (leitet Nebensatz ein), Präposition (mit Kasus) oder Adverb? <b>Ordne</b> durch Klick zu.",
    rows: [
      "'Ich gehe, **weil** ich müde bin.' – weil",
      "'**Mit** dem Hund.' – mit",
      "'**Trotzdem** kam er.' – trotzdem",
      "'**Seit** drei Jahren.' – seit",
      "'Er kam, **obwohl** er müde war.' – obwohl",
      "'**Deshalb** blieb sie.' – deshalb"
    ],
    cols: ["Konjunktion (NS-Einleiter)", "Präposition / Adverb (HS-Anschluss)"],
    correct: [0, 1, 1, 1, 0, 1],
    model: "weil ✓ Konjunktion | mit ✓ Präposition | trotzdem ✓ Adverb (HS) | seit ✓ Präposition | obwohl ✓ Konjunktion | deshalb ✓ Adverb (HS)",
    rule: "<div class=rbox>Konjunktionen (weil, obwohl, dass) → Verb ans Ende. Präpositionen regieren Kasus (mit + Dativ). Konjunktionaladverbien (trotzdem, deshalb) → Verb auf Pos. 2 im HS.</div>"
  },

  // ══════════════════════════════════════════════════════════════
  // BLOCK 4: MC3 (Wortart-Auswahl per Zeile)
  // ══════════════════════════════════════════════════════════════

  {
    sub: "Wortart bestimmen (gemischt)",
    type: "mc3",
    q: "<b>Bestimme</b> die Wortart: <b>Wähle</b> für jede Zeile die richtige Wortart aus den drei Optionen.",
    rows: [
      ["Nomen", "Verb", "Adjektiv"],
      ["Adverb", "Adjektiv", "Nomen"],
      ["Personalpronomen", "Reflexivpronomen", "Possessivpronomen"],
      ["Konjunktion", "Präposition", "Adverb"],
      ["Numerale", "Adjektiv", "Adverb"],
      ["Interjektion", "Konjunktion", "Adverb"]
    ],
    labels: [
      "'Das Lachen' – Lachen",
      "'wunderschön' – Adv. oder Adj.?",
      "'sich' in 'er wäscht sich'",
      "'deshalb' in HS-Verbindung",
      "'drei Freunde' – drei",
      "'Huch!' – Huch"
    ],
    correct: [0, 0, 1, 2, 0, 0],
    model: "Lachen ✓ Nomen | wunderschön ✓ Adverb | sich ✓ Reflexivpronomen | deshalb ✓ Adverb | drei ✓ Numerale | Huch ✓ Interjektion",
    rule: "<div class=rbox>Nominalisierter Infinitiv = Nomen. Adverb modifiziert Verb (nicht dekliniert). sich = Reflexivpronomen. deshalb = HS-Verbinder (Adverb). drei = Numerale. Huch = Interjektion.</div>"
  },

  // ══════════════════════════════════════════════════════════════
  // BLOCK 5: MATCH (Wortart → Beispiel)
  // ══════════════════════════════════════════════════════════════

  {
    sub: "Wortart → Beispiel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jede Wortart mit einem passenden Beispiel.",
    pairs: [
      ["Nomen",        "Tisch, Freude, Lachen, Berlin"],
      ["Verb",         "laufen, ist, hat gegessen, werden"],
      ["Adjektiv",     "groß, schöner, kalt, müde"],
      ["Artikel",      "der, die, das, ein, eine"],
      ["Pronomen",     "er, sie, mein, sich, jemand"],
      ["Numerale",     "drei, erste, zweimal, halb"],
      ["Adverb",       "heute, schnell, sehr, trotzdem"],
      ["Präposition",  "mit, für, wegen, auf, durch"],
      ["Konjunktion",  "und, weil, obwohl, oder, dass"],
      ["Interjektion", "Oh! Huch! Ach! Pfui! Hurra!"]
    ],
    model: "Nomen → Tisch | Verb → laufen | Adjektiv → groß | Artikel → der/ein | Pronomen → er/mein | Numerale → drei | Adverb → heute | Präposition → mit | Konjunktion → weil | Interjektion → Oh!",
    rule: "<div class=rbox>Die 10 Wortarten: Nomen (Dinge/Begriffe), Verb (Tätigkeit), Adjektiv (Eigenschaft), Artikel (Begleiter), Pronomen (Vertreter), Numerale (Zahl), Adverb (Umstand), Präposition (Verhältnis), Konjunktion (Verbindung), Interjektion (Ausruf).</div>"
  },

  {
    sub: "Präposition → Kasus zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jede Präposition mit dem Kasus, den sie regiert.",
    pairs: [
      ["wegen", "Genitiv"],
      ["mit",   "Dativ"],
      ["für",   "Akkusativ"],
      ["nach",  "Dativ"],
      ["durch", "Akkusativ"],
      ["trotz", "Genitiv"]
    ],
    model: "wegen → Genitiv | mit → Dativ | für → Akkusativ | nach → Dativ | durch → Akkusativ | trotz → Genitiv",
    rule: "<div class=rbox>Genitiv: wegen, während, trotz, anstatt. Dativ: mit, bei, außer, nach, seit, von, zu. Akkusativ: durch, für, gegen, ohne, um.</div>"
  }

  ]
}
];
