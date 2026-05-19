import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { goTo, setAnswer, useQuizSession } from "@/lib/quizStore";
import { ArrowLeft, ArrowRight, Check, Flag } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  ssr: false,
  head: () => ({ meta: [{ title: "Prüfung läuft – Community Nurse" }] }),
  component: Quiz,
});

function Quiz() {
  const session = useQuizSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) navigate({ to: "/" });
  }, [session, navigate]);

  if (!session) return null;

  const q = session.questions[session.currentIndex];
  const isMulti = q.correct.length > 1;
  const selected = session.answers[q.id] ?? [];
  const progress = ((session.currentIndex + 1) / session.questions.length) * 100;

  const toggle = (key: string) => {
    if (isMulti) {
      const next = selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key];
      setAnswer(q.id, next);
    } else {
      setAnswer(q.id, [key]);
    }
  };

  const next = () => {
    if (session.currentIndex < session.questions.length - 1) {
      goTo(session.currentIndex + 1);
    } else {
      navigate({ to: "/results" });
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-5 pb-32 pt-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Abbrechen
        </Link>
        <div className="text-sm font-medium text-muted-foreground">
          {session.currentIndex + 1} / {session.questions.length}
        </div>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article key={q.id} className="animate-fade-up mt-8 rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground">
          {isMulti ? "Mehrere Antworten möglich" : "Eine Antwort"}
        </div>
        <h2 className="mt-4 text-xl font-display font-semibold leading-snug sm:text-2xl">{q.question}</h2>

        <div className="mt-6 grid gap-3">
          {q.answers.map((a) => {
            const active = selected.includes(a.key);
            return (
              <button
                key={a.key}
                onClick={() => toggle(a.key)}
                className={`group flex items-start gap-4 rounded-2xl border-2 p-4 text-left transition-all active:scale-[0.99] ${
                  active
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-background hover:border-primary/40 hover:bg-accent/20"
                }`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-${isMulti ? "lg" : "full"} border-2 font-display text-sm font-semibold transition-all ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  {active ? <Check className="h-4 w-4" /> : a.key}
                </div>
                <div className="pt-0.5 text-sm sm:text-base">{a.text}</div>
              </button>
            );
          })}
        </div>
      </article>

      <div className="safe-bottom fixed inset-x-0 bottom-0 z-10 border-t bg-background/80 px-5 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <button
            onClick={() => goTo(session.currentIndex - 1)}
            disabled={session.currentIndex === 0}
            className="rounded-2xl border bg-card px-4 py-3 text-sm font-medium disabled:opacity-40"
          >
            Zurück
          </button>
          <button
            onClick={next}
            disabled={selected.length === 0}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {session.currentIndex < session.questions.length - 1 ? (
              <>Nächste <ArrowRight className="h-4 w-4" /></>
            ) : (
              <>Abgeben <Flag className="h-4 w-4" /></>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
