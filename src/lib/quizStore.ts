import { useSyncExternalStore } from "react";
import { QUESTIONS, type Question } from "@/data/questions";

export type QuizSession = {
  questions: Question[];
  answers: Record<string, string[]>; // questionId -> selected keys
  currentIndex: number;
  startedAt: number;
  mode: { type: "block"; blockId: string } | { type: "count"; count: number };
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

export function startQuiz(mode: QuizSession["mode"]) {
  let pool: Question[];
  if (mode.type === "block") {
    pool = QUESTIONS.filter((q) => q.block === mode.blockId);
  } else {
    pool = shuffle(QUESTIONS).slice(0, Math.min(mode.count, QUESTIONS.length));
  }
  session = {
    questions: mode.type === "block" ? pool : pool,
    answers: {},
    currentIndex: 0,
    startedAt: Date.now(),
    mode,
  };
  emit();
}

export function getSession(): QuizSession | null {
  return session;
}

export function setAnswer(qid: string, selected: string[]) {
  if (!session) return;
  session.answers[qid] = selected;
  emit();
}

export function goTo(index: number) {
  if (!session) return;
  session.currentIndex = Math.max(0, Math.min(index, session.questions.length - 1));
  emit();
}

export function retryQuestion(qid: string) {
  if (!session) return;
  const idx = session.questions.findIndex((q) => q.id === qid);
  if (idx >= 0) {
    delete session.answers[qid];
    session.currentIndex = idx;
    emit();
  }
}

export function clearSession() {
  session = null;
  emit();
}

export function useQuizSession() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => session,
    () => session,
  );
}
