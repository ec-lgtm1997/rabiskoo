import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BLOCKS } from "@/data/questions";
import { BookOpen, GraduationCap, Layers } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-display font-extrabold tracking-tight sm:text-5xl">
          Community Nurse <span className="text-primary">Lernportal</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Bereite dich optimal auf deine Prüfung vor. Wähle einen Themenblock oder starte eine Simulation.
        </p>
      </div>

      {/* Sektion 1: Prüfungssimulation */}
      <section className="mt-12">
        <h2 className="text-xl font-display font-bold flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" /> Prüfungssimulation
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() =>
              navigate({
                to: "/setup",
                search: { count: "30" }, // Übergibt die Anzahl als String für die Validierung
              })
            }
            className="group rounded-3xl border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Kleine Prüfung</h3>
            <p className="mt-1 text-sm text-muted-foreground">30 zufällige Fragen aus allen Themenbereichen.</p>
          </button>

          <button
            onClick={() =>
              navigate({
                to: "/setup",
                search: { count: "60" }, // Übergibt die Anzahl als String für die Validierung
              })
            }
            className="group rounded-3xl border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Große Prüfung</h3>
            <p className="mt-1 text-sm text-muted-foreground">60 zufällige Fragen für eine intensive Simulation.</p>
          </button>
        </div>
      </section>

      {/* Sektion 2: Themenblöcke */}
      <section className="mt-12">
        <h2 className="text-xl font-display font-bold flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" /> Themenblöcke lernen
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {BLOCKS.map((block) => (
            <button
              key={block.id}
              onClick={() =>
                navigate({
                  to: "/setup",
                  search: { blockId: block.id }, // Übergibt die blockId sauber an die Route
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
              <p className="mt-2 text-xs font-medium text-muted-foreground bg-accent/50 px-2.5 py-1 rounded-full self-start">
                Block {block.id}
              </p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
