export function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        borderColor: "var(--color-border)",
      }}
      aria-label="Rodape"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

        <div
          className="font-display text-xl uppercase tracking-widest mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          +100 Treinos de Futevolei
        </div>

        <p
          className="text-sm mb-4"
          style={{ color: "rgba(250,250,247,0.35)" }}
        >
          2026 Todos os direitos reservados.
        </p>

        <nav aria-label="Links legais">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="/privacidade"
              className="text-sm footer-link"
            >
              Politica de Privacidade
            </a>
            <span style={{ color: "rgba(250,250,247,0.2)" }} aria-hidden="true">·</span>
            <a
              href="/termos"
              className="text-sm footer-link"
            >
              Termos de Uso
            </a>
            <span style={{ color: "rgba(250,250,247,0.2)" }} aria-hidden="true">·</span>
            <a
              href="mailto:contato@futvoleitreinos.com.br"
              className="text-sm footer-link"
            >
              Contato
            </a>
          </div>
        </nav>

      </div>

      <style>{`
        .footer-link {
          color: rgba(250,250,247,0.40);
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: #FAFAF7;
        }
      `}</style>
    </footer>
  );
}
