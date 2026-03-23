// ═══════════════════════════════════════════════════════════════
// bbr-extra-wortarten.js  –  Wortarten bestimmen (9. Klasse)
// Überarbeitet & stark erweitert: 30 Fragen – konsistenter Stil
// ═══════════════════════════════════════════════════════════════

var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_wortarten_bestimmen",
    title: "Wortarten bestimmen",
    emoji: "🔤",
    color: "#8b5cf6",
    qs: [

      // 1–6   Adjektiv vs. Adverb
      { sub:"Adjektiv oder Adverb?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Der Kuchen schmeckt wirklich ___.“ – Wortart?\n(gut)",
        rows:["gut"], cols:["Adjektiv","Adverb"], correct:[1],
        model:"gut beschreibt das Verb schmeckt → Adverb",
        rule:"<div class=rbox>Adverbien beschreiben meist Verben (wie?, wann?, wo?) und sind unveränderlich.</div>" },

      { sub:"Adjektiv oder Adverb?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Die Musik war sehr ___.“ – Wortart?\n(laut)",
        rows:["laut"], cols:["Adjektiv","Adverb"], correct:[0],
        model:"laut beschreibt das Nomen Musik (prädikativ) → Adjektiv",
        rule:"<div class=rbox>Prädikative Adjektive stehen nach sein, werden, bleiben, scheinen …</div>" },

      { sub:"Adjektiv oder Adverb?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Sie läuft heute besonders ___.“ – Wortart?\n(schnell)",
        rows:["schnell"], cols:["Adjektiv","Adverb"], correct:[1],
        model:"schnell beschreibt das Verb läuft → Adverb der Art und Weise",
        rule:"<div class=rbox>Adverbien antworten häufig auf die Frage „wie?“</div>" },

      { sub:"Adjektiv oder Adverb?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Das ist ein ___ wichtiger Hinweis.“ – Wortart?\n(sehr)",
        rows:["sehr"], cols:["Adjektiv","Adverb"], correct:[1],
        model:"sehr wichtig = Gradadverb (verstärkt Adjektiv)",
        rule:"<div class=rbox>Gradadverbien (sehr, ziemlich, extrem, besonders …) stehen vor Adjektiven/Adverbien.</div>" },

      { sub:"Adjektiv oder Adverb?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Er spricht ___ leise.“ – Wortart?\n(ganz)",
        rows:["ganz"], cols:["Adjektiv","Adverb"], correct:[1],
        model:"ganz leise = Gradadverb",
        rule:"<div class=rbox>ganz + Adjektiv/Adverb = Adverb</div>" },

      { sub:"Adjektiv oder Adverb?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Das war ___ dumm von mir.“ – Wortart?\n(total)",
        rows:["total"], cols:["Adjektiv","Adverb"], correct:[1],
        model:"total dumm = Gradadverb (umgangssprachlich)",
        rule:"<div class=rbox>totale, voll, mega, super … als Verstärkung → Adverb</div>" },

      // 7–11   Präposition vs. Konjunktion
      { sub:"Präposition oder Konjunktion?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Ich komme später, ___ ich muss noch einkaufen.“ – Wortart?\n(weil)",
        rows:["weil"], cols:["Präposition","Konjunktion"], correct:[1],
        model:"weil leitet Nebensatz ein → unterordnende Konjunktion",
        rule:"<div class=rbox>Unterordnende Konjunktionen → Verbendstellung im Nebensatz</div>" },

      { sub:"Präposition oder Konjunktion?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„___ des Sturms fiel der Baum um.“ – Wortart?\n(trotz)",
        rows:["trotz"], cols:["Präposition","Konjunktion"], correct:[0],
        model:"trotz + Genitiv → Präposition",
        rule:"<div class=rbox>Präpositionen stehen vor Nomen/Nominalgruppen</div>" },

      { sub:"Präposition oder Konjunktion?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Wir bleiben, ___ es dunkel wird.“ – Wortart?\n(bis)",
        rows:["bis"], cols:["Präposition","Konjunktion"], correct:[1],
        model:"bis es dunkel wird → temporale Konjunktion",
        rule:"<div class=rbox>bis kann beides sein – mit Verb → Konjunktion</div>" },

      { sub:"Präposition oder Konjunktion?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„___ morgen sehe ich dich.“ – Wortart?\n(bis)",
        rows:["bis"], cols:["Präposition","Konjunktion"], correct:[0],
        model:"bis morgen → Präposition + Zeitangabe",
        rule:"<div class=rbox>bis + Nomen/Zeitangabe → Präposition</div>" },

      { sub:"Präposition oder Konjunktion?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Er rief an, ___ er schon im Zug saß.“ – Wortart?\n(während)",
        rows:["während"], cols:["Präposition","Konjunktion"], correct:[1],
        model:"während + Verb → Konjunktion",
        rule:"<div class=rbox>während + Satz → Konjunktion, während + Nomen → Präposition</div>" },

      // 12–16   Artikel / Pronomen / Numerale
      { sub:"Artikel oder Pronomen?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Gib mir bitte ___ Stift.“ – Wortart?\n(den)",
        rows:["den"], cols:["Artikel","Pronomen"], correct:[0],
        model:"den Stift → bestimmter Artikel",
        rule:"<div class=rbox>Artikel stehen immer direkt vor einem Nomen</div>" },

      { sub:"Artikel oder Pronomen?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„___ kenne ich schon.“ – Wortart?\n(den)",
        rows:["den"], cols:["Artikel","Pronomen"], correct:[1],
        model:"den = Akkusativ von der → Personal-/Demonstrativpronomen",
        rule:"<div class=rbox>Ohne Nomen dahinter → Pronomen</div>" },

      { sub:"Artikel oder Pronomen?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Ist das ___ Buch?“ – Wortart?\n(dein)",
        rows:["dein"], cols:["Artikel","Possessivpronomen"], correct:[1],
        model:"dein Buch → Possessivpronomen (aber oft auch als Possessivartikel bezeichnet)",
        rule:"<div class=rbox>mein, dein, sein … = Possessivpronomen</div>" },

      { sub:"Numerale oder Adjektiv?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„___ Schüler fehlten heute.“ – Wortart?\n(viele)",
        rows:["viele"], cols:["Numerale","Adjektiv"], correct:[0],
        model:"viele = Indefinitnumerale",
        rule:"<div class=rbox>Indefinitnumeralia: viele, wenige, einige, mehrere …</div>" },

      { sub:"Numerale oder Adjektiv?", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Sie wurde ___ in der Klasse.“ – Wortart?\n(Erste)",
        rows:["Erste"], cols:["Ordinalzahl (Numerale)","Adjektiv"], correct:[0],
        model:"erste, zweite … = Ordinalzahlen → Numerale",
        rule:"<div class=rbox>Ordinalzahlen zählen zu den Numeralen</div>" },

      // 17–18   ← waren vorher neben-/unterordnend – jetzt neue reine Wortartenfragen
      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat „deshalb“?\n„Ich bin müde, deshalb gehe ich früh ins Bett.“",
        o:["Konjunktion","Adverb","Präposition","Partikel"],
        c:1,
        model:"deshalb = kausales Adverb (konnektives Adverb)",
        rule:"<div class=rbox>deshalb, daher, darum, trotzdem … = Adverbien der Begründung/Folge</div>" },

      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat „eigentlich“?\n„Eigentlich wollte ich heute lernen.“",
        o:["Adjektiv","Modalpartikel","Adverb","Konjunktion"],
        c:2,
        model:"eigentlich = Modalpartikel / Abtönpartikel",
        rule:"<div class=rbox>eigentlich, ja, doch, mal, eben, halt … = Modalpartikeln</div>" },

      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat ‚jemand‘?\n„Jemand hat geklingelt.“",
        o:["Personalpronomen","Indefinitpronomen","Possessivpronomen","Demonstrativpronomen"],
        c:1,
        model:"jemand = unbestimmte Person → Indefinitpronomen",
        rule:"<div class=rbox>Indefinitpronomen: jemand, niemand, etwas, nichts, man …</div>" },

      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat ‚leider‘?\n„Leider regnet es schon wieder.“",
        o:["Adjektiv","Modaladverb","Konjunktion","Präposition"],
        c:1,
        model:"leider = Modaladverb (Sprecherhaltung)",
        rule:"<div class=rbox>Modaladverbien: leider, gott sei Dank, hoffentlich, zum Glück …</div>" },

      // 21–30   (fortlaufend)
      { sub:"Interjektion", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„___! Das ist ja toll!“ – Wortart?\n(Wow)",
        rows:["Wow"], cols:["Interjektion","Adverb"], correct:[0],
        model:"Wow = Gefühlsausdruck → Interjektion",
        rule:"<div class=rbox>Interjektionen: oh, ah, wow, igitt, hurra, pst, aua …</div>" },

      { sub:"Reflexivpronomen", type:"mc",
        q:"<b>Wähle</b> die richtige Antwort aus:\nWelches ist ein Reflexivpronomen?",
        o:["mich","meiner","mir (Dativ)","ihr"],
        c:0,
        model:"ich wasche mich → mich = Reflexivpronomen",
        rule:"<div class=rbox>Reflexiv: mich, dich, sich, uns, euch, sich</div>" },

      { sub:"Zuordnung", type:"match",
        q:"<b>Ordne</b> die Wörter den Wortarten zu.",
        pairs:[
          ["trotz",     "Präposition"],
          ["obwohl",    "Konjunktion"],
          ["gern",      "Adverb"],
          ["niemand",   "Indefinitpronomen"]
        ],
        model:"trotz=Präp | obwohl=Konj | gern=Adv | niemand=Indefinitpron",
        rule:"<div class=rbox>Wortart hängt oft vom Satzzusammenhang ab.</div>" },

      { sub:"Gemischte Probe", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\n„Trotz allem freue ich mich sehr.“ – Wortart von ‚sehr‘?",
        o:["Adjektiv","Adverb","Pronomen","Konjunktion"],
        c:1,
        model:"sehr freuen → Gradadverb",
        rule:"<div class=rbox>sehr + Verb/Adjektiv/Adverb → Adverb</div>" },

      { sub:"Gemischte Probe", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\n„Das ist mir ___ egal.“ – Wortart von ‚völlig‘?",
        o:["Adjektiv","Adverb","Pronomen","Numerale"],
        c:1,
        model:"völlig egal → Gradadverb",
        rule:"<div class=rbox>völlig, total, ganz, absolut … = Adverb</div>" },

      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat ‚man‘?\n„Man kann nie wissen.“",
        o:["Personalpronomen","Indefinitpronomen","Artikel","Adverb"],
        c:1,
        model:"man = unpersönliches Indefinitpronomen",
        rule:"<div class=rbox>man = allgemeine Person → Indefinitpronomen</div>" },

      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat ‚während‘ in:\n„Während der Pause esse ich.“",
        o:["Präposition","Konjunktion","Adverb","Pronomen"],
        c:0,
        model:"während der Pause → Präposition",
        rule:"<div class=rbox>während + Nomen → Präposition</div>" },

      { sub:"Wortart bestimmen", type:"mc",
        q:"<b>Bestimme</b> die Wortart:\nWelche Wortart hat ‚alles‘?\n„Alles Gute zum Geburtstag!“",
        o:["Pronomen","Numerale","Adjektiv","Artikel"],
        c:0,
        model:"alles = Totalitätspronomen / Indefinitpronomen",
        rule:"<div class=rbox>alles, jeder, beide, einige … → Pronomen</div>" },

      { sub:"Gemischte Abschlussfrage", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Ich helfe dir ___ gern.“ – Wortart?\n(doch)",
        rows:["doch"], cols:["Partikel","Adverb","Konjunktion"], correct:[0],
        model:"doch gern = verstärkende Partikel",
        rule:"<div class=rbox>doch, ja, mal, eben … oft Modalpartikeln / Abtönpartikeln</div>" },

      { sub:"Gemischte Abschlussfrage", type:"cross", isSingle:true,
        q:"<b>Entscheide</b>:\n„Hast du ___ gesehen?“ – Wortart?\n(eben)",
        rows:["eben"], cols:["Adverb","Partikel"], correct:[0],
        model:"eben = Zeitadverb (gerade)",
        rule:"<div class=rbox>eben kann Adverb (Zeit) oder Partikel sein – Kontext entscheidet</div>" }
    ]
  }
];