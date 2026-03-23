// ================================================================
// MSA-EXTRA-KOMMA.JS
// Thema: Kommasetzung
// Aufgabentypen: komma, mc, match, mc3
// Schwerpunkte: Satzreihe, Satzgefüge, Aufzählung,
//               Infinitivgruppe mit hinweisendem Fürwort, Apposition
// ================================================================

var MSA_EXTRA_KOMMA = [
{
  id: "extra_komma",
  title: "Kommasetzung",
  emoji: "🔍",
  color: "#0f766e",
  qs: [

  // ================================================================
  // TYP: KOMMA – 20 Aufgaben
  // ================================================================

  // ── SATZREIHE (Reihung von Hauptsätzen) ──

  {
    sub: "Satzreihe",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nDie Sonne scheint der Himmel ist blau.',
    sentence: 'Die Sonne scheint der Himmel ist blau.',
    correctPositions: [18],
    acceptedAnswers: ['Die Sonne scheint, der Himmel ist blau.'],
    model: 'Die Sonne scheint, der Himmel ist blau.',
    rule: '<div class=rbox>Zwei Hauptsätze ohne Konjunktion (Satzreihe) werden durch ein <span class=hl>Komma</span> getrennt. Beide Sätze haben ein eigenes Prädikat an zweiter Stelle.</div>'
  },

  {
    sub: "Satzreihe",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nDer Zug kam pünktlich die Reisenden stiegen ein.',
    sentence: 'Der Zug kam pünktlich die Reisenden stiegen ein.',
    correctPositions: [21],
    acceptedAnswers: ['Der Zug kam pünktlich, die Reisenden stiegen ein.'],
    model: 'Der Zug kam pünktlich, die Reisenden stiegen ein.',
    rule: '<div class=rbox>Zwei Hauptsätze ohne Konjunktion werden durch ein <span class=hl>Komma</span> getrennt. Erkennbar daran, dass in jedem Teilsatz das Prädikat an zweiter Stelle steht.</div>'
  },

  {
    sub: "Satzreihe",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nSie öffnete die Tür ein kalter Wind strömte herein.',
    sentence: 'Sie öffnete die Tür ein kalter Wind strömte herein.',
    correctPositions: [19],
    acceptedAnswers: ['Sie öffnete die Tür, ein kalter Wind strömte herein.'],
    model: 'Sie öffnete die Tür, ein kalter Wind strömte herein.',
    rule: '<div class=rbox>Zwei selbstständige Hauptsätze ohne Konjunktion → Komma. Das Prädikat „strömte" steht im zweiten Satz an zweiter Stelle: Zeichen für einen Hauptsatz.</div>'
  },

  {
    sub: "Satzreihe",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas im folgenden Satz, indem du auf die richtigen Stellen klickst:\n\nDie Kinder spielten im Garten die Eltern saßen auf der Terrasse die Großeltern ruhten im Haus.',
    sentence: 'Die Kinder spielten im Garten die Eltern saßen auf der Terrasse die Großeltern ruhten im Haus.',
    correctPositions: [29, 62],
    acceptedAnswers: ['Die Kinder spielten im Garten, die Eltern saßen auf der Terrasse, die Großeltern ruhten im Haus.'],
    model: 'Die Kinder spielten im Garten, die Eltern saßen auf der Terrasse, die Großeltern ruhten im Haus.',
    rule: '<div class=rbox>Bei einer Reihung von drei Hauptsätzen ohne Konjunktionen steht zwischen jedem Hauptsatz ein <span class=hl>Komma</span>.</div>'
  },

  // ── SATZGEFÜGE (HS + NS) ──

  {
    sub: "Satzgefüge",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nWir gehen spazieren obwohl es heute regnet.',
    sentence: 'Wir gehen spazieren obwohl es heute regnet.',
    correctPositions: [19],
    acceptedAnswers: ['Wir gehen spazieren, obwohl es heute regnet.'],
    model: 'Wir gehen spazieren, obwohl es heute regnet.',
    rule: '<div class=rbox>„obwohl" leitet einen Nebensatz ein. Nebensätze werden durch ein <span class=hl>Komma</span> vom Hauptsatz getrennt. Das Verb des Nebensatzes steht am Ende: „regnet".</div>'
  },

  {
    sub: "Satzgefüge",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nNachdem sie das Buch gelesen hatte gab sie es ihrer Freundin.',
    sentence: 'Nachdem sie das Buch gelesen hatte gab sie es ihrer Freundin.',
    correctPositions: [34],
    acceptedAnswers: ['Nachdem sie das Buch gelesen hatte, gab sie es ihrer Freundin.'],
    model: 'Nachdem sie das Buch gelesen hatte, gab sie es ihrer Freundin.',
    rule: '<div class=rbox>Steht der Nebensatz vor dem Hauptsatz, wird er durch ein <span class=hl>Komma</span> abgetrennt. Das Verb des Nebensatzes („hatte") steht am Ende des Nebensatzes.</div>'
  },

  {
    sub: "Satzgefüge",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas im folgenden Satz, indem du auf die richtigen Stellen klickst:\n\nDas Mädchen das jeden Tag übte gewann schließlich den Wettbewerb.',
    sentence: 'Das Mädchen das jeden Tag übte gewann schließlich den Wettbewerb.',
    correctPositions: [11, 29],
    acceptedAnswers: ['Das Mädchen, das jeden Tag übte, gewann schließlich den Wettbewerb.'],
    model: 'Das Mädchen, das jeden Tag übte, gewann schließlich den Wettbewerb.',
    rule: '<div class=rbox>Ein eingeschobener Relativsatz wird beidseitig durch <span class=hl>Kommas</span> eingeschlossen: Komma vor dem Relativpronomen „das" und Komma nach dem Ende des Relativsatzes.</div>'
  },

  {
    sub: "Satzgefüge",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nEr arbeitete konzentriert weil die Abgabe morgen war.',
    sentence: 'Er arbeitete konzentriert weil die Abgabe morgen war.',
    correctPositions: [23],
    acceptedAnswers: ['Er arbeitete konzentriert, weil die Abgabe morgen war.'],
    model: 'Er arbeitete konzentriert, weil die Abgabe morgen war.',
    rule: '<div class=rbox>„weil" leitet einen Kausalsatz ein. Nebensätze werden durch ein <span class=hl>Komma</span> vom Hauptsatz getrennt.</div>'
  },

  // ── AUFZÄHLUNG ──

  {
    sub: "Aufzählung",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas im folgenden Satz, indem du auf die richtigen Stellen klickst:\n\nAuf dem Markt kaufte sie frische rote aromatische Tomaten.',
    sentence: 'Auf dem Markt kaufte sie frische rote aromatische Tomaten.',
    correctPositions: [35, 40],
    acceptedAnswers: ['Auf dem Markt kaufte sie frische, rote, aromatische Tomaten.'],
    model: 'Auf dem Markt kaufte sie frische, rote, aromatische Tomaten.',
    rule: '<div class=rbox>Gleichrangige Adjektive in einer Aufzählung werden durch <span class=hl>Kommas</span> getrennt. Die Probe: „frische und rote und aromatische" klingt sinnvoll → gleichrangig → Komma.</div>'
  },

  {
    sub: "Aufzählung",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas im folgenden Satz, indem du auf die richtigen Stellen klickst:\n\nEr packte Brot Käse Äpfel und eine Flasche Wasser ein.',
    sentence: 'Er packte Brot Käse Äpfel und eine Flasche Wasser ein.',
    correctPositions: [14, 20],
    acceptedAnswers: ['Er packte Brot, Käse, Äpfel und eine Flasche Wasser ein.'],
    model: 'Er packte Brot, Käse, Äpfel und eine Flasche Wasser ein.',
    rule: '<div class=rbox>In einer Aufzählung stehen Kommas zwischen den Gliedern. Vor dem abschließenden „und" steht <span class=hl>kein Komma</span>.</div>'
  },

  {
    sub: "Aufzählung",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma im folgenden Satz, indem du auf die richtige Stelle klickst:\n\nSie ist eine kluge fleißige Schülerin.',
    sentence: 'Sie ist eine kluge fleißige Schülerin.',
    correctPositions: [20],
    acceptedAnswers: ['Sie ist eine kluge, fleißige Schülerin.'],
    model: 'Sie ist eine kluge, fleißige Schülerin.',
    rule: '<div class=rbox>„kluge" und „fleißige" sind gleichrangige Adjektive: „kluge und fleißige" klingt sinnvoll → Komma zwischen den Adjektiven.</div>'
  },

  {
    sub: "Aufzählung",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas im folgenden Satz, indem du auf die richtigen Stellen klickst:\n\nDie große grüne alte Eiche steht mitten im Dorf.',
    sentence: 'Die große grüne alte Eiche steht mitten im Dorf.',
    correctPositions: [10, 17],
    acceptedAnswers: ['Die große, grüne, alte Eiche steht mitten im Dorf.'],
    model: 'Die große, grüne, alte Eiche steht mitten im Dorf.',
    rule: '<div class=rbox>Drei gleichrangige Adjektive werden durch <span class=hl>Kommas</span> voneinander getrennt.</div>'
  },

  // ── INFINITIVGRUPPE MIT HINWEISENDEM FÜRWORT ──

  {
    sub: "Infinitivgruppe mit hinweisendem Fürwort",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma, indem du auf die richtige Stelle klickst. im folgenden Satz:\n\nSie war davon überzeugt ihre große Liebe gefunden zu haben.',
    sentence: 'Sie war davon überzeugt ihre große Liebe gefunden zu haben.',
    correctPositions: [21],
    acceptedAnswers: ['Sie war davon überzeugt, ihre große Liebe gefunden zu haben.'],
    model: 'Sie war davon überzeugt, ihre große Liebe gefunden zu haben.',
    rule: '<div class=rbox>Das hinweisende Fürwort „davon" kündigt die folgende Infinitivgruppe an. Nach solchen Signalwörtern (davon, daran, darum, damit) steht ein <span class=hl>Komma</span> vor der Infinitivgruppe.</div>'
  },

  {
    sub: "Infinitivgruppe mit hinweisendem Fürwort",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma, indem du auf die richtige Stelle klickst. im folgenden Satz:\n\nEr hatte es sich vorgenommen jeden Tag Sport zu treiben.',
    sentence: 'Er hatte es sich vorgenommen jeden Tag Sport zu treiben.',
    correctPositions: [27],
    acceptedAnswers: ['Er hatte es sich vorgenommen, jeden Tag Sport zu treiben.'],
    model: 'Er hatte es sich vorgenommen, jeden Tag Sport zu treiben.',
    rule: '<div class=rbox>Das Pronomen „es" verweist auf die folgende Infinitivgruppe (hinweisendes Fürwort) → <span class=hl>Komma</span> vor der Infinitivgruppe.</div>'
  },

  {
    sub: "Infinitivgruppe mit hinweisendem Fürwort",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma, indem du auf die richtige Stelle klickst. im folgenden Satz:\n\nWir freuten uns darauf endlich Urlaub zu machen.',
    sentence: 'Wir freuten uns darauf endlich Urlaub zu machen.',
    correctPositions: [21],
    acceptedAnswers: ['Wir freuten uns darauf, endlich Urlaub zu machen.'],
    model: 'Wir freuten uns darauf, endlich Urlaub zu machen.',
    rule: '<div class=rbox>„darauf" ist ein hinweisendes Fürwort, das die Infinitivgruppe ankündigt → <span class=hl>Komma</span> nach dem Signalwort.</div>'
  },

  {
    sub: "Infinitivgruppe mit hinweisendem Fürwort",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma, indem du auf die richtige Stelle klickst. im folgenden Satz:\n\nSie dachte nicht daran pünktlich zu erscheinen.',
    sentence: 'Sie dachte nicht daran pünktlich zu erscheinen.',
    correctPositions: [21],
    acceptedAnswers: ['Sie dachte nicht daran, pünktlich zu erscheinen.'],
    model: 'Sie dachte nicht daran, pünktlich zu erscheinen.',
    rule: '<div class=rbox>„daran" kündigt als hinweisendes Fürwort die Infinitivgruppe an → <span class=hl>Komma</span> vor der Infinitivgruppe.</div>'
  },

  {
    sub: "Infinitivgruppe mit hinweisendem Fürwort",
    type: "komma",
    q: '<b>Setze</b> das fehlende Komma, indem du auf die richtige Stelle klickst. im folgenden Satz:\n\nEr war damit beschäftigt sein Zimmer aufzuräumen.',
    sentence: 'Er war damit beschäftigt sein Zimmer aufzuräumen.',
    correctPositions: [22],
    acceptedAnswers: ['Er war damit beschäftigt, sein Zimmer aufzuräumen.'],
    model: 'Er war damit beschäftigt, sein Zimmer aufzuräumen.',
    rule: '<div class=rbox>„damit" ist ein hinweisendes Fürwort → <span class=hl>Komma</span> vor der angekündigten Infinitivgruppe.</div>'
  },

  // ── APPOSITION ──

  {
    sub: "Apposition",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas, indem du auf die richtigen Stellen klickst. im folgenden Satz:\n\nFrau Müller die Leiterin der Abteilung ist im Urlaub.',
    sentence: 'Frau Müller die Leiterin der Abteilung ist im Urlaub.',
    correctPositions: [11, 36],
    acceptedAnswers: ['Frau Müller, die Leiterin der Abteilung, ist im Urlaub.'],
    model: 'Frau Müller, die Leiterin der Abteilung, ist im Urlaub.',
    rule: '<div class=rbox>„die Leiterin der Abteilung" ist eine Apposition – ein erläuternder Einschub zu „Frau Müller". Appositionen werden beidseitig durch <span class=hl>Kommas</span> eingeschlossen.</div>'
  },

  {
    sub: "Apposition",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas, indem du auf die richtigen Stellen klickst. im folgenden Satz:\n\nBerlin die Hauptstadt Deutschlands ist eine lebendige Stadt.',
    sentence: 'Berlin die Hauptstadt Deutschlands ist eine lebendige Stadt.',
    correctPositions: [7, 30],
    acceptedAnswers: ['Berlin, die Hauptstadt Deutschlands, ist eine lebendige Stadt.'],
    model: 'Berlin, die Hauptstadt Deutschlands, ist eine lebendige Stadt.',
    rule: '<div class=rbox>„die Hauptstadt Deutschlands" ist eine Apposition zu „Berlin" und wird beidseitig durch <span class=hl>Kommas</span> abgetrennt.</div>'
  },

  {
    sub: "Apposition",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas, indem du auf die richtigen Stellen klickst. im folgenden Satz:\n\nMein Bruder ein begeisterter Sportler läuft jeden Morgen.',
    sentence: 'Mein Bruder ein begeisterter Sportler läuft jeden Morgen.',
    correctPositions: [11, 35],
    acceptedAnswers: ['Mein Bruder, ein begeisterter Sportler, läuft jeden Morgen.'],
    model: 'Mein Bruder, ein begeisterter Sportler, läuft jeden Morgen.',
    rule: '<div class=rbox>„ein begeisterter Sportler" ist eine Apposition zu „mein Bruder". Sie wird beidseitig durch <span class=hl>Kommas</span> eingeschlossen.</div>'
  },

  {
    sub: "Apposition",
    type: "komma",
    q: '<b>Setze</b> die fehlenden Kommas, indem du auf die richtigen Stellen klickst. im folgenden Satz:\n\nDer Schüler Moritz der Klassensprecher meldete sich als Erster.',
    sentence: 'Der Schüler Moritz der Klassensprecher meldete sich als Erster.',
    correctPositions: [18, 37],
    acceptedAnswers: ['Der Schüler Moritz, der Klassensprecher, meldete sich als Erster.'],
    model: 'Der Schüler Moritz, der Klassensprecher, meldete sich als Erster.',
    rule: '<div class=rbox>„der Klassensprecher" ist eine Apposition zu „Moritz". Appositionen werden stets beidseitig durch <span class=hl>Kommas</span> abgetrennt.</div>'
  },

  // ================================================================
  // TYP: MC – c:0/1/2 gemischt
  // ================================================================

  {
    sub: "Komma-Regel: Anrede",
    type: "mc",
    q: "<b>Wähle</b> den richtig interpunktierten Satz aus.",
    o: ["Komm wir essen Opa!", "Komm, wir essen, Opa!", "Komm, wir essen Opa!"],
    c: 1,
    model: "B – Komm, wir essen, Opa! (Anrede 'Opa' wird mit Komma abgetrennt)",
    rule: "<div class=rbox>Anreden am Satzanfang, -ende oder eingeschoben → durch Komma abgetrennt.</div>"
  },

  {
    sub: "entweder … oder – Komma?",
    type: "mc",
    q: "<b>Wähle</b> den korrekten Satz aus.",
    o: ["Entweder wir gehen, oder wir bleiben.", "Entweder wir gehen oder wir bleiben.", "Entweder, wir gehen oder wir bleiben."],
    c: 1,
    model: "B – kein Komma bei 'entweder … oder' (zweiteilige Konjunktion)",
    rule: "<div class=rbox>Bei zweiteiligen Konjunktionen (entweder…oder, sowohl…als auch, weder…noch) steht kein Komma.</div>"
  },

  {
    sub: "dass vs. das – Komma davor?",
    type: "mc",
    q: "<b>Entscheide</b>: Welcher der folgenden Sätze braucht zwingend ein Komma vor dem markierten Wort?\n(a) Er glaubt ___ alles gut wird.\n(b) Das Buch ___ er kaufte ___ ist interessant.",
    o: ["Nur (a) braucht Komma vor 'dass'", "Nur (b) braucht Komma", "Beide brauchen Komma"],
    c: 2,
    model: "C – Beide: 'dass' (Konjunktion) → Komma davor; 'das' (Relativpronomen) → NS in Kommas einschließen",
    rule: "<div class=rbox>Vor 'dass' (Konjunktion) → Komma. Bei 'das' als Relativpronomen → Relativsatz wird in Kommas eingeschlossen.</div>"
  },

  {
    sub: "Verknüpfungsadverb: deshalb",
    type: "mc",
    q: "<b>Wähle</b> die korrekte Kommasetzung: 'Es regnete ( ) deshalb ( ) blieben wir.'",
    o: ["Es regnete, deshalb, blieben wir.", "Es regnete, deshalb blieben wir.", "Es regnete deshalb, blieben wir."],
    c: 1,
    model: "B – Komma vor 'deshalb', kein Komma nach 'deshalb'",
    rule: "<div class=rbox>Konjunktionaladverbien (deshalb, daher, trotzdem) → Komma davor (Trennung der HS). Nach ihnen kein Komma.</div>"
  },

  {
    sub: "Infinitiv mit 'zu' – Komma nötig?",
    type: "mc",
    q: "<b>Entscheide</b>: Ist bei 'Er versucht ( ) zu schlafen.' ein Komma nötig?",
    o: ["Ja, immer: Er versucht, zu schlafen.", "Nein, nicht zwingend bei einfachem Infinitiv.", "Nein, nie ein Komma vor 'zu'."],
    c: 1,
    model: "B – Einfache Infinitivgruppen ohne Signalwort (versuchen, beginnen) → Komma optional",
    rule: "<div class=rbox>Einfache Infinitivgruppen (er versucht zu schlafen) → kein Komma zwingend. Bei Signalwort (er hofft, bald zu kommen) oder erweiterten Infinitiven → Komma.</div>"
  },

  // ================================================================
  // TYP: MC3
  // ================================================================

  {
    sub: "Komma oder kein Komma? (Schnelltest)",
    type: "mc3",
    q: "<b>Entscheide</b> für jede Zeile: Steht an der markierten Stelle ein Komma oder nicht? <b>Wähle</b> die richtige Spalte.",
    rows: [
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"]
    ],
    rowTexts: [
      "Er sagt, ( ) er kommt.",
      "Er schreibt ( ) und sie liest.",
      "Lachend vor Glück ( ) rannte sie.",
      "Je mehr du übst ( ) desto besser wirst du.",
      "Pizza ( ) Pasta und Eis schmecken gut.",
      "Wir gehen ( ) obwohl es regnet."
    ],
    correct: [1, 1, 0, 0, 0, 0],
    model: "er kommt: kein zweites Komma ✓ | und HS+HS: kein Komma ✓ | Lachend: Komma ✓ | desto: Komma ✓ | Pizza, Pasta: Komma ✓ | obwohl: Komma ✓",
    rule: "<div class=rbox>Nach einleitetdem 'sagt,' ist der Komma schon da; kein zweites. und HS+HS → kein Komma. Partizipgruppe → Komma. je…desto → Komma. Aufzählung → Komma. Nebensatz → Komma.</div>"
  },

  // ================================================================
  // TYP: MATCH
  // ================================================================

  {
    sub: "Kommaregel → Beispiel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jede Kommaregel mit einem passenden Beispiel.",
    pairs: [
      ["Anrede → Komma", "Komm, Opa!"],
      ["Nebensatz → Komma", "Ich lerne, weil es wichtig ist."],
      ["Apposition → Komma rundum", "Berlin, die Hauptstadt, ist groß."],
      ["entweder…oder → kein Komma", "Entweder wir gehen oder bleiben."],
      ["Aufzählung, letztes Glied mit 'und' → kein Komma", "Pizza, Pasta und Eis."],
      ["zwei HS ohne Konj. → Komma", "Er schreibt, sie liest."]
    ],
    model: "Anrede → Komm, Opa | NS → Komma | Apposition → rundum | entweder…oder → kein Komma | Aufzählung + und → kein Komma | HS+HS ohne Konj. → Komma",
    rule: "<div class=rbox>Kommaregeln: Anreden, Nebensätze, Appositionen → Komma. Zweiteilige Konjunktionen, 'und' vor letztem Aufzählungsglied → kein Komma.</div>"
  },

  {
    sub: "Satzstruktur → Kommaregel zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jeden Satztyp mit der zugehörigen Kommaregel.",
    pairs: [
      ["Relativsatz", "wird in Kommas eingeschlossen"],
      ["Konditionalsatz (wenn)", "Komma zwischen NS und HS"],
      ["um…zu-Gruppe", "Komma, wenn vorangestellt oder nach Signalwort"],
      ["zwei HS mit 'und'", "kein Komma nötig (optional möglich)"],
      ["Direkte Rede", "Komma vor Anführungszeichen"],
      ["je … desto", "Komma vor 'desto'"]
    ],
    model: "Relativsatz → einschließen | wenn → NS/HS-Grenze | um zu → Signalwort | HS+und+HS → kein Komma | direkte Rede → Komma davor | je…desto → Komma vor desto",
    rule: "<div class=rbox>Jeder Satztyp hat eine eigene Kommaregel. Nebensätze werden immer durch Komma vom Hauptsatz getrennt.</div>"
  }

  ]
}
];
