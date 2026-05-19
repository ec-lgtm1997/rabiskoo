import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { clearSession, saveSessionToHistory, useQuizSession } from "@/lib/quizStore";
import { useEffect, useRef } from "react";
import { Award, BookOpen, CheckCircle, Home, RefreshCw, XCircle } from "lucide-react";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
});

function ResultsPage() {
  const session = useQuizSession();
  const navigate = useNavigate();
  const savedRef = useRef(false);

  // Berechne Punkte
  let correctCount = 0;
  if (session) {
    session.questions.forEach((q) => {
      const selected = session.answers[q.id] ?? [];
      const isCorrect =
        q.correct.length === selected.length &&
        q.correct.every((key) => selected.includes(key));
      if (isCorrect) correctCount++;
    });
  }

  // WICHTIG: Speichert die Session automatisch beim ersten Laden der Ergebnisseite
  useEffect(() => {
    if (!session) {
      navigate({ to: "/" });
      return;
    }
    if (!savedRef.current) {
      saveSessionToHistory(correctCount);
      savedRef.current = true;
    }
  }, [session, navigate, correctCount]);

  if (!session) return null;

  const totalQuestions = session.questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 60; // Bestehensgrenze bei z.B. 60%

  return (
    <main className="mx-auto max-w-xl px-5 py-12 text-center">
      <div className="rounded-3xl border bg-card p-8 shadow-md">
        <div className="flex justify-center">
          {passed ? (
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Award className="h-10 w-10" />
            </div>
          ) : (
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
              <XCircle className="h-10 w-10" />
            </div>
          )}
        </div>

        <h1 className="mt-6 text-3xl font-display font-extrabold">
          {passed ? "Bestanden!" : "Leider nicht bestanden"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Du hast die Prüfungssimulation abgeschlossen. Das Ergebnis wurde in deiner Historie gesichert.
        </p>

        {/* Score-Anzeige */}
        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-accent/30 p-4">
          <div>
            <span className="block text-3xl font-black text-foreground">{correctCount} / {totalQuestions}</span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Richtige Fragen</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-primary">{percentage}%</span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Ergebnis</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {/* Knopf um die Fragen direkt noch mal im Review-Modus durchzuschauen */}
          <button
            onClick={() => {
              // Wir lassen die Session aktiv, aktivieren Review und springen zum Anfang
              navigate({ to: "/quiz" });
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/20 hover:border-primary/40 bg-background px-6 py-3.5 font-semibold text-foreground transition-all hover:bg-accent"
          >
            <BookOpen className="h-4 w-4" /> Antworten detailliert durchsehen
          </button>

          <button
            onClick={() => {
              clearSession();
              navigate({ to: "/" });
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Home className="h-4 w-4" /> Zurück zur Übersicht
          </button>
        </div>
      </div>
    </main>
  );
}
