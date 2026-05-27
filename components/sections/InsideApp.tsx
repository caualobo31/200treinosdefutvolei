"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CHECKOUT_URL_PREMIUM } from "@/lib/constants";

const screens = [
  {
    title: "O que você precisa hoje?",
    label: "Tela inicial: 5 filtros principais sempre à mão.",
    color: "#3B82F6",
    items: ["Por Nível", "Por Tamanho", "Por Tempo", "Por Objetivo", "Por Cenário"],
  },
  {
    title: "Turma mista + 45min + Iniciante",
    label: "Combine filtros e veja só os treinos que se encaixam.",
    color: "#10B981",
    items: ["12 treinos encontrados", "Turma mista ✓", "45 min ✓", "Iniciante ✓"],
  },
  {
    title: "Treino #47 — Futvôlei Dinâmico",
    label: "Cada treino tem aquecimento, parte técnica, tática e jogo.",
    color: "#F59E0B",
    items: ["Aquecimento (8min)", "Técnico (15min)", "Tático (12min)", "Jogo livre (10min)"],
  },
  {
    title: "Sortear Treino do Dia",
    label: "Sem ideia? Toca em \"Sortear Treino do Dia\" e pronto.",
    color: "#FF6B1A",
    items: ["Treino #83 sorteado!", "Nível: Intermediário", "Tempo: 60min", "4-8 alunos"],
  },
];

export function InsideApp() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="demo-app"
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-sand)" }}
      aria-label="Por dentro do app"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Cabeçalho */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2
              className="font-display uppercase mb-4"
              style={{
                fontSize: "clamp(28px, 4.5vw, 52px)",
                color: "var(--color-text-dark)",
                lineHeight: 1.1,
              }}
            >
              Por dentro do app: filtre, escolha, aplique.
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(13,13,13,0.65)" }}
            >
              Não é PDF gigante. Não é vídeo solto no YouTube. É um app onde você acha
              o treino certo em 30 segundos.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid desktop / Carrossel mobile */}
        {/* Desktop: 2x2 */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-10">
          {screens.map((screen, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <AppScreenCard screen={screen} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile: carrossel */}
        <div className="md:hidden">
          <div className="overflow-hidden mb-5">
            <AppScreenCard screen={screens[activeSlide]} />
          </div>
          {/* Bolinhas de paginação */}
          <div className="flex justify-center gap-2" role="tablist" aria-label="Slides do app">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Ver tela ${i + 1}`}
                className="rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: i === activeSlide ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === activeSlide
                      ? "var(--color-text-dark)"
                      : "rgba(13,13,13,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <RevealOnScroll delay={300}>
          <div className="text-center mt-10">
            <Button variant="outline-sand" size="lg" href={CHECKOUT_URL_PREMIUM}>
              Quero testar o app
            </Button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

function AppScreenCard({ screen }: { screen: typeof screens[0] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: "#fff",
        borderColor: "rgba(13,13,13,0.12)",
      }}
    >
      {/* Barra do "app" */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ backgroundColor: screen.color }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-white opacity-70" />
        <span className="text-xs font-bold text-white uppercase tracking-wider truncate">
          {screen.title}
        </span>
      </div>
      {/* Conteúdo */}
      <div className="p-4">
        {screen.items.map((item, j) => (
          <div
            key={j}
            className="flex items-center gap-3 py-2 border-b last:border-b-0 text-sm"
            style={{
              borderColor: "rgba(13,13,13,0.08)",
              color: "var(--color-text-dark)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: screen.color }}
              aria-hidden="true"
            />
            {item}
          </div>
        ))}
      </div>
      {/* Legenda */}
      <div
        className="px-4 py-3 text-sm font-medium"
        style={{
          backgroundColor: "rgba(13,13,13,0.04)",
          color: "rgba(13,13,13,0.6)",
        }}
      >
        {/* Substituir por imagem real: /public/images/app-screen-{index+1}.png */}
        {screen.label}
      </div>
    </div>
  );
}
