import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { clearSession, retryQuestion, useQuizSession } from "@/lib/quizStore";
import { gradeFromPercent, isFullyCorrect, scoreQuestion } from "@/lib/grading";
import { Check, X, ChevronDown, RotateCcw, Home } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "Ergebnis – Community Nurse" }] }),
  component: Results;
});

function Results() {
  const session = useQuizSession();
  const navigate = useNavigate();
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!session) navigate({ to: "/" });
  }, [session, navigate]);

  const stats = useMemo(() => {
    if (!session) return null;
    let earned = 0;
    let max = 0;
    let correctCount = 0;
    const per = session.questions.map((q) => {
      const sel = session.answers[q.id] ?? [];
      const s = scoreQuestion(q, sel);
      earned += s.points;
      max += s.max;
      const full = isFullyCorrect(q, sel);
      if (full) correctCount += 1;
      return { q, sel, ...s, full };
    });
    const percent = max > 0 ? (earned / max) * 100 : 0;
    return { earned, max, percent, correctCount, per };
  }, [session]);

  if (!session || !stats) return null;

  const grade = gradeFromPercent(stats.percent);

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10">
      <section className="animate-fade-up rounded-3xl border bg-card p-6 shadow-sm sm:p-10">
        <div className="text-sm font-medium text-muted-foreground">Dein Ergebnis</div>
        <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-2">
          <div className="animate-pop font-display text-7xl font-semibold text-primary sm:text-8xl">
            {grade.grade}
          </div>
          <div className="pb-2">
            <div className="text-2xl font-display font-semibold">{grade.label}</div>
            <div className="text-muted-foreground">{stats.percent.toFixed(0)}% erreicht</div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Stat label="Punkte" value={`${stats.earned.toFixed(0)} / ${stats.max}`} />
          <Stat label="Richtig" value={`${stats.correctCount} / ${session.questions.length}`} tone="success" />
          <Stat label="Falsch / Teilweise" value={`${session.questions.length - stats.correctCount}`} tone="warm" />
        </div>

        <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-success transition-all duration-700"
            style={{ width: `${stats.percent}%` }}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            onClick={() => clearSession()}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-medium text-primary-foreground shadow-md hover:-translate-y-0.5 transition"
          >
            <Home className="h-4 w-4" /> Startseite
          </Link>
        </div>
      </section>

      <h2 className="mt-12 text-2xl font-display font-semibold">Alle Fragen</h2>
      <p className="text-sm text-muted-foreground">Klicke auf eine Frage, um sie nochmal zu versuchen.</p>

      <ul className="mt-5 space-y-3">
        {stats.per.map(({ q, sel, points, max, full }, i) => {
          const isOpen = open === q.id;
          const partial = points > 0 && !full;
          return (
            <li key={q.id} className="animate-fade-up overflow-hidden rounded-2xl border bg-card shadow-sm">
              <button
                onClick={() => setOpen(isOpen ? null : q.id)}
                className="flex w-full items-center gap-4 p-4 text-left hover:bg-accent/20"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    full
                      ? "bg-success/15 text-success"
                      : partial
                        ? "bg-warning/20 text-warning-foreground"
                        : "bg-destructive/15 text-destructive"
                  }`}
                >
                  {full ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Frage {i + 1} · {points.toFixed(0)}/{max} Pkt</div>
                  <div className="mt-0.5 line-clamp-2 font-medium">{q.question}</div>
                </div>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="animate-fade-up border-t p-5">
                  <div className="space-y-2">
                    {q.answers.map((a) => {
                      const wasSelected = sel.includes(a.key);
                      const isCorrect = q.correct.includes(a.key);
                      return (
                        <div
                          key={a.key}
                          className={`flex items-start gap-3 rounded-xl border p-3 text-sm ${
                            isCorrect
                              ? "border-success/40 bg-success/10"
                              : wasSelected
                                ? "border-destructive/40 bg-destructive/10"
                                : "border-border"
                          }`}
                        >
                          <div className="font-display font-semibold w-5">{a.key}</div>
                          <div className="flex-1">{a.text}</div>
                          {isCorrect && <Check className="h-4 w-4 text-success" />}
                          {!isCorrect && wasSelected && <X className="h-4 w-4 text-destructive" />}
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      retryQuestion(q.id);
                      navigate({ to: "/quiz" });
                    }}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 transition"
                  >
                    <RotateCcw className="h-4 w-4" /> Frage nochmal versuchen
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "success" | "warm" }) {
  const toneClass =
    tone === "success" ? "text-success" : tone === "warm" ? "text-warm" : "text-primary";
  return (
    <div className="rounded-2xl border bg-background/60 p-4">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className={`mt-1 font-display text-2xl font-semibold ${toneClass}`}>{value}</div>
    </div>
  );
}
