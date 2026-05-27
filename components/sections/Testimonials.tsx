import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_URL_PREMIUM } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg-sand)" }}
      aria-label="Depoimentos"
    >
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">

        <RevealOnScroll>
          <h2
            className="font-display uppercase mb-6"
            style={{
              fontSize: "clamp(26px, 4vw, 46px)",
              color: "var(--color-text-dark)",
              lineHeight: 1.15,
            }}
          >
            Você está entre os primeiros professores a ter acesso
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <p
            className="text-lg mb-8"
            style={{ color: "rgba(13,13,13,0.65)" }}
          >
            Estamos no lançamento. Os primeiros depoimentos chegam nas próximas semanas
            — e com eles, o preço sobe. Quem entra agora pega o método na versão mais
            acessível.
          </p>
        </RevealOnScroll>

        {/* Espaço reservado para depoimentos futuros */}
        {/* 
          Substituir este bloco pelos prints dos depoimentos quando disponíveis.
          Usar carrossel horizontal com 3-5 cards.
          Imagens: /public/images/depoimento-1.png, depoimento-2.png, etc.
        */}
        <RevealOnScroll delay={250}>
          <div
            className="rounded-2xl p-8 mb-8 border-2 border-dashed"
            style={{
              borderColor: "rgba(13,13,13,0.2)",
              backgroundColor: "rgba(13,13,13,0.04)",
            }}
          >
            <p
              className="text-base font-medium italic"
              style={{ color: "rgba(13,13,13,0.45)" }}
            >
              Depoimentos de professores chegam em breve.
              <br />
              {/* Substituir por imagens reais de depoimentos */}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={350}>
          <Button variant="outline-sand" size="lg" href={CHECKOUT_URL_PREMIUM}>
            Quero meus resultados também
          </Button>
        </RevealOnScroll>

      </div>
    </section>
  );
}
