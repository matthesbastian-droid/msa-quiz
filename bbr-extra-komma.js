// ================================================================
// bbr-extra-komma.js – interaktive Kommaübungen (Textüberarbeitung)
// ================================================================
// HINWEIS: Diese Datei ersetzt die alte Ankreuzversion durch
// interaktive Aufgaben vom Typ "komma", bei denen die Lernenden
// Kommas direkt im Satz setzen können (angelehnt an msa-10Pkt.js).
// ================================================================

var BBR_KOMMA_INTERAKTIV = [
  {
    id: "bbr_extra_komma_interaktiv",
    title: "Kommasetzung üben (interaktiv)",
    emoji: "🔍",
    color: "#0f766e",
    qs: [
      // ========== Aufgabe 1: Einfache Kommaregeln ==========
      {
        sub: "1.1 Aufzählung",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Michelle Fabienne und Lea sind gute Freundinnen.",
        correctPositions: [8],
        acceptedAnswers: ["Michelle, Fabienne und Lea sind gute Freundinnen."],
        model: "Nach 'Michelle' muss ein Komma, da es sich um eine Aufzählung handelt (Michelle, Fabienne und Lea).",
        rule: "<div class=rbox>Regeln: <br>1. Aufzählungen trennt man mit Komma (vor 'und'/'oder' kein Komma).<br>2. Einschübe werden in Kommas eingeschlossen.<br>3. Vor entgegenstellenden Konjunktionen (aber, sondern) steht ein Komma.<br>4. Zwischen Hauptsätzen steht ein Komma.</div>"
      },
      {
        sub: "1.2 Einschub",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Kevin er ist mein bester Freund kommt mit.",
        correctPositions: [5, 31],
        acceptedAnswers: ["Kevin, er ist mein bester Freund, kommt mit."],
        model: "Der Einschub 'er ist mein bester Freund' wird mit Kommas eingeschlossen.",
        rule: "<div class=rbox>Regeln: <br>1. Aufzählungen trennt man mit Komma (vor 'und'/'oder' kein Komma).<br>2. Einschübe werden in Kommas eingeschlossen.<br>3. Vor entgegenstellenden Konjunktionen (aber, sondern) steht ein Komma.<br>4. Zwischen Hauptsätzen steht ein Komma.</div>"
      },
      {
        sub: "1.3 Konjunktion 'aber'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Mia will mitkommen aber nicht Nelli.",
        correctPositions: [18],
        acceptedAnswers: ["Mia will mitkommen, aber nicht Nelli."],
        model: "Vor der entgegenstellenden Konjunktion 'aber' steht ein Komma.",
        rule: "<div class=rbox>Regeln: <br>1. Aufzählungen trennt man mit Komma (vor 'und'/'oder' kein Komma).<br>2. Einschübe werden in Kommas eingeschlossen.<br>3. Vor entgegenstellenden Konjunktionen (aber, sondern) steht ein Komma.<br>4. Zwischen Hauptsätzen steht ein Komma.</div>"
      },
      {
        sub: "1.4 Hauptsätze",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Lars kommt mit Marc bleibt zu Hause.",
        correctPositions: [14],
        acceptedAnswers: ["Lars kommt mit, Marc bleibt zu Hause."],
        model: "Zwischen zwei Hauptsätzen steht ein Komma.",
        rule: "<div class=rbox>Regeln: <br>1. Aufzählungen trennt man mit Komma (vor 'und'/'oder' kein Komma).<br>2. Einschübe werden in Kommas eingeschlossen.<br>3. Vor entgegenstellenden Konjunktionen (aber, sondern) steht ein Komma.<br>4. Zwischen Hauptsätzen steht ein Komma.</div>"
      },
      {
        sub: "1.5 Ausruf",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Wie du kannst das alles schon?",
        correctPositions: [3],
        acceptedAnswers: ["Wie, du kannst das alles schon?"],
        model: "Nach einem Ausruf (hier 'Wie') steht ein Komma.",
        rule: "<div class=rbox>Regeln: <br>1. Aufzählungen trennt man mit Komma (vor 'und'/'oder' kein Komma).<br>2. Einschübe werden in Kommas eingeschlossen.<br>3. Vor entgegenstellenden Konjunktionen (aber, sondern) steht ein Komma.<br>4. Zwischen Hauptsätzen steht ein Komma.</div>"
      },
      {
        sub: "1.6 Verneinung",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Nein ich komme nicht mit.",
        correctPositions: [4],
        acceptedAnswers: ["Nein, ich komme nicht mit."],
        model: "Nach einer Verneinung (hier 'Nein') steht ein Komma.",
        rule: "<div class=rbox>Regeln: <br>1. Aufzählungen trennt man mit Komma (vor 'und'/'oder' kein Komma).<br>2. Einschübe werden in Kommas eingeschlossen.<br>3. Vor entgegenstellenden Konjunktionen (aber, sondern) steht ein Komma.<br>4. Zwischen Hauptsätzen steht ein Komma.</div>"
      },

      // ========== Aufgabe 2: Einfache Regeln (ohne Klammern) ==========
      {
        sub: "2.1 Aufzählung",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Äpfel Birnen und Bananen sind Obst.",
        correctPositions: [5],
        acceptedAnswers: ["Äpfel, Birnen und Bananen sind Obst."],
        model: "In einer Aufzählung wird nach dem ersten Element ein Komma gesetzt (vor 'und' kein Komma).",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },
      {
        sub: "2.2 Relativsatz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Mein Bruder der gerade kommt ist müde.",
        correctPositions: [11, 28],
        acceptedAnswers: ["Mein Bruder, der gerade kommt, ist müde."],
        model: "Der Relativsatz 'der gerade kommt' wird in Kommas eingeschlossen.",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },
      {
        sub: "2.3 Konjunktion 'aber'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Er ist klug aber manchmal faul.",
        correctPositions: [12],
        acceptedAnswers: ["Er ist klug, aber manchmal faul."],
        model: "Vor der entgegenstellenden Konjunktion 'aber' steht ein Komma.",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },
      {
        sub: "2.4 Hauptsätze",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Ich lese gerne mein Bruder spielt Fußball.",
        correctPositions: [15],
        acceptedAnswers: ["Ich lese gerne, mein Bruder spielt Fußball."],
        model: "Zwischen zwei Hauptsätzen wird ein Komma gesetzt.",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },
      {
        sub: "2.5 Nebensatz mit 'dass'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Ich hoffe dass du kommst.",
        correctPositions: [10],
        acceptedAnswers: ["Ich hoffe, dass du kommst."],
        model: "Vor der unterordnenden Konjunktion 'dass' steht ein Komma.",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },
      {
        sub: "2.6 Infinitivgruppe mit 'um'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Er spart um ein Auto zu kaufen.",
        correctPositions: [9],
        acceptedAnswers: ["Er spart, um ein Auto zu kaufen."],
        model: "Vor der Infinitivgruppe mit 'um' steht ein Komma.",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },
      {
        sub: "2.7 Anrede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Guten Tag Frau Müller!",
        correctPositions: [9],
        acceptedAnswers: ["Guten Tag, Frau Müller!"],
        model: "Bei einer Anrede wird nach der Anredeformel ein Komma gesetzt.",
        rule: "<div class=rbox>Regeln: 1=Aufzählungen, 2=Einschübe, 3=entgegenstellende Konjunktionen, 4=Hauptsätze, 5=Nebensätze, 6=Infinitivgruppen, 7=Anreden/Ausrufe.</div>"
      },

      // ========== Aufgabe 3: Satzgefüge ==========
      {
        sub: "3.1 Kausalsatz mit 'weil'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Jonas nimmt an der Foto-AG teil weil Merle auch kommt.",
        correctPositions: [31],
        acceptedAnswers: ["Jonas nimmt an der Foto-AG teil, weil Merle auch kommt."],
        model: "Vor dem Nebensatz mit 'weil' steht ein Komma.",
        rule: "<div class=rbox>Nebensätze werden durch Komma vom Hauptsatz getrennt. Relativsätze (die, den) werden in Kommas eingeschlossen.</div>"
      },
      {
        sub: "3.2 Relativsatz + Kausalsatz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Anne verabredet sich mit Rany den sie mag weil er ihr geholfen hat.",
        correctPositions: [29, 41],
        acceptedAnswers: ["Anne verabredet sich mit Rany, den sie mag, weil er ihr geholfen hat."],
        model: "Vor dem Relativsatz und vor dem Kausalsatz steht jeweils ein Komma.",
        rule: "<div class=rbox>Nebensätze werden durch Komma vom Hauptsatz getrennt. Relativsätze (die, den) werden in Kommas eingeschlossen.</div>"
      },
      {
        sub: "3.3 Vorangestellter Nebensatz",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Weil ein großer Teil der Klasse keine Zeit hat wird die Fete verlegt.",
        correctPositions: [46],
        acceptedAnswers: ["Weil ein großer Teil der Klasse keine Zeit hat, wird die Fete verlegt."],
        model: "Nach einem vorangestellten Nebensatz wird das Komma gesetzt.",
        rule: "<div class=rbox>Nebensätze werden durch Komma vom Hauptsatz getrennt. Relativsätze (die, den) werden in Kommas eingeschlossen.</div>"
      },
      {
        sub: "3.4 Relativsatz + 'ob'-Satz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Emmi die im Augenblick krank ist weiß noch nicht ob sie kommen kann.",
        correctPositions: [4, 32, 48],
        acceptedAnswers: ["Emmi, die im Augenblick krank ist, weiß noch nicht, ob sie kommen kann."],
        model: "Der Relativsatz wird in Kommas eingeschlossen, und vor dem 'ob'-Nebensatz steht ein Komma.",
        rule: "<div class=rbox>Nebensätze werden durch Komma vom Hauptsatz getrennt. Relativsätze (die, den) werden in Kommas eingeschlossen.</div>"
      },
      {
        sub: "3.5 Temporalsatz mit 'als'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Als die Führung zu Ende war kauften sich einige Andenken.",
        correctPositions: [27],
        acceptedAnswers: ["Als die Führung zu Ende war, kauften sich einige Andenken."],
        model: "Nach dem Nebensatz mit 'als' steht ein Komma.",
        rule: "<div class=rbox>Nebensätze werden durch Komma vom Hauptsatz getrennt. Relativsätze (die, den) werden in Kommas eingeschlossen.</div>"
      },
      {
        sub: "3.6 Konsekutivsatz mit 'dass'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Der Höhleneingang ist so niedrig dass man sich stoßen kann.",
        correctPositions: [32],
        acceptedAnswers: ["Der Höhleneingang ist so niedrig, dass man sich stoßen kann."],
        model: "Vor dem 'dass'-Nebensatz steht ein Komma.",
        rule: "<div class=rbox>Nebensätze werden durch Komma vom Hauptsatz getrennt. Relativsätze (die, den) werden in Kommas eingeschlossen.</div>"
      },

      // ========== Aufgabe 4: Infinitivgruppen ==========
      {
        sub: "4.1 Hinweiswort 'daran'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Felix dachte nicht daran sich bei seinem Freund zu entschuldigen.",
        correctPositions: [24],
        acceptedAnswers: ["Felix dachte nicht daran, sich bei seinem Freund zu entschuldigen."],
        model: "Bei einem hinweisenden Wort (daran) wird die Infinitivgruppe mit Komma abgetrennt.",
        rule: "<div class=rbox>Infinitivgruppen werden durch Komma abgetrennt, wenn sie mit 'um', 'ohne', 'anstatt', 'statt', 'außer', 'als' eingeleitet werden oder wenn ein korrelierendes Wort (daran, die Absicht, es) im Hauptsatz auf sie verweist.</div>"
      },
      {
        sub: "4.2 Infinitiv mit 'um'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Wir fahren ans Meer um uns zu erholen.",
        correctPositions: [19],
        acceptedAnswers: ["Wir fahren ans Meer, um uns zu erholen."],
        model: "Vor einer Infinitivgruppe mit 'um' steht ein Komma.",
        rule: "<div class=rbox>Infinitivgruppen werden durch Komma abgetrennt, wenn sie mit 'um', 'ohne', 'anstatt', 'statt', 'außer', 'als' eingeleitet werden oder wenn ein korrelierendes Wort (daran, die Absicht, es) im Hauptsatz auf sie verweist.</div>"
      },
      {
        sub: "4.3 Infinitiv mit 'ohne'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Der Junge überquerte die Straße ohne auf den Verkehr zu achten.",
        correctPositions: [31],
        acceptedAnswers: ["Der Junge überquerte die Straße, ohne auf den Verkehr zu achten."],
        model: "Vor einer Infinitivgruppe mit 'ohne' steht ein Komma.",
        rule: "<div class=rbox>Infinitivgruppen werden durch Komma abgetrennt, wenn sie mit 'um', 'ohne', 'anstatt', 'statt', 'außer', 'als' eingeleitet werden oder wenn ein korrelierendes Wort (daran, die Absicht, es) im Hauptsatz auf sie verweist.</div>"
      },
      {
        sub: "4.4 Infinitiv mit 'anstatt'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Anstatt zu lernen spielt er Computer.",
        correctPositions: [17],
        acceptedAnswers: ["Anstatt zu lernen, spielt er Computer."],
        model: "Vor einer Infinitivgruppe mit 'anstatt' (nachgestellt) steht ein Komma.",
        rule: "<div class=rbox>Infinitivgruppen werden durch Komma abgetrennt, wenn sie mit 'um', 'ohne', 'anstatt', 'statt', 'außer', 'als' eingeleitet werden oder wenn ein korrelierendes Wort (daran, die Absicht, es) im Hauptsatz auf sie verweist.</div>"
      },
      {
        sub: "4.5 Hinweiswort 'die Absicht'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Ich hatte nie die Absicht diesen Film zu sehen.",
        correctPositions: [25],
        acceptedAnswers: ["Ich hatte nie die Absicht, diesen Film zu sehen."],
        model: "Bei einem hinweisenden Wort (die Absicht) wird die Infinitivgruppe mit Komma abgetrennt.",
        rule: "<div class=rbox>Infinitivgruppen werden durch Komma abgetrennt, wenn sie mit 'um', 'ohne', 'anstatt', 'statt', 'außer', 'als' eingeleitet werden oder wenn ein korrelierendes Wort (daran, die Absicht, es) im Hauptsatz auf sie verweist.</div>"
      },
      {
        sub: "4.6 Hinweiswort 'die Idee'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Er kam nicht auf die Idee einen Schraubenzieher zu benutzen.",
        correctPositions: [25],
        acceptedAnswers: ["Er kam nicht auf die Idee, einen Schraubenzieher zu benutzen."],
        model: "Bei einem hinweisenden Wort (die Idee) wird die Infinitivgruppe mit Komma abgetrennt.",
        rule: "<div class=rbox>Infinitivgruppen werden durch Komma abgetrennt, wenn sie mit 'um', 'ohne', 'anstatt', 'statt', 'außer', 'als' eingeleitet werden oder wenn ein korrelierendes Wort (daran, die Absicht, es) im Hauptsatz auf sie verweist.</div>"
      },

      // ========== Aufgabe 5: Wörtliche Rede und Anreden ==========
      {
        sub: "5.1 Ausruf in wörtlicher Rede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "„Na wie wird denn der Winter?“ fragte der Siedler.",
        correctPositions: [3],
        acceptedAnswers: ["„Na, wie wird denn der Winter?“ fragte der Siedler."],
        model: "Nach einem Ausruf in der wörtlichen Rede steht ein Komma.",
        rule: "<div class=rbox>Wörtliche Rede wird durch Komma vom Begleitsatz getrennt, wenn der Begleitsatz vorangestellt ist (Er sagte: „...“) oder nachgestellt („...“, sagte er). Anreden wie 'Frau Müller' werden durch Komma abgetrennt.</div>"
      },
      {
        sub: "5.2 Ausruf in wörtlicher Rede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "„Kalt sehr kalt!“ antwortete der Indianer.",
        correctPositions: [5],
        acceptedAnswers: ["„Kalt, sehr kalt!“ antwortete der Indianer."],
        model: "Nach einem Ausruf in der wörtlichen Rede steht ein Komma.",
        rule: "<div class=rbox>Wörtliche Rede wird durch Komma vom Begleitsatz getrennt, wenn der Begleitsatz vorangestellt ist (Er sagte: „...“) oder nachgestellt („...“, sagte er). Anreden wie 'Frau Müller' werden durch Komma abgetrennt.</div>"
      },
      {
        sub: "5.3 Begleitsatz vor der Rede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Der Siedler fragte „Wird der Winter wirklich so kalt?“",
        correctPositions: [18],
        acceptedAnswers: ["Der Siedler fragte, „Wird der Winter wirklich so kalt?“"],
        model: "Vor der wörtlichen Rede steht ein Komma.",
        rule: "<div class=rbox>Wörtliche Rede wird durch Komma vom Begleitsatz getrennt, wenn der Begleitsatz vorangestellt ist (Er sagte: „...“) oder nachgestellt („...“, sagte er). Anreden wie 'Frau Müller' werden durch Komma abgetrennt.</div>"
      },
      {
        sub: "5.4 Begleitsatz nach der Rede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "„Und woher weißt du das?“ wollte der Siedler wissen.",
        correctPositions: [25],
        acceptedAnswers: ["„Und woher weißt du das?“, wollte der Siedler wissen."],
        model: "Nach der wörtlichen Rede steht vor dem Begleitsatz ein Komma.",
        rule: "<div class=rbox>Wörtliche Rede wird durch Komma vom Begleitsatz getrennt, wenn der Begleitsatz vorangestellt ist (Er sagte: „...“) oder nachgestellt („...“, sagte er). Anreden wie 'Frau Müller' werden durch Komma abgetrennt.</div>"
      },
      {
        sub: "5.5 Begleitsatz nach der Rede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "„Das ist eine uralte Weisheit“ rief er ihm zu.",
        correctPositions: [30],
        acceptedAnswers: ["„Das ist eine uralte Weisheit“, rief er ihm zu."],
        model: "Nach der wörtlichen Rede steht vor dem Begleitsatz ein Komma.",
        rule: "<div class=rbox>Wörtliche Rede wird durch Komma vom Begleitsatz getrennt, wenn der Begleitsatz vorangestellt ist (Er sagte: „...“) oder nachgestellt („...“, sagte er). Anreden wie 'Frau Müller' werden durch Komma abgetrennt.</div>"
      },
      {
        sub: "5.6 Anrede",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Guten Tag Frau Müller!",
        correctPositions: [9],
        acceptedAnswers: ["Guten Tag, Frau Müller!"],
        model: "Bei einer Anrede wird nach der Anredeformel ein Komma gesetzt.",
        rule: "<div class=rbox>Wörtliche Rede wird durch Komma vom Begleitsatz getrennt, wenn der Begleitsatz vorangestellt ist (Er sagte: „...“) oder nachgestellt („...“, sagte er). Anreden wie 'Frau Müller' werden durch Komma abgetrennt.</div>"
      },

      // ========== Aufgabe 6: Gemischte Übung ==========
      {
        sub: "6.1 Nebensatz und Relativsatz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Als die Führung zu Ende war kauften sich einige von uns noch Andenken die allerdings ziemlich kitschig waren.",
        correctPositions: [27, 69],
        acceptedAnswers: ["Als die Führung zu Ende war, kauften sich einige von uns noch Andenken, die allerdings ziemlich kitschig waren."],
        model: "Komma nach dem Nebensatz und vor dem Relativsatz.",
        rule: "<div class=rbox>Achte auf Nebensätze (als, die, dass, sodass), die immer ein Komma verlangen. Einschübe und Relativsätze werden in Kommas eingeschlossen. Vor 'und' in Hauptsatzreihen steht kein Komma. Infinitivgruppen werden abgetrennt, wenn ein Hinweiswort (darüber) im Hauptsatz steht.</div>"
      },
      {
        sub: "6.2 Relativsatz und dass-Satz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Am Ende der Woche die wie im Fluge verging bedauerten alle dass wir wieder nach Hause mussten.",
        correctPositions: [17, 42, 58],
        acceptedAnswers: ["Am Ende der Woche, die wie im Fluge verging, bedauerten alle, dass wir wieder nach Hause mussten."],
        model: "Kommas um den Relativsatz und vor dem 'dass'-Nebensatz.",
        rule: "<div class=rbox>Achte auf Nebensätze (als, die, dass, sodass), die immer ein Komma verlangen. Einschübe und Relativsätze werden in Kommas eingeschlossen. Vor 'und' in Hauptsatzreihen steht kein Komma. Infinitivgruppen werden abgetrennt, wenn ein Hinweiswort (darüber) im Hauptsatz steht.</div>"
      },
      {
        sub: "6.3 Relativsatz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Der alte Siedler der die Naturverbundenheit der Indianer zu kennen meinte hackte eifrig weiter.",
        correctPositions: [16, 73],
        acceptedAnswers: ["Der alte Siedler, der die Naturverbundenheit der Indianer zu kennen meinte, hackte eifrig weiter."],
        model: "Der Relativsatz wird in Kommas eingeschlossen.",
        rule: "<div class=rbox>Achte auf Nebensätze (als, die, dass, sodass), die immer ein Komma verlangen. Einschübe und Relativsätze werden in Kommas eingeschlossen. Vor 'und' in Hauptsatzreihen steht kein Komma. Infinitivgruppen werden abgetrennt, wenn ein Hinweiswort (darüber) im Hauptsatz steht.</div>"
      },
      {
        sub: "6.4 Konsekutivsatz mit 'sodass'",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz:",
        sentence: "Jetzt wurde es dem Siedler angst und bange sodass er wie wild draufloshackte.",
        correctPositions: [43],
        acceptedAnswers: ["Jetzt wurde es dem Siedler angst und bange, sodass er wie wild draufloshackte."],
        model: "Vor der Konjunktion 'sodass' (die einen Nebensatz einleitet) steht ein Komma.",
        rule: "<div class=rbox>Achte auf Nebensätze (als, die, dass, sodass), die immer ein Komma verlangen. Einschübe und Relativsätze werden in Kommas eingeschlossen. Vor 'und' in Hauptsatzreihen steht kein Komma. Infinitivgruppen werden abgetrennt, wenn ein Hinweiswort (darüber) im Hauptsatz steht.</div>"
      },
      {
        sub: "6.5 Hauptsatzreihe und Infinitiv",
        type: "komma",
        q: "Setzen Sie das fehlende Komma im folgenden Satz (an einer Stelle):",
        sentence: "Ich habe meine Tante besucht und die war froh darüber mich am Abend nicht mehr zu sehen!",
        correctPositions: [53],
        acceptedAnswers: ["Ich habe meine Tante besucht und die war froh darüber, mich am Abend nicht mehr zu sehen!"],
        model: "Vor 'und' in einer Hauptsatzreihe steht kein Komma; vor der Infinitivgruppe mit Hinweiswort 'darüber' steht ein Komma.",
        rule: "<div class=rbox>Achte auf Nebensätze (als, die, dass, sodass), die immer ein Komma verlangen. Einschübe und Relativsätze werden in Kommas eingeschlossen. Vor 'und' in Hauptsatzreihen steht kein Komma. Infinitivgruppen werden abgetrennt, wenn ein Hinweiswort (darüber) im Hauptsatz steht.</div>"
      },
      {
        sub: "6.6 Relativsatz",
        type: "komma",
        q: "Setzen Sie die fehlenden Kommas im folgenden Satz:",
        sentence: "Die Flügel die Daidalos baute waren aus Federn und Wachs.",
        correctPositions: [10, 29],
        acceptedAnswers: ["Die Flügel, die Daidalos baute, waren aus Federn und Wachs."],
        model: "Der Relativsatz wird in Kommas eingeschlossen.",
        rule: "<div class=rbox>Achte auf Nebensätze (als, die, dass, sodass), die immer ein Komma verlangen. Einschübe und Relativsätze werden in Kommas eingeschlossen. Vor 'und' in Hauptsatzreihen steht kein Komma. Infinitivgruppen werden abgetrennt, wenn ein Hinweiswort (darüber) im Hauptsatz steht.</div>"
      }
    ]
  }
];

// Alias für Integration in die bestehende App (falls benötigt)
var BBR_KOMMA_THEMES = BBR_KOMMA_INTERAKTIV;