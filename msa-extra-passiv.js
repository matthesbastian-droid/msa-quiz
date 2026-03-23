// ================================================================
// MSA-EXTRA-PASSIV.JS
// Thema: Aktiv und Passiv
// Aufgabentypen: mc, cross, mc3, match
// Antwortvarianz: mc c:0/1/2 gemischt; cross Vorgangs/Zustands ausgewogen
// ================================================================

var MSA_EXTRA_PASSIV = [
{
  id: "extra_passiv",
  title: "Aktiv und Passiv",
  emoji: "🔄",
  color: "#b45309",
  qs: [

  // ── TYP 1: CROSS (Passivform bestimmen) ──

  {
    sub: "Vorgangspassiv oder Zustandspassiv?",
    type: "cross",
    q: "<b>Bestimme</b>: Welche Passivform liegt vor – Vorgangspassiv oder Zustandspassiv? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Der Kuchen wird gerade gebacken.",
      "Die Tür ist geschlossen.",
      "Das Auto wird repariert.",
      "Das Fenster ist geöffnet.",
      "Der Brief wird gerade geschrieben.",
      "Die Aufgabe ist erledigt."
    ],
    cols: ["Vorgangspassiv (wird + PII)", "Zustandspassiv (ist + PII)"],
    correct: [0, 1, 0, 1, 0, 1],
    model: "wird gebacken ✓ Vorgang | ist geschlossen ✓ Zustand | wird repariert ✓ Vorgang | ist geöffnet ✓ Zustand | wird geschrieben ✓ Vorgang | ist erledigt ✓ Zustand",
    rule: "<div class=rbox>Vorgangspassiv: wird/werden + Partizip II → Vorgang läuft ab. Zustandspassiv: ist/sind + Partizip II → Ergebnis eines Vorgangs wird beschrieben.</div>"
  },

  {
    sub: "Passiv erkennen oder nicht?",
    type: "cross",
    q: "<b>Entscheide</b>: Handelt es sich um ein Passiv (Vorgangs- oder Zustandspassiv) oder kein Passiv? <b>Ordne</b> durch Klick zu.",
    rows: [
      "Das Buch wird gelesen.",
      "Das Buch liegt auf dem Tisch.",
      "Die Brücke ist gebaut worden.",
      "Das Licht geht aus.",
      "Die Wunde ist verbunden.",
      "Er lässt das Auto reparieren."
    ],
    cols: ["Passiv", "kein Passiv"],
    correct: [0, 1, 0, 1, 0, 1],
    model: "wird gelesen ✓ Passiv | liegt ✓ kein Passiv (Zustandsverb) | ist gebaut worden ✓ Passiv | geht aus ✓ kein Passiv (trennbares Verb) | ist verbunden ✓ Zustandspassiv | lässt reparieren ✓ kein Passiv (kausativ)",
    rule: "<div class=rbox>Passiv = werden/sein + Partizip II in Passivfunktion. Zustandsverben (liegen, stehen), trennbare Verben (ausgehen) und kausative Konstruktionen (lassen) sind kein Passiv.</div>"
  },

  {
    sub: "Tempus im Passiv bestimmen",
    type: "cross",
    q: "<b>Bestimme</b> das Tempus des Passivsatzes und <b>ordne</b> durch Klick in die richtige Spalte ein.",
    rows: [
      "Die Fenster werden geputzt.",
      "Das Haus wurde renoviert.",
      "Der Test ist geschrieben worden.",
      "Das Problem wird gelöst werden.",
      "Der Baum wurde gefällt.",
      "Das Gesetz wird verabschiedet."
    ],
    cols: ["Präsens/Futur Passiv", "Vergangenheit Passiv"],
    correct: [0, 1, 1, 0, 1, 0],
    model: "werden geputzt ✓ Präsens | wurde renoviert ✓ Präteritum | ist geschrieben worden ✓ Perfekt | wird gelöst werden ✓ Futur | wurde gefällt ✓ Präteritum | wird verabschiedet ✓ Präsens",
    rule: "<div class=rbox>Präsens Passiv: wird + PII. Präteritum Passiv: wurde + PII. Perfekt Passiv: ist + PII + worden. Futur Passiv: wird + PII + werden.</div>"
  },

  // ── TYP 2: MC – c:0/1/2 gemischt ──

  {
    sub: "Aktiv → Passiv (Präsens)",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in den Passivsatz (Präsens) um: 'Der Koch bereitet das Essen zu.'",
    o: ["Das Essen wird zubereitet.", "Der Koch wird zubereitet.", "Das Essen zubereitet der Koch."],
    c: 0,
    model: "A – Das Essen wird zubereitet.",
    rule: "<div class=rbox>Passiv: Akkusativobjekt → Subjekt. wird/werden + Partizip II.</div>"
  },

  {
    sub: "Aktiv → Passiv (Präteritum)",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in den Passivsatz (Präteritum) um: 'Man baute das Haus 1990.'",
    o: ["Das Haus wird gebaut.", "Das Haus wurde gebaut.", "Das Haus ist gebaut worden."],
    c: 1,
    model: "B – Das Haus wurde gebaut. (Präteritum Passiv)",
    rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>"
  },

  {
    sub: "Perfekt Passiv",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in den Passivsatz (Perfekt) um: 'Man hat die Brücke gebaut.'",
    o: ["Die Brücke wurde gebaut.", "Die Brücke ist gebaut worden.", "Die Brücke wird gebaut."],
    c: 1,
    model: "B – Die Brücke ist gebaut worden. (Perfekt Passiv)",
    rule: "<div class=rbox>Perfekt Passiv: ist + Partizip II + worden.</div>"
  },

  {
    sub: "Agens im Passiv",
    type: "mc",
    q: "<b>Bestimme</b> das Agens (den Handelnden) im Passivsatz: 'Der Baum wurde vom Sturm gefällt.'",
    o: ["Der Baum", "Der Sturm", "Der Wald"],
    c: 1,
    model: "B – Der Sturm (von + Dativ = Agens)",
    rule: "<div class=rbox>Das Agens (Handelnde) wird im Passiv mit 'von + Dativ' angegeben: vom Sturm.</div>"
  },

  {
    sub: "Passiv mit Modalverb",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in das Passiv mit Modalverb um: 'Man darf hier nicht rauchen.'",
    o: ["Hier darf nicht geraucht werden.", "Hier wird nicht geraucht.", "Rauchen ist hier verboten worden."],
    c: 0,
    model: "A – Hier darf nicht geraucht werden.",
    rule: "<div class=rbox>Passiv mit Modalverb: Modalverb + Partizip II + werden (darf geraucht werden, muss gemacht werden).</div>"
  },

  {
    sub: "Futur Passiv",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in den Passivsatz (Futur) um: 'Man wird das Problem lösen.'",
    o: ["Das Problem wird gelöst.", "Das Problem wird gelöst werden.", "Das Problem wurde gelöst."],
    c: 1,
    model: "B – Das Problem wird gelöst werden. (Futur Passiv)",
    rule: "<div class=rbox>Futur Passiv: wird + Partizip II + werden.</div>"
  },

  {
    sub: "Passivierbarkeit – welcher Satz geht?",
    type: "mc",
    q: "<b>Entscheide</b>: Welcher Satz lässt sich ins Passiv setzen?",
    o: ["Das Wasser kocht.", "Sie schläft tief.", "Der Lehrer erklärt die Aufgabe."],
    c: 2,
    model: "C – Die Aufgabe wird (vom Lehrer) erklärt.",
    rule: "<div class=rbox>Nur transitive Verben (mit Akkusativobjekt) können ins Passiv gesetzt werden. 'kochen' und 'schlafen' hier intransitiv → kein Passiv möglich.</div>"
  },

  {
    sub: "Dativpassiv",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in das Passiv um: 'Man hat mir geholfen.'",
    o: ["Mir ist geholfen worden.", "Ich wurde geholfen.", "Mir wird geholfen."],
    c: 0,
    model: "A – Mir ist geholfen worden. (Dativobjekt bleibt im Dativ)",
    rule: "<div class=rbox>Bei Dativobjekten bleibt das Dativobjekt im Dativ: Mir ist geholfen worden (nicht: Ich wurde geholfen).</div>"
  },

  {
    sub: "Passiv → Aktiv umwandeln",
    type: "mc",
    q: "<b>Forme</b> den Passivsatz in den Aktivsatz um: 'Der Brief wird vom Boten überbracht.'",
    o: ["Der Bote überbringt den Brief.", "Der Brief überbringt den Boten.", "Den Brief überbringt man."],
    c: 0,
    model: "A – Der Bote überbringt den Brief.",
    rule: "<div class=rbox>Passiv → Aktiv: Agens (Bote) wird Subjekt, Subjekt (Brief) wird Akkusativobjekt.</div>"
  },

  {
    sub: "Warum wird Passiv benutzt?",
    type: "mc",
    q: "<b>Erkläre</b>: Warum wird das Passiv oft ohne 'von'-Angabe (Agens) verwendet?",
    o: ["Der Handelnde ist unwichtig oder unbekannt.", "Es gibt kein Subjekt.", "Das Passiv braucht immer einen Handelnden."],
    c: 0,
    model: "A – Der Handelnde ist unwichtig oder unbekannt.",
    rule: "<div class=rbox>Im Passiv tritt der Handelnde in den Hintergrund – daher oft ohne Agens (von + Dativ).</div>"
  },

  {
    sub: "Passiv mit 'müssen' (Modalverb)",
    type: "mc",
    q: "<b>Forme</b> den Aktivsatz in das Passiv mit Modalverb um: 'Man muss das Fenster öffnen.'",
    o: ["Das Fenster muss geöffnet werden.", "Das Fenster wird geöffnet werden.", "Das Fenster muss geöffnet sein."],
    c: 0,
    model: "A – Das Fenster muss geöffnet werden.",
    rule: "<div class=rbox>Passiv mit Modalverb: müssen + Partizip II + werden.</div>"
  },

  {
    sub: "Richtige Passivform erkennen",
    type: "mc",
    q: "<b>Erkenne</b>: Welcher der folgenden Sätze ist ein korrekter Passivsatz?",
    o: ["Das Buch liegt auf dem Tisch.", "Das Buch wird gelesen.", "Das Buch ist interessant."],
    c: 1,
    model: "B – Das Buch wird gelesen. (werden + Partizip II)",
    rule: "<div class=rbox>Passiv = werden + Partizip II. Zustandsverben (liegen, sein) sind kein Passiv.</div>"
  },

  // ── TYP 3: MC3 (Passivform je Reihe wählen) ──

  {
    sub: "Passivform auswählen",
    type: "mc3",
    q: "<b>Wähle</b> für jede Zeile die korrekte Passivform aus.",
    rows: [
      ["Das Rad wird repariert.", "Das Rad wurde reparieren.", "Das Rad ist reparieren."],
      ["Das Haus wurde gebaut.", "Das Haus wird gebaut worden.", "Das Haus wird gebaut sein."],
      ["Der Test ist geschrieben worden.", "Der Test wird geschrieben worden.", "Der Test wurde geschrieben worden."],
      ["Das Fenster muss geöffnet werden.", "Das Fenster muss geöffnet sein.", "Das Fenster muss geöffnet werden sein."]
    ],
    correct: [0, 0, 0, 0],
    model: "wird repariert ✓ | wurde gebaut ✓ | ist geschrieben worden ✓ | muss geöffnet werden ✓",
    rule: "<div class=rbox>Präsens: wird + PII. Präteritum: wurde + PII. Perfekt: ist + PII + worden. Modalverb: Modalverb + PII + werden.</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Aktiv-Passivsatz-Paare zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jeden Aktivsatz mit dem passenden Passivsatz.",
    pairs: [
      ["Er liest das Buch.", "Das Buch wird gelesen."],
      ["Man stahl das Gemälde.", "Das Gemälde wurde gestohlen."],
      ["Man hat die Brücke gebaut.", "Die Brücke ist gebaut worden."],
      ["Sie putzt die Fenster.", "Die Fenster werden geputzt."],
      ["Man muss die Aufgabe lösen.", "Die Aufgabe muss gelöst werden."],
      ["Der Arzt untersucht den Patienten.", "Der Patient wird untersucht."]
    ],
    model: "liest → wird gelesen | stahl → wurde gestohlen | hat gebaut → ist gebaut worden | putzt → werden geputzt | muss lösen → muss gelöst werden | untersucht → wird untersucht",
    rule: "<div class=rbox>Passiv: Objekt → Subjekt. Tempus beibehalten. Modalverben bleiben erhalten.</div>"
  },

  {
    sub: "Passivform → Tempus zuordnen",
    type: "match",
    q: "<b>Ordne zu</b>: Verbinde jede Passivform mit dem passenden Tempus.",
    pairs: [
      ["wird gebaut", "Präsens Passiv"],
      ["wurde gebaut", "Präteritum Passiv"],
      ["ist gebaut worden", "Perfekt Passiv"],
      ["wird gebaut werden", "Futur Passiv"],
      ["ist gebaut", "Zustandspassiv (Präsens)"],
      ["muss gebaut werden", "Passiv mit Modalverb"]
    ],
    model: "wird gebaut → Präsens | wurde gebaut → Präteritum | ist worden → Perfekt | wird werden → Futur | ist (Zust.) → Zustandspassiv | Modalverb + werden → Modal-Passiv",
    rule: "<div class=rbox>Passivformen unterscheiden sich durch das Hilfsverb und seine Form. Futur: wird + PII + werden.</div>"
  }

  ]
}
];
