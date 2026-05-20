import { useSyncExternalStore } from "react";
import { QUESTIONS, type Question } from "@/data/questions";

export type QuizSession = {
  questions: Question[];
  answers: Record<string, string[]>; // questionId -> selected keys
  currentIndex: number;
  startedAt: number;
  mode: { type: "block"; blockId: string } | { type: "count"; count: number } | { type: "errors" };
  instantReview: boolean;
};

export type HistoryEntry = {
  id: string;
  date: string;
  time: string;
  modeText: string;
  points: number;
  maxPoints: number;
  percentage: number;
  session: QuizSession;
};

let session: QuizSession | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Hilfsfunktion zur exakten Punkteberechnung nach Variante A
export function getQuestionMaxPoints(q: Question): number {
  return q.correct.length > 1 ? 2 : 1;
}

export function calcQuestionPoints(q: Question, selected: string[]): number {
  const maxPoints = getQuestionMaxPoints(q);
  
  if (maxPoints === 1) {
    // Single Choice: Alles oder nichts
    const isCorrect = q.correct.length === selected.length && q.correct.every((key) => selected.includes(key));
    return isCorrect ? 1 : 0;
  } else {
    // Multiple Choice (Variante A): Jede Option wird als Teilentscheidung gewertet
    let correctDecisions = 0;
    
    q.answers.forEach((a) => {
      const shouldBeSelected = q.correct.includes(a.key);
      const isCurrentlySelected = selected.includes(a.key);
      
      if (shouldBeSelected === isCurrentlySelected) {
        correctDecisions++;
      }
    });

    // Punkte = (Richtige Entscheidungen / Gesamtoptionen) * 2 MaxPoints
    const rawPoints = (correctDecisions / q.answers.length) * 2;
    // Runden auf 2 Nachkommastellen für saubere Darstellung
    return Math.round(rawPoints * 100) / 100;
  }
}

export function getWrongQuestionIds(): string[] {
  const history = getHistory();
  const wrongIds = new Set<string>();

  history.forEach((entry) => {
    entry.session.questions.forEach((q) => {
      const selected = entry.session.answers[q.id] ?? [];
      const points = calcQuestionPoints(q, selected);
      const maxPoints = getQuestionMaxPoints(q);
      
      if (points < maxPoints) {
        wrongIds.add(q.id); // Nicht die volle Punktzahl -> gilt als Fehler
      }
    });
  });

  history.forEach((entry) => {
    entry.session.questions.forEach((q) => {
      const selected = entry.session.answers[q.id] ?? [];
      const points = calcQuestionPoints(q, selected);
      const maxPoints = getQuestionMaxPoints(q);
      
      if (points === maxPoints && wrongIds.has(q.id)) {
        wrongIds.delete(q.id); // In neuerer Session komplett fehlerfrei gelöst
      }
    });
  });

  return Array.from(wrongIds);
}

export function startQuiz(mode: QuizSession["mode"], instantReview: boolean = false) {
  let pool: Question[];
  
  if (mode.type === "block") {
    pool = QUESTIONS.filter((q) => q.block === mode.blockId);
  } else if (mode.type === "errors") {
    const wrongIds = getWrongQuestionIds();
    pool = shuffle(QUESTIONS.filter((q) => wrongIds.includes(q.id)));
  } else {
    pool = shuffle(QUESTIONS).slice(0, Math.min(mode.count, QUESTIONS.length));
  }
  
  session = {
    questions: pool,
    answers: {},
    currentIndex: 0,
    startedAt: Date.now(),
    mode,
    instantReview,
  };
  emit();
}

export function loadPastSession(pastSession: QuizSession) {
  session = { ...pastSession, currentIndex: 0, instantReview: true };
  emit();
}

export function getSession(): QuizSession | null {
  return session;
}

export function setAnswer(qid: string, selected: string[]) {
  if (!session) return;
  session = {
    ...session,
    answers: { ...session.answers, [qid]: selected },
  };
  emit();
}

export function goTo(index: number) {
  if (!session) return;
  session = {
    ...session,
    currentIndex: Math.max(0, Math.min(index, session.questions.length - 1)),
  };
  emit();
}

export function clearSession() {
  session = null;
  emit();
}

export function saveSessionToHistory(points: number) {
  if (!session) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  let modeText = "";
  if (session.mode.type === "block") {
    modeText = `Themenblock ${session.mode.blockId.replace("block", "")}`;
  } else if (session.mode.type === "errors") {
    modeText = `Fehler-Fokus (${session.questions.length} Fragen)`;
  } else {
    modeText = `Zufallsmix (${session.questions.length} Fragen)`;
  }

  // Berechne die echten maximal erreichbaren Punkte dieser Session
  const totalMaxPoints = session.questions.reduce((sum, q) => sum + getQuestionMaxPoints(q), 0);

  const newEntry: HistoryEntry = {
    id: `${session.startedAt}-${Math.random()}`,
    date: dateStr,
    time: timeStr,
    modeText,
    points: Math.round(points * 100) / 100,
    maxPoints: totalMaxPoints,
    percentage: Math.round((points / totalMaxPoints) * 100),
    session: { ...session },
  };

  const existingHistory = getHistory();
  const updatedHistory = [newEntry, ...existingHistory];
  localStorage.setItem("quiz_history", JSON.stringify(updatedHistory));
}

export function getHistory(): HistoryEntry[] {
  try {
    const data = localStorage.getItem("quiz_history");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function clearHistory() {
  localStorage.removeItem("quiz_history");
}

export function useQuizSession() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => session,
    () => session
  );
}
