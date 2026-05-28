import Image from "next/image";
import { BookOpen, Layers, Smartphone, Printer, Infinity, Gift } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const included = [
  { icon: <BookOpen className="w-5 h-5" />, text: "+100 Treinos Completos de Futevôlei", value: "Valor R$197" },
  { icon: <Layers className="w-5 h-5" />, text: "Organização por 5 Eixos de Demanda", value: "" },
  { icon: <Smartphone className="w-5 h-5" />, text: "Acesso pelo App — Celular, tablet ou desktop", value: "" },
  { icon: <Printer className="w-5 h-5" />, text: "Treinos Imprimíveis em 1 Página A4 — Pra usar na areia sem celular", value: "" },
  { icon: <Infinity className="w-5 h-5" />, text: "Acesso Vitalício", value: "" },
];

const bonuses = [
  {
    title: 'Pacote "Aula com Pouco Aluno"',
    desc: "30 treinos pra turmas de 1-3 pessoas.",
    value: "R$67",
  },
  {
    title: "40 Dinâmicas Pra Engajar e Divertir",
    desc: "Quebra-gelos, gincanas e desafios que viralizam nos stories dos alunos.",
    value: "R$47",
  },
  {
    title: 'Pack "Aula Tema"',
    desc: "20 treinos temáticos pra datas comemorativas (festa junina, dia dos pais, virada de ano).",
    value: "R$37",
  },
  {
    title: "Atualizações Mensais Vitalícias",
    desc: "Novos treinos no app todo mês, pra sempre.",
    value: "R$97",
  },
];

export function Bonuses() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
      aria-label="O que você recebe"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Headline */}
        <RevealOnScroll>
          <h2
            className="font-display uppercase text-center mb-10"
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              color: "var(--color-text-light)",
              lineHeight: 1.1,
            }}
          >
            Olha tudo que você leva hoje:
          </h2>
        </RevealOnScroll>

        {/* Card principal — O que você recebe */}
        <RevealOnScroll delay={100}>
          <div
            className="rounded-2xl p-8 sm:p-10 mb-10"
            style={{
              backgroundColor: "var(--color-bg-card-dark)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="font-display uppercase text-lg mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Você recebe no acesso:
            </h3>
            <ul className="space-y-4 mb-8" role="list">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span style={{ color: "var(--color-text-light)" }}>{item.text}</span>
                    {item.value && (
                      <span
                        className="ml-2 text-sm font-semibold line-through"
                        style={{ color: "#ef4444" }}
                      >
                        — {item.value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mockup do app */}
            <div className="flex justify-center">
              <Image
                src="/mockup treinos ftv.png"
                alt="Interface do app +200 Treinos de Futevôlei"
                width={220}
                height={440}
                className="h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* Bônus */}
        <RevealOnScroll delay={200}>
          <div className="text-center mb-8">
            <span
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: "var(--color-accent)" }}
            >
              + Bônus Exclusivos do Plano Premium
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {bonuses.map((bonus, i) => (
            <RevealOnScroll key={i} delay={200 + i * 80}>
              <div
                className="rounded-xl p-6 flex gap-4 h-full"
                style={{
                  backgroundColor: "var(--color-bg-card-dark)",
                  border: "1px solid rgba(255,107,26,0.15)",
                }}
              >
                <Gift
                  className="w-6 h-6 flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <div>
                  <div
                    className="font-bold text-sm sm:text-base mb-1"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {bonus.title}
                  </div>
                  <div
                    className="text-sm mb-2"
                    style={{ color: "rgba(250,250,247,0.6)" }}
                  >
                    {bonus.desc}
                  </div>
                  <div
                    className="text-sm font-bold line-through"
                    style={{ color: "#ef4444" }}
                  >
                    Valor: {bonus.value}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Ancoragem de valor */}
        <RevealOnScroll delay={500}>
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: "rgba(255,107,26,0.08)",
              border: "1px solid rgba(255,107,26,0.3)",
            }}
          >
            <p
              className="text-base mb-2"
              style={{ color: "rgba(250,250,247,0.55)" }}
            >
              Valor total dos bônus:{" "}
              <span className="line-through font-semibold" style={{ color: "#ef4444" }}>R$248</span>
            </p>
            <p
              className="font-display uppercase"
              style={{
                fontSize: "clamp(22px, 3.5vw, 38px)",
                color: "var(--color-text-light)",
                lineHeight: 1.2,
              }}
            >
              Você leva tudo por{" "}
              <span style={{ color: "var(--color-accent)" }}>R$37,90</span>
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
