import { AlertCircle, ArrowDown } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const bullets = [
  "Abrir o caderno em branco as 22h da noite tentando montar a aula de amanha",
  "Sentir que ta dando o mesmo treino ha 3 semanas e ouvir aluno reclamar",
  "Olhar a turma chegando e pensar: o que eu faco com iniciante e avancado juntos?",
  "Ter aluno cancelando mensalidade sem dizer o motivo real (mas voce sabe)",
  "Ver outro professor da arena com a turma cheia e pensar: o que ele ta fazendo diferente?",
  "Inventar exercicio na hora porque esqueceu de planejar",
  "Repetir exercicio porque nao tem repertorio novo na manga",
];

export function Identification() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-alt-dark)" }}
      aria-label="Identificacao com o professor"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <RevealOnScroll>
          <h2
            className="font-display uppercase text-center mb-12"
            style={{
              fontSize: "clamp(26px, 4vw, 48px)",
              letterSpacing: "-0.01em",
              color: "var(--color-text-light)",
              lineHeight: 1.1,
            }}
          >
            Se voce e professor de futevôlei, provavelmente ja viveu isso:
          </h2>
        </RevealOnScroll>

        <ul className="space-y-4 mb-12" role="list">
          {bullets.map((text, i) => (
            <RevealOnScroll key={i} delay={i * 70}>
              <li className="flex items-start gap-4">
                <AlertCircle
                  className="flex-shrink-0 mt-0.5 w-5 h-5"
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-base sm:text-lg"
                  style={{ color: "rgba(250,250,247,0.80)" }}
                >
                  {text}
                </span>
              </li>
            </RevealOnScroll>
          ))}
        </ul>

        <RevealOnScroll delay={400}>
          <div
            className="font-display uppercase text-center py-6 px-6 rounded-xl mb-8"
            style={{
              fontSize: "clamp(20px, 3vw, 32px)",
              color: "var(--color-accent)",
              backgroundColor: "rgba(255,107,26,0.08)",
              border: "1px solid rgba(255,107,26,0.25)",
              lineHeight: 1.2,
            }}
          >
            Nao é falta de talento. É falta de repertório organizado.
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={500}>
          <div className="text-center">
            <a
              href="#demo-app"
              className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200"
              style={{ color: "var(--color-accent)" }}
              aria-label="Ver a solucao"
            >
              Me mostra a solucao
              <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
