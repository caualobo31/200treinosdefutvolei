import { Button } from "@/components/ui/Button";
import { CHECKOUT_URL_PREMIUM } from "@/lib/constants";

export function BreakSection() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-accent)" }}
      aria-label="Chamada de ação"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">

        <h2
          className="font-display uppercase mb-5"
          style={{
            fontSize: "clamp(30px, 5vw, 60px)",
            color: "var(--color-text-dark)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          Pronto pra nunca mais ficar sem aula pronta?
        </h2>

        <p
          className="text-lg sm:text-xl font-medium mb-8"
          style={{ color: "rgba(13,13,13,0.75)" }}
        >
          Acesso imediato. Funciona no celular. Sem mensalidade.
        </p>

        <Button variant="black" size="lg" href={CHECKOUT_URL_PREMIUM}>
          Quero meu acesso agora
        </Button>

      </div>
    </section>
  );
}
