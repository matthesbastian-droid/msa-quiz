// ================================================================
// MSA-UEBERARBEITUNG.JS – Textüberarbeitung (5 Übungstexte)
//
// AUFGABENTYPEN & INTERAKTION:
//
//  "rs" / "ausdruck" / "kasus" / "satzbau":
//    → Satz wird in anklickbare Wörter aufgeteilt
//    → Alle Wörter sind anklickbar
//    → Richtiges Wort → grün; falsches Wort → rot
//    → Nach Klick erscheint leeres Tippfeld „Richtige Schreibweise"
//    → Lösungscheck gegen acceptedAnswers
//
//  "komma":
//    → Satz steht im editierbaren Textfeld (vorgeschrieben)
//    → Nutzer tippt das Komma an der richtigen Stelle hinein
//    → Kein Placeholder, kein vorausgefülltes Feld
//
// DATENFELDER:
//   sub          – Fehlertyp-Bezeichnung (oben angezeigt)
//   type         – "rs" | "ausdruck" | "kasus" | "satzbau" | "komma"
//   sentence     – Satz mit Fehler (für Wortklick-Anzeige, alle Typen)
//   errorWord    – das falsche Wort/die falsche Phrase im Satz
//   correctWord  – die korrekte Schreibweise
//   acceptedAnswers – Array möglicher korrekter Eingaben
//   model        – Musterlösung (nach Fehler angezeigt)
//   rule         – Erklärungsbox
//
//  Für "komma" zusätzlich:
//   correctPositions – Zeichenpositionen (0-basiert) wo Komma(s) fehlen
// ================================================================

var MSA_UEBERARBEITUNG_THEMES = [

// ================================================================
// 1. TABELLE – Text: „Spargel"
// ================================================================
{
  id:"ueberarbeitung_1",
  title:"1. Tabelle – Spargel",
  emoji:"🌱",
  color:"#2d9e6a",
  qs:[

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Die Spargelstange ist der Stängelspross der Spargelpflanze die zur Familie der Liliengewächse gehört.',
    correctPositions:[44],
    acceptedAnswers:['Die Spargelstange ist der Stängelspross der Spargelpflanze, die zur Familie der Liliengewächse gehört.'],
    model:'Die Spargelstange ist der Stängelspross der Spargelpflanze, die zur Familie der Liliengewächse gehört.',
    rule:'<div class=rbox>Vor einleitenden Relativpronomen (die, der, das, welche …) steht immer ein Komma. „die zur Familie …" ist ein Relativsatz, der durch Komma vom Hauptsatz getrennt wird.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Viele alt bekannte Sorten werden heute kaum noch angebaut.',
    errorWord:'alt bekannte',
    correctWord:'altbekannte',
    acceptedAnswers:['altbekannte'],
    model:'altbekannte',
    rule:'<div class=rbox>„altbekannt" wird als zusammengesetztes Adjektiv <span class=hl>zusammengeschrieben</span> (wie altmodisch, altehrwürdig). Die Getrenntschreibung „alt bekannte" ist falsch.</div>'
  },

  {
    sub:"Grammatikfehler – Konjunktion",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Spargelkulturen sollen über viele Jahre gute Erträge bringen, weil der Standort sorgfältig ausgewählt werden sollte.',
    errorWord:'weil',
    correctWord:'sodass',
    acceptedAnswers:['sodass','weshalb','weswegen','daher','deshalb'],
    model:'sodass / weshalb / weswegen',
    rule:'<div class=rbox>„weil" drückt einen Grund aus (→ Ursache). Hier wird aber eine Folge beschrieben. Korrekte Konjunktionen: <span class=hl>sodass, weshalb, weswegen</span>. Auch möglich: Umstellung mit „daher/deshalb sollte der Standort …".</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Zur Ernte werden die Spargelstangen gestochen, was nach wie vor knüppelharte Handarbeit ist.',
    errorWord:'knüppelharte',
    correctWord:'äußerst harte',
    acceptedAnswers:['äußerst harte','sehr schwere','mühsame','harte','schwere','äußerst schwere','beschwerliche'],
    model:'äußerst harte / sehr schwere / mühsame',
    rule:'<div class=rbox>„knüppelhart" ist umgangssprachlich und unpassend für einen Sachtext. Standardsprachliche Alternativen: <span class=hl>äußerst hart, sehr schwer, mühsam, beschwerlich</span>.</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Spargel ist ein Gemüse, welches in seinem Geschmack einzigartig und deshalb bei Feinschmeckern voll beliebt ist.',
    errorWord:'voll',
    correctWord:'sehr',
    acceptedAnswers:['sehr','äußerst','außerordentlich','besonders'],
    model:'sehr / äußerst / besonders',
    rule:'<div class=rbox>„voll" als Verstärker (voll cool, voll lecker) ist Jugendsprache/Umgangssprache. Im Sachtext verwendet man: <span class=hl>sehr, äußerst, außerordentlich, besonders</span>.</div>'
  },

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Früher wurden die Spargelstangen die noch nicht zerkleinert waren relativ umständlich mit den Fingern gegessen.',
    correctPositions:[33, 55],
    acceptedAnswers:['Früher wurden die Spargelstangen, die noch nicht zerkleinert waren, relativ umständlich mit den Fingern gegessen.'],
    model:'Früher wurden die Spargelstangen, die noch nicht zerkleinert waren, relativ umständlich mit den Fingern gegessen.',
    rule:'<div class=rbox>Der Relativsatz „die noch nicht zerkleinert waren" wird <span class=hl>beidseitig</span> durch Kommas vom Hauptsatz abgetrennt: Komma vor dem einleitenden Relativpronomen <span class=hl>und</span> Komma nach dem Ende des Relativsatzes.</div>'
  },

  {
    sub:"Rechtschreibung – Groß-/Kleinschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Deshalb wurde zum spargelessen immer ein mit warmem Wasser gefülltes Fingerschälchen gereicht.',
    errorWord:'spargelessen',
    correctWord:'Spargelessen',
    acceptedAnswers:['Spargelessen'],
    model:'Spargelessen',
    rule:'<div class=rbox>„Spargelessen" ist ein Nomen (Substantiv) und wird daher <span class=hl>großgeschrieben</span>. Zusammengesetzte Nomen erhalten die Großschreibung am Wortanfang.</div>'
  },

  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    operator:"<b>Klicken Sie auf das falsche Wort und geben Sie die korrekte Form ein.</b>",
    sentence:'Für die aus heutiger Sicht unsinnig erscheinende Sitte gab es ein einfachen Grund.',
    errorWord:'ein',
    correctWord:'einen',
    acceptedAnswers:['einen','einen einfachen','einen einfachen Grund'],
    model:'einen einfachen Grund',
    rule:'<div class=rbox>„Grund" ist maskulin und steht als direktes Objekt im <span class=hl>Akkusativ</span>: es gab <span class=hl>einen</span> Grund. Der unbestimmte Artikel im Akkusativ Maskulinum lautet „einen", nicht „ein".</div>'
  },

  {
    sub:"Grammatikfehler – Satzbau",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Wurde der Spargel geschnitten mit dem Messer, fing dieses stark zu rosten an.',
    errorWord:'geschnitten mit dem Messer',
    correctWord:'mit dem Messer geschnitten',
    acceptedAnswers:['Wurde der Spargel mit dem Messer geschnitten, fing dieses stark zu rosten an.','mit dem Messer geschnitten'],
    model:'mit dem Messer geschnitten',
    rule:'<div class=rbox>Die Präpositionalgruppe „mit dem Messer" gehört zum Verb „schneiden" und soll direkt davor stehen: <span class=hl>mit dem Messer geschnitten</span>. Die Nachstellung „geschnitten mit dem Messer" ist ein Satzbaufehler.</div>'
  },

  {
    sub:"Rechtschreibung – ß/ss",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Heute können sich Spargelliebhaber über rostfreie Messer freuen und Spargel zu jedem Anlaß bedenkenlos mit Messer und Gabel essen.',
    errorWord:'Anlaß',
    correctWord:'Anlass',
    acceptedAnswers:['Anlass'],
    model:'Anlass',
    rule:'<div class=rbox>Nach der Rechtschreibreform wird „Anlass" mit <span class=hl>Doppel-s</span> geschrieben, da der vorangehende Vokal kurz ist. „Anlaß" mit ß ist veraltet. Regel: ß steht nur nach langem Vokal oder Diphthong (z.B. Straße, Fuß).</div>'
  },
]},

// ================================================================
// 2. TABELLE – Text: „Suche Ausbildungsplatz"
// ================================================================
{
  id:"ueberarbeitung_2",
  title:"2. Tabelle – Ausbildungsplatz",
  emoji:"💼",
  color:"#3d6b8f",
  qs:[

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Der Traumberuf ist gefunden aber der Ausbildungsplatz fehlt noch.',
    correctPositions:[26],
    acceptedAnswers:['Der Traumberuf ist gefunden, aber der Ausbildungsplatz fehlt noch.'],
    model:'Der Traumberuf ist gefunden, aber der Ausbildungsplatz fehlt noch.',
    rule:'<div class=rbox>Vor entgegenstellenden Konjunktionen wie <span class=hl>aber, doch, jedoch, sondern</span> steht ein Komma, wenn zwei Hauptsätze verbunden werden.</div>'
  },

  {
    sub:"Rechtschreibung – Groß-/Kleinschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Hier finden Sie ein Paar Tipps, die zu Beginn der Suche eine gute Orientierung bieten.',
    errorWord:'Paar',
    correctWord:'paar',
    acceptedAnswers:['paar','ein paar'],
    model:'ein paar',
    rule:'<div class=rbox>„ein paar" (= einige, wenige) wird <span class=hl>kleingeschrieben</span>. Nur „ein Paar" als Nomen (= zwei zusammengehörige Dinge/Personen) wird großgeschrieben.</div>'
  },

  {
    sub:"Rechtschreibung – Groß-/Kleinschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Betriebe planen oft weit im Voraus und schreiben Ihre Stellen schon Monate vorher aus.',
    errorWord:'Ihre',
    correctWord:'ihre',
    acceptedAnswers:['ihre','ihre Stellen'],
    model:'ihre',
    rule:'<div class=rbox>Das Possessivpronomen „ihre" bezieht sich hier auf „Betriebe" (3. Person Plural) und wird <span class=hl>kleingeschrieben</span>. „Ihre" (groß) gilt nur als Höflichkeitsanrede.</div>'
  },

  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    operator:"<b>Klicken Sie auf das falsche Wort und geben Sie die korrekte Form ein.</b>",
    sentence:'Ausbildungsbörsen im Internet bieten ein großes Angebot an Ausbildungsplätze.',
    errorWord:'Ausbildungsplätze',
    correctWord:'Ausbildungsplätzen',
    acceptedAnswers:['Ausbildungsplätzen','an Ausbildungsplätzen'],
    model:'Ausbildungsplätzen',
    rule:'<div class=rbox>Nach der Präposition „an" steht der <span class=hl>Dativ Plural</span>: Ausbildungsplätzen (nicht Nominativ/Akkusativ: Ausbildungsplätze).</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Wer eine passende Stelle gefunden hat, kriegt gleich die wichtigsten Informationen zum Betrieb.',
    errorWord:'kriegt',
    correctWord:'bekommt',
    acceptedAnswers:['bekommt','erhält'],
    model:'bekommt / erhält',
    rule:'<div class=rbox>„kriegen" ist umgangssprachlich. Im Sachtext verwendet man: <span class=hl>bekommen, erhalten</span>.</div>'
  },

  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    operator:"<b>Klicken Sie auf das falsche Wort und geben Sie die korrekte Form ein.</b>",
    sentence:'Die Bundesagentur für Arbeit bietet Ausbildungssuchenden ein kostenlosen Vermittlungsservice an.',
    errorWord:'ein',
    correctWord:'einen',
    acceptedAnswers:['einen','einen kostenlosen','einen kostenlosen Vermittlungsservice'],
    model:'einen kostenlosen',
    rule:'<div class=rbox>„Vermittlungsservice" ist maskulin. Im Akkusativ lautet der unbestimmte Artikel <span class=hl>einen</span> (nicht „ein").</div>'
  },

  {
    sub:"Grammatikfehler – Satzbau (trennbares Verb)",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'In einem individuellen Gespräch geben die Service-Berater weiter die Kontaktdaten von Betrieben.',
    errorWord:'weiter die Kontaktdaten',
    correctWord:'die Kontaktdaten weiter',
    acceptedAnswers:['In einem individuellen Gespräch geben die Service-Berater die Kontaktdaten von Betrieben weiter.','die Kontaktdaten von Betrieben weiter','die Kontaktdaten weiter'],
    model:'die Kontaktdaten von Betrieben weiter',
    rule:'<div class=rbox>„weitergeben" ist ein trennbares Verb: das Präfix „weiter" steht am <span class=hl>Satzende</span>. Richtig: „geben die Kontaktdaten von Betrieben <span class=hl>weiter</span>".</div>'
  },

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Berufsmessen sind eine der besten Möglichkeiten sich einen Überblick über Ausbildungsbetriebe in der Region zu verschaffen.',
    correctPositions:[42],
    acceptedAnswers:['Berufsmessen sind eine der besten Möglichkeiten, sich einen Überblick über Ausbildungsbetriebe in der Region zu verschaffen.'],
    model:'Berufsmessen sind eine der besten Möglichkeiten, sich einen Überblick über Ausbildungsbetriebe in der Region zu verschaffen.',
    rule:'<div class=rbox>Vor einem erweiterten Infinitiv mit „zu" steht ein Komma, wenn er von einem Nomen abhängt (hier: Möglichkeiten, … zu verschaffen).</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Man kann die Personalverantwortlichen der Betriebe anquatschen und sogar gleich seine Bewerbungsunterlagen abgeben.',
    errorWord:'anquatschen',
    correctWord:'ansprechen',
    acceptedAnswers:['ansprechen','kontaktieren','sich wenden an'],
    model:'ansprechen / kontaktieren',
    rule:'<div class=rbox>„anquatschen" ist stark umgangssprachlich. Im Sachtext verwendet man: <span class=hl>ansprechen, kontaktieren, sich wenden an</span>.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Jugendliche solten auch immer Augen und Ohren offen halten, ob jemand im eigenen Umfeld einen Azubi sucht.',
    errorWord:'solten',
    correctWord:'sollten',
    acceptedAnswers:['sollten'],
    model:'sollten',
    rule:'<div class=rbox>„sollten" wird mit <span class=hl>Doppel-l</span> geschrieben (Konjunktiv II von „sollen"). „solten" ist falsch.</div>'
  },
]},

// ================================================================
// 3. TABELLE – Text: „Venedig"
// ================================================================
{
  id:"ueberarbeitung_3",
  title:"3. Tabelle – Venedig",
  emoji:"🏛️",
  color:"#7c3d8f",
  qs:[

  {
    sub:"Grammatikfehler – Tempus",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Im 8. Jahrhundert entwickelt sich aus den kleinen Inseln einer sumpfigen Lagune die See- und Handelsmacht Venedig.',
    errorWord:'entwickelt',
    correctWord:'entwickelte',
    acceptedAnswers:['Im 8. Jahrhundert entwickelte sich aus den kleinen Inseln einer sumpfigen Lagune die See- und Handelsmacht Venedig.','entwickelte sich','entwickelte'],
    model:'entwickelte sich',
    rule:'<div class=rbox>Bei historischen Ereignissen der Vergangenheit steht das <span class=hl>Präteritum</span>: entwickelte sich – nicht Präsens „entwickelt sich".</div>'
  },

  {
    sub:"Rechtschreibung – Groß-/Kleinschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Heute gehört die Stadt zum Weltkulturerbe und ist nicht ohne grund Europas beliebtestes Städtereiseziel.',
    errorWord:'grund',
    correctWord:'Grund',
    acceptedAnswers:['Grund'],
    model:'Grund',
    rule:'<div class=rbox>„Grund" ist ein Nomen (Substantiv) und wird daher <span class=hl>großgeschrieben</span>.</div>'
  },

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Der Canal Grande Venedigs großer Kanal durchfließt die Stadt in zwei großen Bogen und ist die wichtigste Verkehrsader.',
    correctPositions:[16, 37],
    acceptedAnswers:['Der Canal Grande, Venedigs großer Kanal, durchfließt die Stadt in zwei großen Bogen und ist die wichtigste Verkehrsader.'],
    model:'Der Canal Grande, Venedigs großer Kanal, durchfließt die Stadt in zwei großen Bogen und ist die wichtigste Verkehrsader.',
    rule:'<div class=rbox>„Venedigs großer Kanal" ist eine erklärende Apposition (Beifügung) zu „Canal Grande". Appositionen werden <span class=hl>beidseitig</span> durch Kommas abgetrennt.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Moderne Schnellboote und mit Frischwahren beladene Boote sorgen für ein bewegtes Treiben auf dem Kanal.',
    errorWord:'Frischwahren',
    correctWord:'Frischwaren',
    acceptedAnswers:['Frischwaren'],
    model:'Frischwaren',
    rule:'<div class=rbox>„Frischwaren" (= frische Lebensmittel/Güter) wird ohne „h" geschrieben. „Waren" (= Güter) hat kein h – nur „wahrnehmen, wahr" schreibt man mit h.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Auf dem Markusplatz zaubern fantastische Bauwerke gemeinsam mit zahlllosen Tauben ein ganz besonderes Ambiente.',
    errorWord:'zahlllosen',
    correctWord:'zahllosen',
    acceptedAnswers:['zahllosen'],
    model:'zahllosen',
    rule:'<div class=rbox>„zahllos" → „zahllosen" hat genau <span class=hl>zwei l</span>: zahl-los. Drei l hintereinander gibt es im Deutschen nicht (Komposita-Regel: max. 3 gleiche Buchstaben, aber hier ist „zahlllosen" schlicht ein Tippfehler).</div>'
  },

  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    operator:"<b>Klicken Sie auf das falsche Wort und geben Sie die korrekte Form ein.</b>",
    sentence:'Der Glockenturm mit einer Höhe von 99 Meter ermöglicht einen herrlichen Blick über die Lagunenstadt.',
    errorWord:'Meter',
    correctWord:'Metern',
    acceptedAnswers:['Metern','von 99 Metern'],
    model:'Metern',
    rule:'<div class=rbox>Nach der Präposition „von" steht der <span class=hl>Dativ</span>. Dativ Plural von „Meter": <span class=hl>Metern</span>.</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Viele Besucher gucken den herrlichen Markusdom und den Dogenpalast an.',
    errorWord:'gucken',
    correctWord:'betrachten',
    acceptedAnswers:['betrachten','schauen an','besichtigen','bewundern','sehen an','schauen'],
    model:'betrachten / besichtigen / bewundern',
    rule:'<div class=rbox>„gucken" ist umgangssprachlich (regional). Im Sachtext verwendet man: <span class=hl>betrachten, besichtigen, bewundern, schauen</span>.</div>'
  },

  {
    sub:"Grammatikfehler – Satzbau (Verbstellung)",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Auch Venedigs Cafés sind beliebt, weil man kann dort guten Kaffee trinken.',
    errorWord:'kann',
    correctWord:'trinken kann',
    acceptedAnswers:['Auch Venedigs Cafés sind beliebt, weil man dort guten Kaffee trinken kann.','Auch Venedigs Cafés sind beliebt, denn man kann dort guten Kaffee trinken.','trinken kann','weil man dort guten Kaffee trinken kann'],
    model:'weil man dort guten Kaffee trinken kann',
    rule:'<div class=rbox>Im Nebensatz nach „weil" steht das Verb am <span class=hl>Satzende</span>: „weil man dort Kaffee trinken <span class=hl>kann</span>". Alternativ: „denn man kann dort …" (Hauptsatz, keine Umstellung).</div>'
  },

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Den Abend lässt man am besten in einem exquisiten Restaurant ausklingen wo man mit regionalen Köstlichkeiten verwöhnt wird.',
    correctPositions:[68],
    acceptedAnswers:['Den Abend lässt man am besten in einem exquisiten Restaurant ausklingen, wo man mit regionalen Köstlichkeiten verwöhnt wird.'],
    model:'Den Abend lässt man am besten in einem exquisiten Restaurant ausklingen, wo man mit regionalen Köstlichkeiten verwöhnt wird.',
    rule:'<div class=rbox>„wo man … verwöhnt wird" ist ein Relativsatz und wird durch ein <span class=hl>Komma</span> vom Hauptsatz getrennt.</div>'
  },

  {
    sub:"Grammatikfehler – Konjunktion",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Doch die Stadt wird durch die gigantischen Kreuzfahrtschiffe bedroht, obwohl diese die Bausubstanz zerstören.',
    errorWord:'obwohl',
    correctWord:'weil',
    acceptedAnswers:['Doch die Stadt wird durch die gigantischen Kreuzfahrtschiffe bedroht, weil diese die Bausubstanz zerstören.','Doch die Stadt wird durch die gigantischen Kreuzfahrtschiffe bedroht, da diese die Bausubstanz zerstören.','weil','da'],
    model:'weil / da',
    rule:'<div class=rbox>„obwohl" drückt einen Gegensatz aus. Hier wird aber der <span class=hl>Grund</span> der Bedrohung genannt. Korrekte Kausalkonjunktionen: <span class=hl>weil, da</span>.</div>'
  },
]},

// ================================================================
// 4. TABELLE – Text: „Geschenk für einen Freund"
// ================================================================
{
  id:"ueberarbeitung_4",
  title:"4. Tabelle – Geschenk",
  emoji:"🎁",
  color:"#e07b39",
  qs:[

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Es ist nicht leicht ein passendes Geschenk für einen Freund zu finden.',
    correctPositions:[18],
    acceptedAnswers:['Es ist nicht leicht, ein passendes Geschenk für einen Freund zu finden.'],
    model:'Es ist nicht leicht, ein passendes Geschenk für einen Freund zu finden.',
    rule:'<div class=rbox>Vor einem Infinitivsatz mit „zu" steht ein Komma, wenn er von einem Adjektiv abhängt (hier: „leicht"): nicht leicht, <span class=hl>etwas zu tun</span>.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Hier erhalten Sie einige Tipps, die Ihnen die Suche erleichtern solen.',
    errorWord:'solen',
    correctWord:'sollen',
    acceptedAnswers:['sollen'],
    model:'sollen',
    rule:'<div class=rbox>„sollen" wird mit <span class=hl>Doppel-l</span> geschrieben. „solen" ist falsch.</div>'
  },

  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    operator:"<b>Klicken Sie auf das falsche Wort und geben Sie die korrekte Form ein.</b>",
    sentence:'In Gespräche mit dem Freund erfahren Sie etwas über dessen Geschmack.',
    errorWord:'Gespräche',
    correctWord:'Gesprächen',
    acceptedAnswers:['Gesprächen','In Gesprächen'],
    model:'Gesprächen',
    rule:'<div class=rbox>Die Präposition „in" verlangt hier den <span class=hl>Dativ</span>: In Gesprächen (Dativ Plural). „Gespräche" wäre Nominativ/Akkusativ Plural.</div>'
  },

  {
    sub:"Grammatikfehler – Kongruenz (Numerus)",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Auch die Kenntnis seiner Interessen und Hobbys können Ihnen helfen, die richtige Entscheidung zu treffen.',
    errorWord:'können',
    correctWord:'kann',
    acceptedAnswers:['Auch die Kenntnis seiner Interessen und Hobbys kann Ihnen helfen, die richtige Entscheidung zu treffen.','kann Ihnen helfen','kann'],
    model:'kann (Singular, da „die Kenntnis" Singular)',
    rule:'<div class=rbox>Das Verb richtet sich nach dem Subjekt: „die Kenntnis" (Singular) → <span class=hl>kann</span> helfen (nicht „können"). Kongruenz: Subjekt und Prädikat müssen im Numerus übereinstimmen.</div>'
  },

  {
    sub:"Rechtschreibung – Fremdwort",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Verschenken Sie zum Beispiel ein Abonement der zum Hobby passenden Fachzeitschrift.',
    errorWord:'Abonement',
    correctWord:'Abonnement',
    acceptedAnswers:['Abonnement'],
    model:'Abonnement',
    rule:'<div class=rbox>„Abonnement" (aus dem Französischen) schreibt sich mit <span class=hl>Doppel-n</span>: Abonn-e-ment.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Je nach Interessenlage können auch Konzert- oder Kinokarten ein willkomenes Geschenk sein.',
    errorWord:'willkomenes',
    correctWord:'willkommenes',
    acceptedAnswers:['willkommenes'],
    model:'willkommenes',
    rule:'<div class=rbox>„willkommen" wird mit <span class=hl>Doppel-m</span> geschrieben: willkommen → willkommenes.</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Total in sind auch Gutscheine für Shopping-Center.',
    errorWord:'Total in',
    correctWord:'Im Trend',
    acceptedAnswers:['Im Trend','Zeitgemäß','Beliebt','Gefragt','Modern','im Trend','zeitgemäß','beliebt','gefragt','modern'],
    model:'Im Trend / zeitgemäß / beliebt',
    rule:'<div class=rbox>„Total in" ist Jugend-/Umgangssprache. Standardsprachliche Alternativen: <span class=hl>im Trend, zeitgemäß, beliebt, gefragt, modern</span>.</div>'
  },

  {
    sub:"Grammatikfehler – Konjunktion",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Geldgeschenke sollten Sie jedoch vermeiden, weil diese sehr beliebt sind.',
    errorWord:'weil',
    correctWord:'obwohl',
    acceptedAnswers:['Geldgeschenke sollten Sie jedoch vermeiden, obwohl diese sehr beliebt sind.','Geldgeschenke sollten Sie jedoch vermeiden, obschon diese sehr beliebt sind.','obwohl','obschon','auch wenn'],
    model:'obwohl / obschon',
    rule:'<div class=rbox>Hier besteht ein Widerspruch: Obwohl Geldgeschenke beliebt sind, soll man sie vermeiden. Das verlangt eine <span class=hl>konzessive</span> Konjunktion: <span class=hl>obwohl, obschon, auch wenn</span>.</div>'
  },

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Sie wirken unpersönlich bequem und einfallslos.',
    correctPositions:[20],
    acceptedAnswers:['Sie wirken unpersönlich, bequem und einfallslos.'],
    model:'Sie wirken unpersönlich, bequem und einfallslos.',
    rule:'<div class=rbox>Zwischen gleichrangigen Adjektiven in einer Aufzählung steht ein Komma (wenn kein „und" steht). „unpersönlich" und „bequem" sind gleichrangig; vor dem letzten Glied mit „und" entfällt das Komma.</div>'
  },

  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Lassen Sie sich also was Besonderes einfallen, wenn Sie Ihren Freund überraschen wollen.',
    errorWord:'was',
    correctWord:'etwas',
    acceptedAnswers:['etwas','etwas Besonderes'],
    model:'etwas',
    rule:'<div class=rbox>„was" als Indefinitpronomen (= etwas) ist umgangssprachlich. Der standardsprachliche Ausdruck lautet: <span class=hl>etwas</span>.</div>'
  },
]},

// ================================================================
// 5. TABELLE – Text: „Ausbildung Gärtnerin/Gärtner"
// ================================================================
{
  id:"ueberarbeitung_5",
  title:"5. Tabelle – Gärtner",
  emoji:"🌿",
  color:"#d94f4f",
  qs:[

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Die Firma „Gartenglück" bietet einen Ausbildungsplatz zum Gärtner der Fachrichtung Landschaftsbau.',
    correctPositions:[52],
    acceptedAnswers:['Die Firma „Gartenglück" bietet einen Ausbildungsplatz zum Gärtner, der Fachrichtung Landschaftsbau.'],
    model:'Die Firma „Gartenglück" bietet einen Ausbildungsplatz zum Gärtner, der Fachrichtung Landschaftsbau.',
    rule:'<div class=rbox>„der Fachrichtung Landschaftsbau" ist eine Apposition (erklärende Beifügung) zu „Gärtner" und wird durch ein <span class=hl>Komma</span> abgetrennt.</div>'
  },

  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    operator:"<b>Klicken Sie auf das falsche Wort und geben Sie die korrekte Form ein.</b>",
    sentence:'Interessenten müssen mindestens ein Abschluss, z. B. den der Berufsbildungsreife, vorweisen können.',
    errorWord:'ein',
    correctWord:'einen',
    acceptedAnswers:['einen','einen Abschluss'],
    model:'einen Abschluss',
    rule:'<div class=rbox>„Abschluss" ist maskulin und steht als direktes Objekt im <span class=hl>Akkusativ</span>: <span class=hl>einen</span> Abschluss (nicht „ein").</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Außerdem wird eine gute köperliche Belastbarkeit erwartet.',
    errorWord:'köperliche',
    correctWord:'körperliche',
    acceptedAnswers:['körperliche'],
    model:'körperliche',
    rule:'<div class=rbox>„körperlich" leitet sich von „Körper" ab: kö<span class=hl>r</span>perlich. Das r darf nicht fehlen.</div>'
  },

  {
    sub:"Grammatikfehler – Kongruenz (Numerus)",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Auch technisches Verständnis und Teamfähigkeit ist von Vorteil.',
    errorWord:'ist',
    correctWord:'sind',
    acceptedAnswers:['Auch technisches Verständnis und Teamfähigkeit sind von Vorteil.','sind von Vorteil','sind'],
    model:'sind von Vorteil',
    rule:'<div class=rbox>Wenn zwei Subjekte mit „und" verbunden sind, steht das Verb im <span class=hl>Plural</span>: Verständnis und Teamfähigkeit → <span class=hl>sind</span> (nicht „ist").</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Die Bewerbungsunterlagen sind vollstendig einzureichen.',
    errorWord:'vollstendig',
    correctWord:'vollständig',
    acceptedAnswers:['vollständig'],
    model:'vollständig',
    rule:'<div class=rbox>„vollständig" enthält den Umlaut <span class=hl>ä</span> (von „Stand"): vollst<span class=hl>ä</span>ndig. Nicht „vollstendig".</div>'
  },

  {
    sub:"Zeichensetzung – Komma",
    type:"komma",
    operator:"<b>Klicken Sie auf die Stelle im Satz und setzen Sie das fehlende Komma ein.</b>",
    sentence:'Dazu gehören Kopien der letzten beiden Zeugnisse der Praktikumsnachweise und ein tabellarischer Lebenslauf.',
    correctPositions:[51],
    acceptedAnswers:['Dazu gehören Kopien der letzten beiden Zeugnisse, der Praktikumsnachweise und ein tabellarischer Lebenslauf.'],
    model:'Dazu gehören Kopien der letzten beiden Zeugnisse, der Praktikumsnachweise und ein tabellarischer Lebenslauf.',
    rule:'<div class=rbox>„der Praktikumsnachweise" und „ein tabellarischer Lebenslauf" sind weitere Aufzählungsglieder. Vor dem nächsten Glied (ohne „und") steht ein <span class=hl>Komma</span>.</div>'
  },

  {
    sub:"Ausdrucksfehler – falsche Verbkonstruktion",
    type:"ausdruck",
    operator:"<b>Klicken Sie auf den umgangssprachlichen Ausdruck und ersetzen Sie ihn durch einen standardsprachlichen Begriff.</b>",
    sentence:'Der Bewerbungszeitraum endet bis zum 15. Januar 2015.',
    errorWord:'endet bis zum',
    correctWord:'endet am',
    acceptedAnswers:['endet am 15. Januar 2015','läuft bis zum 15. Januar 2015','geht bis zum 15. Januar 2015','endet am','läuft bis zum','geht bis zum'],
    model:'endet am … / läuft bis zum …',
    rule:'<div class=rbox>„endet bis zum" ist eine falsche Vermischung zweier Konstruktionen. Korrekt: <span class=hl>endet am</span> 15. Januar oder <span class=hl>läuft bis zum</span> 15. Januar.</div>'
  },

  {
    sub:"Rechtschreibung",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'Unsere Ansprechpartnerinen für die Bewerbungen sind Frau Strauch und Frau Baum.',
    errorWord:'Ansprechpartnerinen',
    correctWord:'Ansprechpartnerinnen',
    acceptedAnswers:['Ansprechpartnerinnen'],
    model:'Ansprechpartnerinnen',
    rule:'<div class=rbox>„Ansprechpartnerinnen" (Plural, feminin) wird mit <span class=hl>Doppel-n</span> geschrieben: Ansprechpartnerin + <span class=hl>nen</span> → Ansprechpartnerin<span class=hl>nen</span>.</div>'
  },

  {
    sub:"Grammatikfehler – Modus",
    type:"satzbau",
    operator:"<b>Klicken Sie auf den fehlerhaften Ausdruck und geben Sie die korrekte Version ein.</b>",
    sentence:'Die Bewerbungsunterlagen wären an folgende Adresse zu richten.',
    errorWord:'wären',
    correctWord:'sind',
    acceptedAnswers:['Die Bewerbungsunterlagen sind an folgende Adresse zu richten.','Die Bewerbungsunterlagen richten Sie an folgende Adresse.','sind an folgende Adresse zu richten','sind'],
    model:'sind an folgende Adresse zu richten',
    rule:'<div class=rbox>„wären … zu richten" steht im Konjunktiv II (drückt Zweifel/Unwirklichkeit aus). In einer sachlichen Stellenausschreibung ist der <span class=hl>Indikativ</span> korrekt: <span class=hl>sind … zu richten</span>.</div>'
  },

  {
    sub:"Rechtschreibung – Eigenname",
    type:"rs",
    operator:"<b>Klicken Sie auf das falsch geschriebene Wort und geben Sie die richtige Schreibweise ein.</b>",
    sentence:'An der wiese 4',
    errorWord:'wiese',
    correctWord:'Wiese',
    acceptedAnswers:['Wiese','An der Wiese 4'],
    model:'An der Wiese 4',
    rule:'<div class=rbox>Straßennamen sind Eigennamen und werden <span class=hl>großgeschrieben</span>: An der <span class=hl>W</span>iese 4.</div>'
  },
]},

];

var MSA_UEBERARBEITUNG = MSA_UEBERARBEITUNG_THEMES;
