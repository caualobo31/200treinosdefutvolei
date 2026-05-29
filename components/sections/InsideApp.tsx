"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const examples = [
  {
    src: "/exemplo 1.png",
    alt: "Exemplo de treino do material — página 1",
    label: "Exemplo 1",
  },
  {
    src: "/exemplo 2.png",
    alt: "Exemplo de treino do material — página 2",
    label: "Exemplo 2",
  },
  {
    src: "/exemplo 3.png",
    alt: "Exemplo de treino do material — página 3",
    label: "Exemplo 3",
  },
];

export function InsideApp() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? examples.length - 1 : i - 1));
  const next = () => setActive((i) => (i === examples.length - 1 ? 0 : i + 1));

  return (
    <section
      id="demo-app"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg-sand)" }}
      aria-label="Por dentro do material"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* Cabeçalho */}
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2
              className="font-display uppercase mb-4"
              style={{
                fontSize: "clamp(26px, 4.5vw, 50px)",
                color: "var(--color-text-dark)",
                lineHeight: 1.1,
              }}
            >
              Por dentro do material: filtre, escolha, aplique.
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(13,13,13,0.65)" }}
            >
              Não é treino aleatório. Não é vídeo solto do YouTube. É um acervo completo
              onde você acha o treino certo em 30 segundos.
            </p>
          </div>
        </RevealOnScroll>

        {/* Carrossel */}
        <RevealOnScroll delay={150}>
          <div className="relative">

            {/* Imagem ativa */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl mx-auto"
              style={{ maxWidth: "480px" }}
            >
              <Image
                src={examples[active].src}
                alt={examples[active].alt}
                width={480}
                height={680}
                className="w-full h-auto object-cover"
                priority={active === 0}
              />
            </div>

            {/* Setas */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-5 w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-opacity duration-150 hover:opacity-80"
              style={{ backgroundColor: "var(--color-text-dark)", color: "var(--color-accent)" }}
              aria-label="Exemplo anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-5 w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-opacity duration-150 hover:opacity-80"
              style={{ backgroundColor: "var(--color-text-dark)", color: "var(--color-accent)" }}
              aria-label="Próximo exemplo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Bolinhas */}
          <div className="flex justify-center gap-2 mt-6 mb-10" role="tablist">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={ex.label}
                className="rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === active ? "var(--color-text-dark)" : "rgba(13,13,13,0.25)",
                }}
              />
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={300}>
          <div className="text-center">
            <Button variant="outline-sand" size="lg" href="#pricing">
              Quero meus treinos prontos
            </Button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
