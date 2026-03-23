// ================================================================
// MSA-EXTRA-SATZBAU.JS
// Thema: Satzbau & Satzverbindungen
// Aufgabentypen: mc, cross, match, mc3
// Antwortvarianz: mc c:0/1/2 gemischt; cross ausgewogen
// ================================================================

var MSA_EXTRA_SATZBAU = [
{
  id: "extra_satzbau",
  title: "Satzbau & Satzverbindungen",
  emoji: "🔗",
  color: "#9333ea",
  qs: [

  // ── TYP 1: CROSS (Konjunktion zuordnen) ──

  {
    sub: "NS-Konjunktion oder HS-Verbinder?",
    type: "cross",
    q: "<b>Entscheide</b>: Leitet das Wort einen Nebensatz ein (Verb ans Ende) oder verbindet es Hauptsätze (Verb auf Position 2)? <b>Ordne</b> durch Klick zu.",
    rows: [
      "'weil' – Ich bleibe, ___ es regnet.",
      "'deshalb' – Es regnet, ___ bleibe ich.",
      "'obwohl' – Er kam, ___ er müde war.",
      "'trotzdem' – Er war müde, ___ kam er.",
      "'dass' – Er sagt, ___ er kommt.",
      "'daher' – Er war krank, ___ fehlte er."
    ],
    cols: ["NS-Einleiter (Verb ans Ende)", "HS-Verbinder (Verb auf Pos. 2)"],
    correct: [0, 1, 0, 1, 0, 1],
    model: "weil ✓ NS | deshalb ✓ HS | obwohl ✓ NS | trotzdem ✓ HS | dass ✓ NS | daher ✓ HS",
    rule: "<div class=rbox>NS-Konjunktionen (weil, obwohl, dass, wenn, als, ob) → Verb ans Ende. HS-Verbinder / Konjunktionaladverbien (deshalb, trotzdem, daher, dennoch) → Verb direkt danach (Pos. 2).</div>"
  },

  {
    sub: "Kausale oder konzessive Verbindung?",
    type: "cross",
    q: "<b>Bestimme</b>: Drückt der Satz einen Grund (kausal) oder einen Gegensatz/Einräumung (konzessiv) aus? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Er blieb zu Hause, weil er erkältet war.",
      "Wir gingen spazieren, obwohl es regnete.",
      "Sie hat Erfolg, da sie fleißig ist.",
      "Er kam zur Party, obwohl er müde war.",
      "Ich lerne viel, denn ich will bestehen.",
      "Er ist reich, trotzdem ist er unglücklich."
    ],
    cols: ["kausal (Grund)", "konzessiv (Einräumung/Gegensatz)"],
    correct: [0, 1, 0, 1, 0, 1],
    model: "weil ✓ kausal | obwohl ✓ konzessiv | da ✓ kausal | obwohl ✓ konzessiv | denn ✓ kausal | trotzdem ✓ konzessiv",
    rule: "<div class=rbox>Kausal (Grund): weil, da, denn. Konzessiv (Gegensatz/Einräumung): obwohl, obgleich, trotzdem, dennoch.</div>"
  },

  {
    sub: "'als' oder 'wenn'? – temporal",
    type: "cross",
    q: "<b>Entscheide</b>: Verwendet man 'als' (einmaliges Ereignis in der Vergangenheit) oder 'wenn' (Wiederholung / Zukunft / Bedingung)? <b>Ordne</b> durch Klick zu.",
    rows: [
      "___ ich Kind war, spielte ich viel. (einmaliger Zeitraum)",
      "___ es regnet, nehme ich den Schirm. (immer wieder)",
      "___ er ankam, war es dunkel. (einmaliges Ereignis)",
      "___ du Zeit hast, ruf mich an. (Bedingung/Zukunft)",
      "___ ich jung war, träumte ich viel. (einmalig Verg.)",
      "___ du kommst, freue ich mich. (Wiederholung)"
    ],
    cols: ["als (einmalig, Verg.)", "wenn (Wiederholung / Zukunft / Bed.)"],
    correct: [0, 1, 0, 1, 0, 1],
    model: "als ✓ | wenn ✓ | als ✓ | wenn ✓ | als ✓ | wenn ✓",
    rule: "<div class=rbox>'als' = einmaliges Ereignis/Zeitraum in der Vergangenheit. 'wenn' = Wiederholung in der Vergangenheit, Bedingung oder Zukunft.</div>"
  },

  // ── TYP 2: MC – c:0/1/2 gemischt ──

  {
    sub: "Finalsatz oder Kausalsatz?",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion: 'Ich lerne viel, ___ ich die Prüfung bestehe.'",
    o: ["weil", "damit", "obwohl"],
    c: 1,
    model: "B – damit (Ziel/Absicht → Finalsatz)",
    rule: "<div class=rbox>damit = Absicht/Ziel → Finalsatz. weil = Grund → Kausalsatz.</div>"
  },

  {
    sub: "Konsekutivsatz",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion: 'Er rennt, ___ er den Bus kriegt.'",
    o: ["sodass", "weil", "obwohl"],
    c: 0,
    model: "A – sodass (Folge → Konsekutivsatz)",
    rule: "<div class=rbox>sodass = Folge/Ergebnis → Konsekutivsatz.</div>"
  },

  {
    sub: "Temporalsatz: Vorzeitigkeit",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion (Vorzeitigkeit): '___ es aufgehört hatte zu regnen, gingen sie raus.'",
    o: ["Als", "Nachdem", "Sobald"],
    c: 1,
    model: "B – Nachdem (Vorzeitigkeit: erst A, dann B → Plusquamperfekt im NS)",
    rule: "<div class=rbox>nachdem = Vorzeitigkeit: die Handlung im NS ist abgeschlossen, bevor die HS-Handlung beginnt. Oft mit Plusquamperfekt im NS.</div>"
  },

  {
    sub: "Konditionalsatz",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion: '___ du Zeit hast, hilf mir.'",
    o: ["Wenn", "Ob", "Dass"],
    c: 0,
    model: "A – Wenn (Bedingung → Konditionalsatz)",
    rule: "<div class=rbox>Wenn = Bedingung → Konditionalsatz. ob = indirekter Fragesatz. dass = Inhaltssatz.</div>"
  },

  {
    sub: "denn vs. weil",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion für einen Hauptsatz (Verb bleibt auf Position 2): 'Ich gehe schlafen, ___ ich bin müde.'",
    o: ["weil", "denn", "obwohl"],
    c: 1,
    model: "B – denn (Hauptsatz-Konjunktion: Verb bleibt auf Pos. 2)",
    rule: "<div class=rbox>denn = kausal, verbindet zwei HS (Verb auf Pos. 2). weil = NS-Einleiter (Verb ans Ende).</div>"
  },

  {
    sub: "nicht … sondern",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion: 'Nicht nur ich, ___ auch du bist da.'",
    o: ["sondern", "aber", "oder"],
    c: 0,
    model: "A – sondern (nicht nur…sondern auch = Erweiterung nach Verneinung)",
    rule: "<div class=rbox>sondern = Entgegenstellung nach Verneinung. aber = normaler Gegensatz ohne vorherige Verneinung.</div>"
  },

  {
    sub: "Indirekter Fragesatz: ob vs. wann",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion für die indirekte Zeitfrage: 'Ich fragte mich, ___ das alles enden würde.'",
    o: ["ob", "wenn", "wann"],
    c: 2,
    model: "C – wann (Zeitfrage → indirekter Fragesatz mit Fragewort)",
    rule: "<div class=rbox>Indirekter Fragesatz mit Fragewort (wer, was, wann, wo, wie, warum). ob = Entscheidungsfrage (ja/nein).</div>"
  },

  {
    sub: "um…zu oder damit?",
    type: "mc",
    q: "<b>Ergänze</b> die passende Konjunktion bei gleichem Subjekt: 'Er arbeitet, ___ Geld zu verdienen.'",
    o: ["um", "damit", "weil"],
    c: 0,
    model: "A – um (zu verdienen) → Infinitivkonstruktion bei gleichem Subjekt",
    rule: "<div class=rbox>um…zu + Infinitiv: Absicht, wenn Subjekt gleich bleibt. damit + NS: wenn Subjekt verschieden ist.</div>"
  },

  {
    sub: "Relativsatz: Genus des Relativpronomens",
    type: "mc",
    q: "<b>Ergänze</b> das richtige Relativpronomen: 'Das ist der Schüler, ___ morgen eine Prüfung hat.'",
    o: ["den", "der", "dem"],
    c: 1,
    model: "B – der (Schüler = mask., Subjekt im RS → Nominativ → der)",
    rule: "<div class=rbox>Relativpronomen richtet sich nach Genus des Bezugsworts (Schüler = mask.) und Kasus im Relativsatz (Subjekt = Nominativ → der).</div>"
  },

  {
    sub: "Parataxe oder Hypotaxe?",
    type: "mc",
    q: "<b>Bestimme</b> die Satzstruktur: 'Er lachte, weil er die Lösung kannte.' – Parataxe oder Hypotaxe?",
    o: ["Parataxe (HS + HS gleichwertig)", "Hypotaxe (HS + NS untergeordnet)"],
    c: 1,
    model: "B – Hypotaxe (HS: Er lachte + NS: weil er die Lösung kannte)",
    rule: "<div class=rbox>Hypotaxe = Satzgefüge aus HS + NS (Unterordnung). Parataxe = zwei gleichwertige Hauptsätze nebeneinander.</div>"
  },

  {
    sub: "Verb-End-Stellung im NS",
    type: "mc",
    q: "<b>Wähle</b> den grammatikalisch korrekt formulierten Satz (Achtung: Wortstellung im Nebensatz).",
    o: ["Ich weiß, dass er morgen kommt.", "Ich weiß, dass er kommt morgen.", "Ich weiß, er kommt morgen dass."],
    c: 0,
    model: "A – Im Nebensatz steht das Verb am Ende (nach 'dass').",
    rule: "<div class=rbox>Im Nebensatz (nach 'dass', 'weil', 'obwohl') steht das finite Verb am Ende.</div>"
  },

  {
    sub: "Verb-Zweit-Stellung im HS",
    type: "mc",
    q: "<b>Wähle</b> den korrekten Satz (Achtung: Verb-Zweit-Stellung im Hauptsatz).",
    o: ["Gestern bin ich in die Stadt gegangen.", "Gestern ich bin in die Stadt gegangen.", "In die Stadt gegangen ich bin gestern."],
    c: 0,
    model: "A – Verb an Position 2 (Gestern [1] – bin [2] – ich…)",
    rule: "<div class=rbox>Im Hauptsatz steht das finite Verb immer an zweiter Stelle (V2-Stellung).</div>"
  },

  // ── TYP 3: MC3 (Konjunktion wählen) ──

  {
    sub: "Passende Konjunktion wählen",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die passende Konjunktion aus.",
    rows: [
      ["weil", "damit", "obwohl"],
      ["als", "wenn", "während"],
      ["sodass", "obwohl", "da"],
      ["damit", "weil", "als"],
      ["nachdem", "sobald", "als"],
      ["ob", "wann", "dass"]
    ],
    rowTexts: [
      "Er blieb zu Hause, ___ er erkältet war.",
      "___ ich klein war, spielte ich viel draußen. (einmalig)",
      "Er rannte schnell, ___ er den Bus noch erwischte.",
      "Sie spart, ___ sie sich ein Fahrrad kaufen kann. (verschiedene Subjekte)",
      "___ er gegessen hatte, schlief er ein. (Vorzeitigkeit)",
      "Ich frage mich, ___ er wirklich kommt. (ja/nein)"
    ],
    correct: [0, 0, 0, 0, 0, 0],
    model: "weil ✓ | als ✓ | sodass ✓ | damit ✓ | nachdem ✓ | ob ✓",
    rule: "<div class=rbox>weil = Grund | als = einmalig Verg. | sodass = Folge | damit = Ziel (versch. Subj.) | nachdem = Vorzeitigkeit | ob = Entscheidungsfrage</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Satztyp → Konjunktion zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jeden Satztyp mit einer passenden Konjunktion.",
    pairs: [
      ["Kausalsatz (Grund)", "weil / da"],
      ["Konzessivsatz (Einräumung)", "obwohl / obgleich"],
      ["Finalsatz (Ziel)", "damit / um…zu"],
      ["Temporalsatz (Gleichzeitigkeit)", "während / solange"],
      ["Temporalsatz (Vorzeitigkeit)", "nachdem / als"],
      ["Konditionalsatz (Bedingung)", "wenn / falls"]
    ],
    model: "Grund → weil/da | Einräumung → obwohl | Ziel → damit | Gleichzeitig → während | Vorher → nachdem | Bedingung → wenn/falls",
    rule: "<div class=rbox>Jeder Satztyp hat typische Konjunktionen. Kausal: weil, da, denn. Konzessiv: obwohl. Final: damit, um zu. Temporal: während (gleichz.), nachdem (vorher), wenn/als (nachher).</div>"
  },

  {
    sub: "HS-Satz → Satzgefüge umformen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde die Satzpaare mit der richtigen Satzkombination.",
    pairs: [
      ["Er duschte. Dann frühstückte er.", "Nachdem er geduscht hatte, frühstückte er."],
      ["Ich lerne. Ich will bestehen.", "Ich lerne, damit ich bestehe."],
      ["Es regnete. Wir gingen spazieren.", "Obwohl es regnete, gingen wir spazieren."],
      ["Er ist krank. Er kommt trotzdem.", "Er ist krank, trotzdem kommt er."],
      ["Sie arbeitet. Sie ist müde.", "Obwohl sie müde ist, arbeitet sie."],
      ["Er kam spät. Er entschuldigte sich.", "Weil er spät kam, entschuldigte er sich."]
    ],
    model: "Reihenfolge → nachdem | Ziel → damit | Gegensatz → obwohl | Trotzdem → HS | Obwohl → NS | Grund → weil",
    rule: "<div class=rbox>Zwei Sätze können durch verschiedene Konjunktionen/Adverbien verbunden werden. Die Wahl hängt von der logischen Beziehung ab.</div>"
  }

  ]
}
];
