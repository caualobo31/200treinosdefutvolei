"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_URL_PREMIUM } from "@/lib/constants";

const faqs = [
  {
    q: "Como recebo o acesso?",
    a: "Assim que o pagamento for confirmado, você recebe um e-mail com login e senha pra acessar a plataforma. Demora menos de 2 minutos.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. A plataforma é otimizada pra celular, tablet e desktop. Você acessa de onde quiser.",
  },
  {
    q: "Preciso de internet pra abrir os treinos?",
    a: "Pra carregar a primeira vez, sim. Mas todos os treinos podem ser baixados em PDF e impressos em 1 página A4 — perfeito pra usar na areia sem sinal.",
  },
  {
    q: "Os treinos servem pra arena coberta ou quadra de areia indoor?",
    a: "Sim. O filtro \"Por Cenário\" tem categoria específica pra arena coberta, espaço reduzido, areia molhada e outros contextos.",
  },
  {
    q: "Funciona pra escolinha infantil?",
    a: "Funciona, sim. Temos treinos adaptados pra iniciantes totais, incluindo crianças. E no Bônus 2 (Premium) você recebe 40 dinâmicas lúdicas perfeitas pra essa faixa.",
  },
  {
    q: "Sou iniciante como professor, dá pra usar?",
    a: "Esse é exatamente o público pra quem o método foi pensado. Cada treino vem com instruções claras de execução, tempo sugerido e variações.",
  },
  {
    q: "Já dou aula há anos, vou aprender alguma coisa nova?",
    a: "A proposta não é te ensinar a dar aula — é te dar repertório organizado pra você não repetir exercício e parar de gastar 1h planejando toda semana. Mesmo professor experiente economiza tempo.",
  },
  {
    q: "As atualizações mensais são por quanto tempo?",
    a: "Pra sempre. Enquanto o produto existir, você recebe os novos treinos sem pagar nada a mais.",
  },
  {
    q: "Posso imprimir os treinos?",
    a: "Sim. Todo treino tem versão imprimível em 1 página A4.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 15 dias de garantia incondicional. Não precisa justificar. Manda um e-mail e devolvemos 100% do valor.",
  },
  {
    q: "Qual a diferença entre o Básico e o Premium?",
    a: "Básico: 100 treinos + organização por nível. Premium: 200 treinos + 4 bônus + organização pelos 5 eixos de demanda + atualizações vitalícias. A diferença de preço (R$20) é a mesma de uma água de coco.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* Headline */}
        <RevealOnScroll>
          <h2
            className="font-display uppercase text-center mb-12"
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              color: "var(--color-text-light)",
              lineHeight: 1.1,
            }}
          >
            Perguntas frequentes
          </h2>
        </RevealOnScroll>

        {/* Accordion */}
        <dl className="space-y-3 mb-14">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <RevealOnScroll key={i} delay={i * 40}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-bg-card-dark)",
                    border: `1px solid ${isOpen ? "rgba(255,107,26,0.35)" : "var(--color-border)"}`,
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <dt>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <span
                        className="font-semibold text-base sm:text-lg"
                        style={{ color: "var(--color-text-light)" }}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                        style={{
                          color: "var(--color-accent)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    style={{
                      maxHeight: isOpen ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div
                      className="px-6 pb-5 text-base leading-relaxed"
                      style={{ color: "rgba(250,250,247,0.65)" }}
                    >
                      {faq.a}
                    </div>
                  </dd>
                </div>
              </RevealOnScroll>
            );
          })}
        </dl>

        {/* CTA final */}
        <RevealOnScroll delay={300}>
          <div className="text-center">
            <Button variant="primary" size="lg" href="#pricing">
              Quero começar agora
            </Button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
