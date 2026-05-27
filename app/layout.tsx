import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "+100 Treinos de FutVôlei | Aulas Prontas Pra Professores",
  description:
    "Pare de inventar exercício às 22h. +100 treinos de futvôlei prontos, organizados por demanda. Pra professor que quer aula engajada e aluno fiel.",
  keywords: ["futvôlei", "treinos", "professor", "arena", "aula pronta", "futebol de praia"],
  openGraph: {
    title: "+100 Treinos de FutVôlei | Aulas Prontas Pra Professores",
    description:
      "Pare de inventar exercício às 22h. +100 treinos de futvôlei prontos, organizados por demanda. Pra professor que quer aula engajada e aluno fiel.",
    type: "website",
    locale: "pt_BR",
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable}`}>
      <head>
        {/* Meta Pixel — substituir PIXEL_ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){...}('PIXEL_ID');` }} /> */}

        {/* Google Tag Manager (opcional) */}
        {/* <script src="https://www.googletagmanager.com/gtag/js?id=GTM-XXXXXX" async /> */}

        {/* Hotjar (opcional para heatmap) */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(h,o,t,j,a,r){...})(window,document,'https://static.hotjar.com/c/hotjar-XXXXXX.js')` }} /> */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
