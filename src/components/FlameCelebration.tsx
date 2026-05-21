import { useEffect, useState } from "react";

type Particle = {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  rotate: number;
};

const EMOJIS = ["❤️", "💖", "💕", "💗", "💘", "💞", "💓", "💝", "💄", "💋", "👄", "💅", "✨", "🌹"];

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 2.5 + Math.random() * 2.5,
    size: 18 + Math.random() * 38,
    drift: (Math.random() - 0.5) * 200,
    rotate: (Math.random() - 0.5) * 720,
  }));
}

export function FlameCelebration() {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handler = () => {
      setParticles(makeParticles(220));
      setActive(true);
      window.setTimeout(() => setActive(false), 6000);
    };
    window.addEventListener("flame-milestone-50", handler);
    return () => window.removeEventListener("flame-milestone-50", handler);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Flash + radial burst */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 via-rose-300/30 to-fuchsia-400/40 animate-flame-flash" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 animate-flame-message">
          <div className="text-6xl sm:text-7xl mb-4">💋💄❤️</div>
          <div className="text-2xl sm:text-4xl font-display font-black text-rose-600 drop-shadow-lg">
            50 Flammen erreicht!
          </div>
          <div className="mt-3 text-base sm:text-lg font-bold text-rose-700/90 max-w-md mx-auto">
            Emin wird von Rabia geschminkt. Askim, dann darfst du mich schminken wie du willst 💖
          </div>
        </div>
      </div>

      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] animate-flame-rise will-change-transform"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // @ts-expect-error CSS custom props
            "--drift": `${p.drift}px`,
            "--rotate": `${p.rotate}deg`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
