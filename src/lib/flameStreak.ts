import { toast } from "sonner";

// Persistente, vor dem User versteckte Flammen-Zählung
type StreakState = {
  flames: number;       // gesammelte Flammen insgesamt (versteckt)
  streak: number;       // aktuelle Serie richtig hintereinander
  pendingIce: boolean;  // letzte Antwort war falsch (Vorwarnung)
  announced: boolean;   // wurde die "ab jetzt sammelst du Flammen"-Nachricht schon gezeigt?
  highScore: number;    // NEU: Allzeit-Bestwert der Flammen
};

const KEY = "flame_streak_v1";

function load(): StreakState {
  if (typeof window === "undefined") {
    return { flames: 0, streak: 0, pendingIce: false, announced: false, highScore: 0 };
  }
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { flames: 0, streak: 0, pendingIce: false, announced: false, highScore: 0 };
    const parsed = JSON.parse(raw);
    return {
      flames: parsed.flames ?? 0,
      streak: parsed.streak ?? 0,
      pendingIce: parsed.pendingIce ?? false,
      announced: parsed.announced ?? (parsed.flames ?? 0) > 0,
      highScore: parsed.highScore ?? parsed.flames ?? 0, // Fallback auf aktuelle Flammen
    };
  } catch {
    return { flames: 0, streak: 0, pendingIce: false, announced: false, highScore: 0 };
  }
}

function save(s: StreakState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function getFlamesCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return parsed.flames ?? 0;
  } catch {
    return 0;
  }
}

// NEU: Holt den Allzeit-Bestwert ab
export function getFlamesHighScore(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return parsed.highScore ?? parsed.flames ?? 0;
  } catch {
    return 0;
  }
}

const handled = new Set<string>();

export function registerAnswer(questionUid: string, fullyCorrect: boolean) {
  if (handled.has(questionUid)) return;
  handled.add(questionUid);

  const s = load();

  if (fullyCorrect) {
    s.streak += 1;
    s.pendingIce = false;

    if (s.streak === 3 && !s.announced) {
      s.flames += 3;
      s.announced = true;
      toast("Ab jetzt sammelst du Flammen Askim 🔥", {
        description: "3x 🔥",
        duration: 4000,
      });
    } else if (s.streak === 3 && s.announced) {
      s.flames += 3;
      toast("+3 🔥", { duration: 2000 });
    } else if (s.streak > 3) {
      s.flames += 1;
      toast("+1 🔥", { duration: 1800 });
    }

    // NEU: Prüfen und aktualisieren des Highscores
    if (s.flames > s.highScore) {
      s.highScore = s.flames;
    }
  } else {
    if (s.pendingIce) {
      s.flames = 0;
      s.streak = 0;
      s.pendingIce = false;
      s.announced = false;
      toast("❄️❄️ Serie verloren", {
        description: "Die Flammen sind erloschen.",
        duration: 2500,
      });
    } else {
      s.pendingIce = true;
      s.streak = 0;
      toast("❄️ Vorsicht!", {
        description: "Noch ein Fehler und die Flammen erlöschen.",
        duration: 2500,
      });
    }
  }

  save(s);
}
