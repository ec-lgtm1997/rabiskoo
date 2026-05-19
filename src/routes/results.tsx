import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { clearSession, useQuizSession } from "@/lib/quizStore";
import { useEffect } from "react";
import { Award, BookOpen, Home, XCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
});

function ResultsPage() {
  const session = useQuizSession();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!session) navigate({ to: "/" });
  }, [session, navigate]);

  if (!session) return null;

  const totalQuestions = session.questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 60;

  return (
    <main className="mx-auto max-w-xl px-5 py-14 sm:py-24 antialiased animate-in fade-in duration-500">
      <div className="rounded-[2.5rem] border border-border/40 bg-card p-6 shadow-2xl shadow-foreground/[0.02] sm:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="flex justify-center relative z-10">
          {passed ? (
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-green-400/20 to-green-500/10 text-green-600 shadow-inner">
              <Award className="h-10 w-10 stroke-[2]" />
            </div>
          ) : (
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-red-400/20 to-red-500/10 text-red-500 shadow-inner">
              <XCircle className="h-10 w-10 stroke-[2]" />
            </div>
          )}
        </div>

        <h1 className="mt-8 text-3xl font-display font-extrabold tracking-tight text-foreground sm:text-4xl">
          {passed ? "Herzlichen Glückwunsch!" : "Kopf hoch, weiter geht's!"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground/90 font-medium max-w-sm mx-auto leading-relaxed">
          {passed 
            ? "Du hast die Simulation mit Bravour bestanden. Deine Ergebnisse sind sicher in der Historie verwahrt!"
            : "Das war ein super Training. Nutze die Fehler-Anzeige, um beim nächsten Mal voll durchzustarten."}
        </p>

        {/* Die Scoreboard-Kacheln im Soft-Look */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl bg-secondary/40 p-5 border shadow-inner">
          <div className="space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-black text-foreground tracking-tight">{correctCount} / {totalQuestions}</span>
            <span className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest">Richtige Antworten</span>
          </div>
          <div className="space-y-0.5 border-l border-border/60">
            <span className="block text-2xl sm:text-3xl font-black text-primary tracking-tight">{percentage}%</span>
            <span className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest">Deine Quote</span>
          </div>
        </div>

        <div className="mt-10 space-y-3 relative z-10">
          <button
            onClick={() => navigate({ to: "/quiz" })}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/20 bg-background/50 px-6 py-4 font-bold text-foreground transition-all duration-300 hover:bg-accent hover:border-primary/40 active:scale-[0.99]"
          >
            <BookOpen className="h-4 w-4 text-primary" /> Antworten detailliert prüfen
          </button>

          <button
            onClick={() => {
              clearSession();
              navigate({ to: "/" });
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4.5 font-bold text-primary-foreground shadow-xl shadow-primary/10 transition-all duration-300 hover:shadow-primary/20 hover:brightness-105 active:scale-[0.99]"
          >
            <Home className="h-4 w-4" /> Zurück zum Start
          </button>
        </div>
      </div>
    </main>
  );
}
