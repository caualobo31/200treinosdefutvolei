import { BarChart3, Users, Clock, Target, CloudSun } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const cards = [
  {
    icon: <BarChart3 className="w-12 h-12" aria-hidden="true" />,
    title: "Por Nível do Aluno",
    desc: "Iniciante, intermediário, avançado e o santo graal: turma mista.",
  },
  {
    icon: <Users className="w-12 h-12" aria-hidden="true" />,
    title: "Por Tamanho da Turma",
    desc: "De aula individual a turma cheia de 12. Filtre o que cabe na sua quadra.",
  },
  {
    icon: <Clock className="w-12 h-12" aria-hidden="true" />,
    title: "Por Tempo de Aula",
    desc: "30, 45, 60 ou 90 minutos. Você tem o tempo, a gente entrega o treino.",
  },
  {
    icon: <Target className="w-12 h-12" aria-hidden="true" />,
    title: "Por Objetivo da Aula",
    desc: "Fundamento isolado, técnica geral, tático, condicionamento ou jogo.",
  },
  {
    icon: <CloudSun className="w-12 h-12" aria-hidden="true" />,
    title: "Por Cenário",
    desc: "Chuva, vento, calor, areia molhada, aluno novo, pré-torneio. Pra cada dia, um treino.",
  },
];

export function OrganizedBy() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
      aria-label="Como o app é organizado"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Eyebrow + Headline */}
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span
              className="text-sm font-bold uppercase tracking-[0.25em] mb-4 block"
              style={{ color: "var(--color-accent)" }}
            >
              Nosso Diferencial
            </span>
            <h2
              className="font-display uppercase mb-5"
              style={{
                fontSize: "clamp(26px, 4vw, 48px)",
                color: "var(--color-text-light)",
                lineHeight: 1.1,
              }}
            >
              Não é organizado por exercício.
              <br />É organizado por{" "}
              <span style={{ color: "var(--color-accent)" }}>demanda real.</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(250,250,247,0.65)" }}
            >
              Porque professor de futevôlei não pensa só em exercício de recepção. Ele pensa: o que eu aplico amanhã com 4 alunos, níveis diferentes e só 45 minutos?
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid 3+2 desktop */}
        <div className="flex flex-col gap-5">
          {/* Primeira linha — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.slice(0, 3).map((card, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <FeatureCard card={card} />
              </RevealOnScroll>
            ))}
          </div>
          {/* Segunda linha — 2 cards centralizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:max-w-2xl lg:mx-auto w-full">
            {cards.slice(3).map((card, i) => (
              <RevealOnScroll key={i} delay={(i + 3) * 100}>
                <FeatureCard card={card} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Linha de fechamento */}
        <RevealOnScroll delay={400}>
          <p
            className="text-center text-base sm:text-lg font-semibold mt-12 max-w-2xl mx-auto"
            style={{ color: "rgba(250,250,247,0.75)" }}
          >
            Os filtros se combinam. Você escolhe 3 ou 4 critérios e o app entrega
            só o que se encaixa.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
}

function FeatureCard({ card }: { card: typeof cards[0] }) {
  return (
    <div
      className="rounded-2xl p-8 h-full transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--color-bg-card-dark)",
        border: "1px solid rgba(255,107,26,0.2)",
      }}
    >
      <div
        className="mb-5"
        style={{ color: "var(--color-accent)" }}
      >
        {card.icon}
      </div>
      <h3
        className="font-display uppercase text-xl mb-3"
        style={{ color: "var(--color-text-light)" }}
      >
        {card.title}
      </h3>
      <p
        className="text-base leading-relaxed"
        style={{ color: "rgba(250,250,247,0.65)" }}
      >
        {card.desc}
      </p>
    </div>
  );
}
