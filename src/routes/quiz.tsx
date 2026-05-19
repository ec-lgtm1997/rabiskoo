import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { goTo, setAnswer, useQuizSession } from "@/lib/quizStore";
import { ArrowLeft, ArrowRight, Check, Flag, Lightbulb, X } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  ssr: false,
  head: () => ({ meta: [{ title: "Prüfung läuft – Community Nurse" }] }),
  component: Quiz,
});

function Quiz() {
  const session = useQuizSession();
  const navigate = useNavigate();
  
  // Zustand für die Auflösung (wird nur genutzt, wenn instantReview aktiv ist)
  const [isReviewed, setIsReviewed] = useState(false);

  useEffect(() => {
    if (!session) navigate({ to: "/" });
  }, [session, navigate]);

  if (!session) return null;

  const q = session.questions[session.currentIndex];
  const isMulti = q.correct.length > 1;
  const selected = session.answers[q.id] ?? [];
  const progress = ((session.currentIndex + 1) / session.questions.length) * 100;

  // Bestimmt, ob die visuelle Auflösung JETZT gerade aktiv gezeigt werden soll
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
    if (showReview) return; // Klicks sperren, wenn bereits aufgelöst

    if (isMulti) {
      const nextAnswers = selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key];
      setAnswer(q.id, nextAnswers);
    } else {
      setAnswer(q.id, [key]);
    }
  };

  const handleNextClick = () => {
    if (session.instantReview && !isReviewed) {
      // Modus "Direktes Feedback": Zeige zuerst die Auswertung
      setIsReviewed(true);
    } else {
      // Prüfungsmodus ODER bereits ausgewertet: Gehe direkt weiter
      setIsReviewed(false);
      if (session.currentIndex < session.questions.length - 1) {
        goTo(session.currentIndex + 1);
      } else {
        navigate({ to: "/results" });
      }
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
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground">
            {isMulti ? "Mehrere Antworten möglich" : "Eine Antwort"}
          </div>
          
          {showReview && (
            <div className={`text-sm font-semibold px-3 py-1 rounded-full ${calculatePointsForQuestion() > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              Punkte: {calculatePointsForQuestion()} / 1
            </div>
          )}
        </div>
        
        <h2 className="mt-4 text-xl font-display font-semibold leading-snug sm:text-2xl">{q.question}</h2>

        <div className="mt-6 grid gap-3">
          {q.answers.map((a) => {
            const isSelected = selected.includes(a.key);
            const isCorrectAnswer = q.correct.includes(a.key);
            
            let borderClass = "border-border bg-background hover:border-primary/40 hover:bg-accent/20";
            let iconContainerClass = "border-border bg-background text-muted-foreground";

            if (showReview) {
              if (isCorrectAnswer) {
                borderClass = isSelected 
                  ? "border-green-500 bg-green-50/50" 
                  : "border-yellow-500 bg-yellow-50/30 border-dashed border-2"; 
                iconContainerClass = "border-green-500 bg-green-500 text-white";
              } else if (isSelected && !isCorrectAnswer) {
                borderClass = "border-red-500 bg-red-50/50";
                iconContainerClass = "border-red-500 bg-red-500 text-white";
              } else {
                borderClass = "border-border bg-background opacity-60";
              }
            } else if (isSelected) {
              borderClass = "border-primary bg-primary/5 shadow-md";
              iconContainerClass = "border-primary bg-primary text-primary-foreground";
            }

            return (
              <button
                key={a.key}
                disabled={showReview}
                onClick={() => toggle(a.key)}
                className={`group flex items-start gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                  !showReview && "active:scale-[0.99]"
                } ${borderClass}`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-${isMulti ? "lg" : "full"} border-2 font-display text-sm font-semibold transition-all ${iconContainerClass}`}
                >
                  {showReview ? (
                    isCorrectAnswer ? <Check className="h-4 w-4" /> : isSelected ? <X className="h-4 w-4" /> : a.key
                  ) : isSelected ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    a.key
                  )}
                </div>
                <div className="pt-0.5 text-sm sm:text-base">{a.text}</div>
              </button>
            );
          })}
        </div>
      </article>

      {showReview && (
        <div className="animate-fade-up mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-4 text-sm shadow-sm flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="grid gap-1">
            <span className="font-semibold text-blue-900">Richtige Lösung:</span>
            <div className="text-blue-800 space-y-1 mt-1">
              {correctAnswersList.map((a) => (
                <div key={a.key} className="font-medium">
                  <span className="font-bold">{a.key}:</span> {a.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="safe-bottom fixed inset-x-0 bottom-0 z-10 border-t bg-background/80 px-5 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <button
            onClick={() => {
              setIsReviewed(false);
              goTo(session.currentIndex - 1);
            }}
            disabled={session.currentIndex === 0 || showReview}
            className="rounded-2xl border bg-card px-4 py-3 text-sm font-medium disabled:opacity-40"
          >
            Zurück
          </button>
          <button
            onClick={handleNextClick}
            disabled={selected.length === 0}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {(!session.instantReview || isReviewed) ? (
              session.currentIndex < session.questions.length - 1 ? (
                <>Nächste Frage <ArrowRight className="h-4 w-4" /></>
              ) : (
                <>Ergebnis abgeben <Flag className="h-4 w-4" /></>
              )
            ) : (
              <>Überprüfen <Check className="h-4 w-4" /></>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
