var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_trennung",
    title: "Worttrennung",
    emoji: "✂️",
    color: "#6b7280",
    qs: [
      // ========== Einfache Wörter trennen ==========
      {
        sub: "Einfache Wörter trennen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Ampel: Am-pel' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'Am-pel' ist die korrekte Trennung nach Sprechsilben.",
        rule: "<div class=rbox>Einzelne Vokale am Wortanfang dürfen abgetrennt werden (O-fen, I-gel). Bei Vorsilben wie Ab- bleibt die Vorsilbe zusammen: Ab-end.</div>"
      },
      {
        sub: "Einfache Wörter trennen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Brücke: Brü-cke' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'Brü-cke' ist die korrekte Trennung (ü als Umlaut bleibt beim ersten Teil).",
        rule: "<div class=rbox>Einzelne Vokale am Wortanfang dürfen abgetrennt werden (O-fen, I-gel). Bei Vorsilben wie Ab- bleibt die Vorsilbe zusammen: Ab-end.</div>"
      },
      {
        sub: "Einfache Wörter trennen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Ofen: O-fen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, einzelne Vokale am Wortanfang dürfen abgetrennt werden: O-fen.",
        rule: "<div class=rbox>Einzelne Vokale am Wortanfang dürfen abgetrennt werden (O-fen, I-gel). Bei Vorsilben wie Ab- bleibt die Vorsilbe zusammen: Ab-end.</div>"
      },
      {
        sub: "Einfache Wörter trennen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Abend: A-bend' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, richtig ist 'Ab-end', weil die Vorsilbe 'ab-' zusammenbleibt.",
        rule: "<div class=rbox>Einzelne Vokale am Wortanfang dürfen abgetrennt werden (O-fen, I-gel). Bei Vorsilben wie Ab- bleibt die Vorsilbe zusammen: Ab-end.</div>"
      },
      {
        sub: "Einfache Wörter trennen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Igel: I-gel' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, einzelne Vokale am Wortanfang dürfen abgetrennt werden: I-gel.",
        rule: "<div class=rbox>Einzelne Vokale am Wortanfang dürfen abgetrennt werden (O-fen, I-gel). Bei Vorsilben wie Ab- bleibt die Vorsilbe zusammen: Ab-end.</div>"
      },

      // ========== Zusammengesetzte Wörter ==========
      {
        sub: "Zusammengesetzte Wörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Hausaufgaben: Haus-auf-ga-ben' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Trennung nach Bestandteilen (Haus, auf) und dann Sprechsilben (ga-ben).",
        rule: "<div class=rbox>Bei zusammengesetzten Wörtern nach den einzelnen Bestandteilen und dann nach Sprechsilben trennen.</div>"
      },
      {
        sub: "Zusammengesetzte Wörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Hausaufgaben: Hausauf-ga-ben' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, 'Hausauf' ist kein Bestandteil. Richtig: Haus-auf-ga-ben.",
        rule: "<div class=rbox>Bei zusammengesetzten Wörtern nach den einzelnen Bestandteilen und dann nach Sprechsilben trennen.</div>"
      },
      {
        sub: "Zusammengesetzte Wörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Schreibtisch: Schreib-tisch' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Zusammensetzung aus 'schreib' und 'tisch'.",
        rule: "<div class=rbox>Bei zusammengesetzten Wörtern nach den einzelnen Bestandteilen und dann nach Sprechsilben trennen.</div>"
      },
      {
        sub: "Zusammengesetzte Wörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Fahrrad: Fahr-rad' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'Fahr' und 'rad'.",
        rule: "<div class=rbox>Bei zusammengesetzten Wörtern nach den einzelnen Bestandteilen und dann nach Sprechsilben trennen.</div>"
      },
      {
        sub: "Zusammengesetzte Wörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Apfelbaum: Ap-fel-baum' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'Ap-fel' (Sprechsilben) und 'baum'.",
        rule: "<div class=rbox>Bei zusammengesetzten Wörtern nach den einzelnen Bestandteilen und dann nach Sprechsilben trennen.</div>"
      },

      // ========== Doppelkonsonanten ==========
      {
        sub: "Doppelkonsonanten",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'kommen: kom-men' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Doppelkonsonanten werden getrennt: kom-men.",
        rule: "<div class=rbox>Doppelkonsonanten (mm, nn, ss …) werden zwischen den Konsonanten getrennt.</div>"
      },
      {
        sub: "Doppelkonsonanten",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'rennen: ren-nen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, ren-nen.",
        rule: "<div class=rbox>Doppelkonsonanten (mm, nn, ss …) werden zwischen den Konsonanten getrennt.</div>"
      },
      {
        sub: "Doppelkonsonanten",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'schwimmen: schwim-men' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, schwim-men.",
        rule: "<div class=rbox>Doppelkonsonanten (mm, nn, ss …) werden zwischen den Konsonanten getrennt.</div>"
      },
      {
        sub: "Doppelkonsonanten",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'wissen: wis-sen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, wis-sen.",
        rule: "<div class=rbox>Doppelkonsonanten (mm, nn, ss …) werden zwischen den Konsonanten getrennt.</div>"
      },
      {
        sub: "Doppelkonsonanten",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Küsse: Küs-se' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Küs-se.",
        rule: "<div class=rbox>Doppelkonsonanten (mm, nn, ss …) werden zwischen den Konsonanten getrennt.</div>"
      },

      // ========== ck, sch, ß ==========
      {
        sub: "ck, sch, ß",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'backen: ba-cken' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'ck' bleibt zusammen: ba-cken.",
        rule: "<div class=rbox>ck bleibt zusammen, Trennung davor: ba-cken. sch und ß werden nicht getrennt: wa-schen, Stra-ße.</div>"
      },
      {
        sub: "ck, sch, ß",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'backen: bak-ken' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, 'ck' darf nicht getrennt werden. Richtig: ba-cken.",
        rule: "<div class=rbox>ck bleibt zusammen, Trennung davor: ba-cken. sch und ß werden nicht getrennt: wa-schen, Stra-ße.</div>"
      },
      {
        sub: "ck, sch, ß",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'waschen: wa-schen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'sch' bleibt zusammen: wa-schen.",
        rule: "<div class=rbox>ck bleibt zusammen, Trennung davor: ba-cken. sch und ß werden nicht getrennt: wa-schen, Stra-ße.</div>"
      },
      {
        sub: "ck, sch, ß",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'waschen: was-chen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, 'sch' darf nicht getrennt werden. Richtig: wa-schen.",
        rule: "<div class=rbox>ck bleibt zusammen, Trennung davor: ba-cken. sch und ß werden nicht getrennt: wa-schen, Stra-ße.</div>"
      },
      {
        sub: "ck, sch, ß",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Straße: Stra-ße' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'ß' bleibt zusammen: Stra-ße.",
        rule: "<div class=rbox>ck bleibt zusammen, Trennung davor: ba-cken. sch und ß werden nicht getrennt: wa-schen, Stra-ße.</div>"
      },

      // ========== Vorsilben ==========
      {
        sub: "Vorsilben",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'verstehen: ver-ste-hen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Vorsilbe 'ver-' bleibt zusammen.",
        rule: "<div class=rbox>Vorsilben wie ver-, ab-, ein-, be-, ge- werden nicht getrennt.</div>"
      },
      {
        sub: "Vorsilben",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'verstehen: vers-te-hen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, 'vers' ist keine Vorsilbe. Richtig: ver-ste-hen.",
        rule: "<div class=rbox>Vorsilben wie ver-, ab-, ein-, be-, ge- werden nicht getrennt.</div>"
      },
      {
        sub: "Vorsilben",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'abholen: ab-ho-len' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Vorsilbe 'ab-' bleibt zusammen.",
        rule: "<div class=rbox>Vorsilben wie ver-, ab-, ein-, be-, ge- werden nicht getrennt.</div>"
      },
      {
        sub: "Vorsilben",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'abholen: a-bho-len' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, 'a' ist nicht die Vorsilbe. Richtig: ab-ho-len.",
        rule: "<div class=rbox>Vorsilben wie ver-, ab-, ein-, be-, ge- werden nicht getrennt.</div>"
      },
      {
        sub: "Vorsilben",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'einkaufen: ein-kau-fen' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Vorsilbe 'ein-' bleibt zusammen.",
        rule: "<div class=rbox>Vorsilben wie ver-, ab-, ein-, be-, ge- werden nicht getrennt.</div>"
      },

      // ========== Endungen ==========
      {
        sub: "Endungen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Hunde: Hun-de' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Trennung nach Sprechsilben: Hun-de.",
        rule: "<div class=rbox>Man trennt nach Sprechsilben, nicht nach Morphemen: Hun-de, nicht Hund-e.</div>"
      },
      {
        sub: "Endungen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Hunde: Hund-e' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, nicht nach Morphemen trennen. Richtig: Hun-de.",
        rule: "<div class=rbox>Man trennt nach Sprechsilben, nicht nach Morphemen: Hun-de, nicht Hund-e.</div>"
      },
      {
        sub: "Endungen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Blumen: Blu-men' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Blu-men.",
        rule: "<div class=rbox>Man trennt nach Sprechsilben, nicht nach Morphemen: Hun-de, nicht Hund-e.</div>"
      },
      {
        sub: "Endungen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Blumen: Blum-en' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, richtig: Blu-men.",
        rule: "<div class=rbox>Man trennt nach Sprechsilben, nicht nach Morphemen: Hun-de, nicht Hund-e.</div>"
      },
      {
        sub: "Endungen",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Garten: Gar-ten' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Gar-ten.",
        rule: "<div class=rbox>Man trennt nach Sprechsilben, nicht nach Morphemen: Hun-de, nicht Hund-e.</div>"
      },

      // ========== st und sp ==========
      {
        sub: "st und sp",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Kasten: Kas-ten' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'st' wird getrennt: Kas-ten.",
        rule: "<div class=rbox>Die Buchstabenverbindungen st und sp innerhalb des Wortstamms werden getrennt: Kas-ten, Wes-pe, Fens-ter.</div>"
      },
      {
        sub: "st und sp",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Kasten: Ka-sten' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, 'st' muss getrennt werden: Kas-ten.",
        rule: "<div class=rbox>Die Buchstabenverbindungen st und sp innerhalb des Wortstamms werden getrennt: Kas-ten, Wes-pe, Fens-ter.</div>"
      },
      {
        sub: "st und sp",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Wespe: Wes-pe' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'sp' wird getrennt: Wes-pe.",
        rule: "<div class=rbox>Die Buchstabenverbindungen st und sp innerhalb des Wortstamms werden getrennt: Kas-ten, Wes-pe, Fens-ter.</div>"
      },
      {
        sub: "st und sp",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Wespe: We-spe' korrekt?",
        o: ["korrekt", "falsch"],
        c: 1,
        model: "Falsch, richtig: Wes-pe.",
        rule: "<div class=rbox>Die Buchstabenverbindungen st und sp innerhalb des Wortstamms werden getrennt: Kas-ten, Wes-pe, Fens-ter.</div>"
      },
      {
        sub: "st und sp",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Fenster: Fens-ter' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, 'st' wird getrennt: Fens-ter.",
        rule: "<div class=rbox>Die Buchstabenverbindungen st und sp innerhalb des Wortstamms werden getrennt: Kas-ten, Wes-pe, Fens-ter.</div>"
      },

      // ========== Fremdwörter ==========
      {
        sub: "Fremdwörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Pädagogik: Pä-da-go-gik' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Trennung nach Sprechsilben.",
        rule: "<div class=rbox>Fremdwörter werden nach Sprechsilben getrennt, ähnlich wie deutsche Wörter.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Philosophie: Phi-lo-so-phie' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Phi-lo-so-phie.",
        rule: "<div class=rbox>Fremdwörter werden nach Sprechsilben getrennt, ähnlich wie deutsche Wörter.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Physik: Phy-sik' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Phy-sik.",
        rule: "<div class=rbox>Fremdwörter werden nach Sprechsilben getrennt, ähnlich wie deutsche Wörter.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Rhythmus: Rhyth-mus' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, Rhyth-mus.",
        rule: "<div class=rbox>Fremdwörter werden nach Sprechsilben getrennt, ähnlich wie deutsche Wörter.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "mc",
        q: "<b>Beurteile</b>:\nIst die Trennung 'Atmosphäre: At-mo-sphä-re' korrekt?",
        o: ["korrekt", "falsch"],
        c: 0,
        model: "Richtig, At-mo-sphä-re.",
        rule: "<div class=rbox>Fremdwörter werden nach Sprechsilben getrennt, ähnlich wie deutsche Wörter.</div>"
      },

      // ========== Gemischte Übung ==========
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "<b>Wähle</b> die richtige Antwort aus:\nWelche Trennungen sind korrekt?\n\n(A) Fah-ren\n(B) Kin-der\n(C) Ba-cken\n(D) Kind-er\n(E) Ka-sten",
        o: [
          "A, B und C",
          "A, C und D",
          "nur B",
          "nur A"
        ],
        c: 0,
        model: "Fah-ren, Kin-der, Ba-cken sind korrekt. Kind-er (nach Morphem) und Ka-sten (st nicht trennen) sind falsch.",
        rule: "<div class=rbox>Trennung nach Sprechsilben: Fah-ren, Kin-der; ck bleibt zusammen: Ba-cken; st trennen: Kas-ten.</div>"
      }
    ]
  }
];