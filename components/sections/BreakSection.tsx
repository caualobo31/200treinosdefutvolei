"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_URL_PREMIUM } from "@/lib/constants";

function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 999);
  const diff = midnight.getTime() - now.getTime();
  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { h, m, s };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function BreakSection() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    setTime(getTimeUntilMidnight());
    const interval = setInterval(() => {
      setTime(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-accent)" }}
      aria-label="Chamada de ação com contador"
    >
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">

        {/* Headline */}
        <h2
          className="font-display uppercase mb-5"
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            color: "var(--color-text-dark)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          Pronto pra nunca mais ficar sem aula pronta?
        </h2>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg font-medium mb-8"
          style={{ color: "rgba(13,13,13,0.72)" }}
        >
          Garanta agora a condição de lançamento: acesso imediato aos +100 treinos,
          pagamento único e bônus disponíveis somente enquanto o contador estiver ativo.
        </p>

        {/* Contador */}
        <div className="flex items-center justify-center gap-3 mb-8" aria-label="Contador regressivo até meia-noite" aria-live="polite">
          {[
            { value: pad(time.h), label: "horas" },
            { value: pad(time.m), label: "min" },
            { value: pad(time.s), label: "seg" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="font-display text-5xl sm:text-6xl leading-none px-4 py-3 rounded-xl min-w-[72px]"
                  style={{
                    backgroundColor: "var(--color-text-dark)",
                    color: "var(--color-accent)",
                  }}
                >
                  {value}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest mt-2"
                  style={{ color: "rgba(13,13,13,0.6)" }}
                >
                  {label}
                </span>
              </div>
              {i < 2 && (
                <span
                  className="font-display text-4xl sm:text-5xl mb-5"
                  style={{ color: "var(--color-text-dark)" }}
                  aria-hidden="true"
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-5">
          <Button variant="black" size="lg" href={CHECKOUT_URL_PREMIUM}>
            Quero meu acesso agora
          </Button>
        </div>

        {/* Trust line */}
        <p
          className="text-sm font-medium"
          style={{ color: "rgba(13,13,13,0.6)" }}
        >
          Acesso imediato • Consulte pelo celular • Sem mensalidade • Garantia de 15 dias
        </p>

      </div>
    </section>
  );
}
