// ================================================================
// MSA-EXTRA-INDIREKTE-REDE.JS
// Thema: Indirekte Rede (Konjunktiv I & II)
// Aufgabentypen: mc, cross, mc3, match
// Antwortvarianz: mc c:0/1/2 gemischt; cross ausgewogen
// ================================================================

var MSA_EXTRA_INDIREKTE_REDE = [
{
  id: "extra_ind_rede",
  title: "Indirekte Rede (Konjunktiv)",
  emoji: "💬",
  color: "#7c3aed",
  qs: [

  // ── TYP 1: CROSS (Verbform bestimmen) ──

  {
    sub: "Konjunktiv I – Formen erkennen",
    type: "cross",
    q: "<b>Bestimme</b>: Welche Verbform ist Konjunktiv I (nicht Indikativ, nicht Konjunktiv II)? <b>Ordne</b> durch Klick zu.",
    rows: [
      "sein → er ___",
      "kommen → er ___",
      "haben → wir ___",
      "gehen → sie (Pl.) ___",
      "können → er ___",
      "sagen → sie (Sg.) ___"
    ],
    cols: ["Konjunktiv I", "Konjunktiv II / Indikativ"],
    correct: [0, 0, 1, 1, 0, 0],
    model: "er sei ✓ KI | er komme ✓ KI | wir haben → KI = Indikativ → KII: hätten ✓ | sie gehen → KI = Indikativ → KII: gingen ✓ | er könne ✓ KI | sie sage ✓ KI",
    rule: "<div class=rbox>Konjunktiv I (er sei, er komme, er könne, sie sage) wird in der indirekten Rede bevorzugt. Wenn KI = Indikativ (wir haben, sie gehen), weicht man auf Konjunktiv II aus (hätten, gingen).</div>"
  },

  {
    sub: "Konjunktiv I oder II? – Ersetzen nötig?",
    type: "cross",
    q: "<b>Entscheide</b>: Kann der Konjunktiv I direkt verwendet werden, oder muss man auf Konjunktiv II ausweichen? <b>Ordne</b> durch Klick zu.",
    rows: [
      "er → sagen (er sagt / er sage)",
      "wir → gehen (wir gehen / wir gingen)",
      "sie (Pl.) → kommen (sie kommen / sie kämen)",
      "du → haben (du hast / du habest)",
      "ich → sein (ich bin / ich sei)",
      "er → wissen (er weiß / er wisse)"
    ],
    cols: ["KI verwendbar", "KII nötig (KI = Indikativ)"],
    correct: [0, 1, 1, 0, 1, 0],
    model: "er sage ✓ KI verwendbar | wir gingen ✓ KII | sie kämen ✓ KII | du habest ✓ KI (kein Indikativ) | ich sei = Indikativ → ich sei → aber du sagst KI ist problematisch… | er wisse ✓ KI",
    rule: "<div class=rbox>Konjunktiv I kann verwendet werden, wenn er sich klar vom Indikativ unterscheidet. Bei Personenformen, wo KI = Indikativ (wir gehen = KI und Indikativ), weicht man auf Konjunktiv II aus.</div>"
  },

  // ── TYP 2: MC (c:0 / c:1 / c:2 gemischt) ──

  {
    sub: "Konjunktiv I bilden: sein",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Er ist müde.' → Er sagt, er ___ müde.",
    o: ["ist", "sei", "wäre"],
    c: 1,
    model: "B – sei (Konjunktiv I von 'sein')",
    rule: "<div class=rbox>Indirekte Rede → Konjunktiv I. sein → er sei (nicht: er ist = Indikativ, nicht: er wäre = KII).</div>"
  },

  {
    sub: "Konjunktiv I bilden: kommen",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Ich komme morgen.' → Er sagt, er ___ am nächsten Tag.",
    o: ["kommt", "käme", "komme"],
    c: 2,
    model: "C – komme (Konjunktiv I von 'kommen')",
    rule: "<div class=rbox>kommen → Konjunktiv I: er komme. Zeitangaben werden angepasst: 'morgen' → 'am nächsten Tag'.</div>"
  },

  {
    sub: "Konjunktiv II als Ersatz (wir-Form)",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Wir haben kein Geld.' → Sie behaupten, sie ___ kein Geld.",
    o: ["haben", "hätten", "habet"],
    c: 1,
    model: "B – hätten (KII als Ersatz: KI 'haben' = Indikativ bei 'wir')",
    rule: "<div class=rbox>haben (wir): KI = 'haben' = Indikativ → Ausweichen auf KII: hätten.</div>"
  },

  {
    sub: "Konjunktiv I Perfekt",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Ich habe das Geld gefunden.' → Er sagt, er ___ das Geld gefunden.",
    o: ["hat", "habe", "hätte"],
    c: 1,
    model: "B – habe … gefunden (Konjunktiv I Perfekt: habe + Partizip II)",
    rule: "<div class=rbox>Perfekt in indirekter Rede → Konjunktiv I Perfekt: habe + Partizip II (er habe das Geld gefunden).</div>"
  },

  {
    sub: "Konjunktiv I Perfekt mit 'sein'",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Er ist abgereist.' → Sie meldet, er ___ abgereist.",
    o: ["sei", "wäre", "ist"],
    c: 0,
    model: "A – sei abgereist (Konjunktiv I mit 'sein': Bewegungsverb)",
    rule: "<div class=rbox>Bewegungsverben: Perfekt mit 'sein' → in indirekter Rede: sei + Partizip II (er sei abgereist).</div>"
  },

  {
    sub: "Pronomenanpassung",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke und <b>beachte</b> die Pronomenanpassung: 'Ich habe dich vermisst.' → Er sagt, er ___ ___ vermisst.",
    o: ["habe sie vermisst (Pronomen angepasst)", "hätte dich vermisst", "habe mich vermisst"],
    c: 0,
    model: "A – habe sie vermisst: 'ich' → 'er', 'dich' → 'sie' (oder 'ihn')",
    rule: "<div class=rbox>In der indirekten Rede müssen Personalpronomen angepasst werden: ich → er/sie, dich → ihn/sie/mich je nach Kontext.</div>"
  },

  {
    sub: "Modalverb in indirekter Rede",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Ich kann das erklären.' → Sie sagt, sie ___ das erklären.",
    o: ["kann", "könne", "könnte"],
    c: 1,
    model: "B – könne (Konjunktiv I von 'können')",
    rule: "<div class=rbox>können → Konjunktiv I: er/sie könne.</div>"
  },

  {
    sub: "Konjunktiv II als Ersatz: laufen",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Sie laufen täglich.' → Er sagt, sie ___ täglich.",
    o: ["laufen", "liefen", "laufen würden"],
    c: 1,
    model: "B – liefen (KII als Ersatz: KI 'laufen' = Indikativ bei 'sie')",
    rule: "<div class=rbox>laufen (sie/Plural): KI = Indikativ → Konjunktiv II: liefen.</div>"
  },

  {
    sub: "Konjunktiv I: mögen",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Ich mag Pizza.' → Sie sagt, sie ___ Pizza.",
    o: ["mag", "möge", "möchte"],
    c: 1,
    model: "B – möge (Konjunktiv I von 'mögen')",
    rule: "<div class=rbox>mögen → Konjunktiv I: sie möge.</div>"
  },

  {
    sub: "Konjunktiv I: müssen",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Die Arbeit muss fertig sein.' → Er sagt, die Arbeit ___ fertig sein.",
    o: ["müsse", "muss", "müsste"],
    c: 0,
    model: "A – müsse (Konjunktiv I von 'müssen')",
    rule: "<div class=rbox>müssen → Konjunktiv I: müsse (er müsse, sie müsse).</div>"
  },

  {
    sub: "Konjunktiv II als Ersatz: wissen",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Wir wissen es nicht.' → Er sagt, sie ___ es nicht.",
    o: ["wissen", "wüssten", "wisset"],
    c: 1,
    model: "B – wüssten (KII: KI 'wissen' = Indikativ bei 'wir/sie')",
    rule: "<div class=rbox>wissen (wir/sie): KI = Indikativ → KII: wüssten.</div>"
  },

  {
    sub: "KI vs. KII: gehen",
    type: "mc",
    q: "<b>Bestimme</b>: Welche Form ist Konjunktiv I von 'gehen' (3. Person Singular)?",
    o: ["geht", "gehe", "ginge"],
    c: 1,
    model: "B – gehe (KI, 3. Pers. Sg.)",
    rule: "<div class=rbox>gehen → KI: er gehe. KII: er ginge. Indikativ: er geht.</div>"
  },

  // ── TYP 3: MC3 (Verbform-Auswahl pro Zeile) ──

  {
    sub: "Konjunktiv-Formen wählen",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die richtige Verbform für die indirekte Rede.",
    rows: [
      ["er sei", "er ist", "er wäre"],
      ["sie komme", "sie kommt", "sie käme"],
      ["wir hätten", "wir haben", "wir hatten"],
      ["er könne", "er kann", "er konnte"],
      ["sie sei gegangen", "sie ist gegangen", "sie wäre gegangen"],
      ["er müsse", "er muss", "er müsste"]
    ],
    correct: [0, 0, 0, 0, 0, 0],
    model: "er sei ✓ | sie komme ✓ | wir hätten ✓ (KII-Ersatz) | er könne ✓ | sie sei gegangen ✓ | er müsse ✓",
    rule: "<div class=rbox>Konjunktiv I bevorzugt; wenn KI = Indikativ (wir haben), Ausweichen auf KII (hätten).</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Direkter Satz → Indirekte Rede zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jeden direkten Satz mit der korrekten indirekten Rede.",
    pairs: [
      ["Er sagt: 'Ich bin krank.'", "Er sagt, er sei krank."],
      ["Sie fragt: 'Hast du Zeit?'", "Sie fragt, ob er Zeit habe."],
      ["Er sagt: 'Wir gehen.'", "Er sagt, sie gingen. (KII-Ersatz)"],
      ["Sie sagt: 'Es regnet.'", "Sie sagt, es regne."],
      ["Er sagt: 'Ich habe gewonnen.'", "Er sagt, er habe gewonnen."],
      ["Sie behauptet: 'Er ist weg.'", "Sie behauptet, er sei weg."]
    ],
    model: "sei krank | ob habe | gingen (KII) | es regne | habe gewonnen | sei weg",
    rule: "<div class=rbox>Indirekte Rede: Konjunktiv I einsetzen. Bei KI = Indikativ → Konjunktiv II. Fragesätze mit 'ob' einleiten.</div>"
  },

  {
    sub: "Verb → Konjunktiv-I-Form zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jedes Verb mit seiner Konjunktiv-I-Form (er/sie Singular).",
    pairs: [
      ["sein", "er sei"],
      ["haben", "er habe"],
      ["werden", "er werde"],
      ["können", "er könne"],
      ["müssen", "er müsse"],
      ["sagen", "er sage"]
    ],
    model: "sein → sei | haben → habe | werden → werde | können → könne | müssen → müsse | sagen → sage",
    rule: "<div class=rbox>Konjunktiv I Bildung: Verbstamm + Endung -e (er sage, er habe, er werde). Unregelmäßig: sein → sei.</div>"
  },

  // ── Weitere MC – schwierige Spezialfälle ──

  {
    sub: "Konjunktiv I: Futur",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Rede: 'Es wird bald besser.' → Sie hofft, es ___ bald besser.",
    o: ["wird", "werde", "würde"],
    c: 1,
    model: "B – werde (Konjunktiv I von 'werden')",
    rule: "<div class=rbox>werden → Konjunktiv I: es werde. (KII: würde – für irreale Bedingungen, nicht für Zukunft in indirekter Rede)</div>"
  },

  {
    sub: "KI Perfekt – Frage",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke in der indirekten Frage: 'Warst du da?' → Er fragt, ob er ___ gewesen ___.",
    o: ["war … –", "sei … –", "wäre … –"],
    c: 1,
    model: "B – sei gewesen (Konjunktiv I Perfekt von 'sein')",
    rule: "<div class=rbox>sein, Perfekt in indirekter Rede: sei gewesen. Konjunktiv I Perfekt = sei/habe + Partizip II.</div>"
  },

  {
    sub: "Aufforderung in indirekter Rede",
    type: "mc",
    q: "<b>Ergänze</b> die Lücke: 'Bleibt hier!', rief er. → Er forderte uns auf, dass wir hier ___.",
    o: ["bleiben", "blieben", "bleibet"],
    c: 1,
    model: "B – blieben (Konjunktiv II bei Aufforderung)",
    rule: "<div class=rbox>Aufforderungen in indirekter Rede → oft Konjunktiv II: er forderte, dass wir blieben.</div>"
  }

  ]
}
];
