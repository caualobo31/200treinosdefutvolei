import { ShieldCheck } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GUARANTEE_DAYS } from "@/lib/constants";

export function Guarantee() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
      aria-label="Garantia"
    >
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <div
            className="rounded-3xl p-10 sm:p-14 text-center"
            style={{
              backgroundColor: "var(--color-bg-sand)",
            }}
          >
            {/* Ícone circular */}
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 mx-auto"
              style={{
                backgroundColor: "rgba(255,107,26,0.12)",
                border: "2px solid rgba(255,107,26,0.3)",
              }}
            >
              <ShieldCheck
                className="w-10 h-10"
                style={{ color: "var(--color-accent)" }}
                aria-hidden="true"
              />
            </div>

            {/* Headline */}
            <h2
              className="font-display uppercase mb-6"
              style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                color: "var(--color-text-dark)",
                lineHeight: 1.15,
              }}
            >
              Garantia Incondicional de {GUARANTEE_DAYS} Dias
            </h2>

            {/* Texto */}
            <p
              className="text-base sm:text-lg mb-6 leading-relaxed"
              style={{ color: "rgba(13,13,13,0.72)" }}
            >
              Aplique os treinos por {GUARANTEE_DAYS} dias. Se você não sentir que sua
              aula virou outra coisa, que seu aluno tá mais engajado e que seu tempo
              de planejamento virou minutos em vez de horas — devolvemos cada centavo.
              Sem perguntas. Sem burocracia. É só responder um e-mail.
            </p>

            {/* Sub-texto */}
            <p
              className="text-sm font-semibold"
              style={{ color: "rgba(13,13,13,0.5)" }}
            >
              O risco é todo nosso. Você só precisa testar.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
