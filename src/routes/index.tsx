import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BLOCKS } from "@/data/questions";
import { BookOpen, GraduationCap, Layers, Sparkles } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  
  // Zustand für den frei wählbaren Slider (Standard: 30 Fragen)
  const [questionCount, setQuestionCount] = useState<number>(30);

  // Vordefinierte Schnellauswahl-Größen
  const presetCounts = [5, 10, 20, 30, 40, 50];

  const handleStartSimulation = (count: number) => {
    navigate({
      to: "/setup",
      search: { count: count.toString() },
    });
  };

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-display font-extrabold tracking-tight sm:text-5xl">
          Community Nurse <span className="text-primary">Lernportal</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Bereite dich optimal auf deine Prüfung vor. Konfiguriere deinen Mix oder lerne gezielte Themen.
        </p>
      </div>

      {/* Sektion 1: Neue, zentralisierte Prüfungskonfiguration */}
      <section className="mt-12">
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
              <p className="text-xs text-muted-foreground">Bestimme, wie viele zufällige Fragen du beantworten möchtest.</p>
            </div>
          </div>

          {/* Große Anzeige der aktuell gewählten Fragenanzahl */}
          <div className="mt-6 text-center">
            <span className="text-5xl font-display font-black tracking-tight text-primary">
              {questionCount}
            </span>
            <span className="ml-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Fragen
            </span>
          </div>

          {/* Der neu designte Slider */}
          <div className="mt-6 px-2">
            <Slider
              value={[questionCount]}
              onValueChange={(val) => setQuestionCount(val[0])}
              min={1}
              max={100} // Erlaubt freie Auswahl bis zu 100 Fragen
              step={1}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground font-medium px-1">
              <span>1 Frage</span>
              <span>50 Fragen</span>
              <span>100 Fragen</span>
            </div>
          </div>

          {/* Schnellauswahl-Buttons (5, 10, 20, 30, 40, 50) */}
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
                      : "bg-background hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Großer "Konfiguration testen / Starten"-Button */}
          <button
            onClick={() => handleStartSimulation(questionCount)}
            className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            Prüfung mit {questionCount} Fragen konfigurieren
          </button>
        </div>
      </section>

      {/* Sektion 2: Themenblöcke */}
      <section className="mt-12">
        <h2 className="text-xl font-display font-bold flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" /> Themenblöcke lernen
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {BLOCKS.map((block) => {
            // Bereinigt die ID (z.B. von "block1" zu "1")
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
                {/* WUNSCH 2: Zeigt jetzt sauber "Block 1", "Block 2" statt "Block block1" an */}
                <p className="mt-4 text-xs font-semibold text-muted-foreground bg-accent/60 px-3 py-1 rounded-full self-start tracking-wide">
                  Block {displayId}
                </p>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
