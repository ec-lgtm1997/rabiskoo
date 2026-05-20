import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { goTo, setAnswer, useQuizSession } from "@/lib/quizStore";
import { ArrowLeft, ArrowRight, Check, Flag, Lightbulb, X, HelpCircle } from "lucide-react";
import { registerAnswer } from "@/lib/flameStreak";

export const Route = createFileRoute("/quiz")({
  ssr: false,
  head: () => ({ meta: [{ title: "Prüfung läuft – Community Nurse" }] }),
  component: Quiz,
});

function Quiz() {
  const session = useQuizSession();
  const navigate = useNavigate();
  const [isReviewed, setIsReviewed] = useState(false);

  useEffect(() => {
    if (!session) navigate({ to: "/" });
  }, [session, navigate]);

  if (!session) return null;

  const q = session.questions[session.currentIndex];
  const isMulti = q.correct.length > 1;
  const selected = session.answers[q.id] ?? [];
  const progress = ((session.currentIndex + 1) / session.questions.length) * 100;
  const showReview = session.instantReview && isReviewed;
  const correctAnswersList = q.answers.filter((a) => q.correct.includes(a.key));

  const calculatePointsForQuestion = () => {
    if (selected.length === 0) return 0;
    const isCorrect =
      q.correct.length === selected.length &&
      q.correct.every((key) => selected.includes(key));
    return isCorrect ? 1 : 0;
  };

  const toggle = (key: string) => {
    if (showReview) return;

    if (isMulti) {
      const nextAnswers = selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key];
      setAnswer(q.id, nextAnswers);
    } else {
      setAnswer(q.id, [key]);
    }
  };

  const handleNextClick = () => {
    const fullyCorrect =
      q.correct.length === selected.length &&
      q.correct.every((key) => selected.includes(key));
    const uid = `${session.startedAt}:${q.id}`;

    if (session.instantReview && !isReviewed) {
      registerAnswer(uid, fullyCorrect);
      setIsReviewed(true);
    } else {
      if (!session.instantReview) {
        registerAnswer(uid, fullyCorrect);
      }
      setIsReviewed(false);
      if (session.currentIndex < session.questions.length - 1) {
        goTo(session.currentIndex + 1);
      } else {
         
        navigate({ to: "/results" });
      }
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-5 pb-36 pt-8 sm:pt-14 antialiased animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/80 hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4 stroke-[2.5]" /> Abbrechen
        </Link>
        <div className="text-xs font-bold text-muted-foreground/80 uppercase tracking-widest bg-secondary/60 border px-3 py-1.5 rounded-full">
          Frage {session.currentIndex + 1} von {session.questions.length}
        </div>
      </div>

      {/* Sanfter, feiner Fortschrittsbalken */}
      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article key={q.id} className="animate-in slide-in-from-bottom-4 duration-500 mt-8 rounded-[2.5rem] border border-border/40 bg-card p-6 shadow-xl shadow-foreground/[0.01] sm:p-10 relative">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-border/40 pb-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 border border-primary/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-primary">
            <HelpCircle className="h-3.5 w-3.5" /> {isMulti ? "Mehrfachauswahl" : "Einfachauswahl"}
          </div>
          
          {showReview && (
            <div className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
              calculatePointsForQuestion() > 0 
                ? 'bg-green-50 text-green-700 border-green-200' 
                : 'bg-red-50 text-red-700 border-red-200'
            }`}>
              Ergebnis: +{calculatePointsForQuestion()} {calculatePointsForQuestion() === 1 ? "Punkt" : "Punkte"}
            </div>
          )}
        </div>
        
        <h2 className="mt-6 text-xl font-display font-bold leading-snug text-foreground tracking-tight sm:text-2xl">{q.question}</h2>

        <div className="mt-8 grid gap-3.5">
          {q.answers.map((a) => {
            const isSelected = selected.includes(a.key);
            const isCorrectAnswer = q.correct.includes(a.key);
            
            let itemStyles = "border-border/50 bg-background/40 hover:border-primary/20 hover:bg-primary/[0.01]";
            let badgeStyles = "border-border bg-background text-muted-foreground/80";

            if (showReview) {
              if (isCorrectAnswer) {
                itemStyles = isSelected 
                  ? "border-green-500 bg-green-50/40 shadow-sm shadow-green-500/5" 
                  : "border-yellow-400 bg-yellow-50/20 border-dashed border-2"; 
                badgeStyles = "border-green-500 bg-green-500 text-white shadow-md shadow-green-500/20";
              } else if (isSelected && !isCorrectAnswer) {
                itemStyles = "border-red-400 bg-red-50/40";
                badgeStyles = "border-red-500 bg-red-500 text-white shadow-md shadow-red-500/20";
              } else {
                itemStyles = "border-border/30 bg-background/20 opacity-50";
              }
            } else if (isSelected) {
              itemStyles = "border-primary bg-primary/[0.03] shadow-md shadow-primary/5 scale-[1.01]";
              badgeStyles = "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20";
            }

            return (
              <button
                key={a.key}
                disabled={showReview}
                onClick={() => toggle(a.key)}
                className={`group flex items-start gap-4 rounded-2xl border-2 p-4.5 text-left transition-all duration-300 ease-out ${
                  !showReview && "active:scale-[0.99]"
                } ${itemStyles}`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-${isMulti ? "xl" : "full"} border-2 font-display text-xs font-bold transition-all duration-300 ${badgeStyles}`}
                >
                  {showReview ? (
                    isCorrectAnswer ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : isSelected ? <X className="h-3.5 w-3.5 stroke-[3]" /> : a.key
                  ) : isSelected ? (
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  ) : (
                    a.key
                  )}
                </div>
                <div className="pt-0.5 text-sm sm:text-base font-medium text-foreground/90 leading-normal">{a.text}</div>
              </button>
            );
          })}
        </div>
      </article>

      {/* Edle Info-Box */}
      {showReview && (
        <div className="animate-in slide-in-from-bottom-2 duration-400 mt-4 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50/40 to-blue-50/80 p-5 text-sm shadow-sm flex items-start gap-3.5 backdrop-blur-sm">
          <div className="h-8 w-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0 shadow-inner">
            <Lightbulb className="h-4 w-4" />
          </div>
          <div className="grid gap-1.5">
            <span className="font-bold text-blue-900 tracking-tight">Lösungserklärung:</span>
            <div className="text-blue-800/90 space-y-1.5 text-xs sm:text-sm font-medium">
              {correctAnswersList.map((a) => (
                <div key={a.key} className="flex items-baseline gap-1.5">
                  <span className="font-extrabold text-blue-600">{a.key}:</span>
                  <span>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Schwebende Bottom-Leiste mit Milchglas-Optik */}
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-20 border-t border-border/40 bg-background/70 px-5 py-4 backdrop-blur-lg shadow-2xl">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <button
            onClick={() => {
              setIsReviewed(false);
              goTo(session.currentIndex - 1);
            }}
            disabled={session.currentIndex === 0 || showReview}
            className="rounded-2xl border-2 border-border/60 bg-card px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground/80 transition-all disabled:opacity-30 active:scale-95"
          >
            Zurück
          </button>
          <button
            onClick={handleNextClick}
            disabled={selected.length === 0}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/10 transition-all duration-300 hover:brightness-105 active:scale-[0.99] disabled:opacity-40"
          >
            {(!session.instantReview || isReviewed) ? (
              session.currentIndex < session.questions.length - 1 ? (
                <>Nächste Frage <ArrowRight className="h-4 w-4 stroke-[2.5]" /></>
              ) : (
                <>Ergebnis abgeben <Flag className="h-4 w-4 stroke-[2.5]" /></>
              )
            ) : (
              <>Überprüfen <Check className="h-4 w-4 stroke-[2.5]" /></>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
