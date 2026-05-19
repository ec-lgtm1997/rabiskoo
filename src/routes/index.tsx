import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BLOCKS } from "@/data/questions";
import { BookOpen, GraduationCap, Layers, Sparkles, Clock, Calendar, CheckCircle2, ChevronRight, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { getHistory, loadPastSession, clearHistory, type HistoryEntry } from "@/lib/quizStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const presetCounts = [5, 10, 20, 30, 40, 50];

  // Lädt den Verlauf beim Starten der Seite
  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleStartSimulation = (count: number) => {
    navigate({
      to: "/setup",
      search: { count: count.toString() },
    });
  };

  const handleReviewPastSession = (pastSession: any) => {
    loadPastSession(pastSession);
    navigate({ to: "/quiz" });
  };

  const handleClearHistory = () => {
    if (confirm("Möchtest du wirklich deinen gesamten Verlauf unwiderruflich löschen?")) {
      clearHistory();
      setHistory([]);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-display font-extrabold tracking-tight sm:text-5xl">
          Community Nurse <span className="text-primary">Lernportal</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Bereite dich optimal vor oder wirf einen Blick auf deine bisherigen Erfolge.
        </p>
      </div>

      {/* Das Zwei-Reiter-System (Tabs) */}
      <Tabs defaultValue="portal" className="mt-10">
        <TabsList className="grid w-full grid-cols-2 p-1 bg-accent/40 rounded-2xl h-12">
          <TabsTrigger value="portal" className="rounded-xl font-semibold text-sm py-2">
            <Layers className="h-4 w-4 mr-2" /> Lernportal
          </TabsTrigger>
          <TabsTrigger value="history" className="rounded-xl font-semibold text-sm py-2">
            <Clock className="h-4 w-4 mr-2" /> Historie ({history.length})
          </TabsTrigger>
        </TabsList>

        {/* REITER 1: LERNPORTAL */}
        <TabsContent value="portal" className="mt-6 focus-visible:outline-none focus-visible:ring-0">
          {/* Prüfungssimulation */}
          <section>
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" /> Prüfungssimulation
            </h2>
            
            <div className="mt-4 rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Individueller Fragenmix</h3>
                  <p className="text-xs text-muted-foreground">Bestimme die Fragenanzahl komplett frei.</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="text-5xl font-display font-black tracking-tight text-primary">
                  {questionCount}
                </span>
                <span className="ml-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Fragen
                </span>
              </div>

              <div className="mt-6 px-2">
                <Slider
                  value={[questionCount]}
                  onValueChange={(val) => setQuestionCount(val[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground font-medium px-1">
                  <span>1 Frage</span>
                  <span>50 Fragen</span>
                  <span>100 Fragen</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Schnellauswahl
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {presetCounts.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`rounded-xl border py-2.5 text-sm font-bold transition-all ${
                        questionCount === count
                          ? "border-primary bg-primary text-primary-foreground shadow-sm scale-[1.03]"
                          : "bg-background hover:bg-accent"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleStartSimulation(questionCount)}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Prüfung mit {questionCount} Fragen konfigurieren
              </button>
            </div>
          </section>

          {/* Themenblöcke */}
          <section className="mt-12">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" /> Themenblöcke lernen
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {BLOCKS.map((block) => {
                const displayId = block.id.replace("block", "");
                return (
                  <button
                    key={block.id}
                    onClick={() =>
                      navigate({
                        to: "/setup",
                        search: { blockId: block.id },
                      })
                    }
                    className="group rounded-3xl border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg group-hover:text-primary transition-colors leading-snug">
                        {block.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-muted-foreground bg-accent/60 px-3 py-1 rounded-full self-start tracking-wide">
                      Block {displayId}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        </TabsContent>

        {/* REITER 2: HISTORIE / VERLAUF */}
        <TabsContent value="history" className="mt-6 focus-visible:outline-none focus-visible:ring-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Dein Verlauf
            </h2>
            {history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="text-xs text-muted-foreground hover:text-red-600 inline-flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" /> Verlauf leeren
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="text-center rounded-3xl border border-dashed p-12 bg-card/40">
              <Calendar className="h-10 w-10 text-muted-foreground mx-auto opacity-40 mb-3" />
              <p className="font-medium text-muted-foreground">Noch keine Prüfungen absolviert.</p>
              <p className="text-xs text-muted-foreground mt-1">
                Sobald du einen Themenblock oder Mix abschließt, taucht er hier auf.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-2xl border bg-card p-4 shadow-sm flex items-center justify-between gap-4 transition-all hover:border-primary/30"
                >
                  <div className="space-y-1">
                    <span className="inline-flex items-center text-sm font-bold text-foreground">
                      {entry.modeText}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {entry.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {entry.time} Uhr
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="block font-display font-black text-lg leading-tight">
                        {entry.points} / {entry.maxPoints}
                      </span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        entry.percentage >= 60 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {entry.percentage}%
                      </span>
                    </div>

                    {/* Button um die exakte Session noch einmal anzuzeigen */}
                    <button
                      onClick={() => handleReviewPastSession(entry.session)}
                      title="Antworten ansehen"
                      className="rounded-xl border bg-background p-2 text-muted-foreground hover:text-primary hover:bg-accent transition-all"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}
