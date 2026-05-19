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
  
};
