import Link from "next/link";
import { Stations } from "@/components/stations";
import { Pouches } from "@/components/pouches";
import { Reveal } from "@/components/reveal";

const ticker = ["MF480Q", "220 ppm", "DIN 8743", "Aço inoxidável", "Quadriplex", "Monte Alto", "Pouch Lab", "Pós-venda local"];

export default function HomePage() {
  return (
    <main>
      <section className="frame relative flex min-h-svh items-end overflow-hidden bg-black">
        <video className="absolute inset-0 h-full w-full object-cover" src="/media/video/formacao.mp4" poster="/media/linha.jpg" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-black/75 to-black/20" />
        <div className="relative z-10 w-full px-6 pb-12 pt-36 md:px-10">
          <p className="tech text-[11px] text-white/70">Monte Alto · SP · plataforma nacional</p>
          <h1 className="display mt-4 max-w-6xl text-[clamp(3.4rem,8.6vw,8.2rem)] text-white">
            O envase,<br />no ritmo da linha.
          </h1>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-md text-lg text-white/75">A MF480Q forma, dosa e sela a partir da bobina. Até 220 embalagens por minuto, em aço inoxidável.</p>
            <div className="flex gap-3">
              <Link href="/maquina" className="btn bg-white px-5 py-3 text-sm font-semibold text-black">Ver a MF480Q</Link>
              <Link href="/contato" className="btn border border-white/50 px-5 py-3 text-sm text-white hover:bg-white hover:text-black">Pedir um diagnóstico</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee bg-[#07080a] text-white/70" aria-hidden="true">
        <div className="marquee-track tech text-[11px]">
          {[...ticker, ...ticker].map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>

      <section className="bg-[#f4f6f8] text-[#12151b]">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <img src="/media/linha.jpg" alt="Linha completa da MF480Q em estúdio" className="h-[560px] w-full bg-white object-cover object-bottom" />
          <div className="flex flex-col justify-between px-6 py-14 md:px-12">
            <div>
              <p className="tech text-[11px] text-[#202847]">01 — A linha</p>
              <h2 className="display mt-4 text-[clamp(3rem,6vw,4.6rem)]">Quatorze metros de engenharia própria.</h2>
            </div>
            <div className="mt-10">
              <p className="max-w-md text-lg">Quadriplex nos formatos rápidos. Duplex quando o pouch cresce. Eficiência mínima de 95% pela DIN 8743.</p>
              <Link href="/maquina" className="link-line mt-6 inline-block pb-1 text-sm font-semibold">Abrir a ficha técnica</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07080a] px-6 py-20 md:px-10">
        <Reveal>
        <p className="tech text-[11px] text-white/40">02 — Trajetória</p>
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <p className="display text-7xl text-white md:col-span-5 md:text-8xl">+46</p>
          <p className="self-end text-lg text-white/65 md:col-span-7">anos somados de quem construiu linha Volpak e manteve máquina Mespack no Brasil. Hoje isso é fábrica em Monte Alto: 1.200 m², oito células de montagem e expansão prevista para 4.000 m².</p>
        </div>
        <div className="mt-14 grid border-t border-white/15 md:grid-cols-3">
          {[["+150", "máquinas vendidas"], ["+100", "instaladas"], ["100%", "plataforma nacional"]].map(([n, l]) => (
            <div key={l} className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <p className="display text-5xl text-white">{n}</p>
              <p className="mt-2 text-white/55">{l}</p>
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      <Stations />
      <Pouches />

      <section className="bg-[#202847] px-6 py-24 text-white md:px-10">
        <p className="tech text-[11px] text-white/60">06 — Próximo passo</p>
        <h2 className="display mt-4 max-w-4xl text-6xl md:text-8xl">Diga o produto. O pouch. A meta.</h2>
        <Link href="/contato" className="btn mt-10 bg-white px-6 py-3 text-sm font-semibold text-[#202847]">Falar com a engenharia</Link>
      </section>
    </main>
  );
}
