import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07080a]">
      <div className="grid gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <img src="/brand/mark.png" alt="Maquiflex" className="mark-foot" />
          <p className="mt-4 max-w-xs text-sm text-white/60">Envases flexíveis. Engenharia própria em Monte Alto/SP.</p>
        </div>
        <div className="text-sm">
          <p className="tech text-[11px] text-white/40">Mapa</p>
          <div className="mt-3 grid gap-2">
            <Link href="/maquina">MF480Q</Link>
            <Link href="/embalagens">Formatos de pouch</Link>
            <Link href="/engenharia">Fábrica e pós-venda</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="tech text-[11px] text-white/40">Onde</p>
          <p className="mt-3 text-white/75">Av. Wilson Folador, 2421<br />Monte Alto/SP</p>
          <a className="mt-2 inline-block" href="mailto:contato@maquiflex.com.br">contato@maquiflex.com.br</a>
        </div>
      </div>
    </footer>
  );
}
