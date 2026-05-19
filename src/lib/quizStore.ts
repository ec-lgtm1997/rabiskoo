import { useSyncExternalStore } from "react";
import { QUESTIONS, type Question } from "@/data/questions";

export type QuizSession = {
  questions: Question[];
  answers: Record<string, string[]>; // questionId -> selected keys
  currentIndex: number;
  startedAt: number;
  mode: { type: "block"; blockId: string } | { type: "count"; count: number } | { type: "errors" }; // <-- "errors" hinzugefügt
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

// NEU: Ermittelt alle IDs von Fragen, die in der Historie jemals falsch beantwortet wurden
export function getWrongQuestionIds(): string[] {
  const history = getHistory();
  const wrongIds = new Set<string>();

  history.forEach((entry) => {
    entry.session.questions.forEach((q) => {
      const selected = entry.session.answers[q.id] ?? [];
      const isCorrect =
        q.correct.length === selected.length &&
        q.correct.every((key) => selected.includes(key));
      
      if (!isCorrect) {
        wrongIds.add(q.id); // Frage war falsch -> merken
      }
    });
  });

  // Wichtig: Wenn eine Frage in einer NEUEREN Session komplett richtig beantwortet wurde,
  // nehmen wir sie wieder aus dem Fehler-Fokus heraus (optional, aber sehr motivierend)
  history.forEach((entry) => {
    entry.session.questions.forEach((q) => {
      const selected = entry.session.answers[q.id] ?? [];
      const isCorrect =
        q.correct.length === selected.length &&
        q.correct.every((key) => selected.includes(key));
      
      if (isCorrect && wrongIds.has(q.id)) {
        // Wurde in einer anderen Session korrigiert -> aus Fehlerliste streichen
        wrongIds.delete(q.id);
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
    // NEU: Pool besteht ausschließlich aus den fälschlich beantworteten Fragen
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
