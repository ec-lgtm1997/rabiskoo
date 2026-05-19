import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { BLOCKS, QUESTIONS } from "@/data/questions";
import { startQuiz } from "@/lib/quizStore";
import { ArrowLeft, Play } from "lucide-react";

const search = z.object({
  mode: z.enum(["exam", "block"]).default("exam"),
});

export const Route = createFileRoute("/setup")({
  validateSearch: search,
  head: () => ({ meta: [{ title: "Modus wählen – Community Nurse" }] }),
  component: Setup,
});

function Setup() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const [count, setCount] = useState(Math.min(10, QUESTIONS.length));

  const begin = (m: Parameters<typeof startQuiz>[0]) => {
    startQuiz(m);
    navigate({ to: "/quiz" });
  };

  return (
    <main className="mx-auto max-w-2xl px-5 pb-24 pt-10">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Zurück
      </Link>

      {mode === "exam" ? (
        <section className="animate-fade-up mt-6 rounded-3xl border bg-card p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-semibold">Prüfungs-Modus</h1>
          <p className="mt-2 text-muted-foreground">Wie viele Fragen möchtest du simulieren?</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[5, 10, 20, 30, QUESTIONS.length].map((n) => {
              const v = Math.min(n, QUESTIONS.length);
              const active = count === v;
              return (
                <button
                  key={n}
                  onClick={() => setCount(v)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {n === QUESTIONS.length || n > QUESTIONS.length ? `Alle (${QUESTIONS.length})` : n}
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <label className="text-sm text-muted-foreground">Eigene Anzahl: {count}</label>
            <input
              type="range"
              min={1}
              max={QUESTIONS.length}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="mt-2 w-full accent-primary"
            />
          </div>

          <button
            onClick={() => begin({ type: "count", count })}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            <Play className="h-5 w-5" /> Prüfung starten
          </button>
        </section>
      ) : (
        <section className="animate-fade-up mt-6">
          <h1 className="text-3xl font-semibold">Themenblock wählen</h1>
          <p className="mt-2 text-muted-foreground">Fokussiere dich auf einen der 7 Blöcke.</p>

          <div className="mt-6 grid gap-3">
            {BLOCKS.map((b, i) => {
              const n = QUESTIONS.filter((q) => q.block === b.id).length;
              return (
                <button
                  key={b.id}
                  disabled={n === 0}
                  onClick={() => begin({ type: "block", blockId: b.id })}
                  className="group flex items-center gap-4 rounded-2xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-semibold text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{b.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {n === 0 ? "Bald verfügbar" : `${n} Frage${n === 1 ? "" : "n"}`}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
