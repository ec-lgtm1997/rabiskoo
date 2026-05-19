export type Answer = { key: string; text: string };
export type Question = {
  id: string;
  block: string;
  question: string;
  answers: Answer[];
  correct: string[];
};
export type Block = { id: string; title: string };

export const BLOCKS: Block[] = [
  { id: "block1", title: "Grundlagen & Rollen der extramuralen Pflege" },
  { id: "block2", title: "Setting & Ort der Pflege (Häusliches Umfeld & Barrierefreiheit)" },
  { id: "block3", title: "Familie, Gesundheit & Familienzentrierte Pflege (FZP)" },
  { id: "block4", title: "Pflegeprozess & Assessment-Modelle (BAIA & CFAM)" },
  { id: "block5", title: "Pflegende Angehörige (Belastungen, Motive, Young Carer, HPS-Skala)" },
  { id: "block6", title: "HKP & Versorgungsangebote (Struktur, Finanzierung, MOHI, Palliativ)" },
  { id: "block7", title: "Public Health & Pilotprojekt Community (Health) Nurse" },
];

export const QUESTIONS: Question[] = [
  {
    id: "b1_f1",
    block: "block1",
    question: "Was bedeutet der Begriff 'extramural' im Kontext der Pflege?",
    answers: [
      { key: "A", text: "Pflege innerhalb von Krankenhausmauern" },
      { key: "B", text: "Pflege außerhalb von stationären Einrichtungen, direkt in der Gemeinde oder zu Hause" },
      { key: "C", text: "Pflege durch externe, internationale Pflegekräfte" },
      { key: "D", text: "Pflege in spezialisierten Rehabilitationszentren" },
    ],
    correct: ["B"],
  },
  {
    id: "b1_f2",
    block: "block1",
    question: "Welches übergeordnete Ziel verfolgt die extramurale Pflege?",
    answers: [
      { key: "A", text: "Möglichst viele Krankenhausaufenthalte zu ermöglichen" },
      { key: "B", text: "Krankenhausaufenthalte zu vermeiden und ein selbstständiges Leben zu Hause zu fördern" },
      { key: "C", text: "Die Kosten für Pflegeheime zu senken" },
      { key: "D", text: "Die Anzahl der Pflegefachkräfte zu reduzieren" },
    ],
    correct: ["B"],
  },
  {
    id: "b1_f3",
    block: "block1",
    question: "Welche gesellschaftlichen Entwicklungen begründen den wachsenden Bedarf an extramuraler Pflege? (Mehrere Antworten möglich)",
    answers: [
      { key: "A", text: "Abnahme der Haushaltsgrößen und mehr alleinlebende Menschen" },
      { key: "B", text: "Zunehmende Berufstätigkeit von Frauen" },
      { key: "C", text: "Verstärkte berufliche Mobilität führt zu größeren räumlichen Entfernungen zwischen Generationen" },
      { key: "D", text: "Rückgang der Scheidungsraten" },
      { key: "E", text: "Veränderung traditioneller Rollenbilder" },
    ],
    correct: ["A", "B", "C", "E"],
  },
];
