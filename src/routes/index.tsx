import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Target, BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Community Nurse – Prüfungs-Simulation" },
      { name: "description", content: "Interaktive Multiple-Choice-Prüfungssimulation für Community Nurse – übe gezielt nach Themenblöcken oder im Prüfungsmodus." },
      { property: "og:title", content: "Community Nurse – Prüfungs-Simulation" },
      { property: "og:description", content: "Übe für deine Community-Nurse-Prüfung mit Multiple-Choice-Fragen und detaillierter Auswertung." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:pt-20">
      <div className="animate-fade-up flex items-center gap-2 text-sm font-medium text-primary">
        <Sparkles className="h-4 w-4" />
        Lernen mit Plan
      </div>
      <h1 className="animate-fade-up mt-3 text-4xl font-semibold sm:text-6xl">
        Community Nurse
      </h1>
      <p className="animate-fade-up mt-4 max-w-xl text-lg text-muted-foreground">
        Deine Prüfungs-Simulation für die extramurale Pflege. Übe gezielt nach Themenblock
        oder simuliere eine komplette Prüfung mit Auswertung und Note.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          to="/setup"
          search={{ mode: "exam" }}
          className="group relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <Target className="h-7 w-7 opacity-90" />
          <div className="mt-6 text-xl font-display font-semibold">Prüfungs-Modus</div>
          <div className="mt-1 text-sm opacity-90">Wähle die Anzahl Fragen und lege los.</div>
        </Link>

        <Link
          to="/setup"
          search={{ mode: "block" }}
          className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <BookOpen className="h-7 w-7 text-warm" />
          <div className="mt-6 text-xl font-display font-semibold">Themenblock üben</div>
          <div className="mt-1 text-sm text-muted-foreground">Konzentriere dich auf einen der 7 Blöcke.</div>
        </Link>
      </div>

      <section className="mt-14 rounded-3xl border bg-card/60 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <GraduationCap className="h-4 w-4" /> So funktioniert's
        </div>
        <ol className="mt-4 space-y-3 text-sm sm:text-base">
          <li><span className="font-semibold text-primary">1.</span> Wähle Prüfungs-Modus oder einen Themenblock.</li>
          <li><span className="font-semibold text-primary">2.</span> Beantworte Multiple-Choice-Fragen – eine oder mehrere Antworten können richtig sein.</li>
          <li><span className="font-semibold text-primary">3.</span> Erhalte eine detaillierte Auswertung mit Punkten, Prozent und Schulnote.</li>
        </ol>
        <p className="mt-4 rounded-2xl bg-accent/40 p-4 text-sm text-accent-foreground">
          Teilpunkte: Bei Mehrfach-Antworten zählt jede richtige Markierung. Falsche Klicks ziehen Punkte ab (nie unter 0).
        </p>
      </section>
    </main>
  );
}
