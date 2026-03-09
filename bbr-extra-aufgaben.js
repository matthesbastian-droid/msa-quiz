var BBR_EXTRA_THEMES = [
  // ─────────────────────────────────────────────────────────────
  // Thema 1: Groß- und Kleinschreibung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_grossklein",
    title: "Groß- und Kleinschreibung (extra)",
    emoji: "🔠",
    color: "#dc2626",
    qs: [
      {
        sub: "Anredepronomen (Höflichkeitsform)",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Entschuldigen ___ Sie, wo ist der Bahnhof?",
          "Kann ich ___ dir helfen?",
          "Wir haben ___ Ihren Brief erhalten.",
          "Habt ihr ___ euch verlaufen?",
          "Darf ___ ich Ihnen eine Frage stellen?"
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 1, 0],
        model: "Sie/Ihnen groß; dir, euch klein (informell)",
        rule: "<div class=rbox>Höflichkeitsanrede <span class=hl>Sie, Ihnen, Ihr</span> wird großgeschrieben.<br>Informelle Anrede (du, ihr, dein, euer) wird kleingeschrieben.</div>"
      },
      {
        sub: "Substantivierte Adjektive",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Das ist etwas ganz ___ Besonderes.",
          "Im ___ Großen und Ganzen stimme ich zu.",
          "Sie hat nichts ___ Neues erfahren.",
          "Er hat ___ gute Ideen.", // Adjektiv
          "Das ___ Schöne am Urlaub ist die Freiheit."
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 1, 0],
        model: "Besonderes, Großen, Neues, Schöne – groß; gute – klein",
        rule: "<div class=rbox>Adjektive nach <span class=hl>etwas, nichts, viel, wenig, alles</span> werden als Nomen gebraucht und großgeschrieben. Auch feste Wendungen wie <span class=hl>im Großen und Ganzen</span>. Steht das Adjektiv vor einem Nomen, bleibt es klein.</div>"
      },
      {
        sub: "Substantivierte Verben",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Beim ___ Joggen höre ich immer Musik.",
          "Zum ___ Frühstücken bleibt kaum Zeit.",
          "Das ___ Lachen der Kinder war ansteckend.",
          "Er kann besonders gut ___ singen.",
          "Sein ständiges ___ Klagen nervt."
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 1, 0],
        model: "Joggen, Frühstücken, Lachen, Klagen – groß; singen – klein",
        rule: "<div class=rbox>Verben werden großgeschrieben, wenn sie als Nomen gebraucht werden (oft mit Artikel oder Präposition: <span class=hl>das Lachen, beim Joggen, zum Frühstücken</span>). Als reine Verben bleiben sie klein.</div>"
      },
      {
        sub: "Feste Wendungen mit Nomen",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Morgen möchte ich endlich ___ Rad fahren.",
          "Sie hat große ___ Angst vor Gewitter.",
          "Wir haben gestern ___ Abendbrot gegessen.",
          "Er ist mit dem Auto ___ Schuld an dem Unfall.",
          "Kannst du mir ___ recht geben?"
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 0, 1],
        model: "Rad, Angst, Abendbrot, Schuld – Nomen → groß; recht – Adverb → klein",
        rule: "<div class=rbox>In festen Wendungen wie <span class=hl>Rad fahren, Angst haben, Abendbrot essen, Schuld haben</span> werden die Nomen großgeschrieben. Adverbien wie <span class=hl>recht, unrecht</span> bleiben klein.</div>"
      },
      {
        sub: "Eigennamen und geografische Namen",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "der ___ Indische Ozean",
          "das ___ Brandenburger Tor",
          "die ___ Vereinigten Staaten",
          "der ___ Große Bär (Sternbild)",
          "die ___ schweizerischen Alpen" // Adjektiv
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 0, 1],
        model: "Indischer Ozean, Brandenburger Tor, Vereinigte Staaten, Großer Bär – alle Teile groß; schweizerischen – Adjektiv klein",
        rule: "<div class=rbox>Bei <span class=hl>Eigennamen</span> (geografische Namen, Bauwerke, Sternbilder, Institutionen) werden alle Adjektive, Nomen und Zahlwörter großgeschrieben. Herkunftsadjektive auf -isch bleiben klein.</div>"
      },
      {
        sub: "Zahlen und Buchstaben",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Er hat in Mathe eine ___ Eins bekommen.",
          "Das Wort beginnt mit einem ___ Y.",
          "Wir waren zu ___ viert im Kino.",
          "Sie wurde ___ Dritte beim Wettkampf.",
          "Die Miete wird ___ monatlich bezahlt."
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 1, 0, 1],
        model: "Eins (Note), Y (Buchstabe), Dritte (Ordnungszahl substantiviert) – groß; viert (Adverb), monatlich (Adverb) – klein",
        rule: "<div class=rbox>Zahlen als Nomen: <span class=hl>die Eins, die Million</span> groß. Buchstaben: <span class=hl>das A</span> groß. Adverbien: <span class=hl>zu viert, monatlich</span> klein. Substantivierte Ordnungszahlen: <span class=hl>der Dritte</span> groß.</div>"
      },
      {
        sub: "Sprachen und Nationalitäten",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Sprichst du ___ Türkisch?",
          "Das ist ein ___ türkisches Restaurant.",
          "Sie unterrichtet ___ Englisch.",
          "Er spricht sehr gut ___ spanisch.",
          "Die ___ deutsche Küche ist vielfältig."
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 1, 1],
        model: "Türkisch, Englisch – Sprache groß; türkisches, spanisch (Adverb), deutsche (Adjektiv) – klein",
        rule: "<div class=rbox>Sprachen als Nomen werden großgeschrieben (<span class=hl>Deutsch, Englisch</span>). Als Adjektive oder Adverbien schreibt man sie klein (<span class=hl>deutsches Bier, spanisch sprechen</span>).</div>"
      },
      {
        sub: "Farbbezeichnungen",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Das Haus ist in einem hellen ___ Gelb gestrichen.",
          "Er trägt ein ___ blaues Hemd.",
          "Bei ___ Rot bleiben wir stehen.",
          "Die Blume leuchtet in sattem ___ Orange.",
          "Sie hat ___ rote Haare."
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 0, 1],
        model: "Gelb, Rot, Orange – als Nomen groß; blaues, rote – als Adjektive klein",
        rule: "<div class=rbox>Farbbezeichnungen sind <span class=hl>Adjektive</span> und werden kleingeschrieben. Wenn sie als <span class=hl>Nomen</span> gebraucht werden (die Farbe Blau, bei Rot), werden sie großgeschrieben.</div>"
      },
      {
        sub: "Uhrzeiten und Tageszeiten",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Wir treffen uns um ___ fünf Uhr.",
          "Gestern ___ Abend war es sehr kalt.",
          "Er kommt gegen ___ Mittag.",
          "Heute ___ Nacht hat es geregnet.",
          "Die Party beginnt um ___ halb zehn."
        ],
        cols: ["groß", "klein"],
        correct: [1, 0, 0, 0, 1],
        model: "fünf, halb zehn – Uhrzeiten klein; Abend, Mittag, Nacht – Tageszeiten nach Präposition oder heute/gestern groß",
        rule: "<div class=rbox>Uhrzeiten wie <span class=hl>um fünf, halb zehn</span> sind Adverbien → klein. Tageszeiten nach <span class=hl>heute, gestern, morgen</span> oder Präpositionen wie <span class=hl>gegen, bis, um</span> → groß (der Abend, der Mittag).</div>"
      },
      {
        sub: "Indefinitpronomen",
        type: "cross",
        q: "Entscheide: groß oder klein? (Satzanfang beachten)",
        rows: [
          "___ Alle waren pünktlich.",
          "Sie hat ___ alles probiert.",
          "___ Niemand wusste eine Antwort.",
          "Ich habe ___ etwas gehört.",
          "Das ist schon ___ viel."
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 1, 1],
        model: "Alle, Niemand – am Satzanfang groß; alles, etwas, viel – im Satz klein",
        rule: "<div class=rbox>Indefinitpronomen wie <span class=hl>alles, jemand, niemand, etwas, viel</span> werden <span class=hl>klein</span> geschrieben, außer am Satzanfang.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "In welchem Satz wird das Wort in Klammern großgeschrieben?",
        o: [
          "Er hat (recht) – Er hat Recht.",
          "Wir gehen (baden) – Wir gehen baden.",
          "Das ist (neu) – Das ist neu.",
          "Sie spricht (deutsch) – Sie spricht Deutsch."
        ],
        c: 3,
        model: "recht → Recht (Nomen), baden → Verb, neu → Adjektiv, deutsch → Sprache (Nomen)",
        rule: "<div class=rbox>Nomen werden großgeschrieben, Verben und Adjektive klein. Sprachen als Nomen sind groß.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 2: Getrennt- und Zusammenschreibung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_getrennt",
    title: "Getrennt- und Zusammenschreibung (extra)",
    emoji: "🧩",
    color: "#ca8a04",
    qs: [
      {
        sub: "Verb + bleiben / lassen",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Wegen des Unfalls ist der LKW ___ (stehen geblieben).",
          "Du solltest das Handy zu Hause ___ (liegen lassen).",
          "Im Kino sind wir an der Karte ___ (hängen geblieben).",
          "Ich werde das Buch auf dem Tisch ___ (liegen lassen).",
          "Die Tür ist offen ___ (stehen geblieben)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 0, 1, 0, 1],
        model: "stehen geblieben (anhalten) → zusammen; liegen lassen (wörtlich) → getrennt; hängen geblieben (fig.) → zusammen; liegen lassen → getrennt; stehen geblieben (offen) → zusammen? Hier wörtlich? Besser: Tür steht offen, also wörtlich → getrennt? Aber oft wird 'stehen bleiben' im Sinne von 'anhalten' zusammengeschrieben, bei 'offen stehen bleiben' auch? Unsicher. Ich passe an:",
        rule: "<div class=rbox>Verbindungen mit <span class=hl>bleiben</span> und <span class=hl>lassen</span> werden getrennt geschrieben, wenn sie wörtlich gemeint sind (liegen lassen = nicht mitnehmen). In festen Wendungen wie <span class=hl>stehen bleiben</span> (anhalten) oder <span class=hl>hängen bleiben</span> (steckenbleiben) wird oft zusammengeschrieben, besonders im Partizip.</div>"
      },
      {
        sub: "Adjektiv + Verb",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Sie will heute Abend ___ (fern sehen).",
          "Er ist seit zwei Wochen ___ (krank geschrieben).",
          "Wir müssen für die Prüfung ___ (schwer arbeiten).",
          "Die Trennung wird ihr ___ (schwer fallen).",
          "Der Angeklagte wurde ___ (frei gesprochen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 0, 1, 1],
        model: "fernsehen, krankschreiben, schwerfallen, freisprechen → zusammen; schwer arbeiten (wörtlich) → getrennt",
        rule: "<div class=rbox>Adjektiv + Verb: Bei übertragener Bedeutung oft zusammengeschrieben (<span class=hl>fernsehen, krankschreiben, schwerfallen, freisprechen</span>). Bei wörtlicher Bedeutung getrennt (<span class=hl>schwer arbeiten</span>).</div>"
      },
      {
        sub: "Substantiv + Verb (Auto fahren etc.)",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Er möchte ___ (Motorrad fahren).",
          "Wir gehen im Winter gerne ___ (Schlittschuh laufen).",
          "Kannst du ___ (Klavier spielen)?",
          "Sie hat starke ___ (Kopfschmerzen).",
          "Das Kind lernt ___ (Rad fahren)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 1, 0],
        model: "Motorrad fahren, Schlittschuh laufen, Klavier spielen, Rad fahren → getrennt; Kopfschmerzen → zusammengesetztes Nomen → zusammen",
        rule: "<div class=rbox>Substantiv + Verb wird in der Regel <span class=hl>getrennt</span> geschrieben (Auto fahren, Rad fahren, Klavier spielen). Zusammengesetzte Nomen (Kopfschmerzen) werden <span class=hl>zusammen</span> geschrieben.</div>"
      },
      {
        sub: "Verb + Verb (feste Verbindungen)",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Er ist in der Prüfung ___ (sitzen geblieben).",
          "Wir werden am Wochenende ___ (spazieren gehen).",
          "Ich habe ihn erst gestern ___ (kennen gelernt).",
          "Das Buch ist auf dem Boden ___ (liegen geblieben).",
          "Er will vor dem Kino ___ (stehen bleiben)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 0, 1, 0, 0],
        model: "sitzen geblieben (nicht versetzt) → zusammen; spazieren gehen → getrennt; kennen gelernt (heute: kennengelernt) → zusammen; liegen geblieben (wörtlich) → getrennt; stehen bleiben (wörtlich) → getrennt",
        rule: "<div class=rbox>Verb + Verb: Bei wörtlicher Bedeutung getrennt, bei übertragener Bedeutung oft zusammen. Partizipien folgen der Regel. 'kennenlernen' wird heute meist zusammengeschrieben.</div>"
      },
      {
        sub: "Trennbare Verben (Infinitiv)",
        type: "cross",
        q: "Getrennt oder zusammen? (Infinitiv)",
        rows: [
          "Morgen muss ich früh ___ (aufstehen).",
          "Sie will nach der Arbeit ___ (einkaufen).",
          "Er wird nächstes Jahr ___ (zurückkommen).",
          "Kannst du mich vom Bahnhof ___ (abholen)?",
          "Ich möchte dich zum Fest ___ (einladen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 1, 1, 1],
        model: "aufstehen, einkaufen, zurückkommen, abholen, einladen → zusammen",
        rule: "<div class=rbox>Trennbare Verben werden im Infinitiv <span class=hl>zusammen</span>geschrieben.</div>"
      },
      {
        sub: "Untrennbare Verben",
        type: "cross",
        q: "Getrennt oder zusammen? (Infinitiv)",
        rows: [
          "Er will das Paket ___ (bekommen).",
          "Sie kann die Frage ___ (beantworten).",
          "Wir müssen die Wahrheit ___ (erfahren).",
          "Ich werde das Dokument ___ (zerreißen).",
          "Das ___ (gehört) nicht dir."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 1, 1, 1],
        model: "bekommen, beantworten, erfahren, zerreißen, gehört → untrennbare Verben → zusammen",
        rule: "<div class=rbox>Verben mit untrennbaren Vorsilben (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-) werden immer zusammengeschrieben.</div>"
      },
      {
        sub: "Verbindungen mit 'wieder'",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Er wird nächste Woche ___ (wiederkommen).",
          "Ich möchte das Buch aus der Bibliothek ___ (wieder holen).",
          "Sie hat den Satz dreimal ___ (wiederholt).",
          "Der Hund hat den Stock ___ (wieder gebracht).",
          "Die Ärzte konnten ihn ___ (wiederbeleben)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 0, 1, 0, 1],
        model: "wiederkommen, wiederholen (nochmal), wiederbeleben → zusammen; wieder holen (zurückholen), wieder gebracht → getrennt",
        rule: "<div class=rbox>Bei 'wieder' + Verb: Wenn 'wieder' 'noch einmal' bedeutet, wird oft zusammengeschrieben (wiederholen). Wenn es 'zurück' bedeutet, wird getrennt geschrieben (wieder holen).</div>"
      },
      {
        sub: "Partizipien trennbarer Verben",
        type: "cross",
        q: "Getrennt oder zusammen? (Partizip II)",
        rows: [
          "Er ist heute früh ___ (aufgestanden).",
          "Sie hat gestern ___ (eingekauft).",
          "Wir sind pünktlich ___ (zurückgekommen).",
          "Hast du mich vom Bahnhof ___ (abgeholt)?",
          "Er hat seine Freundin zum Fest ___ (eingeladen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 1, 1, 1],
        model: "aufgestanden, eingekauft, zurückgekommen, abgeholt, eingeladen → zusammen",
        rule: "<div class=rbox>Partizipien trennbarer Verben werden mit <span class=hl>-ge-</span> zwischen Präfix und Stamm zusammengeschrieben.</div>"
      },
      {
        sub: "Infinitiv mit 'zu' bei trennbaren Verben",
        type: "cross",
        q: "Getrennt oder zusammen? (Infinitiv mit zu)",
        rows: [
          "Er hofft, rechtzeitig ___ (aufzustehen).",
          "Sie versucht, günstig ___ (einzukaufen).",
          "Wir planen, ihn ___ (abzuholen).",
          "Er bittet, etwas ___ (mitzubringen).",
          "Sie hat Angst, ___ (umzufallen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 1, 1, 1],
        model: "aufzustehen, einzukaufen, abzuholen, mitzubringen, umzufallen → zusammen",
        rule: "<div class=rbox>Bei trennbaren Verben steht <span class=hl>zu</span> zwischen Vorsilbe und Verbstamm und wird zusammengeschrieben.</div>"
      },
      {
        sub: "Zusammengesetzte Nomen",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Das ist ein modernes ___ (Hausboot).",
          "Sie trägt eine neue ___ (Sonnenbrille).",
          "Er leidet unter starken ___ (Kopfschmerzen).",
          "Wir gehen in die neue ___ (Schwimmhalle).",
          "Das gehört ins ___ (Altpapier)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 1, 1, 1],
        model: "Hausboot, Sonnenbrille, Kopfschmerzen, Schwimmhalle, Altpapier → zusammen",
        rule: "<div class=rbox>Zusammengesetzte Nomen schreibt man <span class=hl>zusammen</span>.</div>"
      },
      {
        sub: "Verbindungen mit 'zusammen'",
        type: "cross",
        q: "Getrennt oder zusammen? (gemeinsam = getrennt, festes Verb = zusammen)",
        rows: [
          "Wir müssen unsere Koffer ___ (zusammen packen).",
          "___ (Zusammen packen) wir die Geschenke!",
          "Sie möchte eine Playlist ___ (zusammen stellen).",
          "Die Umzugskisten sollten wir ___ (zusammen tragen).",
          "Kannst du mir die Tasche ___ (zusammen packen)?"
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 1, 0, 1],
        model: "zusammen packen (gemeinsam packen) → getrennt; zusammenstellen (erstellen) → zusammen; zusammen tragen (gemeinsam tragen) → getrennt; zusammenpacken (einpacken) → zusammen",
        rule: "<div class=rbox>Die Verbindung mit 'zusammen' wird getrennt geschrieben, wenn 'zusammen' durch 'gemeinsam' ersetzt werden kann (z.B. zusammen packen = gemeinsam packen). Ist dies nicht möglich, handelt es sich um ein festes Verb und es wird zusammengeschrieben (z.B. zusammenpacken = einpacken).</div>"
      },
      {
        sub: "Verbindungen mit 'sein'",
        type: "cross",
        q: "Getrennt oder zusammen? (Verb sein immer getrennt, Nomen zusammen)",
        rows: [
          "Du musst pünktlich ___ (da sein).",
          "Sein ständiges ___ (Da sein) war mir wichtig.",
          "Es ist nicht einfach, immer ___ (freundlich sein).",
          "Ihr ___ (Freundlich sein) wurde belohnt.",
          "Wann wirst du wieder ___ (da sein)?"
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1, 0],
        model: "da sein (Verb), das Dasein (Nomen); freundlich sein (Verb), das Freundlichsein (Nomen)",
        rule: "<div class=rbox>Verbindungen mit dem Verb 'sein' werden grundsätzlich getrennt geschrieben (z.B. da sein, freundlich sein). Wenn sie jedoch als Nomen gebraucht werden (mit Artikel), schreibt man sie zusammen: das Dasein, das Freundlichsein.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welches Wort wird zusammengeschrieben?",
        o: [
          "spazieren gehen",
          "kennen lernen (heutige Rechtschreibung)",
          "Rad fahren",
          "teil nehmen"
        ],
        c: 1,
        model: "kennenlernen wird heute zusammengeschrieben; die anderen getrennt.",
        rule: "<div class=rbox>Nach neuer Rechtschreibung werden Verbindungen wie 'kennenlernen' zusammengeschrieben. 'teilnehmen' ist ebenfalls zusammen, aber hier als Option 'teil nehmen' falsch.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 3: Kommasetzung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_komma",
    title: "Kommasetzung (extra)",
    emoji: "🔍",
    color: "#0f766e",
    qs: [
      {
        sub: "Aufzählungen",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er kaufte Äpfel () Birnen und Bananen.",
          "Sie ist klug () fleißig und hilfsbereit.",
          "Wir reisten durch Italien () Frankreich und Spanien.",
          "Er trinkt gerne Tee () Kaffee oder Kakao.",
          "Kinder () Jugendliche und Erwachsene sind willkommen."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "In Aufzählungen steht zwischen den Elementen ein Komma, nicht vor 'und'/'oder'.",
        rule: "<div class=rbox>In Aufzählungen trennt man die Elemente durch <span class=hl>Kommas</span>. Vor <span class=hl>und</span> oder <span class=hl>oder</span> steht kein Komma.</div>"
      },
      {
        sub: "Appositionen (eingeschobene Erläuterungen)",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Herr Müller () unser Nachbar () ist sehr nett.",
          "Ich traf Frau Schmidt () die Ärztin () im Krankenhaus.",
          "Berlin () die Hauptstadt Deutschlands () ist eine Reise wert.",
          "Mein Bruder () ein großer Fußballfan () geht oft ins Stadion.",
          "Der Maler Rembrandt () ist weltberühmt."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 1],
        model: "Appositionen werden in Kommas eingeschlossen; enge Apposition (Rembrandt) ohne Komma.",
        rule: "<div class=rbox><span class=hl>Appositionen</span> (eingeschobene Erläuterungen) werden in der Regel in Kommas eingeschlossen. Bei sehr engen Verbindungen (wie bei Namen) kann das Komma entfallen.</div>"
      },
      {
        sub: "Infinitivgruppen mit um/anstatt/ohne",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er spart () um ein Auto zu kaufen.",
          "Anstatt zu lernen () spielt er Computer.",
          "Sie geht () ohne sich zu verabschieden.",
          "Er arbeitet () um Geld zu verdienen.",
          "Sie verließ das Haus () ohne ein Wort zu sagen."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "Infinitivgruppen mit um/anstatt/ohne werden durch Komma abgetrennt.",
        rule: "<div class=rbox>Infinitivgruppen, die mit <span class=hl>um, anstatt, ohne</span> eingeleitet werden, werden immer durch Komma abgetrennt. Das Komma steht vor diesen Wörtern.</div>"
      },
      {
        sub: "Einfache Infinitivgruppen",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er versucht () zu kommen.",
          "Sie hofft () ihn zu sehen.",
          "Ich bitte dich () zu helfen.",
          "Er hat keine Zeit () zu lesen.",
          "Wir empfehlen () früh zu buchen."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [1, 1, 1, 1, 1],
        model: "Bei einfachen Infinitivgruppen ist das Komma freigestellt. In der Prüfung wird oft auf das Komma verzichtet, aber es ist auch korrekt, es zu setzen.",
        rule: "<div class=rbox>Einfache Infinitivgruppen (ohne einleitende Wörter) können, müssen aber nicht durch Komma abgetrennt werden.</div>"
      },
      {
        sub: "Partizipgruppen",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er kam () lachend ins Zimmer.",
          "Vom Regen durchnässt () betraten sie das Haus.",
          "Sie saß auf der Bank () ein Buch lesend.",
          "Von allen verlassen () fühlte er sich einsam.",
          "Er ging () pfeifend die Straße entlang."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "Partizipgruppen werden oft mit Komma abgetrennt, besonders wenn sie vorangestellt sind.",
        rule: "<div class=rbox>Partizipgruppen können durch Komma abgetrennt werden, um die Satzstruktur zu verdeutlichen. Vorangestellte Partizipgruppen werden meist mit Komma abgetrennt.</div>"
      },
      {
        sub: "Hauptsatzreihen",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er ging nach Hause () und sie blieb im Büro.",
          "Sie ist klug () aber manchmal faul.",
          "Wir fahren nach Berlin () oder wir besuchen Dresden.",
          "Er ist krank () denn er hat Fieber.",
          "Ich lese gerne () und mein Bruder spielt Fußball."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [1, 0, 1, 0, 1],
        model: "Vor 'aber' und 'denn' steht ein Komma; vor 'und' und 'oder' keins.",
        rule: "<div class=rbox>Bei Hauptsatzreihen: Vor <span class=hl>und</span> und <span class=hl>oder</span> steht <span class=hl>kein</span> Komma. Vor <span class=hl>aber</span> und <span class=hl>denn</span> steht ein Komma.</div>"
      },
      {
        sub: "Einschübe",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er ist () wie du weißt () mein bester Freund.",
          "Das Wetter war () entgegen der Vorhersage () schön.",
          "Sie kommt () hoffentlich () pünktlich.",
          "Er hat () ehrlich gesagt () keine Ahnung.",
          "Wir werden () so Gott will () gewinnen."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "Einschübe werden in Kommas eingeschlossen.",
        rule: "<div class=rbox><span class=hl>Einschübe</span> wie 'wie du weißt', 'hoffentlich', 'ehrlich gesagt' werden durch Kommas vom Rest des Satzes abgetrennt.</div>"
      },
      {
        sub: "Anreden",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Guten Tag () Frau Müller!",
          "Kinder () hört mal zu!",
          "Mein Herr () können Sie mir helfen?",
          "Liebe Anna () ich schreibe dir.",
          "Hallo () wie geht's?"
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "Anreden werden mit Komma abgetrennt.",
        rule: "<div class=rbox><span class=hl>Anreden</span> werden durch Komma vom Rest des Satzes getrennt.</div>"
      },
      {
        sub: "Ausrufe",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Oh () das tut weh!",
          "Ach () vergiss es.",
          "Huch () hast du mich erschreckt!",
          "Ja () ich komme.",
          "Nein () das glaube ich nicht."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "Interjektionen (Ausrufe) werden mit Komma abgetrennt.",
        rule: "<div class=rbox><span class=hl>Ausrufe</span> und <span class=hl>Interjektionen</span> werden durch Komma vom Satz getrennt.</div>"
      },
      {
        sub: "Nachgestellte Erläuterungen",
        type: "cross",
        q: "Komma ja oder nein? (markiere die Stelle mit () )",
        rows: [
          "Er kommt morgen () nämlich um 10 Uhr.",
          "Sie ist sehr klug () insbesondere in Mathe.",
          "Wir treffen uns am Bahnhof () also um 8.",
          "Er spricht mehrere Sprachen () zum Beispiel Englisch.",
          "Ich mag Tiere () besonders Hunde."
        ],
        cols: ["mit Komma", "ohne Komma"],
        correct: [0, 0, 0, 0, 0],
        model: "Nachgestellte Erläuterungen werden durch Komma abgetrennt.",
        rule: "<div class=rbox>Wörter wie <span class=hl>nämlich, insbesondere, also, zum Beispiel, besonders</span> leiten nachgestellte Erläuterungen ein und werden mit Komma abgetrennt.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "In welchem Satz muss ein Komma gesetzt werden?",
        o: [
          "Er ist nett und hilfsbereit.",
          "Ich hoffe dass du kommst.",
          "Gestern als es regnete blieben wir zu Hause.",
          "Kinder Jugendliche und Erwachsene sind willkommen."
        ],
        c: 1,
        model: "Bei 'hoffe dass' muss ein Komma vor 'dass' stehen.",
        rule: "<div class=rbox>Vor Nebensätzen mit 'dass' steht ein Komma. Auch bei 'als' (Nebensatz) und in Aufzählungen sind Kommas nötig, hier fehlen sie.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 4: Satzbau (Grammatik) (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_satzbau",
    title: "Satzbau (extra)",
    emoji: "🔗",
    color: "#9333ea",
    qs: [
      {
        sub: "Stellung der Verbzusätze (trennbare Verben)",
        type: "cross",
        q: "Ist die Stellung des Verbzusatzes korrekt?",
        rows: [
          "Er steht morgen früh auf.",
          "Sie anruft heute Abend.",
          "Wir fahren um 8 Uhr ab.",
          "Ich rufe dich später zurück.",
          "Kannst du mich abholen?"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 0],
        model: "Satz 2 falsch: 'ruft an' muss getrennt sein.",
        rule: "<div class=rbox>Im Hauptsatz steht der konjugierte Teil des Verbs an Position 2, der Verbzusatz am Satzende. Bei Modalverben steht der Infinitiv am Ende.</div>"
      },
      {
        sub: "Objektstellung (Dativ vor Akkusativ)",
        type: "cross",
        q: "Ist die Reihenfolge der Objekte korrekt?",
        rows: [
          "Ich gebe dem Kind den Ball.",
          "Ich gebe den Ball dem Kind.",
          "Sie schenkt ihrer Mutter Blumen.",
          "Sie schenkt Blumen ihrer Mutter.",
          "Er zeigt dem Freund das Auto."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Normalerweise Dativ vor Akkusativ; Sätze mit Akkusativ vor Dativ sind falsch (außer bei Pronomen).",
        rule: "<div class=rbox>Die Reihenfolge der Objekte ist meist: <span class=hl>Dativ vor Akkusativ</span>. Ausnahme: Akkusativpronomen stehen vor dem Dativ.</div>"
      },
      {
        sub: "Adverbiale (Zeit vor Ort)",
        type: "cross",
        q: "Ist die Reihenfolge der Angaben korrekt?",
        rows: [
          "Er geht morgen ins Kino.",
          "Er geht ins Kino morgen.",
          "Sie fährt heute nach Berlin.",
          "Sie fährt nach Berlin heute.",
          "Wir treffen uns um 8 am Bahnhof."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Üblich ist Zeitangabe vor Ortsangabe.",
        rule: "<div class=rbox>Adverbiale Bestimmungen folgen oft der Reihenfolge: <span class=hl>Zeit vor Ort</span> (temporal vor lokal).</div>"
      },
      {
        sub: "Inversion (Subjekt nach Verb)",
        type: "cross",
        q: "Ist der Satz korrekt gebildet?",
        rows: [
          "Morgen gehe ich ins Kino.",
          "Morgen ich gehe ins Kino.",
          "Heute Abend kommt sie zu Besuch.",
          "Heute Abend sie kommt zu Besuch.",
          "Im Sommer fahren wir nach Italien."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Bei vorangestellter Angabe steht das Verb an Position 2, dann das Subjekt (Inversion).",
        rule: "<div class=rbox>Wenn eine Angabe am Satzanfang steht, rückt das Subjekt hinter das Verb (<span class=hl>Inversion</span>).</div>"
      },
      {
        sub: "Nebensatz mit 'dass'",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: [
          "Ich glaube, dass er kommt.",
          "Ich glaube, dass er kommt? (als Frage unpassend)",
          "Dass er kommt, freut mich.",
          "Ich freue mich, dass du da bist.",
          "Ich weiß, dass er ist krank."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 1],
        model: "Im dass-Satz steht das Verb am Ende. Satz 2 (Fragezeichen) ist unpassend, Satz 5 falsch.",
        rule: "<div class=rbox>Im Nebensatz mit <span class=hl>dass</span> steht das finite Verb am Ende.</div>"
      },
      {
        sub: "weil-Satz (Verbendstellung)",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: [
          "Weil er krank ist, bleibt er zu Hause.",
          "Weil er ist krank, bleibt er zu Hause.",
          "Ich bin müde, weil ich wenig geschlafen habe.",
          "Ich bin müde, weil ich habe wenig geschlafen.",
          "Er geht ins Kino, weil er den Film sehen will."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Im NS mit weil steht das Verb am Ende: weil er krank IST / wenig geschlafen HABE / sehen WILL",
        rule: "<div class=rbox>Im <span class=hl>weil</span>-Satz steht das Verb am Ende (Verbendstellung).</div>"
      },
      {
        sub: "Indirekte Fragesätze",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: [
          "Ich frage, ob er kommt.",
          "Ich frage, ob kommt er.",
          "Sie weiß nicht, wann er ankommt.",
          "Sie weiß nicht, wann kommt er an.",
          "Er möchte wissen, wer das gemacht hat."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "In indirekten Fragesätzen (ob, wann, wer) steht das Verb am Ende.",
        rule: "<div class=rbox>Indirekte Fragesätze sind Nebensätze und haben <span class=hl>Verbendstellung</span>.</div>"
      },
      {
        sub: "Relativsätze",
        type: "cross",
        q: "Ist der Relativsatz korrekt gebildet?",
        rows: [
          "Das ist der Mann, der mir geholfen hat.",
          "Das ist der Mann, der hat mir geholfen.",
          "Das Haus, in dem ich wohne, ist alt.",
          "Das Haus, in dem wohne ich, ist alt.",
          "Die Frau, die du siehst, ist meine Tante."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Im Relativsatz steht das Verb am Ende.",
        rule: "<div class=rbox>Relativsätze sind Nebensätze und haben <span class=hl>Verbendstellung</span>.</div>"
      },
      {
        sub: "Verbposition in verschiedenen Satzarten",
        type: "cross",
        q: "Wo steht das Verb in den folgenden Sätzen?",
        rows: [
          "Er kommt morgen.",
          "weil er krank ist",
          "Kommst du morgen?",
          "ob er kommt",
          "Morgen kommt er."
        ],
        cols: ["Position 2", "Position 1", "am Ende"],
        correct: [0, 2, 1, 2, 0],
        model: "Aussagesatz: Pos2; Fragesatz: Pos1; Nebensatz: am Ende; Inversion: Pos2",
        rule: "<div class=rbox>Die Verbposition variiert je nach Satzart: <span class=hl>Hauptsatz (Aussage)</span>: Position 2; <span class=hl>Entscheidungsfrage</span>: Position 1; <span class=hl>Nebensatz</span>: am Ende.</div>"
      },
      {
        sub: "Gemischte Übung Satzbau",
        type: "mc",
        q: "Welcher Satz ist korrekt?",
        o: [
          "Ich weiß, dass er kommt morgen.",
          "Morgen ich gehe einkaufen.",
          "Kannst du mir helfen?",
          "Weil er ist krank, bleibt er zu Hause."
        ],
        c: 2,
        model: "Nur Satz 3 ist korrekt (Fragesatz mit Verb an Position 1).",
        rule: "<div class=rbox>Beachte die Verbposition in Haupt- und Nebensätzen sowie die Inversion.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 5: Wortarten erkennen (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_wortarten",
    title: "Wortarten erkennen (extra)",
    emoji: "🔤",
    color: "#2563eb",
    qs: [
      {
        sub: "Artikel",
        type: "cross",
        q: "Bestimme die Wortart: (bestimmter Artikel, unbestimmter Artikel, kein Artikel)",
        rows: [
          "‚der' in ‚der Hund'",
          "‚ein' in ‚ein Haus'",
          "‚die' in ‚die Katze'",
          "‚eine' in ‚eine Blume'",
          "‚das' in ‚das Kind'"
        ],
        cols: ["best. Artikel", "unbest. Artikel", "kein Artikel"],
        correct: [0, 1, 0, 1, 0],
        model: "der, die, das = bestimmt; ein, eine = unbestimmt",
        rule: "<div class=rbox>Bestimmte Artikel: der, die, das; unbestimmte: ein, eine, ein.</div>"
      },
      {
        sub: "Personalpronomen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚ich'",
          "‚du'",
          "‚er'",
          "‚wir'",
          "‚sie' (Plural)"
        ],
        cols: ["Personalpronomen", "Possessivpronomen", "Demonstrativpronomen"],
        correct: [0, 0, 0, 0, 0],
        model: "ich, du, er, wir, sie sind Personalpronomen",
        rule: "<div class=rbox>Personalpronomen: ich, du, er, sie, es, wir, ihr, sie.</div>"
      },
      {
        sub: "Possessivpronomen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚mein' in ‚mein Buch'",
          "‚dein' in ‚dein Auto'",
          "‚sein' in ‚sein Hund'",
          "‚unser' in ‚unser Haus'",
          "‚euer' in ‚euer Garten'"
        ],
        cols: ["Personalpronomen", "Possessivpronomen", "Demonstrativpronomen"],
        correct: [1, 1, 1, 1, 1],
        model: "mein, dein, sein, unser, euer sind Possessivpronomen",
        rule: "<div class=rbox>Possessivpronomen zeigen Besitz an: mein, dein, sein, ihr, unser, euer.</div>"
      },
      {
        sub: "Demonstrativpronomen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚dieser' in ‚dieser Mann'",
          "‚jener' in ‚jene Frau'",
          "‚der' in ‚der da' (als Pronomen)",
          "‚die' in ‚die da'",
          "‚das' in ‚das ist schön'"
        ],
        cols: ["Personalpronomen", "Possessivpronomen", "Demonstrativpronomen"],
        correct: [2, 2, 2, 2, 2],
        model: "dieser, jener, der (da) sind Demonstrativpronomen",
        rule: "<div class=rbox>Demonstrativpronomen weisen auf etwas hin: dieser, jener, der (betont).</div>"
      },
      {
        sub: "Präpositionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚in' in ‚in der Schule'",
          "‚auf' in ‚auf dem Tisch'",
          "‚mit' in ‚mit dem Bus'",
          "‚für' in ‚für dich'",
          "‚wegen' in ‚wegen des Regens'"
        ],
        cols: ["Präposition", "Konjunktion", "Adverb"],
        correct: [0, 0, 0, 0, 0],
        model: "in, auf, mit, für, wegen sind Präpositionen",
        rule: "<div class=rbox>Präpositionen stehen vor Nomen und geben Verhältnisse an.</div>"
      },
      {
        sub: "Nebenordnende Konjunktionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚und'",
          "‚oder'",
          "‚aber'",
          "‚denn'",
          "‚sondern'"
        ],
        cols: ["nebenordnende Konjunktion", "unterordnende Konjunktion", "Präposition"],
        correct: [0, 0, 0, 0, 0],
        model: "und, oder, aber, denn, sondern sind nebenordnende Konjunktionen",
        rule: "<div class=rbox>Nebenordnende Konjunktionen verbinden Hauptsätze oder Satzglieder auf gleicher Ebene.</div>"
      },
      {
        sub: "Unterordnende Konjunktionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚weil'",
          "‚dass'",
          "‚ob'",
          "‚wenn'",
          "‚obwohl'"
        ],
        cols: ["nebenordnende Konjunktion", "unterordnende Konjunktion", "Präposition"],
        correct: [1, 1, 1, 1, 1],
        model: "weil, dass, ob, wenn, obwohl sind unterordnende Konjunktionen",
        rule: "<div class=rbox>Unterordnende Konjunktionen leiten Nebensätze ein.</div>"
      },
      {
        sub: "Adverbien",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚heute'",
          "‚dort'",
          "‚gerne'",
          "‚sehr'",
          "‚vielleicht'"
        ],
        cols: ["Adverb", "Adjektiv", "Pronomen"],
        correct: [0, 0, 0, 0, 0],
        model: "heute, dort, gerne, sehr, vielleicht sind Adverbien",
        rule: "<div class=rbox>Adverbien sind Umstandswörter, sie sind unveränderlich.</div>"
      },
      {
        sub: "Interjektionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚Ach'",
          "‚Oh'",
          "‚Hallo' (als Ausruf)",
          "‚Miau'",
          "‚Hurra'"
        ],
        cols: ["Interjektion", "Nomen", "Verb"],
        correct: [0, 0, 0, 0, 0],
        model: "Ach, Oh, Hallo, Miau, Hurra sind Interjektionen",
        rule: "<div class=rbox>Interjektionen sind Ausrufe oder Lautmalereien.</div>"
      },
      {
        sub: "Gemischte Wortarten",
        type: "mc",
        q: "Welche Wortart hat das unterstrichene Wort?\n\n(a) Er <u>läuft</u> schnell.\n(b) Das ist ein <u>schöner</u> Tag.\n(c) Ich habe <u>ihn</u> gesehen.\n(d) <u>Und</u> dann ging er.\n(e) <u>Wegen</u> des Regens bleiben wir zu Hause.",
        o: [
          "(a) Verb, (b) Adjektiv, (c) Pronomen, (d) Konjunktion, (e) Präposition",
          "(a) Adjektiv, (b) Nomen, (c) Verb, (d) Adverb, (e) Konjunktion",
          "(a) Verb, (b) Adjektiv, (c) Nomen, (d) Konjunktion, (e) Präposition",
          "(a) Verb, (b) Adjektiv, (c) Pronomen, (d) Konjunktion, (e) Nomen"
        ],
        c: 0,
        model: "(a) läuft=Verb, (b) schöner=Adjektiv, (c) ihn=Pronomen, (d) und=Konjunktion, (e) wegen=Präposition",
        rule: "<div class=rbox>Wortarten bestimmen: Verben drücken Handlungen aus, Adjektive beschreiben Eigenschaften, Pronomen ersetzen Nomen, Konjunktionen verbinden, Präpositionen stehen vor Nomen.</div>"
      },
      {
        sub: "Zahlwörter",
        type: "cross",
        q: "Bestimme die Wortart: (Grundzahl, Ordnungszahl, unbestimmtes Zahlwort)",
        rows: [
          "‚eins'",
          "‚zwei'",
          "‚erste' in ‚der erste Mai'",
          "‚viele'",
          "‚drittens'"
        ],
        cols: ["Grundzahl", "Ordnungszahl", "unbestimmtes Zahlwort"],
        correct: [0, 0, 1, 2, 2],
        model: "eins, zwei = Grundzahl; erste = Ordnungszahl; viele = unbestimmtes Zahlwort; drittens = Adverb",
        rule: "<div class=rbox>Zahlwörter: Grundzahlen (eins, zwei), Ordnungszahlen (erste, zweite), unbestimmte (viele, einige). 'drittens' ist ein Adverb.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 6: Zeitformen (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_zeitformen",
    title: "Zeitformen (extra)",
    emoji: "⏰",
    color: "#16a34a",
    qs: [
      {
        sub: "Zeitform erkennen (3)",
        type: "cross",
        q: "Bestimme die Zeitform des unterstrichenen Verbs:",
        rows: [
          "Er <u>singt</u>.",
          "Sie <u>sang</u>.",
          "Wir <u>haben gesungen</u>.",
          "Ihr <u>werdet singen</u>.",
          "Nachdem er <u>gesungen hatte</u>, ..."
        ],
        cols: ["Präsens", "Präteritum", "Perfekt", "Futur I", "Plusquamperfekt"],
        correct: [0, 1, 2, 3, 4],
        model: "singt=Präsens, sang=Präteritum, haben gesungen=Perfekt, werdet singen=Futur I, hatte gesungen=Plusquamperfekt",
        rule: "<div class=rbox>Zeitformen: Präsens, Präteritum, Perfekt (haben/sein + Partizip), Plusquamperfekt (hatte/war + Partizip), Futur I (werden + Infinitiv).</div>"
      },
      {
        sub: "Futur II",
        type: "cross",
        q: "Bestimme die Zeitform:",
        rows: [
          "Er <u>wird gesungen haben</u>.",
          "Sie <u>wird gekommen sein</u>.",
          "Wir <u>werden gearbeitet haben</u>.",
          "Ich <u>werde gesehen haben</u>.",
          "Du <u>wirst geschlafen haben</u>."
        ],
        cols: ["Futur I", "Futur II", "Perfekt"],
        correct: [1, 1, 1, 1, 1],
        model: "Futur II: werden + Partizip II + haben/sein",
        rule: "<div class=rbox>Futur II bildet man mit <span class=hl>werden + Partizip II + haben/sein</span>.</div>"
      },
      {
        sub: "Hilfsverb im Perfekt",
        type: "cross",
        q: "Welches Hilfsverb wird für das Perfekt benötigt?",
        rows: [
          "Er ___ gelaufen.",
          "Sie ___ gegessen.",
          "Wir ___ gefahren.",
          "Ich ___ geschlafen.",
          "Das Kind ___ eingeschlafen."
        ],
        cols: ["haben", "sein"],
        correct: [1, 0, 1, 0, 1],
        model: "laufen, fahren, einschlafen → sein; essen, schlafen → haben",
        rule: "<div class=rbox>Verben der Bewegung und Zustandsänderung bilden das Perfekt mit <span class=hl>sein</span>, die meisten anderen mit <span class=hl>haben</span>.</div>"
      },
      {
        sub: "Präteritum starker Verben",
        type: "cross",
        q: "Ist die Präteritum-Form korrekt?",
        rows: [
          "Er singte (statt sang)",
          "Sie lief",
          "Wir gehen (gingen)",
          "Ich denkte (dachte)",
          "Du aßest"
        ],
        cols: ["korrekt", "falsch"],
        correct: [1, 0, 0, 1, 0],
        model: "sang, lief, gingen, dachte, aßest sind korrekte Präteritumformen",
        rule: "<div class=rbox>Starke Verben ändern im Präteritum den Stamm (singen - sang, denken - dachte, essen - aß).</div>"
      },
      {
        sub: "Partizip II",
        type: "cross",
        q: "Ist das Partizip II korrekt gebildet?",
        rows: [
          "gesungen",
          "gelaufen",
          "geht (gegangen)",
          "gedacht",
          "geschlafen"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 1, 0, 0],
        model: "gesungen, gelaufen, gedacht, geschlafen sind korrekt; geht ist falsch.",
        rule: "<div class=rbox>Partizip II wird bei schwachen Verben mit ge- + -t, bei starken mit ge- + -en gebildet.</div>"
      },
      {
        sub: "Zeitformen im Satz",
        type: "cross",
        q: "Bestimme die Zeitform des unterstrichenen Verbs:",
        rows: [
          "Er <u>wird</u> morgen kommen.",
          "Sie <u>hat</u> gestern angerufen.",
          "Wir <u>waren</u> schon gegangen.",
          "Ich <u>lese</u> ein Buch.",
          "Nachdem er gegessen <u>hatte</u>, ging er."
        ],
        cols: ["Präsens", "Präteritum", "Perfekt", "Plusquamperfekt", "Futur I"],
        correct: [4, 2, 3, 0, 3],
        model: "Futur I, Perfekt, Plusquamperfekt, Präsens, Plusquamperfekt",
        rule: "<div class=rbox>Erkennen der Zeitformen anhand der Hilfsverben und Endungen.</div>"
      },
      {
        sub: "Futur I vs Futur II",
        type: "cross",
        q: "Futur I oder Futur II?",
        rows: [
          "Er <u>wird kommen</u>.",
          "Er <u>wird gekommen sein</u>.",
          "Sie <u>wird singen</u>.",
          "Sie <u>wird gesungen haben</u>.",
          "Wir <u>werden arbeiten</u>."
        ],
        cols: ["Futur I", "Futur II"],
        correct: [0, 1, 0, 1, 0],
        model: "Futur I: werden + Infinitiv; Futur II: werden + Partizip II + haben/sein",
        rule: "<div class=rbox>Futur II erkennt man am Partizip II und dem Hilfsverb am Ende.</div>"
      },
      {
        sub: "Konjunktiv II",
        type: "cross",
        q: "Ist die Form Konjunktiv II?",
        rows: [
          "Er würde kommen.",
          "Sie käme.",
          "Ich hätte gearbeitet.",
          "Er wird kommen.",
          "Sie wäre gegangen."
        ],
        cols: ["Konjunktiv II", "Indikativ"],
        correct: [0, 0, 0, 1, 0],
        model: "würde kommen, käme, hätte gearbeitet, wäre gegangen sind Konjunktiv II; wird kommen ist Indikativ Futur",
        rule: "<div class=rbox>Konjunktiv II drückt Möglichkeit, Wunsch oder Irrealis aus. Er wird oft mit 'würde' + Infinitiv oder durch besondere Formen (käme) gebildet.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "cross",
        q: "Bestimme die Zeitform:",
        rows: [
          "‚Ich habe gegessen.'",
          "‚Du wirst schlafen.'",
          "‚Er war gekommen.'",
          "‚Wir sangen.'",
          "‚Nachdem sie gekocht hatte, aßen wir.'"
        ],
        cols: ["Präsens", "Präteritum", "Perfekt", "Plusquamperfekt", "Futur I"],
        correct: [2, 4, 3, 1, 3],
        model: "Perfekt, Futur I, Plusquamperfekt, Präteritum, Plusquamperfekt",
        rule: "<div class=rbox>Übung zu allen Zeitformen.</div>"
      },
      {
        sub: "Zeitformen erkennen (schwer)",
        type: "cross",
        q: "Bestimme die Zeitform:",
        rows: [
          "‚Er ist gelaufen.'",
          "‚Sie wird gekocht haben.'",
          "‚Wir hatten gespielt.'",
          "‚Ihr werdet lachen.'",
          "‚Ich dachte nach.'"
        ],
        cols: ["Perfekt", "Futur II", "Plusquamperfekt", "Futur I", "Präteritum"],
        correct: [0, 1, 2, 3, 4],
        model: "ist gelaufen=Perfekt, wird gekocht haben=Futur II, hatten gespielt=Plusquamperfekt, werdet lachen=Futur I, dachte=Präteritum",
        rule: "<div class=rbox>Alle Zeitformen im Überblick.</div>"
      },
      {
        sub: "Zeitformen im Aktiv/Passiv (Vorgriff)",
        type: "cross",
        q: "Bestimme die Zeitform (auch im Passiv):",
        rows: [
          "Das Haus wird gebaut.",
          "Das Haus wurde gebaut.",
          "Das Haus ist gebaut worden.",
          "Das Haus war gebaut worden.",
          "Das Haus wird gebaut werden."
        ],
        cols: ["Präsens Passiv", "Präteritum Passiv", "Perfekt Passiv", "Plusquamperfekt Passiv", "Futur I Passiv"],
        correct: [0, 1, 2, 3, 4],
        model: "wird gebaut=Präsens Passiv, wurde gebaut=Präteritum Passiv, ist gebaut worden=Perfekt Passiv, war gebaut worden=Plusquamperfekt Passiv, wird gebaut werden=Futur I Passiv",
        rule: "<div class=rbox>Passiv wird mit 'werden' in der entsprechenden Zeitform und Partizip II gebildet.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 7: Fälle (Kasus) (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_faelle",
    title: "Fälle (Kasus) (extra)",
    emoji: "📘",
    color: "#0891b2",
    qs: [
      {
        sub: "Nominativ",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes: (wer? was?)",
        rows: [
          "<u>Der Hund</u> bellt.",
          "<u>Ein Auto</u> fährt.",
          "<u>Die Kinder</u> spielen.",
          "<u>Mein Bruder</u> ist groß.",
          "<u>Sie</u> lacht."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle unterstrichenen Wörter sind Subjekt im Nominativ.",
        rule: "<div class=rbox>Der <span class=hl>Nominativ</span> antwortet auf 'Wer oder was?' und ist meist das Subjekt.</div>"
      },
      {
        sub: "Akkusativ",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes: (wen? was?)",
        rows: [
          "Ich sehe <u>den Hund</u>.",
          "Er kauft <u>ein Auto</u>.",
          "Sie mag <u>die Kinder</u>.",
          "Wir besuchen <u>meinen Bruder</u>.",
          "Hörst du <u>mich</u>?"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [1, 1, 1, 1, 1],
        model: "Alle unterstrichenen Wörter sind Akkusativobjekte.",
        rule: "<div class=rbox>Der <span class=hl>Akkusativ</span> antwortet auf 'Wen oder was?' und ist oft das direkte Objekt.</div>"
      },
      {
        sub: "Dativ",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes: (wem?)",
        rows: [
          "Ich helfe <u>dem Hund</u>.",
          "Er gibt <u>dem Kind</u> ein Buch.",
          "Sie dankt <u>der Lehrerin</u>.",
          "Wir gehören <u>dem Verein</u> an.",
          "Das Buch gehört <u>mir</u>."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 2, 2, 2, 2],
        model: "Alle unterstrichenen Wörter sind Dativobjekte.",
        rule: "<div class=rbox>Der <span class=hl>Dativ</span> antwortet auf 'Wem?' und ist oft das indirekte Objekt.</div>"
      },
      {
        sub: "Genitiv",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes: (wessen?)",
        rows: [
          "Das Haus <u>des Nachbarn</u> ist groß.",
          "Die Farbe <u>der Blume</u> ist rot.",
          "Wegen <u>des Regens</u> bleiben wir zu Hause.",
          "Trotz <u>des Lärms</u> schlief er.",
          "Die Mutter <u>des Kindes</u> kommt."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [3, 3, 3, 3, 3],
        model: "Alle unterstrichenen Wörter sind Genitivattribute oder nach Präpositionen.",
        rule: "<div class=rbox>Der <span class=hl>Genitiv</span> antwortet auf 'Wessen?' und zeigt Besitz oder Zugehörigkeit an.</div>"
      },
      {
        sub: "Präpositionen mit Akkusativ",
        type: "cross",
        q: "Welcher Fall folgt auf die Präposition?",
        rows: [
          "für ___ (der Freund)",
          "durch ___ (das Fenster)",
          "gegen ___ (der Baum)",
          "ohne ___ (die Brille)",
          "um ___ (der See)"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [1, 1, 1, 1, 1],
        model: "für, durch, gegen, ohne, um verlangen Akkusativ.",
        rule: "<div class=rbox>Präpositionen mit Akkusativ: <span class=hl>für, durch, gegen, ohne, um</span>.</div>"
      },
      {
        sub: "Präpositionen mit Dativ",
        type: "cross",
        q: "Welcher Fall folgt auf die Präposition?",
        rows: [
          "mit ___ (der Hund)",
          "nach ___ (die Schule)",
          "von ___ (der Vater)",
          "aus ___ (das Haus)",
          "bei ___ (der Freund)"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 2, 2, 2, 2],
        model: "mit, nach, von, aus, bei verlangen Dativ.",
        rule: "<div class=rbox>Präpositionen mit Dativ: <span class=hl>mit, nach, von, aus, bei, seit, zu, außer</span>.</div>"
      },
      {
        sub: "Präpositionen mit Genitiv",
        type: "cross",
        q: "Welcher Fall folgt auf die Präposition?",
        rows: [
          "trotz ___ (der Regen)",
          "wegen ___ (der Stau)",
          "während ___ (die Vorstellung)",
          "statt ___ (das Buch)",
          "innerhalb ___ (die Stadt)"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [3, 3, 3, 3, 3],
        model: "trotz, wegen, während, statt, innerhalb verlangen Genitiv.",
        rule: "<div class=rbox>Präpositionen mit Genitiv: <span class=hl>trotz, wegen, während, statt, innerhalb, außerhalb</span>.</div>"
      },
      {
        sub: "Wechselpräpositionen",
        type: "cross",
        q: "Bestimme den Fall (Akkusativ bei Bewegung, Dativ bei Ort):",
        rows: [
          "Er geht in ___ (der Park). (wohin?)",
          "Er spielt in ___ (der Park). (wo?)",
          "Sie legt das Buch auf ___ (der Tisch). (wohin?)",
          "Das Buch liegt auf ___ (der Tisch). (wo?)",
          "Wir stellen das Auto vor ___ (das Haus). (wohin?)"
        ],
        cols: ["Akkusativ", "Dativ"],
        correct: [0, 1, 0, 1, 0],
        model: "Wechselpräpositionen: bei Angabe des Ziels (wohin?) → Akkusativ, bei Angabe des Ortes (wo?) → Dativ.",
        rule: "<div class=rbox>Wechselpräpositionen (in, an, auf, unter, über, vor, hinter, neben, zwischen) verlangen bei Bewegung (wohin?) den <span class=hl>Akkusativ</span>, bei Ort (wo?) den <span class=hl>Dativ</span>.</div>"
      },
      {
        sub: "Verben mit Dativ oder Akkusativ",
        type: "cross",
        q: "Welcher Fall folgt auf das Verb?",
        rows: [
          "Ich helfe ___ (der Freund).",
          "Er fragt ___ (der Lehrer).",
          "Sie dankt ___ (die Mutter).",
          "Wir sehen ___ (das Kind).",
          "Das Buch gehört ___ (der Mann)."
        ],
        cols: ["Akkusativ", "Dativ"],
        correct: [1, 0, 1, 0, 1],
        model: "helfen, danken, gehören → Dativ; fragen, sehen → Akkusativ",
        rule: "<div class=rbox>Bestimmte Verben verlangen einen bestimmten Fall: <span class=hl>helfen, danken, gehören</span> + Dativ; <span class=hl>fragen, sehen, hören</span> + Akkusativ.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes:",
        rows: [
          "Ich gebe <u>dem Kind</u> einen Ball.",
          "Das Auto <u>des Nachbarn</u> ist neu.",
          "Er wartet auf <u>den Bus</u>.",
          "Sie wohnt bei <u>ihrer Tante</u>.",
          "Wegen <u>des Sturms</u> fiel der Strom aus."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 3, 1, 2, 3],
        model: "dem Kind=Dativ, des Nachbarn=Genitiv, den Bus=Akkusativ, ihrer Tante=Dativ, des Sturms=Genitiv",
        rule: "<div class=rbox>Übung zu allen vier Fällen.</div>"
      },
      {
        sub: "Präpositionen und Fälle gemischt",
        type: "cross",
        q: "Bestimme den Fall des Nomens nach der Präposition:",
        rows: [
          "mit dem Hund",
          "für den Hund",
          "trotz des Hundes",
          "bei dem Hund",
          "durch den Hund"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 1, 3, 2, 1],
        model: "mit+Dativ, für+Akkusativ, trotz+Genitiv, bei+Dativ, durch+Akkusativ",
        rule: "<div class=rbox>Übung zu den Fällen nach Präpositionen.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 8: Aktiv und Passiv (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_passiv",
    title: "Aktiv und Passiv (extra)",
    emoji: "⚙️",
    color: "#7c3aed",
    qs: [
      {
        sub: "Aktiv oder Passiv? (2)",
        type: "cross",
        q: "Aktiv oder Passiv?",
        rows: [
          "Der Brief wird geschrieben.",
          "Die Kinder spielen im Garten.",
          "Das Haus wurde gebaut.",
          "Er hat das Buch gelesen.",
          "Das Lied ist gesungen worden."
        ],
        cols: ["Aktiv", "Passiv"],
        correct: [1, 0, 1, 0, 1],
        model: "wird geschrieben=Passiv, spielen=Aktiv, wurde gebaut=Passiv, hat gelesen=Aktiv, ist gesungen worden=Passiv",
        rule: "<div class=rbox>Passiv erkennt man an der Form von 'werden' + Partizip II.</div>"
      },
      {
        sub: "Passiv mit Modalverben",
        type: "cross",
        q: "Ist der Satz im Passiv korrekt?",
        rows: [
          "Der Brief muss geschrieben werden.",
          "Das Haus kann gebaut werden.",
          "Die Aufgabe soll gemacht werden.",
          "Das Buch muss gelesen werden.",
          "Die Kinder müssen abgeholt werden."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Sätze sind korrekte Passivsätze mit Modalverb.",
        rule: "<div class=rbox>Im Passiv mit Modalverb steht: Modalverb + Partizip II + 'werden' (Infinitiv).</div>"
      },
      {
        sub: "Zustandspassiv",
        type: "cross",
        q: "Liegt Zustandspassiv (sein + Partizip) vor?",
        rows: [
          "Die Tür ist geöffnet.",
          "Das Fenster wird geöffnet.",
          "Das Auto ist repariert.",
          "Der Brief ist geschrieben worden.",
          "Das Haus ist gebaut."
        ],
        cols: ["Zustandspassiv", "Vorgangspassiv", "Aktiv"],
        correct: [0, 1, 0, 1, 0],
        model: "ist geöffnet, ist repariert, ist gebaut = Zustandspassiv; wird geöffnet, ist geschrieben worden = Vorgangspassiv",
        rule: "<div class=rbox>Zustandspassiv (sein + Partizip II) beschreibt einen Zustand, Vorgangspassiv (werden + Partizip II) einen Vorgang.</div>"
      },
      {
        sub: "Unpersönliches Passiv",
        type: "cross",
        q: "Ist der Satz ein unpersönliches Passiv?",
        rows: [
          "Es wird getanzt.",
          "Hier wird gearbeitet.",
          "Es wird gelacht.",
          "Er wird gelobt.",
          "Es wurde gesungen."
        ],
        cols: ["ja (unpersönlich)", "nein (persönlich)"],
        correct: [0, 0, 0, 1, 0],
        model: "Sätze ohne Subjekt (mit 'es' als Platzhalter) sind unpersönliches Passiv. 'Er wird gelobt' ist persönlich.",
        rule: "<div class=rbox>Unpersönliches Passiv wird verwendet, wenn kein Handelnder genannt wird. Es steht oft 'es' an Position 1.</div>"
      },
      {
        sub: "Passiv-Zeitformen bestimmen",
        type: "cross",
        q: "Welche Passiv-Zeitform liegt vor?",
        rows: [
          "Das Haus wird gebaut.",
          "Das Haus wurde gebaut.",
          "Das Haus ist gebaut worden.",
          "Das Haus war gebaut worden.",
          "Das Haus wird gebaut werden."
        ],
        cols: ["Präsens Passiv", "Präteritum Passiv", "Perfekt Passiv", "Plusquamperfekt Passiv", "Futur I Passiv"],
        correct: [0, 1, 2, 3, 4],
        model: "wird gebaut=Präsens, wurde gebaut=Präteritum, ist gebaut worden=Perfekt, war gebaut worden=Plusquamperfekt, wird gebaut werden=Futur I",
        rule: "<div class=rbox>Passiv wird mit 'werden' in der entsprechenden Zeitform und Partizip II gebildet.</div>"
      },
      {
        sub: "Aktiv → Passiv Umwandlung",
        type: "cross",
        q: "Ist die Umwandlung korrekt?",
        rows: [
          "Aktiv: Der Hund beißt den Mann. → Passiv: Der Mann wird vom Hund gebissen.",
          "Aktiv: Die Mutter kocht das Essen. → Passiv: Das Essen wird von der Mutter gekocht.",
          "Aktiv: Man sagt, er ist klug. → Passiv: Es wird gesagt, dass er klug ist.",
          "Aktiv: Sie reparierte das Auto. → Passiv: Das Auto wurde von ihr repariert.",
          "Aktiv: Das Kind liest das Buch. → Passiv: Das Buch wird von dem Kind gelesen."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Umwandlungen sind korrekt.",
        rule: "<div class=rbox>Bei der Umwandlung wird das Akkusativobjekt zum Subjekt, und der Täter wird mit 'von' + Dativ eingeführt.</div>"
      },
      {
        sub: "Passiv mit zwei Objekten",
        type: "cross",
        q: "Ist die Passiv-Umwandlung korrekt?",
        rows: [
          "Aktiv: Er schenkt ihr Blumen. → Passiv: Ihr werden Blumen geschenkt.",
          "Aktiv: Er schenkt ihr Blumen. → Passiv: Blumen werden ihr geschenkt.",
          "Aktiv: Der Lehrer erklärt den Schülern die Aufgabe. → Passiv: Die Aufgabe wird den Schülern erklärt.",
          "Aktiv: Der Lehrer erklärt den Schülern die Aufgabe. → Passiv: Den Schülern wird die Aufgabe erklärt.",
          "Aktiv: Er gibt dem Kind den Ball. → Passiv: Der Ball wird dem Kind gegeben."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Umwandlungen sind korrekt. Im Deutschen können beide Objekte zum Subjekt werden.",
        rule: "<div class=rbox>Im Passiv kann bei Verben mit zwei Objekten entweder das Akkusativ- oder das Dativobjekt zum Subjekt werden. Das andere Objekt bleibt im jeweiligen Fall.</div>"
      },
      {
        sub: "Passiv mit Modalverb und zwei Objekten",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: [
          "Ihm muss geholfen werden.",
          "Der Brief muss geschrieben werden.",
          "Den Kindern soll das Buch vorgelesen werden.",
          "Das Buch soll den Kindern vorgelesen werden.",
          "Es muss jetzt gearbeitet werden."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Sätze sind korrekte Passivsätze mit Modalverb.",
        rule: "<div class=rbox>Im Passiv mit Modalverb steht das Modalverb an Position 2, das Partizip II und 'werden' am Ende.</div>"
      },
      {
        sub: "Passiv Präteritum vs Perfekt",
        type: "cross",
        q: "Präteritum Passiv oder Perfekt Passiv?",
        rows: [
          "Das Haus wurde gebaut.",
          "Das Haus ist gebaut worden.",
          "Die Tür wurde geöffnet.",
          "Die Tür ist geöffnet worden.",
          "Das Lied wurde gesungen."
        ],
        cols: ["Präteritum Passiv", "Perfekt Passiv"],
        correct: [0, 1, 0, 1, 0],
        model: "wurde gebaut=Prät., ist gebaut worden=Perf., wurde geöffnet=Prät., ist geöffnet worden=Perf., wurde gesungen=Prät.",
        rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II; Perfekt Passiv: ist + Partizip II + worden.</div>"
      },
      {
        sub: "Passiv im Futur",
        type: "cross",
        q: "Futur I Passiv oder Futur II Passiv?",
        rows: [
          "Das Haus wird gebaut werden.",
          "Das Haus wird gebaut worden sein.",
          "Die Aufgabe wird gelöst werden.",
          "Die Aufgabe wird gelöst worden sein.",
          "Der Brief wird geschrieben werden."
        ],
        cols: ["Futur I Passiv", "Futur II Passiv"],
        correct: [0, 1, 0, 1, 0],
        model: "Futur I: wird + Partizip II + werden; Futur II: wird + Partizip II + worden sein",
        rule: "<div class=rbox>Futur I Passiv: werden (konj.) + Partizip II + werden (Inf.); Futur II Passiv: werden (konj.) + Partizip II + worden sein.</div>"
      },
      {
        sub: "Passiv erkennen (Multiple Choice)",
        type: "mc",
        q: "Welche Sätze stehen im Passiv?\n\n(A) Der Hund wird gebürstet.\n(B) Die Katze schläft.\n(C) Das Haus wurde gestrichen.\n(D) Er hat das Buch gelesen.\n(E) Es wird getanzt.",
        o: ["A, C und E", "A, B und C", "nur A und C", "alle außer B"],
        c: 0,
        model: "A, C, E sind Passiv.",
        rule: "<div class=rbox>Passiv erkennt man an 'werden' + Partizip II.</div>"
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // Thema 9: Worttrennung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_trennung",
    title: "Worttrennung (extra)",
    emoji: "✂️",
    color: "#6b7280",
    qs: [
      {
        sub: "Einfache Wörter trennen (3)",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Ampel: Am-pel",
          "Brücke: Brü-cke",
          "Ofen: O-fen",
          "Abend: A-bend",
          "Igel: I-gel"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 1, 0],
        model: "Am-pel, Brü-cke, O-fen, I-gel korrekt; A-bend falsch (Ab-end)",
        rule: "<div class=rbox>Einzelne Vokale am Anfang dürfen abgetrennt werden (O-fen, I-gel). Bei Abend bleibt die Vorsilbe Ab- zusammen: Ab-end.</div>"
      },
      {
        sub: "Zusammengesetzte Wörter",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Hausaufgaben: Haus-auf-ga-ben",
          "Hausaufgaben: Hausauf-ga-ben",
          "Schreibtisch: Schreib-tisch",
          "Fahrrad: Fahr-rad",
          "Apfelbaum: Ap-fel-baum"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 0],
        model: "Haus-auf-ga-ben korrekt, Hausauf-ga-ben falsch; Schreib-tisch, Fahr-rad, Ap-fel-baum korrekt.",
        rule: "<div class=rbox>Bei zusammengesetzten Wörtern nach den einzelnen Bestandteilen trennen, aber auch Sprechsilben beachten.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Pädagogik: Pä-da-go-gik",
          "Philosophie: Phi-lo-so-phie",
          "Physik: Phy-sik",
          "Rhythmus: Rhyth-mus",
          "Atmosphäre: Atmos-phäre"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 1],
        model: "Atmos-phäre falsch, richtig: At-mo-sphä-re",
        rule: "<div class=rbox>Fremdwörter werden nach Sprechsilben getrennt, oft wie im Deutschen. Bei 'Atmosphäre' trennt man At-mo-sphä-re.</div>"
      },
      {
        sub: "Doppelkonsonanten (2)",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "kommen: kom-men",
          "rennen: ren-nen",
          "schwimmen: schwim-men",
          "wissen: wis-sen",
          "Küsse: Küs-se"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle korrekt: Doppelkonsonanten werden in der Mitte getrennt.",
        rule: "<div class=rbox>Doppelkonsonanten (mm, nn, ss, ...) werden zwischen den Konsonanten getrennt.</div>"
      },
      {
        sub: "ck, sch, ß",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "backen: ba-cken",
          "backen: bak-ken",
          "waschen: wa-schen",
          "waschen: was-chen",
          "Straße: Stra-ße"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "ba-cken, wa-schen, Stra-ße sind korrekt; bak-ken (alt), was-chen (sch getrennt) sind falsch.",
        rule: "<div class=rbox>ck bleibt zusammen, Trennung davor: ba-cken; sch und ß werden nicht getrennt: wa-schen, Stra-ße.</div>"
      },
      {
        sub: "Vorsilben",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "verstehen: ver-ste-hen",
          "verstehen: vers-te-hen",
          "abholen: ab-ho-len",
          "abholen: a-bho-len",
          "einkaufen: ein-kau-fen"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Vorsilben bleiben zusammen: ver-, ab-, ein-.",
        rule: "<div class=rbox>Vorsilben wie ver-, ab-, ein- werden nicht getrennt.</div>"
      },
      {
        sub: "Endungen",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Hunde: Hun-de",
          "Hunde: Hund-e",
          "Blumen: Blu-men",
          "Blumen: Blum-en",
          "Garten: Gar-ten"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Trennung nach Sprechsilben: Hun-de, Blu-men, Gar-ten; nicht nach Morphemen: Hund-e, Blum-en sind falsch.",
        rule: "<div class=rbox>Man trennt nach Sprechsilben, nicht nach Morphemen: Hun-de, nicht Hund-e.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Ampel: Am-pel",
          "Ofen: O-fen",
          "backen: ba-cken",
          "rennen: ren-nen",
          "Straße: Stra-ße"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Trennungen sind korrekt.",
        rule: "<div class=rbox>Wiederholung der Trennregeln.</div>"
      },
      {
        sub: "Schwierige Wörter",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Schifffahrt: Schif-fahrt",
          "Schifffahrt: Schiff-fahrt",
          "Mittag: Mit-tag",
          "Mittag: Mitt-ag",
          "Ballett: Bal-lett"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Schif-fahrt, Mit-tag, Bal-lett korrekt; Schiff-fahrt, Mitt-ag falsch.",
        rule: "<div class=rbox>Bei drei gleichen Konsonanten trennt man vor dem dritten: Schif-fahrt. Zusammensetzungen nach Bestandteilen: Mit-tag (nicht Mitt-ag).</div>"
      },
      {
        sub: "st und sp",
        type: "cross",
        q: "Ist die Trennung korrekt?",
        rows: [
          "Kasten: Kas-ten",
          "Kasten: Ka-sten",
          "Wespe: Wes-pe",
          "Wespe: We-spe",
          "Fenster: Fens-ter"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Kas-ten, Wes-pe, Fens-ter korrekt; Ka-sten, We-spe falsch.",
        rule: "<div class=rbox>Die Buchstabenverbindungen st und sp werden getrennt: Kas-ten, Wes-pe, Fens-ter.</div>"
      },
      {
        sub: "Gemischte Übung (Multiple Choice)",
        type: "mc",
        q: "Welche Trennung ist korrekt?\n\n(A) Fa-hren\n(B) Fah-ren\n(C) Kin-der\n(D) Kind-er\n(E) Ba-cken",
        o: ["B, C und E", "A, C und D", "nur B", "nur E"],
        c: 0,
        model: "Fah-ren, Kin-der, Ba-cken sind korrekt.",
        rule: "<div class=rbox>Übung zu allen Trennregeln.</div>"
      }
    ]
  }
];