// ================================================================
// MSA-EXTRA-SATZGLIEDER.JS – 40 Aufgaben, Klasse 10
// ================================================================

var MSA_EXTRA_SATZGLIEDER = [

{
  id:"extra-sg-alle",
  title:"Satzglieder",
  emoji:"📋",
  color:"#2d6b9e",
  qs:[

    // ── ehem. tap-Aufgaben → sort ──────────────────────────────

    { sub:"Satzglieder zuordnen (Marathonläufer)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der erschöpfte Marathonläufer erreicht nach Stunden das Ziel.",
      rows:["Der erschöpfte Marathonläufer","erreicht","nach Stunden","das Ziel"],
      cols:["Akkusativobjekt","Adv. Bestimmung","Prädikat","Subjekt"],
      correct:[3,2,1,0],
      model:"Der erschöpfte Marathonläufer = Subjekt | erreicht = Prädikat | nach Stunden = Adv. Best. | das Ziel = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Subjekt</span>: Wer erreicht? → der Marathonläufer (Nom.)<br><span class=hl>Akkusativobjekt</span>: Was? → das Ziel<br><span class=hl>Adv. Best.</span>: Wann? → nach Stunden</div>"
    },

    { sub:"Satzglieder zuordnen (Schülerin)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die neugierige Schülerin stellt dem Lehrer eine schwierige Frage.",
      rows:["Die neugierige Schülerin","stellt","dem Lehrer","eine schwierige Frage"],
      cols:["Dativobjekt","Akkusativobjekt","Subjekt","Prädikat"],
      correct:[2,3,0,1],
      model:"Die neugierige Schülerin = Subjekt | stellt = Prädikat | dem Lehrer = Dativobjekt | eine schwierige Frage = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Subjekt</span>: Wer stellt? → die Schülerin<br><span class=hl>Dativobjekt</span>: Wem? → dem Lehrer<br><span class=hl>Akkusativobjekt</span>: Was? → eine schwierige Frage</div>"
    },

    { sub:"Satzglieder zuordnen (Ring)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Mein älterer Bruder hat seiner Freundin einen teuren Ring gekauft.",
      rows:["Mein älterer Bruder","hat … gekauft","seiner Freundin","einen teuren Ring"],
      cols:["Akkusativobjekt","Prädikat","Dativobjekt","Subjekt"],
      correct:[3,1,2,0],
      model:"Mein älterer Bruder = Subjekt | hat … gekauft = Prädikat | seiner Freundin = Dativobjekt | einen teuren Ring = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Dativobjekt</span>: Wem? → seiner Freundin<br><span class=hl>Akkusativobjekt</span>: Was? → einen teuren Ring<br><span class=hl>Prädikat</span>: Perfekt → Satzklammer</div>"
    },

    { sub:"Satzglieder zuordnen (Chefin)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Jeden Morgen liest die Chefin ihre E-Mails.",
      rows:["Jeden Morgen","liest","die Chefin","ihre E-Mails"],
      cols:["Subjekt","Prädikat","Akkusativobjekt","Adv. Bestimmung"],
      correct:[3,1,0,2],
      model:"Jeden Morgen = Adv. Best. | liest = Prädikat | die Chefin = Subjekt | ihre E-Mails = Akkusativobjekt",
      rule:"<div class=rbox>Das <span class=hl>Subjekt</span> kann auch nach dem Verb stehen.<br>Umstellprobe: <em>Die Chefin liest jeden Morgen ihre E-Mails.</em></div>"
    },

    { sub:"Satzglieder zuordnen (Futur I – Unternehmen)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Das Unternehmen wird seine Mitarbeiter nächste Woche informieren.",
      rows:["Das Unternehmen","wird … informieren","seine Mitarbeiter","nächste Woche"],
      cols:["Adv. Bestimmung","Akkusativobjekt","Subjekt","Prädikat"],
      correct:[2,3,1,0],
      model:"Das Unternehmen = Subjekt | wird … informieren = Prädikat (Futur I) | seine Mitarbeiter = Akkusativobjekt | nächste Woche = Adv. Best.",
      rule:"<div class=rbox><span class=hl>Futur I</span>: \"wird … informieren\" = Satzklammer → beide Teile bilden gemeinsam das Prädikat.</div>"
    },

    { sub:"Satzglieder zuordnen (Bibliothek)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die Bibliothek verleiht interessierten Lesern kostenlos Bücher.",
      rows:["Die Bibliothek","verleiht","interessierten Lesern","kostenlos","Bücher"],
      cols:["Akkusativobjekt","Adv. Bestimmung","Prädikat","Dativobjekt","Subjekt"],
      correct:[4,2,3,1,0],
      model:"Die Bibliothek = Subjekt | verleiht = Prädikat | interessierten Lesern = Dativobjekt | kostenlos = Adv. Best. | Bücher = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Akkusativobjekt</span> ohne Artikel: \"Bücher\" steht trotzdem im Akkusativ.</div>"
    },

    { sub:"Satzglieder zuordnen (Arzt)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der Arzt empfiehlt dem Patienten dringend mehr Bewegung.",
      rows:["Der Arzt","empfiehlt","dem Patienten","dringend","mehr Bewegung"],
      cols:["Adv. Bestimmung","Subjekt","Akkusativobjekt","Prädikat","Dativobjekt"],
      correct:[1,3,4,0,2],
      model:"Der Arzt = Subjekt | empfiehlt = Prädikat | dem Patienten = Dativobjekt | dringend = Adv. Best. | mehr Bewegung = Akkusativobjekt",
      rule:"<div class=rbox>\"empfehlen\" fordert Dativobjekt (Wem? → dem Patienten) + Akkusativobjekt (Was? → mehr Bewegung).</div>"
    },

    { sub:"Satzglieder zuordnen (Perfekt – Mannschaft)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die Mannschaft hat gestern das wichtige Spiel gewonnen.",
      rows:["Die Mannschaft","hat … gewonnen","gestern","das wichtige Spiel"],
      cols:["Prädikat","Akkusativobjekt","Adv. Bestimmung","Subjekt"],
      correct:[3,0,2,1],
      model:"Die Mannschaft = Subjekt | hat … gewonnen = Prädikat (Perfekt) | gestern = Adv. Best. | das wichtige Spiel = Akkusativobjekt",
      rule:"<div class=rbox>Im <span class=hl>Perfekt</span>: Hilfsverb + Partizip II = Satzklammer → beide Teile = Prädikat.</div>"
    },

    { sub:"Satzglieder zuordnen (gefallen)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Dem kleinen Kind gefällt das neue Spielzeug.",
      rows:["Dem kleinen Kind","gefällt","das neue Spielzeug"],
      cols:["Subjekt","Prädikat","Dativobjekt"],
      correct:[2,1,0],
      model:"Dem kleinen Kind = Dativobjekt | gefällt = Prädikat | das neue Spielzeug = Subjekt",
      rule:"<div class=rbox>Achtung: Bei <span class=hl>gefallen</span> steht das Subjekt im Nominativ.<br>\"das neue Spielzeug\" (Nom.) = Subjekt | \"dem kleinen Kind\" (Dat.) = Dativobjekt</div>"
    },

    { sub:"Satzglieder zuordnen (Brief)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der Schüler schreibt seiner Lehrerin einen langen Brief.",
      rows:["Der Schüler","schreibt","seiner Lehrerin","einen langen Brief"],
      cols:["Akkusativobjekt","Dativobjekt","Prädikat","Subjekt"],
      correct:[3,2,1,0],
      model:"Der Schüler = Subjekt | schreibt = Prädikat | seiner Lehrerin = Dativobjekt | einen langen Brief = Akkusativobjekt",
      rule:"<div class=rbox>\"schreiben\" mit zwei Objekten:<br><span class=hl>Dativobjekt</span>: Wem? → seiner Lehrerin<br><span class=hl>Akkusativobjekt</span>: Was? → einen langen Brief</div>"
    },

    { sub:"Satzglieder zuordnen (versprechen)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der Politiker verspricht den Bürgern mehr Gerechtigkeit.",
      rows:["Der Politiker","verspricht","den Bürgern","mehr Gerechtigkeit"],
      cols:["Dativobjekt","Subjekt","Prädikat","Akkusativobjekt"],
      correct:[1,2,0,3],
      model:"Der Politiker = Subjekt | verspricht = Prädikat | den Bürgern = Dativobjekt | mehr Gerechtigkeit = Akkusativobjekt",
      rule:"<div class=rbox>\"versprechen\": Dativobjekt (Wem? → den Bürgern) + Akkusativobjekt (Was? → mehr Gerechtigkeit)</div>"
    },

    { sub:"Satzglieder zuordnen (Modalverb – Aufsätze)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die Schülerinnen sollen ihre Aufsätze morgen abgeben.",
      rows:["Die Schülerinnen","sollen … abgeben","ihre Aufsätze","morgen"],
      cols:["Adv. Bestimmung","Subjekt","Akkusativobjekt","Prädikat"],
      correct:[1,3,2,0],
      model:"Die Schülerinnen = Subjekt | sollen … abgeben = Prädikat | ihre Aufsätze = Akkusativobjekt | morgen = Adv. Best.",
      rule:"<div class=rbox><span class=hl>Modalverb + Infinitiv</span>: \"sollen … abgeben\" = Satzklammer → gemeinsam das Prädikat.</div>"
    },

    { sub:"Satzglieder zuordnen (Pronomen Wir)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Wir müssen das Projekt bis Freitag abgeben.",
      rows:["Wir","müssen … abgeben","das Projekt","bis Freitag"],
      cols:["Prädikat","Adv. Bestimmung","Akkusativobjekt","Subjekt"],
      correct:[3,0,2,1],
      model:"Wir = Subjekt | müssen … abgeben = Prädikat | das Projekt = Akkusativobjekt | bis Freitag = Adv. Best.",
      rule:"<div class=rbox>Auch <span class=hl>Personalpronomen</span> sind Subjekte.<br>\"Wir\" steht im Nominativ → Subjekt.</div>"
    },

    { sub:"Satzglieder zuordnen (Richter)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der Richter hat dem Zeugen mehrere Fragen gestellt.",
      rows:["Der Richter","hat … gestellt","dem Zeugen","mehrere Fragen"],
      cols:["Akkusativobjekt","Subjekt","Prädikat","Dativobjekt"],
      correct:[1,2,3,0],
      model:"Der Richter = Subjekt | hat … gestellt = Prädikat | dem Zeugen = Dativobjekt | mehrere Fragen = Akkusativobjekt",
      rule:"<div class=rbox>\"Fragen stellen\": Dativobjekt (Wem? → dem Zeugen) + Akkusativobjekt (Was? → mehrere Fragen)</div>"
    },

    { sub:"Satzglieder zuordnen (Professor)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der alte Professor erklärt seinen Studenten die komplizierte Theorie.",
      rows:["Der alte Professor","erklärt","seinen Studenten","die komplizierte Theorie"],
      cols:["Akkusativobjekt","Prädikat","Subjekt","Dativobjekt"],
      correct:[2,1,3,0],
      model:"Der alte Professor = Subjekt | erklärt = Prädikat | seinen Studenten = Dativobjekt | die komplizierte Theorie = Akkusativobjekt",
      rule:"<div class=rbox>\"erklären\": Dativobjekt (Wem? → seinen Studenten) + Akkusativobjekt (Was? → die Theorie)</div>"
    },

    // ── ehem. sort-Aufgaben ────────────────────────────────────

    { sub:"Satzglieder zuordnen (geben)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die engagierte Lehrerin gab ihren Schülern heute ein Lob.",
      rows:["Die engagierte Lehrerin","gab","ihren Schülern","heute","ein Lob"],
      cols:["Dativobjekt","Subjekt","Adv. Bestimmung","Prädikat","Akkusativobjekt"],
      correct:[1,3,0,2,4],
      model:"Die engagierte Lehrerin = Subjekt | gab = Prädikat | ihren Schülern = Dativobjekt | heute = Adv. Best. | ein Lob = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Subjekt</span>: Wer? → die Lehrerin | <span class=hl>Dativobjekt</span>: Wem? → ihren Schülern | <span class=hl>Akkusativobjekt</span>: Was? → ein Lob</div>"
    },

    { sub:"Satzglieder zuordnen (Futur I – Moderatorin)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die Moderatorin wird dem Publikum täglich die aktuellen Zahlen vorstellen.",
      rows:["Die Moderatorin","wird … vorstellen","dem Publikum","täglich","die aktuellen Zahlen"],
      cols:["Prädikat","Adv. Bestimmung","Akkusativobjekt","Subjekt","Dativobjekt"],
      correct:[3,0,4,1,2],
      model:"Die Moderatorin = Subjekt | wird … vorstellen = Prädikat | dem Publikum = Dativobjekt | täglich = Adv. Best. | die aktuellen Zahlen = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Futur I</span>: \"wird … vorstellen\" = Satzklammer → Prädikat.<br>Dativobjekt (Wem?) steht vor Akkusativobjekt (Was?).</div>"
    },

    { sub:"Satzglieder zuordnen (zeigen)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der Erfinder zeigte seinem Team gestern seine neueste Erfindung.",
      rows:["Der Erfinder","zeigte","seinem Team","gestern","seine neueste Erfindung"],
      cols:["Adv. Bestimmung","Prädikat","Dativobjekt","Akkusativobjekt","Subjekt"],
      correct:[4,1,2,0,3],
      model:"Der Erfinder = Subjekt | zeigte = Prädikat | seinem Team = Dativobjekt | gestern = Adv. Best. | seine neueste Erfindung = Akkusativobjekt",
      rule:"<div class=rbox>\"zeigen\": Dativobjekt (Wem? → seinem Team) + Akkusativobjekt (Was? → seine Erfindung)</div>"
    },

    { sub:"Satzglieder zuordnen (erklären – Direktorin)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Die Direktorin erklärt den Eltern ruhig die neue Schulregel.",
      rows:["Die Direktorin","erklärt","den Eltern","ruhig","die neue Schulregel"],
      cols:["Akkusativobjekt","Prädikat","Dativobjekt","Adv. Bestimmung","Subjekt"],
      correct:[4,1,2,3,0],
      model:"Die Direktorin = Subjekt | erklärt = Prädikat | den Eltern = Dativobjekt | ruhig = Adv. Best. | die neue Schulregel = Akkusativobjekt",
      rule:"<div class=rbox>\"erklären\": Dativobjekt (Wem? → den Eltern) + Akkusativobjekt (Was? → die Schulregel)</div>"
    },

    { sub:"Satzglieder zuordnen (übergeben – Staatsanwalt)", type:"sort",
      q:"<b>Ordne zu</b>: Weise jedem Satzteil das richtige Satzglied zu, indem du ihn in die passende Spalte ziehst.\nSatz: Der Staatsanwalt übergab dem Richter vertraulich das wichtige Dokument.",
      rows:["Der Staatsanwalt","übergab","dem Richter","vertraulich","das wichtige Dokument"],
      cols:["Dativobjekt","Subjekt","Akkusativobjekt","Adv. Bestimmung","Prädikat"],
      correct:[1,4,0,3,2],
      model:"Der Staatsanwalt = Subjekt | übergab = Prädikat | dem Richter = Dativobjekt | vertraulich = Adv. Best. | das wichtige Dokument = Akkusativobjekt",
      rule:"<div class=rbox>\"übergeben\": Dativobjekt (Wem? → dem Richter) + Akkusativobjekt (Was? → das Dokument)</div>"
    },

    // ── MC-Aufgaben ────────────────────────────────────────────

    { sub:"MC: Dativobjekt (empfehlen)", type:"mc",
      q:"Die freundliche Verkäuferin empfiehlt der Kundin ein neues Parfüm.\n\n<b>Bestimme</b> das Satzglied: \"der Kundin\"?",
      o:["Subjekt","Akkusativobjekt","Dativobjekt","Adverbiale Bestimmung"],
      c:2,
      model:"Dativobjekt: Wem empfiehlt sie? → der Kundin (Dativ).",
      rule:"<div class=rbox><span class=hl>Dativobjekt</span>: Wem? → der Kundin (Dativ Fem. Sg.).<br>Probe: Ersetze durch <em>ihr</em> → empfiehlt <em>ihr</em> ein Parfüm. ✓</div>"
    },

    { sub:"MC: Subjekt bei 'gefallen'", type:"mc",
      q:"Das Konzert hat dem Publikum sehr gut gefallen.\n\n<b>Bestimme</b> das Satzglied: \"Das Konzert\"?",
      o:["Dativobjekt","Adverbiale Bestimmung","Akkusativobjekt","Subjekt"],
      c:3,
      model:"Subjekt: Was hat gefallen? → Das Konzert (Nominativ). 'dem Publikum' ist das Dativobjekt!",
      rule:"<div class=rbox>Bei <span class=hl>gefallen</span>: Subjekt = \"Das Konzert\" (Nom.) | Dativobjekt = \"dem Publikum\" (Dat.)</div>"
    },

    { sub:"MC: Prädikat (Modalverb)", type:"mc",
      q:"Sie kann die schwierige Aufgabe leider nicht lösen.\n\n<b>Bestimme</b> das Prädikat: Welche Wörter bilden das Prädikat?",
      o:["kann … lösen","Sie … lösen","nicht … lösen","kann … nicht"],
      c:0,
      model:"Prädikat: kann … lösen (Modalverb + Infinitiv = Satzklammer).",
      rule:"<div class=rbox><span class=hl>Modalverb + Infinitiv</span> = Prädikat in der Satzklammer.<br>\"nicht\" ist Negationspartikel, kein Teil des Prädikats.</div>"
    },

    { sub:"MC: Genitivattribut", type:"mc",
      q:"Das Haus des Architekten wurde mehrfach ausgezeichnet.\n\n<b>Bestimme</b> das Satzglied: \"des Architekten\"?",
      o:["Akkusativobjekt","Subjekt","Genitivattribut","Dativobjekt"],
      c:2,
      model:"Genitivattribut: Wessen Haus? → des Architekten (Genitiv).",
      rule:"<div class=rbox><span class=hl>Genitivattribut</span>: Wessen? → Genitiv. Kein eigenständiges Satzglied, sondern Attribut zu \"Haus\".</div>"
    },

    { sub:"MC: Akkusativobjekt (übergeben)", type:"mc",
      q:"Der Bürgermeister übergibt dem Verein eine großzügige Spende.\n\n<b>Bestimme</b> das Satzglied: \"eine großzügige Spende\"?",
      o:["Adverbiale Bestimmung","Akkusativobjekt","Dativobjekt","Subjekt"],
      c:1,
      model:"Akkusativobjekt: Was übergibt er? → eine großzügige Spende (Akkusativ).",
      rule:"<div class=rbox><span class=hl>Akkusativobjekt</span>: Was? → eine Spende | Dativobjekt daneben: Wem? → dem Verein</div>"
    },

    { sub:"MC: Adverbiale Best. (konzessiv)", type:"mc",
      q:"Trotz des Streiks fährt die Straßenbahn regulär.\n\n<b>Bestimme</b> das Satzglied: \"Trotz des Streiks\"?",
      o:["Genitivattribut","Dativobjekt","Akkusativobjekt","Adverbiale Bestimmung"],
      c:3,
      model:"Adverbiale Bestimmung (konzessiv): obwohl es einen Streik gibt.",
      rule:"<div class=rbox><span class=hl>Adv. Best. konzessiv</span>: \"trotz + Genitiv\" = eigenständiges Satzglied.</div>"
    },

    { sub:"MC: Adverbiale Best. der Art", type:"mc",
      q:"Der Sportler trainiert täglich intensiv.\n\n<b>Bestimme</b> das Satzglied: \"intensiv\"?",
      o:["Akkusativobjekt","Prädikativ","Adverbiale Bestimmung","Attribut"],
      c:2,
      model:"Adverbiale Bestimmung der Art: Wie trainiert er? → intensiv.",
      rule:"<div class=rbox><span class=hl>Adv. Best. der Art</span>: Wie? → intensiv. Bezieht sich auf das Verb, nicht auf ein Nomen.</div>"
    },

    { sub:"MC: Dativobjekt im Passiv", type:"mc",
      q:"Dem alten Lehrer wurde ein Preis verliehen.\n\n<b>Bestimme</b> das Satzglied: \"Dem alten Lehrer\"?",
      o:["Adverbiale Bestimmung","Subjekt","Akkusativobjekt","Dativobjekt"],
      c:3,
      model:"Dativobjekt: Wem wurde ein Preis verliehen? → Dem alten Lehrer. Das Subjekt ist 'ein Preis'.",
      rule:"<div class=rbox>Im <span class=hl>Passiv</span> bleibt das Dativobjekt als Dativobjekt bestehen.<br>Subjekt = \"ein Preis\" (Nom.) | Dativobjekt = \"Dem alten Lehrer\" (Dat.)</div>"
    },

    { sub:"MC: Dativobjekt (helfen)", type:"mc",
      q:"Der Sozialarbeiter hilft den Jugendlichen bei ihren Problemen.\n\n<b>Bestimme</b> das Satzglied: \"den Jugendlichen\"?",
      o:["Dativobjekt","Akkusativobjekt","Adverbiale Bestimmung","Subjekt"],
      c:0,
      model:"Dativobjekt: Wem hilft er? → den Jugendlichen. 'helfen' fordert immer Dativ.",
      rule:"<div class=rbox>\"<span class=hl>helfen</span>\" verlangt immer Dativobjekt (Wem?). Probe: Er hilft <em>ihnen</em>. ✓</div>"
    },

    { sub:"MC: Adverbiale Best. (kausal)", type:"mc",
      q:"Wegen des schlechten Wetters findet das Konzert nicht statt.\n\n<b>Bestimme</b> das Satzglied: \"Wegen des schlechten Wetters\"?",
      o:["Akkusativobjekt","Attribut","Adverbiale Bestimmung","Dativobjekt"],
      c:2,
      model:"Adverbiale Bestimmung des Grundes: Warum findet es nicht statt?",
      rule:"<div class=rbox><span class=hl>Adv. Best. kausal</span>: Warum? → \"wegen + Genitiv\" = eigenständiges Satzglied.</div>"
    },

    { sub:"Dativ oder Akkusativ? (kaufen)", type:"mc",
      q:"Der Vater kauft seinem Sohn ein Fahrrad.\n\n<b>Erschließe</b> das Satzglied: Mit welcher Frage erschließt man \"seinem Sohn\"?",
      o:["Wer oder was?","Womit?","Wen oder was?","Wem?"],
      c:3,
      model:"Wem? → Dativobjekt. Der Sohn ist die Person, der etwas gekauft wird.",
      rule:"<div class=rbox><span class=hl>Dativobjekt</span>: Wem kauft er das Fahrrad? → seinem Sohn.</div>"
    },

    { sub:"Dativ oder Akkusativ? (erklären)", type:"mc",
      q:"Die Trainerin erklärt den Spielern die neue Taktik.\n\n<b>Erschließe</b> das Satzglied: Mit welcher Frage erschließt man \"die neue Taktik\"?",
      o:["Wem?","Wen oder was?","Wessen?","Wer oder was?"],
      c:1,
      model:"Wen oder was? → Akkusativobjekt. Die Taktik ist das, was erklärt wird.",
      rule:"<div class=rbox><span class=hl>Akkusativobjekt</span>: Wen oder was erklärt sie? → die Taktik.</div>"
    },

    { sub:"Dativ oder Akkusativ? (danken)", type:"mc",
      q:"Er dankt seiner Mutter für alles.\n\n<b>Bestimme</b> das Satzglied: \"seiner Mutter\"?",
      o:["Subjekt (Wer?)","Adverbiale Bestimmung","Dativobjekt (Wem?)","Akkusativobjekt (Wen oder was?)"],
      c:2,
      model:"Dativobjekt: 'danken' fordert immer Dativ – Wem dankt er? → seiner Mutter.",
      rule:"<div class=rbox>\"<span class=hl>danken</span>\" = reines Dativverb: danken, helfen, gratulieren, folgen.</div>"
    },

    { sub:"Dativ oder Akkusativ? (übergeben)", type:"mc",
      q:"Die Studentin übergibt ihrem Professor die fertige Hausarbeit.\n\n<b>Bestimme</b>: Welche Objekte verlangt \"übergeben\"?",
      o:["kein Objekt","nur ein Akkusativobjekt","nur ein Dativobjekt","ein Dativobjekt UND ein Akkusativobjekt"],
      c:3,
      model:"Dativ + Akkusativ: Wem? → ihrem Professor | Was? → die Hausarbeit.",
      rule:"<div class=rbox>Verben des Gebens: <span class=hl>Dativobjekt</span> (Wem?) + <span class=hl>Akkusativobjekt</span> (Was?)</div>"
    },

    { sub:"Dativ oder Akkusativ? (helfen – Begründung)", type:"mc",
      q:"Wir helfen dem Nachbarn beim Umzug.\n\n<b>Begründe</b>: Warum ist \"dem Nachbarn\" ein Dativobjekt?",
      o:["Weil es keine Akkusativform gibt","Weil es direkt hinter dem Verb steht","Weil 'dem' zufällig ein Dativartikel ist","Weil 'helfen' grammatisch immer ein Dativobjekt fordert"],
      c:3,
      model:"'helfen' ist ein Dativverb: Es ordnet dem Objekt grammatisch den Dativ zu.",
      rule:"<div class=rbox>Die <span class=hl>Verbvalenz</span> entscheidet: \"helfen\" fordert Dativobjekt.<br>Dativverben: helfen, danken, vertrauen, gehorchen, nützen, schaden.</div>"
    },

    // ── Lückentexte ────────────────────────────────────────────

    { sub:"Lückentext: Dat. + Akk. benennen", type:"fill",
      q:"<b>Trage</b> die Satzglied-Bezeichnung in die Lücke ein:\nSatz: Das Unternehmen hat seinen Mitarbeitern eine Prämie ausgezahlt.",
      sentences:[
        "\"Das Unternehmen\" ist das ____.",
        "\"hat … ausgezahlt\" ist das ____.",
        "\"seinen Mitarbeitern\" ist das ____.",
        "\"eine Prämie\" ist das ____."
      ],
      correct:[["Subjekt"],["Prädikat"],["Dativobjekt"],["Akkusativobjekt"]],
      model:"Das Unternehmen = Subjekt | hat … ausgezahlt = Prädikat | seinen Mitarbeitern = Dativobjekt | eine Prämie = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Subjekt</span>: Wer? | <span class=hl>Dativobjekt</span>: Wem? | <span class=hl>Akkusativobjekt</span>: Was? | <span class=hl>Prädikat</span>: Satzklammer im Perfekt.</div>"
    },

    { sub:"Lückentext: Fragewörter nennen", type:"fill",
      q:"<b>Ergänze</b> die richtige Fragewort-Frage für das jeweilige Satzglied:\nSatz: Der Trainer belobigt die Klasse ausdrücklich.",
      sentences:[
        "Nach dem Subjekt fragt man: ____?",
        "Nach dem Akkusativobjekt fragt man: ____?",
        "Nach der adverbialen Bestimmung fragt man: ____?"
      ],
      correct:[["Wer oder was","wer oder was","Wer","wer"],["Wen oder was","wen oder was","Wen","wen"],["Wie","wie"]],
      model:"Subjekt → Wer oder was? | Akkusativobjekt → Wen oder was? | Adv. Best. der Art → Wie?",
      rule:"<div class=rbox><span class=hl>Subjekt</span>: Wer oder was? | <span class=hl>Akkusativobjekt</span>: Wen oder was? | <span class=hl>Dativobjekt</span>: Wem? | <span class=hl>Adv. Best. der Art</span>: Wie?</div>"
    },

    { sub:"Lückentext: Passiv-Satz", type:"fill",
      q:"<b>Trage</b> die Satzglied-Bezeichnung in die Lücke ein:\nSatz: Das Protokoll wurde dem Vorstand vorgelesen.",
      sentences:[
        "\"Das Protokoll\" ist das ____.",
        "\"wurde … vorgelesen\" ist das ____.",
        "\"dem Vorstand\" ist das ____."
      ],
      correct:[["Subjekt"],["Prädikat"],["Dativobjekt"]],
      model:"Das Protokoll = Subjekt | wurde … vorgelesen = Prädikat (Passiv) | dem Vorstand = Dativobjekt",
      rule:"<div class=rbox>Im <span class=hl>Passiv</span> bleibt das Dativobjekt als Dativobjekt erhalten.</div>"
    },

    { sub:"Lückentext: Futur I mit zwei Objekten", type:"fill",
      q:"<b>Trage</b> die Satzglied-Bezeichnung in die Lücke ein:\nSatz: Die Direktorin wird den Schülern morgen das Ergebnis mitteilen.",
      sentences:[
        "\"Die Direktorin\" ist das ____.",
        "\"wird … mitteilen\" ist das ____.",
        "\"den Schülern\" ist das ____.",
        "\"das Ergebnis\" ist das ____."
      ],
      correct:[["Subjekt"],["Prädikat"],["Dativobjekt"],["Akkusativobjekt"]],
      model:"Die Direktorin = Subjekt | wird … mitteilen = Prädikat | den Schülern = Dativobjekt | das Ergebnis = Akkusativobjekt",
      rule:"<div class=rbox>\"mitteilen\": Dativobjekt (Wem?) + Akkusativobjekt (Was?)<br><span class=hl>Futur I</span>: \"wird … mitteilen\" = Satzklammer.</div>"
    },

    { sub:"Lückentext: Subjekt bei 'gelingen'", type:"fill",
      q:"<b>Trage</b> die Satzglied-Bezeichnung in die Lücke ein. <b>Beachte</b>: Was gelang – nicht wem!\nSatz: Dem Schriftsteller gelang ein großer Erfolg.",
      sentences:[
        "\"Dem Schriftsteller\" ist das ____.",
        "\"gelang\" ist das ____.",
        "\"ein großer Erfolg\" ist das ____."
      ],
      correct:[["Dativobjekt"],["Prädikat"],["Subjekt"]],
      model:"Dem Schriftsteller = Dativobjekt | gelang = Prädikat | ein großer Erfolg = Subjekt",
      rule:"<div class=rbox>\"<span class=hl>gelingen</span>\" wie \"gefallen\": Subjekt im Nominativ = \"ein großer Erfolg\"<br>\"Dem Schriftsteller\" = Dativobjekt (Wem gelang es?)</div>"
    }

  ]
}

]; // Ende MSA_EXTRA_SATZGLIEDER
