import type { Question } from "@/data/questions";

// Partial credit: each correct option = +1, each wrong selected = -1, clamped at 0.
// Score normalized to question's max (number of correct options).
export function scoreQuestion(q: Question, selected: string[]): { points: number; max: number } {
  const correctSet = new Set(q.correct);
  let pts = 0;
  for (const s of selected) {
    if (correctSet.has(s)) pts += 1;
    else pts -= 1;
  }
  return { points: Math.max(0, pts), max: q.correct.length };
}

export function isFullyCorrect(q: Question, selected: string[]): boolean {
  if (selected.length !== q.correct.length) return false;
  const set = new Set(selected);
  return q.correct.every((c) => set.has(c));
}

// Sehr optimistischer Notenschlüssel
export function gradeFromPercent(p: number): { grade: number; label: string } {
  if (p >= 80) return { grade: 1, label: "Sehr gut" };
  if (p >= 65) return { grade: 2, label: "Gut" };
  if (p >= 50) return { grade: 3, label: "Befriedigend" };
  if (p >= 35) return { grade: 4, label: "Genügend" };
  return { grade: 5, label: "Nicht genügend" };
}
