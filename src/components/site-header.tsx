"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["A máquina", "/maquina"],
  ["Embalagens", "/embalagens"],
  ["Engenharia", "/engenharia"],
  ["Contato", "/contato"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#07080a]/88 backdrop-blur">
      <div className="flex h-24 items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Maquiflex" onClick={() => setOpen(false)}>
          <img src="/brand/mark.png" alt="" className="mark" />
        </Link>
        <nav className="hidden items-center gap-8 text-lg tracking-wide text-white/80 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="link-line hover:text-white">{label}</Link>
          ))}
          <Link href="/contato" className="btn border border-white/30 px-4 py-2 text-lg text-white hover:bg-white hover:text-black">Falar com a engenharia</Link>
        </nav>
        <button type="button" className="text-lg text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="grid gap-4 border-t border-white/10 px-5 py-5 text-xl md:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
