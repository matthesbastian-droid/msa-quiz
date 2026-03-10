// ================================================================
// AUFGABEN_2022.JS – Übungsaufgaben MSA 2022
// Thematisch sortiert nach den Varianten der Mittleren-Schulabschluss-
// Prüfung 2022 (Sprachwissen & Rechtschreibung)
// ================================================================

var MSA_THEMES = [

// ────────────────────────────────────────────────────────────────────
// 1. STILMITTEL & BILDSPRACHE
// ────────────────────────────────────────────────────────────────────
{id:'msa_stilmittel_2022', title:'Stilmittel & Bildsprache', emoji:'🎭', color:'#8f3d3d', qs:[

{sub:'Metapher erklären', type:'self',
q:'Der folgende Satz enthält eine Metapher. Erklären Sie diese Metapher.\n\n\u201eDer Film fesselt die Zuschauer.\u201c',
model:'Das Verb \u201efesseln\u201c wird in übertragener Bedeutung verwendet: Der Film zieht die Zuschauer so stark in seinen Bann, als würde er sie buchstäblich mit Fesseln binden.',
rule:'<div class=rbox>Eine Metapher überträgt ein Wort aus seinem wörtlichen Bedeutungszusammenhang in einen bildlichen \u2013 ohne Vergleichswörter wie \u201ewie\u201c oder \u201eals\u201c.</div>'},

{sub:'Bedeutung erklären', type:'self',
q:'Erklären Sie die Bedeutung des folgenden Satzes.\n\n\u201eDas T-Shirt riecht streng.\u201c',
model:'Das T-Shirt hat einen unangenehm intensiven, schlechten Geruch \u2013 es riecht nach Schweiß.',
rule:'<div class=rbox>\u201eStreng riechen\u201c ist eine idiomatische Wendung für einen intensiven, üblen Körpergeruch.</div>'},

{sub:'Redewendung + Stilmittel: Bedeutung', type:'self',
q:'Erklären Sie die Bedeutung des folgenden Satzes.\n\n\u201eIch ließ den Satz in der Luft hängen.\u201c',
model:'Ich sprach den Satz an, ließ ihn aber unvollendet oder unbeantwortet stehen \u2013 ich gab keine abschließende Reaktion.',
rule:'<div class=rbox>\u201eIn der Luft hängen lassen\u201c bedeutet, etwas offen oder unbeantwortet zu lassen.</div>'},

{sub:'Redewendung + Stilmittel: Stilmittel', type:'mc',
q:'Kreuzen Sie das stilistische Mittel an, das in dem folgenden Satz verwendet wird.\n\n\u201eIch ließ den Satz in der Luft hängen.\u201c',
o:['Vergleich','Metapher','Personifikation','Ellipse'],
c:1,
model:'Metapher',
rule:'<div class=rbox>Metapher: bildlicher Ausdruck ohne Vergleichswort \u201ewie\u201c oder \u201eals\u201c. Der Satz hängt nicht wirklich in der Luft.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'Ordnen Sie den folgenden Sätzen das jeweils entsprechende sprachliche Mittel zu.\n(1) Alliteration  (2) Personifikation  (3) Ellipse  (4) Metapher  (5) Vergleich',
rows:['(a) Er beschäftigt sich mit den wirklich wichtigen Dingen.','(b) Ich mit Blockflöte an Weihnachten.','(c) Ich fühle mich wie ein Schirmständer.'],
cols:['Alliteration','Personifikation','Ellipse','Metapher','Vergleich'],
correct:[0,2,4],
model:'(a) Alliteration · (b) Ellipse · (c) Vergleich',
rule:'<div class=rbox>Alliteration: gleicher Anlaut aufeinanderfolgender Wörter (wirklich wichtigen). Ellipse: unvollständiger Satz (fehlendes Verb). Vergleich: mit \u201ewie\u201c oder \u201eals\u201c.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'Ordnen Sie den folgenden Sätzen das jeweils entsprechende sprachliche Mittel zu.\n(1) Alliteration  (2) Metapher  (3) Vergleich',
rows:['(a) Dann tauchte er in Paulas Duft ein.','(b) Tills Lieblingsspeise sind warme Wiener Würstchen.'],
cols:['Alliteration','Metapher','Vergleich'],
correct:[1,0],
model:'(a) Metapher · (b) Alliteration',
rule:'<div class=rbox>Metapher: \u201eeintauchen\u201c bildlich für \u201esich versenken in\u201c. Alliteration: warme Wiener Würstchen (gleicher Anlaut w).</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'Ordnen Sie den folgenden Beispielen die entsprechenden sprachlichen Mittel zu.\n(1) Ellipse  (2) Vergleich  (3) Metapher  (4) Alliteration',
rows:['(a) Das Gemüse war weniger beliebt als das Gebäck.','(b) Er kredenzt Cracker, Kekse und Karotten.','(c) Und Kinderspielzeug.'],
cols:['Ellipse','Vergleich','Metapher','Alliteration'],
correct:[1,3,0],
model:'(a) Vergleich · (b) Alliteration · (c) Ellipse',
rule:'<div class=rbox>Vergleich mit \u201eals\u201c. Alliteration: Cracker, Kekse, Karotten (gleicher Anlaut k). Ellipse: kein Verb, unvollständiger Satz.</div>'},

{sub:'Wertungswort & Erläuterung', type:'self',
q:'Notieren Sie\n(a) das Wort, das im folgenden Satz eine Wertung zum Ausdruck bringt,\n(b) den Teil des Satzes, der eine nähere Erläuterung enthält.\n\n\u201eFür die Generation, die jetzt heranwächst, wird das leider nicht mehr gelten.\u201c',
model:'(a) Wertungswort: leider\n(b) Erläuterung: die jetzt heranwächst',
rule:'<div class=rbox>Wertungswörter (wie \u201eleider\u201c, \u201eglücklicherweise\u201c) drücken die Haltung des Sprechers aus. Relativsätze dienen oft als nähere Erläuterung zu einem Nomen.</div>'},

{sub:'Einschränkung entfernen', type:'alt',
q:'Formulieren Sie den folgenden Satz so um, dass er keine Einschränkung enthält.\n\n\u201eEigentlich habe ich die ganze Zeit positives Feedback bekommen.\u201c',
a:['Ich habe die ganze Zeit positives Feedback bekommen.'],
model:'Ich habe die ganze Zeit positives Feedback bekommen.',
rule:'<div class=rbox>Einschränkungswörter wie \u201eeigentlich\u201c, \u201efast\u201c oder \u201emeistens\u201c schwächen eine Aussage ab. Durch Weglassen entsteht eine uneingeschränkte Aussage.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 2. REDEWENDUNGEN
// ────────────────────────────────────────────────────────────────────
{id:'msa_redewendungen_2022', title:'Redewendungen', emoji:'💡', color:'#c26d00', qs:[

{sub:'Redewendung erklären', type:'self',
q:'Erklären Sie die Bedeutung der Redewendung \u201eeine Welle machen\u201c.',
model:'Aufsehen erregen, viel Lärm um etwas machen, eine starke Reaktion hervorrufen.',
rule:'<div class=rbox>Redewendungen haben eine übertragene Bedeutung, die sich nicht aus den Einzelwörtern erschließt.</div>'},

{sub:'Redewendung erklären', type:'self',
q:'Erklären Sie die Bedeutung der markierten Redewendung im folgenden Satz.\n\n\u201eVielen Menschen wächst ihr Besitz [über den Kopf].\u201c',
model:'Der Besitz wird zu viel und zu groß, sodass die Menschen die Kontrolle darüber verlieren \u2013 er überfordert sie.',
rule:'<div class=rbox>\u201eJemandem über den Kopf wachsen\u201c = etwas wird zu groß oder zu viel, man kann es nicht mehr bewältigen.</div>'},

{sub:'Redewendung erklären', type:'self',
q:'Erklären Sie die metaphorische Bedeutung der Redewendung \u201ewie ein Wasserfall reden\u201c.',
model:'Sehr viel, sehr schnell und pausenlos reden, ohne anderen die Möglichkeit zu geben, etwas zu sagen.',
rule:'<div class=rbox>Der Vergleich mit einem Wasserfall (ununterbrochen fließendes Wasser) steht bildlich für das endlose Reden.</div>'},

{sub:'Redewendung erklären', type:'self',
q:'Notieren Sie die Bedeutung der Redewendung \u201ekeine Rolle spielen\u201c.',
model:'Etwas ist unwichtig, bedeutungslos \u2013 es hat keinen Einfluss auf die Situation.',
rule:'<div class=rbox>\u201eKeine Rolle spielen\u201c = keine Bedeutung haben, nicht relevant sein.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 3. WORTARTEN & BEZUGSWORT
// ────────────────────────────────────────────────────────────────────
{id:'msa_wortarten_2022', title:'Wortarten & Bezugswort', emoji:'🔤', color:'#3d6b8f', qs:[

{sub:'Wortart bestimmen', type:'cross',
q:'Bestimmen Sie die Wortart des markierten Wortes.\n\n\u201eFür die Generation, [die] jetzt heranwächst, wird das leider nicht mehr gelten.\u201c',
rows:['[die]'],
cols:['Artikel','Demonstrativpronomen','Relativpronomen'],
correct:[2],
model:'Relativpronomen; Bezugswort: Generation',
rule:'<div class=rbox>Das Relativpronomen leitet einen Relativsatz ein und bezieht sich auf das Nomen \u201eGeneration\u201c. Probe: Ersatz durch \u201ewelche\u201c möglich \u2192 Relativpronomen.</div>'},

{sub:'Bezugswort bestimmen', type:'self',
q:'Notieren Sie jeweils das Bezugswort des markierten Wortes.\n\n(a) \u201eEin Bäcker rührt den ganzen Tag [die] leckersten Teige.\u201c\n(b) \u201eDa stand die Kiste, [die] die Fotos enthielt.\u201c',
model:'(a) die \u2192 Teige\n(b) die \u2192 Kiste',
rule:'<div class=rbox>Das Bezugswort eines Pronomens ist das Nomen, auf das es sich bezieht. Es steht meistens direkt davor im Satz.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 4. SYNONYME
// ────────────────────────────────────────────────────────────────────
{id:'msa_synonyme_2022', title:'Synonyme', emoji:'🔄', color:'#3d8f5a', qs:[

{sub:'Standardsprachliches Synonym', type:'self',
q:'Notieren Sie für das umgangssprachliche Wort \u201esatte\u201c im folgenden Satz ein standardsprachliches Synonym.\n\n\u201eDie Folge verspricht satte Quoten.\u201c',
model:'hohe / beachtliche / beeindruckende',
rule:'<div class=rbox>\u201eSatt\u201c kann umgangssprachlich im Sinne von \u201egroß, beachtlich, üppig\u201c verwendet werden.</div>'},

{sub:'Synonym – kontextabhängig', type:'self',
q:'Notieren Sie für das markierte Adjektiv jeweils ein passendes Synonym.\n\n(a) \u201eEr bewahrt einen [kühlen] Kopf.\u201c\n(b) \u201eEr kann bei der [kühlen] Witterung nicht bauen.\u201c',
model:'(a) kühlen \u2192 ruhigen / besonnenen\n(b) kühlen \u2192 kalten / frischen',
rule:'<div class=rbox>Das gleiche Adjektiv kann je nach Kontext unterschiedliche Bedeutungen haben und daher verschiedene Synonyme erfordern.</div>'},

{sub:'Synonym finden', type:'self',
q:'Notieren Sie für das markierte Wort ein passendes Synonym.\n\n\u201eMein Vater [beäugt] das Regal.\u201c',
model:'beobachtet / betrachtet / mustert',
rule:'<div class=rbox>\u201eBeäugen\u201c bedeutet, etwas genau und kritisch anzusehen.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 5. FREMDWÖRTER & DEUTSCHE ENTSPRECHUNGEN
// ────────────────────────────────────────────────────────────────────
{id:'msa_fremdwoerter_2022', title:'Fremdwörter', emoji:'🌍', color:'#5a3d8f', qs:[

{sub:'Fremdwörter zuordnen', type:'self',
q:'Ordnen Sie den Fremdwörtern jeweils ihre deutsche Bezeichnung zu.\n(1) Beschränkung auf das Wesentliche  (2) Vorhaben  (3) Verbrauch  (4) Rückmeldung  (5) Beweglichkeit\n\n(a) Konsum\n(b) Resonanz\n(c) Minimalismus\n(d) Projekt\n(e) Flexibilität',
model:'(a) Konsum \u2192 (3) Verbrauch\n(b) Resonanz \u2192 (4) Rückmeldung\n(c) Minimalismus \u2192 (1) Beschränkung auf das Wesentliche\n(d) Projekt \u2192 (2) Vorhaben\n(e) Flexibilität \u2192 (5) Beweglichkeit',
rule:'<div class=rbox>Fremdwörter haben häufig direkte deutsche Entsprechungen. Minimalismus (lat. minimus = kleinst) steht für die Beschränkung auf das Wesentliche.</div>'},

{sub:'Fremdwörter zuordnen', type:'cross',
q:'Ordnen Sie den Fremdwörtern die entsprechende deutsche Bezeichnung zu.\n(1) Unterhaltung  (2) Hauptsendezeit  (3) Benutzerkonto',
rows:['(a) Account','(b) Chat','(c) Primetime'],
cols:['(1) Unterhaltung','(2) Hauptsendezeit','(3) Benutzerkonto'],
correct:[2,0,1],
model:'(a) Account \u2192 Benutzerkonto · (b) Chat \u2192 Unterhaltung · (c) Primetime \u2192 Hauptsendezeit',
rule:'<div class=rbox>Anglizismen aus dem Medienbereich haben häufig deutsche Entsprechungen.</div>'},

{sub:'Fremdwörter zuordnen', type:'self',
q:'Ordnen Sie den Fremdwörtern jeweils ihre deutsche Bedeutung zu.\n(1) abstufen  (2) haltbar machen  (3) veranschaulichen  (4) verringern  (5) anweisen\n\n(a) konservieren\n(b) nuancieren\n(c) reduzieren\n(d) demonstrieren',
model:'(a) konservieren \u2192 (2) haltbar machen\n(b) nuancieren \u2192 (1) abstufen\n(c) reduzieren \u2192 (4) verringern\n(d) demonstrieren \u2192 (3) veranschaulichen',
rule:'<div class=rbox>Viele Verben lateinischen oder französischen Ursprungs lassen sich durch treffende deutsche Entsprechungen ersetzen.</div>'},

{sub:'Deutsche Entsprechung', type:'self',
q:'Notieren Sie für das markierte Wort jeweils die deutsche Entsprechung.\n\n(a) \u201eDas war ihr vorläufiges [Highlight] des Jahres.\u201c\n(b) \u201eSie haben ein [Faible] für Freikörperkultur.\u201c',
model:'(a) Highlight \u2192 Höhepunkt\n(b) Faible \u2192 Vorliebe / Schwäche (für etwas)',
rule:'<div class=rbox>Anglizismen (Highlight) und Gallizismen (Faible) können oft durch treffende deutsche Wörter ersetzt werden.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 6. WORTFAMILIEN & STAMMVERWANDTE WÖRTER
// ────────────────────────────────────────────────────────────────────
{id:'msa_wortfamilien_2022', title:'Wortfamilien', emoji:'🔧', color:'#6b3d8f', qs:[

{sub:'Stammverwandte Wörter', type:'worttabelle',
q:'Ergänzen Sie die Tabelle, indem Sie stammverwandte Wörter bilden.',
headers:['Nomen','Verb','Adjektiv'],
rows:[
  [null, null, 'profitabel'],
  [null, 'freuen', null],
  ['Erkenntnis', null, null]
],
blanks:[
  {options:['Profit','Profiteur','Profitierung','Profitum'], correct:0},
  {options:['profitieren','profitabel sein','profitierend','profitigen'], correct:0},
  {options:['Freude','Fröhlichkeit','Frohsinn','Freuung'], correct:0},
  {options:['erfreulich','freudevoll','freuend','erfreut'], correct:0},
  {options:['erkennen','erkennten','erkennigen','erkenntern'], correct:0},
  {options:['erkennbar','erkenntend','erkennend','erkennterlich'], correct:0}
],
model:'Profit | profitieren | profitabel\nFreude | freuen | erfreulich\nErkenntnis | erkennen | erkennbar',
rule:'<div class=rbox>Suffixe für Nomen: -heit, -keit, -nis, -ung. Für Adjektive: -bar, -lich, -ig. Für Verben: -ieren, -en.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 7. UMGANGSSPRACHE & STANDARDSPRACHE
// ────────────────────────────────────────────────────────────────────
{id:'msa_standardsprache_2022', title:'Umgangssprache & Standardsprache', emoji:'💬', color:'#3d8f8f', qs:[

{sub:'Standardsprache', type:'alt',
q:'Formulieren Sie den folgenden Satz in Standardsprache.\n\n\u201eIch habe mir alle Staffeln reingezogen.\u201c',
a:['Ich habe alle Staffeln angesehen.','Ich habe mir alle Staffeln angesehen.'],
model:'Ich habe alle Staffeln angesehen.',
rule:'<div class=rbox>\u201eReingezogen\u201c ist umgangssprachlich für \u201ekonsumiert/angesehen\u201c. Standardsprache ist neutral und überregional verständlich.</div>'},

{sub:'Standardsprache', type:'alt',
q:'Formulieren Sie den folgenden Satz in Standardsprache.\n\n\u201eDas zahlt sich eh nicht aus.\u201c',
a:['Das lohnt sich ohnehin nicht.','Das lohnt sich sowieso nicht.'],
model:'Das lohnt sich ohnehin nicht.',
rule:'<div class=rbox>\u201eEh\u201c ist umgangssprachlich für \u201esowieso/ohnehin\u201c. \u201eSich auszahlen\u201c \u2192 \u201esich lohnen\u201c.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 8. DIREKTE & INDIREKTE REDE
// ────────────────────────────────────────────────────────────────────
{id:'msa_rede_2022', title:'Direkte & indirekte Rede', emoji:'🗣️', color:'#7c3d8f', qs:[

{sub:'Indirekte Rede', type:'alt',
q:'Formen Sie den folgenden Satz in indirekte Rede um.\n\n\u201eIch stehe Menschen mit Rat und Tat zur Seite\u201c, sagt er.',
a:['Er sagt, er stehe Menschen mit Rat und Tat zur Seite.'],
model:'Er sagt, er stehe Menschen mit Rat und Tat zur Seite.',
rule:'<div class=rbox>In der indirekten Rede wird Konjunktiv I verwendet: \u201estehe\u201c (KI von stehen). Personalpronomen werden angepasst: ich \u2192 er.</div>'},

{sub:'Direkte Rede', type:'alt',
q:'Formen Sie den folgenden Satz in direkte Rede um.\n\nDie Autorin merkt an, dass viele große Denker Chaoten gewesen seien.',
a:['\u201eDie Autorin merkt an: \u201eViele große Denker waren Chaoten.\u201c'],
model:'Die Autorin merkt an: \u201eViele große Denker waren Chaoten.\u201c',
rule:'<div class=rbox>In der direkten Rede fällt der Konjunktiv weg. Es werden Doppelpunkt und Anführungszeichen gesetzt. Pronomen ggf. anpassen.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 9. AKTIV & PASSIV
// ────────────────────────────────────────────────────────────────────
{id:'msa_passiv_2022', title:'Aktiv & Passiv', emoji:'⚙️', color:'#3d6b8f', qs:[

{sub:'Aktiv \u2192 Passiv', type:'alt',
q:'Formen Sie den folgenden Satz in einen Passivsatz um.\n\nSchätzungen zufolge nutzen rund vier Millionen Menschen den US-Dienst.',
a:['Schätzungen zufolge wird der US-Dienst von rund vier Millionen Menschen genutzt.'],
model:'Schätzungen zufolge wird der US-Dienst von rund vier Millionen Menschen genutzt.',
rule:'<div class=rbox>Vorgangspassiv: Das Akkusativobjekt wird zum Subjekt; das Subjekt wird zur optionalen \u201evon\u201c-Phrase. Hilfsverb: werden + Partizip II.</div>'},

{sub:'Passiv mit Modalverb', type:'alt',
q:'Formen Sie den folgenden Satz in einen Satz im Passiv um.\n\n\u201eIch muss noch das Auto zurückbringen.\u201c',
a:['Das Auto muss noch zurückgebracht werden.','Das Auto muss noch von mir zurückgebracht werden.'],
model:'Das Auto muss noch zurückgebracht werden.',
rule:'<div class=rbox>Passiv mit Modalverb: Modalverb + Partizip II + werden (im Infinitiv).</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 10. SATZBAU & KOMMA
// ────────────────────────────────────────────────────────────────────
{id:'msa_satzbau_2022', title:'Satzbau & Komma', emoji:'📐', color:'#3d8f6b', qs:[

{sub:'Kommaregel', type:'cross',
q:'Ordnen Sie den Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Aufzählung  (2) Satzgefüge  (3) Satzreihe',
rows:[
  '(a) Das Internet war eine wichtige Quelle, nirgendwo sonst gab es so viel zu lesen.',
  '(b) Was er für einen Weg einschlagen will, weiß er noch nicht.',
  '(c) Er baute eine Website, drehte einen Film und schrieb Texte.'
],
cols:['Aufzählung','Satzgefüge','Satzreihe'],
correct:[2,1,0],
model:'(a) Satzreihe · (b) Satzgefüge · (c) Aufzählung',
rule:'<div class=rbox>Satzreihe: zwei verbundene Hauptsätze. Satzgefüge: vorangestellter Nebensatz \u2192 Komma vor dem Hauptsatz. Aufzählung: gleichartige Verben durch Komma getrennt.</div>'},

{sub:'Kommaregel', type:'cross',
q:'Ordnen Sie den folgenden Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Satzgefüge  (2) Satzreihe  (3) Entgegenstellung  (4) Infinitivgruppe mit hinweisendem Wort',
rows:[
  '(a) Mein Vater fragte sie nicht nur zur Schule aus, sondern auch zu den Berufen ihrer Eltern.',
  '(b) Ich muss zugeben, dass meine Mutter diesen Verdacht auch hatte.',
  '(c) Sie hat keine Lust darauf, alten Leuten die Füße zu waschen.'
],
cols:['Satzgefüge','Satzreihe','Entgegenstellung','Infinitivgruppe m. hinweis. Wort'],
correct:[2,0,3],
model:'(a) Entgegenstellung · (b) Satzgefüge · (c) Infinitivgruppe mit hinweisendem Wort',
rule:'<div class=rbox>Entgegenstellung: \u201enicht nur \u2013 sondern auch\u201c. Satzgefüge: Komma vor dem eingeleiteten Nebensatz. Infinitivgruppe mit Korrelat (darauf) \u2192 Komma obligatorisch.</div>'},

{sub:'Kommaregel', type:'cross',
q:'Ordnen Sie den folgenden Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Satzgefüge  (2) Satzreihe  (3) Infinitivgruppe mit Einleitewort',
rows:[
  '(a) Sie bückte sich, um die Hose aufzuheben.',
  '(b) Seine Mutter, die gerade aus dem Zimmer gehen wollte, blieb stehen.'
],
cols:['Satzgefüge / Relativsatz','Satzreihe','Infinitivgruppe mit um \u2026 zu'],
correct:[2,0],
model:'(a) Infinitivgruppe mit um \u2026 zu · (b) Satzgefüge (eingeschobener Relativsatz)',
rule:'<div class=rbox>Infinitivgruppen mit \u201eum zu\u201c, \u201eohne zu\u201c, \u201eanstatt zu\u201c werden durch Komma abgetrennt. Eingeschobene Relativsätze werden durch Kommas eingeschlossen.</div>'},

{sub:'Satzgefüge bilden', type:'alt',
q:'Formulieren Sie die folgenden Sätze als Satzgefüge.\n\n\u201eDer Schrank passt nicht in die Ecke. Ein Bücherregal muss abgebaut werden.\u201c',
a:['Da der Schrank nicht in die Ecke passt, muss ein Bücherregal abgebaut werden.','Weil der Schrank nicht in die Ecke passt, muss ein Bücherregal abgebaut werden.'],
model:'Da der Schrank nicht in die Ecke passt, muss ein Bücherregal abgebaut werden.',
rule:'<div class=rbox>Ein Satzgefüge verbindet zwei Aussagen durch einen Nebensatz. Kausale Konjunktionen: \u201eda\u201c, \u201eweil\u201c.</div>'},

{sub:'Gleichzeitigkeit ausdrücken', type:'alt',
q:'Formen Sie den folgenden Satz so um, dass er Gleichzeitigkeit zum Ausdruck bringt.\n\n\u201eNachdem ich aufgelegt hatte, schluckte ich aufsteigende Tränen hinunter.\u201c',
a:['Während ich auflegte, schluckte ich aufsteigende Tränen hinunter.','Als ich auflegte, schluckte ich aufsteigende Tränen hinunter.'],
model:'Während ich auflegte, schluckte ich aufsteigende Tränen hinunter.',
rule:'<div class=rbox>\u201eNachdem\u201c drückt Vorzeitigkeit aus. Gleichzeitigkeit: \u201ewährend\u201c (bei Dauer) oder \u201eals\u201c (bei einmaligem Ereignis in der Vergangenheit).</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 11. VERBMODUS – KONJUNKTIV & IMPERATIV
// ────────────────────────────────────────────────────────────────────
{id:'msa_modus_2022', title:'Verbmodus', emoji:'🔀', color:'#8f6b3d', qs:[

{sub:'Modus bestimmen', type:'cross',
q:'Kreuzen Sie an, in welchem Modus die folgenden Sätze stehen.',
rows:[
  '(a) Als ob da ein Zwischenspeicher eingebaut wäre.',
  '(b) Dann setz dich mal.',
  '(c) Er gibt ihr die Hand.',
  '(d) Einen Unterschied gebe es nicht.'
],
cols:['Indikativ','Imperativ','Konjunktiv I','Konjunktiv II'],
correct:[3,1,0,2],
model:'(a) Konjunktiv II · (b) Imperativ · (c) Indikativ · (d) Konjunktiv I',
rule:'<div class=rbox>Indikativ: Aussage über die Realität. Imperativ: Aufforderung/Befehl. Konjunktiv I: indirekte Rede (gebe es). Konjunktiv II: Irrealis / hypothetischer Vergleich (wäre).</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 12. MODALVERBEN
// ────────────────────────────────────────────────────────────────────
{id:'msa_modal_2022', title:'Modalverben', emoji:'🎯', color:'#3d5a8f', qs:[

{sub:'Modalverben einsetzen', type:'self',
q:'Formen Sie den folgenden Satz mithilfe von Modalverben so um, dass er Folgendes zum Ausdruck bringt:\n(a) eine Notwendigkeit\n(b) eine Erlaubnis\n\n\u201eIch räume meinen neuen Kleiderschrank ein.\u201c',
model:'(a) Ich muss meinen neuen Kleiderschrank einräumen.\n(b) Ich darf meinen neuen Kleiderschrank einräumen.',
rule:'<div class=rbox>Modalverben: müssen = Notwendigkeit/Zwang · dürfen = Erlaubnis · sollen = Fremdaufforderung · wollen = eigene Absicht · können = Fähigkeit/Möglichkeit.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 13. NOMINALISIERUNG
// ────────────────────────────────────────────────────────────────────
{id:'msa_nominal_2022', title:'Nominalisierung', emoji:'📝', color:'#6b8f3d', qs:[

{sub:'Nominalisierung auflösen', type:'alt',
q:'Formulieren Sie den folgenden Satz so um, dass er keine Nominalisierung enthält.\n\n\u201eDie Männer begannen mit dem Aufbauen der Möbel.\u201c',
a:['Die Männer begannen, die Möbel aufzubauen.','Die Männer fingen an, die Möbel aufzubauen.'],
model:'Die Männer begannen, die Möbel aufzubauen.',
rule:'<div class=rbox>Nominalisierung: ein Verb wird zum Nomen (das Aufbauen \u2192 Verb aufbauen). Auflösen: das Nomen zurück ins Verb verwandeln und Satzkonstruktion anpassen.</div>'},

]},


// ────────────────────────────────────────────────────────────────────
// 14. RECHTSCHREIBUNG
// ────────────────────────────────────────────────────────────────────
{id:'msa_rechtschreibung_2022', title:'Rechtschreibung', emoji:'✏️', color:'#8f5a3d', qs:[

{sub:'Rechtschreibstrategie', type:'cross',
q:'Welche Strategie wenden Sie an, um das Wort \u201egeräumig\u201c an der markierten Stelle richtig zu schreiben?\n(a) ä oder e?\n(b) g oder ch?',
rows:['(a) ä oder e?','(b) g oder ch?'],
cols:['Stammverwandtes Wort suchen','Wort verlängern','Wort in Silben zerlegen'],
correct:[0,1],
model:'(a) stammverwandtes Wort: Raum \u2192 ä · (b) verlängern: geräumige \u2192 g',
rule:'<div class=rbox>ä/e-Strategie: Stammwort mit a finden (Raum \u2192 räumig). g/ch am Wortende: verlängern (geräumige \u2192 bleibt g).</div>'},

{sub:'Rechtschreibstrategie', type:'cross',
q:'Welche Strategie wenden Sie an, um das Wort \u201efahrlässig\u201c an der markierten Stelle richtig zu schreiben?\n(a) ss oder ß?\n(b) e oder ä?',
rows:['(a) ss oder ß?','(b) e oder ä?'],
cols:['Stammverwandtes Wort suchen','Wort verlängern','Wort in Silben zerlegen'],
correct:[1,0],
model:'(a) verlängern: fahrlässige \u2192 ss · (b) stammverwandtes Wort: lassen/Lässigkeit \u2192 ä',
rule:'<div class=rbox>ss/ß: verlängern (fahrlässige \u2192 ss nach kurzem Vokal). ä/e: Stammwort mit a finden (lassen \u2192 lässig).</div>'},

{sub:'Rechtschreibstrategie', type:'cross',
q:'Welche Strategie wenden Sie an, um das Wort \u201eunabhängig\u201c an der markierten Stelle richtig zu schreiben?\n(a) U oder u?\n(b) g oder ch?',
rows:['(a) U oder u?','(b) g oder ch?'],
cols:['Stammverwandtes Wort suchen','Wort verlängern','Wort in Silben zerlegen'],
correct:[2,1],
model:'(a) Silben zerlegen: un-ab-hän-gig \u2192 kein Satzanfang \u2192 klein · (b) verlängern: unabhängige \u2192 g',
rule:'<div class=rbox>Groß/Klein im Wortinnern: Silben zerlegen zeigt, dass kein Satzanfang vorliegt \u2192 Kleinschreibung. g/ch: verlängern (unabhängige \u2192 g).</div>'},

{sub:'das oder dass', type:'cross',
q:'Welche Schreibweise ist korrekt?\n\n_____ er noch viel reisen will, steht schon fest.',
rows:['_____ er noch viel reisen will, steht schon fest.'],
cols:['das','dass'],
correct:[1],
model:'dass \u2013 leitet einen Subjektsatz ein; nicht durch \u201edieses/welches\u201c ersetzbar \u2192 Konjunktion.',
rule:'<div class=rbox>Probe: durch \u201edieses\u201c oder \u201ewelches\u201c ersetzbar? \u2192 \u201edas\u201c. Nicht ersetzbar \u2192 \u201edass\u201c (unterordnende Konjunktion).</div>'},

{sub:'das oder dass', type:'cross',
q:'Welche Schreibweise ist korrekt?\n\n_____ Streamingdienste Daten sammeln, ist kein Geheimnis.',
rows:['_____ Streamingdienste Daten sammeln, ist kein Geheimnis.'],
cols:['das','dass'],
correct:[1],
model:'dass \u2013 leitet Subjektsatz ein; nicht durch \u201edieses\u201c ersetzbar \u2192 Konjunktion.',
rule:'<div class=rbox>\u201eDass\u201c: Konjunktion, leitet Nebensatz ein. Probe: nicht durch \u201ewelches/dieses\u201c ersetzbar.</div>'},

{sub:'das oder dass', type:'cross',
q:'Welche Schreibweise ist korrekt?\n\n_____ Unordnung zur Belastung werden kann, zeigt eine Studie.',
rows:['_____ Unordnung zur Belastung werden kann, zeigt eine Studie.'],
cols:['das','dass'],
correct:[1],
model:'dass \u2013 leitet Subjektsatz ein; nicht durch \u201edieses\u201c ersetzbar \u2192 Konjunktion.',
rule:'<div class=rbox>\u201eDass\u201c: unterordnende Konjunktion. Probe: nicht durch \u201ewelches\u201c ersetzbar.</div>'},

{sub:'Groß-/Kleinschreibung', type:'cross',
q:'Ordnen Sie der Schreibung des unterstrichenen Wortes die jeweilige Rechtschreibregel zu.\n1. Verben werden kleingeschrieben.\n2. Nominalisierte Verben werden großgeschrieben.\n3. Nominalisierte Adjektive werden großgeschrieben.\n4. Nominalisierte Numerale werden großgeschrieben.',
rows:[
  '(a) Dauerhaftes ANSEHEN von Serien macht einsam.',
  '(b) Man sollte am Samstagabend BESSERES vorhaben.',
  '(c) Aus den Daten können DRITTE Schlussfolgerungen ziehen.'
],
cols:['Nom. Verb (Regel 2)','Nom. Adjektiv (Regel 3)','Nom. Numerale (Regel 4)'],
correct:[0,1,2],
model:'(a) nominalisiertes Verb \u2192 groß · (b) nominalisiertes Adjektiv \u2192 groß · (c) nominalisiertes Numerale \u2192 groß',
rule:'<div class=rbox>Nominalisierungen werden stets großgeschrieben, egal ob aus Verben, Adjektiven oder Numeralen.</div>'},

{sub:'Groß-/Kleinschreibung', type:'cross',
q:'Ergänzen Sie die Tabelle, indem Sie der Schreibung der unterstrichenen Wörter die jeweilige Rechtschreibregel zuordnen.\nRegel: 1. Nomen werden großgeschrieben.  2. Adverbien werden kleingeschrieben.  3. Nominalisierte Adjektive werden großgeschrieben.',
rows:[
  '(a) Diese Bettwäsche war nur die DRITTPEINLICHSTE.',
  '(b) Er wollte bei diesem Projekt nicht den KÜRZEREN ziehen.',
  '(c) Eines SONNTAGS kam Paula zu Besuch.'
],
cols:['Nom. Adjektiv (groß)','Adverb (klein)','Nomen (groß)'],
correct:[0,0,1],
model:'(a) nom. Adjektiv \u2192 groß · (b) nom. Adjektiv \u2192 groß · (c) Adverb (sonntags) \u2192 klein',
rule:'<div class=rbox>\u201eDie Drittpeinlichste\u201c / \u201eden Kürzeren\u201c sind nominalisierte Adjektive \u2192 groß. \u201eSonntags\u201c ist ein Zeitadverb \u2192 klein.</div>'},

{sub:'Groß-/Kleinschreibung', type:'cross',
q:'Ergänzen Sie die Tabelle, indem Sie der Schreibung der unterstrichenen Wörter die jeweilige Rechtschreibregel zuordnen.\nRegel: 1. Nomen werden großgeschrieben.  2. Adverbien werden kleingeschrieben.  3. Adjektive werden kleingeschrieben.',
rows:[
  '(a) Ich räume meinen Kleiderschrank VORMITTAGS ein.',
  '(b) Den Großteil des VORMITTAGS räumt sie auf.'
],
cols:['Adverb (klein)','Nomen (groß)'],
correct:[0,1],
model:'(a) vormittags \u2192 Adverb \u2192 klein · (b) des Vormittags \u2192 Nomen im Genitiv \u2192 groß',
rule:'<div class=rbox>\u201eVormittags\u201c als Zeitadverb \u2192 klein; \u201eder Vormittag\u201c als Nomen, hier im Genitiv \u2192 groß.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'Kreuzen Sie an, ob die unterstrichenen Wendungen getrennt oder zusammengeschrieben werden.\n(a) In meiner Freizeit kann ich stundenlang / Stunden lang Serien anschauen.\n(b) Lass mich diese Serie noch zwei stundenlang / Stunden lang anschauen.',
rows:['(a)','(b)'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[1,0],
model:'(a) stundenlang \u2013 zusammen · (b) zwei Stunden lang \u2013 getrennt',
rule:'<div class=rbox>\u201eStundenlang\u201c als Adverb \u2192 zusammen. Mit einer Zahlenangabe (zwei Stunden lang) handelt es sich um eine Maßangabe \u2192 getrennt.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'Kreuzen Sie an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.\n(a) Die Autos sind ins Rutschen gekommen und zusammen gefahren / zusammengefahren.\n(b) Vor Schreck bin ich gleich zusammen gefahren / zusammengefahren.',
rows:['(a)','(b)'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[1,1],
model:'(a) zusammengefahren (= kollidiert) \u2013 zusammen · (b) zusammengefahren (= zusammengezuckt) \u2013 zusammen',
rule:'<div class=rbox>Bei übertragener oder erweiterter Bedeutung wird das Verb zusammengeschrieben. Beide Fälle haben eine übertragene Bedeutung.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'Kreuzen Sie an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.\n(a) Ich habe nicht vor, den Schrank ans Fenster zu stellen / zustellen.\n(b) Der Postbote kann den Brief nicht zu stellen / zustellen.',
rows:['(a)','(b)'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[0,1],
model:'(a) zu stellen \u2013 getrennt (Infinitiv mit zu) · (b) zustellen \u2013 zusammen (trennbares Verb)',
rule:'<div class=rbox>Trennbares Verb (zustellen = liefern, z.\u00a0B. \u201eer stellt zu\u201c) \u2192 zusammengeschrieben. Infinitiv mit zu bei nicht-trennbarem Verb \u2192 getrennt.</div>'},

{sub:'Doppelkonsonant', type:'self',
q:'Notieren Sie die Rechtschreibregel oder Rechtschreibstrategie, mit der die Schreibung des Doppelkonsonanten im folgenden Wort begründet wird.\n\nschnorren',
model:'Nach einem kurzen betonten Vokal (o in schnorren) wird der folgende Konsonant verdoppelt. Strategie: Silbentrennung zeigt schnor-ren \u2192 Doppel-r.',
rule:'<div class=rbox>Regel: Nach einem kurzen, betonten Vokal wird der folgende Konsonant verdoppelt. Die Silbentrennung (schnor-ren) macht dies sichtbar.</div>'},

]},

];

// Alias
var THEMES = MSA_THEMES;