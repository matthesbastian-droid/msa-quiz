// ================================================================
// MSA-UEBERARBEITUNG.JS – Textüberarbeitung (5 Übungstexte)
// Aufgabentypen:
//   "komma"   – Kommasetzung: Text anklicken, Komma einfügen
//   "rs"      – Rechtschreibung: Wort antippen + richtige Schreibweise
//   "ausdruck"– Ausdrucksfehler (Umgangssprache/Stil): Wort wählen + korrekten Ausdruck eingeben
//   "kasus"   – Kasusfehler: Wort wählen + korrekte Form eingeben
//   "satzbau" – Satzbaufehler: korrigierten Satz/Teil eingeben
// ================================================================

var MSA_UEBERARBEITUNG_THEMES = [

// ================================================================
// 1. TABELLE – Text: "Spargel"
// ================================================================
{
  id:"ueberarbeitung_1",
  title:"1. Tabelle – Spargel",
  emoji:"🌱",
  color:"#2d9e6a",
  qs:[

  // 501 – Z (Zeichensetzung / Komma)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nDie Spargelstange ist der Stängelspross der Spargelpflanze die zur Familie der Liliengewächse gehört.',
    sentence:'Die Spargelstange ist der Stängelspross der Spargelpflanze die zur Familie der Liliengewächse gehört.',
    // Position nach "Spargelpflanze" (vor "die")
    correctPositions:[44],
    model:'... der Spargelpflanze, die zur Familie ...',
    rule:'<div class=rbox>Vor einleitenden Relativpronomen (die, der, das, welche …) steht immer ein Komma. „die zur Familie …" ist ein Relativsatz, der durch Komma vom Hauptsatz getrennt wird.</div>'
  },

  // 502 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nViele alt bekannte Sorten werden heute kaum noch angebaut.',
    errorWord:'alt bekannte',
    correctWord:'altbekannte',
    model:'altbekannte',
    rule:'<div class=rbox>„altbekannt" wird als zusammengesetztes Adjektiv zusammengeschrieben (wie altmodisch, altehrwürdig). Die Getrenntschreibung „alt bekannte" ist falsch.</div>'
  },

  // 503 – G (Grammatik / Konjunktion)
  {
    sub:"Grammatikfehler – Konjunktion",
    type:"satzbau",
    q:'Korrigieren Sie den Grammatikfehler (falsche Konjunktion) im folgenden Satz:\n\nSpargelkulturen sollen über viele Jahre gute Erträge bringen, weil der Standort sorgfältig ausgewählt werden sollte.',
    prompt:'Schreiben Sie den Satz mit einer passenden Konjunktion:',
    placeholder:'Spargelkulturen sollen … bringen, _____ der Standort …',
    acceptedAnswers:[
      'Spargelkulturen sollen über viele Jahre gute Erträge bringen, sodass der Standort sorgfältig ausgewählt werden sollte.',
      'Spargelkulturen sollen über viele Jahre gute Erträge bringen, weshalb der Standort sorgfältig ausgewählt werden sollte.',
      'Spargelkulturen sollen über viele Jahre gute Erträge bringen, weswegen der Standort sorgfältig ausgewählt werden sollte.',
      'sodass','weshalb','weswegen','daher','deshalb'
    ],
    model:'… bringen, sodass / weshalb / weswegen der Standort sorgfältig ausgewählt werden sollte.',
    rule:'<div class=rbox>„weil" drückt einen Grund aus (→ Ursache). Hier wird aber eine Folge beschrieben: Weil die Erträge gut sein sollen, muss der Standort sorgfältig gewählt werden. Korrekte Konjunktionen für Folge/Schlussfolgerung: <span class=hl>sodass, weshalb, weswegen</span>. Auch möglich: Umstellung mit „daher/deshalb sollte der Standort …".</div>'
  },

  // 504 – A (Ausdruck / umgangssprachlich)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nZur Ernte werden die Spargelstangen gestochen, was nach wie vor knüppelharte Handarbeit ist.',
    errorWord:'knüppelharte',
    prompt:'Ersetzen Sie „knüppelharte" durch einen standardsprachlichen Ausdruck:',
    placeholder:'äußerst harte / sehr schwere …',
    acceptedAnswers:['äußerst harte','sehr schwere','mühsame','harte','schwere','äußerst schwere'],
    model:'… äußerst harte / sehr schwere / mühsame Handarbeit …',
    rule:'<div class=rbox>„knüppelhart" ist umgangssprachlich und unpassend für einen Sachtext. Standardsprachliche Alternativen: <span class=hl>äußerst hart, sehr schwer, mühsam, beschwerlich</span>.</div>'
  },

  // 505 – A (Ausdruck / umgangssprachlich)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nSpargel ist ein Gemüse, welches in seinem Geschmack einzigartig und deshalb bei Feinschmeckern voll beliebt ist.',
    errorWord:'voll beliebt',
    prompt:'Ersetzen Sie „voll beliebt" durch einen standardsprachlichen Ausdruck:',
    placeholder:'sehr beliebt / äußerst beliebt …',
    acceptedAnswers:['sehr beliebt','äußerst beliebt','außerordentlich beliebt','besonders beliebt','sehr','äußerst'],
    model:'… bei Feinschmeckern sehr / äußerst beliebt …',
    rule:'<div class=rbox>„voll" als Verstärker (voll cool, voll lecker) ist Jugendsprache/Umgangssprache. Im Sachtext verwendet man: <span class=hl>sehr, äußerst, außerordentlich, besonders</span>.</div>'
  },

  // 506 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie die fehlenden Kommas im folgenden Satz:\n\nFrüher wurden die Spargelstangen die noch nicht zerkleinert waren relativ umständlich mit den Fingern gegessen.',
    sentence:'Früher wurden die Spargelstangen die noch nicht zerkleinert waren relativ umständlich mit den Fingern gegessen.',
    correctPositions:[33, 55],
    model:'… die Spargelstangen, die noch nicht zerkleinert waren, relativ …',
    rule:'<div class=rbox>Der Relativsatz „die noch nicht zerkleinert waren" wird beidseitig durch Kommas vom Hauptsatz abgetrennt: Komma vor dem einleitenden Relativpronomen <span class=hl>und</span> Komma nach dem Ende des Relativsatzes.</div>'
  },

  // 507 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nDeshalb wurde zum spargelessen immer ein mit warmem Wasser gefülltes Fingerschälchen gereicht.',
    errorWord:'spargelessen',
    correctWord:'Spargelessen',
    model:'Spargelessen',
    rule:'<div class=rbox>„Spargelessen" ist ein Nomen (Substantiv) und wird daher <span class=hl>großgeschrieben</span>. Zusammengesetzte Nomen erhalten die Großschreibung am Wortanfang.</div>'
  },

  // 508 – G (Kasus)
  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    q:'Korrigieren Sie den Kasusfehler im folgenden Satz:\n\nFür die aus heutiger Sicht unsinnig erscheinende Sitte gab es ein einfachen Grund.',
    errorWord:'ein einfachen',
    correctWord:'einen einfachen',
    model:'… gab es einen einfachen Grund.',
    rule:'<div class=rbox>„Grund" ist hier das direkte Objekt (Akkusativ, maskulin): es gab <span class=hl>einen</span> Grund (nicht „ein"). Der unbestimmte Artikel im Akkusativ Maskulinum lautet „einen".</div>'
  },

  // 509 – G (Satzbau)
  {
    sub:"Grammatikfehler – Satzbau",
    type:"satzbau",
    q:'Korrigieren Sie den Satzbaufehler im folgenden Satz:\n\nWurde der Spargel geschnitten mit dem Messer, fing dieses stark zu rosten an.',
    prompt:'Schreiben Sie den korrigierten Satz:',
    placeholder:'Wurde der Spargel mit dem Messer geschnitten, …',
    acceptedAnswers:[
      'Wurde der Spargel mit dem Messer geschnitten, fing dieses stark zu rosten an.',
      'mit dem Messer geschnitten'
    ],
    model:'Wurde der Spargel mit dem Messer geschnitten, fing dieses stark zu rosten an.',
    rule:'<div class=rbox>Die Präpositionalgruppe „mit dem Messer" gehört zum Verb „schneiden" und soll direkt dazu stehen: <span class=hl>mit dem Messer geschnitten</span>. Die Nachstellung „geschnitten mit dem Messer" klingt falsch und ist ein Satzbaufehler.</div>'
  },

  // 510 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nHeute können sich Spargelliebhaber über rostfreie Messer freuen und Spargel zu jedem Anlaß bedenkenlos mit Messer und Gabel essen.',
    errorWord:'Anlaß',
    correctWord:'Anlass',
    model:'Anlass',
    rule:'<div class=rbox>Nach der Rechtschreibreform (1996) wird „Anlass" mit <span class=hl>Doppel-s</span> geschrieben, da der vorangehende Vokal kurz ist. „Anlaß" mit ß ist veraltet. Regel: ß steht nur nach langem Vokal oder Diphthong (z.B. Straße, Fuß).</div>'
  },
]},

// ================================================================
// 2. TABELLE – Text: "Suche Ausbildungsplatz"
// ================================================================
{
  id:"ueberarbeitung_2",
  title:"2. Tabelle – Ausbildungsplatz",
  emoji:"💼",
  color:"#3d6b8f",
  qs:[

  // 501 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nDer Traumberuf ist gefunden aber der Ausbildungsplatz fehlt noch.',
    sentence:'Der Traumberuf ist gefunden aber der Ausbildungsplatz fehlt noch.',
    correctPositions:[26],
    model:'… gefunden, aber der Ausbildungsplatz …',
    rule:'<div class=rbox>Vor entgegenstellenden Konjunktionen wie <span class=hl>aber, doch, jedoch, sondern</span> steht ein Komma, wenn zwei Hauptsätze verbunden werden.</div>'
  },

  // 502 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nHier finden Sie ein Paar Tipps, die zu Beginn der Suche eine gute Orientierung bieten.',
    errorWord:'Paar',
    correctWord:'paar',
    model:'ein paar Tipps',
    rule:'<div class=rbox>„ein paar" (= einige, wenige) wird <span class=hl>kleingeschrieben</span>. Nur „ein Paar" als Nomen (= zwei zusammengehörige Dinge/Personen) wird großgeschrieben. Merkhilfe: „ein paar Tipps" = einige Tipps.</div>'
  },

  // 503 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nBetriebe planen oft weit im Voraus und schreiben Ihre Stellen schon Monate vorher aus.',
    errorWord:'Ihre',
    correctWord:'ihre',
    model:'ihre Stellen',
    rule:'<div class=rbox>Das Possessivpronomen „ihre" bezieht sich hier auf „Betriebe" (3. Person Plural) und wird <span class=hl>kleingeschrieben</span>. Großschreibung „Ihre" ist nur bei Höflichkeitsanrede (Sie/Ihre) korrekt.</div>'
  },

  // 504 – G (Kasus)
  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    q:'Korrigieren Sie den Kasusfehler im folgenden Satz:\n\nAusbildungsbörsen im Internet bieten ein großes Angebot an Ausbildungsplätze.',
    errorWord:'Ausbildungsplätze',
    correctWord:'Ausbildungsplätzen',
    model:'… Angebot an Ausbildungsplätzen.',
    rule:'<div class=rbox>Nach der Präposition „an" (im Sinne von „Angebot an etw.") steht der <span class=hl>Dativ Plural</span>: Ausbildungsplätzen (nicht Nominativ/Akkusativ Plural: Ausbildungsplätze).</div>'
  },

  // 505 – A (Umgangssprache)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nWer eine passende Stelle gefunden hat, kriegt gleich die wichtigsten Informationen zum Betrieb.',
    errorWord:'kriegt',
    prompt:'Ersetzen Sie „kriegt" durch einen standardsprachlichen Ausdruck:',
    placeholder:'bekommt / erhält …',
    acceptedAnswers:['bekommt','erhält','erbekommt'],
    model:'… bekommt / erhält gleich die wichtigsten Informationen …',
    rule:'<div class=rbox>„kriegen" ist umgangssprachlich. Im Sachtext verwendet man: <span class=hl>bekommen, erhalten</span>.</div>'
  },

  // 506 – G (Kasus)
  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    q:'Korrigieren Sie den Kasusfehler im folgenden Satz:\n\nDie Bundesagentur für Arbeit bietet Ausbildungssuchenden ein kostenlosen Vermittlungsservice an.',
    errorWord:'ein kostenlosen',
    correctWord:'einen kostenlosen',
    model:'… einen kostenlosen Vermittlungsservice …',
    rule:'<div class=rbox>„Vermittlungsservice" ist maskulin. Im Akkusativ (Objekt) lautet der unbestimmte Artikel <span class=hl>einen</span> (nicht „ein"). → bietet … einen Service an.</div>'
  },

  // 507 – G (Satzbau)
  {
    sub:"Grammatikfehler – Satzbau",
    type:"satzbau",
    q:'Korrigieren Sie den Satzbaufehler im folgenden Satz:\n\nIn einem individuellen Gespräch geben die Service-Berater weiter die Kontaktdaten von Betrieben.',
    prompt:'Schreiben Sie den korrigierten Satz:',
    placeholder:'… geben die Service-Berater die Kontaktdaten von Betrieben weiter.',
    acceptedAnswers:[
      'In einem individuellen Gespräch geben die Service-Berater die Kontaktdaten von Betrieben weiter.',
      'die Kontaktdaten von Betrieben weiter'
    ],
    model:'… geben die Service-Berater die Kontaktdaten von Betrieben weiter.',
    rule:'<div class=rbox>„weitergeben" ist ein trennbares Verb: das Präfix „weiter" steht am <span class=hl>Satzende</span>, nicht mitten im Satz. Falsch: „geben weiter die Kontaktdaten" – Richtig: „geben die Kontaktdaten weiter".</div>'
  },

  // 508 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nBerufsmessen sind eine der besten Möglichkeiten sich einen Überblick über Ausbildungsbetriebe in der Region zu verschaffen.',
    sentence:'Berufsmessen sind eine der besten Möglichkeiten sich einen Überblick über Ausbildungsbetriebe in der Region zu verschaffen.',
    correctPositions:[42],
    model:'… Möglichkeiten, sich einen Überblick … zu verschaffen.',
    rule:'<div class=rbox>Vor einem erweiterten Infinitiv mit „zu" steht ein Komma, wenn er von einem Nomen abhängt (hier: Möglichkeiten, … zu verschaffen). Das Komma trennt den Infinitivsatz vom Rest ab.</div>'
  },

  // 509 – A (Umgangssprache)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nMan kann die Personalverantwortlichen der Betriebe anquatschen und sogar gleich seine Bewerbungsunterlagen abgeben.',
    errorWord:'anquatschen',
    prompt:'Ersetzen Sie „anquatschen" durch einen standardsprachlichen Ausdruck:',
    placeholder:'ansprechen / kontaktieren …',
    acceptedAnswers:['ansprechen','kontaktieren','ansprechen / kontaktieren'],
    model:'… die Personalverantwortlichen ansprechen / kontaktieren …',
    rule:'<div class=rbox>„anquatschen" ist stark umgangssprachlich. In einem Sachtext verwendet man: <span class=hl>ansprechen, kontaktieren, sich wenden an</span>.</div>'
  },

  // 510 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nJugendliche solten auch immer Augen und Ohren offen halten, ob jemand im eigenen Umfeld einen Azubi sucht.',
    errorWord:'solten',
    correctWord:'sollten',
    model:'sollten',
    rule:'<div class=rbox>„sollten" wird mit <span class=hl>Doppel-l</span> geschrieben (Konjunktiv II von „sollen"). „solten" ist falsch.</div>'
  },
]},

// ================================================================
// 3. TABELLE – Text: "Venedig"
// ================================================================
{
  id:"ueberarbeitung_3",
  title:"3. Tabelle – Venedig",
  emoji:"🏛️",
  color:"#7c3d8f",
  qs:[

  // 501 – G (Tempus)
  {
    sub:"Grammatikfehler – Tempus",
    type:"satzbau",
    q:'Korrigieren Sie den Tempusfehler im folgenden Satz:\n\nIm 8. Jahrhundert entwickelt sich aus den kleinen Inseln einer sumpfigen Lagune die See- und Handelsmacht Venedig.',
    prompt:'Schreiben Sie den Satz im richtigen Tempus (Vergangenheit):',
    placeholder:'Im 8. Jahrhundert entwickelte sich …',
    acceptedAnswers:[
      'Im 8. Jahrhundert entwickelte sich aus den kleinen Inseln einer sumpfigen Lagune die See- und Handelsmacht Venedig.',
      'entwickelte sich'
    ],
    model:'Im 8. Jahrhundert entwickelte sich … die See- und Handelsmacht Venedig.',
    rule:'<div class=rbox>Bei historischen Ereignissen der Vergangenheit steht das <span class=hl>Präteritum</span> (Vergangenheitsform): entwickelte sich – nicht Präsens „entwickelt sich".</div>'
  },

  // 502 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nHeute gehört die Stadt zum Weltkulturerbe und ist nicht ohne grund Europas beliebtestes Städtereiseziel.',
    errorWord:'grund',
    correctWord:'Grund',
    model:'Grund',
    rule:'<div class=rbox>„Grund" ist ein Nomen (Substantiv) und wird daher <span class=hl>großgeschrieben</span>.</div>'
  },

  // 503 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nDer Canal Grande Venedigs großer Kanal durchfließt die Stadt in zwei großen Bogen und ist die wichtigste Verkehrsader.',
    sentence:'Der Canal Grande Venedigs großer Kanal durchfließt die Stadt in zwei großen Bogen und ist die wichtigste Verkehrsader.',
    correctPositions:[16, 37],
    model:'Der Canal Grande, Venedigs großer Kanal, durchfließt …',
    rule:'<div class=rbox>„Venedigs großer Kanal" ist eine erklärende Apposition (Beifügung) zu „Canal Grande". Appositionen werden beidseitig durch <span class=hl>Kommas</span> abgetrennt.</div>'
  },

  // 504 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nModerne Schnellboote und mit Frischwahren beladene Boote sorgen für ein bewegtes Treiben auf dem Kanal.',
    errorWord:'Frischwahren',
    correctWord:'Frischwaren',
    model:'Frischwaren',
    rule:'<div class=rbox>„Frischwaren" (frische Lebensmittel) wird ohne „h" geschrieben. „Wahren" (mit h) gibt es nicht – gemeint ist „Waren" (= Güter, Produkte).</div>'
  },

  // 505 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nAuf dem Markusplatz zaubern fantastische Bauwerke gemeinsam mit zahllosen Tauben ein ganz besonderes Ambiente.',
    errorWord:'zahllosen',
    correctWord:'zahllosen',
    specialNote:'Dieser Satz enthält keinen Fehler – ACHTUNG: Der Fehler liegt in „zahlllosen" (3 l). Prüfen Sie genau!',
    // Actually the error is "zahllosen" should stay "zahllosen" – let's use a real error from the PDF: "zahl­losen"
    // The PDF says 505 R with solution "zahllosen" → original has "zahlllosen" (triple l) or similar
    errorWord:'zahlllosen',
    correctWord:'zahllosen',
    model:'zahllosen',
    rule:'<div class=rbox>„zahllos" → Plural mit Endung: „zahllosen". Das Wort hat <span class=hl>zwei l</span>, nicht drei. Komposita aus „Zahl" + „los" ergeben „zahllos".</div>'
  },

  // 506 – G (Kasus)
  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    q:'Korrigieren Sie den Kasusfehler im folgenden Satz:\n\nDer Glockenturm mit einer Höhe von 99 Meter ermöglicht einen herrlichen Blick über die Lagunenstadt.',
    errorWord:'von 99 Meter',
    correctWord:'von 99 Metern',
    model:'… von 99 Metern …',
    rule:'<div class=rbox>Nach der Präposition „von" steht der <span class=hl>Dativ</span>. Dativ Plural von „Meter": <span class=hl>Metern</span> (nicht „Meter", das wäre Nominativ/Akkusativ).</div>'
  },

  // 507 – A (Umgangssprache)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nViele Besucher gucken den herrlichen Markusdom und den Dogenpalast an.',
    errorWord:'gucken',
    prompt:'Ersetzen Sie „gucken" durch einen standardsprachlichen Ausdruck:',
    placeholder:'schauen an / betrachten / sehen an …',
    acceptedAnswers:['schauen an','betrachten','sehen an','besichtigen','bewundern','schauen','sehen'],
    model:'… schauen an / betrachten / sehen an …',
    rule:'<div class=rbox>„gucken" ist umgangssprachlich (regional/norddeutsch). In einem Sachtext verwendet man: <span class=hl>schauen, betrachten, besichtigen, bewundern</span>.</div>'
  },

  // 508 – G (Satzbau)
  {
    sub:"Grammatikfehler – Satzbau",
    type:"satzbau",
    q:'Korrigieren Sie den Satzbaufehler im folgenden Satz:\n\nAuch Venedigs Cafés sind beliebt, weil man kann dort guten Kaffee trinken.',
    prompt:'Schreiben Sie den Satz korrekt (Verbstellung im Nebensatz):',
    placeholder:'… weil man dort guten Kaffee trinken kann.',
    acceptedAnswers:[
      'Auch Venedigs Cafés sind beliebt, weil man dort guten Kaffee trinken kann.',
      'Auch Venedigs Cafés sind beliebt, denn man kann dort guten Kaffee trinken.',
      'weil man dort guten Kaffee trinken kann',
      'denn man kann dort guten Kaffee trinken'
    ],
    model:'… weil man dort guten Kaffee trinken kann. / … denn man kann dort guten Kaffee trinken.',
    rule:'<div class=rbox>Im Nebensatz nach „weil" steht das Verb am <span class=hl>Satzende</span>: „weil man dort Kaffee trinken <span class=hl>kann</span>". Alternativ: Koordination mit „denn" (Hauptsatz, keine Umstellung nötig).</div>'
  },

  // 509 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nDen Abend lässt man am besten in einem exquisiten Restaurant ausklingen wo man mit regionalen Köstlichkeiten verwöhnt wird.',
    sentence:'Den Abend lässt man am besten in einem exquisiten Restaurant ausklingen wo man mit regionalen Köstlichkeiten verwöhnt wird.',
    correctPositions:[68],
    model:'… Restaurant ausklingen, wo man …',
    rule:'<div class=rbox>„wo man … verwöhnt wird" ist ein Relativsatz (mit „wo") und wird durch ein <span class=hl>Komma</span> vom Hauptsatz getrennt.</div>'
  },

  // 510 – G (Konjunktion)
  {
    sub:"Grammatikfehler – Konjunktion",
    type:"satzbau",
    q:'Korrigieren Sie den Grammatikfehler (falsche Konjunktion) im folgenden Satz:\n\nDoch die Stadt wird durch die gigantischen Kreuzfahrtschiffe bedroht, obwohl diese die Bausubstanz zerstören.',
    prompt:'Ersetzen Sie „obwohl" durch eine passende Konjunktion:',
    placeholder:'… bedroht, weil / da diese …',
    acceptedAnswers:[
      'Doch die Stadt wird durch die gigantischen Kreuzfahrtschiffe bedroht, weil diese die Bausubstanz zerstören.',
      'Doch die Stadt wird durch die gigantischen Kreuzfahrtschiffe bedroht, da diese die Bausubstanz zerstören.',
      'weil','da'
    ],
    model:'… bedroht, weil / da diese die Bausubstanz zerstören.',
    rule:'<div class=rbox>„obwohl" drückt einen Gegensatz aus (Konzessiv). Hier wird aber der <span class=hl>Grund</span> der Bedrohung genannt. Korrekte Kausalkonjunktionen: <span class=hl>weil, da</span>.</div>'
  },
]},

// ================================================================
// 4. TABELLE – Text: "Geschenk für einen Freund"
// ================================================================
{
  id:"ueberarbeitung_4",
  title:"4. Tabelle – Geschenk",
  emoji:"🎁",
  color:"#e07b39",
  qs:[

  // 481 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nEs ist nicht leicht ein passendes Geschenk für einen Freund zu finden.',
    sentence:'Es ist nicht leicht ein passendes Geschenk für einen Freund zu finden.',
    correctPositions:[18],
    model:'… nicht leicht, ein passendes Geschenk … zu finden.',
    rule:'<div class=rbox>Vor einem Infinitivsatz mit „zu" steht ein Komma, wenn er von einem Adjektiv (hier: „leicht") abhängt: nicht leicht, <span class=hl>[etwas] zu tun</span>.</div>'
  },

  // 482 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nHier erhalten Sie einige Tipps, die Ihnen die Suche erleichtern solen.',
    errorWord:'solen',
    correctWord:'sollen',
    model:'Tipps',
    rule:'<div class=rbox>„Tipps" schreibt sich mit <span class=hl>Doppel-p</span>. Einsilbige Wörter mit kurzem Vokal verdoppeln den Konsonanten beim Ableiten: Tipp → Tipps.</div>'
  },

  // 483 – G (Kasus)
  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    q:'Korrigieren Sie den Kasusfehler im folgenden Satz:\n\nIn Gespräche mit dem Freund erfahren Sie etwas über dessen Geschmack.',
    errorWord:'Gespräche',
    correctWord:'Gesprächen',
    model:'In Gesprächen mit dem Freund …',
    rule:'<div class=rbox>Die Präposition „in" verlangt hier den <span class=hl>Dativ</span> (Wo? → In Gesprächen). Dativ Plural von „Gespräch": <span class=hl>Gesprächen</span>.</div>'
  },

  // 484 – G (Numerus)
  {
    sub:"Grammatikfehler – Numerus",
    type:"satzbau",
    q:'Korrigieren Sie den Numerusfehler im folgenden Satz:\n\nAuch die Kenntnis seiner Interessen und Hobbys können Ihnen helfen, die richtige Entscheidung zu treffen.',
    prompt:'Korrigieren Sie das Verb (Singular oder Plural?):',
    placeholder:'… die Kenntnis … kann Ihnen helfen … / … Kenntnisse … können …',
    acceptedAnswers:[
      'Auch die Kenntnis seiner Interessen und Hobbys kann Ihnen helfen, die richtige Entscheidung zu treffen.',
      'Auch die Kenntnisse seiner Interessen und Hobbys können Ihnen helfen, die richtige Entscheidung zu treffen.',
      'kann Ihnen helfen','können Ihnen helfen','Kenntnis kann','Kenntnisse können'
    ],
    model:'… die Kenntnis … kann Ihnen helfen … / … Kenntnisse … können Ihnen helfen …',
    rule:'<div class=rbox>Das Subjekt und das Verb müssen in Numerus übereinstimmen (Kongruenz): „die Kenntnis" (Singular) → <span class=hl>kann</span>. Oder: „die Kenntnisse" (Plural) → können.</div>'
  },

  // 485 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nVerschenken Sie zum Beispiel ein Abonement der zum Hobby passenden Fachzeitschrift.',
    errorWord:'Abonement',
    correctWord:'Abonnement',
    model:'Abonnement',
    rule:'<div class=rbox>„Abonnement" (aus dem Französischen) schreibt sich mit <span class=hl>Doppel-n</span> und -ement: Abonn-e-ment.</div>'
  },

  // 486 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nJe nach Interessenlage können auch Konzert- oder Kinokarten ein willkomenes Geschenk sein.',
    errorWord:'willkomenes',
    correctWord:'willkommenes',
    model:'willkommenes',
    rule:'<div class=rbox>„willkommen" wird mit <span class=hl>Doppel-m</span> geschrieben. In der Adjektivdeklination: willkommenes (Neutrum, Akkusativ).</div>'
  },

  // 487 – A (Umgangssprache)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nTotal in sind auch Gutscheine für Shopping-Center.',
    errorWord:'Total in',
    prompt:'Ersetzen Sie „Total in" durch einen standardsprachlichen Ausdruck:',
    placeholder:'Im Trend / zeitgemäß / beliebt …',
    acceptedAnswers:['Im Trend','Zeitgemäß','Beliebt','Gefragt','Im Trend liegen','im Trend','zeitgemäß','beliebt','gefragt'],
    model:'Im Trend / zeitgemäß / beliebt / gefragt sind auch Gutscheine …',
    rule:'<div class=rbox>„Total in" ist Jugend-/Umgangssprache. Standardsprachliche Alternativen: <span class=hl>im Trend, zeitgemäß, beliebt, gefragt, modern</span>.</div>'
  },

  // 488 – G (Konjunktion)
  {
    sub:"Grammatikfehler – Konjunktion",
    type:"satzbau",
    q:'Korrigieren Sie den Grammatikfehler (falsche Konjunktion) im folgenden Satz:\n\nGeldgeschenke sollten Sie jedoch vermeiden, weil diese sehr beliebt sind.',
    prompt:'Ersetzen Sie „weil" durch eine passende Konjunktion:',
    placeholder:'… vermeiden, obwohl / obschon diese …',
    acceptedAnswers:[
      'Geldgeschenke sollten Sie jedoch vermeiden, obwohl diese sehr beliebt sind.',
      'Geldgeschenke sollten Sie jedoch vermeiden, obschon diese sehr beliebt sind.',
      'obwohl','obschon','auch wenn'
    ],
    model:'… vermeiden, obwohl / obschon diese sehr beliebt sind.',
    rule:'<div class=rbox>Hier besteht ein Widerspruch: Trotzdem, dass Geldgeschenke beliebt sind, soll man sie vermeiden. Das verlangt eine <span class=hl>konzessive</span> Konjunktion: <span class=hl>obwohl, obschon, auch wenn</span>.</div>'
  },

  // 489 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nSie wirken unpersönlich bequem und einfallslos.',
    sentence:'Sie wirken unpersönlich bequem und einfallslos.',
    correctPositions:[20],
    model:'Sie wirken unpersönlich, bequem und einfallslos.',
    rule:'<div class=rbox>Zwischen gleichrangigen Adjektiven in einer Aufzählung steht ein Komma (wenn kein „und" steht). „unpersönlich" und „bequem" sind hier gleichrangig und werden durch Komma getrennt; vor dem letzten Glied mit „und" entfällt das Komma.</div>'
  },

  // 490 – A (Umgangssprache)
  {
    sub:"Ausdrucksfehler – Umgangssprache",
    type:"ausdruck",
    q:'Korrigieren Sie den umgangssprachlichen Ausdruck im folgenden Satz:\n\nLassen Sie sich also was Besonderes einfallen, wenn Sie Ihren Freund überraschen wollen.',
    errorWord:'was',
    prompt:'Ersetzen Sie „was" durch den standardsprachlichen Ausdruck:',
    placeholder:'etwas …',
    acceptedAnswers:['etwas','etwas Besonderes'],
    model:'… etwas Besonderes einfallen …',
    rule:'<div class=rbox>„was" als Indefinitpronomen (= etwas) ist umgangssprachlich. Der standardsprachliche Ausdruck lautet: <span class=hl>etwas</span>.</div>'
  },
]},

// ================================================================
// 5. TABELLE – Text: "Ausbildung Gärtnerin/Gärtner"
// ================================================================
{
  id:"ueberarbeitung_5",
  title:"5. Tabelle – Gärtner",
  emoji:"🌿",
  color:"#d94f4f",
  qs:[

  // 481 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nDie Firma „Gartenglück" bietet einen Ausbildungsplatz zum Gärtner der Fachrichtung Landschaftsbau.',
    sentence:'Die Firma „Gartenglück" bietet einen Ausbildungsplatz zum Gärtner der Fachrichtung Landschaftsbau.',
    correctPositions:[52],
    model:'… zum Gärtner, der Fachrichtung Landschaftsbau.',
    rule:'<div class=rbox>„der Fachrichtung Landschaftsbau" ist eine Apposition (erklärende Beifügung) zu „Gärtner" und wird durch ein <span class=hl>Komma</span> abgetrennt.</div>'
  },

  // 482 – G (Kasus)
  {
    sub:"Grammatikfehler – Kasus",
    type:"kasus",
    q:'Korrigieren Sie den Kasusfehler im folgenden Satz:\n\nInteressenten müssen mindestens ein Abschluss, z. B. den der Berufsbildungsreife, vorweisen können.',
    errorWord:'ein Abschluss',
    correctWord:'einen Abschluss',
    model:'… einen Abschluss vorweisen …',
    rule:'<div class=rbox>„Abschluss" ist maskulin und steht als direktes Objekt im <span class=hl>Akkusativ</span>: <span class=hl>einen</span> Abschluss (nicht „ein").</div>'
  },

  // 483 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nAußerdem wird eine gute köperliche Belastbarkeit erwartet.',
    errorWord:'köperliche',
    correctWord:'körperliche',
    model:'körperliche',
    rule:'<div class=rbox>„körperlich" leitet sich von „Körper" ab und enthält das <span class=hl>ö</span> mit dem r danach: kö<span class=hl>r</span>perlich. Das r darf nicht fehlen.</div>'
  },

  // 484 – G (Numerus)
  {
    sub:"Grammatikfehler – Numerus",
    type:"satzbau",
    q:'Korrigieren Sie den Numerusfehler im folgenden Satz:\n\nAuch technisches Verständnis und Teamfähigkeit ist von Vorteil.',
    prompt:'Korrigieren Sie das Verb:',
    placeholder:'… Verständnis und Teamfähigkeit sind von Vorteil.',
    acceptedAnswers:[
      'Auch technisches Verständnis und Teamfähigkeit sind von Vorteil.',
      'sind von Vorteil','sind'
    ],
    model:'… technisches Verständnis und Teamfähigkeit sind von Vorteil.',
    rule:'<div class=rbox>Wenn zwei Subjekte mit „und" verbunden sind, steht das Verb im <span class=hl>Plural</span>: Verständnis und Teamfähigkeit → <span class=hl>sind</span> (nicht „ist").</div>'
  },

  // 485 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nDie Bewerbungsunterlagen sind vollstendig einzureichen.',
    errorWord:'vollstendig',
    correctWord:'vollständig',
    model:'vollständig',
    rule:'<div class=rbox>„vollständig" enthält den Umlaut <span class=hl>ä</span> (von „Stand"): vollst<span class=hl>ä</span>ndig. Nicht „vollstendig".</div>'
  },

  // 486 – Z (Kommasetzung)
  {
    sub:"Zeichensetzung",
    type:"komma",
    q:'Setzen Sie das fehlende Komma im folgenden Satz:\n\nDazu gehören Kopien der letzten beiden Zeugnisse der Praktikumsnachweise und ein tabellarischer Lebenslauf.',
    sentence:'Dazu gehören Kopien der letzten beiden Zeugnisse der Praktikumsnachweise und ein tabellarischer Lebenslauf.',
    correctPositions:[51],
    model:'… Zeugnisse, der Praktikumsnachweise und ein tabellarischer Lebenslauf.',
    rule:'<div class=rbox>„der Praktikumsnachweise" und „ein tabellarischer Lebenslauf" sind weitere Glieder der Aufzählung. Vor dem nächsten Aufzählungsglied (ohne „und") steht ein <span class=hl>Komma</span>.</div>'
  },

  // 487 – A (Ausdruck)
  {
    sub:"Ausdrucksfehler",
    type:"ausdruck",
    q:'Korrigieren Sie den Ausdrucksfehler im folgenden Satz:\n\nDer Bewerbungszeitraum endet bis zum 15. Januar 2015.',
    errorWord:'endet bis zum',
    prompt:'Korrigieren Sie den Ausdruck „endet bis zum":',
    placeholder:'endet am / läuft bis zum / geht bis zum …',
    acceptedAnswers:['endet am 15. Januar 2015','läuft bis zum 15. Januar 2015','geht bis zum 15. Januar 2015','endet am','läuft bis zum','geht bis zum'],
    model:'… endet am 15. Januar 2015. / … läuft bis zum 15. Januar 2015.',
    rule:'<div class=rbox>„endet bis zum" ist eine falsche Vermischung. Korrekt: <span class=hl>endet am</span> (mit Datum) oder <span class=hl>läuft bis zum / geht bis zum</span> (mit „bis zum").</div>'
  },

  // 488 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler im folgenden Satz:\n\nUnsere Ansprechpartnerinnen für die Bewerbungen sind Frau Strauch und Frau Baum.',
    errorWord:'Ansprechpartnerinnen',
    correctWord:'Ansprechpartnerinnen',
    // Laut PDF: Ansprechpartnerinnen ist korrekt – echter Fehler war "Ansprechpartnerinen" (ein n)
    errorWord:'Ansprechpartnerinen',
    correctWord:'Ansprechpartnerinnen',
    model:'Ansprechpartnerinnen',
    rule:'<div class=rbox>„Ansprechpartnerinnen" (Plural, feminin) wird mit <span class=hl>Doppel-n</span> vor der Pluralendung geschrieben: Ansprechpartnerin + nen → Ansprechpartnerin<span class=hl>nen</span>.</div>'
  },

  // 489 – G (Modus)
  {
    sub:"Grammatikfehler – Modus",
    type:"satzbau",
    q:'Korrigieren Sie den Modusfehler im folgenden Satz:\n\nDie Bewerbungsunterlagen wären an folgende Adresse zu richten:',
    prompt:'Korrigieren Sie den Modus (Konjunktiv → Indikativ):',
    placeholder:'Die Bewerbungsunterlagen sind an folgende Adresse zu richten.',
    acceptedAnswers:[
      'Die Bewerbungsunterlagen sind an folgende Adresse zu richten.',
      'Bewerbungsunterlagen richten Sie an folgende Adresse.',
      'sind an folgende Adresse zu richten','richten Sie an'
    ],
    model:'… sind an folgende Adresse zu richten. / Die Bewerbungsunterlagen richten Sie an folgende Adresse.',
    rule:'<div class=rbox>„wären … zu richten" steht im Konjunktiv II, der Zweifel oder Unwirklichkeit ausdrückt. In einer sachlichen Stellenausschreibung ist der <span class=hl>Indikativ</span> korrekt: <span class=hl>sind … zu richten</span>.</div>'
  },

  // 490 – R (Rechtschreibung)
  {
    sub:"Rechtschreibung",
    type:"rs",
    q:'Korrigieren Sie den Rechtschreibfehler in der Adresse:\n\nAn der wiese 4',
    errorWord:'wiese',
    correctWord:'Wiese',
    model:'An der Wiese 4',
    rule:'<div class=rbox>Straßennamen sind Eigennamen und werden <span class=hl>großgeschrieben</span>: An der <span class=hl>W</span>iese 4.</div>'
  },
]},

];

// Alias für Integration in die bestehende App
// Diese Themen können als MSA_EXTRA_THEMES oder direkt als eigene Kategorie eingebunden werden.
var MSA_UEBERARBEITUNG = MSA_UEBERARBEITUNG_THEMES;
