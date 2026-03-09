// ================================================================
// EXTRA-AUFGABEN.JS – Überarbeitet nach pädagogischen Prinzipien
// Mehr Interaktivität durch cross-Aufgaben, Gruppierung nach Regeln,
// beibehalten der MC für komplexe Entscheidungen.
// ================================================================

var MSA_EXTRA_THEMES = [

// ── KOMMASETZUNG (überarbeitet: cross mit markierten Stellen) ──
{
  id: "extra_komma",
  title: "Kommasetzung",
  emoji: "🔍",
  color: "#0f766e",
  qs: [
    {
      sub: "Anrede",
      type: "cross",
      q: "Entscheide, ob an der markierten Stelle ( ) ein Komma stehen muss.",
      rows: ["Komm wir essen ( ) Opa!"],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Komm wir essen, Opa!",
      rule: "<div class=rbox>Direkte Anreden werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Aufzählung",
      type: "cross",
      q: "Entscheide für jede markierte Stelle, ob ein Komma nötig ist.",
      rows: [
        "Ich mag Pizza ( ) Pasta Eis und Limo.",
        "Ich mag Pizza Pasta ( ) Eis und Limo.",
        "Er ist groß ( ) stark und mutig.",
        "Er ist groß stark ( ) und mutig."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 1],
      model: "Pizza, Pasta – Komma; vor 'und' kein Komma; stark – Komma; vor 'und' kein Komma.",
      rule: "<div class=rbox>Zwischen gleichrangigen Aufzählungsgliedern steht ein Komma, nicht vor 'und'/'oder'.</div>"
    },
    {
      sub: "Nebensatz (dass, weil, …)",
      type: "cross",
      q: "Entscheide, ob vor dem Nebensatz ein Komma steht.",
      rows: [
        "Er sagt ( ) dass er heute später kommt.",
        "Ich glaube ( ) du hast recht.",
        "Egal was passiert ( ) ich bleibe hier."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle drei Sätze brauchen ein Komma vor dem Nebensatz.",
      rule: "<div class=rbox>Nebensätze (eingeleitet durch dass, ob, weil, …) werden durch Komma vom Hauptsatz getrennt.</div>"
    },
    {
      sub: "Relativsatz",
      type: "cross",
      q: "Entscheide für jede markierte Stelle, ob ein Komma gesetzt wird.",
      rows: [
        "Der Hund ( ) der gestern bellte ( ) ist heute leise.",
        "Das ist alles ( ) was ich weiß."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Der Hund, der gestern bellte, ist … ; Das ist alles, was ich weiß.",
      rule: "<div class=rbox>Eingeschobene Relativsätze werden in Kommas eingeschlossen. Relativsätze mit 'was' nach 'alles' brauchen ein Komma davor.</div>"
    },
    {
      sub: "Infinitivgruppe (um … zu, ohne … zu, …)",
      type: "cross",
      q: "Entscheide, ob nach der Infinitivgruppe ein Komma nötig ist.",
      rows: [
        "Um fit zu bleiben ( ) joggt sie jeden Tag.",
        "Ohne zu zögern ( ) sprang er ins Wasser.",
        "Ich hoffe ( ) dich bald zu sehen.",
        "Statt zu arbeiten ( ) schläft er."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0],
      model: "Alle Infinitivgruppen werden durch Komma abgetrennt (weil vorangestellt oder durch Signalwort angekündigt).",
      rule: "<div class=rbox>Infinitivgruppen mit 'um zu', 'ohne zu', 'statt zu' und solche, die von einem Signalwort (z.B. hoffe) abhängen, werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Konzessivsatz (obwohl)",
      type: "cross",
      q: "Entscheide, ob vor 'obwohl' ein Komma steht.",
      rows: ["Wir gehen ins Kino ( ) obwohl es regnet."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Wir gehen ins Kino, obwohl es regnet.",
      rule: "<div class=rbox>Vor 'obwohl' (einleitende Konjunktion eines Nebensatzes) steht ein Komma.</div>"
    },
    {
      sub: "Apposition (Einschub)",
      type: "cross",
      q: "Entscheide für beide markierten Stellen.",
      rows: ["Berlin ( ) die Hauptstadt ( ) ist groß."],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0],
      model: "Berlin, die Hauptstadt, ist groß.",
      rule: "<div class=rbox>Einschübe (Appositionen) werden in Kommas eingeschlossen.</div>"
    },
    {
      sub: "Trickfrage (entweder … oder)",
      type: "cross",
      q: "Entscheide, ob hier ein Komma nötig ist.",
      rows: [
        "Entweder wir gehen jetzt ( ) oder wir bleiben hier.",
        "Sowohl er ( ) als auch ich sind da."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 1],
      model: "Kein Komma bei 'entweder … oder' und 'sowohl … als auch'.",
      rule: "<div class=rbox>Bei zweiteiligen Konjunktionen (entweder … oder, sowohl … als auch, weder … noch) steht kein Komma.</div>"
    },
    {
      sub: "Entgegenstellung (sondern)",
      type: "cross",
      q: "Entscheide, ob vor 'sondern' ein Komma steht.",
      rows: ["Ich helfe dir nicht nur heute ( ) sondern auch morgen."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: … nicht nur heute, sondern auch morgen.",
      rule: "<div class=rbox>Vor 'sondern' (Entgegenstellung) steht ein Komma.</div>"
    },
    {
      sub: "Indirekter Fragesatz (ob)",
      type: "cross",
      q: "Entscheide, ob vor 'ob' ein Komma steht.",
      rows: ["Sie fragte mich ( ) ob ich Zeit hätte."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Sie fragte mich, ob …",
      rule: "<div class=rbox>Indirekte Fragesätze mit 'ob' werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Partizipgruppe",
      type: "cross",
      q: "Entscheide, ob nach der Partizipgruppe ein Komma steht.",
      rows: ["Lachend vor Glück ( ) rannte sie nach Hause."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Lachend vor Glück, rannte sie …",
      rule: "<div class=rbox>Vorangestellte Partizipgruppen werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Komparativsatz (je … desto)",
      type: "cross",
      q: "Entscheide, ob vor 'desto' ein Komma steht.",
      rows: ["Je mehr du lernst ( ) desto besser wirst du."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Je mehr du lernst, desto besser …",
      rule: "<div class=rbox>In der 'je … desto'-Konstruktion steht ein Komma vor 'desto'.</div>"
    }
  ]
},

// ── GROSS- UND KLEINSCHREIBUNG (überarbeitet: cross) ──
{
  id: "extra_gross_klein",
  title: "Groß- und Kleinschreibung",
  emoji: "🔠",
  color: "#dc2626",
  qs: [
    {
      sub: "nach 'alles'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Ich wünsche dir alles (gute / Gute).",
        "Alles (wichtige / Wichtige) steht im Buch."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "alles Gute, alles Wichtige → substantivierte Adjektive → groß.",
      rule: "<div class=rbox>Nach 'alles', 'etwas', 'nichts', 'viel' werden Adjektive wie Nomen gebraucht und großgeschrieben.</div>"
    },
    {
      sub: "nach 'beim'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Beim (laufen / Laufen) höre ich Musik."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "beim Laufen → substantivierter Infinitiv → groß.",
      rule: "<div class=rbox>Nach 'beim', 'zum', 'vom', 'im' (versteckte Artikel) wird das Verb nominalisiert und großgeschrieben.</div>"
    },
    {
      sub: "nach Artikel (das)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Das ständige (meckern / Meckern) nervt.",
        "Er liebt das (reisen / Reisen)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "das Meckern, das Reisen → substantivierte Verben → groß.",
      rule: "<div class=rbox>Nach einem Artikel (der, die, das) wird das Verb zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "nach 'etwas'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Hast du etwas (neues / Neues) gehört?"],
      cols: ["klein", "groß"],
      correct: [1],
      model: "etwas Neues → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Nach 'etwas' wird das Adjektiv zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "am + Superlativ",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Am (besten / Besten) gefällt mir das."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "am besten → feste Wendung, Superlativ → klein.",
      rule: "<div class=rbox>Verbindungen mit 'am' + Superlativ (am besten, am schönsten) werden kleingeschrieben.</div>"
    },
    {
      sub: "Tageszeit nach Zeitadverb",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Wir treffen uns morgen (abend / Abend).",
        "Heute (morgen / Morgen) war es kalt."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "morgen Abend, heute Morgen → Tageszeiten als Nomen → groß.",
      rule: "<div class=rbox>Nach Zeitadverbien (morgen, heute, gestern) werden Tageszeiten als Nomen großgeschrieben.</div>"
    },
    {
      sub: "nach 'nichts'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Ich kenne nichts (schöneres / Schöneres)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "nichts Schöneres → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Nach 'nichts' wird das Adjektiv zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "nach 'zum'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Das ist zum (lachen / Lachen)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "zum Lachen → substantivierter Infinitiv → groß.",
      rule: "<div class=rbox>Nach 'zum' wird das Verb nominalisiert und großgeschrieben.</div>"
    },
    {
      sub: "nach 'viel'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Viel (wichtiges / Wichtiges) gab es nicht."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "viel Wichtiges → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Nach 'viel' wird das Adjektiv zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "Sprache als Nomen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Sie lernt gerade (deutsch / Deutsch)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "Deutsch (Sprache) → Nomen → groß.",
      rule: "<div class=rbox>Sprachen als Schulfächer oder Bezeichnungen werden großgeschrieben.</div>"
    },
    {
      sub: "Nationalität als Person",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Er ist ein (deutscher / Deutscher)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "ein Deutscher → substantiviertes Adjektiv für Person → groß.",
      rule: "<div class=rbox>Nationalitätenbezeichnungen für Personen (ein Deutscher, eine Französin) werden großgeschrieben.</div>"
    },
    {
      sub: "Adjektiv vor Nomen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["In (naher / Naher) Zukunft passiert es."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "in naher Zukunft → Adjektiv (attributiv) → klein.",
      rule: "<div class=rbox>Adjektive vor Nomen bleiben in der Regel klein, es sei denn, sie sind Teil eines Eigennamens.</div>"
    },
    {
      sub: "Nominalisierung mit 'das'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Das (einzige / Einzige), was zählt."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "das Einzige → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Wenn ein Adjektiv mit einem Artikel als Nomen gebraucht wird (das Einzige = das einzige Ding), schreibt man es groß.</div>"
    },
    {
      sub: "Verb als Tätigkeit (gehen + Verb)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Wir gehen heute (schwimmen / Schwimmen)."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "schwimmen gehen → Verb bleibt Verb → klein.",
      rule: "<div class=rbox>In Verbindungen mit 'gehen' + Verb (z.B. schwimmen gehen, einkaufen gehen) wird das Verb kleingeschrieben.</div>"
    },
    {
      sub: "Nomen (immer groß)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Er hat kein (interesse / Interesse)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "Interesse → Nomen → groß.",
      rule: "<div class=rbox>Substantive werden immer großgeschrieben.</div>"
    },
    {
      sub: "Zustandswort 'schade'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Es ist (schade / Schade)."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "Es ist schade. → Adjektiv → klein.",
      rule: "<div class=rbox>'schade' ist ein Adjektiv und wird kleingeschrieben.</div>"
    },
    {
      sub: "nach Präposition (im)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Wir sind im (recht / Recht)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "im Recht → Nomen (Recht) → groß.",
      rule: "<div class=rbox>Nach Präpositionen + Artikel (im, am, zum) wird das folgende Wort als Nomen großgeschrieben, wenn es sich um ein substantiviertes Wort handelt.</div>"
    }
  ]
},

// ── INDIREKTE REDE (KONJUNKTIV) – bleibt MC (keine Änderung) ──
{
  id: "extra_ind_rede",
  title: "Indirekte Rede (Konjunktiv)",
  emoji: "💬",
  color: "#7c3aed",
  qs: [
    { sub: "Konjunktiv I", type: "mc", q: "Er sagt: „Ich bin müde.\" → Er sagt, er ___ müde.", o: ["ist", "sei", "wäre"], c: 1, model: "B – sei (Konjunktiv I)", rule: "<div class=rbox>Indirekte Rede: Konjunktiv I. sein → sei.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "Sie fragt: „Kommst du morgen?\" → Sie fragt, ob ich ___.", o: ["komme", "kam", "kommest"], c: 0, model: "A – komme (Konjunktiv I)", rule: "<div class=rbox>kommen → Konjunktiv I: komme (1. Pers. Sg.).</div>" },
    { sub: "Konjunktiv II (Ersatzform)", type: "mc", q: "„Wir haben kein Geld.\" → Sie behaupten, sie ___ kein Geld.", o: ["haben", "hätten", "habet"], c: 1, model: "B – hätten (Konjunktiv II als Ersatz)", rule: "<div class=rbox>Konjunktiv I 'haben' = Indikativ → Ausweichen auf Konjunktiv II: hätten.</div>" },
    { sub: "Konjunktiv II", type: "mc", q: "„Ihr müsst mehr üben.\" → Er meint, wir ___ mehr üben.", o: ["müsstet", "müssten", "müsset"], c: 1, model: "B – müssten (Konjunktiv II)", rule: "<div class=rbox>müssen → Konjunktiv I: müsse → identisch mit Indikativ bei wir → Konjunktiv II: müssten.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Wo ist mein Schlüssel?\" → Er fragt, wo sein Schlüssel ___.", o: ["ist", "sei", "wäre"], c: 1, model: "B – sei", rule: "<div class=rbox>sein → Konjunktiv I: sei.</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "„Ich habe es gesehen.\" → Sie sagt, sie ___ es gesehen.", o: ["habe", "hätte", "hat"], c: 0, model: "A – habe … gesehen (Konjunktiv I Perfekt)", rule: "<div class=rbox>Perfekt in indirekter Rede: habe + Partizip II → sie habe es gesehen.</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "„Der Dieb rannte weg.\" → Er sagt, der Dieb ___ weggerannt.", o: ["sei", "wäre", "ist"], c: 0, model: "A – sei weggerannt (Konjunktiv I)", rule: "<div class=rbox>Bewegungsverben → Perfekt mit sein: sei weggerannt.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "Papa sagt: „Ich koche heute.\" → Er sagt, er ___ heute.", o: ["koche", "kocht", "kochte"], c: 0, model: "A – koche (Konjunktiv I)", rule: "<div class=rbox>kochen → Konjunktiv I: koche.</div>" },
    { sub: "Aufforderung (Konjunktiv II)", type: "mc", q: "„Bleibt hier!\", rief er. → Er forderte uns auf, dass wir hier ___.", o: ["bleiben", "blieben", "bleibet"], c: 1, model: "B – blieben (Konjunktiv II)", rule: "<div class=rbox>Aufforderung in indirekter Rede → Konjunktiv II: blieben.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Ich werde gewinnen.\" → Sie sagt, sie ___ gewinnen.", o: ["werde", "würde", "wird"], c: 0, model: "A – werde (Konjunktiv I)", rule: "<div class=rbox>werden → Konjunktiv I: werde.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Du kannst das.\" → Er meint, ich ___ das.", o: ["könne", "kann", "könnte"], c: 0, model: "A – könne (Konjunktiv I)", rule: "<div class=rbox>können → Konjunktiv I: könne.</div>" },
    { sub: "Konjunktiv II (Ersatz)", type: "mc", q: "„Wir gehen.\" → Sie sagen, sie ___.", o: ["gehen", "gingen", "gehet"], c: 1, model: "B – gingen (Konjunktiv II als Ersatz)", rule: "<div class=rbox>gehen → Konj. I: gehen = Indikativ → Ersatz: gingen (Konjunktiv II).</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "„Warst du da?\" → Er fragt, ob ich da ___.", o: ["war", "gewesen sei", "gewesen wäre"], c: 1, model: "B – gewesen sei (Konjunktiv I Perfekt)", rule: "<div class=rbox>sein, Perfekt in indirekter Rede: sei gewesen.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Ich mag Pizza.\" → Sie sagt, sie ___ Pizza.", o: ["mag", "möge", "möchte"], c: 1, model: "B – möge (Konjunktiv I)", rule: "<div class=rbox>mögen → Konjunktiv I: möge.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Die Arbeit muss fertig sein.\" → Er sagt, die Arbeit ___ fertig sein.", o: ["müsse", "muss", "müsste"], c: 0, model: "A – müsse (Konjunktiv I)", rule: "<div class=rbox>müssen → Konjunktiv I: müsse.</div>" },
    { sub: "Konjunktiv II (Ersatz)", type: "mc", q: "„Wir wissen es nicht.\" → Er sagt, sie ___ es nicht.", o: ["wissen", "wüssten", "wisset"], c: 1, model: "B – wüssten (Konjunktiv II)", rule: "<div class=rbox>wissen → Konj. I: wissen = Indikativ → Ersatz Konjunktiv II: wüssten.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Hast du Zeit?\" → Sie fragt, ob ich Zeit ___.", o: ["habe", "hätte", "hast"], c: 0, model: "A – habe (Konjunktiv I)", rule: "<div class=rbox>haben → Konjunktiv I: habe.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Ich bin krank\", flüstert er. → Er flüstert, er ___ krank.", o: ["sei", "ist", "wäre"], c: 0, model: "A – sei (Konjunktiv I)", rule: "<div class=rbox>sein → Konjunktiv I: sei.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Es regnet.\" → Sie meint, es ___.", o: ["regne", "regnet", "regnete"], c: 0, model: "A – regne (Konjunktiv I)", rule: "<div class=rbox>regnen → Konjunktiv I: regne.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "„Ich komme später.\" → Er sagt, er ___ später.", o: ["komme", "kommt", "käme"], c: 0, model: "A – komme (Konjunktiv I)", rule: "<div class=rbox>kommen → Konjunktiv I: komme.</div>" }
  ]
},

// ── AKTIV UND PASSIV – bleibt MC ──
{
  id: "extra_passiv",
  title: "Aktiv und Passiv",
  emoji: "🔄",
  color: "#b45309",
  qs: [
    { sub: "Passivbildung", type: "mc", q: "Aktiv: „Der Koch bereitet das Essen zu.\" → Passiv?", o: ["Das Essen wird zubereitet.", "Der Koch wird zubereitet.", "Das Essen zubereitet der Koch."], c: 0, model: "A – Das Essen wird zubereitet.", rule: "<div class=rbox>Passiv: Objekt → Subjekt + wird/werden + Partizip II.</div>" },
    { sub: "Handelnder im Passiv", type: "mc", q: "„Die Straße wird gesperrt.\" → Wer handelt vermutlich?", o: ["Die Autos", "Die Polizei", "Die Fußgänger"], c: 1, model: "B – Die Polizei", rule: "<div class=rbox>Im Passiv tritt der Handelnde in den Hintergrund – aus dem Kontext erschließbar.</div>" },
    { sub: "Tempus im Passiv", type: "mc", q: "„Der Dieb wurde gefasst.\" – Welches Tempus?", o: ["Präsens", "Präteritum", "Perfekt"], c: 1, model: "B – Präteritum (wurde gefasst)", rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>" },
    { sub: "Passiv mit Modalverb", type: "mc", q: "„Man darf hier nicht rauchen.\" → Wandle in Passiv um.", o: ["Hier darf nicht geraucht werden.", "Hier wird nicht geraucht.", "Rauchen ist verboten."], c: 0, model: "A – Hier darf nicht geraucht werden.", rule: "<div class=rbox>Modalverb + Passiv: darf nicht + Infinitiv Passiv (geraucht werden).</div>" },
    { sub: "Perfekt Passiv", type: "mc", q: "„Wir haben den Test geschrieben.\" → Passiv?", o: ["Der Test wurde geschrieben.", "Der Test ist geschrieben worden.", "Der Test wird geschrieben werden."], c: 1, model: "B – Der Test ist geschrieben worden.", rule: "<div class=rbox>Perfekt Passiv: ist/sind + Partizip II + worden.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "„Die Briefe werden morgen verschickt.\" – Wann passiert es?", o: ["Vergangenheit", "Gegenwart / Zukunft", "Schon erledigt"], c: 1, model: "B – Gegenwart/Zukunft", rule: "<div class=rbox>werden + Partizip II (Präsens/Futur) → Vorgang in Gegenwart/Zukunft.</div>" },
    { sub: "Agens im Passiv", type: "mc", q: "„Der Baum wurde vom Sturm gefällt.\" – Wer ist der „Täter\"?", o: ["Der Baum", "Der Sturm", "Der Wald"], c: 1, model: "B – Der Sturm (von + Dativ)", rule: "<div class=rbox>Das Agens (Handelnder) wird im Passiv mit von + Dativ angegeben.</div>" },
    { sub: "Passivbildung", type: "mc", q: "Aktiv: „Niemand sah ihn.\" → Passiv?", o: ["Er wurde von niemandem gesehen.", "Er sah niemanden.", "Niemand wurde von ihm gesehen."], c: 0, model: "A – Er wurde von niemandem gesehen.", rule: "<div class=rbox>Akkusativobjekt wird Subjekt; Subjekt (niemand) wird zu von + Dativ.</div>" },
    { sub: "Vorgangs- vs. Zustandspassiv", type: "mc", q: "„Der Kuchen wird gerade gebacken.\" → Welche Form?", o: ["Vorgangspassiv", "Zustandspassiv"], c: 0, model: "A – Vorgangspassiv (wird gebacken)", rule: "<div class=rbox>Vorgangspassiv: wird + Partizip II → Vorgang läuft ab.</div>" },
    { sub: "Vorgangs- vs. Zustandspassiv", type: "mc", q: "„Die Tür ist geschlossen.\" → Welche Form?", o: ["Vorgangspassiv", "Zustandspassiv"], c: 1, model: "B – Zustandspassiv (ist geschlossen)", rule: "<div class=rbox>Zustandspassiv: ist + Partizip II → Ergebnis eines Vorgangs.</div>" },
    { sub: "Präsens Passiv", type: "mc", q: "„Er repariert das Rad.\" → Passiv (Präsens)?", o: ["Das Rad wird repariert.", "Das Rad ist repariert.", "Das Rad wurde repariert."], c: 0, model: "A – Das Rad wird repariert.", rule: "<div class=rbox>Präsens Passiv: wird + Partizip II.</div>" },
    { sub: "Präteritum Passiv", type: "mc", q: "„Man baute das Haus 1990.\" → Passiv?", o: ["Das Haus wird gebaut.", "Das Haus wurde gebaut.", "Das Haus ist gebaut worden."], c: 1, model: "B – Das Haus wurde (1990) gebaut.", rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>" },
    { sub: "Modalverb + Passiv", type: "mc", q: "„Die Hausaufgaben müssen gemacht werden.\" – Was ist das?", o: ["Passiv mit Modalverb", "Aktiv mit Modalverb"], c: 0, model: "A – Passiv mit Modalverb", rule: "<div class=rbox>Modalverb + werden + Partizip II = Passiv mit Modalverb.</div>" },
    { sub: "Passivbildung", type: "mc", q: "„Er liest das Buch.\" → Passiv?", o: ["Das Buch wird gelesen.", "Das Buch gelesen wird.", "Er wird gelesen."], c: 0, model: "A – Das Buch wird gelesen.", rule: "<div class=rbox>Das Akkusativobjekt wird Subjekt. wird + Partizip II.</div>" },
    { sub: "Futur Passiv", type: "mc", q: "„Wir werden das Spiel gewinnen.\" (Aktiv) → Passiv?", o: ["Das Spiel wird gewonnen werden.", "Das Spiel wird gewonnen.", "Das Spiel wurde gewonnen."], c: 0, model: "A – Das Spiel wird gewonnen werden.", rule: "<div class=rbox>Futur Passiv: wird + Partizip II + werden.</div>" },
    { sub: "Passivbildung", type: "mc", q: "„Der Hund beißt den Postboten.\" → Passiv?", o: ["Der Postbote wird gebissen.", "Der Hund wird gebissen.", "Der Postbote beißt den Hund."], c: 0, model: "A – Der Postbote wird (vom Hund) gebissen.", rule: "<div class=rbox>Akkusativobjekt (Postbote) wird Subjekt. Subjekt (Hund) fällt weg oder wird mit von angegeben.</div>" },
    { sub: "Dativpassiv", type: "mc", q: "„Man hat mir geholfen.\" → Passiv?", o: ["Mir ist geholfen worden.", "Ich wurde geholfen.", "Mir wird geholfen."], c: 0, model: "A – Mir ist geholfen worden.", rule: "<div class=rbox>Bei Dativobjekten: Dativobjekt bleibt im Dativ; Passiv mit werden: Mir ist geholfen worden.</div>" },
    { sub: "Tempus", type: "mc", q: "„Der Laden wurde eröffnet.\" – Wann?", o: ["Jetzt", "Damals", "In der Zukunft"], c: 1, model: "B – Damals (Präteritum)", rule: "<div class=rbox>wurde + Partizip II = Präteritum Passiv → abgeschlossene Handlung in der Vergangenheit.</div>" },
    { sub: "Präsens Passiv", type: "mc", q: "„Sie putzt die Fenster.\" → Passiv (Präsens)?", o: ["Die Fenster werden geputzt.", "Die Fenster sind geputzt.", "Die Fenster wurden geputzt."], c: 0, model: "A – Die Fenster werden geputzt.", rule: "<div class=rbox>Präsens Passiv: werden + Partizip II.</div>" },
    { sub: "Agens erschließen", type: "mc", q: "„Das Gesetz wird verabschiedet.\" → Wer handelt?", o: ["Das Volk", "Das Parlament", "Die Richter"], c: 1, model: "B – Das Parlament", rule: "<div class=rbox>Gesetze werden im Parlament verabschiedet – aus dem Kontext erschließbar.</div>" }
  ]
},

// ── S / SS / ß (überarbeitet: cross, wo möglich) ──
{
  id: "extra_slaut",
  title: "s / ss / ß",
  emoji: "🔉",
  color: "#0891b2",
  qs: [
    {
      sub: "Einzelwörter (ss oder ß)",
      type: "cross",
      q: "Wähle die richtige Schreibweise für die Lücke.",
      rows: [
        "Der Flu__ (Fluss/Flüß) fließt ins Meer.",
        "Das ist ein gro__er Spa__.",
        "Ich wei__, da__ du kommst.",
        "Ein bi__chen Glück.",
        "Der Fu__ball ist rund.",
        "Ein sü__er Gru__.",
        "Er a__ den Apfel.",
        "Das Gebi__ ist scharf.",
        "Wir genie__en die Sonne.",
        "Eine wei__e Rose.",
        "Das Schlo__ ist alt."
      ],
      cols: ["ss", "ß"],
      correct: [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
      model: "Fluss (ss), großer (ß), Spaß (ß), weiß (ß), dass (ss), bisschen (ss), Fußball (ß), süßer (ß), Gruß (ß), aß (ß), Gebiss (ss), genießen (ß), weiße (ß), Schloss (ss).",
      rule: "<div class=rbox>Nach kurzem Vokal schreibt man ss (Fluss, bisschen, Gebiss, Schloss). Nach langem Vokal oder Diphthong schreibt man ß (groß, Spaß, weiß, Fuß, süß, Gruß, aß, genießen, weiße).</div>"
    },
    {
      sub: "Wörter mit s/ss/ß (Spezialfälle)",
      type: "mc",
      q: "Wähle die korrekte Kombination.",
      o: [
        "fast / Glaskasten → s / s",
        "fast / Glaskasten → ss / s",
        "fast / Glaskasten → ss / ss"
      ],
      c: 0,
      model: "fast → s, Glaskasten → s",
      rule: "<div class=rbox>In 'fast' bleibt das s (kein Dehnungszeichen), 'Glas' hat langes a und bleibt s. Merke: 'ss' nur nach kurzem Vokal.</div>"
    },
    {
      sub: "hässlich / Maß / Masse",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ein hä__licher Fleck.",
        "Das Ma__ (Bierkrug) ist voll.",
        "Die Ma__e der Menschen."
      ],
      cols: ["ss", "ß"],
      correct: [0, 1, 0],
      model: "hässlich (ss), Maß (ß), Masse (ss)",
      rule: "<div class=rbox>hässlich (kurzes ä) → ss; Maß (langes a) → ß; Masse (kurzes a) → ss.</div>"
    },
    {
      sub: "reißen / draußen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er rei__t die Zeitung.",
        "Er ist drau__en."
      ],
      cols: ["ss", "ß"],
      correct: [1, 1],
      model: "reißt (Diphthong ei) → ß; draußen (Diphthong au) → ß",
      rule: "<div class=rbox>Nach Diphthongen (ei, au, eu) steht ß.</div>"
    },
    {
      sub: "Haselnuss / Vergiss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Die Ha__elnuss.",
        "Vergi__ es nicht."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Haselnuss (ss), Vergiss (ss)",
      rule: "<div class=rbox>'Nuss' hat kurzes u → ss; 'vergessen' → Imperativ 'vergiss' (kurzes i) → ss.</div>"
    }
  ]
},

// ── WORTARTEN BESTIMMEN – bleibt MC (gemischt) ──
{
  id: "extra_wortarten",
  title: "Wortarten bestimmen",
  emoji: "🧩",
  color: "#0e7490",
  qs: [
    { sub: "Artikel", type: "mc", q: "„Das Haus ist rot.\" – Wortart von Das?", o: ["Artikel", "Demonstrativpronomen", "Adjektiv"], c: 0, model: "A – Artikel", rule: "<div class=rbox>Das als Artikel begleitet ein Nomen direkt. Probe: das, die, der.</div>" },
    { sub: "Demonstrativpronomen", type: "mc", q: "„Das ist mein Haus.\" – Wortart von Das?", o: ["Artikel", "Demonstrativpronomen", "Adjektiv"], c: 1, model: "B – Demonstrativpronomen", rule: "<div class=rbox>Das ohne nachfolgendes Nomen und mit Verweis auf etwas → Demonstrativpronomen (dieses).</div>" },
    { sub: "Personalpronomen", type: "mc", q: "„Ich helfe ihm.\" – Wortart von ihm?", o: ["Personalpronomen", "Possessivpronomen", "Relativpronomen"], c: 0, model: "A – Personalpronomen", rule: "<div class=rbox>Personalpronomen ersetzen ein Nomen: er→ihm (Dativ).</div>" },
    { sub: "Relativpronomen", type: "mc", q: "„Das Kind, das dort spielt.\" – Wortart des zweiten das?", o: ["Artikel", "Relativpronomen", "Konjunktion"], c: 1, model: "B – Relativpronomen", rule: "<div class=rbox>das nach Komma und Bezugswort (Kind) → Relativpronomen (= welches).</div>" },
    { sub: "Adverb", type: "mc", q: "„Er läuft schnell.\" – Wortart von schnell?", o: ["Adjektiv", "Adverb", "Verb"], c: 1, model: "B – Adverb", rule: "<div class=rbox>schnell modifiziert das Verb (läuft) → Adverb (nicht dekliniert).</div>" },
    { sub: "Präposition", type: "mc", q: "„Sie steht hinter mir.\" – Wortart von hinter?", o: ["Präposition", "Konjunktion", "Adverb"], c: 0, model: "A – Präposition", rule: "<div class=rbox>hinter verknüpft Nomen/Pronomen und gibt eine Beziehung an → Präposition.</div>" },
    { sub: "Konjunktion", type: "mc", q: "„Ich gehe, weil ich müde bin.\" – Wortart von weil?", o: ["Präposition", "Konjunktion", "Pronomen"], c: 1, model: "B – Konjunktion", rule: "<div class=rbox>weil leitet einen Nebensatz ein → unterordnende Konjunktion.</div>" },
    { sub: "Possessivpronomen", type: "mc", q: "„Mein Auto ist blau.\" – Wortart von Mein?", o: ["Personalpronomen", "Possessivpronomen", "Artikel"], c: 1, model: "B – Possessivpronomen", rule: "<div class=rbox>Mein drückt Besitz aus → Possessivpronomen.</div>" },
    { sub: "Gradpartikel", type: "mc", q: "„Ein sehr schöner Tag.\" – Wortart von sehr?", o: ["Adjektiv", "Gradpartikel / Adverb", "Nomen"], c: 1, model: "B – Gradpartikel / Adverb", rule: "<div class=rbox>sehr steigert das Adjektiv (schöner) → Gradpartikel / Adverb.</div>" },
    { sub: "Interjektion", type: "mc", q: "„Huch, das war knapp!\" – Wortart von Huch?", o: ["Interjektion", "Konjunktion", "Pronomen"], c: 0, model: "A – Interjektion", rule: "<div class=rbox>Huch ist ein Ausruf ohne grammatische Funktion im Satz → Interjektion.</div>" },
    { sub: "Temporaladverb", type: "mc", q: "„Wir sind heute da.\" – Wortart von heute?", o: ["Lokaladverb", "Temporaladverb", "Modaladverb"], c: 1, model: "B – Temporaladverb", rule: "<div class=rbox>heute gibt eine Zeitangabe an → Temporaladverb.</div>" },
    { sub: "Adjektiv", type: "mc", q: "„Der kluge Hund.\" – Wortart von kluge?", o: ["Nomen", "Adjektiv", "Verb"], c: 1, model: "B – Adjektiv", rule: "<div class=rbox>kluge beschreibt das Nomen (Hund) attributiv → Adjektiv.</div>" },
    { sub: "Verb", type: "mc", q: "„Er lacht laut.\" – Wortart von lacht?", o: ["Verb", "Nomen", "Adjektiv"], c: 0, model: "A – Verb", rule: "<div class=rbox>lacht = Tätigkeit, konjugiert → Verb.</div>" },
    { sub: "Modaladverb", type: "mc", q: "„Vielleicht regnet es.\" – Wortart von Vielleicht?", o: ["Adverb", "Konjunktion", "Präposition"], c: 0, model: "A – Adverb (Modaladverb)", rule: "<div class=rbox>Vielleicht gibt die Möglichkeit an → Modaladverb.</div>" },
    { sub: "Kasus", type: "mc", q: "„Wegen des Regens.\" – Welcher Fall?", o: ["Genitiv", "Dativ", "Akkusativ"], c: 0, model: "A – Genitiv", rule: "<div class=rbox>wegen + Genitiv (wegen des Regens).</div>" },
    { sub: "Kasus", type: "mc", q: "„Für mich.\" – Welcher Fall?", o: ["Nominativ", "Dativ", "Akkusativ"], c: 2, model: "C – Akkusativ", rule: "<div class=rbox>für + Akkusativ: für mich (Akkusativ).</div>" },
    { sub: "Indefinitpronomen", type: "mc", q: "„Man sagt das so.\" – Wortart von Man?", o: ["Indefinitpronomen", "Personalpronomen", "Artikel"], c: 0, model: "A – Indefinitpronomen", rule: "<div class=rbox>Man verweist unbestimmt auf eine oder mehrere Personen → Indefinitpronomen.</div>" },
    { sub: "Interrogativpronomen", type: "mc", q: "„Welcher Film gefällt dir?\" – Wortart von Welcher?", o: ["Interrogativpronomen", "Relativpronomen", "Artikel"], c: 0, model: "A – Interrogativpronomen", rule: "<div class=rbox>Welcher leitet eine Frage ein und fragt nach einer Auswahl → Interrogativpronomen.</div>" },
    { sub: "Numerale", type: "mc", q: "„Die drei Freunde.\" – Wortart von drei?", o: ["Numerale", "Adjektiv", "Nomen"], c: 0, model: "A – Numerale", rule: "<div class=rbox>drei ist eine Kardinalzahl → Numerale.</div>" },
    { sub: "Kasus", type: "mc", q: "„Trotz der Kälte.\" – Welcher Fall?", o: ["Genitiv", "Dativ", "Nominativ"], c: 0, model: "A – Genitiv", rule: "<div class=rbox>trotz + Genitiv (trotz der Kälte).</div>" }
  ]
},

// ── SATZBAU & SATZVERBINDUNGEN – bleibt MC ──
{
  id: "extra_satzbau",
  title: "Satzbau & Satzverbindungen",
  emoji: "🔗",
  color: "#9333ea",
  qs: [
    { sub: "Finalsatz", type: "mc", q: "„Ich lerne viel, ___ ich die Prüfung bestehe.\"", o: ["weil", "damit", "obwohl"], c: 1, model: "B – damit (Ziel)", rule: "<div class=rbox>damit = Absicht/Ziel → Finalsatz.</div>" },
    { sub: "Konzessivsatz", type: "mc", q: "„___ es regnete, gingen wir spazieren.\"", o: ["Weil", "Obwohl", "Dass"], c: 1, model: "B – Obwohl", rule: "<div class=rbox>Obwohl = Gegensatz/Einräumung → Konzessivsatz.</div>" },
    { sub: "Konsekutivadverb", type: "mc", q: "„Er ist krank, ___ kommt er nicht.\"", o: ["trotzdem", "deshalb", "weil"], c: 1, model: "B – deshalb", rule: "<div class=rbox>deshalb = Folge (HS + deshalb + HS). Hauptsatz-Anschluss.</div>" },
    { sub: "Indirekter Fragesatz", type: "mc", q: "„Ich weiß nicht, ___ er kommt.\"", o: ["ob", "weil", "dass"], c: 0, model: "A – ob", rule: "<div class=rbox>Indirekter Fragesatz: ob → Frage ohne Fragezeichen.</div>" },
    { sub: "Temporaladverb", type: "mc", q: "„Zuerst essen wir, ___ gehen wir raus.\"", o: ["dann", "denn", "dass"], c: 0, model: "A – dann", rule: "<div class=rbox>dann = zeitliche Abfolge (dann = danach). Hauptsatz-Anschluss.</div>" },
    { sub: "Temporalsatz", type: "mc", q: "„___ ich zu Hause war, rief er an.\"", o: ["Als", "Wenn", "Da"], c: 0, model: "A – Als (einmaliges Ereignis in der Vergangenheit)", rule: "<div class=rbox>Als = einmalige Vergangenheit. Wenn = Wiederholung oder Zukunft.</div>" },
    { sub: "Hauptsatz-Konjunktion", type: "mc", q: "„Ich gehe schlafen, ___ ich bin müde.\"", o: ["weil", "denn", "obwohl"], c: 1, model: "B – denn (Hauptsatz-Konjunktion)", rule: "<div class=rbox>denn = kausal, verbindet zwei HS (Verb bleibt auf Pos. 2). weil → NS (Verb ans Ende).</div>" },
    { sub: "Adversativsatz", type: "mc", q: "„Er ist reich, ___ er ist unglücklich.\"", o: ["aber", "sondern", "oder"], c: 0, model: "A – aber", rule: "<div class=rbox>aber = Gegensatz zweier HS.</div>" },
    { sub: "Entgegenstellung", type: "mc", q: "„Nicht nur ich, ___ auch du bist da.\"", o: ["sondern", "aber", "oder"], c: 0, model: "A – sondern", rule: "<div class=rbox>nicht nur…sondern auch = Erweiterung/Steigerung.</div>" },
    { sub: "Konditionalsatz", type: "mc", q: "„___ du Zeit hast, hilf mir.\"", o: ["Wenn", "Ob", "Dass"], c: 0, model: "A – Wenn", rule: "<div class=rbox>Wenn = Bedingung → Konditionalsatz.</div>" },
    { sub: "dass-Satz", type: "mc", q: "„Er sagt, ___ er kommt.\"", o: ["dass", "das", "weil"], c: 0, model: "A – dass", rule: "<div class=rbox>dass leitet einen NS ein (Inhaltssatz). Probe: kein Relativpronomen-Ersatz möglich.</div>" },
    { sub: "Temporalsatz", type: "mc", q: "„Ich bleibe hier, ___ du gehst.\"", o: ["während", "als", "wenn"], c: 0, model: "A – während", rule: "<div class=rbox>während = Gleichzeitigkeit zweier Handlungen.</div>" },
    { sub: "Adversativadverb", type: "mc", q: "„Es ist kalt, ___ scheint die Sonne.\"", o: ["trotzdem", "deshalb", "weil"], c: 0, model: "A – trotzdem", rule: "<div class=rbox>trotzdem = obwohl (Adverb, HS-Anschluss).</div>" },
    { sub: "Temporalsatz", type: "mc", q: "„___ er ankam, war es dunkel.\"", o: ["Als", "Wenn", "Ob"], c: 0, model: "A – Als", rule: "<div class=rbox>Als = einmalig in der Vergangenheit. Wenn = Wiederholung/Zukunft.</div>" },
    { sub: "Alternative", type: "mc", q: "„Du kannst gehen ___ bleiben.\"", o: ["oder", "aber", "sondern"], c: 0, model: "A – oder", rule: "<div class=rbox>oder = Wahl zwischen zwei Möglichkeiten.</div>" },
    { sub: "Komparativsatz", type: "mc", q: "„___ du lernst, wirst du besser.\"", o: ["Je mehr", "Sowie", "Dass"], c: 0, model: "A – Je mehr", rule: "<div class=rbox>Je mehr…desto/umso = Steigerungskorrelation.</div>" },
    { sub: "Indirekter Fragesatz", type: "mc", q: "„Ich frage mich, ___ das wahr ist.\"", o: ["ob", "dass", "weil"], c: 0, model: "A – ob", rule: "<div class=rbox>ob leitet indirekte Entscheidungsfragen ein.</div>" },
    { sub: "Finalsatz", type: "mc", q: "„Er arbeitet, ___ Geld zu verdienen.\"", o: ["um", "damit", "weil"], c: 0, model: "A – um (zu verdienen)", rule: "<div class=rbox>um…zu + Infinitiv = Absicht (wenn Subjekt gleich bleibt).</div>" },
    { sub: "Konsekutivsatz", type: "mc", q: "„Er rennt, ___ er den Bus kriegt.\"", o: ["sodass", "weil", "obwohl"], c: 0, model: "A – sodass", rule: "<div class=rbox>sodass = Folge des Rennens.</div>" },
    { sub: "Temporalsatz", type: "mc", q: "„___ ich klein war, spielte ich viel.\"", o: ["Als", "Wenn", "Wann"], c: 0, model: "A – Als", rule: "<div class=rbox>Als = einmaliger Zeitraum in der Vergangenheit.</div>" }
  ]
},

// ── ZEITFORMEN (TEMPORA) – bleibt MC ──
{
  id: "extra_zeitformen",
  title: "Zeitformen (Tempora)",
  emoji: "⏰",
  color: "#16a34a",
  qs: [
    { sub: "Präteritum", type: "mc", q: "Gestern ___ ich im Kino.", o: ["bin", "war", "werde sein"], c: 1, model: "B – war (Präteritum)", rule: "<div class=rbox>Zeitangabe 'gestern' → Vergangenheit. war = Präteritum von sein.</div>" },
    { sub: "Perfekt", type: "mc", q: "Ich ___ den Test bereits geschrieben.", o: ["habe", "bin", "werde"], c: 0, model: "A – habe … geschrieben (Perfekt)", rule: "<div class=rbox>haben + Partizip II = Perfekt (schreiben → geschrieben).</div>" },
    { sub: "Futur I", type: "mc", q: "Morgen ___ wir nach Berlin fahren.", o: ["werden", "sind", "waren"], c: 0, model: "A – werden … fahren (Futur I)", rule: "<div class=rbox>werden + Infinitiv = Futur I.</div>" },
    { sub: "Plusquamperfekt", type: "mc", q: "Bevor er kam, ___ ich schon gegessen.", o: ["habe", "hatte", "bin"], c: 1, model: "B – hatte … gegessen (Plusquamperfekt)", rule: "<div class=rbox>Vorzeitigkeit zur Vergangenheit → Plusquamperfekt: hatte + Partizip II.</div>" },
    { sub: "Präsens", type: "mc", q: "Er ___ gerade ein Buch.", o: ["liest", "las", "hat gelesen"], c: 0, model: "A – liest (Präsens)", rule: "<div class=rbox>gerade = laufende Handlung im Präsens.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "„Ich schwamm.\" – Welches Tempus?", o: ["Präsens", "Präteritum", "Perfekt"], c: 1, model: "B – Präteritum", rule: "<div class=rbox>schwamm = Präteritum von schwimmen (starkes Verb).</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "„Du hast gesungen.\" – Welches Tempus?", o: ["Präteritum", "Perfekt", "Futur"], c: 1, model: "B – Perfekt", rule: "<div class=rbox>hast + Partizip II (gesungen) = Perfekt.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "„Er wird gewinnen.\" – Welches Tempus?", o: ["Futur I", "Futur II", "Präsens"], c: 0, model: "A – Futur I", rule: "<div class=rbox>wird + Infinitiv = Futur I.</div>" },
    { sub: "Vorzeitigkeit", type: "mc", q: "Was ist die Vorzeitigkeit zum Präsens?", o: ["Perfekt", "Plusquamperfekt", "Futur"], c: 0, model: "A – Perfekt", rule: "<div class=rbox>Relativ zur Gegenwart (Präsens) → das Vorher ist das Perfekt.</div>" },
    { sub: "Vorzeitigkeit", type: "mc", q: "Was ist die Vorzeitigkeit zum Präteritum?", o: ["Perfekt", "Plusquamperfekt", "Präsens"], c: 1, model: "B – Plusquamperfekt", rule: "<div class=rbox>Relativ zur Vergangenheit (Präteritum) → das Vorher ist das Plusquamperfekt.</div>" },
    { sub: "Perfekt mit sein", type: "mc", q: "Ich ___ nach Hause gegangen.", o: ["habe", "bin", "werde"], c: 1, model: "B – bin … gegangen", rule: "<div class=rbox>gehen = Bewegungsverb → Perfekt mit sein: bin gegangen.</div>" },
    { sub: "Perfekt", type: "mc", q: "Du ___ mir das versprochen.", o: ["hast", "bist", "wirst"], c: 0, model: "A – hast … versprochen", rule: "<div class=rbox>versprechen → Perfekt mit haben: hast versprochen.</div>" },
    { sub: "Passiv Präteritum", type: "mc", q: "Das Haus ___ 1920 gebaut.", o: ["wurde", "wird", "ist"], c: 0, model: "A – wurde (Präteritum Passiv)", rule: "<div class=rbox>1920 = Vergangenheit → Präteritum Passiv: wurde gebaut.</div>" },
    { sub: "Futur I", type: "mc", q: "Wir ___ bald fertig sein.", o: ["werden", "sind", "waren"], c: 0, model: "A – werden … sein", rule: "<div class=rbox>bald → Zukunft. werden + Infinitiv = Futur I.</div>" },
    { sub: "Perfekt", type: "mc", q: "Er ___ den ganzen Tag geschlafen.", o: ["hat", "ist", "war"], c: 0, model: "A – hat … geschlafen", rule: "<div class=rbox>schlafen → kein Bewegungsverb → Perfekt mit haben: hat geschlafen.</div>" },
    { sub: "Perfekt mit sein", type: "mc", q: "Sie ___ sehr schnell gerannt.", o: ["ist", "hat", "wird"], c: 0, model: "A – ist … gerannt", rule: "<div class=rbox>rennen = Bewegungsverb → Perfekt mit sein: ist gerannt.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "„Ich dachte.\" – Welches Tempus?", o: ["Präsens", "Präteritum", "Perfekt"], c: 1, model: "B – Präteritum", rule: "<div class=rbox>dachte = Präteritum von denken (gemischtes Verb).</div>" },
    { sub: "Futur II", type: "mc", q: "„Wir werden geschlafen haben.\" – Welches Tempus?", o: ["Futur I", "Futur II"], c: 1, model: "B – Futur II", rule: "<div class=rbox>werden + Partizip II + haben/sein = Futur II (vollendete Zukunft).</div>" },
    { sub: "Futur I", type: "mc", q: "Ich ___ dich morgen anrufen.", o: ["werde", "habe", "bin"], c: 0, model: "A – werde … anrufen", rule: "<div class=rbox>morgen → Zukunft. werden + Infinitiv = Futur I.</div>" },
    { sub: "Perfekt", type: "mc", q: "Er ___ es nicht gewusst.", o: ["hat", "ist", "war"], c: 0, model: "A – hat … gewusst", rule: "<div class=rbox>wissen → Perfekt mit haben: hat … gewusst.</div>" }
  ]
},

// ── GETRENNT- UND ZUSAMMENSCHREIBUNG (überarbeitet: cross) ──
{
  id: "extra_getrennt",
  title: "Getrennt- und Zusammenschreibung",
  emoji: "🧩",
  color: "#ca8a04",
  qs: [
    {
      sub: "Sportarten / feste Verbindungen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Lass uns heute (Eis laufen / eislaufen).",
        "Ich werde (Rad fahren / radfahren)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "eislaufen, radfahren → Sportarten als feste Gefüge → zusammen.",
      rule: "<div class=rbox>Sportarten und feste Tätigkeitsbezeichnungen werden als Verb oft zusammengeschrieben: eislaufen, radfahren, kegeln gehen? Aber 'Rad fahren' ist getrennt? Achtung: Als Verb 'radfahren' ist zusammen (Duden erlaubt beides, aber empfohlen: radfahren). Hier ist die Sportart gemeint, daher zusammen. Im Zweifel die Regel: Wenn das Nomen seine Selbstständigkeit verloren hat, wird zusammengeschrieben.</div>"
    },
    {
      sub: "übertragene Bedeutung",
      type: "cross",
      q: "Entscheide: getrennt (wörtlich) oder zusammen (übertragen)?",
      rows: [
        "Er ist in der 9. Klasse (sitzen geblieben / sitzengeblieben). (nicht versetzt)",
        "Du sollst das Projekt (niedrig halten / niedrighalten). (begrenzen)",
        "Das ist (schwer wiegend / schwerwiegend). (ernst)",
        "Er will (fest halten / festhalten) am Plan.",
        "Ich kann das (gut heißen / gutheißen). (zustimmen)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1, 1, 1],
      model: "sitzengeblieben, niedrighalten, schwerwiegend, festhalten, gutheißen → übertragene Bedeutung → zusammen.",
      rule: "<div class=rbox>Bei übertragener Bedeutung werden Verbindungen aus Adjektiv/Partikel und Verb oft zusammengeschrieben (z.B. sitzenbleiben = nicht versetzt werden, gutheißen = zustimmen).</div>"
    },
    {
      sub: "kennenlernen",
      type: "mc",
      q: "„Ich möchte dich gerne (kennen lernen / kennenlernen).\"",
      o: ["kennen lernen", "kennenlernen", "Beides ist korrekt"],
      c: 2,
      model: "C – Beides korrekt (Empfehlung: kennenlernen)",
      rule: "<div class=rbox>Beide Schreibweisen sind laut Duden korrekt. Zusammenschreibung ist empfohlen.</div>"
    },
    {
      sub: "Nomen + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er kann sehr gut (Auto fahren / Autofahren).",
        "Ich werde (Rad fahren / radfahren)." // schon oben, aber zur Sicherheit
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 1], // Auto fahren (Verb) getrennt; radfahren (Sport) zusammen
      model: "Auto fahren (Verb-Konstruktion) → getrennt; radfahren (Sportart) → zusammen.",
      rule: "<div class=rbox>Bei 'Nomen + Verb' wird meist getrennt geschrieben, wenn das Nomen Objekt ist (Auto fahren, Klavier spielen). Bei festen Sportarten kann auch Zusammenschreibung vorkommen (radfahren).</div>"
    },
    {
      sub: "Verb + gehen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Wir müssen heute (einkaufen gehen / einkaufengehen).",
        "Sie will (spazieren gehen / spazierengehen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 0],
      model: "einkaufen gehen, spazieren gehen → zwei Verben, lockere Verbindung → getrennt.",
      rule: "<div class=rbox>Verbindungen aus zwei Verben (einkaufen gehen, spazieren gehen) werden getrennt geschrieben.</div>"
    },
    {
      sub: "hoch + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Das ist (hoch interessant / hochinteressant)."],
      cols: ["getrennt", "zusammen"],
      correct: [1],
      model: "hochinteressant → übertragene Steigerung → zusammen.",
      rule: "<div class=rbox>Verbindungen mit 'hoch' + Adjektiv werden bei übertragener Bedeutung zusammengeschrieben: hochinteressant, höchstpersönlich.</div>"
    },
    {
      sub: "beisammen + sein",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Wir wollen (beisammen sein / beisammensein)."],
      cols: ["getrennt", "zusammen"],
      correct: [0],
      model: "beisammen sein → Adverb + sein → getrennt.",
      rule: "<div class=rbox>Adverb + sein wird getrennt geschrieben (da sein, beisammen sein).</div>"
    },
    {
      sub: "wiederholt",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Er hat (wieder holt / wiederholt) gelogen."],
      cols: ["getrennt", "zusammen"],
      correct: [1],
      model: "wiederholt (Adverb) → zusammen. (wieder holen = zurückholen → getrennt)",
      rule: "<div class=rbox>'wiederholt' im Sinne von 'mehrmals' wird zusammengeschrieben. 'wieder holen' (zurückholen) getrennt.</div>"
    },
    {
      sub: "fallen lassen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Sie lässt das Glas (fallen / fallenlassen)."],
      cols: ["getrennt", "zusammen"],
      correct: [0],
      model: "fallen lassen (wörtlich) → getrennt.",
      rule: "<div class=rbox>Wörtliche Bedeutung → getrennt: fallen lassen, liegen lassen.</div>"
    },
    {
      sub: "Partikelverben",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Komm bitte (her ein / herein).",
        "Er hat den Termin (bei behalten / beibehalten).",
        "Wir (fern sehen / fernsehen) heute."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1],
      model: "herein, beibehalten, fernsehen → Partikelverben → zusammen.",
      rule: "<div class=rbox>Untrennbare und trennbare Partikelverben werden im Infinitiv zusammengeschrieben: herein, beibehalten, fernsehen.</div>"
    },
    {
      sub: "Adverb + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Er ist (völlig wertlos / völligwertlos)."],
      cols: ["getrennt", "zusammen"],
      correct: [0],
      model: "völlig wertlos → Adverb + Adjektiv → getrennt.",
      rule: "<div class=rbox>Adverbien + Adjektive bleiben in der Regel getrennt: sehr schön, völlig sinnlos.</div>"
    },
    {
      sub: "Nominalisierung",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen? (als Nomen)",
      rows: ["Das (Zusammen kommen / Zusammenkommen) war schön."],
      cols: ["getrennt", "zusammen"],
      correct: [1],
      model: "das Zusammenkommen → nominalisierter Infinitiv → zusammen und groß.",
      rule: "<div class=rbox>Nominalisierte Infinitive werden zusammengeschrieben und groß: das Zusammenkommen, das Spazierengehen.</div>"
    }
  ]
},

// ── STILMITTEL & RHETORIK – bleibt MC ──
{
  id: "extra_stilmittel",
  title: "Stilmittel & Rhetorik",
  emoji: "🎭",
  color: "#be185d",
  qs: [
    { sub: "Vergleich", type: "mc", q: "„Stark wie ein Bär.\" – Welches Stilmittel?", o: ["Metapher", "Vergleich", "Ironie"], c: 1, model: "B – Vergleich (wie)", rule: "<div class=rbox>Vergleich: Verwendung von wie. Metapher: ohne wie (z. B. er ist ein Bär).</div>" },
    { sub: "Personifikation", type: "mc", q: "„Die Sonne lacht.\" – Welches Stilmittel?", o: ["Personifikation", "Alliteration", "Ellipse"], c: 0, model: "A – Personifikation", rule: "<div class=rbox>Personifikation: menschliche Eigenschaft wird auf unbelebtes Ding übertragen.</div>" },
    { sub: "Metapher", type: "mc", q: "„Ein Meer aus Tränen.\" – Welches Stilmittel?", o: ["Metapher", "Vergleich", "Klimax"], c: 0, model: "A – Metapher", rule: "<div class=rbox>Metapher: sprachliches Bild ohne wie. Meer = übertragen für sehr viele Tränen.</div>" },
    { sub: "Alliteration", type: "mc", q: "„Milch macht müde Männer munter.\" – Stilmittel?", o: ["Alliteration", "Metapher", "Anapher"], c: 0, model: "A – Alliteration", rule: "<div class=rbox>Alliteration: Anlautwiederholung am Wortanfang (m/m/m/m).</div>" },
    { sub: "Hyperbel", type: "mc", q: "„Ich habe es dir tausendmal gesagt!\" – Stilmittel?", o: ["Hyperbel", "Ironie", "Symbol"], c: 0, model: "A – Hyperbel (Übertreibung)", rule: "<div class=rbox>Hyperbel: bewusste Übertreibung zur Verstärkung.</div>" },
    { sub: "Klimax", type: "mc", q: "„Veni, vidi, vici.\" (Ich kam, sah, siegte) – Stilmittel?", o: ["Klimax", "Ellipse", "Alliteration"], c: 0, model: "A – Klimax", rule: "<div class=rbox>Klimax: Steigerung in einer Aufzählung (kommen → sehen → siegen = Steigerung).</div>" },
    { sub: "Litotes", type: "mc", q: "„Nicht unhübsch.\" (Bedeutet: sehr hübsch) – Stilmittel?", o: ["Litotes", "Metapher", "Vergleich"], c: 0, model: "A – Litotes", rule: "<div class=rbox>Litotes: Untertreibung durch doppelte Verneinung → verstärkt die positive Aussage.</div>" },
    { sub: "Ironie", type: "mc", q: "„Das ist ja eine schöne Bescherung!\" (negativ gemeint) – Stilmittel?", o: ["Ironie", "Personifikation", "Hyperbel"], c: 0, model: "A – Ironie", rule: "<div class=rbox>Ironie: Das Gemeinte ist das Gegenteil des Gesagten.</div>" },
    { sub: "Ellipse", type: "mc", q: "„Ende gut, alles gut.\" – Stilmittel?", o: ["Ellipse", "Metapher", "Vergleich"], c: 0, model: "A – Ellipse", rule: "<div class=rbox>Ellipse: Auslassung von Satzteilen (hier fehlt das Verb).</div>" },
    { sub: "Metapher", type: "mc", q: "„Wir müssen den Gürtel enger schnallen.\" – Stilmittel?", o: ["Metapher", "Alliteration", "Anapher"], c: 0, model: "A – Metapher", rule: "<div class=rbox>Metapher: sprachliches Bild für Sparmaßnahmen.</div>" },
    { sub: "Antithese", type: "mc", q: "„Heiß und kalt.\" – Stilmittel?", o: ["Antithese", "Metapher", "Vergleich"], c: 0, model: "A – Antithese", rule: "<div class=rbox>Antithese: Gegenüberstellung von Gegensätzen.</div>" },
    { sub: "Klimax", type: "mc", q: "„Gestern, heute, morgen.\" – Stilmittel?", o: ["Klimax", "Anapher", "Symbol"], c: 0, model: "A – Klimax", rule: "<div class=rbox>Klimax: Steigerung / zeitliche Abfolge als Aufzählung.</div>" },
    { sub: "Euphemismus", type: "mc", q: "„Er ist von uns gegangen.\" (für: gestorben) – Stilmittel?", o: ["Euphemismus", "Hyperbel", "Ironie"], c: 0, model: "A – Euphemismus", rule: "<div class=rbox>Euphemismus: Beschönigung eines unangenehmen Begriffs.</div>" },
    { sub: "Symbol", type: "mc", q: "„Ein Herz für Kinder.\" (Herz als …) – Stilmittel?", o: ["Symbol", "Metapher", "Vergleich"], c: 0, model: "A – Symbol", rule: "<div class=rbox>Symbol: ein Bild steht stellvertretend für eine Idee (Herz = Liebe/Fürsorge).</div>" },
    { sub: "Antithese", type: "mc", q: "„Das Glas ist halb leer / halb voll.\" – Stilmittel?", o: ["Antithese", "Ironie", "Ellipse"], c: 0, model: "A – Antithese", rule: "<div class=rbox>Antithese: zwei gegensätzliche Perspektiven auf dasselbe.</div>" },
    { sub: "Rhetorische Frage", type: "mc", q: "„Bist du blöd?\" (Frage, auf die man keine Antwort erwartet) – Stilmittel?", o: ["Rhetorische Frage", "Alliteration", "Hyperbel"], c: 0, model: "A – Rhetorische Frage", rule: "<div class=rbox>Rhetorische Frage: wird gestellt, ohne eine echte Antwort zu erwarten.</div>" },
    { sub: "Repetitio", type: "mc", q: "„Warten, warten, warten.\" – Stilmittel?", o: ["Repetitio", "Klimax", "Vergleich"], c: 0, model: "A – Repetitio", rule: "<div class=rbox>Repetitio: Wiederholung desselben Wortes zur Betonung.</div>" },
    { sub: "Personifikation", type: "mc", q: "„Väterchen Frost.\" – Stilmittel?", o: ["Personifikation", "Metapher", "Alliteration"], c: 0, model: "A – Personifikation", rule: "<div class=rbox>Personifikation: Frost wird vermenschlicht (Väterchen).</div>" },
    { sub: "Antithese", type: "mc", q: "„Himmel und Hölle.\" – Stilmittel?", o: ["Antithese", "Ironie", "Symbol"], c: 0, model: "A – Antithese", rule: "<div class=rbox>Antithese: Gegensatzpaar (Himmel ↔ Hölle).</div>" },
    { sub: "Alliteration", type: "mc", q: "„Haus, Hof, Hund.\" – Stilmittel?", o: ["Alliteration", "Metapher", "Vergleich"], c: 0, model: "A – Alliteration", rule: "<div class=rbox>Alliteration: gleicher Anlaut H in allen drei Wörtern.</div>" }
  ]
}

];

// ================================ INIT ================================