// ================================================================
// MSA-10PKT.JS – 10-Punkte-Tabelle (MSA-Prüfungsübungen)
//
// Variable: MSA_10PKT_THEMES  (Array mit allen Aufgaben-Themen)
//
// Jedes Thema braucht zwingend:
//   tabelle: 1 | 2 | 3 | 4 | 5   ← bestimmt, in welcher Tabelle es erscheint
//
// Neue Themen einfach als Objekt hinzufügen:
// {
//   id:      "msa_10pkt_1_meinThema",   ← eindeutig, beginnt mit msa_10pkt_<nr>_
//   tabelle: 1,                          ← 1 bis 5
//   title:   "Mein Thema",
//   emoji:   "📝",
//   color:   "#2563eb",
//   qs: [ ... ]                          ← Aufgaben wie gewohnt
// }
// ================================================================

var MSA_10PKT_THEMES = [

  // ════════════════════════════════════════════════════════════
  // 1. TABELLE
  // ════════════════════════════════════════════════════════════
  {
    id: "msa_10pkt_1_beispiel",
    tabelle: 1,
    title: "Beispielaufgabe (1. Tabelle)",
    emoji: "📋",
    color: "#2563eb",
    qs: [
      // Aufgaben hier einfügen
      // Beispiel:
      // {
      //   sub: "Aufgabentitel",
      //   type: "mc",
      //   q: "Frage?",
      //   o: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
      //   c: 0,
      //   model: "Erklärung",
      //   rule: "<div class=rbox>Regel</div>"
      // }
    ]
  },

  // ════════════════════════════════════════════════════════════
  // 2. TABELLE
  // ════════════════════════════════════════════════════════════
  {
    id: "msa_10pkt_2_beispiel",
    tabelle: 2,
    title: "Beispielaufgabe (2. Tabelle)",
    emoji: "📋",
    color: "#059669",
    qs: []
  },

  // ════════════════════════════════════════════════════════════
  // 3. TABELLE
  // ════════════════════════════════════════════════════════════
  {
    id: "msa_10pkt_3_beispiel",
    tabelle: 3,
    title: "Beispielaufgabe (3. Tabelle)",
    emoji: "📋",
    color: "#9333ea",
    qs: []
  },

  // ════════════════════════════════════════════════════════════
  // 4. TABELLE
  // ════════════════════════════════════════════════════════════
  {
    id: "msa_10pkt_4_beispiel",
    tabelle: 4,
    title: "Beispielaufgabe (4. Tabelle)",
    emoji: "📋",
    color: "#dc2626",
    qs: []
  },

  // ════════════════════════════════════════════════════════════
  // 5. TABELLE
  // ════════════════════════════════════════════════════════════
  {
    id: "msa_10pkt_5_beispiel",
    tabelle: 5,
    title: "Beispielaufgabe (5. Tabelle)",
    emoji: "📋",
    color: "#be185d",
    qs: []
  }

];
