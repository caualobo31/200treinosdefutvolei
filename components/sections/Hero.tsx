import { Zap, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_URL_PREMIUM } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
      aria-label="Hero principal"
    >
      {/* Background overlay com imagem de quadra */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          /* Placeholder Unsplash — substituir por /public/images/hero-bg.jpg quando disponível */
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1920&q=80')",
          opacity: 0.15,
        }}
        role="presentation"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ─── Coluna de texto ─── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border"
                style={{
                  color: "var(--color-accent)",
                  borderColor: "rgba(255,107,26,0.4)",
                  backgroundColor: "rgba(255,107,26,0.08)",
                }}
              >
                Para Professores de Futevôlei
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display uppercase leading-none mb-6"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                letterSpacing: "-0.02em",
                color: "var(--color-text-light)",
              }}
            >
              <span style={{ color: "var(--color-accent)" }}>+200 TREINOS</span>
              {" "}DE FUTEVÔLEI PRONTOS PARA VOCÊ NUNCA MAIS{" "}
              <span style={{ color: "var(--color-accent)" }}>REPETIR</span>
              {" "}A MESMA AULA
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{ color: "rgba(250,250,247,0.75)", lineHeight: 1.6 }}
            >
              Encontre em segundos o treino ideal por nível do aluno, tamanho da turma,
              tempo de aula, objetivo e cenário.
            </p>

            {/* CTA primário */}
            <div className="mb-6">
              <Button variant="primary" size="lg" href={CHECKOUT_URL_PREMIUM} fullWidth={false}>
                Quero meus +100 treinos
              </Button>
            </div>

            {/* Selos de confiança */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8">
              {[
                { icon: <Zap className="w-4 h-4" />, text: "Acesso Imediato" },
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Garantia de 30 Dias" },
                { icon: <Smartphone className="w-4 h-4" />, text: "Funciona no Celular" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "rgba(250,250,247,0.65)" }}
                >
                  <span style={{ color: "var(--color-accent)" }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* ─── Mockup do app ─── */}
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm xl:max-w-md">
            {/* Substituir por: <Image src="/images/hero-mockup.png" alt="Interface do app +100 Treinos com filtros de treino" /> */}
            <div
              className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border"
              style={{
                borderColor: "rgba(255,107,26,0.3)",
                backgroundColor: "var(--color-bg-card-dark)",
                aspectRatio: "9/18",
                maxWidth: "280px",
              }}
            >
              {/* Mock da tela do app */}
              <div className="p-4 h-full flex flex-col">
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-4 text-center"
                  style={{ color: "var(--color-accent)" }}
                >
                  +100 Treinos de Futevôlei
                </div>
                <div
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--color-text-light)" }}
                >
                  O que você precisa hoje?
                </div>
                {["Por Nível do Aluno", "Por Tamanho da Turma", "Por Tempo de Aula", "Por Objetivo", "Por Cenário"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-2.5 rounded-lg mb-2 text-sm"
                    style={{
                      backgroundColor: "rgba(255,107,26,0.1)",
                      border: "1px solid rgba(255,107,26,0.2)",
                      color: "var(--color-text-light)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {item}
                  </div>
                ))}
                <div
                  className="mt-auto text-center py-2.5 px-4 rounded-lg text-sm font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-text-dark)",
                  }}
                >
                  Sortear Treino do Dia
                </div>
              </div>
            </div>
            <p className="text-center text-xs mt-3" style={{ color: "rgba(250,250,247,0.35)" }}>
              {/* Substituir pelo mockup real quando disponível */}
              Preview do app (imagem definitiva em /public/images/hero-mockup.png)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
