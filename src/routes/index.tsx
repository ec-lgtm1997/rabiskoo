import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BLOCKS } from "@/data/questions";
import { BookOpen, GraduationCap, Layers, Sparkles, Clock, Calendar, ChevronRight, Trash2, BarChart3, Heart, AlertCircle, Smile } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { getHistory, loadPastSession, clearHistory, getWrongQuestionIds, startQuiz, type HistoryEntry } from "@/lib/quizStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const presetCounts = [5, 10, 20, 30, 40, 50];

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  // Holt die Anzahl der aktuell ungelösten fehlerhaften Fragen
  const wrongQuestionsCount = useMemo(() => {
    return getWrongQuestionIds().length;
  }, [history]);

  const handleStartSimulation = (count: number) => {
    navigate({
      to: "/setup",
      search: { count: count.toString() },
    });
  };

  const handleStartErrorFocus = () => {
    if (wrongQuestionsCount === 0) return;
    // Öffnet die Setup-Seite mit einem speziellen Suchparameter oder startet direkt
    startQuiz({ type: "errors" }, true); // Fehler-Fokus startet im edlen Lernmodus (Feedback an)
    navigate({ to: "/quiz" });
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

  const chartEntries = useMemo(() => {
    return [...history].slice(0, 7).reverse();
  }, [history]);

  return (
    <main className="mx-auto max-w-2xl px-5 py-14 sm:py-20 antialiased">
      {/* Edler Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium tracking-wide border border-primary/10">
          <Heart className="h-3 w-3 fill-current" /> Premium Version for You
        </div>
        <h1 className="text-4xl font-display font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
          Community Nurse <span className="text-primary font-black">Lernportal</span>
        </h1>
        <p className="max-w-md mx-auto text-sm sm:text-base text-muted-foreground/90 font-medium leading-relaxed">
          Deine persönliche Wohlfühl-Oase für eine stressfreie und erfolgreiche Prüfungsvorbereitung.
        </p>
      </div>

      <Tabs defaultValue="portal" className="mt-12 sm:mt-16 animate-in fade-in duration-500">
        <TabsList className="grid w-full grid-cols-2 p-1.5 bg-secondary/50 border border-border/40 backdrop-blur-sm rounded-2xl h-14 shadow-inner">
          <TabsTrigger value="portal" className="rounded-xl font-bold text-sm py-2.5 transition-all data-[state=active]:shadow-md">
            <Layers className="h-4 w-4 mr-2 text-primary" /> Lernportal
          </TabsTrigger>
          <TabsTrigger value="history" className="rounded-xl font-bold text-sm py-2.5 transition-all data-[state=active]:shadow-md">
            <Clock className="h-4 w-4 mr-2 text-primary" /> Historie ({history.length})
          </TabsTrigger>
        </TabsList>

        {/* REITER 1: LERNPORTAL */}
        <TabsContent value="portal" className="mt-8 space-y-12 focus-visible:outline-none focus-visible:ring-0">
          
          {/* NEU: SEKTION - DER FEHLER-FOKUS */}
          <section className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-display font-bold flex items-center gap-2 px-1 mb-4">
              <AlertCircle className="h-5 w-5 text-red-500" /> Gezieltes Fokus-Training
            </h2>
            
            <div className={`rounded-[2.5rem] border p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
              wrongQuestionsCount > 0 
                ? "bg-gradient-to-br from-red-500/[0.02] via-card to-card border-red-500/20 shadow-xl shadow-red-500/[0.01]" 
                : "bg-card border-border/40 opacity-75 shadow-sm"
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-foreground tracking-tight flex items-center gap-2">
                    Meine Problemzonen trainieren
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium max-w-sm leading-relaxed">
                    Das System filtert automatisch alle Fragen heraus, die du in der Vergangenheit falsch beantwortet hast, und übt sie mit dir, bis sie sitzen.
                  </p>
                </div>
                <div className={`h-14 w-14 shrink-0 rounded-2xl flex flex-col items-center justify-center font-display transition-transform duration-300 ${
                  wrongQuestionsCount > 0 
                    ? "bg-red-50 text-red-600 border border-red-200/50 shadow-sm scale-105 animate-pulse" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  <span className="text-xl font-black leading-none">{wrongQuestionsCount}</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">Fragen</span>
                </div>
              </div>

              {wrongQuestionsCount > 0 ? (
                <button
                  onClick={handleStartErrorFocus}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 font-bold text-white shadow-xl shadow-red-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-red-500/20 hover:brightness-105 active:translate-y-0"
                >
                  Fehler-Fokus starten <ChevronRight className="h-4 w-4 stroke-[3]" />
                </button>
              ) : (
                <div className="mt-6 p-4 rounded-2xl bg-green-50/50 border border-green-100 flex items-center gap-2.5 text-xs font-semibold text-green-700">
                  <Smile className="h-4 w-4 shrink-0" /> Keine ungelösten Fehler vorhanden! Du machst das fantastisch.
                </div>
              )}
            </div>
          </section>

          {/* Prüfungssimulation */}
          <section className="animate-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-xl font-display font-bold flex items-center gap-2 px-1 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" /> Flexibler Fragenmix
            </h2>
            <div className="rounded-[2.5rem] border border-border/40 bg-card p-6 shadow-xl shadow-foreground/[0.02] sm:p-10 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground tracking-tight">Zufällige Zusammenstellung</h3>
                  <p className="text-xs text-muted-foreground font-medium">Bestimme die Fragenanzahl komplett frei über den Regler.</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <span className="text-6xl font-display font-black tracking-tighter bg-gradient-to-b from-primary to-primary/80 bg-clip-text text-transparent">
                  {questionCount}
                </span>
                <span className="ml-2.5 text-xs font-bold text-muted-foreground/80 uppercase tracking-widest block sm:inline mt-1">
                  Fragen ausgewählt
                </span>
              </div>

              <div className="mt-8 px-2">
                <Slider
                  value={[questionCount]}
                  onValueChange={(val) => setQuestionCount(val[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="py-4 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground/70 font-semibold tracking-wide px-1">
                  <span>1 Frage</span>
                  <span>50 Fragen</span>
                  <span>100 Fragen</span>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-3.5 px-0.5">
                  Schnellauswahl
                </p>
                <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
                  {presetCounts.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`rounded-2xl border-2 py-3 text-sm font-extrabold transition-all duration-300 ${
                        questionCount === count
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.05]"
                          : "border-border/50 bg-background/50 hover:bg-accent hover:border-border"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleStartSimulation(questionCount)}
                className="mt-10 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4.5 font-bold text-primary-foreground shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/20 hover:brightness-105 active:translate-y-0 active:scale-[0.99]"
              >
                Mix konfigurieren <ChevronRight className="h-4 w-4 stroke-[3]" />
              </button>
            </div>
          </section>

          {/* Themenblöcke */}
          <section className="space-y-5 animate-in slide-in-from-bottom-6 duration-500">
            <h2 className="text-xl font-display font-bold flex items-center gap-2 px-1">
              <Layers className="h-5 w-5 text-primary" /> Themenblöcke lernen
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
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
                    className="group rounded-[2rem] border border-border/40 bg-card p-6 text-left shadow-lg shadow-foreground/[0.01] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.02] flex flex-col justify-between min-h-[170px]"
                  >
                    <div className="space-y-4">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner transition-transform duration-300 group-hover:scale-110">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight">
                        {block.title}
                      </h3>
                    </div>
                    <p className="mt-5 text-[10px] font-extrabold text-primary bg-primary/5 px-3 py-1.5 rounded-full self-start tracking-widest uppercase border border-primary/10">
                      Block {displayId}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        </TabsContent>

        {/* REITER 2: HISTORIE */}
        <TabsContent value="history" className="mt-8 space-y-6 focus-visible:outline-none focus-visible:ring-0">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Bisherige Versuche
            </h2>
            {history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="text-xs font-bold text-muted-foreground/70 hover:text-red-500 inline-flex items-center gap-1.5 transition-colors duration-200"
              >
                <Trash2 className="h-3.5 w-3.5" /> Verlauf leeren
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="text-center rounded-[2rem] border border-dashed border-border/80 p-14 bg-card/30 backdrop-blur-sm">
              <Calendar className="h-10 w-10 text-muted-foreground mx-auto opacity-30 mb-3.5" />
              <p className="font-bold text-muted-foreground text-sm">Noch ein unbeschriebenes Blatt!</p>
              <p className="text-xs text-muted-foreground/80 mt-1 max-w-xs mx-auto leading-relaxed">
                Sobald du ein Quiz erfolgreich beendest, verewigen wir deine Ergebnisse hier für dich.
              </p>
            </div>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              {/* Ästhetische Diagramm-Card */}
              <div className="rounded-[2rem] border border-border/40 bg-card p-6 shadow-xl shadow-foreground/[0.01] relative overflow-hidden">
                <h3 className="text-xs font-bold flex items-center gap-2 text-muted-foreground/80 uppercase tracking-widest mb-8">
                  <BarChart3 className="h-4 w-4 text-primary" /> Deine Lernkurve
                </h3>
                
                <div className="relative h-44 border-b border-border/50 pb-2 px-4 flex items-end justify-between gap-1">
                  <div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between pointer-events-none pb-2 px-1 opacity-20">
                    <div className="w-full border-t border-dashed border-foreground text-[8px] font-bold tracking-wider text-muted-foreground pt-0.5">100%</div>
                    <div className="w-full border-t border-dashed border-foreground text-[8px] font-bold tracking-wider text-muted-foreground pt-0.5">75%</div>
                    <div className="w-full border-t border-dashed border-foreground text-[8px] font-bold tracking-wider text-muted-foreground pt-0.5">50%</div>
                    <div className="w-full border-t border-dashed border-foreground text-[8px] font-bold tracking-wider text-muted-foreground pt-0.5">25%</div>
                  </div>

                  {chartEntries.map((entry) => {
                    const shortDate = entry.date.split(".")[0] + "." + entry.date.split(".")[1];
                    const isPassed = entry.percentage >= 60;

                    return (
                      <div key={entry.id} className="flex flex-1 flex-col items-center group relative h-full justify-end z-10">
                        <div className="absolute bottom-full mb-3.5 hidden group-hover:flex flex-col items-center pointer-events-none z-30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-1">
                          <div className="bg-background/95 backdrop-blur-md text-[11px] font-semibold rounded-2xl px-3 py-2.5 shadow-xl border border-border/60 text-center space-y-0.5">
                            <span className="font-black text-sm block text-primary">{entry.percentage}%</span>
                            <span className="text-[10px] text-muted-foreground block max-w-[120px] truncate">{entry.modeText}</span>
                          </div>
                          <div className="w-2 h-2 bg-background border-r border-b border-border/60 rotate-45 -mt-1 shadow-sm" />
                        </div>

                        <span className="text-[9px] font-extrabold text-muted-foreground/60 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {entry.percentage}%
                        </span>

                        <div 
                          style={{ height: `${Math.max(8, entry.percentage)}%` }}
                          className={`w-2 rounded-full transition-all duration-300 ease-out group-hover:scale-y-[1.03] group-hover:w-3 ${
                            isPassed 
                              ? "bg-gradient-to-t from-primary/40 to-primary shadow-[0_4px_12px_rgba(var(--primary),0.2)]" 
                              : "bg-gradient-to-t from-red-400/30 to-red-500 shadow-[0_4px_12px_rgba(239,68,68,0.15)]"
                          }`}
                        />
                        
                        <span className="absolute top-full mt-2.5 text-[10px] font-bold text-muted-foreground/60 tracking-tight">
                          {shortDate}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="h-4" />
              </div>

              {/* Die Verlaufsliste */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest px-1">
                  Verlaufschronik
                </h3>
                {history.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-2xl border border-border/40 bg-card p-4 shadow-sm flex items-center justify-between gap-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="space-y-1">
                      <span className="inline-flex items-center text-sm font-bold text-foreground/90 tracking-tight">
                        {entry.modeText}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground/70">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-primary/60" /> {entry.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-primary/60" /> {entry.time} Uhr
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right space-y-0.5">
                        <span className="block font-display font-black text-base text-foreground leading-none">
                          {entry.points} / {entry.maxPoints}
                        </span>
                        <span className={`inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          entry.percentage >= 60 ? "bg-green-50 text-green-700 border border-green-200/50" : "bg-red-50 text-red-700 border border-red-200/50"
                        }`}>
                          {entry.percentage}%
                        </span>
                      </div>

                      <button
                        onClick={() => handleReviewPastSession(entry.session)}
                        className="rounded-xl border border-border/60 bg-background/50 p-2.5 text-muted-foreground/80 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                      >
                        <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}
