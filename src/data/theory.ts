export type TheorySection = {
  id: string;
  title: string;
  content: string; // Hier nutzen wir sauberes Markdown für Absätze und Listen
};

export const THEORY_DATA: Record<string, TheorySection> = {
  block1: {
    id: "block1",
    title: "Grundlagen & Rollen der extramuralen Pflege",
    content: `
### 1. Grundlage zu Community Nurse / Extramurale Pflege

* **Definition:** Community Nurse bzw. extramurale Pflege (*Extra = außerhalb | mural = Mauer*) bezeichnet Pflege und Gesundheitsversorgung außerhalb von Krankenhäusern oder stationären Einrichtungen – also direkt in der Gemeinde (*"community"*) oder bei den Menschen zu Hause.
* **Ziel:** Krankenhausaufenthalte zu vermeiden und Menschen ein möglichst langes, selbstständiges Leben zu Hause zu ermöglichen.

#### Zukunftsperspektive:
* Die Haushaltsgrößen nehmen ab, Mehr-Generationenhaushalte existieren in immer geringerer Anzahl, die Zahl alleinlebender Menschen steigt.
* Hohe Scheidungsraten stellen das Entstehen von Familiennetzen, die sich im Pflegefall als haltbar erweisen, zunehmend in Frage.
* Traditionelle Rollenbilder haben sich verändert, Frauen sind zunehmend erwerbstätig und nicht mehr in der Lage, sämtliche innerhalb der Familie erforderlichen Betreuungsleistungen selbstverständlich zu übernehmen.
* Die verstärkte berufliche Mobilität führt zu größeren räumlichen Entfernungen zwischen den Generationen.
* In der Betreuungsbeziehung machen es Individualisierung und das Streben nach Selbstständigkeit und Selbstverwirklichung häufig sowohl für Betreuungspersonen als auch für Pflegebedürftige schwer, die gegenseitigen Abhängigkeiten auf der traditionellen Basis zu akzeptieren.

---

### 2. Arten von extramuraler Pflege

#### 2.1 School Nursing
* **Definition:** School Nursing (Schulgesundheitspflege) ist ein pflegerisches Fachkonzept, bei dem eine Pflegefachperson direkt an einer Schule tätig ist. Sie stellt die gesundheitliche Versorgung der Schüler während des Schulalltags sicher und fungiert als Schnittstelle zwischen Schule, Elternhaus und Gesundheitssystem.
* **Ziel:** Die Gesundheit, das Gesundheitsbewusstsein, die Sicherheit und das Wohlbefinden der Kinder und Jugendlichen zu fördern.

#### 2.2 Casemanagement
* **Definition:** In der Gemeinde bzw. Region stehen diese Fachkräfte als wohnortnahe Ansprechpersonen für Gesundheits- und Pflegefragen zur Verfügung. Sie beraten individuell, beantworten Fragen und unterstützen dabei, passende Hilfs- und Versorgungsangebote für die jeweilige Lebenssituation zu organisieren.
* **Ziel:** Eine bedarfsgerechte Versorgung und die Vermeidung von Über- und Unterpflege.
* **Verbreitung:** Das Angebot ist vorarlbergweit organisiert – entweder über die jeweilige Gemeinde oder den zuständigen Krankenpflegeverein.

#### 2.3 Caremanagement
* **Definition:** Care Management bezeichnet den systematischen Aufbau, die Planung und die Steuerung einer verbindlichen und abgestimmten Zusammenarbeit aller professionellen und freiwilligen Akteure einer Region. Die Zusammenarbeit erfolgt auf Grundlage regionaler bzw. landesweiter Bedarfsplanungen und schafft klare Strukturen zwischen Gemeinden und Dienstleistungsanbietern.
* **Ziel:** Unterstützungs- und Pflegeangebote (ambulant, stationär sowie Case Management) bedarfsgerecht zu koordinieren und aufeinander abzustimmen.
* **Verbreitung:** In Vorarlberg überwiegend in den Gemeinden angesiedelt und landesweit umgesetzt.

#### 2.4 Acute Community Nurse
* **Definition:** Vereint Aufgaben einer diplomierten Gesundheits- und Krankenpflegeperson (DGKP) mit erweiterten notfallpflegerischen Kompetenzen, ähnlich jenen von Notfallsanitäter:innen. Der Dienst ist rund um die Uhr erreichbar und versorgt Patient:innen akut im häuslichen Umfeld.
* **Ziel:** Unnötige Krankentransporte und Krankenhausaufenthalte zu reduzieren sowie eine rasche, wohnortnahe Akutversorgung sicherzustellen.

#### 2.5 Occupational Health Nurse
* **Definition:** Eine Occupational Health Nurse (Betriebsgesundheitspflege) ist eine Pflegefachperson, die in Betrieben tätig ist und sich mit den Auswirkungen von Arbeit auf Gesundheit beschäftigt. Sie berät Arbeitnehmer:innen und Arbeitgeber:innen zu Themen wie Arbeitssicherheit, Prävention und Umgang mit chronischen Erkrankungen.
* **Ziel:** Die Gesundheit zu schützen, arbeitsbedingte Erkrankungen zu verhindern und sichere, gesunde sowie produktive Arbeitsbedingungen zu fördern.
* **Verbreitung:** In Österreich noch wenig etabliert.

#### 2.6 Family Health Nurse
* **Definition:** Eine Family Health Nurse ist eine Pflegefachkraft, die Familien in allen Lebensphasen gesundheitlich unterstützt, Krankheiten vorbeugt und Gesundheitsförderung betreibt.
* **Ziel:** Gesundheit fördern, Krankheit vorbeugen, Familien aufklären und bei gesundheitlichen Herausforderungen begleiten.
* **Aufgaben:** * Beratung und Unterstützung rund um die Gesundheit mit Schwerpunkt auf Prävention und Gesundheitsförderung.
  * Frühzeitiges Erkennen potenzieller und aktueller Gesundheitsprobleme.
  * Abstimmung der gesundheitlichen Prioritäten mit den Klienten.
  * Unterstützung bei Entscheidungen ggfs. unter Hinzunahme anderer Experten.
  * Beratung und Begleitung im Kontext sozialer Gesundheitsfaktoren wie Pflegebedürftigkeit, Schwangerschaft, Gewalt, Armut, Migration, Drogenabhängigkeit.
  * Verbindungsglied im Sinne von Case Management zu Hausarzt, anderen Gesundheits- und Sozialberufen.
  * Unterstützung bei Pflege und Versorgung im Anschluss an Krankenhausaufenthalte.
* **Verbreitung:** In Österreich wenig etabliert.

#### 2.8 Primary Health Care Nurse
* **Definition:** Pflegefachkraft in Primärversorgungszentren, die eng mit Ärzten, Ordinationsassistent:innen und anderen Gesundheitsberufen zusammenarbeitet, Hausbesuche durchführt und Patienten unterstützt.
* **Ziel:** Gesundheitsversorgung verbessern, Prävention fördern, Patienten koordinierte Betreuung bieten.
* **Verbreitung:** In Österreich z. B. in Vorarlberg (3 PHC Nurse-Einheiten, 1 für Kinder) – in Hohenems, Bregenz und Dornbirn.
* **Vorteile:** Für Patienten (gemeinsame Schnittstelle, gemeinsame Dokumentation und Kalender); Für Mitarbeiter (kurze Abstimmungswege, Ressourcenschonung, Work-Life-Balance, private Kontakte im Team).

#### 2.9 Disaster Nurse
* **Definition:** Disaster Nurse kommen bei Ereignissen mit einer Vielzahl von Verletzten im In- und Ausland zum Einsatz.
* **Aufgaben:** Beurteilung von Verletzungen & Bedarf an pflegerischen und therapeutischen Maßnahmen, Wundversorgung, Erstellen von Notfallplänen (Leben schützen und unnötiges Sterben vermeiden), Hilfeleistung bei Bergungsmissionen, Aufklärung über Katastrophenschutz, Unterstützung der betroffenen Gemeinden, administrative Aufgaben, Teamführung und Supervision & Zusammenarbeit in interdisziplinären Teams.
* **Verbreitung:** Im deutschsprachigen Raum noch nicht etabliert.

#### 2.10 Freiberufliche Pflege
* **Definition:** Die selbstständige Erbringung von Pflegeleistungen durch eine Pflegefachkraft, meist zuhause oder ambulant, unabhängig von Krankenhäusern oder Pflegeeinrichtungen, auf eigene Rechnung und Verantwortung.
* **Bereiche:** Meist im Bereich Wundmanagement, Hygiene, Gutachten oder Sachverständigung. Die ÖGKV bietet hierbei Hilfestellung zur Anmeldung des Gewerbes.

#### 2.11 Ambulante Gerontopsychiatrische Pflege
* **Definition:** Ältere Menschen mit einer psychischen Erkrankung werden von speziell ausgebildeten Krankenpflegepersonen unterstützt, damit sie selbstbestimmt in ihrem gewohnten Umfeld leben können.
* **Finanzierung:** Diese Leistung wird von den örtlichen Krankenpflegevereinen angeboten und ist durch den Vorarlberger Sozialfonds kostenlos.
* **Verbreitung:** Abdeckung vorarlbergweit durch Krankenpflegevereine.

#### 2.12 Community Health Nurse
* **Definition:** Fördert und schützt die Gesundheit von einzelnen Personen, Familien und Gemeinschaften (*Prävention geht vor*). Hierbei bieten DGKP wohnortnahe und niederschwellige Angebote zur Unterstützung und Entlastung an. Bereits bestehende Dienstleistungen, wie die Hauskrankenpflege, werden ergänzt.
* **Ziel:** Die gesunden Lebensjahre im Alter zu fördern und zu erhalten, die Selbstständigkeit zu unterstützen und die Versorgung in der eigenen Umgebung so lange wie möglich sicherzustellen.
    `.trim(),
  },
  // Block2
  block2: {
    id: "block2",
    title: "Setting & Ort der Pflege (Häusliches Umfeld & Barrierefreiheit)",
    content: `
### 3. Der Ort der Pflege

#### 3.1 Grundsätzliche Überlegungen
Wenn eine Pflege im häuslichen Umfeld organisiert werden soll, müssen vorab wichtige Kernfragen geklärt werden:
* **Wünsche der/des Betroffenen:** Was möchte die pflegebedürftige Person selbst?
* **Krankheitsbedingte Machbarkeit:** Ist eine adäquate Betreuung aufgrund des Krankheitsbildes zu Hause überhaupt grundsätzlich möglich?
* **Räumliche Gegebenheiten:** Erlaubt die eigene Wohnung oder das eigene Haus der/des Betroffenen eine sichere Pflege?
* **Soziale Kontakte:** Ist ein eventueller Auszug aus der eigenen Wohnung mit dem Verlust von wichtigen sozialen Kontakten verbunden?
* **Alternativnetzwerke:** Ist eine Pflege in der Wohnung von Angehörigen, Freund:innen oder Bekannten realisierbar?

#### 3.2 Organisation der Pflege in der Wohnung der Angehörigen
Soll die pflegebedürftige Person in den Haushalt der Angehörigen aufgenommen werden, müssen folgende positive Rahmenbedingungen geschaffen werden:
* Eine geeignete Wohnung mit genügend Platz und Bewegungsspielraum.
* Eine optimale Ausstattung mit den notwendigen Hilfsmitteln.
* Ein stabiles Netzwerk aus verschiedenen ambulanten Diensten zur Entlastung.
* Pflegerische Grundkenntnisse der Angehörigen.
* Die Rückendeckung und Unterstützung der gesamten Familie.

#### 3.3 Die eigene Wohnung als positive Rahmenbedingung
Das Verbleiben in den eigenen vier Wänden hat einen massiven, wissenschaftlich belegten Einfluss auf das Wohlbefinden und den Pflegeerfolg. Es bildet das emotionale Fundament im Dreieck aus *Bedürfnissen der Familie*, *Bedürfnissen des pflegebedürftigen Menschen* und den *Anforderungen der Pflege und Betreuung*:

* **Keine Entwurzelung:** Die bekannte Umgebung sorgt für enorme eigene Sicherheit, da die Patient:innen die Wege, Strukturen und auch die potenziellen Gefahren bereits seit Jahren instinktiv kennen.
* **Kontinuität durch Erinnerungen:** Vertraute Räume spenden emotionalen Halt.
* **Erhalt des Sozialraums:** Bestehende soziale Kontakte in der Nachbarschaft können leichter weiter gepflegt werden.
* **Individuelles Pflegeleitbild:** Ein völlig selbstbestimmter Lebensrhythmus und ein individuelles Pflegeleitbild sind im privaten Raum viel leichter realisierbar als in einer Institution.
* **Schutz der Identität:** Private Utensilien im privaten Raum bewahren die Würde, und Details der eigenen Biografie bleiben in der Wohnung sichtbar.
* **Ganzheitliche Wahrnehmung:** Für die Pflegeperson ist die "Ganzheit" des Menschen inklusive seines sozialen Umfelds sofort wahrnehmbar.
* **Erleichterte Kommunikation:** Über emotionales Erleben und Ängste lässt sich in der eigenen, vertrauten Umgebung nachweislich viel leichter sprechen.
* **Aktivierende Pflege:** Da sich die Patient:innen zu Hause blind auskennen, ist eine aktivierende Pflege (Hilfe zur Selbsthilfe) wesentlich erfolgreicher.

#### 3.4 Organisation der Pflege in der Wohnung der Klient:innen
Für eine langfristig stabile häusliche Pflege sollte die Wohnung idealerweise folgende Kriterien erfüllen:
* **Lage:** Zentral gelegen mit kurzen Wegen zu Einkaufsmöglichkeiten, Arztpraxen, Apotheken etc.
* **Ausstattung:** Funktionierende Zentralheizung, Balkon, Aufzug (falls nicht im Erdgeschoss) und ein absolut zuverlässiges Notrufsystem.
* **Soziales Netz:** Ein enges, funktionierendes Netzwerk aus Hilfsdiensten, Freund:innen, Angehörigen und Nachbar:innen.
* **Anpassung:** Eine barrierefreie, an die spezifischen Bedürfnisse und Hilfsmittel angepasste Raumaufteilung.

---

### 3.5 Barrierefreiheit und Hilfsmittel (Raum-Checkliste)

#### 🍳 Küche
* **Gefahren & Hindernisse:** Unpassende Arbeitshöhe, scharfe Messer, Rutschgefahr bei Flüssigkeiten, zu schwere Töpfe und Materialien, unerreichbare Regalhöhen, unhandliches Besteck/Teller, Hitze- und Verbrennungsgefahr sowie Elektrik- und Brandgefahr (z. B. wenn der Herd vergessen wird abzudrehen).
* **Barrierefreiheit & Hilfsmittel:** Schnabelbecher, spezialisierte Teller mit erhöhtem Rand, höhenverstellbare Küchenzeilen, ausgleichendes/ergonomisches Besteck, striktes Ordnungsmanagement (hohe Regale komplett abbauen, damit keine gefährlichen Kletterversuche entstehen), mechanische Greifhilfen, "Strongboy"-Öffner für Gläser und strukturierte Medikamentenhilfen.

#### 🛋️ Wohnzimmer
* **Gefahren & Hindernisse:** Teppiche und Läufer (massive Rutsch- und Sturzgefahr!), zu tiefe Sessel (erschweren das Aufstehen massiv), unerreichbare Regalhöhen sowie eine unpassende Höhe von alltäglichen Sitzgelegenheiten.
* **Barrierefreiheit & Hilfsmittel:** Greifhilfen, passende Gehhilfen (Rollator/Gehstock), Lesehilfen und mechanische oder digitale Umblätterhilfen für Bücher.

#### 🛏️ Schlafzimmer
* **Gefahren & Hindernisse:** Probleme beim An- und Auskleiden durch eingeschränkte Mobilität, Lichtschalter, die zu weit vom Bett entfernt und im Dunkeln nicht erreichbar sind, gefährliche Türschwellen, zu hohe Fächer im Kleiderschrank, Teppiche als Stolperfallen und zu weiche Matratzen, die das Aufstehen blockieren.
* **Barrierefreiheit & Hilfsmittel:** Höhenverstellbares Pflegebett, spezielle Anziehhilfen (z. B. Strumpfanzieher), Deckenlifter für den Transfer, mobile Haarwaschbecken für das Bett und kugelgelagerte Drehscheiben zur Mobilisation.

#### 🚿 Badezimmer
* **Gefahren & Hindernisse:** Extreme Rutschgefahr durch Nässe, hohe Einstiegsschwellen, Stolperfallen (Badematten), gefährlich hohe Einstiege bei Badewannen, zu wenig Bewegungsplatz für Pflegepersonen, eine viel zu niedrige Toilettenschüssel, unerreichbare Waschbecken und Spiegel sowie eine zu weite Entfernung des Badezimmers vom Schlafbereich (idealerweise auf demselben Stockwerk). Zudem Gefahr durch elektronische Geräte und Türen, die nach innen aufgehen (wenn eine Person stürzt, blockiert sie die Tür von innen).
* **Barrierefreiheit & Hilfsmittel:** Dedizierte Hilfen für Körperpflege und Ausscheidung (z. B. Urinflaschen), Badewannen mit Seiteneinstieg, stabile Saugnapf-Greifhilfen an den Wänden, Toilettensitzerhöhungen, Treppensteiger, Badelifter und Bade- oder Duschstühle.
    `.trim(),
  },

  block3: {
    id: "block3",
    title: "Familie, Gesundheit & Familienzentrierte Pflege (FZP)",
    content: `
### 4. Was bedeutet Familie?

* **Definition:** Familie ist eine der „ursprünglichsten Formen sozialer Zusammengehörigkeit“. Als Institution verknüpft Familie die Grundbedürfnisse von Individuum und Gattung (Sexualität und Intimität, soziale Reproduktion und gesellschaftliche Organisation).
* **Soziale Definition:** Eine aus einem Elternpaar oder einem Elternteil und mindestens einem Kind bestehende Lebensgemeinschaft mit emotionaler Eltern-Kind-Bindung, oder die Gruppe aller miteinander blutsverwandten Personen.
* **Biologische Definition:** Eine systematische Einheit oder Kategorie, in der näher miteinander verwandte Gattungen tierischer oder pflanzlicher Lebewesen zusammengefasst sind.

#### Exklusive Funktionen der Familie:
* **Beziehungsform:** Sie organisiert Geschlechterverhältnisse, bestimmt wer mit wem zusammenlebt, regelt Rollenverständnisse sowie Aufgaben- und Arbeitsteilung und ermöglicht die Teilhabe am gesellschaftlichen Leben.
* **Generationengeflecht:** Sie eröffnet Entwicklungsräume, bietet Möglichkeiten des Zusammenlebens und verantwortet die Bildung, Erziehung und Sozialisation nachkommender Generationen.

#### Die Stadien des Familienlebenszyklus:
1. **Auszug aus dem Elternhaus:** Junge Erwachsene.
2. **Eheschließung / Paarbildung:** Die Verbindung von zwei Familien zu einem neuen Paar.
3. **Familien mit kleinen Kindern**
4. **Familien mit Jugendlichen**
5. **Nesting / Nacheltliche Phase:** Die Kinder ins Leben entlassen und sich wieder um das eigene Leben kümmern.
6. **Familie im späteren Lebensalter**

#### Vielfalt der Familienformen:
Adoptivfamilien, Co-Parenting, Patchworkfamilien, Gleichgeschlechtliche Familien (Regenbogenfamilien), Alleinerziehende, Pflegefamilien, Kommunen, Kinderdorf/institutionelle Familien, Mehrgenerationen-Familien, Wahlfamilien, Paarfamilien, Freunde, Kohorten, Kernfamilien, Angehörigenfamilien, In-Vitro-Familien, Familien mit pflegenden Angehörigen sowie **transnationale Familien** (*Familien, die ihr Leben mittelfristig für einige Jahre zwischen verschiedenen geografischen Räumen organisieren*).

---

### 4.1 Familie und Gesundheit

Familie kann als **„hidden health care system“ (verstecktes Gesundheitssystem)** verstanden werden, da sie im Alltag den Großteil aller gesundheitsbezogenen Aufgaben übernimmt. Sie sorgt für Pflege, Unterstützung bei Krankheit, emotionale Stabilität sowie für die gesundheitliche Sozialisation ihrer Mitglieder über den gesamten Lebensverlauf hinweg.

* **Verantwortung:** Familien wird heute zunehmend die Verantwortung für eine gesunde Lebensführung (Ernährung, Bewegung, Prävention) zugeschrieben.
* **Soziale Ungleichheit:** Gesundheitschancen hängen stark von sozialen Bedingungen wie Bildung, Einkommen und Lebenslage ab. Soziale Ungleichheit kann die Gesundheitsressourcen von Familien deutlich einschränken.
* **Schutz- vs. Risikofaktoren:** Ein positives Familienklima, stabile Beziehungen und gegenseitige Unterstützung wirken als Schutzfaktoren. Belastungen wie Armut, Stress oder Konflikte stellen erhebliche gesundheitliche Risiken dar.
* **Ottawa-Charta der WHO (1986):** Gesundheit entsteht im Alltag – also dort, wo Menschen leben, arbeiten, lernen und Beziehungen führen. Im Unterschied zum rein biomedizinischen Modell steht hier die Förderung von Ressourcen, Lebensbedingungen, Selbstbestimmung und Gesundheitskompetenz im Mittelpunkt.

---

### 5. Familienzentrierte Pflege (FZP)

Familienzentrierte Pflege ist eine Partnerschaft zwischen Familien und Pflegepersonal, die darauf abzielt, die Gesundheit und das Wohlbefinden der Familie zu fördern, indem die individuellen Bedürfnisse und Perspektiven jedes Familienmitglieds berücksichtigt werden.

* **Bedarf der Familie:** Entlastung, Erholung, Information, Beratung, Schulung und persönliche Aussprache.
* **Relevante Pflegetheorien:**
  * *Pluralismus:* Viele verschiedene Ansichten darüber, was Familie ist.
  * *Kybernetik:* Beschäftigt sich mit der Selbstregulation von Systemen.
  * *Kommunikationstheorie:* Die Art und Weise, wie innerhalb des Systems kommuniziert wird.
  * *Veränderungstheorie:* Wie das System mit Veränderungen umgeht.
  * *Erkenntnistheorie:* Welchen Hintergrund man mitbringt und wie man gewisse Dinge wahrnimmt.
  * *Systemtheorie:* Das wissenschaftliche Fundament der FZP.

#### 5.1 Die 5 Konzepte der Systemtheorie
Ein System lässt sich definieren als „die Gesamtheit miteinander interagierender Elemente“. In der FZP wird die Familie als biologische und soziale Einheit verstanden. Der Fokus liegt auf der Interaktion der Familienmitglieder untereinander sowie der Interaktion zwischen der Familie und der Krankheit.

* **Konzept 1:** Das Familiensystem ist Teil größerer Suprasysteme (Gemeinde, Gesellschaft) und setzt sich selbst aus vielen Subsystemen (Mutter-Kind-Beziehung, Eltern-Subsystem, Geschwister) zusammen.
* **Konzept 2:** Die Familie als Ganzes ist größer als die Summe ihrer Teile (Einbindung aller Dynamiken).
* **Konzept 3:** Die Veränderung eines einzelnen Familienmitgliedes beeinflusst unweigerlich alle anderen Familienmitglieder.
* **Konzept 4:** Die Familie ist in der Lage, eine fließende Balance zwischen Veränderung und Stabilität zu schaffen.
* **Konzept 5:** **Zirkuläre Kausalität** erklärt das Verhalten von Familienmitgliedern wesentlich besser als lineare Kausalität (Verhalten ist keine Einbahnstraße, sondern eine Wechselwirkung).
    `.trim(),
  },

  block4: {
    id: "block4",
    title: "Pflegeprozess & Assessment-Modelle (BAIA & CFAM)",
    content: `
### 6. Phasen eines pflegerischen Familiengesprächs (Das BAIA-Modell)

Ein strukturiertes Familiengespräch verläuft im Sinne einer wirksamen Zusammenarbeit in der "Ruhe der Bucht" über vier feste Phasen:

* **B – Beziehungsaufbau:** Die Pflegeperson agiert als Partner:in und Berater:in der Familie. Sie zeigt wohlwollendes Interesse, schätzt Stärken sowie Ressourcen und vermeidet jegliche kritische Einschätzungen oder Schuldzuweisungen. Die Familienmitglieder bringen ihre Krankheitserfahrung ein, die Pflegeperson ihr Fachwissen. Dies bildet die Basis für den gemeinsamen Prozess.
* **A – Assessment:** In dieser Phase erfolgt die Identifizierung und Analyse der Probleme sowie die Gegenüberstellung von Stärken und Herausforderungen. Der Familie wird es ermöglicht, ihre Situation umfassend aus ihrer Sicht darzustellen.
* **I – Intervention:** Das Kernstück der klinischen Arbeit. Hier wird gemeinsam ein unterstützender Kontext geschaffen, um kleine und große Veränderungen anzustoßen. Alle Pläne werden gemeinsam erarbeitet und exakt auf die individuelle Lebenssituation der Familie abgestimmt.
* **A – Abschluss:** Die professionelle Beziehung wird so beendet, dass die Familie in die Lage versetzt wird, konstruktive Veränderungen selbstständig beizubehalten, neue stärkende Sichtweisen zu festigen und förderliche Überzeugungen weiterzuentwickeln.

---

### 7. CFAM – Calgary-Familien-Assessment-Modell

Das CFAM ist ein mehrdimensionales Werkzeug zur Erhebung der Familiensituation, von vorhandenen Ressourcen und Problemen. Es dient als Struktur für die klinische Datenerhebung und besteht aus drei Hauptkategorien, die sich in feine Subkategorien unterteilen lassen:

#### 1. Strukturelles Assessment (Wer gehört zum System?)
Zur visuellen Darstellung der Struktur werden zwei wesentliche grafische Instrumente genutzt:
* **Genogramm:** Eine grafische Darstellung des Familienstammbaums über die Zeit hinweg. Es liefert Daten zu Beziehungsstrukturen und hilft den Pflegenden, Hypothesen für die weitere Evaluation aufzustellen.
  * *Darstellungsregeln:* Familienmitglieder einer Generation werden horizontal dargestellt. Eheschließungen oder eheähnliche Beziehungen werden durch horizontale Linien gekennzeichnet, Kinder durch vertikale Linien. Die Rangordnung der Kinder erfolgt von links nach rechts (beginnend mit dem ältesten Kind). Namen und Alter werden direkt in die Symbole (Quadrate für Männer, Kreise für Frauen) eingetragen, wichtige Zusatzinfos außerhalb. Personen, die aktuell im selben Haushalt leben, werden komplett eingekreist.
* **Ökogramm:** Macht die Kontakte und Beziehungen der Familie zur "Außenwelt" (größere Systeme, Institutionen, Nachbarschaft) grafisch sichtbar. Es zeigt auf einen Blick, wo wertvolle Ressourcen vorhanden sind oder wo soziale Verbindungen fehlen bzw. konfliktgeladen sind.

#### 2. Assessment der Entwicklung (Wo steht die Familie im Leben?)
Dieses Instrument betrachtet den Lebensfluss der Familie. Jeder Entwicklungsschritt in einen neuen Familienlebenszyklus ist durch emotionale Übergangsprozesse gekennzeichnet. Jedes Stadium bringt spezifische Themen und Aufgaben mit sich, die von der Familie bewältigt werden müssen.

#### 3. Funktionales Assessment (Wie verhalten sich die Mitglieder im Alltag?)
Das Ziel ist es, das tatsächliche Verhalten der Individuen untereinander zu einem bestimmten Zeitpunkt zu registrieren. Es unterteilt sich in zwei Hauptbereiche:
* **Instrumentelle Funktion:** Umfasst alle Routinentätigkeiten des täglichen Lebens (Essen, Trinken, Schlafen, Waschen, pflegerische Verrichtungen wie Injektionen geben oder Verbandswechsel).
* **Expressive Funktion:** Umfasst die tieferen Beziehungsdynamiken (Kommunikationsstile, Problemlösungsstrategien, grundlegende Überzeugungen, Allianzen, Koalitionen und gelebte Rollenverteilungen).

**Schlussfolgerung:** Das CFAM versteht sich als umfassendes Konzept zur Orientierung. Mit Hilfe der drei Hauptkategorien (Struktur, Entwicklung und Funktion) werden Stärken und Probleme eingeschätzt. Nach Abschluss des Assessments wird gemeinsam entschieden, ob eine gezielte pflegerische Intervention angezeigt ist.
    `.trim(),
  },

  block5: {
    id: "block5",
    title: "Pflege durch Angehörige (Belastungen, Motive, Young Carer, HPS-Skala)",
    content: `
### 8. Pflege durch Angehörige

Der Großteil aller pflegebedürftigen Menschen wird von einem engen Familienmitglied – meist Ehe-, Lebenspartner:innen oder den eigenen Kindern – zu Hause betreut und gepflegt[cite: 217]. Für den mobilen Pflegedienst ist es zwingend notwendig, hier eine professionelle Reflexion und einen Perspektivenwechsel durchzuführen, um sich über Motive, Rollenwechsel und versteckte Belastungen im Klienten-System bewusst zu werden[cite: 219].

* **Demografie:** Die Mehrheit der pflegenden Angehörigen ist bereits älter als 60 Jahre[cite: 220]. Diese unschätzbare Pflegearbeit wird in der Gesellschaft ganz überwiegend von Frauen eingenommen (73 Prozent)[cite: 220].
* **Eintritt des Pflegebedarfs:** Der Bedarf kann plötzlich eintreten (z. B. durch Unfälle oder Schlaganfälle) oder sich schleichend entwickeln (z. B. bei kognitiven Erkrankungen wie Demenz)[cite: 221]. Dies macht einen fundamentalen Unterschied in der Vorbereitung, der psychologischen Anpassung und der langfristigen Organisation der Pflege für die Angehörigen aus[cite: 222].

#### Motive pflegender Angehörige (Warum wird zu Hause gepflegt?)
Die Entscheidung, die Pflege selbst zu übernehmen, basiert meist auf einem Geflecht aus emotionalen und strukturellen Gründen[cite: 223]:
* Die Pflege wird schlicht als selbstverständlich angesehen[cite: 225].
* Es besteht eine starke emotionale Verbindung oder man fühlt sich moralisch verpflichtet[cite: 226].
* Die Kosten für professionelle Pflege oder eine stationäre Betreuung sind schlicht zu hoch[cite: 227].
* Es liegen tiefe religiöse oder kulturelle Überzeugungen zugrunde[cite: 228].
* Es war gar keine bewusste, freie Entscheidung, sondern man ist in die Rolle hineingeratst[cite: 229].
* Weil die Person schlicht "zur Familie gehört"[cite: 230].
* Die Pflege bot dem Haushalt finanzielle Vorteile (z. B. Pflegegeld)[cite: 231].
* Motive wie tiefes Mitleid, Liebe und Dankbarkeit treiben die Angehörigen an[cite: 232].
* Es steht schlicht kein freier oder passender Pflegeheimplatz zur Verfügung[cite: 233].

#### Subjektive Belastungen der Angehörigen
Die häusliche Pflege kann zu massiven seelischen, körperlichen, sozialen und finanziellen Belastungen führen[cite: 218]. Die häufigsten Belastungsfaktoren im Alltag sind[cite: 234]:
* Das persönliche Schicksal der erkrankten Person macht dauerhaft traurig[cite: 235].
* Gefühle von akuter Perspektivlosigkeit und chronischer Überforderung im Pflegealltag[cite: 235].
* Die sozialen Beziehungen zur restlichen Familie und zu Freund:innen leiden stark unter dem Zeitmangel[cite: 235].
* Die eigene körperliche und psychische Gesundheit wird angegriffen[cite: 236].
* Das Gefühl, dass einem die Pflege von außen oder der Familie aufgedrängt wurde[cite: 237].
* Eine spürbare Verringerung des gesamten Lebensstandards[cite: 238].
* Das Gefühl, von anderen Familienmitgliedern ausgenutzt zu werden[cite: 239].
* Massive körperliche Erschöpfung durch schwere Hebearbeiten und chronischen Schlafmangel[cite: 240].
* Die eigene Lebenszufriedenheit leidet erheblich unter der sozialen Isolation[cite: 241].
* Direkte finanzielle Belastungen durch Pflegeutensilien und Zuzahlungen[cite: 242].
* Die gesamte Tagesplanung muss sklavenhaft an den Rhythmus und den Zustand der pflegebedürftigen Person angepasst werden[cite: 243].
* Ein zu großes, unangenehmes Näheverhältnis bei schambehafteten Tätigkeiten (z. B. bei der Intimpflege von Eltern oder Schwiegereltern)[cite: 244].
* Dauerhafte Mehrfachbelastung (Pflege, eigener Job, eigener Haushalt, Kindererziehung)[cite: 245].
* Häufiger Streit innerhalb der Familie durch die permanenten Spannungen im Alltag[cite: 245].
* Der bürokratische Druck (z. B. die lückenlose Dokumentationspflicht, um eine höhere Pflegestufe zu erhalten)[cite: 246].
* Erzwungene Reduzierung der eigenen Arbeitszeit im Beruf, was zu weniger Gehalt und späterer Altersarmut führt[cite: 247].

#### Gesundheitliche Folgen (Multimorbidität)
Pflegende Angehörige sind häufig massiv überbelastet und chronisch gestresst[cite: 250]. Dies äußert sich in einer Vielzahl psychosomatischer Beschwerden [cite: 248]: Rückenschmerzen, Nacken- und Schulterschmerzen (durch falsches Heben), Spannungskopfschmerzen, funktionelle Herzbeschwerden, nervöse Unruhezustände, Schwindel, Gliederschmerzen, schwere Einschlaf- und Durchschlafstörungen sowie chronische Erschöpfung (Burnout)[cite: 248, 249].

---

### 8.1 Diagnostik der Belastung: Die HPS-Skala (BSFC)

Um eine Überlastung rechtzeitig zu erkennen, nutzt die professionelle Pflege wissenschaftliche Fragebögen[cite: 255, 256]:
* **Burden Scale for Family Caregivers (BSFC) / Häusliche Pflege-Skala (HPS):** Ein standardisierter Fragebogen zur präzisen Erfassung der subjektiv empfundenen Belastung von pflegenden Angehörigen[cite: 255, 256].
* **Methodik:** Mithilfe mehrerer gezielter Aussagen zu körperlichen, emotionalen, sozialen und finanziellen Belastungen geben Angehörige an, wie stark sie sich im Alltag beansprucht fühlen[cite: 257]. Die Auswertung ermöglicht eine verlässliche Einschätzung des akuten Belastungsgrades und schützt vor dem Zusammenbruch des häuslichen Pflegesystems[cite: 258, 259].

Statistiken zeigen, dass mit steigender Pflegegeldstufe (insb. Stufen 4–7) Faktoren wie Isolation (58,8 %), allgemeine Überforderung (23,8 %) und das Gefühl der totalen Verantwortung (14,7 %) im Vergleich zu den niedrigeren Stufen 1–3 drastisch zunehmen[cite: 254].

---

### 8.2 Young Carer (Die jüngsten Pflegenden)

Ein besonders sensibler und oft unsichtbarer Bereich in der Community Nurse Praxis sind die sogenannten **Young Carer**[cite: 260, 261]:
* **Definition:** Kinder oder Jugendliche unter 18 Jahren, die im familiären Umfeld regelmäßig und dauerhaft ein hohes Maß an Verantwortung für die Pflege oder Betreuung eines chronisch kranken, behinderten, suchtkranken oder psychisch belasteten Familienmitglieds übernehmen[cite: 261].
* **Relevanz:** Diese Kinder benötigen besonderen Schutz und gezielte Entlastungsangebote, da die Pflegeverantwortung ihre schulische Leistung, ihre soziale Entwicklung und ihre eigene psychische Gesundheit massiv gefährdet[cite: 261].
    `.trim(),
  },

  block6: {
    id: "block6",
    title: "HKP & Versorgungsangebote (Struktur, Finanzierung, MOHI, Palliativ)",
    content: `
### 9. Unterstützungs- und Entlastungsangebote in Vorarlberg

#### 9.1 Medizinische Leitlinien (S3-Leitlinie)
Die *S3-Leitlinie Pflegende Angehörige von Erwachsenen* gibt klare Empfehlungen für die Praxis vor:
* **Früherkennung:** Pflegende Angehörige müssen in Hausarztpraxen frühzeitig erkannt und regelmäßig proaktiv nach ihrer individuellen Belastung gefragt werden.
* **Kommunikation:** Die Gesprächsführung muss strikt patienten- und angehörigenzentriert sein, damit Bedürfnisse offen geäußert werden können. Ärzt:innen und das Praxisteam müssen eng zusammenarbeiten.
* **Diagnostik:** Zur schnellen und validen Einschätzung der Überlastung im Praxisalltag wird der Einsatz der Häuslichen Pflege-Skala (HPS) dringend empfohlen.

#### 9.2 Finanzielle Unterstützungsleistungen (Bund & Land)
Das Pflegesystem stützt sich auf verschiedene Säulen, um die häusliche Pflege leistbar zu machen:
* **Leistungen des Bundes:** * *Pflegegeld:* Wird ab einer Pflegetätigkeit von mindestens 65 Stunden pro Monat gewährt (Zuschuss startet bei Stufe 1).
  * *Förderungen:* Finanzielle Zuschüsse für eine 24-Stunden-Betreuung sowie das *Pflegekarenzgeld* bei beruflicher Auszeit.
  * *Zusatzhilfen:* Übernahme von Kosten für zertifizierte Pflegekurse, eine automatische Rezeptgebührenbefreiung, Rundfunkgebührenbefreiung (GIS/ORF-Beitrag) sowie Unterstützung bei Fahrten, Krankentransporten und Parkberechtigungen.
  * *Absicherung:* Pensions- und Krankenversicherung für pflegende Angehörige zur Vermeidung von Altersarmut.
* **Leistungen des Landes (Vorarlberg):**
  * Landeszuschuss zum Pflegegeld bei ambulanter Pflege im eigenen Zuhause.
  * Der *Angehörigenbonus* (wird bei schwerer Pflege ab der Pflegegeldstufe 4 ausgezahlt).
  * Spezifische Zuschüsse zur Unterstützung der 24-Stunden-Betreuung vor Ort.
  * Übernahme bzw. Abfederung von Unterbringungs- und Verpflegungskosten in Pflegeheimen sowie finanzielle Unterstützung für eine professionelle Ersatzpflege.
  * Übernahme von Heilbehelfen und Hilfsmitteln durch die Österreichische Gesundheitskasse (ÖGK).

#### 9.3 Zeitweilige Verhinderungspflege & Stationäre Angebote
* **Verhinderungspflege:** Fällt die Hauptpflegeperson wegen Krankheit, Urlaub oder Erschöpfung aus, springt diese Ersatzpflege ein. Sie sichert den notwendigen Erholungsurlaub für Angehörige durch finanzielle Unterstützung.
* **Teil- und Stationäre Angebote:**
  * *Kurzzeit- & Übergangspflege:* Bereitstellung von temporären Urlaubsbetten in Pflegeheimen.
  * *Überleitungspflege:* Kommt zum Einsatz bei einer schnellen Verschlechterung des Zustands nach einem Krankenhausaufenthalt, wenn zu Hause noch nicht alle baulichen oder pflegerischen Maßnahmen für die häusliche Pflege vorbereitet sind.
  * *Tagesbetreuung:* Entlastung der Angehörigen tagsüber durch teilstationäre Einrichtungen.

---

### 9.4 Haushaltsnahe & Ambulante Dienstleistungen

#### 1. Mobiler Hilfsdienst (MOHI)
Der MOHI ist meist direkt in die lokalen Krankenpflegevereine eingegliedert und bietet niederschwellige Entlastung im Alltag:
* **Betreuerische Hilfe:** Zeitgeschenke wie einfaches Zuhören, gemeinsame Spaziergänge, Begleitung bei Behördengängen oder Unterstützung beim Einkaufen.
* **Hauswirtschaftliche Hilfe:** Übernahme von Reinigungsarbeiten, Kochen von kleinen Mahlzeiten und Wäschepflege.
* **Hilfestellungen:** Einfache Handreichungen bei den Aktivitäten des täglichen Lebens (ATL) ausschließlich nach strikter Anordnung und Delegation durch eine diplomierte Pflegefachperson (DGKP).

#### 2. 24-Stunden-Betreuung
Die Betreuung wird durch selbstständige Personenbetreuer:innen organisiert, die direkt im Haushalt der pflegebedürftigen Person wohnen. Diese Form der Betreuung wird durch gezielte Förderungen von Bund und Land finanziell bezuschusst.

#### 3. Hauskrankenpflege (HKP) Vorarlberg (Das Vereinssystem)
Die Hauskrankenpflege ist in Vorarlberg über ein einzigartiges, flächendeckendes Non-Profit-Vereinssystem organisiert, das auf einem tiefen Solidaritätsgedanken beruht:
* **Struktur:** Das Land verfügt über **66 Krankenpflegevereine (KPV)** mit insgesamt **47 Stützpunkten**. Jede Vorarlberger Gemeinde ist somit vollständig abgedeckt.
* **Landesverband Hauskrankenpflege:** Er sorgt für die übergeordnete Struktur, führt Verhandlungen mit den Förderungsgebern, übernimmt die strategische Öffentlichkeitsarbeit und berät die einzelnen Vereine vor Ort.
* **Connexia:** Übernimmt die zentrale Informations- und Vernetzungsarbeit. Ihre Aufgaben umfassen Beratung und Begleitung, Bildungsmanagement, Personal-, Organisations- und Qualitätsentwicklung, wissenschaftliche Konzeptentwicklung, Projektmanagement sowie die Datenerfassung, -verarbeitung und das landesweite Berichtswesen.
* **Mission:** Die HKP Vorarlberg unterstützt Pflegebedürftige und Angehörige durch professionelle Beratung, Schulung und enge Kooperation mit allen Sozial- und Gesundheitsdiensten für eine wirksame, effiziente Betreuung.
* **Vision:** Die HKP fördert ein sorgendes Miteinander und einen gesunden Lebensraum, in dem Pflegebedürftige selbstbestimmt leben und Angehörige die Betreuung verantwortlich mitgestalten können.
* **Leistungen der HKP:** Fachliche Beratungsstunden, präventive Hausbesuche, Teilpflege, professionelles Wundmanagement, Verabreichen von Injektionen und Infusionen, kontrollierte Medikamentengabe, Setzen von Blasenkathetern, therapeutische Mobilisation, fachgerechte Lagerung sowie die regelmäßige Vitalzeichenkontrolle.
* **Finanzierung:** Das System stützt sich auf einen Mix aus privaten Spenden, freiwilligen Pflegebeiträgen, festen Mitgliedsbeiträgen der Vereinsmitglieder, Eigenmittelaufbringung sowie maßgeblichen Förderbeiträgen der Krankenkassen, der Gemeinden und dem Vorarlberger Sozialfonds.

#### 4. Spezialisierte mobile Dienste
* **Mobiles Palliativteam:** Ein interdisziplinäres Kooperationsprojekt zwischen der Caritas Vorarlberg und der Palliativstation des Krankenhauses Hohenems. Das Team besteht aus spezialisierten Pflegekräften, Sozialarbeiter:innen und Är:ztinnen. Es wird über den Landesgesundheitsfonds sowie Spenden finanziert und unterstützt Hausärzt:innen, die HKP und Pflegeheime bei: komplexer Schmerztherapie und Symptomkontrolle, künstlicher Ernährung/Flüssigkeitszufuhr, aufwendiger medizinischer Betreuung (Schmerzpumpenmanagement, Aszites- und Pleurapunktionen), ethischer Entscheidungsfindung in Krisensituationen, psychosozialen Problemen, sozialrechtlichen Aspekten (Patientenverfügung) sowie dem sanften Übergang vom Krankenhaus nach Hause.
* **Ambulante gerontopsychiatrische Pflege:** Ein spezialisiertes Projekt in Vorarlberg, das bereits seit 2013 existiert. Die angebotenen Leistungen sind für die Klient:innen vollständig gratis (finanziert durch den Sozialfonds). Die Zielgruppe sind ältere Menschen mit psychischen bzw. psychiatrischen Beeinträchtigungen (z. B. fortgeschrittene Demenz, Altersdepression) sowie deren Angehörige. Die Leistungen umfassen: Akute Bedarfserhebung, Gestaltung des psychiatrischen Pflegeprozesses, handfeste Hilfe im Alltag, Erarbeitung von stabilisierenden Tag- und Wochenstrukturen, Re-Integration, Motivationsarbeit, Krisenintervention und eine enge Fachberatung der Angehörigen.

---

### 12. Besonderheiten & Arbeitsumfeld in der Hauskrankenpflege

#### Vergleichstabelle: Krankenhauspflege vs. Hauskrankenpflege

| Thema / Fragestellung | Krankenhauspflege | Hauskrankenpflege |
| :--- | :--- | :--- |
| **Rolle der Patient:innen** | Hilfesuchend, Gast, Patient | Gastgeber:in, Klient:in, Pflegebedürftige:r |
| **Motivation / Wunsch** | Schnelle Genesung, rasch nach Hause kommen, Symptombesserung, genaue Diagnose, Respekt erfahren | Fachliche Unterstützung, feste Bezugspersonen, verlässliche Gesprächspartner, Selbstständigkeit erhalten, Wohlbefinden sichern |
| **Gefahren für Patient:innen** | Sturzgefahr, nosokomiale Infektionen (Krankenhauskeime), Falschbehandlungen, Verwechslungen, Unter- & Überversorgung | Unentdeckte Unterversorgung, Sturzgefahr zu Hause, Einsamkeit, soziale Isolation, akute unbemerkte Notfälle, Fehl- oder Mangelernährung, Immobilität |
| **Arbeitsweise der Pflegeperson** | Rein hygienische Arbeitsweise im geschützten Raum, geregelte Stationsabläufe, schnelle Verfügbarkeit von Untersuchungen, Medikamenten und Kolleg:innen | Fokus auf Beziehungsaufbau, gesamtes Pflegematerial muss vorab im Auto mitgenommen werden, das Wohnumfeld ist nicht an die Pflege angepasst, man arbeitet komplett allein vor Ort beim Klienten |

#### Merkmale der HKP als professionelle Dienstleistung
Eine ambulante Pflege besitzt spezifische Dienstleistungsmerkmale: *Immaterialität* (die Leistung ist nicht greifbar), das *Miteinbeziehen der Kunden* in den Prozess und die *Gleichzeitigkeit von Produktion und Konsumation* (die Pflege entsteht in genau dem Moment, in dem sie erbracht wird). Die Ziele der Klient:innen müssen den Mitarbeiter:innen bekannt sein und deren Willen ausdrücken, aber gleichzeitig dem professionellen Selbstverständnis der Pflegeperson entsprechen.

#### Die 8 Erfolgsfaktoren eines ambulanten Dienstleisters:
1. **Materielles:** Ein gepflegtes Erscheinungsbild (sauberes Dienstfahrzeug, vollständige Pflegeutensilien, ordentliche Dienstkleidung).
2. **Zuverlässigkeit:** Absolut pünktliche und zuverlässige Erbringung der Leistung auf Basis der getroffenen Vereinbarungen.
3. **Entgegenkommen:** Höchste Achtung für die Eigenständigkeit und das Selbstwertgefühl des Kunden (funktionierendes Beschwerdemanagement, wertschätzende pflegerische Interaktion, aktives Empowerment).
4. **Kompetenz:** Fundiertes pflegerisches Fachwissen und absolute Professionalität in der Durchführung aller Maßnahmen.
5. **Vertrauenswürdigkeit:** Maximale Glaubwürdigkeit, Diskretion und Ehrlichkeit der Pflegepersonen.
6. **Sicherheit:** Konsequente Vermeidung von Situationen, die Gefahren oder Risiken befürchten lassen. Stärkung des Vertrauens und des Gefühls der Geborgenheit.
7. **Kommunikation:** Aktives, empathisches Zuhören; Weitergabe aller Informationen in einer für den Kunden verständlichen, klaren Sprache (kein medizinisches Kauderwelsch).
8. **Kundenverständnis:** Das permanente Bemühen um die genaue Kenntnis der individuellen Kunden und ihrer tiefen, biografischen Bedürfnisse (echte Empathie).

#### Das Arbeitsumfeld: Berufliches Situationsverständnis
Die Arbeit in der HKP erfordert eine ganzheitliche Orientierung in einem abwechslungsreichen Arbeitsplatz. Der „Charakter der Hauskrankenpflege“ ist geprägt von einem permanenten Wechselspiel: innovativ und kreativ, spontan und geplant, unbürokratisch und bürokratisch, vielfältig und individuell.

* **Die Gastrolle:** Die Pflegeperson muss akzeptieren, dass sie sich in einer *Gastrolle* befindet. Der absolute „Intimbereich“ des Haushalts, des Lebensstils und des privaten Wirtschaftens der Familie liegt offen vor ihr – ebenso wie der soziale und körperliche Intimbereich.
* **Krisensituation:** Pflegende kommen meist genau dann, wenn eine akute Krise das Familiensystem erschüttert. Dies erfordert absolute Verschwiegenheit, Taktgefühl und eine tiefgehende Einfühlsamkeit in das „Fremde“. Professionelle Kompetenz, echtes Interesse an der Person, die Akzeptanz des Lebensstils und der Respekt vor den Entscheidungen des Klienten sind unumgänglich.

#### Motive der Pflegepersonen in der HKP (Warum arbeitet man ambulant?)
* Ein tiefes Interesse an Menschen und deren echtem Leben in der realen Welt außerhalb von Kliniken.
* Der Wunsch nach hoher Vielfalt, Eigenverantwortung und Abwechslung im Beruf.
* Die Motivation, Menschen konkret zu einem selbstbestimmten Leben in ihrer Heimat zu verhelfen.
* Das gemeinsame Erarbeiten von kreativen Problemlösungen unter direktem Einbeziehen der Klient:innen.

#### Erleben von Alter und Krankheit zu Hause
* **Alterserleben:** Das Alter bringt oft Verunsicherungen mit sich (Verlust von Schönheit, Kraft, gesellschaftlichem Image und Prestige, wirtschaftliche Unsicherheit, der Verlust von Unabhängigkeit und Autonomie sowie die Angst vor dem Tod). Gleichzeitig bietet das Alter die Chance auf gesellschaftlichen Rückzug, verdientes Ausruhen und den Rückzug ins eigene Ich. Für eine bedarfsorientierte Pflegeplanung ist das genaue Verständnis dieses individuellen Alterserlebens essenziell.
* **Krankheitserleben:** Krankheit wird zu Hause völlig anders erlebt als im sterilen Krankenhaus. Ein Klient bringt es nach der Entlassung auf den Punkt: *„Ich habe zwar immer noch Schmerzen und kann immer noch nicht ohne Unterstützung gehen, aber ich bin wieder mein eigener Herr.“* Krankheit kann als Ungerechtigkeit, als Prüfung oder auch als unbewusstes Mittel zum Zweck erlebt werden.

#### Beziehungsfaktoren im Pflegealltag

* **Förderliche Einflussfaktoren:** Gegenseitige Sympathie, das System der Bezugspflege (feste Ansprechpartner), die aktive Einbindung der Angehörigen, eine gemeinsame Sprache/Kultur, menschliche Gemeinsamkeiten, Humor, offene Kommunikation und eine feste, Sicherheit gebende Routine.
* **Hinderliche Einflussfaktoren:** Antipathie, ständige personelle Diskontinuität (jeden Tag kommt eine andere Pflegekraft), Intoleranz gegenüber anderen Kulturen oder Sprachen, eine unhygienische oder extrem unaufgeräumte Umgebung, unangemessene Avancen von Klienten sowie eine fehlende Routine in den Abläufen.
* **Förderliche Verhaltensweisen (Klient):** Offener Umgang mit der Krankheit, echtes Interesse an einer professionellen Beziehung, Höflichkeit, Offenheit, Akzeptanz, Respekt, sich auf die Pflege einlassen können und Geduld.
* **Hinderliche Verhaltensweisen (Klient):** Mangelnde Krankheitsbewältigung (Verleugnung), Desinteresse an der Beziehung, Unfreundlichkeit, ablehnendes oder aggressiv-abwehrendes Verhalten, extreme Schweigsamkeit, totale Zurückhaltung, Uneinsichtigkeit und Unverständnis für Maßnahmen.
* **Förderliche Verhaltensweisen (Pflegeperson):** Das Vermögen, sich empathisch in andere Menschen hineinzuversetzen, echtes Interesse, hohe Toleranz, absolute Offenheit, das aktive Vermitteln von Sicherheit, respektvoller Umgang, Rücksichtnahme, ehrliche Wertschätzung und das strikte Achten der Privatsphäre des Gastgebers.
* **Hinderliche Verhaltensweisen (Pflegeperson):** Einbringen von negativen Vorannahmen oder Vorurteilen in das Klienten-System.

#### Alltägliche Spannungsfelder in der ambulanten Praxis
Die Pflegeperson bewegt sich permanent in einem sensiblen Minenfeld aus verschiedenen Konflikten:
* Die finanzielle Situation der Familie (z. B. für notwendige Anschaffungen oder die Verteilung von Ressourcen).
* Massive Überforderung mit der Betreuungssituation (Sorgen bei der Organisation durch den Klienten selbst oder eine totale Überforderung der pflegenden Angehörigen).
* Kommunikationsprobleme (Verständnisbarrieren, akuter Zeitmangel für klärende Gespräche, Respektlosigkeiten wie ein ungewolltes, distanzloses Duzen).
* Das Erleben von offener oder versteckter körperlicher und psychischer Gewalt im Haushalt.
* Die Gratwanderung zwischen gefährlicher Vernachlässigung und erstickender Überfürsorge.
* Die permanente Gratwanderung zwischen notwendiger Sicherheit (Sturzprophylaxe) und dem Erhalt der persönlichen Freiheit (Selbstbestimmung).
* Eine drohende Vereinsamung und fortschreitende soziale Isolation des alten Menschen.
* Das seelisch belastende Miterleben des unaufhaltsamen körperlichen und geistigen Verfalls eines Klienten über Jahre hinweg.

Diese Spannungsfelder betreffen alle Beteiligten im System: Konflikte direkt innerhalb der Familie, Spannungsfelder der professionellen Betreuer:innen untereinander, Konflikte der Familie mit dem Pflegepersonal, Reibungspunkte der Familie mit der gesetzlichen Erwachsenenvertretung sowie Konflikte der betreuten Person mit den restlichen gesellschaftlichen Rahmenbedingungen.
    `.trim(),
  },

  block7: {
    id: "block7",
    title: "Public Health & Pilotprojekt Community (Health) Nurse",
    content: `
### 10. Pilotprojekt Community Nurse in Österreich

* **Hintergrund:** Durch den gezielten Einsatz von Community Nurses (CN) wird ein zuvor ungedeckter, brennender Bedarf in den Bereichen der Pflege, der primären Gesundheitsvorsorge und der allgemeinen Gesundheitsförderung direkt vor Ort abgedeckt[cite: 413].
* **Vision:** Die langfristige Verbesserung der Gesundheit aller Bevölkerungsgruppen in den realen Lebensbereichen von Gemeinden und Städten[cite: 414]. Dabei soll insbesondere die individuelle Gesundheitskompetenz von älteren sowie pflegebedürftigen Menschen und ihren An- und Zugehörigen nachhaltig gestärkt werden[cite: 415].

#### Begriffsschärfung: CN vs. CHN
* **Community Nurses (CN):** Im internationalen Kontext versteht man hierunter jene Pflegekräfte, deren Kernaufgabe in der professionellen Pflege im Rahmen der klassischen häuslichen Pflege besteht[cite: 417]. In Österreich wird dieses Feld traditionell durch die Hauskrankenpflege (HKP) abgedeckt[cite: 417].
* **Community Health Nursing (CHN):** Dies ist ein hochspezialisierter Fachbereich der Gesundheits- und Krankenpflege sowie von *Public Health*[cite: 418]. Er fokussiert sich primär auf die Gesundheit der gesamten Bevölkerung, indem Prävention, Gesundheitsförderung und die gezielte Ausrichtung an den grundlegenden Gesundheitsdeterminanten betont werden[cite: 418]. Es ist die gelebte Praxis zur Förderung und zum Schutz der Gesundheit von Individuen, Familien, Gruppen und Gemeinschaften unter direkter Anwendung von wissenschaftlichem Wissen aus den Bereichen der Pflegewissenschaft, den Sozialwissenschaften sowie Public Health[cite: 419].

#### Die Zielsetzungen auf drei Ebenen

* **1. Individuelle Ebene (Die Klient:innen & Angehörigen):** [cite: 421, 422]
  * Ermöglichen eines absolut niederschwelligen, bedarfsorientierten und gemeindenahen Zugangs zu Angeboten der Gesundheitsförderung, Unterstützung, Beratung und Prävention[cite: 423].
  * Regionale Akteure und wichtige Netzwerkpartner identifizieren, miteinander vernetzen, im Sozialraum sichtbar machen, ihre Angebote treffsicher vermitteln und gemeinsame Aktivitäten koordinieren[cite: 424].
  * Die allgemeine Gesundheit und das subjektive Wohlbefinden aktiv fördern, die Lebensqualität und die Selbstbestimmung steigern sowie die Entscheidungs- und Handlungsfähigkeit durch maßgeschneiderte Informations- und Beratungsangebote verbessern[cite: 424, 425, 426].
  * Den Verbleib im eigenen, geliebten Zuhause so lange wie nur irgendwie möglich gewährleisten und eine lückenlose, bedarfsorientierte Gesundheits- und Pflegeversorgung sicherstellen[cite: 427].
  * Gesunde Lebensjahre insbesondere im Alter begünstigen und die typischen Problemlagen des Alterns (wie Einsamkeit und fortschreitende soziale Isolation) drastisch reduzieren[cite: 428, 429].
* **2. Gesellschaftliche Ebene (Gemeinden & Städte):** [cite: 430, 431]
  * Punktgenau auf ungedeckte oder versteckte Bedarfe bestimmter, vulnerabler Bevölkerungsgruppen eingehen[cite: 432].
  * Die nachhaltige Stärkung des sozialen Zusammenhalts im direkten Wohnumfeld[cite: 433].
  * Eine sinnvolle Erweiterung und Optimierung des gesamten Versorgungsangebots im jeweiligen Sozialraum[cite: 434].
* **3. Politische Ebene:** [cite: 435]
  * Die eigene Gemeinde oder Stadt als hochgradig attraktiven, sorgenden Lebensraum für alle Generationen darstellen[cite: 436].
  * Der drohenden Abwanderung aus ländlichen Regionen aktiv entgegenwirken[cite: 437].
  * Die datenbasierte Faktenlage hinsichtlich Pflegebedarf und Gesundheit innerhalb der Gemeinde massiv verbessern[cite: 438].
  * Sicherstellen, dass ein absolut einheitliches, klares Verständnis des modernen Berufsbildes gewährleistet wird[cite: 439].

#### CHN-Standorte in Vorarlberg
Das spezialisierte Community Health Nursing ist in Vorarlberg aktuell an den Pilot-Standorten **Bludenz, Dornbirn und Wolfurt** fest verankert[cite: 440, 441].
* *Zielgruppe:* Ältere und hochbetagte Menschen in ihrem direkten Wohnumfeld mit bevorstehendem oder bereits vorhandenem Informations-, Beratungs-, Pflege- oder Unterstützungsbedarf sowie deren pflegende Angehörige[cite: 442, 443].
* *Besonderheit:* Es richtet sich ganz explizit auch an Personen, die aktuell noch *keine* mobilen Dienste oder Pflegeangebote in Anspruch nehmen – sprich an noch gesunde Menschen im Sinne der Primärprävention[cite: 444].
* *Aufgaben:* Zentrale Anlaufstelle für alle Fragen, Durchführung strukturierter präventiver Hausbesuche, Aufklärung, Erhebung der aktuellen Versorgungssituation und das Koordinieren/Vermitteln zusätzlicher Hilfen[cite: 445, 446, 447, 449, 450].

---

### 11. Public Health Nursing (PHN) & Prozesse

**Public Health Nursing** versteht sich als ein mächtiger, übergeordneter Begriff, der die verschiedenen Handlungsfelder auf unterschiedlichen Systemebenen ineinander vereint:
* **Family Health Nursing:** Agiert intensiv innerhalb des familiären und primären Bildungssettings mit dem klaren Ziel, die Familiengesundheit zu schützen und die Gesundheitskompetenz von Grund auf zu steigern[cite: 453, 454].
* **School Nursing:** Agiert auf der Ebene des einzelnen Kindes/Individuums und der Schule[cite: 458]. Neben Erster Hilfe bei Unfällen liegt der Fokus auf der gesundheitsförderlichen Veränderung von Wissen, Einstellungen, Gewohnheiten und dem Unterstützen von Kindern mit besonderem Betreuungsbedarf[cite: 456, 457, 458].
* **Community Health Nursing:** Agiert auf der Ebene der gesamten Gemeinde oder Stadt mit dem Ziel der breiten Bewusstseinsbildung und der nachhaltigen Veränderung von gesundheitsrelevanten Normen und Verhaltensweisen in Gemeinschaften[cite: 459].
* **Public Health Nursing (im engeren Sinne):** Agiert auf der Makro-Ebene von übergeordneten Systemen, Organisationen oder politischen Institutionen[cite: 460]. Das Ziel ist es, gesundheitsförderliche Strukturen, politische Strategien und gesetzliche Rahmenbedingungen zu optimieren[cite: 460].

#### Der 7-stufige PHN-Prozess:
1. Umfassende Erfassung aller relevanten Faktoren in einer Gemeinschaft sowie die Identifizierung von gefährdeten Zielgruppen[cite: 463]. *Wichtig:* Dies erfordert zwingend einen vorhergehenden, vertrauensvollen Beziehungsaufbau auf allen Ebenen[cite: 463]!
2. Durchführung eines systematischen Assessments zur Erhebung aller Gesundheitsdeterminanten auf individueller, gemeinschaftlicher und systemischer Ebene[cite: 464].
3. Strukturierte Erfassung und tiefe Analyse aller erhobenen Daten[cite: 465].
4. Offene Diskussion der Ergebnisse mit den Verantwortlichen auf den betroffenen Ebenen[cite: 466].
5. Bestimmung von glasklaren, messbaren Gesundheitsindikatoren[cite: 467].
6. Festmachen von evidenzbasierten Interventionen und präzisen Evaluationsmöglichkeiten[cite: 468].
7. Abschließende Diskussion der Ergebnisse zur Sicherung der Nachhaltigkeit[cite: 469].

---

### 12. Das Public Health Intervention Wheel

Das **Public Health Intervention Wheel** ist ein wissenschaftliches, rundes Modell[cite: 470]. Es dient zur systematischen Erhöhung der Wahrscheinlichkeit, die Gesundheit von Individuen, Familien und Gemeinden nachhaltig zu verbessern, und stärkt das Verständnis für notwendige Veränderungsprozesse in übergeordneten Systemen[cite: 471].

* *Interdisziplinarität:* Die Trennlinien im Kreis sind bewusst durchlässig gestaltet – die einzelnen Berufsfelder agieren vollständig interdisziplinär[cite: 472].
* *Das übergeordnete Ziel:* Planung, Implementierung und Evaluation von evidenzbasierten und nachhaltigen Interventionen im Sozialraum[cite: 484, 485].

#### Die 5 Farbbereiche und ihre exakten Aufgaben:

* **🔴 Roter Bereich (Überwachung & Erkennung):** [cite: 474]
  * Kontinuierliche Überwachung und Kontrolle gesundheitsgefährdender Prozesse in der Bevölkerung[cite: 475].
  * Aktive Ermittlung von gehäuften Erkrankungen (Surveillance) und gesundheitsgefährdenden Faktoren im Umfeld[cite: 476].
  * Aufbau von sozialem Engagement und Durchführung systematischer Reihenuntersuchungen in Form von Screenings[cite: 477, 478].
* **🟢 Grüner Bereich (Fallmanagement & Weiterleitung):** [cite: 486]
  * Strukturierte Weitervermittlung und lückenlose pflegerische Nachbetreuung (Referral & Follow-up)[cite: 487].
  * Professionelles Case Management zur Koordination komplexer Pflegesituationen[cite: 488].
  * Durchführung von Delegationsfunktionen (Delegated Functions)[cite: 489].
  * *Ziele:* Nachhaltige Verbesserung der Gesundheitskompetenz, Unterstützung bei der Entwicklung von wirksamen Bewältigungsstrategien (Copings) und das Aufzeigen verborgener Ressourcen[cite: 490, 491, 492, 493].
* **🔵 Blauer Bereich (Edukation & Beratung):** [cite: 504]
  * Gesundheitslehre und zielgerichtete Edukation (Health Teaching) zur Stärkung der Eigenkompetenz[cite: 505, 507].
  * Fachliche Beratung und psychosoziale Betreuung (Counseling) in schwierigen Lebensphasen[cite: 506].
  * Konsultation (Consultation)[cite: 511].
* **🟠 Oranger Bereich (Vernetzung & Community):** [cite: 513]
  * Intensive Zusammenarbeit, Kooperation und interdisziplinäre Vernetzung (Collaboration & Coalition Building)[cite: 515, 521, 522].
  * Aktive Organisation und Mobilisierung von Gemeinschaften und Nachbarschaften (Community Organizing)[cite: 516, 520].
  * *Ziele:* Stärkung der kollektiven Gesundheitskompetenz und die Initiierung von spürbaren Verbesserungen der sozialen Rahmenbedingungen vor Ort[cite: 517, 518, 519].
* **🟡 Gelber Bereich (Anwaltschaft & Systemgestaltung):** [cite: 523]
  * Politische und gesellschaftliche Anwaltschaft für gesundheitliche Belange benachteiligter Gruppen (Advocacy)[cite: 524, 529].
  * Soziales Marketing (Social Marketing) zur Verbreitung gesundheitsförderlicher Verhaltensweisen[cite: 524, 530].
  * Entwicklung, Durch- und Umsetzung von nachhaltigen gesundheitspolitischen Strategien und Verordnungen (Policy Development & Enforcement)[cite: 525, 526, 531, 532, 533].
  * *Ziel:* Die vollständige Befähigung von Menschen und Gruppen, sich selbst zu verteidigen und mutig für die eigenen gesundheitlichen Rechte einzustehen (Empowerment)[cite: 527].
    `.trim(),
  },
  
};
