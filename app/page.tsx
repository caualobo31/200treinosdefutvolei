import { Hero } from "@/components/sections/Hero";
import { Identification } from "@/components/sections/Identification";
import { InsideApp } from "@/components/sections/InsideApp";
import { OrganizedBy } from "@/components/sections/OrganizedBy";
import { BreakSection } from "@/components/sections/BreakSection";
import { Bonuses } from "@/components/sections/Bonuses";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Identificação */}
      <Identification />

      {/* 3. Demo do App */}
      <InsideApp />

      {/* 4. Organizado por (Mecanismo Único) */}
      <OrganizedBy />

      {/* 5. Quebra CTA (fundo laranja) */}
      <BreakSection />

      {/* 6. Tudo que você vai receber + Bônus */}
      <Bonuses />

      {/* 7. Depoimentos (pré-lançamento) */}
      <Testimonials />

      {/* 8. Duas Ofertas (Pricing) */}
      <Pricing />

      {/* 9. Garantia */}
      <Guarantee />

      {/* 10. FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
