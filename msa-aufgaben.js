// ================================================================
// MSA-AUFGABEN.JS – Übungsaufgaben MSA
// Thematisch zusammengefasst in 8 Oberthemen
// (Sprachwissen & Rechtschreibung)
// ================================================================

var MSA_THEMES = [

// ────────────────────────────────────────────────────────────────────
// 1. RECHTSCHREIBUNG
// ────────────────────────────────────────────────────────────────────
{id:'msa_rechtschreibung', title:'Rechtschreibung', emoji:'✏️', color:'#8f5a3d', qs:[

{sub:'Nominalisierung auflösen', type:'alt',
q:'<b>Formulieren Sie</b> den folgenden Satz so um, dass er keine Nominalisierung enthält.\n\n\u201eDie Männer begannen mit dem Aufbauen der Möbel.\u201c',
a:['Die Männer begannen, die Möbel aufzubauen.','Die Männer fingen an, die Möbel aufzubauen.'],
model:'Die Männer begannen, die Möbel aufzubauen.',
rule:'<div class=rbox>Nominalisierung: ein Verb wird zum Nomen (das Aufbauen \u2192 Verb aufbauen). Auflösen: das Nomen zurück ins Verb verwandeln und Satzkonstruktion anpassen.</div>'},

{sub:'Rechtschreibstrategie', type:'cross',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201egeräumig\u201c an der markierten Stelle richtig zu schreiben?\n(a) ä oder e?\n(b) g oder ch?',
rows:['(a) ä oder e?','(b) g oder ch?'],
cols:['Stammverwandtes Wort suchen','Wort verlängern','Wort in Silben zerlegen'],
correct:[0,1],
model:'(a) stammverwandtes Wort: Raum \u2192 ä · (b) verlängern: geräumige \u2192 g',
rule:'<div class=rbox>ä/e-Strategie: Stammwort mit a finden (Raum \u2192 räumig). g/ch am Wortende: verlängern (geräumige \u2192 bleibt g).</div>'},

{sub:'Rechtschreibstrategie', type:'cross',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201efahrlässig\u201c an der markierten Stelle richtig zu schreiben?\n(a) ss oder ß?\n(b) e oder ä?',
rows:['(a) ss oder ß?','(b) e oder ä?'],
cols:['Stammverwandtes Wort suchen','Wort verlängern','Wort in Silben zerlegen'],
correct:[1,0],
model:'(a) verlängern: fahrlässige \u2192 ss · (b) stammverwandtes Wort: lassen/Lässigkeit \u2192 ä',
rule:'<div class=rbox>ss/ß: verlängern (fahrlässige \u2192 ss nach kurzem Vokal). ä/e: Stammwort mit a finden (lassen \u2192 lässig).</div>'},

{sub:'Rechtschreibstrategie', type:'cross',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201eunabhängig\u201c an der markierten Stelle richtig zu schreiben?\n(a) U oder u?\n(b) g oder ch?',
rows:['(a) U oder u?','(b) g oder ch?'],
cols:['Stammverwandtes Wort suchen','Wort verlängern','Wort in Silben zerlegen'],
correct:[2,1],
model:'(a) Silben zerlegen: un-ab-hän-gig \u2192 kein Satzanfang \u2192 klein · (b) verlängern: unabhängige \u2192 g',
rule:'<div class=rbox>Groß/Klein im Wortinnern: Silben zerlegen zeigt, dass kein Satzanfang vorliegt \u2192 Kleinschreibung. g/ch: verlängern (unabhängige \u2192 g).</div>'},

{sub:'das oder dass', type:'cross',
q:'<b>Welche Schreibweise ist korrekt</b>?\n\n_____ er noch viel reisen will, steht schon fest.',
rows:['_____ er noch viel reisen will, steht schon fest.'],
cols:['das','dass'],
correct:[1],
model:'dass \u2013 leitet einen Subjektsatz ein; nicht durch \u201edieses/welches\u201c ersetzbar \u2192 Konjunktion.',
rule:'<div class=rbox>Probe: durch \u201edieses\u201c oder \u201ewelches\u201c ersetzbar? \u2192 \u201edas\u201c. Nicht ersetzbar \u2192 \u201edass\u201c (unterordnende Konjunktion).</div>'},

{sub:'das oder dass', type:'cross',
q:'<b>Welche Schreibweise ist korrekt</b>?\n\n_____ Streamingdienste Daten sammeln, ist kein Geheimnis.',
rows:['_____ Streamingdienste Daten sammeln, ist kein Geheimnis.'],
cols:['das','dass'],
correct:[1],
model:'dass \u2013 leitet Subjektsatz ein; nicht durch \u201edieses\u201c ersetzbar \u2192 Konjunktion.',
rule:'<div class=rbox>\u201eDass\u201c: Konjunktion, leitet Nebensatz ein. Probe: nicht durch \u201ewelches/dieses\u201c ersetzbar.</div>'},

{sub:'das oder dass', type:'cross',
q:'<b>Welche Schreibweise ist korrekt</b>?\n\n_____ Unordnung zur Belastung werden kann, zeigt eine Studie.',
rows:['_____ Unordnung zur Belastung werden kann, zeigt eine Studie.'],
cols:['das','dass'],
correct:[1],
model:'dass \u2013 leitet Subjektsatz ein; nicht durch \u201edieses\u201c ersetzbar \u2192 Konjunktion.',
rule:'<div class=rbox>\u201eDass\u201c: unterordnende Konjunktion. Probe: nicht durch \u201ewelches\u201c ersetzbar.</div>'},

{sub:'Groß-/Kleinschreibung', type:'cross',
q:'<b>Ordnen Sie</b> der Schreibung des unterstrichenen Wortes die jeweilige Rechtschreibregel zu.\n1. Verben werden kleingeschrieben.\n2. Nominalisierte Verben werden großgeschrieben.\n3. Nominalisierte Adjektive werden großgeschrieben.\n4. Nominalisierte Numerale werden großgeschrieben.',
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
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie der Schreibung der unterstrichenen Wörter die jeweilige Rechtschreibregel zuordnen.\nRegel: 1. Nomen werden großgeschrieben.  2. Adverbien werden kleingeschrieben.  3. Nominalisierte Adjektive werden großgeschrieben.',
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
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie der Schreibung der unterstrichenen Wörter die jeweilige Rechtschreibregel zuordnen.\nRegel: 1. Nomen werden großgeschrieben.  2. Adverbien werden kleingeschrieben.  3. Adjektive werden kleingeschrieben.',
rows:[
  '(a) Ich räume meinen Kleiderschrank VORMITTAGS ein.',
  '(b) Den Großteil des VORMITTAGS räumt sie auf.'
],
cols:['Adverb (klein)','Nomen (groß)'],
correct:[0,1],
model:'(a) vormittags \u2192 Adverb \u2192 klein · (b) des Vormittags \u2192 Nomen im Genitiv \u2192 groß',
rule:'<div class=rbox>\u201eVormittags\u201c als Zeitadverb \u2192 klein; \u201eder Vormittag\u201c als Nomen, hier im Genitiv \u2192 groß.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wendungen getrennt oder zusammengeschrieben werden.\n(a) In meiner Freizeit kann ich stundenlang / Stunden lang Serien anschauen.\n(b) Lass mich diese Serie noch zwei stundenlang / Stunden lang anschauen.',
rows:['(a)','(b)'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[1,0],
model:'(a) stundenlang \u2013 zusammen · (b) zwei Stunden lang \u2013 getrennt',
rule:'<div class=rbox>\u201eStundenlang\u201c als Adverb \u2192 zusammen. Mit einer Zahlenangabe (zwei Stunden lang) handelt es sich um eine Maßangabe \u2192 getrennt.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.\n(a) Die Autos sind ins Rutschen gekommen und zusammen gefahren / zusammengefahren.\n(b) Vor Schreck bin ich gleich zusammen gefahren / zusammengefahren.',
rows:['(a)','(b)'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[1,1],
model:'(a) zusammengefahren (= kollidiert) \u2013 zusammen · (b) zusammengefahren (= zusammengezuckt) \u2013 zusammen',
rule:'<div class=rbox>Bei übertragener oder erweiterter Bedeutung wird das Verb zusammengeschrieben. Beide Fälle haben eine übertragene Bedeutung.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.\n(a) Ich habe nicht vor, den Schrank ans Fenster zu stellen / zustellen.\n(b) Der Postbote kann den Brief nicht zu stellen / zustellen.',
rows:['(a)','(b)'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[0,1],
model:'(a) zu stellen \u2013 getrennt (Infinitiv mit zu) · (b) zustellen \u2013 zusammen (trennbares Verb)',
rule:'<div class=rbox>Trennbares Verb (zustellen = liefern, z.\u00a0B. \u201eer stellt zu\u201c) \u2192 zusammengeschrieben. Infinitiv mit zu bei nicht-trennbarem Verb \u2192 getrennt.</div>'},

{sub:'Doppelkonsonant', type:'self',
q:'<b>Notieren Sie</b> die Rechtschreibregel oder Rechtschreibstrategie, mit der die Schreibung des Doppelkonsonanten im folgenden Wort begründet wird.\n\nschnorren',
model:'Nach einem kurzen betonten Vokal (o in schnorren) wird der folgende Konsonant verdoppelt. Strategie: Silbentrennung zeigt schnor-ren \u2192 Doppel-r.',
rule:'<div class=rbox>Regel: Nach einem kurzen, betonten Vokal wird der folgende Konsonant verdoppelt. Die Silbentrennung (schnor-ren) macht dies sichtbar.</div>'},

{sub:'Strategie für \u201ehauptsächlich\u201c', type:'self',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201ehauptsächlich\u201c an der markierten Stelle richtig zu schreiben?\n\n(a) ä oder e?: hauptsächlich\n(b) g oder ch?: hauptsächlich',
model:'(a) ä oder e?: Ich suche ein stammverwandtes Wort → Sache → ä\n(b) g oder ch?: Ich verlängere das Wort → hauptsächliche → g bleibt g',
rule:'<div class=rbox>ä/e-Strategie: Stammwort mit a finden (Sache → sächlich). g/ch-Strategie: verlängern (hauptsächliche → g, nicht ch).</div>'},

{sub:'Strategie für \u201everständlich\u201c', type:'self',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201everständlich\u201c an der markierten Stelle richtig zu schreiben?\n\n(a) ä oder e?: verständlich\n(b) v oder V?: verständlich',
model:'(a) ä oder e?: Ich bilde ein stammverwandtes Wort → verstehen/Stand → ä\n(b) v oder V?: Ich erkenne ein typisches Adjektivsuffix (-lich) → kein Satzanfang, kein Nomen → klein (v)',
rule:'<div class=rbox>ä/e-Strategie: Stammwort \u201everstehen/Stand\u201c → ä. Groß-/Kleinschreibung: Das Suffix -lich macht es zum Adjektiv → Kleinschreibung.</div>'},

{sub:'Strategie für \u201eklapprig\u201c', type:'self',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201eklapprig\u201c an der markierten Stelle richtig zu schreiben?\n\n(a) pp oder p?: klapprig\n(b) g oder ch?: klapprig',
model:'(a) pp oder p?: Ich suche ein Wort aus der Wortfamilie und trenne es → klapp-rig / klapperig → Doppel-p wegen kurzem Vokal\n(b) g oder ch?: Ich verlängere das Wort → klapprige → g bleibt g',
rule:'<div class=rbox>Konsonantendopplung: kurzer betonter Vokal vor Konsonant → Doppelkonsonant (klapp-). g/ch: verlängern (klapprige → g).</div>'},

{sub:'Strategie für \u201eschnelllebig\u201c', type:'self',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201eschnelllebig\u201c an der markierten Stelle richtig zu schreiben?\n\n(a) ll oder l?: schnelllebig\n(b) g oder ch?: schnelllebig',
model:'(a) ll oder l?: Ich zerlege das Wort in seine Bestandteile → schnell + lebig → Doppel-l bleibt\n(b) g oder ch?: Ich verlängere das Wort → schnelllebige → g bleibt g',
rule:'<div class=rbox>Komposita: Bestandteile erhalten ihre Schreibung (schnell + lebig = schnelllebig). Kein Wegfall von Buchstaben auch bei Dreifachkonsonanz.</div>'},

{sub:'Strategie für \u201emittags\u201c', type:'self',
q:'<b>Welche Strategie wenden Sie an</b>, um das Wort \u201emittags\u201c an der markierten Stelle richtig zu schreiben?\n\n(a) M oder m?: mittags\n(b) t oder tt?: mittags',
model:'(a) M oder m?: Ich erkenne ein typisches Suffix für Adverbien (-ags/-tags) → Adverb → Kleinschreibung (m)\n(b) t oder tt?: Ich zerlege das Wort in seine Silben → mit-tags → Doppel-t',
rule:'<div class=rbox>Adverbien auf -tags/-ags (morgens, mittags, abends) werden kleingeschrieben. tt: Silbentrennung mit-tags zeigt den Stammkonsonanten-t + Anfangs-t des zweiten Bestandteils.</div>'},

{sub:'Groß-/Kleinschreibungsregel', type:'self',
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie der Schreibung der unterstrichenen Wörter die jeweilige Regel zuordnen.\nRegel: 1=Substantive groß  2=Verben klein  3=Nominalisierte Verben groß  4=Adverbien klein  5=Eigennamen groß\n\n(a) Auf dem Schiff findet am SONNTAG ein Gesangsabend statt.\n(b) Auf dem Schiff finden SONNTAGS Gesangsabende statt.',
model:'(a) Sonntag → Regel 1 (Substantiv → groß)\n(b) sonntags → Regel 4 (Adverb → klein)',
rule:'<div class=rbox>\u201eSonntag\u201c als Nomen (am Sonntag) → groß. \u201eSonntags\u201c als Zeitadverb (regelmäßige Wiederholung) → klein.</div>'},

{sub:'Groß-/Kleinschreibung morgen/Morgen', type:'cross',
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie der Schreibung des unterstrichenen Wortes die jeweilige Regel zuordnen.\nRegel: 1=Nomen groß  2=nom. Verben groß  3=Adverbien klein  4=Adjektive klein',
rows:['(a) Antonia hat sich am MORGEN entschieden, das Zimmer zu nehmen.','(b) Sie gibt MORGEN ihrer Freundin Bescheid.','(c) Ihre MORGENDLICHE Müdigkeit stößt auf das Unverständnis ihrer Mutter.'],
cols:['Nomen (Regel 1)','nom. Verb (Regel 2)','Adverb (Regel 3)','Adjektiv (Regel 4)'],
correct:[0,2,3],
model:'(a) Morgen → Nomen (Regel 1) · (b) morgen → Adverb (Regel 3) · (c) morgendliche → Adjektiv (Regel 4)',
rule:'<div class=rbox>\u201eder Morgen\u201c (Tageszeit) = Nomen → groß. \u201emorgen\u201c (= am nächsten Tag) = Adverb → klein. \u201emorgendlich\u201c = Adjektiv → klein.</div>'},

{sub:'Groß-/Kleinschreibung ankreuzen', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wörter groß- oder kleingeschrieben werden.',
rows:['(a) Die Firma ist PLEITE.','(b) Die ersten Flaschen kamen aus dem AMERIKANISCHEN.'],
cols:['Großschreibung','Kleinschreibung'],
correct:[1,0],
model:'(a) pleite → klein (prädikatives Adjektiv) · (b) Amerikanischen → groß (nominalisiertes Adjektiv)',
rule:'<div class=rbox>Prädikatives Adjektiv (ist pleite) → klein. Nominalisiertes Adjektiv mit Artikel (aus dem Amerikanischen) → groß.</div>'},

{sub:'Groß-/Kleinschreibung begründen', type:'self',
q:'<b>Begründen Sie</b> die Groß- bzw. Kleinschreibung der unterstrichenen Wörter.\n\n(a) Man kann SONNTAGS das Museum besichtigen.\n(b) Eines SONNTAGS war das Museum geschlossen.',
model:'(a) sonntags → klein, weil es als Adverb (regelmäßige Wiederholung: immer sonntags) verwendet wird.\n(b) Sonntags → groß, weil es als Nomen im Genitiv (eines Sonntags = an einem bestimmten Sonntag) verwendet wird.',
rule:'<div class=rbox>\u201eSonntags\u201c (Adverb, regelmäßig) → klein. \u201eeines Sonntags\u201c (Genitivform des Nomens \u201eSonntag\u201c) → groß.</div>'},

{sub:'Groß-/Kleinschreibungsregel', type:'cross',
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie der Schreibung des unterstrichenen Wortes die jeweilige Regel zuordnen.\nRegel: 1=Nomen groß  2=nom. Verb groß  3=Adjektiv klein  4=Ableitung von geogr. Name auf -er groß',
rows:['(a) Diese Nächte sind durchdrungen von unserem FLÜSTERN.','(b) Ein AMERIKANISCHER Forscher sieht das Gehirn als zentrales Organ.'],
cols:['Nomen (1)','nom. Verb (2)','Adjektiv (3)','Ableitung geogr. Name -er (4)'],
correct:[1,2],
model:'(a) Flüstern → nom. Verb (Regel 2) · (b) amerikanischer → Adjektiv (Regel 3, klein)',
rule:'<div class=rbox>Nominalisiertes Verb (das Flüstern) → groß (Regel 2). \u201eAmerikanisch\u201c ist ein Adjektiv (abgeleitet von Eigenname, endet auf -isch) → klein (Regel 3).</div>'},

{sub:'Groß-/Kleinschreibung', type:'cross',
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie der Schreibung des unterstrichenen Wortes die jeweilige Regel zuordnen.\nRegel: 1=Nomen groß  2=nom. Adjektiv groß  3=Eigenname groß  4=Adjektiv klein',
rows:['(a) Den Rucksack gibt es in DUNKELBLAU.','(b) Das Logo zeigt einen ARKTISCHEN Fuchs.'],
cols:['Nomen (1)','nom. Adjektiv (2)','Eigenname (3)','Adjektiv (4)'],
correct:[1,3],
model:'(a) Dunkelblau → nom. Adjektiv (Regel 2) · (b) arktischen → Adjektiv (Regel 4, klein)',
rule:'<div class=rbox>\u201eIn Dunkelblau\u201c = das Adjektiv ist nominalisiert (nach Präposition) → groß. \u201earktisch\u201c = attributives Adjektiv → klein.</div>'},

{sub:'Pronomen Groß-/Kleinschreibung', type:'self',
q:'In den folgenden Sätzen wird das unterstrichene Pronomen einmal groß- und einmal kleingeschrieben. Begründen Sie die unterschiedliche Schreibweise.\n\n(a) Sie betrügen IHREN Sohn.\n(b) Sie hat IHREN Sohn betrogen.',
model:'(a) Ihren → groß, weil es die Höflichkeitsform (Anrede-Sie/Ihr) ist.\n(b) ihren → klein, weil es das Possessivpronomen der 3. Person Singular (sie = die Frau) ist.',
rule:'<div class=rbox>Das Höflichkeitspronomen \u201eSie/Ihr/Ihnen\u201c wird immer großgeschrieben. Das Possessivpronomen \u201eihr/ihren/ihres\u201c (3. Person) wird kleingeschrieben.</div>'},

{sub:'Groß-/Kleinschreibung Superlativ', type:'self',
q:'<b>Erklären Sie</b>, warum die unterstrichenen Wörter groß- bzw. kleingeschrieben werden müssen.\n\n(a) Was ist das SCHÖNSTE am Zirkus?\n(b) Der Applaus ist für uns am SCHÖNSTEN.',
model:'(a) das Schönste → groß, weil das Adjektiv \u201eschön\u201c nominalisiert ist (Substantivierung durch Artikel \u201edas\u201c).\n(b) am schönsten → klein, weil es ein Superlativ in einer festen Wendung (am + Superlativ) ist \u2013 kein Nomen.',
rule:'<div class=rbox>\u201eDas Schönste\u201c = nominalisiertes Adjektiv → groß. \u201eAm schönsten\u201c = Superlativ des Adjektivs in fester Konstruktion → klein.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.',
rows:['(a) Antonias Mutter hat nicht die Absicht, für das Zimmer zu zahlen / zuzahlen.','(b) Antonias Mutter möchte nicht für das Zimmer zu zahlen / zuzahlen.','(c) Antonia muss ihren ganzen Mut zusammennehmen / zusammen nehmen.'],
cols:['getrennt','zusammen'],
correct:[0,0,1],
model:'(a) zu zahlen \u2013 getrennt (Infinitiv mit zu) · (b) zu zahlen \u2013 getrennt (Infinitiv mit zu) · (c) zusammennehmen \u2013 zusammen (trennbares Verb)',
rule:'<div class=rbox>\u201eZu + Infinitiv\u201c bei einfachen Verben (zahlen) → getrennt. Trennbare Verben (zusammennehmen, zumachen) → zusammen im Infinitiv.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wendungen getrennt oder zusammengeschrieben werden.',
rows:['(a) Beim Grillen ist das Fleisch regelmäßig zu wenden / zuwenden.','(b) Gleichzeitig muss er sich dem Gast zu wenden / zuwenden.'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[0,1],
model:'(a) zu wenden \u2013 getrennt (Infinitiv mit zu, einfaches Verb wenden = umdrehen) · (b) zuwenden \u2013 zusammen (trennbares Verb, sich jemandem zuwenden = sich richten an)',
rule:'<div class=rbox>\u201eWenden\u201c = umdrehen → Infinitiv mit zu (getrennt). \u201eZuwenden\u201c = sich richten an → trennbares Verb mit eigener Bedeutung → zusammen.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wendungen getrennt oder zusammengeschrieben werden.',
rows:['(a) Ich denke an die, die jetzt dem Ball hinterherjagen / hinterher jagen.','(b) Wir wollen hinterherjagen / hinterher jagen gehen.'],
cols:['Getrenntschreibung','Zusammenschreibung'],
correct:[1,1],
model:'(a) hinterherjagen \u2013 zusammen · (b) hinterherjagen \u2013 zusammen',
rule:'<div class=rbox>\u201eHinterherjagen\u201c ist ein trennbares Verb mit eigener Bedeutung (verfolgen) → immer zusammengeschrieben.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.',
rows:['(a) Vielen Gestressten wird es schwerfallen / schwer fallen, ihr Leben zu ändern.','(b) Wir wollen noch auf der Brücke liegenbleiben / liegen bleiben.'],
cols:['getrennt','zusammen'],
correct:[1,1],
model:'(a) schwerfallen \u2013 zusammen (feste Verbindung, eigene Bedeutung) · (b) liegenbleiben \u2013 zusammen (feste Verbindung)',
rule:'<div class=rbox>\u201eSchwerfallen\u201c und \u201eliegenbleiben\u201c sind idiomatisierte Verbindungen mit eigener Bedeutung → Zusammenschreibung. Test: Die Bedeutung ist mehr als die Summe der Teile.</div>'},

{sub:'Getrennt-/Zusammenschreibung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Wörter getrennt geschrieben oder zusammengeschrieben werden.',
rows:['(a) Ich saß solange / so lange im Flugzeug, dass meine Füße kribbelten.','(b) Ich könnte jederzeit / jeder Zeit weggehen.','(c) Ich konnte zusehen / zu sehen, wie die rechte Schlange schrumpfte.'],
cols:['zusammen','getrennt'],
correct:[1,0,0],
model:'(a) so lange \u2013 getrennt (Adverb + Adjektiv: so lange = derart lange) · (b) jederzeit \u2013 zusammen (festes Adverb) · (c) zusehen \u2013 zusammen (trennbares Verb)',
rule:'<div class=rbox>\u201eSolange\u201c (Konjunktion) vs. \u201eso lange\u201c (Adverb + Adjektiv). \u201eJederzeit\u201c = festes Adverb → zusammen. \u201eZusehen\u201c = trennbares Verb → zusammen.</div>'},

{sub:'Getrennt-/Zusammenschreibung begründen', type:'self',
q:'<b>Begründen Sie</b> die Getrennt- bzw. Zusammenschreibung der unterstrichenen Wörter.\n\n(a) Ich achtete darauf, kleine Schritte zu machen.\n(b) Ich musste nur noch die Augen zumachen.',
model:'(a) zu machen → getrennt: \u201ezu\u201c ist der Infinitiv-Marker, \u201emachen\u201c ein einfaches Verb ohne Verbzusatz → getrennt geschrieben.\n(b) zumachen → zusammen: \u201ezumachen\u201c ist ein trennbares Verb (Verbzusatz zu- + machen) mit eigener Bedeutung (schließen) → zusammengeschrieben.',
rule:'<div class=rbox>Infinitiv mit zu (zu + einfaches Verb) → getrennt. Trennbares Verb (Verbzusatz + Verb, z.B. zu|machen, auf|machen) im Infinitiv → zusammen.</div>'},

{sub:'das oder dass (Ketchup)', type:'self',
q:'\u201eDas\u201c oder \u201edass\u201c?\n\n(a) Kreuzen Sie an, welche Schreibweise im folgenden Satz richtig ist:\nEs gab ein Gesetz, ___ das Ketchuprezept schützen sollte.\n\n(b) Notieren Sie, mit welcher Strategie Sie Ihre Entscheidung begründen können.',
model:'(a) das (Relativpronomen)\n(b) Strategie: Ersatzprobe \u2013 ersetzbar durch \u201ewelches\u201c → das (Relativpronomen). Oder: Es steht ein Bezugsnomen davor (Gesetz), auf das das Pronomen verweist.',
rule:'<div class=rbox>Probe: \u201ewelches/dieses\u201c einsetzbar? → \u201edas\u201c (Relativpronomen oder Artikel). Nicht einsetzbar? → \u201edass\u201c (Konjunktion). Hier: \u201edas Gesetz, welches…\u201c → das.</div>'},

{sub:'das oder dass (Getränk)', type:'self',
q:'\u201eDas\u201c oder \u201edass\u201c?\n\n(a) Kreuzen Sie an, welche Schreibweise im folgenden Satz richtig ist:\nIch denke an das kalte Getränk, ___ die anderen jetzt genießen.\n\n(b) Notieren Sie, mit welcher Strategie Sie Ihre Entscheidung begründen können.',
model:'(a) das (Relativpronomen)\n(b) Ersatzprobe: \u201edas Getränk, welches die anderen genießen\u201c → ersetzbar durch \u201ewelches\u201c → das.',
rule:'<div class=rbox>Nach einem Nomen (das Getränk) leitet \u201edas\u201c einen Relativsatz ein → Relativpronomen. Probe: durch \u201ewelches\u201c ersetzbar → \u201edas\u201c.</div>'},

{sub:'das oder dass (Gesicht)', type:'self',
q:'\u201eDas\u201c oder \u201edass\u201c?\n\n(a) Kreuzen Sie an, welche Schreibweise im folgenden Satz richtig ist:\nIch erinnerte mich an ___ Gesicht, ___ ich nur vom Foto kannte.\n\n(b) Notieren Sie, mit welcher Strategie Sie Ihre Entscheidung begründen können.',
model:'(a) das Gesicht, das ich nur vom Foto kannte.\n(b) Beide Male \u201edas\u201c: Das erste ist Artikel vor \u201eGesicht\u201c, das zweite ist Relativpronomen (ersetzbar durch \u201ewelches\u201c).',
rule:'<div class=rbox>Artikel \u201edas\u201c vor Nomen. Relativpronomen \u201edas\u201c nach Nomen (Bezugswort: Gesicht). Beide Male: durch \u201ewelches/dieses\u201c ersetzbar → \u201edas\u201c.</div>'},

{sub:'das oder dass (Gummiwerk)', type:'self',
q:'\u201eDas\u201c oder \u201edass\u201c?\n\n(a) Kreuzen Sie an, welche Schreibweise im folgenden Satz richtig ist:\nEs ist das größte Gummiwerk, ___ in Ungarn gebaut wurde.\n\n(b) Notieren Sie, womit Sie Ihre Entscheidung für \u201edas\u201c oder \u201edass\u201c nach dem Komma begründen können.',
model:'(a) das (Relativpronomen)\n(b) Das Relativpronomen \u201edas\u201c bezieht sich auf \u201eGummiwerk\u201c und kann durch \u201ewelches\u201c ersetzt werden → \u201edas\u201c.',
rule:'<div class=rbox>Relativpronomen \u201edas\u201c leitet Relativsatz ein, der sich auf das Bezugsnomen \u201eGummiwerk\u201c bezieht. Probe: \u201edas größte Gummiwerk, welches in Ungarn gebaut wurde\u201c → \u201edas\u201c.</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 2. SATZBAU & KOMMA
// ────────────────────────────────────────────────────────────────────
{id:'msa_satzbau', title:'Satzbau & Komma', emoji:'📐', color:'#3d8f6b', qs:[

{sub:'Kommaregel', type:'cross',
q:'<b>Ordnen Sie</b> den Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Aufzählung  (2) Satzgefüge  (3) Satzreihe',
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
q:'<b>Ordnen Sie</b> den folgenden Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Satzgefüge  (2) Satzreihe  (3) Entgegenstellung  (4) Infinitivgruppe mit hinweisendem Wort',
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
q:'<b>Ordnen Sie</b> den folgenden Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Satzgefüge  (2) Satzreihe  (3) Infinitivgruppe mit Einleitewort',
rows:[
  '(a) Sie bückte sich, um die Hose aufzuheben.',
  '(b) Seine Mutter, die gerade aus dem Zimmer gehen wollte, blieb stehen.'
],
cols:['Satzgefüge / Relativsatz','Satzreihe','Infinitivgruppe mit um \u2026 zu'],
correct:[2,0],
model:'(a) Infinitivgruppe mit um \u2026 zu · (b) Satzgefüge (eingeschobener Relativsatz)',
rule:'<div class=rbox>Infinitivgruppen mit \u201eum zu\u201c, \u201eohne zu\u201c, \u201eanstatt zu\u201c werden durch Komma abgetrennt. Eingeschobene Relativsätze werden durch Kommas eingeschlossen.</div>'},

{sub:'Satzgefüge bilden', type:'alt',
q:'<b>Formulieren Sie</b> die folgenden Sätze als Satzgefüge.\n\n\u201eDer Schrank passt nicht in die Ecke. Ein Bücherregal muss abgebaut werden.\u201c',
a:['Da der Schrank nicht in die Ecke passt, muss ein Bücherregal abgebaut werden.','Weil der Schrank nicht in die Ecke passt, muss ein Bücherregal abgebaut werden.'],
model:'Da der Schrank nicht in die Ecke passt, muss ein Bücherregal abgebaut werden.',
rule:'<div class=rbox>Ein Satzgefüge verbindet zwei Aussagen durch einen Nebensatz. Kausale Konjunktionen: \u201eda\u201c, \u201eweil\u201c.</div>'},

{sub:'Gleichzeitigkeit ausdrücken', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz so um, dass er Gleichzeitigkeit zum Ausdruck bringt.\n\n\u201eNachdem ich aufgelegt hatte, schluckte ich aufsteigende Tränen hinunter.\u201c',
a:['Während ich auflegte, schluckte ich aufsteigende Tränen hinunter.','Als ich auflegte, schluckte ich aufsteigende Tränen hinunter.'],
model:'Während ich auflegte, schluckte ich aufsteigende Tränen hinunter.',
rule:'<div class=rbox>\u201eNachdem\u201c drückt Vorzeitigkeit aus. Gleichzeitigkeit: \u201ewährend\u201c (bei Dauer) oder \u201eals\u201c (bei einmaligem Ereignis in der Vergangenheit).</div>'},

{sub:'Satzgefüge umformen', type:'alt',
q:'<b>Formen Sie</b> das folgende Satzgefüge so um, dass der Nebensatz dem Hauptsatz nachgestellt ist.\n\nWie wir die Emojis wahrnehmen, muss noch genauer erforscht werden.',
a:['Es muss noch genauer erforscht werden, wie wir die Emojis wahrnehmen.'],
model:'Es muss noch genauer erforscht werden, wie wir die Emojis wahrnehmen.',
rule:'<div class=rbox>Beim vorangestellten Nebensatz steht das Verb im HS direkt nach dem Komma (Verb-Zweitstellung). Beim nachgestellten NS steht das finite Verb am Ende des NS.</div>'},

{sub:'Kommasetzung begründen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Sätzen die entsprechende Begründung für die Kommasetzung zu.\n(1) Satzreihe  (2) Aufzählung  (3) Infinitivgruppe mit hinweisendem Wort  (4) Apposition  (5) Satzgefüge',
rows:['(a) Sie trank einen Schluck Kaffee, nahm ihren Mut zusammen und fing an zu reden.','(b) Das war klar, ohne Internet würde sie ihr Leben wohl kaum ertragen.','(c) Sie hatte wieder Kontakt zu Katie, ihrer Schulfreundin, aufgenommen.'],
cols:['Satzreihe','Aufzählung','Infinitivgruppe m. hinweis. Wort','Apposition','Satzgefüge'],
correct:[1,0,3],
model:'(a) Aufzählung · (b) Satzreihe · (c) Apposition',
rule:'<div class=rbox>Aufzählung: gleichrangige Verben durch Komma. Satzreihe: zwei HS, das zweite ohne Konjunktion (oder mit aber/doch). Apposition: nachgestellte Erklärung in Kommas.</div>'},

{sub:'Hauptsatz notieren', type:'self',
q:'<b>Notieren Sie</b> aus dem folgenden Satz den Hauptsatz.\n\nUnd auch für Damen, die eigentlich nur Handtaschen tragen, gibt es mittlerweile passende Rucksackmodelle, die zum Beispiel vom deutschen Modelabel MCM produziert werden.',
model:'Und auch für Damen gibt es mittlerweile passende Rucksackmodelle.',
rule:'<div class=rbox>Der Hauptsatz bildet den Kernsatz ohne eingeschobene Relativsätze. Die Relativsätze \u201edie eigentlich nur Handtaschen tragen\u201c und \u201edie zum Beispiel … produziert werden\u201c sind Nebensätze.</div>'},

{sub:'Satzbaupläne ankreuzen', type:'mc',
q:'<b>Kreuzen Sie</b> an, welcher der unten aufgeführten Satzbaupläne auf den folgenden Satz zutrifft.\n\n\u201eMein Kopf tat weh, meine Muskeln machten schlapp, und in meinem Magen rumorte der Hunger.\u201c',
o:['HS, HS, HS','HS, NS, NS','HS, NS, HS','NS, HS, HS'],
c:0,
model:'HS, HS, HS',
rule:'<div class=rbox>Alle drei Teilsätze haben ein finites Verb an zweiter Stelle und kein unterordnendes Einleitewort → drei Hauptsätze in einer Satzreihe.</div>'},

{sub:'Hauptsätze notieren', type:'self',
q:'<b>Notieren Sie</b> die Hauptsätze des folgenden Satzgefüges.\n\nUnd die Erde zitterte, und die Betten, in denen die Männer lagen, zitterten auch.',
model:'Hauptsatz 1: Und die Erde zitterte\nHauptsatz 2: und die Betten zitterten auch',
rule:'<div class=rbox>Der eingeschobene Relativsatz \u201ein denen die Männer lagen\u201c gehört nicht zu den Hauptsätzen. Die HS-Grundstruktur bleibt: \u201edie Betten zitterten auch\u201c.</div>'},

{sub:'Kommasetzung begründen', type:'self',
q:'<b>Begründen Sie</b>, warum in den folgenden Sätzen ein Komma bzw. kein Komma steht.\n\n(a) Esperança hatte mandelförmige, strahlende Augen.\n(b) Auf meiner Zunge lag ein feiner, metallischer Geschmack.',
model:'(a) Komma, weil die Adjektive \u201emandelförmige\u201c und \u201estrahlende\u201c gleichrangig sind (Aufzählung gleichrangiger Adjektive).\n(b) Komma aus demselben Grund: \u201efein\u201c und \u201emetallisch\u201c sind gleichrangige Adjektive, die das Nomen direkt beschreiben.',
rule:'<div class=rbox>Gleichrangige Adjektive vor einem Nomen werden durch Komma getrennt. Probe: Einfügen von \u201eund\u201c möglich → Komma nötig.</div>'},

{sub:'Kommasetzung bei Apposition', type:'self',
q:'<b>Begründen Sie</b> die Kommasetzung im folgenden Satz:\n\nUnd Whitey, der Kleine aus Kansas, hat sich den Arm gebrochen.',
model:'Komma, weil \u201eder Kleine aus Kansas\u201c eine Apposition (nachgestellte Erläuterung) zu \u201eWhitey\u201c ist. Appositionen werden durch Kommas eingeschlossen.',
rule:'<div class=rbox>Apposition: nachgestellte Erläuterung zu einem Nomen, die denselben Kasus hat. Sie wird durch Kommas von den übrigen Satzgliedern abgetrennt.</div>'},

{sub:'Konjunktionen bestimmen', type:'cross',
q:'<b>Bestimmen Sie</b> in den folgenden Sätzen, was die unterstrichene Konjunktion jeweils ausdrückt.\n(1) Einräumung  (2) Bedingung  (3) zeitliches Verhältnis',
rows:['(a) Wenn man gemeinsame Ziele hat, fühlt man sich einer Gruppe zugehörig.','(b) Als der \u201eStressreport 2012\u201c veröffentlicht wurde, erfuhr niemand etwas wirklich Neues.','(c) Viele lassen häufiger Pausen ausfallen, obwohl diese nachweislich die Leistungsfähigkeit steigern.'],
cols:['Einräumung','Bedingung','zeitliches Verhältnis'],
correct:[1,2,0],
model:'(a) Bedingung (wenn) · (b) zeitliches Verhältnis (als) · (c) Einräumung (obwohl)',
rule:'<div class=rbox>Bedingung: wenn, falls, sofern. Zeitliches Verhältnis: als, während, nachdem, bevor. Einräumung: obwohl, obgleich, wenngleich \u2013 trotz des Widerspruchs gilt die Aussage.</div>'},

{sub:'Adverbialsätze zuordnen', type:'cross',
q:'Die folgenden Satzgefüge enthalten jeweils einen Adverbialsatz. Ordnen Sie entsprechend zu.\n(1) Temporalsatz  (2) Modalsatz  (3) Konditionalsatz',
rows:['(a) Sie ist so schön, dass ich sie manchmal nicht anschauen kann.','(b) Während draußen die Sonne scheint, sitze ich im Wartezimmer.','(c) Sie würde mir etwas von ihrer Luft abgeben, wenn sie könnte.'],
cols:['Temporalsatz','Modalsatz','Konditionalsatz'],
correct:[1,0,2],
model:'(a) Modalsatz (so … dass \u2013 Konsekutiv/Modal) · (b) Temporalsatz (während) · (c) Konditionalsatz (wenn)',
rule:'<div class=rbox>Temporalsatz: zeitliches Verhältnis (als, wenn, während, nachdem). Modalsatz: Art und Weise (so … dass, indem). Konditionalsatz: Bedingung (wenn, falls).</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 3. STILMITTEL & BILDSPRACHE
// ────────────────────────────────────────────────────────────────────
{id:'msa_stilmittel', title:'Stilmittel & Bildsprache', emoji:'🎭', color:'#8f3d3d', qs:[

{sub:'Metapher erklären', type:'self',
q:'Der folgende Satz enthält eine Metapher. Erklären Sie diese Metapher.\n\n\u201eDer Film fesselt die Zuschauer.\u201c',
model:'Das Verb \u201efesseln\u201c wird in übertragener Bedeutung verwendet: Der Film zieht die Zuschauer so stark in seinen Bann, als würde er sie buchstäblich mit Fesseln binden.',
rule:'<div class=rbox>Eine Metapher überträgt ein Wort aus seinem wörtlichen Bedeutungszusammenhang in einen bildlichen \u2013 ohne Vergleichswörter wie \u201ewie\u201c oder \u201eals\u201c.</div>'},

{sub:'Bedeutung erklären', type:'self',
q:'<b>Erklären Sie</b> die Bedeutung des folgenden Satzes.\n\n\u201eDas T-Shirt riecht streng.\u201c',
model:'Das T-Shirt hat einen unangenehm intensiven, schlechten Geruch \u2013 es riecht nach Schweiß.',
rule:'<div class=rbox>\u201eStreng riechen\u201c ist eine idiomatische Wendung für einen intensiven, üblen Körpergeruch.</div>'},

{sub:'Redewendung + Stilmittel: Bedeutung', type:'self',
q:'<b>Erklären Sie</b> die Bedeutung des folgenden Satzes.\n\n\u201eIch ließ den Satz in der Luft hängen.\u201c',
model:'Ich sprach den Satz an, ließ ihn aber unvollendet oder unbeantwortet stehen \u2013 ich gab keine abschließende Reaktion.',
rule:'<div class=rbox>\u201eIn der Luft hängen lassen\u201c bedeutet, etwas offen oder unbeantwortet zu lassen.</div>'},

{sub:'Redewendung + Stilmittel: Stilmittel', type:'mc',
q:'<b>Kreuzen Sie</b> das stilistische Mittel an, das in dem folgenden Satz verwendet wird.\n\n\u201eIch ließ den Satz in der Luft hängen.\u201c',
o:['Vergleich','Metapher','Personifikation','Ellipse'],
c:1,
model:'Metapher',
rule:'<div class=rbox>Metapher: bildlicher Ausdruck ohne Vergleichswort \u201ewie\u201c oder \u201eals\u201c. Der Satz hängt nicht wirklich in der Luft.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Sätzen das jeweils entsprechende sprachliche Mittel zu.\n(1) Alliteration  (2) Personifikation  (3) Ellipse  (4) Metapher  (5) Vergleich',
rows:['(a) Er beschäftigt sich mit den wirklich wichtigen Dingen.','(b) Ich mit Blockflöte an Weihnachten.','(c) Ich fühle mich wie ein Schirmständer.'],
cols:['Alliteration','Personifikation','Ellipse','Metapher','Vergleich'],
correct:[0,2,4],
model:'(a) Alliteration · (b) Ellipse · (c) Vergleich',
rule:'<div class=rbox>Alliteration: gleicher Anlaut aufeinanderfolgender Wörter (wirklich wichtigen). Ellipse: unvollständiger Satz (fehlendes Verb). Vergleich: mit \u201ewie\u201c oder \u201eals\u201c.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Sätzen das jeweils entsprechende sprachliche Mittel zu.\n(1) Alliteration  (2) Metapher  (3) Vergleich',
rows:['(a) Dann tauchte er in Paulas Duft ein.','(b) Tills Lieblingsspeise sind warme Wiener Würstchen.'],
cols:['Alliteration','Metapher','Vergleich'],
correct:[1,0],
model:'(a) Metapher · (b) Alliteration',
rule:'<div class=rbox>Metapher: \u201eeintauchen\u201c bildlich für \u201esich versenken in\u201c. Alliteration: warme Wiener Würstchen (gleicher Anlaut w).</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Beispielen die entsprechenden sprachlichen Mittel zu.\n(1) Ellipse  (2) Vergleich  (3) Metapher  (4) Alliteration',
rows:['(a) Das Gemüse war weniger beliebt als das Gebäck.','(b) Er kredenzt Cracker, Kekse und Karotten.','(c) Und Kinderspielzeug.'],
cols:['Ellipse','Vergleich','Metapher','Alliteration'],
correct:[1,3,0],
model:'(a) Vergleich · (b) Alliteration · (c) Ellipse',
rule:'<div class=rbox>Vergleich mit \u201eals\u201c. Alliteration: Cracker, Kekse, Karotten (gleicher Anlaut k). Ellipse: kein Verb, unvollständiger Satz.</div>'},

{sub:'Wertungswort & Erläuterung', type:'self',
q:'<b>Notieren Sie</b>\n(a) das Wort, das im folgenden Satz eine Wertung zum Ausdruck bringt,\n(b) den Teil des Satzes, der eine nähere Erläuterung enthält.\n\n\u201eFür die Generation, die jetzt heranwächst, wird das leider nicht mehr gelten.\u201c',
model:'(a) Wertungswort: leider\n(b) Erläuterung: die jetzt heranwächst',
rule:'<div class=rbox>Wertungswörter (wie \u201eleider\u201c, \u201eglücklicherweise\u201c) drücken die Haltung des Sprechers aus. Relativsätze dienen oft als nähere Erläuterung zu einem Nomen.</div>'},

{sub:'Einschränkung entfernen', type:'alt',
q:'<b>Formulieren Sie</b> den folgenden Satz so um, dass er keine Einschränkung enthält.\n\n\u201eEigentlich habe ich die ganze Zeit positives Feedback bekommen.\u201c',
a:['Ich habe die ganze Zeit positives Feedback bekommen.'],
model:'Ich habe die ganze Zeit positives Feedback bekommen.',
rule:'<div class=rbox>Einschränkungswörter wie \u201eeigentlich\u201c, \u201efast\u201c oder \u201emeistens\u201c schwächen eine Aussage ab. Durch Weglassen entsteht eine uneingeschränkte Aussage.</div>'},

{sub:'Alliterationen notieren', type:'self',
q:'<b>Notieren Sie</b> aus dem folgenden Satz zwei Alliterationen.\n\nSie sendet wortlos einen wütenden, runden, roten Smiley.',
model:'(1) wortlos / wütenden (w\u2013w)\n(2) runden / roten (r\u2013r)',
rule:'<div class=rbox>Alliteration: gleicher Anlaut bei aufeinanderfolgenden oder benachbarten Wörtern (Stabreim). Stilistisches Mittel zur Betonung und Klangwirkung.</div>'},

{sub:'Sprachliches Mittel notieren', type:'mc',
q:'<b>Notieren Sie</b> ein im folgenden Satz verwendetes sprachliches Mittel.\n\nSie sieht aus wie eine Millionärin.',
o:['Vergleich','Metapher','Personifikation','Alliteration'],
c:0,
model:'Vergleich (Vergleichswort: wie)',
rule:'<div class=rbox>Vergleich: expliziter Vergleich mit \u201ewie\u201c oder \u201eals\u201c. Metapher: bildlicher Ausdruck OHNE Vergleichswort. Hier: \u201ewie\u201c → Vergleich.</div>'},

{sub:'Ellipse vervollständigen', type:'self',
q:'<b>Ergänzen Sie</b> die folgende Ellipse zu einem vollständigen Satz.\n\nIdeal für Lilienthal, der Flugversuche unternahm.',
model:'(Das war) ideal für Lilienthal, der Flugversuche unternahm.',
rule:'<div class=rbox>Ellipse: unvollständiger Satz, bei dem ein Satzteil ausgelassen wurde, der aus dem Kontext erschlossen werden kann. Ergänzung: fehlendes Verb/Subjekt hinzufügen.</div>'},

{sub:'Bildsprachlich ankreuzen', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die folgenden Sätze einen bildsprachlichen oder nicht bildsprachlichen Ausdruck enthalten.',
rows:['(a) Ein Teil des Bergrückens wurde abgetragen.','(b) Er trug das Modell auf dem Rücken.','(c) Er spinnt den Faden für das Leinentuch.','(d) Er spinnt sich eine Geschichte zusammen.'],
cols:['bildsprachlich','nicht bildsprachlich'],
correct:[0,1,1,0],
model:'(a) bildsprachlich (Bergrücken \u2013 Rücken als Metapher) · (b) nicht bildsprachlich · (c) nicht bildsprachlich · (d) bildsprachlich (spinnt eine Geschichte)',
rule:'<div class=rbox>Bildsprachlich = figürlich/metaphorisch. \u201eBergrücken\u201c nutzt \u201eRücken\u201c übertragen für Bergkamm. \u201eSich etwas spinnen\u201c = erfinden (übertragene Bedeutung).</div>'},

{sub:'Metapher erklären', type:'self',
q:'<b>Erklären Sie</b> die metaphorische Bedeutung der folgenden Wortgruppe.\n\nein Meer aus Gesichtern',
model:'Viele Gesichter, die sich wie ein endloses, weites Meer vor jemandem ausbreiten. Die Masse der Menschen wird mit dem uferlos erscheinenden Ozean verglichen.',
rule:'<div class=rbox>Metapher: Das Bild des Meeres wird übertragen auf die Masse von Menschen. Beide haben Gemeinsamkeiten: Weite, Unübersichtlichkeit, Bewegung.</div>'},

{sub:'Ellipse vervollständigen', type:'alt',
q:'<b>Vervollständigen Sie</b> den folgenden Satz so, dass er keine Ellipse enthält.\n\nSie sind im \u201eFlow\u201c, so der Begriff.',
a:['Sie sind im \u201eFlow\u201c, so heißt der Begriff.','Sie sind im \u201eFlow\u201c, so wird der Begriff genannt.'],
model:'Sie sind im \u201eFlow\u201c, so heißt der Begriff.',
rule:'<div class=rbox>Ellipse: Das finite Verb fehlt. \u201eSo der Begriff\u201c → \u201eso heißt/nennt sich/wird genannt der Begriff\u201c.</div>'},

{sub:'Stilmittel notieren', type:'self',
q:'<b>Notieren Sie</b> zwei Stilmittel, die in dem folgenden Beispiel enthalten sind:\n\nLucindas Bett ist kein Bett. Es ist eine Höhle. Es ist ein Boot. Es ist ein Höhlenboot.',
model:'(1) Anapher: Die Wiederholung von \u201eEs ist\u201c am Satzbeginn.\n(2) Metapher: Das Bett wird als Höhle, Boot und Höhlenboot bezeichnet.',
rule:'<div class=rbox>Anapher: Wiederholung desselben Wortes/Satzbaus am Satzanfang. Metapher: Übertragung ohne Vergleichswort (Bett = Höhle, Bett = Boot).</div>'},

{sub:'Sprachliche Mittel notieren', type:'self',
q:'<b>Notieren Sie</b> zwei sprachliche Mittel aus dem folgenden Satz.\n\nSie schleppten Taschen oder Tüten wie in den 80er Jahren, zerrissen und zerfetzt.',
model:'(1) Vergleich: \u201ewie in den 80er Jahren\u201c\n(2) Alliteration: \u201ezerrissen und zerfetzt\u201c (z\u2013z)',
rule:'<div class=rbox>Vergleich: expliziter Vergleich mit \u201ewie\u201c. Alliteration: gleicher Anlaut mehrerer aufeinanderfolgender Wörter.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den Beispielen die entsprechenden sprachlichen Mittel zu.\n(1) Personifikation  (2) Vergleich  (3) Metapher  (4) Hyperbel  (5) Anapher',
rows:['(a) Zwei Schlangen hatten sich gebildet.','(b) Sie schwirrte wie ein Schmetterling umher.','(c) Der Zeitungsartikel hatte nur die halbe Wahrheit gesagt.','(d) Du kannst gehen. Du bist hier.'],
cols:['Personifikation','Vergleich','Metapher','Hyperbel','Anapher'],
correct:[2,1,0,4],
model:'(a) Metapher (Schlangen für Warteschlangen) · (b) Vergleich (wie) · (c) Personifikation (Artikel \u201esagt\u201c) · (d) Anapher (Du … Du)',
rule:'<div class=rbox>Metapher: bildliche Übertragung (Schlange = Menschenschlange). Vergleich: mit \u201ewie\u201c. Personifikation: Vermenschlichung eines Objekts. Anapher: Wortwiederholung am Satzanfang.</div>'},

{sub:'Bildsprachlich ankreuzen', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob in den folgenden Sätzen ein bildsprachlicher oder ein nicht bildsprachlicher Ausdruck vorhanden ist.',
rows:['Ein junger Beamter fischt den Hut vom Fußende.','Ein junger Beamter nimmt den Hut vom Fußende.','Ein junger Beamter greift den Hut vom Fußende.'],
cols:['bildsprachlich','nicht bildsprachlich'],
correct:[0,1,1],
model:'Satz 1 bildsprachlich (fischt = metaphorisch) · Sätze 2 und 3 nicht bildsprachlich',
rule:'<div class=rbox>\u201eFischen\u201c (angeln) in übertragener Bedeutung für \u201esuchen/greifen\u201c ist bildsprachlich. \u201eNehmen\u201c und \u201egreifen\u201c sind direkte/wörtliche Verben.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Beispielen die entsprechenden sprachlichen Mittel zu.\n(1) Personifikation  (2) Vergleich  (3) Lautmalerei  (4) Metapher',
rows:['(a) Über die Straße zischt ein Automobil.','(b) Die belegten Brötchen haben ein freundliches Aussehen.','(c) Er schneidet die Geldrollen auf wie Salami.'],
cols:['Personifikation','Vergleich','Lautmalerei','Metapher'],
correct:[2,0,1],
model:'(a) Lautmalerei (zischt) · (b) Personifikation (freundliches Aussehen der Brötchen) · (c) Vergleich (wie Salami)',
rule:'<div class=rbox>Lautmalerei (Onomatopoesie): Wort ahmt Geräusch nach (zischen). Personifikation: menschliche Eigenschaft auf Gegenstand übertragen. Vergleich: mit \u201ewie\u201c.</div>'},

{sub:'Klimax bestimmen', type:'self',
q:'Eine Klimax ist eine stufenweise Steigerung.\n<b>Entscheiden Sie</b>, ob es sich bei der folgenden Aussage um eine Klimax handelt, und begründen Sie.\n\nAuf die Dächer fielen laut die ersten Regentropfen, mehrten sich, begannen zu trommeln.',
model:'Ja, es handelt sich um eine Klimax. Die Steigerung verläuft von einzelnen Tropfen (fallen) über zunehmende Menge (mehren sich) bis zum lauten Trommeln \u2013 eine stufenweise Intensivierung.',
rule:'<div class=rbox>Klimax: aufsteigende Steigerung in mindestens drei Stufen (Trias). Jede Stufe ist intensiver als die vorherige.</div>'},

{sub:'Vergleich formulieren', type:'alt',
q:'<b>Formulieren Sie</b> das unterstrichene Wort als Vergleich.\n\neine zangengroße Pinzette',
a:['eine Pinzette, so groß wie eine Zange','eine Pinzette, die so groß ist wie eine Zange'],
model:'eine Pinzette, so groß wie eine Zange',
rule:'<div class=rbox>Komposita mit Maßangaben (zangengroß, fingerlang) können als expliziter Vergleich mit \u201ewie\u201c umformuliert werden.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Beispielen das entsprechende Stilmittel zu.\n(1) Anapher  (2) Ellipse  (3) Vergleich  (4) Metapher',
rows:['(a) Und dann wenden Sie sich nach links, und dann gehen Sie weiter bis zur Kreuzung.','(b) Er hatte Feuer des Glücks in den Augen.'],
cols:['Anapher','Ellipse','Vergleich','Metapher'],
correct:[0,3],
model:'(a) Anapher (Und dann … und dann) · (b) Metapher (Feuer des Glücks)',
rule:'<div class=rbox>Anapher: Wiederholung desselben Ausdrucks am Satzanfang. Metapher: \u201eFeuer\u201c steht übertragen für Leidenschaft/Glück.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Sätzen das jeweils entsprechende Stilmittel zu.\n(1) Neologismus  (2) Vergleich  (3) Personifikation',
rows:['(a) Vielleicht war es eine Nasenhalluzination.','(b) Als wäre ich dieser Typ aus der Bibel, spurtete ich los.'],
cols:['Neologismus','Vergleich','Personifikation'],
correct:[0,1],
model:'(a) Neologismus (Nasenhalluzination = neu erfundenes Wort) · (b) Vergleich (Als wäre ich …)',
rule:'<div class=rbox>Neologismus: neu gebildetes Wort (Nasenhalluzination existiert nicht im Standardwortschatz). Vergleich: \u201eAls wäre ich\u201c = irrealer Vergleich mit Konjunktiv II.</div>'},

{sub:'Stilmittel zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den folgenden Beispielen das entsprechende Stilmittel zu.\n(1) Ellipse  (2) Vergleich  (3) Lautmalerei',
rows:['(a) Und zwar als Gefangene.','(b) Über mir knatterten die Segel im Wind.'],
cols:['Ellipse','Vergleich','Lautmalerei'],
correct:[0,2],
model:'(a) Ellipse (unvollständiger Satz, kein Verb) · (b) Lautmalerei (knatterten)',
rule:'<div class=rbox>Ellipse: Auslassung eines Satzteils. Lautmalerei: das Wort \u201eknattern\u201c ahmt das Geräusch von flatternden Segeln nach.</div>'},



{sub:'Redewendung erklären', type:'self',
q:'<b>Erklären Sie</b> die Bedeutung der Redewendung \u201eeine Welle machen\u201c.',
model:'Aufsehen erregen, viel Lärm um etwas machen, eine starke Reaktion hervorrufen.',
rule:'<div class=rbox>Redewendungen haben eine übertragene Bedeutung, die sich nicht aus den Einzelwörtern erschließt.</div>'},

{sub:'Redewendung erklären', type:'self',
q:'<b>Erklären Sie</b> die Bedeutung der markierten Redewendung im folgenden Satz.\n\n\u201eVielen Menschen wächst ihr Besitz [über den Kopf].\u201c',
model:'Der Besitz wird zu viel und zu groß, sodass die Menschen die Kontrolle darüber verlieren \u2013 er überfordert sie.',
rule:'<div class=rbox>\u201eJemandem über den Kopf wachsen\u201c = etwas wird zu groß oder zu viel, man kann es nicht mehr bewältigen.</div>'},

{sub:'Redewendung erklären', type:'self',
q:'<b>Erklären Sie</b> die metaphorische Bedeutung der Redewendung \u201ewie ein Wasserfall reden\u201c.',
model:'Sehr viel, sehr schnell und pausenlos reden, ohne anderen die Möglichkeit zu geben, etwas zu sagen.',
rule:'<div class=rbox>Der Vergleich mit einem Wasserfall (ununterbrochen fließendes Wasser) steht bildlich für das endlose Reden.</div>'},

{sub:'Redewendung erklären', type:'self',
q:'<b>Notieren Sie</b> die Bedeutung der Redewendung \u201ekeine Rolle spielen\u201c.',
model:'Etwas ist unwichtig, bedeutungslos \u2013 es hat keinen Einfluss auf die Situation.',
rule:'<div class=rbox>\u201eKeine Rolle spielen\u201c = keine Bedeutung haben, nicht relevant sein.</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 4. WORTARTEN & WORTBILDUNG
// ────────────────────────────────────────────────────────────────────
{id:'msa_wortarten', title:'Wortarten & Wortbildung', emoji:'🔤', color:'#3d6b8f', qs:[

{sub:'Wortart bestimmen', type:'cross',
q:'<b>Bestimmen Sie</b> die Wortart des markierten Wortes.\n\n\u201eFür die Generation, [die] jetzt heranwächst, wird das leider nicht mehr gelten.\u201c',
rows:['[die]'],
cols:['Artikel','Demonstrativpronomen','Relativpronomen'],
correct:[2],
model:'Relativpronomen; Bezugswort: Generation',
rule:'<div class=rbox>Das Relativpronomen leitet einen Relativsatz ein und bezieht sich auf das Nomen \u201eGeneration\u201c. Probe: Ersatz durch \u201ewelche\u201c möglich \u2192 Relativpronomen.</div>'},

{sub:'Bezugswort bestimmen', type:'self',
q:'<b>Notieren Sie</b> jeweils das Bezugswort des markierten Wortes.\n\n(a) \u201eEin Bäcker rührt den ganzen Tag [die] leckersten Teige.\u201c\n(b) \u201eDa stand die Kiste, [die] die Fotos enthielt.\u201c',
model:'(a) die \u2192 Teige\n(b) die \u2192 Kiste',
rule:'<div class=rbox>Das Bezugswort eines Pronomens ist das Nomen, auf das es sich bezieht. Es steht meistens direkt davor im Satz.</div>'},

{sub:'Adjektivfunktion bestimmen', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die unterstrichenen Adjektive prädikativ, attributiv oder adverbial verwendet werden.',
rows:['(a) Das Flugzeug sackte ruckartig tiefer.','(b) Wir setzten mit einem unsanften Ruck auf.'],
cols:['prädikativ','attributiv','adverbial'],
correct:[2,1],
model:'(a) ruckartig → adverbial (modifiziert Verb \u201esackte\u201c) · (b) unsanften → attributiv (modifiziert Nomen \u201eRuck\u201c)',
rule:'<div class=rbox>Attributiv: steht vor dem Nomen (flektiert). Prädikativ: steht nach sein/werden/bleiben. Adverbial: modifiziert ein Verb oder Adjektiv (nicht flektiert im Deutschen).</div>'},

{sub:'Partizip umformen', type:'self',
q:'<b>Formen Sie</b> den folgenden Satz so um, dass er kein Partizip enthält.\n\nDas sind die Bildchen mit lachendem Mund.',
model:'Das sind die Bildchen mit einem Mund, der lacht. / Das sind die Bildchen, deren Mund lacht.',
rule:'<div class=rbox>Partizip I (lachend) in attributiver Funktion kann durch einen Relativsatz ersetzt werden: \u201eder lacht\u201c statt \u201elachend\u201c.</div>'},

{sub:'Partizip II Funktion', type:'cross',
q:'Das Partizip II kann unterschiedliche Funktionen erfüllen.\n<b>Kreuzen Sie</b> die Funktion in den folgenden Sätzen an.',
rows:['(a) Der Vorschlag führte zu einer erregten Diskussion.','(b) Die Gemüter sind erregt.','(c) Sie diskutieren erregt über den Vorschlag.'],
cols:['Teil des Prädikats','Attribut','Modalbestimmung (adverbial)'],
correct:[1,0,2],
model:'(a) Attribut (erregt modifiziert Diskussion) · (b) Teil des Prädikats (sind erregt) · (c) Modalbestimmung (adverbial, modifiziert diskutieren)',
rule:'<div class=rbox>Partizip II als Attribut: vor dem Nomen, flektiert. Als Prädikatsbestandteil: nach sein/werden. Als Adverbial: unflektiert, drückt Art und Weise aus.</div>'},

{sub:'Partizip I und II notieren', type:'self',
q:'<b>Notieren Sie</b> aus dem folgenden Satz jeweils ein Partizip I und ein Partizip II.\n\nMein Vater, einen glänzenden blauen Sportwagen mit heruntergeklapptem Verdeck fahrend, lächelt verzückt.',
model:'(a) Partizip I: fahrend (Partizip I von fahren)\n(b) Partizip II: heruntergeklapptem (Partizip II von herunterklappen)',
rule:'<div class=rbox>Partizip I: Verb + -end (fahrend = aktiv, gleichzeitig). Partizip II: ge- + Verbstamm + -(e)t oder ge- + Verbstamm + -en (heruntergeklappt).</div>'},

{sub:'Kasus bestimmen und begründen', type:'self',
q:'<b>Bestimmen Sie</b> jeweils den Kasus der unterstrichenen Wortgruppen und begründen Sie dessen Gebrauch.\n\n(a) Das Modell wird auf den Berg getragen.\n(b) Das Modell wird auf dem Berg aufgestellt.',
model:'(a) Akkusativ \u2013 wegen Richtung/Bewegung (Wohin?): \u201eauf + Akkusativ\u201c bei Bewegung zum Ziel.\n(b) Dativ \u2013 wegen Ort/Lage (Wo?): \u201eauf + Dativ\u201c bei Lageangabe ohne Bewegung.',
rule:'<div class=rbox>Zweiteilige Wechselpräpositionen (auf, in, an, über, unter, vor, hinter, neben, zwischen): Akkusativ bei Bewegung (wohin?), Dativ bei Ruhelage (wo?).</div>'},

{sub:'Wortart bestimmen', type:'cross',
q:'<b>Bestimmen Sie</b> in den folgenden Teilsätzen jeweils die Wortart des unterstrichenen Wortes.',
rows:['(a) Ihre Abneigung war vermutlich das Einzige,','(b) das sie gemeinsam hatten,','(c) und das war ihr klar.'],
cols:['Artikel','Demonstrativpronomen','Relativpronomen'],
correct:[0,2,1],
model:'(a) Artikel (das Einzige) · (b) Relativpronomen (das … hatten \u2013 leitet Relativsatz ein) · (c) Demonstrativpronomen (und das war \u2013 steht eigenständig)',
rule:'<div class=rbox>Artikel: steht vor Nomen. Relativpronomen: leitet Relativsatz ein, bezieht sich auf Nomen. Demonstrativpronomen: steht eigenständig, verweist auf Bekanntes.</div>'},

{sub:'Bezugswort des Demonstrativpronomens', type:'self',
q:'<b>Notieren Sie</b>, worauf die unterstrichenen Demonstrativpronomen im folgenden Beispiel jeweils hinweisen.\n\nMeine Beine bewegten sich. Sehr gut, wie die das hinkriegten.\n\n(a) die:\n(b) das:',
model:'(a) die → meine Beine\n(b) das → sich bewegen / das Bewegen der Beine',
rule:'<div class=rbox>Demonstrativpronomen weisen auf etwas Bekanntes zurück (Kataphora) oder voraus (Anaphora). Das Bezugswort steht meist im vorangegangenen Satz.</div>'},

{sub:'Pronomenart bestimmen', type:'cross',
q:'<b>Bestimmen Sie</b> die Art des jeweils unterstrichenen Pronomens.\n(1) Relativpronomen  (2) Possessivpronomen  (3) Personalpronomen  (4) Demonstrativpronomen',
rows:['(a) Deine Zebras sind weg.','(b) Dieser widerliche alte Hector Blaney …'],
cols:['Relativpronomen','Possessivpronomen','Personalpronomen','Demonstrativpronomen'],
correct:[1,3],
model:'(a) Deine → Possessivpronomen · (b) Dieser → Demonstrativpronomen',
rule:'<div class=rbox>Possessivpronomen: drückt Zugehörigkeit aus (mein, dein, sein, ihr …). Demonstrativpronomen: deutend/zeigend (dieser, jener, derselbe …).</div>'},



{sub:'Stammverwandte Wörter', type:'worttabelle',
q:'<b>Ergänzen Sie</b> die Tabelle, indem Sie stammverwandte Wörter bilden.',
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

{sub:'Ableitungen und Komposita sortieren', type:'cross',
q:'<b>Ordnen Sie</b> die folgenden Wörter in die Tabelle ein.\n\nfeststellen · zahlreich · verarbeiten · lesbar · ursprünglich · Schokokuss',
rows:['feststellen','zahlreich','verarbeiten','lesbar','ursprünglich','Schokokuss'],
cols:['Ableitung','Kompositum'],
correct:[1,1,0,0,0,1],
model:'Ableitungen: verarbeiten (ver-), lesbar (-bar), ursprünglich (ur-, -lich)\nKomposita: feststellen (fest+stellen), zahlreich (Zahl+reich), Schokokuss (Schoko+Kuss)',
rule:'<div class=rbox>Ableitung: Neues Wort durch Präfix (ver-, ur-) oder Suffix (-bar, -lich, -ung). Kompositum (Zusammensetzung): zwei oder mehr Wörter werden verbunden.</div>'},

{sub:'Bestimmungs- und Grundwort', type:'self',
q:'<b>Notieren Sie</b> von den folgenden Komposita jeweils das Bestimmungs- und das Grundwort.\n\n(a) Grashüpferkleid\n(b) Großstadtstraßen',
model:'(a) Bestimmungswort: Grashüpfer | Grundwort: Kleid\n(b) Bestimmungswort: Großstadt | Grundwort: Straßen',
rule:'<div class=rbox>Das Grundwort steht immer am Ende und bestimmt die Wortart. Das Bestimmungswort steht vorne und gibt eine nähere Bestimmung an.</div>'},

{sub:'Komposita identifizieren', type:'self',
q:'<b>Unterstreichen Sie</b> von den folgenden Wörtern die vier Komposita.\n\nTellerrand · saugstark · Geschmack · Zukunft · Stadtgärtner · Quadratmeter · begrüßen',
model:'Komposita: Tellerrand (Teller+Rand) · saugstark (saug+stark) · Stadtgärtner (Stadt+Gärtner) · Quadratmeter (Quadrat+Meter)',
rule:'<div class=rbox>Komposita bestehen aus mindestens zwei eigenständigen Wörtern (oder Wortstämmen). Zukunft ist ein altes Kompositum (zu+kunft), heute lexikalisiert; begrüßen ist eine Ableitung.</div>'},

{sub:'Kompositum identifizieren', type:'mc',
q:'<b>Unterstreichen Sie</b> das Kompositum.\n\nElektrizität · Entfernung · Feuerball · Dunkelheit',
o:['Elektrizität','Entfernung','Feuerball','Dunkelheit'],
c:2,
model:'Feuerball (Feuer + Ball)',
rule:'<div class=rbox>Feuerball ist ein Kompositum aus Feuer + Ball. Die anderen Wörter sind Ableitungen: Elektrizität (-ität), Entfernung (ent- + Fernung/-ung), Dunkelheit (-heit).</div>'},

{sub:'Stammverwandte Wörter ergänzen', type:'self',
q:'<b>Ergänzen Sie</b> die Tabelle mit den fehlenden stammverwandten Wörtern.\n\nSubstantiv/Nomen | Verb | Adjektiv\n(a) ? | ? | experimentell\n(b) Lösung | ? | ?\n(c) ? | übertragen | ?',
model:'(a) Experiment | experimentieren | experimentell\n(b) Lösung | lösen | lösbar/löslich\n(c) Übertragung | übertragen | übertragbar',
rule:'<div class=rbox>Wortfamilien: Verben → Nomen (Übertragung), Adjektive (übertragbar). Suffixe: Nomen: -ung/-nis; Verb: -ieren; Adjektiv: -bar/-lich.</div>'},

{sub:'Suffix bestimmen', type:'self',
q:'<b>Notieren Sie</b> das Suffix, das jeweils über die Groß- oder Kleinschreibung entscheidet.\n\nBeispiel: Krankheiten → -heit-\n\n(a) Zeugnisse\n(b) Genügsamkeit',
model:'(a) Zeugnisse → -nis- (Nomenbildendes Suffix → Großschreibung)\n(b) Genügsamkeit → -keit- (Nomenbildendes Suffix → Großschreibung)',
rule:'<div class=rbox>Nomenbildende Suffixe (-heit, -keit, -nis, -schaft, -ung) zeigen Großschreibung an. Adjektivbildende Suffixe (-lich, -bar, -ig, -sam) → Kleinschreibung.</div>'},

{sub:'Suffix bestimmen', type:'self',
q:'<b>Notieren Sie</b> das Suffix, das jeweils über die Groß- oder Kleinschreibung entscheidet.\n\nBeispiel: Krankheiten → -heit-\n\n(a) haltbar\n(b) praktischer\n(c) Richtungen',
model:'(a) haltbar → -bar (Adjektivsuffix → Kleinschreibung)\n(b) praktischer → -er (Komparativsuffix → Adjektiv → Kleinschreibung)\n(c) Richtungen → -ung (Nomensuffix → Großschreibung)',
rule:'<div class=rbox>-bar/-lich/-ig/-er (Adjektivsuffixe) → klein. -ung/-heit/-keit/-nis (Nomensuffixe) → groß.</div>'},

{sub:'Suffix bestimmen', type:'self',
q:'<b>Notieren Sie</b> das Suffix, das jeweils über die Groß- oder Kleinschreibung entscheidet.\n\nBeispiel: Krankheiten → -heit-\n\n(a) Freundlichkeiten\n(b) freundschaftlich',
model:'(a) Freundlichkeiten → -keit- (Nomenbildend → Großschreibung)\n(b) freundschaftlich → -lich (Adjektivsuffix → Kleinschreibung)',
rule:'<div class=rbox>-keit und -schaft (kombiniert: -schaftlich oder getrennt) sind Nomensuffixe → Großschreibung. -lich allein ist Adjektivsuffix → Kleinschreibung.</div>'},

{sub:'Suffix / Wortbestandteil', type:'self',
q:'<b>Notieren Sie</b> den Wortbestandteil (Suffix), der jeweils über die Groß- oder Kleinschreibung entscheidet.\n\nBeispiel: Krankheiten → heit\n\n(a) unscheinbar\n(b) häufiger\n(c) Erfahrungen',
model:'(a) unscheinbar → bar (Adjektivsuffix → klein)\n(b) häufiger → er (Komparativsuffix → Adjektiv → klein)\n(c) Erfahrungen → ung (Nomenbildend → groß)',
rule:'<div class=rbox>Suffixe entscheiden: -bar/-er/-lich/-ig → Adjektiv → klein. -ung/-heit/-keit/-nis → Nomen → groß.</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 5. VERBFORMEN & MODUS
// ────────────────────────────────────────────────────────────────────
{id:'msa_verbformen', title:'Verbformen & Modus', emoji:'🔀', color:'#8f6b3d', qs:[

{sub:'Modus bestimmen', type:'cross',
q:'<b>Kreuzen Sie</b> an, in welchem Modus die folgenden Sätze stehen.',
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

{sub:'Modalverben einsetzen', type:'self',
q:'<b>Formen Sie</b> den folgenden Satz mithilfe von Modalverben so um, dass er Folgendes zum Ausdruck bringt:\n(a) eine Notwendigkeit\n(b) eine Erlaubnis\n\n\u201eIch räume meinen neuen Kleiderschrank ein.\u201c',
model:'(a) Ich muss meinen neuen Kleiderschrank einräumen.\n(b) Ich darf meinen neuen Kleiderschrank einräumen.',
rule:'<div class=rbox>Modalverben: müssen = Notwendigkeit/Zwang · dürfen = Erlaubnis · sollen = Fremdaufforderung · wollen = eigene Absicht · können = Fähigkeit/Möglichkeit.</div>'},

{sub:'Modalverben einsetzen', type:'self',
q:'<b>Formulieren Sie</b> den folgenden Satz mithilfe von Modalverben:\n(a) als Wunsch\n(b) als Erlaubnis\n(c) als Aufforderung\n\nIch verstaue mein Gepäck im Kofferraum.',
model:'(a) Wunsch: Ich möchte / wollte mein Gepäck im Kofferraum verstauen.\n(b) Erlaubnis: Ich darf mein Gepäck im Kofferraum verstauen.\n(c) Aufforderung: Ich soll mein Gepäck im Kofferraum verstauen.',
rule:'<div class=rbox>möchten/wollen = Wunsch/Absicht · dürfen = Erlaubnis · sollen = Aufforderung/Verpflichtung durch andere · müssen = Notwendigkeit/Zwang.</div>'},

{sub:'Aussage/Aufforderung/Möglichkeit', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob in den folgenden Sätzen jeweils eine Aussage, eine Aufforderung oder eine Möglichkeit verdeutlicht wird.',
rows:['(a) Da sind doch auch Fußspuren.','(b) Einen kleinen Finderlohn könnte er vielleicht bekommen.','(c) Nehmen Sie sich doch etwas zusammen!'],
cols:['Aussage','Aufforderung','Möglichkeit'],
correct:[0,2,1],
model:'(a) Aussage · (b) Möglichkeit · (c) Aufforderung',
rule:'<div class=rbox>Aussage: Indikativ, Feststellung der Realität. Aufforderung: Imperativ oder sollen/bitte. Möglichkeit: können/könnten im Konjunktiv II.</div>'},

{sub:'Aussage/Aufforderung/Möglichkeit', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob in den folgenden Sätzen jeweils eine Aussage, eine Aufforderung oder eine Möglichkeit zum Ausdruck gebracht wird.',
rows:['(a) Was Sie vorhaben, ist doch glatter Betrug.','(b) Das freie Bett in dem Doppelzimmer könnte bis dahin belegt sein.','(c) Bitte machen Sie kein Licht.'],
cols:['Aussage','Aufforderung','Möglichkeit'],
correct:[0,2,1],
model:'(a) Aussage · (b) Möglichkeit (könnte) · (c) Aufforderung (Bitte)',
rule:'<div class=rbox>Könnte = Konjunktiv II von können → drückt Möglichkeit aus. \u201eBitte\u201c + Imperativ = Aufforderung in höflicher Form.</div>'},

{sub:'Erlaubnis/Absicht/Empfehlung', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die folgenden Sätze jeweils eine Erlaubnis, eine Absicht oder eine Empfehlung ausdrücken.',
rows:['(a) Er will sich höher gelegene Gebiete suchen.','(b) Er möchte sich höher gelegene Gebiete suchen.','(c) Er soll sich höher gelegene Gebiete suchen.','(d) Er darf sich höher gelegene Gebiete suchen.'],
cols:['Erlaubnis','Absicht','Empfehlung'],
correct:[1,1,2,0],
model:'(a) Absicht (will) · (b) Absicht (möchte) · (c) Empfehlung (soll) · (d) Erlaubnis (darf)',
rule:'<div class=rbox>wollen/möchten = Absicht/eigener Wunsch · sollen = Empfehlung/Aufforderung durch andere · dürfen = Erlaubnis.</div>'},

{sub:'Gegenwart/Zukunft/immer gültig', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob in den folgenden Sätzen gegenwärtiges, zukünftiges oder ein immer gültiges Geschehen zum Ausdruck gebracht wird.',
rows:['(a) Nebenbei zupft er ein paar Blätter Kresse.','(b) Beim Indoor-Farming-System wachsen Pflanzen ohne Erde und Sonnenlicht.','(c) Sein Blick schweift durch die ehemaligen Fabrikräume.','(d) Infarm beliefert bald das 25hours-Hotel in Charlottenburg.'],
cols:['gegenwärtig','zukünftig','immer gültig'],
correct:[0,2,0,1],
model:'(a) gegenwärtig · (b) immer gültig · (c) gegenwärtig · (d) zukünftig (bald)',
rule:'<div class=rbox>Präsens kann Gegenwart, Zukunft (mit Zeitangabe wie \u201ebald\u201c) oder zeitlose Gültigkeit ausdrücken. Kontext und Zeitangaben entscheiden.</div>'},

{sub:'Gewissheit ausdrücken', type:'alt',
q:'<b>Formulieren Sie</b> den folgenden Satz so um, dass er eine Gewissheit zum Ausdruck bringt.\n\nSpäter sollen Maschinen die Ernte übernehmen.',
a:['Später werden Maschinen die Ernte übernehmen.'],
model:'Später werden Maschinen die Ernte übernehmen.',
rule:'<div class=rbox>\u201eSollen\u201c drückt eine Fremderwartung oder Behauptung aus \u2013 keine Gewissheit. Für Gewissheit: Futur I mit \u201ewerden\u201c oder Indikativ Präsens mit Zeitangabe.</div>'},

{sub:'Konjunktiv → Indikativ', type:'alt',
q:'Die Konjunktivform im folgenden Satz drückt eine Vermutung aus. Formen Sie den Satz so um, dass ein reales Geschehen zum Ausdruck gebracht wird.\n\nSie würden ihn für den Rest der Woche los sein.',
a:['Sie sind ihn für den Rest der Woche los.','Sie werden ihn für den Rest der Woche los sein.'],
model:'Sie sind ihn für den Rest der Woche los.',
rule:'<div class=rbox>Konjunktiv II (würden) drückt Irrealität oder Vermutung aus. Umformung in Indikativ: würden → sind/werden (reales Geschehen).</div>'},

{sub:'Modus bestimmen', type:'cross',
q:'<b>Kreuzen Sie</b> in der Tabelle an, in welchem Modus die folgenden Sätze stehen.',
rows:['(a) Ich habe verloren.','(b) Sie sagte, sie habe Lust darauf.','(c) Ich wäre gern geblieben.','(d) Bitte nehmen Sie Platz.'],
cols:['Indikativ','Konjunktiv I','Konjunktiv II','Imperativ'],
correct:[0,1,2,3],
model:'(a) Indikativ · (b) Konjunktiv I (habe \u2013 indirekte Rede) · (c) Konjunktiv II (wäre) · (d) Imperativ (nehmen Sie)',
rule:'<div class=rbox>Indikativ: Wirklichkeit. KI: indirekte Rede. KII: Irrealis/Wunsch/höfliche Bitte. Imperativ: direkte Aufforderung/Befehl.</div>'},

{sub:'Modus ankreuzen', type:'mc',
q:'<b>Kreuzen Sie</b> an, in welchem Modus das Verb im folgenden Satz steht.\n\n\u201eUnd jetzt verschwindet!\u201c',
o:['Indikativ','Konjunktiv','Imperativ'],
c:2,
model:'Imperativ',
rule:'<div class=rbox>Imperativ: direkte Aufforderung/Befehl. Kennzeichen: Imperativform des Verbs (verschwindet! = ihr-Form). Kein Subjekt notwendig.</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 6. SATZUMFORMUNGEN
// ────────────────────────────────────────────────────────────────────
{id:'msa_satzumformungen', title:'Satzumformungen', emoji:'🔁', color:'#7c3d8f', qs:[

{sub:'Aktiv \u2192 Passiv', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in einen Passivsatz um.\n\nSchätzungen zufolge nutzen rund vier Millionen Menschen den US-Dienst.',
a:['Schätzungen zufolge wird der US-Dienst von rund vier Millionen Menschen genutzt.'],
model:'Schätzungen zufolge wird der US-Dienst von rund vier Millionen Menschen genutzt.',
rule:'<div class=rbox>Vorgangspassiv: Das Akkusativobjekt wird zum Subjekt; das Subjekt wird zur optionalen \u201evon\u201c-Phrase. Hilfsverb: werden + Partizip II.</div>'},

{sub:'Passiv mit Modalverb', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in einen Satz im Passiv um.\n\n\u201eIch muss noch das Auto zurückbringen.\u201c',
a:['Das Auto muss noch zurückgebracht werden.','Das Auto muss noch von mir zurückgebracht werden.'],
model:'Das Auto muss noch zurückgebracht werden.',
rule:'<div class=rbox>Passiv mit Modalverb: Modalverb + Partizip II + werden (im Infinitiv).</div>'},

{sub:'Aktiv \u2192 Passiv', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in einen Passivsatz um.\n\nDie Emoticons hat ein amerikanischer Professor erfunden.',
a:['Die Emoticons sind von einem amerikanischen Professor erfunden worden.','Die Emoticons sind von einem amerikanischen Professor erfunden worden'],
model:'Die Emoticons sind von einem amerikanischen Professor erfunden worden.',
rule:'<div class=rbox>Perfekt Aktiv (hat erfunden) → Perfekt Passiv: sein (konj.) + Partizip II + worden. Achtung: Im Perfekt Passiv steht \u201eworden\u201c (nicht \u201egeworden\u201c).</div>'},

{sub:'Aktiv/Vorgangspassiv/Zustandspassiv', type:'cross',
q:'<b>Kreuzen Sie</b> an, ob die folgenden Sätze im Aktiv, Vorgangspassiv oder Zustandspassiv stehen.',
rows:['(a) Ketchup wird meistens durch Kochen hergestellt.','(b) In der Grillsaison wird er noch mehr Ketchup verkaufen.'],
cols:['Aktiv','Vorgangspassiv','Zustandspassiv'],
correct:[1,0],
model:'(a) Vorgangspassiv (wird hergestellt) · (b) Aktiv (wird verkaufen = Futur I)',
rule:'<div class=rbox>Vorgangspassiv: werden + Partizip II (Vorgang). Zustandspassiv: sein + Partizip II (Ergebnis). Aktiv: handelndes Subjekt. Achtung: \u201ewird … verkaufen\u201c = Futur I (Aktiv).</div>'},

{sub:'Aktiv \u2192 Passiv', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in einen Passivsatz um.\n\nDie beiden Forscher führen diese Untersuchungen in Grenoble durch.',
a:['Diese Untersuchungen werden von den beiden Forschern in Grenoble durchgeführt.'],
model:'Diese Untersuchungen werden von den beiden Forschern in Grenoble durchgeführt.',
rule:'<div class=rbox>Bei trennbaren Verben (durchführen): Im Passiv bleibt das Verb zusammen als Partizip II (durchgeführt). Akkusativobjekt wird zum Subjekt.</div>'},

{sub:'Passiv mit Modalverb', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz ins Passiv um.\n\nWir müssen seine Eltern verständigen.',
a:['Seine Eltern müssen verständigt werden.'],
model:'Seine Eltern müssen verständigt werden.',
rule:'<div class=rbox>Passiv mit Modalverb: Modalverb + Partizip II + werden (Infinitiv). Das Akkusativobjekt (Eltern) wird zum Subjekt.</div>'},



{sub:'Indirekte Rede', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in indirekte Rede um.\n\n\u201eIch stehe Menschen mit Rat und Tat zur Seite\u201c, sagt er.',
a:['Er sagt, er stehe Menschen mit Rat und Tat zur Seite.'],
model:'Er sagt, er stehe Menschen mit Rat und Tat zur Seite.',
rule:'<div class=rbox>In der indirekten Rede wird Konjunktiv I verwendet: \u201estehe\u201c (KI von stehen). Personalpronomen werden angepasst: ich \u2192 er.</div>'},

{sub:'Direkte Rede', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in direkte Rede um.\n\nDie Autorin merkt an, dass viele große Denker Chaoten gewesen seien.',
a:['\u201eDie Autorin merkt an: \u201eViele große Denker waren Chaoten.\u201c'],
model:'Die Autorin merkt an: \u201eViele große Denker waren Chaoten.\u201c',
rule:'<div class=rbox>In der direkten Rede fällt der Konjunktiv weg. Es werden Doppelpunkt und Anführungszeichen gesetzt. Pronomen ggf. anpassen.</div>'},

{sub:'Direkte Rede formulieren', type:'alt',
q:'<b>Formulieren Sie</b> den folgenden Satz in direkter Rede.\n\nKempf sagte, dass das keineswegs eine Marotte von ihm sei.',
a:['Kempf sagte: \u201eDas ist keineswegs eine Marotte von mir.\u201c'],
model:'Kempf sagte: \u201eDas ist keineswegs eine Marotte von mir.\u201c',
rule:'<div class=rbox>In der direkten Rede: Konjunktiv I → Indikativ. Pronomen anpassen (ihm → mir). Zeichensetzung: Doppelpunkt + Anführungszeichen.</div>'},

{sub:'Direkte Rede', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in die direkte Rede um. Beachten Sie dabei die Zeichensetzung.\n\nWas er denn damit wolle, fragt der Schaffner.',
a:['Der Schaffner fragt: \u201eWas wollen Sie denn damit?\u201c'],
model:'Der Schaffner fragt: \u201eWas wollen Sie denn damit?\u201c',
rule:'<div class=rbox>Indirekte Rede → direkte Rede: Konjunktiv I (wolle) → Indikativ (wollen), Pronomen anpassen, Fragezeichen am Ende, Doppelpunkt vor Anführungszeichen.</div>'},

{sub:'Indirekte Rede', type:'alt',
q:'<b>Formen Sie</b> den folgenden Satz in die indirekte Rede um.\n\nDie Mutter fragt: \u201eKann ich das Licht wieder anmachen?\u201c',
a:['Die Mutter fragt, ob sie das Licht wieder anmachen könne.','Die Mutter fragt, ob sie das Licht wieder anmachen kann.'],
model:'Die Mutter fragt, ob sie das Licht wieder anmachen könne.',
rule:'<div class=rbox>Direkte Frage → indirekte Rede mit \u201eob\u201c als Einleitewort. Verb in Konjunktiv I (könne) oder II. Pronomen: ich → sie.</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 7. WORTSCHATZ
// ────────────────────────────────────────────────────────────────────
{id:'msa_wortschatz', title:'Wortschatz', emoji:'🔄', color:'#3d8f5a', qs:[

{sub:'Standardsprachliches Synonym', type:'self',
q:'<b>Notieren Sie</b> für das umgangssprachliche Wort \u201esatte\u201c im folgenden Satz ein standardsprachliches Synonym.\n\n\u201eDie Folge verspricht satte Quoten.\u201c',
model:'hohe / beachtliche / beeindruckende',
rule:'<div class=rbox>\u201eSatt\u201c kann umgangssprachlich im Sinne von \u201egroß, beachtlich, üppig\u201c verwendet werden.</div>'},

{sub:'Synonym \u2013 kontextabhängig', type:'self',
q:'<b>Notieren Sie</b> für das markierte Adjektiv jeweils ein passendes Synonym.\n\n(a) \u201eEr bewahrt einen [kühlen] Kopf.\u201c\n(b) \u201eEr kann bei der [kühlen] Witterung nicht bauen.\u201c',
model:'(a) kühlen \u2192 ruhigen / besonnenen\n(b) kühlen \u2192 kalten / frischen',
rule:'<div class=rbox>Das gleiche Adjektiv kann je nach Kontext unterschiedliche Bedeutungen haben und daher verschiedene Synonyme erfordern.</div>'},

{sub:'Synonym finden', type:'self',
q:'<b>Notieren Sie</b> für das markierte Wort ein passendes Synonym.\n\n\u201eMein Vater [beäugt] das Regal.\u201c',
model:'beobachtet / betrachtet / mustert',
rule:'<div class=rbox>\u201eBeäugen\u201c bedeutet, etwas genau und kritisch anzusehen.</div>'},

{sub:'Fremdwörter zuordnen', type:'self',
q:'<b>Ordnen Sie</b> den Fremdwörtern jeweils ihre deutsche Bezeichnung zu.\n(1) Beschränkung auf das Wesentliche  (2) Vorhaben  (3) Verbrauch  (4) Rückmeldung  (5) Beweglichkeit\n\n(a) Konsum\n(b) Resonanz\n(c) Minimalismus\n(d) Projekt\n(e) Flexibilität',
model:'(a) Konsum \u2192 (3) Verbrauch\n(b) Resonanz \u2192 (4) Rückmeldung\n(c) Minimalismus \u2192 (1) Beschränkung auf das Wesentliche\n(d) Projekt \u2192 (2) Vorhaben\n(e) Flexibilität \u2192 (5) Beweglichkeit',
rule:'<div class=rbox>Fremdwörter haben häufig direkte deutsche Entsprechungen. Minimalismus (lat. minimus = kleinst) steht für die Beschränkung auf das Wesentliche.</div>'},

{sub:'Fremdwörter zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den Fremdwörtern die entsprechende deutsche Bezeichnung zu.\n(1) Unterhaltung  (2) Hauptsendezeit  (3) Benutzerkonto',
rows:['(a) Account','(b) Chat','(c) Primetime'],
cols:['(1) Unterhaltung','(2) Hauptsendezeit','(3) Benutzerkonto'],
correct:[2,0,1],
model:'(a) Account \u2192 Benutzerkonto · (b) Chat \u2192 Unterhaltung · (c) Primetime \u2192 Hauptsendezeit',
rule:'<div class=rbox>Anglizismen aus dem Medienbereich haben häufig deutsche Entsprechungen.</div>'},

{sub:'Fremdwörter zuordnen', type:'self',
q:'<b>Ordnen Sie</b> den Fremdwörtern jeweils ihre deutsche Bedeutung zu.\n(1) abstufen  (2) haltbar machen  (3) veranschaulichen  (4) verringern  (5) anweisen\n\n(a) konservieren\n(b) nuancieren\n(c) reduzieren\n(d) demonstrieren',
model:'(a) konservieren \u2192 (2) haltbar machen\n(b) nuancieren \u2192 (1) abstufen\n(c) reduzieren \u2192 (4) verringern\n(d) demonstrieren \u2192 (3) veranschaulichen',
rule:'<div class=rbox>Viele Verben lateinischen oder französischen Ursprungs lassen sich durch treffende deutsche Entsprechungen ersetzen.</div>'},

{sub:'Deutsche Entsprechung', type:'self',
q:'<b>Notieren Sie</b> für das markierte Wort jeweils die deutsche Entsprechung.\n\n(a) \u201eDas war ihr vorläufiges [Highlight] des Jahres.\u201c\n(b) \u201eSie haben ein [Faible] für Freikörperkultur.\u201c',
model:'(a) Highlight \u2192 Höhepunkt\n(b) Faible \u2192 Vorliebe / Schwäche (für etwas)',
rule:'<div class=rbox>Anglizismen (Highlight) und Gallizismen (Faible) können oft durch treffende deutsche Wörter ersetzt werden.</div>'},

{sub:'Synonym notieren', type:'self',
q:'<b>Notieren Sie</b> für das Wort \u201eTücken\u201c im folgenden Satz ein Synonym.\n\nMan ahnt, welche Tücken die Emoji-Nutzung mit sich bringt.',
model:'Tücken → Risiken / Fallstricke / Schwierigkeiten / Probleme / Gefahren',
rule:'<div class=rbox>\u201eTücke\u201c bedeutet versteckte Schwierigkeit oder böse Überraschung. Synonyme: Hinterlist, Schwierigkeit, Risiko.</div>'},

{sub:'Synonyme und Antonyme', type:'self',
q:'Für das Wort \u201ediplomatisch\u201c im folgenden Satz gibt es Synonyme und Antonyme.\n\n\u201eVielleicht ist er in Derwitz gestartet und in Krielow gelandet\u201c, sagt er diplomatisch.\n\n<b>Sortieren Sie</b> die folgenden Wörter in die Tabelle:\ngeschickt · abwägend · kompromisslos · schroff · geradeheraus · vermittelnd\n\nSynonym | Antonym',
model:'Synonyme: geschickt, abwägend, vermittelnd\nAntonyme: kompromisslos, schroff, geradeheraus',
rule:'<div class=rbox>Diplomatisch = taktisch geschickt, vermittelnd. Antonyme sind Wörter mit entgegengesetzter Bedeutung: kompromisslos, schroff.</div>'},

{sub:'Kontextabhängige Synonyme', type:'self',
q:'Das Wort \u201ebitter\u201c hat in den folgenden Sätzen eine unterschiedliche Bedeutung. Ersetzen Sie es jeweils durch ein passendes Synonym.\n\n(a) Draußen ist es bitterkalt.\n(b) Den Salat mag ich nicht, weil er bitter schmeckt.\n(c) Sie machte eine bittere Erfahrung.',
model:'(a) bitterkalt → eiskalt / extrem kalt / bitterlich kalt\n(b) bitter (Geschmack) → herb / säuerlich\n(c) bittere Erfahrung → schmerzliche / schlimme / unangenehme Erfahrung',
rule:'<div class=rbox>Viele Adjektive sind polysem (mehrdeutig). Das passende Synonym hängt vom Kontext ab: bitter kann \u201eextrem kalt\u201c, \u201eherbschmeckend\u201c oder \u201eschmerzhaft\u201c bedeuten.</div>'},

{sub:'Synonym notieren', type:'self',
q:'<b>Notieren Sie</b> für das Wort \u201ebloß\u201c im folgenden Satz ein Synonym.\n\nDer Rucksack war nie bloß ein praktisches Accessoire.',
model:'bloß → nur / lediglich / ausschließlich / schlicht und einfach',
rule:'<div class=rbox>\u201eBloß\u201c in der Bedeutung \u201enur, nicht mehr als\u201c ist ein Adverb der Einschränkung.</div>'},

{sub:'Synonym ankreuzen', type:'mc',
q:'<b>Kreuzen Sie</b> an, welches Wort synonym für das unterstrichene Wort in dem folgenden Satz verwendet werden kann.\n\nIm Bus war ich eingepfercht zwischen einer Frau und einem jungen Mädchen.',
o:['eingeklammert','eingelagert','eingefangen','eingezwängt'],
c:3,
model:'eingezwängt',
rule:'<div class=rbox>\u201eEingepfercht\u201c bedeutet auf engem Raum zusammengedrängt \u2013 wie in einem Pferch (Gehege). Das Synonym \u201eeingezwängt\u201c beschreibt dieselbe Enge.</div>'},

{sub:'Fremdwörter zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> die folgenden Fremdwörter den deutschen Bezeichnungen zu.\n\nFremdwörter: Hype · Methode · Kommunikation · Kontext',
rows:['(a) Verständigung','(b) Zusammenhang','(c) Übersteigertes Interesse','(d) Vorgehensweise'],
cols:['Hype','Methode','Kommunikation','Kontext'],
correct:[2,3,0,1],
model:'(a) Verständigung → Kommunikation · (b) Zusammenhang → Kontext · (c) Übersteigertes Interesse → Hype · (d) Vorgehensweise → Methode',
rule:'<div class=rbox>Fremdwörter aus dem Englischen (Hype) und Latein/Griechischen (Methode, Kommunikation, Kontext) haben oft direkte deutsche Entsprechungen.</div>'},



{sub:'Standardsprache', type:'alt',
q:'<b>Formulieren Sie</b> den folgenden Satz in Standardsprache.\n\n\u201eIch habe mir alle Staffeln reingezogen.\u201c',
a:['Ich habe alle Staffeln angesehen.','Ich habe mir alle Staffeln angesehen.'],
model:'Ich habe alle Staffeln angesehen.',
rule:'<div class=rbox>\u201eReingezogen\u201c ist umgangssprachlich für \u201ekonsumiert/angesehen\u201c. Standardsprache ist neutral und überregional verständlich.</div>'},

{sub:'Standardsprache', type:'alt',
q:'<b>Formulieren Sie</b> den folgenden Satz in Standardsprache.\n\n\u201eDas zahlt sich eh nicht aus.\u201c',
a:['Das lohnt sich ohnehin nicht.','Das lohnt sich sowieso nicht.'],
model:'Das lohnt sich ohnehin nicht.',
rule:'<div class=rbox>\u201eEh\u201c ist umgangssprachlich für \u201esowieso/ohnehin\u201c. \u201eSich auszahlen\u201c \u2192 \u201esich lohnen\u201c.</div>'},

]},

// ────────────────────────────────────────────────────────────────────
// 8. ERZÄHLFORMEN & ZEITGESTALTUNG
// ────────────────────────────────────────────────────────────────────
{id:'msa_erzaehlung', title:'Erzählformen & Zeitgestaltung', emoji:'📖', color:'#5a3d8f', qs:[

{sub:'Personale Erzählweise', type:'self',
q:'<b>Notieren Sie</b>, woran im Text das personale Erzählverhalten erkennbar wird.',
model:'Das personale Erzählverhalten ist erkennbar daran, dass der Erzähler aus der Perspektive einer Figur berichtet (Er/Sie-Form), nur deren Gedanken und Wahrnehmungen wiedergibt und keine allwissende Außenperspektive einnimmt.',
rule:'<div class=rbox>Personale Erzählweise: Der Erzähler schildert das Geschehen aus der Sicht einer Figur. Kennzeichen: Er/Sie-Perspektive, begrenzte Wahrnehmung, Innensicht nur einer Figur.</div>'},

{sub:'Darbietungsformen zuordnen', type:'cross',
q:'<b>Ordnen Sie</b> den Beispielen die entsprechende Darbietungsform zu.\n(1) Erzählerbericht  (2) Innerer Monolog  (3) Erlebte Rede  (4) Direkte Rede',
rows:['(a) \u201eWas willst du dann? Die Schule schmeißen? Bei deinen guten Noten?\u201c','(b) Sie wartete, bis sie seinen Wagen wegfahren hörte.'],
cols:['Erzählerbericht','Innerer Monolog','Erlebte Rede','Direkte Rede'],
correct:[3,0],
model:'(a) Direkte Rede · (b) Erzählerbericht',
rule:'<div class=rbox>Direkte Rede: wörtliche Wiedergabe mit Anführungszeichen. Erzählerbericht: neutrale Berichterstattung ohne Innenperspektive.</div>'},

{sub:'Erzählformen zuordnen', type:'self',
q:'In den Zeilen 71 bis 75 werden verschiedene Erzählformen verwendet:\n1. Meine Mutter legt ihre Hand sanft auf seinen Arm.\n2. \u201eLivia, dein Vater hat recht. Es ist gefährlich.\u201c\n3. Sie sieht hilflos zu meinem Vater.\n4. Ich weiß, was sie sagen will.\n5. Warum halten sie mich für so naiv?\n\n<b>Ordnen Sie</b> alle Satznummern den Erzählformen zu:\n(a) Erzählerbericht\n(b) Innerer Monolog\n(c) Direkte Rede',
model:'(a) Erzählerbericht: 1, 3\n(b) Innerer Monolog: 4, 5\n(c) Direkte Rede: 2',
rule:'<div class=rbox>Erzählerbericht: neutrale Schilderung (Sätze 1, 3). Innerer Monolog: unausgesprochene Gedanken in Ich-Form (Sätze 4, 5). Direkte Rede: wörtliche Wiedergabe mit Anführungszeichen (Satz 2).</div>'},

{sub:'Zeitgestaltung bestimmen', type:'mc',
q:'<b>Ordnen Sie</b> dem folgenden Beispiel die entsprechende Art der Zeitgestaltung zu.\n\n\u201eDu bist ja richtig erwachsen.\u201c\n\u201eDu kannst mich gern als deine jüngere Schwester ausgeben, …\u201c (Z. 66f.)',
o:['Zeitraffung','Zeitdeckung','Rückblende'],
c:1,
model:'Zeitdeckung',
rule:'<div class=rbox>Zeitdeckung: Erzählzeit und erzählte Zeit sind etwa gleich lang (wie in einem Dialog). Zeitraffung: Erzählzeit kürzer als erzählte Zeit. Rückblende: Blick in die Vergangenheit.</div>'},

{sub:'Zeitdarstellung zuordnen', type:'self',
q:'Im Text liegen mehrere Arten der Darstellung der Zeit vor.\n<b>Ordnen Sie</b> den Textstellen die entsprechende Art der Zeitdarstellung zu.\n(1) Zeitdeckung  (2) Zeitraffung  (3) Zeitdehnung  (4) Rückblick  (5) Vorausschau\n\n(a) \u201eZum Rüffei läuft man ewig lange an der Hauptstraße mit den tausend Geschäften lang.\u201c\n\n(b) \u201eDas hat vor etwa zwei Jahren angefangen, da hat der Chef vom Outdoorladen sie gefragt, ob sie Lust auf ein paar Fotos hatte.\u201c',
model:'(a) Zeitdehnung (3) \u2013 die Beschreibung des Weges dehnt die Zeit aus.\n(b) Rückblick (4) \u2013 Blick zurück in die Vergangenheit.',
rule:'<div class=rbox>Zeitdehnung: Erzählzeit länger als erzählte Zeit (Zeitlupe-Effekt). Rückblick (Analepse): Erzähler springt in die Vergangenheit zurück.</div>'},

{sub:'Zeitgestaltung ankreuzen', type:'mc',
q:'<b>Kreuzen Sie</b> an, welche Zeitgestaltung im folgenden Textauszug vorliegt.\n\n\u201eBis zum Morgenzug blieben ihm noch fünf Minuten, es war ausgeschlossen, dass er ihn noch erreichte. Am Nachmittag […] kam er niedergeschlagen und enttäuscht zu Hause an.\u201c (Z. 106 ff.)',
o:['Zeitdehnung','Zeitraffung','Vorausdeutung','Rückblende'],
c:1,
model:'Zeitraffung',
rule:'<div class=rbox>Zeitraffung: Von den Morgenstunden bis zum Nachmittag wird übersprungen \u2013 viele Stunden in wenigen Wörtern. Die Erzählzeit ist deutlich kürzer als die erzählte Zeit.</div>'},

]},

];

// Alias
var THEMES = MSA_THEMES;
