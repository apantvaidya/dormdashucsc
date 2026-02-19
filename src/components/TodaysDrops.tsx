import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { dropTimes } from "@/data/menuData";

function getTimeUntil(cutoffHour: number) {
  const now = new Date();
  const cutoff = new Date();
  cutoff.setHours(cutoffHour, 0, 0, 0);
  if (cutoff <= now) return null;
  const diff = cutoff.getTime() - now.getTime();
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { hours, minutes, seconds };
}

export default function TodaysDrops() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Today's Drops
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Order before the cutoff and pick up your food fresh at the scheduled time.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {dropTimes.map((dt) => {
            const remaining = getTimeUntil(dt.cutoffHour);
            const isOpen = remaining !== null;
            return (
              <div
                key={dt.id}
                className={`rounded-2xl border-2 p-6 text-center transition-colors ${
                  isOpen ? "border-primary bg-primary/5" : "border-border bg-muted/50"
                }`}
              >
                <Clock className={`h-8 w-8 mx-auto mb-3 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                <h3 className="font-display text-2xl font-bold mb-1">{dt.time}</h3>
                <p className="text-sm text-muted-foreground mb-3">{dt.label}</p>
                {isOpen ? (
                  <div className="bg-primary/10 rounded-lg px-3 py-2">
                    <p className="text-xs text-muted-foreground">Order cutoff in</p>
                    <p className="font-display font-bold text-primary text-lg">
                      {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
                    </p>
                  </div>
                ) : (
                  <span className="inline-block bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Closed
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
