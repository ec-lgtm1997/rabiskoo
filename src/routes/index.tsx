import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BLOCKS } from "@/data/questions";
import { THEORY_DATA } from "@/data/theory";
import { BookOpen, GraduationCap, Layers, Sparkles, Clock, Calendar, ChevronRight, Trash2, BarChart3, Heart, AlertCircle, Smile, Search, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { getHistory, loadPastSession, clearHistory, getWrongQuestionIds, startQuiz, type HistoryEntry } from "@/lib/quizStore";
import { getFlamesCount, getFlamesHighScore } from "@/lib/flameStreak";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string>("block1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedBlocks, setExpandedBlocks] = useState<Record<string, boolean>>({ block1: true });
  const presetCounts = [5, 10, 20, 30, 40, 50];

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  // Holt die Anzahl der aktuell ungelösten fehlerhaften Fragen
  const wrongQuestionsCount = useMemo(() => {
    return getWrongQuestionIds().length;
  }, [history]);

  const flamesCount = useMemo(() => {
    if (typeof window === "undefined") return 0;
    return getFlamesCount();
  }, [history, searchQuery, selectedBlockId]);
  
  // NEU HINZUFÜGEN:
  const flamesHighScore = useMemo(() => {
    if (typeof window === "undefined") return 0;
    return getFlamesHighScore();
  }, [history, searchQuery, selectedBlockId]);

  const handleStartSimulation = (count: number) => {
    navigate({
      to: "/setup",
      search: { count: count.toString() },
    });
  };

  const handleStartErrorFocus = () => {
    if (wrongQuestionsCount === 0) return;
    startQuiz({ type: "errors" }, true); // Fehler-Fokus startet im Übungsmodus
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

  // Funktion zum Umschalten der Block-Ausklappung
  const toggleBlockExpand = (blockId: string) => {
    setExpandedBlocks(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };

  // Extrahiert dynamisch alle Unterüberschriften eines Blocks für die Navigation
  const getSubChapters = (content: string) => {
    if (!content) return [];
    return content.split("\n")
      .map((line, idx) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("### ")) {
          return { id: `heading-${idx}`, text: trimmed.replace("### ", ""), type: "main" };
        }
        if (trimmed.startsWith("#### ")) {
          return { id: `heading-${idx}`, text: trimmed.replace("#### ", ""), type: "sub" };
        }
        return null;
      })
      .filter((item): item is { id: string; text: string; type: string } => item !== null);
  };

  // Scrollt sanft zur ausgewählten Überschrift auf der rechten Seite
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intelligente, globale Suche über alle Blöcke und Inhalte
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const results: { blockId: string; title: string; type: 'title' | 'content'; snippet: string }[] = [];

    Object.values(THEORY_DATA).forEach((block) => {
      if (block.title.toLowerCase().includes(query)) {
        results.push({
          blockId: block.id,
          title: block.title,
          type: 'title',
          snippet: "Kapitelüberschrift enthält Suchbegriff"
        });
      }

      const lines = block.content.split("\n");
      lines.forEach((line) => {
        const cleanLine = line.replace(/[\*\#]/g, "").trim();
        if (cleanLine.toLowerCase().includes(query)) {
          if (!results.some(r => r.snippet === cleanLine)) {
            results.push({
              blockId: block.id,
              title: block.title,
              type: 'content',
              snippet: cleanLine
            });
          }
        }
      });
    });

    return results;
  }, [searchQuery]);

  // Holt die Daten des aktuell ausgewählten Blocks für den Lernbereich
  const currentBlockTheory = useMemo(() => {
    return THEORY_DATA[selectedBlockId as keyof typeof THEORY_DATA];
  }, [selectedBlockId]);

  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:py-20 antialiased">
      {/* Edler Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium tracking-wide border border-primary/10">
          <Heart className="h-3 w-3 fill-current" /> Für die schönste Frau der Welt
        </div>
        <h1 className="text-4xl font-display font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
          Community Nurse <span className="text-primary font-black">Lernportal</span>
        </h1>
        <p className="max-w-md mx-auto text-sm sm:text-base text-muted-foreground/90 font-medium leading-relaxed">
          Deine persönliche Lern- und Quiz App
        </p>
      </div>

      <Tabs defaultValue="lernen" className="mt-12 sm:mt-16 animate-in fade-in duration-500">
        <TabsList className="grid w-full grid-cols-3 p-1.5 bg-secondary/50 border border-border/40 backdrop-blur-sm rounded-2xl h-14 shadow-inner">
          <TabsTrigger value="lernen" className="rounded-xl font-bold text-sm py-2.5 transition-all data-[state=active]:shadow-md">
            <BookOpen className="h-4 w-4 mr-2 text-primary" /> Lernbereich
          </TabsTrigger>
          <TabsTrigger value="portal" className="rounded-xl font-bold text-sm py-2.5 transition-all data-[state=active]:shadow-md">
            <Layers className="h-4 w-4 mr-2 text-primary" /> Prüfungsportal
          </TabsTrigger>
          <TabsTrigger value="history" className="rounded-xl font-bold text-sm py-2.5 transition-all data-[state=active]:shadow-md">
            <Clock className="h-4 w-4 mr-2 text-primary" /> Historie ({history.length})
          </TabsTrigger>
        </TabsList>

        {/* REITER 1: LERNBEREICH */}
        <TabsContent value="lernen" className="mt-8 focus-visible:outline-none focus-visible:ring-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Linkes Menü: Suche & Inhaltsverzeichnis */}
            <div className="md:col-span-1 space-y-4 md:sticky md:top-6 max-h-[80vh] overflow-y-auto pr-1 custom-scrollbar">
              
              {/* Das Intelligente Suchfeld */}
              <div className="bg-card p-4 rounded-[1.5rem] border border-border/40 shadow-sm relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-3 h-4 w-4 text-muted-foreground/60" />
                  <input
                    type="text"
                    placeholder="Suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-8 py-2 bg-secondary/40 border border-border/60 rounded-xl text-xs sm:text-sm font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 p-1 rounded-lg text-muted-foreground/60 hover:bg-secondary"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Menü-Steuerung: Normales Verzeichnis vs. Suchergebnisse */}
              <div className="bg-card p-4 rounded-[2rem] border border-border/40 shadow-sm space-y-2">
                {searchQuery.trim() === "" ? (
                  <>
                    <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest px-2 mb-1">
                      Themenübersicht
                    </p>
                    <div className="space-y-2">
                      {Object.values(THEORY_DATA).map((block) => {
                        const isSelected = selectedBlockId === block.id;
                        const isExpanded = !!expandedBlocks[block.id];
                        const subChapters = getSubChapters(block.content);

                        return (
                          <div key={block.id} className="rounded-xl overflow-hidden transition-all">
                            {/* Hauptblock-Button */}
                            <div className="flex items-center justify-between w-full group">
                              <button
                                onClick={() => {
                                  setSelectedBlockId(block.id);
                                  if (!isExpanded) toggleBlockExpand(block.id);
                                }}
                                className={`flex-1 text-left px-3 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                                  isSelected
                                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10 pl-4"
                                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                                }`}
                              >
                                {block.title}
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleBlockExpand(block.id);
                                }}
                                className={`p-2 rounded-xl text-muted-foreground/70 hover:bg-secondary/60 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>

                            {/* Unterkapitel (Akkordeon) */}
                            {isExpanded && subChapters.length > 0 && (
                              <div className="mt-1.5 pl-3 border-l border-border/60 ml-4 space-y-1 py-1 animate-in fade-in slide-in-from-top-1 duration-200">
                                {subChapters.map((sub) => (
                                  <button
                                    key={sub.id}
                                    onClick={() => {
                                      if (!isSelected) {
                                        setSelectedBlockId(block.id);
                                        // Kleiner Timeout, damit die rechte Seite erst rendert, bevor wir scrollen
                                        setTimeout(() => scrollToHeading(sub.id), 50);
                                      } else {
                                        scrollToHeading(sub.id);
                                      }
                                    }}
                                    className={`w-full text-left px-2 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold block truncate transition-colors ${
                                      sub.type === "main" 
                                        ? "text-foreground/80 hover:text-primary font-bold" 
                                        : "text-muted-foreground/80 hover:text-primary pl-4"
                                    }`}
                                  >
                                    {sub.text}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest px-2 mb-3">
                      Suchtreffer ({searchResults.length})
                    </p>
                    {searchResults.length === 0 ? (
                      <p className="text-xs text-muted-foreground p-3 text-center font-medium">
                        Keine genauen Textstellen gefunden.
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {searchResults.map((res, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedBlockId(res.blockId);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl border border-transparent transition-all hover:bg-secondary/70 ${
                              selectedBlockId === res.blockId ? "bg-secondary/40 border-border/60" : ""
                            }`}
                          >
                            <span className="block text-[10px] font-extrabold text-primary uppercase tracking-wider mb-0.5">
                              {res.title}
                            </span>
                            <span className="text-xs font-bold text-foreground block truncate">
                              {res.snippet}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Rechte Anzeige: Strukturierter & Schön formulierter Lehrtext */}
            <div className="md:col-span-2 bg-card p-6 sm:p-10 rounded-[2.5rem] border border-border/40 shadow-xl shadow-foreground/[0.01] relative overflow-hidden max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.02] rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
                Originaler Lehrtext
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-black tracking-tight text-foreground border-b pb-4 mb-6">
                {currentBlockTheory?.title}
              </h2>
              
              {/* Intelligenter Parser für Überschriften, Listen und Inline-Fettung */}
              <div className="space-y-6 text-foreground/90 text-sm sm:text-base leading-relaxed下">
                {(() => {
                  const renderInlineMarkdown = (text: string) => {
                    if (!text) return "";
                    
                    let elements: any[] = [];
                    const parts = text.split("**");
                    
                    parts.forEach((part, index) => {
                      const isBold = index % 2 === 1;
                      const query = searchQuery.trim().toLowerCase();

                      if (query && part.toLowerCase().includes(query)) {
                        const regex = new RegExp(`(${query})`, "gi");
                        const subParts = part.split(regex);
                        
                        const highlighted = subParts.map((sub, subIdx) => {
                          if (sub.toLowerCase() === query) {
                            return <mark key={subIdx} className="bg-yellow-100 text-yellow-900 rounded px-0.5 font-bold">{sub}</mark>;
                          }
                          return sub;
                        });

                        elements.push(isBold ? <strong key={index} className="font-bold text-foreground mx-px">{highlighted}</strong> : highlighted);
                      } else {
                        elements.push(isBold ? <strong key={index} className="font-bold text-foreground mx-px">{part}</strong> : part);
                      }
                    });

                    return elements;
                  };
              
                  return currentBlockTheory?.content ? currentBlockTheory.content.split("\n").map((line, lineIdx) => {
                    if (line === undefined || line === null) return null;
                    const trimmed = line.trim();
                    
                    if (!trimmed) return null;
                    
                    // 1. Hauptüberschriften (###) - ID hinzugefügt für Anchor-Scroll
                    if (trimmed.startsWith("### ")) {
                      return (
                        <h3 id={`heading-${lineIdx}`} key={lineIdx} className="text-lg sm:text-xl font-display font-black text-primary tracking-tight pt-4 mt-6 border-l-4 border-primary pl-3 scroll-mt-6">
                          {trimmed.replace("### ", "")}
                        </h3>
                      );
                    }
                    
                    // 2. Zwischenüberschriften (####) - ID hinzugefügt für Anchor-Scroll
                    if (trimmed.startsWith("#### ")) {
                      return (
                        <h4 id={`heading-${lineIdx}`} key={lineIdx} className="text-base font-bold text-foreground tracking-tight pt-2 mt-4 scroll-mt-6">
                          {trimmed.replace("#### ", "")}
                        </h4>
                      );
                    }
              
                    // 3. Unter-Zwischenüberschriften (##### oder ######)
                    if (trimmed.startsWith("##### ") || trimmed.startsWith("###### ")) {
                      return (
                        <h5 key={lineIdx} className="text-sm font-extrabold text-muted-foreground uppercase tracking-wider pt-2">
                          {trimmed.replace(/^#+\s/, "")}
                        </h5>
                      );
                    }
                    
                    // 4. Aufzählungspunkte (* oder -)
                    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                      const cleanText = trimmed.replace(/^[\*\-]\s/, "");
                      return (
                        <div key={lineIdx} className="flex items-start gap-2.5 my-1.5 pl-4 transition-all duration-200 hover:translate-x-0.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                          <p className="text-muted-foreground">
                            {renderInlineMarkdown(cleanText)}
                          </p>
                        </div>
                      );
                    }
              
                    // 5. Trennlinien (---)
                    if (trimmed === "---") {
                      return <hr key={lineIdx} className="my-8 border-border/60" />;
                    }
              
                    // 6. Tabellen-Zeilen (falls vorhanden)
                    if (trimmed.startsWith("|")) {
                      if (trimmed.includes("---")) return null;
                      
                      const cells = trimmed.split("|").map(c => c.trim()).filter(Boolean);
                      if (cells.length === 0) return null;
                      
                      return (
                        <div key={lineIdx} className="grid grid-cols-2 gap-4 bg-secondary/30 p-3 rounded-xl text-xs sm:text-sm font-medium border border-border/20 my-1">
                          <div className="text-muted-foreground">
                            {renderInlineMarkdown(cells[0] || "")}
                          </div>
                          <div className="font-bold text-foreground">
                            {renderInlineMarkdown(cells[1] || cells[2] || "")}
                          </div>
                        </div>
                      );
                    }
                    
                    // 8. Normaler Fließtext
                    return (
                      <p key={lineIdx} className="text-muted-foreground/90 font-medium pl-1">
                        {renderInlineMarkdown(trimmed)}
                      </p>
                    );
                  }) : null;
                })()}
              </div>
            </div>

          </div>
        </TabsContent>

        {/* REITER 2: PRÜFUNGSPORTAL */}
        <TabsContent value="portal" className="mx-auto max-w-2xl mt-8 space-y-12 focus-visible:outline-none focus-visible:ring-0">
          {flamesCount > 0 && (
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 shadow-sm animate-in fade-in zoom-in duration-300">
                <span className="text-lg font-black text-orange-600 tracking-tight">
                  {flamesCount}🔥
                </span>
              </div>
            </div>
          )}
          {/* Flexibler Fragenmix */}
          <section className="animate-in slide-in-from-bottom-4 duration-500">
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
          <section className="space-y-5 animate-in slide-in-from-bottom-5 duration-500">
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

  {/* REITER 3: HISTORIE */}
  <TabsContent value="history" className="mx-auto max-w-2xl mt-8 space-y-8 focus-visible:outline-none focus-visible:ring-0">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
      <div className="space-y-1">
        <h2 className="text-xl font-display font-bold flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" /> Bisherige Versuche
        </h2>
        {flamesHighScore > 0 && (
          <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <span>🏆 Persönlicher Flammen-Rekord:</span>
            <span className="font-bold text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
              {flamesHighScore} 🔥
            </span>
          </p>
        )}
      </div>
      {history.length > 0 && (
        <button
          onClick={handleClearHistory}
          className="text-xs font-bold text-muted-foreground/70 hover:text-red-500 inline-flex items-center gap-1.5 transition-colors duration-200 self-start sm:self-center"
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
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
              {/* FEHLER-FOKUS */}
              <div className={`rounded-[2.5rem] border p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
                wrongQuestionsCount > 0 
                  ? "bg-gradient-to-br from-red-500/[0.02] via-card to-card border-red-500/20 shadow-xl shadow-red-500/[0.01]" 
                  : "bg-card border-border/40 opacity-75 shadow-sm"
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-lg text-foreground tracking-tight flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" /> Fehler trainieren
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
