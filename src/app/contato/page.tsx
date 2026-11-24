"use client";

import { FormEvent, useState } from "react";

export default function ContatoPage() {
  const [sent, setSent] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Diagnóstico Maquiflex",
      "Empresa: " + data.get("empresa"),
      "Nome: " + data.get("nome"),
      "Produto: " + data.get("produto"),
      "Pouch: " + data.get("pouch"),
      "Meta: " + data.get("ppm") + " ppm",
    ].join("\n");
    const href = "mailto:contato@maquiflex.com.br?subject=" + encodeURIComponent("Diagnóstico técnico") + "&body=" + encodeURIComponent(text);
    setSent(href);
    window.location.href = href;
  }

  return (
    <main className="bg-[#f3f5f7] pt-32 text-[#141820]">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2">
        <div>
          <p className="tech text-[11px] text-[#202847]">Contato</p>
          <h1 className="display mt-2 text-6xl">O briefing já sai escrito.</h1>
          <p className="mt-4 text-lg">Av. Wilson Folador, 2421, Monte Alto/SP. A mensagem leva produto, formato e meta de produção para contato@maquiflex.com.br.</p>
        </div>
        <form onSubmit={submit} className="grid gap-3 bg-white p-5">
          <input name="empresa" required placeholder="Empresa" className="border border-black/10 px-3 py-3" />
          <input name="nome" required placeholder="Seu nome" className="border border-black/10 px-3 py-3" />
          <input name="produto" required placeholder="Produto (ex.: maionese, pó, grânulo)" className="border border-black/10 px-3 py-3" />
          <input name="pouch" required placeholder="Formato do pouch" className="border border-black/10 px-3 py-3" />
          <input name="ppm" required placeholder="Meta de ppm" className="border border-black/10 px-3 py-3" />
          <button className="btn bg-[#202847] px-4 py-3 text-white" type="submit">Abrir o e-mail</button>
          {sent && <p className="text-sm">Se o programa de e-mail não abriu, escreva para contato@maquiflex.com.br.</p>}
        </form>
      </section>
    </main>
  );
}
