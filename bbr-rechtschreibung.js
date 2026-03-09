var BBR_RECHTSCHREIBUNG_THEMES = [
  {
    id: "bbr_extra_rechtschreibung",
    title: "Häufige Rechtschreibprobleme (extra)",
    emoji: "✏️",
    color: "#b45309",
    qs: [
      {
        sub: "das oder dass (2)",
        type: "cross",
        q: "das oder dass?",
        rows: [
          "Ich hoffe, ___ du kommst.",
          "___ Buch ist interessant.",
          "Das Auto, ___ er fährt, ist rot.",
          "Sie sagte, ___ sie müde sei.",
          "Weißt du, ___ er meint?"
        ],
        cols: ["das", "dass"],
        correct: [1, 0, 0, 1, 1],
        model: "dass leitet Nebensatz ein; das als Artikel oder Relativpronomen.",
        rule: "<div class=rbox>Ersatzprobe: Kann man 'dieses' oder 'welches' einsetzen? → das. Sonst → dass.</div>"
      },
      {
        sub: "wieder oder wider?",
        type: "cross",
        q: "wieder (erneut) oder wider (gegen)?",
        rows: [
          "Er kommt ___ (erneut).",
          "Das ist ___ (gegen) die Regeln.",
          "Ich habe ihn ___ (zurück) gesehen.",
          "Sie sprach ___ (dagegen) den Vorschlag.",
          "Wir treffen uns ___ (erneut)."
        ],
        cols: ["wieder", "wider"],
        correct: [0, 1, 0, 1, 0],
        model: "wieder = noch einmal, zurück; wider = gegen.",
        rule: "<div class=rbox><span class=hl>wieder</span> bedeutet 'noch einmal' oder 'zurück', <span class=hl>wider</span> bedeutet 'gegen'.</div>"
      },
      {
        sub: "seid oder seit (2)",
        type: "cross",
        q: "seid (ihr seid) oder seit (zeitlich)?",
        rows: [
          "___ wann wart ihr da?",
          "Ihr ___ so lustig!",
          "___ dem Unfall hat er Angst.",
          "___ ihr endlich fertig?",
          "___ Jahren wohnen wir hier."
        ],
        cols: ["seid", "seit"],
        correct: [1, 0, 1, 0, 1],
        model: "seit = zeitlich, seid = 2. Pers. Pl. von sein.",
        rule: "<div class=rbox>Probe: Kann man 'seid' durch 'ihr' ersetzen? Ja → seid. Sonst zeitlich → seit.</div>"
      },
      {
        sub: "end oder ent?",
        type: "cross",
        q: "end (Ende) oder ent (Vorsilbe)?",
        rows: [
          "Das ___e des Films war spannend.",
          "Er ___schied sich für das Angebot.",
          "Am ___e der Straße.",
          "Sie ___deckte einen Fehler.",
          "Das Buch ist zu ___e."
        ],
        cols: ["end", "ent"],
        correct: [0, 1, 0, 1, 0],
        model: "end = Ende (Nomen); ent = Vorsilbe (entdecken, entscheiden).",
        rule: "<div class=rbox><span class=hl>End</span> kommt von Ende, <span class=hl>ent</span> ist eine Vorsilbe wie in entdecken.</div>"
      },
      {
        sub: "fiel oder viel?",
        type: "cross",
        q: "fiel (fallen) oder viel (Menge)?",
        rows: [
          "Er ___ vom Fahrrad.",
          "Sie hat ___ Geld.",
          "Das ___ ihm schwer.",
          "Es gab ___ zu tun.",
          "Der Apfel ___ vom Baum."
        ],
        cols: ["fiel", "viel"],
        correct: [0, 1, 0, 1, 0],
        model: "fiel = Präteritum von fallen; viel = Menge.",
        rule: "<div class=rbox><span class=hl>fiel</span> ist die Vergangenheit von fallen, <span class=hl>viel</span> bedeutet 'eine große Menge'.</div>"
      },
      {
        sub: "mal oder Mahl?",
        type: "cross",
        q: "mal (Zeitpunkt, Multiplikation) oder Mahl (Essen)?",
        rows: [
          "Komm ___ vorbei!",
          "Das ___ ist angerichtet.",
          "Drei ___ vier ist zwölf.",
          "Wir essen ein ___.",
          "Ich war schon ___ da."
        ],
        cols: ["mal", "Mahl"],
        correct: [0, 1, 0, 1, 0],
        model: "mal = Multiplikation oder Partikel; Mahl = Mahlzeit.",
        rule: "<div class=rbox><span class=hl>mal</span> (klein) ist ein Adverb oder Multiplikationszeichen, <span class=hl>Mahl</span> (groß) ist das Essen.</div>"
      },
      {
        sub: "Doppelkonsonanten",
        type: "cross",
        q: "Ist die Schreibweise korrekt? (Die Wörter stehen ohne Klammern – entscheide allein aufgrund der Rechtschreibung.)",
        rows: [
          "Komm mit",
          "renen",
          "Schwimmen",
          "Tip",
          "Schifffahrt"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Komm, Schwimmen, Schifffahrt sind korrekt; renen und Tip falsch (richtig: rennen, Tipp).",
        rule: "<div class=rbox>Nach kurzem Vokal wird der Konsonant verdoppelt. Bei drei gleichen Buchstaben bleiben alle (Schifffahrt).</div>"
      },
      {
        sub: "Dehnungs-h",
        type: "cross",
        q: "Ist die Schreibweise mit h korrekt?",
        rows: [
          "fahren",
          "sehren",
          "Zahl",
          "Kohle",
          "Das erste Mal war er dabei." // ohne h, korrekt
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 0],
        model: "fahren, Zahl, Kohle, Mal sind korrekt; sehren falsch (richtig: sehr).",
        rule: "<div class=rbox>Dehnungs-h steht nach langem Vokal oft bei bestimmten Wörtern (fahren, Zahl, Kohle). Es gibt aber Ausnahmen (Mal ohne h).</div>"
      },
      {
        sub: "Gemischte Rechtschreibprobleme",
        type: "cross",
        q: "Ist die Schreibweise korrekt?",
        rows: [
          "Das ist das Beste.",
          "Er fährt rad.",
          "Heute Abend.",
          "Sie hat recht.", // nach aktueller Rechtschreibung korrekt (klein)
          "Ich bin der Meinung."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 0],
        model: "Das Beste (groß) korrekt; rad (klein) falsch; heute Abend (groß) korrekt; recht haben (klein) korrekt; Meinung (groß) korrekt.",
        rule: "<div class=rbox>Achtung bei Groß- und Kleinschreibung: Substantive groß, Adjektive/Verben klein. 'recht haben' ist eine feste Wendung mit kleinem Adjektiv.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "cross",
        q: "Ist die Schreibweise korrekt?",
        rows: [
          "Telephon",
          "Fotographie",
          "Portemonnaie",
          "Spagetti",
          "Mayonaise"
        ],
        cols: ["korrekt", "falsch"],
        correct: [1, 1, 0, 1, 1],
        model: "Telephon (heute: Telefon), Fotographie (heute: Fotografie), Spagetti (heute: Spaghetti), Mayonaise (heute: Mayonnaise) sind falsch; Portemonnaie ist korrekt.",
        rule: "<div class=rbox>Bei Fremdwörtern auf die korrekte Schreibung achten: Telefon, Fotografie, Spaghetti, Mayonnaise.</div>"
      },
      {
        sub: "Gemischte Übung (Multiple Choice)",
        type: "mc",
        q: "Welcher Satz ist korrekt geschrieben?\n\n(A) Er hat viel Geld.\n(B) Er viel vom Fahrrad.\n(C) Seid wann wart ihr da?\n(D) Das ist wieder die Regeln.",
        o: [
          "nur A",
          "A und C",
          "B und D",
          "A und B (aber B enthält einen Fehler)"
        ],
        c: 0,
        model: "A ist korrekt (viel). B falsch (fiel), C falsch (seit), D falsch (wider).",
        rule: "<div class=rbox>Übung zu häufigen Fehlerwörtern.</div>"
      }
    ]
  }
];