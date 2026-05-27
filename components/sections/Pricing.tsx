import { CheckCircle2, XCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CHECKOUT_URL_BASIC, CHECKOUT_URL_PREMIUM, PRICE_BASIC, PRICE_PREMIUM, PRICE_PREMIUM_FROM } from "@/lib/constants";

const basicFeatures = {
  included: [
    "100 treinos de Futevôlei",
    "Acesso pelo app",
    "Organização por nível",
    "Garantia de 30 dias",
  ],
  excluded: [
    "Sem bônus",
    "Sem atualizações mensais",
    "Sem treinos pra pouco aluno",
  ],
};

const premiumFeatures = [
  "+200 treinos completos",
  "Acesso pelo app",
  "Organização pelos 5 eixos de demanda",
  "BÔNUS 1: Aula com Pouco Aluno (R$67)",
  "BÔNUS 2: 40 Dinâmicas pra Engajar (R$47)",
  "BÔNUS 3: Pack Aula Tema (R$37)",
  "BÔNUS 4: Atualizações Vitalícias (R$97)",
  "Garantia de 30 dias",
];

export function Pricing() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
      aria-label="Planos e preços"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Headline */}
        <RevealOnScroll>
          <div className="text-center mb-4">
            <h2
              className="font-display uppercase mb-3"
              style={{
                fontSize: "clamp(28px, 4.5vw, 52px)",
                color: "var(--color-text-light)",
                lineHeight: 1.1,
              }}
            >
              Escolha seu plano:
            </h2>
            <p className="text-base" style={{ color: "rgba(250,250,247,0.55)" }}>
              Mais de 70% dos professores escolhem o Premium pelo stack de bônus.
            </p>
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-start">

          {/* ─── Card Básico ─── */}
          <RevealOnScroll delay={100}>
            <div
              className="rounded-2xl p-8 h-full"
              style={{
                backgroundColor: "var(--color-bg-card-dark)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="mb-6">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] block mb-3"
                  style={{ color: "rgba(250,250,247,0.45)" }}
                >
                  Plano Básico
                </span>
                <div
                  className="font-display text-5xl mb-1"
                  style={{ color: "var(--color-text-light)" }}
                >
                  {PRICE_BASIC}
                </div>
                <div className="text-sm" style={{ color: "rgba(250,250,247,0.45)" }}>
                  pagamento único · acesso vitalício
                </div>
              </div>

              {/* Inclusos */}
              <ul className="space-y-3 mb-4" role="list">
                {basicFeatures.included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--color-success)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-text-light)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Não inclusos */}
              <ul className="space-y-3 mb-8" role="list">
                {basicFeatures.excluded.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <XCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--color-muted)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-muted)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline-dark" size="md" href={CHECKOUT_URL_BASIC} fullWidth>
                Quero o Básico
              </Button>
            </div>
          </RevealOnScroll>

          {/* ─── Card Premium ─── */}
          <RevealOnScroll delay={200}>
            <div
              className="rounded-2xl p-8 relative"
              style={{
                backgroundColor: "var(--color-bg-card-dark)",
                border: "2px solid var(--color-accent)",
                boxShadow: "0 0 40px rgba(255,107,26,0.12)",
                transform: "scale(1.02)",
                transformOrigin: "center",
              }}
            >
              {/* Badge "MAIS ESCOLHIDO" */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-dark)",
                }}
                aria-label="Plano mais escolhido"
              >
                <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                Mais Escolhido
              </div>

              <div className="mb-6 mt-2">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] block mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  Plano Premium
                </span>
                <div className="text-sm line-through mb-1" style={{ color: "rgba(250,250,247,0.35)" }}>
                  De {PRICE_PREMIUM_FROM}
                </div>
                <div
                  className="font-display text-5xl mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {PRICE_PREMIUM}
                </div>
                <div className="text-sm" style={{ color: "rgba(250,250,247,0.45)" }}>
                  pagamento único · acesso vitalício
                </div>
              </div>

              <ul className="space-y-3 mb-8" role="list">
                {premiumFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--color-success)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-text-light)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="lg" href={CHECKOUT_URL_PREMIUM} fullWidth>
                Quero o Premium
              </Button>
            </div>
          </RevealOnScroll>

        </div>

        {/* Linha de pressão */}
        <RevealOnScroll delay={400}>
          <p
            className="text-center text-base sm:text-lg mt-8 font-medium"
            style={{ color: "rgba(250,250,247,0.5)" }}
          >
            Por menos do que você cobra em uma aula, você nunca mais fica sem treino pronto.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
}
