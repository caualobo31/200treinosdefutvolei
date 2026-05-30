"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    text: "Eu sempre acabava repetindo os mesmos exercícios. Com esse material, consegui variar a aula sem perder tempo pensando no que aplicar.",
    name: "Rafael M.",
    role: "Professor de Futevôlei",
  },
  {
    text: "O que mais gostei foi a organização. Dá pra escolher o treino pelo nível da turma e adaptar rápido para a aula do dia.",
    name: "Bruno C.",
    role: "Treinador de Arena",
  },
  {
    text: "Me ajudou principalmente nas turmas pequenas, quando eu tinha poucos alunos e ficava sem ideia do que fazer.",
    name: "Lucas A.",
    role: "Professor de Futevôlei",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg-sand)" }}
      aria-label="Depoimentos"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Headline */}
        <RevealOnScroll>
          <h2
            className="font-display uppercase text-center mb-5"
            style={{
              fontSize: "clamp(24px, 4vw, 46px)",
              color: "var(--color-text-dark)",
              lineHeight: 1.15,
            }}
          >
            Veja o que dizem:
          </h2>
        </RevealOnScroll>

        {/* Subtext */}
        <RevealOnScroll delay={100}>
          <p
            className="text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: "rgba(13,13,13,0.62)" }}
          >
            Seja o próximo professor a ter aulas novas sem esforço.
          </p>
        </RevealOnScroll>

        {/* ─── Desktop: 3 cards lado a lado ─── */}
        <div className="hidden md:grid grid-cols-3 gap-5 mb-10">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <TestimonialCard t={t} />
            </RevealOnScroll>
          ))}
        </div>

        {/* ─── Mobile: carrossel 1 card por vez ─── */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <TestimonialCard t={testimonials[active]} />

            {/* Setas */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-opacity duration-150 hover:opacity-80"
              style={{ backgroundColor: "var(--color-text-dark)", color: "var(--color-accent)" }}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-opacity duration-150 hover:opacity-80"
              style={{ backgroundColor: "var(--color-text-dark)", color: "var(--color-accent)" }}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bolinhas */}
          <div className="flex justify-center gap-2 mt-5" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Depoimento ${i + 1}`}
                className="rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === active ? "var(--color-text-dark)" : "rgba(13,13,13,0.25)",
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <RevealOnScroll delay={300}>
          <div className="text-center mt-4">
            <Button variant="primary" size="lg" href="#pricing">
              Quero meus treinos agora
            </Button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="rounded-2xl p-6 h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(13,13,13,0.10)",
        boxShadow: "0 2px 12px rgba(13,13,13,0.07)",
      }}
    >
      {/* Aspas decorativas */}
      <div
        className="font-display text-5xl leading-none mb-3 select-none"
        style={{ color: "var(--color-accent)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Texto */}
      <p
        className="text-base leading-relaxed flex-1 mb-6"
        style={{ color: "rgba(13,13,13,0.75)" }}
      >
        {t.text}
      </p>

      {/* Autor */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-dark)",
          }}
        >
          {t.name.charAt(0)}
        </div>
        <div>
          <div
            className="font-bold text-sm"
            style={{ color: "var(--color-text-dark)" }}
          >
            {t.name}
          </div>
          <div
            className="text-xs"
            style={{ color: "rgba(13,13,13,0.50)" }}
          >
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}
