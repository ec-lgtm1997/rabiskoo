import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { startQuiz } from "@/lib/quizStore";
import { BLOCKS } from "@/data/questions";
import { ArrowLeft, BookOpen, GraduationCap, Play } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/setup")({
  component: SetupPage,
});

function SetupPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/setup" }) as { blockId?: string; count?: string };
  
  // Neuer Zustand für die Modus-Auswahl (Lernmodus vs. Prüfungsmodus)
  const [instantReview, setInstantReview] = useState(true);

  const blockId = search.blockId;
  const count = search.count ? parseInt(search.count, 10) : undefined;

  const block = BLOCKS.find((b) => b.id === blockId);

  const handleStart = () => {
    if (blockId) {
      startQuiz({ type: "block", blockId }, instantReview);
    } else if (count) {
      startQuiz({ type: "count", count }, instantReview);
    }
    navigate({ to: "/quiz" });
  };

  return (
    <main className="mx-auto max-w-xl px-5 py-12">
      <button
        onClick={() => navigate({ to: "/" })}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Zurück zur Übersicht
      </button>

      <div className="mt-8 rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-display font-bold sm:text-3xl">Prüfungskonfiguration</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {block
            ? `Du startest den Themenblock: ${block.title}.`
            : `Du startest einen Zufallsmix mit ${count} Fragen.`}
        </p>

        {/* NEU: Modus-Auswahl Box */}
        <div className="mt-8 rounded-2xl border bg-accent/20 p-4 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="mode-switch" className="text-base font-semibold flex items-center gap-2">
                {instantReview ? (
                  <>
                    <BookOpen className="h-4 w-4 text-primary" /> Lernmodus aktiv
                  </>
                ) : (
                  <>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" /> Prüfungsmodus aktiv
                  </>
                )}
              </Label>
              <p className="text-xs text-muted-foreground">
                {instantReview
                  ? "Zeigt nach jeder Frage sofort die richtige Lösung, die Punkte und eine Info-Box an."
                  : "Simuliert eine echte Prüfung. Die Auflösung siehst du erst ganz am Ende bei den Ergebnissen."}
              </p>
            </div>
            <Switch
              id="mode-switch"
              checked={instantReview}
              onCheckedChange={setInstantReview}
            />
          </div>
        </div>

        <button
          onClick={handleStart}
          className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Jetzt starten <Play className="h-4 w-4 fill-current" />
        </button>
      </div>
    </main>
  );
}
