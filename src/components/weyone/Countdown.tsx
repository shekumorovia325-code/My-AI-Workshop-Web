import { useEffect, useMemo, useState } from "react";

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

/** Next session start: the upcoming Saturday or Sunday at 10:00 AM IST. */
function nextSessionStart(now: Date): { date: Date; day: "Saturday" | "Sunday" } {
  for (let i = 0; i <= 8; i++) {
    const ist = new Date(now.getTime() + IST_OFFSET_MS);
    const probe = new Date(ist);
    probe.setUTCDate(ist.getUTCDate() + i);
    const dow = probe.getUTCDay();
    if (dow !== 6 && dow !== 0) continue;
    const startIst = Date.UTC(
      probe.getUTCFullYear(),
      probe.getUTCMonth(),
      probe.getUTCDate(),
      10,
      0,
      0,
    );
    const startUtc = new Date(startIst - IST_OFFSET_MS);
    if (startUtc.getTime() > now.getTime()) {
      return { date: startUtc, day: dow === 6 ? "Saturday" : "Sunday" };
    }
  }
  return { date: new Date(now.getTime() + 7 * 86400000), day: "Saturday" };
}

export function Countdown() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const next = useMemo(() => (now ? nextSessionStart(now) : null), [now]);

  const parts = useMemo(() => {
    if (!now || !next) return null;
    const diff = Math.max(0, next.date.getTime() - now.getTime());
    return {
      Days: Math.floor(diff / 86400000),
      Hours: Math.floor((diff / 3600000) % 24),
      Minutes: Math.floor((diff / 60000) % 60),
      Seconds: Math.floor((diff / 1000) % 60),
    };
  }, [now, next]);

  return (
    <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Next session starts in
      </p>
      <p className="mt-2 font-display text-lg font-semibold">
        {next ? `${next.day} · 10:00 AM IST` : "Saturday · 10:00 AM IST"}
      </p>

      <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4" aria-live="polite">
        {(["Days", "Hours", "Minutes", "Seconds"] as const).map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-ink-foreground/15 bg-ink/50 px-2 py-4 text-center"
          >
            <span className="block font-display text-2xl font-bold tabular-nums sm:text-4xl">
              {parts ? String(parts[label]).padStart(2, "0") : "--"}
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-widest text-ink-foreground/60 sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm text-ink-foreground/75">
        Sessions run both days: Saturday 10:00 AM – 4:00 PM IST and Sunday 10:00 AM – 4:00 PM IST.
      </p>
    </div>
  );
}