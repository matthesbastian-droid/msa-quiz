// ================================================================
// BBR-AUFGABEN.JS – Übungsaufgaben für die BBR
//
// Themen:
//   1. bbr_vokale      – Vokale & Dehnung
//   2. bbr_konsonanten – Konsonanten
//   3. bbr_gross_klein – Groß- und Kleinschreibung   ← nur GK-Aufgaben
//   4. bbr_komma       – Kommasetzung                ← nur Komma-Aufgaben
//   5. bbr_grammatik   – Grammatik – Wortarten
//   6. bbr_satzlehre   – Satzlehre
//   7. bbr_wortschatz  – Wortschatz
//
// Aufgabentypen:
//   mc3    = 3-Option-Ankreuzaufgabe pro Zeile
//   fill   = Lückentext (Freitext-Ergänzung)
//   sort   = Einordnen in Tabellenspalten
//   self   = Freitextaufgabe mit Selbstbewertung
//   komma  = Komma einfügen (Bewertung via acceptedAnswers-Array)
//   choose = Richtige von zwei Varianten wählen
//
// WICHTIG – Komma-Aufgaben:
//   • correctPositions wird NICHT mehr ausgewertet.
//   • acceptedAnswers enthält alle akzeptierten Lösungsstrings.
//   • model enthält die angezeigte Musterlösung.
// ================================================================

var BBR_THEMES = [

// ── 1: VOKALE & DEHNUNG ─────────────────────────────────────────
{id:"bbr_vokale",title:"Vokale & Dehnung",emoji:"📏",color:"#2563eb",qs:[

{sub:"a / aa / ah – Kreuzen",type:"mc3",
q:"Kreuzen Sie jeweils die richtige Schreibung an:",
rows:[
  ["warscheinlich","waarscheinlich","wahrscheinlich"],
  ["statlich","staatlich","stahtlich"],
  ["Trage","Traage","Trahge"],
  ["Katzenhare","Katzenhaare","Katzenhahre"],
  ["unklar","unklaar","unklahr"],
  ["Bezalung","Bezaalung","Bezahlung"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[2,1,0,1,0,2],
model:"a) wahrscheinlich · b) staatlich · c) Trage · d) Katzenhaare · e) unklar · f) Bezahlung",
rule:"<div class=rbox><span class=hl>ah</span>: Dehnungs-h (wahr, zahlen) · <span class=hl>aa</span>: Staat, Haare · <span class=hl>a</span>: kurzes a (Trage, unklar)</div>"},

{sub:"eu oder äu? – Lückentext (1)",type:"fill",
q:"Setzen Sie jeweils richtig ein: eu oder äu?",
sentences:[
  "a)  Vor manchen Geb _______ den stehen große Z _______ ne.",
  "b)  Ich fr _______ e mich, dass ich h _______ te hier sein kann.",
  "c)  Gute Kr _______ ter sind beim Kochen von großer Bed _______ tung.",
  "d)  Schlangen müssen sich h _______ fig vollständig h _______ ten."
],
model:"a) Gebäuden (äu) / Zäune (äu)  b) freue (eu) / heute (eu)  c) Kräuter (äu) / Bedeutung (eu)  d) häufig (äu) / häuten (äu)",
rule:"<div class=rbox><span class=hl>äu</span>: verwandtes Wort mit au (Bau→Gebäude, Zaun→Zäune, Kraut→Kräuter, Haut→häuten, Haufen→häufig)<br><span class=hl>eu</span>: kein au-Bezug (freuen, heute, Bedeutung)</div>"},

{sub:"i / ie / ieh – Kreuzen",type:"mc3",
q:"Kreuzen Sie jeweils die richtige Schreibung an: i, ie oder ieh?",
rows:[
  ["Libe","Liebe","Liehbe"],
  ["Libelle","Liebelle","Liehbelle"],
  ["Ziung","Zieung","Ziehung"],
  ["Biber","Bieber","Biehber"],
  ["Flikraft","Fliekraft","Fliehkraft"],
  ["richen","riechen","riehchen"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,0,2,0,2,1],
model:"a) Liebe · b) Libelle · c) Ziehung · d) Biber · e) Fliehkraft · f) riechen",
rule:"<div class=rbox><span class=hl>ie</span>: langes i (Liebe, riechen) · <span class=hl>i</span>: kurzes i (Libelle, Biber) · <span class=hl>ieh</span>: ziehen, fliehen</div>"},

{sub:"eu oder äu? – Lückentext (2)",type:"fill",
q:"Setzen Sie jeweils richtig ein: eu oder äu?",
sentences:[
  "a)  H ______ te müssen die B ______ me gefällt werden.",
  "b)  Dieses Shampoo sch ______ mt aber erfr ______ lich stark.",
  "c)  Ich denke, ______ re Tr ______ me können erfüllt werden!",
  "d)  Ich ber ______ e es nicht, alle L ______ te eingeladen zu haben."
],
model:"a) Heute (eu) / Bäume (äu)  b) schäumt (äu) / erfreulich (eu)  c) eure (eu) / Träume (äu)  d) bereue (eu) / Leute (eu)",
rule:"<div class=rbox>Baum→Bäume, Schaum→schäumt, Traum→Träume → <span class=hl>äu</span><br>heute, erfreulich, eure, bereue, Leute → <span class=hl>eu</span></div>"},

{sub:"V oder W? – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["die Witamine","Vitamine","Vitamiene"],
  ["das Wrack","Vrack","Wrag"],
  ["die Wioline","Violiene","Violine"],
  ["die Vitve","Witwe","Witve"],
  ["die Willa","Vila","Villa"],
  ["der Vampier","Vampir","Wampir"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,0,2,1,2,1],
model:"a) Vitamine · b) Wrack · c) Violine · d) Witwe · e) Villa · f) Vampir",
rule:"<div class=rbox>Deutsche Wörter → <span class=hl>W</span> (Wrack, Witwe) · Fremdwörter → <span class=hl>V</span> (Vitamine, Violine, Villa, Vampir)</div>"},

{sub:"V oder W? – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (V/v oder W/w) in die Lücke.",
sentences:["Das ___asser in der Blumen___ase ___ar ___erfault."],
model:"Wasser / Vase / war / verfault",
rule:"<div class=rbox>Wasser, war → deutsche Wörter → <span class=hl>W/w</span> · Vase, verfault → Fremdwort/ver- → <span class=hl>V/v</span></div>"},

{sub:"wieder oder wider? – Unterstreichen",type:"choose",
q:"Wählen Sie die richtige Schreibweise.",
rows:[
  "a)  Die neue Chefin will die alten Vorschriften ___ einführen.",
  "b)  Die Klasse wird nach dem Erfolg ihres Theaterstückes die Aufführung ___.",
  "c)  Es hat ihr ___, die Hausaufgaben zu machen.",
  "d)  Er hat alle Bücher ___ zurückgebracht.",
  "e)  Du ___ dir.",
  "f)  Die Großmutter konnte nach der Operation ___ sehen."
],
variants:[
  ["wider","wieder"],
  ["widerholen","wiederholen"],
  ["widerstrebt","wiederstrebt"],
  ["wider","wieder"],
  ["widersprichst","wiedersprichst"],
  ["wider","wieder"]
],
correct:["wieder","wiederholen","widerstrebt","wieder","widersprichst","wieder"],
model:"wieder einführen · wiederholen · widerstrebt · wieder zurück · widersprichst · wieder sehen",
rule:"<div class=rbox><span class=hl>wieder</span>: nochmal, erneut · <span class=hl>wider</span>: gegen (Widerspruch, Widerstand)</div>"},

{sub:"e / ee / eh – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Ide","Idee","Ideh"],
  ["Befehl","Befel","Befeel"],
  ["Steeg","Stehg","Steg"],
  ["meer","mehr","mer"],
  ["Schere","Schehre","Scheere"],
  ["reege","rege","rehge"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,0,2,1,0,1],
model:"a) Idee · b) Befehl · c) Steg · d) mehr · e) Schere · f) rege",
rule:"<div class=rbox><span class=hl>ee</span>: Idee, See · <span class=hl>eh</span>: Dehnungs-h (Befehl, mehr) · <span class=hl>e</span>: kurzes e (Steg, Schere, rege)</div>"},

{sub:"e / ee / eh – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-e-, -ee- oder -eh-) in die Lücke.",
sentences:["Das S_____gel stürzte im heftigen Sturm ins M_____r, was uns das Fürchten l_____rte."],
model:"Segel (e) / Meer (ee) / lehrte (eh)",
rule:"<div class=rbox>Segel → kurzes <span class=hl>e</span> · Meer → langes e → <span class=hl>ee</span> · lehrte → Dehnungs-h → <span class=hl>eh</span></div>"},

{sub:"eu oder äu? – Lückentext (Meute/Räuber)",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-eu- oder -äu-) in die Lücke.",
sentences:[
  "a)  Eine M_____te von R_____bern stahl die B_____te aus dem Geb_____de.",
  "b)  In der Sch_____ne unter den B_____men machten die M_____se h_____te viel Lärm.",
  "c)  Beim S_____bern der t_____ren Gartenz_____ne brach n_____lich ein Pfosten ab."
],
model:"a) Meute(eu)/Räuber(äu)/Beute(eu)/Gebäude(äu)  b) Scheune(eu)/Bäumen(äu)/Mäuse(äu)/heute(eu)  c) Säubern(äu)/teuren(eu)/Zäune(äu)/neulich(eu)",
rule:"<div class=rbox>au-Bezug (Raub, Baum, Maus, Zaun, sauber) → <span class=hl>äu</span><br>kein au-Bezug (Meute, Beute, Scheune, heute, teuer, neu) → <span class=hl>eu</span></div>"},

{sub:"o / oo / oh – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Mohr","Moor","Mor"],
  ["wohnen","wonen","woonen"],
  ["Toor","Tohr","Tor"],
  ["belonen","belohnen","beloonen"],
  ["Zoo","Zoh","Zo"],
  ["Soon","Sohn","Son"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,0,2,1,0,1],
model:"a) Moor · b) wohnen · c) Tor · d) belohnen · e) Zoo · f) Sohn",
rule:"<div class=rbox><span class=hl>oo</span>: Moor, Zoo · <span class=hl>oh</span>: Dehnungs-h (wohnen, Sohn, belohnen) · <span class=hl>o</span>: kurzes o (Tor)</div>"},

{sub:"o / oo / oh – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-o-, -oo- oder -oh-) in die Lücke.",
sentences:["Mit dem B_____t kamen wir in eine bedr_____liche N_____tlage."],
model:"Boot (oo) / bedrohliche (oh) / Notlage (o)",
rule:"<div class=rbox>Boot → <span class=hl>oo</span> · bedrohlich → <span class=hl>oh</span> · Notlage → kurzes <span class=hl>o</span></div>"},

{sub:"e oder ä? – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-e- oder -ä-) in die Lücke.",
sentences:[
  "a)  Die G_____ste best_____llten eine M_____nge Getr_____nke.",
  "b)  In der Jugendherb_____rge bel_____ge ich Brötchen mit K_____se und sp_____ter noch einige mit Wurst.",
  "c)  Draußen in den G_____rten liegen w_____rmende D_____cken auf den B_____nken."
],
model:"a) Gäste(ä)/bestellten(e)/Menge(e)/Getränke(ä)  b) Herberge(e)/belege(e)/Käse(ä)/später(ä)  c) Gärten(ä)/wärmende(ä)/Decken(e)/Bänken(ä)",
rule:"<div class=rbox><span class=hl>ä</span>: verwandtes Wort mit a (Gast, Trank, Käse, spät, Garten, warm, Bank)<br><span class=hl>e</span>: kein a-Bezug (bestellen, Menge, Herberge, Decke)</div>"},

{sub:"ah / ar / ahr – Kreuzen",type:"mc3",
q:"Kreuzen Sie jeweils die richtige Schreibung an: ah, ar oder ahr?",
rows:[
  ["Wahnung","Warnung","Wahrnung"],
  ["wahscheinlich","warscheinlich","wahrscheinlich"],
  ["Pahtner","Partner","Pahrtner"],
  ["zahm","zarm","zahrm"],
  ["Alahm","Alarm","Alahrm"],
  ["Abfaht","Abfart","Abfahrt"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,2,1,0,1,2],
model:"a) Warnung(ar) · b) wahrscheinlich(ah) · c) Partner(ar) · d) zahm(ah) · e) Alarm(ar) · f) Abfahrt(ahr)",
rule:"<div class=rbox><span class=hl>ah</span>: zahm, wahrscheinlich · <span class=hl>ahr</span>: Abfahrt, Jahr · <span class=hl>ar</span>: Warnung, Partner, Alarm</div>"}

]},

// ── 2: KONSONANTEN ───────────────────────────────────────────────
{id:"bbr_konsonanten",title:"Konsonanten",emoji:"✍️",color:"#059669",qs:[

{sub:"Getrennt- oder Zusammenschreibung – Durchstreichen",type:"choose",
q:"Wählen Sie die richtige Schreibweise.",
rows:[
  "a)  In einem Vortrag sollte man möglichst ___, um überzeugend zu wirken.",
  "b)  Diese Aufgaben werden mir nicht ___.",
  "c)  Meine Schwester kann schon mit sechs Jahren ___.",
  "d*)  Ich muss heute noch ___ Klavier.",
  "e*)  Mir macht das ___ großen Spaß."
],
variants:[
  ["frei sprechen","freisprechen"],
  ["schwerfallen","schwer fallen"],
  ["gut schreiben","gutschreiben"],
  ["Klavier üben","Klavierüben"],
  ["Klavier üben","Klavierüben"]
],
correct:["frei sprechen","schwerfallen","gut schreiben","Klavier üben","Klavierüben"],
model:"a) frei sprechen (wörtl. Bedeutung) · b) schwerfallen (übertragen: Mühe machen) · c) gut schreiben (kein fester Begriff) · d) Klavier üben (Tätigkeit) · e) Klavierüben (als Nomen: das Klavierüben)",
rule:"<div class=rbox><span class=hl>Getrennt</span>: wörtliche Bedeutung · <span class=hl>Zusammen</span>: übertragene/feste Bedeutung oder Nomen</div>"},

{sub:"end- oder ent-? – Lückentext",type:"fill",
q:"Setzen Sie ein: end- oder ent-? (Achten Sie auf Groß-/Kleinschreibung.)",
sentences:[
  "a)  Er hat ____lich sein Fahrrad repariert.",
  "b)  Ich bin ____täuscht von seiner Reaktion.",
  "c)  Der Marathonläufer setzte zu seinem ______spurt an."
],
model:"a) endlich · b) enttäuscht · c) Endspurt",
rule:"<div class=rbox><span class=hl>end-</span>: Ende, Schluss (endlich, Endspurt) · <span class=hl>ent-</span>: Gegenteil/Trennung (enttäuscht, entfernen)</div>"},

{sub:"-g oder -ch – Lückentext",type:"fill",
q:"Setzen Sie jeweils richtig ein: -g oder -ch.",
sentences:[
  "a)  Es ist wichti ______, bei allen Aufgaben fröhli ______ zu bleiben.",
  "b)  Manches ist langweili ______, manches ganz lusti ______."
],
model:"a) wichtig · fröhlich · b) langweilig · lustig",
rule:"<div class=rbox><span class=hl>-lich</span>: fröhlich, herrlich · <span class=hl>-ig</span>: lustig, langweilig (wird wie -ich gesprochen, aber -ig geschrieben!)</div>"},

{sub:"-nd oder -nt – Lückentext",type:"fill",
q:"Setzen Sie jeweils richtig ein: -nd oder -nt.",
sentences:[
  "a)  Der Drachen im Wi ______ ist besonders schön bu ______!",
  "b)  Der Diama ______ ist fast ganz ru ______."
],
model:"a) Wind(-nd) / bunt(-nt) · b) Diamant(-nt) / rund(-nd)",
rule:"<div class=rbox><span class=hl>-nd</span>: Wind, rund · <span class=hl>-nt</span>: bunt, Diamant</div>"},

{sub:"Anlautergänzung",type:"fill",
q:"Ergänze jeweils den ersten Buchstaben.",
sentences:[
  "a)  Heute bin ich zu spät zum ___chwimmen gekommen.",
  "b)  Das Training ist die ___ichtigste Freizeitbeschäftigung für mich.",
  "c)  Die ___üngste in unserer Gruppe ist zugleich die ___chnellste Schwimmerin.",
  "d*)  Gestern ist mein Bruder zu spät zum ___ssen gekommen. Das ___arten wurde uns zu lang, deshalb begannen wir schon vor ihm zu ___ssen."
],
model:"a) S(chwimmen) · b) W(ichtigste) · c) J(üngste) / S(chnellste) · d*) E(ssen) / W(arten) / e(ssen)",
rule:"<div class=rbox>nach <em>zum/beim</em> → GROSS (Schwimmen, Essen, Warten) · Adjektiv/Verb mit <em>zu</em> → klein</div>"},

{sub:"Anredepronomen – Satz aufschreiben",type:"self",
q:"Schreiben Sie den Satz in richtiger Groß- und Kleinschreibung der Anredepronomen auf.",
sentences:[
  "a)  Wir bedanken uns für i/Ihr Verständnis.",
  "b)  In Erwartung i/Ihrer Rückäußerung verbleibe i/Ich mit freundlichen Grüßen.",
  "c)  Ich schreibe i/Ihnen, weil ich s/Sie um einen Gefallen bitten möchte."
],
model:"a) Ihr Verständnis · b) Ihrer Rückäußerung / verbleibe ich · c) Ihnen / Sie",
rule:"<div class=rbox>Höfliche Anrede (Sie, Ihr, Ihnen) → immer GROSS · ich → klein</div>"},

{sub:"s / ss / ß – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["geniessen","genießen","geniesen"],
  ["das Schloss","Schloß","Schlos"],
  ["der Pass","Pas","Paß"],
  ["paßen","passen","pasen"],
  ["wisen","wißen","wissen"],
  ["der Schoss","Schos","Schoß"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,0,0,1,2,2],
model:"a) genießen · b) Schloss · c) Pass · d) passen · e) wissen · f) Schoß",
rule:"<div class=rbox><span class=hl>ß</span>: nach langem Vokal/Diphthong (genießen, Schoß) · <span class=hl>ss</span>: nach kurzem Vokal (Schloss, Pass, passen, wissen)</div>"},

{sub:"s / ss / ß – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (s, ss oder ß) in die Lücke.",
sentences:["Lutz will Ella noch den Weg wei___en, bevor er zum Fu___balltraining mu___. Er schickt sie zum wei___en Strand."],
model:"weißen / Fußball / muss / weißen",
rule:"<div class=rbox><span class=hl>ß</span>: langer Vokal (weiß, Fuß) · <span class=hl>ss</span>: kurzer Vokal (muss)</div>"},

{sub:"wieder- oder wider-? – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (wieder- oder wider-) in die Lücke.",
sentences:[
  "a)  Ich möchte dich gerne ____________-sehen.",
  "b)  Die Kinder haben alle Spielsachen __________ aufgeräumt.",
  "c)  Es ________-strebt ihr, sich zu entschuldigen.",
  "d)  Er hat das Buch ____________-holt gelesen.",
  "e)  Er ________-spricht sich.",
  "f)  Die Großmutter konnte nach der Operation __________ laufen."
],
model:"a) wieder · b) wieder · c) wider · d) wieder · e) wider · f) wieder",
rule:"<div class=rbox><span class=hl>wieder</span>: nochmal, erneut · <span class=hl>wider</span>: gegen (widerstreben, widersprechen)</div>"},

{sub:"x / chs / gs – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["mixen","michsen","migsen"],
  ["allerdinchs","allerdings","allerdinx"],
  ["verwechseln","verwexeln","verwegseln"],
  ["Agst","Axt","Achst"],
  ["Fux","Fugs","Fuchs"],
  ["anfangs","anfanchs","anfanx"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[0,1,0,1,2,0],
model:"a) mixen · b) allerdings · c) verwechseln · d) Axt · e) Fuchs · f) anfangs",
rule:"<div class=rbox><span class=hl>chs</span>: spricht wie ks (Fuchs, verwechseln) · <span class=hl>gs</span>: anfangs, allerdings · <span class=hl>x</span>: Fremdwörter/mixen, Axt</div>"},

{sub:"x / chs / gs – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-x-, -chs- oder -gs-) in die Lücke.",
sentences:["Die Eide_____e bewegte sich geradewe_____ auf die Bo___ zu."],
model:"Eidechse (chs) / geradewegs (gs) / Box (x)",
rule:"<div class=rbox>Eidechse → <span class=hl>chs</span> · geradewegs → <span class=hl>gs</span> · Box → <span class=hl>x</span></div>"},

{sub:"-t oder -d am Wortende – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-t- oder -d-) in die Lücke.",
sentences:[
  "a)  Vor Weihnachten ist die Ungedul_____ der Kinder sehr groß.",
  "b)  Der Wir_____ hat das Lokal neu übernommen.",
  "c)  Sei_____ diesem Sommer kann sie schwimmen.",
  "d)  Man konnte ihm ansehen, wie lei_____ es ihm tat.",
  "e)  Sei_____ bitte um 21.00 Uhr wieder zurück.",
  "f)  Heute wir_____ der Tag wunderschön."
],
model:"a) Ungeduld(d) · b) Wirt(t) · c) Seit(t) · d) leid(d) · e) Seid(d) · f) wird(t)",
rule:"<div class=rbox>Ableitung: <span class=hl>d</span>: Ungeduld(ungeduldig), leid(leiden), Seid(ihr seid) · <span class=hl>t</span>: Wirt(Wirte), seit(seither), wird(werden)</div>"},

{sub:"x / cks / ks – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Praxis","Pracksis","Praksis"],
  ["Klex","Klecks","Kleks"],
  ["zwecks","zwexs","zweks"],
  ["Komplecks","Komplex","Kompleks"],
  ["Keks","Kex","Kecks"],
  ["hinterrücks","hinterrüks","hinterrüx"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[0,1,0,1,0,0],
model:"a) Praxis · b) Klecks · c) zwecks · d) Komplex · e) Keks · f) hinterrücks",
rule:"<div class=rbox><span class=hl>x</span>: Fremdwörter (Praxis, Komplex) · <span class=hl>cks</span>: von -ck (Klecks, hinterrücks, zwecks) · <span class=hl>ks</span>: Keks</div>"},

{sub:"x / cks / ks – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-x-, -cks- oder -ks-) in die Lücke.",
sentences:["Der Ta_____ifahrer blinkte lin______, fuhr aber schnurstra______ geradeaus."],
model:"Taxifahrer (x) / links (ks) / schnurstracks (cks)",
rule:"<div class=rbox>Taxi → <span class=hl>x</span> · links → <span class=hl>ks</span> · schnurstracks → <span class=hl>cks</span></div>"},

{sub:"-g oder -k am Wortende – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-g- oder -k-) in die Lücke.",
sentences:[
  "a)  Dieser Schran_____ ist sehr alt und wertvoll.",
  "b)  Er san_____ vor Erschöpfung zusammen.",
  "c)  Am Bu_____ des Schiffes stand der Kapitän.",
  "d)  Ein Auto bo_____ schnell um die Ecke.",
  "e)  Sie san_____ dem Kind ein Schlaflied vor.",
  "f)  Die Lampe war aus Kerami_____."
],
model:"a) Schrank(k) · b) sank(k) · c) Bug(g) · d) bog(g) · e) sang(g) · f) Keramik(k)",
rule:"<div class=rbox>Ableitung: Schrank→Schränke → <span class=hl>k</span> · Bug→biegen → <span class=hl>g</span> · sang→singen → <span class=hl>g</span></div>"},

{sub:"das oder dass? – Kreuzen",type:"mc3",
q:"Das oder dass? Kreuzen Sie die richtige Schreibweise an.",
rows:[
  ["Dass / das","Dass / dass","Das / dass"],
  ["Das / dass","Das / das","Dass / das"]
],
rowTexts:[
  "a)  ___ du deine Meinung sagst, ___ finde ich gut.",
  "b)  ___ Gute war, ___ alle am Spiel beteiligt waren."
],
labels:["a)","b)"],
correct:[0,0],
model:"a) Dass … das · b) Das … dass",
rule:"<div class=rbox><span class=hl>das</span>: Artikel/Pronomen (durch 'dieses' ersetzbar) · <span class=hl>dass</span>: Konjunktion (leitet Nebensatz ein)</div>"},

{sub:"z / tz / zz (1) – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Kreuzung","Kreutzung","Kreuzzung"],
  ["Jaz","Jatz","Jazz"],
  ["plözlich","plötzlich","plözzlich"],
  ["schmelzen","schmeltzen","schmelzzen"],
  ["Wurzel","Wurtzel","Wurzzel"],
  ["Piza","Pitza","Pizza"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[0,2,1,0,0,2],
model:"a) Kreuzung · b) Jazz · c) plötzlich · d) schmelzen · e) Wurzel · f) Pizza",
rule:"<div class=rbox><span class=hl>tz</span>: nach kurzem Vokal (plötzlich) · <span class=hl>z</span>: langer Vokal/Konsonant (Kreuzung, Wurzel) · <span class=hl>zz</span>: Fremdwörter (Jazz, Pizza)</div>"},

{sub:"z / tz / zz (1) – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-z- oder -tz- oder -zz-) in die Lücke.",
sentences:["Beim Pu_____eln gibt es für jedes Teil nur einen bestimmten Pla_____ ."],
model:"Puzzeln (zz) / Platz (tz)",
rule:"<div class=rbox>Puzzle → Fremdwort → <span class=hl>zz</span> · Platz → kurzes a → <span class=hl>tz</span></div>"},

{sub:"wieder / wider (VII) – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Widerrede","Wiederrede","Widerrrede"],
  ["Widerholung","Wiederholung","Wiederhollung"],
  ["Wiederstand","Widerstand","Wiederrstrand"],
  ["wieder","wider","weder"]
],
rowTexts:[
  "a)  Ihre ___ ließ keiner gelten.",
  "b)  Die ___ des Projektes wurde rechtzeitig geplant.",
  "c)  Der ___ konnte im physikalischen Versuch gemessen werden.",
  "d*)  Hin und ___ klappt es gut."
],
labels:["a)","b)","c)","d*)"],
correct:[0,1,1,0],
model:"a) Widerrede · b) Wiederholung · c) Widerstand · d) wieder",
rule:"<div class=rbox><span class=hl>wider-</span>: gegen (Widerrede, Widerstand, Widerspruch) · <span class=hl>wieder-</span>: nochmal (Wiederholung)</div>"},

{sub:"z / tz / zz (2) – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["schüzen","schützen","schüzzen"],
  ["Glaze","Glatze","Glazze"],
  ["Brezel","Bretzel","Brezzel"],
  ["nüzlich","nützlich","nüzzlich"],
  ["ergänzen","ergäntzen","ergänzzen"],
  ["Mozarella","Motzarella","Mozzarella"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[1,1,0,1,0,2],
model:"a) schützen · b) Glatze · c) Brezel · d) nützlich · e) ergänzen · f) Mozzarella",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (schützen, Glatze, nützlich) · <span class=hl>z</span>: langer Vokal (Brezel, ergänzen) · <span class=hl>zz</span>: Fremdwort (Mozzarella)</div>"},

{sub:"z / tz / zz (2) – Lückentext",type:"fill",
q:"Schreiben Sie die richtige Schreibweise (-z- oder -tz- oder -zz-) in die Lücke.",
sentences:["Der Künstler ski_________ierte die Turmspi_______e mit einem Bleistift."],
model:"skizzierte (zz) / Turmspitze (tz)",
rule:"<div class=rbox>Skizze → Fremdwort → <span class=hl>zz</span> · Spitze → kurzes i → <span class=hl>tz</span></div>"},

{sub:"wieder / wider (VIII) – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Widerwillen","Wiederwillen","Widerwilllen"],
  ["Widerwahl","Wiederwahl","Wiederrwahl"],
  ["Wiederaufbau","Wideraufbau","Wiederraufbau"],
  ["wider","wieder","weder"]
],
rowTexts:[
  "a)  Ihren ___ ließ sie sich nicht anmerken.",
  "b)  Die ___ des Klassensprechers war nicht überraschend.",
  "c)  Der ___ des Versuchs gestaltete sich schwierig.",
  "d*)  Beim Für und ___ überlege ich lange."
],
labels:["a)","b)","c)","d*)"],
correct:[0,1,0,1],
model:"a) Widerwillen · b) Wiederwahl · c) Wiederaufbau · d) Wider",
rule:"<div class=rbox>Widerwille → gegen → <span class=hl>wider</span> · Wiederwahl/Wiederaufbau → nochmal → <span class=hl>wieder</span></div>"}

]},

// ── 3: GROß- UND KLEINSCHREIBUNG ────────────────────────────────
// Enthält ausschließlich Groß-/Kleinschreibungsaufgaben.
// Kommaaufgaben aus diesem Themenbereich wurden in Thema 4 verschoben.
{id:"bbr_gross_klein",title:"Groß- und Kleinschreibung",emoji:"🔠",color:"#dc2626",qs:[

{sub:"Groß-/Kleinschreibung I – Buchstaben einsetzen",type:"fill",
q:"Entscheiden Sie, ob groß- oder kleingeschrieben werden muss. Setzen Sie den Buchstaben in der richtigen Schreibung ein.",
sentences:[
  "a)  Ich möchte meinen ___ esten (b/B) ___ reund (f/F) besuchen.",
  "b)  Das ___ ufräumen (a/A) ist für uns alle anstrengend.",
  "c*)  Wir brauchen für die Hochzeit noch ___ twas (e/E) ___ laues (b/B)."
],
model:"a) besten (Adj. → klein) / Freund (Nomen → GROSS) · b) Aufräumen (subst. Verb → GROSS) · c*) etwas (Pronomen → klein) / Blaues (subst. Adj. nach etwas → GROSS)",
rule:"<div class=rbox>Nomen und subst. Verben/Adj. → GROSS · Adjektive vor Nomen → klein · etwas/nichts + Adj → GROSS</div>"},

{sub:"Groß-/Kleinschreibung II – Buchstaben einsetzen",type:"fill",
q:"Entscheiden Sie, ob groß- oder kleingeschrieben werden muss. Setzen Sie den Buchstaben ein.",
sentences:[
  "a)  Dafür muss der ___ rüne (g/G) ___ tift (s/S) genutzt werden.",
  "b)  Ihm macht das ___ anzen (t/T) immer wieder viel Spaß.",
  "c*)  In den nächsten Tagen wird ___ ichts (n/N) ___ eues (n/N) passieren."
],
model:"a) grüne (Adj. → klein) / Stift (Nomen → GROSS) · b) Tanzen (subst. Verb → GROSS) · c*) nichts (Pronomen → klein) / Neues (subst. Adj. → GROSS)",
rule:"<div class=rbox>Adjektiv vor Nomen → klein · subst. Verb → GROSS · nichts/etwas + Adj → GROSS</div>"},

{sub:"Groß-/Kleinschreibung (zu z/tz/zz I) – Einsetzen",type:"fill",
q:"Schreiben Sie die Wörter in richtiger Schreibweise auf die Linie.",
sentences:[
  "a)  Bei Regen spielen sie __________________ (d/Donnerstags) in der Halle.",
  "b)  Zum größten __________________ (t/Teil) gab er mir Recht.",
  "c)  Er studiert jetzt an der ______________ (t/Technischen) Universität in Berlin."
],
model:"a) donnerstags (Adverb → klein) · b) Teil (Nomen → GROSS) · c) Technischen (Teil des Eigennamens → GROSS)",
rule:"<div class=rbox>Wochentage auf -s → Adverb → klein · Nomen → GROSS · Eigenname → GROSS</div>"},

{sub:"Groß-/Kleinschreibung (zu z/tz/zz II) – Einsetzen",type:"fill",
q:"Schreiben Sie die Wörter in richtiger Schreibweise auf die Linie.",
sentences:[
  "a)  Bei starker Hitze möchten viele etwas ______________ (k/Kaltes) trinken.",
  "b)  Das Café bleibt ______________ (m/Montags) immer geschlossen.",
  "c)  Unsere Exkursion in den ______________ (b/Botanischen) Garten war informativ."
],
model:"a) Kaltes (subst. Adj. nach etwas → GROSS) · b) montags (Adverb → klein) · c) Botanischen (Teil des Eigennamens → GROSS)",
rule:"<div class=rbox>etwas + Adj. → GROSS · Adverb → klein · Eigenname → GROSS</div>"},

{sub:"Groß-/Kleinschreibung – Sätze aufschreiben (1)",type:"self",
q:"Schreiben Sie die Sätze in richtiger Groß- und Kleinschreibung auf.",
sentences:[
  "a)  Beim einkauf sollte man die preise vergleichen.",
  "b)  Manchmal verführt eine interessant aussehende verpackung die kunden.",
  "c)  Ein einkaufszettel schützt vor unnötigen geldausgaben."
],
model:"a) Einkauf/Preise · b) Verpackung/Kunden · c) Einkaufszettel/Geldausgaben",
rule:"<div class=rbox>Alle Nomen → GROSS</div>"},

{sub:"Groß-/Kleinschreibung – Sätze aufschreiben (2)",type:"self",
q:"Schreiben Sie die Sätze in richtiger Groß- und Kleinschreibung auf.",
sentences:[
  "a)  Die generalprobe verlief reibungslos und zufriedenstellend.",
  "b)  Alle beteiligten bereiten sich fieberhaft auf die erste vorstellung vor.",
  "c)  Eine aufführung in der aula ist immer eine spannende angelegenheit."
],
model:"a) Generalprobe · b) Beteiligten/Vorstellung · c) Aufführung/Aula/Angelegenheit",
rule:"<div class=rbox>Nomen und subst. Adjektive → GROSS</div>"},

{sub:"Groß-/Kleinschreibung – Sätze aufschreiben (3)",type:"self",
q:"Schreiben Sie die Sätze in richtiger Groß- und Kleinschreibung auf.",
sentences:[
  "a)  Nach dem essen soll sich der mensch bewegen.",
  "b)  Für die konzentration sind regelmäßige mahlzeiten wichtig.",
  "c)  Lebensmittel mit vielen kalorien sollte man nur in maßen zu sich nehmen."
],
model:"a) Essen/Mensch · b) Konzentration/Mahlzeiten · c) Kalorien/Maßen",
rule:"<div class=rbox>Alle Nomen → GROSS</div>"},

{sub:"Groß-/Kleinschreibung – Sätze aufschreiben (4)",type:"self",
q:"Schreiben Sie die Sätze in richtiger Groß- und Kleinschreibung auf.",
sentences:[
  "a)  Wasser ist so selbstverständlich wie die luft zum atmen.",
  "b)  Wasser ist bei uns im überfluss vorhanden, in anderen Ländern jedoch mangelware.",
  "c)  Oft stellen überschwemmungen etwas gefährliches dar."
],
model:"a) Luft/Atmen · b) Überfluss/Mangelware · c) Überschwemmungen/Gefährliches",
rule:"<div class=rbox>Alle Nomen und subst. Adjektive (etwas Gefährliches) → GROSS</div>"}

]},

// ── 4: KOMMASETZUNG ──────────────────────────────────────────────
// Enthält ausschließlich Kommasetzungsaufgaben.
// Bewertung erfolgt ausschließlich über acceptedAnswers (kein correctPositions).
{id:"bbr_komma",title:"Kommasetzung",emoji:"✏️",color:"#ea580c",qs:[

// ----- Komma einsetzen (komma-Typ) -----

{sub:"Komma – Nebensatz mit 'wenn'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Einige Pflanzenarten gedeihen besonders gut wenn sie an bestimmten Standorten stehen.",
acceptedAnswers:[
  "Einige Pflanzenarten gedeihen besonders gut, wenn sie an bestimmten Standorten stehen."
],
model:"… gut, wenn …",
rule:"<div class=rbox>Nebensatz mit <span class=hl>wenn</span> → Komma davor.</div>"},

{sub:"Komma – Hauptsatz mit 'aber'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Das Flicken eines Fahrradschlauches ist nicht schwer aber man muss bestimmte Handgriffe beherrschen.",
acceptedAnswers:[
  "Das Flicken eines Fahrradschlauches ist nicht schwer, aber man muss bestimmte Handgriffe beherrschen."
],
model:"… schwer, aber …",
rule:"<div class=rbox>Vor <span class=hl>aber</span> steht ein Komma, wenn zwei Hauptsätze verbunden werden.</div>"},

{sub:"Komma – Nebensatz mit 'da'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Die Mannschaft muss trainieren da schon bald das nächste Spiel ansteht.",
acceptedAnswers:[
  "Die Mannschaft muss trainieren, da schon bald das nächste Spiel ansteht."
],
model:"… trainieren, da …",
rule:"<div class=rbox>Kausalsatz mit <span class=hl>da</span> → Komma davor.</div>"},

{sub:"Komma – Temporalsatz mit 'bevor'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Bevor wir uns an den Tisch setzen sollten wir ihn erst decken.",
acceptedAnswers:[
  "Bevor wir uns an den Tisch setzen, sollten wir ihn erst decken."
],
model:"… setzen, sollten …",
rule:"<div class=rbox>Vorangestellter Nebensatz mit <span class=hl>bevor</span> → Komma nach dem Nebensatz.</div>"},

{sub:"Komma – Relativsatz",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Jetzt sehe ich endlich das Haus das du mir beschrieben hast.",
acceptedAnswers:[
  "Jetzt sehe ich endlich das Haus, das du mir beschrieben hast."
],
model:"… Haus, das …",
rule:"<div class=rbox>Relativsatz → Komma vor dem einleitenden Relativpronomen.</div>"},

{sub:"Komma – Temporalsatz mit 'nachdem'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Nachdem wir nach Hause gekommen waren setzten wir uns alle an den warmen Kamin weil wir uns unbedingt aufwärmen mussten.",
acceptedAnswers:[
  "Nachdem wir nach Hause gekommen waren, setzten wir uns alle an den warmen Kamin, weil wir uns unbedingt aufwärmen mussten."
],
model:"… waren, setzten … Kamin, weil …",
rule:"<div class=rbox>Vorangestellter NS (nachdem) + eingebetteter NS (weil) → je ein Komma.</div>"},

{sub:"Komma – Konditionalsatz mit 'wenn'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Wenn du da bist geht es mir gut.",
acceptedAnswers:[
  "Wenn du da bist, geht es mir gut."
],
model:"… bist, geht …",
rule:"<div class=rbox>Vorangestellter Konditionalsatz → Komma nach dem Nebensatz.</div>"},

{sub:"Komma – ob-Satz",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Ob Luise morgen mit uns ins Kino geht weiß ich leider noch nicht.",
acceptedAnswers:[
  "Ob Luise morgen mit uns ins Kino geht, weiß ich leider noch nicht."
],
model:"… geht, weiß …",
rule:"<div class=rbox>Vorangestellter indirekter Fragesatz mit <span class=hl>ob</span> → Komma nach dem NS.</div>"},

{sub:"Komma – Aufzählung",type:"komma",
q:"Setzen Sie die fehlenden Kommas.",
sentence:"Kinder Jugendliche und Erwachsene können das Inlineskaten erlernen.",
acceptedAnswers:[
  "Kinder, Jugendliche und Erwachsene können das Inlineskaten erlernen."
],
model:"Kinder, Jugendliche und Erwachsene …",
rule:"<div class=rbox>Aufzählung ohne abschließendes <em>und</em> → Komma zwischen den Gliedern. Vor dem letzten <em>und</em> kein Komma.</div>"},

{sub:"Komma – Nebensatz mit 'dass'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Ich hoffe dass du gestern gut nach Hause gekommen bist.",
acceptedAnswers:[
  "Ich hoffe, dass du gestern gut nach Hause gekommen bist."
],
model:"… hoffe, dass …",
rule:"<div class=rbox>dass-Satz → Komma davor.</div>"},

{sub:"Komma – Kausalangabe mit 'da'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Ich habe mir nämlich schon Sorgen gemacht da du dich nicht gemeldet hast.",
acceptedAnswers:[
  "Ich habe mir nämlich schon Sorgen gemacht, da du dich nicht gemeldet hast."
],
model:"… gemacht, da …",
rule:"<div class=rbox>Kausalsatz mit <span class=hl>da</span> → Komma davor.</div>"},

{sub:"Komma – Anstatt-zu-Gruppe",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Anstatt seine Hausaufgaben zu machen spielt er auf dem Computer.",
acceptedAnswers:[
  "Anstatt seine Hausaufgaben zu machen, spielt er auf dem Computer."
],
model:"… zu machen, spielt …",
rule:"<div class=rbox>Infinitivgruppe mit <span class=hl>anstatt … zu</span> → Komma nach der Gruppe.</div>"},

{sub:"Komma – eingeschobener Relativsatz",type:"komma",
q:"Setzen Sie die fehlenden Kommas.",
sentence:"Unser Nachbar den wir kaum zu Gesicht bekommen hat uns gestern Kuchen gebracht und mit uns Kaffee getrunken.",
acceptedAnswers:[
  "Unser Nachbar, den wir kaum zu Gesicht bekommen, hat uns gestern Kuchen gebracht und mit uns Kaffee getrunken."
],
model:"… Nachbar, den … bekommen, hat …",
rule:"<div class=rbox>Eingeschobener Relativsatz → Komma am Anfang und am Ende des Relativsatzes.</div>"},

{sub:"Komma – Konditionalsatz mit 'wenn' (Empfehlung)",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Mit dem Fahrrad kommt man schneller voran wenn Fahrradwege gut ausgebaut sind.",
acceptedAnswers:[
  "Mit dem Fahrrad kommt man schneller voran, wenn Fahrradwege gut ausgebaut sind."
],
model:"… voran, wenn …",
rule:"<div class=rbox>Konditionalsatz mit <span class=hl>wenn</span> → Komma davor.</div>"},

{sub:"Komma – Folgensatz mit 'sodass'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Eine Radtour in den Bergen ist anstrengend sodass die Freude am Radfahren dann nachlassen kann.",
acceptedAnswers:[
  "Eine Radtour in den Bergen ist anstrengend, sodass die Freude am Radfahren dann nachlassen kann."
],
model:"… anstrengend, sodass …",
rule:"<div class=rbox>Folgensatz mit <span class=hl>sodass</span> → Komma davor.</div>"},

{sub:"Komma – Konzessivsatz mit 'obwohl'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Ich fahre täglich mit dem Fahrrad zur Schule obwohl ich das viel zu anstrengend finde.",
acceptedAnswers:[
  "Ich fahre täglich mit dem Fahrrad zur Schule, obwohl ich das viel zu anstrengend finde."
],
model:"… Schule, obwohl …",
rule:"<div class=rbox>Konzessivsatz mit <span class=hl>obwohl</span> → Komma davor.</div>"},

{sub:"Komma – Finalsatz mit 'damit'",type:"komma",
q:"Setzen Sie das fehlende Komma.",
sentence:"Bei Regen muss man besonders vorsichtig sein damit man nicht auf nassen Fahrbahnen ausrutscht.",
acceptedAnswers:[
  "Bei Regen muss man besonders vorsichtig sein, damit man nicht auf nassen Fahrbahnen ausrutscht."
],
model:"… sein, damit …",
rule:"<div class=rbox>Finalsatz mit <span class=hl>damit</span> → Komma davor.</div>"},

// ----- Kommaaufgaben als self-Typ (mehrere Sätze auf einmal) -----

{sub:"Komma – Sätze korrigieren (1)",type:"self",
q:"Setzen Sie in den folgenden Sätzen die fehlenden Kommas gut sichtbar ein.",
sentences:[
  "a)  Sie fragt sich ernsthaft ob die ganze Arbeit notwendig ist.",
  "b)  Ich kenne ihn seit ich denken kann.",
  "c)  Es ist ein Training das für die ganze Familie geeignet ist.",
  "d)  Da Skaten die Gelenke schont ist es als Ausdauersport sehr zu empfehlen."
],
model:"a) …ernsthaft, ob… · b) …ihn, seit… · c) …Training, das… · d) …schont, ist…",
rule:"<div class=rbox>ob / seit / Relativsatz / vorangestellter da-Satz → Komma(s)</div>"},

{sub:"Komma – Sätze korrigieren (2)",type:"self",
q:"Setzen Sie in den folgenden Sätzen die fehlenden Kommas ein.",
sentences:[
  "a)  Die Klasse wird nach dem Erfolg ihres Theaterstückes die Aufführung widerholen / wiederholen.",
  "b)  Während ich den ersten Gang vorbereite kannst du den Tisch decken.",
  "c)  Ich möchte das Buch lesen das du mir empfohlen hast.",
  "d*)  Bevor wir mit dem Spiel beginnen sollten wir uns die Regeln genau durchlesen damit wir später keinen Fehler begehen."
],
model:"a) (kein Komma nötig) · b) …vorbereite, kannst… · c) …lesen, das… · d*) …beginnen, sollten…durchlesen, damit…",
rule:"<div class=rbox>während / Relativsatz / bevor + damit → Komma(s)</div>"},

{sub:"Komma – Sätze korrigieren (3)",type:"self",
q:"Setzen Sie die fehlenden Kommas.",
sentences:[
  "a)  Auch durch Überschwemmungen Verschmutzungen oder Wassermangel ist das Leben auf der Erde gefährdet.",
  "b)  Dass viele Länder kein sauberes Trinkwasser haben ist kein Geheimnis.",
  "c)  Wasser ist die Grundlage allen Lebens denn jedes Lebewesen benötigt es.",
  "d*)  Wasser ist für viele Menschen selbstverständlich da sie nur den Wasserhahn aufdrehen müssen um es zu bekommen."
],
model:"a) Überschwemmungen, Verschmutzungen oder … · b) …haben, ist… · c) …Lebens, denn… · d*) …selbstverständlich, da…müssen, um…",
rule:"<div class=rbox>Aufzählung · dass-Satz · denn · da + um-zu-Gruppe → Komma(s)</div>"},

{sub:"Komma – Sätze korrigieren (4)",type:"self",
q:"Setzen Sie die fehlenden Kommas.",
sentences:[
  "a)  Am Tag der Zahngesundheit gibt es viele Aktionen zu Zahnpflege Prophylaxe und Zusatzversicherungen.",
  "b)  Wenn Milchzähne anfangen zu schmerzen ist ein Besuch beim Zahnarzt notwendig.",
  "c)  Schlechte Milchzähne steigern das Risiko dass bleibende Zähne Karies bekommen."
],
model:"a) Zahnpflege, Prophylaxe und … · b) …schmerzen, ist… · c) …Risiko, dass…",
rule:"<div class=rbox>Aufzählung · wenn-Satz · dass-Satz → Komma(s)</div>"},

{sub:"Komma – Sätze korrigieren (5)",type:"self",
q:"Setzen Sie die fehlenden Kommas.",
sentences:[
  "a)  Die drei wichtigsten Stoffe in unserer Ernährung sind Eiweiße Kohlenhydrate und Fette.",
  "b)  Süßigkeiten schmecken gut aber sind schädlich für die Zähne.",
  "c)  Damit unser Körper Krankheiten bekämpfen kann ist eine gesunde Ernährung wichtig.",
  "d*)  Kohlenhydrate liefern unserem Körper wichtige Energie die wir benötigen um den Alltag zu meistern."
],
model:"a) Eiweiße, Kohlenhydrate und … · b) …gut, aber… · c) …kann, ist… · d*) …Energie, die…benötigen, um…",
rule:"<div class=rbox>Aufzählung · aber · damit-Satz · Relativsatz + um-zu → Komma(s)</div>"},

{sub:"Komma + Fremdwörter – Sätze korrigieren",type:"self",
q:"Setzen Sie in den folgenden Sätzen die fehlenden Kommas ein.",
sentences:[
  "a)  Ich hoffe dass du gestern gut nach Hause gekommen bist.",
  "b)  Ob Luise morgen mit uns ins Kino geht weiß ich leider noch nicht.",
  "c)  Ich kenne ihn seit ich denken kann.",
  "d)  Anstatt seine Hausaufgaben zu machen spielt er auf dem Computer.",
  "e)  Wenn du da bist geht es mir gut.",
  "f*)  Unser Nachbar den wir kaum zu Gesicht bekommen hat uns gestern Kuchen gebracht und mit uns Kaffee getrunken."
],
model:"a) hoffe, dass · b) geht, weiß · c) ihn, seit · d) machen, spielt · e) bist, geht · f*) Nachbar, den…bekommen, hat",
rule:"<div class=rbox>dass / ob / seit / anstatt…zu / wenn / eingeschobener Relativsatz → Komma(s)</div>"},

{sub:"Fremdwörter – Kreuzen",type:"mc3",
q:"Kreuzen Sie die richtige Schreibweise an:",
rows:[
  ["Fotografie","Fotografi","Fotography"],
  ["Hotdock","Hott Dog","Hotdog"],
  ["Reservierung","Reservirung","Reserwierung"],
  ["Exkorsion","Exkursion","Exkusion"],
  ["Turismus","Tourrismus","Tourismus"],
  ["Saisong","Saison","Säson"]
],
labels:["a)","b)","c)","d)","e)","f)"],
correct:[0,2,0,1,2,1],
model:"a) Fotografie · b) Hotdog · c) Reservierung · d) Exkursion · e) Tourismus · f) Saison",
rule:"<div class=rbox>Fremdwörter folgen der Herkunftssprache: Fotografie (griech.) · Hotdog (engl.) · Reservierung (lat.) · Tourismus (frz.) · Saison (frz.)</div>"}

]},

// ── 5: GRAMMATIK – WORTARTEN ─────────────────────────────────────
{id:"bbr_grammatik",title:"Grammatik – Wortarten",emoji:"📘",color:"#0891b2",qs:[

{sub:"Unbestimmter Artikel – Lückentext",type:"fill",
q:"Setzen Sie jeweils den richtig gebeugten Artikel ein (ein, eine, einen oder einem).",
sentences:[
  "a)  Wir brauchen unbedingt noch ________ helfende Hand.",
  "b)  Dazu habe ich heute Morgen noch ________ Artikel gelesen.",
  "c)  ________ guten Freund hilft man gern.",
  "d)  Das ist ________ großer Erfolg!"
],
model:"a) eine (f, Nom.) · b) einen (m, Akk.) · c) Einem (m, Dat.) · d) ein (m, Nom.)",
rule:"<div class=rbox>m Nom.: <span class=hl>ein</span> · m Akk.: <span class=hl>einen</span> · m Dat.: <span class=hl>einem</span> · f Nom./Akk.: <span class=hl>eine</span></div>"},

{sub:"Adjektivdeklination I – Lückentext",type:"fill",
q:"Setzen Sie das Adjektiv jeweils in der richtigen Form ein.",
sentences:[
  "a)  Die ______________ Feier werden wir nicht vergessen. (schön)",
  "b)  Den ______________ Schüler begrüßen wir morgen. (neu)",
  "c*)  __________________ Arbeit kann man zuvorkommen, indem man alles genau plant. (überflüssig)"
],
model:"a) schöne (Nom.f.→-e) · b) neuen (Akk.m.→-en) · c*) Überflüssiger (Nom.f. stark, ohne Artikel → -er → Überflüssiger, GROSS)",
rule:"<div class=rbox>nach best. Art.: schwach (-e/-en) · ohne Artikel → stark (-er/-em/-es/-en)</div>"},

{sub:"fallen-Komposita – Lückentext",type:"fill",
q:"Wählen Sie jeweils das passende Verb aus und setzen Sie es ein.",
wordbox:"abfallen, anfallen, ausfallen, befallen, einfallen, gefallen, hinfallen, umfallen, zerfallen, zufallen",
sentences:[
  "a)  Das Konzert muss heute leider ____________________.",
  "b)  Sie tut alles, um ihr zu ____________________.",
  "c*)  Der Hund muss zum Arzt, weil er von Flöhen ____________________ ist."
],
model:"a) ausfallen · b) gefallen · c*) befallen",
rule:"<div class=rbox>ausfallen = nicht stattfinden · gefallen = jemandem angenehm sein · befallen = von Parasiten heimgesucht</div>"},

{sub:"ieren-Verben – Lückentext (*)",type:"fill",
q:"(*) Wählen Sie jeweils das passende Verb aus und setzen Sie es ein.",
wordbox:"banalisieren, funktionieren, manipulieren, moderieren, reklamieren, tolerieren",
sentences:[
  "a)  Beschädigte Ware sollte man beim Hersteller ____________________.",
  "b)  Es wäre schön, wenn du meine Meinung ____________________ würdest."
],
model:"a) reklamieren · b) tolerieren",
rule:"<div class=rbox>Fremdverben auf <span class=hl>-ieren</span>: reklamieren (beanstanden), tolerieren (dulden)</div>"},

{sub:"Zeitformen (I) – Lückentext",type:"fill",
q:"Setzen Sie das Verb in der angegebenen Zeitform ein.",
sentences:[
  "a)  Präsens: Abends __________ ich immer ein paar Seiten (lesen).",
  "b)  Präteritum: Die Hauptdarstellerin __________ großartig (spielen).",
  "c)  Perfekt: Wir _______ das Spiel leider __________ (verlieren)."
],
model:"a) lese · b) spielte · c) haben / verloren",
rule:"<div class=rbox>Präsens: ich <span class=hl>lese</span> · Prät. schwach: <span class=hl>spielte</span> · Perfekt: haben + Part.II (<span class=hl>verloren</span>)</div>"},

{sub:"Bestimmter Artikel – Lückentext",type:"fill",
q:"Setzen Sie jeweils den richtig gebeugten Artikel ein (der, die, das, dem oder den).",
sentences:[
  "a)  Wir möchten uns sehr für ______ Einladung bedanken.",
  "b)  Wir freuen uns auch schon sehr auf ______ Geburtstag!",
  "c)  Auch an ______ Geschenk beteiligen wir uns gern.",
  "d)  Vor ______ Feier müssen wir uns aber schick anziehen."
],
model:"a) die (f, Akk.) · b) den (m, Akk.) · c) dem (n, Dat.) · d) der (f, Dat.)",
rule:"<div class=rbox>für/auf + Akk.: m → <span class=hl>den</span>, f → <span class=hl>die</span> · an/vor + Dat.: m/n → <span class=hl>dem</span>, f → <span class=hl>der</span></div>"},

{sub:"Adjektivdeklination II – Lückentext",type:"fill",
q:"Setzen Sie das Adjektiv jeweils in der richtigen Form ein.",
sentences:[
  "a)  Ich mag diesen ____________ Mantel. (grün)",
  "b)  Die ____________ Begeisterung blieb leider aus. (groß)",
  "c*)  ____________ Anstehen kann man entgegenwirken, wenn man den ersten Andrang etwas abwartet. (lang)"
],
model:"a) grünen (Akk.m.→-en) · b) große (Nom.f.→-e) · c*) Langem (Dat.n. stark, ohne Artikel → -em → GROSS)",
rule:"<div class=rbox>nach best./dieser Art.: schwach (-e/-en) · ohne Artikel → stark (Langem = Dat.n.)</div>"},

{sub:"Sätze ordnen (*) – Wortstellung",type:"self",
q:"(*) Ordnen Sie die Wörter so an, dass sich ein sinnvoller Satz ergibt. Der Satzanfang ist immer vorgegeben.",
sentences:[
  "a)  Ungeduldig wartet | sie | im | seit | Regen. | drei | Stunden",
  "b)  Zum Glück hat | sie | in | die | Biologie | bestanden. | Prüfung"
],
model:"a) Ungeduldig wartet sie seit drei Stunden im Regen. · b) Zum Glück hat sie die Prüfung in Biologie bestanden.",
rule:"<div class=rbox>Finites Verb → Pos. 2 · Zeit (seit drei Stunden) vor Ort (im Regen)</div>"},

{sub:"Zeitformen II – Lückentext",type:"fill",
q:"Setzen Sie die Verben in der geforderten Zeitform ein.",
sentences:[
  "a)  Präsens: Herr Schöller __________ (sein) Friseur.",
  "b)  Präteritum: Er ______________ (lernen) am Oberstufenzentrum Körperpflege.",
  "c*)  Perfekt: Schon als Kind ____________________ er sich für Frisuren ____________________ (sich interessieren)."
],
model:"a) ist · b) lernte · c*) hat / interessiert",
rule:"<div class=rbox>sein → <span class=hl>ist</span> · lernen → Prät. <span class=hl>lernte</span> · sich interessieren → Perf. <span class=hl>hat sich interessiert</span></div>"},

{sub:"Adverbien einordnen (I) – Tabelle",type:"sort",
q:"Notieren Sie die Adverbien aus dem Kasten in die passende Spalte der Tabelle.",
wordbox:"besonders  später  gegenüber  fast  dort  unten  bald  vielleicht  nachher",
rows:["später","besonders","gegenüber","fast","dort","unten","bald","vielleicht","nachher"],
cols:["Zeit","Art und Weise","Ort"],
correct:[0,1,2,1,2,2,0,1,0],
model:"Zeit: später/bald/nachher · Art und Weise: besonders/fast/vielleicht · Ort: gegenüber/dort/unten",
rule:"<div class=rbox>Zeit: wann? (später, bald, nachher) · Art/Weise: wie? (besonders, fast, vielleicht) · Ort: wo? (dort, unten, gegenüber)</div>"},

{sub:"Antonyme I – Aufgabe",type:"self",
q:"Schreiben Sie für die jeweils markierten Begriffe das entsprechende Antonym.",
sentences:[
  "Bsp.: Die Lebensmittel sind verdorben.  → frisch",
  "a)  Draußen ist es heute sehr *warm*.",
  "b)  Die Nachspeise ist viel zu *sauer*.",
  "c)  Die Gegner stehen sich *freundlich* gegenüber.",
  "d)  Eine *Mehrheit* stimmte heute für das neue Gesetz."
],
model:"a) kalt · b) süß · c) feindlich · d) Minderheit",
rule:"<div class=rbox><span class=hl>Antonym</span> = direktes Gegenteil – Wortart beachten!</div>"},

{sub:"Adverbien ergänzen (*) (I)",type:"fill",
q:"(*) Ergänzen Sie die Sätze jeweils mit einem passenden Adverb aus den Vorgaben. Jedes Wort nur einmal.",
wordbox:"gerne  drinnen  abends  oben  immer  morgens  besonders  draußen  fast  sehr",
sentences:[
  "a)  ________________ gehe ich ______________ zum Schwimmen.",
  "b)  __________ hätte ich vergessen, dir zum Geburtstag zu gratulieren. Ich wäre __________ gekommen.",
  "c)  ________________ ist es sehr gemütlich, während es __________ regnet und stürmt."
],
model:"a) Morgens/abends + gerne · b) Fast / gerne/sehr · c) Drinnen/oben + draußen",
rule:"<div class=rbox>Adverbien der Zeit (morgens, abends), der Art (gerne, besonders, sehr, fast) und des Ortes (drinnen, draußen, oben)</div>"},

{sub:"Adverbien einordnen (II) – Tabelle",type:"sort",
q:"Notieren Sie die Adverbien aus dem Kasten in die passende Spalte der Tabelle.",
wordbox:"oft  besonders  hier  gern  niemals  dort  oben  sehr  jetzt",
rows:["oft","besonders","hier","gern","niemals","dort","oben","sehr","jetzt"],
cols:["Zeit","Art und Weise","Ort"],
correct:[0,1,2,1,0,2,2,1,0],
model:"Zeit: oft/niemals/jetzt · Art: besonders/gern/sehr · Ort: hier/dort/oben",
rule:"<div class=rbox>Zeit: oft, niemals, jetzt · Art: gern, sehr, besonders · Ort: hier, dort, oben</div>"},

{sub:"Antonyme II – Aufgabe",type:"self",
q:"Schreiben Sie für die markierten Begriffe ein passendes Antonym.",
sentences:[
  "a)  Einige Familien sind sehr *reich*.",
  "b)  Die Kinder sind heute sehr *fröhlich*.",
  "c)  Die Musik ist viel zu *leise*.",
  "d)  Am Nordseestrand waren heute Nachmittag *viele* Spaziergänger."
],
model:"a) arm · b) traurig · c) laut · d) wenige",
rule:"<div class=rbox>Gegenteil bilden – Wortart beachten!</div>"},

{sub:"Adverbien ergänzen (*) (II)",type:"fill",
q:"(*) Ergänzen Sie die Sätze mit einem passenden Adverb. Mehrfachnennungen nicht möglich.",
wordbox:"sehr  abends  kaum  drinnen  oft  normalerweise  gern  meistens  hier  morgens  draußen  immer  ausnahmsweise  besonders",
sentences:[
  "a)  Zum Frühstück esse ich __________________ ein Müsli. Das schmeckt mir __________________ gut.",
  "b)  __________________ findet am Wochenende ja kein Training statt, aber heute __________________ doch.",
  "c)  __________________ stürmt und regnet es fürchterlich, aber __________________ ist es warm und trocken."
],
model:"a) meistens/immer + besonders/sehr · b) Normalerweise + ausnahmsweise · c) Oft/Abends + drinnen/draußen",
rule:"<div class=rbox>Adverbien je nach Bedeutung zuordnen – kein Wort doppelt verwenden!</div>"},

{sub:"Wortbausteine (ver-/vor-/vier-) – Tabelle",type:"fill",
q:"Setzen Sie jeweils einen der Wortbausteine so vor die Zweierwortgruppe, dass er zu beiden Wörtern passt.",
wordbox:"Ver – ver – voll – Vor – vor – vier",
sentences:[
  "a)  _____ | ziehen / bringen",
  "b)  _____ | brecher / kehr",
  "c)  _____ | wärts / tragen",
  "d)  _____ | knoten / tragen",
  "e*)  _____ | fach / händig",
  "f*)  _____ | band / teidigung"
],
model:"a) ver- · b) Ver- · c) vor- · d) ver- · e*) vier- · f*) Ver-",
rule:"<div class=rbox>ver-: verziehen, verbringen, verknoten, vertragen<br>vor-: vorwärts, vortragen · vier-: vierfach, vierhändig · Ver-: Verbrecher, Verkehr, Verband, Verteidigung</div>"},

{sub:"Personalpronomen – Lückentext",type:"fill",
q:"Setzen Sie für die markierte Nomen die passenden Personalpronomen ein.",
sentences:[
  "a)  Ein *Fenster* ging zu Bruch. _______ muss repariert werden.",
  "b)  Erst spät sind die *Wanderer* angekommen. _____ sind sehr hungrig.",
  "c)  Die *Mannschaft* hatte viele Torchancen, aber _____ hat sie nicht genutzt.",
  "d)  Ein alter *Mann* hatte sich verlaufen, weshalb _____ mich nach dem Weg fragte.",
  "e*)  *Elli* nimmt das *Fahrrad*, weil ____ für ____ das liebste Transportmittel ist."
],
model:"a) Es (n) · b) Sie (Pl.) · c) sie (f) · d) er (m) · e*) es (Fahrrad) / sie (Elli)",
rule:"<div class=rbox>Pronomen nach Genus/Numerus: m→er · f→sie · n→es · Pl.→sie</div>"},

{sub:"Bestimmter/unbestimmter Artikel – Lückentext",type:"fill",
q:"Setzen Sie die fehlenden Artikel ein (bestimmt oder unbestimmt).",
sentences:[
  "Rebecca hat _________ neuen Computer bekommen.",
  "_________ Computer hat _________________ besonders guten Bildschirm."
],
model:"einen (m, Akk., neu eingeführt) / Der (bekannt) / einen (m, Akk., neu eingeführt)",
rule:"<div class=rbox>Neu eingeführt → <span class=hl>unbestimmter Artikel</span> · bekannt/bereits erwähnt → <span class=hl>bestimmter Artikel</span></div>"},

{sub:"Verben Zeitformen I – Konjugationstabelle",type:"self",
q:"Notieren Sie die richtig gebeugten Verben.\n(Infinitiv | Präsens | Präteritum | Perfekt | Futur I)\nBsp.: trinken | ich trinke | er trank | wir haben getrunken | du wirst trinken",
sentences:[
  "meinen: er ___ | ich meinte | ihr ___ | wir ___",
  "springen: du ___ | er ___ | wir sind gesprungen | ihr ___",
  "kochen: wir ___ | ihr ___ | ich ___ | er wird kochen"
],
model:"meinen: er meint / ihr habt gemeint / wir werden meinen · springen: du springst / er sprang / ihr werdet springen · kochen: wir kochen / ihr kochtet / ich habe gekocht",
rule:"<div class=rbox>springen → Perfekt mit <span class=hl>sein</span> (Bewegungsverb) · Futur I: werden + Infinitiv</div>"},

{sub:"Satz in Zeitform umschreiben (*) (I)",type:"self",
q:"(*) Schreiben Sie den Satz in der vorgegebenen Zeitform auf.",
sentences:[
  "a)  Ich plane eine Reise. → Futur I:",
  "b)  Sie reden über den Film. → Präteritum:",
  "c)  Wir besuchen das Museum. → Perfekt:"
],
model:"a) Ich werde eine Reise planen. · b) Sie redeten über den Film. · c) Wir haben das Museum besucht.",
rule:"<div class=rbox>Futur I: werden + Inf. · Prät. schwach: -te · Perfekt: haben + Part.II</div>"},

{sub:"sagen-Komposita – Lückentext",type:"fill",
q:"Ergänzen Sie den Satz mit einem passenden Verb aus den Vorgaben.",
wordbox:"zusagen - vorsagen - ansagen - aufsagen",
sentences:[
  "a)  Ich werde die Information laut für alle ________________ .",
  "b)  Er muss für das Treffen noch ________________ ."
],
model:"a) aufsagen · b) zusagen",
rule:"<div class=rbox>aufsagen: auswendig vortragen · zusagen: zustimmen/bestätigen</div>"},

{sub:"Adjektive richtig beugen (I)",type:"fill",
q:"Schreiben Sie das richtig gebeugte Adjektiv auf die Linie.",
sentences:[
  "a)  Das ______________ (heiß) Essen wurde schnell kalt.",
  "b)  Die ______________ (laut) Stimmen drangen durch die Tür.",
  "c)  Das Haus auf dem ______________ (flach) Hügel gefiel uns allen.",
  "d*)  Im Winter muss man mit ______________ (eisig) Winden rechnen.",
  "e*)  Bei ______________ (klar) Sicht kann man kilometerweit sehen.",
  "f*)  Im Koffer befand sich ______________ (wichtig) Werkzeug."
],
model:"a) heiße (-e) · b) lauten (-en) · c) flachen (-en) · d*) eisigen (-en) · e*) klarer (Dat.f. stark: -er) · f*) wichtiges (Nom.n. nach unbest. Art.: -es)",
rule:"<div class=rbox>nach best. Art. → schwach (-e/-en) · ohne Art. Dat.f. → stark -er · nach unbest. Art. Nom.n. → -es</div>"},

{sub:"Verb auswählen I (führen/entwerfen) – Lückentext",type:"fill",
q:"Ergänzen Sie den Satz mit einem passenden Wort aus der Liste.",
wordbox:"entwerfen - entgegnen - führen - ablegen",
sentences:[
  "a)  Er wollte das Gespräch mit dem Lehrling ________________ .",
  "b)  Am Anfang mussten sie einen Plan ________________ ."
],
model:"a) führen · b) entwerfen",
rule:"<div class=rbox>Kollokationen: Gespräch <span class=hl>führen</span> · Plan <span class=hl>entwerfen</span></div>"},

{sub:"Verben Zeitformen II – Konjugationstabelle",type:"self",
q:"Notieren Sie die richtig gebeugten Verben.\n(Infinitiv | Präsens | Präteritum | Perfekt | Futur I)",
sentences:[
  "rennen: er ___ | ich rannte | ihr ___ | wir ___",
  "spielen: du ___ | er ___ | wir haben gespielt | ihr ___",
  "sagen: wir ___ | ihr ___ | ich ___ | er wird sagen"
],
model:"rennen: er rennt / ihr seid gerannt / wir werden rennen · spielen: du spielst / er spielte / ihr werdet spielen · sagen: wir sagen / ihr sagtet / ich habe gesagt",
rule:"<div class=rbox>rennen → Perfekt mit <span class=hl>sein</span> (Bewegungsverb) · spielen/sagen → haben + Part.II</div>"},

{sub:"Satz in Zeitform umschreiben (*) (II)",type:"self",
q:"(*) Schreiben Sie den Satz in der vorgegebenen Zeitform auf.",
sentences:[
  "a)  Du lachst viel. → Perfekt:",
  "b)  Sie schreibt eine Bewerbung. → Futur I:",
  "c)  Er fährt mit dem Zug. → Präteritum:"
],
model:"a) Du hast viel gelacht. · b) Sie wird eine Bewerbung schreiben. · c) Er fuhr mit dem Zug.",
rule:"<div class=rbox>Perfekt: haben + Part.II · Futur I: werden + Inf. · Prät. stark: fuhr (fahren)</div>"},

{sub:"ab-Komposita – Lückentext",type:"fill",
q:"Ergänzen Sie den Satz mit einem passenden Verb aus den Vorgaben.",
wordbox:"abwerfen - abtreten - absagen - ablegen",
sentences:[
  "a)  Meinen Arzttermin werde ich ________________ .",
  "b)  Morgen muss sie eine Prüfung ________________ ."
],
model:"a) absagen · b) ablegen",
rule:"<div class=rbox>absagen: einen Termin stornieren · ablegen: eine Prüfung machen (Prüfung ablegen)</div>"},

{sub:"Adjektive richtig beugen (II)",type:"fill",
q:"Schreiben Sie das richtig gebeugte Adjektiv auf die Linie.",
sentences:[
  "a)  Das ______________ (warm) Wetter hielt lange an.",
  "b)  Die ______________ (leicht) Aufgaben waren schnell erledigt.",
  "c)  Aus dem ______________ (hell) Flur drang Licht in das Zimmer.",
  "d*)  Im Herbst ist mit ______________ (neblig) Tagen zu rechnen.",
  "e*)  Ein ______________ (klein) Teilchen fehlte noch.",
  "f*)  Bei ______________ (schnell) Tempo kann man Straßenschilder nicht gut erkennen."
],
model:"a) warme (-e) · b) leichten (-en) · c) hellen (-en) · d*) nebligen (-en) · e*) kleines (nach ein, Nom.n.→-es) · f*) schnellem (Dat.n. ohne Art.→stark -em)",
rule:"<div class=rbox>nach best. Art. → schwach · nach unbest. Art. Nom.n.→-es, m→-er · ohne Art. Dat.n.→-em</div>"},

{sub:"Verb auswählen II (geben/halten) – Lückentext",type:"fill",
q:"Ergänzen Sie den Satz mit einem passenden Wort aus der vorgegebenen Liste.",
wordbox:"geben - machen - haben - halten",
sentences:[
  "a)  Der Ausbilder musste viele Anweisungen ________________ .",
  "b)  Auf der Feier sollte sie eine Rede ________________ ."
],
model:"a) geben · b) halten",
rule:"<div class=rbox>Kollokationen: Anweisungen <span class=hl>geben</span> · Rede <span class=hl>halten</span></div>"}

]},

// ── 6: SATZLEHRE ─────────────────────────────────────────────────
{id:"bbr_satzlehre",title:"Satzlehre",emoji:"🔗",color:"#9333ea",qs:[

{sub:"Satzgefüge I – Konjunktion einsetzen",type:"self",
q:"Bilden Sie jeweils mithilfe der vorgegebenen Konjunktion aus den vorgegebenen Sätzen ein Satzgefüge.",
sentences:[
  "a)  Sie ist abfahrbereit. Sie hat bereits gepackt. (da)",
  "b)  Ich komme pünktlich. Die U-Bahn ist zu spät gekommen. (obwohl)",
  "c*)  Ich hatte den Aufsatz zu Ende geschrieben. Ich konnte ihn endlich abschicken. (nachdem)"
],
model:"a) Sie ist abfahrbereit, da sie bereits gepackt hat. · b) Ich komme pünktlich, obwohl die U-Bahn zu spät gekommen ist. · c*) Nachdem ich den Aufsatz zu Ende geschrieben hatte, konnte ich ihn endlich abschicken.",
rule:"<div class=rbox>da (Grund) · obwohl (Gegensatz) · nachdem (Vorzeitigkeit) → alle NS, Verb am Ende</div>"},

{sub:"Satzgefüge II – Konjunktion einsetzen",type:"self",
q:"Bilden Sie jeweils mithilfe der vorgegebenen Konjunktion ein inhaltlich sinnvolles Satzgefüge.",
sentences:[
  "a)  Ich muss früh aufstehen. Wir fahren an die Ostsee. (weil)",
  "b)  Du solltest die Blumen gießen. Sie blühen besonders schön. (damit)",
  "c*)  Wir gehen heute Nachmittag ins Stadion. Ich muss noch mein Ticket suchen. (bevor)"
],
model:"a) Ich muss früh aufstehen, weil wir an die Ostsee fahren. · b) Du solltest die Blumen gießen, damit sie besonders schön blühen. · c*) Wir gehen heute Nachmittag ins Stadion, bevor ich noch mein Ticket suchen muss.",
rule:"<div class=rbox>weil/damit/bevor → NS (Verb am Ende) · Komma zwischen HS und NS</div>"},

{sub:"Satzgefüge – Konjunktionen I",type:"self",
q:"Verbinden Sie die folgenden Sätze mit den Konjunktionen in Klammern. Setzen Sie das Komma.",
sentences:[
  "a)  Alex spült ab. Leo putzt die Fenster. (während)",
  "b)  Ich kann mit in den Park kommen. Du hilfst mir bei den Hausaufgaben. (wenn)",
  "c)  Nuria geht oft ins Fitnessstudio. Sie will eine bessere Kondition bekommen. (denn)"
],
model:"a) Alex spült ab, während Leo die Fenster putzt. · b) Ich kann mit in den Park kommen, wenn du mir bei den Hausaufgaben hilfst. · c) Nuria geht oft ins Fitnessstudio, denn sie will eine bessere Kondition bekommen.",
rule:"<div class=rbox>während/wenn → NS (Verb am Ende) · <span class=hl>denn</span> → HS-Konjunktion: Verb bleibt an Pos. 2!</div>"},

{sub:"Indirekte Rede – Umformen",type:"self",
q:"Formen Sie die direkte Rede in die indirekte Rede um.",
sentences:[
  'a)  Rena behauptet: "Das Theatertreffen ist erst morgen."',
  'b)  Walter versichert: "Ich akzeptiere die Entscheidung."',
  'c*)  Lukas sagt: "Die Rechtschreib-AG wird erst morgen stattfinden."'
],
model:"a) Rena behauptet, das Theatertreffen sei erst morgen. · b) Walter versichert, er akzeptiere die Entscheidung. · c*) Lukas sagt, die Rechtschreib-AG werde erst morgen stattfinden.",
rule:"<div class=rbox>Indirekte Rede: <span class=hl>Konjunktiv I</span> (sei, akzeptiere, werde) · Einleitungssatz + Komma + NS ohne Anführungszeichen</div>"},

{sub:"Satzgefüge III – Radfahren",type:"self",
q:"Bilden Sie mit Hilfe der Sätze und der vorgegebenen Konjunktionen ein Satzgefüge und setzen Sie das Komma.",
sentences:[
  "a)  Radfahren schont unsere Umwelt. Man verbraucht kein Benzin. (weil)",
  "b)  Mit dem Fahrrad kommt man schneller voran. Fahrradwege sind gut ausgebaut. (wenn)",
  "c)  Eine Radtour in den Bergen ist anstrengend. Die Freude am Radfahren kann dann nachlassen. (sodass)",
  "d*)  Ich fahre täglich mit dem Fahrrad zur Schule. Ich finde das viel zu anstrengend. (obwohl)",
  "e*)  Bei Regen muss man besonders vorsichtig sein. Man rutscht nicht auf nassen Fahrbahnen aus. (damit)"
],
model:"a) …schont die Umwelt, weil man kein Benzin verbraucht. · b) …kommt schneller voran, wenn Fahrradwege gut ausgebaut sind. · c) …ist anstrengend, sodass die Freude nachlassen kann. · d*) …täglich Rad, obwohl ich das viel zu anstrengend finde. · e*) …vorsichtig sein, damit man nicht ausrutscht.",
rule:"<div class=rbox>weil (Grund) · wenn (Bedingung) · sodass (Folge) · obwohl (Gegensatz) · damit (Zweck) → alle NS</div>"},

{sub:"Satzgefüge – Sport und Trinken",type:"self",
q:"Bilden Sie mit Hilfe der Sätze und der vorgegebenen Konjunktionen ein Satzgefüge und setzen Sie das Komma.",
sentences:[
  "a)  Eine ausreichende Menge an Wasser zu trinken, ist beim Sport wichtig. Der Körper ist sonst nicht lange belastbar. (weil)",
  "b)  Der Körper kann anstrengende Tätigkeiten leisten. Er wird mit ausreichend Wasser versorgt. (wenn)",
  "c)  Spezielle Sportgetränke sind bei Sportlern sehr beliebt. Sie sind sehr süß. (obwohl)",
  "d*)  Sportgetränke enthalten viel Zucker. Man soll diese Getränke nur in kleinen Mengen trinken. (weshalb)",
  "e*)  Der Mensch muss auch ohne Sport ausreichend trinken. Er fühlt sich wohl. (damit)"
],
model:"a) …wichtig, weil der Körper sonst nicht lange belastbar ist. · b) …leisten, wenn er mit Wasser versorgt wird. · c) …beliebt, obwohl sie sehr süß sind. · d*) …enthalten viel Zucker, weshalb man sie nur in kleinen Mengen trinken soll. · e*) …ausreichend trinken, damit er sich wohl fühlt.",
rule:"<div class=rbox>weshalb (Konsequenz/Folge) · weil/wenn/obwohl/damit → alle NS, Verb am Ende</div>"},

{sub:"Satzgefüge IV – gemischt",type:"self",
q:"Bilden Sie mit Hilfe der Sätze und der vorgegebenen Konjunktionen ein Satzgefüge.",
sentences:[
  "a)  Der Tag verging schnell. Wir hatten viel zu erledigen. (da)",
  "b)  Er bereitet sich gut auf den Beruf vor. Er sucht sich einen passenden Praktikumsplatz. (indem)",
  "c)  Ich informiere dich. Ich weiß die Ankunftszeit. (sobald)",
  "d*)  Sie wird dir helfen. Sie ist in der Lage dazu. (falls)",
  "e*)  Sie besucht die Tanzschule. Ihre Freundin geht zum Musikunterricht. (während)"
],
model:"a) Der Tag verging schnell, da wir viel zu erledigen hatten. · b) Er bereitet sich gut auf den Beruf vor, indem er sich einen passenden Praktikumsplatz sucht. · c) Ich informiere dich, sobald ich die Ankunftszeit weiß. · d*) Sie wird dir helfen, falls sie in der Lage dazu ist. · e*) Sie besucht die Tanzschule, während ihre Freundin zum Musikunterricht geht.",
rule:"<div class=rbox>da · indem · sobald · falls · während → alle NS, Verb am Ende</div>"},

{sub:"Satzgefüge + Wortbildung (Komposita 1)",type:"self",
q:"Bilden Sie Satzgefüge.\nSetzen Sie außerdem die folgenden Begriffe richtig zusammen (mit oder ohne Fugenelement):\nReinigung + Kraft; Spiel + Platz; Maschine + Bau; Fan + Club",
sentences:[
  "a)  Der Bus verspätete sich. Ich kam zu spät. (sodass)",
  "b)  Er isst Eis. Er hat darauf Appetit. (weil)",
  "c)  Ich kaufe mir neue Schuhe. Ich habe das Geld dafür gespart. (sobald)",
  "d*)  Es geht ihr gut. Ich kann es beurteilen. (soweit)",
  "e*)  Er hat blondes Haar. In seiner Familie sind alle dunkelhaarig. (obwohl)",
  "Komposita: Reinigung+Kraft / Spiel+Platz / Maschine+Bau / Fan+Club"
],
model:"a) …verspätete sich, sodass ich zu spät kam. · b) …isst Eis, weil er Appetit darauf hat. · c) …kaufe mir Schuhe, sobald ich das Geld gespart habe. · d*) …geht ihr gut, soweit ich es beurteilen kann. · e*) …blondes Haar, obwohl alle dunkelhaarig sind.\nKomposita: Reinigungskraft(-s-) / Spielplatz(∅) / Maschinenbau(-n-) / Fanclub(∅)",
rule:"<div class=rbox>Fugenelement: Reinigung+s+Kraft · Maschine+n+Bau · ohne: Spielplatz, Fanclub</div>"},

{sub:"Satzgefüge + Wortbildung (Komposita 2)",type:"self",
q:"Setzen Sie die folgenden Begriffe richtig zusammen:\nGeburtstag + Feier; Keller + Tür; Hals + Kette; Tasche + Tuch",
sentences:[
  "Komposita: Geburtstag+Feier / Keller+Tür / Hals+Kette / Tasche+Tuch"
],
model:"Geburtstagsfeier(-s-) / Kellertür(∅) / Halskette(∅) / Taschentuch(∅)",
rule:"<div class=rbox>Geburtstag+<span class=hl>s</span>+Feier → Geburtstagsfeier · Keller/Hals/Tasche: kein Fugenelement</div>"}

]},

// ── 7: WORTSCHATZ ────────────────────────────────────────────────
{id:"bbr_wortschatz",title:"Wortschatz",emoji:"📖",color:"#be185d",qs:[

{sub:"Stilebenen I – Tabelle einordnen",type:"sort",
q:"Notieren Sie die Wörter der unterschiedlichen Stilebenen in die passende Spalte der Tabelle.\n(z. B. Penne | Schule | Lehranstalt)",
wordbox:"latschen  verschwenden  schreiten  Bude  vergeuden  gehen  Gemach  Zimmer  verpulvern",
rows:["latschen","verschwenden","schreiten","Bude","vergeuden","gehen","Gemach","Zimmer","verpulvern"],
cols:["umgangssprachlich","Standardsprache","gehoben"],
correct:[0,1,2,0,2,1,2,1,0],
model:"umgangssprachlich: latschen / verpulvern / Bude · Standard: gehen / verschwenden / Zimmer · gehoben: schreiten / vergeuden / Gemach",
rule:"<div class=rbox><span class=hl>Umgangssprache</span>: salopp/informell · <span class=hl>Standard</span>: neutral · <span class=hl>gehoben</span>: formell/literarisch</div>"},

{sub:"Wortbedeutung / Homonyme I",type:"self",
q:"Schreiben Sie für die jeweils markierten Begriffe die passende Bedeutung aus dem Kasten.",
wordbox:"Gegenstand mit Sprossen oder Stufen, Schraube, schlechte Angewohnheit, Person, Fahrzeug, Führungsperson",
sentences:[
  "a)  Die *Mutter* kocht das Essen.",
  "b)  Er schraubte die *Mutter* fest.",
  "c)  Er konnte sein *Laster* nicht ablegen.",
  "d)  Der *Laster* ist schwer beladen.",
  "e)  Der *Leiter* verteilte die Aufgaben während der Konferenz.",
  "f)  Zum Streichen der Decke braucht man eine *Leiter*."
],
model:"a) Person · b) Schraube · c) schlechte Angewohnheit · d) Fahrzeug · e) Führungsperson · f) Gegenstand mit Sprossen oder Stufen",
rule:"<div class=rbox><span class=hl>Homonym</span>: gleiche Schreibweise, verschiedene Bedeutungen – Kontext entscheidet!</div>"},

{sub:"Fremdwörter I – Lückentext (*)",type:"fill",
q:"(*) Ergänzen Sie die Sätze jeweils mit einem passenden Fremdwort aus den Vorgaben.",
wordbox:"panieren – dividieren – parodieren – trainieren",
sentences:[
  "a)  Fleisch kann man gut ________________ .",
  "b)  Im Sommer kann man auch im Freibad ________________ ."
],
model:"a) panieren · b) trainieren",
rule:"<div class=rbox>panieren: in Paniermehl wälzen · dividieren: teilen · parodieren: imitieren/nachahmen · trainieren: üben</div>"},

{sub:"Stilebenen II – Tabelle einordnen",type:"sort",
q:"Notieren Sie die Wörter der unterschiedlichen Stilebenen in die passende Spalte der Tabelle.\n(z. B. Penne | Schule | Lehranstalt)",
wordbox:"futtern  Pferd  entwenden  Ross  speisen  Gaul  klauen  stehlen  essen",
rows:["futtern","Pferd","entwenden","Ross","speisen","Gaul","klauen","stehlen","essen"],
cols:["umgangssprachlich","Standardsprache","gehoben"],
correct:[0,1,2,2,2,0,0,1,1],
model:"umgangssprachlich: futtern / Gaul / klauen · Standard: essen / Pferd / stehlen · gehoben: speisen / Ross / entwenden",
rule:"<div class=rbox>Gleiche Bedeutung, unterschiedliche Stilebene – je nach Kontext wählen!</div>"},

{sub:"Wortbedeutung / Homonyme II",type:"self",
q:"Schreiben Sie für die jeweils unterstrichenen Begriffe die passende Bedeutung aus dem Kasten.",
wordbox:"Gebäude, Straßenbelag, Sicherungsobjekt, Tier, Wundschutzmittel, Sanitärobjekt",
sentences:[
  "a)  Eine Prinzessin wohnt in einem Schloss.",
  "b)  Das Fahrrad wird mit einem Schloss angeschlossen.",
  "c)  Die Wunde wurde mit einem Pflaster versorgt.",
  "d)  Der Hund betrat zum ersten Mal das Pflaster.",
  "e)  Der Hahn kräht jeden Morgen.",
  "f)  Der Hahn an der Badewanne tropft."
],
model:"a) Gebäude · b) Sicherungsobjekt · c) Wundschutzmittel · d) Straßenbelag · e) Tier · f) Sanitärobjekt",
rule:"<div class=rbox>Homonyme: gleiche Schreibweise, völlig verschiedene Bedeutungen.</div>"},

{sub:"Fremdwörter II – Lückentext (*)",type:"fill",
q:"(*) Ergänzen Sie die Sätze jeweils mit einem passenden Fremdwort aus den Vorgaben.",
wordbox:"Spezialität – Effektivität – Kontinuität – Qualität",
sentences:[
  "a)  Italienische Nudeln sind eine internationale ________________ .",
  "b)  Beim Einkauf teurer Kleidung achtet man mehr auf ________________ ."
],
model:"a) Spezialität · b) Qualität",
rule:"<div class=rbox>Fremdwörter auf <span class=hl>-ität</span>: Spezialität (Besonderheit) · Qualität (Güte) · Effektivität (Wirksamkeit) · Kontinuität (Beständigkeit)</div>"}

]}

];
