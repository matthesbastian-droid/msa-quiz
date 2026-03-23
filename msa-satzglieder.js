// ================================================================
// MSA-SATZGLIEDER.JS
// Satzgliedbestimmung – ein Themenfeld, 20 Aufgaben, 4 Typen
//
// Aufgabentypen:
//   "satzglied"  – Wörter anklicken und Satzglied zuweisen
//   "mc"         – Multiple Choice: Welches Satzglied ist markiert?
//   "choose"     – Satzteil aus Optionen auswählen (wie Komma-Typ)
//   "fill"       – Lückentext: Satzglied-Bezeichnung eintragen
// ================================================================

var MSA_EXTRA_SATZGLIEDER = [

{
  id: "extra_satzglieder",  // ⬅️ geändert von "satzglieder"
  title: "Satzglieder",
  emoji: "🔍",
  color: "#2d6b9e",
  qs: [

    // ── Typ: satzglied (Wörter anklicken) ─────────────────────────

    { sub:"Subjekt & Prädikat", type:"satzglied",
      q:"<b>Bestimme</b> die Satzglieder: <b>Klicke</b> jedes Wort an und <b>wähle</b> das passende Satzglied aus dem Menü.",
      tokens:["Der","Hund","bellt","laut","."],
      options:["Subjekt","Prädikat","Akkusativobjekt","Dativobjekt","Adverbiale Bestimmung","Attribut"],
      correct:{"0":"Attribut","1":"Subjekt","2":"Prädikat","3":"Adverbiale Bestimmung","4":"-"},
      model:"Der (Attr.) Hund (Subj.) bellt (Präd.) laut (Adv. Bestimmung).",
      rule:"<div class=rbox><span class=hl>Subjekt</span>: Wer bellt? → der Hund (Nominativ).<br><span class=hl>Prädikat</span>: Was tut er? → bellt.<br><span class=hl>Adverbiale Bestimmung</span>: Wie? → laut.<br><span class=hl>Attribut</span>: Begleiter des Nomens (Artikel).</div>"
    },

    { sub:"Akkusativobjekt erkennen", type:"satzglied",
      q:"<b>Bestimme</b> alle Satzglieder: <b>Klicke</b> jedes Wort an und <b>wähle</b> das passende Satzglied aus dem Menü.",
      tokens:["Lisa","liest","ein","spannendes","Buch","."],
      options:["Subjekt","Prädikat","Akkusativobjekt","Dativobjekt","Adverbiale Bestimmung","Attribut"],
      correct:{"0":"Subjekt","1":"Prädikat","2":"Attribut","3":"Attribut","4":"Akkusativobjekt","5":"-"},
      model:"Lisa (Subj.) liest (Präd.) ein spannendes (Attr.) Buch (Akk.-Obj.).",
      rule:"<div class=rbox><span class=hl>Akkusativobjekt</span>: Wen oder was liest sie? → ein Buch.<br>Probe: Ersetze durch „es" → sie liest <em>es</em> ✓.<br><span class=hl>Attribut</span>: Artikel und Adjektiv vor dem Nomen.</div>"
    },

    { sub:"Dativobjekt erkennen", type:"satzglied",
      q:"<b>Bestimme</b> die Satzglieder: <b>Klicke</b> jedes Wort an und <b>wähle</b> das passende Satzglied aus dem Menü.",
      tokens:["Er","hilft","seiner","Mutter","gerne","."],
      options:["Subjekt","Prädikat","Akkusativobjekt","Dativobjekt","Adverbiale Bestimmung","Attribut"],
      correct:{"0":"Subjekt","1":"Prädikat","2":"Attribut","3":"Dativobjekt","4":"Adverbiale Bestimmung","5":"-"},
      model:"Er (Subj.) hilft (Präd.) seiner (Attr.) Mutter (Dat.-Obj.) gerne (Adv. Best.).",
      rule:"<div class=rbox><span class=hl>Dativobjekt</span>: Wem hilft er? → seiner Mutter (Dativ).<br>Probe: Ersetze durch „ihr" → er hilft <em>ihr</em> ✓.</div>"
    },

    { sub:"Dativ- und Akkusativobjekt", type:"satzglied",
      q:"<b>Bestimme</b> alle Satzglieder: <b>Klicke</b> jedes Wort an und <b>wähle</b> das passende Satzglied aus dem Menü.",
      tokens:["Die","Lehrerin","gibt","dem","Schüler","ein","Heft","."],
      options:["Subjekt","Prädikat","Akkusativobjekt","Dativobjekt","Adverbiale Bestimmung","Attribut"],
      correct:{"0":"Attribut","1":"Subjekt","2":"Prädikat","3":"Attribut","4":"Dativobjekt","5":"Attribut","6":"Akkusativobjekt","7":"-"},
      model:"Die Lehrerin (Subj.) gibt (Präd.) dem Schüler (Dat.-Obj.) ein Heft (Akk.-Obj.).",
      rule:"<div class=rbox><span class=hl>Dativobjekt</span>: Wem gibt sie? → dem Schüler.<br><span class=hl>Akkusativobjekt</span>: Was gibt sie? → ein Heft.<br>Artikel = Attribute zum jeweiligen Nomen.</div>"
    },

    { sub:"Mehrteiliges Prädikat", type:"satzglied",
      q:"<b>Bestimme</b> die Satzglieder: <b>Klicke</b> jedes Wort an und <b>wähle</b> das passende Satzglied. <b>Beachte</b>: Das Prädikat ist zweiteilig!",
      tokens:["Er","muss","das","Formular","sofort","ausfüllen","."],
      options:["Subjekt","Prädikat","Akkusativobjekt","Dativobjekt","Adverbiale Bestimmung","Attribut"],
      correct:{"0":"Subjekt","1":"Prädikat","2":"Attribut","3":"Akkusativobjekt","4":"Adverbiale Bestimmung","5":"Prädikat","6":"-"},
      model:"Er (Subj.) muss … ausfüllen (Präd.) das Formular (Akk.-Obj.) sofort (Adv.).",
      rule:"<div class=rbox><span class=hl>Mehrteiliges Prädikat</span>: Modalverb + Infinitiv bilden gemeinsam das Prädikat (Satzklammer).<br>„muss" an Pos. 2, „ausfüllen" am Satzende.</div>"
    },

    // ── Typ: mc (Multiple Choice) ──────────────────────────────────

    { sub:"MC: Satzglied bestimmen", type:"mc",
      q:"<b>Bestimme</b> das Satzglied: „Lisa kauft einen neuen Rucksack."\n\nWelches Satzglied ist „einen neuen Rucksack"?",
      o:["Subjekt","Prädikat","Akkusativobjekt","Dativobjekt"],
      c:2,
      model:"Akkusativobjekt: Wen oder was kauft Lisa? → einen neuen Rucksack.",
      rule:"<div class=rbox>Das <span class=hl>Akkusativobjekt</span> antwortet auf „Wen oder was?". Probe: Sie kauft <em>ihn</em> ✓.</div>"
    },

    { sub:"MC: Adverbiale Bestimmung", type:"mc",
      q:"<b>Bestimme</b> das Satzglied: „Wir fahren morgen nach Hamburg."\n\nWelches Satzglied ist „morgen"?",
      o:["Attribut","Adverbiale Bestimmung","Dativobjekt","Akkusativobjekt"],
      c:1,
      model:"Adverbiale Bestimmung der Zeit: Wann fahren wir? → morgen.",
      rule:"<div class=rbox>Die <span class=hl>adverbiale Bestimmung der Zeit</span> antwortet auf „Wann?".<br>„morgen" ist ein Temporaladverb.</div>"
    },

    { sub:"MC: Subjekt finden", type:"mc",
      q:"<b>Bestimme</b> das Satzglied: „Dem kleinen Kind gefällt das Spielzeug."\n\nWelches Satzglied ist „dem kleinen Kind"?",
      o:["Subjekt","Dativobjekt","Akkusativobjekt","Adverbiale Bestimmung"],
      c:1,
      model:"Dativobjekt: Wem gefällt das Spielzeug? → dem kleinen Kind.",
      rule:"<div class=rbox>Achtung: „gefallen" verlangt ein <span class=hl>Dativobjekt</span> (Wem?), nicht ein Subjekt.<br>Das Subjekt ist „das Spielzeug" (Nominativ, Wer/Was?).</div>"
    },

    { sub:"MC: Prädikat erkennen", type:"mc",
      q:"<b>Bestimme</b> das Prädikat: „Sie hat gestern viel gelernt."\n\nWelche Wörter bilden das Prädikat?",
      o:["hat … gelernt","Sie … gelernt","gestern … gelernt","hat … gestern"],
      c:0,
      model:"Prädikat: hat … gelernt (Perfekt – zweiteiliges Prädikat, Satzklammer).",
      rule:"<div class=rbox>Im <span class=hl>Perfekt</span> steht das Hilfsverb (hat/ist) an Position 2, das Partizip II am Satzende. Beide Teile bilden gemeinsam das Prädikat.</div>"
    },

    { sub:"MC: Attribut oder Adverbiale?", type:"mc",
      q:"<b>Bestimme</b> das Satzglied: „Das rote Auto steht dort."\n\nWelches Satzglied ist „rote"?",
      o:["Adverbiale Bestimmung","Prädikat","Attribut","Dativobjekt"],
      c:2,
      model:"Attribut: „rote" ist ein Adjektivattribut zum Nomen „Auto".",
      rule:"<div class=rbox><span class=hl>Attribut</span>: Ein Begleiter/Ergänzung des Nomens, kein eigenständiges Satzglied.<br>Probe: Das Attribut lässt sich nicht allein umstellen.</div>"
    },

    { sub:"MC: Präpositionalobjekt", type:"mc",
      q:"<b>Bestimme</b> das Satzglied: „Sie wartet auf den Bus."\n\nWelches Satzglied ist „auf den Bus"?",
      o:["Adverbiale Bestimmung","Präpositionalobjekt","Akkusativobjekt","Dativobjekt"],
      c:1,
      model:"Präpositionalobjekt: „warten auf" ist eine feste Verbverbindung.",
      rule:"<div class=rbox><span class=hl>Präpositionalobjekt</span>: Die Präposition ist fest mit dem Verb verbunden (warten auf, sich freuen über, denken an).<br>Probe: „Worauf wartet sie?" → Objektfrage ✓.</div>"
    },

    // ── Typ: choose (Satzteil auswählen) ──────────────────────────

    { sub:"Satzteil: Subjekt auswählen", type:"choose",
      q:"<b>Wähle</b> den Satzteil aus, der das Subjekt ist:\n\n„Jeden Morgen kocht meine Mutter Kaffee."",
      rows:["Jeden Morgen kocht meine Mutter Kaffee."],
      variants:[["Jeden Morgen","meine Mutter","Kaffee","kocht"]],
      correct:["meine Mutter"],
      model:"Subjekt: meine Mutter (Wer kocht? → meine Mutter).",
      rule:"<div class=rbox>Das <span class=hl>Subjekt</span> steht im Nominativ und antwortet auf „Wer oder was?".<br>Es kann auch nach dem Verb stehen – Umstellprobe hilft!</div>"
    },

    { sub:"Satzteil: Akkusativobjekt auswählen", type:"choose",
      q:"<b>Wähle</b> den Satzteil aus, der das Akkusativobjekt ist:\n\n„Der Vater liest seiner Tochter ein Märchen vor."",
      rows:["Der Vater liest seiner Tochter ein Märchen vor."],
      variants:[["Der Vater","seiner Tochter","ein Märchen","liest … vor"]],
      correct:["ein Märchen"],
      model:"Akkusativobjekt: ein Märchen (Wen oder was liest er vor? → ein Märchen).",
      rule:"<div class=rbox><span class=hl>Akkusativobjekt</span>: Wen oder was? → ein Märchen (Akkusativ).<br>Das Dativobjekt ist hier „seiner Tochter" (Wem?).</div>"
    },

    { sub:"Satzteil: Dativobjekt auswählen", type:"choose",
      q:"<b>Wähle</b> den Satzteil aus, der das Dativobjekt ist:\n\n„Die Ärztin erklärt dem Patienten die Diagnose."",
      rows:["Die Ärztin erklärt dem Patienten die Diagnose."],
      variants:[["Die Ärztin","dem Patienten","die Diagnose","erklärt"]],
      correct:["dem Patienten"],
      model:"Dativobjekt: dem Patienten (Wem erklärt sie? → dem Patienten).",
      rule:"<div class=rbox><span class=hl>Dativobjekt</span>: Wem? → dem Patienten (Dativ).<br>Das Akkusativobjekt ist „die Diagnose" (Wen oder was?).</div>"
    },

    { sub:"Satzteil: Adverbiale Bestimmung", type:"choose",
      q:"<b>Wähle</b> den Satzteil aus, der die adverbiale Bestimmung des Ortes ist:\n\n„Die Kinder spielen nachmittags im Park."",
      rows:["Die Kinder spielen nachmittags im Park."],
      variants:[["Die Kinder","nachmittags","im Park","spielen"]],
      correct:["im Park"],
      model:"Adverbiale Bestimmung des Ortes: im Park (Wo spielen sie? → im Park).",
      rule:"<div class=rbox><span class=hl>Adv. Best. des Ortes</span>: Wo? Wohin? Woher? → im Park.<br>„nachmittags" ist eine adverbiale Bestimmung der Zeit (Wann?).</div>"
    },

    { sub:"Satzteil: Prädikat auswählen", type:"choose",
      q:"<b>Wähle</b> den Satzteil aus, der das Prädikat ist:\n\n„Tom wird morgen seinen Freund besuchen."",
      rows:["Tom wird morgen seinen Freund besuchen."],
      variants:[["Tom","morgen","seinen Freund","wird … besuchen"]],
      correct:["wird … besuchen"],
      model:"Prädikat: wird … besuchen (Futur I – Satzklammer).",
      rule:"<div class=rbox>Im <span class=hl>Futur I</span> bilden „werden" + Infinitiv gemeinsam das Prädikat.<br>Beide Teile gehören zusammen: „wird" (Pos. 2) und „besuchen" (Satzende).</div>"
    },

    { sub:"Satzteil: Genitivattribut", type:"choose",
      q:"<b>Wähle</b> den Satzteil aus, der ein Genitivattribut ist:\n\n„Das Auto des Nachbarn steht im Weg."",
      rows:["Das Auto des Nachbarn steht im Weg."],
      variants:[["Das Auto","des Nachbarn","im Weg","steht"]],
      correct:["des Nachbarn"],
      model:"Genitivattribut: des Nachbarn (Wessen Auto? → des Nachbarn).",
      rule:"<div class=rbox><span class=hl>Genitivattribut</span>: Beantwortet die Frage „Wessen?" und steht im Genitiv.<br>Es ist kein eigenständiges Satzglied, sondern Attribut zum Subjekt.</div>"
    },

    // ── Typ: fill (Lückentext) ─────────────────────────────────────

    { sub:"Lückentext: Satzglieder benennen", type:"fill",
      q:"<b>Trage</b> das passende Satzglied in die Lücke ein:\n\n„Meine Schwester schenkt mir ein Buch."",
      sentences:[
        "„Meine Schwester" ist das ____.",
        "„schenkt" ist das ____.",
        "„mir" ist das ____.",
        "„ein Buch" ist das ____."
      ],
      correct:[["Subjekt"],["Prädikat"],["Dativobjekt"],["Akkusativobjekt"]],
      model:"Meine Schwester = Subjekt | schenkt = Prädikat | mir = Dativobjekt | ein Buch = Akkusativobjekt",
      rule:"<div class=rbox><span class=hl>Subjekt</span> (Wer?): meine Schwester.<br><span class=hl>Prädikat</span> (Was tut sie?): schenkt.<br><span class=hl>Dativobjekt</span> (Wem?): mir.<br><span class=hl>Akkusativobjekt</span> (Was?): ein Buch.</div>"
    },

    { sub:"Lückentext: Fragewörter", type:"fill",
      q:"<b>Ergänze</b> die passende Fragewort-Frage für das jeweilige Satzglied:\n\n„Der Trainer lobt die Mannschaft lautstark."",
      sentences:[
        "Nach dem Subjekt fragt man: ____?",
        "Nach dem Akkusativobjekt fragt man: ____?",
        "Nach der adverbialen Bestimmung fragt man: ____?"
      ],
      correct:[["Wer oder was","wer oder was","Wer","wer"],["Wen oder was","wen oder was","Wen","wen"],["Wie","wie"]],
      model:"Subjekt → Wer oder was? | Akk.-Obj. → Wen oder was? | Adv. Best. → Wie?",
      rule:"<div class=rbox>Fragewörter für Satzglieder:<br><span class=hl>Subjekt</span>: Wer oder was?<br><span class=hl>Akkusativobjekt</span>: Wen oder was?<br><span class=hl>Dativobjekt</span>: Wem?<br><span class=hl>Adv. Best.</span>: Wie? / Wann? / Wo? / Warum?</div>"
    },

    { sub:"Lückentext: Satzglied oder Attribut?", type:"fill",
      q:"<b>Trage</b> ein: Handelt es sich um ein Satzglied oder ein Attribut?\n\n„Das schnelle Auto meines Bruders steht draußen."",
      sentences:[
        "„Das" ist ein ____ zum Nomen „Auto\".",
        "„schnelle" ist ein ____ zum Nomen „Auto\".",
        "„meines Bruders" ist ein ____ (Genitiv) zum Nomen \"Auto\".",
        "„draußen" ist eine adverbiale Bestimmung des ____."
      ],
      correct:[["Attribut","Artikel","Artikelattribut"],["Attribut","Adjektivattribut"],["Attribut","Genitivattribut"],["Ortes","Ort"]],
      model:"Das = Attribut (Artikel) | schnelle = Attribut (Adjektiv) | meines Bruders = Genitivattribut | draußen = Adv. Best. des Ortes",
      rule:"<div class=rbox><span class=hl>Attribute</span> sind keine eigenständigen Satzglieder – sie gehören zu einem Nomen.<br>Sie lassen sich nicht allein umstellen oder erfragen.</div>"
    }

  ]
}

]; // Ende MSA_EXTRA_SATZGLIEDER