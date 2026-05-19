import { useSyncExternalStore } from "react";
import { QUESTIONS, type Question } from "@/data/questions";

export type QuizSession = {
  questions: Question[];
  answers: Record<string, string[]>; // questionId -> selected keys
  currentIndex: number;
  startedAt: number;
  mode: { type: "block"; blockId: string } | { type: "count"; count: number };
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

export function startQuiz(mode: QuizSession["mode"], instantReview: boolean = false) {
  let pool: Question[];
  if (mode.type === "block") {
    pool = QUESTIONS.filter((q) => q.block === mode.blockId);
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

// NEU: Lädt eine alte Session aus der Historie, um sie noch einmal anzuschauen
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

// NEU: Speichert das Ergebnis in die Historie (wird auf der Ergebnisseite aufgerufen)
export function saveSessionToHistory(points: number) {
  if (!session) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  let modeText = "";
  if (session.mode.type === "block") {
    modeText = `Themenblock ${session.mode.blockId.replace("block", "")}`;
  } else {
    modeText = `Zufallsmix (${session.questions.length} Fragen)`;
  }

  const newEntry: HistoryEntry = {
    id: `${session.startedAt}-${Math.random()}`,
    date: dateStr,
    time: timeStr,
    modeText,
    points,
    maxPoints: session.questions.length,
    percentage: Math.round((points / session.questions.length) * 100),
    session: { ...session },
  };

  const existingHistory = getHistory();
  const updatedHistory = [newEntry, ...existingHistory];
  localStorage.setItem("quiz_history", JSON.stringify(updatedHistory));
}

// NEU: Holt alle gespeicherten Verläufe ab
export function getHistory(): HistoryEntry[] {
  try {
    const data = localStorage.getItem("quiz_history");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// NEU: Löscht die Historie bei Bedarf
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
