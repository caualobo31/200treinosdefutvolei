import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Identification } from "@/components/sections/Identification";

// Seções abaixo do fold — carregadas com lazy loading de JS
const InsideApp     = dynamic(() => import("@/components/sections/InsideApp").then(m => ({ default: m.InsideApp })));
const OrganizedBy   = dynamic(() => import("@/components/sections/OrganizedBy").then(m => ({ default: m.OrganizedBy })));
const BreakSection  = dynamic(() => import("@/components/sections/BreakSection").then(m => ({ default: m.BreakSection })));
const Bonuses       = dynamic(() => import("@/components/sections/Bonuses").then(m => ({ default: m.Bonuses })));
const Testimonials  = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const Pricing       = dynamic(() => import("@/components/sections/Pricing").then(m => ({ default: m.Pricing })));
const Guarantee     = dynamic(() => import("@/components/sections/Guarantee").then(m => ({ default: m.Guarantee })));
const FAQ           = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const Footer        = dynamic(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

export default function Page() {
  return (
    <main>
      <Hero />
      <Identification />
      <InsideApp />
      <OrganizedBy />
      <BreakSection />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
