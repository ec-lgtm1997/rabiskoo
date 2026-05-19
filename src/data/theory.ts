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
### 1. Grundlage zu Community Nurse/Extramurale Pflege

**Definition:** Community Nurse bzw. extramurale Pflege (Extra = außerhalb | mural = Mauer) bezeichnet Pflege und Gesundheitsversorgung außerhalb von Krankenhäusern oder stationären Einrichtungen - also direkt in der Gemeinde („community“) oder bei den Menschen zu Hause.

**Ziel:** Ziel ist es, Krankenhausaufenthalte zu vermeiden und Menschen ein möglichst langes, selbstständiges Leben zu Hause zu ermöglichen.

**Zukunftsperspektive:**
* Die Haushaltsgrößen nehmen ab, Mehr-Generationenhaushalte existieren in immer geringerer Anzahl, die Zahl alleinlebender Menschen steigt
* Hohe Scheidungsraten stellen das Entstehen von Familiennetzen, die sich im Pflegefall als haltbar erweisen, zunehmend in Frage
* Traditionelle Rollenbilder haben sich verändert, Frauen sind zunehmend erwerbstätig und nicht mehr in der Lage, sämtliche innerhalb der Familie erforderlichen Betreuungsleistungen selbstverständlich zu übernehmen
* Die verstärkte berufliche Mobilität führt zu größeren räumlichen Entfernungen zwischen den Generationen
* In der Betreuungsbeziehung machen es Individualisierung und das Streben nach Selbstständigkeit und Selbstverwirklichung häufig sowohl für Betreuungspersonen als auch für Pflegebedürftige schwer, die gegenseitigen Abhängigkeiten auf der traditionellen Basis zu akzeptieren
* Eine geringe Anzahl an Menschen hat noch mehrere Menschen im Haushalt. Wer übernimmt also die Betreuung zuhause?

---

### 2. Arten von extramuraler Pflege

#### 2.1 School Nursing:
**Definition:** School Nursing (Schulgesundheitspflege) ist ein pflegerisches Fachkonzept, bei dem eine Pflegefachperson direkt an einer Schule tätig ist. Sie stellt die gesundheitliche Versorgung der Schüler während des Schulalltags sicher und fungiert als Schnittstelle zwischen Schule, Elternhaus und Gesundheitssystem.
**Ziel:** Ziel von School Nursing ist es, die Gesundheit, das Gesundheitsbewusstsein, die Sicherheit und das Wohlbefinden der Kinder und Jugendlichen zu fördern.

#### 2.2 Casemanagement
**Definition:** In der Gemeinde bzw. Region stehen diese Fachkräfte als wohnortnahe Ansprechpersonen für Gesundheits- und Pflegefragen zur Verfügung. Sie beraten individuell, beantworten Fragen und unterstützen dabei, passende Hilfs- und Versorgungsangebote für die jeweilige Lebenssituation zu organisieren.
**Ziel:** Ziel ist eine bedarfsgerechte Versorgung und die Vermeidung von Über- und Unterpflege.
**Verbreitung:** Das Angebot ist vorarlbergweit organisiert - entweder über die jeweilige Gemeinde oder den zuständigen Krankenpflegeverein.

#### 2.3 Caremanagement
**Definition:** Care Management bezeichnet den systematischen Aufbau, die Planung und die Steuerung einer verbindlichen und abgestimmten Zusammenarbeit aller professionellen und freiwilligen Akteure einer Region. Die Zusammenarbeit erfolgt auf Grundlage regionaler bzw. landesweiter Bedarfsplanungen und schafft klare Strukturen zwischen Gemeinden und Dienstleistungsanbietern.
**Ziel:** Ziel ist es, Unterstützungs- und Pflegeangebote (ambulant, stationär sowie Case Management) bedarfsgerecht zu koordinieren und aufeinander abzustimmen.
**Verbreitung:** In Vorarlberg ist Care Management überwiegend in den Gemeinden angesiedelt und landesweit umgesetzt.

#### 2.4 Acute Community Nurse
**Definition:** Die Acute Community Nurse vereint Aufgaben einer diplomierten Gesundheits- und Krankenpflegeperson (DGKP) mit erweiterten notfallpflegerischen Kompetenzen, ähnlich jenen von Notfallsanitäter:innen. Der Dienst ist rund um die Uhr erreichbar und versorgt Patient:innen akut im häuslichen Umfeld. Dadurch kann in vielen Fällen ein Transport ins Krankenhaus vermieden werden.
**Ziel:** Ziel ist es, unnötige Krankentransporte und Krankenhausaufenthalte zu reduzieren sowie eine rasche, wohnortnahe Akutversorgung sicherzustellen.

#### 2.5 Occupational Health Nurse
**Definition:** Eine Occupational Health Nurse (Betriebsgesundheitspflege) ist eine Pflegefachperson, die in Betrieben tätig ist und sich mit den Auswirkungen von Arbeit auf Gesundheit beschäftigt. Sie berät Arbeitnehmer:innen und Arbeitgeber:innen zu Themen wie Arbeitssicherheit, Prävention und Umgang mit chronischen Erkrankungen.
**Ziel:** Ziel ist es, die Gesundheit zu schützen, arbeitsbedingte Erkrankungen zu verhindern und sichere, gesunde sowie produktive Arbeitsbedingungen zu fördern.
**Verbreitung:** In Österreich noch wenig etabliert.

#### 2.6 Family Health Nurse
**Definition:** Eine Family Health Nurse ist eine Pflegefachkraft, die familien in allen Lebensphasen gesundheitlich unterstützt, Krankheiten vorbeugt und Gesundheitsförderung betreibt.
**Ziel:** Gesundheit fördern, Krankheit vorbeugen, Familien aufklären und bei gesundheitlichen Herausforderungen begleiten.
**Aufgaben:**
* Beratung und Unterstützung rund um die Gesundheit mit Schwerpunkt auf Prävention und Gesundheitsförderung
* Frühzeitiges Erkennen potenzieller und aktueller Gesundheitsprobleme
* Abstimmung der gesundheitlichen Prioritäten mit den Klienten
* Unterstützung bei Entscheidungen ggfs. Unter Hinzunahme anderer Experten
* Beratung und Begleitung im Kontext sozialer Gesundheitsfaktoren wie Pflegebedürftigkeit, Schwangerschaft, Gewalt, Armut, Migration, Drogenabhängigkeit
* Verbindungsglied im Sinne von Case Management zu Hausarzt, andere Gesundheits- und Sozialberufe
* Unterstützung bei Pflege und Versorgung im Anschluss an Krankenhausaufenthalte
**Verbreitung:** In Österreich wenig etabliert.

#### 2.8 Primary Health Care Nurse
**Definition:** Pflegefachkraft in Primärversorgungszentren, die eng mit Ärzten, Ordinationsassistent:innen und anderen Gesundheitsberufen zusammenarbeitet, Hausbesuche durchführt und Patienten unterstützt.
**Ziel:** Gesundheitsversorgung verbessern, Prävention fördern, Patienten koordinierte Betreuung bieten.
**Verbreitung:** In Österreich z. B. in Vorarlberg (3 PHC Nurse-Einheiten, 1 für Kinder) - in Hohenems, Bregenz und Dornbirn
**Vorteile für Patienten:** gemeinsame Schnittstelle, gemeinsame Dokumentation und Kalender
**Vorteile für Mitarbeiter:** kurze Abstimmungswege, Ressourcenschonung, Work-Life-Balance, private Kontakte im Team

#### 2.9 Disaster Nurse
**Definition:** Disaster Nurse kommen bei Ereignissen mit einer Vielzahl von Verletzen im In- und Ausland zum Einsatz.
**Aufgaben:** Beurteilung von Verletzungen & Bedarf an pflegerischen und therapeutischen Maßnahmen, Wundversorgung, erstellen Notfallpläne (Leben schützen und unnötiges Sterben vermeiden), Hilfeleistung bei Bergungsmissionen, Aufklärung über Katastrophenschutz, Unterstützung der betroffenen Gemeinden, administrative Aufgaben, Teamführung und Supervision & Zusammenarbeit in interdisziplinären Teams
**Verbreitung:** Im deutschsprachigen Raum noch nicht etabliert.

#### 2.10 Freiberufliche Pflege
**Definition:** Freiberufliche Pflege ist die selbstständige Erbringung von Pflegeleistungen durch eine Pflegefachkraft, meist zuhause oder ambulant, unabhängig von Krankenhäusern oder Pflegeeinrichtungen, auf eigene Rechnung und Verantwortung. Meist im Bereich Wundmanagement, Hygiene, Gutachten oder Sachverständigung. Die ÖGKV bietet hierbei Hilfestellung zur Anmeldung des Gewerbes.

#### 2.11 Ambulante Gerontopsychiatrische Pflege
**Definition:** Im Rahmen der Ambulanten gerontopsychiatrischen Pflege werden ältere Menschen mit einer psychischen Erkrankung von speziell ausgebildeten Krankenpflegepersonen unterstützt, damit sie selbstbestimmt in ihrem gewohnten Umfeld leben können. Diese Betreuungs- und Pflegeleistung wird von den örtlichen Krankenpflegevereinen angeboten und ist durch den Vorarlberger Sozialfonds kostenlos.
**Verbreitung:** Abdeckung vorarlbergweit durch Krankenpflegevereine

#### 2.12 Community Health Nurse:
**Definition:** Community Health Nursing fördert und schützt die Gesundheit von einzelnen Personen, Familien und Gemeinschaften (Prävention geht vor). Hierbei bieten DGKP wohnortnah und niederschwellige Angebote zur Unterstützung und Entlastung an. Bereits bestehende Dienstleistungen, wie die Hauskrankenpflege, werden ergänzt.
**Ziel:** Ziel ist es die gesunden Lebensjahre im Alter zu fördern und zu erhalten. Zudem soll die Selbstständigkeit unterstützt und die Versorgung in der eigenen Umgebung so lange wie möglich sichergestellt werden.
    `.trim(),
  },
block2: {
    id: "block2",
    title: "Setting & Ort der Pflege (Häusliches Umfeld & Barrierefreiheit)",
    content: `
### 3. Der Ort der Pflege

#### 3.1 Grundsätzliche Überlegungen
* Wünsche der/des Betroffenen
* Ist Betreuung aufgrund der Krankheit zu Hause grundsätzlich möglich?
* Ist Pflege in der eigenen Wohnung/ eigenen Haus der/des Betroffenen möglich?
* Ist der Auszug aus der eigenen Wohnung mit Verlust von Kontakten verbunden? Ist Pflege in Wohnung der Angehörigen/Freund*innen/Bekannten möglich?

#### 3.2 Organisation der Pflege in der Wohnung der Angehörigen
* Geeignete Wohnung mit genügend Platz
* Optimale Ausstattung mit Hilfsmitteln
* Netzwerk aus versch. ambulanten Diensten
* Pflegerische Grundkenntnisse der Angehörigen
* Unterstützung der gesamten Familie

#### 3.3 Die eigene Wohnung als positive Rahmenbedingung
* keine Entwurzelung (bekannte Umgebung sorgt für eigene Sicherheit - man kennt die Wege und die Gefahren bereits)
* Kontinuität durch Erinnerungen
* soziale Kontakte weiter gepflegt
* individuelles Pflegeleitbild realisierbar
* private Utensilien im privaten Raum
* Details der Biografie in der Wohnung
* Ganzheit" wahrnehmbar inkl. soz. Kontakte und räumliches Umfeld
* über emotionales Erleben lässt sich in eigener Umgebung leichter sprechen
* aktivierende Pflege leichter möglich (Pat. kennt sich zuhause aus)

#### 3.4 Organisation der Pflege in der Wohnung der Klient:innen
* Lage idealerweise zentral mit Einkaufsmöglichkeiten, Arztpraxis, Apotheke etc.
* Ausstattung: Zentralheizung, Balkon, Aufzug, funktionierendes Notrufsystem
* Enges Netzwerk aus Hilfsdiensten, Freunden, Angehörigen und Nachbar*innen_
* An die Bedürfnisse angepasste Wohnung
* Optimale Ausstattung mit Hilfsmitteln

---

### 3.5 Barrierefreiheit und Hilfsmittel

#### Küche:
* **Gefahren/Hindernisse:** Arbeitshöhe der Küche, Messer, Rutschgefahr, schwere Materialien (Töpfe), Regalhöhen, Besteck, Teller, Hitzegefahr, Elektrikgefahr, Brandgefahr (Herd vergessen abzudrehen)
* **Barrierefrei/Hilfsmittel:** Schnabelbecher, Teller mit Rand, höhenverstellbare Küche, ausgleichendes Besteck, Ordnungsmanagement (hohe Regale abbauen - damit keine Versuchung besteht), Greifhilfen, Strongboy-Öffner, Medikamentenhilfen

#### Wohnzimmer:
* **Gefahren/Hindernisse:** Teppiche (Rutsch- und Sturzgefahr), tiefe Sessel - Schwierigkeit wieder aufzustehen, Regalhöhen, Höhe von Sitzgelegenheiten
* **Barrierefrei/Hilfsmittel:** Greifhilfen, Gehhilfen, Lesehilfen, Umblätterhilfen für Bücher

#### Schlafzimmer:
* **Gefahren/Hindernisse:** An- und Auskleiden (Mobilität, ...), Lichtschalter zu weit vom Bett weg, Türschwellen, Kleiderschrank zu hohe Fächer, Teppiche (Stolperfalle, Rutschgefahr), zu weiche Matratzen (Aufstehprobleme)
* **Barrierefrei/Hilfsmittel:** Pflegebett, Anziehhilfen, Deckenlifter, Haarwaschbecken, Drehscheiben

#### Badezimmer:
* **Gefahren/Hindernisse:** Rutschgefahr, Schwellen, Teppiche (Stolpergefahr), Badewanne (Gefahr beim Ein- und Aussteigen), zu wenig Platz im Bad, Klo (zu niedrig), Höhe von Waschbecken und Schränken, Reichweite vom Badezimmer (im selben Stock), elektronische Geräte, Türen die nach innen aufgehen (Gefahr des einklemmen von Person)
* **Barrierefrei/Hilfsmittel:** Hilfen für Körperpflege und Ausscheidung (Harnflasche, Saugnapf-Greifhilfen), Badewanne, Toilettensitzerhöhung, Treppensteiger, Badelifter
    `.trim(),
  },

  block3: {
    id: "block3",
    title: "Familie, Gesundheit & Familienzentrierte Pflege (FZP)",
    content: `
### 4. Was bedeutet Familie

**Definition:** Familie ist eine der „ursprünglichsten Formen sozialer Zusammengehörigkeit"[cite: 123]. Als Institution verknüpft Familie die Grundbedürfnisse von Individuum und Gattung (Sexualität und Intimität, soziale Reproduktion und gesellschaftliche Organisation)[cite: 123, 124].

**Soziale Definition:** Aus einem Elternpaar oder einem Elternteil und mindestens einem Kind bestehende [Lebens]gemeinschaft (mit emotionaler Eltern-Kind-Bindung)[cite: 125]. Gruppe aller miteinander [bluts]verwandten Personen[cite: 126].

**Biologische Definition:** Systematische Einheit, Kategorie, in der näher miteinander verwandte Gattungen tierischer oder pflanzlicher Lebewesen zusammengefasst sind[cite: 127].

Als exklusive Beziehungsform organisiert Familie: Geschlechterverhältnisse, wer mit wem zusammenlebt, die miteinander verschränkten Beziehungen zwischen Eltern und ihren Kindern, Rollenverständnisse, Aufgaben- und Arbeitsteilung, ermöglicht die Teilhabe am gesellschaftlichen Leben[cite: 128].

Als Generationengeflecht eröffnet die Familie Entwicklungsräume, Möglichkeiten des Zusammenlebens, verantwortet Bildung, Erziehung und Sozialisation nachkommender Generationen[cite: 129].

#### Funktionen:
* Als Institution verknüpft Familie die Grundbedürfnisse von Individuum und Gattung[cite: 131]. Dazu gehören Sexualität, Intimität, soziale Reproduktion und gesellschaftliche Organisation[cite: 131].
* Als exklusive Beziehungsform organisiert Familie: Geschlechtsverhältnisse, wer mit wem zusammenlebt, Rollenverhältnisse, Aufgaben- und Arbeitsteilung, die miteinander verschränkten Beziehungen zwischen Eltern und ihren Kindern und ermöglicht die Teilhabe am gesellschaftlichen Leben[cite: 132].
* Als Generationsgeflecht eröffnet die Familie: Entwicklungsräume, Möglichkeiten des Zusammenlebens, Verantwortet Bildung - Erziehung und Sozialisation nachkommender Generationen[cite: 133, 134].

#### Die Stadien des Familienlebenszyklus:
1. Auszug aus dem Elternhaus: junge Erwachsene [cite: 136]
2. Verbindung von zwei Familien durch Eheschließung: das neue Paar [cite: 137]
3. Familien mit kleinen Kindern [cite: 137]
4. Familien mit Jugendlichen [cite: 138]
5. Kind(er) ins Leben entlassen und sich um das eigene Leben kümmern [cite: 139]
6. Familie im späteren Lebensalter [cite: 140]

#### Formen:
Adoptivfamilien, Co-Parenting, Patchworkfamilien, Gleichgeschlechtliche Familien (Regenbogenfamilien), Alleinerziehende, Pflegefamilien, Kommunen, Kinderdorf/institutionelle Familien, Mehrgenerationen-Familien, Wahlfamilie, Paarfamilie, Freunde, Kohorte, Kernfamilie, Angehörigenfamilie, In Vitro Familien, Familien mit pflegenden Angehörigen, transnationale Familie* [cite: 141], Verwandtenpflege[cite: 141].
*\* Der Begriff „transnationale Familien" wird heute für jene Familien verwendet, die nicht vorläufig, sondern zumindest mittelfristig für einige Jahre - ihr Leben zwischen verschiedenen geografischen Räumen organisieren[cite: 142].*

#### Familie und Gesundheit:
Familie kann als „hidden health care system" verstanden werden, da sie im Alltag zahlreiche gesundheitsbezogene Aufgaben übernehmen[cite: 143]. Sie sorgen für Pflege, Unterstützung bei Krankheit, emotionale Stabilität sowie für die gesundheitliche Sozialisation ihrer Mitglieder über den gesamten Lebensverlauf hinweg[cite: 143]. Neben Erziehung und Sozialisation wird Familien heute zunehmend die Verantwortung für eine gesunde Lebensführung zugeschrieben, etwa durch Ernährung, Bewegung und Prävention[cite: 143]. Gleichzeitig hängen Gesundheitschancen stark von sozialen Bedingungen wie Bildung, Einkommen und Lebenslage ab[cite: 143]. Soziale Ungleichheit kann die Gesundheitsressourcen von Familien deutlich einschränken[cite: 143]. Ein positives Familienklima, stabile Beziehungen und gegenseitige Unterstützung wirken als Schutzfaktoren, während Belastungen wie Armut, Stress oder Konflikte gesundheitliche Risiken darstellen[cite: 143, 144]. Insgesamt wird die Familie als wichtiger Ort der Gesundheitsförderung und Gesundheitssozialisation beschrieben, dessen Möglichkeiten jedoch stark von gesellschaftlichen Rahmenbedingungen beeinflusst werden[cite: 144].

Die Ottawa-Charta der WHO (1986) beschreibt Gesundheit als etwas, das im Alltag entsteht - also dort, wo Menschen leben, arbeiten, lernen und Beziehungen führen[cite: 145]. Im Unterschied zum biomedizinischen Modell steht nicht nur die Behandlung von Krankheit im Mittelpunkt, sondern die Förderung von Ressourcen, Lebensbedingungen, Selbstbestimmung und Gesundheitskompetenz[cite: 146].

---

### 5. Familienzentrierte Pflege (FZP)

Familienzentrierte Pflege ist eine Partnerschaft zwischen Familien und Pflegepersonal, die darauf abzielt, die Gesundheit und das Wohlbefinden der Familie zu fördern, indem die individuellen Bedürfnisse und Perspektiven jedes Familienmitglieds berücksichtigt werden[cite: 148].

**Bedarf der Familie:** Entlastung, Erhohlung, Information, Beratung, Schulung und persönliche Aussprache [cite: 149]

**Angebote:** Bundesministerium für Arbeit Soziales Gesundheit Pflege und Konsumentenschutz, pflege.gv.at, Pflege daheim, vorarlberg care [cite: 150]

**Theorien:** Pluralismus (viele Ansichten, was Familie ist), Kybernetik (Beschäftigt sich mit der Selbstregulation von Systemen), Kommunikationstheorie (Art und Weise der Kommunikation), Veränderungstheorie (Umgang mit Veränderungen), Erkenntnistheorie (welchen Hintergrund bringe ich mit und wie sehe ich gewisse Dinge), Systemtheorie [cite: 151]

#### 5.1 Systemtheorie
„Ein System lässt sich definieren als die Gesamtheit miteinander interagierender Elemente"[cite: 152]. In der Familienzentrierten Pflege wird die Familie als Einheit verstanden[cite: 153]. Der Fokus der Beobachtung liegt auf der Interaktion der Familienmitglieder untereinander sowie der Interaktion zwischen der Familie und der Krankheit/dem Problem[cite: 154]. Jedes Familienmitglied ist Teil dieser Einheit/dieses Systems und auch Individuum und sein eigenständiges System[cite: 155].

* **Konzept 1:** Das Familiensystem ist Teil größerer Suprasysteme und setzt sich aus vielen Subsystemen (z. B. Mutter-Kind-Beziehung, Eltern, Geschwister) zusammen[cite: 156].
* **Konzept 2:** Die Familie als Ganzes, ist größer als die Summe ihrer Teile[cite: 157].
* **Konzept 3:** Die Veränderung eines Familienmitgliedes beeinflusst alle andren Familienmitglieder[cite: 158].
* **Konzept 4:** Die Familie ist in der Lage, eine Balance zwischen Veränderung und Stabilität zu schaffen[cite: 159].
* **Konzept 5:** Zirkuläre Kausalität erklärt das Verhalten von Familienmitgliedern besser als lineare Kausalität[cite: 160].
    `.trim(),
  },
  
  block4: {
    id: "block4",
    title: "Pflegeprozess & Assessment-Modelle (BAIA & CFAM)",
    content: `
### 6. Phasen eines pflegerischen Familiengesprächs

* B-Beziehungsaufbau [cite: 161, 162]
* A-Assessment [cite: 161, 163]
* I-Intervention [cite: 161, 164]
* A-Abschluss [cite: 161, 165]

#### Phasen des Beziehungsaufbaus:
Die Pflegeperson ist Partner:in und Berater:in [cite: 166, 167] der Familie zeigt wohlwollendes Interesse, schätz Stärken und Ressourcen der Familie und verhindert kritische Einschätzungen und Schuldzuweisungen[cite: 168, 171]. Die Pflegeperson bringt ihr Wissen über Gesundheitsförderung und den Umgang mit Krankheit in die Familie ein[cite: 172]. Die Familienmitglieder bringen ihr Wissen über Gesundheit und ihre Krankheitserfahrung in die professionelle Beziehung mit ein[cite: 173]. Basis für den gemeinsamen pflegerischen Prozess[cite: 174].

#### Phasen des Assessments:
Diese Phase betrifft die Identifizierung und Analyse der Probleme & Gegenüberstellung von Stärken und Problemen[cite: 175, 176]. In dieser Phase wird es der Familie ermöglicht, ihre Situation darzustellen[cite: 177].

#### Phase der Intervention:
Diese Phase ist das Kernstück der klinischen Arbeit mit Familien und dient der Schaffung eines Kontexts, welcher unterstützend dabei wirkt, kleine und große Veränderungen zu schaffen[cite: 178, 179]. Pläne sollten gemeinsam erarbeitet und auf die individuelle Situation der Familie abgestimmt werden[cite: 180].

#### Phase des Abschlusses:
Die professionelle Beziehung wird auf eine Art beendet, welche die Familie in die Lage versetzt, die konstruktiven Veränderungen beizubehalten, neue Sichtweisen zu erlangen und förderliche Überzeugungen zu entwickeln[cite: 181, 182].

---

### 7. CFAM-Calgary-Familien-Assessment-Modell

Das CFAM ist ein Werkzeug zur Erhebung der Familiensituation, von Ressourcen und Problemen[cite: 183, 184]. Es dient zur Informations- und Datenerhebung und als Struktur für die klinische Arbeit verwendet werden[cite: 185]. Das Calgary Familien-Assessment-Modell besteht aus drei Hauptkategorien: Struktur, Entwicklung & Funktion[cite: 186]. Jede Kategorie lässt sich in Subkategorien unterteilen[cite: 186].

#### Instrumente:

##### Strukturelles Assessment:

###### Genogramm:
graphische Darstellung des Familienstammbaums/Familienstruktur - es liefert eine Fülle an Daten im Zusammenhang mit Beziehungsaufbau und Entwicklung der Familie im Verlauf der Zeit und ermöglicht den Pflegenden Hypothesen für weitere Evaluationen im Zuge des CFAM zu entwickeln[cite: 188, 189, 190].

###### Hinweise zur darstellung:
* Familienmitglieder einer Generation werden horizontal dargestellt [cite: 191, 192]
* Eheschließungen oder eheähnliche Beziehungen werden durch horizontale Linien gekennzeichnet [cite: 192, 193]
* Kinder durch vertikale Linien [cite: 194]
* die Darstellung der Rangordnung der Kinder erfolgt von links nach rechts und beginnt mit dem ältesten Kind [cite: 195]
* Name und Alter werden in die Quadrate bzw. Kreise eingetragen[cite: 196]. Außerhalb des Kreises/Quadrats werden wichtige Informationen eingetragen[cite: 196].
* aktuell in einem Haushalt lebende Personen werden eingekreist[cite: 197].

###### Ökogramm:
Das Ökogramm soll die Kontakte der Familie zu größeren Systemen aufzeigen, positive als auch konfliktträchtige Beziehungen zur "Außenwelt" werden grafisch sichtbar gemacht und es zeigt auf, wo Ressourcen vorhanden sind oder wo sie fehlen[cite: 198, 199].

##### Assessment der Entwicklung:
Dieses Instrument zeigt jeden Entwicklungsschritt der Familie in einen neuen Familienlebenszyklus ist auch durch einen emotionalen Übergangsprozess gekennzeichnet[cite: 203, 204]. Jedes Stadium bringt Themen und Aufgaben mit sich, welche von der Familie zu bewältigen sind[cite: 205].

##### Funktionales Assessment:
Das Ziel des funktionalen Assessments ist es, das Verhalten von Individuen untereinander zu einem bestimmten Zeitpunkt zu registrieren[cite: 206, 207]. Das funktionale Assessment kann in zwei Hauptkategorien unterteilt werden[cite: 208]:
* **Instrumentelle Funktion** (Routinetätigkeiten des täglichen Lebens - Essen, Trinken, Schlafen, Waschen, Injektionen geben, Verbandswechsel) [cite: 209, 210]
* **Expressive Funktion** (Kommunikation, Problemlösung, Überzeugungen, Allianzen, Koalitionen, Rollen) [cite: 211]

**Schlussfolgerung:** CFAM ist ein umfassendes und vollständiges Familien-Assessment-Modell, dessen Umgang durch die graphische Darstellung erleichtert wird[cite: 212]. Das Modell versteht sich als Konzept, welches zur Orientierung und Erörterung bei Problemen verwendet werden kann[cite: 213]. Mit Hilfe der drei Hauptkategorien (Struktur, Entwicklung und Funktion) werden Stärken und Probleme eingeschätzt[cite: 214]. Nach Abschluss des Assessments wird gemeinsam entschieden, ob eine Intervention angezeigt ist[cite: 215].
    `.trim(),
  },
  
 block5: {
    id: "block5",
    title: "Pflege durch Angehörige (Belastungen, Motive, Young Carer, HPS-Skala)",
    content: `
### 8. Pflege durch Angehörige

Der Großteil der pflegebedürftigen Menschen wird von einem engen Familienmitglied- Ehe-, Lebenspartner oder Kinder - betreut und gepflegt. Die Pflege Angehöriger kann zu seelischen, körperlichen, sozialen und finanziellen Belastungen führen. Für den mobilen Pflegedienst ist es notwendig, eine Reflexion & einen Perspektivenwechsel durchzuführen (Bewusstsein über Motive, Rollenwechsel, Belastungen). Die Mehrheit der pflegenden Angehörigen ist älter als 60 Jahre. Diese position wird überwiegend von Frauen eingenommen (73 Prozent). Der Pflegebedarf kann plötzlich eintreten (z.B. Unfälle) oder kann schleichend eintreten (z. B. kognitive Erkrankungen - Demenz). Dies ist ein entscheidender Unterschied in der Vorbereitung der Angehörigen, der planning und Organisation der Pflege.

#### Motive pflegender Angehöriger:
* war selbstverständlich
* starke emotionale Verbindung & fühlte mich verpflichtet
* zu hohe Kosten für professionelle Pflege/Betreuung
* religiöse & kulturelle Überzeugung
* keine bewusste Entscheidung
* weil er/sie zur Familie gehört
* bot finanzielle Vorteile
* Mitleid & Dankbarkeit
* kein Pflegeheimplatz

#### Belastungen pflegender Angehöriger:
* Schicksal macht mich traurig
* Perspektivlosigkeit und Überforderung
* Beziehung zu Familie/Freunden leidet
* Meine eigene Gesundheit wurde angegriffen
* Die Pflege wurde mir aufgedrängt
* Es ist eine Verringerung des Lebensstandards
* Fühlte mich manchmal ausgenutzt
* Fühle mich körperlich erschöpft
* Eigene Zufriedenheit hat gelitten
* Finanzielle Belastung
* Tagesplanung an den Tag der pflegebedürftigen Person anpassen
* Zu großes Näheverhältnis zu den pflegebedürftigen Personen (z. B. Intimpflege)
* Mehrfachbelastung
* Streit unterhalb der Familie durch die Spannung im Alltag
* Dokumentationspflicht, um höhere Pflegestufe zu erhalten
* Reduzierte Arbeitszeiten & weniger Geld
* Multimorbidität: Rückenschmerzen, Nackenschmerzen, Schulterschmerzen, Kopfschmerzen, Herzbeschwerden, nervöse Zustände, Schwindel, Gliederschmerzen, Schlafstörungen, Erschöpfung

Pflegende Angehörige sind häufig überbelastet (zeitlich, psychisch, körperlich und finanziell) & gestresst.

#### Belastungsfaktoren pflegender Angehöriger:
Tabelle 119: Psychische Belastungen und Pflegegeldstufen (in zwei Gruppen zusammengefasst)

| psychische Belastung | PG-Stufen 1-3 Prozent | PG-Stufen 4-7 Prozent |
| :--- | :--- | :--- |
| Isolation | 29,6 | 13,8 |
| Verantwortung | 46,6 | 58,8 |
| Aussichtslosigkeit | 29,2 | 14,7 |
| Überforderung | 44,2 | 23,8 |
| familiäre Probleme | 18,3 | 17,6 |
| sonstige psych. Belastungen | 11,3 | 13,0 |
| keine psych. Belastungen | 21,0 | 14,0 |

#### Burden Scale for Family Caregivers / HPS-Skala:
Die Burden Scale for Family Caregivers (BSFC), im deutschsprachigen Raum auch als HPS-Skala bezeichnet, ist ein Fragebogen zur Erfassung der subjektiv empfundenen Belastung von pflegenden Angehörigen. Mit Hilfe mehrerer Aussagen zu körperlicher, emotionaler, sozialer und finanzieller Belastung geben Angehörige an, wie stark sie sich durch die Pflegesituation beansprucht fühlen. Die Auswertung ermöglicht eine Einschätzung des Belastungsgrades

#### Young Carer:
Young Carer (engl. für „junge Pflegende") sind Kinder oder Jugendliche, die regelmäßig Verantwortung für die Pflege oder Betreuung eines kranken, behinderten oder psychisch belasteten Familienmitglieds übernehmen.
    `.trim(),
  },

  block6: {
    id: "block6",
    title: "HKP & Versorgungsangebote (Struktur, Finanzierung, MOHI, Palliativ)",
    content: `
### 9. Unterstützungs- und Entlastungsangebote inkl. Beratung(-sstellen)

#### S3-Leitlinien Pflegende Angehörige von Erwachsenen:
Die Leitlinie empfiehlt, pflegende Angehörige in Hausarztpraxen früh zu erkennen und regelmäßig nach ihrer Belastung zu fragen. Die Kommunikation soll patientenzentriert sein und Angehörige sollen ihre Bedürfnisse äußern können. Ärztinnen, Ärzte und Praxisteam arbeiten dabei zusammen. Zur Einschätzung der Belastung kann die Häusliche Pflege-Skala (HPS) verwendet werden.

#### Bedeutung der Empfehlungen:
* Einbindung der Angehörigen (entlastende Gespräche Behandlung, etc.)
* Vermittlung von Unterstützungs- und Entlastungsangeboten
* Beratung(-sstellen)

#### Beispielshafte finanzielle Unterstützungsleistungen - BUND
* Pflegegeld (Stufe 1 ab 65 Stunden pro Monat Pflegetätigkeit)
* 24-Stunden-Betreuungsförderung
* Pflegekarenzgeld
* Finanzielle Unterstützung Pflegekurse
* Rezeptgebührenbefreiung
* Rundfunkgebührenbefreiung
* Unterstützung Fahrten/Transport/Parken
* Pensions- und Krankenversicherung für pfl. A.

#### Beispielhafte finanzielle Unterstützungsleistungen - LAND:
* Zuschuss des Landes zum Pflegegeld bei ambulanter Pflege
* Angehörigenbonus (Pflege ab PS 4)
* Zuschuss zur Unterstützung der 24-Stunden-Betreuung
* Unterbringungs- und Verpflegungskosten in Pflegeheimen
* Finanzielle Unterstützung für Ersatzpflege
* ÖKG-österreichische Gesundheitskasse Heilbehelfen und Hilfsmittel

#### Zeitweilige Verhinderungspflege:
Dies ist eine Ersatzpflege, im Falle, dass der pflegende Angehörige ausfällt. Zudem bietet es einen Erholungsurlaub für pflegende Angehörige mit finanzieller Unterstützung.

#### (Teil-)Stationäre Angebote:
* **Kurzzeitpflege & Übergangspflege:** Urlaubsbetten in Pflegeheimen
* **Überleitungspflege** beispielsweise bei schneller Verschlechterung, wenn zuhause noch nicht alles vorbereitet, ist für die häusliche Pflege
* **Tagesbetreuung**

---

### 9.1 Haushaltsnahe Dienstleistungen

#### Mobiler Hilfsdienst (MOHI):
häufig in KPV eingegliedert
* betreuerische Hilfe (Zuhören, Spaziergängen, Behördengänge, Einkaufen)
* hauswirtschaftliche Hilfen (Reinigung, kl. Essen, Wäsche)
* Hilfestellungen (Einfache Handreichungen bei den ATL nach Anordnung von DGKP)

#### 24- Stunden Betreuung:
Betreuung durch selbstständige Personenbetreuer, die vor Ort wohnen. Förderungen sind möglich

---

### 9.2 Ambulante professionelle Pflege

#### Hauskrankenpflege
* Vereinssystem-landesweite Betreuung durch Ortsvereine (flächendeckend, Solidaritätsgedanken)
* Träger und Strukturen (Non-Profit Organisationen, private Org., Sonderrolle Vbg)
* 66 Krankenpflegevereine, 47 Stützpunkt in Vorarlberg

#### Landesverband Hauskrankenpflege:
sorgt für Struktur, Verhandlungen mit Förderungsgebern, Information der Öffentlichkeit, Beratung der KPV

#### Connexia:
Informations- und Vernetzungsarbeit, Beratung und Begleitung, Bildungsmanagement, Personal-, Organisations- und Qualitätsentwicklung, Konzeptentwicklung, Projektmanagement, Datenerfassung, -verarbeitung und auswertung, Berichtwesen

* **Mission:** Die HKP Vorarlberg unterstützt Pflegebedürftige und Angehörige durch Beratung, Schulung und Kooperation mit Sozial- und Gesundheitsdiensten für eine wirksame, effiziente Betreuung.
* **Vision:** Die HKP fördert ein sorgendes Miteinander und einen gesunden Lebensraum, in dem Pflegebedürftige selbstbestimmt leben und Angehörige die Betreuung verantwortlich mitgestalten.
* **Leistungen:** Beratungsstunden, Hausbesuche, Teilpflege, Wundversorgung, Injektionen, Infusionen, Medikamentengabe, Katheter setzten, Mobilisation, Lagerung, Vitalzeichenkontrolle
* **Finanzierung:** Spenden, freiwilliger Pflegebeitrag, Mitgliedbeiträge, Eigenmittelaufbringung, Förderbeiträge der Krankenkassen und Gemeinden, Sozialfonds

---

### 9.3 Spezialisierte mobile Dienste

#### Mobile Palliativteam
* Kooperationsprojekt Caritas Vorarlberg und Palliativstation Hohenems
* Interdisziplinär: Pflege, Sozialarbeiter*innen, Ärzt*innen
* Kostenträger Landesgesundheitsfond, Spendenmittel der Caritas
* Unterstützt von niedergelassene Ärzt*innen, HKP, PH's, KH's bei: Schmerztherapie und Symptomkontrolle, Ernährung und Flüssigkeitszufuhr, aufwendige medizinische und pflegerische Betreuungen (z.B. Schmerzpumpenmanagement, Aszites- und Pleurapunktionen), ethische Entscheidungsfindung, Krisensituationen, psychosoziale Probleme, sozialrechtlichen Aspekte (z. B. Pflegegeld, Patientenverfügung), Übergang vom Krankenhaus nach Hause bzw. ins Pflegeheim
* Casemanagement
* Communiy Nurse

#### Ambulante gerontopsychiatrische Pflege:
* Projekt in Vorarlberg seit 2013
* Angebotene Leistungen sind für Klienten gratis
* Zielgruppe sind Menschen mit psychischen bzw. psychiatrischen Beeinträchtigungen, sowie Angehörige und nahestehende Menschen
* **Leistungen zB:** Bedarfserhebung: Aufnahme der Situation, Gestaltung des Pflegeprozesses, Hilfe im Alltag, Tag-und Wochenstrukturerarbeitung, Re-Integration, Motivationsarbeit, Anleitung und Begleitung der pflegenden Angehörigen, Krisenintervention, Enge Zusammenarbeit mit den Systempartnern (Krankenpflegevereine, Case Management, Mobile Hilfsdienste, Ärzt*innen, etc.), Fallbesprechungen, Fachberatung

#### Beratung:
* Online möglich z.B. Pflege.gv.at (Bund), https://www.vorarlberg.care/
* Hotline & Folder
* Connexia & Krankenpflegevereine
* Casemanagement'

---

### 12. Besonderheiten in der Hauskrankenpflege

| Krankenhauspflege | Thema/Fragestellung | Hauskrankenpflege |
| :--- | :--- | :--- |
| Hilfesuchend, Gast, Patient | Welche Rolle nehmen die Patient*innen? | Gastgeber, Klient, Pflegebedürftige |
| Genesung, schnell nachhause zu kommen, Symptombesserung, genaue Diagnose, Respekt | Was ist MotivationWunsch /der Patient*innen? | Unterstützung, Bezugspersonen, Gesprächspartner, Selbstständigkeit erhalten, Wohlbefinden |
| Sturzgefahr, nosokomiale Infektionen, Falschbehandlungen, Verwechslungen, Unter- & Überversorgung | Welche Gefahren sind die Patient*innen ausgesetzt? | Unterversorgung, Sturzgefahr, Einsamkeit, Isolation, akute Notfälle, schlechte Ernährung, Immobilität |
| hygienische Arbeitsweise, geregelter Ablauf, Untersuchungen schnell | Wie ist die Arbeitsweise der Pflegeperson? Wie stellt sich der Arbeitsplatz der Pflegeperson dar? Wo liegen die Schwerpunkte in der Pflege? | Beziehungsaufbau, Material muss vorher mitgenommen werden, Umfeld ist nicht an die Pflege angepasst, man arbeitet allein vor Ort |
| möglich, Verfügbarkeit von Medikamenten | | |

#### Dienstleistung HKP:
* **Merkmale einer Dienstleistung:** Immaterialität, Miteinbeziehen der Kunden, Gleichzeitigkeit von Produktion und Konsumation
* Ziele der Klient*innen/Angehörigen müssen MA bekannt sein, den Willen des Klienten ausdrücken, aber auch dem professionellen Selbstverständnis der PP entsprechen

#### Erfolgsfaktoren eines Dienstleisters:
* **Materielles** (Dienstfahrzeug, Pflegeutensilien, Dienstkleidung)
* **Zuverlässigkeit** (zuverlässige Erbringung der Leistung auf Basis der Vereinbarung zwischen den Kund*innen und der Organisation)
* **Entgegenkommen** (Achtung für die Eigenständigkeit und das Selbstwertgefühl des Kunden /der Kundin (Beschwerdemanagement, Pflegerische Interaktion, Empowerment))
* **Kompetenz** (Pfleg. Fachwissen und Professionalität in der Durchführung der Leistung)
* **Vertrauenswürdigkeit** (Glaubwürdigkeit und Ehrlichkeit der Pflegepersonen)
* **Sicherheit** (Vermeiden von Situationen und Eindrücken, die Gefahren und Risiken befürchten lassen bzw. das Vertrauen und das Gefühl der Geborgenheit mindern)
* **Kommunikation** (Aktives Zuhören; Infos in einer für den Kunden verständlichen Sprache)
* **Kundenverständnis** (Bemühen um die Kenntnis der Kunden und ihrer Bedürfnisse; Empathie

#### Berufliches Situationsverständnis- Arbeitsumfeld
* Ganzheitliche Orientierung
* Abwechslungsreiche Arbeitsplätze
* „Charakter der Hauskrankenpflege" (innovativ und kreativ, spontan und geplant, un-/bürokratisch, vielfältig, etc.)
* Gastrolle" der Pflegeperson
* Intimbereich" Haushalt/Lebensstil/Wirtschaften etc. liegt offen
* Ebenso sozialer und körperlicher Intimbereich
* Pflegende kommen meist in Krisensituation
* Verschwiegenheit und Einfühlsamkeit in das „Fremde"
* Professionelle Kompetenz, Interesse an Person, Akzeptanz des Lebensstils und Respekt vor Entscheidungen
* Taktvoller Umgang und respektvolle Kommunikation...

#### Motive der Pflegepersonen in der HKP:
* Interesse an Menschen und deren Leben in der realen Welt
* Wunsch nach Vielfalt und Abwechslung
* Motivation, Menschen zu selbstbestimmten Leben zu verhelfen
* Problemlösungen unter Einbeziehung der Klienten

#### Interesse am Menschen:
* **Die Lebenswelt des Menschen:** Vielzahl verschiedenartigster Lebenssituationen. Einstellung der Pflegeperson zB auf ungeordnete Wohnsituationen, disharmonische Familiensituationen, gestresste Angehörige, alkoholisierte Partner:in, Gewalt
* **Alterserleben:** Verunsicherung im Alter: Verlust von Schönheit, Jugend, Kraft, Image und Prestige, Wirtschaftliche Unsicherheit, Verlust Unabhängigkeit und Autonomie, Angst vor dem Tod. Alter als Chance: Gesellschaftlicher Rückzug, Ausruhen, Rückzug ins eigene Ich. Alter verstehen: Für eine bedarfsorientierte Pflegeplanung ist das Verständnis wichtig
* **Krankheitserleben:** Unterschiede im Erleben von Krankheit im KH vs. zu Hause. Bsp. ein aus dem Krankenhaus entlassener Klient sagt: „Ich habe zwar immer noch Schmerzen und kann immer noch nicht ohne Unterstützung gehen, aber ich bin wieder mein eigener Herr". Krankheit als Ungerechtigkeit, Krankheit als Prüfung, Krankheit als Mittel zum Zweck, etc.

#### In Beziehung treten:
| | Allgemeine Faktoren | Verhaltensweisen der pflegebedürftigen Personen | Verhaltensweisen der Pflegepersonen |
| :--- | :--- | :--- | :--- |
| **Förderliche Einflussfaktoren** | Sympathie, Bezugspflege, -Angehörige, Gleiche Sprache/Kultur, Gemeinsamkeiten, -Humor, -Kommunikation, - Routine | Offener Umgang mit Krankheit, Interesse an Beziehung, Höflichkeit, Offenheit, Akzeptanz, Respekt, Sich einlassen können, Geduld, - Ehrlichkeit | Hineinversetzen in andere Menschen, Interesse, - Toleranz, - Offenheit, -Sicherheit vermitteln, -Respektvoller Umgang, Rücksicht nehmen, Wertschätzung, -Privatsphäre achten |
| **Hinderliche Einflussfaktoren** | -Antipathie, Personelle Diskontinuitat, -Angehörige, -Intoleranz ggü. anderen Sprachen/Kulturen, -unhygienische, unaufgeräumte Umgebung, -Avancen von Männern, -Fehlende Routine | -Mangelnde Krankheitsbewältigung, Desinteresse an Beziehung, Unfreundlichkeit, Ablehnendes Verhalten, Abwehrendes Verhalten, Schweigsamkeit, Zurückhaltung, Uneinsichtigkeit, - Unverständnis | -Negative Vorannahmen |

#### Spannungsfelder:
* Finanzielle Situation (u.a. für Anschaffung, Verteilung,...)
* Überforderung mit Betreuungssituation (Organisation durch Klient, Überforderung der Angehörigen)
* Kommunikationsprobleme (Verständnisprobleme, Zeit für Klärung, Respektlosigkeit zB ungewolltes Duzen)
* Körperliche und psychische Gewalt
* Gratwanderung Vernachlässigung - Überfürsorge
* Gratwanderung Sicherheit - Freiheit
* Drohende Vereinsamung → soziale Isolation
* Miterleben des körperlichen und geistigen Verfalls

#### Spannungsfelder - Beteiligte:
* Spannungsfelder in der Familie
* Spannungsfelder der professionellen Betreuer:innen
* Spannungsfelder der Familie mit dem Pflegepersonal
* Spannungsfelder der Familie mit Erwachsenenvertretung
* Spannungsfelder der betreuten Person mit sonstigen Rahmenbedingungen
    `.trim(),
  },

  block7: {
    id: "block7",
    title: "Public Health & Pilotprojekt Community (Health) Nurse",
    content: `
### 10. Pilotprojekt Community Nurse

**Hintergrund:** Durch den Einsatz von Community Nurses wird ein ungedeckter Bedarf in den Bereichen Pflege, Gesundheitsvorsorge und Gesundheitsförderung abgedeckt.

**Vision:** Die Gesundheit aller Bevölkerungsgruppen in den Lebensbereichen von Gemeinden und Städten zu verbessern. Dabei soll insbesondere die Gesundheitskompetenz von älteren sowie pflegebedürftigen Menschen und ihren An- und Zugehörigen gestärkt werden.

#### Begriffsschärfung CN & CHN:
* **Community Nurses (CN):** International werden unter Community Nurses jene Pflegekräfte verstanden, deren Aufgabe in der professionellen Pflege im Rahmen der häuslichen Pflege besteht - in Österreich wird hierunter die HKP verstanden.
* **Community Health Nursing (CHN):** Community (Health) Nursing ist ein Spezialbereich von Gesundheits- und Krankenpflege sowie Public Health, welcher die Gesundheit der Bevölkerung fokussiert, indem Prävention und Gesundheitsförderung sowie die Ausrichtung an Gesundheitsdeterminanten betont werden. Es ist die Praxis zur Förderung und zum Schutz der Gesundheit von Individuen und Familien sowie Gruppen und Gemeinschaften Anwendung von Wissen aus den Bereichen durch Pflegewissenschaft, Sozialwissenschaft sowie Public Health.

#### Ziele:

##### Individuelle Ebene:
hierzu gehören die Indexpersonen und die Angehörigen
* niederschwelliger, bedarfsorientierter und gemeindenaher Zugang zu Gesundheitsförderung, Unterstützung, Beratung & Prävention zu ermöglichen.
* regionale Akteure und Netzwerkpartner identifizieren, vernetzten, sichtbar machen, ihre Angebote vermitteln und gemeinsam Aktivitäten abstimmen.
* Gesundheit und Wohlbefinden fördern
* Lebensqualität & Selbstbestimmung steigern
* Entscheidungs- und Handlungsfähigkeit durch entsprechende Informations- & Beratungsangebote verbessern
* den Verbleib im eigenen Zuhause so lange wie möglich zu gewährleisten
* eine bedarfsorientierte Gesundheits- und Pflegeversorgung sicherstellen
* gesunde Lebensjahre insbesondere im Alter begünstigen
* Problemlagen des Alters (Einsamkeit, soziale Isolation) reduzieren

##### Gesellschaftliche Ebene:
hierzu gehören Gemeinden, Städte usw.
* auf ungedeckte Bedarfe bestimmter Bevölkerungsgruppen eingehen
* Stärkung des sozialen Zusammenhalts
* Erweiterung des Versorgungsangebots im Sozialraum

##### Politische Ebene:
* Gemeinde als attraktiven Lebensraum darstellen
* Abwanderung entgegenwirken
* Datenlage innerhalb der Gemeinde verbessern
* einheitliches Verständnis des Berufsbildes gewährleistet wird.

---

### 11. Community Health Nursing

**Standorte:** Bludenz, Dornbirn, Wolfurt

**Zielgruppe:** ältere und hochbetagte Menschen in ihrem direkten Wohnumfeld mit bevorstehendem oder vorhandenem Informations-, Beratungs, Pflege- oder Unterstützungsbedarf in pflegebezogenen und gesundheitlichen Belangen. Sowie pflegende oder betreuuende An- und Zugehörige im familiären Rahmen. Insbesondere Personen, die noch keine mobilen Dienste oder andere Angebote von Pflegeeinrichtungen in Anspruch nehmen - sprich gesunde Menschen.

#### Aufgabengebiete:
* sind zentrale Anlaufstelle für Fragen zu Pflege und Gesundheit
* führen präventive Hausbesuche durch
* informieren und beraten
* erheben die aktuelle Versorgung & der benötigten Unterstützung
* koordinieren und vermitteln zusätzliche Angebote

---

### 12. Public Health

**Definition:** Der Begriff Public Health Nursing versteht sich als ein übergeordneter Begriff der folgende Handlungsfelder beinhaltet:
* **Family Health Nursing:** agiert innerhalb des Bildungssettings mit dem Ziel Gesundheit zu fördern und Gesundheitskompetenz zu steigern.
* **School Nursing:** agiert auf der Ebene des einzelnen Menschen/Individuums und der Familie mit dem Ziel der gesundheitsförderlichen Veränderung von Wissen, Einstellungen, Verhaltensweisen, Glaubenssätzen oder Gewohnheiten. Erste Hilfe bei Unfällen und Erkrankung, Unterstützung von Kindern mit besonderem Betreuungsbedarf
* **Community Health Nursing:** agiert auf der Ebene der Gemeinde und/oder Gemeinschaft mit dem Ziel der Bewusstseinsbildung und Veränderungen von gesundheitsrelevantem Normen, Einstellungen und Verhaltensweisen von Gemeinschaften als auch gefährdeter Zielgruppen
* **Public Health Nursing:** agiert auf der Ebene von übergeordneten Systemen wie Organisationen oder politischen Institutionen mit dem Ziel gesundheitsförderliche Strukturen und Prozesse in Organisationen, sowie im Zusammenhang mit politischen Strategien oder Gesetzen zu optimieren.
* **Akut Community Nurse**

#### Prozess:
1. Erfassung aller relevanter Faktoren in einer Gemeinschaft oder Gemeinde, sowie Identifizierung von Individuen, Familien, Gemeinschaften oder gefährdeten Zielgruppen Damit diese Schritte funktionieren bedarf es unbedingt einem vorhergehenden Beziehungsaufbau - bezieht sich auf alle Ebenen!
2. Durchführung eines systematischen Assessments zur Erhebung aller Gesundheitsdeterminanten auf allen drei Ebenen.
3. Erfassung und Analyse der erhobenen Daten
4. Diskussion der Ergebnisse mit Verantwortlichen auf den betroffenen Ebenen
5. Bestimmung von Messbaren Gesundheitsindikatoren
6. Festmachen von Interventionen und Evaluationsmöglichkeiten
7. Diskussion der Ergebnisse

---

### 13. Public Health Intervention Wheel

**Definition:** Das Public Health Intervention Wheel dient zur Erhöhung der Wahrscheinlichkeit die Gesundheit von Individuen, Familien, Gemeinden und Gemeinschaften zu verbessern, sowie das Verständnis hinsichtlich notwendiger Veränderungsprozesse in übergeordneten Systemen zu erhöhen. In diesem Kreis sind die Linien durchlässig, das heißt die einzelnen Berufsfelder agieren interdisziplinär.

**ZIEL:** Planung, Implementierung und Evaluation von evidenzbasierten und nachhaltigen Interventionen.

#### Bereiche:

##### Roter Bereich:
* Überwachung und Kontrolle gesundheitsgefährdender Prozesse
* Ermittlung von Erkrankungen und gesundheitsgefährdender Faktoren
* soziales Engagement
* systematische Überprüfung in Form von Screenings
* DIVIDUAL
* KIND
* COMMUNITY FOCOSED
* CASI
* FINDING

##### Grüner Bereich:
* Weitervermittlung und Nachbetreuung
* Case Management
* Delegationsfunktionen
* **ZIELE:** Nachhaltige Verbesserung der Gesundheitskompetenz, Unterstützung bei der Entwicklung von Bewältigungsstrategien, Aufzeigen von Ressourcen
* OCUSED
* USED
* D
* SEAT AN MATH EVENT OUTREACH IVITETISATION
* SCREENING
* DELEGATED FUNCTIONS
* CASE MANAGEMENT
* REFERRAL & FOLLOW-UP

##### Blauer Bereich:
* Gesundheitslehre - Edukation
* Beratung und psychosoziale Betreuung
* **ZIEL:** Steigerung der Gesundheitskompetenz
* VIDUAL
* COMMUNITY-FOC
* SYSTEMS FOCUS
* CONSULTATION COUNSLING
* PRALTH TRACSONG

##### Oranger Bereich:
* Zusammenarbeit und Vernetzung
* Organisation von Gemeinschaften
* **ZIELE:** Stärkung der Gesundheitskompetenz, Initiierung von Verbesserung der Rahmenbedingungen
* ORGANIZING COMMUNITY
* COALITION BUILDING
* COLLABORATION

##### Gelber Bereich:
* Anwaltschaft für gesundheitliche Belange
* Soziales Marketing
* Entwicklung sowie Durch- und Umsetzung von Strategien
* **ZIEL:** Befähigung, sich selbst zu verteidigen und für eigene Rechte einzustehen
* IND
* ADVOCACY
* SOCIAL MARKETING
* POLICY DEVELOPMENT & ENFORCEMENT
    `.trim(),
  },
  
};
